// DailyEnglish - 语音工具（云端 TTS + Web Speech API fallback）
// 优先使用云端 TTS（edge-tts Jenny 声音，自然亲切，类似豆包）
// 云端不可用时自动回退到浏览器内置语音合成
const Speech = {
  audio: null,          // Audio 对象用于播放云端 TTS 音频
  synth: window.speechSynthesis || null,
  rec: null,
  voices: [],
  queuedTimers: [],     // 排队朗读的定时器（便于一键停止）

  // 录音存档（MediaRecorder 录制麦克风音频）
  _mediaRecorder: null,   // MediaRecorder 实例
  _recChunks: [],         // 录音数据块
  _recStream: null,       // 麦克风 MediaStream（用于停止后释放）
  _lastRecordingUrl: '',  // 最近一次录音的 objectURL

  // 云端 TTS 配置
  ttsBase: '/tts',      // TTS API 端点
  voice: 'jenny',       // 默认语音（Jenny 女声，类似豆包）
  useCloudTTS: true,    // 是否使用云端 TTS
  _lastText: '',        // 记录上次朗读文本（用于 fallback）
  _lastRate: 1,         // 记录上次速率
  _cloudFailedCount: 0, // 云端失败计数（连续失败则禁用）
  // 预缓存：key = voice|rate|text → value = objectURL
  _cache: new Map(),
  _pending: new Map(),  // 进行中的请求（避免重复请求）
  _prefetchedVoice: null, // 已预缓存时所用的语音（切换语音后失效）

  // 可选语音列表
  voiceOptions: {
    jenny:  { id: 'jenny',  label: 'Jenny（女声·自然）',  edge: 'en-US-JennyNeural' },
    aria:   { id: 'aria',   label: 'Aria（女声·温暖）',   edge: 'en-US-AriaNeural' },
    guy:    { id: 'guy',    label: 'Guy（男声·自然）',    edge: 'en-US-GuyNeural' },
    davis:  { id: 'davis',  label: 'Davis（男声）',       edge: 'en-US-DavisNeural' },
    amber:  { id: 'amber',  label: 'Amber（女声）',       edge: 'en-US-AmberNeural' },
    emma:   { id: 'emma',   label: 'Emma（英式女声）',    edge: 'en-GB-EmmaNeural' },
    brian:  { id: 'brian',  label: 'Brian（英式男声）',   edge: 'en-GB-BrianNeural' },
  },

  init() {
    // 初始化 Audio 对象
    this.audio = new Audio();
    this.audio.preload = 'auto';

    // iOS Safari 音频 & 语音合成解锁：首次用户手势时
    // 1) 用独立 Audio 元素播放静音音频解锁 Audio 播放能力
    // 2) 用空 utterance "预热" speechSynthesis（iOS 首次 speak 偶发无声的已知修复）
    this._audioUnlocked = false;
    const unlock = () => {
      if (this._audioUnlocked) return;
      this._audioUnlocked = true;
      // 1) Audio 解锁
      try {
        const ua = new Audio();
        ua.volume = 0;
        ua.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
        const p = ua.play();
        if (p && typeof p.then === 'function') {
          p.then(() => { ua.pause(); }).catch(() => {});
        }
      } catch (e) {}
      // 2) Web Speech 预热（iOS Safari：首次 speak 前先读一个空串，避免真实朗读被吞）
      try {
        if (this.synth) {
          const warm = new SpeechSynthesisUtterance('');
          warm.volume = 0;
          this.synth.speak(warm);
        }
      } catch (e) {}
      console.log('[语音] iOS 音频/语音已解锁');
    };
    // 首次 touchend / click 解锁（用 * 捕获阶段确保最早触发）
    document.addEventListener('touchend', unlock, { once: true, capture: true });
    document.addEventListener('click', unlock, { once: true, capture: true });

    // 检测设备类型（安卓 Web Speech 不可靠，很多国产机无 Google TTS 引擎）
    const ua = navigator.userAgent || '';
    this.isAndroid = /Android/i.test(ua);
    this.isIOS = /iPhone|iPad|iPod/i.test(ua);

    // 检测环境：GitHub Pages 等纯静态托管无 Python 后端
    const host = location.hostname;
    const isLocal = host.includes('localhost') || host.includes('127.0.0.1') || host.includes('lhr.life');
    const isRender = host.includes('onrender.com');
    if (!isLocal && !isRender) {
      this.useCloudTTS = false;
      this.useGoogleTTS = false;
      if (this.isAndroid) {
        // 安卓：直接用有道 TTS（Web Speech 在安卓上不可靠，很多国产机无 Google TTS 引擎）
        console.log('[语音] 安卓设备，使用有道 TTS');
      } else {
        // iOS / 桌面：优先浏览器内置语音（Web Speech API），失败时回退有道 TTS
        console.log('[语音] 静态环境，使用浏览器内置语音（Web Speech API）');
      }
    }

    // Audio 播放失败 → 回退（有道/Google TTS 失败时）
    this.audio.addEventListener('error', () => {
      if (this._googleFallbackActive) return;
      if (this._queue && this._queue.length) {
        this._advanceQueue();
        return;
      }
      this._googleFallbackActive = true;
      console.warn('Audio 播放失败，尝试回退');
      this.useGoogleTTS = false;
      if (this._lastText) {
        // 优先回退到浏览器内置语音；如不支持则用有道 TTS
        if (this.synth) {
          this._speakFallback(this._lastText, this._lastRate);
        } else {
          this._speakYoudaoTTS(this._lastText, this._lastRate);
        }
      }
    });

    // 播放成功时重置失败计数
    this.audio.addEventListener('playing', () => {
      this._cloudFailedCount = 0;
    });

    // 音频播放结束 → 自动播下一句（队列模式）
    this.audio.addEventListener('ended', () => {
      if (this._queue && this._queue.length) {
        this._advanceQueue();
      }
    });

    // 初始化 Web Speech API（作为 fallback）
    if (this.synth) {
      const load = () => {
        const vs = this.synth.getVoices();
        if (vs && vs.length) {
          this.voices = vs;
          console.log('[语音] 加载到', vs.length, '个浏览器语音');
        }
      };
      load();
      this.synth.onvoiceschanged = load;
    }
  },

  // 队列模式：依次朗读多句文本（事件驱动，非定时器）
  // texts: 字符串数组；rate: 速率
  speakQueue(texts, rate = 1) {
    this.stop();  // 清空旧的队列和当前播放
    if (!Array.isArray(texts) || !texts.length) return;
    this._queue = texts.map(t => ({ text: t, rate }));
    this._advanceQueue();
  },

  // 选择朗读方式（统一入口，供 speak / _advanceQueue 调用）
  // 优先级：云端 TTS > Google TTS > [安卓:有道 TTS | 非安卓:浏览器内置语音] > 有道 TTS
  _dispatchSpeak(text, rate) {
    if (this.useCloudTTS) {
      this._speakCloud(text, rate);
    } else if (this.useGoogleTTS) {
      this._speakGoogleTTS(text, rate);
    } else if (this.isAndroid) {
      // 安卓：直接用有道 TTS（Web Speech 在安卓上不可靠，很多国产机无 Google TTS 引擎）
      this._speakYoudaoTTS(text, rate);
    } else if (this.synth) {
      this._speakFallback(text, rate);   // iOS / 桌面：浏览器内置语音合成
    } else {
      this._speakYoudaoTTS(text, rate);  // 无 speechSynthesis 时（如微信浏览器）用有道 TTS
    }
  },

  // 队列内部：播放下一句（不清空队列）
  _advanceQueue() {
    if (!this._queue || !this._queue.length) return;
    const item = this._queue.shift();
    this._lastText = item.text;
    this._lastRate = item.rate;
    this._googleFallbackActive = false;
    this._dispatchSpeak(item.text, item.rate);
  },

  // 长文本分句（有道 TTS 单次约 200 字符限制）
  // 按句号/问号/感叹号切分，每段不超过 maxLen 字符
  _splitText(text, maxLen) {
    const sentences = text.match(/[^.!?。！？]+[.!?。！？]?/g) || [text];
    const chunks = [];
    let cur = '';
    for (const s of sentences) {
      if ((cur + s).length > maxLen && cur) {
        chunks.push(cur.trim());
        cur = s;
      } else {
        cur += s;
      }
    }
    if (cur.trim()) chunks.push(cur.trim());
    return chunks.length ? chunks : [text];
  },

  // 朗读英文（主入口）
  speak(text, rate = 1) {
    this.stop();
    // 有道 TTS 有长度限制（约 200 字符），长文本自动分句后用队列播放
    const useYoudao = !this.useCloudTTS && !this.useGoogleTTS && (this.isAndroid || !this.synth);
    if (useYoudao && text && text.length > 180) {
      const chunks = this._splitText(text, 180);
      this.speakQueue(chunks, rate);
      return;
    }
    this._lastText = text;
    this._lastRate = rate;
    // 重置 Google TTS 回退标记，允许本次重新尝试
    this._googleFallbackActive = false;
    this._dispatchSpeak(text, rate);
  },

  // Google Translate TTS 朗读（静态环境使用，免费，无需 API key）
  // 接口：GET https://translate.google.com/translate_tts?ie=UTF-8&q={text}&tl={lang}&client=tw-ob
  // 直接返回 MP3 音频。<audio> 元素播放跨域资源不受 CORS 限制（仅读取音频数据才受限）
  // 限制：单次约 200 字符，长文本需分句
  // 注意：translate.google.com 在部分网络环境（如中国大陆）被屏蔽，
  //       此时 audio 元素会挂起而非立即触发 error 事件，因此必须加超时回退。
  _speakGoogleTTS(text, rate) {
    console.log('[语音] Google TTS 请求:', text.substring(0, 30));

    // 清除上一次的超时定时器
    if (this._googleTtsTimer) { clearTimeout(this._googleTtsTimer); this._googleTtsTimer = null; }

    // 语音 → 语言映射（Google Translate TTS 用 tl 参数控制语言/口音）
    // 美式声音（jenny/aria/guy/davis/amber）→ en，英式声音（emma/brian）→ en-GB
    const gbVoices = ['emma', 'brian'];
    const tl = gbVoices.includes(this.voice) ? 'en-GB' : 'en';
    // Google TTS 单次约 200 字符，截断保护
    const safeText = (text || '').slice(0, 200);
    const encodedText = encodeURIComponent(safeText);
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=${tl}&client=tw-ob`;

    this.audio.src = audioUrl;
    // Google TTS 不支持服务端调速率，用 playbackRate 调整（iOS Safari 兼容）
    try { this.audio.playbackRate = rate || 1; } catch {}
    // 确保从头播放
    try { this.audio.currentTime = 0; } catch {}

    // 超时保护：800ms 内未开始播放 → 判定 Google TTS 不可用（被屏蔽/网络慢），立即回退到浏览器内置语音
    // 标记本次是否已回退，避免 error 事件重复触发回退
    let fallenBack = false;
    const doFallback = (reason) => {
      if (fallenBack) return;
      fallenBack = true;
      this._googleFallbackActive = true;
      if (this._googleTtsTimer) { clearTimeout(this._googleTtsTimer); this._googleTtsTimer = null; }
      console.warn('[语音] Google TTS 回退到浏览器内置语音:', reason);
      // Google 被屏蔽则直接禁用，后续直接用浏览器内置语音（无延迟）
      this.useGoogleTTS = false;
      // 停止 audio 的后台加载，避免与 Web Speech 冲突
      try { this.audio.pause(); this.audio.src = ''; } catch {}
      this._speakFallback(text, rate);
    };

    this._googleTtsTimer = setTimeout(() => {
      doFallback('超时(800ms)未开始播放，可能被网络屏蔽');
    }, 800);

    const p = this.audio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        if (fallenBack) return;
        // 播放成功，清除超时
        if (this._googleTtsTimer) { clearTimeout(this._googleTtsTimer); this._googleTtsTimer = null; }
        console.log('[语音] Google TTS 播放中');
      }).catch(err => {
        // iOS Safari 在非用户手势上下文会拒绝 play()，或网络失败
        console.warn('[语音] Google TTS 播放失败:', err && (err.name || err.message));
        doFallback('play() 被拒绝或失败');
      });
    }
  },

  // 有道词典 TTS 朗读（浏览器无 speechSynthesis 时使用，如微信内置浏览器）
  // 接口：GET https://dict.youdao.com/dictvoice?audio={text}&type={1|2}
  // type=1 美式英语，type=2 英式英语；直接返回 MP3，无需 API key，中国大陆可访问
  _speakYoudaoTTS(text, rate) {
    console.log('[语音] 有道 TTS 请求:', text.substring(0, 30));
    // 语音 → type 映射：英式声音用 type=2，其余用 type=1（美式）
    const gbVoices = ['emma', 'brian'];
    const type = gbVoices.includes(this.voice) ? 2 : 1;
    // 有道 TTS 适合单词/短句，截断保护
    const safeText = (text || '').slice(0, 200);
    const audioUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(safeText)}&type=${type}`;

    this.audio.src = audioUrl;
    // 有道不支持服务端调速，用 playbackRate 调整
    try { this.audio.playbackRate = rate || 1; } catch {}
    try { this.audio.currentTime = 0; } catch {}

    const p = this.audio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        console.log('[语音] 有道 TTS 播放中');
      }).catch(err => {
        const name = err && err.name;
        console.warn('[语音] 有道 TTS 播放失败:', name || err);
        // NotAllowedError 是因为非用户手势调用（如控制台测试），真实点击不会出现
        if (name === 'NotAllowedError') {
          Toast.show('请点击朗读按钮触发播放');
          return;
        }
        // 网络/加载失败：安卓上不回退 Google（国内被屏蔽），提示用户
        this._cloudFailedCount++;
        if (this.isAndroid) {
          Toast.show('语音加载失败，请检查网络后重试');
        } else {
          // 非安卓：尝试 Google TTS（如能访问）
          if (this._cloudFailedCount >= 3) this.useGoogleTTS = true;
          this._speakGoogleTTS(text, rate);
        }
      });
    }
  },

  // 生成缓存 key
  _cacheKey(text, rate) {
    return `${this.voice}|${rate}|${text}`;
  },

  // 云端 TTS 朗读（POST 请求，支持长文本）
  // 优先使用缓存，无缓存时请求并缓存
  _speakCloud(text, rate) {
    const key = this._cacheKey(text, rate);

    // 1) 命中缓存 → 立即播放（零延迟）
    const cached = this._cache.get(key);
    if (cached) {
      this._playURL(cached, text, rate);
      return;
    }

    // 2) 已有相同请求在进行中 → 等待其完成后播放
    const pending = this._pending.get(key);
    if (pending) {
      pending.then(() => {
        const c = this._cache.get(key);
        if (c) this._playURL(c, text, rate);
        else this._speakFallback(text, rate);
      }).catch(() => this._speakFallback(text, rate));
      return;
    }

    // 3) 无缓存 → 发起请求
    const p = this._fetchTTS(text, rate).then(url => {
      this._playURL(url, text, rate);
    }).catch(err => {
      console.warn('云端 TTS 请求失败:', err);
      this._speakFallback(text, rate);
    });
    this._pending.set(key, p);
  },

  // 播放指定的 objectURL（私有）
  _playURL(url, text, rate) {
    // Map 的 values 需用 iterator，不能用 Object.values()
    const cacheUrls = Array.from(this._cache.values());
    // 只释放不在缓存中的临时 URL（避免释放正在复用的缓存 URL）
    if (this._objectURL && !cacheUrls.includes(this._objectURL)) {
      URL.revokeObjectURL(this._objectURL);
    }
    this._objectURL = url;
    this.audio.src = url;
    // 慢速模式：服务端已生成慢速音频，playbackRate 保持 1
    this.audio.playbackRate = 1;
    this.audio.play().catch(err => {
      console.warn('云端 TTS 播放失败:', err);
      this._speakFallback(text, rate);
    });
  },

  // 请求 TTS 并缓存（返回 Promise<objectURL>）
  _fetchTTS(text, rate) {
    const key = this._cacheKey(text, rate);
    return fetch(this.ttsBase, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, voice: this.voice, rate: String(rate) })
    })
      .then(resp => {
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        return resp.blob();
      })
      .then(blob => {
        const url = URL.createObjectURL(blob);
        this._cache.set(key, url);
        this._pending.delete(key);
        return url;
      })
      .catch(err => {
        this._pending.delete(key);
        throw err;
      });
  },

  // 预缓存：后台批量生成音频，点击时即可秒播
  // texts: 字符串数组；rate: 速率（默认 1）
  prefetch(texts, rate = 1) {
    if (!this.useCloudTTS || !Array.isArray(texts)) return;
    // 语音切换后，旧缓存失效，清空
    if (this._prefetchedVoice && this._prefetchedVoice !== this.voice) {
      this._cache.forEach(url => URL.revokeObjectURL(url));
      this._cache.clear();
    }
    this._prefetchedVoice = this.voice;
    // 并发预生成（限制并发数为 4，避免压垮服务器）
    const limit = 4;
    let idx = 0;
    const next = () => {
      if (idx >= texts.length) return;
      const text = texts[idx++];
      const key = this._cacheKey(text, rate);
      // 已缓存或已在请求中则跳过
      if (this._cache.has(key) || this._pending.has(key)) {
        next();
        return;
      }
      this._fetchTTS(text, rate).then(next).catch(() => next());
    };
    // 启动 limit 个并发任务
    for (let i = 0; i < Math.min(limit, texts.length); i++) next();
  },

  // 清空预缓存（切换场景/页面时调用，释放内存）
  clearCache() {
    this._cache.forEach(url => URL.revokeObjectURL(url));
    this._cache.clear();
    this._pending.clear();
  },

  // Web Speech API fallback（浏览器内置语音）
  // iOS Safari 关键限制：speechSynthesis.speak() 必须在用户手势的同步调用栈中执行，
  // 任何 setTimeout / fetch / Promise 等异步操作都会破坏用户手势上下文，导致朗读被静默拒绝。
  // 因此本方法绝不使用 setTimeout 等待 voices 加载——直接同步调用 speak()，浏览器用默认语音兜底。
  _speakFallback(text, rate) {
    if (!this.synth) {
      console.warn('[语音] 浏览器不支持语音合成，回退到有道 TTS');
      this._speakYoudaoTTS(text, rate);
      return;
    }
    // 取消之前的朗读
    try { this.synth.cancel(); } catch {}

    // 同步获取 voices（已加载则有，未加载则空，不等待）
    if (this.voices.length === 0 && this.synth.getVoices) {
      const vs = this.synth.getVoices();
      if (vs && vs.length) this.voices = vs;
    }

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = rate || 1;
    u.volume = 1;
    u.pitch = 1;
    // 优先选择 Google/Samantha 等较自然语音（未加载 voices 时跳过，用浏览器默认）
    let v = this.voices.find(v => v.name.includes('Google') && v.lang.startsWith('en'));
    if (!v) v = this.voices.find(v => v.name.includes('Samantha'));
    if (!v) v = this.voices.find(v => v.lang.startsWith('en-US'));
    if (!v) v = this.voices.find(v => v.lang.startsWith('en'));
    if (v) u.voice = v;
    u.onerror = (e) => {
      console.warn('[语音] 浏览器朗读错误:', e.error || e);
      // 浏览器语音合成失败 → 回退到有道 TTS（中国大陆可用，无需 API key）
      this._speakYoudaoTTS(text, rate);
    };
    u.onend = () => {
      if (this._queue && this._queue.length) this._advanceQueue();
    };
    try {
      // 必须同步调用，iOS Safari 才能在此用户手势上下文中播放
      this.synth.speak(u);
      console.log('[语音] 浏览器内置朗读开始:', text.substring(0, 30));
    } catch (err) {
      console.error('[语音] speak() 异常，回退到有道 TTS:', err);
      this._speakYoudaoTTS(text, rate);
    }
  },

  // 停止所有朗读（取消当前 + 清空队列）
  stop() {
    // 清空队列
    this._queue = [];
    // 清除 Google TTS 超时定时器（避免停止后误触发回退）
    if (this._googleTtsTimer) { clearTimeout(this._googleTtsTimer); this._googleTtsTimer = null; }
    // 兼容旧的定时器队列
    if (this.queuedTimers && this.queuedTimers.length) {
      this.queuedTimers.forEach(t => clearTimeout(t));
      this.queuedTimers = [];
    }
    // 停止云端 TTS 音频
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    // 停止 Web Speech
    if (this.synth) this.synth.cancel();
  },

  // 切换语音
  setVoice(voiceId) {
    if (this.voiceOptions[voiceId]) {
      // 切换语音 → 清空旧缓存（voice 变了，旧音频不可复用）
      if (this.voice !== voiceId) this.clearCache();
      this.voice = voiceId;
      // 根据环境重置失败计数并重启用对应的 TTS 通道
      const host = location.hostname;
      const isStaticHost = !host.includes('localhost') && !host.includes('127.0.0.1') && !host.includes('lhr.life') && !host.includes('onrender.com');
      this._cloudFailedCount = 0;
      if (isStaticHost) {
        // 静态环境：保持使用浏览器内置语音（Web Speech API），不启用 Google TTS
        // （Google TTS 仅在用户显式设置 Speech.useGoogleTTS = true 时启用）
        this.useGoogleTTS = false;
      } else {
        // 有后端 TTS 的环境：重新启用云端 TTS
        this.useCloudTTS = true;
      }
    }
  },

  // 检查浏览器是否支持语音识别
  isSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition);
  },

  // ===== 录音存档（MediaRecorder 录制麦克风音频）=====

  // 检查浏览器是否支持录音存档
  isRecordingSupported() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  },

  // 开始录音（与语音识别并行进行）
  // 返回 Promise<void>，失败时不影响语音识别，但会设置 _recArchiveFailed 标记
  async startRecording() {
    // 保存本次启动的 Promise，供 stopRecording 等待（避免 getUserMedia 未完成就 stop 导致空录音）
    this._recStartPromise = this._doStartRecording();
    return this._recStartPromise;
  },

  async _doStartRecording() {
    this._recArchiveFailed = false;
    if (!this.isRecordingSupported()) {
      console.log('[录音存档] 浏览器不支持 MediaRecorder，跳过录音存档');
      this._recArchiveFailed = true;
      this._recArchiveFailReason = 'unsupported';
      return;
    }
    try {
      // 释放上一次的录音资源
      this._releaseRecording();
      this._recChunks = [];
      // 用独立的 getUserMedia 调用，避免与 SpeechRecognition 共享 stream
      // 部分浏览器在 SpeechRecognition.stop() 时会关闭共享的麦克风 track
      this._recStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      });
      // 选择浏览器支持的 mime 类型，优先 webm/opus（压缩好、兼容广）
      const candidates = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/mp4',
        'audio/ogg;codecs=opus'
      ];
      let mime = '';
      for (const c of candidates) {
        if (MediaRecorder.isTypeSupported(c)) { mime = c; break; }
      }
      this._recMimeType = mime || '';
      this._mediaRecorder = new MediaRecorder(this._recStream, mime ? { mimeType: mime } : undefined);
      this._mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          this._recChunks.push(e.data);
        }
      };
      // start(timeslice)：每 100ms 输出一次数据，确保录音过程中持续收集
      this._mediaRecorder.start(100);
      this._recStartTime = Date.now();
      console.log('[录音存档] 开始录制, 格式:', mime || '默认');
    } catch (err) {
      console.warn('[录音存档] 启动失败:', err.name || err.message);
      this._recArchiveFailed = true;
      this._recArchiveFailReason = err.name || 'error';
      // 录音存档失败不影响语音识别
    }
  },

  // 录音存档是否失败（用于 UI 反馈）
  isRecordingArchiveFailed() {
    return !!this._recArchiveFailed;
  },
  getRecordingFailReason() {
    return this._recArchiveFailReason || '';
  },

  // 停止录音，返回 objectURL（可 <audio> 播放）；无录音则返回空字符串
  stopRecording() {
    return new Promise((resolve) => {
      // 如果 startRecording 还在进行中（getUserMedia 未完成），先等待它完成
      const finish = () => {
        const recorder = this._mediaRecorder;
        if (!recorder || recorder.state === 'inactive') {
          this._releaseRecording();
          resolve('');
          return;
        }
        // 用局部变量捕获本次的 chunks，避免并发覆盖
        const chunks = this._recChunks;
        const mime = this._recMimeType || 'audio/webm';
        recorder.onstop = () => {
          // 立即释放 stream（onstop 时数据已全部就绪）
          this._releaseRecording();
          const elapsed = this._recStartTime ? Date.now() - this._recStartTime : 0;
          if (!chunks.length) {
            console.warn('[录音存档] 无数据块, 时长:', elapsed, 'ms');
            resolve('');
            return;
          }
          const blob = new Blob(chunks, { type: chunks[0].type || mime });
          // 释放上一次的 URL
          if (this._lastRecordingUrl) URL.revokeObjectURL(this._lastRecordingUrl);
          this._lastRecordingUrl = URL.createObjectURL(blob);
          console.log('[录音存档] 录制完成, 大小:', blob.size, '字节, 时长:', elapsed, 'ms, 类型:', blob.type);
          resolve(this._lastRecordingUrl);
        };
        // requestData：强制输出当前缓冲数据，再 stop
        try { recorder.requestData(); } catch {}
        try { recorder.stop(); } catch { resolve(''); }
      };
      if (this._recStartPromise) {
        this._recStartPromise.then(finish).catch(finish);
        this._recStartPromise = null;
      } else {
        finish();
      }
    });
  },

  // 获取最近一次录音的 URL（用于回放）
  getLastRecordingUrl() {
    return this._lastRecordingUrl || '';
  },

  // 播放录音（用独立 Audio 对象，避免与 TTS 冲突）
  // 返回 true=开始播放, false=已暂停
  playRecording(url) {
    if (!url) { Toast.show('暂无录音可回放'); return false; }
    // 确保 Audio 对象存在并绑定 ended 事件（只绑一次）
    if (!this._recAudio) {
      this._recAudio = new Audio();
      this._recAudio.addEventListener('ended', () => {
        console.log('[录音存档] 回放结束');
        if (typeof this.onRecordingEnded === 'function') this.onRecordingEnded();
      });
      // 加载错误时也回调，恢复按钮文字
      this._recAudio.addEventListener('error', () => {
        console.warn('[录音存档] 回放出错');
        if (typeof this.onRecordingEnded === 'function') this.onRecordingEnded();
      });
    }
    // 正在播放则暂停
    if (!this._recAudio.paused) {
      this._recAudio.pause();
      return false;
    }
    // 设置 src（新 URL 或重新播放）
    if (this._recAudio.src !== url) {
      this._recAudio.src = url;
    }
    // 重置到开头（处理之前播放到末尾的情况）
    try { this._recAudio.currentTime = 0; } catch {}
    // 用户手势触发的 play()，符合自动播放策略
    const p = this._recAudio.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        console.log('[录音存档] 回放开始, 时长:', this._recAudio.duration, '秒');
      }).catch(err => {
        console.warn('[录音存档] 回放失败:', err.name || err.message);
        Toast.show('录音回放失败，请重试');
        if (typeof this.onRecordingEnded === 'function') this.onRecordingEnded();
      });
    }
    return true;
  },

  // 停止录音回放
  stopRecordingPlayback() {
    if (this._recAudio) {
      this._recAudio.pause();
      this._recAudio.currentTime = 0;
    }
  },

  // 释放录音资源（停止 tracks，清理 recorder）
  _releaseRecording() {
    if (this._recStream) {
      this._recStream.getTracks().forEach(t => t.stop());
      this._recStream = null;
    }
    this._mediaRecorder = null;
  },

  // ===== 手动录音模式（开始/停止/识别/录音存档 一体化）=====
  // 使用流程：startRecognition() 开始 → 用户说话 → stopRecognition() 停止
  //          → onResult 回调返回 {text, error} + onRecordingReady 回调返回录音 URL

  _recSR: null,              // SpeechRecognition 实例
  _recChunksText: [],        // 已确认的 final 文本片段
  _recLastInterim: '',       // 最后一次 interim 文本（兜底）
  _recActive: false,         // 是否正在录音
  _recDone: false,           // 本次识别是否已完成（防止重复回调）

  // 开始录音+识别（手动模式，无超时）
  // onResult(text, error) 回调在停止后触发
  startRecognition(lang = 'en-US') {
    // 如果已在录音，先彻底停止并清理
    if (this._recActive) {
      console.warn('[录音] 已在录音中，先停止再重新开始');
      this.stopRecognition();
    }
    // 清理上一次的 SpeechRecognition 实例（避免残留事件干扰）
    if (this._recSR) {
      try { this._recSR.abort(); } catch {}
      this._recSR.onresult = null;
      this._recSR.onerror = null;
      this._recSR.onend = null;
      this._recSR.onstart = null;
      this._recSR = null;
    }
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      if (typeof this.onResult === 'function') this.onResult('', 'unsupported');
      return false;
    }
    // 重置状态
    this._recChunksText = [];
    this._recLastInterim = '';
    this._recDone = false;
    this._recActive = true;

    const r = new SR();
    this._recSR = r;
    r.lang = lang;
    r.continuous = true;       // 连续模式
    r.interimResults = true;  // 实时结果（兜底用）
    r.maxAlternatives = 1;

    r.onresult = (e) => {
      for (let i = 0; i < e.results.length; i++) {
        const res = e.results[i];
        if (res.isFinal) {
          const t = res[0].transcript.trim();
          if (t) this._recChunksText.push(t);
        } else {
          this._recLastInterim = res[0].transcript;
        }
      }
    };
    r.onerror = (e) => {
      const errType = e.error || 'unknown';
      console.warn('[录音] 错误:', errType);
      // 错误不立即停止，记录错误类型，等 stopRecognition 时返回
      if (errType === 'not-allowed' || errType === 'service-not-allowed') {
        this._recError = 'no-permission';
      } else if (errType === 'network') {
        this._recError = 'network';
      }
    };
    r.onend = () => {
      console.log('[录音] onend, final片段:', this._recChunksText.length);
      // onend 触发时如果还在 active，说明是异常结束，也走完成流程
      if (this._recActive) {
        this._recActive = false;
        this._completeRecognition();
      }
    };
    r.onstart = () => console.log('[录音] onstart');
    r.onspeechstart = () => console.log('[录音] 检测到说话');
    r.onspeechend = () => console.log('[录音] 说话静默');

    // 同步启动录音存档
    this.startRecording();
    this._recError = '';

    try { r.start(); } catch (err) {
      console.error('[录音] 启动失败:', err);
      this._recActive = false;
      if (typeof this.onResult === 'function') this.onResult('', 'start-failed');
      return false;
    }
    return true;
  },

  // 停止录音+识别，立即触发 onResult 和 onRecordingReady 回调
  stopRecognition() {
    if (!this._recActive) return;
    // 先将 _recActive 设为 false，防止 onend 异步回调重复触发 _completeRecognition
    this._recActive = false;
    // 停止语音识别（会异步触发 onend，但 _recActive 已为 false，不会重复执行）
    if (this._recSR) {
      try { this._recSR.stop(); } catch {}
    }
    // 主动完成（不依赖 onend，避免延迟）
    this._completeRecognition();
  },

  // 完成识别：汇总文本 + 停止录音 + 触发回调
  // 注意：调用方需在调用前将 _recActive 设为 false，本方法通过 _recDone 标志防止重复执行
  _completeRecognition() {
    if (this._recDone) return;
    this._recDone = true;
    // 汇总识别文本（final 优先，interim 兜底）
    let text = this._recChunksText.join(' ').trim();
    if (!text && this._recLastInterim) text = this._recLastInterim.trim();
    const error = this._recError || '';
    console.log('[录音] 完成, 文本:', text, '错误:', error || '无');

    // 立即回调识别结果
    if (typeof this.onResult === 'function') this.onResult(text, error);

    // 停止录音，完成后回调录音 URL（即使失败也通知 UI）
    this.stopRecording().then(recUrl => {
      console.log('[录音] 录音 URL 就绪:', !!recUrl, '失败:', this._recArchiveFailed);
      if (typeof this.onRecordingReady === 'function') {
        this.onRecordingReady(recUrl);
      }
    });
  },

  // 是否正在录音
  isRecording() {
    return this._recActive;
  },

  // 识别用户发音（旧版兼容，不再使用手动模式）
  recognize(lang = 'en-US', timeoutMs = 6000) {
    return new Promise((resolve) => {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SR) { resolve({ text: '', error: 'unsupported', recording: '' }); return; }
      const r = new SR();
      r.lang = lang;
      r.continuous = true;
      r.interimResults = true;
      r.maxAlternatives = 1;
      let done = false;
      let chunks = [];
      let lastInterim = '';
      this.startRecording();
      const finish = (error = '') => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        let text = chunks.join(' ').trim();
        if (!text && lastInterim) text = lastInterim.trim();
        resolve({ text, error, recording: '' });
        this.stopRecording().then(recUrl => {
          if (recUrl && typeof this.onRecordingReady === 'function') this.onRecordingReady(recUrl);
        });
      };
      const timer = setTimeout(() => { try { r.stop(); } catch {} finish(''); }, timeoutMs);
      r.onresult = (e) => {
        for (let i = 0; i < e.results.length; i++) {
          const res = e.results[i];
          if (res.isFinal) { const t = res[0].transcript.trim(); if (t) chunks.push(t); }
          else { lastInterim = res[0].transcript; }
        }
      };
      r.onerror = (e) => {
        const errType = e.error || 'unknown';
        if (errType === 'no-speech') finish('');
        else if (errType === 'not-allowed' || errType === 'service-not-allowed') finish('no-permission');
        else if (errType === 'network') finish('network');
        else if (errType === 'aborted') finish('');
        else finish('');
      };
      r.onend = () => finish('');
      try { r.start(); } catch (err) { finish('start-failed'); }
    });
  },

  // 简易发音评分：基于识别文本与目标词的相似度
  scorePron(recognized, target) {
    if (!recognized) return 0;
    const a = recognized.toLowerCase().replace(/[^a-z\s]/g, '');
    const b = target.toLowerCase().replace(/[^a-z\s]/g, '');
    if (!b) return 0;
    // 用 Levenshtein 距离
    const dist = this.levenshtein(a, b);
    const maxLen = Math.max(a.length, b.length);
    let score = Math.round((1 - dist / maxLen) * 100);
    if (score < 0) score = 0;
    if (score > 100) score = 100;
    return score;
  },

  levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        dp[i][j] = a[i-1] === b[j-1]
          ? dp[i-1][j-1]
          : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
    return dp[m][n];
  }
};

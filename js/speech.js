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

    // 检测环境：GitHub Pages 等纯静态托管无 Python 后端，使用 Puter.js TTS
    const host = location.hostname;
    const isLocal = host.includes('localhost') || host.includes('127.0.0.1') || host.includes('lhr.life');
    const isRender = host.includes('onrender.com');
    if (!isLocal && !isRender) {
      this.useCloudTTS = false;
      // 静态环境优先用 Puter.js（免费云端 TTS，支持微软 Neural voices）
      // Puter.js 可能异步加载，延迟检测
      const checkPuter = (tries = 0) => {
        if (typeof puter !== 'undefined' && puter.ai && puter.ai.txt2speech) {
          this.usePuter = true;
          console.log('[语音] 静态环境，使用 Puter.js 云端 TTS ✓');
        } else if (tries < 10) {
          setTimeout(() => checkPuter(tries + 1), 300);
        } else {
          this.usePuter = false;
          console.warn('[语音] Puter.js 未加载（超时），回退浏览器内置语音');
        }
      };
      checkPuter();
    }

    // Audio 播放失败 → 回退
    this.audio.addEventListener('error', () => {
      if (this._queue && this._queue.length) {
        this._advanceQueue();
        return;
      }
      this._cloudFailedCount++;
      console.warn(`云端 TTS 失败 (${this._cloudFailedCount}次)`);
      if (this._cloudFailedCount >= 3) {
        this.usePuter = false;
        console.warn('Puter.js 连续失败 3 次，切换到浏览器内置语音');
      }
      if (this._lastText) {
        this._speakFallback(this._lastText, this._lastRate);
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
          console.log('[语音] 加载到', vs.length, '个语音');
        }
      };
      load();
      this.synth.onvoiceschanged = load;
      // 某些浏览器需要触发一次空朗读才能激活语音引擎
      // Safari/IOS 上首次调用可能无声，用这个"热身"
      try {
        const warmup = new SpeechSynthesisUtterance('');
        warmup.volume = 0;
        this.synth.speak(warmup);
      } catch {}
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

  // 队列内部：播放下一句（不清空队列）
  _advanceQueue() {
    if (!this._queue || !this._queue.length) return;
    const item = this._queue.shift();
    this._lastText = item.text;
    this._lastRate = item.rate;
    // 直接调用朗读，绕过 speak() 内部的 stop()
    if (this.useCloudTTS) {
      this._speakCloud(item.text, item.rate);
    } else if (this.usePuter) {
      this._speakPuter(item.text, item.rate);
    } else {
      this._speakFallback(item.text, item.rate);
    }
  },

  // 朗读英文（主入口）
  speak(text, rate = 1) {
    this.stop();
    this._lastText = text;
    this._lastRate = rate;

    if (this.useCloudTTS) {
      this._speakCloud(text, rate);
    } else if (this.usePuter) {
      this._speakPuter(text, rate);
    } else {
      this._speakFallback(text, rate);
    }
  },

  // Puter.js TTS 朗读（静态环境使用，免费云端 TTS）
  _speakPuter(text, rate) {
    if (typeof puter === 'undefined' || !puter.ai || !puter.ai.txt2speech) {
      console.warn('[语音] Puter.js 不可用（调用时），回退浏览器内置语音');
      this.usePuter = false;
      this._speakFallback(text, rate);
      return;
    }
    console.log('[语音] Puter.js TTS 请求:', text.substring(0, 30));
    puter.ai.txt2speech(text, 'en-US')
      .then(audio => {
        // audio 是 HTMLAudioElement
        this.audio.src = audio.src;
        this.audio.playbackRate = rate || 1;
        this.audio.play().catch(err => {
          console.error('[语音] Puter 音频播放失败:', err);
          this._speakFallback(text, rate);
        });
      })
      .catch(err => {
        console.error('[语音] Puter.js TTS 失败:', err);
        this._cloudFailedCount++;
        if (this._cloudFailedCount >= 3) {
          this.usePuter = false;
          console.warn('Puter.js 连续失败，切换到浏览器内置语音');
        }
        this._speakFallback(text, rate);
      });
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
  _speakFallback(text, rate) {
    if (!this.synth) {
      console.warn('[语音] 浏览器不支持语音合成');
      Toast.show('语音合成不可用，请使用 Chrome 或 Safari 浏览器');
      return;
    }
    // 取消之前的朗读
    try { this.synth.cancel(); } catch {}

    const doSpeak = () => {
      // 重新获取 voices（可能已加载）
      if (this.voices.length === 0 && this.synth.getVoices) {
        const vs = this.synth.getVoices();
        if (vs && vs.length) this.voices = vs;
      }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate || 1;
      u.volume = 1;
      u.pitch = 1;
      // 优先选择 Google/Samantha 等较自然语音
      let v = this.voices.find(v => v.name.includes('Google') && v.lang.startsWith('en'));
      if (!v) v = this.voices.find(v => v.name.includes('Samantha'));
      if (!v) v = this.voices.find(v => v.lang.startsWith('en-US'));
      if (!v) v = this.voices.find(v => v.lang.startsWith('en'));
      if (v) u.voice = v;
      u.onerror = (e) => {
        console.warn('[语音] 朗读错误:', e.error || e);
        // 如果浏览器内置语音失败，尝试动态加载 Puter.js
        if (!this._puterTried) {
          this._puterTried = true;
          if (typeof puter !== 'undefined' && puter.ai && puter.ai.txt2speech) {
            console.log('[语音] 浏览器语音失败，切换到 Puter.js');
            this.usePuter = true;
            this._speakPuter(text, rate);
          } else {
            // 动态加载 Puter.js
            console.log('[语音] 浏览器语音失败，动态加载 Puter.js');
            const script = document.createElement('script');
            script.src = 'https://js.puter.com/v2/';
            script.onload = () => {
              setTimeout(() => {
                this.usePuter = true;
                this._speakPuter(text, rate);
              }, 500);
            };
            document.head.appendChild(script);
          }
        } else {
          Toast.show('朗读失败，请刷新页面重试');
        }
      };
      u.onend = () => {
        if (this._queue && this._queue.length) this._advanceQueue();
      };
      try {
        this.synth.speak(u);
        console.log('[语音] 朗读开始:', text.substring(0, 30));
      } catch (err) {
        console.error('[语音] speak() 异常:', err);
        Toast.show('朗读失败：' + (err.message || '未知错误'));
      }
    };

    // Safari/IOS 上 voices 异步加载，延迟一帧确保就绪
    // 即使没有 voices，也强制朗读（浏览器会用默认语音）
    if (this.voices.length === 0) {
      // 尝试再获取一次
      const vs = this.synth.getVoices ? this.synth.getVoices() : [];
      if (vs && vs.length) {
        this.voices = vs;
        doSpeak();
      } else {
        // voices 未就绪，等 200ms 再试，最多等 1 秒
        let tries = 0;
        const wait = () => {
          tries++;
          const vs2 = this.synth.getVoices ? this.synth.getVoices() : [];
          if (vs2 && vs2.length) {
            this.voices = vs2;
            doSpeak();
          } else if (tries < 5) {
            setTimeout(wait, 200);
          } else {
            // 超时，强制朗读（Safari 会用默认语音）
            console.warn('[语音] voices 未加载，强制朗读');
            doSpeak();
          }
        };
        setTimeout(wait, 200);
      }
    } else {
      doSpeak();
    }
  },

  // 停止所有朗读（取消当前 + 清空队列）
  stop() {
    // 清空队列
    this._queue = [];
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
      // 仅在有后端 TTS 的环境重新启用云端 TTS
      const host = location.hostname;
      const isStaticHost = !host.includes('localhost') && !host.includes('127.0.0.1') && !host.includes('lhr.life') && !host.includes('onrender.com');
      if (!isStaticHost) {
        this.useCloudTTS = true;
        this._cloudFailedCount = 0;
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
  // 返回 Promise<void>，失败时不影响语音识别
  async startRecording() {
    if (!this.isRecordingSupported()) {
      console.log('[录音存档] 浏览器不支持 MediaRecorder，跳过录音存档');
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
      // 录音存档失败不影响语音识别
    }
  },

  // 停止录音，返回 objectURL（可 <audio> 播放）；无录音则返回空字符串
  stopRecording() {
    return new Promise((resolve) => {
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

    // 停止录音，完成后回调录音 URL
    this.stopRecording().then(recUrl => {
      console.log('[录音] 录音 URL 就绪:', !!recUrl);
      if (recUrl && typeof this.onRecordingReady === 'function') {
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

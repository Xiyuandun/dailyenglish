// DailyEnglish - 语音工具（云端 TTS + Web Speech API fallback）
// 优先使用云端 TTS（edge-tts Jenny 声音，自然亲切，类似豆包）
// 云端不可用时自动回退到浏览器内置语音合成
const Speech = {
  audio: null,          // Audio 对象用于播放云端 TTS 音频
  synth: window.speechSynthesis || null,
  rec: null,
  voices: [],
  queuedTimers: [],     // 排队朗读的定时器（便于一键停止）
  _queueWatcher: null,  // 队列卡死监视定时器（某句不播放时强制推进）

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

  // 云端语音识别（阿里云 DashScope Paraformer）配置
  // 由部署后端时在 index.html 的 window.DAILY_CFG.sttUrl 里指定；
  // 若页面本身由后端提供（本地/渲染平台），也可用默认相对路径 /stt。
  sttBase: (function () {
    try {
      if (typeof window !== 'undefined' && window.DAILY_CFG && window.DAILY_CFG.sttUrl) {
        return window.DAILY_CFG.sttUrl;
      }
    } catch (e) {}
    return '/stt';
  })(),
  _sttCtx: null,        // 云端识别用的 AudioContext
  _sttStream: null,     // 麦克风 MediaStream（云端识别单独拿一根，避免与录音存档互斥）
  _sttSource: null,     // MediaStreamSource
  _sttNode: null,       // ScriptProcessor
  _sttChunks: [],       // 采集到的 Int16 PCM 分片（16kHz 单声道）
  _useCloud: false,     // 当前是否使用云端识别
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
      // 2) Web Speech 预热（iOS Safari：首次真实 speak 偶发被吞，必须用一个【非空】极短串先解封引擎）
      try {
        if (this.synth) {
          this.synth.cancel();
          this.synth.pause();
          this.synth.resume();
          const warm = new SpeechSynthesisUtterance('Hi');
          warm.volume = 0;
          warm.rate = 10;
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

    // 记录 audio 真实播放进度（队列监视用）
    // 有的通道（如有道）加载会挂起：audio 即使没播放数据，play() 后 paused 也是 false，
    // 只有真的在出声音时才会不断触发 playing/timeupdate，以此区分"在播"与"网络挂起"。
    this._audioActiveAt = 0;
    const markAudioActive = () => { this._audioActiveAt = Date.now(); };
    this.audio.addEventListener('playing', markAudioActive);
    this.audio.addEventListener('timeupdate', markAudioActive);
    this.audio.addEventListener('canplay', markAudioActive);

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

    // 预加载 Vosk 离线语音识别模型（Web Speech API 在中国大陆不可用时的备选方案）
    // 方案A：配置了云端识别后端(sttUrl)后，改为云端识别，不再下载 40MB 离线模型。
    // 仅在静态环境（GitHub Pages）且未启用云端时预加载，本地开发用 Web Speech API 即可
    if (!isLocal && !isRender && typeof Vosk !== 'undefined' && !this._useCloudSTT()) {
      this._preloadVoskModel();
    }
  },

  // 是否启用云端语音识别（方案A）：
  // - sttUrl 配了绝对地址（GitHub Pages 前端 + 独立后端）→ 始终启用；
  // - 默认相对路径 /stt 仅当页面本身由后端提供（本地/渲染平台）时有效。
  _useCloudSTT() {
    const b = this.sttBase;
    if (!b) return false;
    if (/^https?:/i.test(b)) return true;
    const host = location.hostname;
    return host.includes('localhost') || host.includes('127.0.0.1') ||
      host.includes('lhr.life') || host.includes('onrender.com');
  },

  // 预加载 Vosk 语音识别模型（约 40MB，首次加载后浏览器会缓存）
  _voskModel: null,
  _voskLoading: false,
  _voskLoadError: null,
  // 模型地址：优先使用后端（如 Render）托管的地址，绕开 GitHub Pages 下载模型超时；
  // 未配置后端时回退到当前页面根路径的绝对地址（Vosk worker 在 blob: 下需绝对 URL）。
  _modelUrl: (function () {
    try {
      if (typeof window !== 'undefined' && window.DAILY_CFG && window.DAILY_CFG.renderModelUrl) {
        return window.DAILY_CFG.renderModelUrl;
      }
      let dir = '/';
      if (typeof location !== 'undefined' && location.pathname) {
        dir = location.pathname;
        if (dir.charAt(0) !== '/') dir = '/' + dir;
        const i = dir.lastIndexOf('/');
        if (i > 0) dir = dir.substring(0, i + 1); // 保留到最后一个 / 之前的目录（含尾部 /）
        else dir = '/';
      }
      return (location.origin || '') + dir + 'models/model.tar.gz';
    } catch (e) {
      return 'models/model.tar.gz';
    }
  })(),
  // 模型分片列表：jsDelivr CDN（cdn.jsdelivr.net 在大陆有加速节点，且返回 CORS 头）。
  // 40MB 超过 jsDelivr 单文件 20MB 上限，故切成 3 片，前端分片下载后合并。
  _modelChunks: [
    'https://cdn.jsdelivr.net/gh/Xiyuandun/dailyenglish@main/models/model.0',
    'https://cdn.jsdelivr.net/gh/Xiyuandun/dailyenglish@main/models/model.1',
    'https://cdn.jsdelivr.net/gh/Xiyuandun/dailyenglish@main/models/model.2'
  ],
  async _preloadVoskModel() {
    if (this._voskModel || this._voskLoading) return;
    this._voskLoading = true;
    // 重新开始下载：先清掉旧的失败标记，允许失败后再次点击录音自动重试
    this._voskLoadError = null;
    try {
      let ab;
      if (Array.isArray(this._modelChunks) && this._modelChunks.length) {
        console.log('[语音识别] 从 jsDelivr CDN 分片下载模型...');
        ab = await this._downloadChunks(this._modelChunks);
      } else {
        console.log('[语音识别] 从单地址下载模型，地址:', this._modelUrl);
        ab = await this._downloadChunks([this._modelUrl]);
      }
      console.log('[语音识别] 模型下载完成，交由识别引擎装载...');
      this._voskModel = await Vosk.createModel(this._toDataUrl(ab));
      console.log('[语音识别] Vosk 模型加载完成');
    } catch (err) {
      // 兜底：分片/带进度下载或 data URL 装载失败时，再让 Vosk 直接按单地址拉取一次
      try {
        console.warn('[语音识别] 分片下载失败，回退到 Vosk 直接加载:', err && (err.message || err));
        this._voskModel = await Vosk.createModel(this._modelUrl);
      } catch (err2) {
        this._voskLoadError = err2;
        console.warn('[语音识别] Vosk 模型加载失败:', err2 && (err2.message || err2));
      }
    } finally {
      this._voskLoading = false;
    }
  },

  // 顺序下载多个分片并合并为完整模型字节，实时汇总上传总进度
  async _downloadChunks(urls) {
    const fire = (key, extra) => { if (typeof this.onStatus === 'function') this.onStatus(key, extra); };
    // 预取各分片总大小（HEAD），用于计算总进度
    const totals = [];
    let grand = 0;
    for (const u of urls) {
      let t = 0;
      try {
        const r = await fetch(u, { method: 'HEAD' });
        t = Number(r.headers.get('Content-Length')) || 0;
      } catch (e) {}
      totals.push(t);
      grand += t;
    }
    const parts = [];
    let received = 0;
    let lastPct = -1;
    for (let i = 0; i < urls.length; i++) {
      const ab = await this._fetchStream(urls[i], (delta) => {
        received += delta;
        if (grand) {
          const pct = Math.floor((received / grand) * 100);
          if (pct !== lastPct) {
            lastPct = pct;
            fire('vosk-download', { loaded: received, total: grand, pct, mb: (received / 1048576).toFixed(1) });
          }
        }
      });
      parts.push(ab);
    }
    return new Blob(parts, { type: 'application/octet-stream' }).arrayBuffer();
  },

  // ArrayBuffer → data URL（Vosk 的 worker 可直接 fetch(data:)，无需再走网络）
  _toDataUrl(ab) {
    const bytes = new Uint8Array(ab);
    let bin = '';
    const CHUNK = 0x8000;
    for (let i = 0; i < bytes.length; i += CHUNK) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
    }
    return 'data:application/octet-stream;base64,' + btoa(bin);
  },

  // Vosk 识别器相关状态
  _voskRecognizer: null,
  _voskAudioContext: null,
  _voskSource: null,
  _voskProcessor: null,
  _voskStream: null,
  _voskText: '',

  // 使用 Vosk 进行语音识别（离线，国内可用）
  // 返回 {ok, error}(或 Promise<boolean>)，ok 为 true 表示识别器已就绪
  async _startVoskRecognition(lang) {
    if (this._voskLoadError) this._preloadVoskModel(); // 上次失败过：这次点击立即重新下载
    // 模型未加载：先确保开始加载，再等待就绪（带进度/超时反馈）
    if (!this._voskModel) {
      if (!this._voskLoading) this._preloadVoskModel();
      const ok = await this._waitVoskModel();
      if (!ok) return false;
    }
    // 模型已就绪：启动识别流
    return this._runVoskRecognition(lang);
  },

  // 等待 Vosk 模型就绪：通过 onStatus 反馈进度，超时后放弃
  // 这样用户在模型下载中点击录音时能看到明确提示，而不是静默卡住/识别为空
  async _waitVoskModel() {
    const WAIT_MS = 180000; // 首次下载 40MB 模型，中国网络下一般较慢，最多等 3 分钟
    const start = Date.now();
    const self = this;
    const fire = (key, extra) => { if (typeof self.onStatus === 'function') self.onStatus(key, extra); };
    fire('vosk-loading', 0);
    return new Promise((resolve) => {
      const check = () => {
        const elapsed = Math.round((Date.now() - start) / 1000);
        if (self._voskModel) { fire('vosk-ready'); return resolve(true); }
        if (self._voskLoadError) { fire('vosk-load-failed'); return resolve(false); }
        if (Date.now() - start > WAIT_MS) {
          if (!self._voskLoadError) self._voskLoadError = new Error('load-timeout');
          fire('vosk-load-failed');
          return resolve(false);
        }
        fire('vosk-loading', elapsed);
        setTimeout(check, 2000);
      };
      check();
    });
  },

  // 真正启动 Vosk 识别流（模型已就绪时）
  async _runVoskRecognition(lang) {
    try {
      this._voskText = '';
      // 创建识别器
      this._voskRecognizer = new this._voskModel.KaldiRecognizer();
      this._voskRecognizer.on('result', (msg) => {
        if (msg.result && msg.result.text) {
          this._voskText += (this._voskText ? ' ' : '') + msg.result.text;
        }
      });
      this._voskRecognizer.on('partialresult', (msg) => {
        // 中间结果可用于实时显示
      });

      // 获取麦克风。不强制 sampleRate（部分安卓/iOS 的浏览器会因该约束报 OverconstrainedError），
      // vosk-browser 会依据音频缓冲的 sampleRate 内部重采样到模型所需的 16kHz。
      this._voskStream = await navigator.mediaDevices.getUserMedia({
        video: false,
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          channelCount: 1
        }
      });

      // 设置音频处理
      this._voskAudioContext = new AudioContext();
      const source = this._voskAudioContext.createMediaStreamSource(this._voskStream);
      this._voskSource = source;
      const processor = this._voskAudioContext.createScriptProcessor(4096, 1, 1);
      this._voskProcessor = processor;
      processor.onaudioprocess = (event) => {
        try {
          this._voskRecognizer.acceptWaveform(event.inputBuffer);
        } catch (e) {}
      };
      source.connect(processor);
      processor.connect(this._voskAudioContext.destination);

      console.log('[语音识别] Vosk 识别已启动');
      return true;
    } catch (err) {
      console.error('[语音识别] Vosk 启动失败:', err);
      const errType = err && err.name;
      let mapped = 'start-failed';
      if (errType === 'NotAllowedError') mapped = 'no-permission';
      if (typeof this.onResult === 'function') this.onResult('', mapped);
      return false;
    }
  },

  // 停止 Vosk 识别并返回结果
  _stopVoskRecognition() {
    try {
      if (this._voskRecognizer) {
        this._voskRecognizer.removeAllListeners();
        this._voskRecognizer = null;
      }
      if (this._voskProcessor) {
        this._voskProcessor.disconnect();
        this._voskProcessor = null;
      }
      if (this._voskSource) {
        this._voskSource.disconnect();
        this._voskSource = null;
      }
      if (this._voskStream) {
        this._voskStream.getTracks().forEach(t => t.stop());
        this._voskStream = null;
      }
      if (this._voskAudioContext) {
        this._voskAudioContext.close();
        this._voskAudioContext = null;
      }
    } catch (e) {}
    const text = this._voskText.trim();
    this._voskText = '';
    return text;
  },

  // 判断当前是否使用有道 TTS（用于长文本分句判断）
  // 有道 TTS 可靠性差、连续请求易被限流/挂起；只在确实没有更可靠通道时才启用
  _willUseYoudao() {
    if (this.useCloudTTS || this.useGoogleTTS) return false;
    // 安卓：若浏览器自带英语语音则优先用 Web Speech（原生连续朗读最稳定、无限流），否则才用有道
    if (this.isAndroid) return !(this.synth && this._hasEnglishVoice());
    // 非安卓：无 speechSynthesis 时才用有道（如微信内置浏览器）
    return !this.synth;
  },

  // 浏览器是否已加载英语语音（决定安卓能否用原生语音合成替代不稳定的有道 TTS）
  _hasEnglishVoice() {
    // getVoices 可能异步加载：内存为空时尝试同步刷新一次
    if (!this.voices.length && this.synth && this.synth.getVoices) {
      const vs = this.synth.getVoices();
      if (vs && vs.length) this.voices = vs;
    }
    return this.voices.some(v => v.lang && String(v.lang).toLowerCase().startsWith('en'));
  },

  // 队列模式：依次朗读多句文本（事件驱动，非定时器）
  // texts: 字符串数组；rate: 速率
  speakQueue(texts, rate = 1) {
    this.stop();  // 清空旧的队列和当前播放
    if (!Array.isArray(texts) || !texts.length) return;
    // 有道 TTS 有长度限制，长文本自动分句
    const useYoudao = this._willUseYoudao();
    const items = [];
    for (const t of texts) {
      if (useYoudao && t && t.length > 180) {
        this._splitText(t, 180).forEach(c => items.push({ text: c, rate }));
      } else {
        items.push({ text: t, rate });
      }
    }
    this._queue = items;
    this._advanceQueue();
  },

  // 静态预生成音频清单 helper（data/audio.js）
  // 命中则返回 audio/ 下的相对路径，未命中返回 null（走原有动态通道）
  _staticAudioPath(text, rate) {
    const M = window.STATIC_AUDIO;
    if (!M || !M.normal) return null;
    // 规范化文本：去首尾空白、压缩连续空格、统一小写，与清单 key 保持一致
    const key = String(text || '').trim().toLowerCase().replace(/\s+/g, ' ');
    if (!key) return null;
    // 慢速优先用清单里的慢速音频（仅为文章预生成）
    if (rate && Number(rate) < 1 && M.slow && M.slow[key]) return 'audio/' + M.slow[key];
    return M.normal[key] ? ('audio/' + M.normal[key]) : null;
  },

  // 播放静态预生成音频。音频文件本身是固定 MP3，天然避开
  // 浏览器无语音 / Google 被屏蔽 / 有道挂起 / 跨域 等各种不稳定因素。
  _playStatic(path, text, rate) {
    this.audio.src = path;
    try { this.audio.playbackRate = 1; } catch {}
    try { this.audio.currentTime = 0; } catch {}
    const p = this.audio.play();
    if (p && typeof p.then === 'function') {
      p.catch((err) => {
        console.warn('[语音] 静态音频播放失败，改用备用通道:', err && (err.name || err.message));
        this._speakFallback(text, rate);
      });
    }
  },

  // 选择朗读方式（统一入口，供 speak / _advanceQueue 调用）
  // 优先级：静态预生成音频 > 云端 TTS > Google TTS > [安卓:有道 TTS | 非安卓:浏览器内置语音] > 有道 TTS
  _dispatchSpeak(text, rate) {
    // 静态预生成音频优先：edge-tts 已生成，任何网络环境都一样稳定播放
    // （GitHub Pages 静态站无后端，且手机可能没有浏览器英语语音/有道不可靠）
    const saPath = this._staticAudioPath(text, rate);
    if (saPath) {
      this._playStatic(saPath, text, rate);
      return;
    }
    // 安全检查：有道 TTS 超长文本自动分句（防止 speakQueue 之外的调用传入长文本）
    if (this._willUseYoudao() && text && text.length > 180) {
      const chunks = this._splitText(text, 180);
      // 第一个直接播放，剩余插入队首
      this._queue = chunks.slice(1).map(c => ({ text: c, rate })).concat(this._queue || []);
      text = chunks[0];
    }
    if (this.useCloudTTS) {
      this._speakCloud(text, rate);
    } else if (this.useGoogleTTS) {
      this._speakGoogleTTS(text, rate);
    } else if (this.isAndroid) {
      // 安卓：优先用浏览器自带英语语音（native 连续朗读稳定、不限流，可整段朗读）
      // 仅当手机没有英语语音时，才回退到不那么稳定的有道 TTS
      if (this.synth && this._hasEnglishVoice()) {
        this._speakFallback(text, rate);
      } else {
        this._speakYoudaoTTS(text, rate);
      }
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
    // 为当前句穿戴卡死监视：若不播放则强制推进，避免整段静默
    this._armQueueWatcher(item);
  },

  // 队列卡死监视：估算该句朗读时长，超时仍未播放/推进则强制跳下一句
  // 解决：安卓有道挂起、iOS 首句偶发无声、某句卡住导致整段静默
  _armQueueWatcher(item) {
    this._clearQueueWatcher();
    // 该项朗读是否走 Web Speech（原生语音合成）：云端/Google 及安卓有道都走 audio
    const useSpeech = !this.useCloudTTS && !this.useGoogleTTS && !this._willUseYoudao() && !!this.synth;
    // 估时：约 12 字符/秒 + 2.5 秒余量，最短 1.8s
    const est = Math.max(1800, Math.round((item.text.length / 12 + 2.5) * 1000));
    const self = this;
    let attempts = 0;
    const tick = () => {
      self._queueWatcher = setTimeout(() => {
        // 已推进完毕或队列被清空，结束监视
        if (!self._queue || !self._queue.length) { self._queueWatcher = null; return; }
        let stillPlaying;
        if (useSpeech) {
          // Web Speech：以 synth.speaking 为准
          stillPlaying = !!(self.synth && self.synth.speaking);
        } else {
          // audio：以「未暂停 且 最近确有播放进度」为准，
          // 避免网络/加载挂起时（paused 已是 false 却没出声音）被误判为在播放
          const active = (Date.now() - (self._audioActiveAt || 0)) < 2500;
          stillPlaying = !self.audio.paused && active;
        }
        if (stillPlaying && attempts < 4) { attempts++; tick(); return; } // 仍在播，继续观察
        self._queueWatcher = null;
        console.warn('[语音] 队列监视超时，强制跳下一句:', item.text.substring(0, 20));
        try { if (useSpeech) self.synth.cancel(); else self.audio.pause(); } catch (e) {}
        self._advanceQueue();
      }, est);
    };
    tick();
  },

  _clearQueueWatcher() {
    if (this._queueWatcher) { clearTimeout(this._queueWatcher); this._queueWatcher = null; }
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
          this._advanceQueueIfAny();
          return;
        }
        // 网络/加载失败
        this._cloudFailedCount++;
        if (this.isAndroid) {
          Toast.show('语音加载失败，请检查网络后重试');
        } else {
          // 非安卓：尝试 Google TTS（如能访问）
          if (this._cloudFailedCount >= 3) this.useGoogleTTS = true;
          this._speakGoogleTTS(text, rate);
          return;
        }
        // 播放失败时继续队列下一句，避免卡住
        this._advanceQueueIfAny();
      });
    }
  },

  // 队列中有项目则推进到下一句（播放失败时调用，避免队列卡住）
  _advanceQueueIfAny() {
    if (this._queue && this._queue.length) {
      setTimeout(() => this._advanceQueue(), 100);
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
    // iOS Safari：先 pause/resume 重置引擎，避免连续朗读中途静默或首句被吞
    if (this.isIOS) {
      try { this.synth.cancel(); this.synth.pause(); this.synth.resume(); } catch {}
    } else {
      try { this.synth.cancel(); } catch {}
    }

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
      if (this.isIOS) {
        // iOS：重置引擎，保证下一句能继续出声
        try { this.synth.pause(); this.synth.resume(); } catch {}
      }
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
    // 清除队列卡死监视器
    this._clearQueueWatcher();
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
  // 云端识别（方案A）只要配置了后端即视为支持，无需 Web Speech API。
  isSupported() {
    if (this._useCloudSTT()) return true;
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
  _useVosk: false,           // 当前是否使用 Vosk 识别
  onStatus: null,            // 可选：识别过程中的状态回调 (key, extra)，如 'vosk-loading'/'vosk-ready'/'vosk-load-failed'

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
    // 重置状态
    this._recChunksText = [];
    this._recLastInterim = '';
    this._recDone = false;
    this._recError = '';
    this._useVosk = false;
    this._useCloud = false;
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

    // ===== 方案A：云端语音识别（阿里云 DashScope Paraformer）=====
    // 配置后端后优先走云端，无需下载 40MB 离线模型，也绕开手机 Web Speech 被屏蔽的问题。
    if (this._useCloudSTT()) {
      this._useCloud = true;
      this._recActive = true;
      // 同步启动录音存档（回放用，与云端识别各自独立拿麦克风）
      this.startRecording();
      // 异步初始化录音流；失败则回退到 Vosk / Web Speech
      const self = this;
      this._startCloudRecognition(lang).then((ok) => {
        if (ok) return;
        self._useCloud = false;
        self._fallbackStartRecognition(lang, SR);
      }).catch(() => {
        self._useCloud = false;
        self._recActive = false;
        if (typeof self.onResult === 'function') self.onResult('', 'start-failed');
      });
      return true;
    }

    this._fallbackStartRecognition(lang, SR);
    return true;
  },

  // 非云端识别回退：Vosk 离线识别 > Web Speech API
  _fallbackStartRecognition(lang, SR) {
    const self = this;
    // Vosk 离线识别：中国大陆 Web Speech 需连 Google 常被屏蔽，Vosk 模型内置录音即可识别。
    if (typeof window.Vosk !== 'undefined') {
      this._useVosk = true;
      this._recActive = true;
      this.startRecording();
      this._startVoskRecognition(lang).then((ok) => {
        if (ok) return;
        self._useVosk = false;
        if (SR) {
          self._recActive = true;
          self._recDone = false;
          self._startWebSpeech(lang);
        } else {
          self._recActive = false;
          if (typeof self.onResult === 'function') self.onResult('', 'start-failed');
        }
      });
      return;
    }
    if (!SR) {
      console.warn('[录音] 既无 Vosk 库，浏览器也不支持 Web Speech API');
      this._recActive = false;
      if (typeof this.onResult === 'function') this.onResult('', 'unsupported');
      return;
    }
    this._startWebSpeech(lang);
  },

  // 云端识别：用 ScriptProcessor 采集麦克风并重采样到 16kHz Int16 PCM
  async _startCloudRecognition(lang) {
    try {
      this._sttChunks = [];
      const Ctx = window.AudioContext || window.webkitAudioContext;
      this._sttCtx = new Ctx();
      this._sttStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, channelCount: 1 }
      });
      const ctx = this._sttCtx;
      const source = ctx.createMediaStreamSource(this._sttStream);
      const node = ctx.createScriptProcessor(4096, 1, 1);
      const self = this;
      node.onaudioprocess = (e) => {
        try {
          const ch = e.inputBuffer.getChannelData(0);
          const out = self._resamplePcm(ch, ctx.sampleRate, 16000);
          const int16 = new Int16Array(out.length);
          for (let i = 0; i < out.length; i++) {
            let s = out[i];
            if (s > 1) s = 1; else if (s < -1) s = -1;
            int16[i] = s < 0 ? (s * 0x8000) : (s * 0x7fff);
          }
          self._sttChunks.push(new Uint8Array(
            int16.buffer.slice(int16.byteOffset, int16.byteOffset + int16.byteLength)
          ));
        } catch (err) {}
      };
      source.connect(node);
      node.connect(ctx.destination);
      this._sttSource = source;
      this._sttNode = node;
      console.log('[语音识别] 云端识别已启动');
      return true;
    } catch (err) {
      console.error('[语音识别] 云端识别启动失败:', err && (err.name || err.message));
      this._stopCloudCapture();
      return false;
    }
  },

  // Float32 音频线性重采样到指定采样率
  _resamplePcm(buf, inRate, outRate) {
    if (!buf || !buf.length || inRate === outRate) return buf;
    const step = inRate / outRate;
    const outLen = Math.floor(buf.length / step);
    const out = new Float32Array(outLen);
    let t = 0;
    for (let i = 0; i < outLen; i++) {
      const i0 = Math.floor(t);
      const i1 = Math.min(i0 + 1, buf.length - 1);
      const frac = t - i0;
      out[i] = buf[i0] * (1 - frac) + buf[i1] * frac;
      t += step;
    }
    return out;
  },

  // 停止云端 PCM 采集
  _stopCloudCapture() {
    try { if (this._sttNode) { this._sttNode.disconnect(); this._sttNode = null; } } catch (e) {}
    try { if (this._sttSource) { this._sttSource.disconnect(); this._sttSource = null; } } catch (e) {}
    try { if (this._sttStream) { this._sttStream.getTracks().forEach(t => t.stop()); this._sttStream = null; } } catch (e) {}
    try { if (this._sttCtx) { this._sttCtx.close(); this._sttCtx = null; } } catch (e) {}
  },

  // 汇总采集到的 PCM 为一段 Int16 字节
  _gatherPcmBytes() {
    const chunks = this._sttChunks || [];
    if (!chunks.length) return null;
    let total = 0;
    for (const c of chunks) total += c.length;
    const bytes = new Uint8Array(total);
    let off = 0;
    for (const c of chunks) { bytes.set(c, off); off += c.length; }
    return bytes;
  },

  // 发送 PCM 到后端完成识别，返回文本
  async _finishCloudRecognition() {
    this._stopCloudCapture();
    const pcm = this._gatherPcmBytes();
    if (!pcm || !pcm.length) return '';
    if (typeof this.onStatus === 'function') this.onStatus('cloud-uploading');
    try {
      const res = await fetch(this.sttBase, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audio: this._bytesToB64(pcm),
          sample_rate: 16000,
          format: 'pcm',
          model: 'paraformer-realtime-v2'
        })
      });
      if (!res.ok) { if (!this._recError) this._recError = 'network'; return ''; }
      const data = await res.json();
      if (!data || data.error) {
        if (!this._recError) this._recError = 'network';
        return '';
      }
      return (data.text || '').trim();
    } catch (err) {
      if (!this._recError) this._recError = 'network';
      return '';
    }
  },

  // Uint8Array → base64（按块避免栈溢出）
  _bytesToB64(bytes) {
    let bin = '';
    const CHUNK = 0x8000;
    for (let i = 0; i < bytes.length; i += CHUNK) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + CHUNK));
    }
    return btoa(bin);
  },

  // Web Speech API 语音识别（Vosk 不可用时的回退通道）
  _startWebSpeech(lang) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    this._useVosk = false;
    this._recActive = true;
    this._recDone = false;

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
      console.warn('[录音] Web Speech 错误:', errType);
      if (errType === 'not-allowed' || errType === 'service-not-allowed') {
        this._recError = 'no-permission';
      } else if (errType === 'network') {
        this._recError = 'network';
      } else if (errType === 'no-speech') {
        this._recError = 'no-speech';
      } else if (errType === 'audio-capture') {
        this._recError = 'audio-capture';
      } else {
        this._recError = errType;
      }
    };
    r.onend = () => {
      console.log('[录音] onend, final片段:', this._recChunksText.length);
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
    if (this._useVosk) {
      // Vosk 模式：直接完成
      this._completeRecognition();
      return;
    }
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

    // 云端模式：需要联网识别，改为异步完成
    if (this._useCloud) {
      const self = this;
      this._finishCloudRecognition().then(text => {
        const error = self._recError || '';
        console.log('[录音] 云端完成, 文本:', text, '错误:', error || '无');
        if (typeof self.onResult === 'function') self.onResult(text, error);
        self.stopRecording().then(recUrl => {
          if (typeof self.onRecordingReady === 'function') self.onRecordingReady(recUrl);
        });
      });
      return;
    }

    let text, error;
    if (this._useVosk) {
      // Vosk 模式：停止 Vosk 识别并获取结果
      text = this._stopVoskRecognition();
      error = this._recError || '';
      console.log('[录音] Vosk 完成, 文本:', text, '错误:', error || '无');
    } else {
      // Web Speech 模式：汇总识别文本（final 优先，interim 兜底）
      text = this._recChunksText.join(' ').trim();
      if (!text && this._recLastInterim) text = this._recLastInterim.trim();
      error = this._recError || '';
      console.log('[录音] 完成, 文本:', text, '错误:', error || '无');
    }

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

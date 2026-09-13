// DailyEnglish - 模块二：场景对话（整段中文 → 录音点评 → 翻页看英文翻译）
const DialogueModule = {
  idx: 0,            // 当前场景索引
  page: 'cn',        // 'cn' = 中文+录音页，'en' = 英文翻译页
  completed: new Set(),
  lastResult: null,  // { transcript, score, hits, missKeys }
  recordings: {},        // turnIndex → { text, recording, error }
  recorded: new Set(),   // 已录音的 turn 索引
  currentTurn: -1,       // 当前正在录的 turn 索引
  finishedScene: false,  // 本场景是否已全部录完并结算

  init() {
    this.idx = 0;
    this.completed = new Set();
    this.startScene();
  },

  renderTabs() {
    const wrap = document.getElementById('sceneTabs');
    wrap.innerHTML = '';
    window.DAILY_SCENARIOS.forEach((s, i) => {
      const b = document.createElement('button');
      const done = this.completed.has(i);
      b.className = `px-3 py-1.5 rounded-lg whitespace-nowrap text-sm ${i === this.idx ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-700'} ${done ? 'ring-2 ring-emerald-400' : ''}`;
      b.textContent = `${done ? '✓ ' : ''}${s.scene}`;
      b.onclick = () => { this.idx = i; this.startScene(); };
      wrap.appendChild(b);
    });
  },

  // 开始一个场景：重置状态、渲染容器、默认显示中文页
  startScene() {
    Speech.stop();
    Speech.clearCache();  // 切换场景，释放上一场景的音频缓存
    this.page = 'cn';
    this.lastResult = null;
    this.recordings = {};
    this.recorded = new Set();
    this.currentTurn = -1;
    this.finishedScene = false;
    this.renderTabs();
    this.render();
  },

  render() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const c = document.getElementById('sceneContent');
    c.innerHTML = `
      <div class="flex items-start justify-between mb-3">
        <div>
          <div class="text-xs text-slate-500">场景 ${this.idx + 1} / ${window.DAILY_SCENARIOS.length} · 共 ${s.turns.length} 句</div>
          <h3 class="text-lg font-bold">${s.scene}</h3>
        </div>
        <div class="flex gap-1 text-xs">
          <span class="page-dot ${this.page === 'cn' ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-600'} w-2.5 h-2.5 rounded-full"></span>
          <span class="page-dot ${this.page === 'en' ? 'bg-brand-600' : 'bg-slate-300 dark:bg-slate-600'} w-2.5 h-2.5 rounded-full"></span>
        </div>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-2 mb-2">
        <div class="text-xs text-amber-700 dark:text-amber-400 mb-0.5">💬 情境提示</div>
        <div class="font-medium text-sm leading-tight">${s.situationZh}</div>
      </div>
      <div id="pageArea" class="min-h-[200px]"></div>
      <div class="flex justify-between mt-3">
        <button id="prevScene" class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">← 上一个场景</button>
        <button id="restartScene" class="px-4 py-2 rounded-lg bg-amber-500 text-white">↻ 重新开始</button>
        <button id="nextScene" class="px-4 py-2 rounded-lg bg-brand-600 text-white">下一个场景 →</button>
      </div>
    `;
    document.getElementById('prevScene').onclick = () => this.nav(-1);
    document.getElementById('nextScene').onclick = () => this.nav(1);
    document.getElementById('restartScene').onclick = () => this.startScene();
    this.renderPage();
  },

  // 渲染当前页内容
  renderPage() {
    if (this.page === 'cn') this.renderCnPage();
    else this.renderEnPage();
  },

  // 第一页：逐句中文 + 每句单独录音
  renderCnPage() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const turns = s.turns.map((t, i) => {
      const isUser = t.role === 'user';
      const align = isUser ? 'justify-end' : 'justify-start';
      const bubble = isUser
        ? 'bg-brand-100 dark:bg-brand-900/40 border-brand-300 dark:border-brand-700 rounded-tr-sm'
        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 rounded-tl-sm';
      const name = isUser ? s.roles.user : s.roles.clerk;
      const rec = this.recordings[i];
      const attempted = this.recorded.has(i);
      return `
        <div class="flex ${align} word-pop">
          <div class="max-w-[80%] ${bubble} border rounded-lg p-1.5 shadow-sm">
            <div class="text-[10px] text-slate-400 leading-tight">${name}</div>
            <div class="font-medium text-sm leading-tight">${t.zh}</div>
            <div class="flex items-center gap-2 mt-1.5 flex-wrap">
              <button id="recTurn_${i}" class="per-rec-btn text-xs px-2 py-1 rounded-full text-white ${attempted ? 'bg-emerald-500' : 'bg-red-500'}">${attempted ? '↻ 重录' : '🎤 录音'}</button>
              ${rec && rec.recording ? `<button id="playTurn_${i}" class="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-600">▶ 回放</button>` : ''}
            </div>
            ${rec && rec.text ? `<div class="mt-1 text-xs text-emerald-600 leading-snug">✓ 你说了：${rec.text}</div>` : ''}
          </div>
        </div>`;
    }).join('');

    const pageArea = document.getElementById('pageArea');
    pageArea.innerHTML = `
      <div class="mb-1 text-xs text-slate-500">📄 第一页 · 逐句录音（每句单独录一段）</div>
      <div class="space-y-0.5 mb-2">${turns}</div>

      <div class="border-t border-slate-200 dark:border-slate-700 pt-2">
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2">
          <div class="text-sm font-medium mb-1">🎤 逐句录音挑战</div>
          <div class="text-sm text-slate-500 dark:text-slate-400 mb-2">请扮演 ${s.roles.user} 和 ${s.roles.clerk} 两个角色，用英文逐句说出每段台词 —— <b>每一句单独录一段</b>，录完一句再录下一句。</div>
          <div id="recStatus" class="mt-2 text-sm text-slate-400">点击每句右侧的 🎤 录音按钮，一句一句录。</div>
          <div id="feedbackArea" class="mt-3"></div>
        </div>
      </div>

      <div class="text-center mt-3">
        <button id="flipToEn" class="px-5 py-2 rounded-lg bg-brand-600 text-white">翻页 → 查看英文翻译</button>
      </div>
    `;
    s.turns.forEach((_, i) => {
      const rb = document.getElementById(`recTurn_${i}`);
      if (rb) rb.onclick = () => this.recordTurn(i);
      const pb = document.getElementById(`playTurn_${i}`);
      if (pb) pb.onclick = () => this.playTurnRecording(i);
    });
    document.getElementById('flipToEn').onclick = () => { this.page = 'en'; this.renderPage(); };
    this.updateOverall();
  },

  // 第二页：整段英文翻译
  renderEnPage() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const turns = s.turns.map((t) => {
      const isUser = t.role === 'user';
      const align = isUser ? 'justify-end' : 'justify-start';
      const bubble = isUser
        ? 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-300 dark:border-emerald-700 rounded-tr-sm'
        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 rounded-tl-sm';
      const name = isUser ? s.roles.user : s.roles.clerk;
      return `
        <div class="flex ${align} word-pop">
          <div class="max-w-[80%] ${bubble} border rounded-lg p-1.5 shadow-sm">
            <div class="text-[10px] text-slate-400 leading-tight">${name}</div>
            <div class="font-medium text-brand-700 dark:text-brand-300 text-sm leading-tight">${t.en}</div>
            <div class="text-xs text-slate-500 leading-tight">${t.zh}</div>
            <button class="replay-btn text-xs text-slate-400 hover:text-brand-500">🔊 朗读</button>
          </div>
        </div>`;
    }).join('');

    const tipsHtml = s.tips.map(t => `<li>${t}</li>`).join('');
    const pageArea = document.getElementById('pageArea');
    pageArea.innerHTML = `
      <div class="mb-1 text-xs text-slate-500">📄 第二页 · 整段英文翻译</div>
      <div class="space-y-0.5 mb-2">${turns}</div>
      <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 mb-2">
        <div class="text-sm font-medium text-blue-700 dark:text-blue-400 mb-1">💡 语言解析</div>
        <ul class="text-sm space-y-1 list-disc list-inside text-slate-600 dark:text-slate-300">${tipsHtml}</ul>
      </div>
      <div class="text-center">
        <button id="replayAll" class="px-4 py-2 rounded-lg bg-brand-600 text-white mr-2">🔊 朗读整段对话</button>
        <button id="stopAll" class="px-4 py-2 rounded-lg bg-red-500 text-white mr-2">⏹️ 停止</button>
        <button id="flipToCn" class="px-5 py-2 rounded-lg bg-slate-200 dark:bg-slate-700">← 返回录音页</button>
      </div>
    `;
    pageArea.querySelectorAll('.replay-btn').forEach((b, i) => {
      b.onclick = () => Speech.speak(s.turns[i].en);
    });
    document.getElementById('replayAll').onclick = () => this.replayAll();
    document.getElementById('stopAll').onclick = () => Speech.stop();
    document.getElementById('flipToEn')?.remove();
    document.getElementById('flipToCn').onclick = () => { Speech.stop(); this.page = 'cn'; this.renderPage(); };

    // 预缓存本场景所有英文句子，点击朗读即可秒播
    Speech.prefetch(s.turns.map(t => t.en));
  },

  // 录音指定的一句：手动开始/停止，每次只录一句
  recordTurn(i) {
    const status = document.getElementById('recStatus');
    const rb = document.getElementById(`recTurn_${i}`);

    // 正在录音 → 停止
    if (Speech.isRecording()) {
      if (status) status.innerHTML = '<span class="text-slate-400">正在停止录音…</span>';
      Speech.stopRecognition();
      return;
    }

    if (!Speech.isSupported()) {
      if (status) status.innerHTML = '<span class="text-red-500">⚠️ 当前浏览器不支持语音识别，请使用 Chrome 或 Edge 浏览器（Safari/iPad 部分版本不支持）</span>';
      return;
    }
    if (!window.isSecureContext) {
      if (status) status.innerHTML = '<span class="text-red-500">⚠️ 语音识别需要 HTTPS 环境，请通过 https:// 链接访问</span>';
      return;
    }

    this.currentTurn = i;
    if (rb) { rb.classList.add('recording'); rb.classList.remove('bg-red-500', 'bg-emerald-500'); rb.classList.add('bg-slate-600'); rb.textContent = '⏹ 停止'; }

    Speech.onResult = (text, error) => this.turnResult(i, text, error);
    Speech.onRecordingReady = (recUrl) => {
      const cur = this.recordings[i];
      if (cur && recUrl) { cur.recording = recUrl; this.renderCnPage(); }
    };
    Speech.onStatus = (key, extra) => this.handleStatus(key, extra);

    if (status) status.innerHTML = `<span class="text-slate-400">🎤 录音中…（第 ${i + 1} 句）说完后点击"停止"</span>`;
    Store.set({ pronCount: Store.get().pronCount + 1 });
    Speech.startRecognition('en-US');
  },

  // 单句识别结果回调
  turnResult(i, text, error) {
    this.recorded.add(i);
    this.recordings[i] = { text: text || '', error, recording: (this.recordings[i] && this.recordings[i].recording) || '' };
    this.renderCnPage();  // 重绘，显示该句识别文本 / 回放按钮
    const status = document.getElementById('recStatus');
    const errMsg = {
      'no-permission': '麦克风权限被拒绝。请点击地址栏左侧锁图标，允许麦克风权限后刷新重试',
      'network': '识别服务不可用（网络原因），请检查网络后重试',
      'start-failed': '录音启动失败，请检查麦克风是否被其他程序占用',
      'no-speech': '未检测到语音，请对着麦克风大声说出英文',
      'audio-capture': '无法访问麦克风，请检查浏览器麦克风权限',
      'vosk-load-failed': '离线识别模型加载失败，请检查网络后刷新重试'
    }[error];
    if (errMsg) {
      if (status) status.innerHTML = `<span class="text-red-500">⚠️ ${errMsg}</span>`;
    } else if (!text) {
      if (status) status.innerHTML = '<span class="text-amber-600">⚠️ 未识别到内容，请重试或翻页对照英文台词</span>';
    } else {
      if (status) status.innerHTML = `<span class="text-emerald-600">✓ 第 ${i + 1} 句识别完成</span>`;
    }
    this.updateOverall();
  },

  // 识别过程中的状态反馈（Vosk 离线模型首次下载等）
  handleStatus(key, extra) {
    const st = document.getElementById('recStatus');
    if (!st) return;
    if (key === 'vosk-download') {
      const pct = (extra && extra.pct) ?? 0;
      const mb = (extra && extra.mb) || '0.0';
      const width = Math.max(2, Math.min(100, pct));
      st.innerHTML = `
        <div class="flex items-center gap-2"><span class="whitespace-nowrap text-sky-600">⏳ 正在下载语音识别模型 ${mb} MB</span></div>
        <div class="mt-2 h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          <div class="h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-400 transition-all duration-150" style="width:${width}%"></div>
        </div>
        <div class="mt-1 text-xs text-slate-500">已下载 ${pct}%（首次约 1-3 分钟），完成后录音即可识别</div>`;
    } else if (key === 'vosk-loading') {
      st.innerHTML = `<span class="text-sky-600">⏳ 正在下载语音识别模型（约 40MB，已 ${extra || 0} 秒），下载完成后录音即可识别…</span>`;
    } else if (key === 'vosk-ready') {
      st.innerHTML = '<span class="text-slate-400">🎤 识别模型已就绪，正在录音…说完后点击"停止"</span>';
    } else if (key === 'vosk-load-failed') {
      st.innerHTML = '<span class="text-red-500">⚠️ 离线识别模型下载失败（网络原因）。已回退到系统识别，若仍无结果请刷新重试</span>';
    }
  },

  // 回放某一句的录音
  playTurnRecording(i) {
    const url = this.recordings[i] && this.recordings[i].recording;
    if (!url) { Toast.show('暂无录音可回放'); return; }
    const btn = document.getElementById(`playTurn_${i}`);
    const started = Speech.playRecording(url);
    if (btn) btn.textContent = started ? '⏸ 暂停' : '▶ 回放';
  },

  // 汇总已录音句数 / 命中，全部录完标记场景完成
  updateOverall() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const total = s.turns.length;
    const done = this.recorded.size;
    let right = 0;
    s.turns.forEach((t, i) => {
      const rec = this.recordings[i];
      if (!rec || !rec.text) return;
      const tl = rec.text.toLowerCase();
      const keys = t.keywords || [];
      if (keys.some(k => tl.includes(k.toLowerCase()))) { right++; return; }
      const words = t.en.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      if (words.some(w => tl.includes(w))) right++;
    });
    const fa = document.getElementById('feedbackArea');
    if (fa) {
      fa.innerHTML = `<div class="text-sm text-slate-500">已录 <b class="text-brand-600">${done}</b>/${total} 句 · ${right > 0 ? `约 <b class="text-emerald-600">${right}</b> 句命中台词` : '继续录，翻页可看英文对照'}</div>`;
    }
    if (done >= total && !this.finishedScene) {
      this.finishedScene = true;
      if (!this.completed.has(this.idx)) {
        this.completed.add(this.idx);
        if (this.completed.size >= window.DAILY_SCENARIOS.length) {
          Store.recordTask('dialogue');
          Toast.show('🎉 全部场景对话完成！+20 积分');
        } else {
          Toast.show('✓ 场景完成');
        }
        this.renderTabs();
      }
    }
  },

  // 朗读整段对话（队列模式：一句播完自动播下一句）
  replayAll() {
    const s = window.DAILY_SCENARIOS[this.idx];
    Speech.speakQueue(s.turns.map(t => t.en));
  },

  nav(dir) {
    const n = window.DAILY_SCENARIOS.length;
    this.idx = (this.idx + dir + n) % n;
    this.startScene();
  }
};

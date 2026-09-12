// DailyEnglish - 模块二：场景对话（整段中文 → 录音点评 → 翻页看英文翻译）
const DialogueModule = {
  idx: 0,            // 当前场景索引
  page: 'cn',        // 'cn' = 中文+录音页，'en' = 英文翻译页
  completed: new Set(),
  lastResult: null,  // { transcript, score, hits, missKeys }

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

  // 第一页：整段中文对话 + 录音点评
  renderCnPage() {
    const s = window.DAILY_SCENARIOS[this.idx];
    const turns = s.turns.map((t, i) => {
      const isUser = t.role === 'user';
      const align = isUser ? 'justify-end' : 'justify-start';
      const bubble = isUser
        ? 'bg-brand-100 dark:bg-brand-900/40 border-brand-300 dark:border-brand-700 rounded-tr-sm'
        : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 rounded-tl-sm';
      const name = isUser ? s.roles.user : s.roles.clerk;
      return `
        <div class="flex ${align} word-pop">
          <div class="max-w-[80%] ${bubble} border rounded-lg p-1.5 shadow-sm">
            <div class="text-[10px] text-slate-400 leading-tight">${name}</div>
            <div class="font-medium text-sm leading-tight">${t.zh}</div>
          </div>
        </div>`;
    }).join('');

    const pageArea = document.getElementById('pageArea');
    pageArea.innerHTML = `
      <div class="mb-1 text-xs text-slate-500">📄 第一页 · 整段中文对话</div>
      <div class="space-y-0.5 mb-2">${turns}</div>

      <div class="border-t border-slate-200 dark:border-slate-700 pt-2">
        <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2">
          <div class="text-sm font-medium mb-1">🎤 录音挑战</div>
          <div class="text-sm text-slate-500 dark:text-slate-400 mb-2">请根据上面的中文对话，把你需要说的英文台词（${s.roles.user}的台词）一口气说出来。</div>
          <div class="flex items-center justify-center gap-2">
            <button id="recBtn" class="btn-record px-6 py-3 rounded-full bg-red-500 text-white text-lg">🎤 点击录音</button>
            <button id="playRecBtn" class="px-4 py-3 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-base hidden">▶ 回放录音</button>
          </div>
          <div id="recStatus" class="mt-2 text-sm text-slate-400">点击按钮，用英文说出你的台词</div>
          <div id="feedbackArea" class="mt-3"></div>
        </div>
      </div>

      <div class="text-center mt-3">
        <button id="flipToEn" class="px-5 py-2 rounded-lg bg-brand-600 text-white">翻页 → 查看英文翻译</button>
      </div>
    `;
    document.getElementById('recBtn').onclick = () => this.record(s);
    document.getElementById('playRecBtn').onclick = () => this.playRecording();
    document.getElementById('flipToEn').onclick = () => { this.page = 'en'; this.renderPage(); };
    // 已有结果则回显
    if (this.lastResult) this.showFeedback(s, this.lastResult);
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

  // 录音：手动开始/停止模式（无时长限制，停止后立即可回放）
  record(s) {
    const btn = document.getElementById('recBtn');
    const status = document.getElementById('recStatus');
    const playBtn = document.getElementById('playRecBtn');

    // 正在录音 → 停止
    if (Speech.isRecording()) {
      btn.textContent = '⏳ 处理中…';
      status.innerHTML = '<span class="text-slate-400">正在停止录音…</span>';
      Speech.stopRecognition();
      return;
    }

    // 未在录音 → 开始
    if (!Speech.isSupported()) {
      status.innerHTML = '<span class="text-red-500">⚠️ 当前浏览器不支持语音识别，请使用 Chrome 或 Edge 浏览器<br>（Safari/Firefox 暂不支持）</span>';
      return;
    }
    if (!window.isSecureContext) {
      status.innerHTML = '<span class="text-red-500">⚠️ 语音识别需要 HTTPS 环境，请通过 https:// 链接访问</span>';
      return;
    }

    // 隐藏旧的回放按钮
    if (playBtn) playBtn.classList.add('hidden');
    // 设置回调
    Speech.onResult = (text, error) => {
      btn.classList.remove('recording');
      btn.textContent = '🎤 重新录音';
      if (error && error !== 'unsupported') {
        const errMsg = {
          'no-permission': '麦克风权限被拒绝。请点击地址栏左侧的锁图标，将麦克风权限设为"允许"后刷新页面重试',
          'network': '语音识别服务不可用（网络原因，无法连接识别后端）。请检查网络后重试，或使用录音回放功能对照练习',
          'start-failed': '录音启动失败。请检查麦克风是否被其他程序占用',
          'no-speech': '未检测到语音，请对着麦克风大声说出英文台词',
          'audio-capture': '无法访问麦克风设备，请检查浏览器麦克风权限',
          'vosk-load-failed': '离线语音识别模型加载失败，请检查网络后刷新页面重试'
        }[error] || `语音识别失败（${error}），建议使用录音回放功能对照练习`;
        status.innerHTML = `<span class="text-red-500">⚠️ ${errMsg}</span>`;
      } else if (!text) {
        status.innerHTML = '<span class="text-amber-600">⚠️ 未识别到内容。请对着麦克风用英文说出你的台词（或使用录音回放对照练习）</span>';
      }
      this.lastResult = { transcript: text, error, recording: '' };
      this.showFeedback(s, this.lastResult);
    };
    Speech.onRecordingReady = (recUrl) => {
      const pb = document.getElementById('playRecBtn');
      const st = document.getElementById('recStatus');
      if (recUrl) {
        // 录音成功：显示回放按钮
        if (pb) { pb.classList.remove('hidden'); pb.textContent = '▶ 回放录音'; pb.disabled = false; }
        if (st && !Speech._recError) {
          st.innerHTML = '<span class="text-emerald-600">✓ 录音完成，点击"▶ 回放录音"听听自己说的怎么样</span>';
        }
        if (this.lastResult) this.lastResult.recording = recUrl;
      } else {
        // 录音失败：显示原因，禁用回放按钮
        if (pb) { pb.classList.add('hidden'); pb.disabled = true; }
        const reason = Speech.getRecordingFailReason();
        let msg = '录音回放不可用';
        if (reason === 'unsupported') {
          msg = '当前浏览器不支持录音回放（如微信内置浏览器），请使用 Chrome 或 Safari 打开本页面';
        } else if (reason === 'NotAllowedError') {
          msg = '麦克风权限被拒绝，无法录音回放';
        } else {
          msg = '录音回放功能不可用，请使用 Chrome 或 Safari 浏览器';
        }
        if (st) st.innerHTML = `<span class="text-amber-600">⚠️ ${msg}</span>`;
      }
    };
    Speech.onRecordingEnded = () => {
      const pb = document.getElementById('playRecBtn');
      if (pb && pb.textContent.includes('暂停')) pb.textContent = '▶ 回放录音';
    };

    // 识别过程中的状态反馈（Vosk 离线模型首次下载 / 云端上传）
    Speech.onStatus = (key, extra) => {
      const st = document.getElementById('recStatus');
      if (!st) return;
      // vosk-* 仅录音中会有；cloud-uploading 发生在停止录音后上传阶段
      if (!Speech.isRecording() && key !== 'cloud-uploading') return;
      if (key === 'cloud-uploading') {
        st.innerHTML = '<span class="text-sky-600">⏳ 正在上传录音，云端识别中…请稍候</span>';
      } else if (key === 'vosk-download') {
        const pct = (extra && extra.pct) ?? 0;
        const mb = (extra && extra.mb) || '0.0';
        const width = Math.max(2, Math.min(100, pct));
        st.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="whitespace-nowrap text-sky-600">⏳ 正在下载语音识别模型 ${mb} MB</span>
          </div>
          <div class="mt-2 h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <div class="h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-400 transition-all duration-150" style="width:${width}%"></div>
          </div>
          <div class="mt-1 text-xs text-slate-500">已下载 ${pct}%（首次约 1-3 分钟），完成后录音即可识别</div>`;
      } else if (key === 'vosk-loading') {
        st.innerHTML = `<span class="text-sky-600">⏳ 正在下载语音识别模型（约 40MB，已 ${extra || 0} 秒），下载完成后录音即可识别，请稍候…</span>`;
      } else if (key === 'vosk-ready') {
        st.innerHTML = '<span class="text-slate-400">🎤 识别模型已就绪，正在录音…说完后点击"停止录音"</span>';
      } else if (key === 'vosk-load-failed') {
        st.innerHTML = '<span class="text-red-500">⚠️ 离线识别模型下载失败（网络原因）。已回退到系统识别，若仍无结果请检查网络后刷新重试</span>';
      }
    };

    // 开始录音
    btn.classList.add('recording');
    btn.textContent = '⏹ 停止录音';
    status.innerHTML = '<span class="text-slate-400">🎤 录音中…说完后点击"停止录音"</span>';
    Store.set({ pronCount: Store.get().pronCount + 1 });
    Speech.startRecognition('en-US');
  },

  // 回放最近一次录音
  playRecording() {
    const url = Speech.getLastRecordingUrl();
    const playBtn = document.getElementById('playRecBtn');
    if (!url) {
      Toast.show('暂无录音可回放，请先点击录音按钮录音');
      return;
    }
    // 调用播放，根据返回值切换按钮文字
    const started = Speech.playRecording(url);
    if (playBtn) playBtn.textContent = started ? '⏸ 暂停回放' : '▶ 回放录音';
  },

  // 展示点评
  showFeedback(s, result) {
    const userTurns = s.turns.filter(t => t.role === 'user');
    const expected = userTurns.map(t => t.en).join('. ');
    const transcript = result.transcript || '';

    // 整体相似度评分
    const simScore = Speech.scorePron(transcript, expected);

    // 关键词命中
    const allKeys = userTurns.flatMap(t => t.keywords || []);
    const hits = allKeys.filter(k => transcript.toLowerCase().includes(k.toLowerCase()));
    const missKeys = allKeys.filter(k => !transcript.toLowerCase().includes(k.toLowerCase()));
    const keyRate = allKeys.length ? Math.round((hits.length / allKeys.length) * 100) : 0;

    // 句子覆盖：用户台词覆盖了几条 user turn
    let covered = 0;
    userTurns.forEach(t => {
      const words = t.en.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/).filter(w => w.length > 3);
      const hitCount = words.filter(w => transcript.toLowerCase().includes(w)).length;
      if (hitCount / Math.max(1, words.length) >= 0.4) covered++;
    });

    // 综合分：相似度 40% + 关键词 40% + 覆盖率 20%
    const finalScore = Math.round(simScore * 0.4 + keyRate * 0.4 + (covered / userTurns.length) * 100 * 0.2);

    let lvl = '需改进', col = 'text-red-600', emoji = '❌';
    if (finalScore >= 75) { lvl = '表现优秀！'; col = 'text-emerald-600'; emoji = '🎉'; }
    else if (finalScore >= 50) { lvl = '不错，继续加油'; col = 'text-amber-600'; emoji = '👍'; }

    result.score = finalScore;
    result.hits = hits;
    result.missKeys = missKeys;
    result.covered = covered;
    result.totalUserTurns = userTurns.length;

    const fa = document.getElementById('feedbackArea');
    if (!fa) return;
    fa.innerHTML = `
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-xl p-4">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-medium text-slate-500">📊 智能点评</span>
          <span class="${col} font-bold text-lg">${emoji} ${finalScore}/100 · ${lvl}</span>
        </div>
        <div class="grid grid-cols-3 gap-2 mb-3 text-center text-xs">
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2">
            <div class="text-slate-400">相似度</div><div class="font-bold text-brand-600 text-base">${simScore}</div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2">
            <div class="text-slate-400">关键词</div><div class="font-bold text-emerald-600 text-base">${hits.length}/${allKeys.length}</div>
          </div>
          <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-2">
            <div class="text-slate-400">台词覆盖</div><div class="font-bold text-amber-600 text-base">${covered}/${userTurns.length}</div>
          </div>
        </div>
        <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-2.5 mb-2">
          <div class="text-xs text-red-700 dark:text-red-400 font-medium mb-0.5">🎤 你说了：</div>
          <div class="text-sm">${transcript || '(未识别到内容，请重试或检查麦克风)'}</div>
        </div>
        ${hits.length ? `<div class="text-sm text-emerald-600 mb-1">✓ 命中关键词：${hits.join('、')}</div>` : ''}
        ${missKeys.length ? `<div class="text-sm text-red-500 mb-1">✗ 未命中：${missKeys.join('、')}</div>` : ''}
        <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-2.5 mt-2">
          <div class="text-xs text-emerald-700 dark:text-emerald-400 font-medium mb-0.5">💡 建议</div>
          <div class="text-sm">翻页查看完整英文翻译，对照练习未说出的台词，再重新录音挑战。</div>
        </div>
      </div>
    `;

    // 若已有录音，回显回放按钮
    if (result.recording) {
      const playBtn = document.getElementById('playRecBtn');
      if (playBtn) {
        playBtn.classList.remove('hidden');
        playBtn.textContent = '▶ 回放录音';
      }
    }

    // 标记完成（录音过即算完成本场景）
    if (!this.completed.has(this.idx)) {
      this.completed.add(this.idx);
      if (this.completed.size >= window.DAILY_SCENARIOS.length) {
        Store.recordTask('dialogue');
        Toast.show('🎉 全部场景对话完成！+20 积分');
      }
      this.renderTabs();
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

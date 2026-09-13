// DailyEnglish - 模块一：单词训练
const WordModule = {
  idx: 0,
  score: 0,
  quizIdx: 0,
  quizAnswers: [],

  init() {
    const s = Store.get();
    this.idx = s.wordIndex || 0;
    this.score = 0;
    // 用当天的实际单词数量填充各处"总数"显示（标题/进度/完成页）
    const total = (Array.isArray(window.DAILY_WORDS) && window.DAILY_WORDS.length) || 10;
    for (const id of ['wordTotalTitle', 'wordProgressTotal', 'wordTotalDone']) {
      const el = document.getElementById(id);
      if (el) el.textContent = total;
    }
    document.getElementById('prevWord').onclick = () => this.prev();
    document.getElementById('nextWord').onclick = () => this.next();
    document.getElementById('downloadPdf').onclick = () => this.downloadPdf();
    if (s.wordQuizDone) {
      this.showDone();
    } else if (this.idx >= window.DAILY_WORDS.length) {
      this.startQuiz();
    } else {
      this.render();
    }
  },

  render() {
    const w = window.DAILY_WORDS[this.idx];
    if (!w) { this.startQuiz(); return; }
    const total = window.DAILY_WORDS.length;
    document.getElementById('wordProgress').textContent = `${this.idx + 1} / ${total}`;
    document.getElementById('wordBar').style.width = `${((this.idx + 1) / total) * 100}%`;
    const card = document.getElementById('wordCard');
    card.classList.remove('word-pop'); void card.offsetWidth; card.classList.add('word-pop');
    card.innerHTML = `
      <div class="mb-4">
        <div class="text-4xl font-bold text-brand-600 dark:text-brand-400">${w.word}</div>
        <div class="text-slate-500 dark:text-slate-400 mt-1">${w.phonetic}</div>
      </div>
      <div class="flex justify-center gap-2 mb-5">
        <button id="playBtn" class="px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-700">🔊 朗读</button>
        <button id="slowBtn" class="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300">🐢 慢速</button>
      </div>
      <div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 mb-4">
        <div class="text-sm text-slate-500 mb-1">释义</div>
        <div class="font-medium">${w.meaning}</div>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 mb-4">
        <div class="text-sm text-amber-700 dark:text-amber-400 mb-1">例句</div>
        <div class="font-medium mb-1">${w.example}</div>
        <div class="text-sm text-slate-500">${w.exampleZh}</div>
      </div>
      <div class="flex justify-center items-center gap-2">
        <button id="recordBtn" class="btn-record px-5 py-2 rounded-full bg-red-500 text-white">🎤 录音跟读</button>
        <button id="playRecBtn" class="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-base hidden">▶ 回放录音</button>
      </div>
      <div id="pronResult" class="mt-3 text-sm"></div>
    `;
    document.getElementById('playBtn').onclick = () => Speech.speak(w.word);
    document.getElementById('slowBtn').onclick = () => Speech.speak(w.word, 0.6);
    document.getElementById('recordBtn').onclick = () => this.record(w);
    document.getElementById('playRecBtn').onclick = () => this.playRecording();
    // 回显已有录音回放按钮
    if (this._lastRecording) {
      const pb = document.getElementById('playRecBtn');
      if (pb) { pb.classList.remove('hidden'); pb.textContent = '▶ 回放录音'; }
    }
  },

  // 录音：手动开始/停止模式（无时长限制，停止后立即可回放）
  record(w) {
    const btn = document.getElementById('recordBtn');
    const res = document.getElementById('pronResult');
    const playBtn = document.getElementById('playRecBtn');

    // 正在录音 → 停止
    if (Speech.isRecording()) {
      btn.textContent = '⏳ 处理中…';
      res.innerHTML = '<span class="text-slate-400">正在停止录音…</span>';
      Speech.stopRecognition();
      return;
    }

    // 未在录音 → 开始
    if (!Speech.isSupported()) {
      res.innerHTML = '<span class="text-red-500">⚠️ 当前浏览器不支持语音识别，请使用 Chrome 或 Edge 浏览器<br>（Safari/Firefox 暂不支持）</span>';
      return;
    }
    if (!window.isSecureContext) {
      res.innerHTML = '<span class="text-red-500">⚠️ 语音识别需要 HTTPS 环境，请通过 https:// 链接访问</span>';
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
          'network': '语音识别服务不可用（需连接 Google 服务，中国大陆网络可能受限）。建议使用录音回放功能对照练习',
          'start-failed': '录音启动失败。请检查麦克风是否被其他程序占用',
          'no-speech': '未检测到语音，请对着麦克风大声朗读单词',
          'audio-capture': '无法访问麦克风设备，请检查浏览器麦克风权限',
          'vosk-load-failed': '离线语音识别模型加载失败，请检查网络后刷新页面重试'
        }[error] || `语音识别失败（${error}），建议使用录音回放功能对照练习`;
        res.innerHTML = `<span class="text-red-500">⚠️ ${errMsg}</span>`;
      } else if (!text) {
        res.innerHTML = '<span class="text-amber-600">⚠️ 未识别到内容。请对着麦克风用英文朗读单词（或使用录音回放对照练习）</span>';
      } else {
        const score = Speech.scorePron(text, w.word);
        Store.set({ pronCount: Store.get().pronCount + 1 });
        let level = '❌ 需练习', color = 'text-red-600';
        if (score >= 85) { level = '🎉 优秀！'; color = 'text-emerald-600'; }
        else if (score >= 60) { level = '👍 不错'; color = 'text-amber-600'; }
        res.innerHTML = `<div class="${color} font-medium">${level} 评分：${score}/100</div>
          <div class="text-slate-500 mt-1">识别到：${text || '(未识别)'}</div>`;
      }
    };
    Speech.onRecordingReady = (recUrl) => {
      this._lastRecording = recUrl;
      const pb = document.getElementById('playRecBtn');
      const st = document.getElementById('pronResult');
      if (recUrl) {
        if (pb) { pb.classList.remove('hidden'); pb.textContent = '▶ 回放录音'; pb.disabled = false; }
        if (st && !Speech._recError) {
          st.insertAdjacentHTML('beforeend', '<div class="text-emerald-600 text-xs mt-1">✓ 录音完成，点击"▶ 回放录音"听听自己说的怎么样</div>');
        }
      } else {
        if (pb) { pb.classList.add('hidden'); pb.disabled = true; }
        const reason = Speech.getRecordingFailReason();
        let msg = '录音回放不可用';
        if (reason === 'unsupported') msg = '当前浏览器不支持录音回放，请使用 Chrome 或 Safari';
        else if (reason === 'NotAllowedError') msg = '麦克风权限被拒绝，无法录音回放';
        if (st) st.insertAdjacentHTML('beforeend', `<div class="text-amber-600 text-xs mt-1">⚠️ ${msg}</div>`);
      }
    };
    Speech.onRecordingEnded = () => {
      const pb = document.getElementById('playRecBtn');
      if (pb && pb.textContent.includes('暂停')) pb.textContent = '▶ 回放录音';
    };

    // 开始录音
    btn.classList.add('recording');
    btn.textContent = '⏹ 停止录音';
    res.innerHTML = '<span class="text-slate-400">🎤 录音中…读完单词后点击"停止录音"</span>';
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
    const started = Speech.playRecording(url);
    if (playBtn) playBtn.textContent = started ? '⏸ 暂停回放' : '▶ 回放录音';
  },

  prev() {
    if (this.idx > 0) { this.idx--; Store.set({ wordIndex: this.idx }); this.render(); }
  },

  next() {
    this.idx++;
    Store.set({ wordIndex: this.idx });
    if (this.idx >= window.DAILY_WORDS.length) {
      this.startQuiz();
    } else {
      this.render();
    }
  },

  startQuiz() {
    document.getElementById('wordLearnView').classList.add('hidden');
    document.getElementById('wordQuizView').classList.remove('hidden');
    this.quizIdx = 0;
    this.score = 0;
    this.quizAnswers = [];
    this.renderQuiz();
  },

  renderQuiz() {
    const words = window.DAILY_WORDS;
    const total = 6;  // 6 道题
    const wrap = document.getElementById('quizContainer');
    if (this.quizIdx >= total) { this.finishQuiz(); return; }
    // 随机抽题：0/2/4 听音辨词，1/3 中文填空，5 发音评分
    const type = this.quizIdx % 3;
    let html = `<div class="mb-3 text-sm text-slate-500">第 ${this.quizIdx + 1} / ${total} 题</div>`;
    const target = words[Math.floor(Math.random() * words.length)];

    if (type === 0) {
      // 听音辨词
      const opts = this.shuffle([target, ...this.randomOthers(target.word, 3)]);
      window._curQ = { type, answer: target.word, opts };
      html += `<div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
        <div class="font-medium mb-3">🔊 点击播放，选出听到的单词：</div>
        <button id="quizPlay" class="px-4 py-2 rounded-lg bg-brand-600 text-white mb-3">🔊 播放</button>
        <div class="grid grid-cols-2 gap-2" id="quizOpts"></div>
      </div>`;
      wrap.innerHTML = html;
      document.getElementById('quizPlay').onclick = () => Speech.speak(target.word);
      const ow = document.getElementById('quizOpts');
      opts.forEach(o => {
        const b = document.createElement('button');
        b.className = 'choice-btn border border-slate-300 dark:border-slate-600 rounded-lg p-3 hover:bg-slate-100 dark:hover:bg-slate-700 text-left';
        b.textContent = o.word;
        b.onclick = () => this.answerChoice(b, o.word === target.word);
        ow.appendChild(b);
      });
    } else if (type === 1) {
      // 中文填空
      window._curQ = { type, answer: target.word, meaning: target.meaning };
      html += `<div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
        <div class="font-medium mb-3">✏️ 根据中文意思输入英文单词：</div>
        <div class="text-lg mb-3">${target.meaning}</div>
        <input id="quizInput" class="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-2 bg-white dark:bg-slate-800" placeholder="输入英文…" />
        <button id="quizSubmit" class="mt-3 px-4 py-2 rounded-lg bg-brand-600 text-white">提交</button>
      </div>`;
      wrap.innerHTML = html;
      document.getElementById('quizSubmit').onclick = () => this.answerFill(target.word);
      document.getElementById('quizInput').focus();
      document.getElementById('quizInput').onkeydown = (e) => { if (e.key === 'Enter') this.answerFill(target.word); };
    } else {
      // 发音评分
      window._curQ = { type, answer: target.word, done: false };
      html += `<div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-5">
        <div class="font-medium mb-3">🎤 朗读以下单词（系统打分）：</div>
        <div class="text-3xl font-bold text-brand-600 mb-3">${target.word}</div>
        <div class="flex justify-center items-center gap-2">
          <button id="quizRec" class="px-4 py-2 rounded-full bg-red-500 text-white">🎤 开始录音</button>
          <button id="quizPlayRec" class="px-4 py-2 rounded-full bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-base hidden">▶ 回放录音</button>
        </div>
        <div id="quizPronRes" class="mt-3 text-sm"></div>
      </div>`;
      wrap.innerHTML = html;
      document.getElementById('quizRec').onclick = () => this.answerPron(target.word);
      document.getElementById('quizPlayRec').onclick = () => this.playQuizRecording();
      // 回显已有录音
      if (this._lastRecording) {
        const pb = document.getElementById('quizPlayRec');
        if (pb) { pb.classList.remove('hidden'); pb.textContent = '▶ 回放录音'; }
      }
    }
  },

  answerChoice(btn, correct) {
    document.querySelectorAll('#quizOpts button').forEach(b => b.disabled = true);
    btn.classList.add(correct ? 'choice-correct' : 'choice-wrong');
    if (correct) { this.score++; Toast.show('✓ 正确！'); }
    else Toast.show('✗ 正确答案：' + window._curQ.answer);
    setTimeout(() => { this.quizIdx++; this.renderQuiz(); }, 1200);
  },

  answerFill(target) {
    const v = document.getElementById('quizInput').value.trim().toLowerCase();
    const correct = v === target.toLowerCase();
    const btn = document.getElementById('quizSubmit');
    btn.disabled = true;
    if (correct) { this.score++; Toast.show('✓ 正确！'); }
    else Toast.show('✗ 正确答案：' + target);
    setTimeout(() => { this.quizIdx++; this.renderQuiz(); }, 1500);
  },

  // 录音：手动开始/停止模式（测验发音题）
  answerPron(target) {
    const btn = document.getElementById('quizRec');
    const res = document.getElementById('quizPronRes');
    const playRecBtn = document.getElementById('quizPlayRec');

    // 正在录音 → 停止
    if (Speech.isRecording()) {
      btn.textContent = '⏳ 处理中…';
      res.innerHTML = '<span class="text-slate-400">正在停止录音…</span>';
      Speech.stopRecognition();
      return;
    }

    // 已完成 → 重新录音
    if (window._curQ && window._curQ.done) {
      this._resetQuizPron();
      return;
    }

    if (!Speech.isSupported()) {
      res.innerHTML = '<span class="text-red-500">⚠️ 当前浏览器不支持语音识别，请使用 Chrome 或 Edge</span>';
      setTimeout(() => { this.quizIdx++; this.renderQuiz(); }, 2000);
      return;
    }
    if (!window.isSecureContext) {
      res.innerHTML = '<span class="text-red-500">⚠️ 语音识别需要 HTTPS 环境，请通过 https:// 链接访问</span>';
      return;
    }

    if (playRecBtn) playRecBtn.classList.add('hidden');
    // 设置回调
    Speech.onResult = (text, error) => {
      btn.classList.remove('recording');
      btn.textContent = '🎤 重录';
      if (error && error !== 'unsupported') {
        const errMsg = {
          'no-permission': '麦克风权限被拒绝',
          'network': '网络错误，语音识别服务不可用',
          'start-failed': '录音启动失败'
        }[error] || '录音出错';
        res.innerHTML = `<span class="text-red-500">⚠️ ${errMsg}</span>`;
        window._curQ.done = true;
        setTimeout(() => { this.quizIdx++; this.renderQuiz(); }, 2000);
        return;
      }
      const sc = Speech.scorePron(text, target);
      if (sc >= 70) this.score++;
      res.innerHTML = `<div class="font-medium text-brand-600">评分：${sc}/100 ${sc >= 85 ? '🎉' : sc >= 70 ? '👍' : '❌'}</div>
        <div class="text-slate-500">识别：${text || '(未识别)'}</div>`;
      Store.set({ pronCount: Store.get().pronCount + 1 });
      window._curQ.done = true;
      setTimeout(() => { this.quizIdx++; this.renderQuiz(); }, 1800);
    };
    Speech.onRecordingReady = (recUrl) => {
      this._lastRecording = recUrl;
      const pb = document.getElementById('quizPlayRec');
      if (recUrl && pb) { pb.classList.remove('hidden'); pb.textContent = '▶ 回放录音'; pb.disabled = false; }
      else if (pb) { pb.classList.add('hidden'); pb.disabled = true; }
    };
    Speech.onRecordingEnded = () => {
      const pb = document.getElementById('quizPlayRec');
      if (pb && pb.textContent.includes('暂停')) pb.textContent = '▶ 回放录音';
    };

    btn.classList.add('recording');
    btn.textContent = '⏹ 停止录音';
    res.innerHTML = '<span class="text-slate-400">🎤 录音中…读完单词后点击"停止录音"</span>';
    Speech.startRecognition('en-US');
  },

  // 重置测验发音题（用于"重录"按钮）
  _resetQuizPron() {
    window._curQ.done = false;
    this.renderQuiz();
  },

  // 回放测验录音
  playQuizRecording() {
    const url = Speech.getLastRecordingUrl();
    const playBtn = document.getElementById('quizPlayRec');
    if (!url) {
      Toast.show('暂无录音可回放，请先点击录音按钮录音');
      return;
    }
    const started = Speech.playRecording(url);
    if (playBtn) playBtn.textContent = started ? '⏸ 暂停回放' : '▶ 回放录音';
  },

  finishQuiz() {
    Store.set({ wordQuizDone: true, wordCorrect: this.score, wordIndex: window.DAILY_WORDS.length });
    Store.recordTask('word');
    this.showDone();
    Toast.show(`🎉 单词任务完成！+20 积分`);
  },

  showDone() {
    document.getElementById('wordLearnView').classList.add('hidden');
    document.getElementById('wordQuizView').classList.add('hidden');
    document.getElementById('wordDoneView').classList.remove('hidden');
    const s = Store.get();
    document.getElementById('wordCorrectCount').textContent = s.wordCorrect;
  },

  downloadPdf() {
    // 简易 PDF：用浏览器打印功能
    const w = window.open('', '_blank');
    let rows = window.DAILY_WORDS.map(x =>
      `<tr><td>${x.word}</td><td>${x.phonetic}</td><td>${x.meaning}</td><td>${x.example}</td></tr>`).join('');
    w.document.write(`<html><head><title>DailyEnglish 今日单词表</title>
      <style>body{font-family:sans-serif;padding:20px}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ccc;padding:6px;text-align:left;font-size:12px}h1{color:#1e63e8}</style>
      </head><body><h1>📖 DailyEnglish 今日单词表</h1>
      <p>${new Date().toLocaleDateString()}</p>
      <table><thead><tr><th>单词</th><th>音标</th><th>释义</th><th>例句</th></tr></thead><tbody>${rows}</tbody></table>
      <script>window.onload=()=>window.print()</script></body></html>`);
    w.document.close();
  },

  shuffle(arr) { return arr.sort(() => Math.random() - 0.5); },
  randomOthers(exclude, n) {
    return this.shuffle(window.DAILY_WORDS.filter(x => x.word !== exclude)).slice(0, n);
  }
};

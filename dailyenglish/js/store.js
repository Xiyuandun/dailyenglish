// DailyEnglish - 本地数据存储与状态管理
const Store = {
  KEY: 'dailyenglish_state_v1',
  load() {
    try { return JSON.parse(localStorage.getItem(this.KEY)) || this.defaults(); }
    catch { return this.defaults(); }
  },
  save(state) { localStorage.setItem(this.KEY, JSON.stringify(state)); },
  defaults() {
    return {
      points: 0,
      streak: 0,
      lastCheckin: null,
      weekHistory: [],          // [{date, words, dialogue, reading}]
      tasks: { word:false, dialogue:false, reading:false },
      wordIndex: 0,            // 学习进度
      wordQuizDone: false,
      wordCorrect: 0,
      pronCount: 0,            // 发音练习次数
      writeScores: [],         // 写作得分历史
      dark: false,
      voice: 'jenny'           // 朗读语音（jenny/aria/guy/davis/amber/emma/brian）
    };
  },
  get() {
    if (!this._cache) this._cache = this.load();
    return this._cache;
  },
  set(patch) {
    const s = this.get();
    Object.assign(s, patch);
    this.save(s);
  },
  addPoints(n) {
    const s = this.get();
    s.points += n;
    this.save(s);
    document.getElementById('pointsVal').textContent = s.points;
  },
  recordTask(type) {
    const s = this.get();
    if (s.tasks[type]) return false;
    s.tasks[type] = true;
    s.points += 20;
    this.save(s);
    this.refreshBadges();
    return true;
  },
  refreshBadges() {
    const s = this.get();
    document.getElementById('pointsVal').textContent = s.points;
    document.getElementById('streakDays').textContent = s.streak;
    ['word','dialogue','reading'].forEach(t => {
      const el = document.getElementById('task-' + t);
      if (el) {
        const txt = el.querySelector('.status-text');
        txt.textContent = s.tasks[t] ? '✅ 已完成' : '未完成';
        el.classList.toggle('bg-white/30', s.tasks[t]);
      }
    });
  },
  checkin() {
    const s = this.get();
    const today = new Date().toDateString();
    if (s.lastCheckin === today) {
      Toast.show('今日已打卡 ✓');
      return;
    }
    // 计算连击
    const y = new Date(Date.now() - 86400000).toDateString();
    s.streak = (s.lastCheckin === y) ? s.streak + 1 : 1;
    s.lastCheckin = today;
    s.points += 10;
    // 记录本周历史
    if (!s.weekHistory) s.weekHistory = [];
    s.weekHistory.push({ date: today, words: s.tasks.word, dialogue: s.tasks.dialogue, reading: s.tasks.reading });
    if (s.weekHistory.length > 7) s.weekHistory.shift();
    this.save(s);
    this.refreshBadges();
    Toast.show(`🎉 打卡成功！连击 ${s.streak} 天，+10 积分`);
  }
};

const Toast = {
  show(msg, ms = 2000) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.style.opacity = '1';
    clearTimeout(this._t);
    this._t = setTimeout(() => t.style.opacity = '0', ms);
  }
};

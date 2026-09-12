// DailyEnglish - 本地数据存储与状态管理
const Store = {
  // 每个用户对应一份进度。登录（学习码）后 Key 变为 dailyenglish_state_v1_<code>，
  // 默认（未登录）为公共 Key，从而在同一设备上隔离不同使用者的进度。
  currentUser: null,
  baseKey: 'dailyenglish_state_v1',

  key() {
    const u = (this.currentUser || '').trim().toLowerCase();
    return u ? this.baseKey + '_' + u : this.baseKey;
  },

  // 设置/切换当前用户（学习码）。返回新 user。
  setUser(code) {
    this.currentUser = (code || '').trim();
    if (this.currentUser) {
      localStorage.setItem(this.baseKey + '_user', this.currentUser);
    } else {
      localStorage.removeItem(this.baseKey + '_user');
    }
    // 切换到新用户：丢弃内存缓存，强制重新读取
    this._cache = null;
    return this.currentUser;
  },

  // 获取当前用户（学习码），优先读内存，其次 localStorage
  getUser() {
    if (this.currentUser === null || this.currentUser === undefined) {
      this.currentUser = localStorage.getItem(this.baseKey + '_user') || '';
    }
    return this.currentUser;
  },

  load() {
    const key = this.key();
    try {
      const raw = localStorage.getItem(key);
      const state = raw ? JSON.parse(raw) : this.defaults();
      return state;
    }
    catch { return this.defaults(); }
  },
  save(state) { localStorage.setItem(this.key(), JSON.stringify(state)); },
  // 删除当前用户的本地进度（用于重置 / 初始化新用户）
  resetCurrent() {
    localStorage.removeItem(this.key());
    this._cache = null;
  },
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
      lastDay: null,           // 上次内容周期索引（用于跨天重置每日任务）
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
  // 每日内容轮换：当天周期索引与上次记录不同时，重置每日任务完成标记。
  // 积分、连击、周打卡历史、写作历史保留（这些是长期累计数据）。
  applyNewDay(dayIndex) {
    const s = this.get();
    if (s.lastDay === dayIndex) return;
    s.lastDay = dayIndex;
    // 每日任务标记清零：单词测验/进度、场景对话、文章阅读
    s.tasks = { word:false, dialogue:false, reading:false };
    s.wordIndex = 0;
    s.wordQuizDone = false;
    s.wordCorrect = 0;
    this.save(s);
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

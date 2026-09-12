// DailyEnglish - 每日内容轮换（30 天一个周期）
//
// 说明：
//  - 全局 DAY_PLAN 为 30 天内容，INDEX 循环周期为 30。
//  - 根据"今天 - 基准日"取模 30 得到当天索引 dayIndex（0 表示第 1 天）。
//  - 本文件把 DAILY_WORDS / DAILY_SCENARIOS / DAILY_ARTICLE 赋值为当天内容，
//    各模块读取逻辑无需改动。
//  - 若当天索引与 Store 记录的 lastDay 不同，则调用 Store.applyNewDay() 重置
//    每日任务完成标记（单词进度、任务 tasks），积分/连击/周历史保留。
//
// 依赖：本文件必须在 store.js 之后、其余模块之前加载（见 index.html）。

const DayCycle = {
  // 基准日：此日视为 30 天周期的第 1 天（索引 0）。可自由调整。
  EPOCH: '2026-09-01',
  CYCLE: 30,
  // 已就绪的天数（30 天内容已全部就绪）
  READY_DAYS: 30,

  _epochMs() {
    return new Date(this.EPOCH + 'T00:00:00+08:00').getTime();
  },

  // 今天在 30 天周期里的索引（0 ~ CYCLE-1）
  todayIndex() {
    const now = new Date().getTime();
    const diffDays = Math.floor((now - this._epochMs()) / 86400000);
    return ((diffDays % this.CYCLE) + this.CYCLE) % this.CYCLE;
  },

  // 取第 n 天（0 开始）的内容；若整天未就绪，回退到已就绪内容取模
  getDay(n) {
    const plan = window.DAY_PLAN || [];
    if (!plan.length) return null;
    return plan[n % plan.length];
  },

  // 启动引导：按当天内容填充全局变量，并处理跨天重置
  bootstrap() {
    const idx = this.todayIndex();
    const day = this.getDay(idx);
    if (day) {
      window.DAILY_WORDS = day.words || [];
      window.DAILY_SCENARIOS = day.scenarios || [];
      window.DAILY_ARTICLE = day.article || null;
    }
    // fallback：若 DAY_PLAN 空或当天无内容，保留原有静态全局（旧行为）
    window.DAY_INDEX = idx;
    // 跨天重置任务标记
    if (typeof Store !== 'undefined' && Store.applyNewDay) {
      Store.applyNewDay(idx);
    }
    return idx;
  },

  // 当天日期展示用的天数标签（第 X 天）
  label() {
    return '第 ' + (this.todayIndex() + 1) + ' 天';
  }
};
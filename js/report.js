// DailyEnglish - 学习报告
const ReportModule = {
  init() { this.render(); },

  render() {
    const s = Store.get();
    // 词汇掌握率
    const vocabRate = s.wordQuizDone ? Math.round((s.wordCorrect / 20) * 100) : 0;
    document.getElementById('rptVocab').textContent = vocabRate + '%';
    document.getElementById('rptPron').textContent = s.pronCount || 0;
    const wss = s.writeScores || [];
    const avg = wss.length ? (wss.reduce((a,b) => a+b, 0) / wss.length).toFixed(1) : '—';
    document.getElementById('rptWrite').textContent = avg;

    // 本周进度条
    const chart = document.getElementById('weekChart');
    const days = ['周一','周二','周三','周四','周五','周六','周日'];
    const hist = s.weekHistory || [];
    let html = '';
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const ds = d.toDateString();
      const rec = hist.find(h => h.date === ds);
      const cnt = rec ? [rec.words, rec.dialogue, rec.reading].filter(Boolean).length : 0;
      const pct = (cnt / 3) * 100;
      html += `
        <div class="flex items-center gap-3">
          <div class="w-12 text-sm text-slate-500">${days[(d.getDay()+6)%7]}</div>
          <div class="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-6 overflow-hidden">
            <div class="h-full bg-gradient-to-r from-brand-500 to-indigo-500 flex items-center justify-end pr-2 text-xs text-white" style="width:${pct}%">${cnt ? cnt + '/3' : ''}</div>
          </div>
        </div>`;
    }
    chart.innerHTML = html || '<p class="text-sm text-slate-400">暂无数据</p>';
  }
};

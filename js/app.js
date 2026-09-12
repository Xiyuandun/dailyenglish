// DailyEnglish - 主应用控制器
function switchTab(name) {
  // 切换模块时停止当前朗读（清空队列+暂停音频+取消 Web Speech）、录音回放和正在进行的录音
  if (typeof Speech !== 'undefined') {
    if (Speech.isRecording && Speech.isRecording()) Speech.stopRecognition();
    Speech.stop();
    Speech.stopRecordingPlayback();
  }
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
  const panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.remove('hidden');
  document.querySelectorAll('.tab-btn').forEach(b => {
    const active = b.dataset.tab === name;
    b.className = `tab-btn px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium ${active ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-700'}`;
  });
  // 模块初始化
  if (name === 'words') WordModule.init();
  if (name === 'dialogue') DialogueModule.init();
  if (name === 'reading') ReadingModule.init();
  if (name === 'report') ReportModule.init();
  if (name === 'home') Store.refreshBadges();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.switchTab = switchTab;

document.addEventListener('DOMContentLoaded', () => {
  Speech.init();

  // 全局 applyTheme：供首屏 & 切换用户 & 主题按钮共用
  const applyTheme = (dark) => {
    document.documentElement.classList.toggle('dark', dark);
    document.getElementById('themeToggle').textContent = dark ? '☀️' : '🌙';
  };

  // 学习码：恢复当前用户，初始化学习码输入框
  const input = document.getElementById('userCodeInput');
  const switchBtn = document.getElementById('userSwitchBtn');
  if (input) input.value = Store.getUser() || '';
  const applyUser = () => {
    const code = (input && input.value.trim()) ? input.value.trim() : null;
    const prev = Store.getUser() || '';
    Store.setUser(code);
    if ((code || '') !== prev) {
      initUI();
      Toast.show(code ? '已切换到学习码：' + code : '已切换到默认（未登录）');
    }
  };
  if (switchBtn) switchBtn.onclick = applyUser;
  if (input) input.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyUser(); });

  // 每日内容轮换：按当天索引填充当日单词/场景/文章，并处理跨天任务重置
  if (typeof DayCycle !== 'undefined') DayCycle.bootstrap();

  // 初始化/刷新当前用户相关的 UI 与状态（切换用户时重新执行）
  function initUI() {
    const s = Store.get();
    // 日期显示
    const todayEl = document.getElementById('todayDate');
    if (todayEl) todayEl.textContent = new Date().toLocaleDateString('zh-CN', { year:'numeric', month:'long', day:'numeric', weekday:'long' });
    // 周期天数标签
    const dayEl = document.getElementById('dayLabel');
    if (dayEl && typeof DayCycle !== 'undefined') dayEl.textContent = DayCycle.label();

    applyTheme(s.dark);
    document.getElementById('themeToggle').onclick = () => {
      const ns = Store.get();
      ns.dark = !ns.dark;
      Store.save(ns);
      applyTheme(ns.dark);
    };

    // 语音选择
    const voiceSel = document.getElementById('voiceSelect');
    if (s.voice) { voiceSel.value = s.voice; Speech.setVoice(s.voice); }
    voiceSel.onchange = () => {
      Speech.setVoice(voiceSel.value);
      const ns = Store.get();
      ns.voice = voiceSel.value;
      Store.save(ns);
      Toast.show('语音已切换为 ' + voiceSel.options[voiceSel.selectedIndex].text);
    };

    // 打卡按钮
    document.getElementById('checkinBtn').onclick = () => Store.checkin();

    // 周打卡点
    const dots = document.getElementById('weekDots');
    let dotsHtml = '';
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const ds = d.toDateString();
      const checked = s.lastCheckin === ds || (i === 0 && s.lastCheckin === ds);
      dotsHtml += `<div class="w-7 h-7 rounded-full flex items-center justify-center text-xs ${checked ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-600 text-slate-400'}">${d.getDate()}</div>`;
    }
    dots.innerHTML = dotsHtml;

    // 通话徽章 & 当前模块重渲染
    Store.refreshBadges();
    document.querySelectorAll('.tab-panel:not(.hidden)').forEach(p => p.id && switchTab(p.id.replace('tab-','')));
  }

  initUI();

  // Tab 切换（只绑定一次）
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.onclick = () => switchTab(b.dataset.tab);
  });

  // 页面退出/隐藏时停止朗读（避免后台继续播放或队列残留）
  // beforeunload：关闭/刷新页面、跳转外链
  window.addEventListener('beforeunload', () => Speech.stop());
  // pagehide：iOS Safari 后台/切换更可靠
  window.addEventListener('pagehide', () => Speech.stop());
  // visibilitychange：切到其他标签页/最小化
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) Speech.stop();
  });
});

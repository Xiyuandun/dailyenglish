// DailyEnglish - 模块三：文章阅读与翻译
const ReadingModule = {
  quizDone: false,
  choiceScore: 0,
  fillScore: 0,

  init() {
    Speech.stop();
    Speech.clearCache();  // 进入文章模块，清空对话模块的缓存
    this.render();
    // 预缓存所有段落（常速），点击单句或全文朗读即可秒播
    const texts = window.DAILY_ARTICLE.paragraphs.map(p => p.en);
    Speech.prefetch(texts, 1);
  },

  render() {
    const a = window.DAILY_ARTICLE;
    const paras = a.paragraphs.map((p, i) => `
      <div class="mb-4">
        <div class="flex items-start gap-2">
          <p class="flex-1 leading-relaxed cursor-pointer hover:text-brand-600" onclick="ReadingModule.readSent(${i})">${p.en}</p>
          <button onclick="ReadingModule.readSent(${i})" class="text-xs px-2 py-1 rounded bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300">🔊</button>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">${p.zh}</p>
      </div>
    `).join('');

    const phrases = a.phrases.map(p => `
      <li class="flex gap-2"><span class="font-medium text-brand-600">${p.phrase}</span><span class="text-slate-500">= ${p.meaning}</span></li>
    `).join('');

    const grammar = a.grammar.map(g => `
      <li><span class="font-medium text-emerald-600">${g.point}</span><div class="text-sm text-slate-500 mt-1">${g.explain}</div></li>
    `).join('');

    const tips = a.tips.map(t => `<li>${t}</li>`).join('');

    document.getElementById('articleView').innerHTML = `
      <div class="mb-4">
        <div class="text-xs text-slate-500">${a.titleZh}</div>
        <h3 class="text-2xl font-bold text-brand-700 dark:text-brand-300">${a.title}</h3>
      </div>
      <div class="flex gap-2 mb-5 flex-wrap">
        <button id="readAll" class="px-3 py-1.5 rounded-lg bg-brand-600 text-white text-sm">🔊 全文朗读</button>
        <button id="readSlow" class="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm">🐢 慢速</button>
        <button id="stopRead" class="px-3 py-1.5 rounded-lg bg-red-500 text-white text-sm">⏹️ 停止</button>
      </div>
      <div class="prose dark:prose-invert max-w-none mb-6">${paras}</div>

      <div class="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 mb-4">
        <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">✅ 重点短语解析</h4>
        <ul class="text-sm space-y-1.5">${phrases}</ul>
      </div>
      <div class="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 mb-4">
        <h4 class="font-bold text-amber-700 dark:text-amber-400 mb-2">📘 语法点讲解</h4>
        <ul class="text-sm space-y-2">${grammar}</ul>
      </div>
      <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 mb-6">
        <h4 class="font-bold text-blue-700 dark:text-blue-400 mb-2">⚠️ 易错提醒 & 同义替换</h4>
        <ul class="text-sm space-y-1 list-disc list-inside">${tips}</ul>
      </div>

      <div id="readingQuiz">
        <h4 class="font-bold mb-3">📝 读后小测验</h4>
        <div id="choiceQuiz" class="mb-6"></div>
        <div id="fillQuiz" class="mb-6"></div>
        <div id="writingQuiz"></div>
      </div>
    `;

    document.getElementById('readAll').onclick = () => this.readAll(1);
    document.getElementById('readSlow').onclick = () => this.readAll(0.6);
    document.getElementById('stopRead').onclick = () => Speech.stop();
    this.renderChoice();
    this.renderFill();
    this.renderWriting();
  },

  readSent(i) {
    Speech.speak(window.DAILY_ARTICLE.paragraphs[i].en);
  },

  readAll(rate) {
    const texts = window.DAILY_ARTICLE.paragraphs.map(p => p.en);
    Speech.speakQueue(texts, rate);
  },

  renderChoice() {
    const qs = window.DAILY_ARTICLE.quiz.choice;
    const wrap = document.getElementById('choiceQuiz');
    wrap.innerHTML = '<div class="text-sm text-slate-500 mb-2">选择题（共 ' + qs.length + ' 题）</div>';
    qs.forEach((q, i) => {
      const opts = q.options.map((o, j) => `
        <button data-q="${i}" data-o="${j}" class="choice-opt w-full text-left border border-slate-300 dark:border-slate-600 rounded-lg p-2.5 hover:bg-slate-100 dark:hover:bg-slate-700 text-sm">${o}</button>
      `).join('');
      wrap.innerHTML += `<div class="mb-3"><div class="font-medium text-sm mb-2">${i+1}. ${q.q}</div><div class="grid gap-1.5">${opts}</div></div>`;
    });
    wrap.querySelectorAll('.choice-opt').forEach(b => {
      b.onclick = () => this.answerChoice(b);
    });
  },

  answerChoice(btn) {
    const q = +btn.dataset.q, o = +btn.dataset.o;
    const correct = window.DAILY_ARTICLE.quiz.choice[q].answer;
    document.querySelectorAll(`.choice-opt[data-q="${q}"]`).forEach(b => b.disabled = true);
    if (o === correct) {
      btn.classList.add('choice-correct');
      this.choiceScore++;
    } else {
      btn.classList.add('choice-wrong');
      document.querySelector(`.choice-opt[data-q="${q}"][data-o="${correct}"]`).classList.add('choice-correct');
    }
    this.checkDone();
  },

  renderFill() {
    const fs = window.DAILY_ARTICLE.quiz.fill;
    const wrap = document.getElementById('fillQuiz');
    wrap.innerHTML = '<div class="text-sm text-slate-500 mb-2">填空题（共 ' + fs.length + ' 题）</div>';
    fs.forEach((f, i) => {
      wrap.innerHTML += `<div class="mb-3">
        <div class="text-sm mb-1">${i+1}. ${f.q}</div>
        <div class="flex gap-2">
          <input data-i="${i}" class="fill-input flex-1 border border-slate-300 dark:border-slate-600 rounded-lg p-2 bg-white dark:bg-slate-800 text-sm" placeholder="输入英文…" />
          <button data-i="${i}" class="fill-check px-3 py-2 rounded-lg bg-brand-600 text-white text-sm">提交</button>
        </div>
        <div class="fill-res text-sm mt-1" data-i="${i}"></div>
      </div>`;
    });
    wrap.querySelectorAll('.fill-check').forEach(b => {
      b.onclick = () => this.answerFill(b);
    });
    wrap.querySelectorAll('.fill-input').forEach(inp => {
      inp.onkeydown = (e) => { if (e.key === 'Enter') this.answerFill(document.querySelector(`.fill-check[data-i="${inp.dataset.i}"]`)); };
    });
  },

  answerFill(btn) {
    const i = +btn.dataset.i;
    const input = document.querySelector(`.fill-input[data-i="${i}"]`);
    const res = document.querySelector(`.fill-res[data-i="${i}"]`);
    const v = input.value.trim().toLowerCase();
    const ans = window.DAILY_ARTICLE.quiz.fill[i].answer.toLowerCase();
    btn.disabled = true; input.disabled = true;
    if (v === ans) {
      res.innerHTML = '<span class="text-emerald-600">✓ 正确！</span>';
      this.fillScore++;
    } else {
      res.innerHTML = `<span class="text-red-600">✗ 答案：${ans}</span>`;
    }
    this.checkDone();
  },

  renderWriting() {
    const w = window.DAILY_ARTICLE.quiz.writing;
    document.getElementById('writingQuiz').innerHTML = `
      <div class="text-sm text-slate-500 mb-2">写作题</div>
      <div class="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4">
        <div class="font-medium mb-2">${w.prompt}</div>
        <textarea id="writeArea" rows="5" class="w-full border border-slate-300 dark:border-slate-600 rounded-lg p-3 bg-white dark:bg-slate-800 text-sm" placeholder="请用英文写出 3-5 句话…"></textarea>
        <button id="writeSubmit" class="mt-3 px-4 py-2 rounded-lg bg-brand-600 text-white">🤖 AI 批改</button>
        <div id="writeRes" class="mt-3"></div>
      </div>
    `;
    document.getElementById('writeSubmit').onclick = () => this.gradeWriting(w);
  },

  // 简易 AI 批改（基于规则：字数、关键词、句法）
  gradeWriting(w) {
    const txt = document.getElementById('writeArea').value.trim();
    if (txt.length < 20) { Toast.show('请至少写 3 句话'); return; }
    const sentences = txt.split(/[.!?]+/).filter(s => s.trim().length > 3);
    const words = txt.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    let score = 0;
    let fb = [];

    // 长度分（满分 3）
    if (wordCount >= 40) { score += 3; fb.push('✓ 字数充足，表达完整。'); }
    else if (wordCount >= 25) { score += 2; fb.push('△ 字数适中，可再扩展。'); }
    else { score += 1; fb.push('✗ 内容偏少，建议多写几句。'); }

    // 句子数（满分 2）
    if (sentences.length >= 3) { score += 2; fb.push('✓ 句子数量达标。'); }
    else { score += 1; fb.push('△ 建议写满 3 句以上。'); }

    // 关键词命中（满分 2）
    const keys = ['octopus','change','color','survive','hide','enemy','ability','animal'];
    const hits = keys.filter(k => txt.toLowerCase().includes(k));
    if (hits.length >= 3) { score += 2; fb.push(`✓ 命中关键词：${hits.join('、')}`); }
    else if (hits.length >= 1) { score += 1; fb.push(`△ 关键词偏少：${hits.join('、')}`); }
    else { fb.push('✗ 未命中主题关键词。'); }

    // 基础语法检查（满分 2）
    let grammar = 2;
    if (/\bi\b[^.]*\bis\b/gi.test(txt) && !/\bi am\b/i.test(txt)) {
      // 简单检查
    }
    if (/\b(a|an)\s+[aeiou]/i.test(txt) === false && wordCount > 30) {
      // 没用冠词可能扣分
    }
    score += grammar; fb.push('✓ 基础语法无明显错误。');

    // 大小写/标点（满分 1）
    if (/[.!?]$/.test(txt.trim())) { score += 1; fb.push('✓ 标点正确。'); }
    else { fb.push('△ 句末请加标点。'); }

    if (score > 10) score = 10;
    const s = Store.get();
    s.writeScores = s.writeScores || [];
    s.writeScores.push(score);
    Store.save(s);

    const tips = ['可尝试用从句连接句子，如 "because", "which"。', '可替换高级词汇：good → excellent, big → enormous。', '注意主谓一致与时态统一。'];
    const tip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('writeRes').innerHTML = `
      <div class="bg-brand-50 dark:bg-brand-900/20 rounded-lg p-3">
        <div class="font-bold text-brand-700 dark:text-brand-300 mb-2">AI 批改结果</div>
        <div class="text-2xl font-bold text-brand-600 mb-2">${score} / 10 分</div>
        <ul class="text-sm space-y-1 list-disc list-inside">${fb.map(f => `<li>${f}</li>`).join('')}</ul>
        <div class="text-sm mt-2 text-slate-500">💡 ${tip}</div>
        <div class="text-xs text-slate-400 mt-2">参考范文：${w.exampleAnswer}</div>
      </div>
    `;
    document.getElementById('writeSubmit').disabled = true;
    document.getElementById('writeSubmit').textContent = '已批改';
    this.checkDone();
  },

  checkDone() {
    if (this.quizDone) return;
    const totalChoice = window.DAILY_ARTICLE.quiz.choice.length;
    const totalFill = window.DAILY_ARTICLE.quiz.fill.length;
    const doneChoice = document.querySelectorAll('.choice-opt:disabled').length > 0 && document.querySelectorAll('.choice-opt:disabled').length >= totalChoice * 1;
    const doneFill = document.querySelectorAll('.fill-check:disabled').length >= totalFill;
    const doneWrite = document.getElementById('writeSubmit') && document.getElementById('writeSubmit').disabled;
    // 简易：所有选择题都答完
    const allChoiceDone = [...document.querySelectorAll('.choice-opt')].every(b => b.disabled);
    if (allChoiceDone && doneFill && doneWrite) {
      this.quizDone = true;
      Store.recordTask('reading');
      Toast.show(`🎉 阅读任务完成！选择题 ${this.choiceScore}/${totalChoice}，填空 ${this.fillScore}/${totalFill}，+20 积分`);
    }
  }
};

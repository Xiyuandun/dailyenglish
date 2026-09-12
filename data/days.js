// DailyEnglish - 30 天每日内容周期数据源
// 每个数组元素 = 一天的内容（单词 / 文章 / 场景对话）。
// 由 js/daycycle.js 根据"今天"从 30 天周期中取当天内容，赋给全局 DAILY_* 变量。
window.DAY_PLAN = [
// ===================== 第 1 天 =====================
{
  words: [
    { word: "abandon", phonetic: "/əˈbændən/", meaning: "v. 放弃；抛弃", example: "He abandoned his car on the highway.", exampleZh: "他把车抛弃在高速公路上。" },
    { word: "benefit", phonetic: "/ˈbenɪfɪt/", meaning: "n. 益处；利益 v. 受益", example: "Exercise benefits your health.", exampleZh: "运动有益于健康。" },
    { word: "challenge", phonetic: "/ˈtʃælɪndʒ/", meaning: "n. 挑战 v. 向…挑战", example: "Life is full of challenges.", exampleZh: "生活充满挑战。" },
    { word: "demand", phonetic: "/dɪˈmɑːnd/", meaning: "v. 要求；需要 n. 需求", example: "The boss demanded an answer.", exampleZh: "老板要求一个答复。" },
    { word: "evidence", phonetic: "/ˈevɪdəns/", meaning: "n. 证据；迹象", example: "There is no evidence of crime.", exampleZh: "没有犯罪的证据。" },
    { word: "factor", phonetic: "/ˈfæktər/", meaning: "n. 因素；要素", example: "Weather is a key factor.", exampleZh: "天气是一个关键因素。" },
    { word: "generate", phonetic: "/ˈdʒenəreɪt/", meaning: "v. 产生；引起", example: "The sun generates heat.", exampleZh: "太阳产生热量。" },
    { word: "horizon", phonetic: "/həˈraɪzn/", meaning: "n. 地平线；眼界", example: "The sun rose above the horizon.", exampleZh: "太阳升起在地平线上。" },
    { word: "identify", phonetic: "/aɪˈdentɪfaɪ/", meaning: "v. 识别；认出", example: "Can you identify this plant?", exampleZh: "你能认出这种植物吗？" },
    { word: "journal", phonetic: "/ˈdʒɜːnl/", meaning: "n. 日记；期刊", example: "She writes in her journal daily.", exampleZh: "她每天写日记。" },
    { word: "launch", phonetic: "/lɔːntʃ/", meaning: "v. 发射；发起 n. 发布", example: "They launched a new rocket.", exampleZh: "他们发射了一枚新火箭。" },
    { word: "maintain", phonetic: "/meɪnˈteɪn/", meaning: "v. 维持；保养", example: "Maintain a healthy diet.", exampleZh: "保持健康的饮食。" },
    { word: "negotiate", phonetic: "/nɪˈɡəʊʃieɪt/", meaning: "v. 谈判；协商", example: "We need to negotiate the price.", exampleZh: "我们需要协商价格。" },
    { word: "obtain", phonetic: "/əbˈteɪn/", meaning: "v. 获得；得到", example: "He obtained a degree in law.", exampleZh: "他获得了法律学位。" },
    { word: "perspective", phonetic: "/pəˈspektɪv/", meaning: "n. 视角；观点", example: "Try a new perspective.", exampleZh: "尝试一个新视角。" },
    { word: "quantity", phonetic: "/ˈkwɒntəti/", meaning: "n. 数量；量", example: "Quality over quantity.", exampleZh: "质量胜于数量。" },
    { word: "reflect", phonetic: "/rɪˈflekt/", meaning: "v. 反射；反思", example: "The mirror reflects light.", exampleZh: "镜子反射光线。" },
    { word: "strategy", phonetic: "/ˈstrætədʒi/", meaning: "n. 策略；战略", example: "We need a new strategy.", exampleZh: "我们需要一个新策略。" },
    { word: "transform", phonetic: "/trænsˈfɔːm/", meaning: "v. 改变；转换", example: "Education can transform lives.", exampleZh: "教育能改变人生。" },
    { word: "urgent", phonetic: "/ˈɜːdʒənt/", meaning: "adj. 紧急的；急迫的", example: "This is an urgent matter.", exampleZh: "这是一件紧急的事。" }
  ],
  article: {
    title: "The Secret Life of Octopuses",
    titleZh: "章鱼的秘密生活",
    paragraphs: [
      { en: "Octopuses are highly intelligent creatures.", zh: "章鱼是高度聪明的生物。" },
      { en: "They can solve puzzles, use tools, and even escape from tanks.", zh: "它们能解谜题、使用工具，甚至能从水箱中逃脱。" },
      { en: "Scientists have observed them opening jars to get food.", zh: "科学家观察到它们会拧开罐子获取食物。" },
      { en: "Octopuses have three hearts and blue blood, and they can change color in an instant to hide from enemies.", zh: "章鱼有三颗心脏和蓝色的血液，并能瞬间变色以躲避敌人。" }
    ],
    phrases: [
      { phrase: "solve puzzles", meaning: "解谜题" },
      { phrase: "use tools", meaning: "使用工具" },
      { phrase: "escape from tanks", meaning: "从水箱中逃脱" },
      { phrase: "change color", meaning: "变色（伪装）" }
    ],
    grammar: [
      { point: "have observed them opening...", explain: "observe sb. doing sth.——观察到某人正在做某事。" },
      { point: "in an instant", explain: "瞬间；立刻，作时间状语。" }
    ],
    tips: [
      "intelligent → 同义：smart, clever, bright。",
      "impossible → 反义词：possible；前缀 im- 用于 b/p/m 开头的词前。"
    ],
    quiz: {
      choice: [
        { q: "What can octopuses do according to the passage?", options: ["Only swim", "Solve puzzles and use tools", "Only change color", "Nothing special"], answer: 1 },
        { q: "How many hearts does an octopus have?", options: ["One", "Two", "Three", "Four"], answer: 2 },
        { q: "What color is an octopus's blood?", options: ["Red", "Blue", "Green", "White"], answer: 1 }
      ],
      fill: [
        { q: "Octopuses can change c______ in an instant to hide from enemies.", answer: "color" }
      ],
      writing: { prompt: "Describe one intelligent thing an octopus can do. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "咖啡店点咖啡",
      situationZh: "你在咖啡店，想点一杯冰黑咖啡。请先阅读整段中文对话，然后录音说出英文。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! What can I get for you?", zh: "欢迎光临！请问需要什么？" },
        { role: "user", en: "A cup of iced coffee, please.", zh: "请给我一杯冰咖啡。", keywords: ["iced", "coffee"] },
        { role: "clerk", en: "What size would you like?", zh: "请问要什么杯型？" },
        { role: "user", en: "A large one, please.", zh: "大杯，谢谢。", keywords: ["large"] },
        { role: "clerk", en: "Would you like milk or sugar?", zh: "需要加牛奶或者糖吗？" },
        { role: "user", en: "Neither, thanks. I prefer black coffee.", zh: "都不要，我喜欢黑咖啡。", keywords: ["neither", "black"] },
        { role: "clerk", en: "Sure. Anything else?", zh: "好的。还要别的吗？" },
        { role: "user", en: "No, thanks. That's all.", zh: "不用了，就这些。", keywords: ["that's all"] },
        { role: "clerk", en: "That's 25 yuan. Please wait a moment.", zh: "一共 25 元。请稍等。" }
      ],
      tips: [
        "点饮品用 A cup of / A glass of 更地道。",
        "black coffee = 黑咖啡（不加奶和糖）。",
        "Neither 表示“两者都不要”。"
      ]
    },
    {
      scene: "餐厅点餐",
      situationZh: "你在餐厅，想点一份牛排。请先阅读整段中文对话，然后录音说出英文。",
      roles: { clerk: "服务员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! How many people?", zh: "欢迎光临！请问几位？" },
        { role: "user", en: "Just two, please.", zh: "两位，谢谢。", keywords: ["two"] },
        { role: "clerk", en: "Here's the menu.", zh: "这是菜单。" },
        { role: "user", en: "I'd like a steak, medium rare.", zh: "我想要一份三分熟的牛排。", keywords: ["steak"] },
        { role: "clerk", en: "Anything to drink?", zh: "请问喝点什么？" },
        { role: "user", en: "A glass of water, please.", zh: "一杯水，谢谢。", keywords: ["water"] },
        { role: "clerk", en: "Sure, I'll be right back.", zh: "好的，马上来。" }
      ],
      tips: [
        "I'd like 比 I want 更礼貌。",
        "medium rare = 三分熟；well done = 全熟。"
      ]
    }
  ]
},
// ===================== 第 2 天 =====================
{
  words: [
    { word: "access", phonetic: "/ˈækses/", meaning: "n. 通道；机会 v. 访问", example: "Students have access to the library.", exampleZh: "学生可以使用图书馆。" },
    { word: "boundary", phonetic: "/ˈbaʊndri/", meaning: "n. 边界；界限", example: "The river forms a boundary.", exampleZh: "这条河形成了一条边界。" },
    { word: "capable", phonetic: "/ˈkeɪpəbl/", meaning: "adj. 有能力的；能干的", example: "She is capable of doing this job.", exampleZh: "她有能力做这项工作。" },
    { word: "decline", phonetic: "/dɪˈklaɪn/", meaning: "v. 下降；婉拒 n. 下降", example: "Sales declined this year.", exampleZh: "今年的销量下降了。" },
    { word: "efficient", phonetic: "/ɪˈfɪʃnt/", meaning: "adj. 高效的", example: "This is an efficient way to work.", exampleZh: "这是一种高效的工作方式。" },
    { word: "facility", phonetic: "/fəˈsɪləti/", meaning: "n. 设施；设备", example: "The gym has modern facilities.", exampleZh: "健身房有现代设施。" },
    { word: "gravity", phonetic: "/ˈɡrævəti/", meaning: "n. 重力；严重性", example: "Gravity pulls things to the earth.", exampleZh: "重力把物体拉向地球。" },
    { word: "handle", phonetic: "/ˈhændl/", meaning: "v. 处理 n. 把手", example: "She can handle this problem.", exampleZh: "她能处理这个问题。" },
    { word: "impact", phonetic: "/ˈɪmpækt/", meaning: "n. 影响；冲击 v. 影响", example: "The news had a big impact.", exampleZh: "这则新闻产生了很大影响。" },
    { word: "justify", phonetic: "/ˈdʒʌstɪfaɪ/", meaning: "v. 证明…正当", example: "Can you justify your decision?", exampleZh: "你能证明你的决定是正确的吗？" },
    { word: "keen", phonetic: "/kiːn/", meaning: "adj. 热衷的；敏锐的", example: "He is keen on football.", exampleZh: "他对足球很着迷。" },
    { word: "leisure", phonetic: "/ˈleʒə(r)/", meaning: "n. 闲暇；休闲", example: "I read books in my leisure time.", exampleZh: "空闲时我读书。" },
    { word: "minor", phonetic: "/ˈmaɪnə(r)/", meaning: "adj. 较小的；轻微的", example: "It's only a minor problem.", exampleZh: "这只是个小问题。" },
    { word: "notion", phonetic: "/ˈnəʊʃn/", meaning: "n. 概念；观念", example: "He has a new notion of teaching.", exampleZh: "他对教学有新观念。" },
    { word: "obvious", phonetic: "/ˈɒbviəs/", meaning: "adj. 明显的", example: "The answer is obvious.", exampleZh: "答案很明显。" },
    { word: "precise", phonetic: "/prɪˈsaɪs/", meaning: "adj. 精确的", example: "Give me a precise number.", exampleZh: "给我一个精确的数字。" },
    { word: "rapid", phonetic: "/ˈræpɪd/", meaning: "adj. 快速的", example: "The city has rapid growth.", exampleZh: "这座城市发展迅速。" },
    { word: "sufficient", phonetic: "/səˈfɪʃnt/", meaning: "adj. 足够的", example: "Do we have sufficient food?", exampleZh: "我们有足够的食物吗？" },
    { word: "tendency", phonetic: "/ˈtendənsi/", meaning: "n. 趋势；倾向", example: "There is a tendency to overspend.", exampleZh: "有过度消费的倾向。" },
    { word: "vivid", phonetic: "/ˈvɪvɪd/", meaning: "adj. 生动的；鲜明的", example: "She told a vivid story.", exampleZh: "她讲了一个生动的故事。" }
  ],
  article: {
    title: "The Power of Morning Routines",
    titleZh: "晨间习惯的力量",
    paragraphs: [
      { en: "How you start your morning often shapes your whole day.", zh: "你如何开始清晨往往决定了你的一整天。" },
      { en: "Successful people often follow a simple morning routine.", zh: "成功的人往往遵循简单的晨间惯例。" },
      { en: "They wake up early, exercise, and plan their tasks before work begins.", zh: "他们早起、锻炼，并在工作开始前规划任务。" },
      { en: "A fixed routine reduces stress because you spend less time making decisions.", zh: "固定的习惯能减少压力，因为做决定的时间更少。" }
    ],
    phrases: [
      { phrase: "wake up early", meaning: "早起" },
      { phrase: "plan their tasks", meaning: "规划任务" },
      { phrase: "reduce stress", meaning: "减轻压力" }
    ],
    grammar: [
      { point: "A fixed routine reduces stress because...", explain: "because 引导原因状语从句，解释原因。" },
      { point: "spend time doing", explain: "花时间做某事，后接动词 ing 形式。" }
    ],
    tips: [
      "routine → 惯例；固定程序。",
      "reduce → 同义：decrease；反义：increase。"
    ],
    quiz: {
      choice: [
        { q: "What often shapes your whole day according to the passage?", options: ["The weather", "How you start your morning", "Your lunch", "The news"], answer: 1 },
        { q: "Why does a fixed routine reduce stress?", options: ["It makes you rich", "Less time on decisions", "It is fun", "It removes work"], answer: 1 },
        { q: "What is NOT mentioned in a morning routine?", options: ["Wake up early", "Exercise", "Plan tasks", "Watch TV for hours"], answer: 3 }
      ],
      fill: [
        { q: "A fixed r______ reduces stress.", answer: "routine" }
      ],
      writing: { prompt: "Describe your own ideal morning routine in 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在便利店买早餐",
      situationZh: "你在便利店买早餐，付钱时询问能否用手机支付。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning! What would you like?", zh: "早上好！请问要买什么？" },
        { role: "user", en: "A sandwich and a cup of soy milk, please.", zh: "请给我一个三明治和一杯豆浆。", keywords: ["sandwich", "soy milk"] },
        { role: "clerk", en: "Anything else?", zh: "还要别的吗？" },
        { role: "user", en: "No, that's all. How much is it?", zh: "不用了。多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "It's 15 yuan total.", zh: "一共 15 元。" },
        { role: "user", en: "Can I pay with my phone?", zh: "可以用手机支付吗？", keywords: ["phone"] },
        { role: "clerk", en: "Sure, scan this QR code, please.", zh: "可以，请扫这个二维码。" },
        { role: "user", en: "Done. Thank you!", zh: "好了，谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "soy milk = 豆浆；leftover = 残余。",
        "How much is it? 询价的标准说法。"
      ]
    },
    {
      scene: "问路去地铁站",
      situationZh: "你在街上问路，如何走到最近的地铁站。",
      roles: { clerk: "路人", user: "我" },
      turns: [
        { role: "clerk", en: "Excuse me, are you looking for something?", zh: "请问，你是在找什么吗？" },
        { role: "user", en: "Yes, how can I get to the nearest subway station?", zh: "是的，我怎样才能到最近的地铁站？", keywords: ["nearest", "subway"] },
        { role: "clerk", en: "Go straight and turn left at the traffic light.", zh: "直走，在红绿灯处左转。" },
        { role: "user", en: "Is it far from here?", zh: "离这里远吗？", keywords: ["far"] },
        { role: "clerk", en: "No, about five minutes on foot.", zh: "不远，步行约五分钟。" },
        { role: "user", en: "Great, thank you very much!", zh: "太好了，非常感谢！", keywords: ["thank"] }
      ],
      tips: [
        "go straight = 直走；turn left/right = 左转/右转。",
        "on foot = 步行。"
      ]
    }
  ]
},
// ===================== 第 3 天 =====================
{
  words: [
    { word: "achieve", phonetic: "/əˈtʃiːv/", meaning: "v. 达到；实现", example: "She achieved her goal.", exampleZh: "她实现了目标。" },
    { word: "balance", phonetic: "/ˈbæləns/", meaning: "n. 平衡 v. 使平衡", example: "Keep a balance between work and rest.", exampleZh: "保持工作与休息的平衡。" },
    { word: "communicate", phonetic: "/kəˈmjuːnɪkeɪt/", meaning: "v. 交流；沟通", example: "We communicate by email.", exampleZh: "我们通过电子邮件交流。" },
    { word: "distinct", phonetic: "/dɪˈstɪŋkt/", meaning: "adj. 不同的；清楚的", example: "These are two distinct ideas.", exampleZh: "这是两个不同的观念。" },
    { word: "emphasize", phonetic: "/ˈemfəsaɪz/", meaning: "v. 强调", example: "He emphasized the importance of honesty.", exampleZh: "他强调了诚实的重要性。" },
    { word: "flexible", phonetic: "/ˈfleksəbl/", meaning: "adj. 灵活的", example: "My schedule is flexible.", exampleZh: "我的时间安排很灵活。" },
    { word: "gradual", phonetic: "/ˈɡrædʒuəl/", meaning: "adj. 逐渐的", example: "There was a gradual change.", exampleZh: "有一个逐渐的变化。" },
    { word: "habit", phonetic: "/ˈhæbɪt/", meaning: "n. 习惯", example: "Reading is a good habit.", exampleZh: "阅读是个好习惯。" },
    { word: "identity", phonetic: "/aɪˈdentəti/", meaning: "n. 身份；特征", example: "Show me your identity card.", exampleZh: "出示你的身份证。" },
    { word: "judgment", phonetic: "/ˈdʒʌdʒmənt/", meaning: "n. 判断；评价", example: "Trust your own judgment.", exampleZh: "相信你自己的判断。" },
    { word: "logical", phonetic: "/ˈlɒdʒɪkl/", meaning: "adj. 逻辑的；合理的", example: "It's a logical answer.", exampleZh: "这是一个合理的答案。" },
    { word: "mature", phonetic: "/məˈtʃʊə(r)/", meaning: "adj. 成熟的", example: "He is mature for his age.", exampleZh: "就他的年龄而言他很成熟。" },
    { word: "nutrition", phonetic: "/njuˈtrɪʃn/", meaning: "n. 营养", example: "Good nutrition is important.", exampleZh: "良好的营养很重要。" },
    { word: "overcome", phonetic: "/ˌəʊvəˈkʌm/", meaning: "v. 克服", example: "She overcame many difficulties.", exampleZh: "她克服了许多困难。" },
    { word: "potential", phonetic: "/pəˈtenʃl/", meaning: "n. 潜力 adj. 潜在的", example: "She has great potential.", exampleZh: "她有很大潜力。" },
    { word: "reliable", phonetic: "/rɪˈlaɪəbl/", meaning: "adj. 可靠的", example: "He is a reliable friend.", exampleZh: "他是个可靠的朋友。" },
    { word: "solid", phonetic: "/ˈsɒlɪd/", meaning: "adj. 坚固的；可靠的", example: "The bridge is solid.", exampleZh: "这座桥很坚固。" },
    { word: "tolerate", phonetic: "/ˈtɒləreɪt/", meaning: "v. 忍受；容忍", example: "I can't tolerate the noise.", exampleZh: "我无法忍受这个噪音。" },
    { word: "variable", phonetic: "/ˈveəriəbl/", meaning: "adj. 可变的 n. 变量", example: "The weather is variable.", exampleZh: "天气变化无常。" },
    { word: "wisdom", phonetic: "/ˈwɪzdəm/", meaning: "n. 智慧", example: "Age brings wisdom.", exampleZh: "年岁带来智慧。" }
  ],
  article: {
    title: "Why Sleep Matters for Learning",
    titleZh: "为什么睡眠对学习很重要",
    paragraphs: [
      { en: "Sleep is not wasted time; it is essential for learning.", zh: "睡眠不是浪费时间，它对学习至关重要。" },
      { en: "During deep sleep, your brain organizes the information you learned during the day.", zh: "在深度睡眠中，大脑会整理你白天学到的信息。" },
      { en: "Students who sleep well remember more and think more clearly.", zh: "睡眠好的学生记得更牢、想得更清。" },
      { en: "So instead of staying up late, get enough rest to improve your study.", zh: "所以与其熬夜，不如保证充足的休息来提高学习。" }
    ],
    phrases: [
      { phrase: "essential for", meaning: "对…至关重要的" },
      { phrase: "stay up late", meaning: "熬夜" },
      { phrase: "get enough rest", meaning: "获得充足的休息" }
    ],
    grammar: [
      { point: "Students who sleep well...", explain: "who 引导定语从句，修饰 Students。" },
      { point: "instead of doing", explain: "而不是……，后接动名词。" }
    ],
    tips: [
      "essential → 必不可少的；同义 crucial, vital。",
      "improve → 提高；improve one's study。"
    ],
    quiz: {
      choice: [
        { q: "What does the brain do during deep sleep?", options: ["Stops working", "Organizes information learned", "Causes dreams only", "Wastes time"], answer: 1 },
        { q: "Students who sleep well tend to ______.", options: ["Forget everything", "Remember more and think clearly", "Sleep in class", "Study less"], answer: 1 },
        { q: "What should you do to improve your study?", options: ["Stay up late", "Drink coffee", "Get enough rest", "Skip breakfast"], answer: 2 }
      ],
      fill: [
        { q: "Sleep is e______ for learning.", answer: "essential" }
      ],
      writing: { prompt: "Explain, in 3-5 sentences, why you should not stay up late before an exam." }
    }
  },
  scenarios: [
    {
      scene: "预订火车票",
      situationZh: "你在火车站售票窗口买去上海的票。",
      roles: { clerk: "售票员", user: "我" },
      turns: [
        { role: "clerk", en: "Next, please. Where to?", zh: "下一位，请问去哪儿？" },
        { role: "user", en: "One ticket to Shanghai, please.", zh: "请给我一张去上海的车票。", keywords: ["ticket", "Shanghai"] },
        { role: "clerk", en: "High-speed or normal train?", zh: "高铁还是普通列车？" },
        { role: "user", en: "High-speed, please.", zh: "高铁，谢谢。", keywords: ["high-speed"] },
        { role: "clerk", en: "What time do you want to leave?", zh: "你想几点出发？" },
        { role: "user", en: "Around nine in the morning.", zh: "早上九点左右。", keywords: ["nine", "morning"] },
        { role: "clerk", en: "OK, that will be 553 yuan.", zh: "好的，一共 553 元。" },
        { role: "user", en: "Here you are.", zh: "给你。", keywords: ["here"] },
        { role: "clerk", en: "Here is your ticket. Have a nice trip!", zh: "这是你的车票，旅途愉快！" }
      ],
      tips: [
        "high-speed train = 高铁。",
        "Here you are. 递东西给别人时使用。"
      ]
    },
    {
      scene: "在邮局寄包裹",
      situationZh: "你到邮局寄一个包裹回家。",
      roles: { clerk: "职员", user: "我" },
      turns: [
        { role: "clerk", en: "Good afternoon, how can I help you?", zh: "下午好，能为您做些什么？" },
        { role: "user", en: "I'd like to send this package.", zh: "我想寄这个包裹。", keywords: ["send", "package"] },
        { role: "clerk", en: "Where is it going?", zh: "寄到哪里？" },
        { role: "user", en: "To Beijing, please.", zh: "寄到北京。", keywords: ["Beijing"] },
        { role: "clerk", en: "Normal or express delivery?", zh: "普通还是快递？" },
        { role: "user", en: "Express, please. How long will it take?", zh: "快递吧。要多久？", keywords: ["express", "how long"] },
        { role: "clerk", en: "About two days.", zh: "大约两天。" }
      ],
      tips: [
        "express delivery = 快递。",
        "How long...? 询问时长。"
      ]
    }
  ]
},
// ===================== 第 4 天 =====================
{
  words: [
    { word: "advantage", phonetic: "/ədˈvɑːntɪdʒ/", meaning: "n. 优势；好处", example: "Speaking English is an advantage.", exampleZh: "会说英语是一种优势。" },
    { word: "construct", phonetic: "/kənˈstrʌkt/", meaning: "v. 建造；构造", example: "They constructed a new bridge.", exampleZh: "他们建了一座新桥。" },
    { word: "diverse", phonetic: "/daɪˈvɜːs/", meaning: "adj. 多样的；不同的", example: "The city has a diverse culture.", exampleZh: "这座城市文化多样。" },
    { word: "estimate", phonetic: "/ˈestɪmeɪt/", meaning: "v. 估计 n. 估价", example: "We estimate it will cost 100 yuan.", exampleZh: "我们估计要花 100 元。" },
    { word: "frequent", phonetic: "/ˈfriːkwənt/", meaning: "adj. 频繁的", example: "He makes frequent trips to Beijing.", exampleZh: "他经常去北京出差。" },
    { word: "genuine", phonetic: "/ˈdʒenjuɪn/", meaning: "adj. 真正的；真诚的", example: "She has a genuine smile.", exampleZh: "她的笑容发自内心。" },
    { word: "harvest", phonetic: "/ˈhɑːvɪst/", meaning: "n. 收获 v. 收割", example: "Autumn is the harvest season.", exampleZh: "秋天是收获的季节。" },
    { word: "instruct", phonetic: "/ɪnˈstrʌkt/", meaning: "v. 指导；指示", example: "The teacher instructed us to read aloud.", exampleZh: "老师指示我们朗读。" },
    { word: "journey", phonetic: "/ˈdʒɜːni/", meaning: "n. 旅行；旅程", example: "It was a long journey home.", exampleZh: "回家的路程很长。" },
    { word: "locate", phonetic: "/ləʊˈkeɪt/", meaning: "v. 位于；定位", example: "The hotel is located near the sea.", exampleZh: "旅馆位于海边。" },
    { word: "motive", phonetic: "/ˈməʊtɪv/", meaning: "n. 动机；目的", example: "What was his motive?", exampleZh: "他的动机是什么？" },
    { word: "obstacle", phonetic: "/ˈɒbstəkl/", meaning: "n. 障碍", example: "Fear is a big obstacle.", exampleZh: "恐惧是一大障碍。" },
    { word: "previous", phonetic: "/ˈpriːviəs/", meaning: "adj. 先前的", example: "We met last year, in the previous meeting.", exampleZh: "我们去年，在先前那次会议上见过。" },
    { word: "region", phonetic: "/ˈriːdʒən/", meaning: "n. 地区；区域", example: "This region is famous for tea.", exampleZh: "这个地区以茶出名。" },
    { word: "secure", phonetic: "/sɪˈkjʊə(r)/", meaning: "adj. 安全的 v. 使安全", example: "Keep your password secure.", exampleZh: "保护好自己的密码。" },
    { word: "temporary", phonetic: "/ˈtemprəri/", meaning: "adj. 临时的", example: "This is a temporary job.", exampleZh: "这是一份临时工作。" },
    { word: "vast", phonetic: "/vɑːst/", meaning: "adj. 巨大的；广阔的", example: "The desert is vast.", exampleZh: "这片沙漠广阔无垠。" },
    { word: "witness", phonetic: "/ˈwɪtnəs/", meaning: "n. 目击者 v. 目睹", example: "He was a witness to the accident.", exampleZh: "他是这起事故的目击者。" },
    { word: "yield", phonetic: "/jiːld/", meaning: "v. 产生；屈服", example: "The tree yields good fruit.", exampleZh: "这棵树结了好果子。" },
    { word: "zone", phonetic: "/zəʊn/", meaning: "n. 地带；区域", example: "Don't park in this zone.", exampleZh: "不要在这个区域停车。" }
  ],
  article: {
    title: "How Cities Become Smarter",
    titleZh: "城市如何变得更智能",
    paragraphs: [
      { en: "Smart cities use technology to improve daily life.", zh: "智慧城市利用科技改善日常生活。" },
      { en: "Sensors collect data about traffic, air quality, and energy use.", zh: "传感器收集交通、空气质量和能源使用的数据。" },
      { en: "This data helps the city manage services more efficiently.", zh: "这些数据帮助城市更高效地管理服务。" },
      { en: "As a result, citizens enjoy cleaner air and shorter commutes.", zh: "因此，市民享受到更干净的空气和更短的通勤。" }
    ],
    phrases: [
      { phrase: "use technology", meaning: "利用科技" },
      { phrase: "collect data", meaning: "收集数据" },
      { phrase: "air quality", meaning: "空气质量" },
      { phrase: "as a result", meaning: "因此" }
    ],
    grammar: [
      { point: "This data helps the city manage...", explain: "help sb. do sth.——帮助某人做某事。" },
      { point: "As a result,...", explain: "因此，连接结果的过渡词。" }
    ],
    tips: [
      "efficiently → 高效率地；efficient 的副词形式。",
      "citizen → 市民；citizens 复数。"
    ],
    quiz: {
      choice: [
        { q: "What do sensors in smart cities collect?", options: ["Money", "Data about traffic and air quality", "Only food", "Nothing"], answer: 1 },
        { q: "Who benefits from smart cities?", options: ["Only robots", "Citizens", "Only companies", "Nobody"], answer: 1 },
        { q: "What does smart technology help the city do?", options: ["Use less energy wisely", "Waste more", "Remove people", "Slow traffic"], answer: 0 }
      ],
      fill: [
        { q: "S______ collect data in smart cities.", answer: "sensors" }
      ],
      writing: { prompt: "Describe one way technology could make your city better. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在学校借书",
      situationZh: "你在学校图书馆借一本英语词典。",
      roles: { clerk: "图书管理员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, can I help you?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "Yes, I'd like to borrow an English dictionary.", zh: "是的，我想借一本英语词典。", keywords: ["borrow", "dictionary"] },
        { role: "clerk", en: "Let me check. It should be on shelf C.", zh: "让我查一下，应该在 C 类书架。" },
        { role: "user", en: "How long can I keep it?", zh: "我可以借多久？", keywords: ["how long"] },
        { role: "clerk", en: "Two weeks.", zh: "两周。" },
        { role: "user", en: "OK, thank you.", zh: "好的，谢谢。", keywords: ["thank"] }
      ],
      tips: [
        "borrow = 借入；lend = 借出。",
        "shelf = 书架（复数 shelves）。"
      ]
    },
    {
      scene: "在健身房办卡",
      situationZh: "你想在健身房办一张月卡。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome to FitGym! How can I help?", zh: "欢迎来到 FitGym！需要什么帮助？" },
        { role: "user", en: "I'd like to join. How much is a monthly card?", zh: "我想加入。月卡多少钱？", keywords: ["monthly", "how much"] },
        { role: "clerk", en: "It's 300 yuan a month.", zh: "每月 300 元。" },
        { role: "user", en: "Are there any discounts?", zh: "有折扣吗？", keywords: ["discount"] },
        { role: "clerk", en: "Yes, 15% off if you pay for the whole year.", zh: "有，整年付款打八五折。" },
        { role: "user", en: "I'll take the yearly plan then.", zh: "那我办年卡吧。", keywords: ["yearly"] },
        { role: "clerk", en: "Great! Please fill in this form.", zh: "好的！请填写这张表。" }
      ],
      tips: [
        "discount = 折扣；15% off = 打八五折。",
        "fill in = 填写（表格）。"
      ]
    }
  ]
},
// ===================== 第 5 天 =====================
{
  words: [
    { word: "accurate", phonetic: "/ˈækjərət/", meaning: "adj. 准确的", example: "The report is accurate.", exampleZh: "这份报告很准确。" },
    { word: "bacterial", phonetic: "/bækˈtɪəriəl/", meaning: "adj. 细菌的", example: "Some diseases are bacterial.", exampleZh: "有些疾病是细菌引起的。" },
    { word: "candidate", phonetic: "/ˈkændɪdət/", meaning: "n. 候选人；应试者", example: "He is a candidate for the job.", exampleZh: "他是这份工作的候选人。" },
    { word: "definite", phonetic: "/ˈdefɪnət/", meaning: "adj. 明确的；确定的", example: "Give me a definite answer.", exampleZh: "给我一个明确的答复。" },
    { word: "economy", phonetic: "/ɪˈkɒnəmi/", meaning: "n. 经济", example: "The economy is growing.", exampleZh: "经济在增长。" },
    { word: "finance", phonetic: "/ˈfaɪnæns/", meaning: "n. 财政；金融", example: "He works in finance.", exampleZh: "他在金融业工作。" },
    { word: "guarantee", phonetic: "/ˌɡærənˈtiː/", meaning: "v. 保证 n. 保证；保修", example: "I guarantee it will work.", exampleZh: "我保证它会正常运作。" },
    { word: "harsh", phonetic: "/hɑːʃ/", meaning: "adj. 严厉的；恶劣的", example: "The weather here is harsh.", exampleZh: "这里的天气很恶劣。" },
    { word: "instance", phonetic: "/ˈɪnstəns/", meaning: "n. 例子；实例", example: "For instance, take this photo.", exampleZh: "例如，看这张照片。" },
    { word: "lecture", phonetic: "/ˈlektʃə(r)/", meaning: "n. 讲座；演讲", example: "We attended a lecture on history.", exampleZh: "我们参加了一场历史讲座。" },
    { word: "modify", phonetic: "/ˈmɒdɪfaɪ/", meaning: "v. 修改；调整", example: "Please modify the plan.", exampleZh: "请修改这个计划。" },
    { word: "obligation", phonetic: "/ˌɒblɪˈɡeɪʃn/", meaning: "n. 义务；责任", example: "It is your obligation to pay.", exampleZh: "付款是你的义务。" },
    { word: "purchase", phonetic: "/ˈpɜːtʃəs/", meaning: "v. 购买 n. 购买", example: "She purchased a new laptop.", exampleZh: "她买了一台新笔记本电脑。" },
    { word: "relevant", phonetic: "/ˈreləvənt/", meaning: "adj. 相关的", example: "This information is relevant to you.", exampleZh: "这些信息和你有关。" },
    { word: "scenario", phonetic: "/səˈnɑːriəʊ/", meaning: "n. 情景；场景", example: "Think about the worst scenario.", exampleZh: "想想最坏的情况。" },
    { word: "specific", phonetic: "/spəˈsɪfɪk/", meaning: "adj. 具体的；特定的", example: "Be specific about your problem.", exampleZh: "把你的问题说具体些。" },
    { word: "typical", phonetic: "/ˈtɪpɪkl/", meaning: "adj. 典型的", example: "This is a typical example.", exampleZh: "这是一个典型的例子。" },
    { word: "utility", phonetic: "/juːˈtɪləti/", meaning: "n. 实用；公用事业", example: "The tool has great utility.", exampleZh: "这个工具有很大用途。" },
    { word: "vary", phonetic: "/ˈveəri/", meaning: "v. 变化；不同", example: "Prices vary by season.", exampleZh: "价格随季节变化。" },
    { word: "worthwhile", phonetic: "/ˌwɜːθˈwaɪl/", meaning: "adj. 值得做的", example: "It is a worthwhile project.", exampleZh: "这是一个值得做的项目。" }
  ],
  article: {
    title: "Small Habits, Big Results",
    titleZh: "小习惯，大结果",
    paragraphs: [
      { en: "Many people believe that big success requires big changes.", zh: "很多人认为巨大的成功需要巨大的改变。" },
      { en: "But in fact, tiny habits make a huge difference over time.", zh: "但实际上，微小的习惯日积月累会产生巨大的差别。" },
      { en: "Reading five pages a day beats reading one book in a day.", zh: "每天读五页，胜过一天读一本书。" },
      { en: "The key is to start small and stay consistent.", zh: "关键是小处着手，并且坚持不懈。" }
    ],
    phrases: [
      { phrase: "make a difference", meaning: "产生差别；起作用" },
      { phrase: "over time", meaning: "随着时间推移" },
      { phrase: "stay consistent", meaning: "保持一致；坚持" }
    ],
    grammar: [
      { point: "Reading five pages a day beats...", explain: "动名词作主语，谓语用单数。" },
      { point: "The key is to start...", explain: "动词不定式作表语。" }
    ],
    tips: [
      "consist ent → 坚持的；可靠的。",
      "beats → 胜过，这里作动词。"
    ],
    quiz: {
      choice: [
        { q: "What does the passage say about big success?", options: ["Needs huge changes", "Can come from tiny habits", "Is impossible", "Depends on luck"], answer: 1 },
        { q: "What is the key to forming good habits?", options: ["Start small and stay consistent", "Do everything at once", "Give up easily", "Only work hard at night"], answer: 0 },
        { q: "Which example is given?", options: ["Reading five pages a day", "Running a marathon daily", "Cooking all day", "Sleeping all day"], answer: 0 }
      ],
      fill: [
        { q: "The key is to start small and stay c______.", answer: "consistent" }
      ],
      writing: { prompt: "Describe one small habit that could change your life. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在药店买感冒药",
      situationZh: "你去药店买感冒药，并向店员描述症状。",
      roles: { clerk: "药剂师", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, can I help you?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "I have a cold. Do you have any medicine?", zh: "我感冒了，有什么药吗？", keywords: ["cold", "medicine"] },
        { role: "clerk", en: "What are your symptoms?", zh: "你有哪些症状？" },
        { role: "user", en: "I have a sore throat and a mild fever.", zh: "我嗓子疼，有点发烧。", keywords: ["sore throat", "fever"] },
        { role: "clerk", en: "Take this syrup twice a day after meals.", zh: "这种糖浆，一天两次，饭后服用。" },
        { role: "user", en: "How much is it?", zh: "多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "28 yuan. Rest and drink warm water.", zh: "28 元。多休息，多喝温水。" },
        { role: "user", en: "Thank you!", zh: "谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "sore throat = 嗓子疼；fever = 发烧。",
        "twice a day = 一天两次。"
      ]
    },
    {
      scene: "在酒店办理入住",
      situationZh: "你到达酒店，办理入住并询问早餐时间。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Good evening, welcome to our hotel.", zh: "晚上好，欢迎入住我们酒店。" },
        { role: "user", en: "I have a reservation. My name is Li Ming.", zh: "我有预约，我叫李明。", keywords: ["reservation", "Li Ming"] },
        { role: "clerk", en: "Let me check. Yes, a double room for two nights.", zh: "让我查一下。是的，双人间两晚。" },
        { role: "user", en: "What time is breakfast?", zh: "早餐是几点？", keywords: ["breakfast"] },
        { role: "clerk", en: "From 7 to 10 in the morning, on the second floor.", zh: "早上 7 点到 10 点，在二楼。" },
        { role: "user", en: "Great, thank you.", zh: "好的，谢谢。", keywords: ["thank"] }
      ],
      tips: [
        "reservation = 预约；make a reservation = 预约。",
        "double room = 双人间。"
      ]
    }
  ]
},
  // ===================== 第 6 天 =====================
{
  words: [
    { word: "adapt", phonetic: "/əˈdæpt/", meaning: "v. 适应；改编", example: "You will adapt to the new life.", exampleZh: "你会适应新生活的。" },
    { word: "brilliant", phonetic: "/ˈbrɪliənt/", meaning: "adj. 极好的；聪颖的", example: "She gave a brilliant speech.", exampleZh: "她做了一场精彩的演讲。" },
    { word: "consistent", phonetic: "/kənˈsɪstənt/", meaning: "adj. 一致的；始终如一的", example: "He is consistent in his work.", exampleZh: "他做事始终如一。" },
    { word: "delicate", phonetic: "/ˈdelɪkət/", meaning: "adj. 精致的；脆弱的", example: "She has delicate hands.", exampleZh: "她有一双纤细的手。" },
    { word: "expand", phonetic: "/ɪkˈspænd/", meaning: "v. 扩大；扩展", example: "The company plans to expand.", exampleZh: "公司计划扩张。" },
    { word: "fortunate", phonetic: "/ˈfɔːtʃənət/", meaning: "adj. 幸运的", example: "You are fortunate to have support.", exampleZh: "你有支持真幸运。" },
    { word: "generate", phonetic: "/ˈdʒenəreɪt/", meaning: "v. 产生；发电", example: "Wind can generate electricity.", exampleZh: "风能发电。" },
    { word: "hesitate", phonetic: "/ˈhezɪteɪt/", meaning: "v. 犹豫", example: "Don't hesitate to ask.", exampleZh: "不要犹豫，尽管提问。" },
    { word: "intense", phonetic: "/ɪnˈtens/", meaning: "adj. 强烈的；紧张的", example: "There was intense competition.", exampleZh: "竞争非常激烈。" },
    { word: "latest", phonetic: "/ˈleɪtɪst/", meaning: "adj. 最新的", example: "Have you seen the latest film?", exampleZh: "你看过最新那部电影吗？" },
    { word: "motion", phonetic: "/ˈməʊʃn/", meaning: "n. 运动；动作", example: "The machine is in motion.", exampleZh: "机器在运转。" },
    { word: "notable", phonetic: "/ˈnəʊtəbl/", meaning: "adj. 显著的；著名的", example: "She is a notable scientist.", exampleZh: "她是一位著名科学家。" },
    { word: "option", phonetic: "/ˈɒpʃn/", meaning: "n. 选择；选项", example: "We have two options.", exampleZh: "我们有两个选择。" },
    { word: "prohibit", phonetic: "/prəˈhɪbɪt/", meaning: "v. 禁止", example: "Smoking is prohibited here.", exampleZh: "这里禁止吸烟。" },
    { word: "reluctant", phonetic: "/rɪˈlʌktənt/", meaning: "adj. 不情愿的", example: "She was reluctant to leave.", exampleZh: "她不愿离开。" },
    { word: "slight", phonetic: "/slaɪt/", meaning: "adj. 轻微的；纤细的", example: "There is a slight difference.", exampleZh: "有细微的差别。" },
    { word: "threaten", phonetic: "/ˈθretn/", meaning: "v. 威胁；恐吓", example: "Storms threaten the crops.", exampleZh: "暴风雨威胁着庄稼。" },
    { word: "ultimate", phonetic: "/ˈʌltɪmət/", meaning: "adj. 最终的；根本的", example: "Our ultimate goal is peace.", exampleZh: "我们的最终目标是和平。" },
    { word: "vulnerable", phonetic: "/ˈvʌlnərəbl/", meaning: "adj. 易受伤害的", example: "Young children are vulnerable.", exampleZh: "小孩子很容易受伤。" },
    { word: "widespread", phonetic: "/ˈwaɪdspred/", meaning: "adj. 广泛的", example: "The idea is widespread.", exampleZh: "这个观点广为流传。" }
  ],
  article: {
    title: "How to Make Friends as an Adult",
    titleZh: "成年人如何交朋友",
    paragraphs: [
      { en: "Making friends as an adult can feel difficult.", zh: "作为成年人交朋友可能会觉得困难。" },
      { en: "School is over, and you no longer meet people every day.", zh: "学校结束了，你不再每天见到许多人。" },
      { en: "The good news is that shared activities create friendships naturally.", zh: "好消息是，共同的活动能自然地促成友谊。" },
      { en: "Join a club, volunteer, or take a class to meet like-minded people.", zh: "加入社团、做志愿者或上课，去结识志同道合的人。" }
    ],
    phrases: [
      { phrase: "no longer", meaning: "不再" },
      { phrase: "shared activities", meaning: "共同的活动" },
      { phrase: "like-minded people", meaning: "志同道合的人" }
    ],
    grammar: [
      { point: "The good news is that...", explain: "that 引导表语从句。" },
      { point: "to meet like-minded people", explain: "动词不定式表目的。" }
    ],
    tips: [
      "adult → 成年人；作名词。",
      "volunteer → 自愿者；做志愿工作。"
    ],
    quiz: {
      choice: [
        { q: "Why is it hard for adults to make friends?", options: ["They hate people", "They no longer meet people daily", "They are too busy only", "They can't speak"], answer: 1 },
        { q: "What creates friendships naturally?", options: ["Money", "Shared activities", "Long distance", "No contact"], answer: 1 },
        { q: "What can you do to meet people?", options: ["Join a club", "Stay home", "Watch more TV", "Sleep early"], answer: 0 }
      ],
      fill: [
        { q: "Join a club to meet l______-minded people.", answer: "like" }
      ],
      writing: { prompt: "Describe one way adults can make new friends. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在理发店剪发",
      situationZh: "你去理发店想剪短头发。",
      roles: { clerk: "理发师", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! What would you like?", zh: "欢迎！想怎么处理？" },
        { role: "user", en: "I'd like to get a haircut.", zh: "我想剪个头发。", keywords: ["haircut"] },
        { role: "clerk", en: "How short do you want it?", zh: "想剪多短？" },
        { role: "user", en: "Just a little bit off, please.", zh: "稍微剪短一点就好。", keywords: ["little"] },
        { role: "clerk", en: "Do you want a wash first?", zh: "要先洗个头吗？" },
        { role: "user", en: "Yes, please.", zh: "好的。", keywords: ["wash"] },
        { role: "clerk", en: "All done! That'll be 45 yuan.", zh: "好了！一共 45 元。" },
        { role: "user", en: "Here you are. Thanks!", zh: "给你，谢谢！", keywords: ["here"] }
      ],
      tips: [
        "get a haircut = 理发。",
        "just a little bit off = 稍微剪短一点。"
      ]
    },
    {
      scene: "在超市结账",
      situationZh: "你在超市结账，询问是否需要购物袋。",
      roles: { clerk: "收银员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, do you have a membership card?", zh: "你好，有会员卡吗？" },
        { role: "user", en: "Yes, here it is.", zh: "有，给你。", keywords: ["membership"] },
        { role: "clerk", en: "Do you need a bag?", zh: "需要购物袋吗？" },
        { role: "user", en: "No, I brought my own.", zh: "不用，我自带了。", keywords: ["bag", "own"] },
        { role: "clerk", en: "Great. Your total is 98 yuan.", zh: "好的。一共 98 元。" },
        { role: "user", en: "Can I pay by card?", zh: "可以刷卡吗？", keywords: ["card"] },
        { role: "clerk", en: "Sure, please insert your card.", zh: "可以，请插卡。" }
      ],
      tips: [
        "membership card = 会员卡。",
        "pay by card = 刷卡支付。"
      ]
    }
  ]
},
// ===================== 第 7 天 =====================
{
  words: [
    { word: "acquire", phonetic: "/əˈkwaɪə(r)/", meaning: "v. 获得；学到", example: "She acquired new skills.", exampleZh: "她掌握了新技能。" },
    { word: "barely", phonetic: "/ˈbeəli/", meaning: "adv. 几乎不；仅仅", example: "I barely slept last night.", exampleZh: "我昨晚几乎没睡。" },
    { word: "conscious", phonetic: "/ˈkɒnʃəs/", meaning: "adj. 有意识的；察觉的", example: "He was conscious of the risk.", exampleZh: "他意识到了风险。" },
    { word: "deprive", phonetic: "/dɪˈpraɪv/", meaning: "v. 剥夺", example: "Don't deprive yourself of sleep.", exampleZh: "不要剥夺自己的睡眠。" },
    { word: "enormous", phonetic: "/ɪˈnɔːməs/", meaning: "adj. 巨大的", example: "There is an enormous library.", exampleZh: "有个巨大的图书馆。" },
    { word: "fragile", phonetic: "/ˈfrædʒaɪl/", meaning: "adj. 易碎的；脆弱的", example: "Fragile, handle with care.", exampleZh: "易碎，小心轻放。" },
    { word: "glow", phonetic: "/ɡləʊ/", meaning: "v. 发光;发热 n. 光辉", example: "The lantern glows in the dark.", exampleZh: "灯笼在黑暗中发光。" },
    { word: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", meaning: "n. 假设", example: "They tested the hypothesis.", exampleZh: "他们检验了这个假设。" },
    { word: "interaction", phonetic: "/ˌɪntərˈækʃn/", meaning: "n. 互动；相互作用", example: "Classroom interaction helps learning.", exampleZh: "课堂互动有助于学习。" },
    { word: "jurisdiction", phonetic: "/ˌdʒʊərɪsˈdɪkʃn/", meaning: "n. 司法权；管辖权", example: "This case is outside our jurisdiction.", exampleZh: "这个案子不归我们管。" },
    { word: "loyal", phonetic: "/ˈlɔɪəl/", meaning: "adj. 忠诚的", example: "The dog is loyal to its owner.", exampleZh: "这只狗忠于主人。" },
    { word: "mild", phonetic: "/maɪld/", meaning: "adj. 温和的；轻微的", example: "The climate is mild here.", exampleZh: "这里气候温和。" },
    { word: "nevertheless", phonetic: "/ˌnevəðəˈles/", meaning: "adv. 然而；不过", example: "It was raining; nevertheless, we went out.", exampleZh: "虽然下雨，我们仍然出去了。" },
    { word: "originate", phonetic: "/əˈrɪdʒɪneɪt/", meaning: "v. 起源于", example: "Paper originated in China.", exampleZh: "纸起源于中国。" },
    { word: "preserve", phonetic: "/prɪˈzɜːv/", meaning: "v. 保存；保护", example: "We must preserve nature.", exampleZh: "我们必须保护自然。" },
    { word: "restore", phonetic: "/rɪˈstɔː(r)/", meaning: "v. 恢复；修复", example: "They restored the old building.", exampleZh: "他们修复了那座老建筑。" },
    { word: "soar", phonetic: "/sɔː(r)/", meaning: "v. 猛增；翱翔", example: "Prices soared last year.", exampleZh: "去年物价飙升。" },
    { word: "tension", phonetic: "/ˈtenʃn/", meaning: "n. 紧张；张力", example: "There was tension in the room.", exampleZh: "房间里气氛紧张。" },
    { word: "upset", phonetic: "/ˌʌpˈset/", meaning: "adj. 苦恼的 v. 打乱", example: "She looked upset.", exampleZh: "她看起来很沮丧。" },
    { word: "worth", phonetic: "/wɜːθ/", meaning: "prep. 值得 n. 价值", example: "This book is worth reading.", exampleZh: "这本书值得一读。" }
  ],
  article: {
    title: "The Value of Reading Fiction",
    titleZh: "阅读小说的价值",
    paragraphs: [
      { en: "People often call fiction a form of entertainment.", zh: "人们常把小说称为一种娱乐。" },
      { en: "But novels do more than entertain us.", zh: "但小说给我们的不只是娱乐。" },
      { en: "Reading fiction helps us understand other people's feelings and worries.", zh: "阅读小说帮助我们理解他人的感受与担忧。" },
      { en: "It also strengthens our imagination and our ability to concentrate.", zh: "它还锻炼我们的想象力与专注力。" }
    ],
    phrases: [
      { phrase: "a form of", meaning: "一种……形式" },
      { phrase: "understand feelings", meaning: "理解感受" },
      { phrase: "strengthen imagination", meaning: "增强想象力" }
    ],
    grammar: [
      { point: "Novels do more than entertain us.", explain: "more than + 动词原形，意为“不仅仅”。" },
      { point: "The ability to concentrate", explain: "不定式作 ability 的后置定语。" }
    ],
    tips: [
      "fiction → 小说（总称）；non-fiction → 非虚构类。",
      "concentrate → 集中注意力 concentrate on。"
    ],
    quiz: {
      choice: [
        { q: "What does the passage say fiction is often called?", options: ["Work", "A form of entertainment", "Homework", "A sport"], answer: 1 },
        { q: "Reading fiction helps us understand ______.", options: ["Only facts", "Others' feelings", "Math", "Nothing"], answer: 1 },
        { q: "Fiction also strengthens our ______.", options: ["Strength", "Imagination", "Money", "Appetite"], answer: 1 }
      ],
      fill: [
        { q: "Reading fiction helps strengthen our i______.", answer: "imagination" }
      ],
      writing: { prompt: "Explain why reading fiction is valuable. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在机场办理登机",
      situationZh: "你在机场值机，询问登机口和登机时间。",
      roles: { clerk: "地勤", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning, may I see your passport?", zh: "早上好，请出示护照。" },
        { role: "user", en: "Sure, here you are.", zh: "好的，给你。", keywords: ["passport", "here"] },
        { role: "clerk", en: "Do you have any bags to check in?", zh: "有需要托运的行李吗？" },
        { role: "user", en: "No, I only have this carry-on bag.", zh: "没有，只有这个随身行李。", keywords: ["carry-on"] },
        { role: "clerk", en: "Here's your boarding pass. Gate B12.", zh: "这是你的登机牌，B12 登机口。" },
        { role: "user", en: "What time is boarding?", zh: "几点登机？", keywords: ["boarding"] },
        { role: "clerk", en: "Boarding starts at 2:30 pm.", zh: "下午两点半开始登机。" },
        { role: "user", en: "Thank you very much!", zh: "非常感谢！", keywords: ["thank"] }
      ],
      tips: [
        "boarding pass = 登机牌。",
        "carry-on bag = 随身行李；check in = 托运/办理登机。"
      ]
    },
    {
      scene: "在图书馆还书",
      situationZh: "你去图书馆还书并续借另一本。",
      roles: { clerk: "图书管理员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, are you returning these?", zh: "你好，是要还这些吗？" },
        { role: "user", en: "Yes, I'd like to return this book.", zh: "是的，我要还这本书。", keywords: ["return"] },
        { role: "clerk", en: "It was due two days ago, so there's a small fine.", zh: "这本书两天前到期，有少量罚款。" },
        { role: "user", en: "How much is the fine?", zh: "罚款多少？", keywords: ["fine", "how much"] },
        { role: "clerk", en: "Just two yuan.", zh: "只要两元。" },
        { role: "user", en: "Also, can I renew this dictionary?", zh: "另外，我可以续借这本词典吗？", keywords: ["renew"] },
        { role: "clerk", en: "Sure, it's renewed for two more weeks.", zh: "可以，已续借两周。" },
        { role: "user", en: "Great, thank you!", zh: "太好了，谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "return = 归还；renew = 续借。",
        "fine = 罚款。"
      ]
    }
  ]
},
// ===================== 第 8 天 =====================
{
  words: [
    { word: "analyze", phonetic: "/ˈænəlaɪz/", meaning: "v. 分析", example: "We need to analyze the data.", exampleZh: "我们需要分析这些数据。" },
    { word: "browse", phonetic: "/braʊz/", meaning: "v. 浏览", example: "She browsed the store for hours.", exampleZh: "她逛商店逛了几个小时。" },
    { word: "conclude", phonetic: "/kənˈkluːd/", meaning: "v. 下结论；结束", example: "They concluded that it was safe.", exampleZh: "他们得出结论是安全的。" },
    { word: "density", phonetic: "/ˈdensəti/", meaning: "n. 密度；稠密", example: "The city has high population density.", exampleZh: "这座城市人口密度高。" },
    { word: "encounter", phonetic: "/ɪnˈkaʊntə(r)/", meaning: "v. 遇到 n. 遭遇", example: "We encountered many problems.", exampleZh: "我们遇到了许多问题。" },
    { word: "formal", phonetic: "/ˈfɔːml/", meaning: "adj. 正式的", example: "You need a formal letter.", exampleZh: "你需要一封正式的信函。" },
    { word: "global", phonetic: "/ˈɡləʊbl/", meaning: "adj. 全球的", example: "Climate change is a global issue.", exampleZh: "气候变化是一个全球性问题。" },
    { word: "independent", phonetic: "/ˌɪndɪˈpendənt/", meaning: "adj. 独立的", example: "She is an independent woman.", exampleZh: "她是个独立的女性。" },
    { word: "justify", phonetic: "/ˈdʒʌstɪfaɪ/", meaning: "v. 证明正确", example: "You must justify your decision.", exampleZh: "你必须为你的决定给出理由。" },
    { word: "limit", phonetic: "/ˈlɪmɪt/", meaning: "v. 限制 n. 限度", example: "Limit your screen time.", exampleZh: "限制你的屏幕时间。" },
    { word: "manner", phonetic: "/ˈmænə(r)/", meaning: "n. 方式；礼仪", example: "Mind your manners.", exampleZh: "注意你的礼貌。" },
    { word: "obviously", phonetic: "/ˈɒbviəsli/", meaning: "adv. 明显地", example: "Obviously, he was tired.", exampleZh: "显然，他累了。" },
    { word: "permanent", phonetic: "/ˈpɜːmənənt/", meaning: "adj. 永久的", example: "This is a permanent change.", exampleZh: "这是一个永久性的改变。" },
    { word: "resist", phonetic: "/rɪˈzɪst/", meaning: "v. 抵抗；抵制", example: "I can't resist chocolate.", exampleZh: "我无法抗拒巧克力。" },
    { word: "schedule", phonetic: "/ˈʃedjuːl/", meaning: "n. 时间表 v. 安排", example: "Check the train schedule.", exampleZh: "查看火车时刻表。" },
    { word: "tackle", phonetic: "/ˈtækl/", meaning: "v. 处理；应付", example: "Let's tackle this problem.", exampleZh: "让我们处理这个问题。" },
    { word: "unique", phonetic: "/juˈniːk/", meaning: "adj. 独一无二的", example: "Each person is unique.", exampleZh: "每个人都是独一无二的。" },
    { word: "virtual", phonetic: "/ˈvɜːtʃuəl/", meaning: "adj. 虚拟的；实质上的", example: "We had a virtual meeting.", exampleZh: "我们开了一场线上会议。" },
    { word: "warehouse", phonetic: "/ˈweəhaʊs/", meaning: "n. 仓库", example: "Goods are stored in the warehouse.", exampleZh: "货物存放在仓库里。" },
    { word: "zealous", phonetic: "/ˈzeləs/", meaning: "adj. 热心的；狂热的", example: "She is zealous about her work.", exampleZh: "她对工作非常热心。" }
  ],
  article: {
    title: "Why We Should Eat More Vegetables",
    titleZh: "我们为什么应该多吃蔬菜",
    paragraphs: [
      { en: "Vegetables are one of the healthiest foods on earth.", zh: "蔬菜是地球上最健康的食物之一。" },
      { en: "They are full of vitamins and fiber but low in calories.", zh: "它们富含维生素和纤维，但热量低。" },
      { en: "Eating plenty of vegetables reduces the risk of many diseases.", zh: "多吃蔬菜能降低许多疾病的风险。" },
      { en: "A simple way to eat more is to put vegetables in every meal.", zh: "多吃蔬菜的简单方法是在每餐中加入蔬菜。" }
    ],
    phrases: [
      { phrase: "full of", meaning: "充满" },
      { phrase: "low in calories", meaning: "热量低" },
      { phrase: "reduce the risk of", meaning: "降低……的风险" }
    ],
    grammar: [
      { point: "one of the healthiest foods", explain: "one of + 最高级 + 复数名词，意为“最……的之一”。" },
      { point: "A simple way to eat more is to put...", explain: "不定式做目的/表语。" }
    ],
    tips: [
      "fiber → 纤维。",
      "disease → 疾病。"
    ],
    quiz: {
      choice: [
        { q: "Vegetables are ______ in calories.", options: ["High", "Low", "Zero always", "The same as meat"], answer: 1 },
        { q: "What do vegetables reduce?", options: ["The risk of diseases", "Money", "Sleep", "Friends"], answer: 0 },
        { q: "What is a simple way to eat more vegetables?", options: ["Skip meals", "Add them to every meal", "Only eat dessert", "Drink soda"], answer: 1 }
      ],
      fill: [
        { q: "Eating vegetables r______ the risk of diseases.", answer: "reduces" }
      ],
      writing: { prompt: "Describe why vegetables are good for you. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在公司请假",
      situationZh: "你向经理请假去看医生。",
      roles: { clerk: "经理", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning, is there anything I can help with?", zh: "早上好，有什么事吗？" },
        { role: "user", en: "I'm not feeling well. Can I take the morning off?", zh: "我身体不太舒服，上午能请个假吗？", keywords: ["feeling", "off"] },
        { role: "clerk", en: "Of course. Do you need to see a doctor?", zh: "当然。你需要去看医生吗？" },
        { role: "user", en: "Yes, I have an appointment at ten.", zh: "是的，我十点有预约。", keywords: ["appointment"] },
        { role: "clerk", en: "Take care. Let me know how you feel later.", zh: "保重身体。之后告诉我你的情况。" },
        { role: "user", en: "Thank you for understanding.", zh: "谢谢你的理解。", keywords: ["thank"] }
      ],
      tips: [
        "take the morning off = 上午请假。",
        "appointment = 预约（看医生/会面）。"
      ]
    },
    {
      scene: "在手机店买手机",
      situationZh: "你在手机店询问适合拍照的手机。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, how can I help you today?", zh: "你好，今天需要什么帮助？" },
        { role: "user", en: "I'm looking for a phone with a good camera.", zh: "我在找一款拍照好的手机。", keywords: ["camera"] },
        { role: "clerk", en: "This model has a 50MP camera.", zh: "这款手机有 5000 万像素摄像头。" },
        { role: "user", en: "How much does it cost?", zh: "多少钱？", keywords: ["cost"] },
        { role: "clerk", en: "It's 3,499 yuan, including a free case.", zh: "3499 元，附赠一个手机壳。" },
        { role: "user", en: "Can you show me how it works?", zh: "能演示一下怎么用吗？", keywords: ["show"] },
        { role: "clerk", en: "Sure, here you are.", zh: "当然可以，给你。" }
      ],
      tips: [
        "good camera = 好摄像头。",
        "including = 包括。"
      ]
    }
  ]
},
// ===================== 第 9 天 =====================
{
  words: [
    { word: "aspect", phonetic: "/ˈæspekt/", meaning: "n. 方面", example: "Consider every aspect of the plan.", exampleZh: "考虑计划的每个方面。" },
    { word: "beware", phonetic: "/bɪˈweə(r)/", meaning: "v. 当心；提防", example: "Beware of the dog.", exampleZh: "当心狗。" },
    { word: "crucial", phonetic: "/ˈkruːʃl/", meaning: "adj. 至关重要的", example: "Water is crucial for life.", exampleZh: "水对生命至关重要。" },
    { word: "dilemma", phonetic: "/dɪˈlemə/", meaning: "n. 困境；两难", example: "He was in a dilemma.", exampleZh: "他陷入了两难境地。" },
    { word: "equivalent", phonetic: "/ɪˈkwɪvələnt/", meaning: "n. 等价物 adj. 相等的", example: "One dollar is equivalent to seven yuan.", exampleZh: "一美元相当于七元。" },
    { word: "flexible", phonetic: "/ˈfleksəbl/", meaning: "adj. 灵活的；可弯曲的", example: "My hours are flexible.", exampleZh: "我的工作时间很灵活。" },
    { word: "glimpse", phonetic: "/ɡlɪmps/", meaning: "n. 一瞥 v. 瞥见", example: "I caught a glimpse of her.", exampleZh: "我瞥见了她一眼。" },
    { word: "instinct", phonetic: "/ˈɪnstɪŋkt/", meaning: "n. 本能；直觉", example: "Trust your instinct.", exampleZh: "相信你的直觉。" },
    { word: "justify", phonetic: "/ˈdʒʌstɪfaɪ/", meaning: "v. 证明有理", example: "Nothing can justify lying.", exampleZh: "没有什么能为说谎辩护。" },
    { word: "link", phonetic: "/lɪŋk/", meaning: "n. 联系 v. 连接", example: "There is a link between diet and health.", exampleZh: "饮食与健康之间存在联系。" },
    { word: "minimize", phonetic: "/ˈmɪnɪmaɪz/", meaning: "v. 最小化；减小", example: "Minimize the risk of error.", exampleZh: "尽量减少出错的风险。" },
    { word: "oblige", phonetic: "/əˈblaɪdʒ/", meaning: "v. 迫使；施恩于", example: "I am obliged to help him.", exampleZh: "我有义务帮助他。" },
    { word: "positive", phonetic: "/ˈpɒzətɪv/", meaning: "adj. 积极的；肯定的", example: "Keep a positive attitude.", exampleZh: "保持积极的心态。" },
    { word: "react", phonetic: "/riˈækt/", meaning: "v. 反应；起反应", example: "She reacted quickly.", exampleZh: "她反应很快。" },
    { word: "significant", phonetic: "/sɪɡˈnɪfɪkənt/", meaning: "adj. 重要的；显著的", example: "There was a significant change.", exampleZh: "有显著的变化。" },
    { word: "tend", phonetic: "/tend/", meaning: "v. 倾向于；照料", example: "He tends to sleep late.", exampleZh: "他倾向于晚睡。" },
    { word: "ultimate", phonetic: "/ˈʌltɪmət/", meaning: "adj. 最终的", example: "The ultimate goal is success.", exampleZh: "最终目标是成功。" },
    { word: "verify", phonetic: "/ˈverɪfaɪ/", meaning: "v. 核实；证明", example: "Please verify the facts.", exampleZh: "请核实这些事实。" },
    { word: "warn", phonetic: "/wɔːn/", meaning: "v. 警告", example: "They warned us about the storm.", exampleZh: "他们警告我们有暴风雨。" },
    { word: "yield", phonetic: "/jiːld/", meaning: "v. 出产；让出", example: "The land yields good crops.", exampleZh: "这片土地出产好庄稼。" }
  ],
  article: {
    title: "Learning to Say No",
    titleZh: "学会说不",
    paragraphs: [
      { en: "Many people find it hard to refuse a request.", zh: "许多人觉得难以拒绝别人的请求。" },
      { en: "They fear that saying no will hurt a friendship.", zh: "他们担心拒绝会伤害友谊。" },
      { en: "However, always saying yes leaves you tired and stressed.", zh: "然而，总是答应会让你疲惫不堪。" },
      { en: "A polite but firm no protects your time and health.", zh: "礼貌而坚定地拒绝能保护你的时间和健康。" }
    ],
    phrases: [
      { phrase: "refuse a request", meaning: "拒绝请求" },
      { phrase: "say no", meaning: "说不；拒绝" },
      { phrase: "polite but firm", meaning: "礼貌但坚定" }
    ],
    grammar: [
      { point: "find it hard to refuse", explain: "find it + adj. + to do，意为“觉得做某事很……”。" },
      { point: "always saying yes...", explain: "动名词短语作主语。" }
    ],
    tips: [
      "refuse → 拒绝；同义 reject。",
      "firm → 坚定的；firmly 副词。"
    ],
    quiz: {
      choice: [
        { q: "Why do people hesitate to say no?", options: ["They are lazy", "Fear of hurting friendship", "They can't talk", "They enjoy stress"], answer: 1 },
        { q: "Always saying yes makes you ______.", options: ["Happier", "Tired and stressed", "Richer", "Smarter"], answer: 1 },
        { q: "What protects your time and health?", options: ["Saying no politely", "Doing everything", "Sleeping more", "Working all day"], answer: 0 }
      ],
      fill: [
        { q: "A p______ but firm no protects your time.", answer: "polite" }
      ],
      writing: { prompt: "Describe a situation where saying no is necessary. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在银行开户",
      situationZh: "你在银行想开一个储蓄账户。",
      roles: { clerk: "客户经理", user: "我" },
      turns: [
        { role: "clerk", en: "Good afternoon, how can I help?", zh: "下午好，需要什么帮助？" },
        { role: "user", en: "I'd like to open a savings account.", zh: "我想开一个储蓄账户。", keywords: ["savings", "account"] },
        { role: "clerk", en: "May I see your ID card, please?", zh: "请出示您的身份证。" },
        { role: "user", en: "Here it is.", zh: "给你。", keywords: ["ID"] },
        { role: "clerk", en: "Do you want online banking too?", zh: "需要开通网上银行吗？" },
        { role: "user", en: "Yes, that would be useful.", zh: "需要，那很有用。", keywords: ["online", "useful"] },
        { role: "clerk", en: "Please sign here, and you're all set.", zh: "请在这里签字，办好了。" },
        { role: "user", en: "Thank you!", zh: "谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "savings account = 储蓄账户。",
        "online banking = 网上银行。"
      ]
    },
    {
      scene: "向同事借资料",
      situationZh: "你向同事借昨天的会议笔记。",
      roles: { clerk: "同事", user: "我" },
      turns: [
        { role: "clerk", en: "Hey, how's it going?", zh: "嘿，最近怎么样？" },
        { role: "user", en: "Not bad. Could I borrow your meeting notes from yesterday?", zh: "还不错。我能借用你昨天的会议笔记吗？", keywords: ["borrow", "notes"] },
        { role: "clerk", en: "Sure, I'll send them to you.", zh: "当然，我发给你。" },
        { role: "user", en: "Thanks a lot. I missed the meeting.", zh: "多谢。我错过了会议。", keywords: ["missed"] },
        { role: "clerk", en: "No problem. Anything else?", zh: "没问题。还需要别的吗？" },
        { role: "user", en: "No, that's all. Thank you!", zh: "不用了，谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "meeting notes = 会议笔记。",
        "borrow = 借入。"
      ]
    }
  ]
},
// ===================== 第 10 天 =====================
{
  words: [
    { word: "accurate", phonetic: "/ˈækjərət/", meaning: "adj. 准确的", example: "The map is accurate.", exampleZh: "这张地图很准确。" },
    { word: "bundle", phonetic: "/ˈbʌndl/", meaning: "n. 捆；束 v. 打包", example: "He carried a bundle of clothes.", exampleZh: "他抱着一捆衣服。" },
    { word: "convey", phonetic: "/kənˈveɪ/", meaning: "v. 表达；传达", example: "Her smile conveys happiness.", exampleZh: "她的微笑传达出快乐。" },
    { word: "detect", phonetic: "/dɪˈtekt/", meaning: "v. 察觉；侦查", example: "The machine detects smoke.", exampleZh: "机器能探测到烟雾。" },
    { word: "essential", phonetic: "/ɪˈsenʃl/", meaning: "adj. 必不可少的", example: "Water is essential for life.", exampleZh: "水对生命必不可少。" },
    { word: "familiar", phonetic: "/fəˈmɪliə(r)/", meaning: "adj. 熟悉的", example: "That song sounds familiar.", exampleZh: "那首歌听起来很耳熟。" },
    { word: "grateful", phonetic: "/ˈɡreɪtfl/", meaning: "adj. 感激的", example: "I'm grateful for your help.", exampleZh: "我很感激你的帮助。" },
    { word: "impose", phonetic: "/ɪmˈpəʊz/", meaning: "v. 强加；征收", example: "Don't impose your views on me.", exampleZh: "不要把你的观点强加给我。" },
    { word: "juncture", phonetic: "/ˈdʒʌŋktʃə(r)/", meaning: "n. 关键时刻；节点", example: "At this juncture, we must wait.", exampleZh: "在这个关键时刻，我们必须等待。" },
    { word: "literal", phonetic: "/ˈlɪtərəl/", meaning: "adj. 字面的；逐字的", example: "It is a literal translation.", exampleZh: "这是逐字翻译。" },
    { word: "mannerism", phonetic: "/ˈmænərɪzəm/", meaning: "n. 癖好；习惯动作", example: "He has a nervous mannerism.", exampleZh: "他有个紧张的小习惯。" },
    { word: "necessity", phonetic: "/nəˈsesəti/", meaning: "n. 必要性；必需品", example: "Food is a necessity.", exampleZh: "食物是必需品。" },
    { word: "officially", phonetic: "/əˈfɪʃəli/", meaning: "adv. 正式地", example: "The store opened officially today.", exampleZh: "这家店今天正式开张。" },
    { word: "peculiar", phonetic: "/pɪˈkjuːliə(r)/", meaning: "adj. 奇怪的；特有的", example: "It has a peculiar smell.", exampleZh: "它有一种奇怪的气味。" },
    { word: "quantum", phonetic: "/ˈkwɒntəm/", meaning: "n. 量子 adj. 大的", example: "Quantum physics is complex.", exampleZh: "量子物理很复杂。" },
    { word: "resent", phonetic: "/rɪˈzent/", meaning: "v. 怨恨；不满", example: "He resents being criticized.", exampleZh: "他对被批评感到不满。" },
    { word: "substantial", phonetic: "/səbˈstænʃl/", meaning: "adj. 大量的；实质的", example: "There was a substantial increase.", exampleZh: "有相当大的增长。" },
    { word: "thrive", phonetic: "/θraɪv/", meaning: "v. 兴旺；茁壮成长", example: "Plants thrive in sunlight.", exampleZh: "植物在阳光下茁壮成长。" },
    { word: "utter", phonetic: "/ˈʌtə(r)/", meaning: "v. 说出 adj. 完全的", example: "She didn't utter a word.", exampleZh: "她一句话也没说。" },
    { word: "various", phonetic: "/ˈveəriəs/", meaning: "adj. 各种各样的", example: "The shop sells various goods.", exampleZh: "这家店卖各种商品。" }
  ],
  article: {
    title: "The Joy of Giving",
    titleZh: "给予的快乐",
    paragraphs: [
      { en: "Giving feels good, and scientists have a reason for this.", zh: "给予让人感觉很好，科学家对此有解释。" },
      { en: "When we help others, our brains release chemicals that make us happy.", zh: "当我们帮助他人时，大脑会释放让人快乐的化学物质。" },
      { en: "Giving also builds stronger relationships and communities.", zh: "给予还能建立更牢固的关系和社区。" },
      { en: "You don't need money; your time and attention are gifts too.", zh: "你不需要钱；你的时间和关注也是礼物。" }
    ],
    phrases: [
      { phrase: "release chemicals", meaning: "释放化学物质" },
      { phrase: "build relationships", meaning: "建立关系" },
      { phrase: "time and attention", meaning: "时间与关注" }
    ],
    grammar: [
      { point: "When we help others, our brains release...", explain: "when 引导时间状语从句，主将从现或都用现在时。" },
      { point: "your time and attention are gifts too", explain: "too 用于肯定句末，意为“也”。" }
    ],
    tips: [
      "release → 释放。",
      "community → 社区；共同体。"
    ],
    quiz: {
      choice: [
        { q: "What happens when we help others?", options: ["We feel sad", "Our brains release happy chemicals", "We lose money", "Nothing"], answer: 1 },
        { q: "What does giving build?", options: ["Problems", "Stronger relationships", "Stress only", "Cold", "Nothing"], answer: 1 },
        { q: "What can be a gift besides money?", options: ["Time and attention", "Only gold", "Food", "Clothes"], answer: 0 }
      ],
      fill: [
        { q: "Giving builds stronger r______ and communities.", answer: "relationships" }
      ],
      writing: { prompt: "Describe one time you gave something and felt good. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在咖啡馆会友",
      situationZh: "你在咖啡馆等朋友，点了一杯奶茶。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what can I get for you?", zh: "你好，需要什么？" },
        { role: "user", en: "I'd like a milk tea, please.", zh: "请给我一杯奶茶。", keywords: ["milk tea"] },
        { role: "clerk", en: "Hot or cold? And how sweet?", zh: "要热的还是冷的？甜度呢？" },
        { role: "user", en: "Cold, with less sugar, please.", zh: "冰的，少糖，谢谢。", keywords: ["cold", "sugar"] },
        { role: "clerk", en: "For here or to go?", zh: "堂食还是带走？" },
        { role: "user", en: "For here, please.", zh: "堂食。", keywords: ["here"] },
        { role: "clerk", en: "That's 18 yuan.", zh: "18 元。" },
        { role: "user", en: "Here you are.", zh: "给你。", keywords: ["here"] }
      ],
      tips: [
        "milk tea = 奶茶。",
        "less sugar = 少糖。"
      ]
    },
    {
      scene: "在书店找书",
      situationZh: "你在书店找一本练习口语的书。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! Are you looking for something?", zh: "欢迎光临！在找什么书吗？" },
        { role: "user", en: "Yes, do you have books on spoken English?", zh: "是的，你们有英语口语书吗？", keywords: ["spoken English"] },
        { role: "clerk", en: "They're on the shelf over there.", zh: "在那边的书架上。" },
        { role: "user", en: "Do you have a beginner's level?", zh: "有入门级别的吗？", keywords: ["beginner"] },
        { role: "clerk", en: "Yes, this one is for beginners.", zh: "有，这本就是给初学者的。" },
        { role: "user", en: "How much is this one?", zh: "这本多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "It's 39 yuan.", zh: "39 元。" },
        { role: "user", en: "I'll take it.", zh: "我买了。", keywords: ["take"] }
      ],
      tips: [
        "spoken English = 英语口语。",
        "beginner = 初学者。"
      ]
    }
  ]
},
  // ===================== 第 11 天 =====================
{
  words: [
    { word: "ambiguity", phonetic: "/ˌæmbɪˈɡjuːəti/", meaning: "n. 含糊；歧义", example: "Avoid ambiguity in your writing.", exampleZh: "写作时要避免歧义。" },
    { word: "brief", phonetic: "/briːf/", meaning: "adj. 简短的 n. 摘要", example: "Let's have a brief meeting.", exampleZh: "我们开个短会吧。" },
    { word: "cite", phonetic: "/saɪt/", meaning: "v. 引用；举例", example: "Please cite your sources.", exampleZh: "请引用你的资料来源。" },
    { word: "dominate", phonetic: "/ˈdɒmɪneɪt/", meaning: "v. 支配；占主导", example: "One team dominated the game.", exampleZh: "一支队伍主导了比赛。" },
    { word: "exclaim", phonetic: "/ɪkˈskleɪm/", meaning: "v. 呼喊；惊叫", example: "She exclaimed in surprise.", exampleZh: "她惊讶地叫了出来。" },
    { word: "flourish", phonetic: "/ˈflʌrɪʃ/", meaning: "v. 繁荣；茁壮", example: "Business flourished after the change.", exampleZh: "改变之后生意兴隆了。" },
    { word: "glimpse", phonetic: "/ɡlɪmps/", meaning: "n. 一瞥", example: "I got a glimpse of the view.", exampleZh: "我瞥见了美景。" },
    { word: "hierarchy", phonetic: "/ˈhaɪərɑːki/", meaning: "n. 等级制度", example: "He climbed the company hierarchy.", exampleZh: "他在公司等级中步步高升。" },
    { word: "ironic", phonetic: "/aɪˈrɒnɪk/", meaning: "adj. 讽刺的", example: "It was ironic that he lost his keys.", exampleZh: "他丢了钥匙，真是讽刺。" },
    { word: "latitude", phonetic: "/ˈlætɪtjuːd/", meaning: "n. 纬度；自由度", example: "The city lies at 30 degrees latitude.", exampleZh: "这座城市位于北纬 30 度。" },
    { word: "migrate", phonetic: "/maɪˈɡreɪt/", meaning: "v. 迁徙；移民", example: "Birds migrate south in winter.", exampleZh: "鸟儿冬天南迁。" },
    { word: "objective", phonetic: "/əbˈdʒektɪv/", meaning: "n. 目标 adj. 客观的", example: "Our objective is clear.", exampleZh: "我们的目标很明确。" },
    { word: "prelude", phonetic: "/ˈpreljuːd/", meaning: "n. 前奏；序幕", example: "Rain was a prelude to the storm.", exampleZh: "下雨是暴风雨的前奏。" },
    { word: "realm", phonetic: "/relm/", meaning: "n. 领域；王国", example: "This belongs to the realm of science.", exampleZh: "这属于科学领域。" },
    { word: "strive", phonetic: "/straɪv/", meaning: "v. 努力；奋斗", example: "We strive for excellence.", exampleZh: "我们追求卓越。" },
    { word: "tendency", phonetic: "/ˈtendənsi/", meaning: "n. 趋势；倾向", example: "He has a tendency to be late.", exampleZh: "他有迟到的倾向。" },
    { word: "undermine", phonetic: "/ˌʌndəˈmaɪn/", meaning: "v. 削弱；破坏", example: "Doubt can undermine confidence.", exampleZh: "怀疑会削弱信心。" },
    { word: "vigor", phonetic: "/ˈvɪɡə(r)/", meaning: "n. 活力；精力", example: "She works with great vigor.", exampleZh: "她工作干劲十足。" },
    { word: "weaken", phonetic: "/ˈwiːkən/", meaning: "v. 削弱；变弱", example: "Illness weakened his body.", exampleZh: "疾病削弱了他的身体。" },
    { word: "zeal", phonetic: "/ziːl/", meaning: "n. 热情；热忱", example: "He shows great zeal for study.", exampleZh: "他对学习充满热情。" }
  ],
  article: {
    title: "The Importance of Protecting Water",
    titleZh: "保护水资源的重要性",
    paragraphs: [
      { en: "Clean water is one of our most precious resources.", zh: "清洁的水是我们最宝贵的资源之一。" },
      { en: "Nearly every part of life depends on it, from farming to drinking.", zh: "生活的几乎每个方面都依赖它，从农业到饮用。" },
      { en: "Yet pollution and waste are threatening our water supplies.", zh: "然而污染和浪费正威胁着我们的水源。" },
      { en: "We must save water in our daily lives and reduce pollution.", zh: "我们必须在日常生活中节约用水、减少污染。" }
    ],
    phrases: [
      { phrase: "depend on", meaning: "依赖" },
      { phrase: "water supplies", meaning: "水源；供水" },
      { phrase: "save water", meaning: "节约用水" }
    ],
    grammar: [
      { point: "One of our most precious resources", explain: "one of + 最高级 + 复数。" },
      { point: "Nearly every part of life depends on it", explain: "every + 名词用单数，谓语用单数。" }
    ],
    tips: [
      "precious → 珍贵的。",
      "threat → 威胁，threaten 动词。"
    ],
    quiz: {
      choice: [
        { q: "What does nearly every part of life depend on?", options: ["Plastic", "Clean water", "Cars", "Music"], answer: 1 },
        { q: "What threatens water supplies?", options: ["Pollution and waste", "Reading", "Exercise", "Sleep"], answer: 0 },
        { q: "What should we do?", options: ["Save water and reduce pollution", "Use more water", "Ignore it", "Waste more"], answer: 0 }
      ],
      fill: [
        { q: "We must s______ water in our daily lives.", answer: "save" }
      ],
      writing: { prompt: "Describe two ways to save water at home. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在洗衣店洗衣服",
      situationZh: "你去洗衣店问某件衣服能否干洗。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "Can you dry-clean this coat?", zh: "这件外套可以干洗吗？", keywords: ["dry-clean", "coat"] },
        { role: "clerk", en: "Let me check the label. Yes, it's dry-clean only.", zh: "让我看看标签。是的，只能干洗。" },
        { role: "user", en: "When will it be ready?", zh: "什么时候能好？", keywords: ["ready"] },
        { role: "clerk", en: "In two days.", zh: "两天后。" },
        { role: "user", en: "How much is it?", zh: "多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "It's 30 yuan.", zh: "30 元。" }
      ],
      tips: [
        "dry-clean = 干洗。",
        "label = 标签。"
      ]
    },
    {
      scene: "在理发店预约",
      situationZh: "你想预约周六下午三点剪发。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning, this is Beauty Hair Salon.", zh: "早上好，这里是美容美发沙龙。" },
        { role: "user", en: "I'd like to book a haircut for Saturday.", zh: "我想预约周六剪发。", keywords: ["book", "Saturday"] },
        { role: "clerk", en: "What time would you prefer?", zh: "你比较想几点？" },
        { role: "user", en: "Three o'clock in the afternoon, if possible.", zh: "如果可以的话，下午三点。", keywords: ["three", "afternoon"] },
        { role: "clerk", en: "Sure, Saturday 3 pm is available.", zh: "好的，周六下午三点可以。" },
        { role: "user", en: "Perfect, thank you.", zh: "太棒了，谢谢。", keywords: ["thank"] }
      ],
      tips: [
        "book = 预约（英式）。",
        "available = 可用的；有空的。"
      ]
    }
  ]
},
// ===================== 第 12 天 =====================
{
  words: [
    { word: "apparent", phonetic: "/əˈpærənt/", meaning: "adj. 明显的；表面上的", example: "It was apparent that she was tired.", exampleZh: "很明显她累了。" },
    { word: "bloom", phonetic: "/bluːm/", meaning: "v. 开花 n. 花朵；旺盛", example: "The flowers bloom in spring.", exampleZh: "花在春天开放。" },
    { word: "compose", phonetic: "/kəmˈpəʊz/", meaning: "v. 组成；创作", example: "Water is composed of hydrogen and oxygen.", exampleZh: "水由氢和氧组成。" },
    { word: "diminish", phonetic: "/dɪˈmɪnɪʃ/", meaning: "v. 减少；减弱", example: "Interest in the game diminished.", exampleZh: "对这个游戏的兴趣下降了。" },
    { word: "emerge", phonetic: "/iˈmɜːdʒ/", meaning: "v. 出现；浮现", example: "A new plan emerged.", exampleZh: "一个新计划出现了。" },
    { word: "fascinate", phonetic: "/ˈfæsɪneɪt/", meaning: "v. 使着迷", example: "Space fascinates me.", exampleZh: "太空让我着迷。" },
    { word: "gathering", phonetic: "/ˈɡæðərɪŋ/", meaning: "n. 集会；聚会", example: "It was a family gathering.", exampleZh: "这是一次家庭聚会。" },
    { word: "hedge", phonetic: "/hedʒ/", meaning: "n. 树篱；障碍", example: "A hedge surrounds the garden.", exampleZh: "花园四周有树篱。" },
    { word: "immense", phonetic: "/ɪˈmens/", meaning: "adj. 巨大的", example: "The universe is immense.", exampleZh: "宇宙浩瀚无垠。" },
    { word: "ladder", phonetic: "/ˈlædə(r)/", meaning: "n. 梯子；阶梯", example: "Success is a ladder.", exampleZh: "成功是一把梯子。" },
    { word: "merchant", phonetic: "/ˈmɜːtʃənt/", meaning: "n. 商人", example: "The merchant sells silk.", exampleZh: "这位商人卖丝绸。" },
    { word: "notion", phonetic: "/ˈnəʊʃn/", meaning: "n. 观念；想法", example: "He prefers the notion of freedom.", exampleZh: "他倾向自由观念。" },
    { word: "occur", phonetic: "/əˈkɜː(r)/", meaning: "v. 发生；想到", example: "The accident occurred at noon.", exampleZh: "事故发生在中午。" },
    { word: "parallel", phonetic: "/ˈpærəlel/", meaning: "adj. 平行的 n. 相似处", example: "These two lines are parallel.", exampleZh: "这两条线是平行的。" },
    { word: "random", phonetic: "/ˈrændəm/", meaning: "adj. 随机的；任意的", example: "Choose a random number.", exampleZh: "随机选一个数字。" },
    { word: "stability", phonetic: "/stəˈbɪləti/", meaning: "n. 稳定；稳固", example: "The country enjoys stability.", exampleZh: "这个国家政局稳定。" },
    { word: "triumph", phonetic: "/ˈtraɪʌmf/", meaning: "n. 胜利 v. 获胜", example: "Their team celebrated triumph.", exampleZh: "他们的队伍庆祝胜利。" },
    { word: "urgent", phonetic: "/ˈɜːdʒənt/", meaning: "adj. 紧急的", example: "There is an urgent call for you.", exampleZh: "有你的紧急电话。" },
    { word: "verify", phonetic: "/ˈverɪfaɪ/", meaning: "v. 核实", example: "Verify the address before you go.", exampleZh: "走之前核实下地址。" },
    { word: "wonder", phonetic: "/ˈwʌndə(r)/", meaning: "v. 好奇；想知道 n. 奇迹", example: "I wonder why he left.", exampleZh: "我好奇他为什么离开。" }
  ],
  article: {
    title: "Why Exercise Is Not Just About Weight",
    titleZh: "为什么运动不只是关于体重",
    paragraphs: [
      { en: "Many people exercise mainly to lose weight.", zh: "许多人运动主要是为了减肥。" },
      { en: "But exercise brings benefits far beyond the scale.", zh: "但运动带来的好处远超体重数字。" },
      { en: "It boosts mood, improves sleep, and strengthens the heart.", zh: "它能提升情绪、改善睡眠并强健心脏。" },
      { en: "So enjoy the activity itself, not just the numbers.", zh: "所以要享受运动本身，而不只是数字。" }
    ],
    phrases: [
      { phrase: "lose weight", meaning: "减肥" },
      { phrase: "boost mood", meaning: "提升情绪" },
      { phrase: "strengthen the heart", meaning: "强健心脏" }
    ],
    grammar: [
      { point: "far beyond the scale", explain: "far 修饰 beyond，加强语气，意为“远超”。" },
      { point: "not just the numbers", explain: "not just = 不只是。" }
    ],
    tips: [
      "weight → 体重；lose weight 减肥。",
      "mood → 心情；情绪。"
    ],
    quiz: {
      choice: [
        { q: "Why do many people exercise?", options: ["To lose weight", "To spend money", "To sleep", "To eat more"], answer: 0 },
        { q: "What does exercise NOT do?", options: ["Boost mood", "Improve sleep", "Strengthen the heart", "Cause illness"], answer: 3 },
        { q: "What should you do?", options: ["Enjoy the activity", "Only watch numbers", "Stop exercising", "Eat junk food"], answer: 0 }
      ],
      fill: [
        { q: "Exercise b______ your mood.", answer: "boosts" }
      ],
      writing: { prompt: "Describe one benefit of exercise besides losing weight. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在电影院买票",
      situationZh: "你在电影院买两张今晚的电影票。",
      roles: { clerk: "售票员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what movie would you like to see?", zh: "你好，要看哪部电影？" },
        { role: "user", en: "Two tickets for tonight's show of The Ocean, please.", zh: "请给我两张今晚《海洋》的票。", keywords: ["two", "tickets"] },
        { role: "clerk", en: "Which time, 7:30 or 9:00?", zh: "哪一场，7 点半还是 9 点？" },
        { role: "user", en: "The 7:30 show, please.", zh: "7 点半那场。", keywords: ["7:30"] },
        { role: "clerk", en: "That's 70 yuan total. Would you like popcorn?", zh: "一共 70 元。要爆米花吗？" },
        { role: "user", en: "Yes, a small one, please.", zh: "好的，小份。", keywords: ["popcorn", "small"] },
        { role: "clerk", en: "Great, here are your tickets.", zh: "好的，这是你的票。" }
      ],
      tips: [
        "ticket = 票；film/movie = 电影。",
        "Would you like...? = 你要……吗？"
      ]
    },
    {
      scene: "在车站买地铁卡",
      situationZh: "你在车站服务台办地铁卡。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Good afternoon, how can I help?", zh: "下午好，需要帮助吗？" },
        { role: "user", en: "I'd like to get a subway card, please.", zh: "我想办一张地铁卡。", keywords: ["subway card"] },
        { role: "clerk", en: "A deposit is 20 yuan, and you add money to it.", zh: "押金 20 元，再往里充值。" },
        { role: "user", en: "Can I add 100 yuan to it?", zh: "我可以充 100 元吗？", keywords: ["add", "100"] },
        { role: "clerk", en: "Sure, that'll be 120 yuan in total.", zh: "可以，一共 120 元。" },
        { role: "user", en: "Here you are.", zh: "给你。", keywords: ["here"] },
        { role: "clerk", en: "Here's your card. Enjoy your ride!", zh: "这是你的卡，旅途愉快！" }
      ],
      tips: [
        "deposit = 押金。",
        "add money to = 充值。"
      ]
    }
  ]
},
// ===================== 第 13 天 =====================
{
  words: [
    { word: "ancient", phonetic: "/ˈeɪnʃənt/", meaning: "adj. 古代的；古老的", example: "They visited an ancient temple.", exampleZh: "他们参观了一座古庙。" },
    { word: "behalf", phonetic: "/bɪˈhɑːf/", meaning: "n. 代表；利益", example: "On behalf of the team, I thank you.", exampleZh: "我代表团队感谢你。" },
    { word: "cooperate", phonetic: "/kəʊˈɒpəreɪt/", meaning: "v. 合作", example: "We need to cooperate closely.", exampleZh: "我们需要密切合作。" },
    { word: "derive", phonetic: "/dɪˈraɪv/", meaning: "v. 获得；源于", example: "She derives joy from music.", exampleZh: "她从音乐中得到快乐。" },
    { word: "hence", phonetic: "/hens/", meaning: "adv. 因此；从此", example: "It snowed, hence the delay.", exampleZh: "下雪了，因此延误。" },
    { word: "integrate", phonetic: "/ˈɪntɪɡreɪt/", meaning: "v. 整合；融入", example: "Integrate theory with practice.", exampleZh: "把理论与实际结合。" },
    { word: "kinetic", phonetic: "/kɪˈnetɪk/", meaning: "adj. 运动的；动能的", example: "Kinetic energy is energy of motion.", exampleZh: "动能是运动的能量。" },
    { word: "legacy", phonetic: "/ˈleɡəsi/", meaning: "n. 遗产；遗留", example: "Her kindness left a legacy.", exampleZh: "她的善良留下了遗产。" },
    { word: "multiply", phonetic: "/ˈmʌltɪplaɪ/", meaning: "v. 乘；增加", example: "Multiply five by three.", exampleZh: "5 乘以 3。" },
    { word: "nominee", phonetic: "/ˌnɒmɪˈniː/", meaning: "n. 被提名者", example: "He is a nominee for the award.", exampleZh: "他是这项奖的提名者。" },
    { word: "obstacle", phonetic: "/ˈɒbstəkl/", meaning: "n. 障碍", example: "Lack of money is an obstacle.", exampleZh: "缺钱是一个障碍。" },
    { word: "pursue", phonetic: "/pəˈsjuː/", meaning: "v. 追求；从事", example: "She pursued her dream.", exampleZh: "她追求自己的梦想。" },
    { word: "rigid", phonetic: "/ˈrɪdʒɪd/", meaning: "adj. 僵硬的；固执的", example: "He held a rigid view.", exampleZh: "他持一种固执的观点。" },
    { word: "sensation", phonetic: "/senˈseɪʃn/", meaning: "n. 感觉；轰动", example: "The news caused a sensation.", exampleZh: "这件事引起了轰动。" },
    { word: "timid", phonetic: "/ˈtɪmɪd/", meaning: "adj. 胆小的", example: "She is timid about speaking out.", exampleZh: "她不敢大声说话。" },
    { word: "unify", phonetic: "/ˈjuːnɪfaɪ/", meaning: "v. 使统一", example: "The two parties unified.", exampleZh: "两党联合起来。" },
    { word: "valid", phonetic: "/ˈvælɪd/", meaning: "adj. 有效的；有根据的", example: "Your ticket is still valid.", exampleZh: "你的票仍然有效。" },
    { word: "whereas", phonetic: "/ˌweərˈæz/", meaning: "conj. 然而；鉴于", example: "He is tall, whereas I am short.", exampleZh: "他很高，而我很矮。" },
    { word: "yield", phonetic: "/jiːld/", meaning: "v. 屈服；产出", example: "He finally yielded to logic.", exampleZh: "他最终向逻辑让步。" },
    { word: "zone", phonetic: "/zəʊn/", meaning: "n. 区域", example: "This is a no-smoking zone.", exampleZh: "这是禁烟区。" }
  ],
  article: {
    title: "Courage Is Not the Absence of Fear",
    titleZh: "勇气不是没有恐惧",
    paragraphs: [
      { en: "People often think that brave people never feel afraid.", zh: "人们常以为勇敢的人从不感到害怕。" },
      { en: "In fact, courage means acting in spite of your fear.", zh: "事实上，勇气意味着尽管害怕仍然行动。" },
      { en: "A student asking a question in public feels afraid but does it anyway.", zh: "一个学生当众提问会害怕，但他仍然去做。" },
      { en: "True courage grows every time we face our worries and move forward.", zh: "每当我们面对担忧并向前时，真正的勇气就不断成长。" }
    ],
    phrases: [
      { phrase: "in spite of", meaning: "尽管" },
      { phrase: "in public", meaning: "公开地；当众" },
      { phrase: "face worries", meaning: "面对担忧" }
    ],
    grammar: [
      { point: "Courage means acting...", explain: "mean doing 意为“意味着做某事”。" },
      { point: "acting in spite of your fear", explain: "动名词作宾语。" }
    ],
    tips: [
      "courage → 勇气；courageous 形容词。",
      "brave → 勇敢的。"
    ],
    quiz: {
      choice: [
        { q: "What does the passage say about brave people?", options: ["Never feel afraid", "Stay home", "Feel afraid too", "Are rich"], answer: 2 },
        { q: "What does courage mean?", options: ["No fear", "Acting despite fear", "Running away", "Sleeping"], answer: 1 },
        { q: "When does true courage grow?", options: ["When we face worries", "When we hide", "When we quit", "When we avoid"], answer: 0 }
      ],
      fill: [
        { q: "Courage means acting i______ of your fear.", answer: "in" }
      ],
      writing: { prompt: "Describe one time you acted with courage despite fear. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在招聘会咨询",
      situationZh: "你在招聘会询问一份实习工作的待遇。",
      roles: { clerk: "HR 招聘官", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, are you interested in our internship?", zh: "你好，你对我们的实习感兴趣吗？" },
        { role: "user", en: "Yes, could you tell me about it?", zh: "是的，能介绍一下吗？", keywords: ["interest", "tell"] },
        { role: "clerk", en: "It's a three-month internship in marketing.", zh: "这是一份为期三个月的市场部实习。" },
        { role: "user", en: "Is it a paid position?", zh: "这个岗位有工资吗？", keywords: ["paid"] },
        { role: "clerk", en: "Yes, plus lunch is provided.", zh: "有的，还提供午餐。" },
        { role: "user", en: "How can I apply?", zh: "我该怎么申请？", keywords: ["apply"] },
        { role: "clerk", en: "Send your resume to our email today.", zh: "请今天把你的简历发到我们邮箱。" }
      ],
      tips: [
        "internship = 实习。",
        "apply for = 申请（职位）。"
      ]
    },
    {
      scene: "在健身房问课程",
      situationZh: "你咨询健身房的瑜伽课时间。",
      roles: { clerk: "教练", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, welcome back! Looking for a class?", zh: "嗨，欢迎！想找课吗？" },
        { role: "user", en: "Do you have yoga classes for beginners?", zh: "有初学者的瑜伽课吗？", keywords: ["yoga", "beginner"] },
        { role: "clerk", en: "Yes, on Tuesday and Thursday evenings.", zh: "有，周二和周四晚上。" },
        { role: "user", en: "What time do they start?", zh: "几点开始？", keywords: ["start"] },
        { role: "clerk", en: "At 7 pm.", zh: "晚上 7 点。" },
        { role: "user", en: "Do I need to bring a mat?", zh: "需要自己带瑜伽垫吗？", keywords: ["mat"] },
        { role: "clerk", en: "No, we provide them for free.", zh: "不用，我们免费提供。" }
      ],
      tips: [
        "yoga = 瑜伽。",
        "provide = 提供。"
      ]
    }
  ]
},
// ===================== 第 14 天 =====================
{
  words: [
    { word: "adopt", phonetic: "/əˈdɒpt/", meaning: "v. 采用；收养", example: "They adopted a new policy.", exampleZh: "他们采用了新政策。" },
    { word: "bias", phonetic: "/ˈbaɪəs/", meaning: "n. 偏见", example: "The report had a bias.", exampleZh: "这份报告有偏见。" },
    { word: "coincide", phonetic: "/ˌkəʊɪnˈsaɪd/", meaning: "v. 同时发生；一致", example: "Our views coincide.", exampleZh: "我们观点一致。" },
    { word: "deposit", phonetic: "/dɪˈpɒzɪt/", meaning: "n. 存款；押金 v. 存放", example: "He made a deposit today.", exampleZh: "他今天存了一笔款。" },
    { word: "eligible", phonetic: "/ˈelɪdʒəbl/", meaning: "adj. 有资格的", example: "You are eligible for the discount.", exampleZh: "你有资格享受折扣。" },
    { word: "folklore", phonetic: "/ˈfəʊklɔː(r)/", meaning: "n. 民间传说", example: "The story comes from folklore.", exampleZh: "这个故事来自民间传说。" },
    { word: "genre", phonetic: "/ˈʒɒnrə/", meaning: "n. 体裁；类型", example: "What genre of music do you like?", exampleZh: "你喜欢哪种类型的音乐？" },
    { word: "hazard", phonetic: "/ˈhæzəd/", meaning: "n. 危险；隐患", example: "Smoking is a health hazard.", exampleZh: "吸烟危害健康。" },
    { word: "incident", phonetic: "/ˈɪnsɪdənt/", meaning: "n. 事件；事故", example: "It was an unfortunate incident.", exampleZh: "那是一起不幸的事件。" },
    { word: "liable", phonetic: "/ˈlaɪəbl/", meaning: "adj. 有责任的；易…的", example: "He is liable for the damage.", exampleZh: "他对损失负有责任。" },
    { word: "motive", phonetic: "/ˈməʊtɪv/", meaning: "n. 动机", example: "The police found a motive.", exampleZh: "警方找到了动机。" },
    { word: "neglect", phonetic: "/nɪˈɡlekt/", meaning: "v. 忽视", example: "Don't neglect your health.", exampleZh: "不要忽视你的健康。" },
    { word: "oblige", phonetic: "/əˈblaɪdʒ/", meaning: "v. 迫使；帮忙", example: "I am obliged to report it.", exampleZh: "我有义务报告。" },
    { word: "peer", phonetic: "/pɪə(r)/", meaning: "n. 同龄人；同事", example: "He is popular among his peers.", exampleZh: "他在同龄人中很受欢迎。" },
    { word: "relieve", phonetic: "/rɪˈliːv/", meaning: "v. 缓解；减轻", example: "The medicine relieved the pain.", exampleZh: "药物缓解了疼痛。" },
    { word: "scarce", phonetic: "/skeəs/", meaning: "adj. 稀少的；缺乏的", example: "Water is scarce in the desert.", exampleZh: "沙漠里缺水。" },
    { word: "tolerate", phonetic: "/ˈtɒləreɪt/", meaning: "v. 容忍", example: "I can't tolerate rudeness.", exampleZh: "我无法容忍粗鲁。" },
    { word: "venture", phonetic: "/ˈventʃə(r)/", meaning: "n. 冒险；项目 v. 冒险", example: "They started a new business venture.", exampleZh: "他们开始了一项新的事业。" },
    { word: "welfare", phonetic: "/ˈwelfeə(r)/", meaning: "n. 福利；幸福", example: "The law protects workers' welfare.", exampleZh: "法律保障工人福利。" },
    { word: "zeal", phonetic: "/ziːl/", meaning: "n. 热情", example: "She pursues science with zeal.", exampleZh: "她满怀热情地钻研科学。" }
  ],
  article: {
    title: "Why Practice Makes Progress",
    titleZh: "为什么熟能生巧",
    paragraphs: [
      { en: "Nobody becomes good at something overnight.", zh: "没有人能一夜之间就精通某事。" },
      { en: "Skills grow through repeated practice over time.", zh: "技能是通过反复练习慢慢成长的。" },
      { en: "Each time you practice, you learn something new and make the task easier.", zh: "每一次练习，你都能学到新东西，让任务变得更简单。" },
      { en: "So be patient and keep practicing every day.", zh: "所以要有耐心，每天坚持练习。" }
    ],
    phrases: [
      { phrase: "overnight", meaning: "一夜之间" },
      { phrase: "repeated practice", meaning: "反复练习" },
      { phrase: "be patient", meaning: "有耐心" }
    ],
    grammar: [
      { point: "Nobody becomes good... overnight", explain: "nobody 作主语，谓语用单数。" },
      { point: "Each time you practice, ...", explain: "each time 引导时间状语从句。" }
    ],
    tips: [
      "practice → 练习（名/动词）。",
      "progress → 进步。"
    ],
    quiz: {
      choice: [
        { q: "How does skill grow?", options: ["Overnight", "Through repeated practice", "By luck", "By resting only"], answer: 1 },
        { q: "What should you do every time you practice?", options: ["Give up", "Learn something new", "Complain", "Sleep"], answer: 1 },
        { q: "What should you be?", options: ["Impatient", "Patient", "Angry", "Lazy"], answer: 1 }
      ],
      fill: [
        { q: "Be patient and keep p______ every day.", answer: "practicing" }
      ],
      writing: { prompt: "Describe something you improved through practice. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在餐厅结账",
      situationZh: "你用餐后想结账并询问是否能刷卡。",
      roles: { clerk: "服务员", user: "我" },
      turns: [
        { role: "clerk", en: "Was everything good today?", zh: "今天的用餐还不错吧？" },
        { role: "user", en: "Yes, delicious. Can I have the bill, please?", zh: "是的，很美味。请给我结账。", keywords: ["bill"] },
        { role: "clerk", en: "Of course, here it is.", zh: "好的，这是账单。" },
        { role: "user", en: "Can I pay by credit card?", zh: "可以刷信用卡吗？", keywords: ["credit card"] },
        { role: "clerk", en: "Yes, no problem.", zh: "可以，没问题。" },
        { role: "user", en: "Great. Here you go.", zh: "好的。给你。", keywords: ["here"] },
        { role: "clerk", en: "Thank you! Have a nice day.", zh: "谢谢！祝您愉快。" }
      ],
      tips: [
        "the bill = 账单（结账）。",
        "credit card = 信用卡。"
      ]
    },
    {
      scene: "在宠物店买狗粮",
      situationZh: "你在宠物店想买狗粮并询问推荐。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help you?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "I need some dog food for my puppy.", zh: "我需要给小狗买点狗粮。", keywords: ["dog food", "puppy"] },
        { role: "clerk", en: "This one is good for young dogs.", zh: "这款适合幼犬。" },
        { role: "user", en: "How much is this bag?", zh: "这袋多少钱？", keywords: ["how much", "bag"] },
        { role: "clerk", en: "It's 85 yuan.", zh: "85 元。" },
        { role: "user", en: "Okay, I'll take one, please.", zh: "好的，我买一袋。", keywords: ["take"] },
        { role: "clerk", en: "Here you are. Your puppy will love it!", zh: "给你。你的小狗会喜欢的！" }
      ],
      tips: [
        "puppy = 小狗。",
        "take = 买下。"
      ]
    }
  ]
},
// ===================== 第 15 天 =====================
{
  words: [
    { word: "alter", phonetic: "/ˈɔːltə(r)/", meaning: "v. 改变；修改", example: "We altered our plans.", exampleZh: "我们修改了计划。" },
    { word: "benefit", phonetic: "/ˈbenɪfɪt/", meaning: "v. 受益 n. 好处", example: "Everyone benefits from good habits.", exampleZh: "人人都从好习惯中受益。" },
    { word: "chaos", phonetic: "/ˈkeɪɒs/", meaning: "n. 混乱", example: "There was chaos on the street.", exampleZh: "街上一片混乱。" },
    { word: "distribute", phonetic: "/dɪˈstrɪbjuːt/", meaning: "v. 分发；分配", example: "They distributed food to the poor.", exampleZh: "他们把食物分发给穷人。" },
    { word: "elaborate", phonetic: "/ɪˈlæbərət/", meaning: "adj. 精心制作的 v. 详述", example: "Please elaborate on your plan.", exampleZh: "请详细说明你的计划。" },
    { word: "flourish", phonetic: "/ˈflʌrɪʃ/", meaning: "v. 繁荣", example: "The city flourished by the river.", exampleZh: "这座城市在河边繁荣起来。" },
    { word: "glimpse", phonetic: "/ɡlɪmps/", meaning: "v. 瞥见 n. 一瞥", example: "We glimpsed the mountains.", exampleZh: "我们瞥见了群山。" },
    { word: "hinder", phonetic: "/ˈhɪndə(r)/", meaning: "v. 阻碍", example: "Rain hindered our trip.", exampleZh: "下雨阻碍了我们的行程。" },
    { word: "indispensable", phonetic: "/ˌɪndɪˈspensəbl/", meaning: "adj. 不可或缺的", example: "Air is indispensable for life.", exampleZh: "空气对生命不可或缺。" },
    { word: "legislation", phonetic: "/ˌledʒɪsˈleɪʃn/", meaning: "n. 立法；法规", example: "New legislation was passed.", exampleZh: "通过了新法规。" },
    { word: "metaphor", phonetic: "/ˈmetəfə(r)/", meaning: "n. 隐喻；比喻", example: "Life is a journey is a metaphor.", exampleZh: "“人生是一场旅程”是个隐喻。" },
    { word: "nuance", phonetic: "/ˈnjuːɑːns/", meaning: "n. 细微差别", example: "The nuance was lost in translation.", exampleZh: "细微差别在翻译中丢失了。" },
    { word: "obsolete", phonetic: "/ˈɒbsəliːt/", meaning: "adj. 过时的", example: "That method is now obsolete.", exampleZh: "那种方法如今已经过时。" },
    { word: "paradox", phonetic: "/ˈpærədɒks/", meaning: "n. 悖论；矛盾", example: "It's a paradox that we train more but rest less.", exampleZh: "我们训练越多休息越少，真是个悖论。" },
    { word: "redundant", phonetic: "/rɪˈdʌndənt/", meaning: "adj. 多余的；冗余的", example: "This step is redundant.", exampleZh: "这一步是多余的。" },
    { word: "sustain", phonetic: "/səˈsteɪn/", meaning: "v. 维持；支撑", example: "We must sustain economic growth.", exampleZh: "我们必须维持经济增长。" },
    { word: "tangible", phonetic: "/ˈtændʒəbl/", meaning: "adj. 有形的；实际的", example: "We need tangible results.", exampleZh: "我们需要实际的成果。" },
    { word: "universal", phonetic: "/ˌjuːnɪˈvɜːsl/", meaning: "adj. 普遍的；通用的", example: "Smiling is universal.", exampleZh: "微笑是普遍通用的。" },
    { word: "versatile", phonetic: "/ˈvɜːsətaɪl/", meaning: "adj. 多才多艺的；多用途的", example: "She is a versatile writer.", exampleZh: "她是个多才多艺的作家。" },
    { word: "yearn", phonetic: "/jɜːn/", meaning: "v. 渴望", example: "He yearns for peace.", exampleZh: "他渴望和平。" }
  ],
  article: {
    title: "The Art of Listening",
    titleZh: "倾听的艺术",
    paragraphs: [
      { en: "Listening is more than hearing the words someone says.", zh: "倾听不只是听到某人说的话。" },
      { en: "It means paying attention to feelings and meaning behind the words.", zh: "它意味着关注话语背后的感受和含义。" },
      { en: "Good listeners make others feel valued and understood.", zh: "好的倾听者让他人感到被重视和被理解。" },
      { en: "By listening well, we build trust and deeper friendships.", zh: "通过认真倾听，我们建立了信任和更深的友谊。" }
    ],
    phrases: [
      { phrase: "pay attention to", meaning: "注意" },
      { phrase: "feel valued", meaning: "感到被重视" },
      { phrase: "build trust", meaning: "建立信任" }
    ],
    grammar: [
      { point: "Listening is more than hearing...", explain: "more than + 名词/动名词，意为“不只是”。" },
      { point: "By listening well, ...", explain: "by + 动名词表方式。“通过……”。" }
    ],
    tips: [
      "listen → 听（注意动作）；hear → 听见（结果）。",
      "valued → 受重视的。"
    ],
    quiz: {
      choice: [
        { q: "Listening is more than ______.", options: ["Talking", "Hearing words", "Writing", "Sleeping"], answer: 1 },
        { q: "What should you pay attention to?", options: ["Only grammar", "Feelings and meaning", "Only price", "Nothing"], answer: 1 },
        { q: "What do good listeners build?", options: ["Problems", "Trust and friendships", "Walls", "Noise"], answer: 1 }
      ],
      fill: [
        { q: "Good listeners make others feel v______.", answer: "valued" }
      ],
      writing: { prompt: "Describe why listening is important in a friendship. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在医院挂号",
      situationZh: "你在医院挂号看内科医生。",
      roles: { clerk: "挂号员", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning, may I help you register?", zh: "早上好，需要挂号吗？" },
        { role: "user", en: "Yes, I'd like to see an internal medicine doctor.", zh: "是的，我想看内科医生。", keywords: ["internal medicine"] },
        { role: "clerk", en: "Do you have your ID card?", zh: "有身份证吗？" },
        { role: "user", en: "Yes, here it is.", zh: "有，给你。", keywords: ["ID"] },
        { role: "clerk", en: "Please go to room 302 and wait.", zh: "请到 302 室等候。" },
        { role: "user", en: "How long is the wait?", zh: "要等多久？", keywords: ["how long"] },
        { role: "clerk", en: "About twenty minutes.", zh: "大约二十分钟。" },
        { role: "user", en: "Thank you.", zh: "谢谢。", keywords: ["thank"] }
      ],
      tips: [
        "register = 挂号/登记。",
        "internal medicine = 内科。"
      ]
    },
    {
      scene: "在公交车上问站",
      situationZh: "你在公交车上询问某某站在哪里下车。",
      roles: { clerk: "乘客", user: "我" },
      turns: [
        { role: "clerk", en: "Excuse me, can I help you?", zh: "打扰一下，需要帮忙吗？" },
        { role: "user", en: "Could you tell me where to get off for the museum?", zh: "您能告诉我去博物馆在哪站下吗？", keywords: ["get off", "museum"] },
        { role: "clerk", en: "The next station is City Center.", zh: "下一站是市中心。" },
        { role: "user", en: "Is the museum far from there?", zh: "博物馆离那里远吗？", keywords: ["far"] },
        { role: "clerk", en: "No, just two minutes' walk.", zh: "不远，走路两分钟。" },
        { role: "user", en: "Thanks a lot!", zh: "非常感谢！", keywords: ["thanks"] }
      ],
      tips: [
        "get off = 下车。",
        "museum = 博物馆。"
      ]
    }
  ]
},
  // ===================== 第 16 天 =====================
{
  words: [
    { word: "anticipate", phonetic: "/ænˈtɪsɪpeɪt/", meaning: "v. 预期；预料", example: "We anticipate a busy day.", exampleZh: "我们预计今天会很忙。" },
    { word: "bound", phonetic: "/baʊnd/", meaning: "adj. 必定的；受约束的", example: "He is bound to succeed.", exampleZh: "他一定会成功。" },
    { word: "convince", phonetic: "/kənˈvɪns/", meaning: "v. 使信服", example: "She convinced me to stay.", exampleZh: "她说服我留下来。" },
    { word: "depart", phonetic: "/dɪˈpɑːt/", meaning: "v. 离开；出发", example: "The train departs at eight.", exampleZh: "火车八点出发。" },
    { word: "enroll", phonetic: "/ɪnˈrəʊl/", meaning: "v. 注册；入学", example: "She enrolled in a course.", exampleZh: "她报名了一门课程。" },
    { word: "fertile", phonetic: "/ˈfɜːtaɪl/", meaning: "adj. 肥沃的；富饶的", example: "The soil here is fertile.", exampleZh: "这里的土壤很肥沃。" },
    { word: "gracious", phonetic: "/ˈɡreɪʃəs/", meaning: "adj. 亲切的；优雅的", example: "She gave a gracious smile.", exampleZh: "她亲切地微笑了。" },
    { word: "humble", phonetic: "/ˈhʌmbl/", meaning: "adj. 谦虚的；卑微的", example: "He remained humble after success.", exampleZh: "成功后他依然谦虚。" },
    { word: "infinite", phonetic: "/ˈɪnfɪnət/", meaning: "adj. 无限的", example: "Space is infinite.", exampleZh: "太空是无限的。" },
    { word: "legitimate", phonetic: "/lɪˈdʒɪtɪmət/", meaning: "adj. 合法的；正当的", example: "It's a legitimate question.", exampleZh: "这是一个合理的问题。" },
    { word: "merit", phonetic: "/ˈmerɪt/", meaning: "n. 优点；价值", example: "Hard work has its merits.", exampleZh: "勤奋有其价值。" },
    { word: "nuisance", phonetic: "/ˈnjuːsns/", meaning: "n. 麻烦；讨厌的事", example: "The noise is a nuisance.", exampleZh: "这噪音很讨厌。" },
    { word: "onset", phonetic: "/ˈɒnset/", meaning: "n. 开始；发作", example: "The onset of winter was early.", exampleZh: "冬天的到来很早。" },
    { word: "profound", phonetic: "/prəˈfaʊnd/", meaning: "adj. 深刻的；深远的", example: "It had a profound effect.", exampleZh: "它产生了深远影响。" },
    { word: "reconcile", phonetic: "/ˈrekənsaɪl/", meaning: "v. 调和；使和解", example: "They reconciled after a long talk.", exampleZh: "长谈之后他们和解了。" },
    { word: "stagnant", phonetic: "/ˈstæɡnənt/", meaning: "adj. 停滞的；不流动的", example: "The economy became stagnant.", exampleZh: "经济陷入停滞。" },
    { word: "tranquil", phonetic: "/ˈtræŋkwɪl/", meaning: "adj. 宁静的", example: "The lake was tranquil.", exampleZh: "湖面很宁静。" },
    { word: "utter", phonetic: "/ˈʌtə(r)/", meaning: "adj. 完全的 v. 说出", example: "It was an utter surprise.", exampleZh: "这完全是个惊喜。" },
    { word: "verge", phonetic: "/vɜːdʒ/", meaning: "n. 边缘 v. 接近", example: "The plant is on the verge of death.", exampleZh: "这株植物濒临死亡。" },
    { word: "wealth", phonetic: "/welθ/", meaning: "n. 财富", example: "Health is true wealth.", exampleZh: "健康才是真正的财富。" }
  ],
  article: {
    title: "The Benefits of Keeping a Journal",
    titleZh: "写日记的好处",
    paragraphs: [
      { en: "Writing in a journal every day may sound simple, but it helps a lot.", zh: "每天写日记听起来简单，但很有帮助。" },
      { en: "It clears your mind and helps you understand your feelings.", zh: "它能理清思绪，帮助你理解自己的感受。" },
      { en: "Short writing each day also trains your ability to express ideas.", zh: "每天简短写作还能锻炼你表达观点的能力。" },
      { en: "Next time you feel stressed, try writing a few lines about your day.", zh: "下次感到压力时，试着写几行关于你一天的事。" }
    ],
    phrases: [
      { phrase: "clear your mind", meaning: "理清思绪" },
      { phrase: "express ideas", meaning: "表达观点" },
      { phrase: "feel stressed", meaning: "感到压力" }
    ],
    grammar: [
      { point: "Writing in a journal every day...", explain: "动名词短语作主语。" },
      { point: "Next time you feel stressed...", explain: "next time 引导时间状语从句。" }
    ],
    tips: [
      "journal → 日记；期刊。",
      "stress → 压力；stressed 形容词。"
    ],
    quiz: {
      choice: [
        { q: "What does journal writing do to your mind?", options: ["Clears it", "Fills it with noise", "Stops it", "Makes it lazy"], answer: 0 },
        { q: "Short daily writing trains your ability to ______.", options: ["Forget", "Express ideas", "Sleep", "Cook"], answer: 1 },
        { q: "What should you try when stressed?", options: ["Write a few lines", "Yell", "Hide", "Do nothing"], answer: 0 }
      ],
      fill: [
        { q: "Writing a journal c______ your mind.", answer: "clears" }
      ],
      writing: { prompt: "Describe why keeping a journal helps you. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在体育用品店退货",
      situationZh: "你在体育店想退还一双不合脚的鞋。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help you?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "I'd like to return these shoes. They don't fit.", zh: "我想退这双鞋，不合脚。", keywords: ["return", "fit"] },
        { role: "clerk", en: "Do you have the receipt?", zh: "有收据吗？" },
        { role: "user", en: "Yes, here it is.", zh: "有，给你。", keywords: ["receipt"] },
        { role: "clerk", en: "OK, would you like a refund or an exchange?", zh: "好的，你是想退款还是换货？" },
        { role: "user", en: "I'd like a refund, please.", zh: "我想退款。", keywords: ["refund"] },
        { role: "clerk", en: "Sure, the money will be back in three days.", zh: "好的，钱三天内退回。" },
        { role: "user", en: "Thank you!", zh: "谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "return = 退货。",
        "refund = 退款；exchange = 换货。"
      ]
    },
    {
      scene: "向房东报修",
      situationZh: "你打电话给房东说热水器坏了。",
      roles: { clerk: "房东", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, this is Mr. Zhang.", zh: "喂，我是张先生。" },
        { role: "user", en: "Hi, the water heater in my room isn't working.", zh: "你好，我房间的热水器坏了。", keywords: ["water heater"] },
        { role: "clerk", en: "Did you check the power switch?", zh: "你检查电源开关了吗？" },
        { role: "user", en: "Yes, it's still not heating.", zh: "检查了，还是不热。", keywords: ["heating"] },
        { role: "clerk", en: "I'll send a repairman tomorrow morning.", zh: "明天早上我派维修工去。" },
        { role: "user", en: "Great, thank you.", zh: "好的，谢谢。", keywords: ["thank"] }
      ],
      tips: [
        "water heater = 热水器。",
        "repairman = 维修工。"
      ]
    }
  ]
},
// ===================== 第 17 天 =====================
{
  words: [
    { word: "abundant", phonetic: "/əˈbʌndənt/", meaning: "adj. 丰富的；充裕的", example: "The area has abundant rainfall.", exampleZh: "这个地区雨水充沛。" },
    { word: "barrier", phonetic: "/ˈbæriə(r)/", meaning: "n. 障碍；屏障", example: "Language is a barrier for us.", exampleZh: "语言对我们来说是个障碍。" },
    { word: "component", phonetic: "/kəmˈpəʊnənt/", meaning: "n. 组成部分；零件", example: "Trust is a key component of friendship.", exampleZh: "信任是友谊的关键部分。" },
    { word: "durable", phonetic: "/ˈdjʊərəbl/", meaning: "adj. 耐用的；持久的", example: "These shoes are very durable.", exampleZh: "这双鞋很耐穿。" },
    { word: "exceed", phonetic: "/ɪkˈsiːd/", meaning: "v. 超过；超出", example: "Please do not exceed the speed limit.", exampleZh: "请勿超速。" },
    { word: "fragile", phonetic: "/ˈfrædʒaɪl/", meaning: "adj. 易碎的", example: "Be careful, it's fragile.", exampleZh: "小心，易碎。" },
    { word: "glance", phonetic: "/ɡlɑːns/", meaning: "v. 瞥一眼 n. 一瞥", example: "She glanced at her watch.", exampleZh: "她瞥了一眼手表。" },
    { word: "generous", phonetic: "/ˈdʒenərəs/", meaning: "adj. 慷慨的；大方的", example: "He is generous with his time.", exampleZh: "他乐于为他人付出时间。" },
    { word: "hypothesis", phonetic: "/haɪˈpɒθəsɪs/", meaning: "n. 假设", example: "We must test the hypothesis.", exampleZh: "我们必须检验这个假设。" },
    { word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", meaning: "adj. 不可避免的", example: "Change is inevitable.", exampleZh: "变化是不可避免的。" },
    { word: "loyalty", phonetic: "/ˈlɔɪəlti/", meaning: "n. 忠诚", example: "Loyalty matters in a team.", exampleZh: "忠诚在团队中很重要。" },
    { word: "mingle", phonetic: "/ˈmɪŋɡl/", meaning: "v. 混合；交往", example: "Mingle with new people at the party.", exampleZh: "在聚会上和新朋友交往。" },
    { word: "nominal", phonetic: "/ˈnɒmɪnl/", meaning: "adj. 名义上的；很小的", example: "There is a nominal fee.", exampleZh: "只收象征性费用。" },
    { word: "overall", phonetic: "/ˌəʊvərˈɔːl/", meaning: "adj. 总体的 adv. 总体上", example: "Overall, the project succeeded.", exampleZh: "总体而言，项目成功了。" },
    { word: "presume", phonetic: "/prɪˈzjuːm/", meaning: "v. 假设；推测", example: "I presume you are tired.", exampleZh: "我猜想你累了。" },
    { word: "scarce", phonetic: "/skeəs/", meaning: "adj. 稀少的", example: "Jobs are scarce this year.", exampleZh: "今年工作机会稀少。" },
    { word: "tremendous", phonetic: "/trəˈmendəs/", meaning: "adj. 巨大的；极好的", example: "It was a tremendous success.", exampleZh: "这是一次巨大成功。" },
    { word: "undertake", phonetic: "/ˌʌndəˈteɪk/", meaning: "v. 承担；从事", example: "She undertook the difficult task.", exampleZh: "她承担了这项艰巨任务。" },
    { word: "vividly", phonetic: "/ˈvɪvɪdli/", meaning: "adv. 生动地；鲜明地", example: "I remember the day vividly.", exampleZh: "我清晰地记得那一天。" },
    { word: "worthwhile", phonetic: "/ˌwɜːθˈwaɪl/", meaning: "adj. 值得的", example: "The effort was worthwhile.", exampleZh: "这份努力是值得的。" }
  ],
  article: {
    title: "Why Failure Can Be a Teacher",
    titleZh: "为什么失败可以是老师",
    paragraphs: [
      { en: "Nobody likes failing, but failure is a natural part of learning.", zh: "没有人喜欢失败，但失败是学习的自然部分。" },
      { en: "When you fail, you discover what does not work.", zh: "当你失败时，你会发现什么行不通。" },
      { en: "Each mistake gives you information you can use to improve.", zh: "每一个错误都给你可以用来改进的信息。" },
      { en: "Successful people are not afraid of failure; they learn from it.", zh: "成功的人不怕失败，他们从失败中学习。" }
    ],
    phrases: [
      { phrase: "a natural part of", meaning: "…的自然部分" },
      { phrase: "what does not work", meaning: "行不通的方法" },
      { phrase: "learn from", meaning: "向……学习" }
    ],
    grammar: [
      { point: "Nobody likes failing", explain: "like doing 意为“喜欢做”。" },
      { point: "you discover what does not work", explain: "what 引导宾语从句。" }
    ],
    tips: [
      "failure → 失败；fail 动词。",
      "mistake → 错误。"
    ],
    quiz: {
      choice: [
        { q: "What is failure a natural part of?", options: ["Learning", "Sleeping", "Eating", "Nothing"], answer: 0 },
        { q: "What do you discover when you fail?", options: ["What does not work", "New recipes", "Hidden money", "Nothing"], answer: 0 },
        { q: "What do successful people do with failure?", options: ["Learn from it", "Cry", "Quit", "Hide"], answer: 0 }
      ],
      fill: [
        { q: "Each m______ gives you information to improve.", answer: "mistake" }
      ],
      writing: { prompt: "Describe a failure that taught you something. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在眼镜店配镜",
      situationZh: "你在眼镜店想配一副新眼镜。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help?", zh: "你好，需要帮助吗？" },
        { role: "user", en: "I'd like to get a new pair of glasses.", zh: "我想配一副新眼镜。", keywords: ["glasses"] },
        { role: "clerk", en: "Do you have a recent vision test?", zh: "有最近的视力检查吗？" },
        { role: "user", en: "Yes, I brought it with me.", zh: "有，我带过来了。", keywords: ["vision"] },
        { role: "clerk", en: "Great, let me check it. Which frames do you like?", zh: "好的，让我看看。你喜欢哪款镜框？" },
        { role: "user", en: "This black one, please.", zh: "这款黑色的。", keywords: ["black"] },
        { role: "clerk", en: "They'll be ready in two days.", zh: "两天后可以取。" }
      ],
      tips: [
        "glasses = 眼镜。",
        "frames = 镜框。"
      ]
    },
    {
      scene: "在快递站寄件",
      situationZh: "你到快递站寄一个小包裹。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, are you sending a package?", zh: "你好，要寄包裹吗？" },
        { role: "user", en: "Yes, I'd like to send this to Guangzhou.", zh: "是的，我想寄到广州。", keywords: ["send", "Guangzhou"] },
        { role: "clerk", en: "What's inside?", zh: "里面是什么？" },
        { role: "user", en: "Just some books.", zh: "一些书。", keywords: ["books"] },
        { role: "clerk", en: "Fill in this form, please. It should arrive in three days.", zh: "请填一下这张单。三天能到。" },
        { role: "user", en: "How much will it cost?", zh: "多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "18 yuan, please scan the code to pay.", zh: "18 元，请扫码支付。" }
      ],
      tips: [
        "send = 寄（送）。",
        "fill in the form = 填表。"
      ]
    }
  ]
},
// ===================== 第 18 天 =====================
{
  words: [
    { word: "accommodate", phonetic: "/əˈkɒmədeɪt/", meaning: "v. 容纳；适应", example: "The hall can accommodate 500 people.", exampleZh: "大厅能容纳 500 人。" },
    { word: "bewilder", phonetic: "/bɪˈwɪldə(r)/", meaning: "v. 使迷惑", example: "The instructions bewildered me.", exampleZh: "这些说明把我搞糊涂了。" },
    { word: "dedicate", phonetic: "/ˈdedɪkeɪt/", meaning: "v. 奉献；致力于", example: "She dedicates herself to teaching.", exampleZh: "她致力于教学。" },
    { word: "evoke", phonetic: "/ɪˈvəʊk/", meaning: "v. 唤起；引起", example: "The song evokes old memories.", exampleZh: "这首歌唤起旧日回忆。" },
    { word: "feasible", phonetic: "/ˈfiːzəbl/", meaning: "adj. 可行的", example: "Is this plan feasible?", exampleZh: "这个计划可行吗？" },
    { word: "genuinely", phonetic: "/ˈdʒenjuɪnli/", meaning: "adv. 真正地；真诚地", example: "She is genuinely kind.", exampleZh: "她真心善良。" },
    { word: "hazard", phonetic: "/ˈhæzəd/", meaning: "n. 危险", example: "Ice is a hazard on the road.", exampleZh: "路上结冰很危险。" },
    { word: "immerse", phonetic: "/ɪˈmɜːs/", meaning: "v. 沉浸；使专心", example: "He immersed himself in his book.", exampleZh: "他沉浸在书中。" },
    { word: "jeopardize", phonetic: "/ˈdʒepədaɪz/", meaning: "v. 危害；损害", example: "Don't jeopardize your health.", exampleZh: "不要危害你的健康。" },
    { word: "luminous", phonetic: "/ˈluːmɪnəs/", meaning: "adj. 发光的；明亮的", example: "The stars are luminous tonight.", exampleZh: "今晚星光灿烂。" },
    { word: "meager", phonetic: "/ˈmiːɡə(r)/", meaning: "adj. 贫乏的；微薄的", example: "He earned a meager salary.", exampleZh: "他收入微薄。" },
    { word: "notorious", phonetic: "/nəʊˈtɔːriəs/", meaning: "adj. 臭名昭著的", example: "The area is notorious for traffic.", exampleZh: "这个地区的交通出了名的差。" },
    { word: "obscure", phonetic: "/əbˈskjʊə(r)/", meaning: "adj. 模糊的；晦涩的", example: "The meaning is obscure.", exampleZh: "意义晦涩难懂。" },
    { word: "portray", phonetic: "/pɔːˈtreɪ/", meaning: "v. 描绘；扮演", example: "The film portrays village life.", exampleZh: "这部电影描绘乡村生活。" },
    { word: "refute", phonetic: "/rɪˈfjuːt/", meaning: "v. 反驳", example: "He refuted the argument.", exampleZh: "他反驳了这个论点。" },
    { word: "savor", phonetic: "/ˈseɪvə(r)/", meaning: "v. 细细品味", example: "Savor every moment.", exampleZh: "品味每一刻。" },
    { word: "tranquil", phonetic: "/ˈtræŋkwɪl/", meaning: "adj. 宁静的", example: "We found a tranquil spot.", exampleZh: "我们找到了一个宁静的地方。" },
    { word: "undermine", phonetic: "/ˌʌndəˈmaɪn/", meaning: "v. 暗中破坏", example: "Gossip undermined her trust.", exampleZh: "流言削弱了她的信任。" },
    { word: "vigilant", phonetic: "/ˈvɪdʒɪlənt/", meaning: "adj. 警惕的", example: "Stay vigilant at night.", exampleZh: "晚上要保持警惕。" },
    { word: "wholesome", phonetic: "/ˈhəʊlsəm/", meaning: "adj. 有益健康的", example: "This is a wholesome meal.", exampleZh: "这是一顿健康的饭菜。" }
  ],
  article: {
    title: "How to Manage Your Spare Time",
    titleZh: "如何管理你的空闲时间",
    paragraphs: [
      { en: "Free time is valuable, but many people waste it.", zh: "空闲时间很宝贵，但很多人浪费了它。" },
      { en: "Decide what matters most before you pick an activity.", zh: "在挑选活动之前，先决定什么最重要。" },
      { en: "A short plan helps you make the most of your hours.", zh: "一个简短计划能帮你充分利用时间。" },
      { en: "Remember to leave room to relax, not just to work.", zh: "记得留出放松的空间，而不只是工作。" }
    ],
    phrases: [
      { phrase: "waste it", meaning: "浪费它" },
      { phrase: "matters most", meaning: "最重要" },
      { phrase: "make the most of", meaning: "充分利用" },
      { phrase: "leave room", meaning: "留出余地" }
    ],
    grammar: [
      { point: "Decide what matters most", explain: "what 引导宾语从句。" },
      { point: "before you pick an activity", explain: "before 引导时间状语从句。" }
    ],
    tips: [
      "valuable → 宝贵的；价值高的。",
      "spare time = 空闲时间。"
    ],
    quiz: {
      choice: [
        { q: "What should you decide first?", options: ["What matters most", "What to eat", "Where to sleep", "Nothing"], answer: 0 },
        { q: "What does a short plan help you do?", options: ["Make the most of your time", "Waste time", "Sleep more", "Forget"], answer: 0 },
        { q: "What should you leave room for?", options: ["Relaxing", "Working only", "Worrying", "Nothing"], answer: 0 }
      ],
      fill: [
        { q: "A short plan helps you m______ the most of your hours.", answer: "make" }
      ],
      writing: { prompt: "Describe how you like to spend your free time. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在药店买维生素",
      situationZh: "你在药店为家人买一些维生素。",
      roles: { clerk: "药剂师", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what can I do for you?", zh: "你好，需要什么帮助？" },
        { role: "user", en: "Do you have vitamins for adults?", zh: "有成人服用的维生素吗？", keywords: ["vitamins"] },
        { role: "clerk", en: "Yes, we have several kinds. For daily health or recovery?", zh: "有的，有好几种。日常保健还是恢复期用？" },
        { role: "user", en: "For daily health, please.", zh: "日常保健用。", keywords: ["daily"] },
        { role: "clerk", en: "This bottle is a good choice. Take one after breakfast.", zh: "这瓶是不错的选择。早餐后吃一片。" },
        { role: "user", en: "How much is it?", zh: "多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "It's 65 yuan.", zh: "65 元。" }
      ],
      tips: [
        "vitamins = 维生素。",
        "after breakfast = 早餐后。"
      ]
    },
    {
      scene: "在汽车站买票",
      situationZh: "你在汽车站买去郊区的车票。",
      roles: { clerk: "售票员", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning, where are you going?", zh: "早上好，去哪儿？" },
        { role: "user", en: "One ticket to the countryside, please.", zh: "请给我一张去郊区的车票。", keywords: ["ticket", "countryside"] },
        { role: "clerk", en: "Which bus, the express or the regular one?", zh: "坐哪一班，快车还是普通车？" },
        { role: "user", en: "The express one, please.", zh: "快车。", keywords: ["express"] },
        { role: "clerk", en: "That's 30 yuan.", zh: "30 元。" },
        { role: "user", en: "What time does it leave?", zh: "几点发车？", keywords: ["leave"] },
        { role: "clerk", en: "The next express leaves in 20 minutes.", zh: "下一趟快车 20 分钟后发车。" }
      ],
      tips: [
        "countryside = 乡村；郊区。",
        "express = 快车。"
      ]
    }
  ]
},
// ===================== 第 19 天 =====================
{
  words: [
    { word: "abandon", phonetic: "/əˈbændən/", meaning: "v. 放弃；抛弃", example: "Don't abandon your goals.", exampleZh: "不要放弃你的目标。" },
    { word: "blame", phonetic: "/bleɪm/", meaning: "v. 责怪 n. 责任", example: "Don't blame others for your mistakes.", exampleZh: "不要把自己的错误归咎于人。" },
    { word: "console", phonetic: "/kənˈsəʊl/", meaning: "v. 安慰", example: "He consoled his crying friend.", exampleZh: "他安慰哭泣的朋友。" },
    { word: "devise", phonetic: "/dɪˈvaɪz/", meaning: "v. 设计；想出", example: "They devised a clever plan.", exampleZh: "他们想出了一个巧妙的计划。" },
    { word: "elicit", phonetic: "/iˈlɪsɪt/", meaning: "v. 引出；诱出", example: "The question elicited many answers.", exampleZh: "这个问题引出了许多回答。" },
    { word: "forfeit", phonetic: "/ˈfɔːfɪt/", meaning: "v. 丧失；被没收", example: "He forfeited his deposit.", exampleZh: "他失去了押金。" },
    { word: "grapple", phonetic: "/ˈɡræpl/", meaning: "v. 努力对付；扭打", example: "We grappled with the problem.", exampleZh: "我们努力解决这个难题。" },
    { word: "hefty", phonetic: "/ˈhefti/", meaning: "adj. 大量的；重的", example: "They paid a hefty fine.", exampleZh: "他们交了巨额罚款。" },
    { word: "instigate", phonetic: "/ˈɪnstɪɡeɪt/", meaning: "v. 煽动；发起", example: "He instigated a new project.", exampleZh: "他发起了一个新项目。" },
    { word: "linger", phonetic: "/ˈlɪŋɡə(r)/", meaning: "v. 逗留；徘徊", example: "She lingered at the door.", exampleZh: "她在门口逗留。" },
    { word: "meticulous", phonetic: "/məˈtɪkjələs/", meaning: "adj. 一丝不苟的", example: "He is meticulous about details.", exampleZh: "他对细节一丝不苟。" },
    { word: "nuisance", phonetic: "/ˈnjuːsns/", meaning: "n. 讨厌的人/事", example: "This bug is a nuisance.", exampleZh: "这个虫子很讨厌。" },
    { word: "onset", phonetic: "/ˈɒnset/", meaning: "n. 开始；发作", example: "At the onset of spring, it warms up.", exampleZh: "春天来临时天气变暖。" },
    { word: "prolific", phonetic: "/prəˈlɪfɪk/", meaning: "adj. 多产的；丰富的", example: "She is a prolific writer.", exampleZh: "她是一位多产作家。" },
    { word: "resilience", phonetic: "/rɪˈzɪliəns/", meaning: "n. 韧性；恢复力", example: "Adversity builds resilience.", exampleZh: "逆境磨炼韧性。" },
    { word: "sceptical", phonetic: "/ˈskeptɪkl/", meaning: "adj. 怀疑的", example: "I'm sceptical about the idea.", exampleZh: "我对这个想法持怀疑态度。" },
    { word: "tangible", phonetic: "/ˈtændʒəbl/", meaning: "adj. 有形的", example: "We need tangible proof.", exampleZh: "我们需要确凿的证据。" },
    { word: "verify", phonetic: "/ˈverɪfaɪ/", meaning: "v. 核实；验证", example: "We must verify the number.", exampleZh: "我们必须核实这个数字。" },
    { word: "warrant", phonetic: "/ˈwɒrənt/", meaning: "v. 保证；使正当 n. 令状", example: "The situation warrants caution.", exampleZh: "这种状况需要谨慎。" },
    { word: "zenith", phonetic: "/ˈzenɪθ/", meaning: "n. 顶点；顶峰", example: "The sun reached its zenith.", exampleZh: "太阳升到了顶点。" }
  ],
  article: {
    title: "Why Routine Helps Your Brain",
    titleZh: "为什么规律作息有益大脑",
    paragraphs: [
      { en: "A regular daily routine is good for your brain.", zh: "规律的日常作息对大脑有益。" },
      { en: "When you follow a fixed schedule, your brain saves energy.", zh: "当你遵循固定时间表时，大脑会更省力。" },
      { en: "You make fewer decisions, so you have more energy for real thinking.", zh: "你减少作决定，从而有更多精力用于真正的思考。" },
      { en: "This is why a simple morning routine can improve your whole day.", zh: "这就是为什么简单的晨间习惯能改善一整天。" }
    ],
    phrases: [
      { phrase: "follow a fixed schedule", meaning: "遵循固定时间表" },
      { phrase: "save energy", meaning: "节省精力" },
      { phrase: "real thinking", meaning: "真正的思考" }
    ],
    grammar: [
      { point: "so you have more energy for real thinking", explain: "so 连接结果。" },
      { point: "This is why...", explain: "why 引导表语从句。" }
    ],
    tips: [
      "routine → 惯例；日常事务。",
      "energy → 能量；精力。"
    ],
    quiz: {
      choice: [
        { q: "What is a regular routine good for?", options: ["Your brain", "Your shoes", "Your phone", "Nothing"], answer: 0 },
        { q: "When you follow a routine, your brain ______ energy.", options: ["Wastes", "Saves", "Loses", "Burns"], answer: 1 },
        { q: "With fewer decisions, you have more energy for ______.", options: ["Real thinking", "Worrying", "Sleeping", "Posting"], answer: 0 }
      ],
      fill: [
        { q: "You make fewer d______, so you save energy.", answer: "decisions" }
      ],
      writing: { prompt: "Describe one routine in your day and why it helps. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在眼镜店换镜片",
      situationZh: "你在眼镜店想换防蓝光镜片。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what can I do for you?", zh: "你好，需要什么帮助？" },
        { role: "user", en: "I'd like to change to blue-light-blocking lenses.", zh: "我想换成防蓝光镜片。", keywords: ["blue-light"] },
        { role: "clerk", en: "Do you use screens a lot for work?", zh: "你工作时经常用屏幕吗？" },
        { role: "user", en: "Yes, every day for hours.", zh: "是的，每天好几个小时。", keywords: ["screens"] },
        { role: "clerk", en: "These lenses reduce eye strain.", zh: "这种镜片能减轻眼睛疲劳。" },
        { role: "user", en: "How much extra do they cost?", zh: "要加多少钱？", keywords: ["extra"] },
        { role: "clerk", en: "An extra 100 yuan.", zh: "加 100 元。" },
        { role: "user", en: "OK, I'll do it.", zh: "好的，那就换吧。", keywords: ["do"] }
      ],
      tips: [
        "blue-light-blocking = 防蓝光的。",
        "eye strain = 眼睛疲劳。"
      ]
    },
    {
      scene: "在地铁服务中心退卡",
      situationZh: "你想退掉地铁卡并取回押金。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning, how can I help?", zh: "早上好，需要什么帮助？" },
        { role: "user", en: "I'd like to return my subway card.", zh: "我想退掉地铁卡。", keywords: ["return", "card"] },
        { role: "clerk", en: "There's 30 yuan left on it, is that right?", zh: "卡里还剩 30 元，对吗？" },
        { role: "user", en: "Yes, correct.", zh: "对的。", keywords: ["correct"] },
        { role: "clerk", en: "Here's your 30 yuan plus the 20 yuan deposit.", zh: "这是 30 元加 20 元押金。" },
        { role: "user", en: "Thank you very much.", zh: "非常感谢。", keywords: ["thank"] }
      ],
      tips: [
        "deposit = 押金。",
        "return = 退回。"
      ]
    }
  ]
},
// ===================== 第 20 天 =====================
{
  words: [
    { word: "adept", phonetic: "/əˈdept/", meaning: "adj. 熟练的；擅长的", example: "She is adept at solving problems.", exampleZh: "她擅长解决问题。" },
    { word: "beckon", phonetic: "/ˈbekən/", meaning: "v. 招手；召唤", example: "He beckoned me closer.", exampleZh: "他招手让我靠近。" },
    { word: "capitulate", phonetic: "/kəˈpɪtʃuleɪt/", meaning: "v. 投降；屈服", example: "They refused to capitulate.", exampleZh: "他们拒绝投降。" },
    { word: "dwindle", phonetic: "/ˈdwɪndl/", meaning: "v. 逐渐减少", example: "Food supplies dwindled.", exampleZh: "食物供应逐渐减少。" },
    { word: "eloquent", phonetic: "/ˈeləkwənt/", meaning: "adj. 雄辩的；有口才的", example: "She gave an eloquent speech.", exampleZh: "她做了一场雄辩的演讲。" },
    { word: "forlorn", phonetic: "/fəˈlɔːn/", meaning: "adj. 孤独凄凉的", example: "He looked forlorn on the platform.", exampleZh: "他在站台上显得孤独凄凉。" },
    { word: "guile", phonetic: "/ɡaɪl/", meaning: "n. 狡猾；计谋", example: "He won by guile, not force.", exampleZh: "他用计谋而非武力取胜。" },
    { word: "hearken", phonetic: "/ˈhɑːkən/", meaning: "v. 倾听（古语）", example: "Hearken to the advice.", exampleZh: "倾听这个建议。" },
    { word: "lucid", phonetic: "/ˈluːsɪd/", meaning: "adj. 清晰的；清醒的", example: "She wrote a lucid explanation.", exampleZh: "她写了一个清晰的解释。" },
    { word: "myriad", phonetic: "/ˈmɪriəd/", meaning: "adj. 无数的 n. 无数", example: "There are myriad choices.", exampleZh: "有无数的选择。" },
    { word: "nimble", phonetic: "/ˈnɪmbl/", meaning: "adj. 灵活的；敏捷的", example: "The cat is nimble.", exampleZh: "这只猫很敏捷。" },
    { word: "opulent", phonetic: "/ˈɒpjələnt/", meaning: "adj. 豪华的；富裕的", example: "They lived in an opulent palace.", exampleZh: "他们住在豪华的宫殿里。" },
    { word: "palpable", phonetic: "/ˈpælpəbl/", meaning: "adj. 明显的；可感知的", example: "The tension was palpable.", exampleZh: "紧张感可以明显感觉到。" },
    { word: "quell", phonetic: "/kwel/", meaning: "v. 平息；镇压", example: "The rain quelled the fire risks.", exampleZh: "雨水降低了火灾风险。" },
    { word: "robust", phonetic: "/rəʊˈbʌst/", meaning: "adj. 强健的；稳健的", example: "He is in robust health.", exampleZh: "他身体强壮。" },
    { word: "serene", phonetic: "/səˈriːn/", meaning: "adj. 平静的；安详的", example: "The sea was serene.", exampleZh: "海面平静。" },
    { word: "tenacious", phonetic: "/təˈneɪʃəs/", meaning: "adj. 顽强的；坚持的", example: "She is tenacious in her goals.", exampleZh: "她对目标非常执着。" },
    { word: "ubiquitous", phonetic: "/juːˈbɪkwɪtəs/", meaning: "adj. 无处不在的", example: "Smartphones are ubiquitous.", exampleZh: "智能手机无处不在。" },
    { word: "voracious", phonetic: "/vəˈreɪʃəs/", meaning: "adj. 贪婪的；求知若渴的", example: "He is a voracious reader.", exampleZh: "他是个求知若渴的读者。" },
    { word: "zealous", phonetic: "/ˈzeləs/", meaning: "adj. 热忱的", example: "The zealous fans cheered loudly.", exampleZh: "热忱的粉丝大声欢呼。" }
  ],
  article: {
    title: "The Magic of Getting Outside",
    titleZh: "走到户外的魔力",
    paragraphs: [
      { en: "Spending time outdoors is a simple way to feel better.", zh: "在户外待一段时间是让自己感觉更好的简单方式。" },
      { en: "Fresh air, sunlight, and nature calm the mind.", zh: "新鲜空气、阳光和大自然能让心灵平静。" },
      { en: "A short walk every day can reduce stress and lift your mood.", zh: "每天短暂散步能减轻压力、改善心情。" },
      { en: "So put down your phone and take a walk outside today.", zh: "所以今天放下手机，出去走一走吧。" }
    ],
    phrases: [
      { phrase: "spend time", meaning: "花时间" },
      { phrase: "calm the mind", meaning: "让心灵平静" },
      { phrase: "lift your mood", meaning: "改善心情" }
    ],
    grammar: [
      { point: "Spending time outdoors is...", explain: "动名词作主语。" },
      { point: "A short walk every day can reduce...", explain: "主语单数，情态动词接动词原形。" }
    ],
    tips: [
      "outdoors → 户外；outdoor 形容词。",
      "mood → 心情。"
    ],
    quiz: {
      choice: [
        { q: "What does spending time outdoors help?", options: ["Feel better", "Feel worse", "Sleep less", "Worry more"], answer: 0 },
        { q: "What calms the mind?", options: ["Fresh air and nature", "Traffic", "Loud noise", "All-night work"], answer: 0 },
        { q: "What can a daily walk do?", options: ["Reduce stress", "Increase stress", "Cause illness", "Do nothing"], answer: 0 }
      ],
      fill: [
        { q: "A short w______ everyday can reduce stress.", answer: "walk" }
      ],
      writing: { prompt: "Describe why being outdoors makes you feel better. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在花店买花",
      situationZh: "你在花店想为朋友买一束鲜花。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help?", zh: "你好，需要什么帮助？" },
        { role: "user", en: "I'd like to buy a bouquet of flowers.", zh: "我想买一束花。", keywords: ["bouquet", "flowers"] },
        { role: "clerk", en: "For what occasion?", zh: "是什么场合？" },
        { role: "user", en: "Just as a thank-you gift to a friend.", zh: "只是想送朋友作为感谢礼物。", keywords: ["thank-you", "gift"] },
        { role: "clerk", en: "These roses are fresh and nice.", zh: "这些玫瑰很新鲜漂亮。" },
        { role: "user", en: "How much is this bunch?", zh: "这一束多少钱？", keywords: ["how much", "bunch"] },
        { role: "clerk", en: "It's 55 yuan.", zh: "55 元。" },
        { role: "user", en: "Great, I'll take it.", zh: "好的，我买了。", keywords: ["take"] }
      ],
      tips: [
        "bouquet = 花束。",
        "occasion = 场合。"
      ]
    },
    {
      scene: "在商场买礼物",
      situationZh: "你在商场为母亲挑生日礼物。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! Looking for something special?", zh: "欢迎光临！在找特别的礼物吗？" },
        { role: "user", en: "Yes, a birthday gift for my mother.", zh: "是的，送我妈妈的生日礼物。", keywords: ["birthday", "gift"] },
        { role: "clerk", en: "Does she like scarves or perfume?", zh: "她喜欢丝巾还是香水？" },
        { role: "user", en: "She loves scarves. Show me this one.", zh: "她喜欢丝巾。给我看看这条。", keywords: ["scarf"] },
        { role: "clerk", en: "This silk scarf is elegant. It's 120 yuan.", zh: "这条真丝丝巾很优雅，120 元。" },
        { role: "user", en: "Can you wrap it as a gift?", zh: "能把它包装成礼物吗？", keywords: ["wrap"] },
        { role: "clerk", en: "Of course, gift wrapping is free.", zh: "当然，礼物包装免费。" }
      ],
      tips: [
        "scarf = 丝巾。",
        "gift wrapping = 礼物包装。"
      ]
    }
  ]
},
  // ===================== 第 21 天 =====================
{
  words: [
    { word: "allocate", phonetic: "/ˈæləkeɪt/", meaning: "v. 分配；分派", example: "We allocated resources wisely.", exampleZh: "我们合理分配了资源。" },
    { word: "boast", phonetic: "/bəʊst/", meaning: "v. 吹嘘；以…为傲", example: "The city boasts many parks.", exampleZh: "这座城市以拥有众多公园为傲。" },
    { word: "constrain", phonetic: "/kənˈstreɪn/", meaning: "v. 限制；约束", example: "Time constraints limited our work.", exampleZh: "时间限制制约了我们的工作。" },
    { word: "dilemma", phonetic: "/dɪˈlemə/", meaning: "n. 两难困境", example: "She faced a moral dilemma.", exampleZh: "她面临一个道德两难。" },
    { word: "equity", phonetic: "/ˈekwəti/", meaning: "n. 公平；公正", example: "Equity is important in society.", exampleZh: "公正在社会中很重要。" },
    { word: "feud", phonetic: "/fjuːd/", meaning: "n. 长期仇恨；世仇", example: "The two families had a long feud.", exampleZh: "这两个家族有世仇。" },
    { word: "ginle", phonetic: "/ˈdʒɪtərɪ/", meaning: "adj. 兴奋不安的", example: "She was jittery before the exam.", exampleZh: "考试前她紧张不安。" },
    { word: "hospitable", phonetic: "/hɒˈspɪtəbl/", meaning: "adj. 好客的", example: "The villagers are hospitable.", exampleZh: "村民很好客。" },
    { word: "illuminate", phonetic: "/ɪˈluːmɪneɪt/", meaning: "v. 照亮；阐明", example: "The lamp illuminated the room.", exampleZh: "灯照亮了房间。" },
    { word: "languid", phonetic: "/ˈlæŋɡwɪd/", meaning: "adj. 倦怠的；慵懒的", example: "They moved at a languid pace.", exampleZh: "他们懒洋洋地走着。" },
    { word: "malleable", phonetic: "/ˈmæliəbl/", meaning: "adj. 可塑的；易改变的", example: "Gold is a malleable metal.", exampleZh: "金是可锻金属。" },
    { word: "nostalgia", phonetic: "/nɒˈstældʒə/", meaning: "n. 怀旧；乡愁", example: "The song brought back nostalgia.", exampleZh: "这首歌唤起了怀旧之情。" },
    { word: "overwhelm", phonetic: "/ˌəʊvəˈwelm/", meaning: "v. 使不知所措；压倒", example: "She was overwhelmed by work.", exampleZh: "她被工作压得喘不过气。" },
    { word: "permeate", phonetic: "/ˈpɜːmieɪt/", meaning: "v. 渗透；弥漫", example: "The smell permeated the house.", exampleZh: "气味弥漫整座房子。" },
    { word: "quench", phonetic: "/kwentʃ/", meaning: "v. 解渴；扑灭", example: "This water quenched my thirst.", exampleZh: "这水帮我解了渴。" },
    { word: "sanguine", phonetic: "/ˈsæŋɡwɪn/", meaning: "adj. 乐观的", example: "She remained sanguine about the future.", exampleZh: "她对未来保持乐观。" },
    { word: "tumultuous", phonetic: "/tjuːˈmʌltʃuəs/", meaning: "adj. 喧闹的；动荡的", example: "It was a tumultuous period.", exampleZh: "那是一段动荡的时期。" },
    { word: "unravel", phonetic: "/ʌnˈrævl/", meaning: "v. 解开；阐明", example: "They unravelled the mystery.", exampleZh: "他们解开了这个谜团。" },
    { word: "venerate", phonetic: "/ˈvenəreɪt/", meaning: "v. 尊敬；崇敬", example: "They venerate the elder.", exampleZh: "他们尊敬这位长者。" },
    { word: "yearn", phonetic: "/jɜːn/", meaning: "v. 渴望", example: "The child yearns for attention.", exampleZh: "孩子渴望关注。" }
  ],
  article: {
    title: "The Value of Teamwork",
    titleZh: "团队合作的价值",
    paragraphs: [
      { en: "One person can do good work, but a team can do great work.", zh: "一个人能做好工作，但一个团队能做出伟大的工作。" },
      { en: "In a team, people share ideas and support each other.", zh: "在团队里，人们分享想法并互相支持。" },
      { en: "Everyone brings different strengths, so the result is stronger.", zh: "每个人都带来不同的长处，所以结果更强。" },
      { en: "Learning to listen and cooperate is a skill that lasts a lifetime.", zh: "学会倾听与合作是受用一生的技能。" }
    ],
    phrases: [
      { phrase: "share ideas", meaning: "分享想法" },
      { phrase: "support each other", meaning: "互相支持" },
      { phrase: "different strengths", meaning: "不同的长处" }
    ],
    grammar: [
      { point: "so the result is stronger", explain: "so 引导结果。" },
      { point: "Cooperation is a skill that lasts", explain: "that 引导定语从句。" }
    ],
    tips: [
      "teamwork = 团队合作。",
      "cooperate → 合作；cooperation 名词。"
    ],
    quiz: {
      choice: [
        { q: "What can a team do?", options: ["Do great work", "Only fail", "Do nothing", "Work alone"], answer: 0 },
        { q: "Why is the result stronger in a team?", options: ["Everyone brings different strengths", "One person decides", "No one works", "Everyone sleeps"], answer: 0 },
        { q: "What is a lifelong skill mentioned?", options: ["Listening and cooperating", "Winning only", "Complaining", "Hiding"], answer: 0 }
      ],
      fill: [
        { q: "Learning to l______ and cooperate is a lifelong skill.", answer: "listen" }
      ],
      writing: { prompt: "Describe why teamwork is important. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在美容院洗头",
      situationZh: "你在美容院想做一次头部护理。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Good afternoon, what would you like?", zh: "下午好，需要什么服务？" },
        { role: "user", en: "I'd like a shampoo and a hair treatment.", zh: "我想洗头和做个护发。", keywords: ["shampoo", "treatment"] },
        { role: "clerk", en: "We have a special package for 60 yuan.", zh: "我们有一个 60 元的特别套餐。" },
        { role: "user", en: "That sounds good. How long does it take?", zh: "听起来不错。要多久？", keywords: ["how long"] },
        { role: "clerk", en: "About forty minutes.", zh: "大约四十分钟。" },
        { role: "user", en: "OK, let's do it.", zh: "好的，那就做吧。", keywords: ["do"] }
      ],
      tips: [
        "shampoo = 洗发。",
        "treatment = 护理。"
      ]
    },
    {
      scene: "在打印店打印",
      situationZh: "你在打印店想打印一些简历。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, do you want to print something?", zh: "你好，要打印东西吗？" },
        { role: "user", en: "Yes, I need to print ten copies of my resume.", zh: "是的，我要打印十份简历。", keywords: ["print", "copies"] },
        { role: "clerk", en: "Color or black and white?", zh: "彩色还是黑白？" },
        { role: "user", en: "Black and white, please.", zh: "黑白就行。", keywords: ["black and white"] },
        { role: "clerk", en: "It's 10 yuan for ten pages.", zh: "十页 10 元。" },
        { role: "user", en: "Here is the file on my phone.", zh: "这是我的文件，在手机上。", keywords: ["file"] },
        { role: "clerk", en: "Great, printing now.", zh: "好的，正在打印。" }
      ],
      tips: [
        "print = 打印。",
        "resume = 简历。"
      ]
    }
  ]
},
// ===================== 第 22 天 =====================
{
  words: [
    { word: "alleviate", phonetic: "/əˈliːvieɪt/", meaning: "v. 减轻；缓解", example: "The medicine alleviated the pain.", exampleZh: "药物缓解了疼痛。" },
    { word: "benevolent", phonetic: "/bəˈnevələnt/", meaning: "adj. 仁慈的；乐善好施的", example: "He is a benevolent leader.", exampleZh: "他是一位仁厚的领导者。" },
    { word: "capricious", phonetic: "/kəˈprɪʃəs/", meaning: "adj. 反复无常的", example: "The weather is capricious.", exampleZh: "天气变化无常。" },
    { word: "diligent", phonetic: "/ˈdɪlɪdʒənt/", meaning: "adj. 勤奋的", example: "She is a diligent student.", exampleZh: "她是个勤奋的学生。" },
    { word: "eloquent", phonetic: "/ˈeləkwənt/", meaning: "adj. 有口才的", example: "His speech was eloquent.", exampleZh: "他的演讲很有口才。" },
    { word: "frivolous", phonetic: "/ˈfrɪvələs/", meaning: "adj. 轻率的；漫不经心的", example: "Don't waste time on frivolous details.", exampleZh: "不要为琐碎的小事浪费时间。" },
    { word: "glacial", phonetic: "/ˈɡleɪʃl/", meaning: "adj. 冰川的；极其缓慢的", example: "Progress was glacial.", exampleZh: "进展极其缓慢。" },
    { word: "hinder", phonetic: "/ˈhɪndə(r)/", meaning: "v. 阻碍", example: "Bad weather hindered the rescue.", exampleZh: "恶劣天气阻碍了救援。" },
    { word: "lucid", phonetic: "/ˈluːsɪd/", meaning: "adj. 清晰明了的", example: "His instructions were lucid.", exampleZh: "他的指示很清楚。" },
    { word: "meticulous", phonetic: "/məˈtɪkjələs/", meaning: "adj. 一丝不苟的", example: "She keeps meticulous records.", exampleZh: "她做详细记录。" },
    { word: "nurture", phonetic: "/ˈnɜːtʃə(r)/", meaning: "v. 培育；滋养", example: "Parents nurture their children.", exampleZh: "父母养育子女。" },
    { word: "opulent", phonetic: "/ˈɒpjələnt/", meaning: "adj. 豪华的", example: "They live an opulent life.", exampleZh: "他们过着奢华的生活。" },
    { word: "prodigal", phonetic: "/ˈprɒdɪɡl/", meaning: "adj. 浪费的；挥霍的", example: "He regretted his prodigal spending.", exampleZh: "他后悔挥霍无度。" },
    { word: "radical", phonetic: "/ˈrædɪkl/", meaning: "adj. 彻底的；激进的", example: "They made a radical change.", exampleZh: "他们做了彻底的改变。" },
    { word: "serendipity", phonetic: "/ˌserənˈdɪpəti/", meaning: "n. 机缘巧合；意外发现", example: "Meeting her was pure serendipity.", exampleZh: "遇见她纯属机缘巧合。" },
    { word: "tenacious", phonetic: "/təˈneɪʃəs/", meaning: "adj. 顽强不屈的", example: "She is tenacious in her efforts.", exampleZh: "她做事顽强执着。" },
    { word: "ubiquitous", phonetic: "/juːˈbɪkwɪtəs/", meaning: "adj. 无处不在的", example: "Coffee shops are ubiquitous.", exampleZh: "咖啡馆到处都有。" },
    { word: "vivid", phonetic: "/ˈvɪvɪd/", meaning: "adj. 生动的", example: "She gave a vivid description.", exampleZh: "她做了生动的描述。" },
    { word: "wane", phonetic: "/weɪn/", meaning: "v. 衰落；减弱", example: "His interest began to wane.", exampleZh: "他的兴趣开始减退。" },
    { word: "zealous", phonetic: "/ˈzeləs/", meaning: "adj. 热情的", example: "He is zealous about his cause.", exampleZh: "他对自己的事业充满热情。" }
  ],
  article: {
    title: "The Importance of Asking Questions",
    titleZh: "提问的重要性",
    paragraphs: [
      { en: "Some students feel shy about asking questions in class.", zh: "有些学生在课堂上不好意思提问。" },
      { en: "But asking questions is a sign of curiosity, not weakness.", zh: "但提问是好奇心的表现，而不是弱点。" },
      { en: "A good question can open your mind and deepen your understanding.", zh: "一个好问题能开阔你的思维、加深理解。" },
      { en: "Never be afraid to ask — every expert was once a beginner.", zh: "永远不要害怕提问——每个专家都曾是初学者。" }
    ],
    phrases: [
      { phrase: "a sign of curiosity", meaning: "好奇心的表现" },
      { phrase: "open your mind", meaning: "开阔思维" },
      { phrase: "deepen understanding", meaning: "加深理解" }
    ],
    grammar: [
      { point: "asking questions is a sign", explain: "动名词作主语。" },
      { point: "every expert was once a beginner", explain: "过去时表经历；once 意为“曾经”。" }
    ],
    tips: [
      "curiosity → 好奇心；curious 形容词。",
      "When in doubt, ask. → 有疑问就问。"
    ],
    quiz: {
      choice: [
        { q: "Why do some students not ask questions?", options: ["They feel shy", "They know everything", "They are bored", "No reason"], answer: 0 },
        { q: "What is asking questions a sign of?", options: ["Curiosity", "Weakness always", "Anger", "Fear"], answer: 0 },
        { q: "What can a good question do?", options: ["Open your mind", "Close your mind", "Waste time only", "Nothing"], answer: 0 }
      ],
      fill: [
        { q: "Asking questions is a sign of c______.", answer: "curiosity" }
      ],
      writing: { prompt: "Describe why it is good to ask questions when studying. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在健身房称体重",
      situationZh: "你在健身房问教练如何正确举哑铃。",
      roles: { clerk: "教练", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, need help with your workout?", zh: "嗨，需要锻炼方面的帮助吗？" },
        { role: "user", en: "Yes, can you show me how to use dumbbells correctly?", zh: "是的，你能教我正确使用哑铃吗？", keywords: ["dumbbells"] },
        { role: "clerk", en: "Sure, keep your back straight and lift slowly.", zh: "好的，背部挺直，慢慢举起。" },
        { role: "user", en: "How many sets should I do?", zh: "我应该做几组？", keywords: ["sets"] },
        { role: "clerk", en: "Three sets of ten.", zh: "每组十个，共三组。" },
        { role: "user", en: "Thanks for the advice!", zh: "谢谢你的建议！", keywords: ["advice"] }
      ],
      tips: [
        "dumbbell = 哑铃。",
        "set = 组（健身）。"
      ]
    },
    {
      scene: "在蛋糕店订蛋糕",
      situationZh: "你想订一个生日蛋糕。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! How can I help?", zh: "欢迎光临！需要什么帮助？" },
        { role: "user", en: "I'd like to order a birthday cake for tomorrow.", zh: "我想订一个明天的生日蛋糕。", keywords: ["order", "birthday"] },
        { role: "clerk", en: "What flavor and size?", zh: "什么口味和尺寸？" },
        { role: "user", en: "A chocolate cake, medium size.", zh: "一个中号巧克力蛋糕。", keywords: ["chocolate", "medium"] },
        { role: "clerk", en: "Should I write your name on it?", zh: "需要写上名字吗？" },
        { role: "user", en: "Yes, write Happy Birthday, Anna.", zh: "写上“生日快乐，安娜”。", keywords: ["write"] },
        { role: "clerk", en: "It'll be ready tomorrow at 3 pm.", zh: "明天下午三点可以取。" }
      ],
      tips: [
        "order = 订购。",
        "flavor = 口味。"
      ]
    }
  ]
},
// ===================== 第 23 天 =====================
{
  words: [
    { word: "assess", phonetic: "/əˈses/", meaning: "v. 评估；估价", example: "We need to assess the situation.", exampleZh: "我们需要评估局势。" },
    { word: "bewilder", phonetic: "/bɪˈwɪldə(r)/", meaning: "v. 使困惑", example: "The map bewildered the tourists.", exampleZh: "这张地图让游客困惑。" },
    { word: "consecutive", phonetic: "/kənˈsekjətɪv/", meaning: "adj. 连续的", example: "It rained for three consecutive days.", exampleZh: "连续下了三天雨。" },
    { word: "distract", phonetic: "/dɪˈstrækt/", meaning: "v. 分散注意力", example: "Noise distracted me from my work.", exampleZh: "噪音让我无法专心工作。" },
    { word: "explicit", phonetic: "/ɪkˈsplɪsɪt/", meaning: "adj. 明确的；清楚的", example: "Give me explicit instructions.", exampleZh: "给我明确的指示。" },
    { word: "futile", phonetic: "/ˈfjuːtaɪl/", meaning: "adj. 徒劳的；无效的", example: "It was a futile attempt.", exampleZh: "那是徒劳的尝试。" },
    { word: "gtius", phonetic: "/ˈɡletɪnəs/", meaning: "adj. 粘性的；胶状的", example: "The sap is glutinous.", exampleZh: "树液粘稠。" },
    { word: "hypocrisy", phonetic: "/hɪˈpɒkrəsi/", meaning: "n. 虚伪", example: "He exposed their hypocrisy.", exampleZh: "他揭露了他们的虚伪。" },
    { word: "impulse", phonetic: "/ˈɪmpʌls/", meaning: "n. 冲动；脉冲", example: "He acted on impulse.", exampleZh: "他一时冲动行事。" },
    { word: "lucid", phonetic: "/ˈluːsɪd/", meaning: "adj. 清醒的", example: "He was lucid during the talk.", exampleZh: "谈话时他很清醒。" },
    { word: "meticulous", phonetic: "/məˈtɪkjələs/", meaning: "adj. 细致的", example: "She is meticulous in her work.", exampleZh: "她工作细致入微。" },
    { word: "notion", phonetic: "/ˈnəʊʃn/", meaning: "n. 观念", example: "He rejected the old notion.", exampleZh: "他否定了旧观念。" },
    { word: "precedent", phonetic: "/ˈpresɪdənt/", meaning: "n. 先例", example: "There is no precedent for this.", exampleZh: "这件事没有先例。" },
    { word: "relentless", phonetic: "/rɪˈlentləs/", meaning: "adj. 不间断的；无情的", example: "The rain was relentless.", exampleZh: "雨下个不停。" },
    { word: "subtle", phonetic: "/ˈsʌtl/", meaning: "adj. 微妙的；细微的", example: "There is a subtle difference.", exampleZh: "有细微的差别。" },
    { word: "tranquil", phonetic: "/ˈtræŋkwɪl/", meaning: "adj. 宁静的", example: "The garden is tranquil.", exampleZh: "花园很宁静。" },
    { word: "utmost", phonetic: "/ˈʌtməʊst/", meaning: "adj. 最大的 n. 极限", example: "We value it of the utmost importance.", exampleZh: "我们视它极其重要。" },
    { word: "valiant", phonetic: "/ˈvæliənt/", meaning: "adj. 勇敢的", example: "They made a valiant effort.", exampleZh: "他们做出了勇敢的努力。" },
    { word: "whittle", phonetic: "/ˈwɪtl/", meaning: "v. 削减；削", example: "We whittled down the list.", exampleZh: "我们缩减了名单。" },
    { word: "zeal", phonetic: "/ziːl/", meaning: "n. 热情", example: "She approached it with zeal.", exampleZh: "她满怀热情地去做。" }
  ],
  article: {
    title: "Why Comparison Can Hurt",
    titleZh: "为什么攀比会伤人",
    paragraphs: [
      { en: "It is natural to compare yourself with others.", zh: "拿自己和别人比较是很自然的。" },
      { en: "But comparing your life to others' can make you unhappy.", zh: "但拿自己的生活与别人比较会让你不快乐。" },
      { en: "You only see others' success, not their struggles.", zh: "你只看到别人的成功，看不到他们的挣扎。" },
      { en: "Focus on your own progress instead of constant comparison.", zh: "与其不断攀比，不如专注于自己的进步。" }
    ],
    phrases: [
      { phrase: "compare yourself with", meaning: "把自己与…比较" },
      { phrase: "constant comparison", meaning: "持续的攀比" },
      { phrase: "focus on", meaning: "专注于" }
    ],
    grammar: [
      { point: "comparing your life to others'", explain: "动名词短语作主语，others' 为名词所有格。" },
      { point: "instead of constant comparison", explain: "instead of 意为“而不是”。" }
    ],
    tips: [
      "compare A with B = 比较；compare A to B = 把…比作。",
      "progress → 进步。"
    ],
    quiz: {
      choice: [
        { q: "What can comparing your life to others do?", options: ["Make you unhappy", "Make you rich", "Make you sleep", "Do nothing"], answer: 0 },
        { q: "What do you not see in others?", options: ["Their struggles", "Their success", "Their money", "Everything"], answer: 0 },
        { q: "What should you focus on?", options: ["Your own progress", "Others' wealth", "Constant comparison", "Gossip"], answer: 0 }
      ],
      fill: [
        { q: "Focus on your own p______ instead of comparison.", answer: "progress" }
      ],
      writing: { prompt: "Describe why comparing yourself to others can be harmful. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在水果店买水果",
      situationZh: "你在水果店买橙子并问是否新鲜。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what would you like?", zh: "你好，想买点什么？" },
        { role: "user", en: "Are these oranges fresh?", zh: "这些橙子新鲜吗？", keywords: ["oranges", "fresh"] },
        { role: "clerk", en: "Yes, they arrived this morning.", zh: "是的，今天早上刚到。" },
        { role: "user", en: "How much is a kilo?", zh: "多少钱一公斤？", keywords: ["kilo", "how much"] },
        { role: "clerk", en: "It's 8 yuan a kilo.", zh: "8 元一公斤。" },
        { role: "user", en: "I'll take two kilos, please.", zh: "我要两公斤。", keywords: ["two", "kilos"] },
        { role: "clerk", en: "That's 16 yuan.", zh: "16 元。" }
      ],
      tips: [
        "fresh = 新鲜的。",
        "a kilo = 一公斤。"
      ]
    },
    {
      scene: "在美甲店做指甲",
      situationZh: "你在美甲店想做一套基础美甲。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! What service do you want?", zh: "欢迎！需要什么服务？" },
        { role: "user", en: "I'd like a basic manicure.", zh: "我想做一套基础美甲。", keywords: ["manicure"] },
        { role: "clerk", en: "We have a package with a choice of colors.", zh: "我们有套餐，可以选颜色。" },
        { role: "user", en: "Show me some light colors, please.", zh: "请给我看一些浅色。", keywords: ["light", "colors"] },
        { role: "clerk", en: "How about this soft pink?", zh: "这个浅粉怎么样？" },
        { role: "user", en: "That's nice. How much is it?", zh: "很好看。多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "It's 40 yuan and takes about 30 minutes.", zh: "40 元，大约 30 分钟。" }
      ],
      tips: [
        "manicure = 美甲。",
        "soft pink = 浅粉色。"
      ]
    }
  ]
},
// ===================== 第 24 天 =====================
{
  words: [
    { word: "alleviate", phonetic: "/əˈliːvieɪt/", meaning: "v. 减轻", example: "Rest will alleviate your fatigue.", exampleZh: "休息会减轻你的疲劳。" },
    { word: "besiege", phonetic: "/bɪˈsiːdʒ/", meaning: "v. 包围；围困", example: "Fans besieged the star.", exampleZh: "粉丝们围住了明星。" },
    { word: "condone", phonetic: "/kənˈdəʊn/", meaning: "v. 纵容；宽恕", example: "We cannot condone such behavior.", exampleZh: "我们不能纵容这种行为。" },
    { word: "demolish", phonetic: "/dɪˈmɒlɪʃ/", meaning: "v. 拆除；推翻", example: "They demolished the old house.", exampleZh: "他们拆除了老房子。" },
    { word: "enkindle", phonetic: "/ɪnˈkɪndl/", meaning: "v. 点燃；激起", example: "Her speech enkindled hope.", exampleZh: "她的演讲点燃了希望。" },
    { word: "formidable", phonetic: "/ˈfɔːmɪdəbl/", meaning: "adj. 强大的；难对付的", example: "It was a formidable task.", exampleZh: "这是一项艰巨的任务。" },
    { word: "glide", phonetic: "/ɡlaɪd/", meaning: "v. 滑行；滑翔", example: "The boat glided across the lake.", exampleZh: "小船在湖面上滑行。" },
    { word: "hurdle", phonetic: "/ˈhɜːdl/", meaning: "n. 障碍 v. 克服", example: "There are many hurdles ahead.", exampleZh: "前方有很多障碍。" },
    { word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", meaning: "adj. 不可避免的", example: "Failure is not inevitable.", exampleZh: "失败不是不可避免的。" },
    { word: "luminous", phonetic: "/ˈluːmɪnəs/", meaning: "adj. 发光的", example: "The luminous watch glows.", exampleZh: "夜光表会发光。" },
    { word: "mesmerize", phonetic: "/ˈmezməraɪz/", meaning: "v. 使入迷", example: "The music mesmerized the crowd.", exampleZh: "音乐让观众陶醉。" },
    { word: "nuance", phonetic: "/ˈnjuːɑːns/", meaning: "n. 细微差别", example: "She noticed the nuance in tone.", exampleZh: "她注意到语气的细微差别。" },
    { word: "obsolete", phonetic: "/ˈɒbsəliːt/", meaning: "adj. 过时的", example: "This software is obsolete.", exampleZh: "这个软件过时了。" },
    { word: "peril", phonetic: "/ˈperəl/", meaning: "n. 危险", example: "They ignored the peril.", exampleZh: "他们忽视了危险。" },
    { word: "resilient", phonetic: "/rɪˈzɪliənt/", meaning: "adj. 有韧性的", example: "Children are resilient.", exampleZh: "孩子富有韧性。" },
    { word: "somber", phonetic: "/ˈsɒmbə(r)/", meaning: "adj. 阴沉的；严肃的", example: "The meeting was somber.", exampleZh: "会议气氛沉闷。" },
    { word: "tenacity", phonetic: "/təˈnæsəti/", meaning: "n. 坚韧", example: "She showed great tenacity.", exampleZh: "她表现出极大的坚韧。" },
    { word: "upheaval", phonetic: "/ʌpˈhiːvl/", meaning: "n. 剧变；动荡", example: "The country went through upheaval.", exampleZh: "这个国家经历了剧变。" },
    { word: "valor", phonetic: "/ˈvælə(r)/", meaning: "n. 英勇", example: "He is known for his valor.", exampleZh: "他因英勇而闻名。" },
    { word: "zenith", phonetic: "/ˈzenɪθ/", meaning: "n. 顶峰", example: "Her career reached its zenith.", exampleZh: "她的事业达到顶峰。" }
  ],
  article: {
    title: "A Good Attitude Can Change a Day",
    titleZh: "好心态能改变一天",
    paragraphs: [
      { en: "Your attitude affects the way you see every situation.", zh: "你的心态影响你看待每个处境的方式。" },
      { en: "Two people can face the same trouble but feel very differently.", zh: "两个人可能面对同样的麻烦，但感受却大不相同。" },
      { en: "A positive attitude helps you find solutions instead of giving up.", zh: "积极的心态帮助你找到解决办法，而不是放弃。" },
      { en: "You cannot control every event, but you can control your response.", zh: "你无法控制每件事，但能控制自己的回应。" }
    ],
    phrases: [
      { phrase: "face the same trouble", meaning: "面对同样的麻烦" },
      { phrase: "a positive attitude", meaning: "积极的心态" },
      { phrase: "control your response", meaning: "控制你的回应" }
    ],
    grammar: [
      { point: "The way you see every situation", explain: "the way (in which)... 表示方式，可省略 in which。" },
      { point: "but you can control your response", explain: "but 表转折。" }
    ],
    tips: [
      "attitude → 态度。",
      "positive → 积极的；negative 消极的。"
    ],
    quiz: {
      choice: [
        { q: "What does your attitude affect?", options: ["The way you see situations", "How tall you are", "The weather", "Nothing"], answer: 0 },
        { q: "What does a positive attitude help you do?", options: ["Find solutions", "Give up faster", "Complain more", "Hide"], answer: 0 },
        { q: "What can you control?", options: ["Your response", "Every event", "Other people", "The past"], answer: 0 }
      ],
      fill: [
        { q: "You can control your r______ to events.", answer: "response" }
      ],
      writing: { prompt: "Describe how a good attitude helps you when things go wrong. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在租车行租车",
      situationZh: "你在租车行想租一天车。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help today?", zh: "你好，今天需要什么帮助？" },
        { role: "user", en: "I'd like to rent a car for one day.", zh: "我想租一天车。", keywords: ["rent", "day"] },
        { role: "clerk", en: "Do you have a driver's license?", zh: "有驾照吗？" },
        { role: "user", en: "Yes, here it is.", zh: "有，给你。", keywords: ["license"] },
        { role: "clerk", en: "The small car is 200 yuan a day with insurance.", zh: "小车含保险每天 200 元。" },
        { role: "user", en: "That works. When can I pick it up?", zh: "可以的。什么时候能取车？", keywords: ["pick up"] },
        { role: "clerk", en: "Right now. Please sign here.", zh: "现在就可以。请在这里签字。" }
      ],
      tips: [
        "rent = 租。",
        "driver's license = 驾照。"
      ]
    },
    {
      scene: "在书店退换书",
      situationZh: "你想换一本有破损的练习册。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "This workbook has a damaged cover.", zh: "这本练习册封面破损了。", keywords: ["workbook", "damaged"] },
        { role: "clerk", en: "Let me see. Yes, that's damaged. Would you like an exchange?", zh: "我看看。是的，确实破损。你需要换一本吗？" },
        { role: "user", en: "Yes, please.", zh: "是的。", keywords: ["exchange"] },
        { role: "clerk", en: "Here's a new one. Do you have the receipt?", zh: "这是一本新的。有收据吗？" },
        { role: "user", en: "Yes, here you go.", zh: "有，给你。", keywords: ["receipt"] },
        { role: "clerk", en: "All set. Sorry for the trouble.", zh: "办好了。抱歉给您添麻烦。" }
      ],
      tips: [
        "workbook = 练习册。",
        "damaged = 破损的。"
      ]
    }
  ]
},
// ===================== 第 25 天 =====================
{
  words: [
    { word: "abstain", phonetic: "/əbˈsteɪn/", meaning: "v. 克制；放弃", example: "He abstained from sweets.", exampleZh: "他戒掉了甜食。" },
    { word: "brevity", phonetic: "/ˈbrevəti/", meaning: "n. 简洁；短暂", example: "Brevity is the key to clarity.", exampleZh: "简洁是清晰的关键。" },
    { word: "contemplate", phonetic: "/ˈkɒntəmpleɪt/", meaning: "v. 沉思；考虑", example: "She contemplated the offer.", exampleZh: "她考虑了这个提议。" },
    { word: "discern", phonetic: "/dɪˈsɜːn/", meaning: "v. 辨别；看出", example: "I can discern a pattern.", exampleZh: "我能看出一个规律。" },
    { word: "evince", phonetic: "/ɪˈvɪns/", meaning: "v. 表明；显示", example: "He evinced great interest.", exampleZh: "他表现出浓厚兴趣。" },
    { word: "fervent", phonetic: "/ˈfɜːvənt/", meaning: "adj. 热烈的；强烈的", example: "She is a fervent supporter.", exampleZh: "她是一位热忱的支持者。" },
    { word: "garrulous", phonetic: "/ˈɡærələs/", meaning: "adj. 饶舌的", example: "He is a garrulous speaker.", exampleZh: "他是个喋喋不休的演讲者。" },
    { word: "harbor", phonetic: "/ˈhɑːbə(r)/", meaning: "n. 港口 v. 怀有", example: "The harbor was full of ships.", exampleZh: "港口里停满了船。" },
    { word: "incumbent", phonetic: "/ɪnˈkʌmbənt/", meaning: "adj. 有责任的", example: "It is incumbent on us to help.", exampleZh: "我们有责任提供帮助。" },
    { word: "jubilant", phonetic: "/ˈdʒuːbɪlənt/", meaning: "adj. 欢呼的；喜气洋洋的", example: "The fans were jubilant.", exampleZh: "球迷们欢欣鼓舞。" },
    { word: "labyrinth", phonetic: "/ˈlæbərɪnθ/", meaning: "n. 迷宫；复杂结构", example: "The city is a labyrinth of streets.", exampleZh: "这座城市街道如迷宫。" },
    { word: "mundane", phonetic: "/mʌnˈdeɪn/", meaning: "adj. 平凡的；单调的", example: "He disliked mundane chores.", exampleZh: "他不喜欢单调的家务。" },
    { word: "obviate", phonetic: "/ˈɒbvieɪt/", meaning: "v. 排除；避免", example: "Planning obviates many problems.", exampleZh: "计划能避免许多问题。" },
    { word: "palpable", phonetic: "/ˈpælpəbl/", meaning: "adj. 触目可感的", example: "The relief was palpable.", exampleZh: "宽慰之情溢于言表。" },
    { word: "quiescent", phonetic: "/kwiˈesnt/", meaning: "adj. 静止的；沉寂的", example: "The volcano is quiescent.", exampleZh: "这座火山处于休眠状态。" },
    { word: "repudiate", phonetic: "/rɪˈpjuːdieɪt/", meaning: "v. 拒绝；否认", example: "He repudiated the claim.", exampleZh: "他否认了这种说法。" },
    { word: "salient", phonetic: "/ˈseɪliənt/", meaning: "adj. 显著的；突出的", example: "The salient point is clear.", exampleZh: "要点很明确。" },
    { word: "taciturn", phonetic: "/ˈtæsɪtɜːn/", meaning: "adj. 沉默寡言的", example: "He is a taciturn man.", exampleZh: "他是个沉默寡言的人。" },
    { word: "undulate", phonetic: "/ˈʌndjuleɪt/", meaning: "v. 起伏；波动", example: "The wheat undulated in the wind.", exampleZh: "麦子在风中起伏。" },
    { word: "venerate", phonetic: "/ˈvenəreɪt/", meaning: "v. 崇敬", example: "They venerate their ancestors.", exampleZh: "他们崇敬祖先。" }
  ],
  article: {
    title: "Learning a Language Through Music",
    titleZh: "通过音乐学习语言",
    paragraphs: [
      { en: "Music is one of the most enjoyable ways to learn a language.", zh: "音乐是学语言最愉快的方式之一。" },
      { en: "Songs help you remember words and phrases naturally.", zh: "歌曲帮你自然地记住单词和短语。" },
      { en: "Repeating lyrics trains your listening and pronunciation.", zh: "重复歌词能锻炼你的听力和发音。" },
      { en: "So listen to your favorite songs in English and sing along.", zh: "所以多听你喜欢的英文歌曲，并跟着唱吧。" }
    ],
    phrases: [
      { phrase: "remember words", meaning: "记住单词" },
      { phrase: "repeat lyrics", meaning: "重复歌词" },
      { phrase: "sing along", meaning: "跟着唱" }
    ],
    grammar: [
      { point: "one of the most enjoyable ways", explain: "one of + 最高级 + 复数名词。" },
      { point: "So listen to your favorite songs", explain: "祈使句，so 表承接。" }
    ],
    tips: [
      "lyrics → 歌词。",
      "sing along = 跟着唱。"
    ],
    quiz: {
      choice: [
        { q: "What do songs help you do?", options: ["Remember words naturally", "Forget everything", "Sleep better", "Cook"], answer: 0 },
        { q: "What does repeating lyrics train?", options: ["Listening and pronunciation", "Cooking", "Driving", "Skipping"], answer: 0 },
        { q: "What should you do with English songs?", options: ["Listen and sing along", "Ignore them", "Record signing", "Delete them"], answer: 0 }
      ],
      fill: [
        { q: "Songs help you r______ words and phrases.", answer: "remember" }
      ],
      writing: { prompt: "Describe how music helps you learn English. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在公司开办公用品",
      situationZh: "你向前台申领新的办公用品。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what do you need?", zh: "你好，需要什么？" },
        { role: "user", en: "I'd like a new notebook and a pen.", zh: "我想要一个新的笔记本和一支笔。", keywords: ["notebook", "pen"] },
        { role: "clerk", en: "Sure. Please sign the request form.", zh: "好的，请在申请表上签字。" },
        { role: "user", en: "Where do I sign?", zh: "在哪里签字？", keywords: ["sign"] },
        { role: "clerk", en: "Right at the bottom line.", zh: "在最下面一行。" },
        { role: "user", en: "Done. Thank you.", zh: "签好了，谢谢。", keywords: ["thank"] }
      ],
      tips: [
        "request form = 申请表。",
        "supplies = 用品。"
      ]
    },
    {
      scene: "在运动鞋店试鞋",
      situationZh: "你在运动鞋店试穿并询问尺码。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, need help with sizes?", zh: "你好，需要尺码方面的帮助吗？" },
        { role: "user", en: "Yes, I'd like to try size 42.", zh: "是的，我想试试 42 码。", keywords: ["42", "size"] },
        { role: "clerk", en: "Here you are. How do they feel?", zh: "给你。感觉怎么样？" },
        { role: "user", en: "A bit tight. Do you have 43?", zh: "有点紧，有 43 码吗？", keywords: ["tight", "43"] },
        { role: "clerk", en: "Yes, let me get them.", zh: "有，我去拿。" },
        { role: "user", en: "This pair fits well. How much?", zh: "这双很合脚，多少钱？", keywords: ["fits", "how much"] },
        { role: "clerk", en: "They're 299 yuan, on sale this week.", zh: "299 元，本周特价。" }
      ],
      tips: [
        "size = 尺码。",
        "on sale = 特价。"
      ]
    }
  ]
},
// ===================== 第 26 天 =====================
{
  words: [
    { word: "recycle", phonetic: "/ˌriːˈsaɪkl/", meaning: "v. 回收利用", example: "Please recycle the paper.", exampleZh: "请把纸回收利用。" },
    { word: "plastic", phonetic: "/ˈplæstɪk/", meaning: "n. 塑料", example: "This bottle is made of plastic.", exampleZh: "这个瓶子是塑料做的。" },
    { word: "waste", phonetic: "/weɪst/", meaning: "n. 浪费；废物 v. 浪费", example: "Don't waste water.", exampleZh: "不要浪费水。" },
    { word: "pollute", phonetic: "/pəˈluːt/", meaning: "v. 污染", example: "Cars pollute the air.", exampleZh: "汽车污染空气。" },
    { word: "environment", phonetic: "/ɪnˈvaɪrənmənt/", meaning: "n. 环境", example: "We must protect the environment.", exampleZh: "我们必须保护环境。" },
    { word: "reduce", phonetic: "/rɪˈdjuːs/", meaning: "v. 减少", example: "Try to reduce your waste.", exampleZh: "尽量减少你的浪费。" },
    { word: "protect", phonetic: "/prəˈtekt/", meaning: "v. 保护", example: "We should protect the trees.", exampleZh: "我们应该保护树木。" },
    { word: "green", phonetic: "/ɡriːn/", meaning: "adj. 绿色的；环保的", example: "The hills are green in spring.", exampleZh: "春天山丘是绿色的。" },
    { word: "save", phonetic: "/seɪv/", meaning: "v. 节约；节省", example: "Turn off lights to save energy.", exampleZh: "关灯以节约能源。" },
    { word: "energy", phonetic: "/ˈenədʒi/", meaning: "n. 能源；能量", example: "Sunlight gives us clean energy.", exampleZh: "阳光给我们清洁的能源。" },
    { word: "natural", phonetic: "/ˈnætʃrəl/", meaning: "adj. 自然的", example: "This is a natural forest.", exampleZh: "这是一片天然森林。" },
    { word: "resource", phonetic: "/rɪˈsɔːs/", meaning: "n. 资源", example: "Water is a precious resource.", exampleZh: "水是珍贵资源。" },
    { word: "garbage", phonetic: "/ˈɡɑːbɪdʒ/", meaning: "n. 垃圾", example: "Take the garbage out.", exampleZh: "把垃圾拿出去。" },
    { word: "litter", phonetic: "/ˈlɪtə(r)/", meaning: "v. 乱扔 n. 垃圾", example: "Please don't litter.", exampleZh: "请不要乱扔垃圾。" },
    { word: "throw", phonetic: "/θrəʊ/", meaning: "v. 扔", example: "Throw the bottle into the bin.", exampleZh: "把瓶子扔进垃圾桶。" },
    { word: "sort", phonetic: "/sɔːt/", meaning: "v. 分类", example: "We sort the waste at home.", exampleZh: "我们在家对垃圾进行分类。" },
    { word: "clean", phonetic: "/kliːn/", meaning: "adj. 干净的 v. 清理", example: "The river is clean again.", exampleZh: "河水又清澈了。" },
    { word: "earth", phonetic: "/ɜːθ/", meaning: "n. 地球；泥土", example: "We live on the earth.", exampleZh: "我们生活在地球上。" },
    { word: "climate", phonetic: "/ˈklaɪmət/", meaning: "n. 气候", example: "The climate is changing.", exampleZh: "气候正在变化。" },
    { word: "planet", phonetic: "/ˈplænɪt/", meaning: "n. 行星；地球", example: "Earth is our home planet.", exampleZh: "地球是我们的家园行星。" }
  ],
  article: {
    title: "Small Actions for a Greener Earth",
    titleZh: "为更绿色的地球做小行动",
    paragraphs: [
      { en: "Our actions can help or hurt the earth.", zh: "我们的行为既能帮助地球，也能伤害地球。" },
      { en: "Simple habits like recycling and saving energy make a big difference.", zh: "比如回收利用和节约能源这样简单的习惯，会产生很大的不同。" },
      { en: "When we reduce waste and reuse things, we protect our resources.", zh: "当我们减少浪费、重复使用物品时，我们就在保护资源。" },
      { en: "Let's all do our part to keep the planet clean and green.", zh: "让我们一起尽一份力，让地球保持干净和绿色。" }
    ],
    phrases: [
      { phrase: "make a big difference", meaning: "产生很大的不同" },
      { phrase: "reduce waste", meaning: "减少浪费" },
      { phrase: "do our part", meaning: "尽自己的一份力" }
    ],
    grammar: [
      { point: "like recycling and saving energy", explain: "介词 like + 动名词短语表列举。" },
      { point: "Let's all do our part", explain: "Let's + 动词原形表建议。" }
    ],
    tips: [
      "recycle → 回收利用；reuse 再利用。",
      "protect the earth = 保护地球。"
    ],
    quiz: {
      choice: [
        { q: "What can small habits like recycling do?", options: ["Make a big difference", "Hurt the earth", "Do nothing", "Cost more"], answer: 0 },
        { q: "How do we protect our resources?", options: ["Reduce waste and reuse things", "Throw everything away", "Use more plastic", "Ignore them"], answer: 0 },
        { q: "What should we keep the planet?", options: ["Clean and green", "Dirty", "Noisy", "Empty"], answer: 0 }
      ],
      fill: [
        { q: "Recycling and saving energy make a b______ difference.", answer: "big" }
      ],
      writing: { prompt: "Describe three small actions you can take to protect the environment. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在超市拒绝塑料购物袋",
      situationZh: "你在超市结账时带着环保袋，拒绝使用塑料袋。",
      roles: { clerk: "收银员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, would you like a plastic bag?", zh: "你好，需要塑料袋吗？" },
        { role: "user", en: "No, thanks. I brought my own bag.", zh: "不用了，谢谢。我带了环保袋。", keywords: ["own", "bag"] },
        { role: "clerk", en: "Good idea. That helps the environment.", zh: "好主意，这样对环境好。" },
        { role: "user", en: "How much is a cloth bag anyway?", zh: "那布袋多少钱呀？", keywords: ["cloth bag"] },
        { role: "clerk", en: "Cloth bags are 5 yuan each. Would you like one?", zh: "布袋每个 5 元，要一个吗？" },
        { role: "user", en: "Yes, please. I'll reuse it for shopping.", zh: "好的，我要一个，买东西时重复使用。", keywords: ["reuse", "shopping"] },
        { role: "clerk", en: "Great, that's 5 yuan more. Here you go.", zh: "好的，加 5 元，给你。" }
      ],
      tips: [
        "cloth bag = 布袋子。",
        "reuse = 重复使用。"
      ]
    },
    {
      scene: "在垃圾站分类投放垃圾",
      situationZh: "你在小区的垃圾分类点确认每种垃圾该扔进哪个桶。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, do you need help sorting?", zh: "你好，需要帮忙分类吗？" },
        { role: "user", en: "Yes. Where should these bottles go?", zh: "是的，这些瓶子应该放哪里？", keywords: ["bottles", "where"] },
        { role: "clerk", en: "Empty plastic bottles go in the blue bin.", zh: "空的塑料瓶放进蓝色桶。" },
        { role: "user", en: "What about this banana peel?", zh: "那这个香蕉皮呢？", keywords: ["peel"] },
        { role: "clerk", en: "Food waste goes in the green bin.", zh: "厨余垃圾放进绿色桶。" },
        { role: "user", en: "And this old newspaper?", zh: "那这张旧报纸呢？", keywords: ["newspaper"] },
        { role: "clerk", en: "Paper goes in the blue bin with bottles.", zh: "纸张和瓶子一起放蓝色桶。" }
      ],
      tips: [
        "sort = 分类。",
        "food waste = 厨余垃圾。"
      ]
    }
  ]
},
// ===================== 第 27 天 =====================
{
  words: [
    { word: "technology", phonetic: "/tekˈnɒlədʒi/", meaning: "n. 科技", example: "Technology changes our lives.", exampleZh: "科技改变我们的生活。" },
    { word: "device", phonetic: "/dɪˈvaɪs/", meaning: "n. 设备", example: "This device is easy to use.", exampleZh: "这个设备很好用。" },
    { word: "screen", phonetic: "/skriːn/", meaning: "n. 屏幕", example: "Don't stare at the screen too long.", exampleZh: "别盯着屏幕太久。" },
    { word: "app", phonetic: "/æp/", meaning: "n. 应用软件", example: "I use a study app every day.", exampleZh: "我每天用一个学习应用。" },
    { word: "download", phonetic: "/ˌdaʊnˈləʊd/", meaning: "v. 下载", example: "Download the file to your phone.", exampleZh: "把文件下载到手机。" },
    { word: "upload", phonetic: "/ˌʌpˈləʊd/", meaning: "v. 上传", example: "Please upload your photos.", exampleZh: "请上传你的照片。" },
    { word: "data", phonetic: "/ˈdeɪtə/", meaning: "n. 数据", example: "The app saves your data.", exampleZh: "这个应用保存你的数据。" },
    { word: "network", phonetic: "/ˈnetwɜːk/", meaning: "n. 网络", example: "The network is very slow today.", exampleZh: "今天网络很慢。" },
    { word: "signal", phonetic: "/ˈsɪɡnəl/", meaning: "n. 信号", example: "I have no signal here.", exampleZh: "这里没有信号。" },
    { word: "battery", phonetic: "/ˈbætəri/", meaning: "n. 电池", example: "My battery is running low.", exampleZh: "我的电池快没电了。" },
    { word: "charge", phonetic: "/tʃɑːdʒ/", meaning: "v. 充电", example: "I need to charge my phone.", exampleZh: "我需要给手机充电。" },
    { word: "update", phonetic: "/ˌʌpˈdeɪt/", meaning: "n. 更新", example: "Install the latest update.", exampleZh: "安装最新更新。" },
    { word: "robot", phonetic: "/ˈrəʊbɒt/", meaning: "n. 机器人", example: "The robot can clean the floor.", exampleZh: "这个机器人会扫地。" },
    { word: "smart", phonetic: "/smɑːt/", meaning: "adj. 智能的；聪明的", example: "My smart watch tracks my steps.", exampleZh: "我的智能手表记录步数。" },
    { word: "online", phonetic: "/ˌɒnˈlaɪn/", meaning: "adj. 在线的", example: "I bought the book online.", exampleZh: "我在网上买了这本书。" },
    { word: "search", phonetic: "/sɜːtʃ/", meaning: "v. 搜索", example: "Search for the answer online.", exampleZh: "在网上搜索答案。" },
    { word: "connect", phonetic: "/kəˈnekt/", meaning: "v. 连接", example: "This app connects us with friends.", exampleZh: "这个应用把我们和朋友联系起来。" },
    { word: "keyboard", phonetic: "/ˈkiːbɔːd/", meaning: "n. 键盘", example: "The keyboard is new.", exampleZh: "这个键盘是新的。" },
    { word: "camera", phonetic: "/ˈkæmərə/", meaning: "n. 相机", example: "The camera takes clear photos.", exampleZh: "这个相机拍照清晰。" },
    { word: "message", phonetic: "/ˈmesɪdʒ/", meaning: "n. 信息", example: "Send me a message later.", exampleZh: "稍后给我发个消息。" }
  ],
  article: {
    title: "Technology Makes Life Easier",
    titleZh: "科技让生活更方便",
    paragraphs: [
      { en: "Technology is all around us today.", zh: "如今科技无处不在。" },
      { en: "We use phones, apps and computers to study and work.", zh: "我们用手机、应用和电脑来学习和工作。" },
      { en: "With the internet, we can connect with people and find information quickly.", zh: "有了网络，我们能快速与人联系并查找信息。" },
      { en: "Used wisely, technology helps us live better.", zh: "只要善加利用，科技能帮助我们生活得更好。" }
    ],
    phrases: [
      { phrase: "find information", meaning: "查找信息" },
      { phrase: "connect with people", meaning: "与人联系" },
      { phrase: "used wisely", meaning: "善加利用" }
    ],
    grammar: [
      { point: "With the internet, we can connect...", explain: "with 表示‘借助、凭借’工具或方式。" },
      { point: "Used wisely, technology helps us", explain: "过去分词作状语表条件，句子主语为逻辑主语。" }
    ],
    tips: [
      "online → 在线的；offline 离线的。",
      "search for = 搜索、寻找。"
    ],
    quiz: {
      choice: [
        { q: "What do we use to study and work?", options: ["Phones, apps and computers", "Only paper", "Nothing", "Cars"], answer: 0 },
        { q: "What can we do with the internet?", options: ["Connect with people and find information", "Never communicate", "Lose all data", "Stop thinking"], answer: 0 },
        { q: "How should we use technology?", options: ["Wisely", "Always worry", "Throw it away", "Ignore it"], answer: 0 }
      ],
      fill: [
        { q: "The internet helps us f______ information quickly.", answer: "find" }
      ],
      writing: { prompt: "Describe how technology helps you in daily life. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在手机店咨询套餐",
      situationZh: "你在手机店想办理一个流量套餐。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what can I do for you?", zh: "你好，有什么可以帮你？" },
        { role: "user", en: "I'd like to buy some mobile data.", zh: "我想买一些手机流量。", keywords: ["mobile", "data"] },
        { role: "clerk", en: "We have a 10 GB plan for 39 yuan a month.", zh: "我们有每月 39 元 10 GB 的套餐。" },
        { role: "user", en: "How fast is the network?", zh: "网络速度怎么样？", keywords: ["network", "fast"] },
        { role: "clerk", en: "It's 5G, so it's very fast.", zh: "是 5G，速度很快。" },
        { role: "user", en: "Great. I'll take that plan.", zh: "太好了，我要这个套餐。", keywords: ["plan"] },
        { role: "clerk", en: "Please show your ID to register.", zh: "请出示身份证办理。" }
      ],
      tips: [
        "mobile data = 移动流量。",
        "plan = 套餐；计划。"
      ]
    },
    {
      scene: "在电脑店升级配置",
      situationZh: "你想给家里的电脑升级内存和检查电池。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, how can I help?", zh: "你好，需要什么帮助？" },
        { role: "user", en: "My computer is slow. Can you help me?", zh: "我电脑很卡，能帮帮我吗？", keywords: ["slow", "help"] },
        { role: "clerk", en: "We can add more memory for you.", zh: "我们可以帮你加内存。" },
        { role: "user", en: "How long will that take?", zh: "那要多久？", keywords: ["how long", "take"] },
        { role: "clerk", en: "About an hour. It will run much faster.", zh: "大约一小时，之后会快很多。" },
        { role: "user", en: "Please check my battery too.", zh: "也帮我检查一下电池吧。", keywords: ["check", "battery"] },
        { role: "clerk", en: "Sure, I'll take a look.", zh: "好的，我看一下。" }
      ],
      tips: [
        "memory = 内存。",
        "battery = 电池。"
      ]
    }
  ]
},
// ===================== 第 28 天 =====================
{
  words: [
    { word: "health", phonetic: "/helθ/", meaning: "n. 健康", example: "Health is more important than money.", exampleZh: "健康比金钱更重要。" },
    { word: "healthy", phonetic: "/ˈhelθi/", meaning: "adj. 健康的", example: "Exercise keeps you healthy.", exampleZh: "锻炼让你保持健康。" },
    { word: "exercise", phonetic: "/ˈeksəsaɪz/", meaning: "n. 锻炼", example: "Morning exercise is good for you.", exampleZh: "晨练对你有好处。" },
    { word: "rest", phonetic: "/rest/", meaning: "n. 休息", example: "Take a rest after work.", exampleZh: "下班后休息一下。" },
    { word: "sleep", phonetic: "/sliːp/", meaning: "v. 睡觉", example: "I sleep eight hours a night.", exampleZh: "我每晚睡八小时。" },
    { word: "food", phonetic: "/fuːd/", meaning: "n. 食物", example: "Fresh food is good for the body.", exampleZh: "新鲜食物对身体有好处。" },
    { word: "water", phonetic: "/ˈwɔːtə(r)/", meaning: "n. 水", example: "Drink more water every day.", exampleZh: "每天多喝水。" },
    { word: "fruit", phonetic: "/fruːt/", meaning: "n. 水果", example: "Fruit is full of vitamins.", exampleZh: "水果富含维生素。" },
    { word: "vegetable", phonetic: "/ˈvedʒtəbl/", meaning: "n. 蔬菜", example: "Eat at least one vegetable a day.", exampleZh: "每天至少吃一种蔬菜。" },
    { word: "body", phonetic: "/ˈbɒdi/", meaning: "n. 身体", example: "The body needs exercise.", exampleZh: "身体需要锻炼。" },
    { word: "mind", phonetic: "/maɪnd/", meaning: "n. 头脑", example: "Reading keeps your mind active.", exampleZh: "阅读让头脑保持活跃。" },
    { word: "habit", phonetic: "/ˈhæbɪt/", meaning: "n. 习惯", example: "Good habits start small.", exampleZh: "好习惯从小事开始。" },
    { word: "medicine", phonetic: "/ˈmedsn/", meaning: "n. 药", example: "Take your medicine on time.", exampleZh: "按时吃药。" },
    { word: "doctor", phonetic: "/ˈdɒktə(r)/", meaning: "n. 医生", example: "The doctor checked my heart.", exampleZh: "医生检查了我的心脏。" },
    { word: "check-up", phonetic: "/ˈtʃek ʌp/", meaning: "n. 体检", example: "I have a health check-up once a year.", exampleZh: "我每年做一次健康体检。" },
    { word: "fresh", phonetic: "/freʃ/", meaning: "adj. 新鲜的", example: "Fresh air makes you feel good.", exampleZh: "新鲜空气让人感觉舒服。" },
    { word: "illness", phonetic: "/ˈɪlnəs/", meaning: "n. 疾病", example: "Illness can be prevented.", exampleZh: "疾病是可以预防的。" },
    { word: "pain", phonetic: "/peɪn/", meaning: "n. 疼痛", example: "I feel some pain in my leg.", exampleZh: "我腿有点疼。" },
    { word: "smile", phonetic: "/smaɪl/", meaning: "v. 微笑", example: "A smile keeps you happy.", exampleZh: "微笑让你保持快乐。" },
    { word: "active", phonetic: "/ˈæktɪv/", meaning: "adj. 活跃的", example: "Stay active and keep moving.", exampleZh: "保持活跃，多活动。" }
  ],
  article: {
    title: "Healthy Habits Keep You Strong",
    titleZh: "健康习惯让你保持强壮",
    paragraphs: [
      { en: "Good health is something everyone wants.", zh: "健康是每个人都想要的。" },
      { en: "Eating vegetables, drinking water and resting keep your body in good shape.", zh: "吃蔬菜、喝水、休息能让你的身体保持良好的状态。" },
      { en: "Regular exercise and enough sleep help your mind stay calm and strong.", zh: "规律运动和充足睡眠能帮你保持头脑平静而有力。" },
      { en: "Small healthy habits every day build a stronger you.", zh: "每天一点健康小习惯，成就更健康的你。" }
    ],
    phrases: [
      { phrase: "in good shape", meaning: "状态良好" },
      { phrase: "enough sleep", meaning: "充足的睡眠" },
      { phrase: "keep ... strong", meaning: "让……保持强壮" }
    ],
    grammar: [
      { point: "Eating vegetables, drinking water and resting keep...", explain: "多个动名词并列作主语，谓语用复数。" },
      { point: "help your mind stay calm", explain: "help sb. do sth.= 帮助某人做某事，to 可省略。" }
    ],
    tips: [
      "in shape = 状态好；fit = 健康的。",
      "regular = 规律的；定期的。"
    ],
    quiz: {
      choice: [
        { q: "What keeps your body in good shape?", options: ["Vegetables, water and rest", "Junk food", "No sleep", "Sitting all day"], answer: 0 },
        { q: "What helps your mind stay calm and strong?", options: ["Regular exercise and sleep", "Worrying", "Staying up", "Forgetting to eat"], answer: 0 },
        { q: "How do small habits help you?", options: ["Build a stronger you", "Change nothing", "Make you weak", "Cost a lot"], answer: 0 }
      ],
      fill: [
        { q: "Regular exercise and enough s______ help your mind.", answer: "sleep" }
      ],
      writing: { prompt: "Describe one healthy habit you want to start. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在诊所看医生",
      situationZh: "你因头痛到诊所看医生。",
      roles: { clerk: "医生", user: "我" },
      turns: [
        { role: "clerk", en: "Please sit down. What's wrong?", zh: "请坐。你哪里不舒服？" },
        { role: "user", en: "I have a bad headache.", zh: "我头痛得厉害。", keywords: ["headache", "bad"] },
        { role: "clerk", en: "Have you slept well recently?", zh: "最近睡得好吗？" },
        { role: "user", en: "Not really. I sleep too late.", zh: "不太好，我睡得太晚。", keywords: ["sleep", "late"] },
        { role: "clerk", en: "Try to rest more and drink water.", zh: "尽量多休息、多喝水。" },
        { role: "user", en: "Do I need medicine?", zh: "我需要吃药吗？", keywords: ["medicine", "need"] },
        { role: "clerk", en: "If it continues, come back in two days.", zh: "如果还不好，两天后再来。" }
      ],
      tips: [
        "headache = 头痛。",
        "rest more = 多休息。"
      ]
    },
    {
      scene: "在健身房办卡",
      situationZh: "你想在健身房办一张月卡锻炼身体。",
      roles: { clerk: "教练", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! Are you interested in a gym card?", zh: "欢迎！对办健身卡感兴趣吗？" },
        { role: "user", en: "Yes. How much is a monthly card?", zh: "是的，月卡多少钱？", keywords: ["monthly", "card"] },
        { role: "clerk", en: "It's 200 yuan a month, with free classes.", zh: "每月 200 元，含免费课程。" },
        { role: "user", en: "When can I exercise here?", zh: "我什么时候能来锻炼？", keywords: ["when", "exercise"] },
        { role: "clerk", en: "We're open from 7 am to 10 pm.", zh: "我们早 7 点到晚 10 点营业。" },
        { role: "user", en: "That fits my schedule.", zh: "这和我的时间安排很合。", keywords: ["fits", "schedule"] },
        { role: "clerk", en: "Great, let's start today!", zh: "太好了，今天就行动起来吧！" }
      ],
      tips: [
        "gym = 健身房。",
        "schedule = 时间安排。"
      ]
    }
  ]
},
// ===================== 第 29 天 =====================
{
  words: [
    { word: "travel", phonetic: "/ˈtrævl/", meaning: "v. 旅行", example: "I love to travel in summer.", exampleZh: "我喜欢夏天去旅行。" },
    { word: "trip", phonetic: "/trɪp/", meaning: "n. 旅行；行程", example: "We had a great trip.", exampleZh: "我们度过了一次愉快的旅行。" },
    { word: "ticket", phonetic: "/ˈtɪkɪt/", meaning: "n. 票", example: "My train ticket is on the table.", exampleZh: "我的火车票在桌上。" },
    { word: "train", phonetic: "/treɪn/", meaning: "n. 火车", example: "The train leaves at six.", exampleZh: "火车六点开。" },
    { word: "plane", phonetic: "/pleɪn/", meaning: "n. 飞机", example: "The plane flies above the clouds.", exampleZh: "飞机在云层上方飞行。" },
    { word: "bus", phonetic: "/bʌs/", meaning: "n. 公共汽车", example: "Take the bus to the station.", exampleZh: "坐公交车去车站。" },
    { word: "airport", phonetic: "/ˈeəpɔːt/", meaning: "n. 机场", example: "Meet me at the airport.", exampleZh: "在机场接我。" },
    { word: "station", phonetic: "/ˈsteɪʃn/", meaning: "n. 车站", example: "The station is near the park.", exampleZh: "车站离公园很近。" },
    { word: "luggage", phonetic: "/ˈlʌɡɪdʒ/", meaning: "n. 行李", example: "Put your luggage on the rack.", exampleZh: "把行李放到架子上。" },
    { word: "suitcase", phonetic: "/ˈsuːtkeɪs/", meaning: "n. 行李箱", example: "I packed my suitcase last night.", exampleZh: "我昨晚收拾好行李箱。" },
    { word: "map", phonetic: "/mæp/", meaning: "n. 地图", example: "The map shows the road.", exampleZh: "地图显示了道路。" },
    { word: "hotel", phonetic: "/həʊˈtel/", meaning: "n. 旅馆", example: "We stayed in a small hotel.", exampleZh: "我们住在一家小旅馆。" },
    { word: "passport", phonetic: "/ˈpɑːspɔːt/", meaning: "n. 护照", example: "Don't forget your passport.", exampleZh: "别忘了带护照。" },
    { word: "guide", phonetic: "/ɡaɪd/", meaning: "n. 向导；指南", example: "The guide showed us around.", exampleZh: "向导带我们参观。" },
    { word: "view", phonetic: "/vjuː/", meaning: "n. 景色", example: "The view from the hill is beautiful.", exampleZh: "从山上看到的景色很美。" },
    { word: "enjoy", phonetic: "/ɪnˈdʒɔɪ/", meaning: "v. 享受", example: "Enjoy your time by the sea.", exampleZh: "享受在海边的时光。" },
    { word: "arrive", phonetic: "/əˈraɪv/", meaning: "v. 到达", example: "We will arrive before noon.", exampleZh: "我们中午前到达。" },
    { word: "leave", phonetic: "/liːv/", meaning: "v. 离开；动身", example: "We leave for the city tomorrow.", exampleZh: "我们明天动身去城里。" },
    { word: "book", phonetic: "/bʊk/", meaning: "v. 预订", example: "Please book a room for us.", exampleZh: "请给我们订一间房。" },
    { word: "island", phonetic: "/ˈaɪlənd/", meaning: "n. 岛屿", example: "The island is quiet and green.", exampleZh: "这座岛宁静而青翠。" }
  ],
  article: {
    title: "Plan a Trip, Enjoy the Journey",
    titleZh: "做好规划，享受旅程",
    paragraphs: [
      { en: "Traveling lets you see new places and meet new people.", zh: "旅行让你看到新的地方，结识新的人。" },
      { en: "Before you go, book your tickets and pack your luggage.", zh: "出发前，预订车票并收拾好行李。" },
      { en: "During the trip, take your time and enjoy the view.", zh: "旅途中，放慢脚步，欣赏风景。" },
      { en: "A well-planned trip gives you happy memories for years.", zh: "一场规划得当的旅行会带给你多年难忘的快乐回忆。" }
    ],
    phrases: [
      { phrase: "pack your luggage", meaning: "收拾行李" },
      { phrase: "enjoy the view", meaning: "欣赏风景" },
      { phrase: "happy memories", meaning: "快乐的回忆" }
    ],
    grammar: [
      { point: "Before you go, book your tickets", explain: "before + 时间状语从句，主句为祈使句。" },
      { point: "A well-planned trip gives you happy memories", explain: "well-planned 复合形容词作定语。" }
    ],
    tips: [
      "book = 预订（票/房间）。",
      "luggage = 行李（不可数名词）。"
    ],
    quiz: {
      choice: [
        { q: "What should you do before you go?", options: ["Book tickets and pack luggage", "Nothing", "Sleep late", "Forget your map"], answer: 0 },
        { q: "What should you do during the trip?", options: ["Take your time and enjoy the view", "Run everywhere", "Complain a lot", "Stay at home"], answer: 0 },
        { q: "What does a well-planned trip give you?", options: ["Happy memories", "A headache", "Heavy bags only", "Boring days"], answer: 0 }
      ],
      fill: [
        { q: "Before you go, book your t______ and pack.", answer: "tickets" }
      ],
      writing: { prompt: "Describe your dream trip and how you would plan it. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在车站买票",
      situationZh: "你在火车站买去上海的票。",
      roles: { clerk: "售票员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, where would you like to go?", zh: "你好，想去哪里？" },
        { role: "user", en: "One ticket to Shanghai, please.", zh: "请给我一张去上海的票。", keywords: ["ticket", "Shanghai"] },
        { role: "clerk", en: "Morning or afternoon train?", zh: "要上午还是下午的火车？" },
        { role: "user", en: "The morning one, please.", zh: "要上午那班。", keywords: ["morning", "train"] },
        { role: "clerk", en: "That's 350 yuan.", zh: "350 元。" },
        { role: "user", en: "Here you go.", zh: "给你钱。", keywords: ["here"] },
        { role: "clerk", en: "Here's your ticket and change. Have a nice trip!", zh: "这是你的票和找零，旅途愉快！" }
      ],
      tips: [
        "ticket = 车票。",
        "Have a nice trip = 旅途愉快。"
      ]
    },
    {
      scene: "在酒店办理入住",
      situationZh: "你在酒店前台办理入住手续。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome to our hotel. How can I help?", zh: "欢迎光临，有什么可以帮您？" },
        { role: "user", en: "I booked a room online.", zh: "我网上订了一间房。", keywords: ["booked", "online"] },
        { role: "clerk", en: "May I see your passport?", zh: "可以看一下您的护照吗？" },
        { role: "user", en: "Sure, here it is.", zh: "好的，给你。", keywords: ["passport", "here"] },
        { role: "clerk", en: "Your room is on the third floor.", zh: "您的房间在三楼。" },
        { role: "user", en: "When is breakfast served?", zh: "早餐几点供应？", keywords: ["breakfast", "when"] },
        { role: "clerk", en: "From 7 to 9 am. Enjoy your stay!", zh: "早 7 点到 9 点，祝您入住愉快！" }
      ],
      tips: [
        "check in = 办理入住。",
        "breakfast = 早餐。"
      ]
    }
  ]
},
// ===================== 第 30 天 =====================
{
  words: [
    { word: "dream", phonetic: "/driːm/", meaning: "n. 梦想", example: "Her dream is to see the sea.", exampleZh: "她的梦想是去看海。" },
    { word: "goal", phonetic: "/ɡəʊl/", meaning: "n. 目标", example: "My goal is to run every day.", exampleZh: "我的目标是每天跑步。" },
    { word: "hope", phonetic: "/həʊp/", meaning: "v. 希望", example: "I hope you succeed.", exampleZh: "我希望你成功。" },
    { word: "future", phonetic: "/ˈfjuːtʃə(r)/", meaning: "n. 未来", example: "We build our future through hard work.", exampleZh: "我们通过努力创造未来。" },
    { word: "plan", phonetic: "/plæn/", meaning: "n. 计划", example: "Make a plan and follow it.", exampleZh: "制定计划并照做。" },
    { word: "achieve", phonetic: "/əˈtʃiːv/", meaning: "v. 实现", example: "You can achieve anything with effort.", exampleZh: "只要努力，你能实现任何事。" },
    { word: "succeed", phonetic: "/səkˈsiːd/", meaning: "v. 成功", example: "Keep trying so that you can succeed.", exampleZh: "坚持尝试你就能成功。" },
    { word: "effort", phonetic: "/ˈefət/", meaning: "n. 努力", example: "Success needs effort.", exampleZh: "成功需要努力。" },
    { word: "hard", phonetic: "/hɑːd/", meaning: "adj. 努力的；坚硬的", example: "She studies hard every day.", exampleZh: "她每天努力学习。" },
    { word: "believe", phonetic: "/bɪˈliːv/", meaning: "v. 相信", example: "Believe in yourself.", exampleZh: "相信自己。" },
    { word: "chance", phonetic: "/tʃɑːns/", meaning: "n. 机会", example: "Everyone gets a chance.", exampleZh: "每个人都得到机会。" },
    { word: "courage", phonetic: "/ˈkʌrɪdʒ/", meaning: "n. 勇气", example: "It takes courage to start.", exampleZh: "开始需要勇气。" },
    { word: "always", phonetic: "/ˈɔːlweɪz/", meaning: "adv. 总是", example: "Always be kind to others.", exampleZh: "永远对人友善。" },
    { word: "try", phonetic: "/traɪ/", meaning: "v. 尝试", example: "Give it a try.", exampleZh: "试一试吧。" },
    { word: "keep", phonetic: "/kiːp/", meaning: "v. 保持", example: "Keep going and don't give up.", exampleZh: "继续前进，不要放弃。" },
    { word: "start", phonetic: "/stɑːt/", meaning: "v. 开始", example: "Today is a good day to start.", exampleZh: "今天是开始的好日子。" },
    { word: "grow", phonetic: "/ɡrəʊ/", meaning: "v. 成长", example: "You will grow with practice.", exampleZh: "你会随着练习而成长。" },
    { word: "shine", phonetic: "/ʃaɪn/", meaning: "v. 闪耀", example: "Let your skills shine.", exampleZh: "让你的才能闪光。" },
    { word: "proud", phonetic: "/praʊd/", meaning: "adj. 自豪的", example: "We are proud of you.", exampleZh: "我们为你自豪。" },
    { word: "heart", phonetic: "/hɑːt/", meaning: "n. 心；内心", example: "Follow your heart.", exampleZh: "遵从你的内心。" }
  ],
  article: {
    title: "Follow Your Dream",
    titleZh: "追随你的梦想",
    paragraphs: [
      { en: "Everyone has a dream in their heart.", zh: "每个人心里都有一个梦想。" },
      { en: "Dreams give us hope and a reason to work hard.", zh: "梦想给我们希望和努力的理由。" },
      { en: "To achieve a goal, you need courage, effort and patience.", zh: "要实现目标，你需要勇气、努力和耐心。" },
      { en: "Keep trying, believe in yourself, and your dream can come true.", zh: "坚持尝试，相信自己，你的梦想就能成真。" }
    ],
    phrases: [
      { phrase: "come true", meaning: "实现；成真" },
      { phrase: "believe in yourself", meaning: "相信自己" },
      { phrase: "work hard", meaning: "努力工作" }
    ],
    grammar: [
      { point: "Dreams give us hope and a reason to work hard", explain: "给双宾语，间接宾语 us，直接宾语 hope...。" },
      { point: "your dream can come true", explain: "come true 意为‘实现’，主语为梦想、愿望。" }
    ],
    tips: [
      "come true = 实现、成真。",
      "patience = 耐心。"
    ],
    quiz: {
      choice: [
        { q: "What do dreams give us?", options: ["Hope and a reason to work", "Nothing", "New clothes", "Only money"], answer: 0 },
        { q: "What do you need to achieve a goal?", options: ["Courage, effort and patience", "Luck only", "Giving up", "Sleep all day"], answer: 0 },
        { q: "How can your dream come true?", options: ["Keep trying and believe in yourself", "Stop trying", "Ignore your goal", "Run away"], answer: 0 }
      ],
      fill: [
        { q: "Believe in yourself and your dream can c______ true.", answer: "come" }
      ],
      writing: { prompt: "Describe a dream you have and how you plan to achieve it. Write 3-5 sentences." }
    }
  },
  scenarios: [
    {
      scene: "在职业咨询中心谈理想",
      situationZh: "你去职业咨询中心咨询想当老师的愿望。",
      roles: { clerk: "咨询师", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what would you like to talk about?", zh: "你好，想聊聊什么？" },
        { role: "user", en: "I dream of becoming a teacher.", zh: "我梦想成为一名老师。", keywords: ["dream", "teacher"] },
        { role: "clerk", en: "That's a great goal. What subject?", zh: "这是个很棒的目标，想教什么科目？" },
        { role: "user", en: "I love English and want to teach it.", zh: "我喜欢英语，想教英语。", keywords: ["English", "teach"] },
        { role: "clerk", en: "You'll need a teaching certificate.", zh: "你需要考取教师资格证。" },
        { role: "user", en: "How long does it take to get one?", zh: "拿到证书要多久？", keywords: ["how long", "certificate"] },
        { role: "clerk", en: "Usually about a year of study.", zh: "通常要学习一年左右。" }
      ],
      tips: [
        "dream of = 梦想……。",
        "certificate = 证书。"
      ]
    },
    {
      scene: "在学校课后报兴趣班",
      situationZh: "家长带你去报名美术兴趣班，因为你梦想当画家。",
      roles: { clerk: "老师", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what class are you interested in?", zh: "你好，你对什么课感兴趣？" },
        { role: "user", en: "My dream is to be a painter.", zh: "我的梦想是当画家。", keywords: ["dream", "painter"] },
        { role: "clerk", en: "Great, we have an art class on weekends.", zh: "很好，我们周末有美术课。" },
        { role: "user", en: "How much is it per month?", zh: "每个月多少钱？", keywords: ["how much", "month"] },
        { role: "clerk", en: "200 yuan a month, materials included.", zh: "每月 200 元，包含材料。" },
        { role: "user", en: "Can I try one class first?", zh: "我能先试听一节课吗？", keywords: ["try", "class"] },
        { role: "clerk", en: "Of course! Come this Saturday.", zh: "当然可以！这周六来吧。" }
      ],
      tips: [
        "painter = 画家。",
        "materials = 材料。"
      ]
    }
  ]
},
];
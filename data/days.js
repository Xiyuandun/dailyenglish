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
    },
    {
      scene: "快餐店点餐",
      situationZh: "你在快餐店点一份汉堡套餐和一杯可乐。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "May I take your order, please?", zh: "请问要点什么？" },
        { role: "user", en: "I'd like a burger meal, please.", zh: "请给我一份汉堡套餐。", keywords: ["burger", "meal"] },
        { role: "clerk", en: "What would you like to drink?", zh: "套餐里喝什么？" },
        { role: "user", en: "A cola with no ice, please.", zh: "一杯可乐，不加冰。", keywords: ["cola", "no ice"] },
        { role: "clerk", en: "For here or to go?", zh: "堂食还是带走？" },
        { role: "user", en: "To go, please.", zh: "带走。", keywords: ["to go"] },
        { role: "clerk", en: "That's 32 yuan. Please wait a moment.", zh: "一共 32 元，请稍等。" }
      ],
      tips: [
        "burger meal = 汉堡套餐。",
        "no ice = 不加冰；for here / to go = 堂食 / 外带。"
      ]
    },
    {
      scene: "电话订外卖",
      situationZh: "你在家打电话订一份外卖午餐。",
      roles: { clerk: "接线员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, delivery service. How can I help?", zh: "您好，订餐服务，有什么可以帮您？" },
        { role: "user", en: "I'd like to order some fried rice.", zh: "我想点一份炒饭。", keywords: ["order", "fried rice"] },
        { role: "clerk", en: "With meat or vegetables?", zh: "要荤的还是素的？" },
        { role: "user", en: "With chicken, please.", zh: "加鸡肉的。", keywords: ["chicken"] },
        { role: "clerk", en: "Leave it at the door or the front desk?", zh: "放在门口还是前台？" },
        { role: "user", en: "At my door, please.", zh: "放在我门口。", keywords: ["door"] },
        { role: "clerk", en: "It will arrive in about 30 minutes.", zh: "大约 30 分钟送到。" }
      ],
      tips: [
        "fried rice = 炒饭。",
        "delivery service = 送餐服务。"
      ]
    },
    {
      scene: "在甜品店买蛋糕",
      situationZh: "你在甜品店买一块芝士蛋糕和两杯奶茶。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what can I get for you?", zh: "你好，需要点什么？" },
        { role: "user", en: "A slice of cheesecake and two milk teas, please.", zh: "一块芝士蛋糕和两杯奶茶。", keywords: ["cheesecake", "milk teas"] },
        { role: "clerk", en: "What flavor of milk tea?", zh: "奶茶要什么口味？" },
        { role: "user", en: "One taro and one original, please.", zh: "一杯香芋味，一杯原味。", keywords: ["taro", "original"] },
        { role: "clerk", en: "Hot or iced?", zh: "要热的还是冰的？" },
        { role: "user", en: "Iced, please.", zh: "冰的，谢谢。", keywords: ["iced"] },
        { role: "clerk", en: "That comes to 66 yuan.", zh: "一共 66 元。" }
      ],
      tips: [
        "a slice of = 一块（切开食物）。",
        "taro flavor = 香芋口味。"
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
    },
    {
      scene: "在早餐店点餐",
      situationZh: "你在早餐店点一碗豆浆和两根油条。",
      roles: { clerk: "老板娘", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning! What would you like?", zh: "早上好！想吃什么？" },
        { role: "user", en: "A bowl of soy milk and two fried dough sticks, please.", zh: "我要一碗豆浆和两根油条。", keywords: ["soy milk", "fried dough sticks"] },
        { role: "clerk", en: "Anything to go with them?", zh: "还要配点什么吗？" },
        { role: "user", en: "An egg, please.", zh: "再来一个鸡蛋。", keywords: ["egg"] },
        { role: "clerk", en: "For here or to go?", zh: "堂食还是带走？" },
        { role: "user", en: "For here, please.", zh: "堂食。", keywords: ["here"] },
        { role: "clerk", en: "That's 9 yuan.", zh: "一共 9 元。" }
      ],
      tips: [
        "fried dough sticks = 油条。",
        "a bowl of = 一碗。"
      ]
    },
    {
      scene: "晨跑遇见邻居",
      situationZh: "你在公园晨跑，遇到邻居互相打招呼。",
      roles: { clerk: "邻居", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning! You're up early.", zh: "早上好！你起得真早。" },
        { role: "user", en: "Morning! I run here every day.", zh: "早上好！我每天在这里跑步。", keywords: ["run", "every day"] },
        { role: "clerk", en: "That's a great habit.", zh: "这是个好习惯。" },
        { role: "user", en: "Thanks. Do you exercise too?", zh: "谢谢，你也锻炼吗？", keywords: ["exercise"] },
        { role: "clerk", en: "I just take a walk after dinner.", zh: "我晚上饭后散散步。" },
        { role: "user", en: "Walking is good for you. See you tomorrow!", zh: "散步对身体好，明天见！", keywords: ["walking", "tomorrow"] },
        { role: "clerk", en: "See you tomorrow!", zh: "明天见！" }
      ],
      tips: [
        "up early = 起得早。",
        "take a walk = 散步。"
      ]
    },
    {
      scene: "在地铁自助售票机买票",
      situationZh: "你在自动售票机买一张单程地铁票。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Do you need help with the machine?", zh: "需要帮忙使用这台机器吗？" },
        { role: "user", en: "Yes, I want a single ticket to Central Park.", zh: "是的，我要一张去中央公园的单程票。", keywords: ["single ticket", "Central Park"] },
        { role: "clerk", en: "Select the station on the screen and pay.", zh: "在屏幕上选择站点并付款。" },
        { role: "user", en: "Does it accept cash?", zh: "支持现金吗？", keywords: ["cash"] },
        { role: "clerk", en: "Yes, put the coins here.", zh: "可以，把硬币放进这里。" },
        { role: "user", en: "Here's my ticket. Thank you!", zh: "这是我的票，谢谢！", keywords: ["ticket"] },
        { role: "clerk", en: "You're welcome. Enjoy your ride.", zh: "不客气，旅途愉快。" }
      ],
      tips: [
        "single ticket = 单程票。",
        "accept cash = 收取现金；coins = 硬币。"
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
    },
    {
      scene: "在车站改签车票",
      situationZh: "你到售票窗口把下午的车票改签到上午。",
      roles: { clerk: "售票员", user: "我" },
      turns: [
        { role: "clerk", en: "Next, please. How can I help?", zh: "下一位，需要什么帮助？" },
        { role: "user", en: "I'd like to change my ticket to an earlier train.", zh: "我想把车票改签到更早的列车。", keywords: ["change", "earlier"] },
        { role: "clerk", en: "Which train do you have now?", zh: "你现在的车次是？" },
        { role: "user", en: "The 3 pm train to Nanjing.", zh: "下午三点去南京的那班。", keywords: ["train", "Nanjing"] },
        { role: "clerk", en: "There's an 11 am train with seats left.", zh: "上午11点那班还有座位。" },
        { role: "user", en: "Great, I'll take that one.", zh: "太好了，我就要那班。", keywords: ["seats", "take"] },
        { role: "clerk", en: "There's a service fee of 5 yuan.", zh: "需要5元手续费。" },
        { role: "user", en: "That's fine. Thank you.", zh: "可以，谢谢。", keywords: ["fine", "thank"] }
      ],
      tips: [
        "change ticket = 改签车票。",
        "service fee = 手续费。"
      ]
    },
    {
      scene: "在邮局买邮票",
      situationZh: "你在邮局买一些邮票准备寄信。",
      roles: { clerk: "职员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what do you need?", zh: "你好，需要什么？" },
        { role: "user", en: "I'd like to buy some stamps, please.", zh: "我想买一些邮票。", keywords: ["buy", "stamps"] },
        { role: "clerk", en: "What kind of mail are you sending?", zh: "你要寄什么信？" },
        { role: "user", en: "A postcard and a regular letter.", zh: "一封明信片和一封普通信。", keywords: ["postcard", "regular letter"] },
        { role: "clerk", en: "You'll need two 1.2 yuan stamps.", zh: "你需要两张1.2元的邮票。" },
        { role: "user", en: "Here's the money.", zh: "给你钱。", keywords: ["money"] },
        { role: "clerk", en: "Here are your stamps.", zh: "这是你的邮票。" }
      ],
      tips: [
        "stamps = 邮票。",
        "postcard = 明信片。"
      ]
    },
    {
      scene: "在高铁上找座位",
      situationZh: "你上了高铁，向乘客确认自己的座位。",
      roles: { clerk: "乘客", user: "我" },
      turns: [
        { role: "clerk", en: "Excuse me, are you looking for your seat?", zh: "打扰一下，你是在找座位吗？" },
        { role: "user", en: "Yes, is this seat 8A?", zh: "是的，请问这里是8A座吗？", keywords: ["seat", "8A"] },
        { role: "clerk", en: "Let me check. I think this is 8B.", zh: "让我看看，这好像是8B。" },
        { role: "user", en: "Oh, I'm sorry. My seat must be in the next row.", zh: "哦，抱歉，我的座位应该在下一排。", keywords: ["sorry", "row"] },
        { role: "clerk", en: "No problem. Enjoy your trip.", zh: "没关系，旅途愉快。" },
        { role: "user", en: "Thank you so much.", zh: "非常感谢。", keywords: ["thank"] }
      ],
      tips: [
        "row = 排；座位排。",
        "seat number = 座位编号。"
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
    },
    {
      scene: "在游泳馆咨询办卡",
      situationZh: "你在游泳馆咨询怎么报名游泳课。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome to the swimming pool. How can I help?", zh: "欢迎来游泳馆，需要帮助吗？" },
        { role: "user", en: "I'd like to sign up for swimming lessons.", zh: "我想报名游泳课。", keywords: ["sign up", "swimming"] },
        { role: "clerk", en: "We have classes for beginners and for advanced swimmers.", zh: "我们有初级班和高级班。" },
        { role: "user", en: "Which one should I choose?", zh: "我应该选哪个？", keywords: ["choose"] },
        { role: "clerk", en: "The beginner class suits you better.", zh: "初级班会更适合你。" },
        { role: "user", en: "When do the classes start?", zh: "课程什么时候开始？", keywords: ["start"] },
        { role: "clerk", en: "Every Monday and Thursday evening from 7 pm.", zh: "每周一和周四晚上7点开始。" }
      ],
      tips: [
        "sign up for = 报名参加。",
        "beginner = 初学者。"
      ]
    },
    {
      scene: "在图书馆办理借书证",
      situationZh: "你在图书馆前台办一张新借书证。",
      roles: { clerk: "图书管理员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, may I help you?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "I'd like to apply for a library card.", zh: "我想办理一张借书证。", keywords: ["apply", "library card"] },
        { role: "clerk", en: "Please fill in this form with your name and ID.", zh: "请填写这张表，写上姓名和身份证号。" },
        { role: "user", en: "Do I need to bring a photo?", zh: "需要带照片吗？", keywords: ["photo"] },
        { role: "clerk", en: "Yes, one recent photo is required.", zh: "需要一张近照。" },
        { role: "user", en: "How long is the card valid?", zh: "借书证有效期多久？", keywords: ["valid"] },
        { role: "clerk", en: "It's valid for two years.", zh: "有效期两年。" }
      ],
      tips: [
        "library card = 借书证。",
        "be valid for = 有效期为。"
      ]
    },
    {
      scene: "在体育馆预订羽毛球场地",
      situationZh: "你打电话预订周六的羽毛球场地。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, City Sports Center. How can I help?", zh: "你好，市体育中心，有什么可以帮您？" },
        { role: "user", en: "I'd like to book a badminton court for this Saturday.", zh: "我想预订周六的羽毛球场。", keywords: ["book", "badminton court"] },
        { role: "clerk", en: "What time would you like?", zh: "您想预约几点？" },
        { role: "user", en: "Ten in the morning, if possible.", zh: "如果可能的话，上午十点。", keywords: ["morning", "ten"] },
        { role: "clerk", en: "Courts are available at 10 and at 11.", zh: "10点和11点都有场地。" },
        { role: "user", en: "I'll take the 10 o'clock one.", zh: "我约10点的。", keywords: ["available", "o'clock"] },
        { role: "clerk", en: "Great. Please arrive ten minutes early.", zh: "好的，请提前十分钟到。" }
      ],
      tips: [
        "badminton court = 羽毛球场。",
        "book / reserve = 预订。"
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
    },
    {
      scene: "在社区诊所打疫苗",
      situationZh: "你去社区诊所咨询并接种流感疫苗。",
      roles: { clerk: "护士", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help you today?", zh: "你好，今天需要什么帮助？" },
        { role: "user", en: "I'd like to get a flu shot, please.", zh: "我想打流感疫苗。", keywords: ["flu shot", "vaccine"] },
        { role: "clerk", en: "Have you had a cold recently?", zh: "你最近感冒过吗？" },
        { role: "user", en: "No, I've been feeling fine.", zh: "没有，我一直感觉很好。", keywords: ["fine"] },
        { role: "clerk", en: "Then you can be vaccinated today.", zh: "那今天就可以接种。" },
        { role: "user", en: "How much does it cost?", zh: "多少钱？", keywords: ["cost"] },
        { role: "clerk", en: "It's free for adults this season.", zh: "本季度成人免费。" },
        { role: "user", en: "That's good news. Thank you.", zh: "那太好了，谢谢。", keywords: ["good news", "thank"] }
      ],
      tips: [
        "flu shot = 流感疫苗针。",
        "get vaccinated = 接种疫苗。"
      ]
    },
    {
      scene: "在酒店办理退房",
      situationZh: "你在酒店前台办理退房并结账。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning. Are you checking out now?", zh: "早上好，您现在要退房吗？" },
        { role: "user", en: "Yes, room 502. Here is the key card.", zh: "是的，502房，这是房卡。", keywords: ["checking out", "key card"] },
        { role: "clerk", en: "Let me check the room. Please wait a moment.", zh: "让我检查一下房间，请稍等。" },
        { role: "user", en: "Sure. Was breakfast included in the price?", zh: "好的。早餐包含在房价里吗？", keywords: ["included", "breakfast"] },
        { role: "clerk", en: "Yes, it was already paid.", zh: "是的，已经包含在内了。" },
        { role: "user", en: "Great. Can I get a bill?", zh: "好的，请给我账单。", keywords: ["bill"] },
        { role: "clerk", en: "Here's your bill. Have a safe trip back!", zh: "这是您的账单，一路平安！" }
      ],
      tips: [
        "check out = 退房。",
        "key card = 房卡。"
      ]
    },
    {
      scene: "在药店咨询服药用量",
      situationZh: "你买了感冒药后向药剂师确认吃法。",
      roles: { clerk: "药剂师", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, did you find everything you need?", zh: "你好，都找到了吗？" },
        { role: "user", en: "Yes, but can you tell me how to take this medicine?", zh: "是的，但是能告诉我这个药怎么吃吗？", keywords: ["take", "medicine"] },
        { role: "clerk", en: "Take two tablets after each meal.", zh: "每餐后吃两片。" },
        { role: "user", en: "How many times a day?", zh: "一天几次？", keywords: ["times"] },
        { role: "clerk", en: "Three times a day, with warm water.", zh: "一天三次，用温水送服。" },
        { role: "user", en: "Should I avoid anything?", zh: "有什么需要忌口的吗？", keywords: ["avoid"] },
        { role: "clerk", en: "Don't drink alcohol while taking it.", zh: "服药期间不要喝酒。" },
        { role: "user", en: "Got it. Thanks a lot.", zh: "明白了，非常感谢。", keywords: ["got it"] }
      ],
      tips: [
        "tablet = 药片。",
        "with warm water = 用温水送服。"
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
    },
    {
      scene: "在服装店试衣服",
      situationZh: "你在服装店试穿一件卫衣，想看看是否合身。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi! Are you looking for something in particular?", zh: "你好！想找点什么呢？" },
        { role: "user", en: "I'd like to try this hoodie in a medium.", zh: "我想试一下这件卫衣的中码。", keywords: ["hoodie", "medium"] },
        { role: "clerk", en: "Sure, the fitting room is over there.", zh: "好的，试衣间在那边。" },
        { role: "user", en: "It's a bit small. Do you have a large?", zh: "有点小。你们有大码吗？", keywords: ["small", "large"] },
        { role: "clerk", en: "Let me check. Yes, we have one in navy blue.", zh: "我看看。有，是藏蓝色的。" },
        { role: "user", en: "Great, I'll take this one.", zh: "太好了，我就要这件。", keywords: ["take"] }
      ],
      tips: [
        "fitting room = 试衣间。",
        "in a medium / in a large = 中码 / 大码。"
      ]
    },
    {
      scene: "参加周末跑步俱乐部",
      situationZh: "你想加入一个周末跑步俱乐部来结识新朋友。",
      roles: { staff: "工作人员", user: "我" },
      turns: [
        { role: "staff", en: "Hello! Are you here for the running club?", zh: "你好！你是来报名跑步俱乐部的吗？" },
        { role: "user", en: "Yes, I'd like to join and meet new people.", zh: "是的，我想参加并认识新朋友。", keywords: ["join", "meet"] },
        { role: "staff", en: "We run every Sunday morning at the park.", zh: "我们每周日早上在公园跑步。" },
        { role: "user", en: "How long does each run take?", zh: "每次跑多久？", keywords: ["how long"] },
        { role: "staff", en: "About one hour, at a relaxed pace.", zh: "大约一小时，配速比较轻松。" },
        { role: "user", en: "Sounds good. Is there any sign-up fee?", zh: "听起来不错。需要报名费吗？", keywords: ["fee"] },
        { role: "staff", en: "It's free for the first month.", zh: "第一个月免费。" }
      ],
      tips: [
        "join a club = 加入社团。",
        "at a relaxed pace = 以轻松的配速。"
      ]
    },
    {
      scene: "在茶馆与朋友相聚",
      situationZh: "你和一位新朋友约在茶馆聊天，寻找共同话题。",
      roles: { waitress: "服务员", user: "我" },
      turns: [
        { role: "waitress", en: "Good afternoon, what would you like to drink?", zh: "下午好，想喝点什么？" },
        { role: "user", en: "Two cups of jasmine tea, please.", zh: "请来两杯茉莉花茶。", keywords: ["jasmine", "tea"] },
        { role: "waitress", en: "Anything to eat with it?", zh: "需要配点什么吃的吗？" },
        { role: "user", en: "Some cookies, please.", zh: "来点小饼干吧。", keywords: ["cookies"] },
        { role: "waitress", en: "Got it. I'll bring them right away.", zh: "好的，马上送过来。" },
        { role: "user", en: "Thanks. It's my treat today.", zh: "谢谢。今天我来请客。", keywords: ["treat"] }
      ],
      tips: [
        "jasmine tea = 茉莉花茶。",
        "it's my treat = 我请客。"
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
    { word: "jurisdiction", phonetic: "/ˌdʒʊərɪsˈdɪkʃn/", meaning: "n. 司法权；管辖权", example: "This case is outside our jurisdiction.", exampleZh: "这个案子不归我们管。" }
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
    },
    {
      scene: "在火车站寄存行李",
      situationZh: "你到得早，想把行李箱寄存在火车站后再去逛逛。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help?", zh: "你好，需要帮忙吗？" },
        { role: "user", en: "I'd like to store my suitcase for a few hours.", zh: "我想寄存几个小时的行李箱。", keywords: ["store", "suitcase"] },
        { role: "clerk", en: "Of course. The cost is ten yuan per hour.", zh: "可以，每小时十元。" },
        { role: "user", en: "How late is this counter open?", zh: "这个柜台开到几点？", keywords: ["how late"] },
        { role: "clerk", en: "Until 10 pm every night.", zh: "每天晚上开到十点。" },
        { role: "user", en: "Great. I'll pick it up around 6 pm.", zh: "好的，我大概晚上六点来取。", keywords: ["pick up"] },
        { role: "clerk", en: "Here's your claim ticket.", zh: "这是你的取物凭证。" },
        { role: "user", en: "Thank you!", zh: "谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "store luggage = 寄存行李。",
        "claim ticket = 取物凭证；pick up = 领取。"
      ]
    },
    {
      scene: "在书店预订新书",
      situationZh: "你去书店问能否预订一本刚出版的小说。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! Are you looking for a specific book?", zh: "欢迎光临！在找某本书吗？" },
        { role: "user", en: "Do you have the new novel by that author?", zh: "你们有那位作者的新小说吗？", keywords: ["author", "novel"] },
        { role: "clerk", en: "I'm afraid we just sold out.", zh: "抱歉，刚卖完了。" },
        { role: "user", en: "Can I order a copy?", zh: "我可以预订一本吗？", keywords: ["order"] },
        { role: "clerk", en: "Of course. It'll arrive in three days.", zh: "可以，三天后到货。" },
        { role: "user", en: "Great, please keep one for me.", zh: "好的，请帮我留一本。", keywords: ["keep"] },
        { role: "clerk", en: "Sure, may I have your name and phone number?", zh: "可以，能留一下姓名和电话吗？" }
      ],
      tips: [
        "sold out = 售罄。",
        "order a copy = 预订一本。"
      ]
    },
    {
      scene: "在社区图书馆办借书证",
      situationZh: "你想在社区图书馆办一张借书证来看书。",
      roles: { clerk: "图书管理员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help you today?", zh: "你好，今天需要办什么？" },
        { role: "user", en: "I'd like to sign up for a library card.", zh: "我想办一张借书证。", keywords: ["card", "sign up"] },
        { role: "clerk", en: "Sure, may I see your ID?", zh: "好的，可以看一下你的身份证吗？" },
        { role: "user", en: "Here is my ID card.", zh: "这是我的身份证。", keywords: ["ID"] },
        { role: "clerk", en: "Please fill in this form with your address.", zh: "请在表上填写你的地址。" },
        { role: "user", en: "How many books can I borrow at once?", zh: "一次最多能借几本？", keywords: ["borrow"] },
        { role: "clerk", en: "Up to five, for three weeks.", zh: "最多五本，借期三周。" },
        { role: "user", en: "Perfect, thank you!", zh: "太好了，谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "sign up for a card = 办证。",
        "borrow = 借（书）。"
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
    { word: "limit", phonetic: "/ˈlɪmɪt/", meaning: "v. 限制 n. 限度", example: "Limit your screen time.", exampleZh: "限制你的屏幕时间。" }
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
    },
    {
      scene: "在菜市场买菜",
      situationZh: "你去菜市场买一些新鲜蔬菜，询问价格。",
      roles: { clerk: "摊主", user: "我" },
      turns: [
        { role: "clerk", en: "Fresh vegetables here! What do you need?", zh: "新鲜蔬菜！要点什么？" },
        { role: "user", en: "How much are the tomatoes?", zh: "西红柿怎么卖？", keywords: ["how much", "tomatoes"] },
        { role: "clerk", en: "Four yuan a kilo.", zh: "四块钱一公斤。" },
        { role: "user", en: "And are these cucumbers fresh?", zh: "这些黄瓜新鲜吗？", keywords: ["fresh", "cucumbers"] },
        { role: "clerk", en: "Of course, they were picked this morning.", zh: "当然，今早刚摘的。" },
        { role: "user", en: "I'll take two kilos, please.", zh: "请给我来两公斤。", keywords: ["two", "kilos"] },
        { role: "clerk", en: "Here you go. Anything else?", zh: "给你。还要别的吗？" },
        { role: "user", en: "That's all, thanks.", zh: "就这些，谢谢。", keywords: ["thanks"] }
      ],
      tips: [
        "how much = 多少钱。",
        "a kilo = 一公斤。"
      ]
    },
    {
      scene: "在餐厅点蔬菜沙拉",
      situationZh: "你在餐厅想点一份蔬菜沙拉作为健康午餐。",
      roles: { waitress: "服务员", user: "我" },
      turns: [
        { role: "waitress", en: "Good afternoon, are you ready to order?", zh: "下午好，可以点餐了吗？" },
        { role: "user", en: "Yes, I'd like a vegetable salad.", zh: "是的，我想要一份蔬菜沙拉。", keywords: ["vegetable", "salad"] },
        { role: "waitress", en: "What dressing would you like?", zh: "要什么口味的酱汁？" },
        { role: "user", en: "Olive oil and vinegar, please.", zh: "请用橄榄油和醋。", keywords: ["olive oil"] },
        { role: "waitress", en: "Would you like any grilled chicken added?", zh: "需要加烤鸡肉吗？" },
        { role: "user", en: "No, just vegetables is fine.", zh: "不用，纯蔬菜就好。", keywords: ["vegetables"] },
        { role: "waitress", en: "Got it, any drinks?", zh: "好的，喝点什么吗？" },
        { role: "user", en: "A glass of water, please.", zh: "一杯水，谢谢。", keywords: ["water"] }
      ],
      tips: [
        "dressing = 沙拉酱。",
        "olive oil and vinegar = 橄榄油和醋。"
      ]
    },
    {
      scene: "在超市生鲜区称重",
      situationZh: "你在超市挑了些水果，需要自助称重贴价签。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Need some help with the scale?", zh: "需要帮忙称重吗？" },
        { role: "user", en: "Yes, how do I use this scale?", zh: "是的，这个秤怎么用？", keywords: ["scale"] },
        { role: "clerk", en: "Tap the fruit name on the screen first.", zh: "先点屏幕上的水果名称。" },
        { role: "user", en: "Then I place the bag on it?", zh: "然后把袋子放在上面吗？", keywords: ["on"] },
        { role: "clerk", en: "Exactly, and the price label prints itself.", zh: "对，价格标签会自动打印出来。" },
        { role: "user", en: "Great, that's simple. Thanks for your help.", zh: "太简单了，谢谢你的帮助。", keywords: ["simple", "help"] }
      ],
      tips: [
        "scale = 电子秤。",
        "price label = 价签。"
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
    { word: "link", phonetic: "/lɪŋk/", meaning: "n. 联系 v. 连接", example: "There is a link between diet and health.", exampleZh: "饮食与健康之间存在联系。" }
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
    },
    {
      scene: "委婉拒绝同事的加班邀请",
      situationZh: "同事邀请你周末加班，你礼貌地拒绝并说明原因。",
      roles: { clerk: "同事", user: "我" },
      turns: [
        { role: "clerk", en: "Hey, can you work overtime this weekend?", zh: "嘿，这个周末能加个班吗？" },
        { role: "user", en: "I'm afraid I can't. I already have plans.", zh: "恐怕不行，我已有安排了。", keywords: ["afraid", "plans"] },
        { role: "clerk", en: "It's just a small task, really.", zh: "其实只是一件小事。" },
        { role: "user", en: "Sorry, I really need some rest this weekend.", zh: "抱歉，我这个周末真的需要休息。", keywords: ["sorry", "rest"] },
        { role: "clerk", en: "I understand. Maybe next time then.", zh: "我理解。那下次吧。" },
        { role: "user", en: "Thanks for understanding.", zh: "谢谢你的理解。", keywords: ["understanding"] }
      ],
      tips: [
        "work overtime = 加班。",
        "I'm afraid I can't. = 恐怕不行。"
      ]
    },
    {
      scene: "在商场拒绝办理会员卡",
      situationZh: "店员热情推销会员卡，你礼貌地婉拒。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello! Would you like to apply for our membership card?", zh: "您好！要办一张我们的会员卡吗？" },
        { role: "user", en: "No, thanks. I only come here occasionally.", zh: "不了，谢谢。我只是偶尔来。", keywords: ["no", "occasionally"] },
        { role: "clerk", en: "It's free and you get discounts.", zh: "免费的，还能享受折扣。" },
        { role: "user", en: "I appreciate it, but I don't need another card.", zh: "很感谢，不过我不需要再多一张卡了。", keywords: ["appreciate", "don't need"] },
        { role: "clerk", en: "No worries. Let me know if you change your mind.", zh: "没关系。如果您改变主意了告诉我。" },
        { role: "user", en: "I will. Thanks anyway.", zh: "好的，还是谢谢你。", keywords: ["thanks"] }
      ],
      tips: [
        "apply for a card = 办卡。",
        "No worries. = 没关系。"
      ]
    },
    {
      scene: "婉拒朋友帮忙搬家",
      situationZh: "朋友请你去帮忙搬家，但你当天有事无法前往。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "clerk", en: "Could you come and help me move on Saturday?", zh: "周六能来帮我搬家吗？" },
        { role: "user", en: "I'd love to, but I have a class that day.", zh: "我很想去，但那天我有课。", keywords: ["love to", "class"] },
        { role: "clerk", en: "Oh, is there any other day that works?", zh: "哦，其他哪天方便吗？" },
        { role: "user", en: "I'm free on Sunday afternoon if that helps.", zh: "如果你方便，周日下午我有空。", keywords: ["Sunday"] },
        { role: "clerk", en: "That works perfectly. Thanks for offering!", zh: "那太好了，谢谢你主动帮忙！" },
        { role: "user", en: "No problem, I'll see you then.", zh: "不客气，到时候见。", keywords: ["see you"] }
      ],
      tips: [
        "I'd love to, but... = 我很愿意，但……（婉拒）。",
        "offer to help = 主动提出帮忙。"
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
    { word: "literal", phonetic: "/ˈlɪtərəl/", meaning: "adj. 字面的；逐字的", example: "It is a literal translation.", exampleZh: "这是逐字翻译。" }
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
    },
    {
      scene: "把水果分给邻居",
      situationZh: "你买了太多水果，想分一些给楼上的邻居。",
      roles: { clerk: "邻居", user: "我" },
      turns: [
        { role: "user", en: "Hello! I bought too many apples today.", zh: "你好！我今天苹果买多了。", keywords: ["apples", "too many"] },
        { role: "clerk", en: "Oh, the market has a good harvest this year.", zh: "是啊，今年市场收成好。" },
        { role: "user", en: "Would you like to take some?", zh: "你想拿一些吗？", keywords: ["take", "some"] },
        { role: "clerk", en: "Really? That's so kind of you!", zh: "真的吗？你真好！", keywords: ["kind"] },
        { role: "user", en: "Of course, sharing makes everyone happy.", zh: "别客气，分享让人人都开心。", keywords: ["sharing"] },
        { role: "clerk", en: "Thank you. I'll bring you some bread I baked.", zh: "谢谢。我把我烤的面包分给你。", keywords: ["bread"] },
        { role: "user", en: "That sounds lovely, thanks!", zh: "太好了，谢谢！", keywords: ["thanks"] }
      ],
      tips: [
        "that's so kind of you = 你真好。",
        "sharing = 分享（动名词作主语）。"
      ]
    },
    {
      scene: "在社区捐赠旧衣服",
      situationZh: "你整理出一批旧衣物，送到社区捐赠站。",
      roles: { clerk: "志愿者", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, welcome! Are you here to donate?", zh: "你好，欢迎！你是来捐赠的吗？" },
        { role: "user", en: "Yes, I have some clothes I no longer wear.", zh: "是的，我有些不再穿的衣服。", keywords: ["no longer", "clothes"] },
        { role: "clerk", en: "Great, please put them in this box.", zh: "好的，请把它们放进这个箱子里。" },
        { role: "user", en: "Anything I should check first?", zh: "有什么需要先检查的吗？", keywords: ["check"] },
        { role: "clerk", en: "Just make sure they are clean and usable.", zh: "只要确保干净、可穿就行。" },
        { role: "user", en: "Got it. I'm glad they can be reused.", zh: "明白了。很高兴它们能被再利用。", keywords: ["reused"] },
        { role: "clerk", en: "Thank you for your generosity!", zh: "谢谢你的慷慨！" },
        { role: "user", en: "My pleasure!", zh: "不客气！", keywords: ["pleasure"] }
      ],
      tips: [
        "donate = 捐赠。",
        "My pleasure. = 不客气。"
      ]
    },
    {
      scene: "陪老人参加社区活动",
      situationZh: "你在社区当志愿者，陪一位老人步行去活动室。",
      roles: { clerk: "老人", user: "我" },
      turns: [
        { role: "user", en: "Good morning! Let me walk with you to the activity room.", zh: "早上好！让我陪您走到活动室吧。", keywords: ["walk", "activity"] },
        { role: "clerk", en: "That's very kind. It's just down this hall.", zh: "你真好。就在这个走廊前面。" },
        { role: "user", en: "Would you like me to carry anything for you?", zh: "需要我帮您拿点什么吗？", keywords: ["carry"] },
        { role: "clerk", en: "No, I'm fine, but thank you all the same.", zh: "不用，我没事，还是谢谢你。" },
        { role: "user", en: "Here we are. Enjoy your chess game!", zh: "到了。祝您下棋愉快！", keywords: ["here", "chess"] },
        { role: "clerk", en: "Thank you so much, dear.", zh: "太感谢你了，孩子。" },
        { role: "user", en: "I'll come say hi again tomorrow.", zh: "明天我再来看您。", keywords: ["tomorrow"] }
      ],
      tips: [
        "walk with someone = 陪某人走。",
        "Here we are. = 我们到了。"
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
    { word: "latitude", phonetic: "/ˈlætɪtjuːd/", meaning: "n. 纬度；自由度", example: "The city lies at 30 degrees latitude.", exampleZh: "这座城市位于北纬 30 度。" }
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
    },
    {
      scene: "向物业反映水龙头漏水",
      situationZh: "你家厨房水龙头在滴水，向物业报修。",
      roles: { clerk: "物业", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, property management, how can I help?", zh: "你好，物业管理处，有什么可以帮您？" },
        { role: "user", en: "My kitchen tap is leaking and wasting water.", zh: "我家厨房水龙头漏水，很浪费水。", keywords: ["leaking", "wasting"] },
        { role: "clerk", en: "May I have your apartment number?", zh: "请问您的房号是多少？" },
        { role: "user", en: "It's building 3, room 1205.", zh: "3 栋 1205 房。", keywords: ["building", "room"] },
        { role: "clerk", en: "Got it. A worker will come this afternoon.", zh: "好的，工程师傅今天下午过来。" },
        { role: "user", en: "Please also check the pipe in the bathroom.", zh: "请顺便检查一下卫生间的管道。", keywords: ["pipe", "bathroom"] },
        { role: "clerk", en: "Sure, noted. Anything else?", zh: "好的，记下了。还有别的吗？" },
        { role: "user", en: "No, that's all. Thanks!", zh: "没有了，谢谢！", keywords: ["thanks"] }
      ],
      tips: [
        "leak = 漏水；渗漏。",
        "property management = 物业管理。"
      ]
    },
    {
      scene: "参加小区节水宣传",
      situationZh: "小区举办节水宣传活动，你在现场咨询节约用水的方法。",
      roles: { clerk: "志愿者", user: "我" },
      turns: [
        { role: "clerk", en: "Hi! Would you like to know how to save water?", zh: "你好！想了解怎么节约用水吗？" },
        { role: "user", en: "Yes, what can I do at home?", zh: "想，我在家能做些什么？", keywords: ["what", "home"] },
        { role: "clerk", en: "Turning off the tap while brushing teeth helps a lot.", zh: "刷牙时关上水龙头会很有帮助。" },
        { role: "user", en: "I see. And what about showers?", zh: "明白。那淋浴呢？", keywords: ["showers"] },
        { role: "clerk", en: "Try to keep showers under ten minutes.", zh: "尽量把淋浴控制在十分钟内。" },
        { role: "user", en: "Good tips. I'll try to do better.", zh: "好的建议，我会尽量做得更好。", keywords: ["tips", "better"] },
        { role: "clerk", en: "Thanks for caring about the environment!", zh: "谢谢你对环境的关心！" },
        { role: "user", en: "See you around!", zh: "回头见！", keywords: ["see you"] }
      ],
      tips: [
        "save water = 节约用水。",
        "turn off the tap = 关上水龙头。"
      ]
    },
    {
      scene: "在健身房咨询办卡",
      situationZh: "你想办理健身月卡，询问费用和开放时间。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome to the gym! How can I help?", zh: "欢迎来到健身房！需要什么帮助？" },
        { role: "user", en: "How much is a monthly membership?", zh: "月卡多少钱？", keywords: ["monthly", "membership"] },
        { role: "clerk", en: "It's 199 yuan for one month.", zh: "199 元一个月。" },
        { role: "user", en: "What are your opening hours?", zh: "你们的营业时间是？", keywords: ["opening", "hours"] },
        { role: "clerk", en: "From 7 am to 10 pm every day.", zh: "每天早上七点到晚上十点。" },
        { role: "user", en: "Do you have a shower room?", zh: "有淋浴间吗？", keywords: ["shower"] },
        { role: "clerk", en: "Yes, free lockers and showers are included.", zh: "有，包含免费储物柜和淋浴。" },
        { role: "user", en: "Great, I'll take it.", zh: "好的，我办一张。", keywords: ["take"] }
      ],
      tips: [
        "membership = 会员卡。",
        "opening hours = 营业时间。"
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
    { word: "ladder", phonetic: "/ˈlædə(r)/", meaning: "n. 梯子；阶梯", example: "Success is a ladder.", exampleZh: "成功是一把梯子。" }
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
    },
    {
      scene: "在游泳馆买入场券",
      situationZh: "你想去游泳馆游泳，询问票价和开放时间。",
      roles: { clerk: "售票处", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, welcome to the swimming pool!", zh: "你好，欢迎来到游泳馆！" },
        { role: "user", en: "How much is one entry?", zh: "单次进入多少钱？", keywords: ["entry"] },
        { role: "clerk", en: "It's 35 yuan for two hours.", zh: "两小时 35 元。" },
        { role: "user", en: "What time does it close tonight?", zh: "今晚几点关门？", keywords: ["close"] },
        { role: "clerk", en: "We close at 9 pm.", zh: "晚上九点关门。" },
        { role: "user", en: "Do I need to bring my own cap?", zh: "需要自备泳帽吗？", keywords: ["cap"] },
        { role: "clerk", en: "Yes, a swim cap is required.", zh: "是的，必须戴泳帽。" },
        { role: "user", en: "Got it. Here's the money.", zh: "明白了，给你钱。", keywords: ["money"] }
      ],
      tips: [
        "entry = 进场；入场费。",
        "swim cap = 泳帽。"
      ]
    },
    {
      scene: "在体育用品店买瑜伽垫",
      situationZh: "你开始练瑜伽，想买一张合适垫子。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, are you looking for any equipment?", zh: "你好，需要什么运动装备吗？" },
        { role: "user", en: "I want a yoga mat for beginners.", zh: "我想要一张适合初学者的瑜伽垫。", keywords: ["yoga", "mat"] },
        { role: "clerk", en: "This one is thick and non-slip.", zh: "这款加厚、防滑。" },
        { role: "user", en: "Is it easy to carry around?", zh: "方便携带吗？", keywords: ["carry"] },
        { role: "clerk", en: "Yes, it comes with a strap.", zh: "方便，配有绑带。" },
        { role: "user", en: "How much is it?", zh: "多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "It's 89 yuan.", zh: "89 元。" },
        { role: "user", en: "I'll take it.", zh: "我要了。", keywords: ["take"] }
      ],
      tips: [
        "yoga mat = 瑜伽垫。",
        "non-slip = 防滑的。"
      ]
    },
    {
      scene: "在公园向跑友问路线",
      situationZh: "你在公园跑步，向一位跑友询问更长的跑步路线。",
      roles: { runner: "跑友", user: "我" },
      turns: [
        { role: "user", en: "Excuse me, is there a longer running path here?", zh: "打扰一下，这里有更长的跑步路线吗？", keywords: ["longer", "path"] },
        { role: "runner", en: "Yes, if you follow the lake, it's about five kilometers.", zh: "有，沿着湖跑大约五公里。" },
        { role: "user", en: "Great. How long have you been running?", zh: "太好了。你跑步多久了？", keywords: ["how long"] },
        { role: "runner", en: "About three years. I run every morning.", zh: "大约三年了，我每天早上去跑。" },
        { role: "user", en: "Do you have any tips for a beginner?", zh: "对初学者有什么建议吗？", keywords: ["tips", "beginner"] },
        { role: "runner", en: "Start slowly and stretch afterwards.", zh: "慢慢开始，跑完记得拉伸。" },
        { role: "user", en: "Thanks a lot. Maybe we can run together.", zh: "多谢。也许我们可以一起跑。", keywords: ["together"] },
        { role: "runner", en: "Sure, see you tomorrow!", zh: "好啊，明天见！", keywords: ["tomorrow"] }
      ],
      tips: [
        "path = 小路；路线。",
        "stretch = 拉伸。"
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
    { word: "nominee", phonetic: "/ˌnɒmɪˈniː/", meaning: "n. 被提名者", example: "He is a nominee for the award.", exampleZh: "他是这项奖的提名者。" }
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
    },
    {
      scene: "在新班级做自我介绍",
      situationZh: "开学第一天老师让你当众自我介绍，你鼓起勇气开口。",
      roles: { clerk: "老师", user: "我" },
      turns: [
        { role: "clerk", en: "Would you like to introduce yourself to the class?", zh: "你愿意向全班做个自我介绍吗？" },
        { role: "user", en: "Okay, I'll try, even though I feel nervous.", zh: "好的，我试试，虽然我有点紧张。", keywords: ["nervous", "try"] },
        { role: "clerk", en: "Don't worry, everyone is nervous on the first day.", zh: "别担心，第一天大家都会紧张。" },
        { role: "user", en: "Hi everyone, my name is Lin, and I like reading.", zh: "大家好，我叫林，我喜欢阅读。", keywords: ["name", "reading"] },
        { role: "clerk", en: "Nice to meet you! Does anyone have a question?", zh: "很高兴认识你！有人想提问吗？" },
        { role: "user", en: "Thank you for the encouragement.", zh: "谢谢你的鼓励。", keywords: ["encouragement"] }
      ],
      tips: [
        "introduce yourself = 做自我介绍。",
        "nervous = 紧张的。"
      ]
    },
    {
      scene: "在英语角开口说英语",
      situationZh: "你第一次参加英语角，鼓起勇气用英语和陌生人聊天。",
      roles: { host: "主持人", user: "我" },
      turns: [
        { role: "host", en: "Welcome to the English corner! What's your name?", zh: "欢迎来到英语角！你叫什么名字？" },
        { role: "user", en: "Hi, I'm Zhang. This is my first time here.", zh: "嗨，我叫小张。这是我第一次来。", keywords: ["first time"] },
        { role: "host", en: "Great to see new faces. What topic do you like?", zh: "很高兴看到新面孔。你喜欢什么话题？" },
        { role: "user", en: "I'd like to talk about music, if you don't mind.", zh: "如果方便的话，我想聊聊音乐。", keywords: ["music"] },
        { role: "host", en: "Perfect! Join that group over there.", zh: "太棒了！请加入那边的那个小组。" },
        { role: "user", en: "I hope I can speak more bravely.", zh: "我希望自己能说得更大胆。", keywords: ["bravely"] },
        { role: "host", en: "You're already brave just for coming!", zh: "你能来就已经很勇敢了！" }
      ],
      tips: [
        "English corner = 英语角。",
        "first time = 第一次。"
      ]
    },
    {
      scene: "第一次尝试攀岩",
      situationZh: "你第一次去攀岩馆，虽有畏高但仍然尝试挑战。",
      roles: { clerk: "教练", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, have you ever climbed before?", zh: "你好，你以前攀过岩吗？" },
        { role: "user", en: "No, this is my first time. I'm a bit afraid.", zh: "没有，这是我第一次，我有点害怕。", keywords: ["afraid", "first"] },
        { role: "clerk", en: "That's normal. Don't look down, just focus.", zh: "这很正常。别看下面，专注就行。" },
        { role: "user", en: "How do I use this harness?", zh: "这个安全带怎么用？", keywords: ["harness"] },
        { role: "clerk", en: "Let me fasten it, and I'll belay you from below.", zh: "我来帮你系好，从下面给你做保护。" },
        { role: "user", en: "Okay, I'll give it a try now.", zh: "好，我现在试一试。", keywords: ["try"] },
        { role: "clerk", en: "Well done, you're doing great!", zh: "干得好，你做得很好！", keywords: ["well done"] }
      ],
      tips: [
        "climbing = 攀岩。",
        "harness = 安全带；belay = 保护（攀岩）。"
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
    { word: "liable", phonetic: "/ˈlaɪəbl/", meaning: "adj. 有责任的；易…的", example: "He is liable for the damage.", exampleZh: "他对损失负有责任。" }
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
    },
    {
      scene: "在琴行咨询吉他课",
      situationZh: "你想学吉他，到琴行咨询课程安排。",
      roles: { clerk: "老师", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, are you interested in music lessons?", zh: "你好，你对音乐课感兴趣吗？" },
        { role: "user", en: "Yes, I'd like to learn the guitar from zero.", zh: "是的，我想从零开始学吉他。", keywords: ["guitar", "zero"] },
        { role: "clerk", en: "We offer weekly lessons for beginners.", zh: "我们为初学者提供每周一节课。" },
        { role: "user", en: "How long before I can play a song?", zh: "多久能弹出一首曲子？", keywords: ["how long", "song"] },
        { role: "clerk", en: "With daily practice, about two months.", zh: "每天练习的话，大约两个月。" },
        { role: "user", en: "That sounds encouraging. How much is it per month?", zh: "听起来很受鼓励。每月多少钱？", keywords: ["per month"] },
        { role: "clerk", en: "It's 500 yuan a month.", zh: "每月 500 元。" },
        { role: "user", en: "Okay, I'll sign up.", zh: "好的，我报名。", keywords: ["sign up"] }
      ],
      tips: [
        "from zero = 从零开始。",
        "sign up = 报名。"
      ]
    },
    {
      scene: "在文具店买练习本",
      situationZh: "你决定开始练字，去文具店买练习本。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! What are you looking for?", zh: "欢迎光临！想买点什么？" },
        { role: "user", en: "Do you have handwriting practice books?", zh: "你们有练字本吗？", keywords: ["handwriting", "books"] },
        { role: "clerk", en: "Yes, we have several levels.", zh: "有，我们有好几个级别。" },
        { role: "user", en: "I'll take the beginner one.", zh: "我买入门那本。", keywords: ["beginner"] },
        { role: "clerk", en: "It comes with a free pen.", zh: "还附赠一支笔。" },
        { role: "user", en: "Great, how much in total?", zh: "太好了，一共多少钱？", keywords: ["total"] },
        { role: "clerk", en: "That's 18 yuan.", zh: "18 元。" },
        { role: "user", en: "Here you are, thank you.", zh: "给你，谢谢。", keywords: ["here"] }
      ],
      tips: [
        "handwriting = 书写；练字。",
        "in total = 总计。"
      ]
    },
    {
      scene: "在公园向长者请教书法",
      situationZh: "你在公园看到一位长者练毛笔字，虚心请教。",
      roles: { clerk: "长者", user: "我" },
      turns: [
        { role: "user", en: "Excuse me, your calligraphy is beautiful. May I ask a question?", zh: "打扰了，您的书法真漂亮，我能请教一下吗？", keywords: ["calligraphy", "question"] },
        { role: "clerk", en: "Of course, young friend. What would you like to know?", zh: "当然可以，小朋友。你想了解什么？" },
        { role: "user", en: "How do you hold the brush correctly?", zh: "毛笔要怎么正确握？", keywords: ["brush"] },
        { role: "clerk", en: "Keep a relaxed grip and use your wrist.", zh: "握笔放松，手腕用力。" },
        { role: "user", en: "Anything else I should practice first?", zh: "还有什么我应该先练吗？", keywords: ["practice", "first"] },
        { role: "clerk", en: "Start with simple strokes, every day.", zh: "从简单的笔画开始，每天练。" },
        { role: "user", en: "Thank you for the advice. I'll practice daily.", zh: "谢谢您的建议，我会每天练习。", keywords: ["advice", "daily"] }
      ],
      tips: [
        "calligraphy = 书法。",
        "practice daily = 每天练习。"
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
    { word: "legislation", phonetic: "/ˌledʒɪsˈleɪʃn/", meaning: "n. 立法；法规", example: "New legislation was passed.", exampleZh: "通过了新法规。" }
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
    },
    {
      scene: "在售后服务中心听处理方案",
      situationZh: "你买的电扇不转了，去售后认真听维修方案。",
      roles: { clerk: "售后专员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, what seems to be the problem?", zh: "你好，请问哪里出了问题？" },
        { role: "user", en: "My fan stopped working yesterday.", zh: "我的电扇昨天不转了。", keywords: ["fan", "working"] },
        { role: "clerk", en: "Please carefully listen: we'll either repair it or exchange it.", zh: "请仔细听：我们要么维修，要么给您换一台。" },
        { role: "user", en: "Got it. Which do you recommend?", zh: "明白了。你建议哪种？", keywords: ["recommend"] },
        { role: "clerk", en: "If you still have the receipt, an exchange is fastest.", zh: "如果还有收据，换货最快。" },
        { role: "user", en: "I understand. I'll bring my receipt tomorrow.", zh: "我明白了，我明天带收据来。", keywords: ["understand", "receipt"] },
        { role: "clerk", en: "Perfect. I'll note that down for you.", zh: "好的，我帮您记下来。" }
      ],
      tips: [
        "receipt = 收据。",
        "after-sales service = 售后服务。"
      ]
    },
    {
      scene: "在咖啡店耐心听朋友倾诉",
      situationZh: "朋友最近压力很大，约你在咖啡店倾诉，你认真地听。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "clerk", en: "I've been feeling really stressed at work lately.", zh: "我最近工作压力特别大。" },
        { role: "user", en: "I'm here for you. Take your time and tell me everything.", zh: "我在呢，慢慢说，都告诉我。", keywords: ["time", "listen"] },
        { role: "clerk", en: "I feel like no one really listens to me.", zh: "我感觉没人真正听我说。" },
        { role: "user", en: "I hear you, and your feelings are important.", zh: "我听到了，你的感受很重要。", keywords: ["important"] },
        { role: "clerk", en: "Thanks. Just talking helps a lot.", zh: "谢谢你，说出来的确好多了。" },
        { role: "user", en: "I'm glad you shared it with me.", zh: "很高兴你愿意和我说。", keywords: ["shared"] }
      ],
      tips: [
        "I'm here for you. = 我在这陪着你。",
        "express feelings = 表达感受。"
      ]
    },
    {
      scene: "在药房仔细听服药说明",
      situationZh: "你买感冒药，仔细听药剂师讲解用法。",
      roles: { clerk: "药剂师", user: "我" },
      turns: [
        { role: "clerk", en: "Here is your cold medicine.", zh: "这是你的感冒药。" },
        { role: "user", en: "How often should I take it?", zh: "多久吃一次？", keywords: ["how often"] },
        { role: "clerk", en: "Three times a day, after meals.", zh: "每日三次，饭后服用。" },
        { role: "user", en: "Anything else I should watch out for?", zh: "还有什么需要注意的吗？", keywords: ["watch out"] },
        { role: "clerk", en: "Don't drive after taking it, as it may make you sleepy.", zh: "服药后不要开车，可能会犯困。" },
        { role: "user", en: "Understood. Thanks for explaining.", zh: "明白了，谢谢你的讲解。", keywords: ["understood"] }
      ],
      tips: [
        "three times a day = 每日三次。",
        "watch out for = 注意提防。"
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
    { word: "legitimate", phonetic: "/lɪˈdʒɪtɪmət/", meaning: "adj. 合法的；正当的", example: "It's a legitimate question.", exampleZh: "这是一个合理的问题。" }
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
    },
    {
      scene: "在文具店买日记本",
      situationZh: "你想开始写日记，去文具店挑选一本合适的本子。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! What can I help you find?", zh: "欢迎光临！想找什么？" },
        { role: "user", en: "I'm looking for a nice notebook for keeping a journal.", zh: "我想找一本好点的本子写日记。", keywords: ["notebook", "journal"] },
        { role: "clerk", en: "We have some with soft covers over here.", zh: "这边有几本软封面的。" },
        { role: "user", en: "This one feels nice. Is the paper thick enough?", zh: "这本手感不错，纸够厚吗？", keywords: ["paper"] },
        { role: "clerk", en: "Yes, it's durable and doesn't fade.", zh: "够厚，很耐用，不易褪色。" },
        { role: "user", en: "Great, how much is it?", zh: "太好了，多少钱？", keywords: ["how much"] },
        { role: "clerk", en: "It's 25 yuan.", zh: "25 元。" },
        { role: "user", en: "I'll take it. Thanks!", zh: "我买了，谢谢！", keywords: ["take"] }
      ],
      tips: [
        "keep a journal = 记日记。",
        "durable = 耐用的。"
      ]
    },
    {
      scene: "在咖啡店独自安静读书",
      situationZh: "你在咖啡店选了一本散文集，安静地阅读并思考。",
      roles: { waitress: "服务员", user: "我" },
      turns: [
        { role: "waitress", en: "Good afternoon! Ready to order?", zh: "下午好！可以点单了吗？" },
        { role: "user", en: "A large latte, please, with a quiet seat by the window.", zh: "请给我一杯大杯拿铁，我想坐窗边的安静座位。", keywords: ["latte", "window"] },
        { role: "waitress", en: "Sure, right this way.", zh: "好的，这边请。" },
        { role: "user", en: "Do you have any cookies to go with it?", zh: "有没有配咖啡的饼干？", keywords: ["cookies"] },
        { role: "waitress", en: "Yes, we have almond cookies.", zh: "有，我们有杏仁饼干。" },
        { role: "user", en: "I'll have two, please. I'm reading a book today.", zh: "请来两块。我今天准备看书。", keywords: ["reading", "book"] },
        { role: "waitress", en: "Enjoy your reading time!", zh: "祝您阅读愉快！" },
        { role: "user", en: "Thank you!", zh: "谢谢！", keywords: ["thank"] }
      ],
      tips: [
        "latte = 拿铁咖啡。",
        "enjoy your reading = 尽享阅读。"
      ]
    },
    {
      scene: "在旧书店与店主交流",
      situationZh: "你在旧书店淘到一本旧诗集，和店主聊起收藏的故事。",
      roles: { clerk: "店主", user: "我" },
      turns: [
        { role: "user", en: "Excuse me, how much is this collection of poems?", zh: "打扰一下，这本诗集多少钱？", keywords: ["poems"] },
        { role: "clerk", en: "That one is a rare edition from the 1980s.", zh: "那是本 80 年代的稀有版本。" },
        { role: "user", en: "Wow, I've been collecting old books for years.", zh: "哇，我收藏旧书很多年了。", keywords: ["collecting", "old books"] },
        { role: "clerk", en: "It's 45 yuan. It only has a few marks inside.", zh: "45 元，里面只有几处划线。" },
        { role: "user", en: "That's fine, a little history is charming.", zh: "没关系，有点历史感才有味道。", keywords: ["history"] },
        { role: "clerk", en: "You can read it at the corner table if you like.", zh: "你喜欢的话可以在角落的桌子那儿看。" },
        { role: "user", en: "Thanks, I'll take it home to read slowly.", zh: "谢谢，我带回家慢慢读。", keywords: ["take", "read"] }
      ],
      tips: [
        "rare edition = 稀有版本。",
        "a bit of history = 一点历史味道。"
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
    { word: "inevitable", phonetic: "/ɪnˈevɪtəbl/", meaning: "adj. 不可避免的", example: "Change is inevitable.", exampleZh: "变化是不可避免的。" }
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
    },
    {
      scene: "在驾校咨询补考",
      situationZh: "你科目二没考过，到驾校咨询补考安排。",
      roles: { clerk: "教练", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how did your test go?", zh: "你好，考试考得怎么样？" },
        { role: "user", en: "I failed the parallel parking again.", zh: "我又没通过侧方停车。", keywords: ["failed", "parking"] },
        { role: "clerk", en: "Don't worry, many people pass the second time.", zh: "别担心，很多人第二次就过了。" },
        { role: "user", en: "When can I retake it?", zh: "我什么时候可以重考？", keywords: ["retake"] },
        { role: "clerk", en: "You can retake it in two weeks.", zh: "两周后可以重考。" },
        { role: "user", en: "Could I have extra practice before that?", zh: "考试前能再练几次吗？", keywords: ["practice"] },
        { role: "clerk", en: "Sure, we have slots every morning.", zh: "可以，每天早上都有时间安排。" },
        { role: "user", en: "Thanks, I'll practice harder this time.", zh: "谢谢，这次我会更努力练。", keywords: ["harder"] }
      ],
      tips: [
        "retake = 重考。",
        "practice harder = 更努力练习。"
      ]
    },
    {
      scene: "在蛋糕店参加烘焙体验课",
      situationZh: "你第一次学做戚风蛋糕，失败了但决定再试一次。",
      roles: { clerk: "烘焙老师", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome to the baking class!", zh: "欢迎来到烘焙课！" },
        { role: "user", en: "My cake deflated again. What went wrong?", zh: "我的蛋糕又塌了，哪里不对？", keywords: ["deflated", "wrong"] },
        { role: "clerk", en: "Maybe the oven wasn't hot enough. Let's retry it.", zh: "可能是烤箱温度不够。我们再来一次。" },
        { role: "user", en: "I still want to try. Failure teaches a lot.", zh: "我还是想试试。失败能教会我很多。", keywords: ["try", "failure"] },
        { role: "clerk", en: "Exactly. This time, whisk for one more minute.", zh: "没错。这次再打发一分钟。" },
        { role: "user", en: "Okay, let me do it step by step.", zh: "好，我一步一步来。", keywords: ["step"] },
        { role: "clerk", en: "See? It turned out great this time!", zh: "看，这次就很成功！", keywords: ["great"] }
      ],
      tips: [
        "baking class = 烘焙课。",
        "retry = 再试一次。"
      ]
    },
    {
      scene: "在健身比赛中再次挑战",
      situationZh: "你在健身房尝试完成更高难度动作失败后，鼓起勇气再试。",
      roles: { clerk: "教练", user: "我" },
      turns: [
        { role: "clerk", en: "Did you manage the pull-ups today?", zh: "今天引体向上做得怎么样？" },
        { role: "user", en: "Not yet, I only reached eight.", zh: "还没完成，我只做到了八个。", keywords: ["pull-ups", "eight"] },
        { role: "clerk", en: "That's improvement—last week was six.", zh: "这是进步——上周才六个。" },
        { role: "user", en: "Can you watch my form and give me feedback?", zh: "你能看看我的姿势并给点建议吗？", keywords: ["form", "feedback"] },
        { role: "clerk", en: "Of course. Keep your back straight this time.", zh: "当然可以。这次保持背部挺直。" },
        { role: "user", en: "Here I go... I did nine this time!", zh: "我来了……这次做了九个！", keywords: ["nine"] },
        { role: "clerk", en: "Great progress! Every try counts.", zh: "进步很大！每一次尝试都很重要。", keywords: ["progress"] }
      ],
      tips: [
        "pull-up = 引体向上。",
        "progress = 进步。"
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
    { word: "luminous", phonetic: "/ˈluːmɪnəs/", meaning: "adj. 发光的；明亮的", example: "The stars are luminous tonight.", exampleZh: "今晚星光灿烂。" }
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
    },
    {
      scene: "在美术馆买票参观",
      situationZh: "你在美术馆排队买票，打算用空闲时间看展。",
      roles: { clerk: "售票员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, would you like a ticket?", zh: "你好，需要买一张票吗？" },
        { role: "user", en: "Yes, one adult ticket, please.", zh: "是的，一张成人票。", keywords: ["adult", "ticket"] },
        { role: "clerk", en: "That's 40 yuan. The tour starts at the next hour.", zh: "40 元，讲解团下个小时开始。" },
        { role: "user", en: "How long does the exhibition last?", zh: "展览持续多长时间？", keywords: ["how long"] },
        { role: "clerk", en: "About two hours at a relaxed pace.", zh: "慢慢逛大约两小时。" },
        { role: "user", en: "Great, I have the afternoon to spend here.", zh: "太好了，我一下午都有空待在这。", keywords: ["afternoon"] },
        { role: "clerk", en: "Enjoy the art!", zh: "祝您欣赏艺术！", keywords: ["enjoy"] }
      ],
      tips: [
        "art gallery = 美术馆。",
        "spend time = 度过时间。"
      ]
    },
    {
      scene: "在花市买一盆盆栽",
      situationZh: "周末你到花市挑选一盆绿植来布置房间。",
      roles: { clerk: "摊主", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! These plants are easy to care for.", zh: "欢迎！这些植物很好养。" },
        { role: "user", en: "I'd like a plant that doesn't need much light.", zh: "我想要一盆不太需要光照的植物。", keywords: ["plant", "light"] },
        { role: "clerk", en: "This snake plant is perfect for your living room.", zh: "这盆虎尾兰放在客厅最合适。" },
        { role: "user", en: "How often should I water it?", zh: "多久浇一次水？", keywords: ["water"] },
        { role: "clerk", en: "Only when the soil is dry, about once a week.", zh: "土干了再浇，大约一周一次。" },
        { role: "user", en: "Great, I'll take this pot.", zh: "好的，我就要这盆。", keywords: ["pot"] },
        { role: "clerk", en: "Here's a care card for you.", zh: "送您一张养护说明卡。" },
        { role: "user", en: "Thanks, have a good day!", zh: "谢谢，祝您愉快！", keywords: ["thanks"] }
      ],
      tips: [
        "snake plant = 虎尾兰。",
        "care for = 照料。"
      ]
    },
    {
      scene: "在书店参加周末读书会",
      situationZh: "你报名参加书店的周末读书会，和大家交流读书心得。",
      roles: { host: "主持人", user: "我" },
      turns: [
        { role: "host", en: "Welcome to the book club! What are you reading now?", zh: "欢迎来到读书会！你最近在读什么？" },
        { role: "user", en: "I just finished a novel about a journey.", zh: "我刚读完一本关于旅程的小说。", keywords: ["novel", "journey"] },
        { role: "host", en: "What impressed you most about it?", zh: "它最让你印象深刻的是什么？" },
        { role: "user", en: "The way the main character grows through challenges.", zh: "主角在挑战中成长的方式。", keywords: ["character", "grows"] },
        { role: "host", en: "That's a lovely theme. Has anyone read it too?", zh: "这个主题很棒。还有人读过吗？" },
        { role: "user", en: "I'd love to hear other readers' views.", zh: "我很想听听其他读者的看法。", keywords: ["views"] },
        { role: "host", en: "Let's open the floor to everyone.", zh: "那我们请大家一起交流。" },
        { role: "user", en: "Thank you for hosting this group.", zh: "谢谢主持这个小组。", keywords: ["thank"] }
      ],
      tips: [
        "book club = 读书会。",
        "share views = 分享看法。"
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
    { word: "linger", phonetic: "/ˈlɪŋɡə(r)/", meaning: "v. 逗留；徘徊", example: "She lingered at the door.", exampleZh: "她在门口逗留。" }
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
    },
    {
      scene: "在早餐店固定点同样的早餐",
      situationZh: "你每天在同一家早餐店点相同的燕麦粥和一盒牛奶。",
      roles: { clerk: "老板", user: "我" },
      turns: [
        { role: "clerk", en: "Good morning! Your usual porridge and milk?", zh: "早上好！还是老样子，燕麦粥和牛奶？" },
        { role: "user", en: "Yes, thanks for remembering my order.", zh: "对，谢谢你还记得我的订单。", keywords: ["order", "remembering"] },
        { role: "clerk", en: "Of course, regular as clockwork!", zh: "当然，你每天都来，很准时！" },
        { role: "user", en: "The same routine saves me time every morning.", zh: "一样的流程每天早上都帮我省时间。", keywords: ["routine", "time"] },
        { role: "clerk", en: "That's smart. Here's your food.", zh: "真聪明。你的早餐好了。" },
        { role: "user", en: "Great, see you tomorrow at the same time.", zh: "好，明天同一时间见。", keywords: ["tomorrow"] },
        { role: "clerk", en: "See you then! Have a great day.", zh: "明天见！祝你今天顺利。" }
      ],
      tips: [
        "usual = 惯常的。",
        "as regular as clockwork = 像时钟一样准时。"
      ]
    },
    {
      scene: "在杂货店采购每周生活用品",
      situationZh: "你按惯例每周日去杂货店采购日用品。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome back! Same list this week?", zh: "欢迎回来！这周还是同样的清单吗？" },
        { role: "user", en: "Almost, plus a bottle of detergent today.", zh: "差不多，今天再加一瓶洗衣液。", keywords: ["detergent"] },
        { role: "clerk", en: "Sure, it's on the cleaner shelf.", zh: "好的，在清洁用品那排架子上。" },
        { role: "user", en: "Do you have any discounts now?", zh: "现在有什么优惠吗？", keywords: ["discounts"] },
        { role: "clerk", en: "Yes, soap is buy two get one free.", zh: "有，肥皂买二送一。" },
        { role: "user", en: "I'll grab two bars then.", zh: "那我就拿两块。", keywords: ["two", "bars"] },
        { role: "clerk", en: "Great, your total is 55 yuan.", zh: "好的，一共 55 元。" },
        { role: "user", en: "Here you go, thanks.", zh: "给你，谢谢。", keywords: ["here"] }
      ],
      tips: [
        "detergent = 洗衣液/清洁剂。",
        "buy two get one free = 买二送一。"
      ]
    },
    {
      scene: "在健身房预约固定的私教课",
      situationZh: "你每周固定预约周三晚上的私教课锻炼。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, ready to book your weekly session?", zh: "你好，要预订这周的课程吗？" },
        { role: "user", en: "Yes, the usual Wednesday 7 pm slot, please.", zh: "是的，还是周三晚上七点的时段。", keywords: ["Wednesday", "slot"] },
        { role: "clerk", en: "Booked. Your trainer will be ready.", zh: "已订好，你的教练会等你。" },
        { role: "user", en: "Thanks. Having a set time keeps me on track.", zh: "谢谢。固定的时间能让我坚持锻炼。", keywords: ["set time"] },
        { role: "clerk", en: "Exactly, consistency is key.", zh: "没错，坚持是关键。" },
        { role: "user", en: "I'll see you next week then.", zh: "那下周见。", keywords: ["next week"] },
        { role: "clerk", en: "See you! Have a good training day.", zh: "再见！祝你锻炼愉快。" }
      ],
      tips: [
        "book a slot = 预订时段。",
        "consistency = 坚持；始终如一。"
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
    { word: "myriad", phonetic: "/ˈmɪriəd/", meaning: "adj. 无数的 n. 无数", example: "There are myriad choices.", exampleZh: "有无数的选择。" }
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
    },
    {
      scene: "在公园租自行车",
      situationZh: "你想沿着公园骑行，租了一辆自行车。",
      roles: { clerk: "租车员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, would you like to rent a bike?", zh: "你好，要租一辆自行车吗？" },
        { role: "user", en: "Yes, how much is it per hour?", zh: "是的，每小时多少钱？", keywords: ["rent", "hour"] },
        { role: "clerk", en: "It's 15 yuan per hour, with a 50 yuan deposit.", zh: "每小时 15 元，押金 50 元。" },
        { role: "user", en: "Do you have a bike for cycling on hills?", zh: "有适合爬坡的山地车吗？", keywords: ["hills"] },
        { role: "clerk", en: "Yes, that one has multiple gears.", zh: "有，那辆有多档变速。" },
        { role: "user", en: "Great, I'll take it for two hours.", zh: "好，我租两小时。", keywords: ["two", "hours"] },
        { role: "clerk", en: "Here's your bike. Enjoy the fresh air!", zh: "这是你的车，享受新鲜空气吧！", keywords: ["fresh air"] }
      ],
      tips: [
        "rent = 租用。",
        "gear = 变速档位。"
      ]
    },
    {
      scene: "在登山用品店买徒步装备",
      situationZh: "你周末要去爬山，在店里选购背包和登山杖。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! Are you planning a hike?", zh: "欢迎光临！是计划去远足吗？" },
        { role: "user", en: "Yes, I need a small backpack for a day trip.", zh: "是的，我需要一个小背包用于一日游。", keywords: ["backpack", "trip"] },
        { role: "clerk", en: "This one is light and has a water-bottle holder.", zh: "这款很轻，还有水壶袋。" },
        { role: "user", en: "Do you also have walking sticks?", zh: "你们也有登山杖吗？", keywords: ["sticks"] },
        { role: "clerk", en: "Yes, these fold up easily.", zh: "有，这些很容易折叠。" },
        { role: "user", en: "How much for both?", zh: "两样一起多少钱？", keywords: ["both"] },
        { role: "clerk", en: "Together it's 180 yuan.", zh: "一起 180 元。" },
        { role: "user", en: "Okay, I'll take them.", zh: "好的，我买了。", keywords: ["take"] }
      ],
      tips: [
        "hike = 远足；徒步。",
        "walking stick = 登山杖。"
      ]
    },
    {
      scene: "在湖边租帐篷露营",
      situationZh: "你想周末露营，在湖边租一套帐篷装备。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, are you looking for camping gear?", zh: "你好，需要露营装备吗？" },
        { role: "user", en: "Yes, do you rent tents for the weekend?", zh: "是的，周末可以租帐篷吗？", keywords: ["tent", "weekend"] },
        { role: "clerk", en: "We do. The camping area is beside the lake.", zh: "可以租。露营区就在湖边。" },
        { role: "user", en: "What does the rental include?", zh: "租用包含哪些东西？", keywords: ["include"] },
        { role: "clerk", en: "A tent, a mat, and two sleeping bags.", zh: "帐篷、垫子和两个睡袋。" },
        { role: "user", en: "It's 80 yuan for one night, right?", zh: "一晚 80 元，对吗？", keywords: ["one night"] },
        { role: "clerk", en: "Yes, please return it by Sunday noon.", zh: "是的，周日前请归还。" },
        { role: "user", en: "Perfect, I'll book it now.", zh: "太好了，我现在预订。", keywords: ["book"] }
      ],
      tips: [
        "camping = 露营。",
        "sleeping bag = 睡袋。"
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
    { word: "languid", phonetic: "/ˈlæŋɡwɪd/", meaning: "adj. 倦怠的；慵懒的", example: "They moved at a languid pace.", exampleZh: "他们懒洋洋地走着。" }
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
    },
    {
      scene: "在会议室开团队分工会",
      situationZh: "你们小组在会议室讨论项目的分工安排。",
      roles: { clerk: "组长", user: "我" },
      turns: [
        { role: "clerk", en: "Let's divide the project tasks today.", zh: "我们今天来分工一下项目任务。" },
        { role: "user", en: "I'd like to handle the research part.", zh: "我想负责资料调研这部分。", keywords: ["research"] },
        { role: "clerk", en: "Great, and who can take the writing?", zh: "好的，那谁来负责写作？" },
        { role: "user", en: "Maybe we can write the summary together.", zh: "也许我们可以一起写总结。", keywords: ["summary", "together"] },
        { role: "clerk", en: "Good idea. I'll email everyone the schedule.", zh: "好主意。我把时间安排发给大家。" },
        { role: "user", en: "I'll keep track of deadlines and remind the team.", zh: "我来跟进截止日期并提醒大家。", keywords: ["deadlines", "remind"] },
        { role: "clerk", en: "Perfect, that way nothing gets missed.", zh: "太好了，这样就不会遗漏了。" },
        { role: "user", en: "Let's meet again on Friday to review.", zh: "我们周五再开会检查进度。", keywords: ["Friday", "review"] }
      ],
      tips: [
        "divide tasks = 分工。",
        "keep track of = 跟进。"
      ]
    },
    {
      scene: "在活动中心一起布置摊位",
      situationZh: "你和其他志愿者一起在社区活动中心布置义卖摊位。",
      roles: { clerk: "负责人", user: "我" },
      turns: [
        { role: "clerk", en: "Thanks for coming to help set up the booths.", zh: "谢谢你们来帮忙布置摊位。" },
        { role: "user", en: "Where should I hang these banners?", zh: "这些横幅要挂在哪里？", keywords: ["banners"] },
        { role: "clerk", en: "On the front wall, using the ladder.", zh: "挂在前面的墙上，用那把梯子。" },
        { role: "user", en: "Could you hold the ladder while I climb?", zh: "我爬上去的时候你能扶着梯子吗？", keywords: ["ladder", "hold"] },
        { role: "clerk", en: "Of course, teamwork makes it easier.", zh: "当然，团队合作让事情更简单。" },
        { role: "user", en: "Great, now I'll place the donation boxes.", zh: "好的，我现在去摆放捐款箱。", keywords: ["donation", "boxes"] },
        { role: "clerk", en: "Excellent. I'll sort the goods meanwhile.", zh: "太好了，我同时来整理货物。" }
      ],
      tips: [
        "set up booths = 布置摊位。",
        "teamwork = 团队合作。"
      ]
    },
    {
      scene: "和同伴合作搭书架",
      situationZh: "你和新朋友一起按说明书合作搭建一个书架。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "clerk", en: "Let's build this shelf together. I'll start on the sides.", zh: "我们一起搭这个书架吧，我先装两侧。" },
        { role: "user", en: "Good, I'll tighten the screws on the back panels.", zh: "好，我来拧紧背板的螺丝。", keywords: ["screws", "panels"] },
        { role: "clerk", en: "Please hold this board steady while I align it.", zh: "我对准的时候请你扶稳这块板。", keywords: ["hold", "steady"] },
        { role: "user", en: "No problem. Is this hole matching?", zh: "没问题。这个孔对得上吗？", keywords: ["hole"] },
        { role: "clerk", en: "Yes, perfect. Now let's fix the shelves together.", zh: "对，正好。现在我们一起来固定隔板。" },
        { role: "user", en: "It's much faster working as a pair.", zh: "两个人合作快多了。", keywords: ["faster", "pair"] },
        { role: "clerk", en: "Done! Great cooperation today.", zh: "完成了！今天合作愉快。", keywords: ["cooperation"] }
      ],
      tips: [
        "align = 对齐。",
        "work as a pair = 两人合作。"
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
    { word: "meticulous", phonetic: "/məˈtɪkjələs/", meaning: "adj. 一丝不苟的", example: "She keeps meticulous records.", exampleZh: "她做详细记录。" }
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
    },
    {
      scene: "在课堂上举手提问",
      situationZh: "上课时你对一个知识点有疑问，鼓起勇气举手提问。",
      roles: { clerk: "老师", user: "我" },
      turns: [
        { role: "user", en: "Excuse me, may I ask a question?", zh: "打扰一下，我可以提个问题吗？", keywords: ["question"] },
        { role: "clerk", en: "Of course, please go ahead.", zh: "当然，请讲。" },
        { role: "user", en: "Could you explain this formula once more?", zh: "能再解释一下这个公式吗？", keywords: ["formula"] },
        { role: "clerk", en: "Sure. Let me use an example to clarify.", zh: "好的，我用一个例子来说明。" },
        { role: "user", en: "Oh, I see it now. Thank you for explaining.", zh: "哦，我现在明白了，谢谢您的讲解。", keywords: ["see", "explaining"] },
        { role: "clerk", en: "Great question! Never hesitate to ask.", zh: "问得好！提问千万不要犹豫。", keywords: ["hesitate"] }
      ],
      tips: [
        "raise your hand = 举手。",
        "clarify = 澄清；说明。"
      ]
    },
    {
      scene: "在服务台咨询换货政策",
      situationZh: "你在商场服务台仔细询问商品的换货规定。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I help you?", zh: "你好，有什么可以帮您？" },
        { role: "user", en: "I'd like to know your exchange policy, please.", zh: "我想了解你们的换货政策。", keywords: ["exchange", "policy"] },
        { role: "clerk", en: "You can exchange within seven days with the receipt.", zh: "凭收据七天内可以换货。" },
        { role: "user", en: "What if I don't have the receipt?", zh: "如果没有收据怎么办？", keywords: ["receipt"] },
        { role: "clerk", en: "Then we need your membership phone number.", zh: "那我们需要你办会员时的手机号。" },
        { role: "user", en: "I see. And is the tag required?", zh: "明白了。需要保留吊牌吗？", keywords: ["tag"] },
        { role: "clerk", en: "Yes, the tag must be intact.", zh: "需要，吊牌必须完好。" },
        { role: "user", en: "Got it, thanks for the details.", zh: "明白了，谢谢您讲得这么详细。", keywords: ["details"] }
      ],
      tips: [
        "exchange policy = 换货政策。",
        "intact = 完好无损的。"
      ]
    },
    {
      scene: "在语言班请教发音",
      situationZh: "上英语课时你对一个单词的发音有疑问，向老师请教。",
      roles: { clerk: "老师", user: "我" },
      turns: [
        { role: "user", en: "Excuse me, how do you pronounce this word?", zh: "打扰一下，这个单词怎么发音？", keywords: ["pronounce"] },
        { role: "clerk", en: "It's 'schedule', with the stress on 'sched'.", zh: "读“sched-ule”，重音在“sched”上。" },
        { role: "user", en: "Am I stressing the right syllable?", zh: "我重音标对了吗？", keywords: ["syllable"] },
        { role: "clerk", en: "Almost, try to make the first sound longer.", zh: "差不多，试着把第一个音拉长一点。" },
        { role: "user", en: "Like this? 'SCHED-ule'.", zh: "像这样吗？" },
        { role: "clerk", en: "Perfect! Your pronunciation is improving.", zh: "很好！你的发音在进步。", keywords: ["improving"] },
        { role: "user", en: "Thanks, I'm glad I asked.", zh: "谢谢，幸好我问了。", keywords: ["asked"] }
      ],
      tips: [
        "pronounce = 发音。",
        "syllable = 音节。"
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
    { word: "lucid", phonetic: "/ˈluːsɪd/", meaning: "adj. 清醒的", example: "He was lucid during the talk.", exampleZh: "谈话时他很清醒。" }
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
    },
    {
      scene: "在超市比较两个品牌",
      situationZh: "你在超市货架前比较两款洗发水的价格和成分，犹豫买哪个。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "May I help you find something?", zh: "需要我帮您找什么吗？" },
        { role: "user", en: "I'm comparing these two brands of shampoo.", zh: "我正在比较这两款洗发水。", keywords: ["comparing", "brands", "shampoo"] },
        { role: "clerk", en: "The one on the right is on promotion this week.", zh: "右边那款这周在促销。" },
        { role: "user", en: "But the ingredients look similar. Which is worth it?", zh: "但成分看起来差不多，哪个划算？", keywords: ["ingredients", "worth"] },
        { role: "clerk", en: "The promoted one is cheaper for the same size.", zh: "促销款同样容量却更便宜。" },
        { role: "user", en: "Okay, I'll take the cheaper one.", zh: "好，那我买便宜那款。", keywords: ["cheaper"] },
        { role: "clerk", en: "Good choice. It'll save you a few yuan.", zh: "不错的选择，能省几块钱。" },
        { role: "user", en: "Thanks for helping me compare.", zh: "谢谢你帮我比较。", keywords: ["compare"] }
      ],
      tips: [
        "ingredients = 成分。",
        "worth it = 划算；值得。"
      ]
    },
    {
      scene: "在二手市场讨价还价",
      situationZh: "你在二手市场看中一盏台灯，和摊主商量便宜一点。",
      roles: { clerk: "摊主", user: "我" },
      turns: [
        { role: "user", en: "How much is this desk lamp?", zh: "这盏台灯多少钱？", keywords: ["desk lamp", "how much"] },
        { role: "clerk", en: "It's 60 yuan. It's in good condition.", zh: "60 元，品相很好。" },
        { role: "user", en: "That's a bit high. Can you do 40?", zh: "有点贵，能便宜到 40 吗？", keywords: ["bit high"] },
        { role: "clerk", en: "I can do 50 as a fair deal.", zh: "50 元算公道价。" },
        { role: "user", en: "I'll take it at 45, final offer.", zh: "45 拿走，一口价。", keywords: ["final", "offer"] },
        { role: "clerk", en: "Alright, 45. You drive a hard bargain.", zh: "行吧，45。你可真会讲价。" },
        { role: "user", en: "Thanks! I love this lamp.", zh: "谢谢！我很喜欢这盏灯。", keywords: ["lamp"] }
      ],
      tips: [
        "conditions = 品相；状况。",
        "a hard bargain = 讨价还价的行家。"
      ]
    },
    {
      scene: "和朋友聊消费习惯",
      situationZh: "你发现朋友总是买名牌包，两人聊起攀比和理智消费。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "user", en: "You bought another designer bag?", zh: "你又买了个名牌包？", keywords: ["designer", "bag"] },
        { role: "clerk", en: "Yes. Everyone around me has one these days.", zh: "是啊，最近周围人都有了。" },
        { role: "user", en: "Honestly, comparing with others just makes us unhappy.", zh: "说实话，攀比只会让我们不快乐。", keywords: ["comparing", "unhappy"] },
        { role: "clerk", en: "I know, but I can't help it sometimes.", zh: "我知道，但有时忍不住。" },
        { role: "user", en: "Maybe focus on your own progress instead.", zh: "也许该专注自己的进步。", keywords: ["focus", "progress"] },
        { role: "clerk", en: "You're right. I'll save instead of showing off.", zh: "你说得对，我还是存钱吧，别显摆。" },
        { role: "user", en: "That's the spirit. Saving brings real peace.", zh: "这才对，存钱带来真正的安心。", keywords: ["saving", "peace"] }
      ],
      tips: [
        "designer bag = 名牌包。",
        "show off = 炫耀。"
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
    { word: "luminous", phonetic: "/ˈluːmɪnəs/", meaning: "adj. 发光的", example: "The luminous watch glows.", exampleZh: "夜光表会发光。" }
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
    },
    {
      scene: "早晨通勤遇到下雨",
      situationZh: "你上班路上突然下雨没带伞，但仍保持好心态去公司。",
      roles: { clerk: "同事", user: "我" },
      turns: [
        { role: "user", en: "Oh no, it's raining and I forgot my umbrella.", zh: "糟糕，下雨了，我忘带伞了。", keywords: ["raining", "umbrella"] },
        { role: "clerk", en: "Here, take my umbrella if you're going this way.", zh: "给，如果你顺路就把我的伞拿去。" },
        { role: "user", en: "Thanks so much, that's kind of you.", zh: "太谢谢了，你真好。", keywords: ["kind"] },
        { role: "clerk", en: "It's just a little rain, right? A good mood keeps you dry inside.", zh: "下点雨怕什么？好心情会让你心里一直干爽。" },
        { role: "user", en: "You're right. I'll stay positive and enjoy the day.", zh: "你说得对，我保持好心态享受这一天。", keywords: ["stay", "positive"] },
        { role: "clerk", en: "Exactly. Attitude makes all the difference.", zh: "正是，心态决定一切。" },
        { role: "user", en: "Thanks, you've brightened my morning.", zh: "谢谢你，你照亮了我的早晨。", keywords: ["brightened"] }
      ],
      tips: [
        "umbrella = 雨伞。",
        "attitude = 心态；态度。"
      ]
    },
    {
      scene: "在机场等待延误航班",
      situationZh: "你的航班延误了，你保持耐心处理，并询问最新起飞信息。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "clerk", en: "Attention, your flight is delayed by one hour.", zh: "请注意，您的航班延误一小时。" },
        { role: "user", en: "I see. What time is the updated departure?", zh: "明白了。新的起飞时间是什么时候？", keywords: ["departure"] },
        { role: "clerk", en: "Nine o'clock instead of eight. We apologize.", zh: "由 8 点改为 9 点，很抱歉。" },
        { role: "user", en: "That's okay. A delay isn't a disaster, right?", zh: "没关系，延误不是灾难，对吧？", keywords: ["delay", "disaster"] },
        { role: "clerk", en: "Exactly! You're handling it well.", zh: "正是，您处理得很好。" },
        { role: "user", en: "I'll grab a coffee and wait patiently.", zh: "我去买杯咖啡耐心等。", keywords: ["patiently"] },
        { role: "clerk", en: "Great attitude. We'll keep you updated.", zh: "心态真好，我们会及时告知。" },
        { role: "user", en: "Thanks for letting me know.", zh: "谢谢你通知我。", keywords: ["letting"] }
      ],
      tips: [
        "delayed = 延误的。",
        "patiently = 耐心地。"
      ]
    },
    {
      scene: "在咖啡店安慰低落的朋友",
      situationZh: "朋友面试失败很沮丧，你用积极心态开导他。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "clerk", en: "I failed the interview again. I feel awful.", zh: "我又面试失败了，感觉糟透了。" },
        { role: "user", en: "Don't be so hard on yourself. It's not the end.", zh: "别对自己太苛刻，这不是终点。", keywords: ["hard", "end"] },
        { role: "clerk", en: "But everyone else gets offers so easily.", zh: "可别人都那么容易拿到 offer。" },
        { role: "user", en: "Everyone faces setbacks. Focus on what you learned.", zh: "每个人都会遇到挫折，想想你学到了什么。", keywords: ["setbacks", "learned"] },
        { role: "clerk", en: "I guess I can review my weak points.", zh: "也许我可以复盘一下自己的弱点。" },
        { role: "user", en: "Exactly. A good attitude turns failure into growth.", zh: "正是，好心态能把失败变成成长。", keywords: ["attitude", "growth"] },
        { role: "clerk", en: "Thanks. You always help me see the bright side.", zh: "谢谢你，你总能让我看到好的一面。" },
        { role: "user", en: "Anytime. Keep your chin up.", zh: "随时找我，打起精神。", keywords: ["chin"] }
      ],
      tips: [
        "setback = 挫折。",
        "bright side = 好的一面。"
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
    { word: "jubilant", phonetic: "/ˈdʒuːbɪlənt/", meaning: "adj. 欢呼的；喜气洋洋的", example: "The fans were jubilant.", exampleZh: "球迷们欢欣鼓舞。" }
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
    },
    {
      scene: "在音像店挑选英文歌曲",
      situationZh: "你想买一张英文歌曲 CD 用来练习听力。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, are you looking for something specific?", zh: "你好，需要找什么特别的吗？" },
        { role: "user", en: "I want a CD with clear English lyrics to practice listening.", zh: "我想买一张歌词清晰的英文歌 CD 来练听力。", keywords: ["lyrics", "listening"] },
        { role: "clerk", en: "This singer is famous for simple, slow songs.", zh: "这位歌手以简单舒缓的歌曲闻名。" },
        { role: "user", en: "Great. Do the lyrics come with the CD?", zh: "太好了。CD 附带歌词吗？", keywords: ["lyrics", "CD"] },
        { role: "clerk", en: "Yes, there's a booklet with all the words.", zh: "有的，附赠一本歌词册。" },
        { role: "user", en: "Perfect. I'll sing along to improve my pronunciation.", zh: "太好了，我要跟着唱来改善发音。", keywords: ["sing along", "pronunciation"] },
        { role: "clerk", en: "That's the best way to learn!", zh: "这是最好的学习方式！" },
        { role: "user", en: "Thanks for the recommendation.", zh: "谢谢你的推荐。", keywords: ["recommendation"] }
      ],
      tips: [
        "lyrics booklet = 歌词册。",
        "practice = 练习。"
      ]
    },
    {
      scene: "在咖啡店和朋友聊音乐口味",
      situationZh: "你和朋友边喝咖啡边交流喜欢的音乐风格。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "user", en: "What kind of music do you usually listen to?", zh: "你平时都听什么音乐？", keywords: ["kind", "listen"] },
        { role: "clerk", en: "Mostly pop and a little jazz.", zh: "大多是流行乐，也听一点爵士。" },
        { role: "user", en: "I prefer acoustic songs with clear vocals.", zh: "我更喜欢木吉他配乐、人声清晰的歌。", keywords: ["acoustic", "vocals"] },
        { role: "clerk", en: "Those are great for catching every word.", zh: "那种歌很适合听清每个词。" },
        { role: "user", en: "Exactly, that's how I grow my vocabulary.", zh: "没错，我就是这样扩充词汇量。", keywords: ["vocabulary"] },
        { role: "clerk", en: "I should try that method too.", zh: "我也该试试这个方法。" },
        { role: "user", en: "Let's exchange playlists sometime.", zh: "改天我们交换一下歌单吧。", keywords: ["playlists"] }
      ],
      tips: [
        "acoustic = 原声的；木吉他的。",
        "playlist = 播放列表。"
      ]
    },
    {
      scene: "在网上预约音乐私教课",
      situationZh: "你想报一节音乐私教课提升英文歌曲演唱。",
      roles: { clerk: "前台", user: "我" },
      turns: [
        { role: "user", en: "I'd like to book a music coaching session.", zh: "我想约一节音乐私教课。", keywords: ["book", "session"] },
        { role: "clerk", en: "Sure. Do you prefer weekdays or weekends?", zh: "好的。您偏好工作日还是周末？" },
        { role: "user", en: "Weekends would be better for me.", zh: "周末对我更合适。", keywords: ["weekends"] },
        { role: "clerk", en: "We have a slot this Saturday at ten.", zh: "这周六上午十点有一个空档。" },
        { role: "user", en: "That works. Any warm-up needed beforehand?", zh: "可以。课前需要做什么准备吗？", keywords: ["warm-up"] },
        { role: "clerk", en: "Just practice the song we sent you.", zh: "把我们发你的那首歌练一练就行。" },
        { role: "user", en: "Got it. See you Saturday!", zh: "明白，周六见！", keywords: ["Saturday"] }
      ],
      tips: [
        "book a session = 预约一节课。",
        "slot = 时间段；空档。"
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
    { word: "energy", phonetic: "/ˈenədʒi/", meaning: "n. 能源；能量", example: "Sunlight gives us clean energy.", exampleZh: "阳光给我们清洁的能源。" }
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
    },
    {
      scene: "在修理店带杯子买咖啡",
      situationZh: "你自带玻璃杯去买咖啡，减少一次性纸杯使用。",
      roles: { clerk: "咖啡师", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, what can I get you today?", zh: "你好，今天想喝点什么？" },
        { role: "user", en: "A medium latte, but I have my own cup.", zh: "中杯拿铁，但我自带杯子。", keywords: ["latte", "own cup"] },
        { role: "clerk", en: "Great, you'll save 2 yuan for bringing your cup.", zh: "太好了，自带杯子可以省 2 元。" },
        { role: "user", en: "Nice! It also cuts down on paper waste.", zh: "真不错，还能减少纸杯浪费。", keywords: ["cuts down", "waste"] },
        { role: "clerk", en: "Exactly. Small habits really add up.", zh: "没错，小习惯慢慢就起作用了。" },
        { role: "user", en: "Here's my cup. Fill it up, please.", zh: "这是我的杯子，请帮我装满。", keywords: ["fill up"] },
        { role: "clerk", en: "Here you go. On the house with your savings.", zh: "给您。省下的钱算您的。" }
      ],
      tips: [
        "on the house = 免单；由店家请客。",
        "cut down on = 减少。"
      ]
    },
    {
      scene: "说服邻居一起植树",
      situationZh: "你邀请邻居周末参加社区的植树活动。",
      roles: { clerk: "邻居", user: "我" },
      turns: [
        { role: "user", en: "There's a tree-planting event this Saturday. Want to join?", zh: "这周六有植树活动，要一起吗？", keywords: ["tree-planting", "join"] },
        { role: "clerk", en: "Why plant trees exactly?", zh: "为什么非要植树呢？" },
        { role: "user", en: "Trees clean the air and cool the city.", zh: "树木能净化空气、给城市降温。", keywords: ["clean", "cool"] },
        { role: "clerk", en: "That does sound worthwhile.", zh: "听起来确实值得。" },
        { role: "user", en: "It protects the environment and it's fun, too.", zh: "保护环境，而且也挺有趣。", keywords: ["protects"] },
        { role: "clerk", en: "Count me in. What do we need to bring?", zh: "算我一个。需要带什么？" },
        { role: "user", en: "Just gloves and a shovel. I'll bring both.", zh: "带手套和铁锹就行，我会带上。", keywords: ["gloves", "shovel"] },
        { role: "clerk", en: "Perfect. See you Saturday morning!", zh: "太好了，周六早上见！" }
      ],
      tips: [
        "tree-planting = 植树。",
        "shovel = 铁锹。"
      ]
    },
    {
      scene: "在节能商店选购电器",
      situationZh: "你在家电店挑选节能省电的空调。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! Looking for a new conditioner?", zh: "欢迎光临！想看空调吗？" },
        { role: "user", en: "Yes, I want an energy-saving one.", zh: "是的，我想要节能款。", keywords: ["energy-saving"] },
        { role: "clerk", en: "This model has a five-star energy label.", zh: "这款是一级能效。" },
        { role: "user", en: "Will it really lower my electricity bill?", zh: "它真的能降低我的电费吗？", keywords: ["lower", "bill"] },
        { role: "clerk", en: "It uses about 30% less power.", zh: "它能省约 30% 的电。" },
        { role: "user", en: "That's worth it for the planet and my wallet.", zh: "这对地球和钱包都划算。", keywords: ["planet", "wallet"] },
        { role: "clerk", en: "Saving energy saves money. Sweet deal.", zh: "省电就是省钱，很划算。" }
      ],
      tips: [
        "energy label = 能效标识。",
        "lower the bill = 降低账单。"
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
    { word: "battery", phonetic: "/ˈbætəri/", meaning: "n. 电池", example: "My battery is running low.", exampleZh: "我的电池快没电了。" }
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
    },
    {
      scene: "在家请师傅上门修网络",
      situationZh: "你的WiFi老是断线，让师傅上门检修路由器。",
      roles: { clerk: "师傅", user: "我" },
      turns: [
        { role: "clerk", en: "Hi, I'm here to check your network.", zh: "你好，我来检查一下你的网络。" },
        { role: "user", en: "Thanks. The WiFi keeps dropping all day.", zh: "谢谢，WiFi 一整天总是掉线。", keywords: ["dropping"] },
        { role: "clerk", en: "Let me look at the router's signal strength.", zh: "让我看看路由器的信号强度。" },
        { role: "user", en: "Is there anything wrong with it?", zh: "它有问题吗？", keywords: ["wrong"] },
        { role: "clerk", en: "It's a bit old. A reboot usually helps.", zh: "有点旧了，重启一下通常会好。" },
        { role: "user", en: "Could you also set up a stronger password?", zh: "能顺便设置个更复杂的密码吗？", keywords: ["password"] },
        { role: "clerk", en: "Done. Strong password, better signal now.", zh: "好了，密码已加固，信号也改善了。" },
        { role: "user", en: "Great, thanks for fixing it quickly.", zh: "太好了，谢谢您这么快修好。", keywords: ["fixing"] }
      ],
      tips: [
        "drop = 掉线。",
        "signal strength = 信号强度。"
      ]
    },
    {
      scene: "在校友群求助安装软件",
      situationZh: "你在群里请教同学如何安装一个学习软件。",
      roles: { clerk: "同学", user: "我" },
      turns: [
        { role: "user", en: "Has anyone installed this study app?", zh: "有人装过这个学习应用吗？", keywords: ["installed", "study app"] },
        { role: "clerk", en: "Yes, I use it every day for vocabulary.", zh: "装了，我每天用它背单词。" },
        { role: "user", en: "Can you tell me the download steps?", zh: "能告诉我下载步骤吗？", keywords: ["download", "steps"] },
        { role: "clerk", en: "Search its name in the store and tap install.", zh: "在商店里搜它的名字，点安装就行。" },
        { role: "user", en: "That's it? No extra settings needed?", zh: "就这么简单？不用额外设置吗？", keywords: ["settings"] },
        { role: "clerk", en: "Just allow the network permission on first launch.", zh: "首次打开时允许联网权限就行。" },
        { role: "user", en: "Got it. Thanks for the quick help.", zh: "明白，谢谢你这么快帮忙。", keywords: ["quick help"] }
      ],
      tips: [
        "install = 安装。",
        "permission = 权限。"
      ]
    },
    {
      scene: "在咖啡店共享热点",
      situationZh: "你的手机流量用完了，向朋友借热点上网。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "user", en: "My data ran out. Can I use your hotspot?", zh: "我流量用完了，能用你的热点吗？", keywords: ["data", "hotspot"] },
        { role: "clerk", en: "Sure, the network here is unstable though.", zh: "可以啊，不过这里的网络不太稳。" },
        { role: "user", en: "Even so, it's better than no signal at all.", zh: "总比完全没信号好。", keywords: ["signal"] },
        { role: "clerk", en: "What's the password?", zh: "热点密码是什么？" },
        { role: "user", en: "It's my name followed by 123.", zh: "是我名字加 123。", keywords: ["password"] },
        { role: "clerk", en: "Got it. I'm connected now.", zh: "好了，我连上了。" },
        { role: "user", en: "Perfect. I'll just send one quick file.", zh: "太好了，我只发一个文件。", keywords: ["file"] }
      ],
      tips: [
        "hotspot = 移动热点。",
        "run out = 用完。"
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
    { word: "body", phonetic: "/ˈbɒdi/", meaning: "n. 身体", example: "The body needs exercise.", exampleZh: "身体需要锻炼。" }
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
    },
    {
      scene: "在市场挑选新鲜蔬菜",
      situationZh: "你在早市挑选新鲜蔬菜，计划做一份健康沙拉。",
      roles: { clerk: "摊主", user: "我" },
      turns: [
        { role: "clerk", en: "Fresh greens today! Anything you like?", zh: "今天的青菜很新鲜！要挑点啥？" },
        { role: "user", en: "Are these tomatoes fresh?", zh: "这些西红柿新鲜吗？", keywords: ["tomatoes", "fresh"] },
        { role: "clerk", en: "Picked this morning. Sweet and juicy.", zh: "早上刚摘的，又甜又多汁。" },
        { role: "user", en: "I'll take some plus a head of lettuce.", zh: "我称一点，再来一颗生菜。", keywords: ["head", "lettuce"] },
        { role: "clerk", en: "That'll be 12 yuan together.", zh: "一共 12 元。" },
        { role: "user", en: "Perfect for my healthy salad tonight.", zh: "正好做今晚的健康沙拉。", keywords: ["healthy", "salad"] },
        { role: "clerk", en: "Good choice for your body!", zh: "对身体好的选择！" }
      ],
      tips: [
        "lettuce = 生菜。",
        "fresh = 新鲜的。"
      ]
    },
    {
      scene: "在公园慢跑后休息",
      situationZh: "你和朋友相约晨跑，跑完在长椅上休息喝水。",
      roles: { clerk: "朋友", user: "我" },
      turns: [
        { role: "user", en: "Great run! I feel full of energy now.", zh: "跑得真爽！我现在浑身是劲。", keywords: ["run", "energy"] },
        { role: "clerk", en: "Me too. My legs are a little tired, though.", zh: "我也是，不过腿有点酸。" },
        { role: "user", en: "Let's rest and drink some water.", zh: "休息一下，喝点水吧。", keywords: ["rest", "water"] },
        { role: "clerk", en: "Good idea. Hydration is key.", zh: "好主意，补水很重要。" },
        { role: "user", en: "We should do this every morning.", zh: "我们该每天早上都跑。", keywords: ["every morning"] },
        { role: "clerk", en: "Agreed. It keeps us strong and calm.", zh: "同意，它能让我们强壮又平静。" },
        { role: "user", en: "Same time tomorrow then!", zh: "那明天同一时间见！", keywords: ["tomorrow"] }
      ],
      tips: [
        "hydration = 补水。",
        "full of energy = 精力充沛。"
      ]
    },
    {
      scene: "在药店买维生素",
      situationZh: "你到药店想买一瓶补充营养的维生素。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Hello, how can I assist you?", zh: "你好，需要什么帮助？" },
        { role: "user", en: "I'm looking for a multivitamin.", zh: "我想买一瓶复合维生素。", keywords: ["multivitamin"] },
        { role: "clerk", en: "This one supports daily health and energy.", zh: "这款支持日常健康和精力。" },
        { role: "user", en: "Is it safe to take every day?", zh: "每天吃安全吗？", keywords: ["safe", "every day"] },
        { role: "clerk", en: "Yes, just one tablet after a meal.", zh: "安全，饭后吃一片即可。" },
        { role: "user", en: "Great, I'll take this bottle.", zh: "好的，我要这一瓶。", keywords: ["bottle"] },
        { role: "clerk", en: "Sure. Remember, vitamins help but diet matters too.", zh: "好的，记住维生素只能辅助，饮食同样重要。" }
      ],
      tips: [
        "multivitamin = 复合维生素。",
        "diet = 日常饮食。"
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
    { word: "suitcase", phonetic: "/ˈsuːtkeɪs/", meaning: "n. 行李箱", example: "I packed my suitcase last night.", exampleZh: "我昨晚收拾好行李箱。" }
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
    },
    {
      scene: "在机场自助值机",
      situationZh: "你在机场自助机上打印登机牌并询问登机口。",
      roles: { clerk: "工作人员", user: "我" },
      turns: [
        { role: "user", en: "Excuse me, how do I print my boarding pass?", zh: "请问，我怎么打印登机牌？", keywords: ["boarding pass", "print"] },
        { role: "clerk", en: "Scan your passport at this machine.", zh: "在这台机器上扫一下护照。" },
        { role: "user", en: "Got it. It works now.", zh: "明白了，现在可以用。", keywords: ["works"] },
        { role: "clerk", en: "Which gate is printed on your pass?", zh: "登机牌上写了哪个登机口？" },
        { role: "user", en: "Gate C12. What time does boarding start?", zh: "C12 号。什么时候开始登机？", keywords: ["gate", "boarding"] },
        { role: "clerk", en: "Boarding begins at 10, thirty minutes before departure.", zh: "10 点开始登机，比起飞早 30 分钟。" },
        { role: "user", en: "Thanks, I have plenty of time to relax.", zh: "谢谢，我有充足时间休息一下。", keywords: ["relax"] }
      ],
      tips: [
        "boarding pass = 登机牌。",
        "departure = 起飞；出发。"
      ]
    },
    {
      scene: "在观光车站咨询路线",
      situationZh: "你在城市观光车站询问到海滩的班车路线。",
      roles: { clerk: "售票员", user: "我" },
      turns: [
        { role: "user", en: "Does this bus go to the beach?", zh: "这趟车去海滩吗？", keywords: ["bus", "beach"] },
        { role: "clerk", en: "Yes, it stops at the seaside every hour.", zh: "去的，每小时在海边停靠一班。" },
        { role: "user", en: "How long is the ride?", zh: "车程要多久？", keywords: ["how long", "ride"] },
        { role: "clerk", en: "About forty minutes with the views along the way.", zh: "沿途有风景，大约四十分钟。" },
        { role: "user", en: "Great, I'd like two round-trip tickets.", zh: "好的，我要两张往返票。", keywords: ["round-trip", "tickets"] },
        { role: "clerk", en: "That's 30 yuan for two.", zh: "两张共 30 元。" },
        { role: "user", en: "Thanks. I can't wait for the view.", zh: "谢谢，我都等不及看风景了。", keywords: ["view"] }
      ],
      tips: [
        "round-trip ticket = 往返票。",
        "can't wait = 迫不及待。"
      ]
    },
    {
      scene: "在纪念品店选购礼物",
      situationZh: "你在一家纪念品店想给家人挑一份伴手礼。",
      roles: { clerk: "店员", user: "我" },
      turns: [
        { role: "clerk", en: "Welcome! Looking for a souvenir?", zh: "欢迎！需要挑伴手礼吗？" },
        { role: "user", en: "Yes, a small gift for my mother.", zh: "是的，给妈妈挑个小礼物。", keywords: ["gift", "mother"] },
        { role: "clerk", en: "These fridge magnets are popular and light.", zh: "这些冰箱贴很受欢迎，又轻便。" },
        { role: "user", en: "Do you have a local handicraft?", zh: "有当地的手工艺品吗？", keywords: ["local", "handicraft"] },
        { role: "clerk", en: "Yes, hand-woven bookmarks from the island.", zh: "有，是岛上手工织的书签。" },
        { role: "user", en: "I'll take one bookmark and two magnets.", zh: "我要一个书签和两个冰箱贴。", keywords: ["bookmark", "magnets"] },
        { role: "clerk", en: "That's 45 yuan. Cash or card?", zh: "共 45 元，现金还是刷卡？" }
      ],
      tips: [
        "souvenir = 纪念品。",
        "handicraft = 手工艺品。"
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
    { word: "believe", phonetic: "/bɪˈliːv/", meaning: "v. 相信", example: "Believe in yourself.", exampleZh: "相信自己。" }
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
    },
    {
      scene: "在图书馆请教学习规划",
      situationZh: "你向学长请教如何一步步实现考研的目标。",
      roles: { clerk: "学长", user: "我" },
      turns: [
        { role: "user", en: "I want to reach my goal of passing the exam. Any advice?", zh: "我想实现考研的目标，有什么建议吗？", keywords: ["goal", "advice"] },
        { role: "clerk", en: "Break your big goal into small weekly steps.", zh: "把大目标拆成每周小步骤。" },
        { role: "user", en: "I see. Where do I start first?", zh: "明白，那我该从哪里开始？", keywords: ["start"] },
        { role: "clerk", en: "Build a study routine and stick to it.", zh: "先建立学习习惯并坚持。" },
        { role: "user", en: "What if I lose motivation halfway?", zh: "要是我中途没了动力怎么办？", keywords: ["motivation"] },
        { role: "clerk", en: "Remember your dream and track your progress.", zh: "记住梦想，并记录自己的进步。" },
        { role: "user", en: "Thanks. I'll believe in myself and keep going.", zh: "谢谢，我会相信自己，继续前行。", keywords: ["believe", "keep going"] }
      ],
      tips: [
        "break down = 拆分。",
        "motivation = 动力。"
      ]
    },
    {
      scene: "在跑步社团认识新朋友",
      situationZh: "你第一次参加晨跑社团，认识同样想挑战马拉松的伙伴。",
      roles: { clerk: "队友", user: "我" },
      turns: [
        { role: "user", en: "Hi, is this your first time here too?", zh: "你好，你也是第一次来吗？", keywords: ["first time"] },
        { role: "clerk", en: "Yes. I hope to finish my first 5K soon.", zh: "是啊，我希望能早点跑完第一个 5 公里。", keywords: ["hope", "5K"] },
        { role: "user", en: "Me too. My dream is a full marathon someday.", zh: "我也是，我的梦想是有一天跑全程马拉松。", keywords: ["dream", "marathon"] },
        { role: "clerk", en: "That's a bold goal. Let's train together.", zh: "这目标很有挑战，我们一起练吧。" },
        { role: "user", en: "Sounds good. Effort will get us there.", zh: "好呀，努力会带我们到达。", keywords: ["effort"] },
        { role: "clerk", en: "Keep at it and never give up.", zh: "坚持下去，永不言弃。" },
        { role: "user", en: "Deal. See you at six tomorrow!", zh: "说定了，明早六点见！", keywords: ["tomorrow"] }
      ],
      tips: [
        "marathon = 马拉松。",
        "never give up = 永不放弃。"
      ]
    },
    {
      scene: "在家庭聚餐聊未来计划",
      situationZh: "和家人一起吃晚饭，你分享学习英语和出国进修的梦想。",
      roles: { clerk: "家人", user: "我" },
      turns: [
        { role: "clerk", en: "What's new with your studies these days?", zh: "你最近学习怎么样？" },
        { role: "user", en: "I'm working hard to improve my English.", zh: "我在努力提高英语。", keywords: ["hard", "improve"] },
        { role: "clerk", en: "Why English all of a sudden?", zh: "怎么突然重视英语了？" },
        { role: "user", en: "It's part of my plan to study abroad.", zh: "这是我去国外进修计划的一部分。", keywords: ["plan", "abroad"] },
        { role: "clerk", en: "That's a wonderful dream, we support you.", zh: "这是个美好的梦想，我们支持你。" },
        { role: "user", en: "Thank you. I'll make you proud.", zh: "谢谢，我会让你们骄傲。", keywords: ["proud"] },
        { role: "clerk", en: "We already are. Keep believing in yourself.", zh: "我们已经为你骄傲了，继续相信自己。" }
      ],
      tips: [
        "study abroad = 出国留学。",
        "proud = 自豪的。"
      ]
    }
  ]
},
];
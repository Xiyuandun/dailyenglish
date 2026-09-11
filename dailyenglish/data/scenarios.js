// DailyEnglish - 每日场景对话数据（多轮完整对话场景，句数 5~30 句灵活）
// role: "clerk" = 对方(NPC)，"user" = 学习者需说出英文的轮次
window.DAILY_SCENARIOS = [
  {
    scene: "咖啡店点咖啡",
    situationZh: "你在咖啡店，想点一杯冰黑咖啡。请先阅读整段中文对话，然后录音说出英文。",
    roles: { clerk: "店员", user: "我" },
    turns: [
      { role: "clerk", en: "What can I get for you?", zh: "请问需要什么？" },
      { role: "user", en: "A cup of coffee, please.", zh: "一杯咖啡，谢谢！", keywords: ["coffee", "please"] },
      { role: "clerk", en: "Hot or iced?", zh: "请问要热的还是冰的？" },
      { role: "user", en: "Iced, please.", zh: "冰的。", keywords: ["iced"] },
      { role: "clerk", en: "What size would you like?", zh: "请问要什么杯型？" },
      { role: "user", en: "A large one, please.", zh: "大杯，谢谢。", keywords: ["large"] },
      { role: "clerk", en: "Would you like milk or sugar?", zh: "需要加牛奶或者糖吗？" },
      { role: "user", en: "Neither, thanks. I prefer black coffee.", zh: "都不要，我喜欢黑咖啡。", keywords: ["neither", "black coffee"] },
      { role: "clerk", en: "Sure. Anything else? A pastry maybe?", zh: "好的。还要别的吗？来个糕点？" },
      { role: "user", en: "No, thanks. That's all.", zh: "不用了，就这些。", keywords: ["that's all"] },
      { role: "clerk", en: "That's 25 yuan. Please wait a moment.", zh: "一共 25 元。请稍等。" }
    ],
    tips: [
      "点饮品用 A cup of / A glass of 更地道。",
      "Hot or iced? 是简化问句，完整为 Would you like it hot or iced?",
      "black coffee = 黑咖啡（不加奶和糖）。",
      "Neither 表示\"两者都不要\"，比 No, thanks 更明确。",
      "That's all. 是点单结束的常用表达。"
    ]
  },
  {
    scene: "餐厅点餐",
    situationZh: "你在餐厅和朋友用餐，需要点牛排和红酒。请先阅读整段中文对话，然后录音说出英文。",
    roles: { clerk: "服务员", user: "我" },
    turns: [
      { role: "clerk", en: "Welcome! How many people?", zh: "欢迎光临！请问几位？" },
      { role: "user", en: "Just two, please.", zh: "两位，谢谢。", keywords: ["two", "please"] },
      { role: "clerk", en: "This way, please. Here's the menu.", zh: "这边请。这是菜单。" },
      { role: "user", en: "I'd like a steak, medium rare.", zh: "我想要一份三分熟的牛排。", keywords: ["steak", "medium rare"] },
      { role: "clerk", en: "Anything to drink?", zh: "请问喝点什么？" },
      { role: "user", en: "A glass of red wine, please.", zh: "一杯红酒，谢谢。", keywords: ["red wine", "glass"] },
      { role: "clerk", en: "Sure, I'll be right back.", zh: "好的，马上来。" }
    ],
    tips: [
      "beef 是不可数名词，不能加 a；steak 才是\"牛排\"。",
      "medium rare = 三分熟；well done = 全熟。",
      "I'd like 比 I want 更礼貌。",
      "A glass of 用于饮品；a cup of 多用于热饮。"
    ]
  },
  {
    scene: "打车出行",
    situationZh: "你打车去最近的地铁站，想换乘二号线。请先阅读整段中文对话，然后录音说出英文。",
    roles: { clerk: "司机", user: "我" },
    turns: [
      { role: "clerk", en: "Where to?", zh: "去哪儿？" },
      { role: "user", en: "To the nearest subway station, please.", zh: "去最近的地铁站。", keywords: ["nearest", "subway station"] },
      { role: "clerk", en: "Which line do you need?", zh: "你要坐几号线？" },
      { role: "user", en: "Line 2.", zh: "二号线。", keywords: ["line"] },
      { role: "clerk", en: "It's about 10 minutes. Traffic is light now.", zh: "大概十分钟，现在不堵车。" },
      { role: "user", en: "Great, how much is it?", zh: "太好了，多少钱？", keywords: ["how much"] },
      { role: "clerk", en: "Around 20 yuan.", zh: "大概二十块。" }
    ],
    tips: [
      "Where to? 是口语化的\"去哪儿\"，比 Where are you going? 简洁。",
      "the nearest + 地点 = 最近的…",
      "Traffic is light = 路况畅通（反义：heavy）。",
      "How much is it? 询问价格的标准说法。"
    ]
  },
  {
    scene: "医院挂号",
    situationZh: "你在医院挂号，发烧头痛从昨天开始，想挂内科。请先阅读整段中文对话，然后录音说出英文。",
    roles: { clerk: "护士", user: "我" },
    turns: [
      { role: "clerk", en: "What seems to be the problem?", zh: "请问哪里不舒服？" },
      { role: "user", en: "I have a fever and a headache.", zh: "我发烧头痛。", keywords: ["fever", "headache"] },
      { role: "clerk", en: "How long have you had it?", zh: "多久了？" },
      { role: "user", en: "Since yesterday.", zh: "从昨天开始。", keywords: ["since", "yesterday"] },
      { role: "clerk", en: "Which department do you want?", zh: "你要挂什么科？" },
      { role: "user", en: "Internal medicine, please.", zh: "内科。", keywords: ["internal medicine"] },
      { role: "clerk", en: "Please fill out this form and wait.", zh: "请填表后等候。" }
    ],
    tips: [
      "What seems to be the problem? 是医护常用问句。",
      "have a fever = 发烧；have a headache = 头痛（注意都有 a）。",
      "Since + 时间点，表示\"从…起\"。",
      "Internal medicine = 内科；Surgery = 外科。"
    ]
  },
  {
    scene: "朋友聚会",
    situationZh: "下班后遇到老朋友，你们决定一起去吃披萨。请先阅读整段中文对话，然后录音说出英文。",
    roles: { clerk: "朋友", user: "我" },
    turns: [
      { role: "clerk", en: "Hey! Long time no see!", zh: "嘿！好久不见！" },
      { role: "user", en: "Yeah! How have you been?", zh: "是啊！最近怎么样？", keywords: ["how", "been"] },
      { role: "clerk", en: "Pretty good. Want to grab dinner?", zh: "挺好的。一起吃晚饭吗？" },
      { role: "user", en: "Sure! What do you feel like?", zh: "好啊！你想吃什么？", keywords: ["sure", "feel like"] },
      { role: "clerk", en: "How about pizza?", zh: "披萨怎么样？" },
      { role: "user", en: "Sounds great! Let's go.", zh: "听起来不错！走吧。", keywords: ["sounds", "let's"] },
      { role: "clerk", en: "Awesome! Let's go!", zh: "太棒了！走吧！" }
    ],
    tips: [
      "Long time no see! 是口语化的\"好久不见\"。",
      "How have you been? 询问近况（现在完成时）。",
      "grab dinner = 随便吃个晚饭（口语化）。",
      "What do you feel like? = 你想吃什么？比 What do you want? 更地道。",
      "Sounds great! 表示赞同对方提议。"
    ]
  }
];

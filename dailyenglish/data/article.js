// DailyEnglish - 每日文章数据
window.DAILY_ARTICLE = {
  title: "The Secret Life of Octopuses",
  titleZh: "章鱼的秘密生活",
  paragraphs: [
    {
      en: "Octopuses are highly intelligent creatures.",
      zh: "章鱼是高度聪明的生物。"
    },
    {
      en: "They can solve puzzles, use tools, and even escape from tanks.",
      zh: "它们能解谜题、使用工具，甚至能从水箱中逃脱。"
    },
    {
      en: "Scientists have observed them opening jars to get food — a behavior once thought impossible in invertebrates.",
      zh: "科学家观察到它们会拧开罐子获取食物——这种行为曾被认为是无脊椎动物不可能做到的。"
    },
    {
      en: "Octopuses have three hearts and blue blood.",
      zh: "章鱼有三颗心脏和蓝色的血液。"
    },
    {
      en: "They can change color in an instant to hide from enemies.",
      zh: "它们能瞬间变色以躲避敌人。"
    }
  ],
  phrases: [
    { phrase: "solve puzzles", meaning: "解谜题" },
    { phrase: "use tools", meaning: "使用工具（如用椰子壳当庇护所）" },
    { phrase: "escape from tanks", meaning: "从水箱中逃脱" },
    { phrase: "invertebrates", meaning: "无脊椎动物（反义词：vertebrates 脊椎动物）" },
    { phrase: "change color", meaning: "变色（伪装）" }
  ],
  grammar: [
    { point: "have observed them opening...", explain: "observe sb. doing sth. —— 观察到某人正在做某事（强调动作进行中）。" },
    { point: "once thought impossible", explain: "过去分词短语作后置定语，修饰 a behavior，意为\"曾被认为是...的\"。" }
  ],
  tips: [
    "affect vs effect: affect 是动词（影响），effect 是名词（效果）。",
    "intelligent → 同义替换：smart, clever, bright。",
    "impossible → 反义词：possible；前缀 im- 用于以 p/b/m 开头的词前。"
  ],
  quiz: {
    choice: [
      {
        q: "What can octopuses do according to the passage?",
        options: ["Only swim", "Solve puzzles and use tools", "Only change color", "Nothing special"],
        answer: 1
      },
      {
        q: "How many hearts does an octopus have?",
        options: ["One", "Two", "Three", "Four"],
        answer: 2
      },
      {
        q: "What color is an octopus's blood?",
        options: ["Red", "Blue", "Green", "White"],
        answer: 1
      },
      {
        q: "The word 'invertebrates' refers to animals without a ____.",
        options: ["heart", "brain", "backbone", "eye"],
        answer: 2
      },
      {
        q: "Why do octopuses change color?",
        options: ["For fun", "To hide from enemies", "To attract mates", "To show anger"],
        answer: 1
      }
    ],
    fill: [
      { q: "Octopuses are highly _____ creatures. (聪明的)", answer: "intelligent" },
      { q: "They can _____ from tanks. (逃脱)", answer: "escape" },
      { q: "Scientists have _____ them opening jars. (观察)", answer: "observed" }
    ],
    writing: {
      prompt: "Write 3-5 sentences describing how an animal's special ability helps it survive.",
      exampleAnswer: "The octopus can change color to hide from enemies. This ability helps it survive in the ocean. When a predator comes near, the octopus blends into the rocks and becomes invisible. This shows how nature gives each animal a unique way to stay alive."
    }
  }
};

import type { CurriculumSeed } from '../languages';

export const DIALOGUE_SEEDS: CurriculumSeed[] = [
  // =========================================================================
  // CHINESE (MANDARIN) DIALOGUES (中文短对话) - Highly practical & authentic
  // =========================================================================
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好！很高兴认识你。\nB: 你好！我也很高兴认识你。你叫什么名字？\nA: 我叫大卫，我是语言学生。\nB: 太棒了！欢迎来到中国！',
    back: 'A: Hello! Very nice to meet you.\nB: Hello! Nice to meet you too. What is your name?\nA: My name is David, I am a language student.\nB: Wonderful! Welcome to China!',
    phonetic: 'A: Nǐ hǎo! Hěn gāoxìng rènshí nǐ.\nB: Nǐ hǎo! Wǒ yě hěn gāoxìng rènshí nǐ. Nǐ jiào shénme míngzì?\nA: Wǒ jiào Dàwèi, wǒ shì yǔyán xuéshēng.\nB: Tài bàng le! Huānyíng lái dào Zhōngguó!',
    grammarNotes: 'Key patterns: 很高兴认识你 (Nice to meet you); 你叫什么名字 (What is your name?); 太棒了 (Awesome / Great).',
    hint: 'Situation: Introducing yourself to a new acquaintance.',
    exampleSentences: [
      { target: '你叫什么名字？', translation: 'What is your name?', phonetic: 'Nǐ jiào shénme míngzì?' },
      { target: '我也很高兴认识你。', translation: 'I am also pleased to meet you.', phonetic: 'Wǒ yě hěn gāoxìng rènshí nǐ.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，请问你要喝点什么？\nB: 我要一杯热拿铁，谢谢。\nA: 好的，需要大杯还是中杯？\nB: 大杯，带走。',
    back: 'A: Hello, what would you like to drink?\nB: I would like a hot latte, thank you.\nA: Alright, large cup or medium cup?\nB: Large cup, to take away.',
    phonetic: 'A: Nǐ hǎo, qǐngwèn nǐ yào hē diǎn shénme?\nB: Wǒ yào yībēi rè nátiě, xièxiè.\nA: Hǎo de, xūyào dàbēi háishì zhōngbēi?\nB: Dàbēi, dàizǒu.',
    grammarNotes: 'Useful ordering phrases: 我要一杯... (I want a cup of...); 带走 (dàizǒu = take away / to go); 在这儿喝 (zài zhèr hē = for here). “还是” (háishì) is used for "or" in questions.',
    hint: 'Situation: Ordering coffee at a café.',
    exampleSentences: [
      { target: '在这里喝还是带走？', translation: 'For here or to go?', phonetic: 'Zài zhèlǐ hē háishì dàizǒu?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 不好意思，请问地铁站在哪里？\nB: 一直往前走，到红绿灯向右拐。\nA: 走路大概要多久？\nB: 不远，走五分钟就到了。\nA: 非常感谢！\nB: 不客气！',
    back: 'A: Excuse me, where is the subway station?\nB: Walk straight ahead, and turn right at the traffic lights.\nA: About how long does it take to walk?\nB: Not far, about a five-minute walk.\nA: Thank you very much!\nB: You are welcome!',
    phonetic: 'A: Bù hǎoyìsi, qǐngwèn dìtiězhàn zài nǎlǐ?\nB: Yīzhí wǎng qián zǒu, dào hónglǜdēng xiàng yòu guǎi.\nA: Zǒulù dàgài yào duōjiǔ?\nB: Bù yuǎn, zǒu wǔ fēnzhōng jiù dào le.\nA: Fēicháng gǎnxiè!\nB: Bù kèqì!',
    grammarNotes: 'Direction expressions: 一直往前走 (walk straight ahead); 向右拐 (turn right); 就到了 (and you will arrive). “大概” means roughly / approximately.',
    hint: 'Situation: Asking for street navigation to the subway.',
    exampleSentences: [
      { target: '请问去火车站怎么走？', translation: 'Excuse me, how do I get to the train station?', phonetic: 'Qǐngwèn qù huǒchēzhàn zěnme zǒu?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 服务员，请给我们看下菜单。\nB: 好的，这是菜单。请问您几位？\nA: 我们两位。你们有什么招牌菜？\nB: 宫保鸡丁和牛肉面都很受欢迎。\nA: 好，那各来一份！微辣就可以。',
    back: 'A: Waiter, please let us see the menu.\nB: Sure, here is the menu. How many of you?\nA: Two of us. What are your signature dishes?\nB: Kung Pao chicken and beef noodles are both very popular.\nA: Great, then bring one of each! Mild spice is fine.',
    phonetic: 'A: Fúwùyuán, qǐng gěi wǒmen kàn xià càidān.\nB: Hǎo de, zhè shì càidān. Qǐngwèn nín jǐ wèi?\nA: Wǒmen liǎng wèi. Nǐmen yǒu shénme zhāopái cài?\nB: Gōngbǎo jīdīng hé niúròumiàn dōu hěn shòu huānyíng.\nA: Hǎo, nà gè lái yīfèn! Wēi là jiù kěyǐ.',
    grammarNotes: 'Restaurant vocabulary: 招牌菜 (signature dish); 受欢迎 (popular); 微辣 (mild spicy); 各来一份 (bring one of each).',
    hint: 'Situation: Dining in a local restaurant and ordering food.',
    exampleSentences: [
      { target: '我不能吃辣，请不要放辣椒。', translation: 'I cannot eat spicy food, please do not add chili.', phonetic: 'Wǒ bùnéng chī là, qǐng bùyào fàng làjiāo.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老板，买单！一共多少钱？\nB: 一共七十八块钱。\nA: 可以用微信或者支付宝吗？\nB: 都可以，扫桌上的二维码就行。',
    back: 'A: Boss, the bill please! How much in total?\nB: Seventy-eight yuan altogether.\nA: Can I use WeChat or Alipay?\nB: Either is fine, just scan the QR code on the table.',
    phonetic: 'A: Lǎobǎn, mǎidān! Yīgòng duōshǎo qián?\nB: Yīgòng qīshí bā kuài qián.\nA: Kěyǐ yòng Wēixìn huòzhě Zhīfùbǎo ma?\nB: Dōu kěyǐ, sǎo zhuō shàng de èrwéimǎ jiù xíng.',
    grammarNotes: 'Payment in China: 买单 (mǎidān = bill); 扫码 (sǎo mǎ = scan QR code); 二维码 (èrwéimǎ = QR code); 微信 (WeChat); 支付宝 (Alipay).',
    hint: 'Situation: Paying the bill at an eatery using mobile payment.',
    exampleSentences: [
      { target: '扫我还是我扫你？', translation: 'Do you scan me or do I scan you?', phonetic: 'Sǎo wǒ háishì wǒ sǎo nǐ?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 请问这里的Wi-Fi密码是多少？\nB: 密码是八个八，88888888。\nA: 好的，我连上了，网速挺快的！\nB: 好的，请慢慢享用咖啡。',
    back: 'A: Excuse me, what is the Wi-Fi password here?\nB: The password is eight eights: 88888888.\nA: Alright, I am connected, the internet speed is quite fast!\nB: Great, please enjoy your coffee.',
    phonetic: 'A: Qǐngwèn zhèlǐ de Wi-Fi mìmǎ shì duōshǎo?\nB: Mìmǎ shì bā gè bā, 88888888.\nA: Hǎo de, wǒ lián shàng le, wǎngsù tǐng kuài de!\nB: Hǎo de, qǐng mànmàn xiǎngyòng kāfēi.',
    grammarNotes: 'Useful tech terms: 密码 (mìmǎ = password); 连上了 (connected); 网速 (internet speed). Number 8 (bā) is a lucky number often chosen for passwords.',
    hint: 'Situation: Asking for Wi-Fi access at a café or restaurant.',
    exampleSentences: [
      { target: '这里有充电插座吗？', translation: 'Is there a charging power outlet here?', phonetic: 'Zhèlǐ yǒu chōngdiàn chāzuò ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 请问现在几点了？我手机没电了。\nB: 现在是下午三点半。\nA: 谢谢！开往市中心的末班车几点？\nB: 末班车是晚上十点，还早呢。',
    back: 'A: Excuse me, what time is it now? My phone ran out of battery.\nB: It is 3:30 in the afternoon.\nA: Thank you! What time is the last bus heading downtown?\nB: The last bus is at 10 PM, plenty of time yet.',
    phonetic: 'A: Qǐngwèn xiànzài jǐ diǎn le? Wǒ shǒujī méi diàn le.\nB: Xiànzài shì xiàwǔ sān diǎn bàn.\nA: Xièxiè! Kāi wǎng shìzhōngxīn de mòbānchē jǐ diǎn?\nB: Mòbānchē shì wǎnshang shí diǎn, hái zǎo ne.',
    grammarNotes: 'Time expressions: 几点 (what time); 没电了 (out of battery); 末班车 (last bus/train); 还早呢 (still early / plenty of time).',
    hint: 'Situation: Inquiring about the time and transit schedule.',
    exampleSentences: [
      { target: '现在差一刻四点。', translation: 'It is a quarter to four right now.', phonetic: 'Xiànzài chà yīkè sì diǎn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 老板，这西瓜甜不甜？怎么卖？\nB: 保证甜！不甜不要钱。三块五一斤。\nA: 能帮我挑一个熟的吗？\nB: 没问题，这个敲起来声音清脆，一定很好吃！',
    back: 'A: Boss, is this watermelon sweet? How much is it?\nB: Guaranteed sweet! If not sweet, no charge. 3.5 yuan per jin (half-kilo).\nA: Can you help me pick a ripe one?\nB: No problem, this one sounds crisp when tapped, definitely delicious!',
    phonetic: 'A: Lǎobǎn, zhè xīguā tián bù tián? Zěnme mài?\nB: Bǎozhèng tián! Bù tián bù yào qián. Sān kuài wǔ yī jīn.\nA: Néng bāng wǒ tiāo yī gè shú de ma?\nB: Méi wèntí, zhè ge qiāo qǐlái shēngyīn qīngcuì, yīdìng hěn hǎochī!',
    grammarNotes: 'Market culture: 斤 (jīn = 500g Chinese pound); 怎么卖 (how is it sold / how much); 保证甜 (guaranteed sweet).',
    hint: 'Situation: Buying fresh fruit at a local market.',
    exampleSentences: [
      { target: '老板，可以切开尝尝吗？', translation: 'Boss, can you cut a slice to taste?', phonetic: 'Lǎobǎn, kěyǐ qiēkāi chángcháng ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 师傅，去国际机场走高速吗？大概多久？\nB: 走高速顺畅的话，四十分钟能到。\nA: 我赶下午两点的飞机，麻烦您稍微开快一点。\nB: 放心吧，时间完全来得及！',
    back: 'A: Driver, are you taking the expressway to the international airport? About how long?\nB: If the expressway is smooth, we can arrive in 40 minutes.\nA: I need to catch a 2 PM flight, please drive a bit briskly if possible.\nB: Rest assured, there is plenty of time!',
    phonetic: 'A: Shīfù, qù guójì jīchǎng zǒu gāosù ma? Dàgài duōjiǔ?\nB: Zǒu gāosù shùnchàng dehuà, sìshí fēnzhōng néng dào.\nA: Wǒ gǎn xiàwǔ liǎng diǎn de fēijī, máfan nín shāowēi kāi kuài yīdiǎn.\nB: Fàngxīn ba, shíjiān wánquán láidejí!',
    grammarNotes: 'Taxi phrases: 师傅 (driver / master); 走高速 (take the expressway); 赶飞机 (catch a flight); 来得及 (there is still time).',
    hint: 'Situation: Taking a cab to the airport and discussing transit time.',
    exampleSentences: [
      { target: '师傅，请在前面路口靠边停一下。', translation: 'Driver, please pull over at the intersection ahead.', phonetic: 'Shīfù, qǐng zài qiánmiàn lùkǒu kàobiān tíng yīxià.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 您好，我预订了一间大床房，这是我的护照。\nB: 好的，王先生，查到了您的预订，住两晚。\nA: 请问房间有免费Wi-Fi吗？早餐在几楼？\nB: 有的，密码在房卡套上。早餐在二楼，早上七点到十点。',
    back: 'A: Hello, I booked a king bedroom, here is my passport.\nB: Yes, Mr. Wang, found your reservation, two nights.\nA: Does the room have free Wi-Fi? Which floor is breakfast on?\nB: Yes, the password is on the keycard sleeve. Breakfast is on the 2nd floor, 7:00 to 10:00 AM.',
    phonetic: 'A: Nín hǎo, wǒ yùdìng le yī jiān dàchuáng fáng, zhè shì wǒ de hùzhào.\nB: Hǎo de, Wáng xiānsheng, chádào le nín de yùdìng, zhù liǎng wǎn.\nA: Qǐngwèn fángjiān yǒu miǎnfèi Wi-Fi ma? Zǎocān zài jǐ lóu?\nB: Yǒu de, mìmǎ zài fángkǎ tào shàng. Zǎocān zài èr lóu, zǎoshang qī diǎn dào shí diǎn.',
    grammarNotes: 'Hotel phrases: 预订 (reservation); 大床房 (king bed room); 房卡 (room key card); 几楼 (which floor).',
    hint: 'Situation: Checking into a hotel and clarifying amenities.',
    exampleSentences: [
      { target: '请问退房时间是几点？', translation: 'What time is check-out?', phonetic: 'Qǐngwèn tuìfáng shíjiān shì jǐ diǎn?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 您好，这件外套款式很好看，有黑色的吗？\nB: 有的，请问您穿什么尺码？\nA: 我一般穿中号，我可以试一下吗？\nB: 当然可以，试衣间在里面右转。',
    back: 'A: Hello, the style of this jacket is lovely, do you have it in black?\nB: Yes, what size do you wear?\nA: I usually wear medium, may I try it on?\nB: Of course, the fitting room is inside, turn right.',
    phonetic: 'A: Nín hǎo, zhè jiàn wàitào kuǎnshì hěn hǎokàn, yǒu hēisè de ma?\nB: Yǒu de, qǐngwèn nín chuān shénme chǐmǎ?\nA: Wǒ yībān chuān zhōnghào, wǒ kěyǐ shì yīxià ma?\nB: Dāngrán kěyǐ, shìyījiān zài lǐmiàn yòuzhuǎn.',
    grammarNotes: 'Shopping terms: 尺码 (size); 中号 (medium size); 大号 (large); 小号 (small); 试衣间 (fitting room); 试一下 (try on).',
    hint: 'Situation: Trying on clothes at a boutique.',
    exampleSentences: [
      { target: '这件衣服打折吗？', translation: 'Is this garment discounted?', phonetic: 'Zhè jiàn yīfú dǎzhé ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 你好，我嗓子疼，还有点流鼻涕。\nB: 有发烧吗？持续几天了？\nA: 昨天开始有点低烧，感觉浑身没力气。\nB: 这是感冒症状。我给你开盒感冒药，多喝热水，好好休息。',
    back: 'A: Hello, I have a sore throat and a bit of a runny nose.\nB: Do you have a fever? How many days has it lasted?\nA: Started having a low-grade fever yesterday, feeling weak all over.\nB: These are cold symptoms. I will prescribe you a box of cold medicine, drink plenty of warm water, and rest well.',
    phonetic: 'A: Nǐ hǎo, wǒ sǎngzi téng, hái yǒu diǎn liú bítì.\nB: Yǒu fāshāo ma? Chíxù jǐ tiān le?\nA: Zuótiān kāishǐ yǒu diǎn dīshāo, gǎnjué húnshēn méi lìqì.\nB: Zhè shì gǎnmào zhèngzhuàng. Wǒ gěi nǐ kāi hé gǎnmàoyào, duō hē rèshuǐ, hǎohǎo xiūxí.',
    grammarNotes: 'Health & Pharmacy: 嗓子疼 (sore throat); 流鼻涕 (runny nose); 发烧 (fever); 多喝热水 (drink more warm water - ubiquitous caring advice in China).',
    hint: 'Situation: Consulting at a pharmacy or clinic for cold symptoms.',
    exampleSentences: [
      { target: '这药饭前吃还是饭后吃？', translation: 'Should this medicine be taken before or after meals?', phonetic: 'Zhè yào fànqián chī háishì fànhòu chī?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 周末你有安排吗？要不要一起去爬山？\nB: 好主意！去哪座山？几点集合？\nA: 香山怎么样？周六早上八点在地铁站见。\nB: 没问题，我带点水果和水，周六见！',
    back: 'A: Do you have plans for the weekend? Want to go hiking together?\nB: Good idea! Which mountain? What time should we gather?\nA: How about Fragrant Hills? Let\'s meet at 8 AM Saturday at the metro station.\nB: No problem, I\'ll bring some fruit and water, see you Saturday!',
    phonetic: 'A: Zhōumò nǐ yǒu ānpái ma? Yào bù yào yīqǐ qù páshān?\nB: Hǎo zhǔyì! Qù nǎ zuò shān? Jǐ diǎn jíhé?\nA: Xiāngshān zěnmeyàng? Zhōuliù zǎoshang bā diǎn zài dìtiězhàn jiàn.\nB: Méi wèntí, wǒ dài diǎn shuǐguǒ hé shuǐ, zhōuliù jiàn!',
    grammarNotes: 'Making plans: 有安排吗 (do you have plans?); 好主意 (good idea); 几点集合 (what time to gather?); 周六见 (see you Saturday).',
    hint: 'Situation: Coordinating weekend outdoor plans with a friend.',
    exampleSentences: [
      { target: '不好意思，这个周末我已经有安排了。', translation: 'Sorry, I already have plans this weekend.', phonetic: 'Bù hǎoyìsi, zhè ge zhōumò wǒ yǐjīng yǒu ānpái le.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 不好意思，我的中文水平有限，您可以说慢一点吗？\nB: 没关系！你学中文多久了？\nA: 我学了差不多半年了，汉字挺有意思的。\nB: 你说得很清楚，发音很标准，继续加油！',
    back: 'A: Excuse me, my Chinese level is limited, could you speak a bit slower?\nB: No problem at all! How long have you been studying Chinese?\nA: I have been studying for almost half a year, Chinese characters are very interesting.\nB: You speak very clearly, your pronunciation is very accurate, keep going!',
    phonetic: 'A: Bù hǎoyìsi, wǒ de Zhōngwén shuǐpíng yǒuxiàn, nín kěyǐ shuō màn yīdiǎn ma?\nB: Méi guānxi! Nǐ xué Zhōngwén duōjiǔ le?\nA: Wǒ xué le chàbùduō bàn nián le, Hànzì tǐng yǒuyìsi de.\nB: Nǐ shuō de hěn qīngchǔ, fāyīn hěn biāozhǔn, jìxù jiāyóu!',
    grammarNotes: 'Language learning communication: 说慢一点 (speak a bit slower); 发音很标准 (standard pronunciation); 继续加油 (keep up the good work!).',
    hint: 'Situation: Asking someone to slow down their speech courteously.',
    exampleSentences: [
      { target: '这个词用中文怎么说？', translation: 'How do you say this word in Chinese?', phonetic: 'Zhè ge cí yòng Zhōngwén zěnme shuō?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 外面天阴下来了，天气预报说今天有暴雨。\nB: 真的吗？那我出门得带把折叠伞。\nA: 最好也带件薄外套，下完雨会很凉快。\nB: 好的，多亏你提醒我！',
    back: 'A: It has overcast outside, the weather forecast says there will be rainstorms today.\nB: Really? Then I must bring a folding umbrella when I go out.\nA: Better also bring a light jacket, it will be quite cool after the rain.\nB: Alright, thanks to your reminder!',
    phonetic: 'A: Wàimiàn tiān yīn xiàlái le, tiānqì yùbào shuō jīntiān yǒu bàoyǔ.\nB: Zhēn de ma? Nà wǒ chūmén děi dài bǎ zhédié sǎn.\nA: Zuìhǎo yě dài jiàn báo wàitào, xià wán yǔ huì hěn liángkuài.\nB: Hǎo de, duōkuī nǐ tíxǐng wǒ!',
    grammarNotes: 'Weather & Daily Life: 天阴下来了 (sky has turned overcast); 天气预报 (weather forecast); 多亏你提醒我 (thanks to your reminder). Measure word for umbrella is 把 (bǎ).',
    hint: 'Situation: Talking about imminent rain and preparing rain gear.',
    exampleSentences: [
      { target: '明天是晴天还是阴天？', translation: 'Will tomorrow be sunny or overcast?', phonetic: 'Míngtiān shì qíngtiān háishì yīntiān?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 你平时周末除了休息，一般都喜欢做什么？\nB: 我特别喜欢摄影和探索胡同里的小吃店。你呢？\nA: 我最近在自学德语，每天用单词卡复习半小时。\nB: 难怪你的记忆力这么好！坚持很有成效吧？\nA: 确实，循序渐进的感觉特别充实。',
    back: 'A: Aside from resting, what do you usually enjoy doing on weekends?\nB: I especially love photography and exploring snack shops in the hutongs. How about you?\nA: Recently I have been self-studying German, reviewing with flashcards for half an hour daily.\nB: No wonder your memory is so sharp! Consistency brings great results, right?\nA: Indeed, making step-by-step progress feels very fulfilling.',
    phonetic: 'A: Nǐ píngshí zhōumò chúle xiūxí, yībān dōu xǐhuān zuò shénme?\nB: Wǒ tèbié xǐhuān shèyǐng hé tànsuǒ hútòng lǐ de xiǎochī diàn. Nǐ ne?\nA: Wǒ zuìjìn zài zìxué Déyǔ, měitiān yòng dāncí kǎ fùxí bàn xiǎoshí.\nB: Nánguài nǐ de jìyìlì zhème hǎo! Jiānchí hěn yǒu chéngxiào ba?\nA: Quèshí, xúnxù jiànjìn de gǎnjué tèbié chōngshí.',
    grammarNotes: 'Advanced conversational expressions: 难怪 (no wonder); 循序渐进 (step by step / gradual progress - Chengyu); 充实 (fulfilling / substantial); 坚持 (perseverance).',
    hint: 'Situation: Chatting about weekend hobbies and self-improvement.',
    exampleSentences: [
      { target: '业余时间你有什么爱好？', translation: 'What hobbies do you have in your spare time?', phonetic: 'Yèyú shíjiān nǐ yǒu shénme àihào?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 您好，我昨天在贵店买的衬衫，回家试了发现肩膀稍微有点紧。\nB: 您好，小票还在吗？衣服吊牌没有剪掉吧？\nA: 都在呢，包装也完好。我想换一件大一号的。\nB: 好的，我帮您查一下库存……还有一件L号，请您稍等。',
    back: 'A: Hello, I bought this shirt at your store yesterday, and found the shoulders a bit tight when trying it at home.\nB: Hello, do you still have the receipt? The tags have not been cut off, right?\nA: Everything is here, packaging is intact too. I would like to exchange for one size larger.\nB: Alright, let me check the inventory for you... We still have one size L, please wait a moment.',
    phonetic: 'A: Nín hǎo, wǒ zuótiān zài guì diàn mǎi de chènshān, huíjiā shì le fāxiàn jiānbǎng shāowēi yǒudiǎn jǐn.\nB: Nín hǎo, xiǎopiào hái zài ma? Yīfú diàopái méiyǒu jiǎn diào ba?\nA: Dōu zài ne, bāozhuāng yě wánhǎo. Wǒ xiǎng huàn yī jiàn dà yī hào de.\nB: Hǎo de, wǒ bāng nín chá yīxià kùcún... Hái yǒu yī jiàn L hào, qǐng nín shāoděng.',
    grammarNotes: 'Customer service & Exchange: 贵店 (your esteemed shop - polite); 小票 (receipt); 吊牌 (tags); 换一件大一号的 (exchange for one size bigger); 库存 (inventory).',
    hint: 'Situation: Returning or exchanging an item at a store politely.',
    exampleSentences: [
      { target: '如果不合适，可以在七天内无理由退换。', translation: 'If it doesn\'t fit, it can be returned or exchanged within 7 days with no hassle.', phonetic: 'Rúguǒ bù héshì, kěyǐ zài qī tiān nèi wúlǐyóu tuìhuàn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 快请进！外面风大，快进来暖和一下。\nB: 打扰你们了！这是一点小小心意，给叔叔阿姨带的水果。\nA: 哎呀，来就来嘛，还带什么东西，太客气了！请坐，我给你倒杯热茶。\nB: 谢谢，阿姨您别忙活了，我自己来就行。',
    back: 'A: Please come in quickly! It is windy outside, come in and warm up.\nB: Sorry to trouble you! Here is a small token, some fruits for your parents.\nA: Oh dear, you shouldn\'t have, why bring gifts, you are too courteous! Please sit, let me pour you some hot tea.\nB: Thank you, Auntie please don\'t fuss around, I can help myself.',
    phonetic: 'A: Kuài qǐng jìn! Wàimiàn fēng dà, kuài jìnlái nuǎnhuo yīxià.\nB: Dǎrǎo nǐmen le! Zhè shì yīdiǎn xiǎoxiǎo xīnyì, gěi shūshu āyí dài de shuǐguǒ.\nA: Āiyā, lái jiù lái ma, hái dài shénme dōngxī, tài kèqì le! Qǐng zuò, wǒ gěi nǐ dào bēi rèchá.\nB: Xièxiè, āyí nín bié mánghuo le, wǒ zìjǐ lái jiù xíng.',
    grammarNotes: 'Chinese hospitality etiquette: 小小心意 (small token of appreciation); 太客气了 (too polite / generous); 别忙活了 (don\'t fuss around for me).',
    hint: 'Situation: Visiting a Chinese friend\'s home as an honored guest.',
    exampleSentences: [
      { target: '把这里当自己家一样，别拘束。', translation: 'Make yourself at home, don\'t be shy.', phonetic: 'Bǎ zhèlǐ dàng zìjǐ jiā yīyàng, bié jūshù.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 小王，今天下午两点和客户的视频会议准备得怎么样了？\nB: 演示文稿我已经更新完毕，重点放在了下季度的合作方案上。\nA: 很好，合同草案让法务部门审核了吗？\nB: 已经审核过了，确认没有任何法律风险。\nA: 干得漂亮，预祝我们今天谈判顺利！',
    back: 'A: Xiao Wang, how are the preparations for the 2 PM video conference with the client?\nB: I have finished updating the presentation slides, focusing on next quarter\'s collaboration proposal.\nA: Great, has the draft contract been reviewed by legal?\nB: Yes, legal has reviewed it and confirmed there are no legal risks.\nA: Well done, wishing us smooth negotiations today!',
    phonetic: 'A: Xiǎo Wáng, jīntiān xiàwǔ liǎng diǎn hé kèhù de shìpín huìyì zhǔnbèi de zěnmeyàng le?\nB: Yǎnshì wéngǎo wǒ yǐjīng gēngxīn wánbì, zhòngdiǎn fàng zài le xià jìdù de hézuò fāng\'àn shàng.\nA: Hěn hǎo, hétong cǎo\'àn ràng fǎwù bùmén shěnhé le ma?\nB: Yǐjīng shěnhé guò le, quèrèn méiyǒu rènhé fǎlǜ fēngxiǎn.\nA: Gàn de piàoliang, yùzhù wǒmen jīntiān tánpàn shùnlì!',
    grammarNotes: 'Professional business Chinese: 视频会议 (video conference); 演示文稿 (slides / presentation); 审核 (review / audit); 谈判顺利 (smooth negotiations).',
    hint: 'Situation: Workplace coordination between supervisor and project lead.',
    exampleSentences: [
      { target: '会议纪要我会在下班前发给全员。', translation: 'I will send the meeting minutes to everyone before end of day.', phonetic: 'Huìyì jìyào wǒ huì zài xiàbān qián fā gěi quányuán.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 你的中文发音真标准，成语用得也很地道！你在中国生活多久了？\nB: 哪里哪里，您过奖了！我才来了不到两年，还有很多要学的。\nA: 已经非常厉害了，平时有什么学习秘诀吗？\nB: 主要是多听多说，敢于开口，不要怕说错。',
    back: 'A: Your Chinese pronunciation is so standard, and you use idioms so authentically! How long have you lived in China?\nB: Oh not at all, you flatter me! I have only been here under two years, still so much to learn.\nA: Already extremely impressive, do you have any learning secrets?\nB: Mainly listening and speaking a lot, being bold enough to speak up, without fearing mistakes.',
    phonetic: 'A: Nǐ de Zhōngwén fāyīn zhēn biāozhǔn, chéngyǔ yòng de yě hěn dìdào! Nǐ zài Zhōngguó shēnghuó duōjiǔ le?\nB: Nǎlǐ nǎlǐ, nín guòjiǎng le! Wǒ cái lái le bù dào liǎng nián, hái yǒu hěn duō yào xué de.\nA: Yǐjīng fēicháng lìhài le, píngshí yǒu shénme xuéxí mìmì ma?\nB: Zhǔyào shì duō tīng duō shuō, gǎnyú kāikǒu, bù yào pà shuō cuò.',
    grammarNotes: 'Modesty culture: 哪里哪里 (flattered / not at all); 您过奖了 (you flatter me); 地道 (authentic); 敢于开口 (have the courage to speak).',
    hint: 'Situation: Responding with traditional modesty to a compliment about your language ability.',
    exampleSentences: [
      { target: '学习外语贵在持之以恒。', translation: 'The key to learning foreign languages lies in continuous perseverance.', phonetic: 'Xuéxí wàiyǔ guì zài chízhīyǐhéng.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Money & Payments (钱、支付与银行)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 请问，这附近有自动取款机吗？我想取点现金。\nB: 前面那家建设银行门口就有一台ATM机。\nA: 好的，用外国银行卡可以取吗？\nB: 可以，只要卡上有Visa或者Mastercard标志就行。\nA: 太好了，谢谢你！',
    back: 'A: Excuse me, is there an ATM nearby? I would like to withdraw some cash.\nB: There is an ATM right at the entrance of the China Construction Bank ahead.\nA: Okay, can I withdraw with a foreign bank card?\nB: Yes, as long as the card has a Visa or Mastercard logo.\nA: Great, thank you!',
    phonetic: 'A: Qǐngwèn, zhè fùjìn yǒu zìdòng qǔkuǎnjī ma? Wǒ xiǎng qǔ diǎn xiànjīn.\nB: Qiánmiàn nà jiā Jiànshè Yínháng ménkǒu jiù yǒu yī tái ATM jī.\nA: Hǎo de, yòng wàiguó yínhángkǎ kěyǐ qǔ ma? \nB: Kěyǐ, zhǐyào kǎ shàng yǒu Visa huòzhě Mastercard biāozhì jiù xíng.\nA: Tài hǎo le, xièxiè nǐ!',
    grammarNotes: 'Key money terms: 自动取款机 / ATM机 (ATM); 取现金 (withdraw cash); 外国银行卡 (foreign card); 只要...就行 (as long as... it works).',
    hint: 'Situation: Looking for an ATM to withdraw local cash with a foreign card.',
    exampleSentences: [
      { target: '这台取款机可以取人民币吗？', translation: 'Can this ATM withdraw RMB?', phonetic: 'Zhè tái qǔkuǎnjī kěyǐ qǔ Rénmínbì ma?' },
      { target: '我想换一些现金零钱。', translation: 'I want to exchange for some small cash.', phonetic: 'Wǒ xiǎng huàn yīxiē xiànjīn língqián.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 服务员，买单！今天这顿饭我来请客吧。\nB: 不行不行，怎么能总让你掏钱呢？我们AA制吧！\nA: 没关系，下次再你请！\nB: 那好吧，我把我的那一份发微信转账给你。',
    back: 'A: Waiter, check please! Let me treat everyone to this meal today.\nB: No no, how could I always let you pay? Let us split the bill (AA style)!\nA: It is fine, next time is on you!\nB: Alright then, I will WeChat transfer my share to you.',
    phonetic: 'A: Fúwùyuán, mǎidān! Jīntiān zhè dùn fàn wǒ lái qǐngkè ba.\nB: Bù xíng bù xíng, zěnme néng zǒng ràng nǐ tāoqián ne? Wǒmen AA zhì ba!\nA: Méi guānxi, xià cì zài nǐ qǐng!\nB: Nà hǎo ba, wǒ bǎ wǒ de nà yī fèn fā Wēixìn zhuǎnzhàng gěi nǐ.',
    grammarNotes: 'Dining & money culture: 请客 (treat / pay for others); AA制 (splitting the bill equally, widely used in China); 掏钱 (pull out money / pay); 微信转账 (WeChat money transfer).',
    hint: 'Situation: Polishing the art of fighting for the bill and splitting costs politely.',
    exampleSentences: [
      { target: '我们今天AA制吧，谁也不要争。', translation: 'Let us split the bill today, no one fight over it.', phonetic: 'Wǒmen jīntiān AA zhì ba, shéi yě bù yào zhēng.' },
      { target: '我已经微信转给你了，你查收一下。', translation: 'I already WeChat transferred it to you, please check.', phonetic: 'Wǒ yǐjīng Wēixìn zhuǎn gěi nǐ le, nǐ cháshōu yīxià.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 你好，我想把这八百美元换成人民币。\nB: 好的，请出示您的护照原件，并在这张单子上签个字。\nA: 请问今天美元兑人民币的汇率是多少？\nB: 今天现钞买入价是一美元兑换七点一八元人民币。\nA: 好，谢谢。',
    back: 'A: Hello, I would like to exchange these 800 US dollars into Chinese Yuan.\nB: Sure, please present your original passport and sign on this slip.\nA: What is today\'s exchange rate for USD to RMB?\nB: Today\'s cash buy rate is 1 USD to 7.18 RMB.\nA: Okay, thank you.',
    phonetic: 'A: Nǐ hǎo, wǒ xiǎng bǎ zhè bābǎi Měiyuán huàn chéng Rénmínbì.\nB: Hǎo de, qǐng chūshì nín de hùzhào yuánjiàn, bìng zài zhè zhāng dānzi shàng qiān gè zì.\nA: Qǐngwèn jīntiān Měiyuán duì Rénmínbì de huìlǜ shì duōshǎo?\nB: Jīntiān xiànchāo mǎirù jià shì yī Měiyuán duìhuàn qī diǎn yībā yuán Rénmínbì.\nA: Hǎo, xièxiè.',
    grammarNotes: 'Banking terms: 把...换成... (exchange X into Y); 汇率 (exchange rate); 现钞买入价 (cash buying rate); 出示护照 (present passport).',
    hint: 'Situation: Exchanging foreign currency into RMB at a bank counter.',
    exampleSentences: [
      { target: '现在的汇率很划算。', translation: 'The current exchange rate is very favorable.', phonetic: 'Xiànzài de huìlǜ hěn huásuàn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老板，我手里只有一百块整钱，您能帮我破开吗？\nB: 可以啊，你想怎么破？\nA: 能换成两张二十和六张十块的吗？坐公交车需要零钱。\nB: 没问题，数一数，正好一百，拿好！\nA: 太感谢了！',
    back: 'A: Boss, I only have a 100-yuan note on me, could you break it for me?\nB: Sure, how would you like it broken down?\nA: Could you make it two twenties and six tens? I need small change for the bus.\nB: No problem, count it up, exactly one hundred, take care!\nA: Thank you so much!',
    phonetic: 'A: Lǎobǎn, wǒ shǒulǐ zhǐ yǒu yībǎi kuài zhěngqián, nín néng bāng wǒ pòkāi ma?\nB: Kěyǐ a, nǐ xiǎng zěnme pò?\nA: Néng huàn chéng liǎng zhāng èrshí hé liù zhāng shí kuài de ma? Zuò gōngjiāochē xūyào língqián.\nB: Méi wèntí, shǔ yī shǔ, zhènghǎo yībǎi, ná hǎo!\nA: Tài gǎnxiè le!',
    grammarNotes: 'Cash vocabulary: 整钱 (large unbroken bill); 破开 (break a bill into smaller denominations); 零钱 (small change / coins); 数一数 (count it up).',
    hint: 'Situation: Asking a local shopkeeper to break a 100-yuan banknote into small bills.',
    exampleSentences: [
      { target: '不好意思，我没有零钱找你。', translation: 'Sorry, I don\'t have small change to give you.', phonetic: 'Bù hǎoyìsi, wǒ méiyǒu língqián zhǎo nǐ.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 请问租这个充电宝需要交押金吗？\nB: 不需要押金，微信支付分或者芝麻信用五百五十分以上就可以免押金。\nA: 那怎么计费呢？\nB: 前半小时免费，之后每小时三块钱，每天三十封顶。\nA: 挺便宜的，我扫码借一个。',
    back: 'A: Excuse me, does renting this power bank require paying a deposit?\nB: No deposit required. If your WeChat Pay score or Sesame Credit is over 550, you qualify for deposit waiver.\nA: How is it charged then?\nB: First half hour is free, then 3 yuan per hour, capped at 30 yuan per day.\nA: Quite cheap, I will scan the QR code to borrow one.',
    phonetic: 'A: Qǐngwèn zū zhège chōngdiànbǎo xūyào jiāo yājīn ma?\nB: Bù xūyào yājīn, Wēixìn zhīfù fēn huòzhě Zhīma xìnyòng wǔbǎi wǔshí fēn yǐshàng jiù kěyǐ miǎnyājīn.\nA: Nà zěnme jìfèi ne?\nB: Qián bàn xiǎoshí miǎnfèi, zhīhòu měi xiǎoshí sān kuài qián, měi tiān sānshí fēngdǐng.\nA: Tǐng piányi de, wǒ sǎomǎ jiè yī gè.',
    grammarNotes: 'Modern Chinese economy: 充电宝 (power bank); 押金 (deposit); 免押金 (deposit-free); 封顶 (capped max charge); 扫码 (scan QR code).',
    hint: 'Situation: Renting a shared power bank (充电宝) at a restaurant or subway.',
    exampleSentences: [
      { target: '我的手机快没电了，需要借充电宝。', translation: 'My phone is running out of battery, I need a power bank.', phonetic: 'Wǒ de shǒujī kuài méi diàn le, xūyào jiè chōngdiànbǎo.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Flirting, Compliments & Dating (调情、心动与约会)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 不好意思打扰一下，我觉得你笑起来特别好看。\nB: 哈哈，真的吗？谢谢你的夸奖！\nA: 如果你不介意的话，我可以加一下你的微信吗？\nB: 好啊，没问题，你扫我的二维码吧。\nA: 加上了！等你有空我们一起喝杯咖啡。',
    back: 'A: Sorry to bother you, I just think you have a remarkably beautiful smile.\nB: Haha, really? Thank you for the compliment!\nA: If you don\'t mind, could I add your WeChat?\nB: Sure, no problem, you can scan my QR code.\nA: Added! Let us have a coffee together when you have free time.',
    phonetic: 'A: Bù hǎoyìsi dǎrǎo yīxià, wǒ juéde nǐ xiào qǐlai tèbié hǎokàn.\nB: Hāhā, zhēn de ma? Xièxiè nǐ de kuājiǎng!\nA: Rúguǒ nǐ bù jièyì de huà, wǒ kěyǐ jiā yīxià nǐ de Wēixìn ma?\nB: Hǎo a, méi wèntí, nǐ sǎo wǒ de èrwéimǎ ba.\nA: Jiā shàng le! Děng nǐ yǒu kòng wǒmen yīqǐ hē bēi kāfēi.',
    grammarNotes: 'Flirting essentials: 笑起来特别好看 (looks especially nice when smiling); 如果你不介意的话 (if you don\'t mind); 加微信 (add on WeChat); 等你有空 (when you\'re free).',
    hint: 'Situation: Politely and charmingly asking for someone\'s contact info.',
    exampleSentences: [
      { target: '可以留个联系方式吗？', translation: 'Could I have your contact details?', phonetic: 'Kěyǐ liú gè liánxì fāngshì ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 哇，你今天穿这件大衣真有气质，特别显身材！\nB: 谢谢！你今天也很帅气，头发好像特意打理过？\nA: 哈哈，被你发现了，因为今天要和你见面嘛！\nB: 你的嘴怎么这么甜？平时也这么会哄人吗？\nA: 冤枉啊，我只对喜欢的人说心里话。',
    back: 'A: Wow, you look so elegant in this coat today, it flatters your figure so well!\nB: Thank you! You look very handsome today too, did you style your hair specially?\nA: Haha, you caught me, because I was meeting you today!\nB: Why is your mouth so sweet? Are you usually this good at charming people?\nA: I am innocent! I only speak from the heart with people I like.',
    phonetic: 'A: Wa, nǐ jīntiān chuān zhè jiàn dàyī zhēn yǒu qìzhì, tèbié xiǎn shēncái!\nB: Xièxiè! Nǐ jīntiān yě hěn shuàiqì, tóufa hǎoxiàng tèyì dǎlǐ guò?\nA: Hāhā, bèi nǐ fāxiàn le, yīnwèi jīntiān yào hé nǐ jiànmiàn ma!\nB: Nǐ de zuǐ zěnme zhème tián? Píngshí yě zhème huì hǒng rén ma?\nA: Yuānwang a, wǒ zhǐ duì xǐhuan de rén shuō xīnlǐhuà.',
    grammarNotes: 'Playful flirting: 显身材 (accentuates figure); 嘴甜 (sweet-mouthed / smooth talker); 哄人 (coax/flatter someone); 冤枉 (unjustly accused / playful defense); 心里话 (words from the heart).',
    hint: 'Situation: Playful compliments and flirtatious banter on a meet-up.',
    exampleSentences: [
      { target: '你今天看起来容光焕发。', translation: 'You look radiant and glowing today.', phonetic: 'Nǐ jīntiān kàn qǐlai róngguāng-huànfā.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这个周六晚上你有时间吗？\nB: 周六晚上暂时还没有计划，怎么啦？\nA: 市中心新开了一家露天清吧，环境很浪漫，我想邀请你一起去坐坐。\nB: 听起来很有意思，几点去？\nA: 七点半我去接你，可以吗？\nB: 好的，那周六见！',
    back: 'A: Do you have time this Saturday evening?\nB: No plans for Saturday evening yet, what\'s up?\nA: A new open-air lounge opened downtown with a romantic vibe, I\'d like to invite you for a drink.\nB: Sounds intriguing, what time?\nA: 7:30 PM, I can pick you up, sounds good?\nB: Sounds good, see you Saturday!',
    phonetic: 'A: Zhège zhōuliù wǎnshàng nǐ yǒu shíjiān ma?\nB: Zhōuliù wǎnshàng zànshí hái méiyǒu jìhuà, zěnme la?\nA: Shìzhōngxīn xīn kāi le yī jiā lùtiān qīngba, huánjìng hěn làngmàn, wǒ xiǎng yāoqǐng nǐ yīqǐ qù zuòzuo.\nB: Tīng qǐlai hěn yǒu yìsi, jǐ diǎn qù?\nA: Qī diǎn bàn wǒ qù jiē nǐ, kěyǐ ma?\nB: Hǎo de, nà zhōuliù jiàn!',
    grammarNotes: 'Date invitation: 有时间吗 (do you have time?); 露天清吧 (open-air relaxed bar / lounge); 坐坐 (sit and relax for a while); 我去接你 (I will pick you up).',
    hint: 'Situation: Asking someone out on a weekend evening date.',
    exampleSentences: [
      { target: '赏光一起吃个便饭吗？', translation: 'Would you honor me by having a casual meal together?', phonetic: 'Shǎngguāng yīqǐ chī gè biànfàn ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 收到你的微信啦，你安全到家了吗？\nB: 刚进家门！今天过得特别充实，谢谢你请我喝好喝的奶茶。\nA: 只要你开心就好。跟你在一起的时候，时间过得飞快。\nB: 我也是！感觉还有好多话没聊完呢。\nA: 那我们下次继续，今晚早点睡，做个好梦！\nB: 晚安，梦里见！',
    back: 'A: Got your WeChat, did you get home safely?\nB: Just stepped in the door! Today was so fulfilling, thank you for treating me to that delicious boba.\nA: As long as you are happy. When I am with you, time simply flies.\nB: Me too! I feel like we still have so much to talk about.\nA: Then we will continue next time. Sleep early tonight and sweet dreams!\nB: Good night, see you in dreams!',
    phonetic: 'A: Shōudào nǐ de Wēixìn la, nǐ ānquán dào jiā le ma?\nB: Gāng jìn jiāmén! Jīntiān guò de tèbié chōngshí, xièxiè nǐ qǐng wǒ hē hǎohē de nǎichá.\nA: Zhǐyào nǐ kāixīn jiù hǎo. Gēn nǐ zài yīqǐ de shíhou, shíjiān guò de fēikuài.\nB: Wǒ yě shì! Gǎnjué hái yǒu hǎoduō huà méi liáo wán ne.\nA: Nà wǒmen xià cì jìxù, jīnwǎn zǎo diǎn shuì, zuò gè hǎo mèng!\nB: Wǎn\'ān, mèng lǐ jiàn!',
    grammarNotes: 'Romantic post-date text: 时间过得飞快 (time flies); 梦里见 (see you in dreams - affectionate); 只要你开心就好 (as long as you\'re happy).',
    hint: 'Situation: Texting after a wonderful first or second date.',
    exampleSentences: [
      { target: '今天非常开心，期待下一次见面。', translation: 'Had a wonderful time today, looking forward to next time.', phonetic: 'Jīntiān fēicháng kāixīn, qīdài xià yī cì jiànmiàn.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Marital Status & Relationship Status (婚姻状况、家庭与感情)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你现在有男朋友吗？还是一直单身？\nB: 我现在单身呢，已经单身一年多了。\nA: 怎么可能？像你这么温柔漂亮的女孩，肯定有很多人追吧！\nB: 没有啦，平时工作太忙，平时周末基本都在家里宅着。\nA: 那以后周末可以多跟我出去走走！',
    back: 'A: Do you have a boyfriend right now? Or are you single?\nB: I am single right now, single for over a year.\nA: How is that possible? A girl as gentle and pretty as you must have lots of pursuers!\nB: Not really, work is too busy, and on weekends I mostly stay home宅.\nA: Well then, you can go out and hang out with me more on weekends from now on!',
    phonetic: 'A: Nǐ xiànzài yǒu nánpéngyou ma? Háishì yīzhí dānshēn?\nB: Wǒ xiànzài dānshēn ne, yǐjīng dānshēn yī nián duō le.\nA: Zěnme kěnéng? Xiàng nǐ zhème wēnróu piàoliang de nǚhái, kěndìng yǒu hěn duō rén zhuī ba!\nB: Méiyǒu la, píngshí gōngzuò tài máng, píngshí zhōumò jīběn dōu zài jiālǐ zhái zhe.\nA: Nà yǐhòu zhōumò kěyǐ duō gēn wǒ chūqù zǒuzhou!',
    grammarNotes: 'Relationship vocabulary: 单身 (single); 有男朋友/女朋友 (have a boyfriend/girlfriend); 宅着 (zhái zhe = staying at home / homebody); 追 (pursue / court).',
    hint: 'Situation: Inquiring about relationship status and offering weekend companionship.',
    exampleSentences: [
      { target: '我目前还是单身贵族。', translation: 'I am currently a happy single person.', phonetic: 'Wǒ mùqián hái shì dānshēn guìzú.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 王经理，冒昧问一下，您结婚了吗？\nB: 结了，我和我先生结婚五年了，有一个小男孩。\nA: 真幸福！您先生也是做IT行业的吗？\nB: 不是，他在大学教书。你呢？成家了吗？\nA: 我还没呢，目前以事业为主，不急着结婚。',
    back: 'A: Manager Wang, if I may ask, are you married?\nB: Yes, my husband and I have been married for five years, we have a little boy.\nA: How blissful! Is your husband also in the IT industry?\nB: No, he teaches at a university. What about you? Have you settled down with a family?\nA: Not yet, currently focusing on my career, not in a rush to marry.',
    phonetic: 'A: Wáng jīnglǐ, màomèi wèn yīxià, nín jiéhūn le ma?\nB: Jié le, wǒ hé wǒ xiānsheng jiéhūn wǔ nián le, yǒu yī gè xiǎo nánhái.\nA: Zhēn xìngfú! Nín xiānsheng yě shì zuò IT hángyè de ma?\nB: Bù shì, tā zài dàxué jiāoshū. Nǐ ne? Chéngjiā le ma?\nA: Wǒ hái méi ne, mùqián yǐ shìyè wéizhǔ, bù jí zhe jiéhūn.',
    grammarNotes: 'Marital inquiries: 结婚 (get married); 先生/太太 (husband / wife polite); 成家 (settle down / start family); 冒昧 (take the liberty to ask); 以事业为主 (focus primarily on career).',
    hint: 'Situation: Professional yet friendly conversation about marital status and family.',
    exampleSentences: [
      { target: '恭喜你们喜结连理！', translation: 'Congratulations on tying the knot!', phonetic: 'Gōngxǐ nǐmen xǐjié-liánlǐ!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 快过年了，你家里人会催婚吗？\nB: 别提了，七大姑八大姨每次见我都问什么时候带对象回家。\nA: 哈哈，中国父母好像都特别操心儿女的终身大事。\nB: 是啊，我都习惯了，婚姻不能将就，还是要看缘分。',
    back: 'A: Spring Festival is coming, do your parents pressure you to marry?\nB: Don\'t even mention it, all the aunts and relatives ask every time when I\'ll bring a partner home.\nA: Haha, Chinese parents all seem deeply worried about their children\'s lifelong marriage.\nB: Yeah, I am used to it. Marriage cannot be settled for; it still depends on destiny/chemistry.',
    phonetic: 'A: Kuài guònián le, nǐ jiālǐ rén huì cuīhūn ma?\nB: Biétí le, qī dà gū bā dà yí měi cì jiàn wǒ dōu wèn shénme shíhou dài duìxiàng huí jiā.\nA: Hāhā, Zhōngguó fùmǔ hǎoxiàng dōu tèbié cāoxīn érnǚ de zhōngshēn dàshì.\nB: Shì a, wǒ dōu xíguàn le, hūnyīn bù néng jiāngjiù, hái shì yào kàn yuánfèn.',
    grammarNotes: 'Cultural insights: 催婚 (marriage nagging/pushing); 七大姑八大姨 (extended aunts and relatives); 终身大事 (lifelong big event = marriage); 不能将就 (cannot settle/compromise); 缘分 (destiny/affinity).',
    hint: 'Situation: Discussing the common modern phenomenon of family marriage pressure in China.',
    exampleSentences: [
      { target: '感情的事不能勉强。', translation: 'Matters of the heart cannot be forced.', phonetic: 'Gǎnqíng de shì bù néng miǎnqiǎng.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Buying an E-Bike (小电驴与电动自行车)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老板你好！我想买一辆上下班代步的小电驴。\nB: 帅哥你看这台，这是雅迪最新款的新国标电动自行车。\nA: 这台充一次电大概能跑多远？\nB: 综合续航能跑六十到七十公里，上下班通勤三天充一次电就足够了。\nA: 听起来不错，外观也很轻巧！',
    back: 'A: Hello boss! I want to buy an electric scooter for my daily commute.\nB: Take a look at this one handsome, this is the latest Yadea national standard e-bike.\nA: Roughly how far can it go on a single charge?\nB: Combined range is 60 to 70 kilometers. For commuting, charging once every 3 days is plenty.\nA: Sounds good, and the appearance is very lightweight!',
    phonetic: 'A: Lǎobǎn nǐ hǎo! Wǒ xiǎng mǎi yī liàng shàng-xiàbān dàibù de xiǎodiànlǘ.\nB: Shuàigē nǐ kàn zhè tái, zhè shì Yǎdí zuìxīn kuǎn de xīn guóbiāo diàndòng zìxíngchē.\nA: Zhè tái chōng yī cì diàn dàgài néng pǎo duō yuǎn?\nB: Zōnghé xùháng néng pǎo liùshí dào qīshí gōnglǐ, shàng-xiàbān tōngqín sān tiān chōng yī cì diàn jiù zúgòu le.\nA: Tīng qǐlai bùcuò, wàiguān yě hěn qīngqiǎo!',
    grammarNotes: 'E-bike slang: 小电驴 (colloquial nickname for electric scooters); 代步 (vehicle for transport); 新国标 (New National Standard for e-bikes); 续航 (battery range); 通勤 (daily commuting).',
    hint: 'Situation: Shopping for a commuter electric scooter at an e-bike dealership.',
    exampleSentences: [
      { target: '小电驴在城市里通勤最方便，不堵车。', translation: 'E-scooters are the most convenient for city commute, no traffic jams.', phonetic: 'Xiǎodiànlǘ zài chéngshì lǐ tōngqín zuì fāngbiàn, bù dǔchē.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 请问这辆车配的是锂电池还是铅酸电池？\nB: 出厂标配是铅酸电池，如果你想要锂电池，可以加六百块钱升级。\nA: 锂电池跟铅酸电池有什么区别呢？\nB: 锂电池重量轻，可以直接提上楼充电，寿命三到五年；铅酸电池比较重，但更安全耐用。',
    back: 'A: Excuse me, does this bike come with a lithium battery or a lead-acid battery?\nB: Standard factory config is lead-acid. If you want lithium, you can add 600 yuan to upgrade.\nA: What is the difference between lithium and lead-acid batteries?\nB: Lithium is lightweight, you can carry it upstairs to charge, lasts 3-5 years; lead-acid is heavy, but safer and cheaper.',
    phonetic: 'A: Qǐngwèn zhè liàng chē pèi de shì lǐdiànchí háishì qiānsuān diànchí?\nB: Chūchǎng biāopèi shì qiānsuān diànchí, rúguǒ nǐ xiǎng yào lǐdiànchí, kěyǐ jiā liùbǎi kuài qián shēngjí.\nA: Lǐdiànchí gēn qiānsuān diànchí yǒu shénme qūbié ne?\nB: Lǐdiànchí zhòngliàng qīng, kěyǐ zhíjiē tí shàng lóu chōngdiàn, shòumìng sān dào wǔ nián; qiānsuān diànchí bǐjiào zhòng, dàn gèng ānquán nàiyòng.',
    grammarNotes: 'Battery specs: 锂电池 (lithium battery); 铅酸电池 (lead-acid battery); 标配 (standard configuration); 提上楼 (carry upstairs); 寿命 (lifespan).',
    hint: 'Situation: Comparing battery options when purchasing an e-bike in China.',
    exampleSentences: [
      { target: '锂电池可以拆卸下来在家里充电。', translation: 'Lithium batteries can be detached to charge at home.', phonetic: 'Lǐdiànchí kěyǐ chāixiè xiàlái zài jiālǐ chōngdiàn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 老板，买这车需要上牌照吗？外国人怎么上牌？\nB: 必须上牌！新国标车上绿色电动车号牌。带上你的护照、居住证明和买车发票。\nA: 上牌手续费多少钱？去哪里办理？\nB: 上牌是免费的！我们店门口就有交警便民服务点，十分钟就能把牌照装好。',
    back: 'A: Boss, does buying this require getting a license plate? How do foreigners register?\nB: Registration is mandatory! National standard bikes get a green e-bike plate. Bring your passport, residence certificate, and purchase invoice.\nA: How much is the license registration fee? Where do I go?\nB: Registration is free! Right outside our shop there is a traffic police service point, takes 10 minutes to install the plate.',
    phonetic: 'A: Lǎobǎn, mǎi zhè chē xūyào shàng páizhào ma? Wàiguórén zěnme shàngpái?\nB: Bìxū shàngpái! Xīn guóbiāo chē shàng lǜsè diàndòngchē hàopái. Dài shàng nǐ de hùzhào, jūzhù zhèngmíng hé mǎichē fāpiào.\nA: Shàngpái shǒuxùfèi duōshǎo qián? Qù nǎlǐ bànlǐ?\nB: Shàngpái shì miǎnfèi de! Wǒmen diàn ménkǒu jiù yǒu jiāojǐng biànmín fúwùdiǎn, shí fēnzhōng jiù néng bǎ páizhào zhuāng hǎo.',
    grammarNotes: 'Registration rules: 上牌照 (register license plate); 绿色号牌 (green plate for legal e-bikes); 居住证明 (residence slip); 购车发票 (sales receipt/invoice); 便民服务点 (convenience service station).',
    hint: 'Situation: Asking the store owner how to legally register and plate an e-scooter.',
    exampleSentences: [
      { target: '不带头盔或者无牌上路会被交警拦截。', translation: 'Riding without a helmet or license plate will get you stopped by traffic police.', phonetic: 'Bù dài tóukuī huòzhě wú pái shàng lù huì bèi jiāojǐng lánjié.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这辆车的最高车速是多少？能解除限速吗？\nB: 国标车限速每小时二十五公里，超速车子会自动发出“滴滴”提示音。\nA: 骑车在路上需要遵守什么规则？\nB: 必须走非机动车道，千万不能走机动车道，而且一定得戴头盔！\nA: 好的，安全第一，我记住了。',
    back: 'A: What is the maximum speed of this vehicle? Can the speed limit be removed?\nB: National standard limits speed to 25 km/h. When exceeding speed, it automatically beeps.\nA: What traffic rules must I follow on the road?\nB: You must ride in non-motorized vehicle lanes, never on the car lanes, and you must wear a helmet!\nA: Got it, safety first, I will keep that in mind.',
    phonetic: 'A: Zhè liàng chē de zuìgāo chēsù shì duōshǎo? Néng jiěchú xiànsù ma?\nB: Guóbiāo chē xiànsù měi xiǎoshí èrshíwǔ gōnglǐ, chāosù chēzi huì zìdòng fāchū “dīdī” tíshì yīn.\nA: Qí chē zài lùshang xūyào zūnshǒu shénme guīzé?\nB: Bìxū zǒu fēi jīdòngchē dào, qiānwàn bù néng zǒu jīdòngchē dào, érqiě yīdìng děi dài tóukuī!\nA: Hǎo de, ānquán dì-yī, wǒ jì zhù le.',
    grammarNotes: 'Traffic & safety terms: 限速 (speed limit); 解除限速 (remove speed limiter); 非机动车道 (non-motorized bike lane); 戴头盔 (wear helmet); 提示音 (warning beeps).',
    hint: 'Situation: Understanding Chinese e-bike speed limits and traffic safety rules.',
    exampleSentences: [
      { target: '骑电动车千万不能逆行。', translation: 'Never ride an e-bike against the flow of traffic.', phonetic: 'Qí diàndòngchē qiānwàn bù néng nìxíng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老板，这台车开价两千五百块，太贵了，两千块卖不卖？\nB: 哎哟小伙子，两千块真的做不下来！最低两千两百块。\nA: 行，那两千两百块成交，但你得送我一个安全头盔、一把防盗链锁和一件雨披！\nB: 成交！我看你是个爽快人，再送你后备箱和一年免费保养！\nA: 太棒了，老板生意兴隆！',
    back: 'A: Boss, this vehicle is quoted at 2,500 yuan, too expensive, will you take 2,000?\nB: Oh young man, 2,000 really doesn\'t cover cost! Absolute lowest is 2,200.\nA: Alright, 2,200 is a deal, but you have to throw in a helmet, anti-theft chain lock, and a rain poncho!\nB: Deal! I see you are a straightforward guy, I will also gift a storage trunk and 1 year free maintenance!\nA: Fantastic, wishing you prosperous business boss!',
    phonetic: 'A: Lǎobǎn, zhè tái chē kāijià liǎngqiān wǔbǎi kuài, tài guì le, liǎngqiān kuài mài bù mài?\nB: Āiyō xiǎohuǒzi, liǎngqiān kuài zhēn de zuò bù xiàlái! Zuìdī liǎngqiān liǎngbǎi kuài.\nA: Xíng, nà liǎngqiān liǎngbǎi kuài chéngjiāo, dàn nǐ děi sòng wǒ yī gè ānquán tóukuī, yī bǎ fángdào liànsuǒ hé yī jiàn yǔpī!\nB: Chéngjiāo! Wǒ kàn nǐ shì gè shuǎngkuai rén, zài sòng nǐ hòubèixiāng hé yī nián miǎnfèi bǎoyǎng!\nA: Tài bàng le, lǎobǎn shēngyì xīnglóng!',
    grammarNotes: 'Bargaining mastery: 开价 (initial asking price); 成交 (deal / agreed); 送 (gift/throw in for free); 防盗锁 (anti-theft lock); 雨披 (rain poncho); 生意兴隆 (prosperous business blessing).',
    hint: 'Situation: Bargaining and scoring free accessories when purchasing your scooter.',
    exampleSentences: [
      { target: '能再便宜一点点吗？', translation: 'Could it be just a little bit cheaper?', phonetic: 'Néng zài piányi yīdiǎndiǎn ma?' }
    ]
  },

  // -------------------------------------------------------------------------
  // Everyday Simple & High-Utility Chinese Dialogues (实用日常生活高频对话)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，我来菜鸟驿站拿快递，手机尾号是六七零八。\nB: 请告诉我取件码。\nA: 取件码是三号柜第二层，号码是三杠二零五。\nB: 好，稍等……找到了，这个大箱子是你的，在出库仪上扫一下码就可以拿走了。\nA: 好的，谢谢师傅！',
    back: 'A: Hello, I am here at Cainiao Station to pick up my parcel, last 4 digits are 6708.\nB: Please tell me your pickup code.\nA: The pickup code is Locker 3, Shelf 2, number is 3-205.\nB: Okay, wait a moment... Found it, this big box is yours. Scan the barcode on the exit scanner and you can take it.\nA: Alright, thank you master!',
    phonetic: 'A: Nǐ hǎo, wǒ lái Càiniǎo yìzhàn ná kuàidì, shǒujī wěihào shì liù-qī-líng-bā.\nB: Qǐng gàosu wǒ qǔjiànmǎ.\nA: Qǔjiànmǎ shì sān hào guì dì-èr céng, hàomǎ shì sān gàng èr-líng-wǔ.\nB: Hǎo, shāoděng... Zhǎodào le, zhège dà xiāngzi shì nǐ de, zài chūkù yí shàng sǎo yīxià mǎ jiù kěyǐ ná zǒu le.\nA: Hǎo de, xièxiè shīfu!',
    grammarNotes: 'Chinese package delivery: 菜鸟驿站 (Cainiao Post / parcel pickup hub); 取件码 (pickup code); 手机尾号 (last digits of phone); 稍等 (hold on a moment); 扫码出库 (scan to exit).',
    hint: 'Situation: Picking up online shopping packages at a local parcel pickup station.',
    exampleSentences: [
      { target: '我的快递到了，我下楼去拿一下。', translation: 'My delivery arrived, I will go downstairs to grab it.', phonetic: 'Wǒ de kuàidì dào le, wǒ xià lóu qù ná yīxià.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 美团外卖点好了吗？你备注写了什么？\nB: 我写了“微辣，不要香菜，多放葱花”。\nA: 记得提醒骑手别按门铃，孩子在睡觉，放在门口鞋架上就行。\nB: 好的，我已经选了“无接触配送，放门口并拍照发信息”。\nA: 太好了，大概还要多久能送到？\nB: 预计二十五分钟后送达。',
    back: 'A: Finished ordering on Meituan Waimai? What did you write in the remarks?\nB: I wrote "mild spicy, no cilantro, extra scallions".\nA: Remember to remind the rider not to ring the bell, the baby is sleeping, just leave it on the shoe rack outside the door.\nB: Got it, I selected "contactless delivery, leave at door and take photo to text".\nA: Great, about how much longer until it arrives?\nB: Estimated delivery in 25 minutes.',
    phonetic: 'A: Měituán wàimài diǎn hǎo le ma? Nǐ bèizhù xiě le shénme?\nB: Wǒ xiě le “wēi là, bù yào xiāngcài, duō fàng cōnghuā”.\nA: Jìde tíxǐng qíshǒu bié àn ménlíng, háizi zài shuìjiào, fàng zài ménkǒu xiéjià shàng jiù xíng.\nB: Hǎo de, wǒ yǐjīng xuǎn le “wú jiēchù pèisòng, fàng ménkǒu bìng pāizhào fā xìnxī”.\nA: Tài hǎo le, dàgài hái yào duōjiǔ néng sòng dào?\nB: Yùjì èrshíwǔ fēnzhōng hòu sòngdá.',
    grammarNotes: 'Delivery lifestyle: 美团外卖 (Meituan delivery); 备注 (remarks / special requests); 不要香菜 (no cilantro - super useful phrase!); 骑手 (courier/rider); 无接触配送 (contactless delivery).',
    hint: 'Situation: Customizing food delivery orders and courier instructions.',
    exampleSentences: [
      { target: '外卖小哥打电话说放在前台了。', translation: 'The delivery guy called saying it is left at reception.', phonetic: 'Wàimài xiǎogē dǎ diànhuà shuō fàng zài qiántái le.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，一共四十二块五。便当需要帮您在微波炉里加热吗？\nB: 麻烦帮我热一下，热一点。\nA: 好的，大概需要一分半钟。需要买个塑料袋装起来吗？三毛钱。\nB: 不用了，我有双肩包，直接装包里就行。\nA: 好的，请出示付款码。“滴”，支付成功，便当热好了，小心烫手！',
    back: 'A: Hello, total is 42.5 yuan. Would you like me to heat the bento in the microwave?\nB: Please heat it up for me, make it quite hot.\nA: Sure, takes about one and a half minutes. Do you need to buy a plastic bag? Thirty cents.\nB: No need, I have a backpack, I\'ll put it straight in my bag.\nA: Okay, please show your payment QR code. *Beep*, payment successful, bento is hot, careful not to burn your hands!',
    phonetic: 'A: Nín hǎo, yīgòng sìshí\'èr kuài wǔ. Biàndang xūyào bāng nín zài wēibōlú lǐ jiārè ma?\nB: Máfan bāng wǒ rè yīxià, rè yīdiǎn.\nA: Hǎo de, dàgài xūyào yī fēn bàn zhōng. Xūyào mǎi gè sùliàodài zhuāng qǐlai ma? Sān máo qián.\nB: Bù yòng le, wǒ yǒu shuāngjiānbāo, zhíjiē zhuāng bāo lǐ jiù xíng.\nA: Hǎo de, qǐng chūshì fùkuǎn mǎ. “Dī”, zhīfù chénggōng, biàndang rè hǎo le, xiǎoxīn tàng shǒu!',
    grammarNotes: 'Convenience store transactions: 微波炉加热 (microwave heating); 麻烦帮我... (please help me do...); 付款码 (payment QR code); 小心烫手 (be careful, it is hot to the touch).',
    hint: 'Situation: Buying lunch at 7-Eleven, Lawson, or FamilyMart in China.',
    exampleSentences: [
      { target: '您扫我，还是我扫您？', translation: 'Will you scan me, or should I scan you? (Payment code vs Merchant code)', phonetic: 'Nín sǎo wǒ, háishì wǒ sǎo nín?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，我想理发，洗剪吹一套多少钱？\nB: 洗剪吹普通剪三十八，总监剪五十八。请先到后面躺下洗个头。\nA: 好，三十八的就行。\nB: 洗发水温合适吗？今天想怎么剪？\nA: 两边和后脑勺推平铲短，头顶留三厘米左右，稍微打薄一点，显得精神一些就行。',
    back: 'A: Barber, I\'d like a haircut. How much for a wash, cut, and blow-dry package?\nB: Wash, cut, and dry is 38 for standard, 58 for creative director. Please lie down at the back to wash hair first.\nA: Okay, the 38 one is fine.\nB: Is the water temperature comfortable? How would you like it cut today?\nA: Shave sides and back short with clippers, keep about 3 cm on top, slightly thin it out so it looks sharp and energetic.',
    phonetic: 'A: Shīfu, wǒ xiǎng lǐfà, xǐ-jiǎn-chuī yī tào duōshǎo qián?\nB: Xǐ-jiǎn-chuī pǔtōng jiǎn sānshíbā, zǒngjiān jiǎn wǔshíbā. Qǐng xiān dào hòumiàn tǎng xià xǐ gè tóu.\nA: Hǎo, sānshíbā de jiù xíng.\nB: Xǐfà shuǐwēn héshì ma? Jīntiān xiǎng zěnme jiǎn?\nA: Liǎngbiān hé hòunǎosháo tuīpíng chǎn duǎn, tóudǐng liú sān límǐ zuǒyòu, shāowēi dǎbáo yīdiǎn, xiǎnde jīngshen yīxiē jiù xíng.',
    grammarNotes: 'Hair salon vocabulary: 洗剪吹 (wash, cut & blow-dry); 铲短/推平 (clipper shave short); 打薄 (thin out with thinning shears); 精神 (energetic / sharp-looking).',
    hint: 'Situation: Explaining your haircut preferences clearly to a Chinese barber.',
    exampleSentences: [
      { target: '刘海稍微修一下，别剪太短。', translation: 'Trim the bangs slightly, do not cut them too short.', phonetic: 'Liúhǎi shāowēi xiū yīxià, bié jiǎn tài duǎn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 药剂师你好，我从昨天开始发烧、流鼻涕，浑身没力气。\nB: 有咳嗽或者嗓子痛吗？\nA: 嗓子很干很痛，量了体温是三十八度二。\nB: 这是急性感冒的症状。我给你拿一盒布洛芬退烧，再加一盒清热解毒口服液。\nA: 怎么服用？饭前还是饭后？\nB: 布洛芬一次一片，发烧超过三十八度五再吃，一定要饭后吃，对胃好。',
    back: 'A: Hello pharmacist, starting yesterday I got a fever, runny nose, and feel weak all over.\nB: Do you have a cough or sore throat?\nA: Throat is very dry and sore, measured temperature was 38.2 degrees.\nB: These are symptoms of acute cold. I will get you a box of Ibuprofen to reduce fever, plus a clearing oral liquid.\nA: How do I take it? Before meals or after meals?\nB: Ibuprofen is one tablet at a time, take only if fever exceeds 38.5, and must take after meals for stomach protection.',
    phonetic: 'A: Yàojìshī nǐ hǎo, wǒ cóng zuótiān kāishǐ fāshāo, liú bítì, húnshēn méi lìqi.\nB: Yǒu késou huòzhě sǎngzi tòng ma?\nA: Sǎngzi hěn gān hěn tòng, liáng le tǐwēn shì sānshíbā dù èr.\nB: Zhè shì jíxìng gǎnmào de zhèngzhuàng. Wǒ gěi nǐ ná yī hé Bùluòfēn tuìshāo, zài jiā yī hé qīngrè jiědú kǒufúyè.\nA: Zěnme fúyòng? Fàn qián háishì fàn hòu?\nB: Bùluòfēn yī cì yī piàn, fāshāo chāoguò sānshíbā dù wǔ zài chī, yīdìng yào fànhòu chī, duì wèi hǎo.',
    grammarNotes: 'Pharmacy survival terms: 药剂师 (pharmacist); 流鼻涕 (runny nose); 布洛芬 (Ibuprofen - common pain/fever reducer); 退烧 (reduce fever); 饭后吃 (take after meals).',
    hint: 'Situation: Buying over-the-counter medicine for a cold and fever at a pharmacy.',
    exampleSentences: [
      { target: '请问有消炎药和创可贴吗？', translation: 'Do you have anti-inflammatory pills and band-aids?', phonetic: 'Qǐngwèn yǒu xiāoyányào hé chuàngkětiē ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 服务员，请问这里的Wi-Fi密码是多少？\nB: 墙上的二维码你扫一下，可以直接一键连上无线上网。\nA: 好的，我扫好了。对了，有充电插座吗？\nB: 靠窗那一排每个座位下面都有两孔和三孔插座。\nA: 太贴心了，非常感谢！',
    back: 'A: Server, what is the Wi-Fi password here?\nB: Just scan the QR code on the wall, it lets you connect directly to wireless internet with one tap.\nA: Okay, I scanned it. By the way, do you have charging outlets?\nB: Under every seat along the window row, there are 2-prong and 3-prong charging sockets.\nA: So considerate, thank you so much!',
    phonetic: 'A: Fúwùyuán, qǐngwèn zhèlǐ de Wi-Fi mìmǎ shì duōshǎo?\nB: Qiáng shàng de èrwéimǎ nǐ sǎo yīxià, kěyǐ zhíjiē yī jiàn lián shàng wúxiàn shàngwǎng.\nA: Hǎo de, wǒ sǎo hǎo le. Duì le, yǒu chōngdiàn chāzuò ma?\nB: Kào chuāng nà yī pái měi gè zuòwèi xiàmiàn dōu yǒu liǎng kǒng hé sān kǒng chāzuò.\nA: Tài tiēxīn le, fēicháng gǎnxiè!',
    grammarNotes: 'Café & workspace essentials: Wi-Fi密码 (Wi-Fi password); 一键连上 (one-tap connect); 充电插座 (charging outlet/plug socket); 贴心 (thoughtful / considerate).',
    hint: 'Situation: Getting Wi-Fi and locating power outlets to work or study in a café.',
    exampleSentences: [
      { target: '这里的网速非常快，看视频不卡。', translation: 'The internet speed here is very fast, videos stream smoothly.', phonetic: 'Zhèlǐ de wǎngsù fēicháng kuài, kàn shìpín bù kǎ.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Personal Info, Nationalities & Origins (国籍、家乡与来自哪里)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好！请问你是哪国人？\nB: 我是巴西人，来自巴西南部的一个海滨城市。\nA: 哇，巴西！你喜欢那里的气候吗？\nB: 巴西南部四季分明，冬天有点凉，夏天非常舒服。\nA: 听说巴西人都特别热情！\nB: 哈哈，是的，欢迎你有机会去巴西旅游！',
    back: 'A: Hello! Where are you from (which country are you from)?\nB: I am Brazilian, from a coastal city in southern Brazil.\nA: Wow, Brazil! Do you like the climate there?\nB: Southern Brazil has four distinct seasons: winter is a bit cool, summer is very comfortable.\nA: I heard Brazilian people are exceptionally warm and welcoming!\nB: Haha, yes they are! You are welcome to travel to Brazil when you have the chance!',
    phonetic: 'A: Nǐ hǎo! Qǐngwèn nǐ shì nǎ guó rén?\nB: Wǒ shì Bāxī rén, láizì Bāxī nánbù de yī gè hǎibīn chéngshì.\nA: Wa, Bāxī! Nǐ xǐhuan nàlǐ de qìhòu ma?\nB: Bāxī nánbù sìjì fēnmíng, dōngtiān yǒudiǎn liáng, xiàtiān fēicháng shūfu.\nA: Tīngshuō Bāxī rén dōu tèbié rèqíng!\nB: Hāhā, shì de, huānyíng nǐ yǒu jīhuì qù Bāxī lǚyóu!',
    grammarNotes: 'Key country & geography: 哪国人 (which nationality); 巴西 (Bāxī = Brazil); 巴西南部 (Bāxī nánbù = southern Brazil); 四季分明 (four distinct seasons); 热情 (warm/enthusiastic).',
    hint: 'Situation: Introducing your nationality and sharing information about southern Brazil.',
    exampleSentences: [
      { target: '我来自美丽的巴西。', translation: 'I come from beautiful Brazil.', phonetic: 'Wǒ láizì měilì de Bāxī.' },
      { target: '你是哪国人？', translation: 'Which nationality are you?', phonetic: 'Nǐ shì nǎ guó rén?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你的母语是葡萄牙语吗？你是从葡萄牙来的吗？\nB: 不是，我是巴西人，不过葡萄牙和巴西都讲葡萄牙语。\nA: 原来是这样！那你们的口音有差别吗？\nB: 有一些差别，就像美式英语和英式英语一样，但互相沟通完全没问题。',
    back: 'A: Is your mother tongue Portuguese? Are you from Portugal?\nB: No, I am Brazilian, but both Portugal and Brazil speak Portuguese.\nA: So that is how it is! Do your accents have differences?\nB: There are some differences, just like American English and British English, but communicating with each other is totally fine.',
    phonetic: 'A: Nǐ de mǔyǔ shì Pútáoyáyǔ ma? Nǐ shì cóng Pútáoyá lái de ma?\nB: Bù shì, wǒ shì Bāxī rén, bùguò Pútáoyá hé Bāxī dōu jiǎng Pútáoyáyǔ.\nA: Yuánlái shì zhèyàng! Nà nǐmen de kǒuyīn yǒu chābié ma?\nB: Yǒu yīxiē chābié, jiù xiàng Měishì Yīngyǔ hé Yīngshì Yīngyǔ yīyàng, dàn hùxiāng gōutōng wánquán méi wèntí.',
    grammarNotes: 'Language pairs: 葡萄牙 (Pútáoyá = Portugal); 葡萄牙语 (Portuguese language); 母语 (mother tongue); 口音 (accent); 沟通 (communicate).',
    hint: 'Situation: Explaining the linguistic connection between Portugal and Brazil.',
    exampleSentences: [
      { target: '我会说流利的葡萄牙语。', translation: 'I can speak fluent Portuguese.', phonetic: 'Wǒ huì shuō liúlì de Pútáoyáyǔ.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 坐在那边的那位先生是德国人还是爱尔兰人？\nB: 他爸爸是德国人，妈妈是爱尔兰人，他现在住在柏林。\nA: 他会说德语和英语对吧？\nB: 对，他是双语者，德语和英语都是他的母语。\nA: 两个国家我都好想去看看！',
    back: 'A: Is that gentleman sitting over there German or Irish?\nB: His father is German, and his mother is Irish. He currently lives in Berlin.\nA: He can speak German and English, right?\nB: Yes, he is bilingual; both German and English are his native languages.\nA: I would love to visit both countries!',
    phonetic: 'A: Zuò zài nàbiān de nà wèi xiānsheng shì Déguó rén háishì Ài\'ěrlán rén?\nB: Tā bàba shì Déguó rén, māma shì Ài\'ěrlán rén, tā xiànzài zhù zài Bólín.\nA: Tā huì shuō Déyǔ hé Yīngyǔ duì ba?\nB: Duì, tā shì shuāngyǔzhě, Déyǔ hé Yīngyǔ dōu shì tā de mǔyǔ.\nA: Liǎng gè guójiā wǒ dōu hǎo xiǎng qù kànkan!',
    grammarNotes: 'European countries: 德国 (Déguó = Germany); 德语 (German language); 爱尔兰 (Ài\'ěrlán = Ireland); 柏林 (Bólín = Berlin); 双语者 (bilingual person).',
    hint: 'Situation: Discussing multinational background (German and Irish).',
    exampleSentences: [
      { target: '德国的啤酒和爱尔兰的音乐都很出名。', translation: 'German beer and Irish music are both very famous.', phonetic: 'Déguó de píjiǔ hé Ài\'ěrlán de yīnyuè dōu hěn chūmíng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你们留学生宿舍住着哪些国家的人？\nB: 可热闹了！有俄罗斯人、英国人、德国人，还有很多中国室友。\nA: 你们平时用什么语言聊天？\nB: 经常中英文混着用，有时候俄罗斯同学还会教我们几句俄语。\nA: 多元文化的交流真棒！',
    back: 'A: What nationalities live in your international student dormitory?\nB: It is so lively! There are Russians, British people, Germans, and many Chinese roommates.\nA: What language do you usually chat in?\nB: We often mix Chinese and English, and sometimes Russian classmates teach us a few words of Russian.\nA: Multicultural exchange is truly wonderful!',
    phonetic: 'A: Nǐmen liúxuéshēng sùshè zhù zhe nǎxiē guójiā de rén?\nB: Kě rènào le! Yǒu Éluósī rén, Yīngguó rén, Déguó rén, hái yǒu hěn duō Zhōngguó shìyǒu.\nA: Nǐmen píngshí yòng shénme yǔyán liáotiān?\nB: Jīngcháng Zhōng-Yīngwén hùn zhe yòng, yǒushíhou Éluósī tóngxué hái huì jiāo wǒmen jǐ jù Éyǔ.\nA: Duōyuán wénhuà de jiāoliú zhēn bàng!',
    grammarNotes: 'Dorm & nationalities: 俄罗斯 (Éluósī = Russia); 俄语 (Éyǔ = Russian); 英国人 (British people); 留学生宿舍 (international student dorm); 混着用 (use mixed together).',
    hint: 'Situation: Chatting about an international community in China.',
    exampleSentences: [
      { target: '我们来自世界各地，共同学习中文。', translation: 'We come from all over the world to study Chinese together.', phonetic: 'Wǒmen láizì shìjiè gèdì, gòngtóng xuéxí Zhōngwén.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Languages Spoken (你会说几种语言？)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 请问你会说几门语言？\nB: 我会说三种语言：葡萄牙语是我的母语，英语讲得很熟练，西班牙语也能日常交流。\nA: 听说葡萄牙语和西班牙语很像，是真的吗？\nB: 是的，语法和很多单词非常接近，就像亲兄弟一样。\nA: 那你现在还在学什么语言？\nB: 我现在正在努力攻克中文！',
    back: 'A: Excuse me, how many languages can you speak?\nB: I can speak three languages: Portuguese is my native language, my English is proficient, and I can also converse in Spanish.\nA: I heard Portuguese and Spanish are very similar, is that true?\nB: Yes, the grammar and many vocabulary words are very close, just like close brothers.\nA: What language are you learning right now then?\nB: I am currently working hard to conquer Chinese!',
    phonetic: 'A: Qǐngwèn nǐ huì shuō jǐ mén yǔyán?\nB: Wǒ huì shuō sān zhǒng yǔyán: Pútáoyáyǔ shì wǒ de mǔyǔ, Yīngyǔ jiǎng de hěn shúliàn, Xībānyáyǔ yě néng rìcháng jiāoliú.\nA: Tīngshuō Pútáoyáyǔ hé Xībānyáyǔ hěn xiàng, shì zhēn de ma?\nB: Shì de, yǔfǎ hé hěn duō dāncí fēicháng jiējìn, jiù xiàng qīn xiōngdì yīyàng.\nA: Nà nǐ xiànzài hái zài xué shénme yǔyán?\nB: Wǒ xiànzài zhèngzài nǔlì gōngkè Zhōngwén!',
    grammarNotes: 'Language skills: 几门语言 (how many languages - 门 is the classifier); 西班牙语 (Spanish); 熟练 (fluent/proficient); 亲兄弟 (close brothers); 攻克 (conquer/master).',
    hint: 'Situation: Discussing your multilingual background and romance language similarities.',
    exampleSentences: [
      { target: '学习多门语言能开阔视野。', translation: 'Learning multiple languages broadens one\'s horizons.', phonetic: 'Xuéxí duō mén yǔyán néng kāikuò shìyě.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 听说你除了英语和德语，还会一点日语？\nB: 对，我以前在日本工作过一年，学会了日常日语。\nA: 哇，真厉害！那俄语你接触过吗？\nB: 俄语太难了，我只会说“你好”和“谢谢”，字母表还在慢慢记。\nA: 多语种切换自如真的很令人钦佩！',
    back: 'A: I heard that besides English and German, you also know a bit of Japanese?\nB: Yes, I worked in Japan for a year in the past and learned daily Japanese.\nA: Wow, really impressive! Have you had contact with Russian?\nB: Russian is too difficult! I only know how to say "hello" and "thank you", still memorizing the alphabet.\nA: Switching effortlessly between multiple languages is truly admirable!',
    phonetic: 'A: Tīngshuō nǐ chúle Yīngyǔ hé Déyǔ, hái huì yīdiǎn Rìyǔ?\nB: Duì, wǒ yǐqián zài Rìběn gōngzuò guò yī nián, xuéhuì le rìcháng Rìyǔ.\nA: Wa, zhēn lìhài! Nà Éyǔ nǐ jiēchù guò ma?\nB: Éyǔ tài nán le, wǒ zhǐ huì shuō “nǐ hǎo” hé “xièxiè”, zìmǔbiǎo hái zài mànmàn jì.\nA: Duō yǔzhǒng qiēhuàn zìrú zhēn de hěn lìng rén qīnpèi!',
    grammarNotes: 'Language names: 日语 (Rìyǔ = Japanese); 日本 (Japan); 德语 (German); 字母表 (alphabet); 切换自如 (switch freely/effortlessly).',
    hint: 'Situation: Comparing proficiency across Asian and European languages.',
    exampleSentences: [
      { target: '日语里的汉字对学中文很有帮助。', translation: 'Kanji in Japanese is very helpful for learning Chinese.', phonetic: 'Rìyǔ lǐ de hànzì duì xué Zhōngwén hěn yǒu bāngzhù.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你觉得学习中文最难的部分是什么？\nB: 对我来说，四个声调最难，第一声和第四声经常容易读错。\nA: 汉字呢？你觉得汉字好记吗？\nB: 汉字像一幅幅画，了解了部首和造字故事之后，反而觉得非常有意思！\nA: 只要坚持每天练习听和说，声调很快就会变自然的。',
    back: 'A: What do you think is the hardest part of learning Chinese?\nB: For me, the four tones are the hardest; 1st tone and 4th tone are often easy to mispronounce.\nA: What about Chinese characters? Do you find Hanzi easy to remember?\nB: Hanzi are like paintings; after understanding radicals and story origins, I actually find them fascinating!\nA: As long as you persist in listening and speaking daily, your tones will become natural soon.',
    phonetic: 'A: Nǐ juéde xuéxí Zhōngwén zuì nán de bùfen shì shénme?\nB: Duì wǒ lái shuō, sì gè shēngdiào zuì nán, dì-yī shēng hé dì-sì shēng jīngcháng róngyì dú cuò.\nA: Hànzì ne? Nǐ juéde hànzì hǎo jì ma?\nB: Hànzì xiàng yī fú fú huà, liǎojiě le bùshǒu hé zàozì gùshì zhīhòu, fǎn\'ér juéde fēicháng yǒu yìsi!\nA: Zhǐyào jiānchí měi tiān liànxí tīng hé shuō, shēngdiào hěn kuài jiù huì biàn zìrán de.',
    grammarNotes: 'Mandarin learning: 四个声调 (four tones); 容易读错 (easy to mispronounce); 部首 (radicals); 造字 (character creation); 坚持 (persist/persevere).',
    hint: 'Situation: Discussing the experience of conquering Mandarin tones and characters.',
    exampleSentences: [
      { target: '中文的声调决定了词的意思。', translation: 'Tones in Chinese determine the meaning of the word.', phonetic: 'Zhōngwén de shēngdiào juédìng le cí de yìsi.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Age & Height (年龄与身高)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 方便问一下你今年多大了吗？\nB: 我今年二十五岁，刚工作两年。你呢？\nA: 我比你大三岁，今年二十八岁，属虎的。\nB: 看不出来！你看起来就像大学刚毕业一样年轻。\nA: 哈哈，借你吉言，希望永远保持年轻！',
    back: 'A: May I ask how old you are this year?\nB: I am 25 years old this year, started working two years ago. And you?\nA: I am three years older than you, 28 years old this year, born in the Year of the Tiger.\nB: Couldn\'t tell at all! You look young, like you just graduated from university.\nA: Haha, thank you for the compliment (from your lips to God\'s ears), I hope to stay young forever!',
    phonetic: 'A: Fāngbiàn wèn yīxià nǐ jīnnián duō dà le ma?\nB: Wǒ jīnnián èrshíwǔ suì, gāng gōngzuò liǎng nián. Nǐ ne?\nA: Wǒ bǐ nǐ dà sān suì, jīnnián èrshíbā suì, shǔ hǔ de.\nB: Kàn bù chūlái! Nǐ kàn qǐlai jiù xiàng dàxué gāng bìyè yīyàng niánqīng.\nA: Hāhā, jiè nǐ jíyán, xīwàng yǒngyuǎn bǎochí niánqīng!',
    grammarNotes: 'Age inquiries: 多大了 (how old - casual/peers); 比你大三岁 (three years older than you); 属虎 (born in year of tiger); 借你吉言 (take your auspicious words as a compliment); 看不出来 (couldn\'t tell).',
    hint: 'Situation: Asking and sharing ages casually with friends or colleagues.',
    exampleSentences: [
      { target: '他长得年轻，其实已经三十出头了。', translation: 'He looks young, but is actually in his early thirties.', phonetic: 'Tā zhǎng de niánqīng, qíshí yǐjīng sānshí chūtóu le.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 哇，你站在我身边好显高，你有多高啊？\nB: 我净身高一米八五，你呢？\nA: 我只有一米七零，站在你旁边压力好大！\nB: 哈哈，你平时喜欢打篮球吗？一米八五在球场上肯定很有优势吧。\nA: 对，我上大学时是校篮球队的中锋。',
    back: 'A: Wow, standing next to me you look so tall, how tall are you?\nB: My barefoot height is 1.85 meters (6\'1"), what about you?\nA: I am only 1.70 meters (5\'7"), standing beside you is quite intimidating!\nB: Haha, do you like playing basketball? Being 1.85m on the court must be a big advantage.\nA: Yes, when I was in university I was the center on the varsity basketball team.',
    phonetic: 'A: Wa, nǐ zhàn zài wǒ shēnbiān hǎo xiǎn gāo, nǐ yǒu duō gāo a?\nB: Wǒ jìng shēngāo yī mǐ bā wǔ, nǐ ne?\nA: Wǒ zhǐ yǒu yī mǐ qī líng, zhàn zài nǐ pángbiān yālì hǎo dà!\nB: Hāhā, nǐ píngshí xǐhuan dǎ lánqiú ma? Yī mǐ bā wǔ zài qiúchǎng shàng kěndìng hěn yǒu yōushì ba.\nA: Duì, wǒ shàng dàxué shí shì xiào lánqiúduì de zhōngfēng.',
    grammarNotes: 'Height expressions: 多高 (how tall); 净身高 (barefoot height); 一米八五 (1.85 meters); 一米七零 (1.70 meters); 优势 (advantage); 显高 (looks tall).',
    hint: 'Situation: Talking about physical height and sports.',
    exampleSentences: [
      { target: '在北方很多人身高都在一米八以上。', translation: 'In northern China, many people are over 1.80m tall.', phonetic: 'Zài běifāng hěn duō rén shēngāo dōu zài yī mǐ bā yǐshàng.' }
    ]
  },

  // -------------------------------------------------------------------------
  // University Education & Degree Levels (本科生、硕士生与博士生)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你现在是在工作还是还在读书？\nB: 我还在上大学，是一名本科四年级的学生。\nA: 快毕业了吧？你的专业是什么？\nB: 我的专业是软件工程。毕业后我打算继续攻读硕士研究生。\nA: 很有远见的规划！继续深造很不错。',
    back: 'A: Are you working now or still studying?\nB: I am still in university, a fourth-year undergraduate student.\nA: Graduating soon, right? What is your major?\nB: My major is Software Engineering. After graduation, I plan to pursue a master\'s degree.\nA: Very farsighted plan! Continuing advanced studies is great.',
    phonetic: 'A: Nǐ xiànzài shì zài gōngzuò háishì hái zài dúshū?\nB: Wǒ hái zài shàng dàxué, shì yī míng běnkē sì niánjí de xuéshēng.\nA: Kuài bìyè le ba? Nǐ de zhuānyè shì shénme?\nB: Wǒ de zhuānyè shì ruǎnjiàn gōngchéng. Bìyè hòu wǒ dǎsuàn jìxù gōngdú shuòshì yánjiūshēng.\nA: Hěn yǒu yuǎnjiàn de guīhuà! Jìxù shēnzào hěn bùcuò.',
    grammarNotes: 'Education degrees: 本科生 (undergraduate / bachelor\'s student); 硕士研究生 (master\'s graduate student); 专业 (academic major); 软件工程 (software engineering); 深造 (further studies).',
    hint: 'Situation: Asking a university student about their degree level, major, and graduation plans.',
    exampleSentences: [
      { target: '我正在准备硕士研究生的入学考试。', translation: 'I am preparing for the master\'s entrance examination.', phonetic: 'Wǒ zhèngzài zhǔnbèi shuòshì yánjiūshēng de rùxué kǎoshì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 听说你正在读博士，读几年级了？\nB: 我是博士二年级，主要研究方向是人工智能和自然语言处理。\nA: 哇，博士生平时的生活是什么样的？\nB: 基本上每天都在实验室看论文、跑模型、做实验，经常加班到深夜。\nA: 做科研确实不容易，但成果出来的时候一定很有成就感！\nB: 是的，希望今年能顺利发表一篇顶会论文。',
    back: 'A: I heard you are doing a PhD, which year are you in?\nB: I am in my second year of PhD, my main research area is Artificial Intelligence and Natural Language Processing.\nA: Wow, what is daily life like for a PhD student?\nB: Basically every day is spent in the lab reading papers, running models, and running experiments, often working late into the night.\nA: Doing scientific research is truly not easy, but when results come out it must feel so rewarding!\nB: Yes, I hope to successfully publish a top-tier conference paper this year.',
    phonetic: 'A: Tīngshuō nǐ zhèngzài dú bóshì, dú jǐ niánjí le?\nB: Wǒ shì bóshì èr niánjí, zhǔyào yánjiū fāngxiàng shì réngōng zhìnéng hé zìrán yǔyán chǔlǐ.\nA: Wa, bóshìshēng píngshí de shēnghuó shì shénme yàng de?\nB: Jīběnshang měi tiān dōu zài shíyànshì kàn lùnwén, pǎo móxíng, zuò shíyàn, jīngcháng jiābān dào shēnyè.\nA: Zuò kēyán quèshí bù róngyì, dàn chéngguǒ chūlái de shíhou yīdìng hěn yǒu chéngjiùgǎn!\nB: Shì de, xīwàng jīnnián néng shùnlì fābiǎo yī piān dǐnghuì lùnwén.',
    grammarNotes: 'Academic research terms: 读博士 / 博士生 (PhD student); 人工智能 (AI); 自然语言处理 (NLP); 论文 (academic paper); 跑模型 (run ML models); 顶会 (top conference).',
    hint: 'Situation: Chatting with a PhD candidate about academic research life and AI models.',
    exampleSentences: [
      { target: '读博需要极大的毅力和专注。', translation: 'Doing a PhD requires immense perseverance and focus.', phonetic: 'Dú bó xūyào jídà de yìlì hé zhuānzhù.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Occupations & Professions (职业、老师、司机、服务员与老板)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你的工作是什么？\nB: 我是一名高中英语老师。\nA: 当老师感觉怎么样？辛苦吗？\nB: 虽然每天备课和批改作业挺累的，但看到学生进步就觉得特别有价值。\nA: 老师是令人尊敬的职业！',
    back: 'A: What is your job?\nB: I am a high school English teacher.\nA: How does it feel being a teacher? Is it exhausting?\nB: Although preparing lessons and grading homework every day is tiring, seeing students make progress feels especially meaningful.\nA: Teaching is a truly respectable profession!',
    phonetic: 'A: Nǐ de gōngzuò shì shénme?\nB: Wǒ shì yī míng gāozhōng Yīngyǔ lǎoshī.\nA: Dāng lǎoshī gǎnjué zěnmeyàng? Xīnkǔ ma?\nB: Suīrán měi tiān bèikè hé pīgǎi zuòyè tǐng lèi de, dàn kàn dào xuéshēng jìnbù jiù juéde tèbié yǒu jiàzhí.\nA: Lǎoshī shì lìng rén zūnjìng de zhíyè!',
    grammarNotes: 'Teaching profession: 老师 (teacher); 备课 (prepare lessons); 批改作业 (grade homework); 进步 (progress); 令人尊敬 (respectable).',
    hint: 'Situation: Asking someone about their career as a teacher.',
    exampleSentences: [
      { target: '尊师重道是中华民族的传统美德。', translation: 'Respecting teachers and truth is a traditional Chinese virtue.', phonetic: 'Zūnshī-zhòngdào shì Zhōnghuá mínzú de chuántǒng měidé.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，您开网约车开了几年了？\nB: 开了快四年了，以前我在老家的大饭店当服务员。\nA: 那开专车和服务员相比，哪个更舒服？\nB: 开车时间自由多了，自己当自己的老板，多跑几单就能多挣点钱。\nA: 确实，辛苦了师傅，注意行车安全！',
    back: 'A: Driver, how many years have you been driving ride-hailing cars?\nB: Almost four years now. Before, I was a waiter at a large restaurant back in my hometown.\nA: Compared with being a waiter, which is more comfortable?\nB: Driving has much freer hours; you are your own boss, and taking more rides earns more money.\nA: Indeed! Thank you for your hard work driver, stay safe on the road!',
    phonetic: 'A: Shīfu, nín kāi wǎngyuēchē kāi le jǐ nián le?\nB: Kāi le kuài sì nián le, yǐqián wǒ zài lǎojiā de dà fàndiàn dāng fúwùyuán.\nA: Nà kāi zhuānchē hé fúwùyuán xiāngbǐ, nǎ ge gèng shūfu?\nB: Kāi chē shíjiān zìyóu duō le, zìjǐ dāng zìjǐ de lǎobǎn, duō pǎo jǐ dān jiù néng duō zhèng diǎn qián.\nA: Quèshí, xīnkǔ le shīfu, zhùyì xíngchē ānquán!',
    grammarNotes: 'Service jobs: 网约车 / 专车 (ride-hailing car / DiDi); 服务员 (waiter/server); 自由 (flexible/free); 多跑几单 (take more orders/rides); 多挣点钱 (earn more money).',
    hint: 'Situation: Chatting with a DiDi ride-hailing driver about their previous and current jobs.',
    exampleSentences: [
      { target: '餐厅服务员的服务态度非常热情周到。', translation: 'The restaurant waiter\'s service attitude is very warm and attentive.', phonetic: 'Cāntīng fúwùyuán de fúwù tàidu fēicháng rèqíng zhōudào.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 张总，这家设计工作室是您自己创业开的吗？\nB: 是的，我两年前离开大公司，和两个合伙人一起出来单干。\nA: 自己当老板压力肯定不小吧？\nB: 压力确实很大，从找客户、管团队到交房租都要操心，但做自己喜欢的事很自由。\nA: 祝您的公司蒸蒸日上！',
    back: 'A: President Zhang, did you start this design studio on your own?\nB: Yes, two years ago I left a large company and branched out on my own with two partners.\nA: Being your own boss must come with quite a lot of pressure?\nB: The pressure is truly immense: from finding clients and managing team to paying rent, everything requires care, but doing what I love is very liberating.\nA: Wishing your company ever-growing prosperity!',
    phonetic: 'A: Zhāng zǒng, zhè jiā shèjì gōngzuòshì shì nín zìjǐ chuàngyè kāi de ma?\nB: Shì de, wǒ liǎng nián qián líkāi dà gōngsī, hé liǎng gè héhuǒrén yīqǐ chūlái dāngàn.\nA: Zìjǐ dāng lǎobǎn yālì kěndìng bù xiǎo ba?\nB: Yālì quèshí hěn dà, cóng zhǎo kèhù, guǎn tuánduì dào jiāo fángzū dōu yào cāoxīn, dàn zuò zìjǐ xǐhuan de shì hěn zìyóu.\nA: Zhù nín de gōngsī zhēngzhēng-rìshàng!',
    grammarNotes: 'Business titles: 张总 (General Manager Zhang); 老板 (boss); 创业 (start a business / entrepreneurial); 单干 (work independently on one\'s own); 蒸蒸日上 (prospering more and more each day).',
    hint: 'Situation: Congratulating a founder/boss on running an independent business.',
    exampleSentences: [
      { target: '创业路上充满了挑战与机遇。', translation: 'The entrepreneurial path is full of challenges and opportunities.', phonetic: 'Chuàngyè lùshang chōngmǎn le tiǎozhàn yǔ jīyù.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Software Engineering, Coding & AI (程序员、软件工程与人工智能)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你在互联网公司是做什么职位的？\nB: 我是一名程序员，也就是软件开发工程师。\nA: 哇，传说中的“码农”！你平时用什么编程语言写代码？\nB: 我主要用Python做数据处理，用TypeScript和React做网站开发。\nA: 听说程序员经常熬夜改bug？\nB: 哈哈，确实，有时候一个小小的分号就能找半天！',
    back: 'A: What position do you hold at your internet tech company?\nB: I am a programmer, in other words a software development engineer.\nA: Wow, the legendary "code farmer" (coder)! What programming languages do you use to write code?\nB: I mainly use Python for data processing, and TypeScript and React for web development.\nA: I heard programmers often stay up late fixing bugs?\nB: Haha, indeed! Sometimes a single tiny semicolon takes half a day to track down!',
    phonetic: 'A: Nǐ zài hùliánwǎng gōngsī shì zuò shénme zhíwèi de?\nB: Wǒ shì yī míng chéngxùyuán, yě jiù shì ruǎnjiàn kāifā gōngchéngshī.\nA: Wa, chuánshuō zhōng de “mǎnóng”! Nǐ píngshí yòng shénme biānchéng yǔyán xiě dàimǎ?\nB: Wǒ zhǔyào yòng Python zuò shùjù chǔlǐ, yòng TypeScript hé React zuò wǎngzhàn kāifā.\nA: Tīngshuō chéngxùyuán jīngcháng áoyè gǎi bug?\nB: Hāhā, quèshí, yǒushíhou yī gè xiǎoxiǎo de fēnhào jiù néng zhǎo bàn tiān!',
    grammarNotes: 'Tech slang & roles: 程序员 (programmer); 码农 (mǎ nóng = code farmer / coder slang); 软件工程师 (software engineer); 写代码 (write code); 改bug (fix bugs); 编程语言 (programming language).',
    hint: 'Situation: Discussing programming jobs, daily coding, and fixing bugs.',
    exampleSentences: [
      { target: '写出优雅干净的代码很有成就感。', translation: 'Writing elegant, clean code brings great satisfaction.', phonetic: 'Xiě chū yōuyǎ gānjìng de dàimǎ hěn yǒu chéngjiùgǎn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 在软件开发里，你是偏前端还是偏后端？\nB: 我是全栈工程师，前端和后端都能做。\nA: 全栈好厉害！前端和后端具体负责什么？\nB: 前端负责做漂亮的网页和用户界面；后端负责处理服务器逻辑、数据库和API接口。\nA: 看来整个系统你一个人就能搭建起来！\nB: 架构设计很重要，代码规范也很关键。',
    back: 'A: In software development, do you lean towards frontend or backend?\nB: I am a full-stack engineer; I can do both frontend and backend.\nA: Full stack is so cool! What do frontend and backend handle specifically?\nB: Frontend is responsible for building pretty web pages and user interfaces; backend handles server logic, databases, and API endpoints.\nA: Looks like you could build an entire system single-handedly!\nB: Architectural design is very important, and code style standards are also crucial.',
    phonetic: 'A: Zài ruǎnjiàn kāifā lǐ, nǐ shì piān qiánduān háishì piān hòuduān?\nB: Wǒ shì quánzhàn gōngchéngshī, qiánduān hé hòuduān dōu néng zuò.\nA: Quánzhàn hǎo lìhài! Qiánduān hé hòuduān jùtǐ fùzé shénme?\nB: Qiánduān fùzé zuò piàoliang de wǎngyè hé yònghù jièmiàn; hòuduān fùzé chǔlǐ fúwùqì luóji, shùjùkù hé API jiēkǒu.\nA: Kànlái zhěnggè xìtǒng nǐ yī gè rén jiù néng dājiàn qǐlai!\nB: Jiàgòu shèjì hěn zhòngyào, dàimǎ guīfàn yě hěn guānjiàn.',
    grammarNotes: 'Software engineering concepts: 前端 (frontend); 后端 (backend); 全栈工程师 (full-stack engineer); 用户界面 (UI / user interface); 数据库 (database); 接口 (API endpoint).',
    hint: 'Situation: Comparing frontend vs. backend responsibilities with a software developer.',
    exampleSentences: [
      { target: '前端交互体验直接影响用户留存。', translation: 'Frontend interactive experience directly affects user retention.', phonetic: 'Qiánduān jiāohù tǐyàn zhíjiē yǐngxiǎng yònghù liúcún.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 你平时写代码会用AI编程助手吗？\nB: 每天都在用！像大语言模型（LLM）能帮我自动补全代码、解释报错信息，还能写测试。\nA: AI会不会写出有bug的代码？\nB: 会的，AI给的方案不能直接盲目复制，工程师仍然需要做代码审查（Code Review）和验证。\nA: 原来如此，AI是放大人类能力的超级助手！\nB: 没错，AI让开发效率提升了至少一倍。',
    back: 'A: Do you usually use an AI coding assistant when programming?\nB: I use it every day! Large Language Models (LLMs) help me autocomplete code, explain error traces, and even generate tests.\nA: Can AI write buggy code too?\nB: Yes, you cannot blindly copy code given by AI; engineers still need to conduct code review and verification.\nA: I see, AI is a superpower multiplier that amplifies human capability!\nB: Exactly, AI has boosted development efficiency by at least double.',
    phonetic: 'A: Nǐ píngshí xiě dàimǎ huì yòng AI biānchéng zhùshǒu ma?\nB: Měi tiān dōu zài yòng! Xiàng dà yǔyán móxíng (LLM) néng bāng wǒ zìdòng bǔquán dàimǎ, jiěshì bàocuò xìnxī, hái néng xiě cèshì.\nA: AI huì bù huì xiě chū yǒu bug de dàimǎ?\nB: Huì de, AI gěi de fāng\'àn bù néng zhíjiē mángmù fùzhì, gōngchéngshī réngrán xūyào zuò dàimǎ shěnchá (Code Review) hé yànzhèng.\nA: Yuánlái rúcǐ, AI shì fàngdà rénlèi nénglì de chāojí zhùshǒu!\nB: Méi cuò, AI ràng kāifā xiàolǜ tíshēng le zhìshǎo yī bèi.',
    grammarNotes: 'AI & modern coding: 大语言模型 (LLM / Large Language Model); 自动补全 (autocomplete); 报错信息 (error trace message); 代码审查 (Code Review); 盲目复制 (blind copying).',
    hint: 'Situation: Talking about how AI tools and LLMs empower modern software engineering.',
    exampleSentences: [
      { target: '善用AI工具能让工作事半功倍。', translation: 'Using AI tools well yields twice the result with half the effort.', phonetic: 'Shànyòng AI gōngjù néng ràng gōngzuò shìbàn-gōngbèi.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 很多人担心人工智能会取代程序员，你怎么看？\nB: 我觉得AI不会完全取代程序员，但是会用AI的工程师肯定会取代不会用AI的人。\nA: 对我们普通人来说，应该怎么学习AI呢？\nB: 可以先从掌握“提示词工程”（Prompt Engineering）开始，学会用清晰的自然语言向AI提要求。\nA: 听起来很有启发，今天回去我就试试！',
    back: 'A: Many people worry that Artificial Intelligence will replace programmers, what is your view?\nB: I don\'t think AI will completely replace programmers, but engineers who use AI will certainly replace those who do not.\nA: For regular people, how should we start learning AI?\nB: You can start by mastering "Prompt Engineering": learning how to give clear requirements to AI using natural language.\nA: That sounds very inspiring; I will give it a try when I get home today!',
    phonetic: 'A: Hěn duō rén dānxīn réngōng zhìnéng huì qǔdài chéngxùyuán, nǐ zěnme kàn?\nB: Wǒ juéde AI bù huì wánquán qǔdài chéngxùyuán, dànshì huì yòng AI de gōngchéngshī kěndìng huì qǔdài bù huì yòng AI de rén.\nA: Duì wǒmen pǔtōng rén lái shuō, yīnggāi zěnme xuéxí AI ne?\nB: Kěyǐ xiān cóng zhǎowò “tíshìcí gōngchéng” (Prompt Engineering) kāishǐ, xuéhuì yòng qīngxī de zìrán yǔyán xiàng AI tí yāoqiú.\nA: Tīng qǐlai hěn yǒu qǐfā, jīntiān huíqù wǒ jiù shìshi!',
    grammarNotes: 'Future of AI: 取代 (replace / supersede); 提示词工程 (Prompt Engineering); 自然语言 (natural language); 有启发 (inspiring / insightful).',
    hint: 'Situation: Deep yet accessible discussion on AI and the future of work.',
    exampleSentences: [
      { target: '学会向AI精准提问是一项核心竞争力。', translation: 'Knowing how to question AI accurately is a core competitive skill.', phonetic: 'Xuéhuì xiàng AI jīngzhǔn tíwèn shì yī xiàng héxīn jìngzhēnglì.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Complete Personal Introduction (全方位自我介绍生活小对话)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好！欢迎来到语言交流角，能简单介绍一下你自己吗？\nB: 大家好！我叫吉尔，今年二十七岁，身高一米八，来自巴西南部。\nA: 哇，那你的母语是葡语吧？你平时做什么工作呢？\nB: 对，我会说葡萄牙语、英语和西班牙语。我是一名软件工程师，主要搞AI大模型开发。\nA: 太厉害了！很高兴认识你！\nB: 我也一样，希望能和大家多用中文交流！',
    back: 'A: Hello! Welcome to the language exchange corner, could you briefly introduce yourself?\nB: Hello everyone! My name is Gil, 27 years old, 1.80m tall, from southern Brazil.\nA: Wow, so your mother tongue is Portuguese right? What work do you do usually?\nB: Yes, I speak Portuguese, English, and Spanish. I am a software engineer, mainly developing AI large models.\nA: That is so impressive! Really glad to meet you!\nB: Same here, I hope to communicate more with everyone in Chinese!',
    phonetic: 'A: Nǐ hǎo! Huānyíng lái dào yǔyán jiāoliú jiǎo, néng jiǎndān jièshào yīxià nǐ zìjǐ ma?\nB: Dàjiā hǎo! Wǒ jiào Jí\'ěr, jīnnián èrshíqī suì, shēngāo yī mǐ bā, láizì Bāxī nánbù.\nA: Wa, nà nǐ de mǔyǔ shì Púyǔ ba? Nǐ píngshí zuò shénme gōngzuò ne?\nB: Duì, wǒ huì shuō Pútáoyáyǔ, Yīngyǔ hé Xībānyáyǔ. Wǒ shì yī míng ruǎnjiàn gōngchéngshī, zhǔyào gǎo AI dà móxíng kāifā.\nA: Tài lìhài le! Hěn gāoxìng rènshí nǐ!\nB: Wǒ yě yīyàng, xīwàng néng hé dàjiā duō yòng Zhōngwén jiāoliú!',
    grammarNotes: 'All-in-one intro: 语言交流角 (language exchange corner); 简单介绍 (brief introduction); 葡语 (short for Portuguese); 搞开发 (do development work).',
    hint: 'Situation: Giving a confident, comprehensive personal self-introduction in Chinese.',
    exampleSentences: [
      { target: '我期待在这里结识更多志同道合的朋友。', translation: 'I look forward to meeting more like-minded friends here.', phonetic: 'Wǒ qīdài zài zhèlǐ jiéshí gèng duō zhìtóng-dàohé de péngyou.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Local Chinese People & Major Cities (中国各地本地人与城市风情)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 听你说话有一股好听的儿化音，你是北京本地人吗？\nB: 对，我是地道的老北京，从小在胡同里长大。\nA: 北京什么季节最舒服？\nB: 老北京人都说“秋天是北京最好的季节”，天高气爽，银杏叶金黄金黄的。\nA: 听说后海和故宫秋天特别美！\nB: 没错，周末我带你去什刹海转转，尝尝地道豆汁儿和焦圈！',
    back: 'A: Hearing you speak with that nice "er" coloring, are you a local Beijinger?\nB: Yes, I am an authentic old Beijinger, grew up in the hutongs from childhood.\nA: Which season is the most comfortable in Beijing?\nB: Old Beijingers all say "Autumn is Beijing\'s best season": crisp clear skies and golden ginkgo leaves.\nA: I heard Houhai and the Forbidden City are stunning in autumn!\nB: Absolutely, this weekend I\'ll take you around Shichahai to try authentic fermented mung bean milk and fried dough rings!',
    phonetic: 'A: Tīng nǐ shuōhuà yǒu yī gǔ hǎotīng de érhuàyīn, nǐ shì Běijīng běndì rén ma?\nB: Duì, wǒ shì dìdao de lǎo Běijīng, cóngxiǎo zài hútòng lǐ zhǎngdà.\nA: Běijīng shénme jìjié zuì shūfu?\nB: Lǎo Běijīng rén dōu shuō “qiūtiān shì Běijīng zuì hǎo de jìjié”, tiāngāo-qìshuǎng, yínxìng yè jīnhuáng-jīnhuáng de.\nA: Tīngshuō Hòuhǎi hé Gùgōng qiūtiān tèbié měi!\nB: Méi cuò, zhōumò wǒ dài nǐ qù Shíchàhǎi zhuànzhuan, chángchang dìdao dòuzhǐr hé jiāoquān!',
    grammarNotes: 'Beijing culture: 儿化音 (érhuàyīn = retroflex "r" sound); 胡同 (hutong alleyway); 天高气爽 (crisp autumn weather); 豆汁儿 (dòuzhǐr = fermented mung bean milk); 什刹海 (Shichahai scenic lake).',
    hint: 'Situation: Meeting an authentic Beijing local and learning about Beijing autumn and hutong life.',
    exampleSentences: [
      { target: '胡同里藏着老北京最真实的生活气息。', translation: 'Hutongs conceal the most authentic living atmosphere of old Beijing.', phonetic: 'Hútòng lǐ cáng zhe lǎo Běijīng zuì zhēnshí de shēnghuó qìxī.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你的皮肤真好，晒得健康小麦色，你是哪里人呀？\nB: 我是海南本地人，家在三亚的海边。\nA: 哇，海南岛！冬天肯定特别温暖吧？\nB: 是的，我们海南一年四季都是夏天，冬天很多北方人来过冬养老。\nA: 在海南平时吃什么最过瘾？\nB: 喝新鲜椰子汁，吃清补凉和文昌鸡，吹着海风别提多惬意了！',
    back: 'A: Your skin is so great, healthy tanned wheat color! Where are you from?\nB: I am a local from Hainan, my home is by the sea in Sanya.\nA: Wow, Hainan Island! Winter must be remarkably warm, right?\nB: Yes, our Hainan has summer all four seasons. In winter, many northerners come over to escape the cold.\nA: What is most enjoyable to eat in Hainan?\nB: Drinking fresh coconut water, eating Qingbuliang dessert and Wenchang chicken, feeling the sea breeze—so blissful!',
    phonetic: 'A: Nǐ de pífū zhēn hǎo, shài de jiànkāng xiǎomàisè, nǐ shì nǎlǐ rén ya?\nB: Wǒ shì Hǎinán běndì rén, jiā zài Sānyà de hǎibiān.\nA: Wa, Hǎinán Dǎo! Dōngtiān kěndìng tèbié wēnnuǎn ba?\nB: Shì de, wǒmen Hǎinán yī nián sìjì dōu shì xiàtiān, dōngtiān hěn duō běifāng rén lái guòdōng yǎnglǎo.\nA: Zài Hǎinán píngshí chī shénme zuì guòyǐn?\nB: Hē xīnxiān yēzi zhī, chī qīngbǔliáng hé Wénchāng jī, chuī zhe hǎifēng bié tí duō qièyì le!',
    grammarNotes: 'Hainan paradise: 海南 (Hainan); 三亚 (Sanya); 过冬 (spend winter); 清补凉 (refreshing coconut milk sweet soup); 文昌鸡 (Wenchang chicken); 惬意 (carefree/relaxing).',
    hint: 'Situation: Chatting with a local islander from Sanya, Hainan.',
    exampleSentences: [
      { target: '海南椰子鸡火锅汤清味甜。', translation: 'Hainan coconut chicken hotpot has clear soup and natural sweet flavor.', phonetic: 'Hǎinán yēzǐ jī huǒguō tāng qīng wèi tián.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 帅哥，听你口音有点像东北人，你是哪座城市的？\nB: 我是大连本地人，美丽的海滨城市。\nA: 大连是不是夏天特别凉快？\nB: 没错，大连夏天基本不用开空调，海风一吹特别舒服。\nA: 听说大连的海鲜很出名？\nB: 那可不！大连海蛎子、海胆和鲍鱼个个鲜美，吃过就忘不了！',
    back: 'A: Handsome, your accent sounds a bit like a Northeasterner, which city are you from?\nB: I am a Dalian local, from that beautiful coastal city.\nA: Is Dalian especially cool in summer?\nB: Exactly, in Dalian summer you barely need air conditioning; when the sea breeze blows it feels amazing.\nA: I heard Dalian seafood is very famous?\nB: Absolutely! Dalian oysters, sea urchins, and abalones are all plump and fresh—unforgettable once tasted!',
    phonetic: 'A: Shuàigē, tīng nǐ kǒuyīn yǒudiǎn xiàng Dōngběi rén, nǐ shì nǎ zuò chéngshì de?\nB: Wǒ shì Dàlián běndì rén, měilì de hǎibīn chéngshì.\nA: Dàlián shì bù shì xiàtiān tèbié liángkuai?\nB: Méi cuò, Dàlián xiàtiān jīběn bù yòng kāi kōngtiáo, hǎifēng yī chuī tèbié shūfu.\nA: Tīngshuō Dàlián de hǎixiān hěn chūmíng?\nB: Nà kě bù! Dàlián hǎilìzi, hǎidǎn hé bàoyú gègè xiānměi, chī guò jiù wàng bù liǎo!',
    grammarNotes: 'Dalian & Northeast: 大连 (Dàlián); 东北 (Northeast); 海滨城市 (coastal city); 那可不 (you bet / absolutely); 海蛎子 (oyster in local Dalian dialect).',
    hint: 'Situation: Meeting a proud local from the romantic northern coastal city of Dalian.',
    exampleSentences: [
      { target: '大连的广场和海边木栈道很适合散步。', translation: 'Dalian\'s squares and seaside boardwalks are great for strolls.', phonetic: 'Dàlián de guǎngchǎng hé hǎibiān mùzhàndào hěn shìhé sànbù.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 妹子，你是成都人吗？\nB: 对呀，我是土生土长的成都妹子。\nA: 成都的生活节奏真的像大家说的那样慢吗？\nB: 确实很安逸！大家平时喜欢喝茶、打麻将、晒太阳、聊天。\nA: 你们天天都吃辣吗？\nB: 基本上无辣不欢！火锅、串串香、麻婆豆腐，越吃越过瘾！',
    back: 'A: Young lady, are you from Chengdu?\nB: Yes! I am a Chengdu girl born and bred.\nA: Is Chengdu\'s life rhythm really as slow and relaxed as everyone says?\nB: It truly is peaceful and comfy (ānyì)! People usually love sipping tea, playing mahjong, sunbathing, and chatting.\nA: Do you eat spicy food every single day?\nB: Basically no meal is fun without spice! Hot pot, chuanchuan skewers, Mapo tofu—the more you eat the better it gets!',
    phonetic: 'A: Mèizi, nǐ shì Chéngdū rén ma?\nB: Duì ya, wǒ shì tǔshēng-tǔzhǎng de Chéngdū mèizi.\nA: Chéngdū de shēnghuó jiézòu zhēn de xiàng dàjiā shuō de nàyàng màn ma?\nB: Quèshí hěn ānyì! Dàjiā píngshí xǐhuan hē chá, dǎ májiàng, shài tàiyáng, liáotiān.\nA: Nǐmen tiāntiān dōu chī là ma?\nB: Jīběnshang wú là bù huān! Huǒguō, chuànchuànxiāng, Mápó dòufu, yuè chī yuè guòyǐn!',
    grammarNotes: 'Sichuan Chengdu life: 成都 (Chéngdū); 安逸 (ānyì = relaxed, comfortable, happy - iconic Sichuan dialect word); 无辣不欢 (no meal is enjoyable without chili); 串串香 (skewered hotpot).',
    hint: 'Situation: Talking with a local from Chengdu, Sichuan about slow living, tea houses, and spicy food.',
    exampleSentences: [
      { target: '成都是一座来了就不想走的城市。', translation: 'Chengdu is a city you will never want to leave once you visit.', phonetic: 'Chéngdū shì yī zuò lái le jiù bù xiǎng zǒu de chéngshì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 听说深圳是一座年轻的移民城市，你是本地人吗？\nB: 我爸妈二十年前来深圳创业，我在这里出生长大，算新深圳人吧。\nA: 深圳的生活节奏快吗？\nB: 特别快！“来了就是深圳人，时间就是金钱”，大家都在拼命搞钱搞科技。\nA: 难怪被叫做中国的硅谷！\nB: 对，南山区的科技公司随处可见。',
    back: 'A: I heard Shenzhen is a young immigrant city, are you a local?\nB: My parents came to Shenzhen 20 years ago to start business. I was born and raised here, so I consider myself a "New Shenzhener".\nA: Is the pace of life fast in Shenzhen?\nB: Extremely fast! "Once you come you are a Shenzhener, time is money"—everyone is striving hard in business and tech.\nA: No wonder it is called China\'s Silicon Valley!\nB: Yes, high-tech firms are everywhere in Nanshan District.',
    phonetic: 'A: Tīngshuō Shēnzhèn shì yī zuò niánqīng de yímín chéngshì, nǐ shì běndì rén ma?\nB: Wǒ bàma èrshí nián qián lái Shēnzhèn chuàngyè, wǒ zài zhèlǐ chūshēng zhǎngdà, suàn xīn Shēnzhèn rén ba.\nA: Shēnzhèn de shēnghuó jiézòu kuài ma?\nB: Tèbié kuài! “Lái le jiù shì Shēnzhèn rén, shíjiān jiù shì jīnqián”, dàjiā dōu zài pīnmìng gǎo qián gǎo kējì.\nA: Nánguài bèi jiàozuò Zhōngguó de Guīgǔ!\nB: Duì, Nánshān Qū de kējì gōngsī suíchù-kějiàn.',
    grammarNotes: 'Shenzhen tech spirit: 深圳 (Shēnzhèn); 移民城市 (immigrant city); 来了就是深圳人 (iconic Shenzhen slogan); 搞科技 (work in technology); 硅谷 (Silicon Valley).',
    hint: 'Situation: Understanding the hustle and tech culture of Shenzhen.',
    exampleSentences: [
      { target: '深圳的高铁和地铁网络非常发达。', translation: 'Shenzhen\'s high-speed rail and subway network is highly developed.', phonetic: 'Shēnzhèn de gāotiě hé dìtiě wǎngluò fēicháng fādá.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你普通话讲得很好，但带一点港味，你是香港人吗？\nB: 是啊，我是土生土长的香港仔，平时家里讲粤语。\nA: 去香港旅游，你最推荐我们体验什么？\nB: 一定要坐天星小轮看维港夜景，再去茶餐厅点一份菠萝油和冻奶茶！\nA: 听你这么一说，我都流口水了！\nB: 哈哈，正宗的港式茶餐厅绝对让你惊艳！',
    back: 'A: Your Mandarin is very good, but has a slight Hong Kong flavor. Are you from Hong Kong?\nB: Yes, I am a born and bred Hong Kong boy, at home we speak Cantonese.\nA: If traveling to Hong Kong, what do you recommend we experience most?\nB: Definitely take the Star Ferry to see Victoria Harbour night skyline, then visit a Cha Chaan Teng for a pineapple bun with butter and iced milk tea!\nA: Hearing you say that makes my mouth water!\nB: Haha, an authentic Hong Kong tea restaurant will truly blow you away!',
    phonetic: 'A: Nǐ pǔtōnghuà jiǎng de hěn hǎo, dàn dài yīdiǎn Gǎngwèi, nǐ shì Xiānggǎng rén ma?\nB: Shì a, wǒ shì tǔshēng-tǔzhǎng de Xiānggǎng zǐ, píngshí jiālǐ jiǎng Yuèyǔ.\nA: Qù Xiānggǎng lǚyóu, nǐ zuì tuījiàn wǒmen tǐyàn shénme?\nB: Yīdìng yào zuò Tiānxīng Xiǎolún kàn Wéi-Gǎng yèjǐng, zài qù chácāntīng diǎn yī fèn bōluóyóu hé dòng nǎichá!\nA: Tīng nǐ zhème yī shuō, wǒ dōu liú kǒushuǐ le!\nB: Hāhā, zhèngzhōng de Gǎngshì chácāntīng juéduì ràng nǐ jīngyàn!',
    grammarNotes: 'Hong Kong flavors: 香港 (Xiānggǎng); 粤语 (Yuèyǔ = Cantonese); 天星小轮 (Star Ferry); 维港 (Victoria Harbour); 茶餐厅 (Cha Chaan Teng); 菠萝油 (pineapple bun with thick butter).',
    hint: 'Situation: Chatting with a local Hong Kong resident about Victoria Harbour and diner snacks.',
    exampleSentences: [
      { target: '香港的维多利亚港夜景美不胜收。', translation: 'Victoria Harbour\'s night view in Hong Kong is gorgeous beyond words.', phonetic: 'Xiānggǎng de Wéiduōlìyǎ Gǎng yèjǐng měi-bù-shèng-shōu.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 小李，听说你是西安本地人？\nB: 没毛病，我是老陕，西安南郊长大的。\nA: 西安古迹好多，兵马俑和大雁塔是不是特别震撼？\nB: 必须的！我们西安随手一挖都是文物。晚上去大唐不夜城走走，穿上汉服拍照像穿越回唐朝一样！\nA: 还有肉夹馍和羊肉泡馍！\nB: 哈哈，你很懂行嘛！下次来西安，我请你吃最地道的腊汁肉夹馍！',
    back: 'A: Xiao Li, I heard you are a local from Xi\'an?\nB: Spot on, I am a proud Shaanxi local, grew up in southern Xi\'an.\nA: Xi\'an has so many ancient sites, are the Terracotta Warriors and Giant Wild Goose Pagoda awe-inspiring?\nB: Definitely! In Xi\'an, wherever you dig you hit cultural relics. Walk through the Grand Tang Mall at night in Hanfu, and it feels like time-traveling back to the Tang Dynasty!\nA: And also Roujiamo (Chinese pork burger) and pita mutton soup!\nB: Haha, you know your stuff! Next time you visit Xi\'an, I will treat you to authentic cured pork Roujiamo!',
    phonetic: 'A: Xiǎo Lǐ, tīngshuō nǐ shì Xī\'ān běndì rén?\nB: Méi máobìng, wǒ shì lǎo Shǎn, Xī\'ān nánjiāo zhǎngdà de.\nA: Xī\'ān gǔjì hǎoduō, Bīngmǎyǒng hé Dàyàntǎ shì bù shì tèbié zhènhàn?\nB: Bìxū de! Wǒmen Xī\'ān suíshǒu yī wā dōu shì wénwù. Wǎnshang qù Dàtáng Bùyèchéng zǒuzhou, chuān shàng hànfú pāizhào xiàng chuānyuè huí Tángcháo yīyàng!\nA: Hái yǒu ròujiāmó hé yángròu pàomó!\nB: Hāhā, nǐ hěn dǒngháng ma! Xià cì lái Xī\'ān, wǒ qǐng nǐ chī zuì dìdao de làzhī ròujiāmó!',
    grammarNotes: 'Xi\'an history & cuisine: 西安 (Xī\'ān); 老陕 (affectionate slang for Shaanxi local); 兵马俑 (Terracotta Army); 大唐不夜城 (Grand Tang Mall); 穿越 (time-travel); 肉夹馍 (Chinese pork burger).',
    hint: 'Situation: Meeting a Xi\'an local and discovering ancient Tang Dynasty culture and foods.',
    exampleSentences: [
      { target: '西安是十三朝古都，历史底蕴极其深厚。', translation: 'Xi\'an was the capital of 13 dynasties with profound history.', phonetic: 'Xī\'ān shì shísān cháo gǔdū, lìshǐ dǐyùn jíqí shēnhòu.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Famous Chinese Dishes, Especially Pork & Regional Food (中华名菜与猪肉经典)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 服务员，你们这里的“红烧肉”怎么做？肥不肥？\nB: 我们的红烧肉选的是上等五花肉，肥瘦相间，小火慢炖两个小时。\nA: 吃起来会很油腻吗？\nB: 一点都不腻！入口即化，肉皮软糯，带着淡淡的酱香和冰糖甜味。\nA: 太诱人了，赶紧给我们上一份，配两碗热米饭！\nB: 好嘞，红烧肉拌米饭是绝配！',
    back: 'A: Waiter, how is your "Braised Pork Belly (Hongshao Rou)" made here? Is it fatty?\nB: Our braised pork uses top-grade pork belly, alternating layers of lean and fat, slow-simmered for two hours.\nA: Does it taste very greasy?\nB: Not greasy at all! It melts in your mouth, skin soft and glutinous, with gentle soy aroma and rock sugar sweetness.\nA: So tempting, bring us one order quickly, paired with two bowls of hot rice!\nB: Right away, mixing braised pork sauce with white rice is a heavenly match!',
    phonetic: 'A: Fúwùyuán, nǐmen zhèlǐ de “hóngshāoròu” zěnme zuò? Féi bù féi?\nB: Wǒmen de hóngshāoròu xuǎn de shì shàngděng wǔhuāròu, féishòu xiāngjiàn, xiǎohuǒ màndùn liǎng gè xiǎoshí.\nA: Chī qǐlai huì hěn yóunì ma?\nB: Yīdiǎn dōu bù nì! Rùkǒu-jíhuà, ròupí ruǎnnuò, dài zhe dàndàn de jiàngxiāng hé bīngtáng tiánwèi.\nA: Tài yòurén le, gǎnjǐn gěi wǒmen shàng yī fèn, pèi liǎng wǎn rè mǐfàn!\nB: Hǎo lei, hóngshāoròu bàn mǐfàn shì juépèi!',
    grammarNotes: 'Pork dishes: 红烧肉 (Braised Pork Belly); 五花肉 (pork belly / streaky pork); 肥瘦相间 (alternating fat and lean); 入口即化 (melts in your mouth); 拌米饭 (mix with steamed rice).',
    hint: 'Situation: Ordering the iconic Chinese staple braised pork belly (红烧肉) at a restaurant.',
    exampleSentences: [
      { target: '这道红烧肉色泽红亮，香气扑鼻。', translation: 'This braised pork has a glistening red luster and appetizing aroma.', phonetic: 'Zhè dào hóngshāoròu sèzé hóngliàng, xiāngqì pūbí.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这个“锅包肉”是什么肉做的？是酸甜口的吗？\nB: 是正宗东北名菜！用优质猪里脊肉切大片，裹上面糊炸得金黄酥脆。\nA: 浇的是什么酱汁？\nB: 传统的糖醋汁，加了姜丝和香菜。咬下去外酥里嫩，酸甜开胃！\nA: 听上去真不错，我们要一份尝尝！',
    back: 'A: What meat is this "Guobaorou (Crispy Sweet and Sour Pork)" made of? Is it sweet and sour?\nB: It is an authentic Northeast signature dish! Sliced prime pork tenderloin coated in batter and deep-fried golden crispy.\nA: What sauce is poured over it?\nB: Traditional sweet and sour syrup with ginger shreds and cilantro. One bite is crispy outside, tender inside, tangy and appetizing!\nA: Sounds wonderful, we will have one order to taste!',
    phonetic: 'A: Zhège “guōbāoròu” shì shénme ròu zuò de? Shì suāntián kǒu de ma?\nB: Shì zhèngzhōng Dōngběi míngcài! Yòng yōuzhì zhū lǐjiròu qiē dà piàn, guǒ shàng miànhú zhá de jīnhuáng sūcuì.\nA: Jiāo de shì shénme jiàngzhī?\nB: Chuántǒng de tángcù zhī, jiā le jiāngsī hé xiāngcài. Yǎo xiàqù wàisū-lǐnèn, suāntián kāiwèi!\nA: Tīng shàngqù zhēn bùcuò, wǒmen yào yī fèn chángchang!',
    grammarNotes: 'Northeastern pork dish: 锅包肉 (Guobaorou / crispy pork); 猪里脊 (pork tenderloin); 外酥里嫩 (crispy outside, tender inside); 酸甜开胃 (sweet, sour and appetizing).',
    hint: 'Situation: Ordering the beloved Northeastern Chinese pork delicacy Guobaorou (锅包肉).',
    exampleSentences: [
      { target: '锅包肉一定要趁热吃才够脆。', translation: 'Guobaorou must be eaten while piping hot to stay crunchy.', phonetic: 'Guōbāoròu yīdìng yào chèn rè chī cái gòu cuì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 每次去川菜馆，大家都推荐“回锅肉”，它为什么叫“回锅”？\nB: 因为猪五花肉要先煮熟，放凉切薄片，然后再回锅用大火煸炒。\nA: 里面搭配什么蔬菜炒？\nB: 经典搭配是鲜嫩的青蒜苗和四川豆瓣酱，香气浓郁，微辣咸香，特别下饭！\nA: 原来如此，难怪被称为“川菜之王”！来一盘！',
    back: 'A: Every time I visit a Sichuan restaurant, people recommend "Twice-Cooked Pork (Huiguorou)". Why is it called "twice-cooked"?\nB: Because the pork belly is first boiled cooked, cooled and thinly sliced, then returned to the wok (pot) for high-heat stir-frying.\nA: What vegetables are stir-fried with it?\nB: Classic combination is fresh green garlic sprouts and Sichuan Pixian chili bean paste: rich aroma, savory-spicy, great with rice!\nA: I see, no wonder it is called the "King of Sichuan Dishes"! Bring us a plate!',
    phonetic: 'A: Měi cì qù Chuāncài guǎn, dàjiā dōu tuījiàn “huíguōròu”, tā wèishénme jiào “huíguō”?\nB: Yīnwèi zhū wǔhuāròu yào xiān zhǔshú, fàng liáng qiē báo piàn, ránhòu zài huíguō yòng dàhuǒ biānchǎo.\nA: Lǐmiàn dāpèi shénme shūcài chǎo?\nB: Jīngdiǎn dāpèi shì xiānnèn de qīng suànmiáo hé Sìchuān dòubànjiàng, xiāngqì nóngyù, wēi là xiánxiāng, tèbié xiàfàn!\nA: Yuánlái rúcǐ, nánguài bèi chēngwèi “Chuāncài zhī wáng”! Lái yī pán!',
    grammarNotes: 'Sichuan pork masterpiece: 回锅肉 (Twice-Cooked Pork); 豆瓣酱 (fermented broad-bean paste); 青蒜苗 (green garlic sprouts); 下饭 (goes wonderfully with steamed rice).',
    hint: 'Situation: Discovering the cooking method and flavor profile of Sichuan Twice-Cooked Pork.',
    exampleSentences: [
      { target: '正宗回锅肉炒出灯盏窝形状最地道。', translation: 'Authentic twice-cooked pork curls into lamp-bowl shapes when fried.', phonetic: 'Zhèngzhōng huíguōròu chǎo chū dēngzhǎnwō xíngzhuàng zuì dìdao.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 听说西安的“肉夹馍”是世界上最古老的汉堡包？\nB: 哈哈，大家都开玩笑叫它“中国汉堡”！白吉馍烤得外皮焦脆，里面夹着满满的腊汁猪肉。\nA: 那个腊汁肉是什么味道？\nB: 用几十种香料慢火煨炖的老汤卤肉，肉质极其软烂，肥肉化渣，瘦肉不柴。\nA: 咬一口全是肉汁对吧？\nB: 对！再加上一碗凉皮，就是最正宗的“三秦套餐”！',
    back: 'A: I heard Xi\'an\'s "Roujiamo" is the world\'s oldest hamburger?\nB: Haha, everyone jokingly calls it the "Chinese Burger"! The Baiji flatbread is baked crispy outside, stuffed with plenty of spiced stewed pork.\nA: What does that stewed pork taste like?\nB: Slow-braised in an aged master stock with dozens of aromatic spices; meat is remarkably tender, fat melts away and lean is never dry.\nA: One bite and meat juices burst out, right?\nB: Exactly! Pair it with a bowl of Liangpi cold noodles, and you have the authentic "Shaanxi Trio Combo"!',
    phonetic: 'A: Tīngshuō Xī\'ān de “ròujiāmó” shì shìjiè shàng zuì gǔlǎo de hànbǎobāo?\nB: Hāhā, dàjiā dōu kāiwánxiào jiào tā “Zhōngguó hànbǎo”! Báijí mó kǎo de wàipí jiāocuì, lǐmiàn jiā zhe mǎnmǎn de làzhī zhūròu.\nA: Nàge làzhī ròu shì shénme wèidao?\nB: Yòng jǐshí zhǒng xiāngliào mànhuǒ wēidùn de lǎotāng lǔròu, ròuzhì jíqí ruǎnlàn, féiròu huàzhā, shòuròu bù chái.\nA: Yǎo yī kǒu quán shì ròuzhī duì ba?\nB: Duì! Zài jiā shàng yī wǎn liángpí, jiù shì zuì zhèngzhōng de “Sān Qín tàocān”!',
    grammarNotes: 'Shaanxi culinary classic: 肉夹馍 (Roujiamo / Chinese pork burger); 白吉馍 (crisp Baiji flatbread); 腊汁肉 (stewed spiced pork); 软烂 (fall-apart tender); 凉皮 (cold wheat noodles).',
    hint: 'Situation: Savoring a juicy Roujiamo (肉夹馍) street food in Xi\'an.',
    exampleSentences: [
      { target: '刚出炉的肉夹馍冒着腾腾热气。', translation: 'The freshly baked Roujiamo steams with wonderful heat.', phonetic: 'Gāng chūlú de ròujiāmó mào zhe téngténg rèqì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 服务员，这道“东坡肉”和普通的红烧肉有什么不同？\nB: 东坡肉是杭州名菜，切成大正方块，用绍兴黄酒、冰糖和酱油慢火焖制，不加一滴水！\nA: 完全不加水吗？\nB: 是的，黄酒能彻底去腥提香。做好后红得透亮，像玛瑙一样，肥而不腻。\nA: 相传是北宋大文豪苏东坡发明的？\nB: 对！不仅味道醇厚，还蕴含深厚的江南文化底蕴。',
    back: 'A: Waiter, how is this "Dongpo Pork" different from standard braised pork?\nB: Dongpo Pork is a famous Hangzhou dish: cut into large cubes, braised slowly with Shaoxing rice wine, rock sugar, and soy sauce—without adding a single drop of water!\nA: Completely without water?\nB: Yes, the yellow rice wine eliminates gaminess and elevates aroma. When finished, it glimmers translucent red like agate, rich yet never greasy.\nA: Legend says it was created by the great Song Dynasty poet Su Dongpo?\nB: Exactly! It is not only richly flavorful, but also carries profound Jiangnan cultural heritage.',
    phonetic: 'A: Fúwùyuán, zhè dào “Dōngpō ròu” hé pǔtōng de hóngshāoròu yǒu shénme bùtóng?\nB: Dōngpō ròu shì Hángzhōu míngcài, qiē chéng dà zhèngfāng kuài, yòng Shàoxīng huángjiǔ, bīngtáng hé jiàngyóu mànhuǒ mènzhì, bù jiā yī dī shuǐ!\nA: Wánquán bù jiā shuǐ ma?\nB: Shì de, huángjiǔ néng chèdǐ qù xīng tí xiāng. Zuò hǎo hòu hóng de tòuliàng, xiàng mǎnǎo yīyàng, féi ér bù nì.\nA: Xiāngchuán shì Běi Sòng dà wénháo Sū Dōngpō fāmíng de?\nB: Duì! Bùjǐn wèidao chúnhòu, hái yùnhán shēnhòu de Jiāngnán wénhuà dǐyùn.',
    grammarNotes: 'Hangzhou classic: 东坡肉 (Dongpo Pork); 绍兴黄酒 (Shaoxing rice wine); 肥而不腻 (rich and fatty without being greasy); 慢火焖制 (slowly braised on low heat); 苏东坡 (Su Dongpo - famous Song poet).',
    hint: 'Situation: Tasting historical Hangzhou Dongpo Pork (东坡肉) beside West Lake.',
    exampleSentences: [
      { target: '东坡肉酒香浓郁，肉质酥烂入味。', translation: 'Dongpo pork has rich wine fragrance and is fall-apart savory.', phonetic: 'Dōngpō ròu jiǔxiāng nóngyù, ròuzhì sūlàn rùwèi.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这个“鱼香肉丝”闻起来太香了，里面真的有鱼吗？\nB: 哈哈，其实鱼香肉丝里面没有鱼！\nA: 那为什么叫“鱼香”呢？\nB: 因为它是用四川做鱼的传统调料——泡辣椒、葱姜蒜、糖和醋调配出来的风味。\nA: 原来是这样！酸甜微辣，配木耳丝、胡萝卜丝和猪里脊肉丝，简直是下饭神器！\nB: 很多人来川菜馆第一道菜必点它！',
    back: 'A: This "Yuxiang Shredded Pork (Fish-Fragrant Pork)" smells incredible, is there really fish in it?\nB: Haha, actually there is no fish in Yuxiang Shredded Pork!\nA: Then why is it called "fish-fragrant"?\nB: Because it uses the classic Sichuan seasonings for braising fish—pickled chili, scallion, ginger, garlic, sugar, and vinegar to create the signature profile.\nA: So that is why! Sweet, sour, and gently spicy, combined with shredded wood-ear fungus, carrots, and pork tenderloin—it is a rice-killer dish!\nB: Many people make it their first must-order dish in any Sichuan restaurant!',
    phonetic: 'A: Zhège “yúxiāng ròusī” wén qǐlai tài xiāng le, lǐmiàn zhēn de yǒu yú ma?\nB: Hāhā, qíshí yúxiāng ròusī lǐmiàn méiyǒu yú!\nA: Nà wèishénme jiào “yúxiāng” ne?\nB: Yīnwèi tā shì yòng Sìchuān zuò yú de chuántǒng tiáoliào—pào làjiāo, cōng jiāng suàn, táng hé cù tiáopèi chūlái de fēngwèi.\nA: Yuánlái shì zhèyàng! Suāntián wēi là, pèi mù\'ěr sī, húluóbo sī hé zhū lǐjiròu sī, jiǎnzhí shì xiàfàn shénqì!\nB: Hěn duō rén lái Chuāncài guǎn dì-yī dào cài bì diǎn tā!',
    grammarNotes: 'Sichuan classic: 鱼香肉丝 (Yuxiang shredded pork); 泡辣椒 (pickled red chili peppers); 木耳丝 (shredded wood-ear mushrooms); 下饭神器 (rice-killing magical dish); 调料 (seasoning/flavoring).',
    hint: 'Situation: Clarifying the famous culinary myth about "fish-fragrant" pork (鱼香肉丝).',
    exampleSentences: [
      { target: '鱼香肉丝咸甜酸辣兼备，百吃不厌。', translation: 'Yuxiang shredded pork balances savory, sweet, sour, and spicy—never tire of eating it.', phonetic: 'Yúxiāng ròusī xián-tián-suān-là jiānbèi, bǎi chī bù yàn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你们这里的广式“蜜汁叉烧”太好吃了，外表红润油亮！\nB: 叉烧是粤菜烧腊的代表作，选用上等梅花肉或者五花肉烤制而成。\nA: 表面刷的是蜂蜜吗？\nB: 对，烤制过程中要反复刷上特制的麦芽糖和蜜汁，外皮焦甜，肉汁丰盈。\nA: 难怪粤菜酒楼里点叉烧饭的人那么多！\nB: 搭配半熟荷包蛋和菜心，就是香港电影里的“黯然销魂饭”！',
    back: 'A: Your Cantonese "Honey Glazed Char Siu (BBQ Pork)" here is so tasty, shiny and glistening red on the outside!\nB: Char Siu is the masterpiece of Cantonese roast meats, grilled using prime pork collar or pork belly.\nA: Is that honey brushed on the surface?\nB: Yes, during roasting it is repeatedly brushed with special maltose syrup and honey glaze: crispy sweet bark and juicy inside.\nA: No wonder so many people order Char Siu rice at Cantonese restaurants!\nB: Paired with a soft fried egg and choy sum, it is the legendary "Ecstasy Rice" from Hong Kong movies!',
    phonetic: 'A: Nǐmen zhèlǐ de Guǎngshì “mìzhī chāshāo” tài hǎochī le, wàibiǎo hóngrùn yóuliàng!\nB: Chāshāo shì Yuècài shāolà de dàibiǎozuò, xuǎnyòng shàngděng méihuāròu huòzhě wǔhuāròu kǎozhì ér chéng.\nA: Biǎomiàn shuā de shì fēngmì ma?\nB: Duì, kǎozhì guòchéng zhōng yào fǎnfù shuā shàng tèzhì de màiyátáng hé mìzhī, wàipí jiāotián, ròuzhī fēngyíng.\nA: Nánguài Yuècài jiǔlóu lǐ diǎn chāshāo fàn de rén nàme duō!\nB: Dāpèi bànshú hébaodàn hé càixīn, jiù shì Xiānggǎng diànyǐng lǐ de “ànrán-xiāohún fàn”!',
    grammarNotes: 'Cantonese roast meat: 蜜汁叉烧 (Honey Glazed BBQ Pork / Char Siu); 烧腊 (Cantonese roast meats); 梅花肉 (pork collar / shoulder butt); 麦芽糖 (maltose syrup); 焦甜 (caramelized sweet).',
    hint: 'Situation: Ordering authentic Cantonese honey BBQ pork (蜜汁叉烧) in Guangzhou or Hong Kong.',
    exampleSentences: [
      { target: '广东人吃早茶也少不了美味的叉烧包。', translation: 'Cantonese morning dim sum is never without delicious Char Siu buns.', phonetic: 'Guǎngdōng rén chī zǎochá yě shǎobuliǎo měiwèi de chāshāobāo.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你们吃过正宗的“北京烤鸭”吗？\nB: 吃过！烤鸭师傅会在桌边现场切片，刀工非常厉害。\nA: 听说烤鸭皮要蘸白糖吃？\nB: 没错，刚烤出炉的鸭皮蘸白糖，入口酥脆化油，香气扑鼻！\nA: 鸭肉怎么吃呢？\nB: 用薄薄的荷叶饼，抹上甜面酱，卷上鸭肉、葱丝和黄瓜条，一口咬下去太满足了！',
    back: 'A: Have you eaten authentic "Peking Roast Duck"?\nB: Yes! The roast duck chef carves slices right beside your table, knife skills are astonishing.\nA: I heard the crispy duck skin is dipped in white sugar?\nB: Exactly! Freshly roasted crispy skin dipped in granulated sugar melts in your mouth with amazing aroma!\nA: How do you eat the duck meat?\nB: Take a thin lotus pancake, spread sweet bean sauce, wrap duck slices with scallion shreds and cucumber sticks—one bite is pure satisfaction!',
    phonetic: 'A: Nǐmen chī guò zhèngzhōng de “Běijīng kǎoyā” ma?\nB: Chī guò! Kǎoyā shīfu huì zài zhuōbiān xiànchǎng qiēpiàn, dāogōng fēicháng lìhài.\nA: Tīngshuō kǎoyā pí yào zhàn bái táng chī?\nB: Méi cuò, gāng kǎo chūlú de yāpí zhàn bái táng, rùkǒu sūcuì huàyóu, xiāngqì pūbí!\nA: Yāròu zěnme chī ne?\nB: Yòng báobáo de héyè bǐng, mǒ shàng tiánmiànjiàng, juǎn shàng yāròu, cōngsī hé huángguā tiáo, yī kǒu yǎo xiàqù tài mǎnzú le!',
    grammarNotes: 'National delicacy: 北京烤鸭 (Peking Roast Duck); 现场切片 (table-side carving); 荷叶饼 (lotus-leaf thin pancake); 甜面酱 (sweet flour sauce); 蘸白糖 (dip in white sugar).',
    hint: 'Situation: Learning the traditional dining ritual of enjoying Peking Roast Duck in Beijing.',
    exampleSentences: [
      { target: '不到长城非好汉，不吃烤鸭真遗憾。', translation: 'He who hasn\'t climbed the Great Wall is not a hero; missing roast duck is a true regret.', phonetic: 'Bù dào Chángchéng fēi hǎohàn, bù chī kǎoyā zhēn yíhàn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 服务员，这一小笼包子怎么在冒热气，里面有汤汁吗？\nB: 这是我们上海特色“南翔小笼包”，皮薄馅大，里面全是鲜美的肉汤！\nA: 吃小笼包有什么讲究吗？\nB: 口诀是：“轻轻提，慢慢移，先开窗，后喝汤”。千万别一大口直接咬，会烫到舌头！\nA: 哇，先咬个小口把热汤喝掉，再蘸点香醋和姜丝，太美味了！\nB: 这样吃就对了，地道的吃法！',
    back: 'A: Waiter, this steamer of buns is steaming hot, does it have soup broth inside?\nB: This is our Shanghai specialty "Nanxiang Xiaolongbao", thin skin, generous filling, packed with flavorful broth!\nA: Is there a special technique to eating Xiaolongbao?\nB: The rhyme is: "Lift gently, move slowly, open a window first, then sip the soup". Never bite in a huge chunk or you will scald your tongue!\nA: Wow, bite a small hole first to sip the hot soup, then dip in black vinegar with ginger shreds—delicious!\nB: That is the right way to eat it, truly authentic!',
    phonetic: 'A: Fúwùyuán, zhè yī xiǎolóng bāozi zěnme zài mào rèqì, lǐmiàn yǒu tāngzhī ma?\nB: Zhè shì wǒmen Shànghǎi tèsè “Nánxiáng xiǎolóngbāo”, pí báo xiàn dà, lǐmiàn quán shì xiānměi de ròutāng!\nA: Chī xiǎolóngbāo yǒu shénme jiǎngjiu ma?\nB: Kǒujué shì: “Qīngqīng tí, mànmàn yí, xiān kāi chuāng, hòu hē tāng”. Qiānwàn bié yī dà kǒu zhíjiē yǎo, huì tàng dào shétou!\nA: Wa, xiān yǎo gè xiǎo kǒu bǎ rè tāng hē diào, zài zhàn diǎn xiāngcù hé jiāngsī, tài měiwèi le!\nB: Zhèyàng chī jiù duì le, dìdao de chīfǎ!',
    grammarNotes: 'Shanghai soup dumplings: 小笼包 (Xiaolongbao / soup dumplings); 皮薄馅大 (thin skin, generous filling); 轻轻提，慢慢移，先开窗，后喝汤 (famous dumpling eating rhyme); 烫舌头 (scald tongue); 蘸香醋 (dip in fragrant vinegar).',
    hint: 'Situation: Eating Shanghai soup dumplings (小笼包) safely and skillfully.',
    exampleSentences: [
      { target: '上海小笼包的肉馅鲜嫩多汁。', translation: 'Shanghai Xiaolongbao meat filling is tender and bursting with juice.', phonetic: 'Shànghǎi xiǎolóngbāo de ròuxiàn xiānnèn duōzhī.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 听说冬天在广州一定要吃“广式腊味煲仔饭”？\nB: 没错！用传统砂锅小火焖煮丝苗米，铺上广式腊肠和腊肉。\nA: 煲底那层脆脆的焦皮叫什么？\nB: 那个叫“锅巴”，粤语叫“饭焦”，金黄香脆，浇上一圈特制酱油，拌着吃最香了！\nA: 腊肠吃起来甜甜的又有酒香，太让人上瘾了！\nB: 煲仔饭是无数南方人心里最温暖的烟火气。',
    back: 'A: I heard in winter in Guangzhou you must eat "Cantonese Claypot Rice with Cured Meats"?\nB: Exactly! Simmering premium fragrant rice in a traditional claypot, topped with Cantonese cured sausage and cured pork belly.\nA: What is that crispy browned crust at the bottom of the pot called?\nB: That is called "Guoba" (rice crust), in Cantonese "Fanjiao": golden crispy. Drizzle a circle of sweet seasoned soy sauce and mix—so fragrant!\nA: The cured sausage has sweet notes and rice wine aroma, so addictive!\nB: Claypot rice is the warmest comforting street meal in the hearts of southern Chinese people.',
    phonetic: 'A: Tīngshuō dōngtiān zài Guǎngzhōu yīdìng yào chī “Guǎngshì làwèi bāozǎifàn”?\nB: Méi cuò! Yòng chuántǒng shāguō xiǎohuǒ mèngzhǔ sīmiáomǐ, pù shàng Guǎngshì làcháng hé làròu.\nA: Bāodǐ nà céng cuìcuì de jiāopí jiào shénme?\nB: Nàge jiào “guōbā”, Yuèyǔ jiào “fànjiāo”, jīnhuáng xiāngcuì, jiāo shàng yī quān tèzhì jiàngyóu, bàn zhe chī zuì xiāng le!\nA: Làcháng chī qǐlai tiántián de yòu yǒu jiǔxiāng, tài ràng rén shàngyǐn le!\nB: Bāozǎifàn shì wúshù nánfāng rén xīnlǐ zuì wēnnuǎn de yānhuǒqì.',
    grammarNotes: 'Claypot rice comfort food: 煲仔饭 (Claypot rice); 腊味 / 腊肠 (cured meats / Chinese sausage); 锅巴 / 饭焦 (crispy rice crust); 砂锅 (clay cooking pot); 烟火气 (cozy everyday life warmth).',
    hint: 'Situation: Ordering comforting Cantonese cured meat claypot rice (煲仔饭).',
    exampleSentences: [
      { target: '煲仔饭底部的锅巴咬起来嘎嘣脆。', translation: 'The rice crust at the bottom of claypot rice crunches delightfully.', phonetic: 'Bāozǎifàn dǐbù de guōbā yǎo qǐlai gābēng cuì.' }
    ]
  },

  // -------------------------------------------------------------------------
  // Essential Survival Dialogues for Living in China (在华生活必备核心对话)
  // -------------------------------------------------------------------------
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，我想办一张本地的中国手机SIM卡。\nB: 好的，请出示您的护照原件。想选哪个套餐？\nA: 有包含大流量的套餐吗？我经常用手机看视频和导航。\nB: 这款五十九元套餐很适合，每月包含五十个G全国通用流量和三百分钟通话。\nA: 太好了，就选这个！当场就能激活使用吗？\nB: 对，马上为您实名认证并开通。',
    back: 'A: Hello, I would like to get a local Chinese phone SIM card.\nB: Sure, please present your original passport. Which plan would you like?\nA: Is there a plan with lots of data? I frequently stream videos and use GPS navigation.\nB: This 59-yuan plan is very suitable: includes 50GB nationwide data and 300 minutes of calls each month.\nA: Great, I will take this one! Can it be activated immediately on the spot?\nB: Yes, we will complete real-name verification and activate it right away.',
    phonetic: 'A: Nǐ hǎo, wǒ xiǎng bàn yī zhāng běndì de Zhōngguó shǒujī SIM kǎ.\nB: Hǎo de, qǐng chūshì nín de hùzhào yuánjiàn. Xiǎng xuǎn nǎge tàocān?\nA: Yǒu bāohán dà liúliàng de tàocān ma? Wǒ jīngcháng yòng shǒujī kàn shìpín hé dǎoháng.\nB: Zhè kuǎn wǔshíjiǔ yuán tàocān hěn shìhé, měi yuè bāohán wǔshí gè G quánguó tōngyòng liúliàng hé sānbǎi fēnzhōng tōnghuà.\nA: Tài hǎo le, jiù xuǎn zhège! Dāngchǎng jiù néng jīhuó shǐyòng ma?\nB: Duì, mǎshàng wèi nín shímíng rènzhèng bìng kāitōng.',
    grammarNotes: 'Telecom essentials: 办手机卡 (get a SIM card); 护照原件 (original passport); 流量 (mobile data); 实名认证 (real-name registration); 开通 (activate).',
    hint: 'Situation: Getting a local Chinese phone number at China Mobile, Unicom, or Telecom.',
    exampleSentences: [
      { target: '在中国生活第一步是办理实名手机号。', translation: 'The first step of living in China is getting a real-name registered phone number.', phonetic: 'Zài Zhōngguó shēnghuó dì-yī bù shì bànlǐ shímíng shǒujīhào.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，我去朝阳医院，大概需要多久？\nB: 现在是晚高峰，环路上有点堵，走地面大概二十五分钟。\nA: 好的，我赶时间，麻烦您尽量开快一点。\nB: 没问题，到了医院东门我靠边停，可以吗？\nA: 可以，下车时我扫您车上的收款码付钱。',
    back: 'A: Driver, I am going to Chaoyang Hospital, about how long will it take?\nB: It is evening rush hour now, the ring road is a bit congested, surface streets take about 25 minutes.\nA: Okay, I am in a hurry, please drive as swiftly as possible.\nB: No problem, I will pull over at the hospital\'s East Gate, is that fine?\nA: Yes, when getting out I will scan the payment QR code in your car to pay.',
    phonetic: 'A: Shīfu, wǒ qù Cháoyáng Yīyuàn, dàgài xūyào duōjiǔ?\nB: Xiànzài shì wǎn gāofēng, huánlù shàng yǒudiǎn dǔ, zǒu dìmiàn dàgài èrshíwǔ fēnzhōng.\nA: Hǎo de, wǒ gǎn shíjiān, máfan nín jǐnliàng kāi kuài yīdiǎn.\nB: Méi wèntí, dào le yīyuàn dōngmén wǒ kàobiān tíng, kěyǐ ma?\nA: Kěyǐ, xià chē shí wǒ sǎo nín chē shàng de shòukuǎnmǎ fù qián.',
    grammarNotes: 'Taking a taxi: 晚高峰 (evening rush hour); 堵车 (traffic jam); 赶时间 (in a hurry); 靠边停 (pull over to the curb); 收款码 (merchant payment QR code).',
    hint: 'Situation: Hailing a traditional taxi and negotiating the fastest route during rush hour.',
    exampleSentences: [
      { target: '前面路口请靠右边停车。', translation: 'Please pull over on the right at the intersection ahead.', phonetic: 'Qiánmiàn lùkǒu qǐng kào yòubiān tíngchē.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，请问进站安检在哪边？\nB: 请往前走十米，大包放上传送带，小包随身过安检门。\nA: 矿泉水可以带进地铁吗？\nB: 可以，但需要当面喝一口，或者放在液体检测仪上测一下。\nA: 好的，没问题，我已经喝了一口。',
    back: 'A: Hello, where is the subway security check entrance?\nB: Please walk forward 10 meters: place large bags on the conveyor belt, walk through the metal detector door with small items.\nA: Can bottled mineral water be brought into the subway?\nB: Yes, but you need to take a sip in front of us, or place it on the liquid scanner.\nA: Okay, no problem, I have taken a sip.',
    phonetic: 'A: Nín hǎo, qǐngwèn jìn zhàn ānjiǎn zài nǎ biān?\nB: Qǐng wǎng qián zǒu shí mǐ, dà bāo fàng shàng chuánsòngdài, xiǎo bāo suíshēn guò ānjiǎnmén.\nA: Kuàngquánshuǐ kěyǐ dài jìn dìtiě ma?\nB: Kěyǐ, dàn xūyào dāngmiàn hē yī kǒu, huòzhě fàng zài yètǐ jiǎncèyí shàng cè yīxià.\nA: Hǎo de, méi wèntí, wǒ yǐjīng hē le yī kǒu.',
    grammarNotes: 'Subway security: 进站安检 (station entrance security inspection); 传送带 (conveyor belt); 液体检测 (liquid inspection); 喝一口 (take a sip - standard procedure in China).',
    hint: 'Situation: Passing through standard subway security check in Chinese cities.',
    exampleSentences: [
      { target: '请配合安检人员的工作。', translation: 'Please cooperate with the security personnel.', phonetic: 'Qǐng pèihé ānjiǎn rényuán de gōngzuò.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 房东阿姨，我房间洗手间的水龙头一直在漏水。\nB: 哎呀，严重吗？我马上联系小区的物业师傅上门看看。\nA: 麻烦您了，今天下午我都在家。\nB: 师傅半小时内就到，修水龙头是房东负责，费用你不用管。\nA: 太感谢您了阿姨！',
    back: 'A: Landlady Auntie, the faucet in my room\'s bathroom keeps dripping water.\nB: Oh dear, is it serious? I will contact the property management maintenance worker right away to inspect it.\nA: Thank you for the trouble, I will be home all afternoon today.\nB: The technician will arrive within half an hour; fixing the faucet is the landlord\'s responsibility, you do not pay.\nA: Thank you so much Auntie!',
    phonetic: 'A: Fángdōng āyí, wǒ fángjiān xǐshǒujiān de shuǐlóngtóu yīzhí zài lòushuǐ.\nB: Āiyā, yánzhòng ma? Wǒ mǎshàng liánxì xiǎoqū de wùyè shīfu shàngmén kànkan.\nA: Máfan nín le, jīntiān xiàwǔ wǒ dōu zài jiā.\nB: Shīfu bàn xiǎoshí nèi jiù dào, xiū shuǐlóngtóu shì fángdōng fùzé, fèiyòng nǐ bù yòng guǎn.\nA: Tài gǎnxiè nín le āyí!',
    grammarNotes: 'Rental repair issues: 房东 (landlord/landlady); 水龙头漏水 (faucet dripping water); 物业师傅 (property management repairman); 上门维修 (home maintenance visit).',
    hint: 'Situation: Asking the landlord to fix a leaking bathroom tap in your apartment.',
    exampleSentences: [
      { target: '有任何房屋设施故障都可以联系物业。', translation: 'Contact property management for any apartment fixture malfunction.', phonetic: 'Yǒu rènhé fángwū shèshī gùzhàng dōu kěyǐ liánxì wùyè.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 邻居你好，请问我们小区的电费怎么交？\nB: 很简单，直接在微信或者支付宝的生活缴费里交就可以了。\nA: 需要知道户号对吧？\nB: 对，电表箱门上贴着十位数的“用电户号”，输进去就能看到欠费金额并充值。\nA: 明白了，太方便了，不用跑营业厅！',
    back: 'A: Hello neighbor, how do we pay the electricity bill in our residential compound?\nB: Very easy: you can pay directly in WeChat or Alipay under "Utilities" (生活缴费).\nA: I need to know the account number, right?\nB: Yes, the 10-digit customer account number is taped on the meter box door. Enter it to see balance and top up.\nA: Understood, so convenient without needing to visit the utility office!',
    phonetic: 'A: Línjū nǐ hǎo, qǐngwèn wǒmen xiǎoqū de diànfèi zěnme jiāo?\nB: Hěn jiǎndān, zhíjiē zài Wēixìn huòzhě Zhīfùbǎo de shēnghuó jiǎofèi lǐ jiāo jiù kěyǐ le.\nA: Xūyào zhīdào hùhào duì ba?\nB: Duì, diànbiǎoxiāng mén shàng tiē zhe shí wèi shù de “yòngdiàn hùhào”, shū jìnqù jiù néng kàn dào qiànfèi jīng\'é bìng chōngzhí.\nA: Míngbai le, tài fāngbiàn le, bù yòng pǎo yíngyètīng!',
    grammarNotes: 'Utilities & bills: 生活缴费 (utility payment); 电费 / 水费 / 燃气费 (electricity/water/gas bills); 户号 (customer account number); 充值 (recharge / top up).',
    hint: 'Situation: Learning how to pay residential utility bills digitally via phone.',
    exampleSentences: [
      { target: '手机上缴水电气费只需几秒钟。', translation: 'Paying water, power, and gas on your phone takes only seconds.', phonetic: 'Shǒujī shàng jiāo shuǐ-diàn-qì fèi zhǐ xū jǐ miǎozhōng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，我想挂一个消化内科的普通号。\nB: 请出示您的医保卡或者护照。今天上午还有一位副主任医师的专家号，需要吗？\nA: 普通号就可以，我只是胃有点胀痛。\nB: 好的，挂号费十五元。请拿着病历本去三楼内科二诊室门口排队候诊。\nA: 好的，谢谢护士！',
    back: 'A: Hello, I would like to register for a general appointment in gastroenterology.\nB: Please show your medical insurance card or passport. There is also an associate chief specialist slot this morning, do you want it?\nA: General appointment is fine, my stomach is just feeling a bit bloated and aching.\nB: Alright, registration fee is 15 yuan. Take your medical record booklet to wait outside Clinic Room 2 on the 3rd floor.\nA: Okay, thank you nurse!',
    phonetic: 'A: Nín hǎo, wǒ xiǎng guà yī gè xiāohuà nèikē de pǔtōng hào.\nB: Qǐng chūshì nín de yībǎokǎ huòzhě hùzhào. Jīntiān shàngwǔ hái yǒu yī wèi fùzhǔrèn yīshī de zhuānjiā hào, xūyào ma?\nA: Pǔtōng hào jiù kěyǐ, wǒ zhǐshì wèi yǒudiǎn zhàngtòng.\nB: Hǎo de, guàhàofèi shíwǔ yuán. Qǐng ná zhe bìnglìběn qù sān lóu nèikē èr zhěnshì ménkǒu páiduì hòuzhěn.\nA: Hǎo de, xièxiè hùshi!',
    grammarNotes: 'Hospital registration: 挂号 (register appointment at hospital); 普通号 / 专家号 (general vs specialist slot); 消化内科 (gastroenterology); 病历本 (medical booklet); 候诊 (waiting for doctor).',
    hint: 'Situation: Registering for a doctor appointment at a Chinese general hospital counter.',
    exampleSentences: [
      { target: '可以通过医院官方微信公众号提前预约挂号。', translation: 'You can book appointments in advance via the hospital\'s official WeChat account.', phonetic: 'Kěyǐ tōngguò yīyuàn guānfāng Wēixìn gōngzhònghào tíqián yùyuē guàhào.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，请问今天去上海的高铁票还有吗？\nB: 有的，G二一次列车下午两点出发，二等座五百五十三元。\nA: 请帮我买一张靠窗的座位。\nB: 好的，请刷您的护照读取信息。出票成功，二等座零八车十二F号，靠窗。\nA: 进站需要换纸质车票吗？\nB: 不需要，直接刷您的护照走人工通道检票进站就可以。',
    back: 'A: Hello, are there still tickets for today\'s high-speed train to Shanghai?\nB: Yes, train G21 departs at 2:00 PM, second class seat is 553 yuan.\nA: Please get me a window seat.\nB: Sure, please tap your passport to read info. Ticket issued: Car 8, Seat 12F, window.\nA: Do I need to exchange for a paper ticket to enter the station?\nB: No need, just tap your passport through the manual inspection lane to board.',
    phonetic: 'A: Nín hǎo, qǐngwèn jīntiān qù Shànghǎi de gāotiě piào hái yǒu ma?\nB: Yǒu de, G èrshíyī cì lièchē xiàwǔ liǎng diǎn chūfā, èrděngzuò wǔbǎi wǔshísān yuán.\nA: Qǐng bāng wǒ mǎi yī zhāng kàochuāng de zuòwèi.\nB: Hǎo de, qǐng shuā nín de hùzhào dúqǔ xìnxī. Chūpiào chénggōng, èrděngzuò líng bā chē shí\'èr F hào, kàochuāng.\nA: Jìn zhàn xūyào huàn zhǐzhì chēpiào ma?\nB: Bù xūyào, zhíjiē shuā nín de hùzhào zǒu réngōng tōngdào jiǎnpiào jìn zhàn jiù kěyǐ.',
    grammarNotes: 'High-speed rail (12306): 高铁 (high-speed train); 二等座 (second class seat); 靠窗 / 靠过道 (window vs aisle seat); 刷护照 (tap passport); 人工通道 (manual passport lane).',
    hint: 'Situation: Buying a high-speed bullet train ticket at the station ticket window.',
    exampleSentences: [
      { target: '坐高铁出行准时、快捷又舒适。', translation: 'Traveling by bullet train is punctual, fast, and comfortable.', phonetic: 'Zuò gāotiě chūxíng zhǔnshí, kuàijié yòu shūshì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 阿姨，这把青菜和西红柿怎么卖？\nB: 青菜三块钱一斤，西红柿四块五一斤，都是早上刚摘的，新鲜着呢！\nA: 给我称两斤西红柿，再来一把青菜。\nB: 好嘞！一共十一块钱，抹个零，给十块钱就行！\nA: 谢谢阿姨，我扫您的微信二维码了。',
    back: 'A: Auntie, how much are these greens and tomatoes?\nB: Greens are 3 yuan per jin (500g), tomatoes are 4.5 yuan per jin, freshly picked this morning, very fresh!\nA: Weigh me two jin of tomatoes and a bunch of greens.\nB: Alright! Total is 11 yuan, I\'ll round down the change, just give 10 yuan!\nA: Thank you Auntie, I have scanned your WeChat QR code.',
    phonetic: 'A: Āyí, zhè bǎ qīngcài hé xīhóngshì zěnme mài?\nB: Qīngcài sān kuài qián yī jīn, xīhóngshì sì kuài wǔ yī jīn, dōu shì zǎoshang gāng zhāi de, xīnxiān zhe ne!\nA: Gěi wǒ chēng liǎng jīn xīhóngshì, zài lái yī bǎ qīngcài.\nB: Hǎo lei! Yīgòng shíyī kuài qián, mǒ gè líng, gěi shí kuài qián jiù xíng!\nA: Xièxiè āyí, wǒ sǎo nín de Wēixìn èrwéimǎ le.',
    grammarNotes: 'Vegetable market bargaining: 斤 (jīn = 500 grams, standard Chinese weight); 称 (chēng = weigh on scale); 抹零 (mǒ líng = round down fractional change for customer goodwill); 新鲜 (fresh).',
    hint: 'Situation: Buying fresh produce at a traditional Chinese open-air wet market.',
    exampleSentences: [
      { target: '菜市场的蔬菜比大超市更新鲜便宜。', translation: 'Vegetables at the wet market are fresher and cheaper than supermarkets.', phonetic: 'Càishìchǎng de shūcài bǐ dà chāoshì gèng xīnxiān piányi.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，我刚搬到这个小区，想办理一下境外人员住宿登记。\nB: 请出示您的护照、房屋租赁合同和房东的房产证复印件。\nA: 材料我都带齐了，请您过目。\nB: 好的，信息核对无误。这是您的住宿登记表回执，请妥善保管。\nA: 谢谢警官！',
    back: 'A: Hello, I just moved into this residential community and would like to complete temporary residence registration for foreigners.\nB: Please show your passport, apartment rental contract, and a copy of the landlord\'s property deed.\nA: I have brought all the documents, please take a look.\nB: Good, the information is verified without errors. Here is your Residence Registration Form receipt, please keep it safe.\nA: Thank you officer!',
    phonetic: 'A: Nǐ hǎo, wǒ gāng bān dào zhège xiǎoqū, xiǎng bànlǐ yīxià jìngwài rényuán zhùsù dēngjì.\nB: Qǐng chūshì nín de hùzhào, fángwū zūlìn hétong hé fángdōng de fángchǎnzèng fùyìnjiàn.\nA: Cáilìao wǒ dōu dài qí le, qǐng nín guòmù.\nB: Hǎo de, xìnxī héduì wúwù. Zhè shì nín de zhùsù dēngjìbiǎo huízhí, qǐng tuǒshàn bǎoguǎn.\nA: Xièxiè jǐngguān!',
    grammarNotes: 'Police station registry: 派出所 (local police station); 住宿登记 (residence registration for foreigners - legal requirement within 24h); 租赁合同 (lease contract); 回执 (official receipt).',
    hint: 'Situation: Registering temporary residence at the local community police station.',
    exampleSentences: [
      { target: '搬家后要在二十四小时内办理新的住宿登记。', translation: 'Register new residence within 24 hours after moving.', phonetic: 'Bānjiā hòu yào zài èrshísì xiǎoshí nèi bànlǐ xīn de zhùsù dēngjì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，我要寄一个包裹去上海，请问顺丰快递几天能到？\nB: 寄特快的话次日达，明天中午之前就能送到客户手上。\nA: 运费大概多少钱？\nB: 首重一公斤内十八元，箱子里有违禁品或者电池吗？\nA: 没有，全是衣服和两本书。\nB: 好的，请在手机小程序上扫码实名下单。',
    back: 'A: Hello, I want to send a parcel to Shanghai, how many days for SF Express to arrive?\nB: If using priority express, next-day delivery: arrives in the customer\'s hands before noon tomorrow.\nA: Roughly how much is the shipping cost?\nB: Initial weight within 1kg is 18 yuan. Are there prohibited goods or batteries in the box?\nA: No, only clothes and two books.\nB: Great, please scan the QR code to place a real-name order on the WeChat mini-program.',
    phonetic: 'A: Nǐ hǎo, wǒ yào jì yī gè bāoguǒ qù Shànghǎi, qǐngwèn Shùnfēng kuàidì jǐ tiān néng dào?\nB: Jì tèkuài de huà cìrìdá, míngtiān zhōngwǔ zhīqián jiù néng sòng dào kèhù shǒushang.\nA: Yùnfèi dàgài duōshǎo qián?\nB: Shǒuzhòng yī gōngjīn nèi shíbā yuán, xiāngzi lǐ yǒu wéijìnpǐn huòzhě diànchí ma?\nA: Méiyǒu, quán shì yīfu hé liǎng běn shū.\nB: Hǎo de, qǐng zài shǒujī xiǎochéngxù shàng sǎomǎ shímíng xiàdān.',
    grammarNotes: 'Sending parcels: 顺丰快递 (SF Express); 次日达 (next-day arrival); 首重 (initial base weight); 违禁品 (prohibited items); 小程序下单 (order via mini-program).',
    hint: 'Situation: Mailing an express parcel to another Chinese city using SF Express.',
    exampleSentences: [
      { target: '顺丰快递速度快且服务规范。', translation: 'SF Express is fast and has standardized service.', phonetic: 'Shùnfēng kuàidì sùdù kuài qiě fúwù guīfàn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，我们在网上预订了一间大床房，这是护照。\nB: 欢迎光临！查到您的预订了，入住三晚，包含双人早餐。\nA: 请问早餐在几楼？几点开始？\nB: 早餐在二楼西餐厅，早上七点到十点供应。\nA: 房间的Wi-Fi需要密码吗？\nB: 连上酒店Wi-Fi后，输入您的房间号和姓氏拼音即可免费上网。这是您的房卡。',
    back: 'A: Hello, we booked a king bed room online, here are our passports.\nB: Welcome! Found your reservation: staying 3 nights, includes breakfast for two.\nA: On which floor is breakfast? What time does it start?\nB: Breakfast is at the 2nd floor western restaurant, served from 7:00 to 10:00 AM.\nA: Does the room Wi-Fi require a password?\nB: After connecting to hotel Wi-Fi, enter your room number and last name pinyin to browse for free. Here is your keycard.',
    phonetic: 'A: Nín hǎo, wǒmen zài wǎngshàng yùdìng le yī jiān dàchuángfáng, zhè shì hùzhào.\nB: Huānyíng guānglín! Chá dào nín de yùdìng le, rùzhù sān wǎn, bāohán shuāngrén zǎocān.\nA: Qǐngwèn zǎocān zài jǐ lóu? Jǐ diǎn kāishǐ?\nB: Zǎocān zài èr lóu xīcāntīng, zǎoshang qī diǎn dào shí diǎn gōngyìng.\nA: Fángjiān de Wi-Fi xūyào mìmǎ ma?\nB: Lián shàng jiǔdiàn Wi-Fi hòu, shūrù nín de fángjiān hào hé xìngshì pīnyīn jíkě miǎnfèi shàngwǎng. Zhè shì nín de fángkǎ.',
    grammarNotes: 'Hotel check-in: 大床房 (king/queen bed room); 入住 (check-in / stay); 房卡 (room keycard); 供应 (served/provided); 预订 (reservation).',
    hint: 'Situation: Checking into a domestic hotel with passports in China.',
    exampleSentences: [
      { target: '退房时间通常是中午十二点以前。', translation: 'Checkout time is usually before 12:00 noon.', phonetic: 'Tuìfáng shíjiān tōngcháng shì zhōngwǔ shí\'èr diǎn yǐqián.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这里的共享单车怎么骑？扫码就可以吗？\nB: 对，用支付宝或者美团App扫车把手上的二维码，锁就会“啪”的一声自动打开。\nA: 骑完以后停在哪里？\nB: 必须停在地面上划了白线的非机动车停放区域，不能随便乱停。\nA: 怎么锁车结账？\nB: 在手机App上点击“确认还车”，听到车锁落锁的声音就可以了。',
    back: 'A: How do you ride the shared bikes here? Just scan the QR code?\nB: Yes, use Alipay or Meituan app to scan the QR code on the handlebars, the lock opens automatically with a click.\nA: Where do I park when finished riding?\nB: You must park inside the white-lined non-motorized parking zones on the pavement, never park haphazardly.\nA: How do I lock and settle the bill?\nB: Tap "Confirm Return" in the app, and listen for the lock clicking shut.',
    phonetic: 'A: Zhèlǐ de gòngxiǎng dānchē zěnme qí? Sǎomǎ jiù kěyǐ ma?\nB: Duì, yòng Zhīfùbǎo huòzhě Měituán App sǎo chē bǎshou shàng de èrwéimǎ, suǒ jiù huì “pā” de yī shēng zìdòng dǎkāi.\nA: Qí wán yǐhòu tíng zài nǎlǐ?\nB: Bìxū tíng zài dìmiàn shàng huà le bái xiàn de fēi jīdòngchē tíngfàng qūyù, bù néng suíbiàn luàntíng.\nA: Zěnme suǒ chē jiézhàng?\nB: Zài shǒujī App shàng diǎnjī “quèrèn huánchē”, tīng dào chēsuǒ luòsuǒ de shēngyīn jiù kěyǐ le.',
    grammarNotes: 'Shared bicycles: 共享单车 (shared bike); 扫码开锁 (scan code to unlock); 还车 (return bike); 白线停车区 (white-lined parking spot); 乱停 (park randomly/illegally).',
    hint: 'Situation: Unlocking, riding, and legally parking a shared city bicycle (美团/哈啰单车).',
    exampleSentences: [
      { target: '共享单车解决了出行最后一公里。', translation: 'Shared bikes solve the last-mile transit commute.', phonetic: 'Gòngxiǎng dānchē jiějué le chūxíng zuìhòu yī gōnglǐ.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，请帮我洗一件羽绒服和一条牛仔裤。\nB: 好的，羽绒服需要水洗烘干，牛仔裤干洗。一共四十五元。\nA: 请问大概几天可以洗好来取？\nB: 后天下午就能洗好，洗好了系统会自动发微信通知您。\nA: 凭什么取衣服呢？\nB: 凭这张洗衣小票或者报您的手机号就行。',
    back: 'A: Hello, please help me wash a down jacket and a pair of jeans.\nB: Sure, the down jacket needs wet wash and dry, jeans dry clean. Total is 45 yuan.\nA: Roughly how many days until I can come pick them up?\nB: They will be ready the afternoon after tomorrow; the system texts you on WeChat once ready.\nA: What do I show to pick up the clothes?\nB: Just show this laundry receipt ticket or give your phone number.',
    phonetic: 'A: Nǐ hǎo, qǐng bāng wǒ xǐ yī jiàn yǔróngfú hé yī tiáo niúzǎikù.\nB: Hǎo de, yǔróngfú xūyào shuǐxǐ hōnggān, niúzǎikù gānxǐ. Yīgòng sìshíwǔ yuán.\nA: Qǐngwèn dàgài jǐ tiān kěyǐ xǐ hǎo lái qǔ?\nB: Hòutiān xiàwǔ jiù néng xǐ hǎo, xǐ hǎo le xìtǒng huì zìdòng fā Wēixìn tōngzhī nín.\nA: Píng shénme qǔ yīfu ne?\nB: Píng zhè zhāng xǐyī xiǎopiào huòzhě bào nín de shǒujīhào jiù xíng.',
    grammarNotes: 'Dry cleaners: 干洗店 (dry cleaner); 水洗烘干 (water wash and tumble dry); 羽绒服 (down jacket / winter coat); 取衣服 (pick up clothes); 小票 (receipt ticket).',
    hint: 'Situation: Dropping off winter clothes at a local laundry and dry cleaning shop.',
    exampleSentences: [
      { target: '冬天厚衣服送到干洗店清洗最省心。', translation: 'Sending heavy winter coats to the dry cleaner is most hassle-free.', phonetic: 'Dōngtiān hòu yīfu sòng dào gānxǐdiàn qīngxǐ zuì shěngxīn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 欢迎光临！请问想喝点什么茶饮？\nB: 我想要一杯经典珍珠奶茶。\nA: 好的，请问甜度和冰块怎么选？\nB: 我要微糖、少冰。\nA: 喜欢加什么小料吗？珍珠、椰果还是布丁？\nB: 加一份黑糖珍珠，谢谢！打包带走。',
    back: 'A: Welcome! What drink would you like?\nB: I would like a cup of classic boba milk tea.\nA: Sure, what sweetness and ice level do you prefer?\nB: I want slight sugar (30%), less ice.\nA: Any toppings you like to add? Boba tapioca, coconut jelly, or egg pudding?\nB: Add brown sugar boba pearls, thank you! To go.',
    phonetic: 'A: Huānyíng guānglín! Qǐngwèn xiǎng hē diǎn shénme cháyǐn?\nB: Wǒ xiǎng yào yībēi jīngdiǎn zhēnzhū nǎichá.\nA: Hǎo de, qǐngwèn tiándù hé bīngkuài zěnme xuǎn?\nB: Wǒ yào wēitáng, shǎobīng.\nA: Xǐhuan jiā shénme xiǎoliào ma? Zhēnzhū, yēguǒ háishì bùdīng?\nB: Jiā yī fèn hēitáng zhēnzhū, xièxiè! Dǎbāo dàizǒu.',
    grammarNotes: 'Boba milk tea customization: 珍珠奶茶 (boba milk tea); 甜度 (sweetness level: 无糖/微糖/半糖/全糖); 冰块 (ice level: 去冰/少冰/正常冰); 小料 (toppings: 椰果/布丁); 打包 (to-go).',
    hint: 'Situation: Ordering customized milk tea (HeyTea, Mixue, Chagee) in China.',
    exampleSentences: [
      { target: '微糖少冰是年轻人最常选的奶茶搭配。', translation: 'Slight sugar and less ice is the most popular bubble tea combination.', phonetic: 'Wēitáng shǎobīng shì niánqīng rén zuì cháng xuǎn de nǎichá dāpèi.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，我刚在淘宝上买了一双运动鞋，尺码买小了，想换货。\nB: 可以的，只要吊牌没剪、鞋底没磨损，支持七天无理由退换货。\nA: 换大一码需要自己出快递费吗？\nB: 购买时赠送了运费险，快递员上门取件退回是免费的。\nA: 太省心了！国内网购服务真是太棒了！',
    back: 'A: Hello, I just bought sneakers on Taobao, but bought a size too small and want to exchange.\nB: Yes you can, as long as tags aren\'t cut and soles aren\'t worn, 7-day unconditional returns are supported.\nA: Do I need to pay courier fees myself to exchange for one size up?\nB: The order included freight return insurance, so the courier picking it up at your door is free.\nA: Such peace of mind! Domestic online shopping service is truly amazing!',
    phonetic: 'A: Nǐ hǎo, wǒ gāng zài Táobǎo shàng mǎi le yī shuāng yùndòngxié, chǐmǎ mǎi xiǎo le, xiǎng huànhuò.\nB: Kěyǐ de, zhǐyào diàopái méi jiǎn, xiédǐ méi mósǔn, zhīchí qī tiān wú lǐyóu tuì-huànhuò.\nA: Huàn dà yī mǎ xūyào zìjǐ chū kuàidì fèi ma?\nB: Gòumǎi shí zèngsòng le yùnfèixiǎn, kuàidìyuán shàngmén qǔjiàn tuìhuí shì miǎnfèi de.\nA: Tài shěngxīn le! Guónèi wǎnggòu fúwù zhēnshi tài bàng le!',
    grammarNotes: 'E-commerce returns: 淘宝 (Taobao); 退换货 (return/exchange goods); 尺码 (size); 七天无理由 (7-day no questions asked return); 运费险 (shipping return insurance).',
    hint: 'Situation: Returning or exchanging online shopping items smoothly on Taobao or JD.',
    exampleSentences: [
      { target: '网购有运费险退货非常方便。', translation: 'Online shopping with return shipping insurance makes returns effortless.', phonetic: 'Wǎnggòu yǒu yùnfèixiǎn tuìhuò fēicháng fāngbiàn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 阿姨，这瓶食用油和洗发水在几号货架？\nB: 食用油在三号粮油调料区，洗发水在最里面的日用品专区。\nA: 好的，今天超市会员有什么打折优惠吗？\nB: 满九十九元减二十，结账时报手机号可以自动积分抵扣现金。\nA: 好的，我再去挑两样水果凑个单！',
    back: 'A: Auntie, on which shelf are this cooking oil and shampoo?\nB: Cooking oil is in Aisle 3 (Grain, Oil & Seasonings), shampoo is at the far end in the Daily Essentials area.\nA: Okay, are there any member discounts at the supermarket today?\nB: 20 yuan off for orders over 99 yuan. Giving your phone number at checkout earns points to deduct cash.\nA: Great, I will pick two more fruits to hit the threshold!',
    phonetic: 'A: Āyí, zhè píng shíyòngyóu hé xǐfàshuǐ zài jǐ hào huòjià?\nB: Shíyòngyóu zài sān hào liángyóu tiáoliào qū, xǐfàshuǐ zài zuì lǐmiàn de rìyòngpǐn zhuānqū.\nA: Hǎo de, jīntiān chāoshì huìyuán yǒu shénme dǎzhé yōuhuì ma?\nB: Mǎn jiǔshíjiǔ yuán jiǎn èrshí, jiézhàng shí bào shǒujīhào kěyǐ zìdòng jīfēn dǐkòu xiànjīn.\nA: Hǎo de, wǒ zài qù tiāo liǎng yàng shuǐguǒ còu gè dān!',
    grammarNotes: 'Supermarket shopping: 货架 (shelves/aisles); 食用油 (cooking oil); 满减 (tiered discount promo, e.g. spend 99 save 20); 凑单 (add items to reach discount threshold).',
    hint: 'Situation: Finding goods and taking advantage of promotions in a large Chinese supermarket.',
    exampleSentences: [
      { target: '结账时出示会员码可以享受专属优惠。', translation: 'Show membership QR code at checkout to enjoy exclusive discounts.', phonetic: 'Jiézhàng shí chūshì huìyuánmǎ kěyǐ xiǎngshòu zhuānshǔ yōuhuì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，请问离这里最近的公厕在哪里？\nB: 一直往前走五十米，报刊亭后面就有一座市政公厕。\nA: 里面有纸巾吗？需要扫码收费吗？\nB: 都是免费的，门口墙上有免费刷脸或者扫码取厕纸的机器。\nA: 太人性化了，多谢师傅指路！',
    back: 'A: Master, where is the nearest public restroom around here?\nB: Walk straight ahead 50 meters, right behind the newspaper kiosk is a municipal public toilet.\nA: Is there toilet paper inside? Does it charge fees?\nB: It is completely free! On the wall by the entrance is a free dispenser where you scan to get paper.\nA: So user-friendly and thoughtful, thank you so much for directions!',
    phonetic: 'A: Shīfu, qǐngwèn lí zhèlǐ zuì jìn de gōngcè zài nǎlǐ?\nB: Yīzhí wǎng qián zǒu wǔshí mǐ, bàokāntíng hòumiàn jiù yǒu yī zuò shìzhèng gōngcè.\nA: Lǐmiàn yǒu zhǐjīn ma? Xūyào sǎomǎ shòufèi ma?\nB: Dōu shì miǎnfèi de, ménkǒu qiáng shàng yǒu miǎnfèi shuāliǎn huòzhě sǎomǎ qǔ cèzhǐ de jīqì.\nA: Tài rénxìnghuà le, duōxiè shīfu zhǐlù!',
    grammarNotes: 'Public restrooms: 公厕 / 洗手间 (public toilet / restroom); 纸巾 / 厕纸 (tissues / toilet paper); 人性化 (humanized / thoughtful); 指路 (give directions).',
    hint: 'Situation: Inquiring about public restrooms on the street in an emergency.',
    exampleSentences: [
      { target: '许多城市公厕都配备了母婴室和无障碍设施。', translation: 'Many city public restrooms are equipped with nursery and accessible facilities.', phonetic: 'Xǔduō chéngshì gōngcè dōu pèibèi le mǔyīngshì hé wúzhàng\'ài shèshī.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，请问电影院检票口在哪儿？\nB: 自动取票机在右手边，请先输入取票码打印纸质电影票。\nA: 好的，我取到票了，四号激光厅从哪里进？\nB: 直走左拐就是四号厅，三D眼镜进门时工作员会免费发放。\nA: 爆米花和可乐可以在前台买吗？\nB: 可以，套餐在吧台直接扫码购买。',
    back: 'A: Hello, where is the cinema ticket checkpoint?\nB: The self-service ticket kiosk is on your right; please enter your collection code to print your ticket.\nA: Got the tickets! Which way into Laser Hall 4?\nB: Go straight and turn left for Hall 4. Staff distribute 3D glasses for free at the door.\nA: Can popcorn and cola be bought at the counter?\nB: Yes, snack combos can be purchased by scanning at the concession bar.',
    phonetic: 'A: Nǐ hǎo, qǐngwèn diànyǐngyuàn jiǎnpiàokǒu zài nǎr?\nB: Zìdòng qǔpiàojī zài yòushǒubiān, qǐng xiān shūrù qǔpiàomǎ dǎyìn zhǐzhì diànyǐngpiào.\nA: Hǎo de, wǒ qǔ dào piào le, sì hào jīguāng tīng cóng nǎlǐ jìn?\nB: Zhí zǒu zuǒ guǎi jiù shì sì hào tīng, sān D yǎnjìng jìn mén shí gōngzuòyuán huì miǎnfèi fāfàng.\nA: Bàomǐhuā hé kělè kěyǐ zài qiántái mǎi ma?\nB: Kěyǐ, tàocān zài bātái zhíjiē sǎomǎ gòumǎi.',
    grammarNotes: 'Cinema entertainment: 电影院 (cinema); 自动取票机 (ticket pickup kiosk); 检票口 (ticket check gate); 爆米花 (popcorn); 三维眼镜 (3D glasses).',
    hint: 'Situation: Watching a movie at a shopping mall cinema in China.',
    exampleSentences: [
      { target: '网上买电影票可以提前在线选好座位。', translation: 'Buying movie tickets online lets you select preferred seats in advance.', phonetic: 'Wǎngshàng mǎi diànyǐngpiào kěyǐ tíqián zàixiàn xuǎn hǎo zuòwèi.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 请问小区的垃圾分类投放点在哪里？\nB: 就在二号楼楼下，每天早上七点到九点、晚上六点到八点有督导员指导。\nA: 这个快递纸箱和外卖餐盒应该怎么扔？\nB: 干净的纸箱压扁投进蓝色“可回收物”桶；用过的油腻外卖塑料盒属于“其他垃圾”。\nA: 剩菜剩饭呢？\nB: 厨余垃圾倒进绿色“厨余垃圾”桶，塑料袋要拿出来单独扔。',
    back: 'A: Where is the garbage sorting collection point in our residential compound?\nB: Right downstairs by Building 2; a supervisor guides residents 7-9 AM and 6-8 PM.\nA: How should I dispose of this cardboard parcel box and takeout container?\nB: Flatten clean cardboard and toss in the blue "Recyclable" bin; greasy used plastic boxes belong in "Other Waste".\nA: What about leftover food scraps?\nB: Food waste goes into the green "Kitchen Waste" bin; remove the plastic bag and throw it separately.',
    phonetic: 'A: Qǐngwèn xiǎoqū de lājī fēnlèi tóufàngdiǎn zài nǎlǐ?\nB: Jiù zài èr hào lóu lóuxià, měi tiān zǎoshang qī diǎn dào jiǔ diǎn, wǎnshang liù diǎn dào bā diǎn yǒu dūdǎoyuán zhǐdǎo.\nA: Zhège kuàidì zhǐxiāng hé wàimài cānhé yīnggāi zěnme rēng?\nB: Gānjìng de zhǐxiāng yābiǎn tóujìn lánsè “kě-huíshōuwù” tǒng; yòng guò de yóunì wàimài sùliàohé shǔyú “qítā lājī”.\nA: Shèngcài-shèngfàn ne?\nB: Chúyú lājī dào jìn lǜsè “chúyú lājī” tǒng, sùliàodài yào ná chūlái dāndú rēng.',
    grammarNotes: 'Garbage sorting: 垃圾分类 (waste sorting); 可回收物 (recyclables); 厨余垃圾 (kitchen food waste); 其他垃圾 (other/residual waste); 定时定点投放 (designated timed drop-off).',
    hint: 'Situation: Sorting household garbage correctly in modern residential communities in China.',
    exampleSentences: [
      { target: '做好垃圾分类保护城市绿色环境。', translation: 'Proper waste sorting protects the city\'s green environment.', phonetic: 'Zuò hǎo lājī fēnlèi bǎohù chéngshì lǜsè huánjìng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好，请问在紧急情况下，中国常用的报警和急救电话是多少？\nB: 请一定要牢记三个号码：报警打一一零，火警打一一九，医疗急救打一二零。\nA: 如果遇上交通事故呢？\nB: 交通事故可以打一二二，也可以直接打一一零报警。\nA: 电话打通后怎么说？\nB: 保持冷静，清楚报出具体路名、门牌号或者显眼地标，并说明伤情情况。\nA: 记住了，安全无小事！',
    back: 'A: Hello, in case of an emergency, what are the common emergency numbers in China?\nB: Please remember three key numbers: Police is 110, Fire department is 119, Medical emergency is 120.\nA: What if there is a traffic accident?\nB: For traffic accidents dial 122, or directly call 110 police.\nA: What should I say when the call connects?\nB: Stay calm, clearly report the specific street name, building number or landmark, and explain any injuries.\nA: Got it, safety is never a minor issue!',
    phonetic: 'A: Nǐ hǎo, qǐngwèn zài jǐnjí qíngkuàng xià, Zhōngguó chángyòng de bàojǐng hé jíjiù diànhuà shì duōshǎo?\nB: Qǐng yīdìng yào láojì sān gè hàomǎ: Bàojǐng dǎ yī-yī-líng, huǒjǐng dǎ yī-yī-jiǔ, yīliáo jíjiù dǎ yī-èr-líng.\nA: Rúguǒ yù shàng jiāotōng shìgù ne?\nB: Jiāotōng shìgù kěyǐ dǎ yī-èr-èr, yě kěyǐ zhíjiē dǎ yī-yī-líng bàojǐng.\nA: Diànhuà dǎ tōng hòu zěnme shuō?\nB: Bǎochí lěngjìng, qīngchǔ bào chū jùtǐ lùmíng, ménpáihào huòzhě xiǎnyǎn dìbiāo, bìng shuōmíng shāngqíng qíngkuàng.\nA: Jì zhù le, ānquán wú xiǎoshì!',
    grammarNotes: 'Emergency hotlines: 110 (Police - 一一零); 120 (Ambulance - 一二零); 119 (Fire - 一一九); 保持冷静 (stay calm); 地标 (prominent landmark); 紧急情况 (emergency).',
    hint: 'Situation: Knowing China\'s official emergency numbers and how to report location and medical status.',
    exampleSentences: [
      { target: '遇到突发紧急事件第一时间拨打一一零。', translation: 'Dial 110 immediately when encountering an unexpected emergency.', phonetic: 'Yù dào tūfā jǐnjí shìjiàn dì-yī shíjiān bōdǎ yī-yī-líng.' }
    ]
  },
  {

    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好！\nB: 你好！',
    back: 'A: Hello!\nB: Hello!',
    phonetic: 'A: Nǐ hǎo!\nB: Nǐ hǎo!',
    grammarNotes: 'The most universal greeting in Chinese. “你” (nǐ) = you, “好” (hǎo) = good/well.',
    hint: 'Situation: Greeting anyone at any time of day.',
    exampleSentences: [
      { target: '你好！', translation: 'Hello!', phonetic: 'Nǐ hǎo!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 谢谢！\nB: 不客气。',
    back: 'A: Thank you!\nB: You are welcome.',
    phonetic: 'A: Xièxiè!\nB: Bù kèqì.',
    grammarNotes: '“谢谢” (xièxiè) = thank you. “不客气” (bù kèqì) literally means "no need to be polite/formal".',
    hint: 'Situation: Expressing and responding to gratitude.',
    exampleSentences: [
      { target: '谢谢你！', translation: 'Thank you!', phonetic: 'Xièxiè nǐ!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 对不起。\nB: 没关系。',
    back: 'A: Sorry.\nB: It doesn\'t matter / That\'s alright.',
    phonetic: 'A: Duìbuqǐ.\nB: Méi guānxi.',
    grammarNotes: '“对不起” (duìbuqǐ) = I\'m sorry. “没关系” (méi guānxi) = no problem / it doesn\'t matter.',
    hint: 'Situation: Apologizing and forgiving.',
    exampleSentences: [
      { target: '没关系！', translation: 'No problem / It is alright!', phonetic: 'Méi guānxi!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 再见！\nB: 明天见！',
    back: 'A: Goodbye!\nB: See you tomorrow!',
    phonetic: 'A: Zàijiàn!\nB: Míngtiān jiàn!',
    grammarNotes: '“再见” (zàijiàn) = see you again / goodbye. “明天” (míngtiān) = tomorrow, “见” (jiàn) = to see/meet.',
    hint: 'Situation: Parting ways and saying farewell.',
    exampleSentences: [
      { target: '再见！', translation: 'Goodbye!', phonetic: 'Zàijiàn!' },
      { target: '明天见！', translation: 'See you tomorrow!', phonetic: 'Míngtiān jiàn!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你好吗？\nB: 我很好，你呢？\nA: 我也很好。',
    back: 'A: How are you?\nB: I am very well, and you?\nA: I am also very well.',
    phonetic: 'A: Nǐ hǎo ma?\nB: Wǒ hěn hǎo, nǐ ne?\nA: Wǒ yě hěn hǎo.',
    grammarNotes: '“吗” (ma) turns statements into yes/no questions. “呢” (ne) is a bounce-back question ("and you?"). “也” (yě) = also.',
    hint: 'Situation: Asking how someone is doing.',
    exampleSentences: [
      { target: '你呢？', translation: 'And you?', phonetic: 'Nǐ ne?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这个好吗？\nB: 很好！\nA: 好，谢谢。',
    back: 'A: Is this one good?\nB: Very good!\nA: Okay, thank you.',
    phonetic: 'A: Zhège hǎo ma?\nB: Hěn hǎo!\nA: Hǎo, xièxiè.',
    grammarNotes: '“这个” (zhège) = this / this one. “好” (hǎo) = good. “很好” (hěn hǎo) = very good.',
    hint: 'Situation: Checking quality or asking for an opinion on an item.',
    exampleSentences: [
      { target: '这个很好！', translation: 'This one is very good!', phonetic: 'Zhège hěn hǎo!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这个多少钱？\nB: 五块。\nA: 给你钱。',
    back: 'A: How much is this?\nB: Five yuan.\nA: Here is the money.',
    phonetic: 'A: Zhège duōshǎo qián?\nB: Wǔ kuài.\nA: Gěi nǐ qián.',
    grammarNotes: '“多少钱” (duōshǎo qián) = how much money. “块” (kuài) = yuan (colloquial currency unit). “给你” (gěi nǐ) = give you / here you go.',
    hint: 'Situation: Asking the price of an item and paying.',
    exampleSentences: [
      { target: '多少钱？', translation: 'How much?', phonetic: 'Duōshǎo qián?' },
      { target: '给你。', translation: 'Here you go.', phonetic: 'Gěi nǐ.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 扫码吗？\nB: 对，扫这里。\nA: 好了。',
    back: 'A: Scan the QR code?\nB: Yes, scan here.\nA: Done / All set.',
    phonetic: 'A: Sǎo mǎ ma?\nB: Duì, sǎo zhèlǐ.\nA: Hǎo le.',
    grammarNotes: '“扫码” (sǎo mǎ) = scan QR code. “对” (duì) = correct/yes. “这里” (zhèlǐ) = here. “好了” (hǎo le) = done / completed.',
    hint: 'Situation: Quick mobile payment at a shop or street stall.',
    exampleSentences: [
      { target: '扫这里。', translation: 'Scan here.', phonetic: 'Sǎo zhèlǐ.' },
      { target: '好了！', translation: 'All done!', phonetic: 'Hǎo le!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你要这个吗？\nB: 要，谢谢。\nA: 给。\nB: 好的。',
    back: 'A: Do you want this?\nB: Yes, want it, thank you.\nA: Here you go.\nB: Okay.',
    phonetic: 'A: Nǐ yào zhège ma?\nB: Yào, xièxiè.\nA: Gěi.\nB: Hǎo de.',
    grammarNotes: '“要” (yào) = to want / will take. Answering “要” means "yes, I want it". “给” (gěi) = here (short & casual for "here you are").',
    hint: 'Situation: Offering or accepting an item.',
    exampleSentences: [
      { target: '我要这个。', translation: 'I want this one.', phonetic: 'Wǒ yào zhège.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 要袋子吗？\nB: 不要，谢谢。\nA: 好的。',
    back: 'A: Do you want a bag?\nB: No need, thank you.\nA: Okay.',
    phonetic: 'A: Yào dàizi ma?\nB: Bù yào, xièxiè.\nA: Hǎo de.',
    grammarNotes: '“袋子” (dàizi) = bag. “不要” (bù yào) = don\'t want / no need. Super common question at checkout.',
    hint: 'Situation: Checkout at a supermarket or convenience store refusing a plastic bag.',
    exampleSentences: [
      { target: '不要袋子。', translation: 'No bag needed.', phonetic: 'Bù yào dàizi.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 有水吗？\nB: 有，在这里。\nA: 谢谢！\nB: 不客气。',
    back: 'A: Do you have water?\nB: Yes, it is right here.\nA: Thank you!\nB: You are welcome.',
    phonetic: 'A: Yǒu shuǐ ma?\nB: Yǒu, zài zhèlǐ.\nA: Xièxiè!\nB: Bù kèqì.',
    grammarNotes: '“有” (yǒu) = have / there is. “水” (shuǐ) = water. To answer yes to "have you...", just repeat “有”!',
    hint: 'Situation: Asking for water at a restaurant or shop.',
    exampleSentences: [
      { target: '有水吗？', translation: 'Is there water?', phonetic: 'Yǒu shuǐ ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 可以吗？\nB: 可以，没问题！\nA: 太好了。',
    back: 'A: Is it okay? / Can I?\nB: Yes you can, no problem!\nA: That is great.',
    phonetic: 'A: Kěyǐ ma?\nB: Kěyǐ, méi wèntí!\nA: Tài hǎo le.',
    grammarNotes: '“可以吗” (kěyǐ ma) = can I? / is it okay? “没问题” (méi wèntí) = no problem. “太好了” (tài hǎo le) = wonderful / great.',
    hint: 'Situation: Asking for permission or approval.',
    exampleSentences: [
      { target: '可以吗？', translation: 'Can I? / Is it okay?', phonetic: 'Kěyǐ ma?' },
      { target: '没问题！', translation: 'No problem!', phonetic: 'Méi wèntí!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 不可以吗？\nB: 不行，不可以。\nA: 好吧，知道了。',
    back: 'A: Not allowed?\nB: No way, not allowed.\nA: Alright, understood.',
    phonetic: 'A: Bù kěyǐ ma?\nB: Bù xíng, bù kěyǐ.\nA: Hǎo ba, zhīdào le.',
    grammarNotes: '“不行” (bù xíng) = not okay / no way. “不可以” (bù kěyǐ) = cannot / not allowed. “知道了” (zhīdào le) = got it / understood.',
    hint: 'Situation: Learning something is forbidden or not permitted.',
    exampleSentences: [
      { target: '不行！', translation: 'Not allowed! / No way!', phonetic: 'Bù xíng!' },
      { target: '知道了。', translation: 'Understood.', phonetic: 'Zhīdào le.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 厕所在哪里？\nB: 在那边。\nA: 谢谢！',
    back: 'A: Where is the restroom?\nB: Over there.\nA: Thank you!',
    phonetic: 'A: Cèsuǒ zài nǎlǐ?\nB: Zài nàbiān.\nA: Xièxiè!',
    grammarNotes: '“厕所” (cèsuǒ) = toilet / restroom. “在哪里” (zài nǎlǐ) = where is...? “那边” (nàbiān) = over there.',
    hint: 'Situation: Urgent inquiry for the toilet.',
    exampleSentences: [
      { target: '厕所在哪儿？', translation: 'Where is the toilet?', phonetic: 'Cèsuǒ zài nǎr?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你叫什么名字？\nB: 我叫王平。\nA: 我是大卫。',
    back: 'A: What is your name?\nB: My name is Wang Ping.\nA: I am David.',
    phonetic: 'A: Nǐ jiào shénme míngzì?\nB: Wǒ jiào Wáng Píng.\nA: Wǒ shì Dàwèi.',
    grammarNotes: '“叫” (jiào) = called / to be named. “什么” (shénme) = what. “名字” (míngzì) = name. “我是...” = I am...',
    hint: 'Situation: Basic two-way name exchange.',
    exampleSentences: [
      { target: '你叫什么？', translation: 'What are you called?', phonetic: 'Nǐ jiào shénme?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你是哪国人？\nB: 我是中国人，你呢？\nA: 我是巴西人。',
    back: 'A: What nationality are you?\nB: I am Chinese, and you?\nA: I am Brazilian.',
    phonetic: 'A: Nǐ shì nǎ guó rén?\nB: Wǒ shì Zhōngguó rén, nǐ ne?\nA: Wǒ shì Bāxī rén.',
    grammarNotes: '“哪国人” (nǎ guó rén) = which country person / what nationality. Country name + “人” (rén) = nationality.',
    hint: 'Situation: Asking and answering about country of origin.',
    exampleSentences: [
      { target: '我是中国人。', translation: 'I am Chinese.', phonetic: 'Wǒ shì Zhōngguó rén.' },
      { target: '我是巴西人。', translation: 'I am Brazilian.', phonetic: 'Wǒ shì Bāxī rén.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你会英语吗？\nB: 会一点点。\nA: 太好了！',
    back: 'A: Can you speak English?\nB: A little bit.\nA: Wonderful!',
    phonetic: 'A: Nǐ huì Yīngyǔ ma?\nB: Huì yīdiǎndiǎn.\nA: Tài hǎo le!',
    grammarNotes: '“会” (huì) = can / to know how to. “一点点” (yīdiǎndiǎn) = a little bit. “英语” (Yīngyǔ) = English.',
    hint: 'Situation: Asking if someone can speak English.',
    exampleSentences: [
      { target: '我会一点点。', translation: 'I know a little bit.', phonetic: 'Wǒ huì yīdiǎndiǎn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 我听不懂。\nB: 请慢一点说。\nA: 好的，没问题。',
    back: 'A: I do not understand (what I hear).\nB: Please speak a little slower.\nA: Okay, no problem.',
    phonetic: 'A: Wǒ tīng bù dǒng.\nB: Qǐng màn yīdiǎn shuō.\nA: Hǎo de, méi wèntí.',
    grammarNotes: '“听不懂” (tīng bù dǒng) = I don\'t understand (listening). “请” (qǐng) = please. “慢一点” (màn yīdiǎn) = slower.',
    hint: 'Situation: Essential phrase when someone speaks Chinese too fast.',
    exampleSentences: [
      { target: '我听不懂。', translation: 'I don\'t understand.', phonetic: 'Wǒ tīng bù dǒng.' },
      { target: '慢一点。', translation: 'A bit slower.', phonetic: 'Màn yīdiǎn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 吃辣吗？\nB: 不吃辣，一点都不吃。\nA: 好，不放辣！',
    back: 'A: Do you eat spicy?\nB: No spicy, not at all.\nA: Okay, no spice added!',
    phonetic: 'A: Chī là ma?\nB: Bù chī là, yīdiǎn dōu bù chī.\nA: Hǎo, bù fàng là!',
    grammarNotes: '“吃辣” (chī là) = eat spicy food. “一点都不...” (yīdiǎn dōu bù...) = not even a little bit. “不放辣” (bù fàng là) = don\'t add chili/spice.',
    hint: 'Situation: Crucial restaurant dialogue for people who cannot tolerate chili.',
    exampleSentences: [
      { target: '不要辣。', translation: 'Do not make it spicy.', phonetic: 'Bù yào là.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 好吃吗？\nB: 很好吃！你尝尝。\nA: 真好吃！',
    back: 'A: Is it delicious?\nB: Very delicious! Taste it.\nA: Really delicious!',
    phonetic: 'A: Hǎochī ma?\nB: Hěn hǎochī! Nǐ chángchang.\nA: Zhēn hǎochī!',
    grammarNotes: '“好吃” (hǎochī) = delicious (food). “尝尝” (chángchang) = taste / have a try (verb reduplication). “真” (zhēn) = really / truly.',
    hint: 'Situation: Eating food together and commenting on the taste.',
    exampleSentences: [
      { target: '这个很好吃！', translation: 'This is very delicious!', phonetic: 'Zhège hěn hǎochī!' },
      { target: '真好吃！', translation: 'Really tasty!', phonetic: 'Zhēn hǎochī!' }
    ]
  },
  // =========================================================================
  // REAL-LIFE COLLOQUIAL CHINESE DIALOGUES (地道中国日常生活口语 - 像母语者一样说话)
  // =========================================================================
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 哥们儿，你最近在忙啥呢？\nB: 嗨，别提了，最近公司天天加班，我都快被卷死了！\nA: 这么拼啊？赶紧找机会躺平歇歇吧。',
    back: 'A: Bro, what have you been up to lately?\nB: Ugh, don\'t even ask / don\'t get me started, the company has us working overtime every day, I\'m almost getting ground down to death by the competition!\nA: Grinding that hard? Hurry up and find a chance to lie flat / chill out and rest.',
    phonetic: 'A: Gēmenr, nǐ zuìjìn zài máng shà ne?\nB: Hāi, bié tí le, zuìjìn gōngsī tiāntiān jiābān, wǒ dōu kuài bèi juǎn sǐ le!\nA: Zhème pīn a? Gǎnjǐn zhǎo jīhuì tǎngpíng xiēxie ba.',
    grammarNotes: 'Modern Chinese youth buzzwords: “卷” (juǎn - from involution/competition); “躺平” (tǎngpíng - lie flat / take it easy); “哥们儿” (gēmenr - bro/dude); “别提了” (bié tí le - don\'t get me started).',
    hint: 'Situation: Venting about workplace competition and long hours over tea or coffee.',
    exampleSentences: [
      { target: '别太卷了，身体要紧。', translation: 'Don\'t overwork/compete too furiously, health comes first.', phonetic: 'Bié tài juǎn le, shēntǐ yàojǐn.' },
      { target: '今天只想在家里躺平。', translation: 'Today I just want to lie flat at home.', phonetic: 'Jīntiān zhǐ xiǎng zài jiālǐ tǎngpíng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 帅哥，吃点什么？里面请坐！\nB: 老板，来一碗牛肉面，加个煎蛋，多放香菜少放盐。\nA: 好嘞！面要宽的还是细的？\nB: 要细面，汤多一点儿！',
    back: 'A: Handsome! What would you like to eat? Please come sit inside!\nB: Boss, bring a bowl of beef noodles, add a fried egg, extra cilantro, less salt.\nA: Right on / Coming up! Do you want wide noodles or thin noodles?\nB: Thin noodles, and a bit more broth please!',
    phonetic: 'A: Shuàigē, chī diǎn shénme? Lǐmiàn qǐng zuò!\nB: Lǎobǎn, lái yī wǎn niúròumiàn, jiā gè jiāndàn, duō fàng xiāngcài shǎo fàng yán.\nA: Hǎo lei! Miàn yào kuān de háishì xì de?\nB: Yào xì miàn, tāng duō yīdiǎnr!',
    grammarNotes: 'Authentic dining culture: “帅哥 / 美女” (shuàigē/měinǚ) is universal friendly address in restaurants; “好嘞” (hǎo lei) is cheerful waiter agreement ("right on!"); custom requests: 多放...少放... (extra... / less...).',
    hint: 'Situation: Ordering customized noodles like a local regular.',
    exampleSentences: [
      { target: '好嘞，马上来！', translation: 'You got it, coming right up!', phonetic: 'Hǎo lei, mǎshàng lái!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 刚才买单你干嘛抢着付啊？说好了这顿我请客的！\nB: 咱俩谁跟谁啊，下次你请不就结了！\nA: 行，那待会儿喝奶茶必须我来买！\nB: 没问题，一言为定。',
    back: 'A: Why did you fight to pay the bill just now? We agreed this meal was on me!\nB: Hey, between the two of us, who\'s keeping score? Next time it\'s on you and that settles it!\nA: Alright, then when we get boba tea later, I\'m definitely buying!\nB: No problem, it\'s a deal.',
    phonetic: 'A: Gāngcái mǎidān nǐ gànmá qiǎng zhe fù a? Shuō hǎo le zhè dùn wǒ qǐngkè de!\nB: Zán liǎ shuí gēn shuí a, xià cì nǐ qǐng bù jiù jié le!\nA: Xíng, nà dàihuǐr hē nǎichá bìxū wǒ lái mǎi!\nB: Méi wèntí, yī yán wéi dìng.',
    grammarNotes: 'Chinese social etiquette: Fighting for the bill (抢买单 qiǎng mǎidān); “咱俩谁跟谁啊” (zán liǎ shuí gēn shuí a = we\'re so close, why keep score?); “一言为定” (it\'s a deal).',
    hint: 'Situation: The classic friendly Chinese squabble over paying the restaurant check.',
    exampleSentences: [
      { target: '咱俩谁跟谁啊！', translation: 'Between you and me, who\'s counting!', phonetic: 'Zán liǎ shuí gēn shuí a!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 师傅，我去高铁站，大概得多久啊？\nB: 现在是晚高峰，环路堵得要命，少说得四十分钟。\nA: 哎呀，我火车还有一个小时发车，能抄近道吗？\nB: 放心吧，我走辅路穿过去，保准误不了你的车！',
    back: 'A: Master/Driver, I\'m going to the high-speed train station, about how long will it take?\nB: It\'s evening rush hour now, the ring road is insanely jammed, forty minutes at least.\nA: Oh dear, my train departs in an hour, can we take a shortcut?\nB: Don\'t worry, I\'ll cut through the side roads, I guarantee you won\'t miss your train!',
    phonetic: 'A: Shīfu, wǒ qù gāotiězhàn, dàgài děi duōjiǔ a?\nB: Xiànzài shì wǎngāofēng, huánlù dǔ de yàomìng, shǎoshuō děi sìshí fēnzhōng.\nA: Àiyā, wǒ huǒchē hái yǒu yī gè xiǎoshí fāchē, néng chāo jìndào ma?\nB: Fàngxīn ba, wǒ zǒu fǔlù chuān guòqù, bǎozhǔn wù bù liǎo nǐ de chē!',
    grammarNotes: 'Colloquial taxi lingo: “堵得要命” (dǔ de yàomìng - jammed to death / insanely congested); “抄近道” (chāo jìndào - take a shortcut); “保准” (bǎozhǔn - guaranteed).',
    hint: 'Situation: Rushing to catch a train in heavy rush-hour traffic.',
    exampleSentences: [
      { target: '前面堵得要命。', translation: 'Up ahead is jammed up to no end.', phonetic: 'Qiánmiàn dǔ de yàomìng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 喂，下班后去不去喝一杯？听说新开了一家精酿啤酒屋。\nB: 今天真去不了，这周在赶项目DDL，我整个人都麻了。\nA: 行吧，那你先忙，改天咱们再约个周末好好聚聚。\nB: 妥了，等我忙完这阵子！',
    back: 'A: Hey, want to grab a drink after work? Heard a new craft beer pub opened.\nB: I really can\'t today, rushing project deadline this week, I\'m totally numb/exhausted.\nA: Alright, go ahead with work, we\'ll set up another date on the weekend to properly hang out.\nB: Settled / Deal, once I finish this hectic stretch!',
    phonetic: 'A: Wèi, xiàbān hòu qù bù qù hē yībēi? Tīngshuō xīn kāi le yī jiā jīngniàng píjiǔwū.\nB: Jīntiān zhēn qù bù liǎo, zhè zhōu zài gǎn xiàngmù DDL, wǒ zhěngrén dōu má le.\nA: Xíng ba, nà nǐ xiān máng, gǎitiān zánmen zài yuē gè zhōumò hǎohǎo jùju.\nB: Tuǒ le, děng wǒ máng wán zhè zhènzi!',
    grammarNotes: 'Modern workplace Chinese: “赶 DDL” (gǎn deadline); “人麻了” (totally numb/overwhelmed with fatigue); “妥了” (tuǒ le - northern colloquial for "settled / all good"); “改天” (another day).',
    hint: 'Situation: Declining a drink invitation due to tight work deadlines.',
    exampleSentences: [
      { target: '我整个人都麻了。', translation: 'I am totally numb / overwhelmed.', phonetic: 'Wǒ zhěngrén dōu má le.' },
      { target: '妥了，没问题！', translation: 'Done deal, no problem!', phonetic: 'Tuǒ le, méi wèntí!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 老板，这件外套怎么卖啊？能便宜点儿不？\nB: 帅哥好眼光，这是新款，原价二百八，最低给你二百。\nA: 一百五行不行？合适我就直接扫码拿走了。\nB: 哎呀你太会砍价了！行吧行吧，交个朋友，拿走吧！',
    back: 'A: Boss, how much for this jacket? Can you make it a bit cheaper?\nB: Handsome, you have great taste, this is a new model, original 280, lowest for you is 200.\nA: How about 150? If that works I\'ll scan the QR code and take it right away.\nB: Oh man, you are too good at bargaining! Alright alright, just to make a friend, take it!',
    phonetic: 'A: Lǎobǎn, zhè jiàn wàitào zěnme mài a? Néng piányi diǎnr bù?\nB: Shuàigē hǎo yǎnguāng, zhè shì xīnkuǎn, yuánjià èrbǎi bā, zuìdī gěi nǐ èrbǎi.\nA: Yībǎi wǔ xíng bù xíng? Héshì wǒ jiù zhíjiē sǎo mǎ ná zǒu le.\nB: Àiyā nǐ tài huì kǎnjià le! Xíng ba xíng ba, jiāo gè péngyǒu, ná zǒu ba!',
    grammarNotes: 'Bargaining lingo: “砍价” (kǎnjià - haggle); “交个朋友” (classic merchant line: just to make a friend); “怎么卖” (how much is it selling for); “合适我就拿走” (if the price is right I\'ll take it).',
    hint: 'Situation: Friendly bargaining at a local clothing market in China.',
    exampleSentences: [
      { target: '能便宜点儿不？', translation: 'Can you make it a bit cheaper?', phonetic: 'Néng piányi diǎnr bù?' },
      { target: '交个朋友！', translation: 'Just to make a friend!', phonetic: 'Jiāo gè péngyǒu!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: 听说你最近在看房子，打算买房上车了？\nB: 哎，首付勉强凑齐了，但是每个月房贷压力山大啊。\nA: 理解，不过好歹在城市扎下根了，慢慢奋斗呗！\nB: 是啊，为了以后的生活，只能咬牙坚持了。',
    back: 'A: Heard you\'ve been house-hunting lately, planning to get on the housing bandwagon?\nB: Sigh, barely scraped together the down payment, but the monthly mortgage stress is colossal.\nA: I understand, but at least you\'re putting down roots in the city, keep striving little by little!\nB: Yeah, for our future life, just gotta grit teeth and persevere.',
    phonetic: 'A: Tīngshuō nǐ zuìjìn zài kàn fángzi, dǎsuàn mǎifáng shàngchē le?\nB: Āi, shǒufù miǎnqiǎng còu qí le, dànshì měi gè yuè fángdài yālì shān dà a.\nA: Lǐjiě, bùguò hǎodǎi zài chéngshì zhā xià gēn le, mànmàn fèndòu bei!\nB: Shì a, wèile yǐhòu de shēnghuó, zhǐ néng yǎoyá jiānchí le.',
    grammarNotes: 'Urban Chinese life idioms: “上车” (get on board / buy a home before prices rise); “压力山大” (pun on Alexander the Great = pressure huge as a mountain); “扎下根” (put down roots); “咬牙坚持” (grit teeth and persist).',
    hint: 'Situation: Discussing mortgages, down payments, and putting down roots in the city.',
    exampleSentences: [
      { target: '最近压力山大。', translation: 'Lately stress is massive as a mountain.', phonetic: 'Zuìjìn yālì shān dà.' },
      { target: '咬牙坚持下去！', translation: 'Grit your teeth and power through!', phonetic: 'Yǎoyá jiānchí xiàqù!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 喂，是外卖小哥吗？\nB: 对，您好！您的黄焖鸡米饭到了，放在您家门口鞋柜上了。\nA: 太感谢了！汤汁没洒吧？\nB: 放心，包得严严实实的，祝您用餐愉快，记得给个五星好评啊！',
    back: 'A: Hello, is this the delivery driver?\nB: Yes, hello! Your braised chicken rice has arrived, left it on the shoe cabinet by your front door.\nA: Thank you so much! Did the broth spill at all?\nB: Don\'t worry, packed tight and secure. Enjoy your meal, remember to leave a 5-star review please!',
    phonetic: 'A: Wèi, shì wàimài xiǎogē ma?\nB: Duì, nín hǎo! Nín de huángmènjī mǐfàn dào le, fàng zài nín jiā ménkǒu xiéguì shàng le.\nA: Tài gǎnxiè le! Tāngzhī méi sǎ ba?\nB: Fàngxīn, bāo de yányán-shíshí de, zhù nín yòngcān yúkuài, jìde gěi gè wǔxīng hǎopíng a!',
    grammarNotes: 'Takeout delivery ecosystem: “外卖小哥” (delivery rider); “放门口” (leave at the door); “严严实实” (tightly sealed); “五星好评” (5-star rating).',
    hint: 'Situation: Coordinating food delivery arrival over the phone.',
    exampleSentences: [
      { target: '记得给个好评！', translation: 'Remember to leave a good review!', phonetic: 'Jìde gěi gè hǎopíng!' }
    ]
  },
  // =========================================================================
  // 30 DAILY CHINESE CONVERSATIONS: STREETS & SCHOOL (校园与街头实用真实对话)
  // =========================================================================

  // --- PART 1: AT SCHOOL & UNIVERSITY (校园生活篇: 1-15) ---
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 同学你好，请问三号教学楼怎么走？\nB: 就在前面图书馆后面，直走两分钟就是。\nA: 太感谢你了！\nB: 没事儿，不客气。',
    back: 'A: Hello classmate, excuse me how do I get to Teaching Building No. 3?\nB: It\'s right behind the library ahead, go straight for two minutes and you\'re there.\nA: Thank you so much!\nB: No problem, you\'re welcome.',
    phonetic: 'A: Tóngxué nǐ hǎo, qǐngwèn sān hào jiàoxuélóu zěnme zǒu?\nB: Jiù zài qiánmiàn túshūguǎn hòumiàn, zhí zǒu liǎng fēnzhōng jiù shì.\nA: Tài gǎnxiè nǐ le!\nB: Méishìr, bù kèqì.',
    grammarNotes: 'Campus basics: “同学” (tóngxué = classmate, universal polite address for students); “教学楼” (jiàoxuélóu = teaching/academic building); “没事儿” (méishìr = no worries).',
    hint: 'Situation: Asking directions to a classroom building on campus.',
    exampleSentences: [
      { target: '请问三号楼在哪里？', translation: 'Excuse me, where is Building 3?', phonetic: 'Qǐngwèn sān hào lóu zài nǎlǐ?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 不好意思，请问这个座位有人吗？\nB: 没有，没人坐，你坐吧。\nA: 谢谢！这里能插充电器吗？\nB: 可以，桌子底下有插座。',
    back: 'A: Excuse me, is anyone sitting in this seat?\nB: No, no one is sitting here, go ahead and sit.\nA: Thank you! Can I plug in a charger here?\nB: Yes, there is an electrical outlet under the desk.',
    phonetic: 'A: Bù hǎoyìsi, qǐngwèn zhège zuòwèi yǒurén ma?\nB: Méiyǒu, méirén zuò, nǐ zuò ba.\nA: Xièxiè! Zhèlǐ néng chā chōngdiànqì ma?\nB: Kěyǐ, zhuōzi dǐxia yǒu chāzuò.',
    grammarNotes: 'Classroom & library courtesy: “有人吗？” (Is this taken?); “插座” (chāzuò = power socket); “充电器” (chōngdiànqì = charger).',
    hint: 'Situation: Taking a seat and asking for power at the university library or study hall.',
    exampleSentences: [
      { target: '请问这里有人吗？', translation: 'Excuse me, is this seat taken?', phonetic: 'Qǐngwèn zhèlǐ yǒurén ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老师好！请问今天的作业是什么？\nB: 请复习第十课生词，并完成练习册第三页。\nA: 什么时候需要交呢？\nB: 下周一上课前交。',
    back: 'A: Hello teacher! What is today\'s homework?\nB: Please review lesson 10 vocabulary and complete page 3 of the workbook.\nA: When do we need to submit it?\nB: Submit it before class next Monday.',
    phonetic: 'A: Lǎoshī hǎo! Qǐngwèn jīntiān de zuòyè shì shénme?\nB: Qǐng fùxí dì shí kè shēngcí, bìng wánchéng liànxícè dì sān yè.\nA: Shénme shíhou xūyào jiāo ne?\nB: Xià zhōuyī shàngkè qián jiāo.',
    grammarNotes: 'Teacher-student interaction: “交作业” (jiāo zuòyè = hand in homework); “复习” (fùxí = review); “练习册” (liànxícè = workbook).',
    hint: 'Situation: Asking the professor about homework assignment and due date.',
    exampleSentences: [
      { target: '什么时候交作业？', translation: 'When is homework due?', phonetic: 'Shénme shíhou jiāo zuòyè?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老师，不好意思，下周三我想请半天假。\nB: 怎么了？身体不舒服吗？\nA: 我需要去出入境管理局办理签证延期。\nB: 好的，记得在系统里提交请假申请。',
    back: 'A: Teacher, excuse me, I would like to request half a day off next Wednesday.\nB: What\'s the matter? Feeling unwell?\nA: I need to go to the Entry-Exit Bureau to process a visa extension.\nB: Alright, remember to submit an absence request in the campus portal.',
    phonetic: 'A: Lǎoshī, bù hǎoyìsi, xià zhōusān wǒ xiǎng qǐng bàn tiān jià.\nB: Zěnme le? Shēntǐ bù shūfu ma?\nA: Wǒ xūyào qù chūrùjìng guǎnlǐjú bànlǐ qiānzhèng yánqī.\nB: Hǎo de, jìde zài xìtǒng lǐ tíjiāo qǐngjià shēnqǐng.',
    grammarNotes: 'Taking leave: “请假” (qǐngjià = ask for leave/absence); “签证延期” (qiānzhèng yánqī = visa extension); “出入境管理局” (Exit-Entry Administration).',
    hint: 'Situation: Requesting official absence from university for immigration paperwork.',
    exampleSentences: [
      { target: '我想请一天假。', translation: 'I would like to ask for a day off.', phonetic: 'Wǒ xiǎng qǐng yī tiān jià.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 阿姨，来一份番茄炒蛋和一份土豆丝，配一碗米饭。\nB: 好嘞！在这儿吃还是打包？\nA: 在这儿吃。一共多少钱？\nB: 一共十二块，刷校园卡或者微信都行。',
    back: 'A: Auntie, one tomato scrambled eggs and one shredded potato, with a bowl of rice.\nB: Right on! For here or takeaway?\nA: For here. How much altogether?\nB: Twelve yuan total, swipe campus card or WeChat, both work.',
    phonetic: 'A: Āyí, lái yīfèn fānqié chǎodàn hé yīfèn tǔdòusī, pèi yī wǎn mǐfàn.\nB: Hǎo lei! Zài zhèr chī háishì dǎbāo?\nA: Zài zhèr chī. Yīgòng duōshǎo qián?\nB: Yīgòng shí-èr kuài, shuā xiàoyuán kǎ huòzhě Wēixìn dōu xíng.',
    grammarNotes: 'Canteen Chinese: “阿姨” (āyí = auntie, universally used for canteen workers); “打包” (dǎbāo = doggy bag/takeaway); “校园卡” (xiàoyuán kǎ = student campus card).',
    hint: 'Situation: Ordering lunch at a university cafeteria (食堂).',
    exampleSentences: [
      { target: '阿姨，打包带走！', translation: 'Auntie, pack it to go!', phonetic: 'Āyí, dǎbāo dàizǒu!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 你好，请问校园卡充值在哪里办理？\nB: 可以在食堂一楼服务台人工充值，也可以直接在微信小程序充。\nA: 小程序叫什么名字？\nB: 搜“智慧校园”绑定学号就行。',
    back: 'A: Hello, where can I top up my campus card?\nB: You can top up in person at the 1st floor canteen service desk, or directly via WeChat mini-program.\nA: What is the mini-program called?\nB: Search "Smart Campus" and bind your student ID.',
    phonetic: 'A: Nǐ hǎo, qǐngwèn xiàoyuán kǎ chōngzhí zài nǎlǐ bànlǐ?\nB: Kěyǐ zài shítáng yī lóu fúwùtái réngōng chōngzhí, yě kěyǐ zhíjiē zài Wēixìn xiǎochéngxù chōng.\nA: Xiǎochéngxù jiào shénme míngzì?\nB: Sōu “Zhìhuì Xiàoyuán” bǎngdìng xuéhào jiù xíng.',
    grammarNotes: 'Campus fintech: “充值” (chōngzhí = top up balance); “小程序” (xiǎochéngxù = mini-program); “绑定学号” (bind student ID number).',
    hint: 'Situation: Recharging student meal card balance.',
    exampleSentences: [
      { target: '我的校园卡没钱了，需要充值。', translation: 'My campus card is out of money, I need to top up.', phonetic: 'Wǒ de xiàoyuán kǎ méi qián le, xūyào chōngzhí.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 师傅你好，我想借这两本书，可以借多久？\nB: 本科生借期是一个月，到期前可以在网上续借一次。\nA: 如果逾期还书会有罚款吗？\nB: 每天每本一毛钱，记得按时还哦。',
    back: 'A: Hello master, I\'d like to borrow these two books, how long can I keep them?\nB: Undergraduate loan period is one month; you can renew once online before due date.\nA: If I return books late will there be a fine?\nB: Ten cents per book per day, remember to return on time!',
    phonetic: 'A: Shīfu nǐ hǎo, wǒ xiǎng jiè zhè liǎng běn shū, kěyǐ jiè duōjiǔ?\nB: Běnkēshēng jièqī shì yī gè yuè, dàoqī qián kěyǐ zài wǎngshàng xùjiè yī cì.\nA: Rúguǒ yúqī huán shū huì yǒu fákuǎn ma?\nB: Měi tiān měi běn yī máo qián, jìde ànshí huán o.',
    grammarNotes: 'Library terms: “借书 / 还书” (jiè shū / huán shū = borrow/return books); “续借” (xùjiè = renew loan); “逾期罚款” (overdue fine).',
    hint: 'Situation: Borrowing and renewing books at the college library.',
    exampleSentences: [
      { target: '我想续借这本书。', translation: 'I would like to renew this book.', phonetic: 'Wǒ xiǎng xùjiè zhè běn shū.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 老师，我想打印这份中文论文，请问怎么收费？\nB: 黑白单面一毛，双面一毛五，彩印一块一张。\nA: 我打双面黑白，一共二十页。\nB: 好的，微信扫这台机子上的码付款即可。',
    back: 'A: Teacher, I\'d like to print this Chinese paper, how much do you charge?\nB: Black and white single-sided is 0.1 yuan, double-sided 0.15, color print 1 yuan per page.\nA: Double-sided black and white for me, twenty pages in total.\nB: Alright, scan the code on this machine via WeChat to pay.',
    phonetic: 'A: Lǎoshī, wǒ xiǎng dǎyìn zhè fèn Zhōngwén lùnwén, qǐngwèn zěnme shòufèi?\nB: Hēibái dānmiàn yī máo, shuāngmiàn yī máo wǔ, cǎiyìn yī kuài yī zhāng.\nA: Wǒ dǎ shuāngmiàn hēibái, yīgòng èrshí yè.\nB: Hǎo de, Wēixìn sǎo zhè tái jīzi shàng de mǎ fùkuǎn jíkě.',
    grammarNotes: 'Campus print shop (打印店): “单面 / 双面” (dānmiàn / shuāngmiàn = single/double sided); “彩印” (color print); “论文” (lùnwén = paper/thesis).',
    hint: 'Situation: Printing essay documents at the campus copy shop.',
    exampleSentences: [
      { target: '帮我打印两份，双面打印。', translation: 'Help me print two copies, double-sided.', phonetic: 'Bāng wǒ dǎyìn liǎng fèn, shuāngmiàn dǎyìn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 宿管阿姨好，我的宿舍门锁好像坏了，钥匙转不动。\nB: 是几号楼几零几房间？\nA: 八号楼302室。\nB: 好，我马上联系后勤维修师傅过去看看。',
    back: 'A: Hello dorm auntie, my dorm door lock seems broken, the key won\'t turn.\nB: Which building number and which room number?\nA: Building 8, Room 302.\nB: Alright, I\'ll immediately contact the logistics maintenance master to check it out.',
    phonetic: 'A: Sùguǎn āyí hǎo, wǒ de sùshè ménsuǒ hǎoxiàng huài le, yàoshi zhuàn bù dòng.\nB: Shì jǐ hào lóu jǐ líng jǐ fángjiān?\nA: Bā hào lóu sān-líng-èr shì.\nB: Hǎo, wǒ mǎshàng liánxì hòuqín wéixiū shīfu guòqù kànkan.',
    grammarNotes: 'Dorm life: “宿管阿姨” (sùguǎn āyí = dorm manager / supervisor); “门锁坏了” (door lock broken); “后勤维修” (logistics maintenance).',
    hint: 'Situation: Reporting a broken door lock to the dormitory supervisor.',
    exampleSentences: [
      { target: '阿姨，我的宿舍没热水了。', translation: 'Auntie, my dorm has no hot water.', phonetic: 'Āyí, wǒ de sùshè méi rèshuǐ le.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 宿管阿姨，请问宿舍几点关大门啊？\nB: 晚上十一点准时锁门，千万别晚归！\nA: 要是万一晚了怎么办？\nB: 晚了就得敲门登记学号和姓名，扣操行分的。',
    back: 'A: Dorm auntie, what time does the dormitory lock the front gate?\nB: Locks at 11 PM sharp, don\'t be late getting back!\nA: What if by any chance I am late?\nB: If late you must knock and register your student ID and name, which docks conduct points.',
    phonetic: 'A: Sùguǎn āyí, qǐngwèn sùshè jǐ diǎn guān dàmén a?\nB: Wǎnshang shíyī diǎn zhǔnshí suǒmén, qiānwàn bié wǎnguī!\nA: Yàoshì wànyī wǎn le zěnme bàn?\nB: Wǎn le jiù děi qiāomén dēngjì xuéhào hé xìngmíng, kòu cāoxíngfēn de.',
    grammarNotes: 'Curfew rules in Chinese colleges: “关大门” (close the main gate); “准时” (punctually / on time); “晚归” (wǎnguī = late return); “登记” (register).',
    hint: 'Situation: Asking dorm gate closure curfew times.',
    exampleSentences: [
      { target: '晚上十一点关门。', translation: 'Closes at 11:00 at night.', phonetic: 'Wǎnshang shíyī diǎn guānmén.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 嗨！下节课是去东区还是西区上？\nB: 在西区文科楼201教室，快走吧，快打上课铃了！\nA: 好的，骑共享单车去吧，走路来不及了。\nB: 行，走起！',
    back: 'A: Hey! Is the next class in the East Campus or West Campus?\nB: In West Campus Liberal Arts Building, Room 201, hurry, bell\'s about to ring!\nA: Okay, let\'s ride a shared bike, walking won\'t make it in time.\nB: Sounds good, let\'s roll!',
    phonetic: 'A: Hāi! Xià jié kè shì qù dōngqū háishì xīqū shàng?\nB: Zài xīqū wénkēlóu èr-líng-yī jiàoshì, kuài zǒu ba, kuài dǎ shàngkèlíng le!\nA: Hǎo de, qí gòngxiǎng dānchē qù ba, zǒulù láibùjí le.\nB: Xíng, zǒu qǐ!',
    grammarNotes: 'Rushing between classes: “东区 / 西区” (East/West campus); “上课铃” (class bell); “来不及” (won\'t make it in time); “走起” (let\'s roll / let\'s go).',
    hint: 'Situation: Rushing between university campuses for the next lecture.',
    exampleSentences: [
      { target: '快来不及了！', translation: 'We\'re not going to make it in time!', phonetic: 'Kuài láibùjí le!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 同学，你知道下周的期末考试怎么考吗？\nB: 听说开卷考，可以带手写笔记，但不能用手机。\nA: 那太好了，平时认真记笔记就稳了。\nB: 没错，周末一起去自习室复习吧！',
    back: 'A: Classmate, do you know how next week\'s final exam will be tested?\nB: I heard it\'s open-book; handwritten notes allowed, but no mobile phones.\nA: That\'s great, taking good notes normally will keep us safe.\nB: Exactly, let\'s go to the study room together this weekend to review!',
    phonetic: 'A: Tóngxué, nǐ zhīdào xià zhōu de qīmò kǎoshì zěnme kǎo ma?\nB: Tīngshuō kāijuàn kǎo, kěyǐ dài shǒuxiě bǐjì, dàn bùnéng yòng shǒujī.\nA: Nà tài hǎo le, píngshí rènzhēn jì bǐjì jiù wěn le.\nB: Méicuò, zhōumò yīqǐ qù zìxíshì fùxí ba!',
    grammarNotes: 'Exam terminology: “期末考试” (final exam); “开卷考” (open-book exam) vs “闭卷考” (closed-book); “稳了” (slang: safe and sound / in the bag).',
    hint: 'Situation: Discussing exam formats and study plans with a fellow student.',
    exampleSentences: [
      { target: '周末去自习室吗？', translation: 'Going to the self-study room this weekend?', phonetic: 'Zhōumò qù zìxíshì ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 请问留学生办公室在几楼？\nB: 在国际交流中心四楼408房间。\nA: 我想咨询一下奖学金申请的事。\nB: 负责老师就在里面，你直接敲门进去就行。',
    back: 'A: Excuse me, which floor is the International Student Office on?\nB: On the 4th floor of the International Exchange Center, Room 408.\nA: I would like to inquire about scholarship applications.\nB: The teacher in charge is right inside, you can just knock and enter.',
    phonetic: 'A: Qǐngwèn liúxuéshēng bàngōngshì zài jǐ lóu?\nB: Zài guójì jiāoliú zhōngxīn sì lóu sì-líng-bā fángjiān.\nA: Wǒ xiǎng zīxún yīxià jiǎngxuéjīn shēnqǐng de shì.\nB: Fùzé lǎoshī jiù zài lǐmiàn, nǐ zhíjiē qiāomén jìnqù jiù xíng.',
    grammarNotes: 'Administrative support: “留学生办公室” (ISO - International Students Office); “咨询” (consult/inquire); “奖学金申请” (scholarship application).',
    hint: 'Situation: Visiting the International Student Office to inquire about scholarship.',
    exampleSentences: [
      { target: '我想申请奖学金。', translation: 'I want to apply for a scholarship.', phonetic: 'Wǒ xiǎng shēnqǐng jiǎngxuéjīn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: 你加入了学校什么社团啊？\nB: 我加入了羽毛球社和汉服社，你呢？\nA: 我想加书法社和吉他社，不知道怎么报名。\nB: 这周末百团大战，大操场全是社团招新摊位，现场报名就行！',
    back: 'A: What student clubs did you join at university?\nB: I joined the Badminton Club and Hanfu Club, what about you?\nA: I want to join the Calligraphy Club and Guitar Club, don\'t know how to register.\nB: This weekend is the "Hundred Clubs Fair", the sports field is full of club recruitment stalls, just sign up on site!',
    phonetic: 'A: Nǐ jiārù le xuéxiào shénme shètuán a?\nB: Wǒ jiārù le yǔmáoqiú shè hé hànfú shè, nǐ ne?\nA: Wǒ xiǎng jiā shūfǎ shè hé jítā shè, bù zhīdào zěnme bàomíng.\nB: Zhè zhōumò bǎituán dàzhàn, dà cāochǎng quán shì shètuán zhāoxīn tānwèi, xiànchǎng bàomíng jiù xíng!',
    grammarNotes: 'Student clubs: “社团” (shètuán = student club); “百团大战” (colloquial term for the huge annual student club recruitment fair); “操场” (sports field).',
    hint: 'Situation: Finding and signing up for student clubs and sports on campus.',
    exampleSentences: [
      { target: '你参加了什么社团？', translation: 'What club did you join?', phonetic: 'Nǐ cānjiā le shénme shètuán?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 同学，你有校园网账号吗？怎么连Wi-Fi啊？\nB: 连“i-Campus”，然后网页会自动跳出登录界面。\nA: 账号密码是什么？\nB: 账号是你的学号，初始密码通常是护照后六位。',
    back: 'A: Classmate, do you have a campus Wi-Fi account? How do I connect?\nB: Connect to "i-Campus", then the web browser will automatically pop up a login screen.\nA: What are the account and password?\nB: Account is your student ID, default password is usually the last 6 digits of your passport.',
    phonetic: 'A: Tóngxué, nǐ yǒu xiàoyuánwǎng zhànghào ma? Zěnme lián Wi-Fi a?\nB: Lián “i-Campus”, ránhòu wǎngyè huì zìdòng tiàochū dēnglù jièmiàn.\nA: Zhànghào mìmǎ shì shénme?\nB: Zhànghào shì nǐ de xuéhào, chūshǐ mìmǎ tōngcháng shì hùzhào hòu liù wèi.',
    grammarNotes: 'Campus IT setup: “校园网” (campus network); “登录界面” (login interface); “学号” (student ID number); “初始密码” (initial/default password).',
    hint: 'Situation: Connecting to the university Wi-Fi network for the first time.',
    exampleSentences: [
      { target: '校园网连不上了。', translation: 'Campus internet won\'t connect.', phonetic: 'Xiàoyuánwǎng lián bù shàng le.' }
    ]
  },

  // --- PART 2: AT THE STREETS & EVERYDAY OUTINGS (街头日常篇: 16-30) ---
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老板，一碗豆腐脑，甜的还是咸的？\nB: 我们北方默认吃咸的，浇卤汁加葱花，可香了！\nA: 行，那来一碗咸豆腐脑，再来两根刚炸好的油条！\nB: 好嘞，坐那儿稍等，马上端过来！',
    back: 'A: Boss, a bowl of tofu pudding, sweet or savory?\nB: We in the North default to savory, ladle gravy with scallions, super fragrant!\nA: Alright, then one savory tofu pudding, plus two freshly fried dough sticks!\nB: Right on, take a seat and wait a sec, bringing it right over!',
    phonetic: 'A: Lǎobǎn, yī wǎn dòufunǎo, tián de háishì xián de?\nB: Wǒmen běifāng mòrèn chī xián de, jiāo lǔzhī jiā cōnghuā, kě xiāng le!\nA: Xíng, nà lái yī wǎn xián dòufunǎo, zài lái liǎng gēn gāng zhà hǎo de yóutiáo!\nB: Hǎo lei, zuò nàr shāoděng, mǎshàng duān guòlái!',
    grammarNotes: 'Chinese street breakfast: “豆腐脑” (dòufunǎo = tofu pudding; savory 咸 in North, sweet 甜 in South); “油条” (yóutiáo = fried dough sticks); “可香了” (super fragrant).',
    hint: 'Situation: Ordering traditional breakfast at a street morning stall (早市/早餐摊).',
    exampleSentences: [
      { target: '豆浆配油条是绝配。', translation: 'Soy milk paired with fried dough sticks is the perfect match.', phonetic: 'Dòujiāng pèi yóutiáo shì juépèi.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，修自行车！我车后轮好像扎破扎胎了。\nB: 我瞧瞧……嗯，扎了根钉子，补个胎十块钱。\nA: 大概要多长时间？\nB: 五分钟就好，把内胎补上打足气就行。\nA: 好的，辛苦您！',
    back: 'A: Master, bike repair! Seems my bike\'s rear tire is punctured.\nB: Let me take a look... yeah, a nail punctured it, patching the tire is 10 yuan.\nA: About how long will it take?\nB: Five minutes is enough, patch the inner tube and pump it full of air.\nA: Great, thank you for your hard work!',
    phonetic: 'A: Shīfu, xiū zìxíngchē! Wǒ chē hòulún hǎoxiàng zhāpò zhātāi le.\nB: Wǒ qiáoqiao... èn, zhā le gēn dīngzi, bǔ gè tāi shí kuài qián.\nA: Dàgài yào duō cháng shíjiān?\nB: Wǔ fēnzhōng jiù hǎo, bǎ nèitāi bǔ shàng dǎ zú qì jiù xíng.\nA: Hǎo de, xīnkǔ nín!',
    grammarNotes: 'Street repairs: “修自行车” (repair bicycle); “扎胎” (zhātāi = flat tire from puncture); “补胎” (patch tire); “打气” (pump air).',
    hint: 'Situation: Getting a flat bike tire repaired by a roadside mechanic.',
    exampleSentences: [
      { target: '师傅，借打气筒打个气！', translation: 'Master, may I borrow the air pump to pump air!', phonetic: 'Shīfu, jiè dǎqìtǒng dǎ gè qì!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 请问这附近有共享充电宝吗？我手机只剩5%电了。\nB: 旁边便利店门口那个绿色柜机就是怪兽充电宝。\nA: 怎么借啊？\nB: 用微信扫一下柜子上的二维码，付押金就能弹出来。',
    back: 'A: Excuse me, is there a shared power bank nearby? My phone only has 5% battery left.\nB: The green kiosk machine at the convenience store entrance next door is Monster Powerbank.\nA: How do I borrow it?\nB: Scan the QR code on the machine with WeChat, pay deposit and it pops right out.',
    phonetic: 'A: Qǐngwèn zhè fùjìn yǒu gòngxiǎng chōngdiànbǎo ma? Wǒ shǒujī zhǐ shèng bǎifēnzhī wǔ diàn le.\nB: Pángbiān biànlìdiàn ménkǒu nàge lǜsè guìjī jiù shì Guàishòu Chōngdiànbǎo.\nA: Zěnme jiè a?\nB: Yòng Wēixìn sǎo yīxià guìzi shàng de èrwéimǎ, fù yājīn jiù néng tán chūlái.',
    grammarNotes: 'Everyday life saver: “共享充电宝” (shared power bank); “柜机” (kiosk station); “弹出来” (pops out). Essential everywhere in urban China.',
    hint: 'Situation: Renting an on-the-go power bank when phone battery is dying.',
    exampleSentences: [
      { target: '我借个充电宝。', translation: 'I\'ll borrow a power bank.', phonetic: 'Wǒ jiè gè chōngdiànbǎo.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，理个发！\nB: 帅哥想怎么剪？剪短点还是修一修？\nA: 两边推平，上面稍微剪短打薄一点就行。\nB: 好的，先去后面洗个头吧！',
    back: 'A: Master, haircut please!\nB: Handsome, how would you like it cut? Cut it short or just a trim?\nA: Buzz the two sides flat, slightly shorten and thin out the top.\nB: Got it, let\'s go to the back to wash your hair first!',
    phonetic: 'A: Shīfu, lǐ gè fà!\nB: Shuàigē xiǎng zěnme jiǎn? Jiǎn duǎn diǎn háishì xiū yī xiū?\nA: Liǎngbiān tuī píng, shàngmiàn shāowēi jiǎn duǎn dǎbáo yīdiǎn jiù xíng.\nB: Hǎo de, xiān qù hòumiàn xǐ gè tóu ba!',
    grammarNotes: 'Barbershop vocabulary (理发店): “理发” (haircut); “两边推平” (fade/buzz sides); “打薄” (thin out hair); “洗头” (wash hair).',
    hint: 'Situation: Getting a standard haircut at a neighborhood hair salon.',
    exampleSentences: [
      { target: '稍微剪短一点就好。', translation: 'Just cut it slightly shorter.', phonetic: 'Shāowēi jiǎn duǎn yīdiǎn jiù hǎo.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，我来取快递！尾号是5821，名字是李明。\nB: 稍等我查一下……在三号货架第二层，取件码是3-2-15。\nA: 找到了，需要扫码出库吗？\nB: 对，在高拍仪前面照一下条形码即可出库。',
    back: 'A: Hello, I\'ve come to pick up a package! Last phone digits are 5821, name is Li Ming.\nB: Wait a moment while I check... It\'s on Shelf 3, 2nd tier, pickup code is 3-2-15.\nA: Found it, do I need to scan to check out?\nB: Yes, show the barcode in front of the overhead scanner scanner to confirm checkout.',
    phonetic: 'A: Nín hǎo, wǒ lái qǔ kuàidì! Wěihào shì wǔ-bā-èr-yī, míngzì shì Lǐ Míng.\nB: Shāoděng wǒ chá yīxià... zài sān hào huòjià dì èr céng, qǔjiànmǎ shì sān-èr-yī-wǔ.\nA: Zhǎodào le, xūyào sǎo mǎ chūkù ma?\nB: Duì, zài gāopàiyí qiánmiàn zhào yīxià tiáoxíngmǎ jíkě chūkù.',
    grammarNotes: 'Cainiao Station (菜鸟驿站): “取快递” (pick up delivery); “尾号” (last phone digits); “取件码” (pickup code); “扫码出库” (scan out of station).',
    hint: 'Situation: Picking up an online shopping parcel at a neighborhood parcel station.',
    exampleSentences: [
      { target: '我来拿快递。', translation: 'I\'m here to pick up a parcel.', phonetic: 'Wǒ lái ná kuàidì.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 药剂师你好，我有点感冒发烧，嗓子还特别疼。\nB: 有量过体温吗？发烧多少度？\nA: 刚才量是38.2度。\nB: 给你拿一盒退烧药布洛芬，再配一盒清热解毒的含片，多喝温开水！',
    back: 'A: Pharmacist hello, I have a bit of a cold and fever, and my throat hurts badly.\nB: Have you taken your temperature? How high is the fever?\nA: Just measured 38.2 degrees Celsius.\nB: I\'ll give you a box of ibuprofen fever reducer, plus a box of soothing throat lozenges, drink plenty of warm water!',
    phonetic: 'A: Yàojìshī nǐ hǎo, wǒ yǒudiǎn gǎnmào fāshāo, sǎngzi hái tèbié téng.\nB: Yǒu liáng guò tǐwēn ma? Fāshāo duōshǎo dù?\nA: Gāngcái liáng shì sānshíbā diǎn èr dù.\nB: Gěi nǐ ná yī hé tuìshāoyào bùluòfēn, zài pèi yī hé qīngrè jiědú de hánpiàn, duō hē wēn kāishuǐ!',
    grammarNotes: 'Pharmacy visits (药店): “感冒发烧” (cold and fever); “嗓子疼” (sore throat); “布洛芬” (ibuprofen); “多喝温开水” (the universal Chinese health advice: drink warm boiled water).',
    hint: 'Situation: Buying over-the-counter medicine for cold and fever at a pharmacy.',
    exampleSentences: [
      { target: '我发烧了，需要退烧药。', translation: 'I have a fever, I need fever medication.', phonetic: 'Wǒ fāshāo le, xūyào tuìshāoyào.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，我的皮鞋鞋跟掉了，能修补一下吗？\nB: 能修，用专用强力胶粘一下，再钉两颗小钉子。\nA: 多少钱？马上能修好吗？\nB: 五块钱，坐旁边小马扎等三分钟，马上就好！',
    back: 'A: Master, the heel of my leather shoe came off, can you repair it?\nB: Can fix it, glue it with special heavy-duty adhesive and drive in two small nails.\nA: How much? Can it be repaired right away?\nB: Five yuan, sit on the little folding stool for three minutes, ready in no time!',
    phonetic: 'A: Shīfu, wǒ de píxié xiégēn diào le, néng xiūbǔ yīxià ma?\nB: Néng xiū, yòng zhuānyòng qiánglìjiāo zhān yīxià, zài dīng liǎng kē xiǎo dīngzi.\nA: Duōshǎo qián? Mǎshàng néng xiūhǎo ma?\nB: Wǔ kuài qián, zuò pángbiān xiǎo mǎzhá děng sān fēnzhōng, mǎshàng jiù hǎo!',
    grammarNotes: 'Cobbler street stall: “鞋跟掉了” (heel fell off); “强力胶” (super glue); “小马扎” (mǎzhá = traditional Chinese folding stool).',
    hint: 'Situation: Fixing footwear at a roadside cobbler stall.',
    exampleSentences: [
      { target: '师傅，帮我修下鞋。', translation: 'Master, help me fix my shoe.', phonetic: 'Shīfu, bāng wǒ xiū xià xié.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 阿姨，这个红富士苹果怎么卖？\nB: 六块钱一斤，特别甜，脆得很！\nA: 给我挑四个大一点的。\nB: 好嘞，一共两斤三两，收你十四块钱！',
    back: 'A: Auntie, how much are these Red Fuji apples?\nB: Six yuan per jin (500g), super sweet and very crisp!\nA: Pick four bigger ones for me.\nB: Right on, two jin and three liang (1.15 kg) total, charging you fourteen yuan!',
    phonetic: 'A: Āyí, zhège hóngfùshì píngguǒ zěnme mài?\nB: Liù kuài qián yī jīn, tèbié tián, cuì de hěn!\nA: Gěi wǒ tiāo sì gè dà yīdiǎn de.\nB: Hǎo lei, yīgòng liǎng jīn sān liǎng, shōu nǐ shísì kuài qián!',
    grammarNotes: 'Fruit store shopping: Weight units in China: 1 斤 (jīn) = 500 grams; 1 两 (liǎng) = 50 grams; “脆” (cuì = crispy/crunchy); “挑” (tiāo = pick/choose).',
    hint: 'Situation: Buying fresh fruit from a street fruit stand.',
    exampleSentences: [
      { target: '这个西瓜甜不甜？', translation: 'Is this watermelon sweet?', phonetic: 'Zhège xīguā tián bù tián?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，我去东方商厦，请打表！\nB: 好嘞，系好安全带，请问走高架还是走地面？\nA: 走高架吧，快一点。\nB: 行，大概十五分钟到。',
    back: 'A: Driver, I\'m going to Oriental Commercial Plaza, please run the meter!\nB: Sure thing, buckle up your seatbelt. Elevated highway or surface roads?\nA: Let\'s take the elevated highway, it\'s quicker.\nB: Alright, about fifteen minutes to arrive.',
    phonetic: 'A: Shīfu, wǒ qù Dōngfāng Shāngshà, qǐng dǎbiǎo!\nB: Hǎo lei, jì hǎo ānquándài, qǐngwèn zǒu gāojià háishì zǒu dìmiàn?\nA: Zǒu gāojià ba, kuài yīdiǎn.\nB: Xíng, dàgài shíwǔ fēnzhōng dào.',
    grammarNotes: 'Taking taxis: “打表” (dǎbiǎo = run taximeter); “安全带” (seatbelt); “高架” (elevated expressway) vs “地面” (surface streets).',
    hint: 'Situation: Directing a taxi driver and requesting the meter.',
    exampleSentences: [
      { target: '师傅，请打表。', translation: 'Driver, please turn on the meter.', phonetic: 'Shīfu, qǐng dǎbiǎo.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，请问这附近哪里有工商银行的ATM自动取款机？\nB: 顺着这条街往前走一百米，路口右转就是工行营业厅。\nA: 那里能用外国Visa卡取人民币吗？\nB: 能，只要机器上有Visa标志的都能取。',
    back: 'A: Hello, where is an ICBC bank ATM machine nearby?\nB: Walk 100 meters ahead along this street, turn right at the intersection for the ICBC branch.\nA: Can I withdraw RMB using a foreign Visa card there?\nB: Yes, as long as the ATM displays the Visa logo you can withdraw.',
    phonetic: 'A: Nín hǎo, qǐngwèn zhè fùjìn nǎlǐ yǒu Gōngshāng Yínháng de ATM zìdòng qǔkuǎnjī?\nB: Shùn zhe zhè tiáo jiē wǎng qián zǒu yībǎi mǐ, lùkǒu yòuzhuǎn jiù shì Gōngháng yíngyètīng.\nA: Nàlǐ néng yòng wàiguó Visa kǎ qǔ rénmínbì ma?\nB: Néng, zhǐyào jīqì shàng yǒu Visa biāozhì de dōu néng qǔ.',
    grammarNotes: 'Banking: “自动取款机” (ATM); “工行” (ICBC); “取款 / 取钱” (withdraw money); “外卡取现” (foreign card cash withdrawal).',
    hint: 'Situation: Finding an international ATM to withdraw cash with a foreign credit card.',
    exampleSentences: [
      { target: '我想取点现金。', translation: 'I want to withdraw some cash.', phonetic: 'Wǒ xiǎng qǔ diǎn xiànjīn.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 阿姨，这件羊毛衫能水洗吗？\nB: 千万不能水洗，会缩水变形的，必须干洗。\nA: 洗一件羊毛衫多少钱？\nB: 普通羊毛衫二十五，后天下午凭单子来取。',
    back: 'A: Auntie, can this wool sweater be water washed?\nB: Absolutely cannot water wash, it will shrink and deform, must be dry cleaned.\nA: How much to clean a wool sweater?\nB: Regular wool sweater is 25 yuan, pick it up day after tomorrow afternoon with your ticket.',
    phonetic: 'A: Āyí, zhè jiàn yángmáoshān néng shuǐxǐ ma?\nB: Qiānwàn bùnéng shuǐxǐ, huì suōshuǐ biànxíng de, bìxū gānxǐ.\nA: Xǐ yī jiàn yángmáoshān duōshǎo qián?\nB: Pǔtōng yángmáoshān èrshíwǔ, hòutiān xiàwǔ píng dānzi lái qǔ.',
    grammarNotes: 'Laundry care: “干洗” (dry clean); “水洗” (water wash); “缩水” (shrink); “凭单子取” (pick up with the receipt/slip).',
    hint: 'Situation: Dropping off delicate wool clothing at a neighborhood dry cleaners.',
    exampleSentences: [
      { target: '这件衣服需要干洗。', translation: 'This garment needs to be dry-cleaned.', phonetic: 'Zhè jiàn yīfu xūyào gānxǐ.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 老板，一碗肉丝炒面！少放油，不要味精。\nB: 好嘞！面里要加辣吗？桌上有醋和辣椒油。\nA: 不加辣，我自己加点醋就行。\nB: 没问题，炒面马上出锅！',
    back: 'A: Boss, one shredded pork fried noodles! Light on oil, no MSG.\nB: Right on! Do you want chili in the noodles? Vinegar and chili oil are on the table.\nA: No chili, I\'ll just add a splash of vinegar myself.\nB: No problem, fried noodles coming right out of the wok!',
    phonetic: 'A: Lǎobǎn, yī wǎn ròusī chǎomiàn! Shǎo fàng yóu, bùyào wèijīng.\nB: Hǎo lei! Miàn lǐ yào jiā là ma? Zhuō shàng yǒu cù hé làjiāoyóu.\nA: Bù jiā là, wǒ zìjǐ jiā diǎn cù jiù xíng.\nB: Méi wèntí, chǎomiàn mǎshàng chūguō!',
    grammarNotes: 'Casual food customization: “少放油” (less oil); “味精” (MSG); “香醋” (aromatic black vinegar); “马上出锅” (fresh out of the wok).',
    hint: 'Situation: Ordering customized stir-fried noodles at a street eatery.',
    exampleSentences: [
      { target: '请不要放味精。', translation: 'Please do not add MSG.', phonetic: 'Qǐng bùyào fàng wèijīng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，我去机场，坐几号线地铁最快？\nB: 坐二号线直达，或者坐二号线到龙阳路转磁悬浮。\nA: 磁悬浮票价多少？多长时间能到？\nB: 凭当天机票只要四十块，八分钟就能飙到机场！',
    back: 'A: Master, I\'m heading to the airport, which subway line is fastest?\nB: Take Line 2 directly, or take Line 2 to Longyang Road and transfer to Maglev.\nA: How much is the Maglev ticket? How long does it take?\nB: Only 40 yuan with same-day flight ticket, shoots to the airport in 8 minutes!',
    phonetic: 'A: Shīfu, wǒ qù jīchǎng, zuò jǐ hào xiàn dìtiě zuì kuài?\nB: Zuò èr hào xiàn zhídá, huòzhě zuò èr hào xiàn dào Lóngyáng Lù zhuǎn cíxuánfú.\nA: Cíxuánfú piàojià duōshǎo? Duō cháng shíjiān néng dào?\nB: Píng dàngtiān jīpiào zhǐyào sìshí kuài, bā fēnzhōng jiù néng biāo dào jīchǎng!',
    grammarNotes: 'Urban transport: “直达” (direct/non-stop); “换乘 / 转” (transfer lines); “磁悬浮” (cíxuánfú = Maglev train); “凭机票” (with airline ticket).',
    hint: 'Situation: Getting airport transit directions and Maglev train advice.',
    exampleSentences: [
      { target: '去机场怎么走最快？', translation: 'What\'s the fastest way to get to the airport?', phonetic: 'Qù jīchǎng zěnme zǒu zuì kuài?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 您好，请问这趟105路公交车到人民广场吗？\nB: 到的，请上车扫乘车码，两块钱一位。\nA: 刷支付宝乘车码可以吗？\nB: 可以，对准那个扫码镜头照一下就行。',
    back: 'A: Hello, does this Bus 105 go to People\'s Square?\nB: Yes it does, please board and scan your transit QR code, two yuan per person.\nA: Can I scan the Alipay bus ride transit code?\nB: Yes, just align and scan in front of that camera scanner.',
    phonetic: 'A: Nín hǎo, qǐngwèn zhè tàng yībǎi-líng-wǔ lù gōngjiāochē dào Rénmín Guǎngchǎng ma?\nB: Dào de, qǐng shàngchē sǎo chéngchēmǎ, liǎng kuài qián yī wèi.\nA: Shuā Zhīfùbǎo chéngchēmǎ kěyǐ ma?\nB: Kěyǐ, duìzhǔn nàge sǎomǎ jìngtóu zhào yīxià jiù xíng.',
    grammarNotes: 'Taking city buses: “公交车” (city bus); “乘车码” (transit QR code on Alipay/WeChat); “两块钱一位” (2 yuan per passenger flat fare).',
    hint: 'Situation: Asking bus route destinations and scanning phone transit code.',
    exampleSentences: [
      { target: '这趟车到火车站吗？', translation: 'Does this bus go to the train station?', phonetic: 'Zhè tàng chē dào huǒchēzhàn ma?' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 请问这附近有洗手间吗？\nB: 直走五十米，左手边商场一楼里面有免费卫生间。\nA: 谢谢！需要扫码或者门禁吗？\nB: 不需要，直接推门进去就可以。',
    back: 'A: Excuse me, is there a restroom nearby?\nB: Go straight 50 meters, inside the 1st floor of the mall on your left has free public toilets.\nA: Thank you! Does it require a QR code or access key?\nB: Not needed, you can just push the door and walk right in.',
    phonetic: 'A: Qǐngwèn zhè fùjìn yǒu xǐshǒujiān ma?\nB: Zhí zǒu wǔshí mǐ, zuǒshǒubiān shāngchǎng yī lóu lǐmiàn yǒu miǎnfèi wèishēngjiān.\nA: Xièxiè! Xūyào sǎo mǎ huòzhě ménjìn ma?\nB: Bù xūyào, zhíjiē tuīmén jìnqù jiù kěyǐ.',
    grammarNotes: 'Public restrooms: “洗手间 / 卫生间” (polite restroom terms); “左手边” (on the left-hand side); “推门” (push the door).',
    hint: 'Situation: Asking a pedestrian for the nearest public restroom in a shopping district.',
    exampleSentences: [
      { target: '洗手间在左边。', translation: 'The restroom is on the left.', phonetic: 'Xǐshǒujiān zài zuǒbiān.' }
    ]
  },
  // =========================================================================
  // 30 COLLOQUIAL EVERYDAY DIALOGUES: THANK YOU & AGREEING IN REAL LIFE
  // (日常极简高频口语：花式感谢与地道赞同表达)
  // =========================================================================

  // --- PART A: WAYS OF SAYING THANK YOU & RESPONDING (1-15) ---
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 哥们儿，你的雨伞借我用一下可以吗？\nB: 拿去吧，正好我还有一把。\nA: 太给力了，多亏你了！\nB: 嗨，小事一桩！',
    back: 'A: Bro, can I borrow your umbrella for a sec?\nB: Take it, I happen to have an extra one anyway.\nA: You\'re awesome / That\'s huge, thanks to you!\nB: Ugh, it\'s nothing / no biggie!',
    phonetic: 'A: Gēmenr, nǐ de yǔsǎn jiè wǒ yòng yīxià kěyǐ ma?\nB: Ná qù ba, zhènghǎo wǒ hái yǒu yī bǎ.\nA: Tài gěilì le, duōkuī nǐ le!\nB: Hāi, xiǎoshì yī zhuāng!',
    grammarNotes: '“多亏你了” (duōkuī nǐ le = thanks to you / you saved the day); “太给力了” (tài gěilì le = super helpful / awesome); “小事一桩” (xiǎoshì yī zhuāng = a piece of cake / no biggie).',
    hint: 'Situation: Expressing heartfelt gratitude when someone lends an umbrella in the rain.',
    exampleSentences: [
      { target: '多亏你了！', translation: 'Thanks to you! / You saved the day!', phonetic: 'Duōkuī nǐ le!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 师傅，帮我抬一下这个箱子好吗？太重了。\nB: 行，一二三，起！放到这儿行吗？\nA: 辛苦辛苦，麻烦您了！\nB: 没事儿，不麻烦。',
    back: 'A: Master, help me lift this heavy box please? It\'s too heavy.\nB: Sure, one two three, lift! Is putting it here okay?\nA: Thank you for your hard work, sorry for troubling you!\nB: It\'s nothing, no trouble at all.',
    phonetic: 'A: Shīfu, bāng wǒ tái yīxià zhège xiāngzi hǎo ma? Tài zhòng le.\nB: Xíng, yī èr sān, qǐ! Fàng dào zhèr xíng ma?\nA: Xīnkǔ xīnkǔ, máfan nín le!\nB: Méishìr, bù máfan.',
    grammarNotes: '“辛苦辛苦” (xīnkǔ xīnkǔ) is the everyday courteous way to thank physical workers, drivers, delivery staff, and cleaners; paired with “麻烦您了” (sorry to trouble you).',
    hint: 'Situation: Thanking someone for helping carry heavy luggage.',
    exampleSentences: [
      { target: '辛苦了，谢谢！', translation: 'Thanks for your hard work, thank you!', phonetic: 'Xīnkǔ le, xièxiè!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这是你在免税店托我带的面霜，给你！\nB: 哇，太贴心了，费心了啊！\nA: 顺手的事儿，跟我客气啥。',
    back: 'A: Here is the face cream you asked me to bring from duty-free, for you!\nB: Wow, so thoughtful of you, thanks for going to the trouble!\nA: It was right on my way, why stand on ceremony with me.',
    phonetic: 'A: Zhè shì nǐ zài miǎnshuìdiàn tuō wǒ dài de miànshuāng, gěi nǐ!\nB: Wa, tài tiēxīn le, fèixīn le a!\nA: Shùnshǒu de shìr, gēn wǒ kèqì shá.',
    grammarNotes: '“费心了” (fèixīn le = thank you for taking the trouble/thoughtfulness); “太贴心了” (so considerate); “顺手的事儿” (no trouble, easily done on the way).',
    hint: 'Situation: Thanking a friend for bringing an item from abroad.',
    exampleSentences: [
      { target: '让你费心了。', translation: 'Sorry to have put you to so much trouble.', phonetic: 'Ràng nǐ fèixīn le.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你的电脑我帮你清理完病毒了，现在快多了。\nB: 天哪，太感谢了，帮了大忙了！\nA: 举手之劳，随时找我！',
    back: 'A: I finished cleaning the virus from your computer, it\'s much faster now.\nB: Goodness, thank you so much, that was a huge help!\nA: Just a lift of the hand / glad to help, hit me up anytime!',
    phonetic: 'A: Nǐ de diànnǎo wǒ bāng nǐ qīnglǐ wán bìngdú le, xiànzài kuài duō le.\nB: Tiān na, tài gǎnxiè le, bāng le dàmáng le!\nA: Jǔshǒuzhīláo, suíshí zhǎo wǒ!',
    grammarNotes: '“帮了大忙了” (bāng le dàmáng le = helped in a huge way); “举手之劳” (jǔshǒuzhīláo = a mere lift of the hand / effortless favor).',
    hint: 'Situation: Expressing big gratitude when a friend fixes your laptop.',
    exampleSentences: [
      { target: '你帮了我一个大忙！', translation: 'You did me a huge favor!', phonetic: 'Nǐ bāng le wǒ yī gè dàmáng!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 今天下大雨，我顺路开车送你回家吧。\nB: 哎呀，那真是太不好意思了！\nA: 上车吧，别淋感冒了。\nB: 真是太谢谢你了！',
    back: 'A: It\'s pouring rain today, I\'ll drive you home on my way.\nB: Oh dear, that really makes me feel so shy / indebted to you!\nA: Get in the car, don\'t get drenched and catch cold.\nB: Really thank you so very much!',
    phonetic: 'A: Jīntiān xià dàyǔ, wǒ shùnlù kāichē sòng nǐ huíjiā ba.\nB: Àiyā, nà zhēnshì tài bù hǎoyìsi le!\nA: Shàngchē ba, bié lín gǎnmào le.\nB: Zhēnshì tài xièxiè nǐ le!',
    grammarNotes: 'Polite Chinese psychology: “太不好意思了” (tài bù hǎoyìsi le) is commonly said instead of just "thank you" to express that you feel slightly embarrassed by someone\'s immense kindness.',
    hint: 'Situation: Accepting a generous ride in the rain.',
    exampleSentences: [
      { target: '真是不好意思！', translation: 'I\'m really quite embarrassed (to receive such kindness)!', phonetic: 'Zhēnshì bù hǎoyìsi!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 给你带了一杯冰美式，加浓的。\nB: 哇塞，知我者莫若你也！谢啦！\nA: 趁冰还没化快喝吧。',
    back: 'A: Brought you an iced Americano, extra shot.\nB: Woah, no one knows me better than you! Thanks a bunch!\nA: Drink it up quickly before the ice melts.',
    phonetic: 'A: Gěi nǐ dài le yībēi bīng měishì, jiānóng de.\nB: Wasài, zhī wǒ zhě mò ruò nǐ yě! Xiè la!\nA: Chèn bīng hái méi huà kuài hē ba.',
    grammarNotes: 'Casual friendly thanks: “谢啦” (xiè la = thanks a bunch / cheers); humorous idiom: “知我者莫若你也” (nobody understands me like you do!).',
    hint: 'Situation: Thanking a close coworker for bringing your favorite coffee.',
    exampleSentences: [
      { target: '谢啦，兄弟！', translation: 'Thanks a lot, brother!', phonetic: 'Xiè la, xiōngdi!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你落下的门禁卡我替你收在前台了。\nB: 哎呀妈呀，我找半天了，太感谢了！\nA: 小事一桩，下次可别粗心了。\nB: 好的好的，记住了！',
    back: 'A: The access card you left behind, I kept it for you at the front desk.\nB: Oh my goodness, I\'ve been searching everywhere, thank you so much!\nA: Little thing, don\'t be careless next time.\nB: Yes yes, I\'ll remember!',
    phonetic: 'A: Nǐ làxià de ménjìnkǎ wǒ tì nǐ shōu zài qiántái le.\nB: Àiyā mā ya, wǒ zhǎo bàn tiān le, tài gǎnxiè le!\nA: Xiǎoshì yī zhuāng, xià cì kě bié cūxīn le.\nB: Hǎo de hǎo de, jì zhù le!',
    grammarNotes: 'Exclamations: “哎呀妈呀” (àiyā mā ya = oh my goodness/momma); “落下” (làxià = leave behind/forget); “找半天” (searched for ages).',
    hint: 'Situation: Relief when someone retrieves your lost access badge.',
    exampleSentences: [
      { target: '找了半天！', translation: 'Searched for ages!', phonetic: 'Zhǎo le bàn tiān!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 谢谢你今天大老远跑过来帮我搬家！\nB: 咱俩这关系，见外了不是？\nA: 晚上必须请你吃顿好的！\nB: 哈哈，那我可就不客气了！',
    back: 'A: Thank you for traveling all this long way to help me move house today!\nB: With our relationship, isn\'t saying thanks treating me like an outsider?\nA: Tonight I must treat you to a feast!\nB: Haha, then I won\'t be polite / I\'ll gladly accept!',
    phonetic: 'A: Xièxiè nǐ jīntiān dà lǎoyuǎn pǎo guòlái bāng wǒ bānjiā!\nB: Zán liǎ zhè guānxì, jiànwài le bù shì?\nA: Wǎnshang bìxū qǐng nǐ chī dùn hǎo de!\nB: Hāhā, nà wǒ kě jiù bù kèqì le!',
    grammarNotes: '“见外了” (jiànwài le = acting like strangers / treating me like an outsider); “大老远” (from so far away); “吃顿好的” (have a delicious feast).',
    hint: 'Situation: Rebuffing formal thanks among deep friends after moving house.',
    exampleSentences: [
      { target: '别见外！', translation: 'Don\'t treat me like an outsider / Don\'t be a stranger!', phonetic: 'Bié jiànwài!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 阿姨，您掉了手套！\nB: 哎哟，小伙子，太谢谢你了，心真好！\nA: 您客气了，天冷快戴上吧。',
    back: 'A: Auntie, you dropped your glove!\nB: Oh my, young man, thank you so much, you have such a kind heart!\nA: You\'re being too polite, it\'s cold, hurry and put it on.',
    phonetic: 'A: Āyí, nín diào le shǒutào!\nB: Àiyō, xiǎohuǒzi, tài xièxiè nǐ le, xīn zhēn hǎo!\nA: Nín kèqì le, tiān lěng kuài dài shàng ba.',
    grammarNotes: 'Street politeness: “小伙子” (young man / lad); “心真好” (have a good heart); “您客气了” (polite reply to elders).',
    hint: 'Situation: Returning a dropped item to an elderly stranger on the street.',
    exampleSentences: [
      { target: '您太客气了！', translation: 'You are being far too polite!', phonetic: 'Nín tài kèqì le!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 今天的打车费我已经付过了。\nB: 哎，怎么又让你破费了！\nA: 没事儿，没多少钱。\nB: 下回一定得我来！',
    back: 'A: I already paid for today\'s taxi fare.\nB: Ah, why did you let yourself spend money again!\nA: It\'s nothing, not much money.\nB: Next time it definitely has to be my turn!',
    phonetic: 'A: Jīntiān de dǎchēfèi wǒ yǐjīng fù guò le.\nB: Āi, zěnme yòu ràng nǐ pòfèi le!\nA: Méishìr, méi duōshǎo qián.\nB: Xià huí yīdìng děi wǒ lái!',
    grammarNotes: '“破费” (pòfèi = to spend money / incur expense on my behalf; polite traditional phrase); “打车费” (taxi fare).',
    hint: 'Situation: Courteous protest when someone pays the cab fare.',
    exampleSentences: [
      { target: '又让您破费了。', translation: 'Made you spend money on me again.', phonetic: 'Yòu ràng nín pòfèi le.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 同学，借用一下橡皮擦。\nB: 给你。\nA: 谢了哈！\nB: 没事儿。',
    back: 'A: Classmate, may I borrow your eraser for a second.\nB: Here you go.\nA: Thanks a lot!\nB: No problem.',
    phonetic: 'A: Tóngxué, jièyòng yīxià xiàngpícā.\nB: Gěi nǐ.\nA: Xiè le hā!\nB: Méishìr.',
    grammarNotes: '“谢了哈” (xiè le hā) is a relaxed, super casual youth way to say "thanks!" with friendly modal particle “哈”.',
    hint: 'Situation: Quick classroom exchange borrowing stationery.',
    exampleSentences: [
      { target: '谢了哈！', translation: 'Thanks a bunch!', phonetic: 'Xiè le hā!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 饭菜都合胃口吗？不够再加菜！\nB: 已经吃得特别饱了，受累了受累了！\nA: 喜欢吃就经常来家里坐坐。',
    back: 'A: Did the dishes suit your taste? If not enough we can add more!\nB: I\'m already super stuffed, thank you for your hard work / you went to so much trouble!\nA: If you like it, come by the house to hang out often.',
    phonetic: 'A: Fàncài dōu hé wèikǒu ma? Bùgòu zài jiā cài!\nB: Yǐjīng chī de tèbié bǎo le, shòulèi le shòulèi le!\nA: Xǐhuan chī jiù jīngcháng lái jiālǐ zuòzuo.',
    grammarNotes: '“受累了” (shòulèi le = you worked so hard / suffered fatigue for me; northern colloquial gratitude for host cooking or hard service).',
    hint: 'Situation: Thanking a dinner host for preparing an elaborate meal.',
    exampleSentences: [
      { target: '让您受累了！', translation: 'Made you work so hard / put you to fatigue!', phonetic: 'Ràng nín shòulèi le!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 快进屋，外面雪太大了，喝口热茶暖和暖和。\nB: 太感激了，正冻得直哆嗦呢！\nA: 暖气开着呢，先烤烤火。',
    back: 'A: Quick, come inside, the snow outside is too heavy, drink some hot tea to warm up.\nB: So grateful, I was literally shivering from the cold!\nA: The heating is on, warm yourself up first.',
    phonetic: 'A: Kuài jìn wū, wàimiàn xuě tài dà le, hē kǒu rèchá nuǎnhuo nuǎnhuo.\nB: Tài gǎnjī le, zhèng dòng de zhí duōsuo ne!\nA: Nuǎnqì kāi zhe ne, xiān kǎo kǎo huǒ.',
    grammarNotes: '“太感激了” (tài gǎnjī le = deeply grateful); “暖和暖和” (nuǎnhuo nuǎnhuo = warm up); “直哆嗦” (shivering constantly).',
    hint: 'Situation: Receiving warm hospitality on a freezing snowy day.',
    exampleSentences: [
      { target: '感激不尽！', translation: 'Cannot thank you enough!', phonetic: 'Gǎnjī bù jìn!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你送我的生日礼物我很喜欢，感恩！\nB: 你喜欢就好，我还怕你不合适呢。\nA: 真的特别合身，爱你！\nB: 开心最重要！',
    back: 'A: I really love the birthday present you gave me, so grateful / thankful!\nB: As long as you like it, I was worried it wouldn\'t fit you.\nA: It fits so well, love you!\nB: Being happy is what matters most!',
    phonetic: 'A: Nǐ sòng wǒ de shēngrì lǐwù wǒ hěn xǐhuan, gǎn-ēn!\nB: Nǐ xǐhuan jiù hǎo, wǒ hái pà nǐ bù héshì ne.\nA: Zhēnde tèbié héshēn, ài nǐ!\nB: Kāixīn zuì zhòngyào!',
    grammarNotes: 'Youth text slang: “感恩” (gǎn-ēn = grateful / blessed, very common in WeChat texts); “合身” (héshēn = fit clothes well).',
    hint: 'Situation: Texting appreciation for a thoughtful birthday gift.',
    exampleSentences: [
      { target: '感恩有你！', translation: 'Grateful to have you!', phonetic: 'Gǎn-ēn yǒu nǐ!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 路上堵车耽误了半小时，谢谢大家等我！\nB: 没关系没关系，人到了就好，快坐！\nA: 实在抱歉！\nB: 别往心里去，点菜吧！',
    back: 'A: Traffic jam delayed me half an hour, thank you everyone for waiting for me!\nB: No problem at all, as long as you arrived safe, come sit!\nA: Really sorry!\nB: Don\'t take it to heart, let\'s order food!',
    phonetic: 'A: Lùshang dǔchē dānwù le bàn xiǎoshí, xièxiè dàjiā děng wǒ!\nB: Méi guānxi méi guānxi, rén dào le jiù hǎo, kuài zuò!\nA: Shízài bàoqiàn!\nB: Bié wǎng xīn lǐ qù, diǎn cài ba!',
    grammarNotes: 'Group etiquette: “耽误” (dānwù = delay/take up time); “别往心里去” (bié wǎng xīn lǐ qù = don\'t take it to heart / don\'t stress over it).',
    hint: 'Situation: Apologizing and thanking friends after arriving late due to traffic.',
    exampleSentences: [
      { target: '别往心里去。', translation: 'Don\'t take it to heart.', phonetic: 'Bié wǎng xīn lǐ qù.' }
    ]
  },

  // --- PART B: COLLOQUIAL WAYS OF AGREEING & CONFIRMING (16-30) ---
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这家火锅店味道确实地道，食材特别新鲜。\nB: 可不是嘛！我每次来都得排一个小时队。\nA: 下次咱们早点来。\nB: 赞成！',
    back: 'A: The flavor of this hotpot place is indeed authentic, ingredients are super fresh.\nB: Exactly! / You can say that again! Every time I come I have to wait in line for an hour.\nA: Next time let\'s come earlier.\nB: Agreed / In favor!',
    phonetic: 'A: Zhè jiā huǒguōdiàn wèidao quèshí dìdao, shícái tèbié xīnxian.\nB: Kě bù shì ma! Wǒ měi cì lái dōu děi pái yī gè xiǎoshí duì.\nA: Xià cì zánmen zǎodiǎn lái.\nB: Zànchéng!',
    grammarNotes: '“可不是嘛” (kě bù shì ma = exactly! / isn\'t that the truth! / tell me about it!); “赞成” (zànchéng = agreed / I approve).',
    hint: 'Situation: Strong enthusiastic agreement while enjoying great food.',
    exampleSentences: [
      { target: '可不是嘛！', translation: 'Tell me about it! / Exactly!', phonetic: 'Kě bù shì ma!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 我觉得学汉语多开口练说话是进步最快的。\nB: 谁说不是呢！光学语法不张嘴根本不行。\nA: 那咱们以后天天互相练习。\nB: 没毛病，就这么办！',
    back: 'A: I feel that speaking out loud a lot is the fastest way to improve in Chinese.\nB: Who says it isn\'t! / Exactly! Just studying grammar without opening your mouth doesn\'t work at all.\nA: Then let\'s practice with each other every day from now on.\nB: Flawless / No issue at all, let\'s do it that way!',
    phonetic: 'A: Wǒ juéde xué Hànyǔ duō kāikǒu liàn shuōhuà shì jìnbù zuì kuài de.\nB: Shuí shuō bù shì ne! Guāng xué yǔfǎ bù zhāngzuǐ gēnběn bù xíng.\nA: Nà zánmen yǐhòu tiāntiān hùxiāng liànxí.\nB: Méi máobìng, jiù zhème bàn!',
    grammarNotes: '“谁说不是呢” (shuí shuō bù shì ne = who could say otherwise? / totally agree!); “没毛病” (méi máobìng = flawless / zero problems / 100% on point).',
    hint: 'Situation: Passionate agreement on language learning philosophy.',
    exampleSentences: [
      { target: '没毛病！', translation: 'Spot on! / No problem at all!', phonetic: 'Méi máobìng!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 今天太阳这么好，下午不如去公园散散步？\nB: 好主意！我也正想出门透透气呢。\nA: 那两点在公园南门见？\nB: 成，两点见！',
    back: 'A: The sun is so nice today, how about we go for a stroll in the park this afternoon?\nB: Great idea! I was just wanting to go out and get some fresh air too.\nA: Then see you at the park\'s South Gate at 2:00?\nB: Done deal / Alright, see you at two!',
    phonetic: 'A: Jīntiān tàiyáng zhème hǎo, xiàwǔ bùrú qù gōngyuán sànsàn bù?\nB: Hǎo zhǔyi! Wǒ yě zhèng xiǎng chūmén tòutòu qì ne.\nA: Nà liǎng diǎn zài gōngyuán nánmén jiàn?\nB: Chéng, liǎng diǎn jiàn!',
    grammarNotes: '“成” (chéng = done / agreed / alright; super concise Northern colloquial confirmation); “好主意” (great idea); “透透气” (get some fresh air).',
    hint: 'Situation: Approving an afternoon walk plan with concise agreement.',
    exampleSentences: [
      { target: '成，没问题！', translation: 'Deal, no problem!', phonetic: 'Chéng, méi wèntí!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这部电影的特效和配乐真是绝了。\nB: 可太对了！尤其是结尾那一段，我都看哭了。\nA: 导演水准确实高。\nB: 确实，实至名归。',
    back: 'A: The visual effects and soundtrack of this movie were truly out of this world.\nB: So true! / You are so right! Especially that ending part, I even cried watching it.\nA: The director\'s caliber is indeed high.\nB: Indeed, well-deserved reputation.',
    phonetic: 'A: Zhè bù diànyǐng de tèxiào hé pèiyuè zhēnshì jué le.\nB: Kě tài duì le! Yóuqí shì jiéwěi nà yī duàn, wǒ dōu kàn kū le.\nA: Dǎoyǎn shuǐzhǔn quèshí gāo.\nB: Quèshí, shí zhì míng guī.',
    grammarNotes: '“可太对了” (kě tài duì le = couldn\'t be more right!); “确实” (quèshí = indeed / certainly); “实至名归” (fame matches reality / well deserved).',
    hint: 'Situation: Emphatically agreeing on a movie review.',
    exampleSentences: [
      { target: '确实是这样。', translation: 'Indeed it is like this.', phonetic: 'Quèshí shì zhèyàng.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 咱们先去超市买零食，再去唱歌，怎么样？\nB: 妥了！完全同意你的安排。\nA: 那你开车还是我开车？\nB: 坐地铁吧，周末商场停车位太难找了。\nA: 有道理，听你的！',
    back: 'A: Let\'s go to the supermarket first to buy snacks, then go karaoke, what do you think?\nB: Settled / Perfect! I completely agree with your arrangement.\nA: Then are you driving or am I driving?\nB: Let\'s take the subway, mall parking is too hard to find on weekends.\nA: Makes sense, I\'ll follow your lead!',
    phonetic: 'A: Zánmen xiān qù chāoshì mǎi língshí, zài qù chànggē, zěnmeyàng?\nB: Tuǒ le! Wánquán tóngyì nǐ de ānpái.\nA: Nà nǐ kāichē háishì wǒ kāichē?\nB: Zuò dìtiě ba, zhōumò shāngchǎng tíngchēwèi tài nán zhǎo le.\nA: Yǒu dàolǐ, tīng nǐ de!',
    grammarNotes: 'Agreement phrases: “妥了” (settled); “完全同意” (completely agree); “有道理” (makes sense); “听你的” (I\'ll listen to you / go with your choice).',
    hint: 'Situation: Coordinating weekend entertainment smoothly.',
    exampleSentences: [
      { target: '听你的！', translation: 'I\'ll follow your lead / Whatever you say!', phonetic: 'Tīng nǐ de!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 天气预报说傍晚有雷阵雨，带把伞以防万一吧。\nB: 必须的！有备无患嘛。\nA: 我包里放了一把折叠伞。\nB: 靠谱！',
    back: 'A: Weather forecast says thundershowers in the evening, bring an umbrella just in case.\nB: Absolutely! / Must do! Better safe than sorry.\nA: I put a folding umbrella in my bag.\nB: Reliable / You can be counted on!',
    phonetic: 'A: Tiānqì yùbào shuō bàngwǎn yǒu léizhènyǔ, dài bǎ sǎn yǐ fáng wànyī ba.\nB: Bìxū de! Yǒu bèi wú huàn ma.\nA: Wǒ bāo lǐ fàng le yī bǎ zhédiésǎn.\nB: Kàopǔ!',
    grammarNotes: '“必须的” (bìxū de = absolutely / of course / a must!); “靠谱” (kàopǔ = dependable / reliable); “以防万一” (just in case); “有备无患” (preparedness prevents peril).',
    hint: 'Situation: Confirming precautions before leaving the house.',
    exampleSentences: [
      { target: '必须的！', translation: 'Absolutely! / You bet!', phonetic: 'Bìxū de!' },
      { target: '你太靠谱了！', translation: 'You are so reliable!', phonetic: 'Nǐ tài kàopǔ le!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 这道题的答案算出来是四十二，你算的是多少？\nB: 我也是四十二！英雄所见略同啊。\nA: 哈哈，看来咱们都没算错。',
    back: 'A: The answer calculated for this math problem is 42, what did you calculate?\nB: Mine is 42 as well! Great minds think alike.\nA: Haha, looks like neither of us made a calculation error.',
    phonetic: 'A: Zhè dào tí de dá-àn suàn chūlái shì sìshí-èr, nǐ suàn de shì duōshǎo?\nB: Wǒ yě shì sìshí-èr! Yīngxióng suǒ jiàn lüè tóng a.\nA: Hāhā, kànlái zánmen dōu méi suàn cuò.',
    grammarNotes: '“英雄所见略同” (yīngxióng suǒ jiàn lüè tóng = great minds think alike; literally heroes\' views are broadly identical).',
    hint: 'Situation: Comparing problem sets and laughing at identical conclusions.',
    exampleSentences: [
      { target: '英雄所见略同！', translation: 'Great minds think alike!', phonetic: 'Yīngxióng suǒ jiàn lüè tóng!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 咱们今天就讨论到这儿，明天再继续改方案？\nB: 没问题，今天大家都辛苦了，早点休息吧。\nA: 好的，大家辛苦！',
    back: 'A: Shall we wrap up discussion here for today and continue revising the plan tomorrow?\nB: No problem, everyone worked hard today, get some rest early.\nA: Alright, thanks everyone for your hard work!',
    phonetic: 'A: Zánmen jīntiān jiù tǎolùn dào zhèr, míngtiān zài jìxù gǎi fāng-àn?\nB: Méi wèntí, jīntiān dàjiā dōu xīnkǔ le, zǎodiǎn xiūxi ba.\nA: Hǎo de, dàjiā xīnkǔ!',
    grammarNotes: 'Workplace consensus: “就讨论到这儿” (wrap up discussion here); “没问题” (no problem); “辛苦了” (thank you for your efforts).',
    hint: 'Situation: Ending a team group project meeting amicably.',
    exampleSentences: [
      { target: '今天就到这里吧。', translation: 'Let\'s end here for today.', phonetic: 'Jīntiān jiù dào zhèlǐ ba.' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 你觉得这件白色的衣服好看，还是黑色的好看？\nB: 毫无疑问，绝对是白色的更有气质！\nA: 我也是这么想的，那就买白色的！',
    back: 'A: Do you think this white garment looks better, or the black one?\nB: Without a doubt, definitely the white one has way more elegance / aura!\nA: I was thinking the exact same thing, then white it is!',
    phonetic: 'A: Nǐ juéde zhè jiàn báisè de yīfu hǎokàn, háishì hēisè de hǎokàn?\nB: Háo wú yíwèn, juéduì shì báisè de gèng yǒu qìzhì!\nA: Wǒ yě shì zhème xiǎng de, nà jiù mǎi báisè de!',
    grammarNotes: '“毫无疑问” (háo wú yíwèn = without a shadow of a doubt); “绝对” (juéduì = absolutely); “我也是这么想的” (I thought so too).',
    hint: 'Situation: Strong unanimous agreement when choosing clothes.',
    exampleSentences: [
      { target: '毫无疑问！', translation: 'Without a doubt!', phonetic: 'Háo wú yíwèn!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 无论遇到什么困难，咱们团队都要齐心协力。\nB: 那必须的，咱们可是铁打的搭档！\nA: 加油，一定能赢！\nB: 冲！',
    back: 'A: No matter what difficulty we face, our team must pull together with one heart.\nB: That is an absolute must, we are ironclad partners!\nA: Let\'s go, we can definitely win!\nB: Charge / Let\'s do this!',
    phonetic: 'A: Wúlùn yù dào shénme kùnnán, zánmen tuánduì dōu yào qíxīn-xiélì.\nB: Nà bìxū de, zánmen kě shì tiědǎ de dādàng!\nA: Jiāyóu, yīdìng néng yíng!\nB: Chōng!',
    grammarNotes: 'Team morale: “齐心协力” (pull together with one mind); “那必须的” (that\'s an absolute given); “铁打的搭档” (ironclad partners); “冲” (chōng = charge!).',
    hint: 'Situation: Pumping up motivation and consensus before a sports match or project.',
    exampleSentences: [
      { target: '齐心协力！', translation: 'Pull together with one heart!', phonetic: 'Qíxīn-xiélì!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 我建议报告的第一部分简明扼要，把重点数据前置。\nB: 一点儿没错！这样评委一眼就能看懂核心亮点。\nA: 好，那我马上按这个思路调整。',
    back: 'A: I suggest keeping part 1 of the report concise, placing key data points upfront.\nB: Not a bit wrong / Exactly right! That way judges can see core highlights at a glance.\nA: Great, then I will immediately adjust along this line of thought.',
    phonetic: 'A: Wǒ jiànyì bàogào de dì-yī bùfen jiǎnmíng-èyào, bǎ zhòngdiǎn shùjù qiánzhì.\nB: Yīdiǎnr méi cuò! Zhèyàng píngwěi yī yǎn jiù néng kàn dǒng héxīn liàngdiǎn.\nA: Hǎo, nà wǒ mǎshàng àn zhège sīlù tiáozhěng.',
    grammarNotes: '“一点儿没错” (yīdiǎnr méi cuò = not wrong in the slightest / spot on); “简明扼要” (concise to the point); “思路” (line of thought).',
    hint: 'Situation: Constructive agreement on academic or business presentation strategy.',
    exampleSentences: [
      { target: '一点儿没错！', translation: 'Spot on! / Not wrong at all!', phonetic: 'Yīdiǎnr méi cuò!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 咱们今晚自己买菜下厨做饭，比去外面吃健康卫生多了。\nB: 深有同感！外卖吃多了胃都不舒服。\nA: 那下班一起逛菜市场买菜！\nB: 好嘞！',
    back: 'A: Buying groceries and cooking at home ourselves tonight is way healthier and cleaner than eating out.\nB: Deeply share the feeling / I feel the exact same way! Eating too much takeout upsets my stomach.\nA: Then let\'s browse the wet market together after work to buy food!\nB: Right on!',
    phonetic: 'A: Zánmen jīnwǎn zìjǐ mǎi cài xiàchú zuòfàn, bǐ qù wàimiàn chī jiànkāng wèishēng duō le.\nB: Shēn yǒu tónggǎn! Wàimài chī duō le wèi dōu bù shūfu.\nA: Nà xiàbān yīqǐ guàng càishìchǎng mǎi cài!\nB: Hǎo lei!',
    grammarNotes: '“深有同感” (shēn yǒu tónggǎn = deeply share the exact same feeling / resonance); “下厨” (step into the kitchen / cook).',
    hint: 'Situation: Strong mutual consensus on healthy home cooking over takeout.',
    exampleSentences: [
      { target: '深有同感！', translation: 'I deeply feel the same way!', phonetic: 'Shēn yǒu tónggǎn!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 学习语言得每天坚持哪怕十五分钟，细水长流最管用。\nB: 谁说不是呀！三天打鱼两天晒网肯定学不好。\nA: 那就定个每天背十个单词的小目标！\nB: 赞同，贵在坚持！',
    back: 'A: Learning a language requires daily persistence even for 15 minutes, slow and steady stream works best.\nB: Exactly! / Who could disagree! Fishing for three days and drying nets for two definitely won\'t work.\nA: Then let\'s set a small goal of memorizing 10 words every day!\nB: Agreed, value lies in perseverance!',
    phonetic: 'A: Xuéxí yǔyán děi měi tiān jiānchí nǎpà shíwǔ fēnzhōng, xìshuǐ-chángliú zuì guǎnyòng.\nB: Shuí shuō bù shì ya! Sān tiān dǎ yú liǎng tiān shài wǎng kěndìng xué bù hǎo.\nA: Nà jiù dìng gè měi tiān bèi shí gè dāncí de xiǎo mùbiāo!\nB: Zàntóng, guì zài jiānchí!',
    grammarNotes: 'Proverbs of persistence: “细水长流” (thin stream flows long = steady persistence); “三天打鱼两天晒网” (inconsistent effort); “贵在坚持” (the value lies in persistence).',
    hint: 'Situation: Encouraging each other on daily habits and study goals.',
    exampleSentences: [
      { target: '贵在坚持！', translation: 'The key is persistence!', phonetic: 'Guì zài jiānchí!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 刚才那个讲座教授讲得真生动，全是干货！\nB: 确实是，听君一席话，胜读十年书。\nA: 记了好几页笔记呢。\nB: 回头借我复印一份哈！',
    back: 'A: Just now that lecture professor spoke so vividly, filled with solid useful insights!\nB: Indeed, listening to one talk from a master is worth reading ten years of books.\nA: I took several pages of notes.\nB: Lend it to me later to photocopy a copy, please!',
    phonetic: 'A: Gāngcái nàge jiǎngzuò jiàoshòu jiǎng de zhēn shēngdòng, quán shì gānhuò!\nB: Quèshí shì, tīng jūn yī xí huà, shèng dú shí nián shū.\nA: Jì le hǎojǐ yè bǐjì ne.\nB: Huítóu jiè wǒ fùyìn yī fèn hā!',
    grammarNotes: '“干货” (gānhuò = solid, practical, fluff-free substance); “听君一席话，胜读十年书” (classic praise for illuminating discourse).',
    hint: 'Situation: Enthusiastic post-lecture praise with a classmate.',
    exampleSentences: [
      { target: '全是干货！', translation: 'Full of solid, real substance!', phonetic: 'Quán shì gānhuò!' }
    ]
  },
  {
    languageId: 'chinese',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: 周末咱们去爬山散散心，逃离城市喧嚣吧！\nB: 一拍即合！我正觉得憋得慌呢，就这么愉快的决定了！\nA: 那我来负责查登山路线。\nB: 好，我准备水和能量棒！',
    back: 'A: This weekend let\'s go climb a mountain to relax our minds and escape the city noise!\nB: Instant match / Hit it off immediately! I was feeling cooped up and suffocated, happily decided then!\nA: Then I will be responsible for checking the hiking trail.\nB: Good, I\'ll prepare water and energy bars!',
    phonetic: 'A: Zhōumò zánmen qù páshān sànsàn xīn, táolí chéngshì xuānxiāo ba!\nB: Yī pāi jí hé! Wǒ zhèng juéde biē de huāng ne, jiù zhème yúkuài de juédìng le!\nA: Nà wǒ lái fùzé chá dēngshān lùxiàn.\nB: Hǎo, wǒ zhǔnbèi shuǐ hé néngliàngbàng!',
    grammarNotes: '“一拍即合” (yī pāi jí hé = click immediately / instant enthusiastic agreement); “憋得慌” (feeling suffocated/cooped up); “就这么愉快的决定了” (popular modern decision formula: and so it is happily decided!).',
    hint: 'Situation: Spontaneous enthusiastic agreement on an outdoor weekend trip.',
    exampleSentences: [
      { target: '咱们俩真是一拍即合！', translation: 'We two truly hit it off / clicked immediately!', phonetic: 'Zánmen liǎ zhēnshì yī pāi jí hé!' }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 不好意思打扰一下，你今天穿这件大衣真好看，特别有气质！\nB: 谢谢你！你很有眼光哦。\nA: 哈哈，主要还是你底子好！请问怎么称呼你？\nB: 我叫思琪，朋友们叫我琪琪。",
    back: "A: Excuse me for disturbing you, that coat you're wearing today looks really nice, so classy!\nB: Thank you! You have good taste.\nA: Haha, mostly because you look great naturally! How should I address you?\nB: I'm Siqi, my friends call me Qiqi.",
    phonetic: "A: Bù hǎoyìsi dǎrǎo yīxià, nǐ jīntiān chuān zhè jiàn dàyī zhēn hǎokàn, tèbié yǒu qìzhì!\nB: Xièxiè nǐ! Nǐ hěn yǒu yǎnguāng o.\nA: Hāhā, zhǔyào háishì nǐ dǐzi hǎo! Qǐngwèn zěnme chēnghu nǐ?\nB: Wǒ jiào Sīqí, péngyoumen jiào wǒ Qíqi.",
    grammarNotes: "“有气质” (has class/aura/elegance - one of the best compliments in China); “很有眼光” (good taste/eye); “底子好” (naturally good-looking).",
    hint: "Situation: Giving a tasteful fashion compliment and introducing yourselves.",
    exampleSentences: [
      { target: "你今天真有气质！", translation: "You look so classy today!", phonetic: "Nǐ jīntiān zhēn yǒu qìzhì!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 旁边的座位有人吗？我可以坐这儿吗？\nB: 没有人，请坐吧。\nA: 谢谢！我看你也在喝茉莉花茶，这家店招牌就是这个对吧？\nB: 对呀，茶香特别清淡解腻。",
    back: "A: Is anyone sitting in this seat next to you? May I sit here?\nB: Nobody, please sit down.\nA: Thank you! I see you're also having jasmine tea; that's this shop's signature, right?\nB: Yes, the tea aroma is delightfully subtle and refreshing.",
    phonetic: "A: Pángbiān de zuòwèi yǒurén ma? Wǒ kěyǐ zuò zhèr ma?\nB: Méiyǒu rén, qǐng zuò ba.\nA: Xièxiè! Wǒ kàn nǐ yě zài hē mòlìhuā chá, zhè jiā diàn zhāopái jiù shì zhège duì ba?\nB: Duì ya, cháxiāng tèbié qīngdàn jiěnì.",
    grammarNotes: "Classic low-pressure café icebreaker noticing shared drink choice. “解腻” (jiěnì = cuts grease / refreshing).",
    hint: "Situation: Natural conversation opener at a café.",
    exampleSentences: [
      { target: "我可以坐这儿吗？", translation: "May I sit here?", phonetic: "Wǒ kěyǐ zuò zhèr ma?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你的小狗好可爱啊！是什么品种？我可以摸摸它吗？\nB: 它是柴犬，性格很温顺，随便摸！\nA: 哇，毛茸茸的太治愈了！它平时粘人吗？\nB: 超级粘人，跟个跟屁虫似的！",
    back: "A: Your dog is so cute! What breed is it? May I pet it?\nB: He's a Shiba Inu, very gentle, feel free to pet him!\nA: Wow, so fluffy and heartwarming! Is he clingy usually?\nB: Super clingy, just like a little shadow!",
    phonetic: "A: Nǐ de xiǎogǒu hǎo kě'ài a! Shì shénme pǐnzhǒng? Wǒ kěyǐ mōmo tā ma?\nB: Tā shì cháiquǎn, xìnggé hěn wēnshùn, suíbiàn mō!\nA: Wa, máorōngrōng de tài zhìyù le! Tā píngshí niánrén ma?\nB: Chāojí niánrén, gēn gè gēnpìchóng shìde!",
    grammarNotes: "Pets are top conversation starters in China. “治愈” (zhìyù = therapeutic/healing); “粘人” (niánrén = clingy/affectionate); “跟屁虫” (little shadow/tagalong).",
    hint: "Situation: Striking up a conversation with someone walking a cute dog in the park.",
    exampleSentences: [
      { target: "太治愈了！", translation: "So comforting / heartwarming!", phonetic: "Tài zhìyù le!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你笑起来眼睛弯弯的，像月牙一样，很有感染力。\nB: 哪有啊，被你夸得我都不好意思了。\nA: 我说的是大实话，看见你笑心情都变好了！\nB: 嘴巴真甜，你平时都这么会哄女生开心吗？",
    back: "A: When you smile your eyes curve like little crescent moons, so contagious.\nB: No way, you're making me blush from your compliment.\nA: I'm speaking pure truth; seeing you smile instantly improves my mood!\nB: So sweet-talker, are you always this good at making girls happy?",
    phonetic: "A: Nǐ xiào qǐlái yǎnjing wānwān de, xiàng yuèyá yīyàng, hěn yǒu gǎnrǎnlì.\nB: Nǎ yǒu a, bèi nǐ kuā de wǒ dōu bù hǎoyìsi le.\nA: Wǒ shuō de shì dà shíhuà, kànjiàn nǐ xiào xīinqíng dōu biàn hǎo le!\nB: Zuǐba zhēn tián, nǐ píngshí dōu zhème huì hǒng nǚshēng kāixīn ma?",
    grammarNotes: "“眼睛弯弯的像月牙” (cherished Chinese beauty description); “嘴巴真甜” (sweet-tongued / smooth talker); “哄” (hǒng = to cheer up / sweet-talk).",
    hint: "Situation: Playful genuine compliment on someone's smile.",
    exampleSentences: [
      { target: "你嘴巴真甜！", translation: "You have a sweet tongue / smooth talker!", phonetic: "Nǐ zuǐba zhēn tián!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 我觉得你长得特别像一个明星，但我一时想不起名字了。\nB: 真的假的？该不会是哪个搞笑艺人吧？\nA: 绝对不是！是个大美女，反正神韵特别像。\nB: 哈哈，算你会说话，原谅你的套路了！",
    back: "A: I think you look really like a celebrity, but I can't recall the name right now.\nB: Really? It couldn't be some comedy artist, right?\nA: Definitely not! A stunning beauty; anyway your whole vibe and aura resembles her.\nB: Haha, you sure know how to talk, I forgive your smooth pickup routine!",
    phonetic: "A: Wǒ juéde nǐ zhǎng de tèbié xiàng yī gè míngxīng, dàn wǒ yīshí xiǎng bù qǐ míngzì le.\nB: Zhēn de jiǎ de? Gāi bù huì shì nǎge gǎoxiào yìrén ba?\nA: Juéduì bù shì! Shì gè dà měinǚ, fǎnzhèng shényùn tèbié xiàng.\nB: Hāhā, suàn nǐ huì shuōhuà, yuánliàng nǐ de tàolù le!",
    grammarNotes: "“神韵” (vibe / spirit / charm); “算你会说话” (you know what to say / smooth words); “套路” (flirty routine / playbook).",
    hint: "Situation: Flirty celebrity comparison icebreaker.",
    exampleSentences: [
      { target: "算你会说话！", translation: "Credit to you, you know how to talk nicely!", phonetic: "Suàn nǐ huì shuōhuà!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你平时周末都喜欢做些什么？宅在家里还是喜欢户外？\nB: 我比较慢热，喜欢去安静的咖啡馆看看书或者看看展。\nA: 巧了！我也喜欢看艺术展，最近美术馆有个新展特别棒！\nB: 是吗？哪位艺术家的展？",
    back: "A: What do you usually like doing on weekends? Chill at home or outdoor activities?\nB: I'm rather slow-to-warm-up, I like going to quiet cafés to read or visit art exhibits.\nA: What a coincidence! I love art exhibitions too, the art museum has a great new one!\nB: Really? Which artist's exhibit?",
    phonetic: "A: Nǐ píngshí zhōumò dōu xǐhuan zuò xiē shénme? Zhái zài jiālǐ háishì xǐhuan hùwài?\nB: Wǒ bǐjiào mànrè, xǐhuan qù ānjìng de kāfēiguǎn kànkan shū huòzhě kànkan zhǎn.\nA: Qiǎo le! Wǒ yě xǐhuan kàn yìshùzhǎn, zuìjìn měishùguǎn yǒu gè xīn zhǎn tèbié bàng!\nB: Shì ma? Nǎ wèi yìshùjiā de zhǎn?",
    grammarNotes: "“慢热” (slow to warm up / takes time to open up - very common self-description in China); “宅” (homebody); “看展” (visit art/photo exhibitions).",
    hint: "Situation: Discovering weekend hobbies and common ground.",
    exampleSentences: [
      { target: "我是一个比较慢热的人。", translation: "I am someone who is rather slow to warm up.", phonetic: "Wǒ shì yī gè bǐjiào mànrè de rén." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 听你的口音，你应该是南方姑娘吧？\nB: 哇，你耳朵好灵！我是成都的，你怎么猜出来的？\nA: 因为感觉你说话软软糯糯的，很有亲和力。\nB: 哈哈，不过我吃辣椒可是很凶的哦！",
    back: "A: Judging by your accent, you must be a southern girl, right?\nB: Wow, you have sharp ears! I'm from Chengdu, how did you guess?\nA: Because the way you talk feels gentle and soft, very friendly and approachable.\nB: Haha, but when it comes to chili peppers I am fierce!",
    phonetic: "A: Tīng nǐ de kǒuyīn, nǐ yīnggāi shì nánfāng gūniang ba?\nB: Wa, nǐ ěrduo hǎo líng! Wǒ shì Chéngdū de, nǐ zěnme cāi chūlái de?\nA: Yīnwèi gǎnjué nǐ shuōhuà ruǎnruǎn-nuònuò de, hěn yǒu qīnhélì.\nB: Hāhā, bùguò wǒ chī làjiāo kě shì hěn xiōng de o!",
    grammarNotes: "“耳朵好灵” (sharp ears); “软软糯糯” (soft, sweet, and gentle tone); “亲和力” (approachability / warmth); “很凶” (fierce/intense).",
    hint: "Situation: Playful guessing of hometown based on accent and demeanor.",
    exampleSentences: [
      { target: "你很有亲和力。", translation: "You have great warmth and approachability.", phonetic: "Nǐ hěn yǒu qīnhélì." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你平时喜欢听什么风格的音乐？\nB: 我听民谣和独立摇滚比较多，像告五人、万能青年旅店。\nA: 天哪，我也超喜欢告五人的《披星戴月的想你》！\nB: 真的吗？遇到同道中人了，品味一致！",
    back: "A: What style of music do you usually enjoy listening to?\nB: I listen mostly to folk and indie rock, like Accusefive and Omnipotent Youth Society.\nA: Oh gosh, I super love Accusefive's 'Missing You Under the Stars' too!\nB: Really? We're kindred spirits, matching music taste!",
    phonetic: "A: Nǐ píngshí xǐhuan tīng shénme fēnggé de yīnyuè?\nB: Wǒ tīng mínyáo hé dúlì yáogǔn bǐjiào duō, xiàng Gàowǔrén, Wànnéng Qīngnián Lǚdiàn.\nA: Tiān na, wǒ yě chāo xǐhuan Gàowǔrén de Pī Xīng Dài Yuè de Xiǎng Nǐ!\nB: Zhēn de ma? Yù dào tóngdàozhōngrén le, pǐnwèi yīzhì!",
    grammarNotes: "Top modern bands among young Chinese: 告五人, 万青. “同道中人” (kindred spirits / people of same path); “品味一致” (matching taste).",
    hint: "Situation: Bonding over popular Chinese indie bands and music taste.",
    exampleSentences: [
      { target: "遇到同道中人了！", translation: "Found a kindred spirit!", phonetic: "Yù dào tóngdàozhōngrén le!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你的香水味闻起来好清新，前调有种淡淡的柑橘香。\nB: 你鼻子好灵！是柑橘和雪松的香调。\nA: 感觉很适合你的风格，清爽又温柔。\nB: 谢谢，这是我最喜欢的一款香水！",
    back: "A: Your perfume smells so fresh, the top notes have a faint citrus aroma.\nB: You have a sharp nose! It is a blend of citrus and cedarwood.\nA: It really suits your personal style, refreshing yet gentle.\nB: Thank you, this is my absolute favorite perfume!",
    phonetic: "A: Nǐ de xiāngshuǐ wèi wén qǐlái hǎo qīngxīn, qiántiào yǒu zhǒng dàndàn de gānjú xiāng.\nB: Nǐ bízi hǎo líng! Shì gānjú hé xuěsōng de xiāngdiào.\nA: Gǎnjué hěn shìhé nǐ de fēnggé, qīngshuǎng yòu wēnróu.\nB: Xièxiè, zhè shì wǒ zuì xǐhuan de yī kuǎn xiāngshuǐ!",
    grammarNotes: "“前调” (top notes in fragrance); “雪松” (cedarwood); “清爽又温柔” (refreshing yet gentle). Subtly observant compliment.",
    hint: "Situation: Appreciating her perfume in a subtle, refined manner.",
    exampleSentences: [
      { target: "你的香水闻起来很特别。", translation: "Your perfume smells very unique.", phonetic: "Nǐ de xiāngshuǐ wén qǐlái hěn tèbié." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 聊了这么久，感觉跟你聊天特别轻松投缘。\nB: 我也有同感，时间过得好快！\nA: 加个微信吧，下次一起去喝好喝的咖啡？\nB: 好呀，扫我还是我扫你？",
    back: "A: We've talked for so long, chatting with you feels so effortless and in sync.\nB: I feel the exact same way, time flew by so fast!\nA: Let's add WeChat, next time let's get delicious coffee together?\nB: Sure, do you scan me or do I scan you?",
    phonetic: "A: Liáo le zhème jiǔ, gǎnjué gēn nǐ liáotiān tèbié qīngsōng tóuyuán.\nB: Wǒ yě yǒu tónggǎn, shíjiān guò de hǎo kuài!\nA: Jiā gè Wēixìn ba, xià cì yīqǐ qù hē hǎohē de kāfēi?\nB: Hǎo ya, sǎo wǒ háishì wǒ sǎo nǐ?",
    grammarNotes: "“投缘” (tóuyuán = naturally hitting it off / kindred vibes); “同感” (same feeling); “扫我还是我扫你” (standard WeChat exchange phrase).",
    hint: "Situation: Seamlessly moving from a pleasant talk to exchanging WeChat.",
    exampleSentences: [
      { target: "我们俩真投缘！", translation: "We two really click!", phonetic: "Wǒmen liǎ zhēn tóuyuán!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你知道你今天有一个特别大的缺点吗？\nB: 啊？什么缺点？我怎么不知道？\nA: 缺点我！哈哈，开个玩笑，别打我！\nB: 哎呀你好肉麻！土味情话满分！",
    back: "A: Do you know you have a huge flaw today?\nB: Huh? What flaw? How come I don't know?\nA: Lacking me! (Pun: 'quēdiǎn' = flaw / lack). Haha just joking, don't hit me!\nB: Oh my gosh, you are so cheesy! Full marks on cheesy pickup lines!",
    phonetic: "A: Nǐ zhīdào nǐ jīntiān yǒu yī gè tèbié dà de quēdiǎn ma?\nB: A? Shénme quēdiǎn? Wǒ zěnme bù zhīdào?\nA: Quē diǎn wǒ! Hāhā, kāi gè wánxiào, bié dǎ wǒ!\nB: Āiyā nǐ hǎo ròumá! Tǔwèi qínghuà mǎnfēn!",
    grammarNotes: "Classic Chinese pun: “缺点” (quēdiǎn = shortcoming) vs “缺” (lacking) + “点” (a bit) + “我” (me). “土味情话” (cheesy romantic pickup lines); “肉麻” (cheesy / cringe in a funny way).",
    hint: "Situation: Playful cheesy Chinese pickup line to break tension with laughter.",
    exampleSentences: [
      { target: "你好肉麻！", translation: "You're so cheesy / corny!", phonetic: "Nǐ hǎo ròumá!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 别动，你脸上有东西！\nB: 哪里？睫毛掉了吗？\nA: 是有点漂亮，而且超标了！\nB: 讨厌，吓我一跳，你套路怎么一套一套的！",
    back: "A: Don't move, you have something on your face!\nB: Where? Did an eyelash fall?\nA: A bit too pretty, and it exceeds the legal limit!\nB: You're annoying (flirty), scared me! Where did you learn all these routines?!",
    phonetic: "A: Bié dòng, nǐ liǎn shàng yǒu dōngxi!\nB: Nǎlǐ? Jiémáo diào le ma?\nA: Shì yǒudiǎn piàoliang, érqiě chāobiāo le!\nB: Tǎoyàn, xià wǒ yī tiào, nǐ tàolù zěnme yītào-yītào de!",
    grammarNotes: "“超标” (exceeding standard); “讨厌” (tǎoyàn = playful 'you're so mean/silly', used universally when girls are flustered); “一套一套的” (endless series of slick tricks).",
    hint: "Situation: Playful fake speck tease leading into a flirty compliment.",
    exampleSentences: [
      { target: "你真讨厌！", translation: "You're so naughty / teasing! (affectionate)", phonetic: "Nǐ zhēn tǎoyàn!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 外面风好大，你的手怎么这么冰？\nB: 我体质偏寒，一到秋冬就这样。\nA: 那借你放我大衣口袋里暖和暖和？\nB: 算了吧，你是不是想占我便宜？\nA: 冤枉啊，纯粹是雷锋精神助人为乐！",
    back: "A: The wind outside is so strong, why are your hands so cold?\nB: My constitution leans cold; in autumn and winter it's always like this.\nA: Then lend it to put in my coat pocket to warm up?\nB: Forget it, are you trying to take advantage of me?\nA: False accusation! Purely Lei Feng spirit of helping others!",
    phonetic: "A: Wàimiàn fēng hǎo dà, nǐ de shǒu zěnme zhème bīng?\nB: Wǒ tǐzhì piān hán, yī dào qiūdōng jiù zhèyàng.\nA: Nà jiè nǐ fàng wǒ dàyī kǒudài lǐ nuǎnhuo-nuǎnhuo?\nB: Suàn le ba, nǐ shì bù shì xiǎng zhàn wǒ piányi?\nA: Yuānwang a, chúncuì shì Léi Fēng jīngshén zhùrén-wéilè!",
    grammarNotes: "“体质偏寒” (cold body constitution in Traditional Chinese Medicine); “占便宜” (take advantage/get physical); “雷锋精神” (iconic Chinese selfless altruism used humorously).",
    hint: "Situation: Flirty hand-warming banter in cool weather.",
    exampleSentences: [
      { target: "你是不是想占我便宜？", translation: "Are you trying to take advantage of me?", phonetic: "Nǐ shì bù shì xiǎng zhàn wǒ piányi?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 我发现你这个人有点双标哦。\nB: 我怎么双标了？你说清楚！\nA: 平时对别人高冷，笑起来怎么这么甜？\nB: 哼，我哪有高冷，分明是对你才笑的！",
    back: "A: I've noticed you have a bit of a double standard.\nB: How do I have a double standard? Explain clearly!\nA: Normally aloof and cold to others, so why is your smile so sweet?\nB: Hmph, I'm not aloof, obviously I'm smiling only because it's you!",
    phonetic: "A: Wǒ fāxiàn nǐ zhège rén yǒudiǎn shuāngbiāo o.\nB: Wǒ zěnme shuāngbiāo le? Nǐ shuō qīngchu!\nA: Píngshí duì biérén gāolěng, xiào qǐlái zěnme zhème tián?\nB: Hēng, wǒ nǎ yǒu gāolěng, fēnmíng shì duì nǐ cái xiào de!",
    grammarNotes: "“双标” (double standard); “高冷” (aloof and cool/unapproachable); “分明是” (distinctly / obviously). Great push-and-pull banter.",
    hint: "Situation: Accusing playfully of double standards to draw out a sweet confession.",
    exampleSentences: [
      { target: "你怎么这么高冷？", translation: "Why are you so aloof?", phonetic: "Nǐ zěnme zhème gāolěng?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 刚才过马路车那么多，走在我右边，我挡着车流。\nB: 哇，没想到你还挺有绅士风度的嘛。\nA: 那当然，保护漂亮女生是男生的基本职责。\nB: 算你及格，给你加十分！",
    back: "A: Crossing the street just now had so much traffic; walk on my right side, I'll shield the cars.\nB: Wow, didn't expect you to have such gentlemanly manners.\nA: Of course, protecting pretty girls is a man's basic duty.\nB: You pass the test, adding 10 points to your score!",
    phonetic: "A: Gāngcái guò mǎlù chē nàme duō, zǒu zài wǒ yòubiān, wǒ dǎng zhe chēliú.\nB: Wa, méi xiǎngdào nǐ hái tǐng yǒu shēnshì fēngdù de ma.\nA: Nà dāngrán, bǎohù piàoliang nǚshēng shì nánshēng de jīběn zhízé.\nB: Suàn nǐ jígé, gěi nǐ jiā shí fēn!",
    grammarNotes: "Walking on the traffic-facing side of a girl is an essential chivalrous gesture in China. “绅士风度” (gentlemanly manner); “算你及格” (counts as passing).",
    hint: "Situation: Protective body language while crossing the street.",
    exampleSentences: [
      { target: "你很有绅士风度。", translation: "You have wonderful gentlemanly manners.", phonetic: "Nǐ hěn yǒu shēnshì fēngdù." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你看今晚的月色真美。\nB: 哇，你居然知道夏目漱石这个梗？\nA: 不仅知道，而且我是认真的。\nB: 心跳突然漏了半拍，别这么深情看着我……",
    back: "A: Look, the moonlight is so beautiful tonight.\nB: Wow, you actually know Natsume Soseki's hidden reference?\nA: Not only do I know it, but I genuinely mean it.\nB: My heart suddenly skipped half a beat; don't look at me with such deep eyes...",
    phonetic: "A: Nǐ kàn jīnwǎn de yuèsè zhēn měi.\nB: Wa, nǐ jūrán zhīdào Xiàmù Shùshí zhège gěng?\nA: Bùjǐn zhīdào, érqiě wǒ shì rènzhēn de.\nB: Xīntiào tūrán lòu le bàn pāi, bié zhème shēnqíng kàn zhe wǒ……",
    grammarNotes: "“今晚月色真美” is famous East Asian literary code for 'I love you' (attributed to Natsume Soseki). “心跳漏了半拍” (heart skipped a beat); “深情” (deep affectionate devotion).",
    hint: "Situation: Subtle literary romantic confession under the moon.",
    exampleSentences: [
      { target: "今晚的月色真美。", translation: "The moonlight tonight is so beautiful (I love you).", phonetic: "Jīnwǎn de yuèsè zhēn měi." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你今天喷的口红颜色很好看，显得气色特别棒。\nB: 真的吗？是最近很火的豆沙色。\nA: 很衬你的肤色，温温柔柔的，让人忍不住多看两眼。\nB: 谢谢你注意到了，很多男生根本分不清口红色号！",
    back: "A: The lipstick color you wore today is really pretty, makes your complexion look great.\nB: Really? It's the trendy bean-paste red shade.\nA: It really complements your skin tone, so soft and gentle, hard to resist looking twice.\nB: Thanks for noticing! Many guys can't distinguish lipstick shades at all!",
    phonetic: "A: Nǐ jīntiān pēn de kǒuhóng yánsè hěn hǎokàn, xiǎnde qìsè tèbié bàng.\nB: Zhēn de ma? Shì zuìjìn hěn huǒ de dòushā sè.\nA: Hěn chèn nǐ de fūsè, wēnwen-róuróu de, ràng rén rěnbuzhù duō kàn liǎng yǎn.\nB: Xièxiè nǐ zhùyì dào le, hěn duō nánshēng gēnběn fēn bù qīng kǒuhóng sèhào!",
    grammarNotes: "“豆沙色” (bean paste / dusty rose - classic Chinese beauty favorite); “很衬肤色” (complements complexion); “色号” (shade number). High emotional intelligence compliment.",
    hint: "Situation: Complimenting lipstick shade with refined taste.",
    exampleSentences: [
      { target: "这个颜色很衬你。", translation: "This color really suits/complements you.", phonetic: "Zhège yánsè hěn chèn nǐ." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 怎么一直低头喝水？不敢看着我说话吗？\nB: 谁不敢了！明明是你眼神太有攻击性。\nA: 哈哈，对美丽的事物保持专注，是本能反应嘛。\nB: 哎，你真的太能撩了！",
    back: "A: Why keep looking down sipping water? Don't dare look me in the eyes?\nB: Who says I don't dare! Clearly your gaze is too intensely electric.\nA: Haha, maintaining focus on beautiful things is just an instinctive reflex.\nB: Sigh, you really know how to flirt/tease way too well!",
    phonetic: "A: Zěnme yīzhí dītóu hē shuǐ? Bù gǎn kàn zhe wǒ shuōhuà ma?\nB: Shuí bù gǎn le! Míngmíng shì nǐ yǎnshén tài yǒu gōngjīxìng.\nA: Hāhā, duì měilì de shìwù bǎochí zhuānzhù, shì běnnéng fǎnyìng ma.\nB: Āi, nǐ zhēnde tài néng liáo le!",
    grammarNotes: "“撩” (liáo = to flirt / tease / hit on / seduce); “本能反应” (instinctive reflex); “太能撩了” (so good at flirting).",
    hint: "Situation: Playful teasing about intense eye contact across the table.",
    exampleSentences: [
      { target: "你太能撩了！", translation: "You are way too good at flirting!", phonetic: "Nǐ tài néng liáo le!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 如果满分是十分的话，你今天见我对我的第一印象打几分？\nB: 嗯……打八分吧，留两分怕你骄傲！\nA: 那怎样才能把剩下的两分补齐呢？\nB: 看你接下来的表现咯，比如带我去吃好吃的宵夜！",
    back: "A: If full score is 10, what score would you give your first impression of me?\nB: Hmm... 8 points, keeping 2 back in case you get too cocky!\nA: Then how can I make up the remaining 2 points?\nB: Depends on your upcoming performance, like taking me for delicious late-night snacks!",
    phonetic: "A: Rúguǒ mǎnfēn shì shí fēn de huà, nǐ jīntiān jiàn wǒ duì wǒ de dì-yī yìnxiàng dǎ jǐ fēn?\nB: Èn…… dǎ bā fēn ba, liú liǎng fēn pà nǐ jiāo'ào!\nA: Nà zěnyàng cái néng bǎ shèngxià de liǎng fēn bǔqí ne?\nB: Kàn nǐ jiēxiàlái de biǎoxiàn lo, bǐrú dài wǒ qù chī hǎochī de xiāoyè!",
    grammarNotes: "“留两分怕你骄傲” (classic Chinese teacher meme repurposed for playful flirting); “宵夜” (late-night snack / midnight meal).",
    hint: "Situation: Rating date impressions playfully and segueing into late night food.",
    exampleSentences: [
      { target: "怕你骄傲！", translation: "In case you become full of yourself!", phonetic: "Pà nǐ jiāo'ào!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 刚才那首歌放完，突然觉得整个世界只有我们两个人。\nB: 你怎么突然这么感性？\nA: 因为遇到特别的人，时间就会变慢。\nB: 你说话真的好浪漫，听得我都脸红了。",
    back: "A: When that song finished playing just now, I suddenly felt like the whole world was just the two of us.\nB: Why did you get so sentimental all of a sudden?\nA: Because when you meet someone special, time slows down.\nB: You talk so romantically, you made me blush.",
    phonetic: "A: Gāngcái nà shǒu gē fàng wán, tūrán juéde zhěnggè shìjiè zhǐ yǒu wǒmen liǎng gè rén.\nB: Nǐ zěnme tūrán zhème gǎnxìng?\nA: Yīnwèi yù dào tèbié de rén, shíjiān jiù huì biàn màn.\nB: Nǐ shuōhuà zhēn de hǎo làngmàn, tīng de wǒ dōu liǎnhóng le.",
    grammarNotes: "“感性” (sentimental/emotional); “特别的人” (special person); “脸红” (blushing). Deep emotional connection dialogue.",
    hint: "Situation: Sharing a romantic mood change as a slow song plays.",
    exampleSentences: [
      { target: "我都脸红了。", translation: "I'm even blushing.", phonetic: "Wǒ dōu liǎnhóng le." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 这家清吧环境挺有情调的，你平时喝酒多吗？\nB: 不多，一般就喝点甜甜的果味鸡尾酒。\nA: 那我给你点一杯“日落巴黎”？低度数的，颜值很高。\nB: 好啊，听名字就很浪漫！",
    back: "A: This lounge bar has a great atmosphere, do you drink often?\nB: Not much, usually just sweet fruity cocktails.\nA: Then shall I order you a 'Paris Sunset'? Low alcohol and looks gorgeous in photos.\nB: Sounds great, the name alone sounds romantic!",
    phonetic: "A: Zhè jiā qīngba huánjìng tǐng yǒu qíngdiào de, nǐ píngshí hējiǔ duō ma?\nB: Bù duō, yībān jiù hē diǎn tiántián de guǒwèi jīwěijiǔ.\nA: Nà wǒ gěi nǐ diǎn yī bēi Rìluò Bālí? Dī dùshù de, yánzhí hěn gāo.\nB: Hǎo a, tīng míngzì jiù hěn làngmàn!",
    grammarNotes: "“清吧” (lounge / relaxed chill bar without deafening music); “有情调” (romantic atmosphere/mood); “颜值高” (looks gorgeous/photogenic).",
    hint: "Situation: Ordering drinks at a relaxed cocktail lounge.",
    exampleSentences: [
      { target: "这家店很有情调。", translation: "This venue has a very romantic vibe.", phonetic: "Zhè jiā diàn hěn yǒu qíngdiào." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 来，碰一下杯！为了今天能遇到这么迷人的你。\nB: 干杯！你今天嘴抹了蜜吧，这么会夸人。\nA: 只有面对你，灵感才能源源不断。\nB: 喝完这口酒，不许再逗我笑了！",
    back: "A: Come, cheers! To meeting someone as charming as you today.\nB: Cheers! Did you spread honey on your lips today, so good at praising?\nA: Only in front of you does inspiration never stop flowing.\nB: After this sip, you're not allowed to make me giggle anymore!",
    phonetic: "A: Lái, pèng yīxià bēi! Wèile jīntiān néng yù dào zhème mírén de nǐ.\nB: Gānbēi! Nǐ jīntiān zuǐ mǒ le mì ba, zhème huì kuārén.\nA: Zhǐyǒu miànduì nǐ, línggǎn cái néng yuányuán-bùduàn.\nB: Hē wán zhè kǒu jiǔ, bù xǔ zài dòu wǒ xiào le!",
    grammarNotes: "“碰杯” (clink glasses); “嘴抹了蜜” (spread honey on lips = sweet-talker); “源源不断” (incessant flow); “逗我笑” (make me laugh).",
    hint: "Situation: Clinking glasses with a romantic toast.",
    exampleSentences: [
      { target: "为了我们的相遇，干杯！", translation: "To our meeting, cheers!", phonetic: "Wèile wǒmen de xiāngyù, gānbēi!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 这里音乐有点太吵了，说话都要贴着耳朵喊。\nB: 是啊，我都快听不清你说话了。\nA: 我知道附近有一家特别惬意的天台静吧，能看到江景，咱们换个地方？\nB: 好呀，正想换个安静地方好好聊天呢！",
    back: "A: The music here is a bit too loud, have to whisper right in your ear to be heard.\nB: Yeah, I can barely hear what you're saying.\nA: I know a cozy rooftop lounge nearby with river views, shall we move to another spot?\nB: Great, I was just wanting to switch to somewhere quiet to chat properly!",
    phonetic: "A: Zhèlǐ yīnyuè yǒudiǎn tài chǎo le, shuōhuà dōu yào tiē zhe ěrduo hǎn.\nB: Shì a, wǒ dōu kuài tīng bù qīng nǐ shuōhuà le.\nA: Wǒ zhīdào fùjìn yǒu yī jiā tèbié qièyì de tiāntái jìngba, néng kàn dào jiāngjǐng, zánmen huàn gè dìfang?\nB: Hǎo ya, zhèng xiǎng huàn gè ānjìng dìfang hǎohǎo liáotiān ne!",
    grammarNotes: "Key transition phrase for moving venues: “换个地方” (huàn gè dìfang = change locations / go to a 2nd spot); “天台静吧” (rooftop quiet bar); “惬意” (cozy / pleasant).",
    hint: "Situation: Smoothly proposing to transition from a loud club to an intimate lounge.",
    exampleSentences: [
      { target: "咱们换个地方吧？", translation: "Shall we move to another place?", phonetic: "Zánmen huàn gè dìfang ba?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 喝了酒吹吹晚风真舒服，头有没有晕？\nB: 有点微醺，脚步感觉轻飘飘的。\nA: 扶着我的胳膊慢慢走，小心台阶。\nB: 谢谢你这么细心体贴。",
    back: "A: Feeling the evening breeze after drinking feels wonderful; is your head spinning?\nB: A bit tipsy, my steps feel all floaty and light.\nA: Hold onto my arm and walk slowly, watch out for the steps.\nB: Thank you for being so attentive and thoughtful.",
    phonetic: "A: Hē le jiǔ chuīchui wǎnfēng zhēn shūfu, tóu yǒu méiyǒu yūn?\nB: Yǒudiǎn wēixūn, jiǎobù gǎnjué qīngpiāopiāo de.\nA: Fú zhe wǒ de gēbo mànmàn zǒu, xiǎoxīn táijiē.\nB: Xièxiè nǐ zhème xìxīn tǐtiē.",
    grammarNotes: "“微醺” (wēixūn = pleasantly tipsy - extremely popular romantic vibe in China); “细心体贴” (thoughtful and considerate); “扶着我的胳膊” (holding my arm).",
    hint: "Situation: Walking in the breeze while slightly tipsy with gentle physical touch.",
    exampleSentences: [
      { target: "我有点微醺了。", translation: "I am feeling a little tipsy.", phonetic: "Wǒ yǒudiǎn wēixūn le." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 肚子有点饿了吧？我知道附近有一家绝好吃的热气烤串和砂锅粥！\nB: 哇，被你一说我馋虫都勾出来了！\nA: 走，喝完酒吃点热乎的暖胃最舒服。\nB: 那必须安排上，今晚热量彻底放纵！",
    back: "A: Feeling a bit hungry? I know an incredible spot nearby for sizzling skewers and claypot congee!\nB: Wow, hearing you say that made my foodie cravings jump out!\nA: Let's go, having something warm to soothe the stomach after drinks is the best.\nB: Absolutely on the agenda then, total calorie indulgence tonight!",
    phonetic: "A: Dùzi yǒudiǎn è le ba? Wǒ zhīdào fùjìn yǒu yī jiā jué hǎochī de rèqì kǎochuàn hé shāguōzhōu!\nB: Wa, bèi nǐ yī shuō wǒ chánchóng dōu gōu chūlái le!\nA: Zǒu, hē wán jiǔ chī diǎn rèhu de nuǎnwèi zuì shūfu.\nB: Nà bìxū ānpái shàng, jīnwǎn rèliàng chèdǐ fàngzòng!",
    grammarNotes: "“砂锅粥” (claypot congee - classic late night sobering food); “暖胃” (warm stomach); “安排上” (get it arranged); “放纵” (indulge).",
    hint: "Situation: Transitioning to late-night street food and snacks.",
    exampleSentences: [
      { target: "吃点热乎的暖暖胃。", translation: "Eat something warm to soothe the stomach.", phonetic: "Chī diǎn rèhu de nuǎnnuan wèi." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 已经是半夜十二点了，时间怎么过得这么快？\nB: 对呀，感觉才刚跟你见面没多久呢。\nA: 我一点都不想这么早就结束今晚的约会。\nB: 其实……我也是。",
    back: "A: It's already midnight, how did time fly by so fast?\nB: Exactly, feels like we only met just a little while ago.\nA: I don't want to end tonight's date this early at all.\nB: Actually... me neither.",
    phonetic: "A: Yǐjīng shì bànyè shí'èr diǎn le, shíjiān zěnme guò de zhème kuài?\nB: Duì ya, gǎnjué cái gāng gēn nǐ jiànmiàn méi duōjiǔ ne.\nA: Wǒ yīdiǎn dōu bù xiǎng zhème zǎo jiù jiéshù jīnwǎn de yuēhuì.\nB: Qíshí…… wǒ yě shì.",
    grammarNotes: "“其实我也是” (Actually, me too); expressing mutual reluctance to part ways at the end of the evening.",
    hint: "Situation: Expressing mutual reluctance to end the date at midnight.",
    exampleSentences: [
      { target: "时间过得太快了！", translation: "Time went by way too fast!", phonetic: "Shíjiān guò de tài kuài le!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 外面好冷还下着小雨，路边很难打到出租车了。\nB: 是啊，打车软件排队前面还有三十几个人。\nA: 我家就在前面那个街区，走路五分钟，要不先去我那儿避避雨？\nB: 会不会太打扰你呀？\nA: 怎么会！有热茶和暖气，正合适。",
    back: "A: It's so cold outside and drizzling, very hard to hail a taxi curbside.\nB: Yeah, the ride app queue still has over 30 people ahead.\nA: My apartment is right on the next block, a 5-minute walk. How about coming to my place to shelter from the rain first?\nB: Would that be bothering you too much?\nA: How could it! I have hot tea and heating, just right.",
    phonetic: "A: Wàimiàn hǎo lěng hái xià zhe xiǎoyǔ, lùbiān hěn nán dǎ dào chūzūchē le.\nB: Shì a, dǎchē ruǎnjiàn páiduì qiánmiàn hái yǒu sānshí jǐ gè rén.\nA: Wǒ jiā jiù zài qiánmiàn nàge jiēqū, zǒulù wǔ fēnzhōng, yàobù xiān qù wǒ nàr bìbi yǔ?\nB: Huì bù huì tài dǎrǎo nǐ ya?\nA: Zěnme huì! Yǒu rèchá hé nuǎnqì, zhèng héshì.",
    grammarNotes: "Natural, comfortable situational invite: “要不先去我那儿避避雨” (Why not shelter from the rain at my place first); “避雨” (take shelter from rain); “避风头”.",
    hint: "Situation: Natural invitation home due to rain and difficult taxi queues.",
    exampleSentences: [
      { target: "先去我那儿避避雨吧。", translation: "Let's shelter from the rain at my place first.", phonetic: "Xiān qù wǒ nàr bìbi yǔ ba." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 我家里养了一只超级粘人的金渐层猫咪，你要不要去看看？\nB: 真的吗？！我最抵抗不了猫咪了！它凶不凶？\nA: 一点都不凶，特别喜欢趴在客人腿上呼噜呼噜叫。\nB: 哇，那我要去吸猫！走走走！",
    back: "A: I have a super cuddly Golden British Shorthair cat at my home, do you want to see him?\nB: Really?! I have zero resistance against cats! Is he aggressive?\nA: Not aggressive at all, loves curling up on guests' laps and purring.\nB: Wow, then I definitely want to cuddle the cat! Let's go!",
    phonetic: "A: Wǒ jiālǐ yǎng le yī zhī chāojí niánrén de jīnjiàncéng māomī, nǐ yào bù yào qù kànkan?\nB: Zhēn de ma?! Wǒ zuì dǐkàng bù liǎo māomī le! Tā xiōng bù xiōng?\nA: Yīdiǎn dōu bù xiōng, tèbié xǐhuan pā zài kèrén tuǐ shàng hūlu-hūlu jiào.\nB: Wa, nà wǒ yào qù xīmāo! Zǒu zǒu zǒu!",
    grammarNotes: "“吸猫” (xīmāo = 'sniff/cuddle cats' - universally popular youth cultural phrase in China); “金渐层” (Golden shaded British Shorthair); “抵抗不了” (can't resist). The #1 most charming casual invite home.",
    hint: "Situation: Inviting a date home to play with your pet cat ('xīmāo').",
    exampleSentences: [
      { target: "我要去吸猫！", translation: "I want to cuddle the cat!", phonetic: "Wǒ yào qù xīmāo!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 我收藏了一瓶很棒的红酒，家里还有黑胶唱片机，要不要去我那儿听会儿音乐？\nB: 听起来很有格调，但你可别有什么坏心思哦！\nA: 放心，保证是正人君子，纯粹想让你听听我最喜欢的爵士乐。\nB: 哈哈，谅你也不敢！那就上去坐半小时。",
    back: "A: I've collected a bottle of great red wine, and have a vinyl turntable at home, want to come listen to some music at my place?\nB: Sounds very stylish, but don't you have any cheeky intentions!\nA: Rest assured, guarantee I'm a gentleman, purely want you to hear my favorite jazz.\nB: Haha, you wouldn't dare anyway! Let's go up and sit for half an hour.",
    phonetic: "A: Wǒ shǒucáng le yī píng hěn bàng de hóngjiǔ, jiālǐ hái yǒu hēijiāo chàngpiànjī, yào bù yào qù wǒ nàr tīng huìr yīnyuè?\nB: Tīng qǐlái hěn yǒu gédiào, dàn nǐ kě bié yǒu shénme huài xīnsi o!\nA: Fàngxīn, bǎozhèng shì zhèngrén-jūnzǐ, chúncuì xiǎng ràng nǐ tīngting wǒ zuì xǐhuan de juéshìyuè.\nB: Hāhā, liàng nǐ yě bù gǎn! Nà jiù shàngqù zuò bàn xiǎoshí.",
    grammarNotes: "“黑胶唱片机” (vinyl record player); “格调” (class / style); “坏心思” (mischievous / sneaky intentions); “正人君子” (honorable gentleman). Playful boundary testing.",
    hint: "Situation: Inviting home for wine and vinyl music with playful reassurance.",
    exampleSentences: [
      { target: "你可别有什么坏心思哦！", translation: "Don't you have any sneaky intentions!", phonetic: "Nǐ kě bié yǒu shénme huài xīnsi o!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 这么晚了，你一个女孩子打车回家不太安全。\nB: 好像确实有点晚了，路灯都暗了。\nA: 我家有干净的客房，或者我睡沙发，去我那儿歇一晚吧，明天我送你。\nB: 真的吗？会不会太麻烦你了？\nA: 照顾你是我的荣幸，走吧，别犹豫了。",
    back: "A: It's so late, a girl taking a cab home alone isn't very safe.\nB: It does seem pretty late, streetlights have dimmed.\nA: My apartment has a clean guest room, or I can sleep on the sofa; rest at my place tonight, I'll escort you tomorrow.\nB: Really? Wouldn't that trouble you too much?\nA: Taking care of you is my honor, let's go, no need to hesitate.",
    phonetic: "A: Zhème wǎn le, nǐ yī gè nǚháizi dǎchē huíjiā bù tài ānquán.\nB: Hǎoxiàng quèshí yǒudiǎn wǎn le, lùdēng dōu àn le.\nA: Wǒ jiā yǒu gānjìng de kèfáng, huòzhě wǒ shuì shāfā, qù wǒ nàr xiē yī wǎn ba, míngtiān wǒ sòng nǐ.\nB: Zhēn de ma? Huì bù huì tài máfan nǐ le?\nA: Zhàogù nǐ shì wǒ de róngxìng, zǒu ba, bié yóuyù le.",
    grammarNotes: "Gentle, protective offer of hospitality: “别犹豫了” (don't hesitate); “照顾你是我的荣幸” (caring for you is my honor); “客房” (guest room).",
    hint: "Situation: Offering a secure and considerate stay when it's too late to travel.",
    exampleSentences: [
      { target: "照顾你是我的荣幸。", translation: "Taking care of you is my honor.", phonetic: "Zhàogù nǐ shì wǒ de róngxìng." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 请进！换这双软拖鞋吧，是全新的。\nB: 哇，你家里收拾得好干净、好温馨啊！\nA: 哈哈，特意为你准备的！快坐沙发上，我去给你倒杯蜂蜜温水。\nB: 感觉你好会照顾人，很居家暖男呢！",
    back: "A: Please come in! Change into these soft slippers, they're brand new.\nB: Wow, your home is kept so clean and warm and cozy!\nA: Haha, specially prepared for you! Have a seat on the sofa, I'll pour you warm honey water.\nB: I feel like you know how to take care of people, such a domestic caring guy!",
    phonetic: "A: Qǐng jìn! Huàn zhè shuāng ruǎn tuōxié ba, shì quánxīn de.\nB: Wa, nǐ jiālǐ shōushi de hǎo gānjìng, hǎo wēnxīn a!\nA: Hāhā, tèyì wèi nǐ zhǔnbèi de! Kuài zuò shāfā shàng, wǒ qù gěi nǐ dào bēi fēngmì wēnshuǐ.\nB: Gǎnjué nǐ hǎo huì zhàogù rén, hěn jūjiā nuǎnnán ne!",
    grammarNotes: "“温馨” (wēnxīn = warm and cozy); “暖男” (nuǎnnán = warm, attentive, caring guy - highly prized in China); “换拖鞋” (change slippers - mandatory Chinese home etiquette).",
    hint: "Situation: Welcoming her into your apartment with warm hospitality.",
    exampleSentences: [
      { target: "你真是一个暖男！", translation: "You are truly a caring, thoughtful man!", phonetic: "Nǐ zhēn shì yī gè nuǎnnán!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 我把客厅大灯关了，只留这盏落地暖光灯，刺眼吗？\nB: 不刺眼，这种柔柔的光线特别有氛围感。\nA: 放一首老爵士，怎么样？\nB: 感觉整个人都彻底放松下来了。",
    back: "A: I turned off the main living room ceiling light and left just this floor lamp on, is it too bright?\nB: Not blinding at all, this soft light has such an intimate mood and ambiance.\nA: How about putting on some vintage jazz?\nB: I feel my entire body completely relaxing.",
    phonetic: "A: Wǒ bǎ kètīng dàdēng guān le, zhǐ liú zhè zhǎn luòdì nuǎnguāngdēng, cìyǎn ma?\nB: Bù cìyǎn, zhè zhǒng róuróu de guāngxiàn tèbié yǒu fēnwéigǎn.\nA: Fàng yī shǒu lǎo juéshì, zěnmeyàng?\nB: Gǎnjué zhěnggè rén dōu chèdǐ fàngsōng xiàlái le.",
    grammarNotes: "“氛围感” (fēnwéigǎn = ambiance / aesthetic mood / vibe - major trending Chinese keyword); “暖光灯” (warm light lamp); “刺眼” (glaring/blinding).",
    hint: "Situation: Setting the relaxing low-light atmosphere in the living room.",
    exampleSentences: [
      { target: "特别有氛围感！", translation: "It has such a wonderful romantic vibe!", phonetic: "Tèbié yǒu fēnwéigǎn!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 我给你找了一件我干净宽大的棉质T恤当睡衣，可以吗？\nB: 哈哈，穿你的衣服会不会太大了？\nA: 没关系，女生穿大一号的男生T恤超可爱的。\nB: 那我去洗手间卸个妆洗漱一下。",
    back: "A: I found a clean, oversized cotton T-shirt of mine for you to use as sleepwear, is that okay?\nB: Haha, won't wearing your clothes be way too big?\nA: It's fine, girls look super cute wearing an oversized men's T-shirt.\nB: Then I'll head to the bathroom to remove my makeup and wash up.",
    phonetic: "A: Wǒ gěi nǐ zhǎo le yī jiàn wǒ gānjìng kuāndà de miánzhì T-xù dāng shuìyī, kěyǐ ma?\nB: Hāhā, chuān nǐ de yīfu huì bù huì tài dà le?\nA: Méi guānxi, nǚshēng chuān dà yī hào de nánshēng T-xù chāo kě'ài de.\nB: Nà wǒ qù xǐshǒujiān xiè gè zhuāng xǐshù yīxià.",
    grammarNotes: "“卸妆” (xièzhuāng = remove makeup); “洗漱” (xǐshù = wash up / brush teeth); “当睡衣” (use as pajamas). Sharing a cozy oversized shirt.",
    hint: "Situation: Offering comfortable clothes to change into at home.",
    exampleSentences: [
      { target: "女生穿大号T恤很可爱。", translation: "Girls look very cute wearing oversized T-shirts.", phonetic: "Nǚshēng chuān dàhào T-xù hěn kě'ài." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 洗手间里有崭新的毛巾和一次性牙刷，热水器开关我已经帮你调好了。\nB: 你想得太周到了，连一次性牙刷都有！\nA: 照顾贵客当然要全套服务！\nB: 哈哈，那你先去客厅休息，我弄好就出来。",
    back: "A: There are brand new towels and disposable toothbrushes in the bathroom, I already adjusted the water heater.\nB: You are so thoughtful, even had disposable toothbrushes prepared!\nA: Serving an esteemed guest of course requires the full service!\nB: Haha, go rest in the living room first, I'll come out when done.",
    phonetic: "A: Xǐshǒujiān lǐ yǒu zhǎnxīn de máojīn hé yīcìxìng yáshuā, rèshuǐqì kāiguān wǒ yǐjīng bāng nǐ tiáo hǎo le.\nB: Nǐ xiǎng de tài zhōudào le, lián yīcìxìng yáshuā dōu yǒu!\nA: Zhàogù guìkè dāngrán yào quántào fúwù!\nB: Hāhā, nà nǐ xiān qù kètīng xiūxi, wǒ nòng hǎo jiù chūlái.",
    grammarNotes: "“想得太周到了” (thought of everything / extremely attentive); “一次性牙刷” (disposable toothbrush); “热水器” (water heater).",
    hint: "Situation: Offering bathroom toiletries and comfort essentials.",
    exampleSentences: [
      { target: "你想得太周到了！", translation: "You thought of everything!", phonetic: "Nǐ xiǎng de tài zhōudào le!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你的头发还没彻底吹干，吹风机在抽屉里，要我帮你吹吗？\nB: 不用啦，我自己来就好，怎么好意思劳驾你。\nA: 坐好别动，给美女吹头发是我的荣幸！\nB: 哇……你的手法好温柔，好舒服。",
    back: "A: Your hair isn't completely dry yet; the hairdryer is in the drawer, want me to blow-dry it for you?\nB: No need, I can do it myself, how could I trouble you.\nA: Sit tight and don't move; blow-drying a beauty's hair is my honor!\nB: Wow... your touch is so gentle and feels so nice.",
    phonetic: "A: Nǐ de tóufa hái méi chèdǐ chuīgān, chuīfēngjī zài chōuti lǐ, yào wǒ bāng nǐ chuī ma?\nB: Bùyòng la, wǒ zìjǐ lái jiù hǎo, zěnme hǎoyìsi láojià nǐ.\nA: Zuò hǎo bié dòng, gěi měinǚ chuī tóufa shì wǒ de róngxìng!\nB: Wa…… nǐ de shǒufǎ hǎo wēnróu, hǎo shūfu.",
    grammarNotes: "Blow-drying a partner's hair (吹头发) is recognized across China as one of the ultimate romantic gestures. “劳驾” (láojià = trouble you); “手法温柔” (gentle touch).",
    hint: "Situation: Intimately offering to blow-dry her hair.",
    exampleSentences: [
      { target: "我帮你吹头发吧。", translation: "Let me blow-dry your hair for you.", phonetic: "Wǒ bāng nǐ chuī tóufa ba." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 坐沙发上看会儿电影吧，想看浪漫喜剧还是悬疑惊悚？\nB: 看个轻松搞笑的吧，今天工作挺累的，不想动脑筋。\nA: 好，给你盖上小毯子，靠枕垫在后面舒服点。\nB: 谢谢你，靠在你身边感觉好踏实。",
    back: "A: Let's sit on the sofa and watch a movie; romantic comedy or suspense thriller?\nB: Let's watch something light and funny, today at work was tiring, don't want to think hard.\nA: Good, let me tuck this small blanket over you, put the cushion behind your back.\nB: Thank you, leaning next to you feels so comforting and reassuring.",
    phonetic: "A: Zuò shāfā shàng kàn huìr diànyǐng ba, xiǎng kàn làngmàn xǐjù háishì xuányí jīngsǒng?\nB: Kàn gè qīngsōng gǎoxiào de ba, jīntiān gōngzuò tǐng lèi de, bù xiǎng dòng nǎojīn.\nA: Hǎo, gěi nǐ gài shàng xiǎo tǎnzi, kàozhěn diàn zài hòumiàn shūfu diǎn.\nB: Xièxiè nǐ, kào zài nǐ shēnbiān gǎnjué hǎo tàshi.",
    grammarNotes: "“踏实” (tàshi = deeply secure / emotionally grounded / safe); “小毯子” (cozy blanket); “靠在你身边” (leaning by your side).",
    hint: "Situation: Cozying up on the couch under a blanket watching a film.",
    exampleSentences: [
      { target: "感觉好踏实。", translation: "I feel so safe and at ease.", phonetic: "Gǎnjué hǎo tàshi." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 电影看完了，困了吗？眼睛都快睁不开了。\nB: 确实有点犯困了，眼皮在打架。\nA: 那快去睡吧，今晚你睡大床，我睡沙发。\nB: 沙发有点小吧？要不……床挺宽的，各睡一边？\nA: 你确定？那我不客气了哦。",
    back: "A: Movie is finished, sleepy? Your eyes can barely stay open.\nB: Indeed feeling drowsy, my eyelids are fighting each other.\nA: Then go to sleep soon; tonight you take the big bed, I'll sleep on the couch.\nB: Isn't the couch a bit small? How about... the bed is pretty wide, each take one side?\nA: Are you sure? Then I won't be overly formal!",
    phonetic: "A: Diànyǐng kàn wán le, kùn le ma? Yǎnjing dōu kuài zhēng bù kāi le.\nB: Quèshí yǒudiǎn fànkùn le, yǎnpí zài dǎjià.\nA: Nà kuài qù shuì ba, jīnwǎn nǐ shuì dàchuáng, wǒ shuì shāfā.\nB: Shāfā yǒudiǎn xiǎo ba? Yàobù…… chuáng tǐng kuān de, gè shuì yībiān?\nA: Nǐ quèdìng? Nà wǒ bù kèqì le o.",
    grammarNotes: "“眼皮在打架” (eyelids fighting = drooping with sleepiness); “各睡一边” (each take one side of the bed); respectful offer of the sofa giving her the choice.",
    hint: "Situation: Graceful sleeping arrangement discussion at bedtime.",
    exampleSentences: [
      { target: "我的眼皮在打架。", translation: "My eyelids are drooping from tiredness.", phonetic: "Wǒ de yǎnpí zài dǎjià." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 晚安，做个好梦，梦里记得有我哦。\nB: 晚安！今天晚上过得真的很开心。\nA: 我也是，希望以后经常能有这样的夜晚。\nB: 那就看你之后的表现啦，快闭眼睡觉！",
    back: "A: Good night, sweet dreams, remember to have me in your dreams.\nB: Good night! I truly had such a happy evening tonight.\nA: Me too; I hope we can often have nights like this in the future.\nB: Then that will depend on your future performance, now close your eyes and sleep!",
    phonetic: "A: Wǎn'ān, zuò gè hǎo mèng, mèng lǐ jìde yǒu wǒ o.\nB: Wǎn'ān! Jīntiān wǎnshang guò de zhēn de hěn kāixīn.\nA: Wǒ yě shì, xīwàng yǐhòu jīngcháng néng yǒu zhèyàng de yèwǎn.\nB: Nà jiù kàn nǐ zhīhòu de biǎoxiàn la, kuài bìyǎn shuìjiào!",
    grammarNotes: "“做个好梦” (sweet dreams); “梦里记得有我” (remember to have me in your dreams - sweet flirty night sign-off).",
    hint: "Situation: Sweet bedtime exchange and whispering goodnight.",
    exampleSentences: [
      { target: "做个好梦！", translation: "Sweet dreams!", phonetic: "Zuò gè hǎo mèng!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 早安！睡得好吗？\nB: 早！睡得特别香，好久没有睡得这么沉了。\nA: 我煮了现磨咖啡，还做了煎蛋和牛油果吐司，趁热吃。\nB: 天哪，你也太完美了吧！我都要舍不得走了。",
    back: "A: Good morning! Did you sleep well?\nB: Morning! Slept so well, haven't slept this soundly in a long time.\nA: I brewed freshly ground coffee, and made fried eggs and avocado toast; eat while it's hot.\nB: Goodness, you are way too perfect! I'm going to hate having to leave.",
    phonetic: "A: Zǎo'ān! Shuì de hǎo ma?\nB: Zǎo! Shuì de tèbié xiāng, hǎo jiǔ méiyǒu shuì de zhème chén le.\nA: Wǒ zhǔ le xiànmó kāfēi, hái zuò le jiāndàn hé niúyóuguǒ tǔsī, chèn rè chī.\nB: Tiān na, nǐ yě tài wánměi le ba! Wǒ dōu yào shěbude zǒu le.",
    grammarNotes: "“睡得特别香” (slept so soundly/sweetly); “趁热吃” (eat while hot); “舍不得” (shěbude = reluctant to leave / hate to part with).",
    hint: "Situation: Making breakfast the next morning and gentle wake-up conversation.",
    exampleSentences: [
      { target: "我舍不得走。", translation: "I'm reluctant to leave / hate to leave.", phonetic: "Wǒ shěbude zǒu." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 吃完早餐我开车送你回家，路上顺便去买杯你喜欢的奶茶？\nB: 好的，辛苦你啦！\nA: 怎么会辛苦，能陪你多呆一会儿我高兴还来不及呢。\nB: 嘻嘻，那下周末换我请你吃饭！",
    back: "A: After breakfast I'll drive you home; along the way we can grab that bubble tea you like?\nB: Alright, thank you for the trouble!\nA: How could it be trouble? Being able to spend a bit more time with you, I'm overjoyed!\nB: Hehe, then next weekend it's my turn to treat you to dinner!",
    phonetic: "A: Chī wán zǎocān wǒ kāichē sòng nǐ huíjiā, lùshang shùnbiàn qù mǎi bēi nǐ xǐhuan de nǎichá?\nB: Hǎo de, xīnkǔ nǐ la!\nA: Zěnme huì xīnkǔ, néng péi nǐ duō dāi yīhuìr wǒ gāoxìng hái láibují ne.\nB: Xīxī, nà xià zhōumò huàn wǒ qǐng nǐ chīfàn!",
    grammarNotes: "“辛苦你啦” (thank you for your trouble/effort); “高兴还来不及呢” (more than happy to / overjoyed); “换我请你” (my turn to treat you). Secures the next date.",
    hint: "Situation: Escorting her home and seamlessly locking in the next weekend date.",
    exampleSentences: [
      { target: "高兴还来不及呢！", translation: "I'm more than happy to do so!", phonetic: "Gāoxìng hái láibují ne!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你好，打扰一下，请问这附近哪儿有好喝的奶茶？\nB: 前面右拐有一家茶百道和霸王茶姬。\nA: 谢谢你！看你手里这杯好像很好喝，推荐哪个？\nB: 我手里的伯牙绝弦挺好喝的，微糖少冰刚刚好。",
    back: "A: Hello, excuse me, where nearby is there good bubble tea?\nB: Turn right ahead, there is a ChaPanda and a CHAGEE.\nA: Thank you! The one in your hand looks delicious, which do you recommend?\nB: The 'Boya Juexian' in my hand is pretty good, slight sugar and less ice is just right.",
    phonetic: "A: Nǐ hǎo, dǎrǎo yīxià, qǐngwèn zhè fùjìn nǎr yǒu hǎohē de nǎichá?\nB: Qiánmiàn yòuguǎi yǒu yī jiā Chábǎidào hé Bàwángchájī.\nA: Xièxiè nǐ! Kàn nǐ shǒulǐ zhè bēi hǎoxiàng hěn hǎohē, tuījiàn nǎge?\nB: Wǒ shǒulǐ de Bóyá Juéxián tǐng hǎohē de, wēitáng shǎobīng gānggāng hǎo.",
    grammarNotes: "Zero-risk natural opener: asking a local girl for her favorite milk tea recommendation. CHAGEE (霸王茶姬) and ChaPanda are top modern brands.",
    hint: "Step 1: Low-pressure milk tea recommendation opener.",
    exampleSentences: [
      { target: "你推荐哪一个？", translation: "Which one do you recommend?", phonetic: "Nǐ tuījiàn nǎ yī gè?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 其实……我刚才看到你，觉得你特别可爱，很想认识你。\nB: 啊，谢谢你！\nA: 可以加你一个微信吗？改天请你喝杯奶茶。\nB: 可以呀，你扫我的二维码吧。",
    back: "A: Actually... I saw you just now and thought you were really cute, I really wanted to get to know you.\nB: Ah, thank you!\nA: Can I add your WeChat? I'd love to treat you to milk tea another day.\nB: Sure, scan my QR code.",
    phonetic: "A: Qíshí…… wǒ gāngcái kàn dào nǐ, juéde nǐ tèbié kě'ài, hěn xiǎng rènshí nǐ.\nB: A, xièxiè nǐ!\nA: Kěyǐ jiā nǐ yī gè Wēixìn ma? Gǎitiān qǐng nǐ hē bēi nǎichá.\nB: Kěyǐ ya, nǐ sǎo wǒ de èrwéimǎ ba.",
    grammarNotes: "The cleanest direct street approach: “觉得你特别可爱，很想认识你” followed by “加你一个微信” (add your WeChat). Polite, bold, yet respectful.",
    hint: "Step 2: Asking directly and sweetly for her WeChat.",
    exampleSentences: [
      { target: "可以加你的微信吗？", translation: "May I add your WeChat?", phonetic: "Kěyǐ jiā nǐ de Wēixìn ma?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 我是通过好友申请的大卫，今天很高兴遇到你！\nB: 哈哈你好，通过啦！\nA: 到了家记得说一声哦，注意安全。\nB: 好的，我已经到家啦，谢谢关心！",
    back: "A: I'm David from the friend request, so happy to run into you today!\nB: Haha hello, accepted!\nA: Remember to let me know when you get home, stay safe.\nB: Okay, I've arrived home, thanks for caring!",
    phonetic: "A: Wǒ shì tōngguò hǎoyǒu shēnqǐng de Dàwèi, jīntiān hěn gāoxìng yù dào nǐ!\nB: Hāhā nǐ hǎo, tōngguò la!\nA: Dào le jiā jìde shuō yī shēng o, zhùyì ānquán.\nB: Hǎo de, wǒ yǐjīng dào jiā la, xièxiè guānxīn!",
    grammarNotes: "First text rule: establish identity, show courteous care without being suffocating (*“注意安全 / 到了家说一声”*).",
    hint: "Step 3: First WeChat message right after exchanging contacts.",
    exampleSentences: [
      { target: "到了家记得说一声。", translation: "Remember to let me know when you get home.", phonetic: "Dào le jiā jìde shuō yī shēng." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 周末有空吗？我知道一家日落特别美的咖啡馆，一起去喝一杯？\nB: 这周六下午我有空呀。\nA: 那太好了，周六下午三点我去接你，可以吗？\nB: 好呀，那一言为定！",
    back: "A: Are you free this weekend? I know a café with a gorgeous sunset, want to grab a drink together?\nB: I'm free this Saturday afternoon.\nA: Wonderful, can I come pick you up at 3 PM on Saturday?\nB: Sure, it's a promise then!",
    phonetic: "A: Zhōumò yǒu kòng ma? Wǒ zhīdào yī jiā rìluò tèbié měi de kāfēiguǎn, yīqǐ qù hē yī bēi?\nB: Zhè zhōuliù xiàwǔ wǒ yǒu kòng ya.\nA: Nà tài hǎo le, zhōuliù xiàwǔ sān diǎn wǒ qù jiē nǐ, kěyǐ ma?\nB: Hǎo ya, nà yī yán wéi dìng!",
    grammarNotes: "“一言为定” (yī yán wéi dìng = it's a deal / settled!); “有空吗” (are you free). Specific time + specific activity makes dates easy to accept.",
    hint: "Step 4: Setting up the first casual weekend afternoon date.",
    exampleSentences: [
      { target: "那一言为定！", translation: "It is a deal then!", phonetic: "Nà yī yán wéi dìng!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 你今天化了淡妆，比照片上还要漂亮迷人。\nB: 哪有啦，今天出门有点匆忙。\nA: 小心脚下台阶，把手给我，牵着你走。\nB: 嘻嘻，你的手好大、好暖和。",
    back: "A: You did light makeup today, even prettier and more charming than in your photos.\nB: Not really, I rushed out the door a bit today.\nA: Careful of the steps underfoot, give me your hand, let me guide you.\nB: Hehe, your hands are so big and warm.",
    phonetic: "A: Nǐ jīntiān huà le dànzhuāng, bǐ zhàopiàn shàng hái yào piàoliang mírén.\nB: Nǎ yǒu la, jīntiān chūmén yǒudiǎn cōngmáng.\nA: Xiǎoxīn jiǎoxià táijiē, bǎ shǒu gěi wǒ, qiān zhe nǐ zǒu.\nB: Xīxī, nǐ de shǒu hǎo dà, hǎo nuǎnhuo.",
    grammarNotes: "“牵着你走” (holding hands while walking); “小心脚下” (watch your step). Using natural situational assistance to break the touch barrier effortlessly.",
    hint: "Step 5: Natural hand-holding transition while walking.",
    exampleSentences: [
      { target: "把手给我。", translation: "Give me your hand.", phonetic: "Bǎ shǒu gěi wǒ." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 尝尝这杯鸡尾酒，甜甜的，有水蜜桃和薄荷的味道。\nB: 哇，真的很好喝耶！你尝一口我的？\nA: 确实很甜，不过……没有你甜。\nB: 哎呀！你干嘛突然这么撩人！",
    back: "A: Taste this cocktail, it's sweet, with peach and mint notes.\nB: Wow, it really is delicious! Take a sip of mine?\nA: Indeed very sweet, but... not as sweet as you.\nB: Oh my goodness! Why are you suddenly being so flirtatiously charming!",
    phonetic: "A: Chángchang zhè bēi jīwěijiǔ, tiántián de, yǒu shuǐmìtáo hé bòhe de wèidào.\nB: Wa, zhēn de hěn hǎohē ye! Nǐ cháng yīkǒu wǒ de?\nA: Quèshí hěn tián, bùguò…… méiyǒu nǐ tián.\nB: Āiyā! Nǐ gànmá tūrán zhème liáorén!",
    grammarNotes: "Sharing drinks (*“尝一口我的”*) signifies clear mutual physical comfort. “撩人” (liáorén = flirtatious / seductive).",
    hint: "Step 6: Sharing drinks and escalating playful flirtation.",
    exampleSentences: [
      { target: "你干嘛这么撩人！", translation: "Why are you being so seductive/flirty!", phonetic: "Nǐ gànmá zhème liáorén!" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 现在时间还早，要不要去我家里坐坐？我调一杯独家热红酒给你喝。\nB: 去你家？你家里方便吗？\nA: 特别方便，我家阳台夜景很美，而且还有暖气。\nB: 那好吧，不过我坐一会儿就要回家哦！\nA: 没问题，听你的。",
    back: "A: It's still early, want to come sit at my place for a bit? I'll make you my special hot mulled wine.\nB: Go to your place? Is your home convenient?\nA: Super convenient, my balcony night view is gorgeous, and there's heating.\nB: Alright then, but I can only stay for a little while before heading home!\nA: No problem, whatever you say.",
    phonetic: "A: Xiànzài shíjiān hái zǎo, yào bù yào qù wǒ jiālǐ zuòzuo? Wǒ tiáo yī bēi dújiā rè hóngjiǔ gěi nǐ hē.\nB: Qù nǐ jiā? Nǐ jiālǐ fāngbiàn ma?\nA: Tèbié fāngbiàn, wǒ jiā yángtái yèjǐng hěn měi, érqiě hái yǒu nuǎnqì.\nB: Nà hǎo ba, bùguò wǒ zuò yīhuìr jiù yào huíjiā o!\nA: Méi wèntí, tīng nǐ de.",
    grammarNotes: "Girls often say “坐一会儿就要走” (I can only stay a little bit) as social self-protection (*给台阶*). Never argue; simply agree relaxedly (*“没问题，听你的”*).",
    hint: "Step 7: The smooth invitation home with plausible reasons.",
    exampleSentences: [
      { target: "去我家里坐坐吧？", translation: "How about coming to my place to sit for a while?", phonetic: "Qù wǒ jiālǐ zuòzuo ba?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 进来吧，把外套脱了挂这里，家里暖气挺热的。\nB: 哇，你家里好香啊，是香薰的味道吗？\nA: 对，特意点的白茶香薰。你坐在沙发上，我去拿喝的。\nB: 感觉在你家好放松、好惬意。",
    back: "A: Come on in, take off your coat and hang it here; heating inside is quite warm.\nB: Wow, your home smells so nice, is it an aroma diffuser?\nA: Yes, specially lit white tea aroma. Sit on the sofa, I'll grab drinks.\nB: I feel so relaxed and cozy at your place.",
    phonetic: "A: Jìnlái ba, bǎ wàitào tuō le guà zhèlǐ, jiālǐ nuǎnqì tǐng rè de.\nB: Wa, nǐ jiālǐ hǎo xiāng a, shì xiāngxūn de wèidào ma?\nA: Duì, tèyì diǎn de báichá xiāngxūn. Nǐ zuò zài shāfā shàng, wǒ qù ná hē de.\nB: Gǎnjué zài nǐ jiā hǎo fàngsōng, hǎo qièyì.",
    grammarNotes: "Taking off heavy outerwear (*脱外套*), lighting aroma diffusers (*香薰*), and seating her comfortably on the sofa sets a tranquil, safe environment.",
    hint: "Step 8: Welcoming her into your apartment with cozy sensory details.",
    exampleSentences: [
      { target: "把外套脱了吧。", translation: "Take off your coat.", phonetic: "Bǎ wàitào tuō le ba." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 坐过来一点嘛，离我那么远干什么，我又不会吃了你。\nB: 谁怕你了，坐近就坐近！\nA: 靠近了看，你的皮肤真好，眼睛睫毛好长。\nB: 你干嘛靠这么近看我，心跳都加速了……",
    back: "A: Sit a little closer, why sit so far from me? It's not like I'm going to eat you.\nB: Who's afraid of you! I'll sit closer then!\nA: Looking close up, your skin is so good, and your eyelashes are so long.\nB: Why are you looking at me from so close, my heart rate is speeding up...",
    phonetic: "A: Zuò guòlái yīdiǎn ma, lí wǒ nàme yuǎn gàn shénme, wǒ yòu bù huì chī le nǐ.\nB: Shuí pà nǐ le, zuò jìn jiù zuò jìn!\nA: Kàojìn le kàn, nǐ de pífū zhēn hǎo, yǎnjing jiémáo hǎo cháng.\nB: Nǐ gànmá kào zhème jìn kàn wǒ, xīntiào dōu jiāsù le……",
    grammarNotes: "“我又不会吃了你” (I won't eat you = harmless classic tease); “坐过来一点” (sit a bit closer). Moving proximity naturally on the couch.",
    hint: "Step 9: Playful couch banter closing the physical gap.",
    exampleSentences: [
      { target: "坐过来一点嘛。", translation: "Sit a little closer to me.", phonetic: "Zuò guòlái yīdiǎn ma." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 可以抱抱你吗？\nB: 嗯……可以。\nA: 你身上好香，抱起来好舒服。\nB: 唔……（轻声）闭上眼睛……\nA: 我可以吻你吗？\nB: 傻瓜，这种事还要问……",
    back: "A: May I hug you?\nB: Mmm... yes you may.\nA: You smell so wonderful, hugging you feels so good.\nB: Mmh... (whispering) close your eyes...\nA: May I kiss you?\nB: Silly, you don't even need to ask about something like this...",
    phonetic: "A: Kěyǐ bào bao nǐ ma?\nB: Èn…… kěyǐ.\nA: Nǐ shēnshàng hǎo xiāng, bào qǐlái hǎo shūfu.\nB: Wù…… (qīngshēng) bì shàng yǎnjing……\nA: Wǒ kěyǐ wěn nǐ ma?\nB: Shǎguā, zhè zhǒng shì hái yào wèn……",
    grammarNotes: "“傻瓜，还要问” (Silly, why even ask!) is the classic affectionate green light in Chinese romance. Hugging first (*抱抱你*) builds comfort before kissing (*吻你*).",
    hint: "Step 10: Hugging, asking permission, and the first kiss.",
    exampleSentences: [
      { target: "我可以吻你吗？", translation: "May I kiss you?", phonetic: "Wǒ kěyǐ wěn nǐ ma?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 沙发坐久了腰酸，去卧室床上躺着吧，床垫特别软。\nB: 去卧室躺着？你可别乱来哦。\nA: 放心，只想跟你抱在一起好好说说话。\nB: 那好吧，抱我过去。",
    back: "A: Sitting on the couch too long hurts the back; let's go lie on the bedroom bed, the mattress is super soft.\nB: Lie on the bed in the bedroom? Don't you try anything naughty.\nA: Rest assured, I only want to cuddle with you and talk nicely.\nB: Alright then, carry me over.",
    phonetic: "A: Shāfā zuò jiǔ le yāosuān, qù wòshì chuáng shàng tǎng zhe ba, chuángdiàn tèbié ruǎn.\nB: Qù wòshì tǎng zhe? Nǐ kě bié luànlái o.\nA: Fàngxīn, zhǐ xiǎng gēn nǐ bào zài yīqǐ hǎohǎo shuōshuohuà.\nB: Nà hǎo ba, bào wǒ guòqù.",
    grammarNotes: "“去卧室床上躺着” (lie on the bed in bedroom); “别乱来” (don't get wild / teasing boundary); “抱我过去” (carry/hug me over - green light).",
    hint: "Step 11: Smoothly transitioning from couch to bedroom.",
    exampleSentences: [
      { target: "抱我过去吧。", translation: "Carry/hug me over.", phonetic: "Bào wǒ guòqù ba." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 今晚留在这一起睡，好不好？我想一直抱着你。\nB: 可是我没有卸妆，也没有换洗衣服……\nA: 没关系，我准备了全新的一次性洗漱用品和干净的睡衣，都准备好了。\nB: 你……你是不是早有预谋？\nA: 面对喜欢的女孩子，任何男生都会心动的。",
    back: "A: Stay here tonight and sleep together, okay? I want to keep holding you.\nB: But I didn't remove makeup, and don't have fresh clothes...\nA: Doesn't matter, I prepared brand new disposable toiletries and clean sleepwear, all ready.\nB: You... did you plan this all along?\nA: Facing a girl he loves, any guy's heart would race.",
    phonetic: "A: Jīnwǎn liú zài zhè yīqǐ shuì, hǎo bù hǎo? Wǒ xiǎng yīzhí bào zhe nǐ.\nB: Kěshì wǒ méiyǒu xièzhuāng, yě méiyǒu huànxǐ yīfu……\nA: Méi guānxi, wǒ zhǔnbèi le quánxīn de yīcìxìng xǐshù yòngpǐn hé gānjìng de shuìyī, dōu zhǔnbèi hǎo le.\nB: Nǐ…… nǐ shì bù shì zǎoyǒu yùmóu?\nA: Miànduì xǐhuan de nǚháizi, rènhé nánshēng dōu huì xīndòng de.",
    grammarNotes: "“早有预谋” (planned all along - teasing accusation); solving all practical objections (toiletries, pajamas) calmly and affectionately.",
    hint: "Step 12: Bedroom invitation addressing practical objections gently.",
    exampleSentences: [
      { target: "今晚留下来，好不好？", translation: "Stay tonight, alright?", phonetic: "Jīnwǎn liú xiàlái, hǎo bù hǎo?" }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 会紧张吗？如果不舒服或者害怕，随时告诉我。\nB: 有一点点害羞，把灯光再调暗一点好不好？\nA: 好，听你的。别紧张，有我在呢。\nB: 抱着你好有安全感……吻我吧。",
    back: "A: Are you nervous? If you feel uncomfortable or scared, tell me anytime.\nB: Just a tiny bit shy, can you dim the lights a bit more, please?\nA: Sure, whatever you wish. Don't be nervous, I'm right here with you.\nB: Holding you gives me such a sense of security... kiss me.",
    phonetic: "A: Huì jǐnzhāng ma? Rúguǒ bù shūfu huòzhě hàipà, suíshí gàosu wǒ.\nB: Yǒu yīdiǎndiǎn hàixiū, bǎ dēngguāng zài tiáo àn yīdiǎn hǎo bù hǎo?\nA: Hǎo, tīng nǐ de. Bié jǐnzhāng, yǒu wǒ zài ne.\nB: Bào zhe nǐ hǎo yǒu ānquángǎn…… wěn wǒ ba.",
    grammarNotes: "Verbal check-in (*“随时告诉我”*) is the pinnacle of emotional security (*安全感*). Dimming the lights (*调暗灯光*) eases shyness.",
    hint: "Step 13: Tender check-in, dimming lights, and mutual intimacy.",
    exampleSentences: [
      { target: "别紧张，有我在呢。", translation: "Don't be nervous, I'm right here with you.", phonetic: "Bié jǐnzhāng, yǒu wǒ zài ne." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 累了吧？喝点温水，盖好被子别着凉。\nB: 嗯……头好沉，只想枕在你胳膊上睡。\nA: 枕着吧，今晚我是你的专属抱枕。\nB: 谢谢你今晚这么温柔，晚安，亲爱的。",
    back: "A: Tired? Drink some warm water, tuck in the quilt so you don't catch a cold.\nB: Mmh... my head feels heavy, I only want to sleep pillowed on your arm.\nA: Rest on it, tonight I'm your exclusive body pillow.\nB: Thank you for being so tender tonight, good night, darling.",
    phonetic: "A: Lèi le ba? Hē diǎn wēnshuǐ, gài hǎo bèizi bié zháoliáng.\nB: Èn…… tóu hǎo chén, zhǐ xiǎng zhěn zài nǐ gēbo shàng shuì.\nA: Zhěn zhe ba, jīnwǎn wǒ shì nǐ de zhuānshǔ bàozhěn.\nB: Xièxiè nǐ jīnwǎn zhème wēnróu, wǎn'ān, qīn'ài de.",
    grammarNotes: "Post-intimacy care: offering warm water, tucking the quilt (*盖被子*), offering your arm as a pillow (*枕在胳膊上*). Solidifies true emotional bonding.",
    hint: "Step 14: Caring pillow talk and tucking in together.",
    exampleSentences: [
      { target: "盖好被子别着凉。", translation: "Tuck the blanket well so you don't catch cold.", phonetic: "Gài hǎo bèizi bié zháoliáng." }
    ]
  },
  {
    languageId: "chinese",
    topicId: "dialogues-conversations",
    difficulty: "A1",
    cardType: "dialogue",
    front: "A: 早安宝贝！看你睡得正香，没舍得叫醒你。\nB: 早！天哪都十点了，我起晚了！\nA: 没关系，周末就是用来睡懒觉的。洗漱一下，我做了热腾腾的面条。\nB: 呜呜你太好了，我发现我越来越离不开你了！",
    back: "A: Good morning baby! Saw you sleeping so sweetly, didn't have the heart to wake you.\nB: Morning! Gosh it's already 10 AM, I woke up late!\nA: It's fine, weekends are made for sleeping in. Go wash up, I made steaming hot noodles.\nB: Aww you are so wonderful, I find myself getting more and more attached to you!",
    phonetic: "A: Zǎo'ān bǎobèi! Kàn nǐ shuì de zhèng xiāng, méi shěde jiàoxǐng nǐ.\nB: Zǎo! Tiān na dōu shí diǎn le, wǒ qǐ wǎn le!\nA: Méi guānxi, zhōumò jiù shì yònglái shuì lǎnjiào de. Xǐshù yīxià, wǒ zuò le rèténgténg de miàntiáo.\nB: Wūwū nǐ tài hǎo le, wǒ fāxiàn wǒ yuèláiyuè líbukāi nǐ le!",
    grammarNotes: "The morning after defines whether you're just a one-night encounter or her future boyfriend. Making warm breakfast (*热腾腾的面条*) and using term of endearment (*宝贝*) shows deep respect.",
    hint: "Step 15: Morning after breakfast and affectionate bonding.",
    exampleSentences: [
      { target: "早安宝贝！", translation: "Good morning baby!", phonetic: "Zǎo'ān bǎobèi!" }
    ]
  },
{
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Guten Tag! Ich heiße Lukas Weber. Wie heißen Sie?\nB: Guten Tag, Herr Weber! Mein Name ist Maria Santos. Freut mich sehr!\nA: Ganz meinerseits, Frau Santos! Woher kommen Sie?\nB: Ich komme aus Spanien, aber ich lebe und arbeite jetzt in Berlin.',
    back: 'A: Good day! My name is Lukas Weber. What is your name?\nB: Good day, Mr. Weber! My name is Maria Santos. Pleased to meet you!\nA: The pleasure is mine, Ms. Santos! Where do you come from?\nB: I come from Spain, but I live and work in Berlin now.',
    phonetic: 'A: GOO-ten TAHK! Ikh HY-seh LOO-kas VEH-ber. Vee HY-sen zee?\nB: GOO-ten TAHK, hair VEH-ber! Myn NAH-meh ist mah-REE-ah ZAHN-tos. Froyt mikh zair!\nA: Gahnts MY-ner-zyts, frow ZAHN-tos! Vo-HAIR KOM-men zee?\nB: Ikh KOM-meh ows SHPAH-nee-en, AH-ber ikh LEH-beh oont AR-by-teh yetst in bair-LEEN.',
    grammarNotes: 'Polite formal address: Sie (capitalized), Wie heißen Sie?, Freut mich sehr! (Pleased to meet you), Ganz meinerseits! (Likewise / my pleasure).',
    hint: 'Situation: Formal introductions and courteous greetings in a professional setting.',
    exampleSentences: [
      { target: 'Sehr angenehm, Sie kennenzulernen.', translation: 'Very pleasant to meet you.', phonetic: 'Zair AHN-geh-naym, zee KEN-nen-tsoo-LAIR-nen.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Hallo! Was darf es für Sie sein?\nB: Guten Tag! Ich hätte gerne einen Cappuccino mit Hafermilch.\nA: Sehr gerne. Möchten Sie auch ein Stück Apfelstrudel dazu?\nB: Nein danke, nur der Kaffee. Zum Mitnehmen, bitte!\nA: Das macht drei Euro fünfzig.',
    back: 'A: Hello! What may I get for you?\nB: Good day! I would like a cappuccino with oat milk.\nA: With pleasure. Would you also like a slice of apple strudel with that?\nB: No thank you, just the coffee. To go, please!\nA: That comes to three euros fifty.',
    phonetic: 'A: HAH-lo! Vahs darf ess feer zee zyn?\nB: GOO-ten TAHK! Ikh HET-teh GAIR-neh EYE-nen kap-poo-CHEE-no mit HAH-fer-milkh.\nA: Zair GAIR-neh. MERKH-ten zee owkh ein SHTOOK AHP-fel-shtroo-del dah-TSOO?\nB: Nyn DAHN-keh, noor dair KAH-feh. Tsoom MIT-neh-men, BIT-teh!\nA: Dahs mahkht dry OY-ro FEENF-tsikh.',
    grammarNotes: 'Polite ordering: "Ich hätte gerne..." (Konjunktiv II for "I would like"). Hafermilch = oat milk. Zum Mitnehmen = to go; Zum Hier-Essen = for here.',
    hint: 'Situation: Ordering coffee and specifying milk preferences at a German café.',
    exampleSentences: [
      { target: 'Kann ich mit Karte zahlen?', translation: 'Can I pay with card?', phonetic: 'Kahn ikh mit KAR-teh TSAH-len?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Entschuldigung, wissen Sie, wie ich zum Hauptbahnhof komme?\nB: Ja, gehen Sie einfach diese Straße geradeaus bis zur Kreuzung.\nA: Und dann?\nB: An der Ampel biegen Sie links ab. Da sehen Sie schon das Bahnhofsgebäude.\nA: Vielen herzlichen Dank!\nB: Gern geschehen, einen schönen Tag noch!',
    back: 'A: Excuse me, do you know how I get to the central station?\nB: Yes, just walk straight down this street until the intersection.\nA: And then?\nB: Turn left at the traffic light. You will already see the station building right there.\nA: Thank you very much!\nB: You are welcome, have a nice day!',
    phonetic: 'A: Ent-SHOOL-dee-goong, VIS-sen zee, vee ikh tsoom HOWPT-bahn-hohf KOM-meh?\nB: Yah, GAY-en zee EYN-fahkh DEE-zeh SHTRAH-seh geh-RAH-deh-ows bis tsoor KROY-tsoong.\nA: Oont dahn?\nB: Ahn dair AHM-pel BEE-gen zee links ahp. Dah ZAY-en zee shon dahs BAHN-hohfs-geh-boy-deh.\nA: FEE-len HAIRT-slikh-en dahnk!\nB: Gairn geh-SHAY-en, EYE-nen SHER-nen tahk nokh!',
    grammarNotes: 'Directions: geradeaus (straight ahead); links abbiegen (turn left - separable verb); an der Ampel (at the traffic light); Gern geschehen (You\'re welcome).',
    hint: 'Situation: Asking a local passerby for street directions in a German city.',
    exampleSentences: [
      { target: 'Ist das weit von hier entfernt?', translation: 'Is that far away from here?', phonetic: 'Ist dahs vyt fon heer ent-FAIRNT?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Guten Morgen! Ich brauche vier Brötchen und ein Roggenbrot, bitte.\nB: Gerne! Darf es sonst noch etwas sein?\nA: Haben Sie frische Buttercroissants?\nB: Ja, die kommen gerade ofenfrisch aus der Backstube.\nA: Wunderbar, dann nehme ich noch zwei Croissants dazu.',
    back: 'A: Good morning! I need four bread rolls and a rye bread, please.\nB: Gladly! Would there be anything else for you?\nA: Do you have fresh butter croissants?\nB: Yes, they just came fresh from the oven out of the bakery.\nA: Wonderful, then I will take two croissants as well.',
    phonetic: 'A: GOO-ten MOR-gen! Ikh BROW-kheh feer BRERT-khen oont ein ROK-gen-broht, BIT-teh.\nB: GAIR-neh! Darf ess zonst nokh ET-vahs zyn?\nA: HAH-ben zee FRISH-eh BOOT-ter-krwah-sahn?\nB: Yah, dee KOM-men geh-RAH-deh OH-fen-frish ows dair BAHK-shtoo-beh.\nA: VOON-der-bahr, dahn NAY-meh ikh nokh tsvy krwah-sahn dah-TSOO.',
    grammarNotes: 'Bakery staple dialogue: Brötchen (bread roll); "Darf es sonst noch etwas sein?" (standard polite cashier inquiry); ofenfrisch (oven-fresh).',
    hint: 'Situation: Buying morning bread and pastries at a German Bäckerei.',
    exampleSentences: [
      { target: 'Einmal geschnitten, bitte.', translation: 'Sliced, please (referring to a loaf of bread).', phonetic: 'EYN-mahl geh-SHNIT-ten, BIT-teh.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Entschuldigung, wie viel Uhr ist es jetzt?\nB: Moment, ich schaue nach... Es ist genau Viertel vor vier.\nA: Oh je, mein Bus fährt in zehn Minuten!\nB: Keine Sorge, die Haltestelle ist gleich um die Ecke.',
    back: 'A: Excuse me, what time is it now?\nB: Just a moment, let me check... It is exactly a quarter to four.\nA: Oh dear, my bus leaves in ten minutes!\nB: No worries, the bus stop is right around the corner.',
    phonetic: 'A: Ent-SHOOL-dee-goong, vee feel OOR ist ess yetst?\nB: moh-MENT, ikh SHOW-eh nahkh... Ess ist geh-NOW FEER-tel fohr feer.\nA: Oh yay, myn boos fairt in tsayn mee-NOO-ten!\nB: KY-neh ZOR-geh, dee HAHL-teh-shtel-leh ist glykh oom dee EK-keh.',
    grammarNotes: 'Telling time: Viertel vor (quarter to); Viertel nach (quarter past); halb vier (3:30 - literally "half four"); um die Ecke (around the corner).',
    hint: 'Situation: Checking the time when in a rush to catch the bus.',
    exampleSentences: [
      { target: 'Wann kommt der nächste Zug an?', translation: 'When does the next train arrive?', phonetic: 'Vahn komt dair NAYKH-steh tsoog ahn?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Entschuldigen Sie bitte, wir möchten gerne zahlen.\nB: Sehr gerne! Zusammen oder getrennt?\nA: Getrennt, bitte. Für mich waren es das Schnitzel und das Mineralwasser.\nB: Das macht zusammen achtzehn Euro fünfzig.\nA: Machen Sie zwanzig Euro, der Rest ist für Sie!',
    back: 'A: Excuse me please, we would like to pay.\nB: With pleasure! Together or split?\nA: Split, please. For me it was the schnitzel and the mineral water.\nB: That comes to eighteen euros fifty.\nA: Make it twenty euros, keep the change!',
    phonetic: 'A: Ent-SHOOL-dee-gen zee BIT-teh, veer MERKH-ten GAIR-neh TSAH-len.\nB: Zair GAIR-neh! Tsoo-ZAHM-men OH-der geh-TRENT?\nA: Geh-TRENT, BIT-teh. Feer mikh VAH-ren ess dahs SHNIT-tsel oont dahs mee-neh-RAHL-vahs-ser.\nB: Dahs mahkht tsoo-ZAHM-men AHKHT-tsayn OY-ro FEENF-tsikh.\nA: MAH-khen zee TSVAHN-tsikh OY-ro, dair rest ist feer zee!',
    grammarNotes: 'Paying in German-speaking countries: "Zusammen oder getrennt?" (Together or split?); Tipping phrase: "Stimmt so!" or "Machen Sie [round number]".',
    hint: 'Situation: Settling the restaurant bill and tipping the server.',
    exampleSentences: [
      { target: 'Stimmt so, danke!', translation: 'Keep the change, thanks!', phonetic: 'Shtimt zoh, DAHN-keh!' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Verzeihung, gibt es hier im Café kostenloses WLAN?\nB: Ja, das Netzwerk heißt "Café-Gast".\nA: Und wie lautet das Passwort?\nB: Es steht unten auf Ihrem Kassenbon: "Kaffee2026".\nA: Prima, es funktioniert einwandfrei. Danke!',
    back: 'A: Pardon me, is there free Wi-Fi here in the café?\nB: Yes, the network is called "Café-Gast".\nA: And what is the password?\nB: It is printed at the bottom of your receipt: "Kaffee2026".\nA: Great, it works flawlessly. Thank you!',
    phonetic: 'A: Fair-TSY-oong, gibt ess heer im kah-FAY KOS-ten-loh-zes VAY-lahn?\nB: Yah, dahs NETS-vairk hyst kah-FAY-gahst.\nA: Oont vee LOW-tet dahs PAHS-vort?\nB: Ess shtayt OON-ten owf EE-rem KAHS-sen-bon: KAH-feh-tsvay-tow-zent-zekhs-oont-tsvahn-tsikh.\nA: PREE-mah, ess foonkts-yo-NEERT EYN-vahnd-fry. DAHN-keh!',
    grammarNotes: 'Tech queries: "kostenloses WLAN" (free Wi-Fi - in German pronounced VAY-lahn); Kassenbon = receipt; einwandfrei = flawlessly / without a hitch.',
    hint: 'Situation: Asking for the Wi-Fi credentials at a local café.',
    exampleSentences: [
      { target: 'Haben Sie eine Steckdose für meinen Laptop?', translation: 'Do you have a power socket for my laptop?', phonetic: 'HAH-ben zee EYE-neh SHTEK-doh-zeh feer MY-nen LEP-top?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Guten Abend! Haben Sie einen Tisch für zwei Personen frei?\nB: Guten Abend! Haben Sie reserviert?\nA: Nein, leider nicht. Wir hoffen auf einen kleinen Tisch.\nB: Sie haben Glück! Am Fenster ist gerade ein Tisch frei geworden. Kommen Sie gerne mit.',
    back: 'A: Good evening! Do you have a table for two persons available?\nB: Good evening! Do you have a reservation?\nA: No, unfortunately not. We are hoping for a small table.\nB: You are in luck! By the window a table has just become available. Please come with me.',
    phonetic: 'A: GOO-ten AH-bent! HAH-ben zee EYE-nen tish feer tsvy pair-ZOH-nen fry?\nB: GOO-ten AH-bent! HAH-ben zee reh-zair-VEERT?\nA: Nyn, LY-der nikht. Veer HOF-fen owf EYE-nen KLY-nen tish.\nB: Zee HAH-ben gleek! Ahm FEN-ster ist geh-RAH-deh ein tish fry geh-VOR-den. KOM-men zee GAIR-neh mit.',
    grammarNotes: 'Dining etiquette: einen Tisch frei haben (have a free table); reserviert haben (have a reservation); Sie haben Glück (you are lucky / in luck).',
    hint: 'Situation: Walking into a busy restaurant without a prior reservation.',
    exampleSentences: [
      { target: 'Können wir die Speisekarte auf Englisch haben?', translation: 'Can we have the menu in English?', phonetic: 'KERN-nen veer dee SHPY-zeh-kar-teh owf ENG-lish HAH-ben?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Guten Tag! Ich möchte eine Fahrkarte nach Frankfurt kaufen.\nB: Gerne. Einfache Fahrt oder hin und zurück?\nA: Hin und zurück, bitte. Ich fahre heute hin und morgen zurück.\nB: Möchten Sie mit dem ICE fahren oder mit dem Regionalzug?\nA: Mit dem ICE, bitte. Eine Sitzplatzreservierung nehme ich auch dazu.',
    back: 'A: Good day! I would like to purchase a train ticket to Frankfurt.\nB: Gladly. One-way or round trip?\nA: Round trip, please. I go today and return tomorrow.\nB: Would you like to travel by ICE (high-speed) or regional train?\nA: By ICE, please. I will take a seat reservation with that as well.',
    phonetic: 'A: GOO-ten TAHK! Ikh MERKH-teh EYE-neh FAHR-kar-teh nahkh FRAHNK-foort KOW-fen.\nB: GAIR-neh. EYN-fah-kheh fahrt OH-der hin oont tsoo-REEK?\nA: Hin oont tsoo-REEK, BIT-teh. Ikh FAH-reh HOY-teh hin oont MOR-gen tsoo-REEK.\nB: MERKH-ten zee mit daim ee-tsay-AY FAH-ren OH-der mit daim reh-gyo-NAHL-tsoog?\nA: Mit daim ee-tsay-AY, BIT-teh. EYE-neh ZITS-plahts-reh-zair-VEE-roong NAY-meh ikh owkh dah-TSOO.',
    grammarNotes: 'German train travel: einfache Fahrt (one-way ticket); hin und zurück (round trip); ICE (Intercity-Express); Sitzplatzreservierung (seat reservation).',
    hint: 'Situation: Buying a train ticket at the Deutsche Bahn service counter.',
    exampleSentences: [
      { target: 'Von welchem Gleis fährt der Zug ab?', translation: 'From which track does the train depart?', phonetic: 'Fon VEL-khem glys fairt dair tsoog ahp?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Entschuldigung, suchen Sie etwas Bestimmtes?\nB: Ja, wo finde ich denn das Bio-Olivenöl und den Balsamico-Essig?\nA: Gehen Sie in Gang drei. Es steht im mittleren Regal auf der rechten Seite.\nB: Vielen Dank für Ihre freundliche Hilfe!\nA: Sehr gerne, viel Spaß beim Kochen!',
    back: 'A: Excuse me, are you looking for something specific?\nB: Yes, where can I find the organic olive oil and the balsamic vinegar?\nA: Go down aisle three. It is on the middle shelf on the right-hand side.\nB: Thank you very much for your kind help!\nA: With pleasure, enjoy cooking!',
    phonetic: 'A: Ent-SHOOL-dee-goong, ZOO-khen zee ET-vahs beh-SHTIM-tes?\nB: Yah, voh FIN-deh ikh den dahs BEE-oh-oh-LEE-ven-erl oont dain bahl-ZAH-mee-koh-ES-sikh?\nA: GAY-en zee in gahng dry. Ess shtayt im MIT-tleh-ren reh-GAHL owf dair REKH-ten ZY-teh.\nB: FEE-len dahnk feer EE-reh FROYND-lee-kheh HIL-feh!\nA: Zair GAIR-neh, feel shpahs bym KOKH-en!',
    grammarNotes: 'Supermarket vocabulary: Gang (aisle); Regal (shelf); Bio (organic - very popular in Germany); viel Spaß beim Kochen (have fun cooking).',
    hint: 'Situation: Locating specific gourmet groceries in a German supermarket.',
    exampleSentences: [
      { target: 'Brauchen Sie den Kassenbon oder eine Tüte?', translation: 'Do you need the receipt or a bag?', phonetic: 'BROW-khen zee dain KAHS-sen-bon OH-der EYE-neh TEE-teh?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Guten Tag! Ich habe ein Zimmer auf den Namen Schmidt reserviert.\nB: Herzlich willkommen im Hotel Lindenhof! Hier ist Ihr Zimmerschlüssel, Zimmer 304.\nA: Vielen Dank. Wann gibt es morgens Frühstück?\nB: Das Frühstücksbuffet steht von 6:30 bis 10:30 Uhr im Erdgeschoss bereit.\nA: Perfekt. Und bis wann muss man auschecken?\nB: Bis 11 Uhr vormittags.',
    back: 'A: Good day! I reserved a room under the name Schmidt.\nB: Warm welcome to Hotel Lindenhof! Here is your room key, room 304.\nA: Thank you. What time is breakfast served in the morning?\nB: The breakfast buffet is available from 6:30 to 10:30 AM on the ground floor.\nA: Perfect. And by when does one need to check out?\nB: By 11 AM.',
    phonetic: 'A: GOO-ten TAHK! Ikh HAH-beh ein TSIM-mer owf dain NAH-men shmit reh-zair-VEERT.\nB: HAIRTS-likh vil-KOM-men im ho-TEL LIN-den-hohf! Heer ist eer TSIM-mer-shlews-sel, TSIM-mer dry-hoon-dert-feer.\nA: FEE-len dahnk. Vahn gibt ess MOR-gens FREW-shtik?\nB: Dahs FREW-shtiks-bew-fay shtayt fon zekhs oor dry-sikh bis tsayn oor dry-sikh im AIRD-geh-shos beh-RYT.\nA: Pair-FEKT. Oont bis vahn moos mahn OWS-shek-ken?\nB: Bis elf oor FOR-mit-tahks.',
    grammarNotes: 'Hotel interactions: auf den Namen (under the name); Erdgeschoss (ground floor / 1st floor in US terms); auschecken (to check out).',
    hint: 'Situation: Checking in at a hotel reception and clarifying logistics.',
    exampleSentences: [
      { target: 'Gibt es einen Aufzug zu den oberen Stockwerken?', translation: 'Is there an elevator to the upper floors?', phonetic: 'Gibt ess EYE-nen OWF-tsoog tsoo dain OH-beh-ren SHTOK-vair-ken?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Entschuldigung, dieser Pullover gefällt mir sehr gut. Haben Sie ihn in Größe L?\nB: Ich schaue gerne im Lager nach... Ja, hier ist das letzte Stück in L!\nA: Klasse! Darf ich ihn kurz anprobieren?\nB: Natürlich, die Umkleidekabinen befinden sich gleich links neben der Kasse.\nA: Danke, er passt wie angegossen!',
    back: 'A: Excuse me, I like this sweater very much. Do you have it in size L?\nB: I will happily check in the stockroom... Yes, here is the last piece in L!\nA: Great! May I quickly try it on?\nB: Naturally, the fitting rooms are located right to the left next to the register.\nA: Thanks, it fits like a glove!',
    phonetic: 'A: Ent-SHOOL-dee-goong, DEE-zer pool-LOH-ver geh-FELT meer zair goot. HAH-ben zee een in GRER-seh el?\nB: Ikh SHOW-eh GAIR-neh im LAH-ger nahkh... Yah, heer ist dahs LETS-teh shtik in el!\nA: KLAH-seh! Darf ikh een koorts AHN-pro-bee-ren?\nB: Nah-TEER-likh, dee OOM-kly-deh-kah-bee-nen beh-FIN-den zikh glykh links NAY-ben dair KAHS-seh.\nA: DAHN-keh, air pahst vee AHN-geh-gos-sen!',
    grammarNotes: 'Shopping idioms: "gefällt mir" (I like it - dative); Umkleidekabine (fitting booth); "passt wie angegossen" (fits like a glove / perfectly).',
    hint: 'Situation: Finding the right size and trying on clothes in a boutique.',
    exampleSentences: [
      { target: 'Gibt es dieses Hemd auch in einer anderen Farbe?', translation: 'Is this shirt also available in another color?', phonetic: 'Gibt ess DEE-zes hemt owkh in EYE-ner AHN-deh-ren FAR-beh?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Arztpraxis Dr. Bergmann, guten Tag!\nB: Guten Tag, hier spricht Jonas Klein. Ich fühle mich seit gestern krank und brauche einen Termin.\nA: Was für Beschwerden haben Sie denn?\nB: Ich habe hohes Fieber, starke Kopfschmerzen und Husten.\nA: Können Sie heute Nachmittag um 15:30 Uhr in die Sprechstunde kommen?\nB: Ja, das passt mir sehr gut. Bring ich meine Versichertenkarte mit?',
    back: 'A: Doctor\'s practice Dr. Bergmann, good day!\nB: Good day, Jonas Klein speaking. I have been feeling sick since yesterday and need an appointment.\nA: What kind of complaints or symptoms do you have?\nB: I have a high fever, severe headache, and a cough.\nA: Can you come to consultation hours this afternoon at 3:30 PM?\nB: Yes, that suits me very well. Should I bring my health insurance card?',
    phonetic: 'A: ARTST-prahk-sis doktor BAIRG-mahn, GOO-ten TAHK!\nB: GOO-ten TAHK, heer shprikht YOH-nahs klyn. Ikh FEW-leh mikh zyt GES-tairn krahnk oont BROW-kheh EYE-nen tair-MEEN.\nA: Vahs feer beh-SHVAIR-den HAH-ben zee den?\nB: Ikh HAH-beh HOH-es FEE-ber, SHTAR-keh KOPF-shmair-tsen oont HOOS-ten.\nA: KERN-nen zee HOY-teh NAHKH-mit-tahk oom feenf-tsayn oor dry-sikh in dee SPREKH-shtoon-deh KOM-men?\nB: Yah, dahs pahst meer zair goot. Bring ikh MY-neh fair-ZIKH-air-ten-kar-teh mit?',
    grammarNotes: 'Medical terminology: Arztpraxis (doctor\'s office); Sprechstunde (consultation hours); Beschwerden (symptoms/complaints); Versichertenkarte (health insurance card).',
    hint: 'Situation: Calling a doctor\'s clinic to schedule an urgent appointment.',
    exampleSentences: [
      { target: 'Ich brauche eine Arbeitsunfähigkeitsbescheinigung für meinen Arbeitgeber.', translation: 'I need a sick leave certificate for my employer.', phonetic: 'Ikh BROW-kheh EYE-neh AR-byts-oon-fay-ikh-kyts-beh-SHY-nee-goong feer MY-nen AR-byt-gay-ber.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Guten Tag! Ich habe starke Halsschmerzen und kann kaum schlucken.\nB: Haben Sie auch Schnupfen oder Fieber?\nA: Nur leichte Halsschmerzen und Heiserkeit.\nB: Ich empfehle Ihnen diese Halstabletten mit Salbei und diesen Hustensaft. Lutschen Sie alle drei Stunden eine Tablette.\nA: Muss ich die Tabletten vor oder nach dem Essen einnehmen?\nB: Am besten nach dem Essen.',
    back: 'A: Good day! I have a severe sore throat and can barely swallow.\nB: Do you also have a runny nose or fever?\nA: Just a mild sore throat and hoarseness.\nB: I recommend these throat lozenges with sage and this cough syrup. Dissolve one lozenge every three hours.\nA: Must I take the lozenges before or after eating?\nB: Ideally after eating.',
    phonetic: 'A: GOO-ten TAHK! Ikh HAH-beh SHTAR-keh HAHLSS-shmair-tsen oont kahn kowm SHLOOK-ken.\nB: HAH-ben zee owkh SHNOOP-fen OH-der FEE-ber?\nA: Noor LYKH-teh HAHLSS-shmair-tsen oont HY-zer-kyt.\nB: Ikh emp-FAY-leh EE-nen DEE-zeh HAHLSS-tah-BLET-ten mit ZAHL-by oont DEE-zen HOOS-ten-zahft. LOOT-shen zee AHL-leh dry SHTOON-den EYE-neh tah-BLET-teh.\nA: Moos ikh dee tah-BLET-ten fohr OH-der nahkh daim ES-sen EYN-nay-men?\nB: Ahm BES-ten nahkh daim ES-sen.',
    grammarNotes: 'Pharmacy German: Halsschmerzen (sore throat); lutschen (to suck/dissolve a lozenge); einnehmen (to ingest/take medication); Salbei (sage - very traditional German remedy).',
    hint: 'Situation: Consulting a pharmacist for cold relief and dosage instructions.',
    exampleSentences: [
      { target: 'Ist dieses Medikament rezeptpflichtig?', translation: 'Does this medication require a prescription?', phonetic: 'Ist DEE-zes meh-dee-kah-MENT reh-tsept-PFLIKH-tikh?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Hast du am Wochenende schon was vor? Wir könnten zusammen wandern gehen.\nB: Das klingt super! Wo möchtest du hingehen?\nA: In die Sächsische Schweiz, die Felslandschaft soll atemberaubend sein.\nB: Abgemacht! Um wie viel Uhr treffen wir uns am Bahnhof?\nA: Treffen wir uns um acht Uhr auf Gleis drei.',
    back: 'A: Do you already have plans this weekend? We could go hiking together.\nB: That sounds super! Where would you like to go?\nA: To Saxon Switzerland, the rock landscape is said to be breathtaking.\nB: Deal / Agreed! What time do we meet at the station?\nA: Let\'s meet at 8 o\'clock on track three.',
    phonetic: 'A: Hahst doo ahm VOKH-en-en-deh shon vahs fohr? Veer KERN-ten tsoo-ZAHM-men VAHN-dairn GAY-en.\nB: Dahs klingkt ZOO-pair! Voh MERKH-test doo HIN-gay-en?\nA: In dee ZEK-si-sheh SHVYTS, dee FELS-lahnt-shahft zol AH-tem-beh-ROW-bent zyn.\nB: AHP-geh-mahkt! Oom vee feel oor TREF-fen veer oons ahm BAHN-hohf?\nA: TREF-fen veer oons oom ahkht oor owf glys dry.',
    grammarNotes: 'Weekend culture: schon was vorhaben (have plans already); "Das klingt super!" (That sounds great!); "Abgemacht!" (Agreed! / It\'s a deal!).',
    hint: 'Situation: Making active outdoor weekend plans with a friend.',
    exampleSentences: [
      { target: 'Vergiss nicht, feste Wanderschuhe anzuziehen!', translation: 'Don\'t forget to put on sturdy hiking boots!', phonetic: 'Fair-GIS nikht, FES-teh VAHN-dair-shoo-eh AHN-tsoo-tsee-en!' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Entschuldigen Sie bitte, mein Deutsch ist noch nicht ganz flüssig. Könnten Sie bitte etwas langsamer sprechen?\nB: Aber natürlich! Wie lange lernen Sie schon Deutsch?\nA: Erst seit etwa acht Monaten, aber ich übe jeden Tag.\nB: Respekt! Sie drücken sich schon sehr verständlich aus. Machen Sie weiter so!',
    back: 'A: Excuse me please, my German is not quite fluent yet. Could you please speak a little slower?\nB: But of course! How long have you been learning German?\nA: Only for about eight months, but I practice every day.\nB: Respect! You express yourself very clearly already. Keep it up!',
    phonetic: 'A: Ent-SHOOL-dee-gen zee BIT-teh, myn doytsh ist nokh nikht gahnts FLEWS-sikh. KERN-ten zee BIT-teh ET-vahs LAHNG-zah-mer SHPREKH-en?\nB: AH-ber nah-TEER-likh! Vee LAHNG-eh LAIR-nen zee shon doytsh?\nA: Airst zyt ET-vah ahkht MOH-nah-ten, AH-ber ikh EE-beh YAY-den tahk.\nB: Reh-SPEKT! Zee DREK-ken zikh shon zair fair-SHTENT-likh ows. MAH-khen zee VY-ter zoh!',
    grammarNotes: 'Language barrier clarification: "Könnten Sie bitte etwas langsamer sprechen?" (Polite Konjunktiv II request); "Machen Sie weiter so!" (Keep up the great work!).',
    hint: 'Situation: Asking a native German speaker politely to adjust their pace.',
    exampleSentences: [
      { target: 'Könnten Sie das bitte wiederholen?', translation: 'Could you please repeat that?', phonetic: 'KERN-ten zee dahs BIT-teh vee-dair-HOH-len?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Der Wetterbericht verspricht für Samstag strahlenden Sonnenschein und bis zu 24 Grad.\nB: Traumhaft! Endlich wieder draußen sein nach den ganzen regnerischen Tagen.\nA: Wollen wir uns im Stadtpark zum Picknicken verabreden?\nB: Großartige Idee! Ich bringe frisch gebackenes Baguette und einen hausgemachten Kartoffelsalat mit.\nA: Perfekt, ich kümmere mich um gekühlte Getränke und die Decke.',
    back: 'A: The weather forecast promises radiant sunshine and up to 24 degrees for Saturday.\nB: Dreamy! Finally outdoors again after all those rainy days.\nA: Shall we arrange to meet in the city park for a picnic?\nB: Terrific idea! I will bring freshly baked baguette and a homemade potato salad.\nA: Perfect, I will take care of chilled drinks and the blanket.',
    phonetic: 'A: Dair VET-ter-beh-rikht fair-SHPRIKHT feer ZAHM-stahk SHTRAH-len-den ZON-nen-shyn oont bis tsoo feer-oont-TSVAHN-tsikh grahd.\nB: TROWM-hahft! ENT-likh VEE-dair DROW-sen zyn nahkh dain GAHN-tsen REKG-neh-ri-shen TAH-gen.\nA: VOL-len veer oons im SHTAHT-park tsoom PIK-nik-ken fair-AHB-reh-den?\nB: GROHS-ahr-tee-geh ee-DAY! Ikh BRING-eh frish geh-BAHK-keh-nes bah-GET oont EYE-nen HOWS-geh-mahkht-en kar-TOF-fel-zah-laht mit.\nA: Pair-FEKT, ikh KEE-meh-reh mikh oom geh-KEEL-teh geh-TRENG-keh oont dee DEK-keh.',
    grammarNotes: 'Casual friendly coordination: strahlender Sonnenschein (radiant sunshine); "sich verabreden" (to arrange to meet); "Ich kümmere mich um..." (I will take care of...).',
    hint: 'Situation: Enthusiastic planning for a weekend sunny picnic with friends.',
    exampleSentences: [
      { target: 'Hoffentlich schlägt das Wetter nicht plötzlich um.', translation: 'Hopefully the weather doesn\'t suddenly turn.', phonetic: 'HOF-fent-likh shlaykt dahs VET-ter nikht PLET-tslikh oom.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Hallo Felix, hättest du kurz fünf Minuten für mich? Ich stehe bei dieser Projektanalyse vor einem Rätsel.\nB: Na klar, setz dich! Worum geht es genau?\nA: Diese Budgetzahlen stimmen nicht mit den Quartalsberichten überein.\nB: Schauen wir mal gemeinsam drüber... Ah, hier liegt der Fehler: Die Lizenzgebühren wurden doppelt verbucht.\nA: Ach, du bist ein Lebensretter! Vielen Dank für das geschulte Auge.',
    back: 'A: Hello Felix, would you have five quick minutes for me? I am stumped by this project analysis.\nB: Sure thing, have a seat! What is it about exactly?\nA: These budget figures do not match up with the quarterly reports.\nB: Let\'s look over it together... Ah, here lies the error: The license fees were booked twice.\nA: Oh, you are a lifesaver! Thanks so much for the trained eye.',
    phonetic: 'A: HAH-lo FAY-liks, HET-test doo koorts feenf mee-NOO-ten feer mikh? Ikh SHTAY-eh by DEE-zer pro-YEKT-ah-nah-LEW-zeh fohr EYE-nem RAYT-sel.\nB: Nah klahr, zetts dikh! Voh-ROOM gayt ess geh-NOW?\nA: DEE-zeh BOOD-zheh-tsah-len SHTIM-men nikht mit dain kwar-TAHLS-beh-rikh-ten ee-ber-EYN.\nB: SHOW-en veer mahl geh-MYN-zahm DREE-ber... Ah, heer leegt dair FAY-ler: Dee lee-TSENTS-geh-bew-ren VOOR-den DOP-pelt fair-BOOKHT.\nA: Ahkh, doo bist ein LAY-bens-ret-ter! FEE-len dahnk feer dahs geh-SHOOL-teh OW-geh.',
    grammarNotes: 'Workplace interactions: "Hättest du kurz Zeit?" (Would you have a moment?); übereinstimmen (to correspond/match); Lebensretter (lifesaver); geschultes Auge (trained eye).',
    hint: 'Situation: Asking a supportive colleague for a second pair of eyes on work analysis.',
    exampleSentences: [
      { target: 'Ich leite die korrigierte Version gleich an das Team weiter.', translation: 'I will forward the corrected version to the team right away.', phonetic: 'Ikh LY-teh dee kor-ree-GEER-teh vair-ZYON glykh ahn dahs teem VY-ter.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Guten Tag! Ich habe vor drei Tagen diese Regenjacke hier gekauft, aber der Reißverschluss klemmt ständig.\nB: Guten Tag. Haben Sie den Kassenbeleg noch dabei?\nA: Ja, hier ist der Beleg, und alle Etiketten sind noch unbeschädigt.\nB: Kein Problem, das ist ein klarer Materialfehler. Möchten Sie dieselbe Jacke noch einmal oder den Kaufbetrag erstattet bekommen?\nA: Wenn Sie die Jacke noch in Dunkelblau haben, nehme ich sie gerne noch mal.',
    back: 'A: Good day! I bought this rain jacket here three days ago, but the zipper jams constantly.\nB: Good day. Do you still have the receipt with you?\nA: Yes, here is the receipt, and all labels are still undamaged.\nB: No problem, that is a clear material defect. Would you like the same jacket once again or the purchase amount refunded?\nA: If you still have the jacket in dark blue, I would happily take it again.',
    phonetic: 'A: GOO-ten TAHK! Ikh HAH-beh fohr dry TAH-gen DEE-zeh RAY-gen-yahk-keh heer geh-KOWFT, AH-ber dair RYS-fair-shloos klemt SHTEN-dikh.\nB: GOO-ten TAHK. HAH-ben zee dain KAHS-sen-beh-layk nokh dah-BY?\nA: Yah, heer ist dair beh-LAYK, oont AHL-leh eh-tee-KET-ten zint nokh OON-beh-shay-dikh-t.\nB: Kyn pro-BLAYM, dahs ist ein KLAH-rer mah-tay-ree-AHL-fay-ler. MERKH-ten zee DEE-zel-beh YAHK-keh nokh EYN-mahl OH-der dain KOWF-beh-trahk air-SHTAHT-tet beh-KOM-men?\nA: Ven zee dee YAHK-keh nokh in DOON-kel-blow HAH-ben, NAY-meh ikh zee GAIR-neh nokh mahl.',
    grammarNotes: 'Customer returns & exchanges: Kassenbeleg (receipt); der Reißverschluss klemmt (the zipper jams); Kaufbetrag erstattet bekommen (get the purchase price refunded).',
    hint: 'Situation: Exchanging a defective garment at a German store under warranty.',
    exampleSentences: [
      { target: 'Wir gewähren zwei Jahre Gewährleistung auf alle Textilien.', translation: 'We grant a two-year warranty on all textiles.', phonetic: 'Veer geh-VAY-ren tsvy YAH-reh geh-VAYR-ly-stoong owf AHL-leh teks-TEE-lyen.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Herzlich willkommen! Schön, dass ihr alle kommen konntet. Zieht doch bitte die Schuhe im Flur aus.\nB: Vielen Dank für die Einladung! Es riecht hier schon absolut köstlich. Können wir dir bei der Vorbereitung helfen?\nA: Alles ist schon im Ofen, macht es euch im Wohnzimmer bequem! Was möchtet ihr trinken?\nB: Ein Glas Weißwein oder ein Mineralwasser wäre herrlich, vielen Dank für die Gastfreundschaft!',
    back: 'A: Warm welcome! Wonderful that you all could make it. Please take off your shoes in the hallway.\nB: Thank you so much for the invitation! It smells absolutely delicious in here already. Can we help you with preparations?\nA: Everything is already in the oven, make yourselves comfortable in the living room! What would you like to drink?\nB: A glass of white wine or a mineral water would be lovely, thanks so much for the hospitality!',
    phonetic: 'A: HAIRTS-likh vil-KOM-men! Shern, dahs eer AHL-leh KOM-men KON-tet. Tseet dokh BIT-teh dee SHOO-eh im floor ows.\nB: FEE-len dahnk feer dee EYN-lah-doong! Ess reekht heer shon ahp-zoh-LOOT KERTST-likh. KERN-nen veer deer by dair FOHR-beh-ry-toong HEL-fen?\nA: AHL-les ist shon im OH-fen, mahkht ess oykh im VOHN-tsim-mer beh-KVAYM! Vahs MERKH-tet eer TRING-ken?\nB: Ein glahs VYS-vyn OH-der ein mee-neh-RAHL-vahs-ser VAY-reh HAIR-likh, FEE-len dahnk feer dee GAHST-froynt-shahft!',
    grammarNotes: 'German home hospitality: Schuhe ausziehen (removing shoes inside the house is standard German etiquette); Gastfreundschaft (hospitality); köstlich (delicious).',
    hint: 'Situation: Being warmly welcomed into a German host\'s home for a dinner evening.',
    exampleSentences: [
      { target: 'Guten Appetit allerseits!', translation: 'Bon appétit everyone!', phonetic: 'GOO-ten ah-peh-TEET AHL-lair-zyts!' }
    ]
  },

  // =========================================================================
  // ADDITIONAL PRACTICAL GERMAN DIALOGUES (Praktische deutsche Alltagsdialoge)
  // =========================================================================
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Hallo! Wie geht es dir?\nB: Danke, gut! Und dir?\nA: Auch gut, danke!',
    back: 'A: Hello! How are you?\nB: Thanks, good! And you?\nA: Also good, thanks!',
    phonetic: 'A: HAH-loh! Vee gayt ess deer?\nB: DAHN-keh, goot! Oont deer?\nA: Owkh goot, DAHN-keh!',
    grammarNotes: 'Informal daily check-in: Wie geht es dir? (How are you? - dative); Und dir? (And to you?); Auch gut (Also good).',
    hint: 'Situation: Casual greeting between friends or classmates.',
    exampleSentences: [
      { target: 'Wie geht\'s?', translation: 'How\'s it going?', phonetic: 'Vee gayts?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Guten Morgen! Ein Brötchen und einen Cappuccino, bitte.\nB: Gerne! Zum Hieressen oder zum Mitnehmen?\nA: Zum Mitnehmen, bitte.\nB: Das macht drei Euro fünfzig.',
    back: 'A: Good morning! One bread roll and a cappuccino, please.\nB: With pleasure! For here or to take away?\nA: To take away, please.\nB: That makes three euros fifty.',
    phonetic: 'A: GOO-ten MOR-gen! Ein BRERT-khen oont EY-nen kahp-poo-CHEE-noh, BIT-teh.\nB: GAIR-neh! Tsoom HEER-es-sen OH-der tsoom MIT-nay-men?\nA: Tsoom MIT-nay-men, BIT-teh.\nB: Dahs mahkht dry OY-roh FERNF-tsikh.',
    grammarNotes: 'Bakery staple phrases: Zum Hieressen (for here); Zum Mitnehmen (to take away); Das macht... (That amounts to...).',
    hint: 'Situation: Buying breakfast at a German bakery (Bäckerei).',
    exampleSentences: [
      { target: 'Ein Brötchen, bitte.', translation: 'A bread roll, please.', phonetic: 'Ein BRERT-khen, BIT-teh.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Entschuldigung, fährt dieser Zug nach Frankfurt?\nB: Ja, Gleis 4. Er hat aber fünf Minuten Verspätung.\nA: Alles klar, vielen Dank!\nB: Gern geschehen, gute Fahrt!',
    back: 'A: Excuse me, does this train go to Frankfurt?\nB: Yes, track 4. But it has a five-minute delay.\nA: Alright, thank you very much!\nB: You are welcome, have a good trip!',
    phonetic: 'A: Ent-SHOOL-dee-goong, fairt DEE-zer tsook nahkh FRAHNK-foort?\nB: Yah, glys feer. Air haht AH-ber fernf mee-NOO-ten fair-SHPAY-toong.\nA: AHL-les klahr, FEE-len dahnk!\nB: Gairn geh-SHAY-en, GOO-teh fahrt!',
    grammarNotes: 'Train travel in Germany: Gleis (platform/track); Verspätung (delay); Alles klar (alright / got it); Gute Fahrt (safe travels / good trip).',
    hint: 'Situation: Checking train platform and schedule at a Deutsche Bahn station.',
    exampleSentences: [
      { target: 'Welches Gleis ist das?', translation: 'Which platform is that?', phonetic: 'VEL-khes glys ist dahs?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Zahlen Sie zusammen oder getrennt?\nB: Getrennt, bitte. Ich nehme die Suppe und das Wasser.\nA: Kann ich mit Karte zahlen?\nB: Ja, Kartenzahlung ist ab fünf Euro möglich.',
    back: 'A: Are you paying together or separately?\nB: Separately, please. I have the soup and the water.\nA: Can I pay by card?\nB: Yes, card payment is possible from five euros.',
    phonetic: 'A: TSAH-len zee tsoo-ZAHM-men OH-der geh-TRENT?\nB: Geh-TRENT, BIT-teh. Ikh NAY-meh dee ZOOP-peh oont dahs VAHS-ser.\nA: Kahn ikh mit KAR-teh TSAH-len?\nB: Yah, KAR-ten-tsah-loong ist ahp fernf OY-roh MERK-likh.',
    grammarNotes: 'Paying in German restaurants: Zusammen oder getrennt? (Together or separately - standard question); Mit Karte zahlen (pay by card).',
    hint: 'Situation: Settling the restaurant check in Germany.',
    exampleSentences: [
      { target: 'Zusammen oder getrennt?', translation: 'Together or split?', phonetic: 'Tsoo-ZAHM-men OH-der geh-TRENT?' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Hallo, ich möchte mich für die Wohnung anmelden.\nB: Haben Sie Ihren Pass und die Wohnungsgeberbestätigung dabei?\nA: Ja, hier sind alle Unterlagen.\nB: Perfekt, ich trage das gleich in das System ein.',
    back: 'A: Hello, I would like to register my apartment address.\nB: Do you have your passport and the landlord confirmation with you?\nA: Yes, here are all the documents.\nB: Perfect, I will enter that into the system right away.',
    phonetic: 'A: HAH-loh, ikh MERKH-teh mikh feer dee VOH-noong AHN-mel-den.\nB: HAH-ben zee EE-ren pahs oont dee VOH-noongs-gay-ber-beh-SHTAY-tee-goong dah-BY?\nA: Yah, heer zint AHL-leh OON-ter-lah-gen.\nB: Pair-FEKT, ikh TRAH-geh dahs glykh in dahs zees-TAYM eyn.',
    grammarNotes: 'Essential German bureaucracy: Anmeldung (address registration); Wohnungsgeberbestätigung (landlord confirmation slip); Unterlagen (documents).',
    hint: 'Situation: Registering residence at the local Bürgeramt in Germany.',
    exampleSentences: [
      { target: 'Hier ist meine Anmeldung.', translation: 'Here is my registration form.', phonetic: 'Heer ist MY-neh AHN-mel-doong.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Wo finde ich den Supermarkt?\nB: Gehen Sie geradeaus und biegen Sie links ab.\nA: Ist es weit von hier?\nB: Nein, nur zwei Minuten zu Fuß.',
    back: 'A: Where do I find the supermarket?\nB: Go straight ahead and turn left.\nA: Is it far from here?\nB: No, only two minutes on foot.',
    phonetic: 'A: Voh FIN-deh ikh dayn ZOO-pair-markt?\nB: GAY-en zee geh-RAH-deh-ows oont BEE-gen zee links ahp.\nA: Ist ess vyt fon heer?\nB: Nyn, noor tsvy mee-NOO-ten tsoo foos.',
    grammarNotes: 'Directions: geradeaus (straight ahead); links abbiegen (turn left); zu Fuß (on foot); Ist es weit? (Is it far?).',
    hint: 'Situation: Asking for street directions in a German town.',
    exampleSentences: [
      { target: 'Immer geradeaus.', translation: 'Always straight ahead.', phonetic: 'IM-mer geh-RAH-deh-ows.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Brauchen Sie den Kassenbon?\nB: Nein, danke.\nA: Wünschen Sie eine Tüte?\nB: Nein, ich habe einen Rucksack.',
    back: 'A: Do you need the receipt?\nB: No, thanks.\nA: Would you like a bag?\nB: No, I have a backpack.',
    phonetic: 'A: BROW-khen zee dayn KAHS-sen-bong?\nB: Nyn, DAHN-keh.\nA: VEERN-shen zee EY-neh TEER-teh?\nB: Nyn, ikh HAH-beh EY-nen ROOK-zahk.',
    grammarNotes: 'German supermarket checkout: Kassenbon (receipt); Tüte (shopping bag); Rucksack (backpack).',
    hint: 'Situation: Checking out at grocery stores like Aldi, Lidl, or Rewe.',
    exampleSentences: [
      { target: 'Ich brauche keinen Beleg.', translation: 'I don\'t need a receipt.', phonetic: 'Ikh BROW-kheh KY-nen beh-LAYK.' }
    ]
  },
  // =========================================================================
  // REAL-LIFE COLLOQUIAL GERMAN DIALOGUES (Authentisches Deutsch im Alltag)
  // =========================================================================
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Na, alles fit bei dir?\nB: Ja, geht so. Ich habe heute überhaupt keinen Bock auf die Uni.\nA: Ach komm, zieh durch! Danach trinken wir ein kühles Feierabendbier.',
    back: 'A: Well, all good with you?\nB: Yeah, so-so. I really have zero desire / mood for university today.\nA: Oh come on, push through! Afterwards we\'ll have a cool after-work beer.',
    phonetic: 'A: Nah, AHL-les fit by deer?\nB: Yah, gayt zoh. Ikh HAH-beh HOY-teh oo-ber-HOWPT KY-nen bok owf dee OO-nee.\nA: Akh kom, tsee doorkh! Dah-NAHKH TRING-ken veer ein KOO-les FY-er-ah-bent-beer.',
    grammarNotes: 'German youth & daily staples: “Bock haben” (colloquial for lust haben / to be in the mood); “Feierabend” (sacred German concept of the end of the working day); “Na” (universal conversational starter).',
    hint: 'Situation: Chatting with a friend or study buddy who is feeling unmotivated.',
    exampleSentences: [
      { target: 'Ich habe voll Bock darauf!', translation: 'I am totally up for that / really in the mood for that!', phonetic: 'Ikh HAH-beh fol bok dah-ROWF!' },
      { target: 'Schönen Feierabend!', translation: 'Have a great evening after work!', phonetic: 'SHER-nen FY-er-ah-bent!' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Mensch, das darf doch wohl nicht wahr sein! Der Zug fällt schon wieder komplett aus.\nB: Echt jetzt? Das ist doch ein Witz! Was machen wir denn jetzt?\nA: Da haben wir wohl Pech gehabt. Wir müssen wohl den Schienenersatzverkehr nehmen.',
    back: 'A: Man, that can\'t possibly be true! The train is completely cancelled yet again.\nB: Seriously? That has to be a joke! What on earth do we do now?\nA: Looks like we are out of luck. We\'ll probably have to take the replacement bus service.',
    phonetic: 'A: Mensh, dahs darf dokh vohl nikht vahr zyn! Dair tsook fellt shon VEE-der kom-PLETT ows.\nB: Ekht yetst? Dahs ist dokh ein vits! Vahs MAH-khen veer den yetst?\nA: Dah HAH-ben veer vohl pekh geh-HAHPT. Veer MEER-sen vohl dayn SHEE-nen-air-zats-fair-kair NAY-men.',
    grammarNotes: 'Everyday frustration expressions: “Mensch!” (Man!); “Pech gehabt” (out of luck); “Schienenersatzverkehr” (SEV - famous German rail replacement bus); modal particles: “doch wohl”, “denn”.',
    hint: 'Situation: Rail travel disruption at a Deutsche Bahn platform.',
    exampleSentences: [
      { target: 'Pech gehabt!', translation: 'Tough luck / bad luck!', phonetic: 'Pekh geh-HAHPT!' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Hallo! Einmal Döner mit allem, bitte.\nB: Mit Knoblauchsauce oder Kräuter?\nA: Mit Knoblauch, bitte. Und ein bisschen scharf.\nB: Alles klar, Chef! Zum Mitnehmen?\nA: Ja, genau, danke!',
    back: 'A: Hello! One Döner with everything, please.\nB: With garlic sauce or herb sauce?\nA: With garlic, please. And a little bit spicy.\nB: Got it, boss! To take away?\nA: Yes, exactly, thanks!',
    phonetic: 'A: HAH-loh! EYN-mahl DER-ner mit AHL-lem, BIT-teh.\nB: Mit KNOHP-lowkh-zoh-seh OH-der KROY-ter?\nA: Mit KNOHP-lowkh, BIT-teh. Oont ein BIS-khen sharf.\nB: AHL-les klahr, shef! Tsoom MIT-nay-men?\nA: Yah, geh-NOW, DAHN-keh!',
    grammarNotes: 'Germany\'s #1 street food ritual: “Döner mit allem” (döner with all salads and toppings); “ein bisschen scharf” (with a sprinkle of chili flakes / Pul Biber); “Chef” (colloquial friendly address from kiosk vendors).',
    hint: 'Situation: Ordering Germany\'s most iconic street food at a Döner Imbiss.',
    exampleSentences: [
      { target: 'Einmal mit allem, bitte.', translation: 'One with everything, please.', phonetic: 'EYN-mahl mit AHL-lem, BIT-teh.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Hast du am Wochenende was vor, oder machst du dir einen gemütlichen Lenz?\nB: Ich wollte eigentlich auf den Flohmarkt im Mauerpark, danach grillen am Kanal.\nA: Klingt mega! Darf ich mich anschließen?\nB: Na klar, je mehr Leute, desto lustiger!',
    back: 'A: Do you have plans for the weekend, or are you taking it easy / kicking back?\nB: I actually wanted to go to the flea market in Mauerpark, then barbecue by the canal.\nA: Sounds awesome! May I tag along / join in?\nB: Of course, the more the merrier!',
    phonetic: 'A: HAHST doo ahm VOH-khen-en-deh vahs fohr, OH-der MAHKHST doo deer EY-nen geh-MEET-likh-en lents?\nB: Ikh VOHL-teh EY-gent-likh owf dayn FLOH-markt im MOW-er-park, dah-NAHKH GRIL-len ahm kah-NAHL.\nA: Klingt MAY-gah! Darf ikh mikh AHN-shlee-sen?\nB: Nah klahr, yay mayr LOY-teh, DES-toh LOOS-tee-ger!',
    grammarNotes: 'Casual German lifestyle: “einen Lenz machen” (slang: kick back and take it easy); “Klingt mega!” (sounds super cool); “sich anschließen” (to tag along / join in); “Flohmarkt” (flea market).',
    hint: 'Situation: Making casual weekend plans with a friend in Berlin.',
    exampleSentences: [
      { target: 'Klingt mega!', translation: 'Sounds mega / awesome!', phonetic: 'Klingt MAY-gah!' },
      { target: 'Je mehr, desto besser.', translation: 'The more, the better.', phonetic: 'Yay mayr, DES-toh BES-ser.' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Ich verstehe nur Bahnhof bei dieser Steuererklärung, das ist viel zu kompliziert!\nB: Kein Wunder, das Beamtendeutsch blickt doch kein normaler Mensch.\nA: Kannst du mir am Samstag einen Gefallen tun und drüberschauen?\nB: Abgemacht! Wenn du dafür die Pizza spendierst, helfe ich dir gerne.',
    back: 'A: It\'s all Greek to me / I don\'t understand a thing with this tax return, it\'s way too complicated!\nB: No wonder, no normal human can decipher bureaucratic German.\nA: Could you do me a favor on Saturday and look it over?\nB: Deal! If you treat to pizza for that, I\'ll gladly help.',
    phonetic: 'A: Ikh fair-SHTAY-eh noor BAHN-hohf by DEE-zer SHTOY-er-air-klay-roong, dahs ist feel tsoo kom-plee-TSEERT!\nB: Kyn VOON-der, dahs beh-AHM-ten-doytsh blikt dokh kyn nor-MAH-ler MENSH.\nA: Kahnst doo meer ahm ZAHM-stahk EY-nen geh-FAHL-len toon oont DREE-ber-show-en?\nB: AHP-geh-mahkt! Ven doo dah-FEER dee PEET-sah shpen-DEERST, HEL-feh ikh deer GAIR-neh.',
    grammarNotes: 'Idioms: “Ich verstehe nur Bahnhof” (It\'s all gibberish/Greek to me); “Beamtendeutsch” (dense bureaucratic German); “Abgemacht!” (Deal!); “durchblicken” (to grasp/understand).',
    hint: 'Situation: Asking a native friend for help with complex paperwork and tax forms.',
    exampleSentences: [
      { target: 'Ich verstehe nur Bahnhof.', translation: 'It\'s completely all Greek to me.', phonetic: 'Ikh fair-SHTAY-eh noor BAHN-hohf.' },
      { target: 'Abgemacht!', translation: 'It\'s a deal!', phonetic: 'AHP-geh-mahkt!' }
    ]
  },
  {
    languageId: 'german',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Hallo! Ein kleines Bier und eine Apfelschorle, bitte.\nB: Gerne! Möchten Sie drinnen sitzen oder lieber auf der Terrasse?\nA: Draußen, wenn noch ein Plätzchen frei ist.\nB: Sicher, Tisch Nummer 7 ist frei. Ich bringe die Getränke gleich raus!',
    back: 'A: Hello! A small beer and an apple spritzer, please.\nB: With pleasure! Would you like to sit inside or rather on the terrace?\nA: Outside, if there is still a little spot available.\nB: Certainly, table number 7 is free. I\'ll bring the drinks right out!',
    phonetic: 'A: HAH-loh! Ein KLY-nes beer oont EY-neh AHP-fel-shor-leh, BIT-teh.\nB: GAIR-neh! MERKH-ten zee DRIN-nen ZIT-sen OH-der LEE-ber owf dair teh-RAHS-seh?\nA: DROW-sen, ven nokh ein PLETZ-khen fry ist.\nB: ZEE-kher, tish NOOM-mer ZEE-ben ist fry. Ikh BRING-eh dee geh-TRENG-keh glykh rows!',
    grammarNotes: 'German beverage & terrace culture: “Apfelschorle” (apple juice mixed with carbonated water - national soft drink); “ein Plätzchen” (a cozy spot); “draußen / drinnen” (outside / inside).',
    hint: 'Situation: Enjoying a drink outside at a German Biergarten or café.',
    exampleSentences: [
      { target: 'Ein Glas Apfelschorle, bitte.', translation: 'A glass of apple spritzer, please.', phonetic: 'Ein glahs AHP-fel-shor-leh, BIT-teh.' }
    ]
  },
  // =========================================================================
  // SPANISH DIALOGUES (Diálogos Cortos)
  // =========================================================================
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: ¡Hola! Buenos días, ¿cómo te llamas?\nB: ¡Buenos días! Me llamo Carlos, ¿y tú?\nA: Yo soy Sofía, encantada de conocerte.\nB: El gusto es mío, Sofía. ¿Eres de aquí?',
    back: 'A: Hello! Good morning, what is your name?\nB: Good morning! My name is Carlos, and you?\nA: I am Sofía, delighted to meet you.\nB: The pleasure is mine, Sofía. Are you from around here?',
    phonetic: 'A: OH-lah! BWEH-nos DEE-ahs, KOH-moh teh YAH-mahs?\nB: BWEH-nos DEE-ahs! Meh YAH-moh KAR-los, ee too?\nA: Yoh soy soh-FEE-ah, en-kahn-TAH-dah deh koh-noh-SEHR-teh.\nB: El GOOS-toh es MEE-oh, soh-FEE-ah. EH-res deh ah-KEE?',
    grammarNotes: 'Greetings: Encantado/a de conocerte (Delighted to meet you); El gusto es mío (The pleasure is mine); ¿Eres de aquí? (Are you from here?).',
    hint: 'Situation: Informal introduction with a new acquaintance.',
    exampleSentences: [
      { target: '¿De qué país eres?', translation: 'What country are you from?', phonetic: 'Deh keh pah-EES EH-res?' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: ¡Hola! ¿Qué te pongo?\nB: Buenas, un café con leche y una tostada con tomate, por favor.\nA: ¿La leche la quieres templada o caliente?\nB: Caliente, por favor. ¿Tienes leche vegetal?\nA: Sí, tenemos de avena y de soja.',
    back: 'A: Hello! What can I get you?\nB: Hi, a coffee with milk and toast with tomato, please.\nA: Do you want the milk warm or hot?\nB: Hot, please. Do you have plant milk?\nA: Yes, we have oat milk and soy milk.',
    phonetic: 'A: OH-lah! Keh teh POHN-goh?\nB: BWEH-nahs, oon kah-FEH kohn LEH-cheh ee OO-nah tohs-TAH-dah kohn toh-MAH-teh, pohr fah-VOHR.\nA: Lah LEH-cheh lah kee-EH-res tem-PLAH-dah oh kah-lee-EN-teh?\nB: Kah-lee-EN-teh, pohr fah-VOHR. Tee-EH-nes LEH-cheh veh-heh-TAHL?\nA: See, teh-NEH-mohs deh ah-VEH-nah ee deh SOH-hah.',
    grammarNotes: 'Spanish café ritual: ¿Qué te pongo? (colloquial Spanish for what can I get you); tostada con tomate (classic Spanish breakfast); leche templada (room temp/warm milk).',
    hint: 'Situation: Ordering breakfast at a local bar/café in Spain.',
    exampleSentences: [
      { target: '¿Cuánto es todo, por favor?', translation: 'How much is everything, please?', phonetic: 'KWAHN-toh es TOH-doh, pohr fah-VOHR?' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Disculpe, ¿sabe dónde está la parada de metro más cercana?\nB: Sí, siga todo recto por esta avenida hasta la plaza.\nA: ¿Y luego en la plaza?\nB: Gire a la derecha, verá la boca del metro justo frente al banco.\nA: ¡Muchísimas gracias!\nB: De nada, ¡buen viaje!',
    back: 'A: Excuse me, do you know where the nearest metro station is?\nB: Yes, go straight along this avenue until the plaza.\nA: And then at the plaza?\nB: Turn to the right, you will see the metro entrance right opposite the bank.\nA: Thank you very much!\nB: You are welcome, have a good trip!',
    phonetic: 'A: Dees-KOOL-peh, SAH-beh DOHN-deh es-TAH lah pah-RAH-dah deh MEH-troh mahs sehr-KAH-nah?\nB: See, SEE-gah TOH-doh REHK-toh pohr EHS-tah ah-veh-NEE-dah OOS-tah lah PLAH-sah.\nA: Ee LWEH-goh en lah PLAH-sah?\nB: HEE-reh ah lah deh-REH-chah, veh-RAH lah BOH-kah del MEH-troh HOOS-toh FREN-teh ahl BAHN-koh.\nA: Moo-CHEE-see-mahs GRAH-see-ahs!\nB: Deh NAH-dah, bwen vee-AH-heh!',
    grammarNotes: 'Polite directions: siga todo recto (continue straight); gire a la derecha (turn right); boca del metro (subway entrance).',
    hint: 'Situation: Asking for the closest subway station in a Spanish city.',
    exampleSentences: [
      { target: '¿Está a poca distancia a pie?', translation: 'Is it within short walking distance?', phonetic: 'Es-TAH ah POH-kah dees-TAHN-see-ah ah PYEH?' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Buenas tardes, ¿podríamos ver la carta de postres?\nB: Por supuesto, aquí la tienen. Les recomiendo el flan casero o la tarta de queso.\nA: La tarta de queso suena deliciosa. Y tráiganos la cuenta cuando pueda, por favor.\nB: Enseguida se la traigo. ¿Van a pagar con tarjeta o en efectivo?\nA: Con tarjeta, si es tan amable.',
    back: 'A: Good afternoon, could we see the dessert menu?\nB: Of course, here you have it. I recommend the homemade flan or the cheesecake.\nA: The cheesecake sounds delicious. And bring us the bill whenever you can, please.\nB: I\'ll bring it right away. Will you be paying by card or cash?\nA: With card, if you would be so kind.',
    phonetic: 'A: BWEH-nahs TAR-des, poh-DREE-ah-mohs vehr lah KAR-tah deh POHS-tres?\nB: Pohr soo-PWEHS-toh, ah-KEE lah tee-EH-nen. Les reh-koh-mee-EN-doh el flahn kah-SEH-roh oh lah TAR-tah deh KEH-soh.\nA: Lah TAR-tah deh KEH-soh SWEH-nah deh-lee-SYOH-sah. Ee TRY-gah-nohs lah KWEHN-tah KWAHN-doh PWEH-dah, pohr fah-VOHR.\nB: En-seh-GEE-dah seh lah TRY-goh. VAHN ah pah-GAHR kohn tar-HEH-tah oh en eh-fehk-TEE-voh?\nA: Kohn tar-HEH-tah, see es tahn ah-MAH-bleh.',
    grammarNotes: 'Restaurant dining: carta de postres (dessert menu); flan casero (homemade flan); pagar con tarjeta (pay with card); si es tan amable (polite courtesy).',
    hint: 'Situation: Finishing dinner and asking for the bill at a restaurant.',
    exampleSentences: [
      { target: 'Estaba todo riquísimo, felicitaciones al cocinero.', translation: 'Everything was delicious, compliments to the chef.', phonetic: 'Es-TAH-bah TOH-doh ree-KEE-see-moh, feh-lee-see-tah-SYOH-nes ahl koh-see-NEH-roh.' }
    ]
  },

  // =========================================================================
  // ADDITIONAL PRACTICAL SPANISH DIALOGUES (Diálogos Prácticos en Español)
  // =========================================================================
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: ¡Hola! ¿Qué tal estás?\nB: ¡Muy bien! ¿Y tú?\nA: Todo bien, gracias.',
    back: 'A: Hello! How are you doing?\nB: Very well! And you?\nA: Everything good, thanks.',
    phonetic: 'A: OH-lah! Keh tahl es-TAHS?\nB: Mwee byen! Ee too?\nA: TOH-doh byen, GRAH-syahs.',
    grammarNotes: 'Ultra-common Spanish daily greeting: ¿Qué tal? (How are things?); Todo bien (Everything good).',
    hint: 'Situation: Quick informal greeting on the street.',
    exampleSentences: [
      { target: '¿Qué tal?', translation: 'How\'s it going?', phonetic: 'Keh tahl?' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Buenas, ¿me cobras por favor?\nB: Sí, claro. Son doce euros con cincuenta.\nA: ¿Puedo pagar con tarjeta contactless?\nB: Sí, por supuesto, acércala al datáfono.',
    back: 'A: Hi, can you charge me please? (The bill please)\nB: Yes, of course. It is twelve euros fifty.\nA: Can I pay with contactless card?\nB: Yes, of course, tap it on the card terminal.',
    phonetic: 'A: BWEH-nahs, meh KOH-brahs pohr fah-VOHR?\nB: See, KLAH-roh. Sohn DOH-seh EH-oo-rohs kohn seen-KWEN-tah.\nA: PWEH-doh pah-GAHR kohn tar-HEH-tah kohn-TAK-tles?\nB: See, pohr soo-PWEHS-toh, ah-SEHR-kah-lah ahl dah-TAH-foh-noh.',
    grammarNotes: 'Payment in Spain: ¿Me cobras? (colloquial for can I pay/the bill please); datáfono (card payment terminal / POS).',
    hint: 'Situation: Paying the bill at a tapas bar or shop.',
    exampleSentences: [
      { target: 'La cuenta, por favor.', translation: 'The bill, please.', phonetic: 'Lah KWEHN-tah, pohr fah-VOHR.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Disculpe, ¿dónde está la farmacia más cercana?\nB: Está a la vuelta de la esquina, al lado del supermercado.\nA: ¿Está abierta a esta hora?\nB: Sí, es farmacia de guardia, está abierta 24 horas.',
    back: 'A: Excuse me, where is the nearest pharmacy?\nB: It is around the corner, next to the supermarket.\nA: Is it open at this hour?\nB: Yes, it is an on-call pharmacy, open 24 hours.',
    phonetic: 'A: Dees-KOOL-peh, DOHN-deh es-TAH lah far-MAH-syah mahs sehr-KAH-nah?\nB: Es-TAH ah lah VWEL-tah deh lah es-KEE-nah, ahl LAH-doh del soo-pehr-mehr-KAH-doh.\nA: Es-TAH ah-BYEHR-tah ah EHS-tah OH-rah?\nB: See, es far-MAH-syah deh GWAHR-dyah, es-TAH ah-BYEHR-tah veyn-tee-KWAH-troh OH-rahs.',
    grammarNotes: 'Key pharmacy terms: farmacia de guardia (duty/on-call 24h pharmacy); a la vuelta de la esquina (around the corner).',
    hint: 'Situation: Finding an emergency pharmacy late at night in a Spanish town.',
    exampleSentences: [
      { target: 'A la vuelta de la esquina.', translation: 'Around the corner.', phonetic: 'Ah lah VWEL-tah deh lah es-KEE-nah.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: ¿Tiene una mesa para dos personas?\nB: ¿Tienen reserva?\nA: No, no tenemos.\nB: No hay problema, pasen por aquí.',
    back: 'A: Do you have a table for two people?\nB: Do you have a reservation?\nA: No, we don\'t have one.\nB: No problem, come this way.',
    phonetic: 'A: TYEH-neh OO-nah MEH-sah PAH-rah dohs pehr-SOH-nahs?\nB: TYEH-nen reh-SEHR-vah?\nA: Noh, noh teh-NEH-mohs.\nB: Noh eye proh-BLEH-mah, PAH-sen pohr ah-KEE.',
    grammarNotes: 'Restaurant arrival: mesa para dos (table for two); reserva (reservation); pasen por aquí (come this way / right this way).',
    hint: 'Situation: Arriving at a restaurant without a reservation.',
    exampleSentences: [
      { target: 'Una mesa para dos, por favor.', translation: 'A table for two, please.', phonetic: 'OO-nah MEH-sah PAH-rah dohs, pohr fah-VOHR.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: ¿A qué hora sale el autobús para el aeropuerto?\nB: Sale cada veinte minutos desde la dársena tres.\nA: ¿Cuánto cuesta el billete?\nB: Cinco euros, se lo compras directamente al conductor.',
    back: 'A: What time does the bus to the airport leave?\nB: It leaves every twenty minutes from platform three.\nA: How much does the ticket cost?\nB: Five euros, you buy it directly from the driver.',
    phonetic: 'A: Ah keh OH-rah SAH-leh el ow-toh-BOOS PAH-rah el eye-roh-PWEHR-toh?\nB: SAH-leh KAH-dah VEYN-teh mee-NOO-tohs DEHS-deh lah DAHR-seh-nah trehs.\nA: KWAHN-toh KWEHS-tah el bee-YEH-teh?\nB: SEEN-koh EH-oo-rohs, seh loh KOHM-prahs dee-REHK-tah-MEN-teh ahl kohn-dook-TOHR.',
    grammarNotes: 'Transit terms: dársena (bus bay / gate); billete (ticket); conductor (driver); cada veinte minutos (every 20 minutes).',
    hint: 'Situation: Inquiring about airport shuttle bus departure and tickets.',
    exampleSentences: [
      { target: '¿Cuánto cuesta el billete?', translation: 'How much is the ticket?', phonetic: 'KWAHN-toh KWEHS-tah el bee-YEH-teh?' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Perdona, ¿hablas inglés?\nB: Un poco, pero prefiero hablar en español despacio.\nA: ¡Perfecto! Estoy aprendiendo español.\nB: ¡Muy bien, ánimo!',
    back: 'A: Excuse me, do you speak English?\nB: A little, but I prefer to speak in Spanish slowly.\nA: Perfect! I am learning Spanish.\nB: Very good, keep it up!',
    phonetic: 'A: Pehr-DOH-nah, AH-blahs een-GLEHS?\nB: Oon POH-koh, PEH-roh preh-FYEH-roh ah-BLAHR en es-pah-NYOHL des-PAH-syoh.\nA: Pehr-FEHK-toh! Es-TOY ah-pren-DYEN-doh es-PAH-nyohl.\nB: Mwee byen, AH-nee-moh!',
    grammarNotes: 'Language practice: Perdona (excuse me informal); despacio (slowly); ¡Ánimo! (Cheer up! / Keep going! / You got this!).',
    hint: 'Situation: Practicing conversational Spanish with a friendly local.',
    exampleSentences: [
      { target: 'Más despacio, por favor.', translation: 'More slowly, please.', phonetic: 'Mahs des-PAH-syoh, pohr fah-VOHR.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Hola, ¿me pone un kilo de naranjas y medio kilo de tomates?\nB: Aquí tiene. ¿Algo más?\nA: No, nada más. ¿Cuánto es?\nB: Cuatro euros en total.',
    back: 'A: Hello, can I get one kilo of oranges and half a kilo of tomatoes?\nB: Here you are. Anything else?\nA: No, nothing else. How much is it?\nB: Four euros in total.',
    phonetic: 'A: OH-lah, meh POH-neh oon KEE-loh deh nah-RAHN-hahs ee MEH-dyoh KEE-loh deh toh-MAH-tes?\nB: Ah-KEE TYEH-neh. AHL-goh mahs?\nA: Noh, NAH-dah mahs. KWAHN-toh es?\nB: KWAH-troh EH-oo-rohs en toh-TAHL.',
    grammarNotes: 'Fruit & market shopping: un kilo (1 kg); medio kilo (0.5 kg); ¿Algo más? (Anything else?); Nada más (Nothing else).',
    hint: 'Situation: Buying fresh produce at a local Spanish frutería.',
    exampleSentences: [
      { target: '¿Algo más?', translation: 'Anything else?', phonetic: 'AHL-goh mahs?' },
      { target: 'Nada más, gracias.', translation: 'Nothing else, thanks.', phonetic: 'NAH-dah mahs, GRAH-syahs.' }
    ]
  },
  // =========================================================================
  // MEXICAN & LATIN AMERICAN COLLOQUIAL DIALOGUES: "CHAMBA" & "CHINGADO"
  // =========================================================================
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: ¡Qué onda, carnal! ¿A dónde vas tan temprano?\nB: Pues ya me voy a la chamba, hoy toca jornada pesada.\nA: ¡Ánimo con la chamba! Ojalá salgas temprano para echarnos unos tacos.',
    back: 'A: What\'s up, bro! Where are you off to so early?\nB: Well, I\'m heading off to work, today is going to be a heavy shift.\nA: Keep your spirits up with work! Hopefully you get off early so we can grab some tacos.',
    phonetic: 'A: Keh OHN-dah, kar-NAHL! Ah DOHN-deh vahs tahn tem-PRAH-noh?\nB: Pwehs yah meh voy ah lah CHAHM-bah, oy TOH-kah hor-NAH-dah peh-SAH-dah.\nA: AH-nee-moh kohn lah CHAHM-bah! Oh-hah-LAH SAHL-gahs tem-PRAH-noh PAH-rah eh-CHAR-nohs OO-nohs TAH-kohs.',
    grammarNotes: '“Chamba” is standard Mexican and Latin American slang for job / work (trabajo). “Carnal” = close friend / bro. “Toca...” = it\'s time for / turns out to be.',
    hint: 'Situation: Greeting a friend in the morning on their way to work.',
    exampleSentences: [
      { target: 'Voy a la chamba.', translation: 'I\'m going to work.', phonetic: 'Voy ah lah CHAHM-bah.' },
      { target: 'Tengo un buen de chamba.', translation: 'I have a ton of work.', phonetic: 'TEN-goh oon bwen deh CHAHM-bah.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: ¡Me lleva el chingado! Se me fue el camión y ya voy tardísimo.\nB: Tranquilo, güey, no te estreses. Pide un taxi o un Uber.\nA: No manches, ya es la segunda vez esta semana.',
    back: 'A: Oh damn it all! I missed the bus and I\'m already super late.\nB: Chill out, dude, don\'t stress. Call a taxi or an Uber.\nA: No way / You\'ve got to be kidding, it\'s already the second time this week.',
    phonetic: 'A: Meh YEH-vah el cheen-GAH-doh! Seh meh fweh el kah-MYOHN ee yah voy tar-DEE-see-moh.\nB: Trahn-KEE-loh, gway, noh teh es-TREH-ses. PEE-deh oon TAHK-see oh oon OO-ber.\nA: Noh MAHN-ches, yah es lah seh-GOON-dah vehs EHS-tah seh-MAH-nah.',
    grammarNotes: '“¡Me lleva el chingado!” is a very common Mexican expletive expression of frustration / bad luck ("damn it! / screw it!"). “Güey” = dude. “No manches” = no way / come on.',
    hint: 'Situation: Frustration over missing public transit.',
    exampleSentences: [
      { target: '¡Me lleva el chingado!', translation: 'Damn it all! / Curses!', phonetic: 'Meh YEH-vah el cheen-GAH-doh!' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Oye, ¿conseguiste la chamba de programador que querías?\nB: ¡Sí, compadre! Mañana firmo el contrato con prestaciones completas.\nA: ¡Eso es todo! Te lo mereces por chambeador.',
    back: 'A: Hey, did you land that programmer job you wanted?\nB: Yes, buddy! Tomorrow I sign the contract with full benefits.\nA: That\'s what I\'m talking about! You deserve it for being such a hard worker.',
    phonetic: 'A: OH-yeh, kohn-seh-GEES-teh lah CHAHM-bah deh proh-grah-mah-DOHR keh keh-REE-ahs?\nB: See, kohm-PAH-dreh! Mah-NYAH-nah FEER-moh el kohn-TRAH-toh kohn pres-tah-SYOH-nes kohm-PLEH-tahs.\nA: EH-soh es TOH-doh! Teh loh meh-REH-ses pohr chahm-beh-ah-DOHR.',
    grammarNotes: 'Derivatives of chamba: “chambeador / chambeadora” = hard-working person; “chambear” (verb) = to work / hustle.',
    hint: 'Situation: Celebrating landing a new software engineering job.',
    exampleSentences: [
      { target: 'Él es muy chambeador.', translation: 'He is a very hard worker.', phonetic: 'El es mwee chahm-beh-ah-DOHR.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: ¿Por qué no arranca tu coche?\nB: Se chingó la batería por dejar las luces prendidas toda la noche.\nA: ¡Qué coraje! Deja busco los cables para pasar corriente.',
    back: 'A: Why won\'t your car start?\nB: The battery broke down / got ruined because I left the lights on all night.\nA: What a pain! Let me grab the jumper cables to jump-start it.',
    phonetic: 'A: Pohr keh noh ah-RAHN-kah too KOH-cheh?\nB: Seh cheen-GOH lah bah-teh-REE-ah pohr deh-HAHR lahs LOO-ses pren-DEE-dahs TOH-dah lah NOH-cheh.\nA: Keh koh-RAH-heh! DEH-hah BOOS-koh lohs KAH-bles PAH-rah pah-SAHR koh-RYEN-teh.',
    grammarNotes: '“Chingarse” as a verb often means to break down, ruin, or malfunction (e.g., “se chingó el carro / la tele”).',
    hint: 'Situation: Dealing with a broken-down car battery.',
    exampleSentences: [
      { target: 'Se me chingó el celular.', translation: 'My phone broke down / got ruined.', phonetic: 'Seh meh cheen-GOH el seh-loo-LAHR.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Buenas tardes, ¿se encuentra el señor Rodríguez?\nB: No está, se fue hasta la chingada a supervisar una obra fuera del estado.\nA: ¿Y cuándo regresa?\nB: Hasta el próximo viernes si no hay contratiempos.',
    back: 'A: Good afternoon, is Mr. Rodríguez around?\nB: He\'s not here, he went extremely far away / out in the middle of nowhere to supervise a project out of state.\nA: And when does he return?\nB: Not until next Friday if there are no delays.',
    phonetic: 'A: BWEH-nahs TAR-des, seh en-KWEN-trah el seh-NYOHR roh-DREE-ges?\nB: Noh es-TAH, seh fweh AHS-tah lah cheen-GAH-dah ah soo-pair-vee-SAHR OO-nah OH-brah FWEH-rah del es-TAH-doh.\nA: Ee KWAHN-doh reh-GREH-sah?\nB: AHS-tah el PROHK-see-moh VYEHR-nes see noh eye kohn-trah-TYEM-pohs.',
    grammarNotes: 'Idiom: “Hasta la chingada” = extremely far away / in the boonies. Highly colloquial Mexican Spanish.',
    hint: 'Situation: Asking for someone who travelled far away for work.',
    exampleSentences: [
      { target: 'Ese lugar está hasta la chingada.', translation: 'That place is way out in the middle of nowhere.', phonetic: 'EH-seh loo-GAHR es-TAH AHS-tah lah cheen-GAH-dah.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: ¿Nos vemos hoy en la noche para unas cervezas?\nB: No manches, hoy no puedo, salgo tardísimo de la chamba y mañana me toca abrir.\nA: ¡Qué lástima! Entonces el fin de semana sin falta.\nB: Hecho, el sábado nos desquitamos.',
    back: 'A: Shall we meet tonight for a few beers?\nB: No way, I can\'t today, I get off work super late and tomorrow I have opening shift.\nA: What a bummer! Then this weekend without fail.\nB: Deal, Saturday we make up for it.',
    phonetic: 'A: Nohs VEH-mohs oy en lah NOH-cheh PAH-rah OO-nahs sehr-VEH-zahs?\nB: Noh MAHN-ches, oy noh PWEH-doh, SAHL-goh tar-DEE-see-moh deh lah CHAHM-bah ee mah-NYAH-nah meh TOH-kah ah-BREER.\nA: Keh LAHS-tee-mah! En-TOHN-ses el feen deh seh-MAH-nah seen FAHL-tah.\nB: EH-choh, el SAH-bah-doh nohs des-kee-TAH-mohs.',
    grammarNotes: 'Work vs leisure: “salir de la chamba” = to get off work; “toca abrir” = scheduled to open up; “desquitarse” = to make up for lost time.',
    hint: 'Situation: Declining a drink invite because of intense work schedule.',
    exampleSentences: [
      { target: 'Acabo de salir de la chamba.', translation: 'I just got off work.', phonetic: 'Ah-KAH-boh deh sah-LEER deh lah CHAHM-bah.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Mira este código que escribió el nuevo pasante, ¡está bien chingón!\nB: ¡Órale, sí que le sabe! Resolvió el bug en diez minutos.\nA: Hay que reconocer cuando alguien hace una chamba excelente.',
    back: 'A: Look at this code the new intern wrote, it\'s totally awesome / badass!\nB: Wow, he really knows his stuff! He resolved the bug in ten minutes.\nA: You have to recognize when someone does excellent work.',
    phonetic: 'A: MEE-rah EHS-teh KOH-dee-goh keh es-kree-BYOH el NWEH-voh pah-SAHN-teh, es-TAH byen cheen-GOHN!\nB: OH-rah-leh, see keh leh SAH-beh! Reh-zohl-VYOH el boog en dyehs mee-NOO-tohs.\nA: Eye keh reh-koh-noh-SEHR KWAHN-doh AHL-gyen AH-seh OO-nah CHAHM-bah ek-seh-LEN-teh.',
    grammarNotes: 'Positive use of “chingón”: In Mexico, “chingón / chingona” is high praise meaning awesome, badass, top-notch, or remarkably skilled.',
    hint: 'Situation: Praising a colleague\'s top-notch software code.',
    exampleSentences: [
      { target: 'Te quedó bien chingón.', translation: 'It turned out super awesome / great.', phonetic: 'Teh keh-DOH byen cheen-GOHN.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B2',
    cardType: 'dialogue',
    front: 'A: Te ves bien agotado, ¿todo bien?\nB: Me estuve chingando doce horas seguidas para entregar este reporte a tiempo.\nA: Tómate un respiro, caray. La salud es primero que cualquier chamba.\nB: Tienes toda la razón, ya voy a apagar la computadora.',
    back: 'A: You look completely exhausted, everything alright?\nB: I was busting my ass / grinding twelve hours straight to deliver this report on time.\nA: Take a breather, man. Health comes before any job.\nB: You are completely right, I\'m turning off the computer now.',
    phonetic: 'A: Teh ves byen ah-goh-TAH-doh, TOH-doh byen?\nB: Meh es-TOO-veh cheen-GAHN-doh DOH-seh OH-rahs seh-GEE-dahs PAH-rah en-treh-GAHR EHS-teh reh-POHR-teh ah TYEM-poh.\nA: TOH-mah-teh oon res-PEE-roh, kah-RYE. Lah sah-LOOD es pree-MEH-roh keh kwahl-KYEHR CHAHM-bah.\nB: TYEH-nes TOH-dah lah rah-ZOHN, yah voy ah ah-pah-GAHR lah kohm-poo-tah-DOH-rah.',
    grammarNotes: '“Chingarle” (reflexive slang) = to work extremely hard, grind, sweat, or bust one\'s tail for something.',
    hint: 'Situation: Checking in on an overworked friend.',
    exampleSentences: [
      { target: 'Hay que chingarle duro.', translation: 'One has to grind / bust one\'s tail hard.', phonetic: 'Eye keh cheen-GAHR-leh DOO-roh.' }
    ]
  },
  // =========================================================================
  // REAL-LIFE COLLOQUIAL SPANISH DIALOGUES (Español Auténtico y Expresiones Callejeras)
  // =========================================================================
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: ¡Tío, qué pasada de concierto ayer! ¿A que estuvo brutal?\nB: ¡Totalmente! La banda lo petó. Hacía tiempo que no me lo pasaba tan bien.\nA: Venga, vamos a tomar una caña y comentamos la jugada.\nB: ¡Vale, me apunto de cabeza!',
    back: 'A: Dude/Man, what an amazing concert yesterday! Wasn\'t it incredible?\nB: Totally! The band crushed it / blew the roof off. It had been ages since I had such a blast.\nA: Come on, let\'s go grab a draught beer and talk over the details.\nB: Alright, I\'m in 100%!',
    phonetic: 'A: TEE-oh, keh pah-SAH-dah deh kohn-SYEHR-toh ah-YEHR! Ah keh es-TOO-voh broo-TAHL?\nB: Toh-tahl-MEN-teh! Lah BAHN-dah loh peh-TOH. Ah-SEE-ah TYEM-poh keh noh meh loh pah-SAH-bah tahn byen.\nA: VEN-gah, VAH-mohs ah toh-MAHR OO-nah KAH-nyah ee koh-men-TAH-mohs lah hoo-GAH-dah.\nB: VAH-leh, meh ah-POON-toh deh kah-BEH-sah!',
    grammarNotes: 'Castilian Spanish street mastery: “tío” (dude/mate); “lo petó” (they killed it / smashed it); “tomar una caña” (grab a draft beer); “me apunto de cabeza” (count me in enthusiastically); “vale” (okay).',
    hint: 'Situation: Two friends excitedly recapping a live concert over tapas and beer in Spain.',
    exampleSentences: [
      { target: '¡Qué pasada!', translation: 'How incredible / amazing!', phonetic: 'Keh pah-SAH-dah!' },
      { target: '¡Me apunto!', translation: 'Count me in / I\'m down!', phonetic: 'Meh ah-POON-toh!' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: ¡Ponte las pilas, parce! Que si no entregamos el trabajo hoy, nos jalan la materia.\nB: Fresco, relajate un rato. Ya casi termino la última parte, solo me falta revisar los gráficos.\nA: Hágale pues, que el profe no perdona ni un minuto de retraso.\nB: De una, en media hora queda listo.',
    back: 'A: Get your act together / hurry up, buddy! If we don\'t turn in the paper today, we\'ll fail the class.\nB: Relax, take it easy for a moment. I\'m almost done with the last part, I just need to check the graphs.\nA: Get on with it then, the professor won\'t forgive even a single minute of delay.\nB: Right away / on it, it\'ll be ready in half an hour.',
    phonetic: 'A: POHN-teh lahs PEE-lahs, PAR-seh! Keh see noh en-treh-GAH-mohs el trah-BAH-hoh oy, nohs HAH-lahn lah mah-TEH-ryah.\nB: FREHS-koh, reh-lah-HAH-teh oon RAH-toh. Yah KAH-see tehr-MEE-noh lah OOL-tee-mah PAR-teh, SOH-loh meh FAHL-tah reh-vee-SAHR lohs GRAH-fee-kohs.\nA: AH-gah-leh pwehs, keh el PROH-feh noh pehr-DOH-nah nee oon mee-NOO-toh deh reh-TRAH-soh.\nB: Deh OO-nah, en MEH-dyah OH-rah KEH-dah LEES-toh.',
    grammarNotes: 'Latin American (Colombian/Andean) colloquial mastery: “ponerse las pilas” (get energized/focused); “parce” (bro/friend); “fresco” (cool/chill); “hágale pues” (go for it / hurry up); “de una” (right away / instantly).',
    hint: 'Situation: University students rushing to submit a final group project before deadline.',
    exampleSentences: [
      { target: '¡Ponte las pilas!', translation: 'Get your act together / step it up!', phonetic: 'POHN-teh lahs PEE-lahs!' },
      { target: '¡De una!', translation: 'Right away / absolutely!', phonetic: 'Deh OO-nah!' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: ¿Qué onda? ¿Vamos a comer algo que me estoy muriendo de hambre?\nB: ¡Jalo! Conozco un puesto de birria que está para chuparse los dedos.\nA: ¡Uff, ya se me hizo agua la boca! Vámonos en corto.\nB: Órale, deja agarro mis llaves.',
    back: 'A: What\'s up? Shall we go grab something to eat, I\'m starving to death?\nB: I\'m in / Let\'s do it! I know a birria taco stand that is finger-licking good.\nA: Oof, my mouth is already watering! Let\'s go right now / right away.\nB: Alright, let me grab my keys.',
    phonetic: 'A: Keh OHN-dah? VAH-mohs ah koh-MEHR AHL-goh keh meh es-TOY moo-RYEN-doh deh AHM-breh?\nB: HAH-loh! Koh-NOHZ-koh oon PWEHS-toh deh BEER-ryah keh es-TAH PAH-rah choo-PAHR-seh lohs DEH-dohs.\nA: Oof, yah seh meh EE-zoh AH-gwah lah BOH-kah! VAH-moh-nohs en KOHR-toh.\nB: OH-rah-leh, DEH-hah ah-GAH-roh mees YAH-ves.',
    grammarNotes: 'Mexican casual authenticity: “¿Qué onda?” (What\'s up?); “¡Jalo!” (I\'m in / count me in); “en corto” (immediately / pronto); “para chuparse los dedos” (finger-licking good); “órale” (alright / let\'s do it).',
    hint: 'Situation: Going on a spontaneous street taco run with a friend.',
    exampleSentences: [
      { target: '¡Jalo!', translation: 'I\'m in! / Count me in!', phonetic: 'HAH-loh!' },
      { target: 'Se me hace agua la boca.', translation: 'My mouth is watering.', phonetic: 'Seh meh AH-seh AH-gwah lah BOH-kah.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: ¿Supiste lo que le pasó a Mateo el fin de semana?\nB: ¡Cuenta el chisme completo, no me dejes con la intriga!\nA: Pues resulta que se encontró a su ex en el antro y se le armó un drama tremendo.\nB: ¡Qué oso! Yo me hubiera querido meter bajo tierra.',
    back: 'A: Did you hear what happened to Mateo over the weekend?\nB: Spill the whole gossip, don\'t leave me hanging!\nA: Well it turns out he ran into his ex at the club and a massive drama unfolded.\nB: How utterly embarrassing! I would have wanted to crawl under a rock / sink into the ground.',
    phonetic: 'A: Soo-PEES-teh loh keh leh pah-SOH ah mah-TEH-oh el feen deh seh-MAH-nah?\nB: KWEN-tah el CHEES-meh kohm-PLEH-toh, noh meh DEH-hes kohn lah een-TREE-gah!\nA: Pwehs reh-SOOL-tah keh seh en-kohn-TROH ah soo eks en el AHN-troh ee seh leh ar-MOH oon DRAH-mah treh-MEN-doh.\nB: Keh OH-soh! Yoh meh oo-BYEH-rah keh-REE-doh meh-TEHR BAH-hoh TYEH-rah.',
    grammarNotes: 'Latin American youth storytelling: “el chisme” (gossip); “¡Qué oso!” (How embarrassing / cringe - Mexico/Colombia); “el antro” (nightclub in Mexico); “meterse bajo tierra” (die of embarrassment).',
    hint: 'Situation: Gossiping playfully with close friends about weekend nightlife drama.',
    exampleSentences: [
      { target: '¡Qué oso!', translation: 'How embarrassing! / How cringe!', phonetic: 'Keh OH-soh!' },
      { target: '¡Cuenta el chisme!', translation: 'Spill the tea / gossip!', phonetic: 'KWEN-tah el CHEES-meh!' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Oye, ¿vamos a tapear esta noche por el centro?\nB: De lujo, pero que sea en un sitio con buenas bravas y pinchos.\nA: Conozco un bar castizo que pone unas tapas de muerte lenta con cada ronda.\nB: ¡Venga ya! Pues nos vemos ahí a las ocho.',
    back: 'A: Hey, shall we go out for tapas tonight in the center?\nB: Splendid / Awesome, but let it be a place with good patatas bravas and skewers.\nA: I know an authentic traditional bar that gives killer tapas with every round of drinks.\nB: Say no more / Come on! See you there at eight then.',
    phonetic: 'A: OH-yeh, VAH-mohs ah tah-peh-AHR EHS-tah NOH-cheh pohr el TSEN-troh?\nB: Deh LOO-hoh, PEH-roh keh SEH-ah en oon SEE-tyoh kohn BWEH-nahs BRAH-vahs ee PEEN-chohs.\nA: Koh-NOHZ-koh oon bahr kahs-TEE-thoh keh POH-neh OO-nahs TAH-pahs deh MWEHR-teh LEN-tah kohn KAH-dah ROHN-dah.\nB: VEN-gah yah! Pwehs nohs VEH-mohs ah-EE ah lahs OH-choh.',
    grammarNotes: 'Madrid/Spain tapas culture: “tapear” (to go hopping for tapas); “de lujo” (top notch / luxury); “castizo” (authentic traditional); “de muerte lenta” (to die for / delicious); “patatas bravas” (spicy fried potatoes).',
    hint: 'Situation: Planning a tapas crawl through historic Madrid.',
    exampleSentences: [
      { target: 'Vamos a tapear.', translation: 'Let\'s go out for tapas.', phonetic: 'VAH-mohs ah tah-peh-AHR.' },
      { target: 'Esto está de muerte.', translation: 'This is to die for / heavenly delicious.', phonetic: 'EHS-toh es-TAH deh MWEHR-teh.' }
    ]
  },
  {
    languageId: 'spanish',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Che, ¿te venís a comer un asado a casa el domingo?\nB: ¡De una, boludo! ¿Qué llevo? ¿Un vinito o algo para la picada?\nA: Traete un Malbec y unas cervezas bien frías para la previa.\nB: Dale, joya, contá conmigo.',
    back: 'A: Hey mate, are you coming over to eat a barbecue at my place on Sunday?\nB: Absolutely, dude! What should I bring? A nice wine or something for the appetizer board?\nA: Bring along a Malbec and some ice-cold beers for the warm-up.\nB: Alright, awesome / brilliant, count on me.',
    phonetic: 'A: Cheh, teh veh-NEES ah koh-MEHR oon ah-SAH-doh ah KAH-sah el doh-MEEN-goh?\nB: Deh OO-nah, boh-LOO-doh! Keh YEH-voh? Oon vee-NEE-toh oh AHL-goh PAH-rah lah pee-KAH-dah?\nA: Try-EH-teh oon mahl-BEK ee OO-nahs sehr-VEH-zahs byen FREE-ahs PAH-rah lah PREH-vyah.\nB: DAH-leh, HOH-yah, kohn-TAH kohn-MEE-goh.',
    grammarNotes: 'Rioplatense (Argentina/Uruguay) authenticity: voseo (“te venís”, “traete”, “contá”); “che” (hey); “boludo” (colloquial dude); “asado” (bbq); “la previa” (pre-gathering); “joya” (brilliant/awesome).',
    hint: 'Situation: Authentic Argentine Sunday barbecue (asado) invitation.',
    exampleSentences: [
      { target: '¡De una, joya!', translation: 'Right on, awesome!', phonetic: 'Deh OO-nah, HOH-yah!' },
      { target: 'Contá conmigo.', translation: 'Count on me.', phonetic: 'Kohn-TAH kohn-MEE-goh.' }
    ]
  },
  // =========================================================================
  // ENGLISH DIALOGUES (Short Dialogues)
  // =========================================================================
  {
    languageId: 'english',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Hey there! How are you doing today?\nB: I\'m doing great, thanks! How about you?\nA: Pretty good! Just heading over to the library to study.\nB: That sounds productive! Let\'s grab coffee afterwards.',
    back: 'A: ¡Hola! ¿Cómo estás hoy?\nB: ¡Muy bien, gracias! ¿Y tú?\nA: ¡Bastante bien! Solo voy a la biblioteca a estudiar.\nB: ¡Eso suena productivo! Tomemos un café después.',
    phonetic: 'A: Hey th-air! How are you DOO-ing tuh-DAY?\nB: I\'m DOO-ing grayt, thanks! How ah-BOWT you?\nA: PRIT-tee good! Just HED-ing OH-ver to the LY-brair-ee to STUH-dee.\nB: That sownds pro-DUK-tiv! Let\'s grab KAW-fee AF-ter-wards.',
    grammarNotes: 'Casual conversational greeting: "How are you doing today?"; "Pretty good!"; "Let\'s grab coffee" (idiom for going to drink coffee together).',
    hint: 'Situation: Casual street greeting between friends catching up.',
    exampleSentences: [
      { target: 'Catch you later!', translation: '¡Te veo luego!', phonetic: 'Katch you LAY-ter!' }
    ]
  },
  {
    languageId: 'english',
    topicId: 'dialogues-conversations',
    difficulty: 'A1',
    cardType: 'dialogue',
    front: 'A: Good morning! What can I get started for you?\nB: Hi! Could I please get an iced oat latte?\nA: Sure thing. What size would you like?\nB: A medium, please. And could you add an extra shot of espresso?\nA: Absolutely, coming right up!',
    back: 'A: ¡Buenos días! ¿Qué te puedo preparar?\nB: ¡Hola! ¿Me puedes poner un latte helado con leche de avena, por favor?\nA: Claro que sí. ¿Qué tamaño te gustaría?\nB: Un mediano, por favor. ¿Y podrías añadirle un shot extra de espresso?\nA: ¡Por supuesto, enseguida sale!',
    phonetic: 'A: Good MOR-ning! Wut can I get STAR-ted for you?\nB: Hy! Could I pleez get an eyst oht LAH-tay?\nA: Shoor thing. Wut syz would you lyk?\nB: A MEE-dee-um, pleez. And could you add an EKS-truh shot of es-PRES-soh?\nA: Ab-soh-LOOT-lee, KUM-ing ryt up!',
    grammarNotes: 'Modern coffee ordering: "What can I get started for you?"; "extra shot" (additional espresso dose); "coming right up" (preparing immediately).',
    hint: 'Situation: Ordering customized coffee at an artisan coffee bar.',
    exampleSentences: [
      { target: 'Can I get that to go?', translation: '¿Me lo puedes poner para llevar?', phonetic: 'Can I get that to go?' }
    ]
  },
  {
    languageId: 'english',
    topicId: 'dialogues-conversations',
    difficulty: 'A2',
    cardType: 'dialogue',
    front: 'A: Excuse me, could you tell me how to get to the art gallery from here?\nB: Yes, of course! Walk two blocks down this street and take a left at the corner.\nA: Is it past the public fountain?\nB: Exactly, it\'s right across from the park. You can\'t miss it!\nA: Thank you so much for your help!\nB: Any time, enjoy your visit!',
    back: 'A: Disculpe, ¿podría decirme cómo llegar a la galería de arte desde aquí?\nB: ¡Sí, por supuesto! Camina dos calles por aquí y gira a la izquierda en la esquina.\nA: ¿Está pasando la fuente pública?\nB: Exactamente, está justo enfrente del parque. ¡No tiene pérdida!\nA: ¡Muchas gracias por tu ayuda!\nB: ¡De nada, que disfrutes la visita!',
    phonetic: 'A: Ek-SKYOOZ mee, could you tell mee how to get to the art GAL-ler-ee from heer?\nB: Yes, of kors! Wawk too bloks down this street and tayk a left at the KOR-ner.\nA: Is it past the PUB-lik FOWN-ten?\nB: Eg-ZAKT-lee, it\'s ryt ah-KROS from the park. You can\'t mis it!\nA: Thank you soh much for yoor help!\nB: EN-ee tym, en-JOY yoor VIZ-it!',
    grammarNotes: 'Direction idioms: "two blocks down"; "right across from" (directly opposite); "You can\'t miss it" (very easy to spot); "Any time" (informal "you\'re welcome").',
    hint: 'Situation: Seeking navigational help to locate a tourist attraction.',
    exampleSentences: [
      { target: 'Is it within walking distance?', translation: '¿Se puede ir caminando?', phonetic: 'Is it with-in WAWK-ing DIS-tans?' }
    ]
  },
  {
    languageId: 'english',
    topicId: 'dialogues-conversations',
    difficulty: 'B1',
    cardType: 'dialogue',
    front: 'A: Do you have a quick minute to look over this presentation slide deck?\nB: Sure thing! I\'ve got ten minutes before my next team standup.\nA: I\'m trying to highlight our quarterly progress without overwhelming the executive team with raw data.\nB: Good thinking. I\'d recommend summarizing these graphs into three clear takeaways on the hero slide.\nA: That makes complete sense. Thanks for the fresh perspective!',
    back: 'A: ¿Tienes un minuto rápido para revisar esta presentación de diapositivas?\nB: ¡Claro que sí! Tengo diez minutos antes de mi próxima reunión del equipo.\nA: Estoy intentando destacar nuestro progreso trimestral sin abrumar al equipo ejecutivo con datos en bruto.\nB: Buena idea. Recomendaría resumir estos gráficos en tres conclusiones claras en la diapositiva principal.\nA: Tiene todo el sentido. ¡Gracias por la nueva perspectiva!',
    phonetic: 'A: Doo you hav a kwik MIN-ut to look OH-ver this pre-zen-TAY-shun slyd dek?\nB: Shoor thing! I\'ve got ten MIN-uts bee-FOHR my nekst teem STAND-up.\nA: I\'m TRY-ing to HY-lyt ow-er KWOR-ter-lee PROG-res with-owt oh-ver-WHEL-ming the eg-ZEK-yoo-tiv teem with raw DAY-tuh.\nB: Good THINK-ing. I\'d rek-o-MEND SUM-mah-ry-zing theez grafs in-to three kleer TAYK-uh-wayz on the HEE-roh slyd.\nA: That mayks kum-PLEET sens. Thanks for the fresh per-SPEK-tiv!',
    grammarNotes: 'Professional workplace English: slide deck (presentation slides); standup (brief status meeting); takeaways (key conclusions); fresh perspective (new viewpoint).',
    hint: 'Situation: Workplace collaboration on executive presentation materials.',
    exampleSentences: [
      { target: 'Let me know if you need another pair of eyes.', translation: 'Avísame si necesitas otro par de ojos para revisarlo.', phonetic: 'Let mee noh if you need ah-NUTH-er pair of eyz.' }
    ]
  }
];

import type {
  LanguageOption,
  TopicOption,
  DifficultyOption,
  LanguageId,
  DifficultyLevel,
} from '../types';

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    id: 'spanish',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    code: 'es-ES',
    description: 'Vibrant romance language spoken across 20+ countries worldwide.',
  },
  {
    id: 'english',
    name: 'English',
    nativeName: 'English',
    flag: '🇬🇧',
    code: 'en-US',
    description: 'Global lingua franca with rich vocabulary and expressive idioms.',
  },
  {
    id: 'german',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    code: 'de-DE',
    description: 'Precise grammatical structure with famously evocative compound nouns.',
  },
  {
    id: 'chinese',
    name: 'Chinese',
    nativeName: '中文 (Mandarin)',
    flag: '🇨🇳',
    code: 'zh-CN',
    description: 'Tonal language rich with Hanzi characters, Pinyin, and ancient idioms (Chengyu).',
  },
];

export const LANGUAGE_TOPICS: TopicOption[] = [
  {
    id: 'daily-travel',
    name: 'Daily Life & Travel',
    description: 'Cafés, city transit, directions, reservations, and everyday interactions.',
    icon: 'Plane',
  },
  {
    id: 'manners-etiquette',
    name: 'Manners & Social Protocol',
    description: 'Polite greetings, formal vs. informal addresses, and table etiquette.',
    icon: 'HeartHandshake',
  },
  {
    id: 'culture-history',
    name: 'Culture & Traditions',
    description: 'Festivals, heritage, culinary traditions, and famous cultural figures.',
    icon: 'Landmark',
  },
  {
    id: 'science-nature',
    name: 'Science & Nature',
    description: 'Weather phenomena, flora, fauna, health, astronomy, and technology.',
    icon: 'Atom',
  },
  {
    id: 'business-work',
    name: 'Business & Professional',
    description: 'Workplace meetings, email correspondence, negotiations, and leadership.',
    icon: 'Briefcase',
  },
  {
    id: 'idioms-expressions',
    name: 'Idioms, Proverbs & Wisdom',
    description: 'Figurative speech, colloquial metaphors, and timeless cultural wisdom.',
    icon: 'Sparkles',
  },
];

export const DIFFICULTY_LEVELS: DifficultyOption[] = [
  {
    id: 'beginner',
    name: 'Beginner',
    cefr: 'A1 – A2',
    badge: 'Beginner',
    description: 'Essential high-frequency vocabulary, basic sentence structures, and greeting fundamentals.',
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    cefr: 'B1 – B2',
    badge: 'Intermediate',
    description: 'Conversational fluency, past/future tenses, connecting ideas, and practical scenarios.',
  },
  {
    id: 'advanced',
    name: 'Advanced',
    cefr: 'C1',
    badge: 'Advanced',
    description: 'Nuanced expressions, formal discourse, subjunctive mood, and complex professional themes.',
  },
  {
    id: 'fluent',
    name: 'Fluent',
    cefr: 'C2',
    badge: 'Fluent Mastery',
    description: 'Native-level subtleties, literary rhetoric, cultural proverbs, and fast colloquial speech.',
  },
];

export interface CurriculumSeed {
  languageId: LanguageId;
  topicId: string;
  difficulty: DifficultyLevel;
  front: string;
  back: string;
  phonetic?: string;
  exampleTarget?: string;
  exampleTranslation?: string;
  grammarNotes?: string;
  hint?: string;
}

export const LANGUAGE_CURRICULUM_SEEDS: CurriculumSeed[] = [
  // ==========================================
  // SPANISH (🇪🇸)
  // ==========================================

  // Spanish - Daily Life & Travel - Beginner
  {
    languageId: 'spanish',
    topicId: 'daily-travel',
    difficulty: 'beginner',
    front: '¿Dónde está la estación de tren?',
    back: 'Where is the train station?',
    phonetic: 'DOHN-deh ehs-TAH lah ehs-tah-SYOHN deh trehn',
    exampleTarget: 'Disculpe, ¿dónde está la estación de tren más cercana?',
    exampleTranslation: 'Excuse me, where is the nearest train station?',
    grammarNotes: 'Uses "estar" for physical location. "Estación" is feminine (la estación).',
    hint: 'Use "dónde está" for physical locations.',
  },
  {
    languageId: 'spanish',
    topicId: 'daily-travel',
    difficulty: 'beginner',
    front: 'La cuenta, por favor.',
    back: 'The bill / check, please.',
    phonetic: 'lah KWEHN-tah, por fah-VOR',
    exampleTarget: 'Camarero, ¿nos trae la cuenta, por favor?',
    exampleTranslation: 'Waiter, could you bring us the bill, please?',
    grammarNotes: 'Standard polite way to ask for the bill at any restaurant or café.',
  },
  // Spanish - Daily Life & Travel - Intermediate
  {
    languageId: 'spanish',
    topicId: 'daily-travel',
    difficulty: 'intermediate',
    front: 'Perder el vuelo / Hacer transbordo',
    back: 'To miss the flight / To transfer (layover)',
    phonetic: 'pehr-DEHR ehl BWEH-loh / ah-SEHR trahns-BOR-doh',
    exampleTarget: 'Si el tren se retrasa, podríamos perder el vuelo de conexión.',
    exampleTranslation: 'If the train is delayed, we might miss the connecting flight.',
    grammarNotes: '"Perder" means both to lose an item and to miss a transport connection.',
  },
  // Spanish - Manners & Etiquette - Beginner
  {
    languageId: 'spanish',
    topicId: 'manners-etiquette',
    difficulty: 'beginner',
    front: 'Mucho gusto / Encantado(a)',
    back: 'Pleased to meet you / Delighted',
    phonetic: 'MOO-choh GOOS-toh / ehn-kahn-TAH-doh',
    exampleTarget: '—Soy Carlos. —Mucho gusto, Carlos, soy Elena.',
    exampleTranslation: '—I am Carlos. —Nice to meet you, Carlos, I am Elena.',
    grammarNotes: '"Encantado" ends in -o if you are male, -a if you are female.',
  },
  // Spanish - Manners & Etiquette - Intermediate
  {
    languageId: 'spanish',
    topicId: 'manners-etiquette',
    difficulty: 'intermediate',
    front: 'Tú vs. Usted (Tratamiento formal)',
    back: 'Informal "You" vs. Formal "You"',
    phonetic: 'too vs. oos-TEHD',
    exampleTarget: '¿Le gustaría a usted tomar asiento, señor Morales?',
    exampleTranslation: 'Would you like to take a seat, Mr. Morales?',
    grammarNotes: '"Usted" uses 3rd-person verb conjugations (él/ella/usted). Reserved for elders and professional respect.',
  },
  // Spanish - Culture & Traditions - Intermediate
  {
    languageId: 'spanish',
    topicId: 'culture-history',
    difficulty: 'intermediate',
    front: 'La sobremesa',
    back: 'The post-meal conversation at the table with companions.',
    phonetic: 'lah soh-breh-MEH-sah',
    exampleTarget: 'Nos quedamos dos horas disfrutando de la sobremesa después de comer.',
    exampleTranslation: 'We stayed two hours enjoying the table talk after lunch.',
    grammarNotes: 'A uniquely Spanish cultural concept with no direct one-word English translation.',
  },
  // Spanish - Science & Nature - Intermediate
  {
    languageId: 'spanish',
    topicId: 'science-nature',
    difficulty: 'intermediate',
    front: 'El cambio climático y la capa de ozono',
    back: 'Climate change and the ozone layer',
    phonetic: 'ehl KAHM-byoh klee-MAH-tee-koh',
    exampleTarget: 'Las energías renovables son clave para frenar el cambio climático.',
    exampleTranslation: 'Renewable energies are key to curbing climate change.',
    grammarNotes: '"Climático" takes an accent on the antepenultimate syllable (esdrújula rule).',
  },
  // Spanish - Business & Work - Advanced
  {
    languageId: 'spanish',
    topicId: 'business-work',
    difficulty: 'advanced',
    front: 'Llegar a un consenso / Cerrar el trato',
    back: 'To reach a consensus / To close the deal',
    phonetic: 'yeh-GAHR ah oon kohn-SEHN-soh',
    exampleTarget: 'Tras largas deliberaciones, logramos llegar a un consenso con los accionistas.',
    exampleTranslation: 'After lengthy deliberations, we managed to reach a consensus with the shareholders.',
    grammarNotes: '"Tras" is a formal preposition meaning "after/following".',
  },
  // Spanish - Idioms & Expressions - Fluent
  {
    languageId: 'spanish',
    topicId: 'idioms-expressions',
    difficulty: 'fluent',
    front: 'Estar en las nubes / Tomar el pelo',
    back: 'To be daydreaming (in the clouds) / To pull someone’s leg',
    phonetic: 'ehs-TAHR ehn lahs NOO-behs / toh-MAHR ehl PEH-loh',
    exampleTarget: 'No le hagas caso a Mateo, solo te está tomando el pelo.',
    exampleTranslation: 'Don’t pay attention to Mateo, he’s just pulling your leg.',
    grammarNotes: '"Tomar el pelo" literally means "to take the hair".',
  },

  // ==========================================
  // ENGLISH (🇬🇧 / 🇺🇸)
  // ==========================================

  // English - Daily Life & Travel - Beginner
  {
    languageId: 'english',
    topicId: 'daily-travel',
    difficulty: 'beginner',
    front: 'Could you tell me how to get to the airport?',
    back: 'Polite inquiry asking for directions to the airport.',
    phonetic: '/kʊd juː tɛl miː haʊ tuː ɡɛt tuː ði ˈeəpɔːt/',
    exampleTarget: 'Excuse me, could you tell me how to get to the airport by subway?',
    exampleTranslation: 'Excuse me, could you tell me how to reach the airport using the subway?',
    grammarNotes: '"Could" is more polite than "Can". Followed by bare infinitive "tell".',
  },
  // English - Manners & Etiquette - Intermediate
  {
    languageId: 'english',
    topicId: 'manners-etiquette',
    difficulty: 'intermediate',
    front: 'Would you mind if I... / I would appreciate it if...',
    back: 'Polite formula for requesting permission or assistance without imposing.',
    phonetic: '/wʊd juː maɪnd ɪf/',
    exampleTarget: 'Would you mind if I opened the window for some fresh air?',
    exampleTranslation: 'Would you object if I opened the window to let fresh air in?',
    grammarNotes: '"Would you mind if I..." is traditionally followed by the past subjunctive (e.g. "opened").',
  },
  // English - Science & Nature - Advanced
  {
    languageId: 'english',
    topicId: 'science-nature',
    difficulty: 'advanced',
    front: 'Photosynthesis & Cellular Respiration',
    back: 'Process by which plants convert sunlight into chemical energy ($6CO_2 + 6H_2O \\to C_6H_{12}O_6 + 6O_2$).',
    phonetic: '/ˌfəʊ.təʊˈsɪn.θə.sɪs/',
    exampleTarget: 'Chlorophyll absorbs blue and red wavelengths of light during photosynthesis.',
    exampleTranslation: 'Chlorophyll absorbs light in the blue and red spectrum during photosynthesis.',
    grammarNotes: 'Technical term derived from Greek: photo- (light) + synthesis (putting together).',
  },
  // English - Business & Work - Advanced
  {
    languageId: 'english',
    topicId: 'business-work',
    difficulty: 'advanced',
    front: 'Touch base / Move the needle',
    back: 'To briefly reconnect / To make noticeable, measurable progress.',
    phonetic: '/tʌtʃ beɪs / muːv ðə ˈniː.dəl/',
    exampleTarget: "Let's touch base next Monday to review whether the marketing campaign moved the needle on user retention.",
    exampleTranslation: "Let us reconnect on Monday to see if the campaign noticeably increased user retention.",
    grammarNotes: 'Common idioms in modern corporate and tech communications.',
  },
  // English - Idioms - Fluent
  {
    languageId: 'english',
    topicId: 'idioms-expressions',
    difficulty: 'fluent',
    front: 'Serendipity / Epiphany',
    back: 'Fortunate accidental discovery / A sudden moment of deep realization.',
    phonetic: '/ˌser.ənˈdɪp.ə.ti / ɪˈpɪf.ən.i/',
    exampleTarget: 'Discovering penicillin was a magnificent case of scientific serendipity.',
    exampleTranslation: 'The discovery of penicillin was a great example of beneficial chance discovery.',
    grammarNotes: 'High-register philosophical and literary nouns.',
  },

  // ==========================================
  // GERMAN (🇩🇪)
  // ==========================================

  // German - Daily Life & Travel - Beginner
  {
    languageId: 'german',
    topicId: 'daily-travel',
    difficulty: 'beginner',
    front: 'Entschuldigung, wo ist der Bahnhof?',
    back: 'Excuse me, where is the train station?',
    phonetic: 'ent-SHOOL-dee-goong, vo ɪst deːɐ̯ ˈbaːn-hoːf',
    exampleTarget: 'Entschuldigung, wie komme ich am schnellsten zum Hauptbahnhof?',
    exampleTranslation: 'Excuse me, how do I get to the central station the quickest?',
    grammarNotes: '"Der Bahnhof" is masculine nominative. "Wo ist..." triggers nominative.',
    hint: '"Bahnhof" means train station (Bahn + Hof).',
  },
  {
    languageId: 'german',
    topicId: 'daily-travel',
    difficulty: 'beginner',
    front: 'Ich möchte bitte ein Wasser ohne Kohlensäure.',
    back: 'I would like still water (without sparkling gas), please.',
    phonetic: 'ikh MIKH-teh BIT-teh...',
    exampleTarget: 'Guten Tag, ich möchte bitte ein stilles Wasser und einen Kaffee.',
    exampleTranslation: 'Hello, I would like still water and a coffee, please.',
    grammarNotes: '"Möchte" is the polite Konjunktiv II form of "mögen" (would like).',
  },
  // German - Manners & Etiquette - Intermediate
  {
    languageId: 'german',
    topicId: 'manners-etiquette',
    difficulty: 'intermediate',
    front: 'Siezen vs. Duzen (Herr / Frau + Nachname)',
    back: 'Formal address with "Sie" vs. informal with "du".',
    phonetic: 'ZEE-tsen vs. DOO-tsen',
    exampleTarget: 'Im deutschen Büroalltag beginnt man in der Regel mit dem formellen "Sie".',
    exampleTranslation: 'In German office life, one generally starts with the formal "Sie".',
    grammarNotes: 'Always capitalize the formal pronoun "Sie", "Ihnen", and "Ihr".',
  },
  // German - Culture & Traditions - Intermediate
  {
    languageId: 'german',
    topicId: 'culture-history',
    difficulty: 'intermediate',
    front: 'Der Feierabend / Das Gemütlichkeit',
    back: 'The end of the workday / Cozy warmth, friendliness, and peace of mind.',
    phonetic: 'deːɐ̯ ˈfaɪ̯ɐˌʔaːbn̩t / dahs ɡəˈmyːtlɪçkaɪt',
    exampleTarget: 'Pünktlich um 17 Uhr machen wir Feierabend und treffen uns im Biergarten.',
    exampleTranslation: 'Promptly at 5 PM we finish work and meet in the beer garden.',
    grammarNotes: '"Feierabend" literally translates to "celebration evening".',
  },
  // German - Science & Nature - Advanced
  {
    languageId: 'german',
    topicId: 'science-nature',
    difficulty: 'advanced',
    front: 'Die Nachhaltigkeit und der Umweltschutz',
    back: 'Sustainability and environmental protection.',
    phonetic: 'dee NAHKH-halt-ikh-kaɪt',
    exampleTarget: 'Ökologische Nachhaltigkeit erfordert eine drastische Reduktion von Treibhausgasen.',
    exampleTranslation: 'Ecological sustainability requires a drastic reduction in greenhouse gases.',
    grammarNotes: 'Nouns ending in "-keit" or "-heit" are always feminine ("die").',
  },
  // German - Idioms & Expressions - Fluent
  {
    languageId: 'german',
    topicId: 'idioms-expressions',
    difficulty: 'fluent',
    front: 'Schadenfreude / Fernweh',
    back: 'Pleasure from another’s mishap / A longing to wander to distant lands.',
    phonetic: 'SHAH-den-froy-deh / FEHRN-vay',
    exampleTarget: 'Sein Fernweh war so stark, dass er seinen Job kündigte, um die Welt zu bereisen.',
    exampleTranslation: 'His wanderlust was so intense that he quit his job to travel the world.',
    grammarNotes: 'Classic German untranslatable compound nouns.',
  },
  {
    languageId: 'german',
    topicId: 'idioms-expressions',
    difficulty: 'fluent',
    front: 'Ich verstehe nur Bahnhof.',
    back: 'It is all Greek to me / I don\'t understand a single word.',
    phonetic: 'ikh fer-SHTAY-eh noor BAHN-hof',
    exampleTarget: 'Bei dieser Quantenphysik-Vorlesung verstehe ich nur Bahnhof!',
    exampleTranslation: 'During this quantum physics lecture, I don\'t understand a thing!',
    grammarNotes: 'Originates from WWI soldiers who only wanted to hear about the train station to return home.',
  },

  // ==========================================
  // CHINESE (MANDARIN - 🇨🇳)
  // ==========================================

  // Chinese - Daily Life & Travel - Beginner
  {
    languageId: 'chinese',
    topicId: 'daily-travel',
    difficulty: 'beginner',
    front: '你好，请问地铁站在哪里？',
    back: 'Hello, excuse me, where is the subway station?',
    phonetic: 'Nǐ hǎo, qǐngwèn dìtiězhàn zài nǎlǐ?',
    exampleTarget: '请问，去天安门广场怎么走？',
    exampleTranslation: 'Excuse me, how do I get to Tiananmen Square?',
    grammarNotes: '“请问” (qǐngwèn) literally means "May I ask politely". Used before asking any stranger.',
    hint: '地铁站 (dìtiězhàn) = subway station.',
  },
  {
    languageId: 'chinese',
    topicId: 'daily-travel',
    difficulty: 'beginner',
    front: '买单 / 多少钱？',
    back: 'The bill please / How much is this?',
    phonetic: 'Mǎidān / Duōshao qián?',
    exampleTarget: '服务员，买单，可以微信支付吗？',
    exampleTranslation: 'Waiter, check please, can I pay with WeChat Pay?',
    grammarNotes: '“买单” (mǎidān) is the standard modern phrase to ask for the bill at dining places.',
  },
  // Chinese - Manners & Etiquette - Intermediate
  {
    languageId: 'chinese',
    topicId: 'manners-etiquette',
    difficulty: 'intermediate',
    front: '客气 (Kèqi) & 您好 (Nínhǎo)',
    back: 'Polite / Courteous, and respectful "You" (formal)',
    phonetic: 'Kèqi / Nín hǎo',
    exampleTarget: '您太客气了，这是我应该做的。',
    exampleTranslation: 'You are too kind / too courteous; it was my duty.',
    grammarNotes: '“您” (nín) adds the heart radical (心) beneath “你” (nǐ) to express deep respect to elders and teachers.',
  },
  // Chinese - Culture & Traditions - Intermediate
  {
    languageId: 'chinese',
    topicId: 'culture-history',
    difficulty: 'intermediate',
    front: '端午节与包粽子',
    back: 'Dragon Boat Festival (Duanwu) and making sticky rice dumplings (Zongzi).',
    phonetic: 'Duānwǔ jié yǔ bāo zòngzi',
    exampleTarget: '端午节期间，大家会赛龙舟、吃粽子以纪念屈原。',
    exampleTranslation: 'During the Dragon Boat Festival, people race dragon boats and eat zongzi in memory of Qu Yuan.',
    grammarNotes: 'Occurs on the 5th day of the 5th lunar month.',
  },
  // Chinese - Business & Work - Advanced
  {
    languageId: 'chinese',
    topicId: 'business-work',
    difficulty: 'advanced',
    front: '合作共赢 / 签署合同',
    back: 'Win-win cooperation / To sign a formal contract',
    phonetic: 'Hézuò gòngyíng / Qiānshǔ hétong',
    exampleTarget: '我们期待与贵公司达成长期战略合作，实现互利共赢。',
    exampleTranslation: 'We look forward to establishing long-term strategic cooperation with your esteemed company for mutual win-win.',
    grammarNotes: '“贵公司” (guì gōngsī) is formal business etiquette meaning "your esteemed company".',
  },
  // Chinese - Idioms & Proverbs (Chengyu) - Fluent
  {
    languageId: 'chinese',
    topicId: 'idioms-expressions',
    difficulty: 'fluent',
    front: '温故知新 (Wēn gù zhī xīn)',
    back: 'Reviewing the old allows one to discover new insights (Confucius principle).',
    phonetic: 'Wēn gù zhī xīn',
    exampleTarget: '孔子说：“温故而知新，可以为师矣。”',
    exampleTranslation: 'Confucius said: "He who by reviewing the old can acquire the new is worthy to be a teacher."',
    grammarNotes: 'From the Analects of Confucius (论语). Directly embodies spaced repetition theory!',
  },
  {
    languageId: 'chinese',
    topicId: 'idioms-expressions',
    difficulty: 'fluent',
    front: '循序渐进 (Xún xù jiàn jìn)',
    back: 'To progress step by step in orderly sequence; gradual steady mastery.',
    phonetic: 'Xún xù jiàn jìn',
    exampleTarget: '学外语不能急于求成，必须循序渐进。',
    exampleTranslation: 'Learning a foreign language cannot be rushed; one must progress systematically step by step.',
    grammarNotes: 'Essential Chinese pedagogical proverb.',
  },
];

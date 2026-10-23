import json

# MEGA-EXPANSION: 50 concepts across 4 languages (200 cards total)
# Categories:
# 1. Family & Relationships (6 concepts): mother, father, brother, sister, friend, family
# 2. Food & Drink (8 concepts): rice, noodles, meat, fish, coffee, tea, sugar, salt
# 3. Time, Days & Seasons (8 concepts): morning, night, week, weekend, spring, summer, autumn, winter
# 4. Urban Places & City (8 concepts): park, hospital, bank, school, street, museum, library, cinema
# 5. Technology & Home (8 concepts): phone, computer, television, door, window, bed, lamp, kitchen
# 6. Essential Movement & Action Verbs (6 concepts): to run, to walk, to sit, to stand, to stop, to bring/take
# 7. Core Adverbs & Spatial prepositions (6 concepts): in front of, behind, next to / beside, between, fast / quickly, slowly

mega_concepts = [
  # 1. Mother
  {
    "spanish": {
      "topicId": "family-relations",
      "front": "la madre / la mamá",
      "back": "mother / mom",
      "phonetic": "lah MAH-dreh / lah mah-MAH",
      "exampleTarget": "Mi madre prepara los mejores platos caseros cuando nos reunimos los domingos.",
      "exampleTranslation": "My mother prepares the best homemade dishes when we gather on Sundays.",
      "grammarNotes": "Feminine noun: la madre. Affectionate: mamá.",
      "hint": "Female parent.",
      "exampleSentences": [
        {"target": "Hablé por teléfono con mi madre esta mañana.", "translation": "I spoke on the phone with my mother this morning."}
      ]
    },
    "english": {
      "topicId": "family-relations",
      "front": "mother / mom",
      "back": "a female parent",
      "phonetic": "MUH-ther / mahm",
      "exampleTarget": "His mother has always supported his passion for language studies.",
      "exampleTranslation": "Su madre siempre ha apoyado su pasión por los estudios de idiomas.",
      "grammarNotes": "Countable noun: mother, mothers. Informal: mom (US) / mum (UK).",
      "hint": "Female parent.",
      "exampleSentences": [
        {"target": "I called my mother to wish her a very happy birthday.", "translation": "Llamé a mi madre para desearle un muy feliz cumpleaños."}
      ]
    },
    "german": {
      "topicId": "family-relations",
      "front": "die Mutter (Pl. Mütter) / Mama",
      "back": "mother / mom",
      "phonetic": "dee MOOT-ter",
      "exampleTarget": "Meine Mutter liest abends gerne spannende historische Romane.",
      "exampleTranslation": "My mother likes to read exciting historical novels in the evening.",
      "grammarNotes": "Feminine noun: die Mutter, die Mütter (umlaut plural). Informal: die Mama.",
      "hint": "Weiblicher Elternteil.",
      "exampleSentences": [
        {"target": "Sie besuchte ihre Mutter am vergangenen Wochenende auf dem Land.", "translation": "She visited her mother in the countryside last weekend."}
      ]
    },
    "chinese": {
      "topicId": "family-relations",
      "front": "母亲 / 妈妈 (mǔqīn / māma)",
      "back": "mother / mom",
      "phonetic": "mǔ-qīn / mā-ma",
      "exampleTarget": "妈妈每天清晨都会为全家人准备热气腾腾的早餐。",
      "exampleTranslation": "Mom prepares steaming hot breakfast for the whole family every early morning.",
      "grammarNotes": "母亲 (mǔqīn) is formal/written; 妈妈 (māma) is the standard spoken term.",
      "hint": "女性长辈、母亲。",
      "exampleSentences": [
        {"target": "我在电话里向母亲问好并汇报了近期的工作进展。", "translation": "I greeted my mother over the phone and reported recent work progress.", "phonetic": "wǒ zài diànhuà lǐ..."}
      ]
    }
  },
  # 2. Father
  {
    "spanish": {
      "topicId": "family-relations",
      "front": "el padre / el papá",
      "back": "father / dad",
      "phonetic": "ehl PAH-dreh / ehl pah-PAH",
      "exampleTarget": "Mi padre me enseñó a reparar bicicletas y a apreciar la buena música.",
      "exampleTranslation": "My father taught me to repair bicycles and to appreciate good music.",
      "grammarNotes": "Masculine noun: el padre. Affectionate: papá. Plural: los padres (parents/fathers).",
      "hint": "Male parent.",
      "exampleSentences": [
        {"target": "Mi padre sale a correr al parque todas las mañanas.", "translation": "My father goes running in the park every morning."}
      ]
    },
    "english": {
      "topicId": "family-relations",
      "front": "father / dad",
      "back": "a male parent",
      "phonetic": "FAH-ther / dad",
      "exampleTarget": "Her father works as an architect designing eco-friendly residential homes.",
      "exampleTranslation": "Su padre trabaja como arquitecto diseñando viviendas ecológicas.",
      "grammarNotes": "Countable noun: father, fathers. Informal: dad / pop.",
      "hint": "Male parent.",
      "exampleSentences": [
        {"target": "My father gave me excellent practical advice before my trip.", "translation": "Mi padre me dio excelentes consejos prácticos antes de mi viaje."}
      ]
    },
    "german": {
      "topicId": "family-relations",
      "front": "der Vater (Pl. Väter) / Papa",
      "back": "father / dad",
      "phonetic": "dehr FAH-ter",
      "exampleTarget": "Mein Vater kocht am Sonntag immer die traditionelle Suppe.",
      "exampleTranslation": "My father always cooks traditional soup on Sunday.",
      "grammarNotes": "Masculine noun: der Vater, die Väter (umlaut plural). \"Die Eltern\" = parents.",
      "hint": "Männlicher Elternteil.",
      "exampleSentences": [
        {"target": "Er hat viel handwerkliches Geschick von seinem Vater gelernt.", "translation": "He learned a lot of craftsmanship skills from his father."}
      ]
    },
    "chinese": {
      "topicId": "family-relations",
      "front": "父亲 / 爸爸 (fùqīn / bàba)",
      "back": "father / dad",
      "phonetic": "fù-qīn / bà-ba",
      "exampleTarget": "父亲经常鼓励我要保持对新鲜事物的好奇心与探索欲。",
      "exampleTranslation": "Father often encourages me to keep curiosity and exploration desire for new things.",
      "grammarNotes": "父亲 (fùqīn) is formal/written; 爸爸 (bàba) is spoken. 父母 (fùmǔ) = parents.",
      "hint": "男性长辈、父亲。",
      "exampleSentences": [
        {"target": "周末我和爸爸一起在阳台上修剪花草盆景。", "translation": "On weekends I trim flowers and bonsai on the balcony together with dad.", "phonetic": "zhòumò wǒ hé bàba..."}
      ]
    }
  },
  # 3. Brother
  {
    "spanish": {
      "topicId": "family-relations",
      "front": "el hermano",
      "back": "brother",
      "phonetic": "ehl ehr-MAH-noh",
      "exampleTarget": "Mi hermano mayor estudia medicina en la universidad de Salamanca.",
      "exampleTranslation": "My older brother studies medicine at the University of Salamanca.",
      "grammarNotes": "Hermano mayor = older brother; hermano menor = younger brother. Los hermanos = siblings.",
      "hint": "Male sibling.",
      "exampleSentences": [
        {"target": "Tengo dos hermanos y una hermana menor.", "translation": "I have two brothers and one younger sister."}
      ]
    },
    "english": {
      "topicId": "family-relations",
      "front": "brother",
      "back": "a man or boy in relation to other children of his parents",
      "phonetic": "BRUH-ther",
      "exampleTarget": "My older brother is helping me move into my new apartment this weekend.",
      "exampleTranslation": "Mi hermano mayor me está ayudando a mudarme a mi nuevo apartamento este fin de semana.",
      "grammarNotes": "Countable noun: brother, brothers. Sibling = brother or sister.",
      "hint": "Male sibling.",
      "exampleSentences": [
        {"target": "He looks very much like his younger brother.", "translation": "Se parece mucho a su hermano menor."}
      ]
    },
    "german": {
      "topicId": "family-relations",
      "front": "der Bruder (Pl. Brüder)",
      "back": "brother",
      "phonetic": "dehr BROO-der",
      "exampleTarget": "Mein älterer Bruder arbeitet als Ingenieur in Stuttgart.",
      "exampleTranslation": "My older brother works as an engineer in Stuttgart.",
      "grammarNotes": "Masculine noun: der Bruder, die Brüder. Geschwister = siblings.",
      "hint": "Männliches Geschwisterteil.",
      "exampleSentences": [
        {"target": "Er versteht sich blendend mit seinem jüngeren Bruder.", "translation": "He gets along splendidly with his younger brother."}
      ]
    },
    "chinese": {
      "topicId": "family-relations",
      "front": "哥哥 / 弟弟 (gēge / dìdi)",
      "back": "brother (older / younger)",
      "phonetic": "gē-ge / dì-di",
      "exampleTarget": "我哥哥在北京工作，弟弟还在读高中。",
      "exampleTranslation": "My older brother works in Beijing, and younger brother is still attending high school.",
      "grammarNotes": "Chinese strictly distinguishes age order: 哥哥 (older brother) vs 弟弟 (younger brother). 兄弟 (xiōngdì) = brothers.",
      "hint": "男性同胞兄弟。",
      "exampleSentences": [
        {"target": "哥哥经常在功课上耐心地辅导弟弟。", "translation": "Older brother often patiently tutors younger brother in schoolwork.", "phonetic": "gēge jīngcháng zài..."}
      ]
    }
  },
  # 4. Sister
  {
    "spanish": {
      "topicId": "family-relations",
      "front": "la hermana",
      "back": "sister",
      "phonetic": "lah ehr-MAH-nah",
      "exampleTarget": "Mi hermana menor toca el violín con gran destreza en la orquesta juvenil.",
      "exampleTranslation": "My younger sister plays the violin with great skill in the youth orchestra.",
      "grammarNotes": "Feminine noun: la hermana. Hermana mayor = older sister; hermana menor = younger sister.",
      "hint": "Female sibling.",
      "exampleSentences": [
        {"target": "Fui de compras por la tarde con mi hermana.", "translation": "I went shopping in the afternoon with my sister."}
      ]
    },
    "english": {
      "topicId": "family-relations",
      "front": "sister",
      "back": "a woman or girl in relation to other children of her parents",
      "phonetic": "SIS-ter",
      "exampleTarget": "Her younger sister is graduating from veterinary school this spring.",
      "exampleTranslation": "Su hermana menor se gradúa de la facultad de veterinaria esta primavera.",
      "grammarNotes": "Countable noun: sister, sisters. Diminutive: sis.",
      "hint": "Female sibling.",
      "exampleSentences": [
        {"target": "She shared an apartment with her sister during their college years.", "translation": "Compartió apartamento con su hermana durante sus años universitarios."}
      ]
    },
    "german": {
      "topicId": "family-relations",
      "front": "die Schwester (Pl. Schwestern)",
      "back": "sister",
      "phonetic": "dee SHVEHS-ter",
      "exampleTarget": "Meine jüngere Schwester lernt seit einem Jahr mit Begeisterung Gitarre.",
      "exampleTranslation": "My younger sister has been learning guitar with enthusiasm for a year.",
      "grammarNotes": "Feminine noun: die Schwester, die Schwestern. Also used historically for nurse (Krankenschwester).",
      "hint": "Weibliches Geschwisterteil.",
      "exampleSentences": [
        {"target": "Sie reiste mit ihrer älteren Schwester nach Wien.", "translation": "She traveled with her older sister to Vienna."}
      ]
    },
    "chinese": {
      "topicId": "family-relations",
      "front": "姐姐 / 妹妹 (jiějie / mèimei)",
      "back": "sister (older / younger)",
      "phonetic": "jiě-jie / mèi-mei",
      "exampleTarget": "我姐姐擅长画油画，妹妹则对现代舞蹈很感兴趣。",
      "exampleTranslation": "My older sister is good at oil painting, while younger sister is very interested in modern dance.",
      "grammarNotes": "Age-specific distinction: 姐姐 (older sister) vs 妹妹 (younger sister). 姐妹 (jiěmèi) = sisters.",
      "hint": "女性同胞姐妹。",
      "exampleSentences": [
        {"target": "假期里姐妹俩一起制作手工烘焙小点心。", "translation": "During the holidays the two sisters made handmade baked snacks together.", "phonetic": "jiàqī lǐ jiěmèi liǎ..."}
      ]
    }
  },
  # 5. Friend
  {
    "spanish": {
      "topicId": "family-relations",
      "front": "el amigo / la amiga",
      "back": "friend",
      "phonetic": "ehl ah-MEE-goh / lah ah-MEE-gah",
      "exampleTarget": "Un buen amigo siempre está dispuesto a escuchar y ofrecer apoyo sincero.",
      "exampleTranslation": "A good friend is always willing to listen and offer sincere support.",
      "grammarNotes": "Masculine: amigo; feminine: amiga. \"Amistad\" = friendship.",
      "hint": "Close companion.",
      "exampleSentences": [
        {"target": "Cené anoche con unos viejos amigos de la escuela primaria.", "translation": "I had dinner last night with some old primary school friends."}
      ]
    },
    "english": {
      "topicId": "family-relations",
      "front": "friend",
      "back": "a person whom one knows and with whom one has a bond of mutual affection",
      "phonetic": "frend",
      "exampleTarget": "A true friend stands by your side through challenges and triumphs alike.",
      "exampleTranslation": "Un verdadero amigo permanece a tu lado tanto en los desafíos como en los triunfos.",
      "grammarNotes": "Countable noun: friend, friends. Adjective: friendly.",
      "hint": "Companion you care for.",
      "exampleSentences": [
        {"target": "She made many wonderful friends during her semester abroad.", "translation": "Hizo muchos amigos maravillosos durante su semestre en el extranjero."}
      ]
    },
    "german": {
      "topicId": "family-relations",
      "front": "der Freund / die Freundin",
      "back": "friend (male / female, or boyfriend / girlfriend)",
      "phonetic": "dehr froynt / dee FROYND-in",
      "exampleTarget": "Ein treuer Freund ist in schwierigen Zeiten von unschätzbarem Wert.",
      "exampleTranslation": "A faithful friend is invaluable in difficult times.",
      "grammarNotes": "Note: \"ein Freund von mir\" = a friend of mine, whereas \"mein Freund\" often implies boyfriend.",
      "hint": "Enger vertrauter Mensch.",
      "exampleSentences": [
        {"target": "Am Wochenende treffe ich mich mit ein paar guten Freunden.", "translation": "On the weekend I am meeting up with a couple of good friends."}
      ]
    },
    "chinese": {
      "topicId": "family-relations",
      "front": "朋友 (péngyou)",
      "back": "friend",
      "phonetic": "péng-you",
      "exampleTarget": "海内存知己，天涯若比邻；真诚的朋友是人生最大的财富。",
      "exampleTranslation": "A bosom friend afar makes distance seem near; a sincere friend is the greatest treasure in life.",
      "grammarNotes": "Noun. Measure word: 位 (wèi - polite) or 个 (gè). 好朋友 = good friend.",
      "hint": "彼此有交情、互相信任的人。",
      "exampleSentences": [
        {"target": "我和几位老朋友相聚在茶馆里愉快地叙旧。", "translation": "I gathered with several old friends at the teahouse and happily reminisced.", "phonetic": "wǒ hé jǐ wèi lǎo péngyou..."}
      ]
    }
  },
  # 6. Family
  {
    "spanish": {
      "topicId": "family-relations",
      "front": "la familia",
      "back": "family",
      "phonetic": "lah fah-MEE-lyah",
      "exampleTarget": "Para mí, pasar tiempo de calidad con la familia es lo más importante.",
      "exampleTranslation": "For me, spending quality time with family is the most important thing.",
      "grammarNotes": "Feminine collective noun: la familia. Singular verb agreement (la familia está unida).",
      "hint": "Kinship group.",
      "exampleSentences": [
        {"target": "Toda la familia se reúne en Navidad para celebrar juntos.", "translation": "The whole family gathers at Christmas to celebrate together."}
      ]
    },
    "english": {
      "topicId": "family-relations",
      "front": "family",
      "back": "a group of one or more parents and their children living together as a unit",
      "phonetic": "FAM-uh-lee",
      "exampleTarget": "Family gatherings during the holiday season are filled with laughter and stories.",
      "exampleTranslation": "Las reuniones familiares durante la temporada navideña están llenas de risas e historias.",
      "grammarNotes": "Collective noun: singular in US English (my family is), often plural in UK English (my family are).",
      "hint": "Parents, siblings, and relatives.",
      "exampleSentences": [
        {"target": "She values strong bonds with her extended family across different continents.", "translation": "Valora los lazos fuertes con su familia extendida en diferentes continentes."}
      ]
    },
    "german": {
      "topicId": "family-relations",
      "front": "die Familie (Pl. Familien)",
      "back": "family",
      "phonetic": "dee fah-MEE-lyeh",
      "exampleTarget": "Die Familie ist für die persönliche Entwicklung und Geborgenheit zentral.",
      "exampleTranslation": "Family is central for personal development and security.",
      "grammarNotes": "Feminine collective noun: die Familie, die Familien.",
      "hint": "Verwandtschaftskreis.",
      "exampleSentences": [
        {"target": "Zu den Feiertagen kommt die ganze Familie zusammen.", "translation": "For the holidays the whole family comes together."}
      ]
    },
    "chinese": {
      "topicId": "family-relations",
      "front": "家人 / 家庭 (jiārén / jiātíng)",
      "back": "family members / family (household)",
      "phonetic": "jiā-rén / jiā-tíng",
      "exampleTarget": "每到春节，在外地工作的人们都会回家与家人团聚。",
      "exampleTranslation": "Every Spring Festival, people working out of town return home to reunite with family.",
      "grammarNotes": "家人 (jiārén) = family members/people; 家庭 (jiātíng) = the institution/household of family.",
      "hint": "家庭成员或血亲组织。",
      "exampleSentences": [
        {"target": "一个温馨和睦的家庭能给人带来无穷的力量与安心。", "translation": "A warm and harmonious family can bring endless strength and peace of mind.", "phonetic": "yī gè wēnxīn hémù de..."}
      ]
    }
  },
  # 7. Rice
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "el arroz",
      "back": "rice",
      "phonetic": "ehl ah-RROHS",
      "exampleTarget": "La paella valenciana se cocina tradicionalmente con arroz redondo y azafrán.",
      "exampleTranslation": "Valencian paella is traditionally cooked with round rice and saffron.",
      "grammarNotes": "Masculine noun: el arroz. Plural: los arroces (with -c-).",
      "hint": "Staple grain.",
      "exampleSentences": [
        {"target": "Acompañamos el curry picante con un plato de arroz blanco jazmín.", "translation": "We accompany the spicy curry with a plate of white jasmine rice."}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "rice",
      "back": "a cereal grain domesticated and consumed as a staple food worldwide",
      "phonetic": "ryss",
      "exampleTarget": "Steamed white rice is a staple food in many cuisines across the globe.",
      "exampleTranslation": "El arroz blanco al vapor es un alimento básico en muchas cocinas de todo el mundo.",
      "grammarNotes": "Uncountable noun: a bowl of rice, a grain of rice.",
      "hint": "Grain food.",
      "exampleSentences": [
        {"target": "She stir-fried fragrant jasmine rice with eggs and spring onions.", "translation": "Salteó arroz jazmín aromático con huevos y cebolletas."}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "der Reis",
      "back": "rice",
      "phonetic": "dehr ryse",
      "exampleTarget": "Gekochter Reis passt hervorragend als Beilage zu asiatischem Gemüse.",
      "exampleTranslation": "Boiled rice fits excellently as a side dish to Asian vegetables.",
      "grammarNotes": "Masculine uncountable noun: der Reis.",
      "hint": "Getreidegrundnahrungsmittel.",
      "exampleSentences": [
        {"target": "Ich koche heute eine Schüssel Basmati-Reis zum Linsencurry.", "translation": "Today I am cooking a bowl of basmati rice for the lentil curry."}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "米饭 / 米 (mǐfàn / mǐ)",
      "back": "cooked rice / raw rice",
      "phonetic": "mǐ-fàn / mǐ",
      "exampleTarget": "请再给我来一碗热气腾腾的白米饭，谢谢！",
      "exampleTranslation": "Please bring me another bowl of steaming white rice, thank you!",
      "grammarNotes": "Distinction: 米 (mǐ) = uncooked rice grains; 米饭 (mǐfàn) = cooked rice. Measure word: 碗 (wǎn - bowl).",
      "hint": "稻谷加工后煮熟的主食。",
      "exampleSentences": [
        {"target": "南方人通常以大米为主食，北方人则偏好面食。", "translation": "Southerners usually take rice as their staple food, while northerners prefer wheaten foods.", "phonetic": "nánfāng rén tōngcháng..."}
      ]
    }
  },
  # 8. Noodles
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "los fideos / los tallarines",
      "back": "noodles / pasta strips",
      "phonetic": "lohs fee-DEH-ohs / lohs tah-yah-REE-nehs",
      "exampleTarget": "Me encanta pedir sopa de fideos con verduras frescas en los días fríos.",
      "exampleTranslation": "I love ordering noodle soup with fresh vegetables on cold days.",
      "grammarNotes": "Usually used in plural: los fideos. \"Tallarines\" = noodles/tagliatelle.",
      "hint": "Strips of dough cooked in liquid.",
      "exampleSentences": [
        {"target": "Preparamos unos deliciosos fideos salteados al wok con salsa de soja.", "translation": "We prepared delicious stir-fried noodles in the wok with soy sauce."}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "noodles",
      "back": "strips or long thin pieces of pasta or dough cooked in boiling water",
      "phonetic": "NOO-duhlz",
      "exampleTarget": "A piping hot bowl of homemade noodle soup warms you up quickly in winter.",
      "exampleTranslation": "Un tazón bien caliente de sopa de fideos casera te calienta rápidamente en invierno.",
      "grammarNotes": "Usually plural: noodles. Measure: a bowl of noodles.",
      "hint": "Long thin pasta or Asian dough strips.",
      "exampleSentences": [
        {"target": "Stir-fried egg noodles with vegetables make a quick and tasty dinner.", "translation": "Los fideos al huevo salteados con verduras constituyen una cena rápida y sabrosa."}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "die Nudeln (Sg. die Nudel)",
      "back": "noodles / pasta",
      "phonetic": "dee NOO-deln",
      "exampleTarget": "Nudeln mit Tomatensoße und frischem Basilikum sind ein echter Klassiker.",
      "exampleTranslation": "Noodles with tomato sauce and fresh basil are a true classic.",
      "grammarNotes": "Feminine noun: die Nudel, die Nudeln. In German, \"Nudeln\" covers both pasta and noodles.",
      "hint": "Teigwaren.",
      "exampleSentences": [
        {"target": "Die asiatische Nudelsuppe schmeckte wunderbar aromatisch.", "translation": "The Asian noodle soup tasted wonderfully aromatic."}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "面条 / 面 (miàntiáo / miàn)",
      "back": "noodles",
      "phonetic": "miàn-tiáo / miàn",
      "exampleTarget": "兰州牛肉拉面面条筋道，汤底醇厚鲜美。",
      "exampleTranslation": "Lanzhou beef hand-pulled noodles have chewy noodles and a rich, delicious broth.",
      "grammarNotes": "Noun: 面条 (miàntiáo). Measure word: 碗 (wǎn - bowl) -> 一碗面条. 吃面 = eat noodles.",
      "hint": "条状的面食。",
      "exampleSentences": [
        {"target": "过生日的时候中国人习惯吃一碗寓意长寿的长寿面。", "translation": "When celebrating birthdays, Chinese people have the habit of eating a bowl of longevity noodles symbolizing long life.", "phonetic": "guò shēngrì de shíhou..."}
      ]
    }
  },
  # 9. Meat
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "la carne",
      "back": "meat",
      "phonetic": "lah KAHR-neh",
      "exampleTarget": "¿Prefieres la carne asada a la parrilla o guisada a fuego lento?",
      "exampleTranslation": "Do you prefer meat roasted on the grill or stewed over low heat?",
      "grammarNotes": "Feminine noun: la carne. Types: carne de ternera (beef), carne de cerdo (pork), carne de pollo (chicken).",
      "hint": "Animal flesh as food.",
      "exampleSentences": [
        {"target": "Muchas personas reducen el consumo de carne por motivos ecológicos.", "translation": "Many people reduce meat consumption for environmental reasons."}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "meat",
      "back": "the flesh of an animal as food",
      "phonetic": "meet",
      "exampleTarget": "They offer delicious vegetarian dishes for guests who do not eat meat.",
      "exampleTranslation": "Ofrecen deliciosos platos vegetarianos para los invitados que no comen carne.",
      "grammarNotes": "Uncountable noun: a piece of meat, a cut of meat.",
      "hint": "Flesh of animals eaten as food.",
      "exampleSentences": [
        {"target": "Lean white meat is generally lower in saturated fat than red meat.", "translation": "La carne blanca magra generalmente contiene menos grasas saturadas que la carne roja."}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "das Fleisch",
      "back": "meat",
      "phonetic": "dahs flyshe",
      "exampleTarget": "Immer mehr Menschen achten darauf, hochwertiges Fleisch aus Bio-Haltung zu kaufen.",
      "exampleTranslation": "More and more people take care to buy high-quality meat from organic farming.",
      "grammarNotes": "Neuter uncountable noun: das Fleisch.",
      "hint": "Tierisches Nahrungsmittel.",
      "exampleSentences": [
        {"target": "Ich esse seit mehreren Jahren kein Fleisch mehr und fühle mich fit.", "translation": "I haven't eaten any meat for several years and feel very fit."}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "肉 (ròu)",
      "back": "meat",
      "phonetic": "ròu",
      "exampleTarget": "均衡的饮食应该合理搭配肉类、蔬菜和水果。",
      "exampleTranslation": "A balanced diet should reasonably combine meats, vegetables, and fruits.",
      "grammarNotes": "Noun: 肉 (ròu). Specific meats: 牛肉 (beef), 猪肉 (pork), 羊肉 (mutton), 鸡肉 (chicken).",
      "hint": "供食用的动物筋肉。",
      "exampleSentences": [
        {"target": "他喜欢吃红烧牛肉，肉质鲜嫩入味。", "translation": "He likes to eat braised beef; the meat texture is fresh, tender, and flavorful.", "phonetic": "tā xǐhuan chī hóngshāo..."}
      ]
    }
  },
  # 10. Fish
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "el pescado / el pez",
      "back": "fish (culinary / living)",
      "phonetic": "ehl pehs-KAH-doh / ehl pehs",
      "exampleTarget": "El pescado al horno con patatas y hierbas aromáticas es muy saludable.",
      "exampleTranslation": "Baked fish with potatoes and aromatic herbs is very healthy.",
      "grammarNotes": "Vital distinction: \"el pez\" (living creature in water) vs. \"el pescado\" (caught/prepared as food).",
      "hint": "Aquatic animal and seafood.",
      "exampleSentences": [
        {"target": "Compramos pescado fresco esta mañana en el puerto pesquero.", "translation": "We bought fresh fish this morning at the fishing port."}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "fish",
      "back": "a limbless cold-blooded vertebrate animal with gills and fins living in water",
      "phonetic": "fish",
      "exampleTarget": "Fresh grilled salmon is rich in heart-healthy omega-three fatty acids.",
      "exampleTranslation": "El salmón fresco a la parrilla es rico en ácidos grasos omega tres saludables para el corazón.",
      "grammarNotes": "Singular and plural are identical: one fish, two fish. (Fishes used for multiple species).",
      "hint": "Sea or freshwater creature.",
      "exampleSentences": [
        {"target": "We had delicious steamed fish garnished with ginger and soy sauce.", "translation": "Comimos un delicioso pescado al vapor aderezado con jengibre y salsa de soja."}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "der Fisch (Pl. Fische)",
      "back": "fish",
      "phonetic": "dehr fish",
      "exampleTarget": "Frischer gegrillter Fisch mit Zitronenscheiben schmeckt herrlich leicht.",
      "exampleTranslation": "Fresh grilled fish with lemon slices tastes wonderfully light.",
      "grammarNotes": "Masculine noun: der Fisch, die Fische. Used for both live animal and culinary food.",
      "hint": "Wassertier und Speise.",
      "exampleSentences": [
        {"target": "An den Küsten Norddeutschlands wird traditionell viel frischer Fisch gegessen.", "translation": "On the coasts of Northern Germany, a lot of fresh fish is traditionally eaten."}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "鱼 (yú)",
      "back": "fish",
      "phonetic": "yú",
      "exampleTarget": "清蒸鱼能够最大程度地保留鱼肉的鲜嫩与原汁原味。",
      "exampleTranslation": "Steamed fish can preserve the tenderness and original authentic flavor of fish meat to the greatest extent.",
      "grammarNotes": "Noun: 鱼 (yú). Measure word: 条 (tiáo) -> 一条鱼 (a fish). Symbolic of abundance (年年有余).",
      "hint": "生活在水中的脊椎动物与食材。",
      "exampleSentences": [
        {"target": "年夜饭的餐桌上通常少不了一道寓意年年有余的鱼菜。", "translation": "The New Year's Eve dinner table usually cannot do without a fish dish symbolizing surplus year after year.", "phonetic": "niányèfàn de cānzhuō shang..."}
      ]
    }
  },
  # 11. Coffee
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "el café",
      "back": "coffee",
      "phonetic": "ehl kah-FEH",
      "exampleTarget": "¿Prefieres el café solo, con leche templada o cortado?",
      "exampleTranslation": "Do you prefer black coffee, coffee with warm milk, or a macchiato?",
      "grammarNotes": "Masculine noun: el café. Also means coffee shop. Types: café solo (espresso), café con leche (latte).",
      "hint": "Caffeinated morning beverage.",
      "exampleSentences": [
        {"target": "El aroma de café recién molido llenaba toda la cocina.", "translation": "The aroma of freshly ground coffee filled the whole kitchen."}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "coffee",
      "back": "a hot drink made from the roasted and ground seeds of a tropical shrub",
      "phonetic": "KAWF-ee",
      "exampleTarget": "A warm cup of freshly brewed black coffee helps kickstart the morning.",
      "exampleTranslation": "Una taza caliente de café solo recién preparado ayuda a arrancar la mañana.",
      "grammarNotes": "Uncountable noun: a cup of coffee. Plural \"two coffees\" is acceptable in ordering.",
      "hint": "Roasted dark bean drink.",
      "exampleSentences": [
        {"target": "Do you take sugar or oat milk in your morning coffee?", "translation": "¿Le pones azúcar o leche de avena a tu café matutino?"}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "der Kaffee",
      "back": "coffee",
      "phonetic": "dehr KAH-feh",
      "exampleTarget": "Morgens brauche ich zuerst eine heiße Tasse frisch gemahlenen Kaffee.",
      "exampleTranslation": "In the morning, I first need a hot cup of freshly ground coffee.",
      "grammarNotes": "Masculine noun: der Kaffee. Note pronunciation vs. das Café (coffeehouse).",
      "hint": "Heißgetränk aus gerösteten Kaffeebohnen.",
      "exampleSentences": [
        {"target": "Darf ich Ihnen noch eine Tasse Kaffee nachschenken?", "translation": "May I pour you another cup of coffee?"}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "咖啡 (kāfēi)",
      "back": "coffee",
      "phonetic": "kā-fēi",
      "exampleTarget": "清晨喝一杯浓郁的热咖啡，能够让人精神饱满地投入工作。",
      "exampleTranslation": "Drinking a cup of rich hot coffee in the early morning helps people throw themselves into work with full energy.",
      "grammarNotes": "Loanword: 咖啡 (kāfēi). Measure word: 杯 (bēi - cup). 咖啡馆 (kāfēiguǎn) = coffee shop.",
      "hint": "由烘焙咖啡豆冲泡的热饮。",
      "exampleSentences": [
        {"target": "你喜欢喝不加糖的黑咖啡还是香浓的拿铁咖啡？", "translation": "Do you like drinking sugar-free black coffee or fragrant and rich latte coffee?", "phonetic": "nǐ xǐhuan hē bù jiātáng de..."}
      ]
    }
  },
  # 12. Tea
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "el té",
      "back": "tea",
      "phonetic": "ehl teh",
      "exampleTarget": "Tomar una taza de té verde después de comer facilita la digestión.",
      "exampleTranslation": "Drinking a cup of green tea after eating facilitates digestion.",
      "grammarNotes": "Masculine noun with accent to distinguish from personal pronoun \"te\": el té.",
      "hint": "Infused leaf drink.",
      "exampleSentences": [
        {"target": "Añadí una cucharadita de miel y limón a mi té caliente.", "translation": "I added a teaspoon of honey and lemon to my hot tea."}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "tea",
      "back": "a hot drink made by infusing dried crushed leaves of the tea plant in boiling water",
      "phonetic": "tee",
      "exampleTarget": "Afternoon tea served with warm scones is a cherished British tradition.",
      "exampleTranslation": "El té de la tarde servido con bollos calientes es una apreciada tradición británica.",
      "grammarNotes": "Uncountable noun: a cup of tea, a pot of tea.",
      "hint": "Herbal or Camellia leaf beverage.",
      "exampleSentences": [
        {"target": "Herbal chamomile tea is wonderful for winding down before bedtime.", "translation": "El té de manzanilla es maravilloso para relajarse antes de acostarse."}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "der Tee",
      "back": "tea",
      "phonetic": "dehr teh",
      "exampleTarget": "In Ostfriesland wird traditionell starker schwarzer Tee mit Sahne getrunken.",
      "exampleTranslation": "In East Frisia, strong black tea with cream is traditionally drunk.",
      "grammarNotes": "Masculine noun: der Tee, die Tees.",
      "hint": "Aufgussgetränk aus Blättern oder Kräutern.",
      "exampleSentences": [
        {"target": "Eine heiße Tasse Pfefferminztee beruhigt den Magen nach einem schweren Essen.", "translation": "A hot cup of peppermint tea settles the stomach after a heavy meal."}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "茶 (chá)",
      "back": "tea",
      "phonetic": "chá",
      "exampleTarget": "品茶不仅能解渴提神，也是修身养性的一种生活艺术。",
      "exampleTranslation": "Savoring tea can not only quench thirst and refresh the mind, but is also a life art for cultivating body and soul.",
      "grammarNotes": "Noun: 茶 (chá). Measure words: 杯 (bēi - cup), 壶 (hú - pot). Varieties: 绿茶 (green), 红茶 (black), 乌龙茶 (oolong).",
      "hint": "以茶树叶冲泡的著名饮品。",
      "exampleSentences": [
        {"target": "客从远方来，主人热情地泡上一壶上好的龙井绿茶款待。", "translation": "When a guest arrives from afar, the host warmly brews a pot of top-grade Longjing green tea to entertain.", "phonetic": "kè cóng yuǎnfāng lái..."}
      ]
    }
  },
  # 13. Sugar
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "el azúcar",
      "back": "sugar",
      "phonetic": "ehl ah-SOO-kahr",
      "exampleTarget": "Prefiero tomar las infusiones sin azúcar para apreciar su sabor natural.",
      "exampleTranslation": "I prefer to drink herbal teas without sugar to appreciate their natural flavor.",
      "grammarNotes": "Noun of ambiguous gender, commonly used as masculine: el azúcar blanco (though feminine \"el azúcar morena\" occurs).",
      "hint": "Sweet white crystalline substance.",
      "exampleSentences": [
        {"target": "¿Le pongo una cucharadita de azúcar a tu café?", "translation": "Shall I put a teaspoon of sugar in your coffee?"}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "sugar",
      "back": "a sweet crystalline substance obtained from various plants, especially sugar cane and sugar beet",
      "phonetic": "SHOO-ger",
      "exampleTarget": "Reducing refined sugar in your diet helps sustain steady energy levels.",
      "exampleTranslation": "Reducir el azúcar refinado en tu dieta ayuda a mantener niveles de energía constantes.",
      "grammarNotes": "Uncountable noun: a spoonful of sugar, a cube of sugar.",
      "hint": "Sweetener.",
      "exampleSentences": [
        {"target": "She baked the lemon cake with brown cane sugar for richer caramel notes.", "translation": "Horneó el bizcocho de limón con azúcar moreno de caña para obtener notas de caramelo más ricas."}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "der Zucker",
      "back": "sugar",
      "phonetic": "dehr TSOO-ker",
      "exampleTarget": "Ich trinke meinen Espresso immer ganz ohne Zucker und Milch.",
      "exampleTranslation": "I always drink my espresso completely without sugar and milk.",
      "grammarNotes": "Masculine uncountable noun: der Zucker. Würfelzucker = sugar cube.",
      "hint": "Süßungsmittel.",
      "exampleSentences": [
        {"target": "Für den Teig benötigen wir zweihundert Gramm feinen Zucker.", "translation": "For the dough we need two hundred grams of fine sugar."}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "糖 (táng)",
      "back": "sugar / sweets / candy",
      "phonetic": "táng",
      "exampleTarget": "适量减少饮食中的糖分摄入，对身体健康和牙齿都有好处。",
      "exampleTranslation": "Appropriately reducing sugar intake in your diet is good for both body health and teeth.",
      "grammarNotes": "Noun: 糖 (táng). Means both granulated sugar and candy/sweets. 白糖 = white sugar, 红糖 = brown sugar.",
      "hint": "产生甜味的结晶调味品或糖果。",
      "exampleSentences": [
        {"target": "烹饪红烧排骨时加入少许冰糖可以提亮色泽与口感。", "translation": "Adding a little rock sugar when cooking braised ribs can brighten color and mouthfeel.", "phonetic": "pēngrèn hóngshāo páigǔ..."}
      ]
    }
  },
  # 14. Salt
  {
    "spanish": {
      "topicId": "food-dining",
      "front": "la sal",
      "back": "salt",
      "phonetic": "lah sahl",
      "exampleTarget": "Una pizca de sal marina realza el sabor de cualquier plato culinario.",
      "exampleTranslation": "A pinch of sea salt enhances the flavor of any culinary dish.",
      "grammarNotes": "Feminine noun: la sal. Measure: una pizca de sal (a pinch of salt). Salero = salt shaker.",
      "hint": "White mineral condiment.",
      "exampleSentences": [
        {"target": "¿Me pasas la sal, por favor? La sopa necesita un toque más.", "translation": "Could you pass me the salt, please? The soup needs a touch more."}
      ]
    },
    "english": {
      "topicId": "food-dining",
      "front": "salt",
      "back": "a white crystalline substance, sodium chloride, used for seasoning or preserving food",
      "phonetic": "sawlt",
      "exampleTarget": "A pinch of fine sea salt brings out the sweet flavor in dark chocolate.",
      "exampleTranslation": "Una pizca de sal marina fina resalta el sabor dulce en el chocolate negro.",
      "grammarNotes": "Uncountable noun: a pinch of salt, a grain of salt. Idiom: take with a grain of salt.",
      "hint": "Sodium chloride seasoning.",
      "exampleSentences": [
        {"target": "Could you please pass the salt shaker across the dinner table?", "translation": "¿Podrías por favor pasar el salero a través de la mesa del comedor?"}
      ]
    },
    "german": {
      "topicId": "food-dining",
      "front": "das Salz",
      "back": "salt",
      "phonetic": "dahs zahlts",
      "exampleTarget": "Eine kleine Prise Salz gehört sogar in süßen Kuchenteig.",
      "exampleTranslation": "A small pinch of salt even belongs in sweet cake batter.",
      "grammarNotes": "Neuter uncountable noun: das Salz. \"Eine Prise Salz\" = a pinch of salt. Salzstreuer = salt shaker.",
      "hint": "Würziges Mineral.",
      "exampleSentences": [
        {"target": "Reichen Sie mir bitte das Salz herüber?", "translation": "Could you please pass me the salt?"}
      ]
    },
    "chinese": {
      "topicId": "food-dining",
      "front": "盐 / 食盐 (yán / shíyán)",
      "back": "salt / table salt",
      "phonetic": "yán / shí-yán",
      "exampleTarget": "炒菜时放入少许食盐即可提味，不要放得过咸。",
      "exampleTranslation": "Adding a little table salt when stir-frying can enhance the flavor; do not make it overly salty.",
      "grammarNotes": "Noun: 盐 (yán). Adjective for salty: 咸 (xián). 一勺盐 = a spoonful of salt.",
      "hint": "咸味调味矿物质。",
      "exampleSentences": [
        {"target": "请把桌上的盐罐递给我一下，这碗汤味道稍微有点淡。", "translation": "Please pass me the salt shaker on the table for a moment; this bowl of soup tastes slightly bland.", "phonetic": "qǐng bǎ zhuō shang de..."}
      ]
    }
  },
  # 15. Morning
  {
    "spanish": {
      "topicId": "time-calendar",
      "front": "la mañana",
      "back": "morning",
      "phonetic": "lah mah-NYAH-nah",
      "exampleTarget": "Por la mañana disfruto paseando con la fresca brisa del amanecer.",
      "exampleTranslation": "In the morning I enjoy walking with the fresh dawn breeze.",
      "grammarNotes": "Feminine noun: la mañana (morning). Compare with adverb \"mañana\" (tomorrow). \"Por la mañana\" = in the morning.",
      "hint": "First part of the day until noon.",
      "exampleSentences": [
        {"target": "Las clases universitarias comienzan a las ocho de la mañana.", "translation": "University classes begin at eight in the morning."}
      ]
    },
    "english": {
      "topicId": "time-calendar",
      "front": "morning",
      "back": "the period of time between midnight and noon, especially from sunrise to noon",
      "phonetic": "MOR-ning",
      "exampleTarget": "Early morning is the quietest and most tranquil time to write and reflect.",
      "exampleTranslation": "La madrugada y la primera hora de la mañana son el momento más tranquilo para escribir y reflexionar.",
      "grammarNotes": "Countable noun: in the morning, every morning. Greeting: Good morning!",
      "hint": "Time between sunrise and noon.",
      "exampleSentences": [
        {"target": "She exercises in the fitness center every Monday morning.", "translation": "Hace ejercicio en el gimnasio todos los lunes por la mañana."}
      ]
    },
    "german": {
      "topicId": "time-calendar",
      "front": "der Morgen / der Vormittag",
      "back": "morning",
      "phonetic": "dehr MOR-gen",
      "exampleTarget": "Am Morgen genieße ich die Stille und plane meinen Arbeitstag in Ruhe.",
      "exampleTranslation": "In the morning I enjoy the silence and plan my workday in peace.",
      "grammarNotes": "Masculine noun: der Morgen (capitalized). Distinct from \"morgen\" (tomorrow, adverb). \"Am Morgen\" = in the morning.",
      "hint": "Tagesanfang.",
      "exampleSentences": [
        {"target": "Guten Morgen! Haben Sie heute Nacht gut geschlafen?", "translation": "Good morning! Did you sleep well tonight?"}
      ]
    },
    "chinese": {
      "topicId": "time-calendar",
      "front": "早晨 / 早上 (zǎochen / zǎoshang)",
      "back": "morning / early morning",
      "phonetic": "zǎo-chen / zǎo-shang",
      "exampleTarget": "清晨的公园里空气清新，许多老年人在晨练太极拳。",
      "exampleTranslation": "The air in the early morning park is fresh; many elderly people are doing morning Tai Chi practice.",
      "grammarNotes": "Time noun: 早上 (zǎoshang - morning, approx 6-9 AM), 上午 (shàngwǔ - morning until noon). 早上好 = Good morning.",
      "hint": "一天中天亮到中午之间的时间。",
      "exampleSentences": [
        {"target": "早上好！祝你今天工作顺利，心情愉快！", "translation": "Good morning! Wish your work goes smoothly today and mood is happy!", "phonetic": "zǎoshang hǎo! zhù nǐ..."}
      ]
    }
  },
  # 16. Night
  {
    "spanish": {
      "topicId": "time-calendar",
      "front": "la noche",
      "back": "night / evening",
      "phonetic": "lah NOH-cheh",
      "exampleTarget": "Por la noche el cielo despejado se llena de estrellas brillantes.",
      "exampleTranslation": "At night the clear sky fills with shining stars.",
      "grammarNotes": "Feminine noun: la noche. Greeting: ¡Buenas noches! (Good evening / Good night). \"De noche\" = at night.",
      "hint": "Dark hours between sunset and sunrise.",
      "exampleSentences": [
        {"target": "Trabaja a menudo hasta altas horas de la noche en sus proyectos.", "translation": "He often works until late at night on his projects."}
      ]
    },
    "english": {
      "topicId": "time-calendar",
      "front": "night / evening",
      "back": "the period of darkness between sunset and sunrise",
      "phonetic": "nyte",
      "exampleTarget": "A quiet night with a good book helps me unwind completely.",
      "exampleTranslation": "Una noche tranquila con un buen libro me ayuda a relajarme por completo.",
      "grammarNotes": "Preposition: at night (general), in the night (specific instance). Good night = parting wish before sleep.",
      "hint": "Dark hours of the day.",
      "exampleSentences": [
        {"target": "The temperature drops considerably in the desert during the night.", "translation": "La temperatura desciende considerablemente en el desierto durante la noche."}
      ]
    },
    "german": {
      "topicId": "time-calendar",
      "front": "die Nacht (Pl. Nächte) / der Abend",
      "back": "night / evening",
      "phonetic": "dee nakht",
      "exampleTarget": "In der Nacht kühlt sich die sommerliche Hitze der Großstadt spürbar ab.",
      "exampleTranslation": "At night the summer heat of the big city cools down noticeably.",
      "grammarNotes": "Feminine noun: die Nacht, die Nächte. Idiom: \"Gute Nacht!\" (Good night!). Preposition: \"in der Nacht\".",
      "hint": "Dunkle Zeit des Tages.",
      "exampleSentences": [
        {"target": "Wir fuhren die ganze Nacht durch, um pünktlich anzukommen.", "translation": "We drove all night to arrive on time."}
      ]
    },
    "chinese": {
      "topicId": "time-calendar",
      "front": "晚上 / 夜晚 (wǎnshang / yèwǎn)",
      "back": "evening / night",
      "phonetic": "wǎn-shang / yè-wǎn",
      "exampleTarget": "夜晚的城市霓虹闪烁，展现出与白天截然不同的繁华魅力。",
      "exampleTranslation": "The city at night glitters with neon lights, exhibiting a bustling charm distinctly different from daytime.",
      "grammarNotes": "Time noun: 晚上 (wǎnshang - evening/night), 半夜 (bànyè - midnight). 晚安 = Good night.",
      "hint": "太阳落山至次日日出之间的暗夜时光。",
      "exampleSentences": [
        {"target": "晚上好！今天我们准时召开线上国际研讨会。", "translation": "Good evening! Today we convene the online international symposium punctually.", "phonetic": "wǎnshang hǎo! jīntiān..."}
      ]
    }
  },
  # 17. Week
  {
    "spanish": {
      "topicId": "time-calendar",
      "front": "la semana",
      "back": "week",
      "phonetic": "lah seh-MAH-nah",
      "exampleTarget": "Esta semana tenemos varios seminarios formativos muy interesantes.",
      "exampleTranslation": "This week we have several very interesting training seminars.",
      "grammarNotes": "Feminine noun: la semana. \"La semana que viene\" = next week; \"la semana pasada\" = last week.",
      "hint": "Period of seven days.",
      "exampleSentences": [
        {"target": "Hago ejercicio cuatro días a la semana de forma constante.", "translation": "I exercise four days a week on a consistent basis."}
      ]
    },
    "english": {
      "topicId": "time-calendar",
      "front": "week",
      "back": "a period of seven consecutive days, typically from Monday to Sunday",
      "phonetic": "week",
      "exampleTarget": "Next week marks the beginning of the annual autumn cultural festival.",
      "exampleTranslation": "La próxima semana marca el comienzo del festival cultural anual de otoño.",
      "grammarNotes": "Countable noun: week, weeks. Weekly = occurring every week.",
      "hint": "Seven days.",
      "exampleSentences": [
        {"target": "She practices foreign vocabulary for thirty minutes each day of the week.", "translation": "Practica vocabulario extranjero durante treinta minutos cada día de la semana."}
      ]
    },
    "german": {
      "topicId": "time-calendar",
      "front": "die Woche (Pl. Wochen)",
      "back": "week",
      "phonetic": "dee VOH-kheh",
      "exampleTarget": "Nächste Woche fahre ich geschäftlich für drei Tage nach Hamburg.",
      "exampleTranslation": "Next week I am traveling to Hamburg on business for three days.",
      "grammarNotes": "Feminine noun: die Woche, die Wochen. Wöchentlich = weekly.",
      "hint": "Sieben Tage dauernder Zeitabschnitt.",
      "exampleSentences": [
        {"target": "In zwei Wochen beginnen die lang ersehnten Sommerferien.", "translation": "In two weeks the long-awaited summer holidays begin."}
      ]
    },
    "chinese": {
      "topicId": "time-calendar",
      "front": "星期 / 周 (xīngqī / zhōu)",
      "back": "week",
      "phonetic": "xīng-qī / zhōu",
      "exampleTarget": "下个星期我们将迎来新学期的第一门期中考试。",
      "exampleTranslation": "Next week we will welcome the first midterm examination of the new semester.",
      "grammarNotes": "Synonyms: 星期 (xīngqī), 周 (zhōu), 礼拜 (lǐbài). 上周 = last week, 下周 = next week. Measure: 一个星期 / 一周.",
      "hint": "连续七天的时间单位。",
      "exampleSentences": [
        {"target": "他每周坚持去市民健身馆游泳两到三次。", "translation": "Every week he persists in going to the municipal gymnasium to swim two or three times.", "phonetic": "tā měi zhōu jiānchí..."}
      ]
    }
  },
  # 18. Weekend
  {
    "spanish": {
      "topicId": "time-calendar",
      "front": "el fin de semana",
      "back": "weekend",
      "phonetic": "ehl feen deh seh-MAH-nah",
      "exampleTarget": "¡Que tengas un excelente fin de semana lleno de descanso y diversión!",
      "exampleTranslation": "Have an excellent weekend filled with rest and fun!",
      "grammarNotes": "Masculine compound noun: el fin de semana. Plural: los fines de semana. Colloquial: el finde.",
      "hint": "Saturday and Sunday.",
      "exampleSentences": [
        {"target": "Los fines de semana nos gusta hacer excursiones campestres a la montaña.", "translation": "On weekends we like to take country excursions to the mountains."}
      ]
    },
    "english": {
      "topicId": "time-calendar",
      "front": "weekend",
      "back": "Saturday and Sunday, especially regarded as a time for leisure",
      "phonetic": "WEEK-end",
      "exampleTarget": "Have a wonderful, restful weekend and see you next Monday morning!",
      "exampleTranslation": "¡Que tengas un fin de semana maravilloso y reparador, y nos vemos el próximo lunes por la mañana!",
      "grammarNotes": "Prepositions: on the weekend (US), at the weekend (UK).",
      "hint": "Saturday and Sunday leisure time.",
      "exampleSentences": [
        {"target": "What are your leisure plans for the upcoming weekend?", "translation": "¿Cuáles son tus planes de ocio para el próximo fin de semana?"}
      ]
    },
    "german": {
      "topicId": "time-calendar",
      "front": "das Wochenende (Pl. Wochenenden)",
      "back": "weekend",
      "phonetic": "dahs VOH-khen-ehn-deh",
      "exampleTarget": "Schönes Wochenende! Erhol dich gut von der anstrengenden Arbeitswoche.",
      "exampleTranslation": "Have a nice weekend! Recover well from the strenuous workweek.",
      "grammarNotes": "Neuter compound noun: das Wochenende. Preposition: am Wochenende (on the weekend).",
      "hint": "Samstag und Sonntag.",
      "exampleSentences": [
        {"target": "Am Wochenende schlafe ich gerne etwas länger aus.", "translation": "On the weekend I like to sleep in a bit longer."}
      ]
    },
    "chinese": {
      "topicId": "time-calendar",
      "front": "周末 (zhòumò)",
      "back": "weekend",
      "phonetic": "zhòu-mò",
      "exampleTarget": "祝大家周末愉快！好好放松身心，享受温馨的生活时光。",
      "exampleTranslation": "Wish everyone a pleasant weekend! Relax well in body and mind, and enjoy warm life moments.",
      "grammarNotes": "Noun: 周 (week) + 末 (end). 周末愉快 = Have a nice weekend.",
      "hint": "一星期的末尾，通常指星期六和星期天。",
      "exampleSentences": [
        {"target": "周末很多人喜欢去郊区露营或者在公园野餐。", "translation": "On weekends many people like to go camping in the suburbs or have picnics in the park.", "phonetic": "zhòumò hěnduō rén..."}
      ]
    }
  },
  # 19. Spring
  {
    "spanish": {
      "topicId": "nature-environment",
      "front": "la primavera",
      "back": "spring (season)",
      "phonetic": "lah pree-mah-VEH-rah",
      "exampleTarget": "En primavera los árboles florecen y los días se vuelven más templados y luminosos.",
      "exampleTranslation": "In spring the trees bloom and the days become milder and more luminous.",
      "grammarNotes": "Feminine noun: la primavera. Preposition: en primavera (in spring).",
      "hint": "Season between winter and summer.",
      "exampleSentences": [
        {"target": "La primavera es mi estación favorita del año por sus colores vivos.", "translation": "Spring is my favorite season of the year for its vivid colors."}
      ]
    },
    "english": {
      "topicId": "nature-environment",
      "front": "spring",
      "back": "the season after winter and before summer, in which vegetation begins to appear",
      "phonetic": "spring",
      "exampleTarget": "Spring brings vibrant blossoms, warmer sunshine, and gentle breezes.",
      "exampleTranslation": "La primavera trae flores vibrantes, sol más cálido y brisas suaves.",
      "grammarNotes": "Preposition: in spring / in the spring.",
      "hint": "Blooming season.",
      "exampleSentences": [
        {"target": "Cherry blossoms bloom across the city parks in early spring.", "translation": "Los cerezos en flor florecen en los parques de la ciudad a principios de la primavera."}
      ]
    },
    "german": {
      "topicId": "nature-environment",
      "front": "der Frühling",
      "back": "spring",
      "phonetic": "dehr FRY-ling",
      "exampleTarget": "Im Frühling erwacht die Natur aus dem langen Winterschlaf.",
      "exampleTranslation": "In spring nature awakens from the long winter slumber.",
      "grammarNotes": "Masculine noun: der Frühling. Preposition: im Frühling (in spring).",
      "hint": "Jahreszeit des Aufblühens.",
      "exampleSentences": [
        {"target": "Der milde Frühling lädt zu den ersten Radtouren im Grünen ein.", "translation": "The mild spring invites the first bicycle tours in the countryside."}
      ]
    },
    "chinese": {
      "topicId": "nature-environment",
      "front": "春天 / 春季 (chūntiān / chūnjì)",
      "back": "spring / springtime",
      "phonetic": "chūn-tiān / chūn-jì",
      "exampleTarget": "春天万物复苏，公园里百花齐放，处处洋溢着生机。",
      "exampleTranslation": "In spring all things revive, hundreds of flowers bloom in parks, brimming with vitality everywhere.",
      "grammarNotes": "Noun: 春天 (chūntiān). 四季 (sìjì) = the four seasons.",
      "hint": "冬夏之间的温暖播种季节。",
      "exampleSentences": [
        {"target": "春天的天气逐渐转暖，微风吹拂让人感到格外舒适。", "translation": "The spring weather gradually turns warm; the gentle breeze makes one feel exceptionally comfortable.", "phonetic": "chūntiān de tiānqì..."}
      ]
    }
  },
  # 20. Summer
  {
    "spanish": {
      "topicId": "nature-environment",
      "front": "el verano",
      "back": "summer",
      "phonetic": "ehl veh-RAH-noh",
      "exampleTarget": "Durante el caluroso verano solemos viajar a la costa para nadar en el mar.",
      "exampleTranslation": "During the hot summer we usually travel to the coast to swim in the sea.",
      "grammarNotes": "Masculine noun: el verano. Preposition: en verano (in summer).",
      "hint": "Warmest season of the year.",
      "exampleSentences": [
        {"target": "El verano ofrece largas horas de luz solar y agradables noches al aire libre.", "translation": "Summer offers long hours of sunlight and pleasant open-air nights."}
      ]
    },
    "english": {
      "topicId": "nature-environment",
      "front": "summer",
      "back": "the warmest season of the year, between spring and autumn",
      "phonetic": "SUM-er",
      "exampleTarget": "Summer is the perfect season for outdoor adventures and beach trips.",
      "exampleTranslation": "El verano es la temporada perfecta para aventuras al aire libre y viajes a la playa.",
      "grammarNotes": "Preposition: in summer / during the summer.",
      "hint": "Warmest season.",
      "exampleSentences": [
        {"target": "Children eagerly look forward to their long summer holiday from school.", "translation": "Los niños esperan con entusiasmo sus largas vacaciones de verano de la escuela."}
      ]
    },
    "german": {
      "topicId": "nature-environment",
      "front": "der Sommer",
      "back": "summer",
      "phonetic": "dehr ZOH-mer",
      "exampleTarget": "Im Sommer verbringen viele Familien ihren Urlaub an den Seen oder am Meer.",
      "exampleTranslation": "In the summer many families spend their vacation at the lakes or at the sea.",
      "grammarNotes": "Masculine noun: der Sommer. Preposition: im Sommer (in summer).",
      "hint": "Wärmste Jahreszeit.",
      "exampleSentences": [
        {"target": "Die langen lauen Sommerabende im Biergarten sind unvergesslich.", "translation": "The long balmy summer evenings in the beer garden are unforgettable."}
      ]
    },
    "chinese": {
      "topicId": "nature-environment",
      "front": "夏天 / 夏季 (xiàtiān / xiàjì)",
      "back": "summer",
      "phonetic": "xià-tiān / xià-jì",
      "exampleTarget": "夏天虽然天气炎热，但也是品尝冰镇西瓜和去海边游泳的好时节。",
      "exampleTranslation": "Although the weather in summer is hot, it is also a great season for tasting chilled watermelon and swimming at the beach.",
      "grammarNotes": "Noun: 夏天 (xiàtiān). 夏令营 = summer camp; 暑假 = summer vacation.",
      "hint": "一年中最炎热的季节。",
      "exampleSentences": [
        {"target": "夏天的傍晚在湖边散步，迎面吹来的晚风格外清凉。", "translation": "Walking by the lake on summer evenings, the evening breeze blowing on your face is exceptionally refreshing.", "phonetic": "xiàtiān de bàngwǎn..."}
      ]
    }
  },
  # 21. Autumn / Fall
  {
    "spanish": {
      "topicId": "nature-environment",
      "front": "el otoño",
      "back": "autumn / fall",
      "phonetic": "ehl oh-TOH-nyoh",
      "exampleTarget": "En otoño las hojas de los árboles caducos se tiñen de dorado, rojo y ocre.",
      "exampleTranslation": "In autumn the leaves of deciduous trees turn gold, red, and ochre.",
      "grammarNotes": "Masculine noun: el otoño. Preposition: en otoño (in autumn).",
      "hint": "Season when leaves change color and drop.",
      "exampleSentences": [
        {"target": "El aire fresco del otoño resulta muy tonificante para salir a caminar.", "translation": "The crisp autumn air is very invigorating for going out for a walk."}
      ]
    },
    "english": {
      "topicId": "nature-environment",
      "front": "autumn / fall",
      "back": "the season after summer and before winter, when leaves fall and crops are gathered",
      "phonetic": "AW-tuhm / fawl",
      "exampleTarget": "The autumn foliage in the mountain forests creates breathtaking golden landscapes.",
      "exampleTranslation": "El follaje otoñal en los bosques de montaña crea paisajes dorados impresionantes.",
      "grammarNotes": "UK: autumn; US: fall or autumn. Preposition: in autumn / in the fall.",
      "hint": "Harvest season with falling leaves.",
      "exampleSentences": [
        {"target": "Harvest festivals are celebrated in agricultural communities throughout the fall.", "translation": "Los festivales de la cosecha se celebran en las comunidades agrícolas durante todo el otoño."}
      ]
    },
    "german": {
      "topicId": "nature-environment",
      "front": "der Herbst",
      "back": "autumn / fall",
      "phonetic": "dehr hehrpst",
      "exampleTarget": "Im Herbst färben sich die Wälder in prächtigen goldenen und roten Tönen.",
      "exampleTranslation": "In autumn the forests turn into magnificent golden and red hues.",
      "grammarNotes": "Masculine noun: der Herbst. Preposition: im Herbst (in autumn).",
      "hint": "Jahreszeit der bunten Blätter und Ernte.",
      "exampleSentences": [
        {"target": "Der kühle Herbstwind weht das bunte Laub über die Gehwege.", "translation": "The cool autumn wind blows colorful leaves across the sidewalks."}
      ]
    },
    "chinese": {
      "topicId": "nature-environment",
      "front": "秋天 / 秋季 (qiūtiān / qiūjì)",
      "back": "autumn / fall",
      "phonetic": "qiū-tiān / qiū-jì",
      "exampleTarget": "秋天是收获的黄金季节，金黄色的稻田在微风中泛起层层波浪。",
      "exampleTranslation": "Autumn is the golden season of harvest; golden rice fields ripple with layers of waves in the breeze.",
      "grammarNotes": "Noun: 秋天 (qiūtiān). 中秋节 = Mid-Autumn Festival. 秋高气爽 = crisp autumn climate.",
      "hint": "夏冬之间落叶收获的季节。",
      "exampleSentences": [
        {"target": "秋高气爽的十月是最适合外出登山和赏红叶的黄金时段。", "translation": "The crisp and pleasant October is the golden time best suited for climbing mountains and admiring red leaves.", "phonetic": "qiū gāo qì shuǎng de..."}
      ]
    }
  },
  # 22. Winter
  {
    "spanish": {
      "topicId": "nature-environment",
      "front": "el invierno",
      "back": "winter",
      "phonetic": "ehl een-VYEHR-noh",
      "exampleTarget": "En invierno encendemos la chimenea de leña para disfrutar de una velada acogedora.",
      "exampleTranslation": "In winter we light the wood fireplace to enjoy a cozy evening.",
      "grammarNotes": "Masculine noun: el invierno. Preposition: en invierno (in winter).",
      "hint": "Coldest season of the year.",
      "exampleSentences": [
        {"target": "Las cumbres de las montañas quedan cubiertas de nieve blanca durante todo el invierno.", "translation": "The mountain peaks remain covered with white snow throughout the winter."}
      ]
    },
    "english": {
      "topicId": "nature-environment",
      "front": "winter",
      "back": "the coldest season of the year, between autumn and spring",
      "phonetic": "WIN-ter",
      "exampleTarget": "Winter brings sparkling snowscapes and cozy evenings by the fireplace.",
      "exampleTranslation": "El invierno trae paisajes nevados relucientes y veladas acogedoras junto a la chimenea.",
      "grammarNotes": "Preposition: in winter / in the winter.",
      "hint": "Coldest season with snow and ice.",
      "exampleSentences": [
        {"target": "Many northern ski resorts open their slopes in early winter.", "translation": "Muchas estaciones de esquí del norte abren sus pistas a principios del invierno."}
      ]
    },
    "german": {
      "topicId": "nature-environment",
      "front": "der Winter",
      "back": "winter",
      "phonetic": "dehr VIN-ter",
      "exampleTarget": "Im Winter bedeckt eine dicke weiße Schneeschicht die Alpengipfel.",
      "exampleTranslation": "In winter a thick white blanket of snow covers the Alpine peaks.",
      "grammarNotes": "Masculine noun: der Winter. Preposition: im Winter (in winter).",
      "hint": "Kälteste Jahreszeit mit Frost und Schnee.",
      "exampleSentences": [
        {"target": "Warme Wollpullover und Handschuhe sind im eisigen Winter unverzichtbar.", "translation": "Warm wool sweaters and gloves are indispensable in icy winter."}
      ]
    },
    "chinese": {
      "topicId": "nature-environment",
      "front": "冬天 / 冬季 (dōngtiān / dōngjì)",
      "back": "winter",
      "phonetic": "dōng-tiān / dōng-jì",
      "exampleTarget": "北方的冬天白雪皑皑，大家围坐在一起吃热气腾腾的火锅非常惬意。",
      "exampleTranslation": "Northern winter is covered in white snow; everyone sitting together around steaming hot pot is very delightful.",
      "grammarNotes": "Noun: 冬天 (dōngtiān). 寒冬 = freezing winter; 冬至 = Winter Solstice.",
      "hint": "一年中最寒冷的下雪季节。",
      "exampleSentences": [
        {"target": "冬天下雪的时候，整座城市银装素裹宛如童话世界。", "translation": "When it snows in winter, the whole city is clothed in silver like a fairytale world.", "phonetic": "dōngtiān xiàxǔe de shíhou..."}
      ]
    }
  },
  # 23. Park
  {
    "spanish": {
      "topicId": "urban-life",
      "front": "el parque",
      "back": "park",
      "phonetic": "ehl PAHR-keh",
      "exampleTarget": "Los vecinos pasean con sus mascotas y leen en los bancos del parque central.",
      "exampleTranslation": "The neighbors walk with their pets and read on the benches of the central park.",
      "grammarNotes": "Masculine noun: el parque. Parque infantil = playground.",
      "hint": "Green urban public area.",
      "exampleSentences": [
        {"target": "Quedamos en la fuente de piedra del parque a las cinco en punto.", "translation": "We meet at the stone fountain in the park at five o'clock sharp."}
      ]
    },
    "english": {
      "topicId": "urban-life",
      "front": "park",
      "back": "a large public garden or area of land used for recreation",
      "phonetic": "pahrk",
      "exampleTarget": "Residents love jogging along the tree-lined paths of the municipal park.",
      "exampleTranslation": "A los residentes les encanta trotar por los senderos arbolados del parque municipal.",
      "grammarNotes": "Countable noun: park, parks. Also used as verb: to park a car.",
      "hint": "Green public recreational area.",
      "exampleSentences": [
        {"target": "Families gathered in the park for a sunny Saturday afternoon picnic.", "translation": "Las familias se reunieron en el parque para un picnic un sábado por la tarde soleado."}
      ]
    },
    "german": {
      "topicId": "urban-life",
      "front": "der Park (Pl. Parks)",
      "back": "park",
      "phonetic": "dehr pahrk",
      "exampleTarget": "Der Stadtpark bietet weitläufige Grünflächen zum Entspannen und Verweilen.",
      "exampleTranslation": "The city park offers spacious green areas to relax and linger.",
      "grammarNotes": "Masculine noun: der Park, die Parks. Preposition: im Park (in the park).",
      "hint": "Öffentliche Grünanlage zur Erholung.",
      "exampleSentences": [
        {"target": "Wir spazierten am Sonntagnachmittag gemütlich durch den Schlosspark.", "translation": "We leisurely walked through the palace park on Sunday afternoon."}
      ]
    },
    "chinese": {
      "topicId": "urban-life",
      "front": "公园 (gōngyuán)",
      "back": "park (public park)",
      "phonetic": "gōng-yuán",
      "exampleTarget": "周末许多市民来到城市森林公园散步、呼吸清新空气。",
      "exampleTranslation": "On weekends many citizens come to the urban forest park to take walks and breathe fresh air.",
      "grammarNotes": "Noun: 公 (public) + 园 (garden). Measure word: 座 (zuò) or 个 (gè).",
      "hint": "供公众游览休息的风景绿地。",
      "exampleSentences": [
        {"target": "傍晚时分，公园的湖面在夕阳映照下波光粼粼。", "translation": "At dusk, the lake surface in the park ripples with sparkling waves under the reflection of the sunset.", "phonetic": "bàngwǎn shífēn, gōngyuán..."}
      ]
    }
  },
  # 24. Hospital
  {
    "spanish": {
      "topicId": "health-body",
      "front": "el hospital",
      "back": "hospital",
      "phonetic": "ehl ohs-pee-TAHL",
      "exampleTarget": "El hospital universitario cuenta con modernos equipos médicos y urgencias.",
      "exampleTranslation": "The university hospital has modern medical equipment and emergency services.",
      "grammarNotes": "Masculine noun: el hospital. \"H\" is silent. Plural: los hospitales.",
      "hint": "Medical care institution.",
      "exampleSentences": [
        {"target": "La ambulancia llegó al hospital en menos de diez minutos.", "translation": "The ambulance arrived at the hospital in less than ten minutes."}
      ]
    },
    "english": {
      "topicId": "health-body",
      "front": "hospital",
      "back": "an institution providing medical and surgical treatment and nursing care",
      "phonetic": "HOS-pi-tl",
      "exampleTarget": "The modern children's hospital provides comprehensive specialized pediatric care.",
      "exampleTranslation": "El moderno hospital infantil ofrece atención pediátrica especializada e integral.",
      "grammarNotes": "US: in the hospital; UK: in hospital (without article when a patient).",
      "hint": "Medical treatment building.",
      "exampleSentences": [
        {"target": "Doctors and nurses worked tirelessly around the clock at the hospital.", "translation": "Médicos y enfermeras trabajaron incansablemente las veinticuatro horas en el hospital."}
      ]
    },
    "german": {
      "topicId": "health-body",
      "front": "das Krankenhaus (Pl. Krankenhäuser)",
      "back": "hospital",
      "phonetic": "dahs KRAHN-ken-hows",
      "exampleTarget": "Das städtische Krankenhaus verfügt über eine hochmoderne Notaufnahme.",
      "exampleTranslation": "The municipal hospital has a state-of-the-art emergency department.",
      "grammarNotes": "Neuter compound noun: das Krankenhaus, die Krankenhäuser. Preposition: im Krankenhaus.",
      "hint": "Medizinische Behandlungseinrichtung.",
      "exampleSentences": [
        {"target": "Er wurde nach dem Sportunfall sofort ins nächste Krankenhaus gebracht.", "translation": "He was immediately taken to the nearest hospital after the sports accident."}
      ]
    },
    "chinese": {
      "topicId": "health-body",
      "front": "医院 (yīyuàn)",
      "back": "hospital",
      "phonetic": "yī-yuàn",
      "exampleTarget": "遇到突发身体不适时，应尽快前往就近正规医院就诊。",
      "exampleTranslation": "When encountering sudden physical discomfort, one should go to the nearest regular hospital for medical treatment as soon as possible.",
      "grammarNotes": "Noun: 医 (medical) + 院 (institution). Measure word: 所 (suǒ) or 家 (jiā). 看病 = see doctor.",
      "hint": "提供医疗救治服务的机构。",
      "exampleSentences": [
        {"target": "这家综合性三甲医院拥有一流的专家团队和先进的诊疗设备。", "translation": "This comprehensive top-tier hospital has a first-rate expert team and advanced diagnostic equipment.", "phonetic": "zhè jiā zōnghéxìng..."}
      ]
    }
  },
  # 25. Bank
  {
    "spanish": {
      "topicId": "urban-life",
      "front": "el banco",
      "back": "bank (financial / bench)",
      "phonetic": "ehl BAHN-koh",
      "exampleTarget": "Tengo que ir al banco a abrir una cuenta de ahorros para el nuevo negocio.",
      "exampleTranslation": "I have to go to the bank to open a savings account for the new business.",
      "grammarNotes": "Masculine noun: el banco. Polysemous: financial bank or park bench.",
      "hint": "Financial institution.",
      "exampleSentences": [
        {"target": "El cajero automático del banco está situado a la entrada.", "translation": "The bank's ATM is located at the entrance."}
      ]
    },
    "english": {
      "topicId": "urban-life",
      "front": "bank",
      "back": "a financial establishment that invests money, pays interest, and provides loans",
      "phonetic": "bank",
      "exampleTarget": "I visited the downtown bank branch to exchange currency before my international flight.",
      "exampleTranslation": "Visité la sucursal bancaria del centro para cambiar divisas antes de mi vuelo internacional.",
      "grammarNotes": "Countable noun: bank, banks. Bank account, bank transfer.",
      "hint": "Financial institution.",
      "exampleSentences": [
        {"target": "Online mobile banking makes managing daily accounts very straightforward.", "translation": "La banca móvil por internet hace que administrar las cuentas diarias sea muy sencillo."}
      ]
    },
    "german": {
      "topicId": "urban-life",
      "front": "die Bank (Pl. Banken [Finanz] / Bänke [Sitz])",
      "back": "bank",
      "phonetic": "dee bahnk",
      "exampleTarget": "Ich muss vor dem Feiertag noch zur Bank, um Bargeld abzuheben.",
      "exampleTranslation": "Before the holiday I still need to go to the bank to withdraw cash.",
      "grammarNotes": "Feminine noun: die Bank. Note plural: die Banken (financial institutions) vs. die Bänke (park benches).",
      "hint": "Kreditinstitut für Geldgeschäfte.",
      "exampleSentences": [
        {"target": "Die Filiale der Bank schließt freitags bereits um sechzehn Uhr.", "translation": "The branch of the bank closes as early as 4 PM on Fridays."}
      ]
    },
    "chinese": {
      "topicId": "urban-life",
      "front": "银行 (yínháng)",
      "back": "bank (financial institution)",
      "phonetic": "yín-háng",
      "exampleTarget": "出国旅行前，最好先去银行办理好支持境外使用的信用卡。",
      "exampleTranslation": "Before traveling abroad, it is best to first go to the bank to handle a credit card supporting overseas use.",
      "grammarNotes": "Noun: 银 (silver) + 行 (firm/business, pronounced háng). Measure word: 家 (jiā).",
      "hint": "办理存款放贷货币业务的金融机构。",
      "exampleSentences": [
        {"target": "银行大厅里设有二十四小时全天候自动取款机。", "translation": "The bank lobby is equipped with twenty-four-hour automated teller machines.", "phonetic": "yínháng dàtīng lǐ shèyǒu..."}
      ]
    }
  }
]

# We will write the first 25, and then write another 25 to reach 50 concepts!
# Let us define concepts 26 to 50 in the same file to generate all 50 concepts (200 cards).

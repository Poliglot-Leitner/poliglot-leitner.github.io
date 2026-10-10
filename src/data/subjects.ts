import type { SubjectOption } from '../types';

export const AVAILABLE_SUBJECTS: SubjectOption[] = [
  {
    id: 'fun-facts',
    name: 'Fun Facts',
    description: 'Fascinating curiosities, nature anomalies, and world trivia',
    icon: 'Sparkles',
    category: 'knowledge',
    sampleDeckTitle: 'Mind-Blowing Curiosities',
  },
  {
    id: 'history',
    name: 'Historical Figures',
    description: 'Pioneers, philosophers, strategists, and world-changers',
    icon: 'Landmark',
    category: 'knowledge',
    sampleDeckTitle: 'Pioneers & Thinkers',
  },
  {
    id: 'science',
    name: 'Science & Cosmos',
    description: 'Quantum physics, genetics, astronomy, and chemistry',
    icon: 'Atom',
    category: 'stem',
    sampleDeckTitle: 'Scientific Principles & Formulas',
  },
  {
    id: 'math',
    name: 'Mathematics',
    description: 'Elegant theorems, algebra, calculus, and formulas in KaTeX',
    icon: 'Binary',
    category: 'stem',
    sampleDeckTitle: 'Fundamental Math & Identities',
  },
  {
    id: 'programming',
    name: 'Programming',
    description: 'Core CS fundamentals, algorithms, web protocols, and design patterns',
    icon: 'Code2',
    category: 'stem',
    sampleDeckTitle: 'CS & Software Engineering',
  },
  {
    id: 'manners',
    name: 'Manners & Etiquette',
    description: 'Dining protocol, professional communication, and social diplomacy',
    icon: 'HeartHandshake',
    category: 'life',
    sampleDeckTitle: 'Modern Social & Dining Etiquette',
  },
  {
    id: 'survival',
    name: 'Survival Skills',
    description: 'Wilderness navigation, emergency first-aid, water, and shelter',
    icon: 'Compass',
    category: 'life',
    sampleDeckTitle: 'Wilderness & Emergency Survival',
  },
  {
    id: 'lang-english',
    name: 'English Nuances',
    description: 'Advanced vocabulary, common idioms, and confusing homophones',
    icon: 'BookOpen',
    category: 'languages',
    defaultLanguageCode: 'en-US',
    sampleDeckTitle: 'Advanced English Vocabulary & Idioms',
  },
  {
    id: 'lang-spanish',
    name: 'Spanish',
    description: 'Everyday idioms, essential grammar, and conversational Spanish',
    icon: 'Languages',
    category: 'languages',
    defaultLanguageCode: 'es-ES',
    sampleDeckTitle: 'Spanish Essentials & Expressions',
  },
  {
    id: 'lang-chinese',
    name: 'Chinese (Mandarin)',
    description: 'Pinyin, essential chengyu (idioms), and daily conversation',
    icon: 'MessageSquareText',
    category: 'languages',
    defaultLanguageCode: 'zh-CN',
    sampleDeckTitle: 'Mandarin Pinyin & Core Phrases',
  },
  {
    id: 'lang-german',
    name: 'German',
    description: 'Unique compound nouns, travel phrases, and grammatical rules',
    icon: 'Globe2',
    category: 'languages',
    defaultLanguageCode: 'de-DE',
    sampleDeckTitle: 'German Key Expressions & Grammar',
  },
];

interface SeedCardTemplate {
  front: string;
  back: string;
  hint?: string;
  phonetic?: string;
}

export const INITIAL_SEEDS: Record<string, SeedCardTemplate[]> = {
  'fun-facts': [
    {
      front: 'Why do flamingos often stand on one leg?',
      back: 'To conserve body heat and reduce muscle fatigue. A biomechanical locking mechanism in their joints allows them to balance effortlessly with virtually zero muscular exertion.',
      hint: 'Think about heat loss and skeletal mechanics',
    },
    {
      front: 'What is the only mammal capable of true, sustained self-powered flight?',
      back: 'The **bat** (order *Chiroptera*). Other mammals like flying squirrels or sugar gliders merely glide.',
    },
    {
      front: 'Which country in the world contains the most natural lakes?',
      back: '**Canada**. It contains over 879,000 lakes, which represents around 62% of all lakes on Earth.',
    },
    {
      front: 'How long is one full day on the planet Venus compared to its year?',
      back: 'A single day on Venus (one rotation: 243 Earth days) is **longer** than its year (orbiting the Sun: 225 Earth days).',
    },
    {
      front: 'Why does pure honey practically never spoil even after thousands of years?',
      back: 'Honey has an extremely low moisture content (~17%) and high acidity (pH 3 to 4.5). Combined with natural hydrogen peroxide from bees, microorganisms cannot survive in it.',
    },
  ],
  'history': [
    {
      front: 'Who was Hypatia of Alexandria (c. 360–415 AD)?',
      back: 'A Hellenistic polymath, philosopher, mathematician, and astronomer. She was one of the earliest documented female mathematicians and led the Neoplatonic school in Alexandria.',
    },
    {
      front: 'Which scholar wrote the *Canon of Medicine* (Qanun), standard medical textbook in Europe and the Islamic world for over 600 years?',
      back: '**Ibn Sina** (known in the West as **Avicenna**, 980–1037 AD), considered the father of early modern medicine.',
    },
    {
      front: 'Who wrote the first computer algorithm in history for Charles Babbage’s Analytical Engine?',
      back: '**Ada Lovelace** (1815–1852). She foresaw that computers could manipulate symbols beyond mere numbers, such as music and graphics.',
    },
    {
      front: 'Which Roman Emperor penned *Meditations*, a personal journal of Stoic reflections on duty, resilience, and mortality?',
      back: '**Marcus Aurelius** (ruled 161–180 AD), the last of the "Five Good Emperors".',
    },
    {
      front: 'Who led the Haitian Revolution, creating the first independent nation born from a successful uprising of enslaved people?',
      back: '**Toussaint Louverture** (1743–1803), nicknamed the "Black Napoleon" for his military and administrative acumen.',
    },
  ],
  'science': [
    {
      front: "State Heisenberg's Uncertainty Principle and its mathematical inequality:",
      back: "You cannot simultaneously determine both the precise position ($x$) and momentum ($p$) of a quantum particle:\n\n$$\\Delta x \\cdot \\Delta p \\ge \\frac{\\hbar}{2}$$",
      hint: 'Relates position uncertainty and momentum uncertainty',
    },
    {
      front: 'What does CRISPR-Cas9 do in molecular biology?',
      back: 'It acts as molecular scissors. Cas9 is an endonuclease enzyme directed by a synthetic guide RNA (gRNA) to bind and snip specific target sequences of DNA for gene editing.',
    },
    {
      front: 'What is Einstein’s Mass-Energy Equivalence formula and what does $c$ represent?',
      back: '$$E = mc^2$$\nWhere $E$ is energy, $m$ is mass, and $c \\approx 3 \\times 10^8 \\text{ m/s}$ is the speed of light in vacuum.',
    },
    {
      front: 'Why does solid ice float on liquid water, unlike almost all other substances?',
      back: 'Because hydrogen bonds form an open hexagonal lattice when water freezes, increasing volume and making ice approximately 9% less dense than liquid water.',
    },
    {
      front: 'What is the primary cellular currency of energy produced by mitochondria?',
      back: '**ATP** (Adenosine Triphosphate), primarily generated via cellular respiration and ATP synthase across the inner mitochondrial membrane.',
    },
  ],
  'math': [
    {
      front: "What is Euler's Identity and why is it celebrated?",
      back: '$$e^{i\\pi} + 1 = 0$$\nIt elegantly connects the five most fundamental constants of mathematics: $e, i, \\pi, 1,$ and $0$.',
    },
    {
      front: 'What is the formula for finding the roots of a quadratic equation $ax^2 + bx + c = 0$?',
      back: '$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$',
    },
    {
      front: 'What is the Pythagorean Theorem for a right triangle with legs $a, b$ and hypotenuse $c$?',
      back: '$$a^2 + b^2 = c^2$$',
    },
    {
      front: 'What are the derivatives of $\\sin(x)$ and $\\cos(x)$ with respect to $x$?',
      back: '$$\\frac{d}{dx}\\sin(x) = \\cos(x), \\qquad \\frac{d}{dx}\\cos(x) = -\\sin(x)$$',
    },
    {
      front: 'What is the derivative of $\\ln(x)$ and $e^{kx}$?',
      back: '$$\\frac{d}{dx}\\ln(x) = \\frac{1}{x}, \\qquad \\frac{d}{dx}e^{kx} = k e^{kx}$$',
    },
  ],
  'programming': [
    {
      front: 'What is the average and worst-case time complexity of QuickSort?',
      back: '- Average: $\\mathcal{O}(n \\log n)$\n- Worst case: $\\mathcal{O}(n^2)$ (occurs when bad pivot selection repeatedly produces unbalanced partitions)',
    },
    {
      front: 'In JavaScript/TypeScript, what is a **Closure**?',
      back: 'A closure is a function bundled together with references to its surrounding state (lexical environment), allowing it to access variables from an outer scope even after that outer function has returned.',
    },
    {
      front: 'What are the 3 tenets of the **CAP Theorem** in distributed databases?',
      back: '- **C**onsistency: Every read receives the most recent write or an error.\n- **A**vailability: Every non-failing node returns a valid response.\n- **P**artition Tolerance: The system functions despite network drops between nodes.\n*(A network can guarantee at most two of the three)*',
    },
    {
      front: 'What is the difference between an **Idempotent** and a **Safe** HTTP request?',
      back: '- **Safe** (`GET`, `HEAD`): Does not modify server state.\n- **Idempotent** (`PUT`, `DELETE`, `GET`): Calling the endpoint once has the identical side effect as calling it multiple times.',
    },
    {
      front: 'What is the difference between Git `merge` and Git `rebase`?',
      back: '- `git merge`: Preserves complete commit history with a merge commit.\n- `git rebase`: Replays your branch commits on top of another branch, producing a clean, linear history.',
    },
  ],
  'manners': [
    {
      front: 'In formal table dining, how do you remember which bread plate and drink glass belong to you?',
      back: 'Use the **BMW rule**:\n- **B**read plate on the Left\n- **M**eal / Main plate in the Center\n- **W**ater / Wine glasses on the Right',
    },
    {
      front: 'When introducing two individuals of different seniority, in what order should the names be stated?',
      back: 'Introduce the person of lower authority/seniority to the person of higher seniority:\n*"President Alvarez, may I introduce our new engineer, Jamie Chen."*',
    },
    {
      front: 'At a formal dinner, what silverware position indicates to the waiter that you have finished your meal?',
      back: 'Place your knife and fork parallel to each other at the **4:20** or **6:00** angle on your plate, tines facing up, blade facing inward.',
    },
    {
      front: 'When is it appropriate to avoid using "Reply All" in professional email?',
      back: 'Whenever sending simple social courtesies (e.g. "Thanks!", "Congratulations!", "Got it") or messages relevant only to the sender, to prevent polluting team inboxes.',
    },
    {
      front: 'What is the correct way to sneeze or cough in public when no tissue is immediately available?',
      back: 'Cough or sneeze into the inner crook of your elbow, never into your open palms which touch shared surfaces.',
    },
  ],
  'survival': [
    {
      front: 'What is the wilderness survival "Rule of 3s"?',
      back: 'You can generally survive:\n- **3 minutes** without oxygen\n- **3 hours** without shelter in extreme conditions\n- **3 days** without water\n- **3 weeks** without food',
    },
    {
      front: 'What is the universal distress signal in the wilderness?',
      back: 'Any distinct signal repeated **three times** in sequence:\n- 3 whistle blasts\n- 3 signal fires arranged in a triangle\n- 3 flashes with a signal mirror',
    },
    {
      front: 'Why should you never eat frozen snow directly when dehydrated in sub-zero wilderness?',
      back: 'Melting ice internally drops your core body temperature rapidly, dramatically accelerating the onset of **hypothermia**. Always melt snow over a heat source first.',
    },
    {
      front: 'How do you locate the North Star (Polaris) using the Big Dipper constellation?',
      back: 'Find the two "pointer stars" at the outer edge of the Dipper cup (Merak and Dubhe). Draw an imaginary straight line through them and extend it about 5 times the distance to find Polaris.',
    },
    {
      front: 'What does the survival acronym **S.T.O.P.** stand for when you realize you are lost?',
      back: '- **S**top: Calm down and stay put\n- **T**hink: Assess your situation\n- **O**bserve: Weather, terrain, resources, light\n- **P**lan: Prioritize shelter and signaling before nightfall',
    },
  ],
  'lang-english': [
    {
      front: 'What does the word **Serendipity** mean?',
      back: 'The occurrence and development of events by chance in a happy or beneficial way; finding valuable things unsought.',
      hint: 'Think pleasant unexpected discoveries',
    },
    {
      front: 'What is the distinction between **Affect** and **Effect**?',
      back: '- **Affect** (usually a verb): To influence or produce a change in (*"The climate affects harvest"*).\n- **Effect** (usually a noun): The result or consequence (*"The policy had an immediate effect"*).',
    },
    {
      front: 'What does the idiom **"Bite the bullet"** mean?',
      back: 'To face a difficult, painful, or grim situation with resilience and courage. (Originates from wounded battlefield soldiers biting lead bullets during emergency surgery).',
    },
    {
      front: 'What is the definition of **Epiphanic** (an epiphany)?',
      back: 'Characterized by a sudden, striking realization, intuitive insight, or manifestation of the meaning of something.',
    },
  ],
  'lang-spanish': [
    {
      front: '¿Qué significa la expresión **"Estar en las nubes"**?',
      back: 'To be daydreaming, distracted, or lost in thought. (Literal: "To be in the clouds").',
      phonetic: 'ehs-TAHR ehn lahs NOO-behs',
    },
    {
      front: 'What is the key difference between the verbs **Ser** and **Estar**?',
      back: '- **Ser**: Fundamental identity, characteristics, origin, time, profession (*"Soy médico"*).\n- **Estar**: Temporary states, emotions, locations, conditions (*"Estoy cansado"*, *"Está en Madrid"*).',
    },
    {
      front: '¿Cómo se pide cortésmente la cuenta en un restaurante?',
      back: '**"¿Me trae la cuenta, por favor?"** o simplemente **"La cuenta, por favor."**',
      phonetic: 'lah KWEHN-tah, por fah-VOR',
    },
    {
      front: '¿Qué significa **"Ojalá"** y de dónde proviene?',
      back: '"I hope so" / "God willing". It originated from the Andalusian Arabic expression *law šāʾ Allāh* ("if God wills it").',
      phonetic: 'oh-hah-LAH',
    },
  ],
  'lang-chinese': [
    {
      front: '你好 (Nǐ hǎo)',
      back: 'Hello! (Literal translation: "You good"). The universal standard greeting in Mandarin.',
      phonetic: 'Nǐ hǎo [nee-how]',
    },
    {
      front: '温故知新 (Wēn gù zhī xīn)',
      back: 'Reviewing the past helps one understand the present / Gain new insights through reviewing old knowledge. (From Confucius, the core principle of spaced repetition!)',
      phonetic: 'Wēn gù zhī xīn',
    },
    {
      front: '加油！ (Jiāyóu!)',
      back: '"Keep it up!" / "Come on!" / "You can do it!" (Literal: "Add oil"). Used to cheer someone on or encourage effort.',
      phonetic: 'Jiā yóu [jah-yo]',
    },
    {
      front: '谢谢 / 不客气 (Xièxie / Bú kèqi)',
      back: 'Thank you / You are welcome ("No need for formalities").',
      phonetic: 'Shyeh-shyeh / Boo kuh-chee',
    },
  ],
  'lang-german': [
    {
      front: 'Was bedeutet das Wort **Schadenfreude**?',
      back: 'Joy or malicious pleasure derived from witnessing another person’s misfortune or trouble.',
      phonetic: 'SHAH-den-froy-deh',
    },
    {
      front: 'Was bedeutet **Fernweh** im Gegensatz zu **Heimweh**?',
      back: '- **Fernweh**: A deep ache or longing to travel to distant places (wanderlust).\n- **Heimweh**: Homesickness.',
      phonetic: 'FEHRN-vay',
    },
    {
      front: 'Wie fragt man höflich nach dem Weg zum Bahnhof?',
      back: '**"Entschuldigung, wo ist der Bahnhof?"** (Excuse me, where is the train station?)',
      phonetic: 'ent-SHOOL-dee-goong, vo ɪst deːɐ̯ ˈbaːn-hoːf',
    },
    {
      front: 'Was bedeutet die Redewendung **"Ich verstehe nur Bahnhof"**?',
      back: '"It is all Greek to me" / "I don\'t understand a single thing you are saying."',
      phonetic: 'ikh fer-SHTAY-eh noor BAHN-hof',
    },
  ],
};

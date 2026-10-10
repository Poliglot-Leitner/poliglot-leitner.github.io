# Polyglot Leitner: Language Learning System

> A lean, minimalist in-browser language learning tool using the **Leitner 5-Box Spaced Repetition System**.
> Built with **React 19, TypeScript, Vite, Tailwind CSS v4, Dexie (IndexedDB), and the Web Speech API**.
> **100% Client-Side &bull; Zero Backend &bull; Completely Offline PWA &bull; Hosted on GitHub Pages.**

---

## Language-First Curriculum Architecture

The app guides you through a 3-step learning matrix:

1. **Step 1: Choose Your Target Languages**
   - 🇪🇸 **Spanish** (`es-ES`): Conversational idioms, formal *usted* vs informal *tú*, and regional expressions.
   - 🇬🇧 **English** (`en-US`): Nuanced vocabulary, false friends, idioms, and high-register terms.
   - 🇩🇪 **German** (`de-DE`): Evocative compound nouns (*Schadenfreude*, *Fernweh*), travel essentials, and *Siezen* vs *Duzen*.
   - 🇨🇳 **Chinese (Mandarin)** (`zh-CN`): Hanzi characters with **Pinyin tonal markings**, Chengyu idioms (*温故知新*), and conversational etiquette.

2. **Step 2: Choose Learning Subjects & Topics**
   - ✈️ **Daily Life & Travel**: Transit, ordering at cafés/restaurants, hotel requests, and navigation.
   - 🤝 **Manners & Social Protocol**: Polite addresses, greetings, formal respect, and dinner table etiquette.
   - 🏛️ **Culture & Traditions**: National festivals, folklore, history, and cultural heritage.
   - 🔬 **Science & Nature**: Environmental terminology, astronomy, biology, and health.
   - 💼 **Business & Professional**: Formal email formulas, meetings, consensus, and leadership.
   - ✨ **Idioms, Proverbs & Wisdom**: Figurative expressions, cultural proverbs, and colloquial idioms.

3. **Step 3: Select Your Difficulty Level (CEFR)**
   - **Beginner (A1 – A2)**: Core vocabulary, foundational phrases, and essential question patterns.
   - **Intermediate (B1 – B2)**: Conversational fluency, past/future tenses, and connecting ideas.
   - **Advanced (C1)**: Professional nuance, formal registers, and abstract discussion.
   - **Fluent (C2)**: Native-level subtleties, literary rhetoric, proverbs, and colloquialisms.

---

## Core Language Learning Features

- **Leitner 5-Box Spaced Repetition**:
  - **Box 1 (Daily)**: New and unmastered vocabulary.
  - **Box 2 (Every 3 Days)**: Reinforcement.
  - **Box 3 (Weekly / 7 Days)**: Solid recall.
  - **Box 4 (Fortnightly / 14 Days)**: Long-term memory consolidation.
  - **Box 5 (Monthly / 30 Days)**: Mastered fluency.
  - Correct answers promote cards to Box $+1$; forgotten cards reset to Box 1 for reinforcement.
- **Contextual Sentence Examples**:
  - Every card includes a full example sentence in the target language and an English translation.
- **Phonetics & Pinyin Support**:
  - Chinese cards display clear **Pinyin with tonal marks** (e.g. *Nǐ hǎo*, *Wēn gù zhī xīn*).
  - Spanish, German, and English cards provide IPA or phonetic guides.
- **Web Speech API (Native TTS)**:
  - Pronounces phrases in native target accents without external API calls or network latency.
  - Keyboard shortcut `S` to trigger pronunciation anytime.
- **Reverse Practice Mode**:
  - Toggle between **Standard** (Target Language &rarr; Translation) and **Reverse** (Translation &rarr; Target Language) for active recall.
- **Local Device Profiles & Data Sovereignty**:
  - Manage multiple learner profiles on the same device.
  - Export full JSON backups or restore previous study sessions anytime.
- **100% Offline PWA**:
  - Full service worker caching with `vite-plugin-pwa`.
  - Works on planes, trains, and offline mobile devices.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

---

## Deploy to GitHub Pages

1. In your GitHub repository, open **Settings** > **Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Push your repository to `main` — the workflow at [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml) will automatically build and publish the PWA.

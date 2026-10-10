# Leitner Spaced Repetition Learning

> A lean, minimalist in-browser learning app using the **Leitner 5-Box Spaced Repetition System**.
> Built with **React 19, TypeScript, Vite, Tailwind CSS v4, Dexie (IndexedDB), KaTeX, and the Web Speech API**.
> **100% Client-Side &bull; Zero Backend &bull; Completely Offline PWA &bull; Hosted on GitHub Pages.**

---

## Features

- **Leitner 5-Box Spaced Repetition Engine**:
  - **Box 1 (Daily)**: Brand-new or unmastered cards.
  - **Box 2 (Every 3 days)**: Reinforcement stage.
  - **Box 3 (Weekly / 7 days)**: Solid recall.
  - **Box 4 (Fortnightly / 14 days)**: Long-term memory consolidation.
  - **Box 5 (Monthly / 30 days)**: Mastered knowledge.
  - Immediate promotion on recall; resets to Box 1 on forgotten cards for optimal neuro-retention.
- **Curated Subjects with Starter Cards**:
  - **Fun Facts**: Fascinating curiosities and nature anomalies.
  - **Historical Figures**: Hypatia, Avicenna, Ada Lovelace, Marcus Aurelius, Toussaint Louverture, and more.
  - **Science**: Quantum physics ($E=mc^2$, Heisenberg's principle), molecular biology, CRISPR-Cas9, ATP.
  - **Mathematics**: Euler's identity ($e^{i\pi} + 1 = 0$), calculus derivatives, quadratic equations, Pythagorean theorem rendered in **KaTeX**.
  - **Programming**: CS fundamentals, time complexities, closures, CAP theorem, Git internals.
  - **Manners & Etiquette**: Table dining protocol (BMW rule), professional communications, introductions.
  - **Survival Skills**: Wilderness rule of 3s, navigation by Polaris, emergency signals, hypothermia prevention.
  - **Languages**: 
    - **English**: Advanced vocabulary, idioms, homophone distinctions.
    - **Spanish**: Essential idioms (*"Estar en las nubes"*), *ser* vs *estar*, dining expressions.
    - **Chinese (Mandarin)**: Greetings, Confucius idioms (*温故知新*), encouragement (*加油*), with Pinyin.
    - **German**: Compound concepts (*Schadenfreude*, *Fernweh*), travel expressions (*"Wo ist der Bahnhof?"*).
- **Web Speech API**:
  - Real-time native pronunciation in the target language accent (English, Spanish, Chinese, German, etc.) without external APIs or network calls.
- **Local Device Multi-Profiles**:
  - Create multiple local profiles on the same device.
  - Independent cards, decks, and review schedules per profile.
- **Data Sovereignty & Portability**:
  - Export full JSON backup anytime.
  - Import and restore backups on any browser or computer.
- **Offline PWA**:
  - Full service worker precaching with `vite-plugin-pwa`.
  - Works on airplanes, subways, or without internet.
  - Installable on iOS, Android, Windows, and macOS.
- **Lean Minimalist Aesthetics**:
  - Clean typography, generous whitespace, zen focus, dark and light mode toggle.
  - Smooth 3D card flip with keyboard shortcuts (`Space` = Flip, `1` = Review again, `2` = Good, `S` = Pronounce, `H` = Hint).

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/<your-username>/13-leitner.git
cd 13-leitner

# Install dependencies
npm install

# Start local development server
npm run dev
```

---

## GitHub Pages Deployment

The repository includes a ready-to-use GitHub Actions workflow in [`.github/workflows/deploy.yml`](file:///.github/workflows/deploy.yml).

To activate automatic deployments on GitHub:
1. Go to your repository **Settings** on GitHub.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
4. Push your code to `main` (or `master`). GitHub Actions will automatically build and deploy your app to `https://<your-username>.github.io/<repo-name>/`.

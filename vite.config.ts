import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  base: './', // Vital for GitHub Pages deployment under any repository subpath
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Leitner Spaced Repetition Learning',
        short_name: 'Leitner',
        description: 'Lean, minimalist in-browser spaced repetition flashcards for facts, languages, STEM, and life skills.',
        theme_color: '#09090b',
        background_color: '#09090b',
        display: 'standalone',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2,ttf,eot}'],
      },
    }),
  ],
});

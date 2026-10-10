import { useState, useEffect, useCallback, useRef } from 'react';

// Language code normalizer
export function normalizeLanguageCode(lang?: string): string {
  if (!lang) return 'en-US';
  const l = lang.toLowerCase();
  if (l === 'chinese' || l.startsWith('zh')) return 'zh-CN';
  if (l === 'spanish' || l.startsWith('es')) return 'es-ES';
  if (l === 'german' || l.startsWith('de')) return 'de-DE';
  if (l === 'english' || l.startsWith('en')) return 'en-US';
  return lang;
}

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }
  }, []);

  const cleanTextForSpeech = (raw: string, langCode: string): string => {
    let text = raw
      // Remove math formulas
      .replace(/\$\$[\s\S]*?\$\$/g, ' ')
      .replace(/\$[^\$]+?\$/g, ' ')
      // Remove markdown bold, italic, code
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/•/g, '')
      .replace(/^-\s+/gm, '')
      .trim();

    // If Chinese, remove parenthesized Latin Pinyin so Chinese TTS speaks characters
    if (langCode.startsWith('zh') || /[\u4e00-\u9fa5]/.test(text)) {
      text = text.replace(/\([A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s]+\)/g, '');
      text = text.replace(/（[A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s]+）/g, '');
    }

    return text.trim();
  };

  const stop = useCallback(() => {
    if (currentAudioRef.current) {
      try {
        currentAudioRef.current.pause();
        currentAudioRef.current.currentTime = 0;
      } catch {
        // ignore
      }
      currentAudioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
    setIsSpeaking(false);
  }, []);

  const speakWithSpeechSynthesis = useCallback((cleanedText: string, targetLang: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSpeaking(false);
      return;
    }

    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(cleanedText);
      utterance.lang = targetLang;
      utterance.rate = 0.9;
      utterance.volume = 1.0;

      const voices = window.speechSynthesis.getVoices();
      const matched = voices.find(
        v => v.lang.toLowerCase() === targetLang.toLowerCase() ||
             v.lang.toLowerCase().startsWith(targetLang.split('-')[0].toLowerCase())
      );

      if (matched) {
        utterance.voice = matched;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => {
        setIsSpeaking(false);
        activeUtteranceRef.current = null;
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        activeUtteranceRef.current = null;
      };

      activeUtteranceRef.current = utterance;
      // @ts-expect-error keep active utterance in global window
      window.__activeUtterance = utterance;

      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  }, []);

  const speak = useCallback(
    (text: string, rawLangCode: string = 'en-US') => {
      stop();

      const langCode = normalizeLanguageCode(rawLangCode);
      const cleaned = cleanTextForSpeech(text, langCode);
      if (!cleaned) return;

      setIsSpeaking(true);

      // Use local Vite dev proxy in development, direct URL in production
      const isDev = import.meta.env.DEV;
      const ttsBase = isDev ? '/api/tts' : 'https://translate.google.com/translate_tts';
      const audioUrl = `${ttsBase}?ie=UTF-8&tl=${encodeURIComponent(
        langCode
      )}&client=tw-ob&q=${encodeURIComponent(cleaned)}`;

      const audio = new Audio();
      audio.volume = 1.0;
      // Set no-referrer on element
      (audio as unknown as { referrerPolicy: string }).referrerPolicy = 'no-referrer';
      audio.src = audioUrl;
      currentAudioRef.current = audio;

      audio.onplay = () => {
        setIsSpeaking(true);
      };

      audio.onended = () => {
        setIsSpeaking(false);
        currentAudioRef.current = null;
      };

      audio.onerror = (e) => {
        console.warn('HTML5 Audio playback failed, attempting SpeechSynthesis:', e);
        currentAudioRef.current = null;
        speakWithSpeechSynthesis(cleaned, langCode);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('audio.play() rejected, attempting SpeechSynthesis:', err);
          speakWithSpeechSynthesis(cleaned, langCode);
        });
      }
    },
    [stop, speakWithSpeechSynthesis]
  );

  return {
    isSupported,
    isSpeaking,
    speak,
    stop,
  };
}

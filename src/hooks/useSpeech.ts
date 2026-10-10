import { useState, useEffect, useCallback, useRef } from 'react';

// Language code mapper to ensure accurate BCP-47 codes
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
    // Check if speechSynthesis is available in window
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      // Pre-warm voices
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

    // If Chinese, remove parenthesized Latin Pinyin to only speak Hanzi characters cleanly
    if (langCode.startsWith('zh') || /[\u4e00-\u9fa5]/.test(text)) {
      // Remove parentheses and their contents if they contain Latin characters
      text = text.replace(/\([A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s]+\)/g, '');
      text = text.replace(/（[A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ\s]+）/g, '');
    }

    return text.trim();
  };

  const stop = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
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
      // On Chromium on Linux, resume is needed if in paused state
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(cleanedText);
      utterance.lang = targetLang;
      utterance.rate = 0.9;

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

      // Store reference on window to prevent Chrome garbage collection bug
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

      // Primary Engine: Natural High-Quality Web Audio (works 100% reliably across Linux, Mac, Windows, iOS, Android)
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=${encodeURIComponent(
        langCode
      )}&client=tw-ob&q=${encodeURIComponent(cleaned)}`;

      const audio = new Audio(audioUrl);
      currentAudioRef.current = audio;

      audio.onplay = () => setIsSpeaking(true);
      audio.onended = () => {
        setIsSpeaking(false);
        currentAudioRef.current = null;
      };

      audio.onerror = () => {
        // Fallback Engine: Browser SpeechSynthesis (e.g. if offline or blocked)
        currentAudioRef.current = null;
        speakWithSpeechSynthesis(cleaned, langCode);
      };

      audio.play().catch(() => {
        // Autoplay restrictions or network fallback
        speakWithSpeechSynthesis(cleaned, langCode);
      });
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

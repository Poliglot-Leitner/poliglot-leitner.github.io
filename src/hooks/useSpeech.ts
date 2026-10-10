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
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      const updateVoices = () => {
        try {
          const v = window.speechSynthesis.getVoices();
          if (v && v.length > 0) {
            voicesRef.current = v;
          }
        } catch {
          // ignore
        }
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
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

    // If Chinese, remove parenthesized Latin Pinyin so Chinese TTS speaks characters naturally
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
        if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
          window.speechSynthesis.cancel();
        }
      } catch {
        // ignore
      }
    }
    activeUtteranceRef.current = null;
    setIsSpeaking(false);
  }, []);

  const speak = useCallback(
    (text: string, rawLangCode: string = 'en-US') => {
      const langCode = normalizeLanguageCode(rawLangCode);
      const cleaned = cleanTextForSpeech(text, langCode);
      if (!cleaned) return;

      stop();

      // PRIMARY ENGINE: Native window.speechSynthesis
      // Mobile Safari (iOS) and Android Chrome require speechSynthesis.speak() to be called
      // synchronously directly within the user click/touch event, NOT in an async callback.
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        try {
          // Resume if audio context was suspended on mobile
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }

          const utterance = new SpeechSynthesisUtterance(cleaned);
          utterance.lang = langCode;
          utterance.rate = 0.88; // Slight deliberate pace for language learners
          utterance.pitch = 1.0;
          utterance.volume = 1.0;

          // Attempt to match best voice
          const currentVoices = voicesRef.current.length > 0 
            ? voicesRef.current 
            : window.speechSynthesis.getVoices();

          if (currentVoices && currentVoices.length > 0) {
            const exactMatch = currentVoices.find(
              v => v.lang.toLowerCase().replace('_', '-') === langCode.toLowerCase().replace('_', '-')
            );
            const prefixMatch = currentVoices.find(
              v => v.lang.toLowerCase().startsWith(langCode.split('-')[0].toLowerCase())
            );
            if (exactMatch) {
              utterance.voice = exactMatch;
            } else if (prefixMatch) {
              utterance.voice = prefixMatch;
            }
          }

          utterance.onstart = () => {
            setIsSpeaking(true);
          };

          utterance.onend = () => {
            setIsSpeaking(false);
            activeUtteranceRef.current = null;
          };

          utterance.onerror = (e) => {
            console.warn('SpeechSynthesis error:', e);
            setIsSpeaking(false);
            activeUtteranceRef.current = null;
          };

          // Store reference to prevent garbage collection mid-speech (Chrome/WebKit bug)
          activeUtteranceRef.current = utterance;
          // @ts-expect-error keep active utterance in global window
          window.__activeUtterance = utterance;

          setIsSpeaking(true);
          window.speechSynthesis.speak(utterance);
          return;
        } catch (err) {
          console.warn('SpeechSynthesis invocation failed, falling back to Audio:', err);
        }
      }

      // SECONDARY FALLBACK: HTML5 Audio via Google TTS (desktop / non-speechSynthesis environments)
      try {
        const isDev = import.meta.env.DEV;
        const ttsBase = isDev ? '/api/tts' : 'https://translate.google.com/translate_tts';
        const audioUrl = `${ttsBase}?ie=UTF-8&tl=${encodeURIComponent(
          langCode
        )}&client=tw-ob&q=${encodeURIComponent(cleaned)}`;

        const audio = new Audio();
        audio.volume = 1.0;
        (audio as unknown as { referrerPolicy: string }).referrerPolicy = 'no-referrer';
        audio.src = audioUrl;
        currentAudioRef.current = audio;

        audio.onplay = () => setIsSpeaking(true);
        audio.onended = () => {
          setIsSpeaking(false);
          currentAudioRef.current = null;
        };
        audio.onerror = () => {
          setIsSpeaking(false);
          currentAudioRef.current = null;
        };

        setIsSpeaking(true);
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsSpeaking(false);
            currentAudioRef.current = null;
          });
        }
      } catch {
        setIsSpeaking(false);
      }
    },
    [stop]
  );

  return {
    isSupported,
    isSpeaking,
    speak,
    stop,
  };
}

import { useState, useEffect, useCallback } from 'react';

export function useSpeech() {
  const [isSupported, setIsSupported] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);

      const updateVoices = () => {
        const available = window.speechSynthesis.getVoices();
        setVoices(available);
      };

      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const cleanTextForSpeech = (raw: string): string => {
    return raw
      .replace(/\$\$[\s\S]*?\$\$/g, ' formula ')
      .replace(/\$[^\$]+?\$/g, ' formula ')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/•/g, '')
      .replace(/^-\s+/gm, '')
      .trim();
  };

  const speak = useCallback(
    (text: string, langCode: string = 'en-US') => {
      if (!isSupported || !window.speechSynthesis) return;

      window.speechSynthesis.cancel();

      const cleaned = cleanTextForSpeech(text);
      if (!cleaned) return;

      const utterance = new SpeechSynthesisUtterance(cleaned);
      utterance.rate = 0.95; // Slightly clearer pace for language study

      // Find best matching voice for this language
      const targetLang = langCode.toLowerCase();
      const matchedVoice = voices.find(
        v => v.lang.toLowerCase() === targetLang || v.lang.toLowerCase().startsWith(targetLang.split('-')[0])
      );

      if (matchedVoice) {
        utterance.voice = matchedVoice;
        utterance.lang = matchedVoice.lang;
      } else {
        utterance.lang = langCode;
      }

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isSupported, voices]
  );

  const stop = useCallback(() => {
    if (isSupported && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isSupported]);

  return {
    isSupported,
    isSpeaking,
    speak,
    stop,
  };
}

import { useState, useEffect, useCallback } from 'react';

export function useSpeechSynthesis(text: string) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const handleVoicesChanged = () => {
      setVoices(speechSynthesis.getVoices());
    };
    // Initial load
    handleVoicesChanged();
    // Subscribe to changes
    speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    return () => {
      speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      // Cleanup: stop speaking if component unmounts
      speechSynthesis.cancel();
    };
  }, []);

  const speak = useCallback(
    (options?: {
      pitch?: number;
      rate?: number;
      voice?: SpeechSynthesisVoice;
    }) => {
      if (!text || !voices.length) return;

      // Cancel any ongoing speech before starting new
      speechSynthesis.cancel();
      setIsPaused(false);

      const utter = new SpeechSynthesisUtterance(text);
      const preferredVoice =
        options?.voice ||
        voices.find(
          (voice) =>
            /en-US/i.test(voice.lang) && /google|microsoft/i.test(voice.name)
        ) ||
        voices.find((voice) => /en-US/i.test(voice.lang));

      if (preferredVoice) {
        utter.voice = preferredVoice;
      }
      utter.pitch = options?.pitch ?? 1;
      utter.rate = options?.rate ?? 1;

      utter.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };
      utter.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      utter.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      utter.onpause = () => setIsPaused(true);
      utter.onresume = () => setIsPaused(false);

      speechSynthesis.speak(utter);
    },
    [text, voices]
  );

  const pause = useCallback(() => {
    speechSynthesis.pause();
  }, []);

  const resume = useCallback(() => {
    speechSynthesis.resume();
  }, []);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  return { isSpeaking, isPaused, speak, pause, resume, stop, voices };
}

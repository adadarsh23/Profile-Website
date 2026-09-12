import { useState, useEffect, useCallback } from 'react';

export function useSpeechSynthesis(text: string) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    const handleVoicesChanged = () => {
      try {
        setVoices(window.speechSynthesis.getVoices());
      } catch {
        // ignore voice fetch error
      }
    };

    handleVoicesChanged();
    window.speechSynthesis.addEventListener(
      'voiceschanged',
      handleVoicesChanged
    );
    return () => {
      window.speechSynthesis.removeEventListener(
        'voiceschanged',
        handleVoicesChanged
      );
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore cleanup error
      }
    };
  }, []);

  const speak = useCallback(
    (options?: {
      pitch?: number;
      rate?: number;
      voice?: SpeechSynthesisVoice;
    }) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window))
        return;
      if (!text || !text.trim()) return;

      try {
        window.speechSynthesis.cancel();
        setIsPaused(false);

        // Strip markdown symbols for clean speech audio
        const cleanText = text
          .replace(/[#*_`~>[\]()!-]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim();

        const utter = new SpeechSynthesisUtterance(cleanText);
        const preferredVoice =
          options?.voice ||
          voices.find(
            (voice) =>
              /en-US/i.test(voice.lang) &&
              /google|microsoft|natural/i.test(voice.name)
          ) ||
          voices.find((voice) => /en-US/i.test(voice.lang)) ||
          voices[0];

        if (preferredVoice) {
          utter.voice = preferredVoice;
        }
        utter.pitch = options?.pitch ?? 1;
        utter.rate = options?.rate ?? 1.05; // Slightly brisk, natural tempo

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

        window.speechSynthesis.speak(utter);
      } catch {
        setIsSpeaking(false);
      }
    },
    [text, voices]
  );

  const pause = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.pause();
      } catch {
        // ignore
      }
    }
  }, []);

  const resume = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.resume();
      } catch {
        // ignore
      }
    }
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch {
        // ignore
      }
    }
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  return { isSpeaking, isPaused, speak, pause, resume, stop, voices };
}

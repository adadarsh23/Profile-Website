import { useState, useEffect, useCallback } from 'react';

export function useSpeechSynthesis(text: string) {
  const [isSpeaking, setIsSpeaking] = useState(false);
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

  const speak = useCallback(() => {
    if (!text || !voices.length) return;

    const utter = new SpeechSynthesisUtterance(text);
    const preferredVoice =
      voices.find(
        (voice) =>
          /en-US/i.test(voice.lang) && /google|microsoft/i.test(voice.name)
      ) || voices.find((voice) => /en-US/i.test(voice.lang));

    if (preferredVoice) {
      utter.voice = preferredVoice;
    }
    utter.pitch = 1;
    utter.rate = 1.1;

    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);

    speechSynthesis.speak(utter);
  }, [text, voices]);

  const stop = useCallback(() => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  }, []);

  return { isSpeaking, speak, stop };
}

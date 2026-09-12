// src/components/chat/useChatCompletion.ts
import { useState, useCallback, useRef } from 'react';
import { runChat as runGeminiChat } from '@/lib/gemini';
import type { AiStatus } from './TypingIndicator';
import type { ChatMessage } from './chatTypes';

export function useChatCompletion() {
  const [aiStatus, setAiStatus] = useState<AiStatus>('idle');
  const abortControllerRef = useRef<AbortController | null>(null);

  const stopGeneration = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setAiStatus('idle');
  }, []);

  const runChat = useCallback(
    async (history: ChatMessage[]): Promise<string> => {
      // Create new AbortController for this run
      const controller = new AbortController();
      abortControllerRef.current = controller;
      setAiStatus('fetching');

      try {
        const response = await runGeminiChat(history, controller.signal);
        return response;
      } catch (error) {
        if ((error as DOMException)?.name === 'AbortError') {
          console.info('Generation cancelled by user');
          throw error;
        }
        console.error('Error during chat completion:', error);
        setAiStatus('error');
        throw error;
      } finally {
        if (abortControllerRef.current === controller) {
          abortControllerRef.current = null;
        }
      }
    },
    []
  );

  return { runChat, stopGeneration, aiStatus, setAiStatus };
}

import { useState, useCallback } from 'react';
import { runChat as runGeminiChat } from '@/lib/gemini';
import type { AiStatus } from '../ai/TypingIndicator';
import type { ChatMessage } from './chatTypes';

export function useChatCompletion() {
  const [aiStatus, setAiStatus] = useState<AiStatus>('idle');

  const runChat = useCallback(
    async (
      history: ChatMessage[],
      onStream: (chunk: string) => void
    ): Promise<void> => {
      setAiStatus('fetching');
      try {
        // Assuming runGeminiChat can handle a streaming callback
        await runGeminiChat(history, (chunk) => {
          if (aiStatus !== 'generating') {
            setAiStatus('generating');
          }
          onStream(chunk);
        });
      } catch (error) {
        console.error('Error in useChatCompletion:', error);
        setAiStatus('error');
        // Re-throw to allow the caller to handle UI updates for errors
        throw error;
      }
    },
    [setAiStatus]
  );

  return { runChat, aiStatus, setAiStatus };
}

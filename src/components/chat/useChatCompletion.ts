import { useState, useCallback } from 'react';
import { runChat as runGeminiChat } from '@/lib/gemini';
import type { AiStatus } from '../ai/TypingIndicator';
import type { ChatMessage } from './chatTypes';

export function useChatCompletion() {
  const [aiStatus, setAiStatus] = useState<AiStatus>('idle');

  const runChat = useCallback(
    async (history: ChatMessage[]): Promise<string> => {
      setAiStatus('fetching');
      try {
        const response = await runGeminiChat(history);
        setAiStatus('generating'); // Or could go straight to idle
        return response;
      } catch (error) {
        console.error('Error in useChatCompletion:', error);
        setAiStatus('error');
        // Re-throw to allow the caller to handle UI updates for errors
        throw error;
      }
      // The caller is responsible for setting the status back to 'idle'
      // after processing the response.
    },
    []
  );

  return { runChat, aiStatus, setAiStatus };
}

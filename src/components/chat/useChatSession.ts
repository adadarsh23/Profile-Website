import React, { useEffect, useState, useCallback } from 'react';
import type { ChatMessage } from './chatTypes';

const STORAGE_KEY = 'aiChatHistory';

/**
 * A custom hook to manage and persist a chat session's messages.
 * It automatically saves messages to `sessionStorage` and restores them on page load.
 *
 * @param initialMessages The initial array of messages to use if no session is found in storage.
 * @returns An object containing the current messages, a setter function, and a function to clear the session.
 */
export function useChatSession(initialMessages: readonly ChatMessage[]) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    // This function now runs only once on component mount for initialization.
    if (typeof window !== 'undefined') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          // Basic validation to ensure we're loading an array.
          if (Array.isArray(parsed)) {
            return parsed;
          }
        }
      } catch (error) {
        console.error(
          'Failed to parse chat history from sessionStorage:',
          error
        );
        // If parsing fails, clear the corrupted storage.
        sessionStorage.removeItem(STORAGE_KEY);
      }
    }
    // Fallback to initial messages if nothing is in storage or if in SSR.
    return [...initialMessages];
  });

  // Effect to persist messages to sessionStorage whenever they change.
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error('Failed to save chat history to sessionStorage:', error);
    }
  }, [messages]);

  /**
   * Clears the current chat session from storage and resets the messages
   * to the initial state provided to the hook.
   */
  const clearSession = useCallback(() => {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      setMessages([...initialMessages]);
    } catch (error) {
      console.error('Failed to clear chat session from sessionStorage:', error);
    }
  }, [initialMessages]);

  return { messages, setMessages, clearSession };
}

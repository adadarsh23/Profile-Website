import React, { useEffect, useState, useCallback } from 'react';
import type { ChatMessage } from './chatTypes';

/**
 * Validates if the given data is an array of ChatMessage objects.
 * This provides a runtime check for data retrieved from localStorage.
 * @param data The data to validate.
 * @returns `true` if the data is a valid ChatMessage array, `false` otherwise.
 */
function isValidChatMessageArray(data: unknown): data is ChatMessage[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) => item && 'id' in item && 'sender' in item && 'text' in item
    )
  );
}
const STORAGE_KEY = 'aiPersistentChatHistory'; // Changed to reflect persistent storage

/**
 * A custom hook to manage and persist a chat session's messages.
 * It automatically saves messages to `localStorage` and restores them on page load,
 * persisting them across browser sessions.
 *
 * @param initialMessages The initial array of messages to use if no session is found in storage.
 * @returns An object containing the current messages, a setter function, and a function to clear the session.
 */
export function useChatSession(initialMessages: readonly ChatMessage[]) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY); // Use localStorage
        if (saved) {
          const parsed = JSON.parse(saved);
          // Validate that the parsed data is a valid ChatMessage array.
          if (isValidChatMessageArray(parsed)) {
            return parsed;
          }
        }
      } catch (error) {
        // Log error but don't block UI.
        console.error('Failed to parse chat history from localStorage.', error);
        // If parsing fails, clear the corrupted storage.
        localStorage.removeItem(STORAGE_KEY); // Clear corrupted localStorage
      }
    }
    // Fallback to initial messages if nothing is in storage or if in SSR.
    return [...initialMessages];
  });

  // Effect to persist messages to sessionStorage whenever they change.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); // Use localStorage
    } catch (error) {
      console.error('Failed to save chat history to localStorage:', error); // Log error
    }
  }, [messages]);

  /**
   * Clears the current chat session from persistent storage and resets the messages
   * to the initial state provided to the hook.
   */
  const clearSession = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY); // Clear from localStorage
      setMessages([...initialMessages]);
    } catch (error) {
      console.error('Failed to clear chat session from localStorage:', error); // Log error
    }
  }, [initialMessages]);

  return { messages, setMessages, clearSession };
}

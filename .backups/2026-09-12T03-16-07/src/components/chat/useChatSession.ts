// src/components/chat/useChatSession.ts
import { useEffect, useState, useCallback, useRef } from 'react';
import type { ChatMessage } from './chatTypes';

/**
 * Validates if the given data is an array of ChatMessage objects.
 * Filters out corrupted or blank placeholder messages.
 */
function isValidChatMessageArray(data: unknown): data is ChatMessage[] {
  return (
    Array.isArray(data) &&
    data.every(
      (item) =>
        item &&
        typeof item === 'object' &&
        'id' in item &&
        'sender' in item &&
        'text' in item &&
        typeof item.text === 'string'
    )
  );
}

const STORAGE_KEY = 'aiPersistentChatHistory';

/**
 * Custom hook to manage and persist a chat session's messages.
 * Automatically saves messages to `localStorage` and restores them on page load.
 */
export function useChatSession(initialMessages: readonly ChatMessage[]) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (isValidChatMessageArray(parsed)) {
            // Filter out any lingering empty placeholders from previous interrupted streams
            const clean = parsed.filter(
              (m) => m.text && m.text.trim().length > 0
            );
            if (clean.length > 0) {
              return clean;
            }
          }
        }
      } catch (error) {
        console.warn('Failed to parse chat history from localStorage.', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    return [...initialMessages];
  });

  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Debounced persistence to prevent blocking the UI during rapid streaming
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    saveTimeoutRef.current = setTimeout(() => {
      try {
        // Only persist messages that have non-empty text
        const messagesToSave = messages.filter(
          (m) => m.text && m.text.trim().length > 0
        );
        if (messagesToSave.length > 0) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(messagesToSave));
        }
      } catch (error) {
        console.warn('Failed to save chat history to localStorage:', error);
      }
    }, 400);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [messages]);

  /**
   * Clears the current chat session from persistent storage and resets the messages.
   */
  const clearSession = useCallback(() => {
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear chat session from localStorage:', error);
    }
    setMessages([...initialMessages]);
  }, [initialMessages]);

  return { messages, setMessages, clearSession };
}

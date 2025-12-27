import { useState, useCallback, useEffect } from 'react';
import type { ChatMessage, ChatMemory } from './chatTypes';

const MEMORY_STORAGE_KEY = 'aiChatMemory';

/**
 * Validates if the given data is a ChatMemory object.
 * @param data The data to validate.
 * @returns `true` if the data is a valid ChatMemory object, `false` otherwise.
 */
function isValidChatMemory(data: unknown): data is ChatMemory {
  return (
    typeof data === 'object' &&
    data !== null &&
    'summary' in data &&
    'keywords' in data &&
    Array.isArray((data as ChatMemory).keywords)
  );
}

// A list of common English stop words to filter out from keywords.
const STOP_WORDS = new Set([
  'i',
  'me',
  'my',
  'myself',
  'we',
  'our',
  'ours',
  'ourselves',
  'you',
  'your',
  'yours',
  'yourself',
  'yourselves',
  'he',
  'him',
  'his',
  'himself',
  'she',
  'her',
  'hers',
  'herself',
  'it',
  'its',
  'itself',
  'they',
  'them',
  'their',
  'theirs',
  'themselves',
  'what',
  'which',
  'who',
  'whom',
  'this',
  'that',
  'these',
  'those',
  'am',
  'is',
  'are',
  'was',
  'were',
  'be',
  'been',
  'being',
  'have',
  'has',
  'had',
  'having',
  'do',
  'does',
  'did',
  'doing',
  'a',
  'an',
  'the',
  'and',
  'but',
  'if',
  'or',
  'because',
  'as',
  'until',
  'while',
  'of',
  'at',
  'by',
  'for',
  'with',
  'about',
  'against',
  'between',
  'into',
  'through',
  'during',
  'before',
  'after',
  'above',
  'below',
  'to',
  'from',
  'up',
  'down',
  'in',
  'out',
  'on',
  'off',
  'over',
  'under',
  'again',
  'further',
  'then',
  'once',
  'here',
  'there',
  'when',
  'where',
  'why',
  'how',
  'all',
  'any',
  'both',
  'each',
  'few',
  'more',
  'most',
  'other',
  'some',
  'such',
  'no',
  'nor',
  'not',
  'only',
  'own',
  'same',
  'so',
  'than',
  'too',
  'very',
  's',
  't',
  'can',
  'will',
  'just',
  'don',
  'should',
  'now',
]);

const MIN_KEYWORD_LENGTH = 4;
const MAX_KEYWORDS = 8;
const SUMMARY_MAX_LENGTH = 300;
const SUMMARY_MESSAGES_COUNT = 4; // Number of recent messages to include in summary

/**
 * A custom hook to manage a client-side "memory" of the chat conversation,
 * including a summary and extracted keywords.
 */
export function useChatMemory() {
  const [memory, setMemory] = useState<ChatMemory | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(MEMORY_STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (isValidChatMemory(parsed)) {
            return parsed;
          }
        }
      } catch (error) {
        console.error('Failed to parse chat memory from localStorage.', error);
        localStorage.removeItem(MEMORY_STORAGE_KEY);
      }
    }
    return null;
  });

  // Effect to persist memory to localStorage whenever it changes.
  useEffect(() => {
    try {
      localStorage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(memory));
    } catch (error) {
      console.error('Failed to save chat memory to localStorage:', error);
    }
  }, [memory]);

  /**
   * Updates the chat memory based on the provided message history.
   * This function extracts meaningful keywords and generates a concise summary.
   */
  const updateMemory = useCallback((messages: readonly ChatMessage[]) => {
    if (messages.length === 0) {
      setMemory(null);
      return;
    }

    // Use a slice of recent messages for keyword extraction to keep it relevant.
    const recentMessages = messages.slice(-SUMMARY_MESSAGES_COUNT * 2);
    const fullText = recentMessages.map((m) => m.text).join(' ');

    // --- Enhanced Keyword Extraction ---
    const wordCounts = fullText
      .toLowerCase()
      .match(/\b\w+\b/g) // Tokenize into words
      ?.filter(
        (word) => word.length >= MIN_KEYWORD_LENGTH && !STOP_WORDS.has(word)
      )
      .reduce(
        (acc, word) => {
          acc[word] = (acc[word] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>
      );

    const keywords = wordCounts
      ? Object.entries(wordCounts)
          .sort(([, a], [, b]) => b - a) // Sort by frequency
          .slice(0, MAX_KEYWORDS)
          .map(([word]) => word)
      : [];

    // --- Smarter Summary Generation ---
    // Combine the first user message with the last few messages for better context.
    const firstUserMessage = messages.find((m) => m.sender === 'user');
    const lastMessages = messages.slice(-SUMMARY_MESSAGES_COUNT);

    let summaryText = lastMessages
      .map((m) => `${m.sender}: ${m.text}`)
      .join('\n');

    if (firstUserMessage && !lastMessages.includes(firstUserMessage)) {
      summaryText =
        `Initial topic: ${firstUserMessage.text}\n...\n` + summaryText;
    }

    const summary =
      summaryText.length > SUMMARY_MAX_LENGTH
        ? `...${summaryText.slice(-SUMMARY_MAX_LENGTH)}`
        : summaryText;

    setMemory({ summary, keywords: keywords as readonly string[] });
  }, []);

  return { memory, updateMemory };
}

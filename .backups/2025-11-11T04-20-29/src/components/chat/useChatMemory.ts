import React, { useState, useCallback } from 'react';
import type { ChatMessage, ChatMemory } from './chatTypes';

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
const SUMMARY_MAX_LENGTH = 250;

/**
 * A custom hook to manage a client-side "memory" of the chat conversation,
 * including a summary and extracted keywords.
 */
export function useChatMemory() {
  const [memory, setMemory] = useState<ChatMemory | null>(null);

  /**
   * Updates the chat memory based on the provided message history.
   * This function extracts meaningful keywords and generates a concise summary.
   */
  const updateMemory = useCallback((messages: readonly ChatMessage[]) => {
    if (messages.length === 0) {
      setMemory(null);
      return;
    }

    const fullText = messages.map((m) => m.text).join(' ');

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

    // --- Improved Summary Generation ---
    const summary =
      fullText.length > SUMMARY_MAX_LENGTH
        ? `...${fullText.slice(-SUMMARY_MAX_LENGTH)}`
        : fullText;

    setMemory({ summary, keywords: keywords as readonly string[] });
  }, []);

  return { memory, updateMemory };
}

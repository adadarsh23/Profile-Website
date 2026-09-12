'use client';

import { memo } from 'react';

export type AiStatus =
  'idle' | 'thinking' | 'fetching' | 'generating' | 'error';

/**
 * TypingIndicator - Status banner removed per user preference.
 * AI responses now use in-bubble typing effect.
 */
export const TypingIndicator = memo(function TypingIndicator(_props: {
  status?: AiStatus;
}) {
  return null;
});

export default TypingIndicator;

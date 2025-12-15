'use client';

import { useRef, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { ChatMessage } from '../chat/chatTypes';
import TypingIndicator, { AiStatus } from './TypingIndicator';

const ChatMessageBubble = lazy(() => import('./ChatMessageBubble'));

interface ChatMessageListProps {
  messages: ChatMessage[];
  aiStatus: AiStatus;
  onRegenerate: () => void;
  onEdit: (id: string, newText: string) => void;
}

export function ChatMessageList({
  messages,
  aiStatus,
  onRegenerate,
  onEdit,
}: ChatMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    // Only scroll if user is near bottom or if the last message is from the user
    const isNearBottom =
      element.scrollHeight - element.scrollTop - element.clientHeight < 100;
    const isUserMessage = messages[messages.length - 1]?.sender === 'user';

    if (isNearBottom || isUserMessage || messages.length <= 1) {
      element.scrollTo({
        top: element.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, aiStatus]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10"
    >
      <AnimatePresence initial={false}>
        {messages.map((msg) => (
          <Suspense key={msg.id} fallback={<div className="w-full h-10" />}>
            <ChatMessageBubble
              msg={msg}
              onRegenerate={onRegenerate}
              onEdit={(newText) => onEdit(msg.id, newText)}
            />
          </Suspense>
        ))}
      </AnimatePresence>

      <TypingIndicator status={aiStatus} />
    </div>
  );
}

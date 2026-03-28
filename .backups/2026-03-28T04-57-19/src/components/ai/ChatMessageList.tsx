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
      className="chat-scroll relative z-10 flex min-h-0 flex-1 flex-col space-y-3 overflow-y-auto overscroll-y-contain px-4 py-3 pb-5 text-sm"
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

      <style>{`
        .chat-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
        }

        .chat-scroll::-webkit-scrollbar {
          width: 10px;
        }

        .chat-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.18)
          );
          border-radius: 9999px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }

        .chat-scroll::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.72),
            rgba(255, 255, 255, 0.3)
          );
          background-clip: padding-box;
        }
      `}</style>
    </div>
  );
}

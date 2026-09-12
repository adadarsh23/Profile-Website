// src/components/chat/ChatMessageList.tsx
'use client';

import { useRef, useEffect, useState, memo, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { ChatMessage } from './chatTypes';
import type { AiStatus } from './TypingIndicator';
import { ChatMessageBubble } from './ChatMessageBubble';

interface ChatMessageListProps {
  messages: ChatMessage[];
  aiStatus: AiStatus;
  onRegenerate: () => void;
  onEdit: (id: string, newText: string) => void;
  onQuickAction?: (text: string) => void;
}

export const ChatMessageList = memo(function ChatMessageList({
  messages,
  aiStatus,
  onRegenerate,
  onEdit,
  onQuickAction,
}: ChatMessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolledUp = useRef(false);
  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const scrollToBottom = useCallback((smooth = false) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, []);

  // Handle scroll detection for "Scroll to bottom" button and user scroll intent
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    isUserScrolledUp.current = distanceToBottom > 80;
    setShowScrollBottom(distanceToBottom > 150);
  }, []);

  // Auto-scroll on message updates: instant during streaming, smooth on user message
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const isUserMessage = messages[messages.length - 1]?.sender === 'user';

    // If user sent a message, always scroll down smoothly
    if (isUserMessage) {
      isUserScrolledUp.current = false;
      scrollToBottom(true);
      return;
    }

    // During streaming or initial load, auto-scroll only if user hasn't scrolled up to read earlier
    if (!isUserScrolledUp.current || messages.length <= 2) {
      scrollToBottom(false);
    }
  }, [messages, aiStatus, scrollToBottom]);

  return (
    <div className="relative flex-1 min-h-0 w-full overflow-hidden">
      <div
        ref={scrollRef}
        data-lenis-prevent="true"
        onScroll={handleScroll}
        className="chat-scroll h-full w-full overflow-y-auto overscroll-y-contain px-3 sm:px-4 py-3.5 text-sm flex flex-col space-y-1"
      >
        <AnimatePresence initial={false}>
          {messages.map((msg, index) => {
            const isLatest = index === messages.length - 1;
            return (
              <ChatMessageBubble
                key={msg.id}
                msg={msg}
                isLatest={isLatest}
                aiStatus={aiStatus}
                allMessages={messages}
                onRegenerate={onRegenerate}
                onEdit={(newText) => onEdit(msg.id, newText)}
                onQuickAction={onQuickAction}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {/* Floating Scroll to Bottom Button */}
      <AnimatePresence>
        {showScrollBottom && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.15 }}
            type="button"
            onClick={() => scrollToBottom(true)}
            className="absolute bottom-3 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-white shadow-xl ring-1 ring-white/20 backdrop-blur-md hover:bg-zinc-700 active:scale-95 transition-all"
            title="Scroll to bottom"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
});

export default ChatMessageList;

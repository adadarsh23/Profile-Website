// src/components/chat/ChatInput.tsx
'use client';

import { useRef, useEffect, useLayoutEffect, useCallback, memo } from 'react';
import { ArrowUp, Square } from 'lucide-react';
import { cn } from '@/lib/utils';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const MIN_HEIGHT = 42;
const MAX_HEIGHT = 120;

interface ChatInputProps {
  value: string;
  onChange: (val: string) => void;
  onSend: (value: string) => void;
  onStop?: () => void;
  disabled: boolean;
  isBusy?: boolean;
}

export const ChatInput = memo(function ChatInput({
  value,
  onChange,
  onSend,
  onStop,
  disabled,
  isBusy = false,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const prevValueRef = useRef(value);

  // Auto-resize textarea height smoothly without scroll-jumping
  const adjustHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;

    if (!value) {
      el.style.height = `${MIN_HEIGHT}px`;
      el.style.overflowY = 'hidden';
      el.scrollTop = 0;
      prevValueRef.current = '';
      return;
    }

    const isShrinking = value.length < prevValueRef.current.length;
    prevValueRef.current = value;

    // If text is already at max height and expanding/typing, don't reset height to 'auto'
    // This prevents scroll-jumping to top while typing multi-line messages
    const currentHeight = el.offsetHeight;
    if (!isShrinking && currentHeight >= MAX_HEIGHT) {
      if (el.style.overflowY !== 'auto') {
        el.style.overflowY = 'auto';
      }
      return;
    }

    const prevScrollTop = el.scrollTop;
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 24;

    // Temporarily reset height to calculate actual content scrollHeight
    el.style.height = 'auto';
    const scrollHeight = el.scrollHeight;

    if (scrollHeight > MAX_HEIGHT) {
      el.style.height = `${MAX_HEIGHT}px`;
      el.style.overflowY = 'auto';
      // If user was typing at the bottom, keep following the cursor; otherwise restore position
      if (isNearBottom) {
        el.scrollTop = el.scrollHeight;
      } else {
        el.scrollTop = prevScrollTop;
      }
    } else {
      el.style.height = `${Math.max(MIN_HEIGHT, scrollHeight)}px`;
      el.style.overflowY = 'hidden';
      el.scrollTop = 0;
    }
  }, [value]);

  useIsomorphicLayoutEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  useEffect(() => {
    const handleResize = () => {
      adjustHeight();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [adjustHeight]);

  const handleSend = useCallback(() => {
    const trimmed = value.trim();
    if (!trimmed || disabled || isBusy) return;
    onSend(trimmed);
  }, [value, disabled, isBusy, onSend]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleSend();
    }
  };

  const isSendDisabled = disabled || !value.trim();

  return (
    <div className="relative z-10 w-full shrink-0 border-t border-white/10 bg-zinc-950/90 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]">
      <div className="relative flex items-end gap-2 rounded-2xl border border-white/15 bg-zinc-900/90 p-1.5 focus-within:border-cyan-400/60 focus-within:ring-1 focus-within:ring-cyan-400/20 shadow-inner transition-all">
        {/* Auto-expanding Textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          data-lenis-prevent="true"
          placeholder={
            isBusy
              ? 'AD Assistant is generating response...'
              : 'Ask about albums, beats, FL Studio'
          }
          className={cn(
            'chat-scroll flex-1 max-h-[120px] min-h-[42px] resize-none overflow-y-hidden bg-transparent px-3 py-2 text-[15px] sm:text-sm text-white placeholder-zinc-500 focus:outline-none leading-relaxed overscroll-y-contain'
          )}
        />

        {/* Send / Stop Action Button */}
        {isBusy ? (
          <button
            type="button"
            onClick={onStop}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-800 text-amber-400 hover:bg-zinc-700 hover:text-amber-300 transition-all duration-200 active:scale-95 shadow-sm border border-amber-500/30"
            title="Stop generating"
            aria-label="Stop generating"
          >
            <Square className="h-3.5 w-3.5 fill-current" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSend}
            disabled={isSendDisabled}
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 active:scale-95',
              !isSendDisabled
                ? 'bg-white text-zinc-950 shadow-md hover:bg-zinc-200'
                : 'bg-white/10 text-zinc-500 cursor-not-allowed'
            )}
            title="Send message"
            aria-label="Send message"
          >
            <ArrowUp className="h-4 w-4 stroke-[2.5]" />
          </button>
        )}
      </div>
    </div>
  );
});

export default ChatInput;

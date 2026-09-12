// src/components/chat/ChatInput.tsx
'use client';

import { useRef, useEffect, useCallback, memo } from 'react';
import { ArrowUp, Square } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  // Auto-resize textarea height smoothly
  const adjustHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    if (!value) {
      el.style.height = '42px';
      return;
    }
    const newHeight = Math.min(el.scrollHeight, 120);
    el.style.height = `${Math.max(42, newHeight)}px`;
  }, [value]);

  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

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
          placeholder={
            isBusy
              ? 'AD Assistant is generating response...'
              : 'Ask about albums, beats, FL Studio, booking...'
          }
          className={cn(
            'flex-1 max-h-[120px] min-h-[42px] resize-none bg-transparent px-3 py-2 text-[15px] sm:text-sm text-white placeholder-zinc-500 focus:outline-none leading-relaxed overscroll-contain'
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

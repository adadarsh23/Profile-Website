// src/components/chat/ChatMessageActions.tsx
'use client';

import { useState, useCallback, memo } from 'react';
import {
  Copy,
  ThumbsUp,
  ThumbsDown,
  Volume2,
  Square,
  RefreshCw,
  Pencil,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis';
import type { ChatMessage } from './chatTypes';

interface ChatMessageActionsProps {
  msg: ChatMessage;
  allMessages?: ChatMessage[];
  onRegenerate?: () => void;
  onEdit?: () => void;
  isVisible?: boolean;
}

export const ChatMessageActions = memo(function ChatMessageActions({
  msg,
  allMessages,
  onRegenerate,
  onEdit,
  isVisible = false,
}: ChatMessageActionsProps) {
  const isAI = msg.sender === 'ai';
  const [reaction, setReaction] = useState<'liked' | 'disliked' | null>(null);
  const { copied, copy } = useCopyToClipboard();
  const { copied: allCopied, copy: copyAll } = useCopyToClipboard();
  const { isSpeaking, speak, stop } = useSpeechSynthesis(msg.text);

  const handleCopy = useCallback(() => {
    copy(msg.text);
  }, [copy, msg.text]);

  const handleCopyAll = useCallback(() => {
    if (!allMessages || !allMessages.length) return;
    const text = allMessages
      .map((m) => `${m.sender === 'ai' ? 'AI' : 'User'}: ${m.text}`)
      .join('\n\n');
    copyAll(text);
  }, [allMessages, copyAll]);

  const handleToggleSpeech = useCallback(() => {
    if (isSpeaking) {
      stop();
    } else {
      speak();
    }
  }, [isSpeaking, speak, stop]);

  return (
    <div
      className={cn(
        'mt-2 flex items-center gap-1 transition-opacity duration-200',
        isAI ? 'justify-start text-zinc-400' : 'justify-end text-zinc-700',
        isVisible
          ? 'opacity-100'
          : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100 [@media(hover:none)]:opacity-100'
      )}
    >
      {/* User Actions: Edit */}
      {!isAI && onEdit && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="flex h-6.5 w-6.5 sm:h-6 sm:w-6 items-center justify-center rounded text-zinc-700 hover:bg-black/10 hover:text-black active:scale-95 touch-manipulation transition-all"
          title="Edit prompt"
          aria-label="Edit prompt"
        >
          <Pencil className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
        </button>
      )}

      {/* Copy Message Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleCopy();
        }}
        className={cn(
          'flex h-6.5 w-6.5 sm:h-6 sm:w-6 items-center justify-center rounded active:scale-95 touch-manipulation transition-all',
          isAI
            ? 'text-zinc-400 hover:bg-white/10 hover:text-white'
            : 'text-zinc-700 hover:bg-black/10 hover:text-black'
        )}
        title={copied ? 'Copied to clipboard!' : 'Copy text'}
        aria-label="Copy text"
      >
        {copied ? (
          <Check
            className={cn(
              'h-3.5 w-3.5 sm:h-3 sm:w-3',
              isAI ? 'text-emerald-400' : 'text-emerald-700'
            )}
          />
        ) : (
          <Copy className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
        )}
      </button>

      {/* Copy All Messages Button */}
      {allMessages && allMessages.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleCopyAll();
          }}
          className={cn(
            'flex h-6.5 w-6.5 sm:h-6 sm:w-6 items-center justify-center rounded active:scale-95 touch-manipulation transition-all',
            isAI
              ? 'text-zinc-400 hover:bg-white/10 hover:text-white'
              : 'text-zinc-700 hover:bg-black/10 hover:text-black'
          )}
          title={allCopied ? 'Full chat copied!' : 'Copy full conversation'}
          aria-label="Copy full conversation"
        >
          {allCopied ? (
            <Check
              className={cn(
                'h-3.5 w-3.5 sm:h-3 sm:w-3',
                isAI ? 'text-cyan-400' : 'text-blue-700'
              )}
            />
          ) : (
            <Copy className="h-3.5 w-3.5 sm:h-3 sm:w-3 rotate-45" />
          )}
        </button>
      )}

      {/* AI Only Actions */}
      {isAI && (
        <>
          {/* Read Aloud Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleToggleSpeech();
            }}
            className={cn(
              'flex h-6.5 w-6.5 sm:h-6 sm:w-6 items-center justify-center rounded hover:bg-white/10 hover:text-white active:scale-95 touch-manipulation transition-all',
              isSpeaking && 'text-cyan-400 animate-pulse bg-cyan-500/20'
            )}
            title={isSpeaking ? 'Stop reading' : 'Read aloud'}
            aria-label="Read message aloud"
          >
            {isSpeaking ? (
              <Square className="h-3 w-3 sm:h-2.5 sm:w-2.5 fill-current" />
            ) : (
              <Volume2 className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
            )}
          </button>

          {/* Regenerate Button */}
          {onRegenerate && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRegenerate();
              }}
              className="flex h-6.5 w-6.5 sm:h-6 sm:w-6 items-center justify-center rounded hover:bg-white/10 hover:text-white active:scale-95 touch-manipulation transition-all"
              title="Regenerate answer"
              aria-label="Regenerate answer"
            >
              <RefreshCw className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
            </button>
          )}

          {/* Feedback Buttons */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setReaction((prev) => (prev === 'liked' ? null : 'liked'));
            }}
            className={cn(
              'flex h-6.5 w-6.5 sm:h-6 sm:w-6 items-center justify-center rounded hover:bg-white/10 hover:text-white active:scale-95 touch-manipulation transition-all',
              reaction === 'liked' && 'text-emerald-400 bg-emerald-500/10'
            )}
            title="Helpful response"
            aria-label="Helpful response"
          >
            <ThumbsUp className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setReaction((prev) => (prev === 'disliked' ? null : 'disliked'));
            }}
            className={cn(
              'flex h-6.5 w-6.5 sm:h-6 sm:w-6 items-center justify-center rounded hover:bg-white/10 hover:text-white active:scale-95 touch-manipulation transition-all',
              reaction === 'disliked' && 'text-rose-400 bg-rose-500/10'
            )}
            title="Unhelpful response"
            aria-label="Unhelpful response"
          >
            <ThumbsDown className="h-3.5 w-3.5 sm:h-3 sm:w-3" />
          </button>
        </>
      )}
    </div>
  );
});

export default ChatMessageActions;

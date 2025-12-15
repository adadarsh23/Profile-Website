'use client';

import { useState, useCallback } from 'react';
import {
  Copy,
  ThumbsUp,
  Check,
  ThumbsDown,
  Volume2,
  RefreshCw,
  X,
  Pencil,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis';
import type { ChatMessage } from '../chat/chatTypes';

interface ChatMessageActionsProps {
  msg: ChatMessage;
  allMessages?: ChatMessage[];
  onRegenerate?: () => void;
  isVisible: boolean;
  onEdit: () => void;
}

export const ChatMessageActions: React.FC<ChatMessageActionsProps> = ({
  msg,
  allMessages,
  onRegenerate,
  isVisible,
  onEdit,
}) => {
  const isAI = msg.sender === 'ai';
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const { copied: singleCopied, copy: copySingle } = useCopyToClipboard();
  const { copied: allCopied, copy: copyAll } = useCopyToClipboard();
  const { isSpeaking, speak, stop } = useSpeechSynthesis(msg.text);

  const handleCopyAll = useCallback(() => {
    if (!allMessages || !allMessages.length) return;
    const text = allMessages
      .map((m) => `${m.sender === 'ai' ? 'AI' : 'User'}: ${m.text}`)
      .join('\n\n');
    copyAll(text);
  }, [allMessages, copyAll]);

  const handleSpeak = () => {
    if (isSpeaking) {
      stop();
    } else {
      speak();
    }
  };

  return (
    <div
      className={cn(
        'absolute -bottom-4 right-0 flex items-center gap-1 p-1 rounded-full bg-black/20 border border-white/10 opacity-0 transition-all duration-300',
        // Show on group-hover (desktop) or when isVisible is true (mobile tap)
        'group-hover:opacity-100 group-hover:-bottom-5',
        isVisible && 'opacity-100 -bottom-5'
      )}
    >
      {!isAI && (
        <button
          onClick={onEdit}
          title="Edit"
          className="icon-action-btn"
          aria-label="Edit message"
        >
          <Pencil className="w-4 h-4" />
        </button>
      )}

      {isAI && (
        <>
          <button
            onClick={() => {
              setLiked(!liked);
              setDisliked(false);
            }}
            title="Like"
            className={cn('icon-action-btn', liked && 'text-green-400')}
          >
            <ThumbsUp className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setDisliked(!disliked);
              setLiked(false);
            }}
            title="Dislike"
            className={cn('icon-action-btn', disliked && 'text-red-400')}
          >
            <ThumbsDown className="w-4 h-4" />
          </button>
        </>
      )}

      {allMessages && allMessages.length > 1 && (
        <button
          onClick={handleCopyAll}
          title={allCopied ? 'Copied All!' : 'Copy All Messages'}
          className={cn('icon-action-btn', allCopied && 'text-green-400')}
        >
          {allCopied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4 rotate-45" />
          )}
        </button>
      )}
      <button
        onClick={() => copySingle(msg.text)}
        title={singleCopied ? 'Copied!' : 'Copy Message'}
        className={cn('icon-action-btn', singleCopied && 'text-green-400')}
      >
        {singleCopied ? (
          <Check className="w-4 h-4" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>

      {isAI && onRegenerate && !isSpeaking && (
        <button
          onClick={onRegenerate}
          title="Regenerate"
          className="icon-action-btn"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      )}

      {isAI && (
        <button
          onClick={handleSpeak}
          title={isSpeaking ? 'Stop' : 'Speak'}
          className={cn('icon-action-btn', isSpeaking && 'text-blue-400')}
        >
          {isSpeaking ? (
            <X className="w-4 h-4 animate-pulse" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      )}
    </div>
  );
};

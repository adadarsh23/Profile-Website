'use client';

import { useState } from 'react';
import {
  Copy,
  RefreshCw,
  Pencil,
  Volume2,
  Square,
  Pause,
  Check,
} from 'lucide-react';
import { useSpeechSynthesis } from '../../hooks/useSpeechSynthesis';
import type { ChatMessage } from '../chat/chatTypes';
import { cn } from '@/lib/utils';

interface ChatMessageActionsProps {
  msg: ChatMessage;
  onRegenerate?: () => void;
  onEdit: () => void;
  isVisible: boolean;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  allMessages?: ChatMessage[];
}

export function ChatMessageActions({
  msg,
  onRegenerate,
  onEdit,
  isVisible,
}: ChatMessageActionsProps) {
  const isAI = msg.sender === 'ai';
  const [isCopied, setIsCopied] = useState(false);
  const { isSpeaking, isPaused, speak, pause, resume, stop } =
    useSpeechSynthesis(msg.text);

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleSpeakToggle = () => {
    if (isSpeaking) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    } else {
      speak();
    }
  };

  return (
    <div
      className={cn(
        'absolute -bottom-8 flex items-center gap-1 p-1 rounded-lg bg-black/80 border border-white/10 backdrop-blur-md transition-opacity duration-200 z-20',
        isVisible || isSpeaking
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
        isAI ? 'left-0' : 'right-0'
      )}
    >
      {/* Copy */}
      <button
        onClick={handleCopy}
        className="p-1.5 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/10"
        title="Copy"
      >
        {isCopied ? (
          <Check className="w-3.5 h-3.5 text-green-400" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>

      {/* Edit (User only) */}
      {!isAI && (
        <button
          onClick={onEdit}
          className="p-1.5 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/10"
          title="Edit"
        >
          <Pencil className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Regenerate (AI only) */}
      {isAI && onRegenerate && (
        <button
          onClick={onRegenerate}
          className="p-1.5 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/10"
          title="Regenerate"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Speak (AI only) */}
      {isAI && (
        <button
          onClick={handleSpeakToggle}
          className="p-1.5 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/10"
          title="Read Aloud"
        >
          {isSpeaking && !isPaused ? (
            <Pause className="w-3.5 h-3.5" />
          ) : (
            <Volume2 className="w-3.5 h-3.5" />
          )}
        </button>
      )}
      {/* Stop (Only if speaking) */}
      {isSpeaking && (
        <button
          onClick={stop}
          className="p-1.5 text-red-400 hover:text-red-300 transition-colors rounded-md hover:bg-white/10"
          title="Stop"
        >
          <Square className="w-3.5 h-3.5 fill-current" />
        </button>
      )}
    </div>
  );
}

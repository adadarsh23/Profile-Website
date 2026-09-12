// src/components/chat/ChatMessageBubble.tsx
'use client';

import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ChatMessage } from './chatTypes';
import type { AiStatus } from './TypingIndicator';
import { ChatMessageActions } from './ChatMessageActions';
import { EditMessageForm } from './EditMessageForm';
import { MessageContent } from './MessageContent';
import { RobotFaceAvatar } from './RobotFaceAvatar';

export interface ChatMessageBubbleProps {
  msg: ChatMessage;
  isLatest?: boolean;
  aiStatus?: AiStatus;
  onRegenerate?: () => void;
  allMessages?: ChatMessage[];
  onEdit: (newText: string) => void;
  onQuickAction?: (text: string) => void;
}

export const ChatMessageBubble = memo(function ChatMessageBubble({
  msg,
  isLatest,
  aiStatus,
  onRegenerate,
  allMessages,
  onEdit,
  onQuickAction,
}: ChatMessageBubbleProps) {
  const isAI = msg.sender === 'ai';
  const [actionsVisible, setActionsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newText: string) => {
    if (newText.trim() !== msg.text) {
      onEdit(newText.trim());
    }
    setIsEditing(false);
  };

  const formatTime = (timestamp?: number) => {
    if (!timestamp) return null;
    try {
      return new Intl.DateTimeFormat([], {
        hour: 'numeric',
        minute: '2-digit',
      }).format(new Date(timestamp));
    } catch {
      return null;
    }
  };

  const timeString = formatTime(msg.timestamp);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={cn(
        'group flex w-full flex-col mb-3.5',
        isAI ? 'items-start' : 'items-end'
      )}
      onClick={() => setActionsVisible((v) => !v)}
    >
      <div
        className={cn(
          'flex items-start gap-2.5 max-w-[92%] sm:max-w-[85%]',
          isAI ? 'flex-row' : 'flex-row-reverse'
        )}
      >
        {/* Avatar */}
        <div
          className={cn(
            'flex h-7 w-7 shrink-0 items-center justify-center rounded-xl mt-0.5 select-none transition-transform duration-200 group-hover:scale-105',
            isAI
              ? 'bg-zinc-900 border border-white/20 shadow-md'
              : 'bg-gradient-to-tr from-white to-zinc-300 text-zinc-950 font-bold shadow-sm'
          )}
        >
          {isAI ? (
            <RobotFaceAvatar
              size={22}
              isThinking={
                isLatest &&
                (aiStatus === 'fetching' ||
                  aiStatus === 'thinking' ||
                  !msg.text)
              }
              isSpeaking={isLatest && aiStatus === 'generating'}
            />
          ) : (
            <User className="h-3.5 w-3.5 text-zinc-900" />
          )}
        </div>

        {/* Bubble Content */}
        <div
          className={cn(
            'relative rounded-2xl px-4 py-3 shadow-md backdrop-blur-md transition-all duration-200 min-w-[70px]',
            isAI
              ? 'rounded-tl-xs border border-white/10 bg-zinc-900/90 text-zinc-100 hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.25)]'
              : 'rounded-tr-xs bg-gradient-to-br from-white via-zinc-100 to-zinc-200 text-zinc-950 font-medium shadow-white/5'
          )}
        >
          {isEditing ? (
            <EditMessageForm
              initialText={msg.text}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <>
              <MessageContent text={msg.text} isAI={isAI} />

              {/* Follow-up suggestion pills embedded in this AI message */}
              {isAI &&
                isLatest &&
                msg.suggestedFollowUps &&
                msg.suggestedFollowUps.length > 0 &&
                onQuickAction && (
                  <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5">
                    {msg.suggestedFollowUps.map((followUp, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickAction(followUp);
                        }}
                        className="inline-flex items-center gap-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400/60 active:scale-95 transition-all"
                      >
                        <Sparkles className="h-2.5 w-2.5 text-cyan-400" />
                        <span>{followUp}</span>
                      </button>
                    ))}
                  </div>
                )}

              {/* Timestamp footer */}
              {timeString && (
                <div
                  className={cn(
                    'mt-1 text-[10px] select-none text-right',
                    isAI ? 'text-zinc-500' : 'text-zinc-500'
                  )}
                >
                  {timeString}
                </div>
              )}
            </>
          )}

          {/* Integrated Actions Toolbar */}
          {!isEditing && Boolean(msg.text?.trim()) && (
            <ChatMessageActions
              msg={msg}
              allMessages={allMessages}
              onRegenerate={onRegenerate}
              isVisible={actionsVisible}
              onEdit={() => setIsEditing(true)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
});

export default ChatMessageBubble;

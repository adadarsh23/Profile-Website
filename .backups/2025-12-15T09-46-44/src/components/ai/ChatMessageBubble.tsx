'use client';

import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ChatMessage } from '../chat/chatTypes';
import { ChatMessageActions } from './ChatMessageActions';
import { EditMessageForm } from './EditMessageForm';
import { MessageContent } from './MessageContent';

const ChatMessageBubble = memo(function ChatMessageBubble({
  msg,
  onRegenerate,
  allMessages,
  onEdit,
}: {
  msg: ChatMessage;
  onRegenerate?: () => void;
  allMessages?: ChatMessage[];
  onEdit: (newText: string) => void; // Keep this as is, but we will call it from a different place
}) {
  const isAI = msg.sender === 'ai';
  const [actionsVisible, setActionsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newText: string) => {
    if (newText.trim() !== msg.text) {
      onEdit(newText.trim());
    }
    setIsEditing(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={() => setActionsVisible((v) => !v)}
      className={cn(
        'group max-w-[80%] px-4 py-3 rounded-xl shadow-md backdrop-blur-md break-words whitespace-pre-wrap relative mb-4',
        isAI // AI messages: light gray on dark background
          ? 'bg-white/10 text-white self-start' // User messages: vibrant blue
          : 'bg-white/85 text-black font-semibold self-end',
        actionsVisible && 'z-10' // Ensure it's on top when actions are visible
      )}
    >
      {isEditing ? (
        <EditMessageForm
          initialText={msg.text}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <MessageContent text={msg.text} isAI={isAI} />
      )}

      {/* Action Buttons - Appear on Hover */}
      <ChatMessageActions
        msg={msg}
        allMessages={allMessages}
        onRegenerate={onRegenerate}
        isVisible={actionsVisible}
        onEdit={() => setIsEditing(true)}
      />
    </motion.div>
  );
});

export default ChatMessageBubble;

'use client';

import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: (value: string) => void;
  disabled?: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  disabled,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) {
        onSend(value);
      }
    }
  };

  return (
    <div className="p-3 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="relative flex items-end gap-2 bg-white/5 border border-white/10 rounded-xl p-2 focus-within:border-white/30 transition-colors">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={disabled}
          rows={1}
          className="w-full bg-transparent text-white text-sm resize-none focus:outline-none max-h-[120px] py-2 px-1 scrollbar-thin scrollbar-thumb-white/20"
          style={{ minHeight: '24px' }}
        />
        <motion.button
          onClick={() => onSend(value)}
          disabled={disabled || !value.trim()}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors mb-0.5"
        >
          <Send className="w-4 h-4" />
        </motion.button>
      </div>
    </div>
  );
}

// src/components/chat/ChatHeader.tsx
'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Share2, Download, Trash2, X, Sparkles } from 'lucide-react';
import { RobotFaceAvatar } from './RobotFaceAvatar';

interface ChatHeaderProps {
  onShare: () => void;
  onExport: () => void;
  onClear: () => void;
  onClose?: () => void;
  isBusy?: boolean;
}

export const ChatHeader = memo(function ChatHeader({
  onShare,
  onExport,
  onClear,
  onClose,
  isBusy = false,
}: ChatHeaderProps) {
  return (
    <header className="relative z-20 flex h-14 shrink-0 items-center justify-between border-b border-white/10 bg-zinc-950/80 px-3.5 sm:px-4 backdrop-blur-xl">
      {/* Left: 3D Avatar, Title & Online Status */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-black ring-1 ring-white/20 shadow-md">
          <RobotFaceAvatar size={26} isThinking={isBusy} isSpeaking={isBusy} />
          {/* Status Indicator */}
          <span
            className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-zinc-950 ${
              isBusy ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'
            }`}
          />
          <span
            className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-zinc-950 ${
              isBusy ? 'bg-amber-400' : 'bg-emerald-400'
            }`}
          />
        </div>

        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <h2 className="text-sm font-semibold tracking-wide text-white truncate">
              Âd Assistant
            </h2>
            <Sparkles className="h-3 w-3 text-cyan-400 shrink-0 opacity-80" />
          </div>
          <p className="text-[11px] text-zinc-400 truncate flex items-center gap-1">
            {isBusy ? (
              <span className="text-amber-300 font-medium">
                Generating answer...
              </span>
            ) : (
              <span>Creative & Music Guide</span>
            )}
          </p>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
        <button
          type="button"
          onClick={onShare}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Share conversation"
          aria-label="Share conversation"
        >
          <Share2 className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={onExport}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Export chat as text file"
          aria-label="Export chat as text file"
        >
          <Download className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={onClear}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
          title="Clear chat history"
          aria-label="Clear chat history"
        >
          <Trash2 className="h-4 w-4" />
        </button>

        {onClose && (
          <>
            <div className="h-4 w-[1px] bg-white/15 mx-0.5" />
            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-all hover:bg-white/20 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/40"
              title="Close chat"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </motion.button>
          </>
        )}
      </div>
    </header>
  );
});

export default ChatHeader;

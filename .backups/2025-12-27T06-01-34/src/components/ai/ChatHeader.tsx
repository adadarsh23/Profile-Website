'use client';

import { motion } from 'framer-motion';
import { Share2, FileText, Trash2, PanelRightClose } from 'lucide-react';

interface ChatHeaderProps {
  onShare: () => void;
  onExport: () => void;
  onClear: () => void;
  onClose?: () => void;
}

export function ChatHeader({
  onShare,
  onExport,
  onClear,
  onClose,
}: ChatHeaderProps) {
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const headerItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      className="flex justify-between items-center px-4 py-3 border-b border-white/10 z-10 flex-wrap gap-2"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={headerItemVariants}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 2,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        {/* Logo or Icon placeholder */}
      </motion.div>
      <motion.h2
        className="text-lg font-semibold text-white"
        variants={headerItemVariants}
      >
        AD Assistant
      </motion.h2>
      <motion.div
        className="flex items-center gap-3"
        variants={headerItemVariants}
      >
        <motion.button
          onClick={onShare}
          className="icon-btn"
          title="Share or Export Chat"
          aria-label="Share or Export Chat"
          whileHover={{ scale: 1.1, y: -1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Share2 className="w-4 h-4" />
        </motion.button>
        <motion.button
          onClick={onExport}
          className="icon-btn"
          title="Export Chat"
          aria-label="Export Chat"
          whileHover={{ scale: 1.1, y: -1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FileText className="w-4 h-4" />
        </motion.button>
        <motion.button
          onClick={onClear}
          className="icon-btn"
          title="Clear Chat"
          aria-label="Clear Chat"
          whileHover={{ scale: 1.1, y: -1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Trash2 className="w-4 h-4" />
        </motion.button>
        {onClose && (
          <motion.button
            onClick={onClose}
            className="icon-btn"
            title="Close Chat"
            aria-label="Close Chat"
            whileHover={{ scale: 1.1, y: -1 }}
            whileTap={{ scale: 0.9 }}
          >
            <PanelRightClose className="w-4 h-4" />
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
}

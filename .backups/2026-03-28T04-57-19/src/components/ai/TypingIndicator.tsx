import { motion } from 'framer-motion';
import { memo } from 'react';
import { MessageLoading } from './message-loading';

export type AiStatus =
  | 'idle'
  | 'thinking'
  | 'fetching'
  | 'generating'
  | 'error';

const statusCopy: Record<Exclude<AiStatus, 'idle' | 'error'>, string> = {
  thinking: 'Thinking through your message',
  fetching: 'Contacting the AI service',
  generating: 'Writing a response',
};

const TypingIndicator = memo(function TypingIndicator({
  status,
}: {
  status: AiStatus;
}) {
  if (status === 'idle' || status === 'error') {
    return null;
  }

  return (
    <motion.div
      className="self-start max-w-[85%] rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white shadow-lg backdrop-blur-md sm:max-w-[70%]"
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      role="status"
      aria-live="polite"
      aria-label={statusCopy[status]}
    >
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
          <MessageLoading width={8} height={8} />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/65">
            AD Assistant
          </p>
          <p className="text-sm text-white/90">{statusCopy[status]}</p>
        </div>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-white/20 via-white to-white/20"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
});

export default TypingIndicator;

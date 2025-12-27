import { motion } from 'framer-motion';
import { memo } from 'react';
import { MessageLoading } from './message-loading';

// Define the possible states for the AI. This makes the component's API clear.
export type AiStatus =
  | 'idle'
  | 'thinking'
  | 'fetching'
  | 'generating'
  | 'error';

/**
 * A memoized component that displays a loading indicator based on the AI's status.
 * It only renders when the AI is actively working ('thinking', 'fetching', 'generating').
 */
const TypingIndicator = memo(({ status }: { status: AiStatus }) => {
  // Do not render anything if the AI is idle or has an error.
  if (status === 'idle' || status === 'error') {
    return null;
  }

  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-3 rounded-xl max-w-[40%] bg-white/10 self-start"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <MessageLoading />
    </motion.div>
  );
});

export default TypingIndicator;

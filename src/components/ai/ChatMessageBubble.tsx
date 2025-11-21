'use client';

import { useState, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  Copy,
  ThumbsUp,
  Check,
  ThumbsDown,
  Volume2,
  RefreshCw,
  X,
  Pencil,
  CheckCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { useSpeechSynthesis } from '@/hooks/useSpeechSynthesis';
import type { ChatMessage } from '../chat/chatTypes';

// Memoized CodeBlock component for performance and clean code
const CodeBlock = memo(({ inline, className, children }) => {
  const { copied, copy } = useCopyToClipboard();
  const match = /language-(\w+)/.exec(className || '');
  const codeString = String(children).replace(/\n$/, '');

  const handleCopyCode = () => copy(codeString);

  if (!inline) {
    return (
      <div className="relative my-2">
        <button
          onClick={handleCopyCode}
          className="absolute top-2 right-2 p-1.5 rounded-md bg-black/30 text-white/70 hover:bg-black/50 hover:text-white transition-all"
          title="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
        <SyntaxHighlighter
          language={match ? match[1] : 'text'}
          PreTag="div"
          showLineNumbers={false}
          wrapLongLines
          style={vscDarkPlus}
          customStyle={{
            fontFamily: 'ui-monospace, monospace',
            borderRadius: '0.5rem',
            padding: '1rem',
            fontSize: '0.875rem',
            overflowX: 'auto',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <code className="px-1.5 py-1 rounded bg-white/20 text-[0.9em]">
      {children}
    </code>
  );
});

const ChatMessageActions = ({
  msg,
  allMessages,
  onRegenerate,
  isVisible,
  onEdit,
}: {
  msg: ChatMessage;
  allMessages?: ChatMessage[];
  onRegenerate?: () => void;
  isVisible: boolean;
  onEdit: () => void;
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

export default function ChatMessageBubble({
  msg,
  onRegenerate,
  allMessages,
  onEdit,
}: {
  msg: ChatMessage;
  onRegenerate?: () => void;
  allMessages?: ChatMessage[];
  onEdit: (id: string, newText: string) => void;
}) {
  const isAI = msg.sender === 'ai';
  const [actionsVisible, setActionsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(msg.text);

  const handleSave = () => {
    if (editedText.trim() !== msg.text) {
      onEdit(msg.id, editedText.trim());
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
        <div className="flex flex-col gap-2">
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="w-full p-2 text-sm bg-white/10 rounded-lg border border-black/90 text-black focus:outline-none focus:ring-1 focus:ring-white/50"
            rows={Math.max(3, editedText.split('\n').length)}
            autoFocus
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="text-xs text-gray-400 hover:text-white"
            >
              < X className="w-6 h-6" />
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1 text-xs text-green-400 hover:text-green-300"
            >
              <CheckCheck className="w-6 h-6" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            'prose prose-sm max-w-none prose-p:text-inherit prose-headings:text-inherit prose-strong:text-inherit',
            isAI ? 'prose-invert' : ''
          )}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={{
              code: CodeBlock,
            }}
          >
            {msg.text}
          </ReactMarkdown>
        </div>
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
}

'use client';

import { useState, memo } from 'react';
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
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ChatMessage } from '../chat/chatTypes';

// Memoized CodeBlock component for performance and clean code
const CodeBlock = memo(({ inline, className, children }) => {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const codeString = String(children).replace(/\n$/, '');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return !inline && match ? (
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
        language={match[1]}
        PreTag="div"
        showLineNumbers={false}
        wrapLongLines
        style={vscDarkPlus}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1rem',
          fontSize: '0.875rem',
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="px-1.5 py-1 rounded bg-white/20 text-[0.9em]">
      {children}
    </code>
  );
});

export default function ChatMessageBubble({
  msg,
  onRegenerate,
  allMessages,
}: {
  msg: ChatMessage;
  onRegenerate?: () => void;
  allMessages?: ChatMessage[];
}) {
  const isAI = msg.sender === 'ai';
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Copy single message
  const handleCopy = () => {
    navigator.clipboard.writeText(msg.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Copy all messages
  const handleCopyAll = () => {
    if (!allMessages || !allMessages.length) return;
    const text = allMessages
      .map((m) => `${m.sender === 'ai' ? 'AI' : 'User'}: ${m.text}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Speak / Stop Speaking
  const handleSpeak = () => {
    if (isSpeaking) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    if (!msg.text) return;
    const utter = new SpeechSynthesisUtterance(msg.text);

    // --- Voice Tone Enhancement ---
    // Find a high-quality voice if available
    const voices = speechSynthesis.getVoices();
    const preferredVoice =
      voices.find(
        (voice) =>
          /en-US/i.test(voice.lang) && /google|microsoft/i.test(voice.name)
      ) || voices.find((voice) => /en-US/i.test(voice.lang));

    if (preferredVoice) {
      utter.voice = preferredVoice;
    }
    utter.pitch = 1; // Range from 0 to 2, 1 is default
    utter.rate = 1.1; // Range from 0.1 to 10, 1 is default
    // --- End Enhancement ---

    utter.onstart = () => setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    utter.onerror = () => setIsSpeaking(false);
    speechSynthesis.speak(utter);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'group max-w-[80%] px-4 py-3 rounded-xl shadow-md backdrop-blur-md break-words whitespace-pre-wrap relative mb-4',
        isAI // AI messages: light gray on dark background
          ? 'bg-white/10 text-white self-start' // User messages: vibrant blue
          : 'bg-white/85 text-black font-semibold self-end'
      )}
    >
      {/* Markdown Content */}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className={cn(
          'prose prose-sm max-w-none prose-p:text-inherit prose-headings:text-inherit prose-strong:text-inherit',
          isAI ? 'prose-invert' : ''
        )}
        components={{
          code: CodeBlock,
        }}
      >
        {msg.text}
      </ReactMarkdown>

      {/* Action Buttons - Appear on Hover */}
      <div className="absolute -bottom-4 right-0 flex items-center gap-1 p-1 rounded-full bg-black/20 border border-white/10 opacity-0 group-hover:opacity-100 group-hover:-bottom-5 transition-all duration-300">
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
            title="Copy All Messages"
            className="icon-action-btn"
          >
            <Copy className="w-4 h-4 rotate-45" />
          </button>
        )}
        <button
          onClick={handleCopy}
          title={copied ? 'Copied!' : 'Copy Message'}
          className={cn('icon-action-btn', copied && 'text-green-400')}
        >
          {copied ? (
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
      </div>
    </motion.div>
  );
}

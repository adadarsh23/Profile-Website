'use client';

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from 'react';
import { motion } from 'framer-motion';
import { Trash2, FileText, PanelRightClose, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { runChat } from '@/lib/gemini';
const ChatInput = lazy(() => import('./ChatInput'));
const ChatMessageBubble = lazy(() => import('./ChatMessageBubble'));
import { useChatSession } from '../chat/useChatSession';
import { useChatMemory } from '../chat/useChatMemory';
import { formatResponse } from '../chat/formatResponse';
import type { ChatMessage } from '../chat/chatTypes';
import TypingIndicator, { AiStatus } from './TypingIndicator';
import logoUrl from '../../assets/Adarsh.png';

// Constants for better maintainability
const AI_THINKING_DELAY_MS = 500;
const AI_ERROR_MESSAGE = '⚠️ Something went wrong. Please try again.';

export default function AIChatCard({
  className,
  onClose,
}: {
  className?: string;
  onClose?: () => void;
}) {
  const initialMsg: ChatMessage[] = [
    {
      sender: 'ai',
      text: '👋 Hey there! I’m your AD assistant. How can I help?',
    },
  ];

  const { messages, setMessages, clearSession } = useChatSession(initialMsg);
  const { updateMemory } = useChatMemory();
  const [input, setInput] = useState(''); // User input for the chatbox
  const [aiStatus, setAiStatus] = useState<AiStatus>('idle'); // Tracks AI's current state
  const scrollRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when chat is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Cleanup function to restore original scroll style
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // Scroll to bottom on new messages
  useEffect(() => {
    // Effect to scroll to the bottom of the chat on new messages or status changes
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, aiStatus]);

  const handleSend = useCallback(
    async (text?: string) => {
      const trimmed = (text || input).trim();
      if (!trimmed || aiStatus !== 'idle') return; // Prevent sending if AI is busy

      const userMsg: ChatMessage = {
        sender: 'user',
        text: trimmed,
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, userMsg]);
      setInput(''); // Clear input field
      setAiStatus('thinking'); // AI starts thinking

      try {
        // Simulate a brief thinking phase before fetching
        await new Promise((resolve) =>
          setTimeout(resolve, AI_THINKING_DELAY_MS)
        );
        const aiText = await runChat([...messages, userMsg]);
        const formatted = formatResponse(aiText);
        const aiMsg: ChatMessage = {
          sender: 'ai',
          text: formatted,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        updateMemory([...messages, userMsg, aiMsg]); // Update chat memory with full context
      } catch (err) {
        console.error('Chat Error:', err);
        const errorMsg: ChatMessage = {
          sender: 'ai',
          text: AI_ERROR_MESSAGE,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
        setAiStatus('error'); // Set status to error if something goes wrong
      } finally {
        // Always reset status to idle after processing
        setAiStatus('idle');
      }
    },
    [input, aiStatus, messages, setMessages, updateMemory]
  );

  const handleExport = useCallback(() => {
    if (!messages.length) return;

    const now = new Date();
    const fileName = `AI_Chat_${now.toISOString().replace(/[:.]/g, '-')}.txt`;

    const formatTimestamp = (ts: number | undefined) => {
      if (!ts) return 'N/A';
      return new Date(ts).toLocaleString();
    };

    const formattedMessages = messages
      .map((msg) => {
        const ts = formatTimestamp(msg.timestamp);
        const sender = msg.sender === 'user' ? '🧑 User' : '🤖 AI';
        return `[${ts}] ${sender}:\n${msg.text}`;
      })
      .join('\n--------------------------------------\n\n');

    const header = [
      '===== AI Chat Export =====',
      `Date: ${now.toLocaleDateString()}`,
      `Time: ${now.toLocaleTimeString()}`,
      `Total Messages: ${messages.length}`,
      '======================================',
      '', // Extra newline
    ].join('\n');

    const blob = new Blob([header + formattedMessages], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }, [messages]);

  const handleShare = useCallback(async () => {
    if (!messages.length) return;

    const now = new Date();
    const title = `AI Chat on ${now.toLocaleDateString()}`;

    const formattedMessages = messages
      .map((msg) => {
        const sender = msg.sender === 'user' ? '🧑 User' : '🤖 AI';
        return `${sender}:\n${msg.text}`;
      })
      .join('\n\n--------------------------------------\n\n');

    const textToShare = `===== ${title} =====\n\n${formattedMessages}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: textToShare,
        });
      } catch (error) {
        // The user might have cancelled the share action, so we don't need to log an error.
        // If sharing fails for other reasons, the browser console will show it.
        // We can optionally fall back to downloading.
        console.log('Share was cancelled or failed, falling back to download.');
        handleExport();
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      handleExport();
    }
  }, [messages, handleExport]);

  return (
    <div
      className={cn(
        'relative w-full h-full rounded-2xl overflow-hidden p-[2px]',
        className
      )}
    >
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-white/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Chat Container */}
      <div className="relative flex flex-col w-full h-full rounded-xl border border-white/10 overflow-hidden bg-black/90 backdrop-blur-xl">
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b border-white/10 z-10 flex-wrap gap-2">
          <img src={logoUrl} alt="Adarsh Logo" className="w-8 h-8 rounded" />
          <h2 className="text-lg font-semibold text-white">AD Assistant</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="icon-btn"
              title="Share or Export Chat"
            >
              {/* Using a more appropriate icon for sharing */}
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleExport}
              className="icon-btn"
              title="Export Chat"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={clearSession}
              className="icon-btn"
              title="Clear Chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            {onClose && (
              <button onClick={onClose} className="icon-btn" title="Close Chat">
                <PanelRightClose className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10"
        >
          {messages.map((msg, i) => (
            <Suspense key={i} fallback={<div className="w-full h-10" />}>
              <ChatMessageBubble
                msg={msg}
                onRegenerate={() => handleSend(msg.text)}
              />
            </Suspense>
          ))}

          {/* Render the enhanced TypingIndicator based on aiStatus */}
          <TypingIndicator status={aiStatus} />
        </div>

        <Suspense
          fallback={<div className="p-3 border-t border-white/10 h-[53px]" />}
        >
          {/* Input Box - disabled when AI is busy */}
          <ChatInput
            value={input}
            onChange={setInput}
            onSend={() => handleSend()}
            disabled={aiStatus !== 'idle' || !input.trim()}
          />
        </Suspense>
      </div>
    </div>
  );
}

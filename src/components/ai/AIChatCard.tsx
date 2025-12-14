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
import { cn } from '@/lib/utils';
// import { runChat } from '@/lib/gemini';
const ChatInput = lazy(() => import('./ChatInput'));
// import ErrorBoundary from '../ErrorBoundary';
import { useChatSession } from '../chat/useChatSession';
import { useChatMemory } from '../chat/useChatMemory';
import { formatResponse } from '../chat/formatResponse';
import type { ChatMessage } from '../chat/chatTypes';
import { aiSystemPrompt } from '../chat/aiInfo';
import { useChatCompletion } from '../chat/useChatCompletion';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
// import logoUrl from '../../assets/ai.png';
// const RobotFaceWrapper = lazy(() => import('../RobotFaceWrapper'));
// Constants for better maintainability
const AI_THINKING_DELAY_MS = 1000;
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
      id: `ai-initial-${Date.now()}`,
      text: '👋 Hey there! I’m your AD assistant. How can I help?',
    },
  ];

  const { messages, setMessages, clearSession } = useChatSession(initialMsg);
  const { updateMemory } = useChatMemory();
  const [input, setInput] = useState(''); // User input for the chatbox
  const { runChat, aiStatus, setAiStatus } = useChatCompletion();
  const messagesRef = useRef(messages); // Ref to hold the latest messages

  // Prevent background scroll when chat is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Cleanup function to restore original scroll style
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // Keep the messages ref updated with the latest messages
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const handleSend = useCallback(
    async (text: string) => {
      const trimmed = (text || input).trim();
      if (!trimmed || aiStatus !== 'idle') return; // Prevent sending if AI is busy

      const userMsg: ChatMessage = {
        sender: 'user',
        text: trimmed,
        id: `user-${Date.now()}`,
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
        const historyWithSystemPrompt: ChatMessage[] = [
          { sender: 'system', text: aiSystemPrompt, id: 'system-prompt' },
          ...messagesRef.current,
          userMsg,
        ];
        const aiText = await runChat(historyWithSystemPrompt);
        const formatted = formatResponse(aiText);
        const aiMsg: ChatMessage = {
          sender: 'ai',
          text: formatted,
          id: `ai-${Date.now()}`,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        updateMemory([...messagesRef.current, userMsg, aiMsg]); // Update chat memory with full context
      } catch (err) {
        console.error('Chat Error:', err);
        const errorMsg: ChatMessage = {
          sender: 'ai',
          text: AI_ERROR_MESSAGE,
          id: `err-${Date.now()}`,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
        setAiStatus('error'); // Set status to error if something goes wrong
      } finally {
        // Always reset status to idle after processing
        setAiStatus('idle');
      }
    },
    [aiStatus, setMessages, updateMemory, runChat, setAiStatus, input]
  );

  const handleEdit = useCallback(
    async (messageId: string | undefined, newText: string) => {
      if (aiStatus !== 'idle') return;

      let messageIndex = -1;
      const updatedMessages = messages.map((m, index) => {
        if (m.id === messageId) {
          messageIndex = index;
          return { ...m, text: newText };
        }
        return m;
      });

      if (messageIndex === -1) return;

      // Remove all messages after the edited one
      const historyForAi = updatedMessages.slice(0, messageIndex + 1);
      setMessages(historyForAi);

      setAiStatus('thinking');
      try {
        await new Promise((resolve) =>
          setTimeout(resolve, AI_THINKING_DELAY_MS)
        );
        const historyWithSystemPrompt: ChatMessage[] = [
          { sender: 'system', text: aiSystemPrompt, id: 'system-prompt' },
          ...historyForAi,
        ];

        const aiText = await runChat(historyWithSystemPrompt);
        const formatted = formatResponse(aiText);
        const aiMsg: ChatMessage = {
          sender: 'ai',
          text: formatted,
          id: `ai-edit-${Date.now()}`,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, aiMsg]);
        updateMemory([...historyForAi, aiMsg]);
      } catch (err) {
        console.error('Chat Edit Error:', err);
        const errorMsg: ChatMessage = {
          sender: 'ai',
          text: AI_ERROR_MESSAGE,
          id: `err-edit-${Date.now()}`,
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]);
        setAiStatus('error');
      } finally {
        setAiStatus('idle');
      }
    },
    [
      aiStatus,
      messages,
      runChat,
      setMessages,
      updateMemory,
      setAiStatus,
      handleSend,
    ]
  );

  const handleRegenerate = useCallback(async () => {
    if (aiStatus !== 'idle') return;

    const lastUserMessageIndex = messages.findLastIndex(
      (m) => m.sender === 'user'
    );

    if (lastUserMessageIndex !== -1) {
      const historyToRegenerate = messages.slice(0, lastUserMessageIndex + 1);

      try {
        await new Promise((resolve) =>
          setTimeout(resolve, AI_THINKING_DELAY_MS)
        );
        const historyWithSystemPrompt: ChatMessage[] = [
          { sender: 'system', text: aiSystemPrompt, id: 'system-prompt' },
          ...historyToRegenerate,
        ];

        const aiText = await runChat(historyWithSystemPrompt);
        const formatted = formatResponse(aiText);
        const aiMsg: ChatMessage = {
          sender: 'ai',
          text: formatted,
          id: `ai-regen-${Date.now()}`, // Unique ID for regeneration
          timestamp: Date.now(),
        };
        // Use a functional update to ensure we're building on the sliced history
        setMessages([...historyToRegenerate, aiMsg]);
        updateMemory([...historyToRegenerate, aiMsg]);
      } catch (err) {
        console.error('Chat Regeneration Error:', err);
        const errorMsg: ChatMessage = {
          sender: 'ai',
          text: AI_ERROR_MESSAGE,
          id: `err-regen-${Date.now()}`, // Unique ID for error
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, errorMsg]); // Add error to current messages
        setAiStatus('error');
      } finally {
        setAiStatus('idle');
      }
    }
    // No user messages found, do nothing.
  }, [aiStatus, messages, setMessages, updateMemory, runChat, setAiStatus]);

  const handleClear = useCallback(() => {
    // Animate out all messages
    setMessages([]);
    // After animation, reset to the initial state using the hook's clear function
    // This brings back the welcome message.
    setTimeout(clearSession, 300);
  }, [setMessages, clearSession]);

  const formatChatHistory = useCallback(
    (forSharing: boolean = false) => {
      const formatTimestamp = (ts: number | undefined) => {
        if (!ts) return 'N/A';
        return new Date(ts).toLocaleString();
      };

      return messages
        .map((msg) => {
          const sender = msg.sender === 'user' ? '🧑 User' : '🤖 AI';
          if (forSharing) {
            return `${sender}:\n${msg.text}`;
          }
          const ts = formatTimestamp(msg.timestamp);
          return `[${ts}] ${sender}:\n${msg.text}`;
        })
        .join('\n--------------------------------------\n\n');
    },
    [messages]
  );

  const handleExport = useCallback(() => {
    if (!messages.length) return;

    const now = new Date();
    const header = [
      '===== AD Assistant Chat Export =====',
      `Date: ${now.toLocaleDateString()}`,
      `Time: ${now.toLocaleTimeString()}`,
      `Total Messages: ${messages.length}`,
      '======================================',
      '', // Extra newline
    ].join('\n');

    const fileName = `AI_Chat_${now.toISOString().replace(/[:.]/g, '-')}.txt`;
    const blob = new Blob([header + formatChatHistory(false)], {
      type: 'text/plain',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }, [messages, formatChatHistory]);

  const handleShare = useCallback(async () => {
    if (!messages.length) return;

    const title = `AI Chat on ${new Date().toLocaleDateString()}`;
    const formattedMessages = formatChatHistory(true);
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
      console.log(
        'Web Share API not supported, falling back to direct download.'
      );
      // Fallback for browsers that don't support the Web Share API
      handleExport();
    }
  }, [messages, handleExport, formatChatHistory]);

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.4 },
    },
  };

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
      <div className="relative z-10 flex flex-col w-full h-full rounded-xl border border-white/10 overflow-hidden bg-black/90 backdrop-blur-xl">
        {/* Header */}
        <ChatHeader
          onShare={handleShare}
          onExport={handleExport}
          onClear={handleClear}
          onClose={onClose}
        />

        {/* Messages */}
        <ChatMessageList
          messages={messages}
          aiStatus={aiStatus}
          onRegenerate={handleRegenerate}
          onEdit={handleEdit}
        />

        <motion.div variants={inputVariants} initial="hidden" animate="visible">
          <Suspense
            fallback={<div className="p-3 border-t border-white/10 h-[53px]" />}
          >
            {/* Input Box - disabled when AI is busy */}
            <ChatInput
              value={input}
              onChange={setInput}
              onSend={handleSend}
              disabled={aiStatus !== 'idle' || !input.trim()}
            />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}

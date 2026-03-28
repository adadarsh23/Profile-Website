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
const ChatInput = lazy(() => import('./ChatInput'));
import { useChatSession } from '../chat/useChatSession';
import { useChatMemory } from '../chat/useChatMemory';
import { formatResponse } from '../chat/formatResponse';
import type { ChatMessage } from '../chat/chatTypes';
import { aiSystemPrompt } from '../chat/aiInfo';
import { useChatCompletion } from '../chat/useChatCompletion';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
import type { AiStatus } from './TypingIndicator';

const AI_THINKING_DELAY_MS = 500;
const AI_GENERATING_DELAY_MS = 320;
const AI_MIN_ACTIVE_TIME_MS = 900;
const AI_ERROR_MESSAGE = 'Something went wrong. Please try again.';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
      text: "Hey there! I'm your AD assistant. How can I help?",
    },
  ];

  const { messages, setMessages, clearSession } = useChatSession(initialMsg);
  const { updateMemory } = useChatMemory();
  const [input, setInput] = useState('');
  const { runChat, aiStatus, setAiStatus } = useChatCompletion();
  const messagesRef = useRef(messages);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalDocOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
    };
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const buildHistory = useCallback((history: ChatMessage[]) => {
    return [
      { sender: 'system', text: aiSystemPrompt, id: 'system-prompt' },
      ...history,
    ] as ChatMessage[];
  }, []);

  const resolveAiMessage = useCallback(
    async (history: ChatMessage[]) => {
      const requestStartedAt = Date.now();
      setAiStatus('thinking');
      await delay(AI_THINKING_DELAY_MS);

      const aiText = await runChat(buildHistory(history));

      setAiStatus('generating');
      await delay(AI_GENERATING_DELAY_MS);

      const elapsed = Date.now() - requestStartedAt;
      if (elapsed < AI_MIN_ACTIVE_TIME_MS) {
        await delay(AI_MIN_ACTIVE_TIME_MS - elapsed);
      }

      return {
        sender: 'ai',
        text: formatResponse(aiText),
        id: `ai-${Date.now()}`,
        timestamp: Date.now(),
      } as ChatMessage;
    },
    [buildHistory, runChat, setAiStatus]
  );

  const appendAiError = useCallback(
    (prefix: string) => {
      const errorMsg: ChatMessage = {
        sender: 'ai',
        text: AI_ERROR_MESSAGE,
        id: `${prefix}-${Date.now()}`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    },
    [setMessages]
  );

  const handleSend = useCallback(
    async (text: string) => {
      const trimmed = (text || input).trim();
      if (!trimmed || aiStatus !== 'idle') return;

      const userMsg: ChatMessage = {
        sender: 'user',
        text: trimmed,
        id: `user-${Date.now()}`,
        timestamp: Date.now(),
      };

      const nextHistory = [...messagesRef.current, userMsg];
      setMessages(nextHistory);
      setInput('');

      try {
        const aiMsg = await resolveAiMessage(nextHistory);
        setMessages((prev) => [...prev, aiMsg]);
        updateMemory([...nextHistory, aiMsg]);
      } catch (error) {
        console.error('Chat Error:', error);
        appendAiError('err');
        setAiStatus('error');
      } finally {
        setAiStatus('idle');
      }
    },
    [
      aiStatus,
      appendAiError,
      input,
      resolveAiMessage,
      setAiStatus,
      setMessages,
      updateMemory,
    ]
  );

  const handleEdit = useCallback(
    async (messageId: string | undefined, newText: string) => {
      if (aiStatus !== 'idle') return;

      let messageIndex = -1;
      const updatedMessages = messages.map((message, index) => {
        if (message.id === messageId) {
          messageIndex = index;
          return { ...message, text: newText };
        }
        return message;
      });

      if (messageIndex === -1) return;

      const historyForAi = updatedMessages.slice(0, messageIndex + 1);
      setMessages(historyForAi);

      try {
        const aiMsg = await resolveAiMessage(historyForAi);
        setMessages((prev) => [...prev, aiMsg]);
        updateMemory([...historyForAi, aiMsg]);
      } catch (error) {
        console.error('Chat Edit Error:', error);
        appendAiError('err-edit');
        setAiStatus('error');
      } finally {
        setAiStatus('idle');
      }
    },
    [
      aiStatus,
      appendAiError,
      messages,
      resolveAiMessage,
      setAiStatus,
      setMessages,
      updateMemory,
    ]
  );

  const handleRegenerate = useCallback(async () => {
    if (aiStatus !== 'idle') return;

    const lastUserMessageIndex = messages.findLastIndex(
      (message) => message.sender === 'user'
    );

    if (lastUserMessageIndex === -1) return;

    const historyToRegenerate = messages.slice(0, lastUserMessageIndex + 1);

    try {
      const aiMsg = await resolveAiMessage(historyToRegenerate);
      setMessages([...historyToRegenerate, aiMsg]);
      updateMemory([...historyToRegenerate, aiMsg]);
    } catch (error) {
      console.error('Chat Regeneration Error:', error);
      appendAiError('err-regen');
      setAiStatus('error');
    } finally {
      setAiStatus('idle');
    }
  }, [
    aiStatus,
    appendAiError,
    messages,
    resolveAiMessage,
    setAiStatus,
    setMessages,
    updateMemory,
  ]);

  const handleClear = useCallback(() => {
    setMessages([]);
    setTimeout(clearSession, 300);
  }, [setMessages, clearSession]);

  const formatChatHistory = useCallback(
    (forSharing = false) => {
      const formatTimestamp = (timestamp: number | undefined) => {
        if (!timestamp) return 'N/A';
        return new Date(timestamp).toLocaleString();
      };

      return messages
        .map((message) => {
          const sender = message.sender === 'user' ? 'User' : 'AI';
          if (forSharing) {
            return `${sender}:\n${message.text}`;
          }
          const timestamp = formatTimestamp(message.timestamp);
          return `[${timestamp}] ${sender}:\n${message.text}`;
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
      '',
    ].join('\n');

    const fileName = `AI_Chat_${now.toISOString().replace(/[:.]/g, '-')}.txt`;
    const blob = new Blob([header + formatChatHistory(false)], {
      type: 'text/plain',
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    URL.revokeObjectURL(url);
  }, [messages, formatChatHistory]);

  const handleShare = useCallback(async () => {
    if (!messages.length) return;

    const title = `AI Chat on ${new Date().toLocaleDateString()}`;
    const textToShare = `===== ${title} =====\n\n${formatChatHistory(true)}`;

    if (navigator.share) {
      try {
        await navigator.share({ title, text: textToShare });
        return;
      } catch {
        handleExport();
        return;
      }
    }

    handleExport();
  }, [messages, handleExport, formatChatHistory]);

  const inputVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut', delay: 0.4 },
    },
  };

  const isBusy = (status: AiStatus) => status !== 'idle';

  return (
    <div
      className={cn(
        'relative flex h-full min-h-0 w-full flex-1 overflow-hidden rounded-2xl p-[2px]',
        className
      )}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-white/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl">
        <ChatHeader
          onShare={handleShare}
          onExport={handleExport}
          onClear={handleClear}
          onClose={onClose}
        />

        <ChatMessageList
          messages={messages}
          aiStatus={aiStatus}
          onRegenerate={handleRegenerate}
          onEdit={handleEdit}
        />

        <motion.div
          variants={inputVariants}
          initial="hidden"
          animate="visible"
          className="shrink-0"
        >
          <Suspense
            fallback={<div className="h-[53px] border-t border-white/10 p-3" />}
          >
            <ChatInput
              value={input}
              onChange={setInput}
              onSend={handleSend}
              disabled={isBusy(aiStatus) || !input.trim()}
            />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
}

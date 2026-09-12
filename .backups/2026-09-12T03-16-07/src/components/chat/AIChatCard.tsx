// src/components/chat/AIChatCard.tsx
'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useChatSession } from './useChatSession';
import { useChatMemory } from './useChatMemory';
import { formatResponse } from './formatResponse';
import type { ChatMessage } from './chatTypes';
import { aiSystemPrompt } from './aiInfo';
import { useChatCompletion } from './useChatCompletion';
import { ChatHeader } from './ChatHeader';
import { ChatMessageList } from './ChatMessageList';
import { ChatInput } from './ChatInput';
import { QuickPromptChips, DEFAULT_PROMPTS } from './QuickPromptChips';
import { prewarmAiServer } from '@/lib/gemini';
import { queryLocalKnowledge } from './knowledgeEngine';
import type { AiStatus } from './TypingIndicator';

const AI_ERROR_MESSAGE =
  'Unable to contact AD Assistant right now. Showing portfolio quick answer below, or try one of the suggested topics.';

const INITIAL_WELCOME: ChatMessage = {
  sender: 'ai',
  id: 'ai-initial-welcome',
  text: "Hey! I'm **AD Assistant**. Ask me about Âd Adarsh's albums, sample beats, audio engineering, production gear, or direct booking.",
  timestamp: Date.now(),
  suggestedFollowUps: [
    '🎵 Tell me about Silent Ritual',
    '🎧 Show sample beats',
    '🎹 What DAW does he use?',
    '📬 Contact info',
  ],
};

export default function AIChatCard({
  className,
  onClose,
}: {
  className?: string;
  onClose?: () => void;
}) {
  const initialMessages = useMemo<ChatMessage[]>(() => [INITIAL_WELCOME], []);
  const { messages, setMessages, clearSession } =
    useChatSession(initialMessages);
  const { updateMemory, clearMemory } = useChatMemory();
  const [input, setInput] = useState('');
  const { runChat, stopGeneration, aiStatus, setAiStatus } =
    useChatCompletion();
  const messagesRef = useRef(messages);
  const streamIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Pre-warm the AI server
  useEffect(() => {
    prewarmAiServer();
  }, []);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Clean up any pending streaming animation on unmount
  useEffect(() => {
    return () => {
      if (streamIntervalRef.current) {
        clearInterval(streamIntervalRef.current);
      }
    };
  }, []);

  const buildHistory = useCallback((history: ChatMessage[]) => {
    return [
      { sender: 'system', text: aiSystemPrompt, id: 'system-prompt' },
      ...history,
    ] as ChatMessage[];
  }, []);

  /**
   * Fluid token streaming animation
   */
  const streamTextIntoMessage = useCallback(
    (messageId: string, fullText: string): Promise<void> => {
      return new Promise((resolve) => {
        if (streamIntervalRef.current) {
          clearInterval(streamIntervalRef.current);
        }

        const words = fullText.split(' ');
        if (words.length <= 4) {
          setMessages((prev) =>
            prev.map((m) => (m.id === messageId ? { ...m, text: fullText } : m))
          );
          resolve();
          return;
        }

        let currentIndex = 0;
        const wordsPerChunk = 2;
        const tickIntervalMs = 20;

        streamIntervalRef.current = setInterval(() => {
          currentIndex += wordsPerChunk;
          if (currentIndex >= words.length) {
            if (streamIntervalRef.current) {
              clearInterval(streamIntervalRef.current);
              streamIntervalRef.current = null;
            }
            setMessages((prev) =>
              prev.map((m) =>
                m.id === messageId ? { ...m, text: fullText } : m
              )
            );
            resolve();
          } else {
            const currentSnippet = words.slice(0, currentIndex).join(' ');
            setMessages((prev) =>
              prev.map((m) =>
                m.id === messageId ? { ...m, text: currentSnippet } : m
              )
            );
          }
        }, tickIntervalMs);
      });
    },
    [setMessages]
  );

  const handleStop = useCallback(() => {
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
      streamIntervalRef.current = null;
    }
    stopGeneration();
  }, [stopGeneration]);

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

      const aiMsgId = `ai-${Date.now()}`;
      const placeholderAiMsg: ChatMessage = {
        sender: 'ai',
        text: '',
        id: aiMsgId,
        timestamp: Date.now(),
      };

      try {
        setAiStatus('fetching');
        setMessages((prev) => [...prev, placeholderAiMsg]);

        // Fetch follow-up hints from knowledge engine
        const localHint = queryLocalKnowledge(trimmed);
        const followUps = localHint.suggestedFollowUps;

        const rawAiText = await runChat(buildHistory(nextHistory));
        const formattedAiText = formatResponse(rawAiText);

        setAiStatus('generating');
        await streamTextIntoMessage(aiMsgId, formattedAiText);

        const finalAiMsg: ChatMessage = {
          sender: 'ai',
          text: formattedAiText,
          id: aiMsgId,
          timestamp: Date.now(),
          suggestedFollowUps: followUps,
        };

        setMessages((prev) =>
          prev.map((m) => (m.id === aiMsgId ? finalAiMsg : m))
        );

        updateMemory([...nextHistory, finalAiMsg]);
      } catch (error) {
        if ((error as DOMException)?.name === 'AbortError') {
          return;
        }
        console.error('Chat Error:', error);

        // Graceful fallback from knowledge engine
        const fallbackMatch = queryLocalKnowledge(trimmed);
        const fallbackText = fallbackMatch.response || AI_ERROR_MESSAGE;

        const errorAiMsg: ChatMessage = {
          sender: 'ai',
          text: fallbackText,
          id: `ai-err-${Date.now()}`,
          timestamp: Date.now(),
          suggestedFollowUps: fallbackMatch.suggestedFollowUps,
          isError: true,
        };

        setMessages((prev) => [
          ...prev.filter((m) => m.id !== aiMsgId),
          errorAiMsg,
        ]);
        setAiStatus('error');
      } finally {
        setAiStatus('idle');
      }
    },
    [
      aiStatus,
      buildHistory,
      input,
      runChat,
      setAiStatus,
      setMessages,
      streamTextIntoMessage,
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

      const aiMsgId = `ai-${Date.now()}`;
      const placeholderAiMsg: ChatMessage = {
        sender: 'ai',
        text: '',
        id: aiMsgId,
        timestamp: Date.now(),
      };

      try {
        setAiStatus('fetching');
        setMessages((prev) => [...prev, placeholderAiMsg]);

        const localHint = queryLocalKnowledge(newText);
        const followUps = localHint.suggestedFollowUps;

        const rawAiText = await runChat(buildHistory(historyForAi));
        const formattedAiText = formatResponse(rawAiText);

        setAiStatus('generating');
        await streamTextIntoMessage(aiMsgId, formattedAiText);

        const finalAiMsg: ChatMessage = {
          sender: 'ai',
          text: formattedAiText,
          id: aiMsgId,
          timestamp: Date.now(),
          suggestedFollowUps: followUps,
        };

        setMessages((prev) =>
          prev.map((m) => (m.id === aiMsgId ? finalAiMsg : m))
        );

        updateMemory([...historyForAi, finalAiMsg]);
      } catch (error) {
        if ((error as DOMException)?.name === 'AbortError') return;
        console.error('Chat Edit Error:', error);
        setMessages((prev) => [
          ...prev.filter((m) => m.id !== aiMsgId),
          {
            sender: 'ai',
            text: AI_ERROR_MESSAGE,
            id: `err-edit-${Date.now()}`,
            timestamp: Date.now(),
            isError: true,
          },
        ]);
        setAiStatus('error');
      } finally {
        setAiStatus('idle');
      }
    },
    [
      aiStatus,
      buildHistory,
      messages,
      runChat,
      setAiStatus,
      setMessages,
      streamTextIntoMessage,
      updateMemory,
    ]
  );

  const handleRegenerate = useCallback(async () => {
    if (aiStatus !== 'idle') return;

    let lastUserMessageIndex = -1;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i]?.sender === 'user') {
        lastUserMessageIndex = i;
        break;
      }
    }

    if (lastUserMessageIndex === -1) return;

    const historyToRegenerate = messages.slice(0, lastUserMessageIndex + 1);
    const lastUserText = messages[lastUserMessageIndex].text;
    const aiMsgId = `ai-${Date.now()}`;
    const placeholderAiMsg: ChatMessage = {
      sender: 'ai',
      text: '',
      id: aiMsgId,
      timestamp: Date.now(),
    };

    try {
      setAiStatus('fetching');
      setMessages([...historyToRegenerate, placeholderAiMsg]);

      const localHint = queryLocalKnowledge(lastUserText);
      const followUps = localHint.suggestedFollowUps;

      const rawAiText = await runChat(buildHistory(historyToRegenerate));
      const formattedAiText = formatResponse(rawAiText);

      setAiStatus('generating');
      await streamTextIntoMessage(aiMsgId, formattedAiText);

      const finalAiMsg: ChatMessage = {
        sender: 'ai',
        text: formattedAiText,
        id: aiMsgId,
        timestamp: Date.now(),
        suggestedFollowUps: followUps,
      };

      setMessages((prev) =>
        prev.map((m) => (m.id === aiMsgId ? finalAiMsg : m))
      );

      updateMemory([...historyToRegenerate, finalAiMsg]);
    } catch (error) {
      if ((error as DOMException)?.name === 'AbortError') return;
      console.error('Chat Regeneration Error:', error);
      setMessages((prev) => [
        ...prev.filter((m) => m.id !== aiMsgId),
        {
          sender: 'ai',
          text: AI_ERROR_MESSAGE,
          id: `err-regen-${Date.now()}`,
          timestamp: Date.now(),
          isError: true,
        },
      ]);
      setAiStatus('error');
    } finally {
      setAiStatus('idle');
    }
  }, [
    aiStatus,
    buildHistory,
    messages,
    runChat,
    setAiStatus,
    setMessages,
    streamTextIntoMessage,
    updateMemory,
  ]);

  const handleClear = useCallback(() => {
    if (streamIntervalRef.current) {
      clearInterval(streamIntervalRef.current);
      streamIntervalRef.current = null;
    }
    clearSession();
    clearMemory();
  }, [clearSession, clearMemory]);

  const formatChatHistory = useCallback(
    (forSharing = false) => {
      const formatTimestamp = (timestamp: number | undefined) => {
        if (!timestamp) return 'N/A';
        return new Date(timestamp).toLocaleString();
      };

      return messages
        .filter((m) => m.text.trim())
        .map((message) => {
          const sender = message.sender === 'user' ? 'User' : 'AD Assistant';
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
      '===== AD Assistant Chat Transcript =====',
      `Creator: Âd Adarsh (Portfolio AI)`,
      `Date: ${now.toLocaleDateString()}`,
      `Time: ${now.toLocaleTimeString()}`,
      `Total Messages: ${messages.length}`,
      '========================================',
      '',
    ].join('\n');

    const fileName = `AD_Assistant_Chat_${now.toISOString().replace(/[:.]/g, '-')}.txt`;
    const blob = new Blob([header + formatChatHistory(false)], {
      type: 'text/plain;charset=utf-8',
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

    const title = `AD Assistant Chat (${new Date().toLocaleDateString()})`;
    const textToShare = `===== ${title} =====\n\n${formatChatHistory(true)}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
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

  const isBusy = (status: AiStatus) => status !== 'idle';

  // Dynamic quick prompt chips: if latest AI message has follow-ups, show those, otherwise DEFAULT_PROMPTS
  const activePromptChips = useMemo(() => {
    const lastAiMsg = [...messages].reverse().find((m) => m.sender === 'ai');
    if (
      lastAiMsg &&
      lastAiMsg.suggestedFollowUps &&
      lastAiMsg.suggestedFollowUps.length > 0
    ) {
      return lastAiMsg.suggestedFollowUps.map((text, i) => ({
        label: text.replace(/^[^\w\s]+\s*/, ''),
        text,
        id: `chip-${i}`,
      }));
    }
    return DEFAULT_PROMPTS;
  }, [messages]);

  return (
    <div
      data-lenis-prevent="true"
      className={cn(
        'relative flex h-full min-h-0 w-full flex-1 flex-col overflow-hidden bg-zinc-950/95 sm:rounded-2xl border-0 sm:border sm:border-white/10 shadow-2xl backdrop-blur-3xl',
        className
      )}
    >
      <ChatHeader
        onShare={handleShare}
        onExport={handleExport}
        onClear={handleClear}
        onClose={onClose}
        isBusy={isBusy(aiStatus)}
      />

      <ChatMessageList
        messages={messages}
        aiStatus={aiStatus}
        onRegenerate={handleRegenerate}
        onEdit={handleEdit}
        onQuickAction={handleSend}
      />

      {/* Suggested Topics: Directly above Chat Input, compact & responsive */}
      <QuickPromptChips
        prompts={activePromptChips}
        onSelect={handleSend}
        disabled={isBusy(aiStatus)}
      />

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={handleSend}
        onStop={handleStop}
        disabled={isBusy(aiStatus) || !input.trim()}
        isBusy={isBusy(aiStatus)}
      />
    </div>
  );
}

export { AIChatCard };

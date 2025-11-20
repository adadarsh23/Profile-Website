'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { runChat, ChatMessage } from './openRouter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AIChatCard({ className }: { className?: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('aiChatHistory');
      return saved
        ? JSON.parse(saved)
        : [
            {
              sender: 'ai',
              text: '👋 Hey there! I’m your AI assistant. How can I help?',
            },
          ];
    }
    return [
      {
        sender: 'ai',
        text: '👋 Hey there! I’m your AI assistant. How can I help?',
      },
    ];
  });

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  // Persist chat in session storage
  useEffect(() => {
    sessionStorage.setItem('aiChatHistory', JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isTyping) return;

    const userMsg = { sender: 'user', text: trimmed } as const;
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const aiReply = await runChat([...messages, userMsg]);
      setMessages((prev) => [...prev, { sender: 'ai', text: aiReply }]);
    } catch (err) {
      console.error('Chat Error:', err);
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: '⚠️ Something went wrong. Please try again.' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearChat = () => {
    sessionStorage.removeItem('aiChatHistory');
    setMessages([
      { sender: 'ai', text: '🧹 Chat cleared. How can I help now?' },
    ]);
  };

  return (
    <div
      className={cn(
        'relative w-full h-full rounded-2xl overflow-hidden p-[2px]',
        className
      )}
    >
      {/* Rotating border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-white/20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main chat box */}
      <div className="relative flex flex-col w-full h-full rounded-xl border border-white/10 overflow-hidden bg-black/90 backdrop-blur-xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gray-800 via-black to-gray-900"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '200% 200%' }}
        />

        {/* Header */}
        <div className="px-4 py-3 border-b border-white/10 flex justify-between items-center relative z-10">
          <h2 className="text-lg font-semibold text-white">🤖 AI Assistant</h2>
          <button
            onClick={handleClearChat}
            className="text-xs text-gray-400 hover:text-red-400 transition-colors"
          >
            Clear
          </button>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10"
        >
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                'px-3 py-2 rounded-xl max-w-[80%] shadow-md backdrop-blur-md',
                msg.sender === 'ai'
                  ? 'bg-white/10 text-white self-start'
                  : 'bg-white/30 text-black font-semibold self-end'
              )}
            >
              {msg.sender === 'ai' ? (
                <div className="prose prose-sm prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ node, ...props }) => (
                        <p
                          className="mb-2 last:mb-0 leading-relaxed"
                          {...props}
                        />
                      ),
                      code({ inline, className, children, ...props }) {
                        return inline ? (
                          <code className="bg-black/30 px-1 rounded" {...props}>
                            {children}
                          </code>
                        ) : (
                          <pre className="bg-black/40 p-2 rounded-md my-2 overflow-x-auto">
                            <code {...props}>{children}</code>
                          </pre>
                        );
                      },
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              ) : (
                msg.text
              )}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              className="flex items-center gap-1 px-3 py-2 rounded-xl max-w-[30%] bg-white/10 self-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.7, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-300" />
            </motion.div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 p-3 border-t border-white/10 relative z-10">
          <input
            className="flex-1 px-3 py-2 text-sm bg-black/50 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/50"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={isTyping || !input.trim()}
            className={cn(
              'p-2 rounded-lg transition-colors',
              isTyping
                ? 'bg-gray-700 cursor-not-allowed'
                : 'bg-white/10 hover:bg-white/20'
            )}
          >
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

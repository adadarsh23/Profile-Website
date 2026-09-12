// src/components/chat/MessageContent.tsx
'use client';

import { memo, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CodeBlock } from './CodeBlock';

interface MessageContentProps {
  text: string;
  isAI: boolean;
}

const rehypePlugins = [rehypeRaw];
const remarkPlugins = [remarkGfm];

export const MessageContent = memo(function MessageContent({
  text,
  isAI,
}: MessageContentProps) {
  const components = useMemo(
    () => ({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      code: (props: any) => <CodeBlock {...props} />,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      a: ({ node: _node, children, href, ...props }: any) => (
        <a
          {...props}
          href={href}
          className="inline-flex items-center gap-1 font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors break-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{children}</span>
          <ExternalLink className="inline h-3 w-3 shrink-0 opacity-70" />
        </a>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      p: ({ node: _node, ...props }: any) => (
        <p
          {...props}
          className="mb-2.5 last:mb-0 leading-relaxed break-words"
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ul: ({ node: _node, ...props }: any) => (
        <ul {...props} className="my-2 ml-4 list-disc space-y-1" />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ol: ({ node: _node, ...props }: any) => (
        <ol {...props} className="my-2 ml-4 list-decimal space-y-1" />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      li: ({ node: _node, ...props }: any) => (
        <li {...props} className="leading-relaxed" />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      blockquote: ({ node: _node, ...props }: any) => (
        <blockquote
          {...props}
          className="my-2.5 border-l-2 border-cyan-400/60 pl-3 italic text-zinc-300 bg-white/[0.02] py-1 rounded-r-md"
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      table: ({ node: _node, ...props }: any) => (
        <div className="my-3 w-full max-w-full overflow-x-auto rounded-lg border border-white/10">
          <table
            {...props}
            className="min-w-full divide-y divide-white/10 text-left text-xs"
          />
        </div>
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      th: ({ node: _node, ...props }: any) => (
        <th
          {...props}
          className="bg-white/5 px-3 py-2 font-semibold text-white"
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      td: ({ node: _node, ...props }: any) => (
        <td {...props} className="px-3 py-1.5 text-zinc-300" />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h1: ({ node: _node, ...props }: any) => (
        <h1
          {...props}
          className="mb-2 mt-3 text-lg font-bold text-white first:mt-0"
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h2: ({ node: _node, ...props }: any) => (
        <h2
          {...props}
          className="mb-2 mt-2.5 text-base font-bold text-white first:mt-0"
        />
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      h3: ({ node: _node, ...props }: any) => (
        <h3
          {...props}
          className="mb-1.5 mt-2 text-sm font-semibold text-white first:mt-0"
        />
      ),
    }),
    []
  );

  if (!text || !text.trim()) {
    return (
      <div
        className="flex items-center gap-1.5 py-1 px-1"
        aria-label="AI is typing..."
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.3s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:-0.15s]" />
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-bounce" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        'w-full max-w-full text-[13.5px] sm:text-[14px] leading-relaxed',
        isAI ? 'text-zinc-100' : 'text-inherit font-normal'
      )}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ReactMarkdown
        rehypePlugins={rehypePlugins}
        remarkPlugins={remarkPlugins}
        components={components}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
});

export default MessageContent;

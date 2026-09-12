'use client';

import { useState, useEffect, memo, type ReactNode } from 'react';
import { Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node?: any;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}

export const CodeBlock = memo(function CodeBlock({
  inline,
  className,
  children,
  ...props
}: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  const codeString = String(children).replace(/\n$/, '');

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  const onCopy = () => {
    if (!codeString) return;
    navigator.clipboard.writeText(codeString);
    setIsCopied(true);
  };

  if (inline) {
    return (
      <code
        className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[12px] sm:text-[13px] text-cyan-200"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    <div className="relative my-3 w-full max-w-full overflow-hidden rounded-xl border border-white/15 bg-zinc-950/90 shadow-md">
      {/* Header Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.04] px-3 py-1.5">
        <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-white/50">
          {language || 'code'}
        </span>
        <button
          type="button"
          onClick={onCopy}
          className="flex items-center gap-1 rounded px-2 py-0.5 text-[11px] text-white/60 hover:bg-white/10 hover:text-white transition-colors"
          title="Copy code"
        >
          {isCopied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Container */}
      <div className="w-full max-w-full overflow-x-auto text-[13px] leading-relaxed">
        <SyntaxHighlighter
          {...props}
          style={oneDark}
          language={language || 'javascript'}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: '0.85rem 1rem',
            background: 'transparent',
            fontSize: '12.5px',
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          }}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
});

export default CodeBlock;

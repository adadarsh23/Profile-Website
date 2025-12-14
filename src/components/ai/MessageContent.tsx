import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import { CodeBlock } from './CodeBlock';

interface MessageContentProps {
  text: string;
  isAI: boolean;
}

export function MessageContent({ text, isAI }: MessageContentProps) {
  return (
    <div
      className={cn(
        'prose prose-sm max-w-none prose-p:text-inherit prose-headings:text-inherit prose-strong:text-inherit',
        isAI ? 'prose-invert' : ''
      )}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        components={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          code: (props: any) => <CodeBlock {...props} />,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          a: ({ node, ...props }: any) =>
            isAI ? (
              <a
                {...props}
                className="text-blue-400 hover:text-blue-300 underline"
                target="_blank"
                rel="noopener noreferrer"
              />
            ) : (
              <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
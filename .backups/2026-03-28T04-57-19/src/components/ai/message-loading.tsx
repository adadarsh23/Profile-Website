import { memo } from 'react';

interface MessageLoadingProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const MessageLoading = memo(function MessageLoading({
  width = 10,
  height = 10,
  className = '',
}: MessageLoadingProps) {
  return (
    <div
      className={`flex items-center gap-2 text-white ${className}`}
      aria-hidden="true"
    >
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="inline-block rounded-full bg-current ai-dot"
          style={{
            width,
            height,
            animationDelay: `${index * 140}ms`,
          }}
        />
      ))}
      <style>{`
        .ai-dot {
          animation: ai-dot-bounce 1s infinite ease-in-out;
          opacity: 0.45;
          transform: translateY(0) scale(0.92);
        }

        @keyframes ai-dot-bounce {
          0%,
          80%,
          100% {
            opacity: 0.35;
            transform: translateY(0) scale(0.9);
          }
          40% {
            opacity: 1;
            transform: translateY(-5px) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ai-dot {
            animation: none;
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
});

export { MessageLoading };

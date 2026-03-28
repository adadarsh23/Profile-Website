import React, { memo } from 'react';

const Loading = memo(function Loading({
  fullscreen = true,
  label = 'Loading content',
  className = '',
}) {
  return (
    <div
      className={[
        'flex items-center justify-center bg-black/70 text-white',
        fullscreen ? 'min-h-screen w-full' : 'min-h-[220px] w-full rounded-2xl',
        className,
      ].join(' ')}
    >
      <div
        role="status"
        aria-live="polite"
        aria-label={label}
        className="flex flex-col items-center space-y-6 px-6 py-8 text-center"
      >
        <div className="flex items-end space-x-2">
          <span className="eq-bar bar1"></span>
          <span className="eq-bar bar2"></span>
          <span className="eq-bar bar3"></span>
          <span className="eq-bar bar4"></span>
          <span className="eq-bar bar5"></span>
          <span className="eq-bar bar6"></span>
          <span className="eq-bar bar7"></span>
        </div>

        <div className="flex items-center space-x-2 text-base font-semibold tracking-[0.24em] text-white sm:text-xl">
          <span className="animate-pulse-neon">Loading</span>
          <span className="animate-bounce-neon delay-0">.</span>
          <span className="animate-bounce-neon delay-200">.</span>
          <span className="animate-bounce-neon delay-400">.</span>
        </div>
        <p className="max-w-xs text-sm text-white/70">{label}</p>
      </div>

      <style jsx="true">{`
        .eq-bar {
          display: inline-block;
          width: 6px;
          background: white;
          border-radius: 3px;
          animation: eqAnim 1.5s infinite cubic-bezier(0.2, 0.7, 0.8, 1.1);
          transform-origin: bottom;
        }

        .bar1 {
          height: 15px;
          animation-delay: 0s;
        }
        .bar2 {
          height: 25px;
          animation-delay: 0.15s;
        }
        .bar3 {
          height: 30px;
          animation-delay: 0.3s;
        }
        .bar4 {
          height: 35px;
          animation-delay: 0.45s;
        }
        .bar5 {
          height: 30px;
          animation-delay: 0.6s;
        }
        .bar6 {
          height: 25px;
          animation-delay: 0.75s;
        }
        .bar7 {
          height: 15px;
          animation-delay: 0.9s;
        }

        @keyframes eqAnim {
          0%,
          100% {
            transform: scaleY(0.2);
            opacity: 0.3;
            box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
          }
          25% {
            transform: scaleY(0.7);
            opacity: 0.8;
          }
          50% {
            transform: scaleY(1);
            opacity: 1;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          }
        }

        @keyframes pulse-neon {
          0%,
          100% {
            text-shadow:
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 20px #fff;
            opacity: 0.8;
          }
          50% {
            text-shadow:
              0 0 10px #fff,
              0 0 20px #fff,
              0 0 30px #fff;
            opacity: 1;
          }
        }
        .animate-pulse-neon {
          animation: pulse-neon 1.5s infinite;
        }

        @keyframes bounce-neon {
          0%,
          80%,
          100% {
            transform: scale(0);
            opacity: 0.2;
            text-shadow: 0 0 5px #fff;
          }
          40% {
            transform: scale(1);
            opacity: 1;
            text-shadow:
              0 0 10px #fff,
              0 0 20px #fff;
          }
        }
        .animate-bounce-neon {
          animation: bounce-neon 1s infinite;
        }

        .delay-0 {
          animation-delay: 0s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }

        @media (prefers-reduced-motion: reduce) {
          .eq-bar,
          .animate-pulse-neon,
          .animate-bounce-neon {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </div>
  );
});

export default Loading;

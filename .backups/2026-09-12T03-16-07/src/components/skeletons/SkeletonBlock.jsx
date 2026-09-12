import React, { memo } from 'react';

const SkeletonBlock = memo(function SkeletonBlock({
  className = '',
  rounded = 'rounded-2xl',
  children,
  shimmer = true,
  pulse = false,
  stagger = 0,
  style,
  ...props
}) {
  const staggerClass =
    stagger > 0 ? `shimmer-delay-${Math.min(stagger, 6)}` : '';
  const pulseClass = pulse ? 'animate-skeleton-pulse' : '';

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-gradient-to-br from-white/[0.07] via-white/[0.04] to-white/[0.02] border border-white/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-[2px] ${pulseClass} ${rounded} ${className}`}
      style={style}
      {...props}
    >
      {shimmer && (
        <div
          className={`pointer-events-none absolute -inset-y-0 -inset-x-full w-[300%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent animate-shimmer ${staggerClass}`}
          style={{ willChange: 'transform' }}
        />
      )}
      {children}
    </div>
  );
});

export default SkeletonBlock;

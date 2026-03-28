'use client';

import { useRef, useState, useEffect, memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
  onInteractionStart?: () => void;
  onInteractionEnd?: () => void;
  className?: string;
}

export const CustomSlider = memo(function CustomSlider({
  value,
  onChange,
  className,
  onInteractionStart,
  onInteractionEnd,
}: CustomSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleValueChange = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    onChange(Math.min(Math.max(percentage, 0), 100));
  };

  const handleInteractionStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    onInteractionStart?.();
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    handleValueChange(clientX);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const handleInteractionMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        handleValueChange(clientX);
      }
    };

    const handleInteractionEnd = () => {
      setIsDragging(false);
      onInteractionEnd?.();
    };

    if (isDragging) {
      // Add listeners for both mouse and touch events
      window.addEventListener('mousemove', handleInteractionMove);
      window.addEventListener('touchmove', handleInteractionMove);
      window.addEventListener('mouseup', handleInteractionEnd);
      window.addEventListener('touchend', handleInteractionEnd);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        onChange(Math.max(0, value - 5));
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        onChange(Math.min(100, value + 5));
      }
    };

    slider?.addEventListener('keydown', handleKeyDown);

    return () => {
      // Clean up listeners for both mouse and touch events
      window.removeEventListener('mousemove', handleInteractionMove);
      window.removeEventListener('touchmove', handleInteractionMove);
      window.removeEventListener('mouseup', handleInteractionEnd);
      window.removeEventListener('touchend', handleInteractionEnd);
      slider?.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDragging, onChange, onInteractionEnd, value, handleValueChange]);

  return (
    <motion.div
      ref={sliderRef}
      role="slider"
      aria-orientation="horizontal"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-label="Volume"
      className={cn(
        'relative w-full h-1 bg-white/20 rounded-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50',
        className
      )}
      onMouseDown={handleInteractionStart}
      onTouchStart={handleInteractionStart}
      onClick={(e) => {
        const clientX = e.clientX;
        handleValueChange(clientX);
      }}
    >
      <motion.div
        className="absolute top-0 left-0 h-full bg-white rounded-full"
        style={{ width: `${value}%` }}
      />
    </motion.div>
  );
});

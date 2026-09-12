'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

interface ArtworkTooltipProps {
  isHovered: boolean;
  isVolumeInteracting: boolean;
  volume: number;
  playbackError: string | null;
  artist: string;
  music: string;
}

export const ArtworkTooltip = memo(function ArtworkTooltip({
  isHovered,
  isVolumeInteracting,
  volume,
  playbackError,
  artist,
  music,
}: ArtworkTooltipProps) {
  const mousePosition = useMousePosition(isHovered);

  return (
    <motion.div
      className="fixed z-50 pointer-events-none hidden sm:block"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-neutral-900/90 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-neutral-700/50">
        {isVolumeInteracting ? (
          <span className="font-bold">Volume: {Math.round(volume * 100)}%</span>
        ) : playbackError ? (
          <span className="text-red-400">{playbackError}</span>
        ) : (
          <>
            <span className="font-bold">{artist}</span> &nbsp;•&nbsp; {music}
          </>
        )}
      </div>
    </motion.div>
  );
});

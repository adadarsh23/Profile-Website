'use client';

import { memo } from 'react';
import { Volume1, Volume2, VolumeX, Play } from 'lucide-react';

interface PlayPauseIconProps {
  isPlaying: boolean;
  hasPreview: boolean;
  isMuted: boolean;
  volume: number;
  onClick: () => void;
}

export const PlayPauseIcon = memo(function PlayPauseIcon({
  isPlaying,
  hasPreview,
  isMuted,
  volume,
  onClick,
}: PlayPauseIconProps) {
  if (isPlaying) {
    return (
      <button
        type="button"
        className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50"
        onClick={onClick}
        aria-label={
          isMuted || volume === 0 ? 'Unmute' : isPlaying ? 'Mute' : 'Pause'
        }
      >
        {isMuted || volume === 0 ? (
          <VolumeX className="h-5 w-5 text-white" />
        ) : volume > 0.5 ? (
          <Volume2 className="h-5 w-5 text-white" />
        ) : (
          <Volume1 className="h-5 w-5 text-white" />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50"
      onClick={onClick}
      aria-label={hasPreview ? 'Play' : 'No preview available'}
    >
      <Play className="h-5 w-5 text-white fill-white ml-1" />
    </button>
  );
});

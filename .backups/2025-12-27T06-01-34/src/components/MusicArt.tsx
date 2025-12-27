'use client';

import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { CustomSlider } from './CustomSlider';
import { PlayPauseIcon } from './PlayPauseIcon';
import { ArtworkTooltip } from './ArtworkTooltip';
import Image from '../assets/topvinyl.png';

interface MusicArtworkProps {
  artist: string;
  music: string;
  albumArt: string;
  isSong: boolean;
  isLoading?: boolean;
  previewUrl?: string;
}

const MusicArtwork = memo(function MusicArtwork({
  artist,
  music,
  albumArt,
  isSong,
  isLoading = false,
  previewUrl,
}: MusicArtworkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVolumeInteracting, setIsVolumeInteracting] = useState(false);

  // Revolutions per second
  const SONG_RPS = 0.75;
  const ALBUM_RPS = 0.55;

  const vinylControls = useAnimation();
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    isPlaying,
    play,
    pause,
    progress,
    volume,
    isMuted,
    handleVolumeChange,
    toggleMute,
    playbackError,
    setPlaybackError,
  } = useAudioPlayer(audioRef);

  // Calculate spin duration based on type: songs (0.75 rev/sec) vs albums (0.55 rev/sec)
  const spinDuration = isSong ? 1 / SONG_RPS : 1 / ALBUM_RPS;

  useEffect(() => {
    if (isPlaying) {
      vinylControls.start({
        rotate: 360,
        transition: {
          duration: spinDuration,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    } else {
      vinylControls.stop();
    }
  }, [isPlaying, vinylControls, spinDuration]);

  const handlePlayPause = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play(previewUrl);
    }
  }, [isPlaying, pause, play, previewUrl]);

  const handleIconClick = useCallback(() => {
    if (!previewUrl) return;

    // The icon's function changes: it's a mute/unmute toggle during playback,
    // and a play button otherwise.
    isPlaying ? toggleMute() : handlePlayPause();
  }, [previewUrl, isPlaying, toggleMute, handlePlayPause]);

  if (isLoading) {
    return (
      <div className="relative">
        <div className="relative group">
          {/* Loading skeleton */}
          <div className="w-48 h-48 sm:w-64 sm:h-64 bg-neutral-200 dark:bg-neutral-800 rounded-lg animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Audio element for playback */}
      <audio ref={audioRef} src={previewUrl} preload="metadata" />

      {/* Enhanced Tooltip that follows cursor - Desktop only */}
      <ArtworkTooltip
        isHovered={isHovered}
        isVolumeInteracting={isVolumeInteracting}
        volume={volume}
        playbackError={playbackError}
        artist={artist}
        music={music}
      />

      {/* Main container */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Vinyl record with enhanced animation and glow */}
        <motion.div
          className="absolute -left-16 sm:-left-24 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: 48 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 48,
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="relative w-45 h-45 sm:w-65 sm:h-65">
            <motion.div animate={vinylControls} className="w-full h-full">
              <img
                src={Image}
                alt="Vinyl Record"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Album artwork */}
        <div
          type="button"
          className="relative overflow-hidden rounded-lg shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl cursor-pointer w-48 h-48 sm:w-64 sm:h-64 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          onClick={handlePlayPause}
          aria-label={`Play/Pause ${music} by ${artist}`}
        >
          <img
            src={albumArt}
            alt={`${music} Cover`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out group-hover:scale-110 ${
              !imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Loading state overlay */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          )}

          {/* Play/Pause button with text on mobile */}
          <AnimatePresence>
            {isHovered && previewUrl && (
              <motion.div
                className="absolute bottom-1 left-0  z-10 flex h-6 items-center justify-start rounded-lg px-1 backdrop-blur-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                onClick={(e) => e.stopPropagation()} // Prevent clicks from bubbling to the play/pause button
              >
                <div className="flex items-center justify-start gap-0.3">
                  <PlayPauseIcon
                    isPlaying={isPlaying}
                    hasPreview={!!previewUrl}
                    isMuted={isMuted}
                    volume={volume}
                    onClick={handleIconClick}
                  />
                  <div className="w-24 flex-shrink">
                    <CustomSlider
                      value={volume * 100}
                      onChange={(v) => handleVolumeChange(v / 100)}
                      onInteractionStart={() => setIsVolumeInteracting(true)}
                      onInteractionEnd={() => setIsVolumeInteracting(false)}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile-only text overlay */}
          {isHovered && !previewUrl && (
            <div className="sm:hidden absolute bottom-2 left-2 right-2 z-10">
              <div className="flex h-12 items-center justify-center rounded-lg bg-black/50 px-4 backdrop-blur-md">
                <div className="text-white text-sm font-medium">No Preview</div>
              </div>
            </div>
          )}

          {/* Progress Bar */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20">
              <div
                className="h-full bg-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          {/* Enhanced hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div>
  );
});

export default MusicArtwork;

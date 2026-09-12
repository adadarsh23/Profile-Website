'use client';

import { useState, useEffect, RefObject } from 'react';

export function useAudioPlayer(audioRef: RefObject<HTMLAudioElement>) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(1);
  const [playbackError, setPlaybackError] = useState<string | null>(null);

  const play = (previewUrl?: string) => {
    if (!previewUrl) {
      setPlaybackError('No preview available');
      setTimeout(() => setPlaybackError(null), 2000);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (audio.src !== previewUrl) {
      audio.src = previewUrl;
    }

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          if (typeof window !== 'undefined') {
            window.dispatchEvent(
              new CustomEvent('app:audio-play', { detail: audio })
            );
          }
        })
        .catch((error) => {
          console.error('Audio playback failed:', error);
          setPlaybackError('Playback failed');
          setTimeout(() => setPlaybackError(null), 2000);
          setIsPlaying(false);
        });
    }
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  };

  const handleVolumeChange = (newVolume: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMutedState = !isMuted;
    audio.muted = newMutedState;
    setIsMuted(newMutedState);

    if (newMutedState) {
      setPreviousVolume(volume);
      handleVolumeChange(0);
    } else {
      const newVolume = previousVolume > 0 ? previousVolume : 1;
      handleVolumeChange(newVolume);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onAudioEnd = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    const onTimeUpdate = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleOtherAudio = (e: Event) => {
      const customEvent = e as CustomEvent<HTMLAudioElement>;
      if (customEvent.detail && customEvent.detail !== audio) {
        audio.pause();
        setIsPlaying(false);
      }
    };

    audio.addEventListener('ended', onAudioEnd);
    audio.addEventListener('timeupdate', onTimeUpdate);
    if (typeof window !== 'undefined') {
      window.addEventListener('app:audio-play', handleOtherAudio);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('app:audio-play', handleOtherAudio);
      }
      audio.removeEventListener('ended', onAudioEnd);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.pause();
    };
  }, [audioRef]);

  return {
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
  };
}

import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useRef } from 'react';
import { useAudioPlayer } from './useAudioPlayer';

function makeFakeAudio() {
  return {
    src: '',
    volume: 1,
    muted: false,
    currentTime: 0,
    duration: 100,
    play: vi.fn().mockResolvedValue(undefined),
    pause: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
}

describe('useAudioPlayer', () => {
  let fakeAudio: ReturnType<typeof makeFakeAudio>;

  beforeEach(() => {
    fakeAudio = makeFakeAudio();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  function renderWithRef() {
    return renderHook(() => {
      const audioRef = useRef(fakeAudio as unknown as HTMLAudioElement);
      return useAudioPlayer(audioRef);
    });
  }

  it('starts with isPlaying=false and progress=0', () => {
    const { result } = renderWithRef();
    expect(result.current.isPlaying).toBe(false);
    expect(result.current.progress).toBe(0);
  });

  it('sets isPlaying=true after play() resolves', async () => {
    const { result } = renderWithRef();
    await act(async () => {
      result.current.play('https://example.com/a.mp3');
    });
    expect(result.current.isPlaying).toBe(true);
    expect(fakeAudio.play).toHaveBeenCalledTimes(1);
  });

  it('sets playbackError when no preview URL is given', async () => {
    const { result } = renderWithRef();
    await act(async () => {
      result.current.play(undefined);
    });
    expect(result.current.playbackError).toBe('No preview available');
    expect(fakeAudio.play).not.toHaveBeenCalled();
  });

  it('pause() calls audio.pause and sets isPlaying=false', async () => {
    const { result } = renderWithRef();
    await act(async () => {
      result.current.play('https://example.com/a.mp3');
    });
    act(() => {
      result.current.pause();
    });
    expect(result.current.isPlaying).toBe(false);
    expect(fakeAudio.pause).toHaveBeenCalledTimes(1);
  });

  it('handleVolumeChange updates volume state and audio.volume', () => {
    const { result } = renderWithRef();
    act(() => {
      result.current.handleVolumeChange(0.5);
    });
    expect(result.current.volume).toBe(0.5);
    expect(fakeAudio.volume).toBe(0.5);
    expect(result.current.isMuted).toBe(false);
  });

  it('toggleMute mutes the audio and remembers previous volume', () => {
    const { result } = renderWithRef();
    act(() => {
      result.current.handleVolumeChange(0.8);
    });
    act(() => {
      result.current.toggleMute();
    });
    expect(result.current.isMuted).toBe(true);

    act(() => {
      result.current.toggleMute();
    });
    expect(result.current.isMuted).toBe(false);
    expect(result.current.volume).toBe(0.8);
  });
});

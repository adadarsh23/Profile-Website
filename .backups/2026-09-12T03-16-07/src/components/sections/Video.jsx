import { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';

const VideoPlayer = lazy(() => import('@/components/VideoPlay.tsx'));

function BubbleText() {
  return (
    <motion.h2
      className="z-10 mb-8 p-4 text-center text-3xl font-light text-white drop-shadow-lg sm:p-6 sm:text-4xl md:mb-12 md:text-5xl lg:text-6xl"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {'Latest Video'.split('').map((child, idx) => (
        <span className="hoverText" key={`${child}-${idx}`}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
}

export default function Video() {
  const [videoState, setVideoState] = useState({
    status: 'loading',
    videoId: null,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchLatestVideo = async () => {
      try {
        const API_KEY = import.meta.env.VITE_TUBE_API_KEY;
        const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

        if (!API_KEY || !CHANNEL_ID) {
          throw new Error('YouTube API Key or Channel ID is not configured.');
        }

        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
          { signal: controller.signal }
        );

        if (!channelResponse.ok) {
          throw new Error('Unable to load channel information right now.');
        }

        const channelData = await channelResponse.json();
        const items = channelData.items;

        if (!items?.length) {
          throw new Error('YouTube channel not found.');
        }

        const uploadsPlaylistId =
          items[0].contentDetails.relatedPlaylists.uploads;

        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`,
          { signal: controller.signal }
        );

        if (!playlistResponse.ok) {
          throw new Error('Unable to load the latest video right now.');
        }

        const playlistData = await playlistResponse.json();
        const playlistItems = playlistData.items;

        if (!playlistItems?.length) {
          if (isMounted) {
            setVideoState({ status: 'success', videoId: null, error: null });
          }
          return;
        }

        if (isMounted) {
          setVideoState({
            status: 'success',
            videoId: playlistItems[0].snippet.resourceId.videoId,
            error: null,
          });
        }
      } catch (error) {
        if (controller.signal.aborted || !isMounted) {
          return;
        }

        console.warn(
          'YouTube channel data unavailable, displaying featured visual:',
          error?.message || error
        );
        setVideoState({
          status: 'error',
          videoId: null,
          error:
            error instanceof Error
              ? error.message
              : 'Unable to load the latest video.',
        });
      }
    };

    fetchLatestVideo();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <section className="mt-3 mb-8 flex flex-col items-center justify-center bg-black px-4 text-white sm:mt-6 sm:mb-12 sm:px-6 lg:mt-8 lg:mb-20 lg:px-8">
      <div className="mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-20 lg:mb-20" />
      <BubbleText />
      <div className="flex w-full max-w-4xl items-center justify-center">
        {videoState.status === 'loading' && (
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] flex items-center justify-center shadow-2xl">
            <div className="pointer-events-none absolute -inset-y-0 -inset-x-full w-[300%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent animate-shimmer" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/25 border border-red-500/40 flex items-center justify-center shadow-lg shadow-red-600/20 backdrop-blur-sm">
                <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-white/80 ml-1" />
              </div>
              <div className="h-3 w-28 bg-white/10 rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-4 sm:bottom-6 left-6 right-6 flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-white/20" />
              <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-red-500/50 rounded-full" />
              </div>
              <div className="w-10 h-3 rounded bg-white/15" />
            </div>
          </div>
        )}

        {videoState.status === 'error' && (
          <div className="flex min-h-[260px] w-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 via-black to-black p-6 text-center sm:min-h-[320px] sm:p-10 md:aspect-video">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-600/20 text-red-500 ring-1 ring-red-500/40">
              <svg className="h-7 w-7 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white sm:text-2xl">
              Featured Music & Visuals
            </h3>
            <p className="mt-2 max-w-md text-xs text-white/70 sm:text-sm">
              Explore Âd Adarsh’s latest releases, dark atmospheric beats, and
              production sessions on his official YouTube channel.
            </p>
            <a
              href="https://youtube.com/c/adadarsh23"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-red-600/30 transition-all hover:bg-red-500 hover:scale-105 active:scale-95 sm:text-sm"
            >
              Watch on YouTube
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}

        {videoState.status === 'success' && videoState.videoId && (
          <Suspense
            fallback={
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] flex items-center justify-center shadow-2xl">
                <div className="pointer-events-none absolute -inset-y-0 -inset-x-full w-[300%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent animate-shimmer" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/25 border border-red-500/40 flex items-center justify-center shadow-lg shadow-red-600/20 backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-white/80 ml-1" />
                  </div>
                </div>
              </div>
            }
          >
            <motion.div
              className="aspect-video w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <VideoPlayer
                src={`https://www.youtube.com/embed/${videoState.videoId}`}
              />
            </motion.div>
          </Suspense>
        )}

        {videoState.status === 'success' && !videoState.videoId && (
          <div className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center sm:min-h-[280px] md:aspect-video">
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Latest Music Releases
            </h3>
            <p className="mt-2 text-sm text-white/70">
              Check out recent tracks and visualizers on YouTube.
            </p>
            <a
              href="https://youtube.com/c/adadarsh23"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-full bg-red-600 px-5 py-2 text-xs font-semibold text-white hover:bg-red-500 transition-all"
            >
              Go to YouTube
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

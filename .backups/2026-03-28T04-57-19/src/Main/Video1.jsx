import { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';

const VideoPlayer = lazy(() => import('../components/VideoPlay.tsx'));

function BubbleText({ styles }) {
  if (!styles) return null;

  return (
    <motion.h2
      className="z-10 mb-8 p-4 text-center text-3xl font-light text-white drop-shadow-lg sm:p-6 sm:text-4xl md:mb-12 md:text-5xl lg:text-6xl"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {'Latest Video'.split('').map((child, idx) => (
        <span className={styles.hoverText} key={`${child}-${idx}`}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
}

export default function Video1() {
  const [videoState, setVideoState] = useState({
    status: 'loading',
    videoId: null,
    error: null,
  });
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    import('../Modules/bubble.module.css')
      .then((module) => {
        if (isMounted) {
          setStyles(module.default);
        }
      })
      .catch(() => {
        if (isMounted) {
          setStyles(null);
        }
      });

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

        console.error('Failed to fetch YouTube data:', error);
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
      <BubbleText styles={styles} />
      <div className="flex aspect-video w-full max-w-4xl items-center justify-center">
        {videoState.status === 'loading' && (
          <Loading
            fullscreen={false}
            label="Loading latest video"
            className="aspect-video"
          />
        )}

        {videoState.status === 'error' && (
          <div
            className="rounded-3xl border border-red-500/20 bg-red-500/10 px-6 py-8 text-center text-red-100"
            role="alert"
          >
            <p className="text-lg font-semibold">Could not load video.</p>
            <p className="mt-2 text-sm text-red-100/80">
              {videoState.error || 'Please try again later.'}
            </p>
          </div>
        )}

        {videoState.status === 'success' && videoState.videoId && (
          <Suspense
            fallback={
              <Loading
                fullscreen={false}
                label="Preparing player"
                className="aspect-video"
              />
            }
          >
            <motion.div
              className="h-full w-full"
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
          <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center text-xl text-white">
            No video found yet.
          </div>
        )}
      </div>
    </section>
  );
}

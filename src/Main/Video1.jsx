
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from '../Modules/bubble.module.css';
import VideoPlayer from '../components/VideoPlay.tsx';
import Loading from '@/components/Loading';

export default function Video1() {
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const API_KEY = import.meta.env.VITE_TUBE_API_KEY;
        const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

        const channelRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        const items = channelRes.data.items;
        if (!items || items.length === 0) return;

        const uploadsPlaylistId =
          items[0].contentDetails.relatedPlaylists.uploads;

        const playlistRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`
        );

        const playlistItems = playlistRes.data.items;
        if (!playlistItems || playlistItems.length === 0) return;

        setVideoId(playlistItems[0].snippet.resourceId.videoId);
      } catch (error) {
        console.error('Failed to fetch YouTube data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVideo();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white text-xl">
        <Loading />
      </div>
    );
  }

  if (!videoId) {
    return (
      <div className="text-center text-white text-xl">No video found.</div>
    );
  }
  const BubbleText = () => (
    <motion.h2
      className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {'Latest Video'.split('').map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
  return (
    <section className="bg-black text-white  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
      <BubbleText />
      <VideoPlayer src={`https://www.youtube.com/embed/${videoId}`} />
      {/* <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4"/> */}
    </section>
  )
}
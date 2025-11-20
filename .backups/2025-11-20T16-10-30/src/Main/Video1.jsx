
import { useEffect, useState, lazy } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
const VideoPlayer = lazy(() => import('../components/VideoPlay.tsx'));
import Loading from '@/components/Loading';

const BubbleText = ({ styles }) => {
  if (!styles) return null; // Don't render until styles are loaded
  return (
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
};

export default function Video1() {
  const [videoState, setVideoState] = useState({
    status: 'loading', // 'loading', 'success', 'error'
    videoId: null,
    error: null,
  });

  const [styles, setStyles] = useState(null);

  useEffect(() => {
    import('../Modules/bubble.module.css').then(setStyles);

    const fetchLatestVideo = async () => {
      // 🔒 CLIENT-SIDE SECURITY: To secure this API key, go to your Google Cloud Console
      // and add "Website restrictions" to this key. This will ensure it can only be
      // used on your specific domain(s), preventing unauthorized use.
      // The most secure method is a server-side proxy, but this is a strong client-side alternative.
      try {
        const API_KEY = import.meta.env.VITE_TUBE_API_KEY;
        const CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

        if (!API_KEY || !CHANNEL_ID) {
          throw new Error('YouTube API Key or Channel ID is not configured.');
        }

        const channelRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        const items = channelRes.data.items;
        if (!items || items.length === 0) {
          throw new Error('YouTube channel not found.');
        }

        const uploadsPlaylistId =
          items[0].contentDetails.relatedPlaylists.uploads;

        const playlistRes = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`,
          { timeout: 8000 } // Add a timeout for the request
        );

        const playlistItems = playlistRes.data.items;
        if (!playlistItems || playlistItems.length === 0) {
          setVideoState({ status: 'success', videoId: null, error: null }); // No videos in playlist
          return;
        }

        setVideoState({
          status: 'success',
          videoId: playlistItems[0].snippet.resourceId.videoId,
          error: null,
        });
      } catch (error) {
        console.error('Failed to fetch YouTube data:', error);
        setVideoState({ status: 'error', videoId: null, error: error.message });
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <section className="bg-black text-white  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
      <BubbleText styles={styles} />
      <div className="w-full max-w-4xl aspect-video flex items-center justify-center">
        {videoState.status === 'loading' && <Loading />}
        {videoState.status === 'error' && (
          <div className="text-center text-red-500">
            <p>Could not load video.</p>
            <p className="text-sm text-gray-400">Please try again later.</p>
          </div>
        )}
        {videoState.status === 'success' && videoState.videoId && (
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <VideoPlayer
              src={`https://www.youtube.com/embed/${videoState.videoId}`}
            />
          </motion.div>
        )}
        {videoState.status === 'success' && !videoState.videoId && (
          <div className="text-center text-white text-xl">No video found.</div>
        )}
      </div>
    </section>
  );
}


// import { useEffect, useState, lazy } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// const VideoPlayer = lazy(() => import('../components/VideoPlay.tsx'));
// import Loading from '@/components/Loading';

// const BubbleText = ({ styles }) => {
//   if (!styles) return null; // Don't render until styles are loaded
//   return (
//     <motion.h2
//       className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       {'Latest Video'.split('').map((child, idx) => (
//         <span className={styles.hoverText} key={idx}>
//           {child}
//         </span>
//       ))}
//     </motion.h2>
//   );
// };

// export default function Video1() {
//   const [videoState, setVideoState] = useState({
//     status: 'loading', // 'loading', 'success', 'error'
//     videoId: null,
//     error: null,
//   });

//   const [styles, setStyles] = useState(null);

//   useEffect(() => {
//     import('../Modules/bubble.module.css').then(setStyles);

//     const fetchLatestVideo = async () => {
//       try {
//         // Fetch the video ID from our secure serverless function
//         const response = await axios.get('../Api/latest-video.js', { timeout: 8000 });
//         const { videoId } = response.data;

//         setVideoState({
//           status: 'success',
//           videoId: videoId,
//           error: null,
//         });
//       } catch (error) {
//         console.error('Failed to fetch video ID from API:', error);
//         const errorMessage =
//           error.response?.data?.error ||
//           'Could not connect to the server.';
//         setVideoState({ status: 'error', videoId: null, error: errorMessage });
//       }
//     };

//     fetchLatestVideo();
//   }, []);

//   return (
//     <section className="bg-black text-white  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
//       <BubbleText styles={styles} />
//       <div className="w-full max-w-4xl aspect-video flex items-center justify-center">
//         {videoState.status === 'loading' && <Loading />}
//         {videoState.status === 'error' && (
//           <div className="text-center text-red-500">
//             <p>Could not load video.</p>
//             <p className="text-sm text-gray-400">Please try again later.</p>
//           </div>
//         )}
//         {videoState.status === 'success' && videoState.videoId && (
//           <motion.div
//             className="w-full h-full"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: 'easeOut' }}
//           >
//             <VideoPlayer
//               src={`https://www.youtube.com/embed/${videoState.videoId}`}
//             />
//           </motion.div>
//         )}
//         {videoState.status === 'success' && !videoState.videoId && (
//           <div className="text-center text-white text-xl">No video found.</div>
//         )}
//       </div>
//     </section>
//   );
// }
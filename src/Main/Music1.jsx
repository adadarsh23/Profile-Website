import React, { useEffect, useState, lazy, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { musicData } from '../Data/musicData.jsx';
import Loading from '../components/Loading.jsx';
const MusicArtwork = lazy(() => import('../components/MusicArt.tsx'));

// const BubbleText = () => {
//   return (
//     <motion.h2
//       className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: 'easeOut' }}
//     >
//       {'Latest Music & Albums'.split('').map((child, idx) => (
//         <span className={styles.hoverText} key={idx}>
//           {child}
//         </span>
//       ))}
//     </motion.h2>
//   );
// };

const BubbleText = ({ styles }) => {
  if (!styles) return null; // Don't render until styles are loaded
  return (
    <motion.h2
      className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {'Music Albums'.split('').map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
};

function Music1() {
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    import('../Modules/bubble.module.css').then((m) => setStyles(m.default));
  }, []);
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    }),
    []
  );

  const safeMusicData = Array.isArray(musicData) ? musicData : [];

  return (
    <section className="bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">

      {styles && <BubbleText styles={styles} />}

      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 xl:gap-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {safeMusicData.map((song) => (
          <motion.div key={song.id || song.music} variants={itemVariants}>
            <Suspense fallback={<div><Loading /></div>}>
              <MusicArtwork {...song} />
            </Suspense>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Music1;

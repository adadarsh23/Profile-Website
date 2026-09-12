import React, { lazy, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { musicData } from '@/data/musicData.jsx';
const MusicArtwork = lazy(() => import('@/components/MusicArt.tsx'));

const BubbleText = () => (
  <motion.h2
    className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {'Music Albums'.split('').map((child, idx) => (
      <span className="hoverText" key={idx}>
        {child}
      </span>
    ))}
  </motion.h2>
);

function Music() {
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
      <BubbleText />

      <motion.div
        className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 xl:gap-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {safeMusicData.map((song) => (
          <motion.div key={song.id || song.music} variants={itemVariants}>
            <Suspense
              fallback={
                <div className="relative group p-2">
                  <div className="absolute -left-12 sm:-left-20 top-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 rounded-full border border-white/15 bg-neutral-900 shadow-xl flex items-center justify-center animate-orbit-spin">
                    <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-dashed border-white/10 flex items-center justify-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600/30 border border-red-500/40" />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-lg shadow-2xl overflow-hidden border border-white/10 z-10 bg-neutral-900">
                    <div className="pointer-events-none absolute -inset-y-0 -inset-x-full w-[300%] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent animate-shimmer" />
                  </div>
                </div>
              }
            >
              <MusicArtwork {...song} />
            </Suspense>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Music;

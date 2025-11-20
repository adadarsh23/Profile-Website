import React from 'react';
import styles from '../Modules/bubble.module.css';
import { motion } from 'framer-motion';
import MusicArtwork from '../components/MusicArt.tsx';
import { musicData } from '../Data/musicData.jsx';

const BubbleText = () => {
  const text = 'Latest Music & Albums';
  return (
    <motion.h2
      className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {text.split('').map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
};

function Music1() {
  return (
    <section className="bg-black text-white  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
      <BubbleText />
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 xl:gap-32">
        {musicData.map((song) => (
          <MusicArtwork key={song.id} {...song} />
        ))}
      </div>
    </section>
  );
}

export default Music1;
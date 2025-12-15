import React, { Suspense, lazy, useEffect, useState } from 'react';
// import styles from '../Modules/bubble.module.css';
import { motion } from 'framer-motion';
import { sampleBeats } from '../Data/SampleBest';
import Loading from '@/components/Loading';

const Beats = lazy(() => import('../components/Beats'));

export default function Sample() {
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    import('../Modules/bubble.module.css')
      .then((s) => setStyles(s.default))
      .catch((err) => console.error('Failed to load bubble styles', err));
  }, []);

  const BubbleText = () => {
    if (!styles) return null;
    return (
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {'Free Sample'.split('').map((char, idx) => (
          <span className={styles.hoverText} key={idx}>
            {char}
          </span>
        ))}
      </motion.h2>
    );
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <BubbleText />
      <motion.div
        className="w-full max-w-7xl mt-10 sm:mb-35 md:mt-16 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {sampleBeats.length > 0 ? (
          <Suspense fallback={<Loading />}>
            <Beats items={sampleBeats} />
          </Suspense>
        ) : (
          <p className="text-center text-gray-400 text-lg md:text-xl">
            No Beats available.
          </p>
        )}
      </motion.div>
    </section>
  );
}

import React, { Suspense, lazy } from 'react';
import styles from '../Modules/bubble.module.css';
import { motion } from 'framer-motion';
import { sampleBeats } from '../Data/SampleBest';
import Loading from '@/components/Loading';

const Beats = lazy(() => import('../components/Beats'));

const BubbleText = () => (
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

export default function Sample() {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col items-center justify-start py-24 px-4 sm:px-6 lg:px-8">
      <BubbleText />
      <div className="w-full max-w-7xl mt-10 md:mt-16">
        {sampleBeats.length > 0 ? (
          <Suspense fallback={<Loading />}>
            <Beats items={sampleBeats} />
          </Suspense>
        ) : (
          <p className="text-center text-gray-400 text-lg md:text-xl">
            No Beats available.
          </p>
        )}
      </div>
    </section>
  );
}

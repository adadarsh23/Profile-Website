import React, { Suspense, lazy, useEffect, useState } from 'react';
// import styles from '../Modules/bubble.module.css';
import { items } from '../Data/BlogItems';
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';

// ✅ Lazy load ChromaGrid
const ChromaGrid = lazy(() => import('../components/ChromaGrid'));
export default function Blog() {
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
        {'Blog Posts'.split('').map((char, idx) => (
          <span className={styles.hoverText} key={idx}>
            {char}
          </span>
        ))}
      </motion.h2>
    );
  };
  return (
    <div
      className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-12 py-12
                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
                overflow-hidden"
    >
      <BubbleText />
      <div className="relative w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {items.length > 0 ? (
            <Suspense
              fallback={
                <div>
                  <Loading />
                </div>
              }
            >
              <ChromaGrid
                items={items}
                radius={300}
                damping={1}
                fadeOut={0.9}
                ease="power3.out"
              />
            </Suspense>
          ) : (
            <p className="text-center text-gray-400 text-lg md:text-xl">
              No blog posts available.
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

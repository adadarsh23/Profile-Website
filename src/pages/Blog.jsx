import React, { Suspense, lazy } from 'react';
import { items } from '@/data/BlogItems';
import { motion } from 'framer-motion';
import { BlogGridSkeleton } from '@/components/skeletons/SectionSkeletons';

// ✅ Lazy load ChromaGrid
const ChromaGrid = lazy(() => import('@/components/ChromaGrid'));

const BubbleText = () => (
  <motion.h2
    className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {'Blog Posts'.split('').map((char, idx) => (
      <span className="hoverText" key={idx}>
        {char}
      </span>
    ))}
  </motion.h2>
);

export default function Blog() {
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
            <Suspense fallback={<BlogGridSkeleton />}>
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

'use client';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from '@/components/Loading';
import { galleryImages } from '../Data/GalleryData';

const ImageSpotlight = lazy(() => import('../components/ImageSpotlight'));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Gallery() {
  const [styles, setStyles] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    import('../Modules/bubble.module.css')
      .then((s) => setStyles(s.default))
      .catch((err) => console.error('Failed to load bubble styles', err));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const BubbleText = () => {
    if (!styles) return null;
    return (
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {'Special Moments'.split('').map((char, idx) => (
          <span className={styles.hoverText} key={idx}>
            {char}
          </span>
        ))}
      </motion.h2>
    );
  };
  return (
    <Suspense fallback={<Loading />}>
      <main className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-purple-900/30 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-900/30 rounded-full blur-[120px]"
          />
        </div>

        <BubbleText />
        <motion.div
          className="flex flex-wrap justify-center gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <ImageSpotlight
                src={image.image}
                alt={image.text}
                orientation={image.orientation}
                width={image.width}
                height={image.height}
                onClick={() => setSelectedIndex(index)}
              />
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setSelectedIndex(null)}
            >
              <button
                className="absolute top-4 right-4 text-white/70 hover:text-white z-50 p-2"
                onClick={() => setSelectedIndex(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <button
                className="absolute left-4 text-white/70 hover:text-white z-50 p-2 bg-black/20 rounded-full hover:bg-black/40 transition-colors hidden sm:block"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                src={galleryImages[selectedIndex].image}
                alt={galleryImages[selectedIndex].text}
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                onClick={(e) => e.stopPropagation()}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50) handleNext();
                  else if (swipe > 50) handlePrev();
                }}
              />

              <button
                className="absolute right-4 text-white/70 hover:text-white z-50 p-2 bg-black/20 rounded-full hover:bg-black/40 transition-colors hidden sm:block"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Suspense>
  );
}

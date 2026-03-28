import React, { Suspense, lazy, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';

const Vortex = lazy(() => import('../components/Vortex'));

const words = [
  'Welcome To Ad Adarsh Profile',
  'Crafting Dark Atmospheres',
  'Producing Cinematic Beats',
  'Where Sound Meets Emotion',
  'Building Stories Through Music',
  'Creating Sonic Worlds',
  'Rhythms That Hit Deep',
  'Mixing Raw Energy With Art',
  'Sound Designed With Intent',
  'Echoes Born From Silence',
  'Beats Forged In Shadows',
  'Music With A Pulse Of Its Own',
  'Bass That Cuts Through The Dark',
  'Every Sound Has A Story',
  'Emotion Engineered In Waves',
  'From Stillness To Impact',
  'Creating Depth Through Noise',
  'Dark Tones. Clean Edges.',
  'When Vibes Turn Into Vision',
];

function Header() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
      if (displayedText.length < currentWord.length) {
        const timeoutId = window.setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 90);
        return () => window.clearTimeout(timeoutId);
      }

      const timeoutId = window.setTimeout(() => setIsDeleting(true), 1500);
      return () => window.clearTimeout(timeoutId);
    }

    if (displayedText.length > 0) {
      const timeoutId = window.setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 40);
      return () => window.clearTimeout(timeoutId);
    }

    setIsDeleting(false);
    setCurrentWordIndex((prev) => (prev + 1) % words.length);
    return undefined;
  }, [displayedText, currentWordIndex, isDeleting]);

  return (
    <Suspense fallback={<Loading label="Loading hero" />}>
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6 md:px-12">
        <Vortex
          backgroundColor="black"
          rangeY={1000}
          particleCount={1000}
          baseHue={1000}
          className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="striper-regular min-h-[80px] text-center text-2xl font-bold text-white md:min-h-[120px] md:text-6xl"
            aria-live="polite"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              {displayedText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="ml-1 inline-block text-white"
              aria-hidden="true"
            >
              |
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="striper-regular mt-3 max-w-2xl text-center text-sm leading-7 text-white/80 md:text-2xl"
          >
            Explore my projects, beats, and music production work.
          </motion.p>
        </Vortex>
      </section>
    </Suspense>
  );
}

export default Header;

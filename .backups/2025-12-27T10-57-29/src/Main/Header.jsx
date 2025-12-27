import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';
const Vortex = lazy(() => import('../components/Vortex')); // <-- lazy load (original)

const words = [
  'Welcome To Âd Adarsh Profile',
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
        const t = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 90);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setIsDeleting(true), 1500);
        return () => clearTimeout(t);
      }
    }

    if (displayedText.length > 0) {
      const t = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, 40);
      return () => clearTimeout(t);
    } else {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [displayedText, currentWordIndex, isDeleting]);

  return (
    <Suspense fallback={<Loading />}>
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">
      <Vortex
        backgroundColor="black"
        rangeY={1000}
        particleCount={1000}
        baseHue={1000}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-2xl md:text-6xl font-bold text-center min-h-[80px] md:min-h-[120px] striper-regular"
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
            className="inline-block ml-1 text-white"
          >
            |
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white text-sm md:text-2xl max-w-xl mt-1 text-center striper-regular"
        >
          Explore my projects, beats, and music production works.
        </motion.p>
      </Vortex>
    </div>
    </Suspense>
  );
}

export default Header;

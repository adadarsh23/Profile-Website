import React from 'react';
import { motion } from 'framer-motion';
import { aboutCards } from '../Data/AboutItems';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import styles from '../Modules/bubble.module.css';

export default function About() {
  // =========================
  // BubbleText Component
  // =========================

  const BubbleText = () => {
    return (
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {'About Us'.split('').map((char, idx) => (
          <span className={styles.hoverText} key={idx}>
            {char}
          </span>
        ))}
      </motion.h2>
    );
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div
      className="
      relative bg-black text-white min-h-screen flex flex-col items-center justify-center
      px-4 sm:px-6 md:px-12 py-12
      mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
      overflow-hidden
    "
    >
      <BubbleText />

      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="max-w-3xl text-center text-base sm:text-lg md:text-xl mb-16 leading-relaxed"
          variants={itemVariants}
        >
          Welcome to our platform. We focus on creating immersive music and
          beats using modern production tools. We aim to deliver high-quality,
          engaging, and unique sound experiences using creative workflows and
          advanced software.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {aboutCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="h-full"
            >
              <Card className="bg-black-900 border border-gray-700 h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16" variants={itemVariants}>
          <a href="/contact">
            <Button
              variant="outline"
              className="text-white bg-black border-white hover:bg-gray-800 transition-colors duration-300"
            >
              Contact Us
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

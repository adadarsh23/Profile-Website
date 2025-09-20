import React, { Suspense, lazy } from 'react';
import styles from "../Modules/bubble.module.css";
import { motion } from "framer-motion";
import { aboutCards } from "../Data/AboutItems";

// ✅ Lazy load shadcn/ui components
const Card = lazy(() => import("@/components/ui/card").then(m => ({ default: m.Card })));
const CardContent = lazy(() => import("@/components/ui/card").then(m => ({ default: m.CardContent })));
const CardHeader = lazy(() => import("@/components/ui/card").then(m => ({ default: m.CardHeader })));
const CardTitle = lazy(() => import("@/components/ui/card").then(m => ({ default: m.CardTitle })));
const CardDescription = lazy(() => import("@/components/ui/card").then(m => ({ default: m.CardDescription })));

const Button = lazy(() => import("@/components/ui/button").then(m => ({ default: m.Button })));

export default function About() {
  const BubbleText = () => (
    <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
      {"About Us".split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </motion.h2>
  );

  return (
<div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-12 py-12
                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
                overflow-hidden">
      <BubbleText />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <p className="max-w-3xl text-center text-base sm:text-lg md:text-xl mb-16 leading-relaxed">
          Welcome to our platform. We focus on building modern web applications with the latest technologies.
          Our mission is to offer clean, responsive, and user-friendly experiences while leveraging React, Tailwind CSS, and shadcn components.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          <Suspense fallback={<div className="text-gray-400">Loading cards...</div>}>
            {aboutCards.map((card, idx) => (
              <Card
                key={idx}
                className="bg-black-900 border border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-white text-xl">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {card.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </Suspense>
        </div>

        <div className="mt-16">
          <Suspense fallback={<div>Loading button...</div>}>
            <a href="/contact">
              <Button
                variant="outline"
                className="text-white bg-black border-white hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Button>
            </a>
          </Suspense>
        </div>
      </div>
    </div>
  );
}


import React, { Suspense, lazy } from "react";
import styles from "../Modules/bubble.module.css";
import { items } from "../Data/BlogItems";
import { motion } from "framer-motion";
import { sampleBeats } from "../Data/SampleBest";

const Beats = lazy(() => import("../components/Beats"));

const BubbleText = () => (
  <motion.h2
    className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white p-6 mb-12 z-10 drop-shadow-lg"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {"Free Sample".split("").map((char, idx) => (
      <span className={styles.hoverText} key={idx}>
        {char}
      </span>
    ))}
  </motion.h2>
);

export default function Sample() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-20 px-4 md:px-0 mb-30">
      <BubbleText />
      <div className="relative w-full max-w-7xl flex justify-center items-center mt-10 md:mt-16">
        {items.length > 0 ? (
          <Suspense fallback={<div className="text-center text-gray-400">Loading Beats...</div>}>
            <div className="flex justify-center items-center w-full">
              <Beats
                items={sampleBeats}
              />
            </div>
          </Suspense>
        ) : (
          <p className="text-center text-gray-400 text-lg md:text-xl">
            No Beats available.
          </p>
        )}
      </div>
    </div>
  );
}


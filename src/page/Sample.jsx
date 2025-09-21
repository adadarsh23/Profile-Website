import React, { Suspense, lazy } from "react";
import styles from "../Modules/bubble.module.css";
import { items } from "../Data/BlogItems";
import { motion } from "framer-motion";
import { sampleBeats } from "../Data/SampleBest";
import Loading from "@/components/Loading";

const Beats = lazy(() => import("../components/Beats"));

const BubbleText = () => (
  <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
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
    <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-12 py-12
                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
                overflow-hidden">
      <BubbleText />
      <div className="relative w-full max-w-7xl flex justify-center items-center mt-30 mb-30 md:mt-16">
        {items.length > 0 ? (
          <Suspense fallback={<div><Loading /></div>}>
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


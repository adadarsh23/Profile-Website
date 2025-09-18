import React, { Suspense, lazy } from "react";
import styles from "../Modules/bubble.module.css";
import { items } from "../Data/BlogItems";
import { motion } from "framer-motion";

// ✅ Lazy load ChromaGrid
const ChromaGrid = lazy(() => import("../components/ChromaGrid"));

const BubbleText = () => (
  <motion.h2
    className="text-center text-3xl md:text-6xl font-thin text-white bg-black p-4 md:p-6 rounded-lg mb-8 md:mb-16"
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {"Blog Posts".split("").map((char, idx) => (
      <span className={styles.hoverText} key={idx}>
        {char}
      </span>
    ))}
  </motion.h2>
);

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-20 px-4 md:px-0">
      <BubbleText />
      <div className="relative w-full max-w-7xl">
        {items.length > 0 ? (
          <Suspense fallback={<div className="text-center text-gray-400">Loading posts...</div>}>
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
      </div>
    </div>
  );
}

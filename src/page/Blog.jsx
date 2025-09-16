import React from "react";
import ChromaGrid from "../components/ChromaGrid";
import styles from "../Modules/bubble.module.css";
import { items } from "../Data/BlogItems";

const BubbleText = () => (
  <h2 className="text-center text-3xl md:text-6xl font-thin text-white bg-black p-4 md:p-6 rounded-lg mb-8 md:mb-16">
    {"Blog Posts".split("").map((char, idx) => (
      <span className={styles.hoverText} key={idx}>
        {char}
      </span>
    ))}
  </h2>
);

export default function Blog() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-20 px-4 md:px-0">
      <BubbleText />
      <div className="relative w-full max-w-7xl">
        {items.length > 0 ? (
          <ChromaGrid
            items={items}
            radius={300}
            damping={1}
            fadeOut={0.9}
            ease="power3.out"
          />
        ) : (
          <p className="text-center text-gray-400 text-lg md:text-xl">
            No blog posts available.
          </p>
        )}
      </div>
    </div>
  );
}

import React from 'react';
import styles from "../Modules/bubble.module.css";

export default function About() {
  const BubbleText = () => (
    <h2 className="text-center text-3xl md:text-6xl font-thin text-white bg-black p-4 md:p-6 rounded-lg mb-8 md:mb-16">
      {"About Us".split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </h2>
  );
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-20 px-4 md:px-0">
      <BubbleText />
      <div className="relative w-full max-w-7xl">

      </div>
    </div>
  );
}

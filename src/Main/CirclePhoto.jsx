import React from "react";
import styles from "../Modules/bubble.module.css";
import CircularGallery from "../components/CircularGallery";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CirclePhoto() {
  const { ref, inView: isInView } = useInView({ once: true, amount: 0.3 });
  const BubbleText = () => (
    <motion.h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {"PhotoGraphy".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
  return (
    <section
      ref={ref}
      className="relative bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-20 md:py-32"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(120, 115, 245, 0.15), transparent 60%)",
        }}
      />
      <BubbleText />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-lg text-gray-400 max-w-2xl mx-auto text-center"
      >
        A glimpse into my creative world, from photography to digital art.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]"
      >
        <CircularGallery
          bend={2}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.05}
        />
      </motion.div>
    </section>
  );
}

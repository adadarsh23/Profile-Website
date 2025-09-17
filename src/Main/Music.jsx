import React from 'react'
import styles from "../Modules/bubble.module.css";
import {motion} from "framer-motion"

function Music() {
  const BubbleText = () => (
    <motion.h2 className="text-center text-4xl md:text-7xl font-thin text-white bg-black p-4 rounded-lg mb-10 md:mb-16"
    initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {"Latest Music".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </motion.h2>
  );
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <BubbleText />

      <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto">
        {/* Outer glow ring in grayscale */}
        <div className="absolute -inset-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-3xl opacity-60 animate-pulse blur-xl"></div>

        {/* Secondary rotating gradient ring in grayscale */}
        <div className="absolute -inset-3 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 rounded-3xl animate-spin-slow opacity-50 blur-lg"></div>

        {/* Primary container with monochrome gradient */}
        <div className="relative p-2 rounded-2xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl backdrop-blur-md transition-all duration-700 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 hover:shadow-gray-500/50 hover:shadow-2xl group">

          {/* Inner gradient border */}
          <div className="relative p-1 rounded-xl bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 group-hover:from-gray-400 group-hover:via-gray-300 group-hover:to-gray-400 transition-all duration-700">

            {/* Metallic inner ring */}
            <div className="relative p-1 rounded-xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-inner">

              {/* Final gradient wrapper */}
              <div className="relative p-1 rounded-lg bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 group-hover:from-gray-500 group-hover:via-gray-400 group-hover:to-gray-500 transition-all duration-700">
                <iframe
                  data-testid="embed-iframe"
                  src="https://open.spotify.com/embed/artist/7nd9x69ZcOpoft6TMDnXCa?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  style={{ borderRadius: "12px" }}
                  loading="lazy"
                ></iframe>

              </div>
            </div>
          </div>

          {/* Floating monochrome particles */}
          {/* Enhanced bubbles */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full opacity-80 animate-bubble animate-bubble-rotate"></div>
          <div className="absolute top-4 right-2 w-1 h-1 bg-gray-400 rounded-full opacity-60 animate-bubble delay-200 animate-bubble-rotate"></div>
          <div className="absolute bottom-2 left-4 w-1.5 h-1.5 bg-gray-500 rounded-full opacity-70 animate-bubble delay-400 animate-bubble-rotate"></div>
          <div className="absolute bottom-6 right-6 w-1 h-1 bg-gray-300 rounded-full opacity-80 animate-bubble delay-600 animate-bubble-rotate"></div>


        </div>
      </div>

      <style jsx>{`
  /* Slow rotation for outer elements */
  .animate-spin-slow {
    animation: spin-slow 10s linear infinite;
  }

  @keyframes bubble {
    0% { transform: translate(0, 0) scale(1); opacity: 0.8; }
    25% { transform: translate(2px, -4px) scale(1.2); opacity: 0.6; }
    50% { transform: translate(-2px, 2px) scale(1.5); opacity: 0.5; }
    75% { transform: translate(1px, -2px) scale(1.2); opacity: 0.6; }
    100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
  }

  .animate-bubble {
    animation: bubble 4s ease-in-out infinite;
    will-change: transform, opacity;
  }

  /* Staggered delays for a natural look */
  .delay-200 { animation-delay: 0.2s; }
  .delay-400 { animation-delay: 0.4s; }
  .delay-600 { animation-delay: 0.6s; }

  /* Optional: subtle rotation for extra realism */
  @keyframes bubble-rotate {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
  }

  .animate-bubble-rotate {
    animation: bubble-rotate 6s ease-in-out infinite;
  }
`}</style>
    </section>
  )
}

export default Music

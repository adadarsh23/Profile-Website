import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(null);
  const docHeightRef = useRef(0);

  // Function to calculate and cache document height for performance
  const calculateHeight = useCallback(() => {
    docHeightRef.current = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      // Ensure docHeight is calculated
      if (docHeightRef.current === 0) {
        calculateHeight();
      }

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      // Prevent division by zero if height is not yet calculated or is zero
      const scrolled = docHeightRef.current > 0 ? (winScroll / docHeightRef.current) * 100 : 0;

      setScrollProgress(scrolled);
      setIsVisible(winScroll > 300);
    });
  }, [calculateHeight]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", calculateHeight, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  const handleScrollToTop = useCallback(() => {
    const start = window.scrollY;
    const startTime = performance.now();
    const duration = Math.max(400, Math.min(800, start / 2));

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };
    requestAnimationFrame(scroll);
  }, []);

  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className={`group fixed z-50 flex items-center justify-center rounded-full
      bg-white-900/80 dark:bg-gray-900/80 backdrop-blur-md
      border-2 border-gray-200 dark:border-gray-700
      shadow-lg dark:shadow-2xl dark:shadow-black/25
      transition-all duration-300 ease-out
      hover:scale-110 hover:shadow-xl hover:border-black dark:hover:border-white
      active:scale-100
      
      /* Mobile devices */
      w-6 h-6 bottom-4 right-4
      /* Tablets */
      sm:w-8 sm:h-8 sm:bottom-6 sm:right-6
      /* Desktop */
      lg:w-8 lg:h-8 lg:bottom-8 lg:right-8
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 50 50">
        {/* Background track for the progress circle */}
        <circle
          className="text-gray-200/50 dark:text-gray-700/50"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
        />
        {/* Progress circle */}
        <circle
          className="text-black dark:text-white transition-colors duration-300"
          stroke="currentColor"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="25"
          cy="25"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="relative flex items-center justify-center w-full h-full">
        <ChevronUp className="absolute w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-200 dark:text-gray-800 transition-all duration-200 ease-in-out group-hover:opacity-0 group-hover:scale-75 group-hover:-translate-y-1" />
        <span className="absolute text-xs sm:text-sm lg:text-base font-bold text-gray-800 dark:text-gray-200 opacity-0 scale-75 transition-all duration-200 ease-in-out group-hover:opacity-100 group-hover:scale-100">
          {Math.round(scrollProgress)}%
        </span>
      </div>
    </button>
  );
};

export default ScrollToTopButton;
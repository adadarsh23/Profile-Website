import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const progressRef = useRef(null);
  const rafRef = useRef(null);
  const parallaxElementsRef = useRef([]);

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;

    if (!isTouchDevice) {
      // Initialize Lenis for non-touch devices
      const lenis = new Lenis({
        duration: 0.6,
        easing: (t) => t,
        smoothWheel: true,
        smoothTouch: false, // Disable for touch devices
        orientation: "vertical",
      });
      lenisRef.current = lenis;
    }

    // Find parallax elements once
    const parallaxElements = document.querySelectorAll("[data-parallax]");
    parallaxElements.forEach(el => {
      // Hint to the browser to optimize for transform changes
      el.style.willChange = 'transform';
    });
    parallaxElementsRef.current = parallaxElements;

    // Main animation frame loop
    const rafLoop = (time) => {
      const lenis = lenisRef.current;
      if (lenis) {
        lenis.raf(time);
      }

      const scroll = lenis ? lenis.scroll : window.scrollY;

      // 1. Update scroll progress bar
      if (progressRef.current) {
        const scrollHeight = document.body.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? (scroll / scrollHeight) * 100 : 0;
        progressRef.current.style.width = `${progress}%`;
        progressRef.current.style.opacity = scroll > 10 ? "1" : "0";
      }

      // 2. Apply parallax effect
      for (let i = 0; i < parallaxElementsRef.current.length; i++) {
        const el = parallaxElementsRef.current[i];
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        const rect = el.getBoundingClientRect();
        // Only apply transform if element is visible for performance
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          el.style.transform = `translateY(${scroll * speed}px)`;
        }
      }

      // Continue the loop
      rafRef.current = requestAnimationFrame(rafLoop);
    };

    // Start the loop
    rafRef.current = requestAnimationFrame(rafLoop);

    // Debounce the resize handler for better performance
    const debouncedResizeHandler = debounce(() => {
      // No need to restart the loop, it will self-adjust.
      // We just need to ensure calculations are correct on the next frame.
    }, 100);
    window.addEventListener("resize", debouncedResizeHandler);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      window.removeEventListener("resize", debouncedResizeHandler);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {/* Progress Bar */}
      <div
        ref={progressRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "0%",
          height: "4px",
          maxHeight: "8px",
          background: "linear-gradient(270deg, #ffffff, #e0e0e0, #ffffff)", // subtle shimmer
          backgroundSize: "200% 100%", // for moving shimmer effect
          boxShadow: "0 0 20px rgba(255,255,255,0.8), 0 0 35px rgba(255,255,255,0.5), 0 0 50px rgba(255,255,255,0.25)",
          borderRadius: "999px",
          zIndex: 9999,
          pointerEvents: "none",
          transition: "width 0.15s ease-out, opacity 0.35s ease, transform 0.25s ease, box-shadow 0.25s ease",
          opacity: 0,
          transform: "scaleY(1)",
          willChange: "width, opacity, transform, box-shadow, background-position",
          backdropFilter: "blur(3px)",
          animation: "shimmer 2s linear infinite", // shimmer animation
        }}
      />
      {children}
    </>
  );
}

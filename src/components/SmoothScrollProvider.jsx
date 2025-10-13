import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const progressRef = useRef(null);
  const rafRef = useRef(null);
  const parallaxRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => t,
      smoothWheel: true,
      smoothTouch: true,
      orientation: "vertical",
    });
    lenisRef.current = lenis;

    // Update scroll progress & fade-in/out logic
    const updateScrollProgress = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (lenis.scroll / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setIsScrolling(lenis.scroll > 10);

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
        progressRef.current.style.opacity = lenis.scroll > 10 ? "1" : "0";
      }
    };

    // Main RAF loop
    const rafLoop = (time) => {
      lenis.raf(time);
      updateScrollProgress();
      rafRef.current = requestAnimationFrame(rafLoop);
    };
    rafRef.current = requestAnimationFrame(rafLoop);

    // Parallax loop for elements with data-parallax
    const parallaxLoop = () => {
      const elements = document.querySelectorAll("[data-parallax]");
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;

        // Only apply transform if element is visible in viewport for performance
        const rect = el.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          el.style.transform = `translateY(${lenis.scroll * speed}px)`;
        }
      });
      parallaxRef.current = requestAnimationFrame(parallaxLoop);
    };
    parallaxRef.current = requestAnimationFrame(parallaxLoop);

    // Update on window resize
    const handleResize = () => updateScrollProgress();
    window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafRef.current);
      cancelAnimationFrame(parallaxRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

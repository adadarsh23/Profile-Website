import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.45,   // fast yet smooth
      easing: (t) => t, // linear for immediate response
      smoothWheel: true,
      smoothTouch: true,
      orientation: "vertical",
    });

    lenisRef.current = lenis;

    const rafLoop = (time) => {
      lenis.raf(time);
      updateScrollProgress();
      requestAnimationFrame(rafLoop);
    };
    requestAnimationFrame(rafLoop);

    const parallaxLoop = () => {
      const elements = document.querySelectorAll("[data-parallax]");
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        el.style.transform = `translateY(${lenis.scroll * speed}px)`;
      });
      requestAnimationFrame(parallaxLoop);
    };
    requestAnimationFrame(parallaxLoop);

    const updateScrollProgress = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (lenis.scroll / scrollHeight) * 100;
      setScrollProgress(progress);
      setIsScrolling(lenis.scroll > 10);
    };

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {isScrolling && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${scrollProgress}%`,
            height: "4px",
            background: "linear-gradient(90deg, #ffffff 0%, #e5e7eb 100%)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            borderRadius: "2px",
            zIndex: 9999,
            transition: "width 0.12s ease-out, opacity 0.3s ease",
            pointerEvents: "none",
          }}
        />
      )}
      {children}
    </>
  );
}

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);
  const progressRef = useRef(null);
  const rafRef = useRef(null);
  const parallaxElementsRef = useRef([]);

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Find parallax elements once
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach((el) => {
      el.style.willChange = 'transform';
    });
    parallaxElementsRef.current = Array.from(parallaxElements);

    let isTicking = false;

    const updateScrollMetrics = (currentScroll) => {
      const scroll =
        typeof currentScroll === 'number' ? currentScroll : window.scrollY;

      // 1. Update scroll progress bar
      if (progressRef.current) {
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scroll / docHeight) * 100 : 0;
        progressRef.current.style.width = `${progress}%`;
        progressRef.current.style.opacity = scroll > 10 ? '1' : '0';
      }

      // 2. Apply parallax effect only for elements in view
      const elements = parallaxElementsRef.current;
      const windowHeight = window.innerHeight;
      for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.1');
        const rect = el.getBoundingClientRect();
        if (rect.bottom >= 0 && rect.top <= windowHeight) {
          el.style.transform = `translateY(${scroll * speed}px)`;
        }
      }

      isTicking = false;
    };

    const requestTick = (scroll) => {
      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(() => updateScrollMetrics(scroll));
      }
    };

    let handleNativeScroll = null;
    if (!isTouchDevice) {
      // Smooth desktop Lenis setup
      const lenis = new Lenis({
        duration: 0.7,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        orientation: 'vertical',
      });
      lenisRef.current = lenis;

      lenis.on('scroll', (e) => {
        requestTick(e.scroll);
      });

      const raf = (time) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };
      rafRef.current = requestAnimationFrame(raf);
    } else {
      // Native high-performance passive scroll on mobile/touch screens
      handleNativeScroll = () => {
        requestTick(window.scrollY);
      };
      window.addEventListener('scroll', handleNativeScroll, { passive: true });
    }

    // Initial update
    updateScrollMetrics(window.scrollY);

    return () => {
      if (handleNativeScroll) {
        window.removeEventListener('scroll', handleNativeScroll);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div
        ref={progressRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '0%',
          height: '3px',
          background: 'linear-gradient(90deg, #000000, #ffffff)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          borderRadius: '999px',
          zIndex: 9999,
          pointerEvents: 'none',
          transition: 'width 0.1s linear, opacity 0.3s ease',
          opacity: 0,
          willChange: 'width, opacity',
        }}
      />
      {children}
    </>
  );
}

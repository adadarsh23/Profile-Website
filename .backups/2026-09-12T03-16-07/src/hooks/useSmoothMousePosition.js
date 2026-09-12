import { useEffect, useRef } from 'react';

const SPRING = 0.008;
const FRICTION = 0.85;

/**
 * Tracks mouse position smoothly relative to the bottom-right corner (AI robot position).
 */
export function useSmoothMousePosition() {
  const cursor = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    let isRunning = false;
    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        rafId.current = requestAnimationFrame(animate);
      }
    };

    const handleMove = (e) => {
      const point = e.touches?.[0] || e;
      if (!point) return;

      const mouseX = point.clientX;
      const mouseY = point.clientY;

      // Calculate screen-normalized cursor position [-1, 1] relative to viewport center
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const relativeX = (mouseX - centerX) / (centerX || 1);
      const relativeY = (mouseY - centerY) / (centerY || 1);

      target.current.x = Math.max(-1, Math.min(1, relativeX));
      target.current.y = -Math.max(-1, Math.min(1, relativeY)); // flip so up = positive
      startLoop();
    };

    const animate = () => {
      const dx = target.current.x - cursor.current.x;
      const dy = target.current.y - cursor.current.y;

      velocity.current.x = velocity.current.x * FRICTION + dx * SPRING;
      velocity.current.y = velocity.current.y * FRICTION + dy * SPRING;

      cursor.current.x += velocity.current.x;
      cursor.current.y += velocity.current.y;

      if (
        Math.abs(dx) < 0.0001 &&
        Math.abs(dy) < 0.0001 &&
        Math.abs(velocity.current.x) < 0.0001 &&
        Math.abs(velocity.current.y) < 0.0001
      ) {
        cursor.current.x = target.current.x;
        cursor.current.y = target.current.y;
        velocity.current.x = 0;
        velocity.current.y = 0;
        isRunning = false;
        rafId.current = null;
        return;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('touchmove', handleMove, { passive: true });
    startLoop();

    return () => {
      isRunning = false;
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return { cursor, velocity };
}

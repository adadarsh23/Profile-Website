import { useEffect, useRef } from "react";

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
    const handleMove = (e) => {
      const point = e.touches?.[0] || e;
      if (!point) return;

      const mouseX = point.clientX;
      const mouseY = point.clientY;

      // Define reference point (bottom-right corner)
      const originX = window.innerWidth;   // right edge
      const originY = window.innerHeight;  // bottom edge

      // Calculate relative position normalized to [-1, 1]
      const relativeX = (mouseX - originX) / (window.innerWidth / 2);
      const relativeY = (mouseY - originY) / (window.innerHeight / 2);

      target.current.x = relativeX;
      target.current.y = -relativeY; // flip so up = positive
    };

    const animate = () => {
      const dx = target.current.x - cursor.current.x;
      const dy = target.current.y - cursor.current.y;

      velocity.current.x = velocity.current.x * FRICTION + dx * SPRING;
      velocity.current.y = velocity.current.y * FRICTION + dy * SPRING;

      cursor.current.x += velocity.current.x;
      cursor.current.y += velocity.current.y;

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("touchmove", handleMove, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return { cursor, velocity };
}

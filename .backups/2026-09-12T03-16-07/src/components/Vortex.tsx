import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';
import { motion } from 'framer-motion';

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
  rangeHue?: number;
}

export const Vortex = ({
  children,
  className,
  containerClassName,
  particleCount: propParticleCount = 700,
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed: propRangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = '#000000',
  rangeHue = 100,
}: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Cross-device adaptive particle count
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
    const isTablet = typeof window !== 'undefined' && window.innerWidth < 1024;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const requestedCount = propParticleCount;
    const particleCount = prefersReducedMotion
      ? 50
      : isMobile
        ? Math.min(requestedCount, 180)
        : isTablet
          ? Math.min(requestedCount, 380)
          : Math.min(requestedCount, 650);

    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const baseTTL = 50;
    const rangeTTL = 150;
    const rangeSpeed = prefersReducedMotion ? 0.3 : propRangeSpeed;
    const noiseSteps = 3;
    const xOff = 0.00125;
    const yOff = 0.00125;
    const zOff = 0.0005;

    let tick = 0;
    const noise3D = createNoise3D();
    let particleProps = new Float32Array(particlePropsLength);
    let center: [number, number] = [0, 0];
    let animationFrameId: number | null = null;
    let isVisible = true;

    const TAU = 2 * Math.PI;
    const rand = (n: number): number => n * Math.random();
    const randRange = (n: number): number => n - rand(2 * n);
    const fadeInOut = (t: number, m: number): number => {
      const hm = 0.5 * m;
      return Math.abs(((t + hm) % m) - hm) / hm;
    };
    const lerp = (n1: number, n2: number, speed: number): number =>
      (1 - speed) * n1 + speed * n2;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Cap internal pixel ratio for mobile performance
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      center = [0.5 * width, 0.5 * height];
    };

    const initParticle = (i: number) => {
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 1.5);
      const x = rand(width);
      const y = center[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const initParticles = () => {
      tick = 0;
      particleProps = new Float32Array(particlePropsLength);
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    };

    const checkBounds = (x: number, y: number) => {
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 1.5);
      const height =
        canvas.height / Math.min(window.devicePixelRatio || 1, 1.5);
      return x > width || x < 0 || y > height || y < 0;
    };

    const drawParticle = (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number
    ) => {
      ctx.save();
      ctx.lineCap = 'round';
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    };

    const updateParticle = (i: number) => {
      const i2 = 1 + i;
      const i3 = 2 + i;
      const i4 = 3 + i;
      const i5 = 4 + i;
      const i6 = 5 + i;
      const i7 = 6 + i;
      const i8 = 7 + i;
      const i9 = 8 + i;

      const x = particleProps[i];
      const y = particleProps[i2];
      const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
      const vx = lerp(particleProps[i3], Math.cos(n), 0.5);
      const vy = lerp(particleProps[i4], Math.sin(n), 0.5);
      let life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = particleProps[i8];
      const hue = particleProps[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);

      life++;
      particleProps[i] = x2;
      particleProps[i2] = y2;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life;

      if (checkBounds(x, y) || life > ttl) {
        initParticle(i);
      }
    };

    const drawParticles = () => {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }
    };

    const loop = () => {
      if (!isVisible) return;

      tick++;
      const width = canvas.width / Math.min(window.devicePixelRatio || 1, 1.5);
      const height =
        canvas.height / Math.min(window.devicePixelRatio || 1, 1.5);

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);

      drawParticles();

      // Only apply blur glow on capable desktop screens
      if (!isMobile && !prefersReducedMotion) {
        ctx.save();
        ctx.filter = 'blur(6px) brightness(160%)';
        ctx.globalCompositeOperation = 'lighter';
        ctx.drawImage(canvas, 0, 0, width, height);
        ctx.restore();
      }

      animationFrameId = window.requestAnimationFrame(loop);
    };

    resize();
    initParticles();
    loop();

    // IntersectionObserver to pause loop when scrolled off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (!wasVisible && isVisible) {
          if (animationFrameId) cancelAnimationFrame(animationFrameId);
          animationFrameId = window.requestAnimationFrame(loop);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(container);

    const handleResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [
    propParticleCount,
    rangeY,
    baseHue,
    baseSpeed,
    propRangeSpeed,
    baseRadius,
    rangeRadius,
    backgroundColor,
    rangeHue,
  ]);

  return (
    <div className={cn('relative h-full w-full', containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef} />
      </motion.div>

      <div className={cn('relative z-10', className)}>{children}</div>
    </div>
  );
};

export default Vortex;

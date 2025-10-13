import React, { useState, useEffect, lazy, Suspense } from 'react';
const BlurText = lazy(() => import("../components/BlurText"));
const PrismaticBurst = lazy(() => import("../components/PrismaticBurst"));
const Loading = lazy(() => import("../components/Loading"));

export default function Header({ onAnimationComplete }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    onAnimationComplete?.();
  };

  // Track mouse/touch for interactive burst
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      setMousePos({ x: touch.clientX, y: touch.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">

      {/* Interactive Prismatic Burst */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Suspense fallback={<div><Loading /></div>}>
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2.5}
            speed={0.5}
            distort={10}
            paused={false}
            offset={{
              x: (mousePos.x / window.innerWidth - 0.5) * 2,
              y: (mousePos.y / window.innerHeight - 0.5) * 2,
            }}
            hoverDampness={1}
            rayCount={0}
            mixBlendMode="lighten"
            colors={['#000000', '#9239db', '#000000']}
          />
        </Suspense>
      </div>

      {/* Centered Animated Text */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <Suspense fallback={<div><Loading /></div>}>
          <BlurText
            text="Welcome To Adarsh Profile"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 sm:mb-8 flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 transition-all duration-700 ease-in-out hover:scale-110 hover:text-white"
          />
        </Suspense>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
          Explore my projects, beats, and music production works.
        </p>

      </div>
    </section>
  );
}

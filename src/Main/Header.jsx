import React, { useState, useEffect } from 'react';
import BlurText from "../components/BlurText";
import PrismaticBurst from '../components/PrismaticBurst';

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
        <PrismaticBurst
          animationType="hover"
          intensity={2}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{
            x: (mousePos.x / window.innerWidth - 0.5) * 2,
            y: (mousePos.y / window.innerHeight - 0.5) * 2,
          }}
          hoverDampness={0.25}
          rayCount={24}
          mixBlendMode="lighten"
        />
      </div>

      {/* Centered Animated Text */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <BlurText
          text="Welcome To Adarsh Profile"
          delay={100}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-extrabold
            mb-6 sm:mb-8
            drop-shadow-[0_0_25px_rgba(255,255,255,0.95)]
            flex flex-wrap justify-center items-center
            space-x-1 sm:space-x-2
            transform transition-all duration-500 hover:scale-105 hover:animate-shine
          "
          style={{
            backgroundImage: 'linear-gradient(90deg, #ff6ec4, #7873f5, #42e695)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            animation: 'shine 3s linear infinite',
            backgroundSize: '200% 100%',
          }}
        />

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
          Explore my projects, beats, and music production works.
        </p>

        {/* Call-to-Action */}
        {/* <button className="mt-6 px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 text-white font-semibold rounded-full shadow-lg hover:scale-110 hover:bg-gray-700 hover:shadow-2xl transition-transform duration-300 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          View Projects
        </button> */}


      </div>

      {/* Global Shine Animation */}
      <style>
        {`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .hover\\:animate-shine:hover {
            animation: shine 2s linear infinite;
            background-size: 200% 100%;
          }
        `}
      </style>
    </section>
  );
}

import React from 'react'
import BlurText from "../components/BlurText";
import PrismaticBurst from '../components/PrismaticBurst';

export default function Header() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <PrismaticBurst
          animationType="hover"
          intensity={3.5}
          speed={0.5}
          distort={1.0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.50}
          rayCount={50}
          mixBlendMode="lighten"
          colors={['#616161', '#303030', '#575757']}
        />
      </div>
      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-1">
        <BlurText
          text="Welcome To Ad Adarsh Profile"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="
    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
    font-extrabold
    mb-8 md:mb-10
    text-white
    drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
    flex flex-wrap justify-center items-center
    space-x-1 sm:space-x-2
    text-center
    hover:scale-105
    transition-transform duration-500
    hover:text-gradient
    hover:animate-shine
  "
          style={{
            backgroundImage: 'linear-gradient(90deg, #ff6ec4, #7873f5, #42e695)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            animation: 'shine 3s linear infinite',
          }}
        />
      </div>
    </div>
  )
}

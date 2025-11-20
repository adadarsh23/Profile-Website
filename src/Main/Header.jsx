import React, { Suspense, useEffect, lazy } from 'react';

// KEEP ONLY HEAVY COMPONENTS LAZY LOADED
const Vortex = lazy(() => import('../components/Vortex'));

// SMALL COMPONENTS SHOULD NOT BE LAZY LOADED
import Loading from '../components/Loading';
import BlurText from '../components/BlurText';

export default function Header({ onAnimationComplete }) {
  useEffect(() => {
    import('../font/Striper_Complete/Fonts/WEB/css/striper.css');
  }, []);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    onAnimationComplete?.();
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">

      {/* Heavy component - OK for Suspense */}
      <Suspense fallback={<Loading />}>
        <Vortex
          backgroundColor="black"
          rangeY={1000}
          particleCount={1000}
          baseHue={1000}
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
            <BlurText
              text="Welcome To Âd Adarsh Profile"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 sm:mb-8 flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 text-white striper-regular"
            />
          </h2>

          <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center striper-regular">
            Explore my projects, beats, and music production works.
          </p>
        </Vortex>
      </Suspense>
    </div>
  );
}

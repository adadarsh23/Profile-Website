import React, { lazy, Suspense } from 'react';
const Loading = lazy(() => import("../components/Loading"));
const Hyperspeed = lazy(() => import("../components/Hyperspeed"));
const BlurText = lazy(() => import("../components/BlurText"));
// const PrismaticBurst = lazy(() => import("../components/PrismaticBurst"));

export default function Header({ onAnimationComplete }) {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
    onAnimationComplete?.();
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12">

      {/* Interactive Prismatic Burst */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Suspense fallback={<div><Loading /></div>}>
          <Hyperspeed
            effectOptions={{
              onSpeedUp: () => { },
              onSlowDown: () => { },
              distortion: 'deepDistortion',
              length: 400,
              roadWidth: 18,
              islandWidth: 2,
              lanesPerRoad: 3,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 50,
              lightPairsPerRoadWay: 50,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.05, 400 * 0.15],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.2, 0.2],
              carFloorSeparation: [0.05, 1],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0x131318,
                brokenLines: 0x131318,
                leftCars: [0xff322f, 0xa33010, 0xa81508],
                rightCars: [0xfdfdf0, 0xf3dea0, 0xe2bb88],
                sticks: 0xfdfdf0
              }
            }}
          />
        </Suspense>
      </div>

      {/* Centered Animated Text */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center ">
        <Suspense fallback={<div><Loading /></div>}>
          <BlurText
            text="Welcome To Ad Adarsh Profile"
            delay={100}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 sm:mb-8 flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 text-white"
          />
        </Suspense>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
          Explore my projects, beats, and music production works.
        </p>
      </div>
    </section>
  );
}
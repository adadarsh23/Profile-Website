import React, { lazy, Suspense, useMemo } from 'react';
const LogoLoop = lazy(() => import('../components/LogoLoop.jsx'));
const CurvedLoop = lazy(() => import('../components/CurvedLoop.jsx'));
const Loading = lazy(() => import('../components/Loading'));
import { techLogos } from '../Data/LoopData.jsx';

export default function Loop() {
  const NUM_LOOPS = 4;
  const SPEED_RANGE = { min: 80, max: 150 };
  const LOGO_HEIGHT = 48;
  const GAP = 40;
  const FADE_OUT_COLOR = '#000000';
  const ARIA_LABEL = 'My Socials and Platforms';

  const loopConfigurations = useMemo(() => {
    const getRandomInt = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomDirection = () => (Math.random() > 0.5 ? 'left' : 'right');
    // Fisher-Yates shuffle algorithm
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    return Array.from({ length: NUM_LOOPS }).map(() => ({
      speed: getRandomInt(SPEED_RANGE.min, SPEED_RANGE.max),
      direction: getRandomDirection(),
      logos: shuffle([...techLogos]),
    }));
  }, []);
  return (
    <section className="bg-black text-white mb-30 flex flex-col space-y-10">
      <Suspense fallback={
        <div>
          <Loading />
        </div>
      }
      >
        <div style={{ width: '100%' }} className="flex flex-col space-y-10">
          {loopConfigurations.map((config, i) => (
            <div
              key={i}
              style={{ height: '60px', position: 'relative', overflow: 'hidden' }}
              className="relative overflow-hidden h-24 sm:h-32 md:h-48 w-full"
            >
              <LogoLoop
                logos={config.logos}
                speed={config.speed}
                direction={config.direction}
                logoHeight={LOGO_HEIGHT}
                gap={GAP}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor={FADE_OUT_COLOR}
                ariaLabel={ARIA_LABEL}
              />
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-12">
          <CurvedLoop
            marqueeText="Be ✦ A Gamer Who Understands Strategy ✦ A Coder Who Solves Problems With Clarity ✦ A Producer Who Crafts Detailed Soundscapes ✦ A Creator Turning Ideas Into Functional Reality ✦"
            speed={3}
            curveAmount={300}
            direction="right"
            interactive={true}
            className="text-9xl sm:text-7xl md:text-9xl lg:text-9xl font-semibold leading-none tracking-tight select-none"
          />
        </div>
      </Suspense>
    </section>
  );
}

import React, { useMemo } from 'react';
import LogoLoop from '../components/LogoLoop.jsx';
// import CurvedLoop from '../components/CurvedLoop.jsx';
import { techLogos } from '../Data/LoopData.jsx';

export default function Loop() {
  const NUM_LOOPS = 4;
  const SPEED_RANGE = { min: 80, max: 150 };
  const LOGO_HEIGHT = 48;
  const GAP = 40;
  const FADE_OUT_COLOR = "#000000";
  const ARIA_LABEL = "My Socials and Platforms";

  const loopConfigurations = useMemo(() => {
    const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const getRandomDirection = () => (Math.random() > 0.5 ? "left" : "right");
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
      {/* <CurvedLoop
        marqueeText="Be ✦ Gamer ✦ Coder ✦ Producer ✦ Bits ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style sm:text-9xl md:text-9xl lg:text-9xl xl:text-9xl 2xl:text-9xl"
      /> */}

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
    </section>

  );
}
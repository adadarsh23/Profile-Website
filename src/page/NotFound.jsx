
import React from 'react';
import FuzzyText from '../components/FuzzyText';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black text-white w-full">
      <div className="text-center">
        <span className="block text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px]">
          <FuzzyText
            baseIntensity={1}
            hoverIntensity={1}
            enableHover={true}
            fontSize={200}
            fontWeight={500}
          >
            404
          </FuzzyText>
        </span>
      </div>
    </div>
  );
}

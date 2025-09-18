import React, { Suspense, lazy } from 'react';

// ✅ Lazy load FuzzyText
const FuzzyText = lazy(() => import('../components/FuzzyText'));

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-black text-white w-full">
      <div className="text-center">
        <span className="block text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px]">
          <Suspense fallback={<span className="text-gray-500">Loading...</span>}>
            <FuzzyText
              baseIntensity={1}
              hoverIntensity={1}
              enableHover={true}
              fontSize={200}
              fontWeight={500}
            >
              404
            </FuzzyText>
          </Suspense>
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import SkeletonBlock from './SkeletonBlock';

export default function NotFoundSkeleton() {
  return (
    <div className="flex w-full min-h-[50vh] flex-col items-center justify-center bg-black px-4 text-white">
      {/* Glitch-pulse 404 typographic silhouette matching FuzzyText */}
      <div className="relative select-none text-[100px] sm:text-[150px] md:text-[200px] lg:text-[240px] font-black leading-none tracking-wider text-white/[0.08] animate-glitch-pulse">
        404
        <div className="absolute inset-0 flex items-center justify-center">
          <SkeletonBlock
            className="w-48 sm:w-72 md:w-96 h-20 sm:h-28 md:h-36 opacity-30 blur-md"
            pulse
          />
        </div>
      </div>
      <SkeletonBlock
        className="mt-4 h-4 w-40 sm:w-56"
        rounded="rounded-full"
        stagger={1}
      />
    </div>
  );
}

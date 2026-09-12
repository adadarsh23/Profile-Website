import React from 'react';
import SkeletonBlock from './SkeletonBlock';
import { BeatsGridSkeleton } from './SectionSkeletons';

export default function SampleSkeleton() {
  return (
    <section className="min-h-screen bg-black px-4 py-24 text-white sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl w-full flex flex-col items-center">
        <SkeletonBlock
          className="mb-8 h-10 w-56 sm:h-12 sm:w-72 md:mb-12 md:h-14 md:w-96"
          rounded="rounded-2xl"
          pulse
        />
        <div className="w-full mt-10">
          <BeatsGridSkeleton />
        </div>
      </div>
    </section>
  );
}

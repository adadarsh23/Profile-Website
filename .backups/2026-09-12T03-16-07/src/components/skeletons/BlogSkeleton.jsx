import React from 'react';
import SkeletonBlock from './SkeletonBlock';
import { BlogGridSkeleton } from './SectionSkeletons';

export default function BlogSkeleton() {
  return (
    <section className="mx-4 mt-10 min-h-screen rounded-[2rem] bg-black px-4 py-16 text-white sm:mx-6 sm:px-6 md:mx-12 md:px-12 lg:mx-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <SkeletonBlock
            className="h-10 w-56 sm:h-12 sm:w-72 md:h-14 md:w-96"
            rounded="rounded-2xl"
            pulse
          />
        </div>
        <BlogGridSkeleton />
      </div>
    </section>
  );
}

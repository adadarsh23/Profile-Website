import React from 'react';
import SkeletonBlock from './SkeletonBlock';
import { GalleryGridSkeleton } from './SectionSkeletons';

export default function GallerySkeleton() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center mb-8 md:mb-12">
          <SkeletonBlock
            className="h-10 w-64 sm:h-12 sm:w-80 md:h-14 md:w-96"
            rounded="rounded-2xl"
            pulse
          />
        </div>

        <GalleryGridSkeleton />
      </div>
    </section>
  );
}

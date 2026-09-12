import React from 'react';
import SkeletonBlock from './SkeletonBlock';

export default function AboutSkeleton() {
  return (
    <section className="mx-4 mt-10 min-h-screen rounded-[2rem] bg-black px-4 py-16 text-white sm:mx-6 sm:px-6 md:mx-12 md:px-12 lg:mx-16 flex flex-col items-center">
      <div className="mx-auto flex max-w-7xl w-full flex-col items-center">
        {/* BubbleText placeholder */}
        <SkeletonBlock
          className="mb-8 h-10 w-56 sm:h-12 sm:w-72 md:mb-12 md:h-14 md:w-84"
          rounded="rounded-2xl"
          pulse
        />
        {/* Intro text lines */}
        <SkeletonBlock
          className="mb-4 h-4 w-full max-w-2xl"
          rounded="rounded-md"
          stagger={1}
        />
        <SkeletonBlock
          className="mb-16 h-4 w-[80%] max-w-xl"
          rounded="rounded-md"
          stagger={2}
        />

        {/* 6 About Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 flex flex-col"
            >
              <SkeletonBlock
                className="mb-4 h-6 w-2/3"
                rounded="rounded-md"
                stagger={(index % 3) + 1}
              />
              <SkeletonBlock
                className="mb-2 h-4 w-full"
                rounded="rounded-md"
                stagger={(index % 3) + 2}
              />
              <SkeletonBlock
                className="mb-2 h-4 w-[90%]"
                rounded="rounded-md"
                stagger={(index % 3) + 2}
              />
              <SkeletonBlock
                className="h-4 w-[70%]"
                rounded="rounded-md"
                stagger={(index % 3) + 3}
              />
            </div>
          ))}
        </div>

        {/* Contact Us Button */}
        <SkeletonBlock className="mt-16 h-11 w-36 rounded-md" stagger={4} />
      </div>
    </section>
  );
}

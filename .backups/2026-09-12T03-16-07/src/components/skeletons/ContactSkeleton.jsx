import React from 'react';
import SkeletonBlock from './SkeletonBlock';

export default function ContactSkeleton() {
  return (
    <section className="mx-4 mt-10 min-h-screen overflow-hidden rounded-[2rem] bg-black px-4 py-16 text-white sm:mx-6 sm:px-6 md:mx-12 md:px-12 lg:mx-16 flex flex-col items-center justify-center">
      <div className="mx-auto flex max-w-5xl w-full flex-col items-center">
        {/* BubbleText placeholder */}
        <SkeletonBlock
          className="mb-6 h-10 w-56 sm:h-12 sm:w-72 md:h-14 md:w-84"
          rounded="rounded-2xl"
          pulse
        />
        {/* Subtitle */}
        <SkeletonBlock
          className="mb-8 h-4 w-full max-w-xl"
          rounded="rounded-md"
          stagger={1}
        />

        {/* Form Container */}
        <div className="w-full max-w-xl rounded-[2rem] border border-white/15 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-md sm:p-8 md:p-10">
          <SkeletonBlock
            className="mb-2 h-8 w-36"
            rounded="rounded-lg"
            stagger={2}
          />
          <SkeletonBlock
            className="mb-8 h-4 w-4/5"
            rounded="rounded-md"
            stagger={3}
          />

          <div className="space-y-5">
            {/* Name */}
            <div>
              <SkeletonBlock
                className="mb-2 h-3.5 w-16"
                rounded="rounded-md"
                stagger={3}
              />
              <SkeletonBlock
                className="h-12 w-full"
                rounded="rounded-xl"
                stagger={3}
              />
            </div>

            {/* Email */}
            <div>
              <SkeletonBlock
                className="mb-2 h-3.5 w-16"
                rounded="rounded-md"
                stagger={4}
              />
              <SkeletonBlock
                className="h-12 w-full"
                rounded="rounded-xl"
                stagger={4}
              />
            </div>

            {/* Message */}
            <div>
              <SkeletonBlock
                className="mb-2 h-3.5 w-20"
                rounded="rounded-md"
                stagger={5}
              />
              <SkeletonBlock
                className="h-28 w-full"
                rounded="rounded-xl"
                stagger={5}
              />
            </div>

            {/* Submit Button */}
            <SkeletonBlock
              className="h-12 w-full"
              rounded="rounded-xl"
              stagger={6}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

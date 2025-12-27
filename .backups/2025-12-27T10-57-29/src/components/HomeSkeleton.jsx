import React from 'react';

export default function HomeSkeleton() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col overflow-hidden">
      {/* Header Section Skeleton - Full Screen */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center px-4">
        {/* Background Pulse */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-[60vw] h-[60vw] rounded-full bg-gray-700 blur-[100px] animate-pulse"></div>
        </div>

        {/* Title Lines */}
        <div className="z-10 flex flex-col items-center gap-4 w-full max-w-4xl">
          <div className="h-12 md:h-20 w-3/4 bg-gray-800/50 rounded-lg animate-pulse backdrop-blur-sm"></div>
          <div className="h-12 md:h-20 w-1/2 bg-gray-800/50 rounded-lg animate-pulse backdrop-blur-sm delay-75"></div>

          {/* Subtitle */}
          <div className="h-4 md:h-6 w-1/3 bg-gray-800/30 rounded mt-6 animate-pulse delay-150"></div>
        </div>
      </section>

      {/* Scroll/Marquee Skeleton */}
      <section className="w-full py-8 opacity-50">
        <div className="h-16 w-full bg-gray-900 animate-pulse"></div>
      </section>

      {/* Video Section Skeleton */}
      <section className="w-full py-12 px-4 flex justify-center">
        <div className="w-full max-w-6xl aspect-video bg-gray-900/80 rounded-xl animate-pulse border border-gray-800"></div>
      </section>

      {/* Music List Skeleton */}
      <section className="w-full py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 w-full bg-gray-900/60 rounded-xl animate-pulse flex items-center px-6 gap-6 border border-gray-800/30"
            >
              <div className="h-12 w-12 rounded-full bg-gray-800"></div>
              <div className="flex-1 space-y-3">
                <div className="h-4 w-1/3 bg-gray-800 rounded"></div>
                <div className="h-3 w-1/4 bg-gray-800/50 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Velocity/Circle Photo Skeleton */}
      <section className="w-full py-20 flex flex-col items-center justify-center gap-8">
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-gray-900 animate-pulse border-4 border-gray-800/50"></div>
        <div className="h-8 w-48 bg-gray-900 rounded animate-pulse"></div>
      </section>
    </div>
  );
}

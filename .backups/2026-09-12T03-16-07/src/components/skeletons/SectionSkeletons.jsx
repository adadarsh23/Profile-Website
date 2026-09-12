import React from 'react';
import SkeletonBlock from './SkeletonBlock';

/**
 * Hero section skeleton matching Header.jsx
 */
export function HeroSkeleton() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6 md:px-12">
      {/* Subtle ambient vortex glow simulation */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_65%)] animate-skeleton-pulse" />

      <div className="flex flex-col items-center w-full max-w-4xl px-2 py-4 md:px-10 z-10">
        {/* Dynamic Typewriter Headline container */}
        <div className="min-h-[80px] md:min-h-[120px] flex items-center justify-center gap-2 mb-2 w-full">
          <SkeletonBlock
            className="h-8 sm:h-12 md:h-16 w-3/4 max-w-xl"
            rounded="rounded-xl"
            pulse
          />
          <span
            className="inline-block w-1.5 h-7 sm:h-10 md:h-14 bg-white/70 animate-pulse rounded-full"
            aria-hidden="true"
          />
        </div>

        {/* Subtitle matching "Explore my projects, beats, and music production work." */}
        <div className="mt-3 w-full flex justify-center">
          <SkeletonBlock
            className="h-4 sm:h-6 md:h-7 w-4/5 max-w-md"
            rounded="rounded-lg"
            stagger={2}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * 3D Social sphere skeleton matching Scroll.jsx / InfiniteMenu.jsx
 */
export function InfiniteMenuSkeleton() {
  return (
    <section className="relative w-full bg-black py-4 sm:py-6 md:py-8 flex items-center justify-center overflow-hidden min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[700px] h-[75vh] max-h-[850px]">
      <div className="relative w-full h-full max-w-7xl flex items-center justify-center px-4">
        {/* Background ambient lighting */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] animate-skeleton-pulse" />

        {/* 3D Orbital sphere simulation */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center animate-orbit-spin">
          <div className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border border-dashed border-white/15" />
          <div className="absolute w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border border-white/10" />

          {/* Orbiting node points simulating 3D discs */}
          <div className="absolute top-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm" />
          <div className="absolute bottom-4 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm" />
          <div className="absolute left-2 top-1/2 w-7 h-7 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm" />
          <div className="absolute right-0 top-1/3 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm" />
        </div>

        {/* Active item Title placeholder matching InfiniteMenu left positioning */}
        <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-[45%] sm:top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
          <SkeletonBlock
            className="h-9 sm:h-12 md:h-16 w-36 sm:w-48 md:w-64"
            rounded="rounded-xl"
            stagger={1}
          />
          <SkeletonBlock
            className="h-4 sm:h-5 w-24 sm:w-32"
            rounded="rounded-md"
            stagger={2}
          />
        </div>

        {/* Active item Description placeholder matching InfiniteMenu right positioning */}
        <div className="absolute right-4 sm:right-8 md:right-12 lg:right-16 top-[55%] -translate-y-1/2 flex flex-col items-end gap-2 z-10">
          <SkeletonBlock
            className="h-4 sm:h-5 md:h-6 w-32 sm:w-44 md:w-56"
            rounded="rounded-md"
            stagger={3}
          />
          <SkeletonBlock
            className="h-4 sm:h-5 md:h-6 w-24 sm:w-32 md:w-40"
            rounded="rounded-md"
            stagger={4}
          />
        </div>

        {/* Signature Red Circular Button matching InfiniteMenu bottom center */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-10 z-10">
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-4 border-black bg-red-600/50 shadow-lg shadow-red-600/30 grid place-items-center animate-pulse">
            <span className="text-black/80 font-black text-lg sm:text-xl md:text-2xl select-none">
              &#x2197;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Video player skeleton matching Video.jsx
 */
export function VideoSkeleton() {
  return (
    <section className="mt-3 mb-8 flex flex-col items-center justify-center bg-black px-4 text-white sm:mt-6 sm:mb-12 sm:px-6 lg:mt-8 lg:mb-20 lg:px-8">
      {/* Spacer matching Video.jsx */}
      <div className="mt-8 mb-8 sm:mt-12 sm:mb-12 lg:mt-20 lg:mb-20" />

      {/* BubbleText placeholder for "Latest Video" */}
      <SkeletonBlock
        className="mb-8 h-10 w-48 sm:h-12 sm:w-64 md:mb-12 md:h-14 md:w-80"
        rounded="rounded-2xl"
        pulse
      />

      {/* 16:9 Video Card */}
      <div className="relative aspect-video w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] flex items-center justify-center shadow-2xl">
        <SkeletonBlock className="w-full h-full rounded-3xl" stagger={1}>
          {/* Centered Play Button badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/25 border border-red-500/40 flex items-center justify-center shadow-lg shadow-red-600/20 backdrop-blur-sm">
              <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-white/80 ml-1" />
            </div>
            <div className="h-3 w-28 bg-white/10 rounded-full" />
          </div>

          {/* Bottom video scrubber bar rail */}
          <div className="absolute bottom-4 sm:bottom-6 left-6 right-6 flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-white/20" />
            <div className="h-1.5 flex-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-red-500/50 rounded-full" />
            </div>
            <div className="w-10 h-3 rounded bg-white/15" />
          </div>
        </SkeletonBlock>
      </div>
    </section>
  );
}

/**
 * Music albums row skeleton matching Music.jsx & MusicArt.tsx
 */
export function MusicSkeleton() {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-20">
      {/* BubbleText placeholder for "Music Albums" */}
      <SkeletonBlock
        className="mb-8 h-10 w-52 sm:h-12 sm:w-68 md:mb-12 md:h-14 md:w-84"
        rounded="rounded-2xl"
        pulse
      />

      {/* Album Row with Vinyl Record backing matching MusicArt.tsx */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 lg:gap-24 xl:gap-32 w-full max-w-7xl">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="relative group p-2">
            {/* Peeking vinyl record behind sleeve */}
            <div className="absolute -left-12 sm:-left-20 top-1/2 -translate-y-1/2 w-40 h-40 sm:w-56 sm:h-56 rounded-full border border-white/15 bg-neutral-900 shadow-xl flex items-center justify-center animate-orbit-spin">
              {/* Concentric vinyl groove rings */}
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-white/10 flex items-center justify-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-dashed border-white/10 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600/30 border border-red-500/40" />
                </div>
              </div>
            </div>

            {/* Album artwork sleeve */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-lg shadow-2xl overflow-hidden border border-white/10 z-10">
              <SkeletonBlock
                className="w-full h-full rounded-lg"
                stagger={index + 1}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Velocity ticker skeleton matching Velocity.jsx & ScrollVelocity.jsx
 */
export function VelocitySkeleton() {
  return (
    <div className="overflow-hidden w-full py-8 bg-black/80 border-y border-white/[0.04] space-y-4">
      {/* 4 Multi-directional scrolling ticker rows matching the 4 phrases in Velocity.jsx */}
      {Array.from({ length: 4 }).map((_, rowIndex) => {
        const driftClass =
          rowIndex % 2 === 0 ? 'animate-ticker-left' : 'animate-ticker-right';

        return (
          <div
            key={rowIndex}
            className="relative overflow-hidden h-14 sm:h-18 md:h-20 w-full flex items-center"
          >
            <div className={`flex items-center gap-6 shrink-0 ${driftClass}`}>
              {Array.from({ length: 6 }).map((_, blockIdx) => (
                <div
                  key={blockIdx}
                  className="h-10 sm:h-14 md:h-16 w-56 sm:w-72 md:w-88 rounded-2xl bg-white/[0.05] border border-white/[0.04] backdrop-blur-sm shrink-0 flex items-center px-4"
                >
                  <div className="h-4 sm:h-6 w-3/4 bg-white/10 rounded-lg animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Circular 3D photography gallery skeleton matching CirclePhoto.jsx
 */
export function CirclePhotoSkeleton() {
  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-20 md:py-32">
      {/* Background Glow matching CirclePhoto.jsx */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(120, 115, 245, 0.12), transparent 60%)',
        }}
      />

      {/* BubbleText placeholder */}
      <SkeletonBlock
        className="mb-4 h-10 w-48 sm:h-12 sm:w-64 md:h-14 md:w-72"
        pulse
      />
      <SkeletonBlock className="mb-12 h-4 w-72 sm:w-96" stagger={2} />

      {/* 3D Circular Arc Gallery Layout */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
        {/* Orbital guide ring */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] rounded-full border border-white/10 flex items-center justify-center">
          {/* Card silhouettes arranged along the 3D arc */}
          <div className="absolute top-2 w-28 h-36 sm:w-36 sm:h-48 rounded-2xl bg-white/[0.04] border border-white/10 rotate-6" />
          <div className="absolute bottom-2 w-28 h-36 sm:w-36 sm:h-48 rounded-2xl bg-white/[0.04] border border-white/10 -rotate-6" />
          <div className="absolute left-2 w-28 h-36 sm:w-36 sm:h-48 rounded-2xl bg-white/[0.04] border border-white/10 -rotate-12" />
          <div className="absolute right-2 w-28 h-36 sm:w-36 sm:h-48 rounded-2xl bg-white/[0.04] border border-white/10 rotate-12" />

          {/* Focal center card with subtle floating micro-animation */}
          <div className="animate-float z-20">
            <SkeletonBlock
              className="w-36 h-48 sm:w-44 sm:h-60 md:w-52 md:h-72 rounded-2xl shadow-2xl border-white/20"
              stagger={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Loop / logo slider rows skeleton matching Loop.jsx
 */
export function LoopSkeleton() {
  return (
    <section className="bg-black text-white mb-30 flex flex-col space-y-8 py-10 w-full overflow-hidden">
      {/* 4 rows matching NUM_LOOPS = 4 in Loop.jsx */}
      {Array.from({ length: 4 }).map((_, index) => {
        const driftClass =
          index % 2 === 0 ? 'animate-ticker-left' : 'animate-ticker-right';

        return (
          <div
            key={index}
            className="relative overflow-hidden h-20 sm:h-24 md:h-28 w-full flex items-center"
          >
            <div
              className={`flex items-center gap-6 px-4 shrink-0 ${driftClass}`}
            >
              {Array.from({ length: 8 }).map((_, pillIdx) => (
                <div
                  key={pillIdx}
                  className="h-12 sm:h-14 w-36 sm:w-48 rounded-full bg-white/[0.05] border border-white/[0.05] backdrop-blur-sm shrink-0 flex items-center justify-center px-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                  <div className="ml-3 h-3.5 flex-1 bg-white/10 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Curved loop wave placeholder matching CurvedLoop.jsx */}
      <div className="w-full flex justify-center px-4 pt-6">
        <SkeletonBlock
          className="h-20 sm:h-28 w-full max-w-5xl rounded-3xl"
          stagger={3}
        />
      </div>
    </section>
  );
}

/**
 * Beats Grid Skeleton matching Beats.jsx cards
 */
export function BeatsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-7xl w-full mx-auto">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-3 w-full border border-white/10 shadow-lg flex flex-col"
        >
          {/* Cover art matching aspect-[4/3] with play button */}
          <div className="relative mb-3 aspect-[4/3] w-full rounded-lg overflow-hidden">
            <SkeletonBlock
              className="w-full h-full rounded-lg"
              stagger={(index % 4) + 1}
            >
              <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[8px] border-l-white/70 ml-0.5" />
              </div>
            </SkeletonBlock>
          </div>

          {/* Title & Artist */}
          <SkeletonBlock className="mb-1 h-5 w-3/4 rounded-md" stagger={1} />
          <SkeletonBlock className="mb-2 h-4 w-1/2 rounded-md" stagger={2} />

          {/* Tags (BPM & Duration) */}
          <div className="flex items-center gap-2 mb-3">
            <SkeletonBlock className="h-5 w-16 rounded-full" stagger={3} />
            <SkeletonBlock className="h-5 w-14 rounded-full" stagger={4} />
          </div>

          {/* Full-width Download/Buy button matching Beats.jsx */}
          <div className="mt-auto pt-2">
            <SkeletonBlock className="h-9 w-full rounded-lg" stagger={2} />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Blog / Creator Grid Skeleton matching ChromaGrid.jsx
 */
export function BlogGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 max-w-7xl w-full mx-auto">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="rounded-[20px] border border-white/10 bg-white/[0.03] p-[10px] flex flex-col"
        >
          {/* Creator image */}
          <SkeletonBlock
            className="mb-3 aspect-[4/3] w-full rounded-[10px]"
            stagger={(index % 3) + 1}
          />

          {/* 2-column footer grid matching ChromaGrid.jsx */}
          <div className="p-2 grid grid-cols-[1fr_auto] gap-x-3 gap-y-2">
            <SkeletonBlock className="h-5 w-3/4 rounded-md" stagger={1} />
            <SkeletonBlock className="h-5 w-16 rounded-md" stagger={2} />
            <SkeletonBlock className="h-4 w-2/3 rounded-md" stagger={2} />
            <SkeletonBlock className="h-4 w-14 rounded-md" stagger={3} />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Gallery Image Grid Skeleton matching Gallery.tsx & GalleryData.jsx (300x400 cards)
 */
export function GalleryGridSkeleton() {
  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full mx-auto">
      {Array.from({ length: 8 }).map((_, index) => (
        <SkeletonBlock
          key={index}
          className="w-[280px] sm:w-[300px] h-[380px] sm:h-[400px] rounded-2xl"
          stagger={(index % 4) + 1}
        />
      ))}
    </div>
  );
}

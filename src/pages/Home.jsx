import React, { lazy, Suspense } from 'react';
import {
  HeroSkeleton,
  InfiniteMenuSkeleton,
  VideoSkeleton,
  MusicSkeleton,
  VelocitySkeleton,
  CirclePhotoSkeleton,
  LoopSkeleton,
} from '@/components/skeletons/SectionSkeletons';

const Header = lazy(() => import('@/components/sections/Header'));
const Scroll = lazy(() => import('@/components/sections/Scroll'));
const Video = lazy(() => import('@/components/sections/Video'));
const Music = lazy(() => import('@/components/sections/Music'));
const Velocity = lazy(() => import('@/components/sections/Velocity'));
const CirclePhoto = lazy(() => import('@/components/sections/CirclePhoto'));
const Loop = lazy(() => import('@/components/sections/Loop'));

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Suspense fallback={<HeroSkeleton />}>
        <Header />
      </Suspense>

      <Suspense fallback={<InfiniteMenuSkeleton />}>
        <Scroll />
      </Suspense>

      <Suspense fallback={<VideoSkeleton />}>
        <Video />
      </Suspense>

      <Suspense fallback={<MusicSkeleton />}>
        <Music />
      </Suspense>

      <Suspense fallback={<VelocitySkeleton />}>
        <Velocity />
      </Suspense>

      <Suspense fallback={<CirclePhotoSkeleton />}>
        <CirclePhoto />
      </Suspense>

      <Suspense fallback={<LoopSkeleton />}>
        <Loop />
      </Suspense>
    </div>
  );
}

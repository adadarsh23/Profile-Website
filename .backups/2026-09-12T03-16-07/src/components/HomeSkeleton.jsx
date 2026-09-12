import React from 'react';
import {
  HeroSkeleton,
  InfiniteMenuSkeleton,
  VideoSkeleton,
  MusicSkeleton,
  VelocitySkeleton,
  CirclePhotoSkeleton,
  LoopSkeleton,
} from './skeletons/SectionSkeletons';

export default function HomeSkeleton() {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col overflow-hidden">
      <HeroSkeleton />
      <InfiniteMenuSkeleton />
      <VideoSkeleton />
      <MusicSkeleton />
      <VelocitySkeleton />
      <CirclePhotoSkeleton />
      <LoopSkeleton />
    </div>
  );
}

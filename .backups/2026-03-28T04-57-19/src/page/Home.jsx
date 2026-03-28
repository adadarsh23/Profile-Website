import React, { lazy, Suspense } from 'react';
import HomeSkeleton from '@/components/HomeSkeleton';

const Header = lazy(() => import('../Main/Header'));
const Scroll = lazy(() => import('../Main/Scroll'));
const Velocity = lazy(() => import('../Main/Velocity'));
const Loop = lazy(() => import('../Main/Loop'));
const Video1 = lazy(() => import('../Main/Video1'));
const Music1 = lazy(() => import('../Main/Music1'));
const CirclePhoto = lazy(() => import('../Main/CirclePhoto'));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<HomeSkeleton />}>
        <Header />
        <Scroll />
        <Video1 />
        <Music1 />
        <Velocity />
        <CirclePhoto />
        <Loop />
      </Suspense>
    </div>
  );
}

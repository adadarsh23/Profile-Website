import React, { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';

const Header = lazy(() => import('../Main/Header'));
const Scroll = lazy(() => import('../Main/Scroll'));
const Velocity = lazy(() => import('../Main/Velocity'));
const Loop = lazy(() => import('../Main/Loop'));
const Video1 = lazy(() => import('../Main/Video1'));
const Music1 = lazy(() => import('../Main/Music1'));
const CirclePhoto = lazy(() => import('../Main/CirclePhoto'));

export default function Home() {
  const handleHeaderAnimationComplete = () => {
    // Smoothly scroll down after the header animation is complete
    window.scrollTo({
      top: window.innerHeight * 0.0,
      behavior: 'smooth',
    });
  };

  return (
    <main>
      <Suspense fallback={<Loading />}>
        {/* <Suspense fallback={<HomeSkeleton />}> */}
        <Header onAnimationComplete={handleHeaderAnimationComplete} />
        <Scroll />
        <Video1 />
        <Music1 />
        <Velocity />
        <CirclePhoto />
        <Loop />
      </Suspense>
    </main>
  );
}

import React, { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';
// import HomeSkeleton from '@/components/HomeSkeleton';

const Header = lazy(() => import('../Main/Header'));
const Scroll = lazy(() => import('../Main/Scroll'));
const Velocity = lazy(() => import('../Main/Velocity'));
const Loop = lazy(() => import('../Main/Loop'));
// const Video = lazy(() => import('../Main/Video'));
const Video1 = lazy(() => import('../Main/Video1'));
// const Music = lazy(() => import('../Main/Music'));
const Music1 = lazy(() => import('../Main/Music1'));
const CirclePhoto = lazy(() => import('../Main/CirclePhoto'));

export default function Home() {
  // const [isLoaded, setIsLoaded] = useState(false);

  // Trigger scroll only after all components have loaded
  // useEffect(() => {
  //   if (isLoaded) {
  //     const timer = setTimeout(() => {
  //       window.scrollTo({
  //         top: window.innerHeight * 0.9,
  //         behavior: 'smooth',
  //       });
  //     }, 800); // short delay to ensure render complete
  //     return () => clearTimeout(timer);
  //   }
  // }, [isLoaded]);

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
        {/* <Video /> */}
        {/* <Music /> */}
        {/* Hidden element to mark when all components are done rendering */}
        {/* <div style={{ display: 'none' }} onLoad={() => setIsLoaded(true)}></div> */}
      </Suspense>
    </main>
  );
}

import React, { Suspense, lazy } from 'react';

// ✅ Lazy load components
const Header = lazy(() => import('../Main/Header'));
const Scroll = lazy(() => import('../Main/Scroll'));
const Loop = lazy(() => import('../Main/Loop'));
const Video = lazy(() => import('../Main/Video'));
const Music = lazy(() => import('../Main/Music'));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="text-center p-4">Loading section...</div>}>
        <Header />
        <Scroll />
        <Loop />
        <Video />
        <Music />
      </Suspense>
    </main>
  );
}

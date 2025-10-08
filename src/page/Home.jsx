import React, { lazy, Suspense, useEffect, useState } from "react";
import Loading from "@/components/Loading";

const Header = lazy(() => import("../Main/Header"));
const Scroll = lazy(() => import("../Main/Scroll"));
const Velocity = lazy(() => import("../Main/Velocity"));
const Loop = lazy(() => import("../Main/Loop"));
const Video = lazy(() => import("../Main/Video"));
const Music = lazy(() => import("../Main/Music"));
const CirclePhoto = lazy(() => import("../Main/CirclePhoto"));

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Trigger scroll only after all components have loaded
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight * 0.9,
          behavior: "smooth",
        });
      }, 800); // short delay to ensure render complete
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Header />
        <Scroll />
        <Velocity />
        <CirclePhoto />
        <Loop />
        <Video />
        <Music />
        {/* Hidden element to mark when all components are done rendering */}
        <div
          style={{ display: "none" }}
          onLoad={() => setIsLoaded(true)}
        ></div>
      </Suspense>
    </main>
  );
}

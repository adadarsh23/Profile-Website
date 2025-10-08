import React, { lazy, Suspense } from "react";
import Loading from "@/components/Loading";

const Header = lazy(() => import("../Main/Header"));
const Scroll = lazy(() => import("../Main/Scroll"));
const Velocity = lazy(() => import("../Main/Velocity"));
const Loop = lazy(() => import("../Main/Loop"));
const Video = lazy(() => import("../Main/Video"));
const Music = lazy(() => import("../Main/Music"));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <Header />
        <Scroll />
        <Velocity />
        <Loop />
        <Video />
        <Music />
      </Suspense>
    </main>
  );
}

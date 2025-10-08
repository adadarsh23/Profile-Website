import React, { lazy, Suspense, useState } from "react";
import Loading from "@/components/Loading";
import { AnimatePresence } from "framer-motion";
const Header = lazy(() => import("../Main/Header"));
const Scroll = lazy(() => import("../Main/Scroll"));
const Velocity = lazy(() => import("../Main/Velocity"));
const Loop = lazy(() => import("../Main/Loop"));
const Video = lazy(() => import("../Main/Video"));
const Music = lazy(() => import("../Main/Music"));
const CirclePhoto = lazy(() => import("../Main/CirclePhoto"));

export default function Home() {
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
      </Suspense>
    </main>
  );
}

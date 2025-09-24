import React, { lazy } from "react";
import LazyLoadSection from "../components/LazyLoadSection";
import Loading from "@/components/Loading";

// ✅ Lazy import
const Header = lazy(() => import("../Main/Header"));
const Scroll = lazy(() => import("../Main/Scroll"));
const Velocity = lazy(() => import("../Main/Velocity"));
const Loop = lazy(() => import("../Main/Loop"));
const Video = lazy(() => import("../Main/Video"));
const Music = lazy(() => import("../Main/Music"));

export default function Home() {
  return (
    <main>
      <LazyLoadSection fallback={<div><Loading/></div>}>
        <Header />
      </LazyLoadSection>

      <LazyLoadSection>
        <Scroll />
      </LazyLoadSection>

      <LazyLoadSection>
        <Velocity/>
      </LazyLoadSection>

      <LazyLoadSection>
        <Loop />
      </LazyLoadSection>

      <LazyLoadSection>
        <Video />
      </LazyLoadSection>

      <LazyLoadSection>
        <Music />
      </LazyLoadSection>
    </main>
  );
}

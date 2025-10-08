import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// ✅ import import WebSocketComponent from './WebSocketComponent'; // ✅ import

const SplashCursor = lazy(() => import('./components/SplashCursor'));
const Navbar = lazy(() => import("./Main/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

import Loading from './components/Loading';
const StatsigSetup = lazy(() => import('./StatsigSetup.jsx'));
const AnalyticsTracker = lazy(() => import("./AnalyticsTracker"));
const LazyLoadSection = lazy(() => import('./components/LazyLoadSection.jsx'));

// Lazy load pages
const Home = lazy(() => import('./page/Home.jsx'));
const About = lazy(() => import('./page/About.jsx'));
const Contact = lazy(() => import('./page/Contact.jsx'));
const Sample = lazy(() => import('./page/Sample.jsx'));
const Blog = lazy(() => import('./page/Blog.jsx'));
const NotFound = lazy(() => import('./page/NotFound.jsx'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // Defer monitoring initialization until after the first render
  useEffect(() => {
    if (import.meta.env.PROD) {
      import('./monitoring.js').then(({ initLogRocket, initSentry }) => {
        initLogRocket();
        initSentry();
      });
    }
  }, []);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <StatsigSetup>
        {/* ✅ Render WebSocketComponent once at top level */}
        {/* <WebSocketComponent /> */}

        <LazyLoadSection>
          <SplashCursor />
        </LazyLoadSection>
        <AnalyticsTracker />
        <LazyLoadSection>
          <Navbar />
        </LazyLoadSection>

        {/* Wrap routes in Suspense */}
        <Suspense fallback={<Loading />}>
          <LazyLoadSection>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sample" element={<Sample />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LazyLoadSection>
        </Suspense>

        {/* Footer stays at the bottom */}
        <Footer />
      </StatsigSetup>
    </Suspense>
  );
}

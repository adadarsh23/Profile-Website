import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import SplashCursor from './components/SplashCursor';
import Navbar from './Main/Navbar.jsx';
import Loading from './components/Loading';
import AnalyticsTracker from "./AnalyticsTracker";
import LazyLoadSection from './components/LazyLoadSection.jsx';

// ✅ Lazy load pages
const Home = lazy(() => import('./page/Home.jsx'));
const About = lazy(() => import('./page/About.jsx'));
const Contact = lazy(() => import('./page/Contact.jsx'));
const Sample = lazy(() => import('./page/Sample.jsx'));
const Blog = lazy(() => import('./page/Blog.jsx'));
const NotFound = lazy(() => import('./page/NotFound.jsx'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Navigation bar stays on top for all pages */}
      <LazyLoadSection>
        <SplashCursor />
      </LazyLoadSection>
      <AnalyticsTracker />
      <LazyLoadSection>
        <Navbar />
      </LazyLoadSection>

      {/* ✅ Wrap routes in Suspense */}
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
    </>
  );
}

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './assets/Âd Adarsh.png';
import PillNav from './components/PillNav';
import Footer from './components/Footer.jsx';
import SplashCursor from './components/SplashCursor';
import Loading from './components/Loading';

// ✅ Lazy load pages
const Home = lazy(() => import('./page/Home.jsx'));
const About = lazy(() => import('./page/About.jsx'));
const Contact = lazy(() => import('./page/Contact.jsx'));
const Blog = lazy(() => import('./page/Blog.jsx'));
const NotFound = lazy(() => import('./page/NotFound.jsx'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Navigation bar stays on top for all pages */}
      <SplashCursor />
      <nav className='absolute top-0 left-0 w-full p-4 z-50 flex justify-center items-center'>
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Blog', href: '/blog' }
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
        />
      </nav>

      {/* ✅ Wrap routes in Suspense */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      {/* Footer stays at the bottom */}
      <Footer />
    </>
  );
}

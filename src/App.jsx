import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './assets/Âd Adarsh.png';
import PillNav from './components/PillNav';
import Home from './page/Home.jsx';
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import Blog from './page/Blog.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './page/NotFound';
import SplashCursor from './components/SplashCursor';
import Loading from './components/Loading';

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

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer stays at the bottom */}
      <Footer />
    </>
  );
}
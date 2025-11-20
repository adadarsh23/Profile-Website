import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Adarsh.png';
const PillNav = lazy(() => import('../components/PillNav'));

export default function Navbar() {
  return (
    <motion.nav
      role="navigation"
      aria-label="Main"
      className="absolute top-0 left-0 w-full p-4 z-50 flex justify-center items-center"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <PillNav
        logo={logo}
        logoTitle="Adarsh"
        logoHref="/"
        logoAlt="Adarsh Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Sample', href: '/sample' },
          { label: 'Blog', href: '/blog' },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </motion.nav>
  );
}

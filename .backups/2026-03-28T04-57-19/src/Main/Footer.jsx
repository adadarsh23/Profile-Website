import React, { memo } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

// Animation variants can be defined outside the component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

// Data for social links
const socialLinks = [
  {
    href: 'https://github.com/adadarsh23',
    label: 'Github',
    icon: <FaGithub size={22} />,
  },
  {
    href: 'https://linkedin.com/in/adadarsh23',
    label: 'Linkedin',
    icon: <FaLinkedin size={22} />,
  },
  {
    href: 'https://twitter.com/adadarsh23',
    label: 'Twitter',
    icon: <FaSquareXTwitter size={22} />,
  },
];

const FooterCopyright = memo(() => (
  <motion.span
    className="text-sm text-gray-300 text-center md:text-left"
    variants={itemVariants}
  >
    &copy; {new Date().getFullYear() + 1} - Built by{' '}
    <a
      href="https://github.com/adadarsh23"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-semibold hover:text-gray-400"
    >
      Âd Adarsh
    </a>
    . All Rights Reserved.
  </motion.span>
));

const SocialLinks = memo(() => (
  <motion.div className="flex space-x-4" variants={itemVariants}>
    {socialLinks.map((link) => (
      <motion.a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400"
        aria-label={link.label}
        whileHover={{ y: -2, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {link.icon}
      </motion.a>
    ))}
  </motion.div>
));

const FooterBranding = memo(() => (
  <motion.div
    className="w-full flex mt-4 items-center justify-center"
    variants={itemVariants}
  >
    <h1
      className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-900 select-none"
      aria-hidden="true"
    >
      Âd Adarsh
    </h1>
  </motion.div>
));

const Footer = memo(function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <FooterCopyright />
          <SocialLinks />
        </div>
        <hr className="my-6 border-gray-700" />
        <motion.p
          className="text-xs text-gray-400 text-center"
          variants={itemVariants}
        >
          Designed with ❤️ by Ad Adarsh
        </motion.p>
      </div>
      <FooterBranding />
    </motion.footer>
  );
});

export default Footer;

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function Footer() {
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

  return (
    <motion.footer
      className="bg-black text-white py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className=" mt-10.5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <motion.span
            className="text-sm text-gray-300 text-center md:text-left"
            variants={itemVariants}
          >
            &copy; 2025 - Built by{' '}
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
          <motion.div className="flex space-x-4" variants={itemVariants}>
            <motion.a
              href="https://github.com/adadarsh23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="Github"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/adadarsh23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="Linkedin"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin size={22} />
            </motion.a>
            <motion.a
              href="https://twitter.com/adadarsh23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="Twitter"
              whileHover={{ y: -2, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSquareXTwitter size={22} />
            </motion.a>
          </motion.div>
        </div>
        <hr className="my-6 border-gray-700" />
        <motion.p
          className="text-xs text-gray-400 text-center"
          variants={itemVariants}
        >
          Designed with ❤️ by Ad Adarsh
        </motion.p>
      </div>
    </motion.footer>
  );
}

export default Footer;

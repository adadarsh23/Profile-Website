import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mt-10.5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <span className="text-sm text-gray-300 text-center md:text-left">
            © 2025 - Built by{' '}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-gray-400 transition-colors duration-300"
            >
              Ad Adarsh
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors duration-300"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-xs text-gray-400 text-center">
          Designed with ❤️ and React
        </p>
      </div>
    </footer>
  );
}

export default Footer;

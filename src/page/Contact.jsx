import React, { Suspense, lazy } from "react";
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Globe from 'react-globe.gl';
const Globe = lazy(() => import("react-globe.gl"));
import styles from "../Modules/bubble.module.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL;
  const globeEl = useRef();

  // Handle window resize
  const updateDimensions = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  useEffect(() => {
    if (globeEl.current && dimensions.width > 0) {
      // Set initial camera position over Delhi
      globeEl.current.pointOfView({
        lat: 28.692,
        lng: 76.76,
        altitude: isMobile ? 2.2 : 1.8
      }, 0);

      // Add slow rotation
      const controls = globeEl.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = isMobile ? 0.15 : 0.25;
        controls.enableZoom = false;
        controls.enablePan = false;
      }
    }
  }, [dimensions, isMobile]);

  // Enhanced bubble text component
  const BubbleText = () => (
    <motion.h2
      className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-white mb-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {"Contact Me".split("").map((char, idx) => (
        <span
          className={styles.hoverText}
          key={idx}
          style={{
            animationDelay: `${idx * 0.1}s`,
            display: char === ' ' ? 'inline' : 'inline-block'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </motion.h2>
  );
  const BubbleText1 = () => (
    <motion.h2 className="text-center text-3xl md:text-6xl font-thin text-white bg-black p-4 md:p-6 rounded-lg mb-8 md:mb-16"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {"Contact Form".split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </motion.h2>
  );

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Enhanced form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: 'application/json'
        },
        body: submitData
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');

      // Auto-hide error message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  // Form field configuration
  const formFields = [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Your full name',
      autoComplete: 'name'
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'your.email@example.com',
      autoComplete: 'email'
    },
    {
      name: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'What is this about?',
      autoComplete: 'off'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const globeVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // Calculate globe dimensions for side layout
  const getGlobeDimensions = () => {
    if (isMobile) {
      return {
        width: dimensions.width,
        height: dimensions.height * 0.4
      };
    }
    return {
      width: dimensions.width * 0.5,
      height: dimensions.height
    };
  };

  const globeDimensions = getGlobeDimensions();

  return (
    <div className=" min-h-screen bg-black text-white overflow-hidden">
      {/* Mobile Layout - Stack vertically */}
      {isMobile ? (
        <div className="flex flex-col">
          {/* Globe Section - Top */}
          <motion.div
            className="relative h-[40vh] w-full "
            variants={globeVariants}
            initial="hidden"
            animate="visible"
          >
            {dimensions.width > 0 && (
              <Suspense fallback={<div className="text-center p-6">🌍 Loading Globe...</div>}>
                <Globe
                ref={globeEl}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                backgroundColor="rgba(0,0,0,1)"
                width={globeDimensions.width}
                height={globeDimensions.height}
                showGlobe={true}
                showAtmosphere={true}
                atmosphereColor="#3b82f6"
                atmosphereAltitude={0.12}
              />
              </Suspense>
            )}
            {/* Gradient overlay for smooth transition */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
          </motion.div>

          {/* Form Section - Bottom */}
          <motion.div
            className="flex-1 px-4 py-6 bg-black"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="max-w-md mx-auto">
              <BubbleText />

              <motion.form
                className="space-y-5"
                onSubmit={handleSubmit}
                variants={containerVariants}
              >
                {formFields.map((field) => (
                  <motion.div key={field.name} variants={itemVariants}>
                    <label className="block text-gray-300 font-medium mb-2 text-sm">
                      {field.label}
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <motion.input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      required
                      disabled={loading}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                ))}

                <motion.div variants={itemVariants}>
                  <label className="block text-gray-300 font-medium mb-2 text-sm">
                    Message
                    <span className="text-red-400 ml-1">*</span>
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full p-3 border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    required
                    disabled={loading}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading || !FORMSPREE_URL}
                  className={`
    w-full bg-gray-900 text-white p-3 rounded-lg font-medium transition-all duration-300
    ${loading || !FORMSPREE_URL
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-700 hover:shadow-lg transform hover:scale-105'
                    }
  `}
                  variants={itemVariants}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>


                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`
                        text-center p-3 rounded-lg text-sm
                        ${status === 'success'
                          ? 'bg-green-900 bg-opacity-50 text-green-300 border border-green-500'
                          : 'bg-red-900 bg-opacity-50 text-red-300 border border-red-500'
                        }
                      `}
                    >
                      {status === 'success' ? (
                        <div className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Message sent successfully!
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Something went wrong. Please try again.
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            </div>
          </motion.div>
        </div>
      ) : (
        /* Desktop Layout - Side by side */

        <div className="mt-20">
          {/* Globe Section - Left Side */}
          <BubbleText1 />
          <div className="flex h-screen mt-10 mb-30">
            {/* Globe Section - Left Side */}
            <motion.div
              className="w-1/2 relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-black"
              variants={globeVariants}
              initial="hidden"
              animate="visible"
            >
              {dimensions.width > 0 && (
                <Suspense fallback={<div className="text-center p-6">🌍 Loading Globe...</div>}>
                  <Globe
                  ref={globeEl}
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                  backgroundColor="rgba(0,0,0,0)"
                  width={globeDimensions.width}
                  height={globeDimensions.height}
                  showGlobe={true}
                  showAtmosphere={true}
                  atmosphereColor="#3b82f6"
                  atmosphereAltitude={0.15}
                />
                </Suspense>
              )}

              {/* Floating info cards */}
              <motion.div
                className="absolute bottom-10 left-10 bg-black bg-opacity-70 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">Let's Connect</h3>
                <p className="text-gray-300 text-sm">
                  Ready to discuss your next project? <br />
                  Fill out the form and let's make it happen!
                </p>
              </motion.div>
            </motion.div>

            {/* Form Section - Right Side */}
            <motion.div
              className="w-1/2 flex items-center justify-center bg-black p-8 lg:p-12 "
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="w-full max-w-lg">

                <motion.form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  variants={containerVariants}
                >
                  {formFields.map((field) => (
                    <motion.div key={field.name} variants={itemVariants}>
                      <label className="block text-gray-300 font-medium mb-2">
                        {field.label}
                        <span className="text-red-400 ml-1">*</span>
                      </label>
                      <motion.input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        autoComplete={field.autoComplete}
                        className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        required
                        disabled={loading}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  ))}

                  <motion.div variants={itemVariants}>
                    <label className="block text-gray-300 font-medium mb-2">
                      Message
                      <span className="text-red-400 ml-1">*</span>
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full p-4 border border-gray-600 rounded-lg bg-gray-900 bg-opacity-50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      required
                      disabled={loading}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={loading || !FORMSPREE_URL}
                    className={`
    w-full bg-gradient-to-r from-black to-gray-700 text-white p-4 rounded-lg font-medium text-lg transition-all duration-300
    ${loading || !FORMSPREE_URL
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:from-gray-800 hover:to-gray-600 hover:shadow-xl transform hover:scale-105'
                      }
  `}
                    variants={itemVariants}
                    whileTap={{ scale: 0.98 }}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>


                  {/* Status Messages */}
                  <AnimatePresence mode="wait">
                    {status && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`
                        text-center p-4 rounded-lg
                        ${status === 'success'
                            ? 'bg-green-900 bg-opacity-50 text-green-300 border border-green-500'
                            : 'bg-red-900 bg-opacity-50 text-red-300 border border-red-500'
                          }
                      `}
                      >
                        {status === 'success' ? (
                          <div className="flex items-center justify-center">
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Message sent successfully! I'll get back to you soon.
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Oops! Something went wrong. Please try again.
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Environment warning */}
                  {!FORMSPREE_URL && (
                    <motion.p
                      className="text-yellow-400 text-sm text-center bg-yellow-900 bg-opacity-20 p-3 rounded border border-yellow-500"
                      variants={itemVariants}
                    >
                      ⚠️ Formspree URL not configured. Please add VITE_FORMSPREE_URL to your environment variables.
                    </motion.p>
                  )}
                </motion.form>
              </div>
            </motion.div>

          </div>
        </div>
      )}
    </div>
  );
}
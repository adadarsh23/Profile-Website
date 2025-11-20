import React, { Suspense, lazy, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import styles from '../Modules/bubble.module.css';
// import ThreeBackground from "../components/ThreeBackground";
const Map = lazy(() => import('../components/Map'));
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    import('../Modules/bubble.module.css')
      .then((s) => setStyles(s.default))
      .catch((err) => console.error('Failed to load bubble styles', err));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const result = await response.json();
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    }

    setLoading(false);
  };

  const BubbleText = () => {
    if (!styles) return null;
    return (
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {'Get In Touch'.split('').map((char, idx) => (
          <span className={styles.hoverText} key={idx}>
            {char}
          </span>
        ))}
      </motion.h2>
    );
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const formItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  const formFields = [
    { id: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { id: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      props: { rows: 5, className: 'resize-none' },
    },
  ];

  const FormInput = ({ id, label, type, autoComplete, props = {} }) => (
    <div className="flex flex-col">
      <label htmlFor={id} className="block font-medium mb-1 text-gray-700">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          required
          className={`w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-black outline-none transition-all ${props.className}`}
          {...props}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          name={id}
          required
          className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-black outline-none transition-all"
          autoComplete={autoComplete}
          {...props}
        />
      )}
    </div>
  );

  return (
    <div
      className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-12 py-12
                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
                overflow-hidden"
    >
      {/* 3D background layer */}
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <Map
          interactive={false}
          className="absolute inset-0 w-full h-full z-10"
          height="100%"
        />
      </Suspense>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <BubbleText />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-xl relative z-10 backdrop-blur-md bg-opacity-90"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-green-600 font-semibold text-lg sm:text-xl"
            >
              ✅ Thank you for reaching out! We’ll get back to you soon.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              variants={formContainerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="flex flex-col space-y-5"
            >
              {formFields.map((field) => (
                <motion.div key={field.id} variants={formItemVariants}>
                  <FormInput {...field} />
                </motion.div>
              ))}

              {/* Submit */}
              <motion.div
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <button type="submit" disabled className="w-full h-full flex items-center justify-center">
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  </button>
                ) : (
                  <button type="submit" className="w-full h-full">Send</button>
                )}
              </motion.div>

              {/* Error */}
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-center mt-2 text-sm sm:text-base"
                >
                  {error}
                </motion.p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

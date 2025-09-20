import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../Modules/bubble.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const result = await response.json();
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  const BubbleText = () => (
    <motion.h2
      className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white p-4 sm:p-6 mb-8 md:mb-12 z-10 drop-shadow-lg"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {"Get In Touch".split("").map((char, idx) => (
        <span className={styles.hoverText} key={idx}>
          {char}
        </span>
      ))}
    </motion.h2>
  );

  return (
   <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center
                px-4 sm:px-6 md:px-12 py-12
                mt-10 mx-4 sm:mx-6 md:mx-12 lg:mx-16
                overflow-hidden">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-5"
            >
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="block font-medium mb-1 text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="block font-medium mb-1 text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-black outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="block font-medium mb-1 text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-black focus:ring-2 focus:ring-black outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
              >
                Send
              </motion.button>

              {/* Error */}
              {error && (
                <p className="text-red-600 text-center mt-2 text-sm sm:text-base">{error}</p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

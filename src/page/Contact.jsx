import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../Modules/bubble.module.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  // Handle form submission without redirect
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

  // Animated bubble heading
  const BubbleText = () => (
    <motion.h2
      className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white p-6 mb-12 z-10 drop-shadow-lg"
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
    <div className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-12 overflow-hidden mt-10 md:mt-20 md:px-0 mb-10">
      <BubbleText />

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white text-black p-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.7)] w-[90%] max-w-lg relative z-10 backdrop-blur-lg bg-opacity-95"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-green-600 font-semibold text-lg"
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
              <div>
                <label htmlFor="name" className="block font-semibold">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full p-3 rounded-lg border border-gray-400 bg-white text-black focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full p-3 rounded-lg border border-gray-400 bg-white text-black focus:ring-2 focus:ring-black outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full p-3 rounded-lg border border-gray-400 bg-white text-black focus:ring-2 focus:ring-black outline-none"
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all"
              >
                Send
              </motion.button>

              {/* Error message */}
              {error && <p className="text-red-600 text-center mt-2">{error}</p>}
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

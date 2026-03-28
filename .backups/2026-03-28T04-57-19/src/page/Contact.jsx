import React, { Suspense, lazy, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from '@/components/Loading';

const Map = lazy(() => import('../components/Map'));

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

function BubbleText({ styles }) {
  if (!styles) return null;

  return (
    <motion.h2
      className="z-10 mb-6 p-4 text-center text-3xl font-light text-white drop-shadow-lg sm:p-6 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {'Get In Touch'.split('').map((char, idx) => (
        <span className={styles.hoverText} key={`${char}-${idx}`}>
          {char}
        </span>
      ))}
    </motion.h2>
  );
}

function FormInput({ id, label, type, autoComplete, props = {}, error }) {
  const sharedProps = {
    id,
    name: id,
    required: true,
    'aria-describedby': error ? 'contact-form-status' : undefined,
    'aria-invalid': Boolean(error),
    className:
      'w-full rounded-xl border border-gray-300 bg-white p-3 text-black outline-none transition-all focus:border-black focus:ring-2 focus:ring-black',
    ...props,
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 block font-medium text-gray-800">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea {...sharedProps} />
      ) : (
        <input {...sharedProps} type={type} autoComplete={autoComplete} />
      )}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [styles, setStyles] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import('../Modules/bubble.module.css')
      .then((module) => {
        if (isMounted) {
          setStyles(module.default);
        }
      })
      .catch((importError) => {
        console.error('Failed to load bubble styles', importError);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage('');
    setLoading(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const endpoint = import.meta.env.VITE_FORMSPREE_URL;

    try {
      if (!endpoint) {
        throw new Error('Contact form is not configured right now.');
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(
          result.error ||
            'Your message could not be sent right now. Please try again.'
        );
      }

      setSubmitted(true);
      setSuccessMessage(
        "Thank you for reaching out. I'll get back to you soon."
      );
      form.reset();
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'Network error. Please check your connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative mx-4 mt-10 flex min-h-screen flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-black px-4 py-12 text-white sm:mx-6 sm:px-6 md:mx-12 md:px-12 lg:mx-16"
      aria-labelledby="contact-heading"
    >
      <Suspense
        fallback={
          <Loading
            fullscreen={false}
            label="Loading map"
            className="absolute inset-0 min-h-full rounded-none"
          />
        }
      >
        <Map
          interactive={false}
          className="absolute inset-0 z-10 h-full w-full"
          height="100%"
          showLabel={false}
        />
      </Suspense>

      <div className="absolute inset-0 z-0 bg-black/60" />

      <BubbleText styles={styles} />
      <p className="relative z-10 mb-8 max-w-2xl text-center text-sm leading-7 text-white/80 sm:text-base">
        Share your idea, collaboration request, or feedback. The form is kept
        intentionally simple so you can reach out quickly on any device.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-xl rounded-[2rem] bg-white/95 p-6 text-black shadow-2xl backdrop-blur-md sm:p-8 md:p-10"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-lg font-semibold text-green-700 sm:text-xl"
              id="contact-form-status"
              role="status"
              aria-live="polite"
            >
              {successMessage}
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
              noValidate
            >
              <div className="space-y-2 text-center sm:text-left">
                <h1
                  id="contact-heading"
                  className="text-3xl font-semibold text-black"
                >
                  Let&apos;s talk
                </h1>
                <p className="text-sm leading-6 text-black/70">
                  I usually reply with the next best step, estimated timeline,
                  or the right way to continue the conversation.
                </p>
              </div>

              {formFields.map((field) => (
                <motion.div key={field.id} variants={formItemVariants}>
                  <FormInput {...field} error={error} />
                </motion.div>
              ))}

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center rounded-xl bg-black px-5 py-3 font-semibold text-white transition-colors hover:bg-gray-900 disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                  {loading ? (
                    <>
                      <svg
                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending message...
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
              </motion.div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-sm text-red-700 sm:text-base"
                  id="contact-form-status"
                  role="alert"
                >
                  {error}
                </motion.p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

import React, { useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { socialLinks } from '../Data/socialLinks.jsx';

const InfiniteMenu = lazy(() => import('../components/InfiniteMenu'));

export default function Scroll() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
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

  return (
    <motion.section
      ref={ref}
      className="bg-black"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="pt-10">
        <Suspense fallback={null}>
          <InfiniteMenu items={socialLinks} />
        </Suspense>
      </motion.div>
    </motion.section>
  );
}

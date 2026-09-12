import React, { useRef, lazy, Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { socialLinks } from '@/data/socialLinks.jsx';
import { InfiniteMenuSkeleton } from '@/components/skeletons/SectionSkeletons';

const InfiniteMenu = lazy(() => import('@/components/InfiniteMenu'));

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
      className="relative w-full bg-black py-4 sm:py-6 md:py-8 overflow-hidden min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[700px] h-[75vh] max-h-[850px] flex flex-col justify-center items-center"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
      aria-label="Interactive 3D social links sphere"
    >
      <motion.div
        variants={itemVariants}
        className="relative w-full h-full flex-1 flex flex-col items-center justify-center"
      >
        <Suspense fallback={<InfiniteMenuSkeleton />}>
          <InfiniteMenu items={socialLinks} />
        </Suspense>
      </motion.div>
    </motion.section>
  );
}

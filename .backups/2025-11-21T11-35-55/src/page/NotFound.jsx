import Loading from '@/components/Loading';
import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// ✅ Lazy load FuzzyText
const FuzzyText = lazy(() => import('../components/FuzzyText'));

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-4 bg-black text-white w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center">
        <motion.span
          className="block text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-black"
          variants={itemVariants}
        >
          <Suspense
            fallback={
              <span>
                <Loading />
              </span>
            }
          >
            <FuzzyText
              baseIntensity={1}
              hoverIntensity={1}
              enableHover={true}
              fontSize={200}
              fontWeight={500}
            >
              404
            </FuzzyText>
          </Suspense>
        </motion.span>
      </div>
    </motion.div>
  );
}

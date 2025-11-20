import { lazy, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
const ScrollVelocity = lazy(() => import('../components/ScrollVelocity'));

const texts = [
  'Beat Maker',
  'Track Producer',
  'Mixing & Mastering',
  'Studio Vibes',
];

export default function Velocity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <motion.div ref={ref} className="overflow-hidden flex flex-col space-y-10" variants={containerVariants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
      <ScrollVelocity
        texts={texts}
        velocity={100}
        className="relative overflow-hidden text-7xl font-bold sm:text-7xl md:text-7xl lg:text-7xl text-white p-4 sm:p-6 z-10 drop-shadow-lg"
      />
    </motion.div>
  );
}

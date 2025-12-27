import { lazy, Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loading from './Loading';
const Dialog09 = lazy(() => import('./Dialog09'));

export default function SocialShare() {
  const [isMobile, setIsMobile] = useState(false);
  const [shareUrl, setShareUrl] = useState('');

  useEffect(() => {
    setShareUrl(window.location.href);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: isMobile ? '20px' : '120px',
        zIndex: 48,
      }}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Suspense fallback={<Loading />}>
        <Dialog09
          shareUrl={shareUrl}
          platforms={[
            'twitter',
            'facebook',
            'linkedin',
            'whatsapp',
            'reddit',
            'telegram',
            'email',
          ]}
        />
      </Suspense>
    </motion.div>
  );
}

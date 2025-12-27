import { lazy, Suspense, useEffect, useState } from 'react';
const Loading = lazy(() => import('./Loading'));

const SocialShare = lazy(() => import('./SocialShare'));

export default function WebShare() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const getScrollY = () =>
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = getScrollY();
        setVisible((prev) => {
          const shouldShow = scrollY > 150; // lower threshold for mobile
          return prev !== shouldShow ? shouldShow : prev;
        });
        ticking = false;
      });
    };

    // 🔹 Mobile browsers rely heavily on touch events
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <Suspense fallback={<Loading />}>
      <SocialShare />
    </Suspense>
  );
}

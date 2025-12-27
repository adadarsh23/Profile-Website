import { lazy, Suspense, useEffect, useState } from 'react';

const Loading = lazy(() => import('./Loading'));
const SocialShare = lazy(() => import('./SocialShare'));

/**
 * Cross-device scroll visibility hook
 * - Works on mobile, tablet, desktop
 * - Uses requestAnimationFrame for performance
 * - Handles dynamic viewport heights
 */
function useScrollVisibility(
  threshold = 120,
  offsetRatio = 0
): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let ticking = false;

    const getScrollY = () =>
      window.scrollY ??
      window.pageYOffset ??
      document.documentElement.scrollTop ??
      0;

    const getEffectiveThreshold = () => {
      if (offsetRatio > 0) {
        return window.innerHeight * offsetRatio;
      }
      return threshold;
    };

    const updateVisibility = () => {
      const scrollY = getScrollY();
      const effectiveThreshold = getEffectiveThreshold();
      setIsVisible(scrollY > effectiveThreshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    // Initial check (important for refresh / deep links)
    updateVisibility();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [threshold, offsetRatio]);

  return isVisible;
}

export default function WebShare() {
  /**
   * 120px OR 15% of viewport height (whichever applies)
   * Mobile friendly and responsive
   */
  const visible = useScrollVisibility(120, 0.15);

  if (!visible) return null;

  return (
    <Suspense fallback={<Loading />}>
      <SocialShare />
    </Suspense>
  );
}

import { lazy, Suspense, useEffect, useState } from 'react';
import Loading from './Loading';
const SocialShare = lazy(() => import('./SocialShare'));

export default function WebShare() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Suspense fallback={<Loading />}>
      <SocialShare />
    </Suspense>
  );
}

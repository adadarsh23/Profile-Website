import { lazy, Suspense } from 'react';
import Loading from './Loading';
const SocialShare = lazy(() => import('./SocialShare'));

export default function WebShare() {
  return (
    <Suspense fallback={<Loading />}>
      <SocialShare />
    </Suspense>
  );
}

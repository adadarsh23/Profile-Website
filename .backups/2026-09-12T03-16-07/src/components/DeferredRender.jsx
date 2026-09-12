import { useEffect, useState } from 'react';

export default function DeferredRender({
  children,
  timeout = 1200,
  fallback = null,
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let timeoutId;
    let idleId;

    const reveal = () => setIsReady(true);

    if (typeof window === 'undefined') {
      reveal();
      return undefined;
    }

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(reveal, { timeout });
    } else {
      timeoutId = window.setTimeout(reveal, timeout);
    }

    return () => {
      if (idleId) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [timeout]);

  if (!isReady) return fallback;

  // aria-live="polite" lets screen-readers announce when deferred content
  // arrives without interrupting whatever the user is currently reading.
  return (
    <div aria-live="polite" aria-atomic="false" style={{ display: 'contents' }}>
      {children}
    </div>
  );
}

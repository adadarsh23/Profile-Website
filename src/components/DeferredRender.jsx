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

  return isReady ? children : fallback;
}

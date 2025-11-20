// monitoring.js
import * as Sentry from '@sentry/react';
import LogRocket from 'logrocket'; // ✅ Use ES module build for modern bundlers

const LOGROCKET_APP_ID = import.meta.env.VITE_LOGROCKET_APP_ID;
const LOGROCKET_USER_ID = import.meta.env.VITE_LOGROCKET_USER_ID;
const LOGROCKET_USER_NAME = import.meta.env.VITE_LOGROCKET_USER_NAME;
const LOGROCKET_USER_EMAIL = import.meta.env.VITE_LOGROCKET_USER_EMAIL;

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
const TRACES_SAMPLE_RATE = parseFloat(
  import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE || '1.0'
);

// --- Initialize LogRocket ---
export function initLogRocket() {
  if (import.meta.env.PROD && LOGROCKET_APP_ID) {
    LogRocket.init(LOGROCKET_APP_ID);

    if (LOGROCKET_USER_ID) {
      LogRocket.identify(LOGROCKET_USER_ID, {
        name: LOGROCKET_USER_NAME || undefined,
        email: LOGROCKET_USER_EMAIL || undefined,
      });
    }
  }
}

// --- Initialize Sentry ---
export function initSentry() {
  if (import.meta.env.PROD && SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      tracesSampleRate: TRACES_SAMPLE_RATE,
    });
  }
}

export { Sentry };

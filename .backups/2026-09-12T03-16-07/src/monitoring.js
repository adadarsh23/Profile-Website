const LOGROCKET_APP_ID = import.meta.env.VITE_LOGROCKET_APP_ID;
const LOGROCKET_USER_ID = import.meta.env.VITE_LOGROCKET_USER_ID;
const LOGROCKET_USER_NAME = import.meta.env.VITE_LOGROCKET_USER_NAME;
const LOGROCKET_USER_EMAIL = import.meta.env.VITE_LOGROCKET_USER_EMAIL;

const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;

// Default 0.2 (20 %) to keep transaction quota manageable in prod.
// Override via VITE_SENTRY_TRACES_SAMPLE_RATE in .env if needed.
const TRACES_SAMPLE_RATE = parseFloat(
  import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE || '0.2'
);

export async function initLogRocket() {
  if (!import.meta.env.PROD || !LOGROCKET_APP_ID) {
    return;
  }

  const { default: LogRocket } = await import('logrocket');
  LogRocket.init(LOGROCKET_APP_ID);

  if (LOGROCKET_USER_ID) {
    LogRocket.identify(LOGROCKET_USER_ID, {
      name: LOGROCKET_USER_NAME || undefined,
      email: LOGROCKET_USER_EMAIL || undefined,
    });
  }
}

export async function initSentry() {
  if (!import.meta.env.PROD || !SENTRY_DSN) {
    return;
  }

  const Sentry = await import('@sentry/react');

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: import.meta.env.MODE, // 'production' | 'staging' | 'development'
    tracesSampleRate: TRACES_SAMPLE_RATE,
    integrations: [
      // Session Replay: record 10 % of normal sessions, 100 % on error.
      // Masks all text/inputs by default for privacy.
      Sentry.replayIntegration({
        maskAllText: true,
        blockAllMedia: false,
      }),
    ],
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });

  // Expose the client on window so ErrorBoundary can call captureException
  // synchronously without another async import.
  if (typeof window !== 'undefined') {
    window.__SENTRY_CLIENT__ = Sentry;
  }
}

export async function initMonitoring() {
  await Promise.allSettled([initLogRocket(), initSentry()]);
}

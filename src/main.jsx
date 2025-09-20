import "./utils/Three.js"
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import LogRocket from 'logrocket';

// Read from environment variables
const LOGROCKET_APP_ID = import.meta.env.VITE_LOGROCKET_APP_ID;
const LOGROCKET_USER_ID = import.meta.env.VITE_LOGROCKET_USER_ID;
const LOGROCKET_USER_NAME = import.meta.env.VITE_LOGROCKET_USER_NAME;
const LOGROCKET_USER_EMAIL = import.meta.env.VITE_LOGROCKET_USER_EMAIL;

// Initialize LogRocket in production
if (import.meta.env.PROD && LOGROCKET_APP_ID) {
  LogRocket.init(LOGROCKET_APP_ID);

  // Optional: identify users
  LogRocket.identify(LOGROCKET_USER_ID, {
    name: LOGROCKET_USER_NAME,
    email: LOGROCKET_USER_EMAIL,
  });
}

// Read DSN and trace rate from environment variables
const SENTRY_DSN = import.meta.env.VITE_SENTRY_DSN;
const TRACES_SAMPLE_RATE = parseFloat(import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE || '1.0');

if (import.meta.env.PROD) {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    integrations: [new BrowserTracing()],
    tracesSampleRate: parseFloat(import.meta.env.VITE_SENTRY_TRACES_SAMPLE_RATE || '1.0'),
  });
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Sentry.ErrorBoundary fallback={<p className='error-message'>Something went wrong.</p>}>
        <App />
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);

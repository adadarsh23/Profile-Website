import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Sentry } from './monitoring.js';
// --- Render React app ---
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Sentry.ErrorBoundary
        fallback={
          <p className="flex flex-col items-center justify-center min-h-screen text-center text-lg font-medium text-red-500 bg-black">
            <span className="text-2xl mb-2">⚠️</span>
            <span className="font-bold">Something went wrong.</span>
            <span className="text-base text-gray-400 mt-1">The website may be broken due to a critical error. Please try refreshing the page.</span>
          </p>
        }
      >
        <App />
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);

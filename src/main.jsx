import { StrictMode} from 'react';
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
          <p className="flex items-center justify-center min-h-screen text-center text-lg font-medium text-red-600">
            Something went wrong.Refresh the page.
          </p>
        }
      >
        <App />
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  </StrictMode>
);

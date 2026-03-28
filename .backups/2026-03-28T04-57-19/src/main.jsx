import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { initGA } from './analytics.js';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);

if (import.meta.env.PROD) {
  import('./monitoring.js')
    .then(({ initMonitoring }) => initMonitoring())
    .catch((error) => {
      console.error('Monitoring initialization failed:', error);
    });

  initGA();
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

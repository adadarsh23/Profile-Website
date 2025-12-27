import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { initLogRocket, initSentry } from './monitoring.js';
import { initGA } from './analytics.js';

const container = document.getElementById('root');
const root = createRoot(container);

// Ensure React is loaded before rendering
if (!React.Children) {
  console.error(
    'React.Children is not available - React not properly initialized'
  );
  throw new Error('React initialization failed');
}

// Initialize monitoring and analytics services for production
if (import.meta.env.PROD) {
  initLogRocket();
  initSentry();
  initGA();
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

// Ensure React is loaded before rendering
if (!React.Children) {
  console.error(
    'React.Children is not available - React not properly initialized'
  );
  throw new Error('React initialization failed');
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

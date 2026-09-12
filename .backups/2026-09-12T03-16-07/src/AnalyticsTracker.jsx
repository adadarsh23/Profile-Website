import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPage } from './analytics.js';

export default function AnalyticsTracker() {
  const location = useLocation();

  // initGA() is called once in main.jsx at app boot (prod only).
  // Only track route changes here to avoid duplicate initialisation.
  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return null;
}

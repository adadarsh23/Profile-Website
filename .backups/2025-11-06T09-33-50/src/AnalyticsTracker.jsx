import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPage } from './analytics.js';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPage(location.pathname);
  }, [location]);

  return null;
}

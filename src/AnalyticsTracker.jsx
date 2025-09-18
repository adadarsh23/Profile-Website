import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPage } from "./analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    initGA(); // Initialize once
  }, []);

  useEffect(() => {
    trackPage(location.pathname); // Track each route change
  }, [location]);

  return null;
}

import ReactGA from 'react-ga4';

// Read GA4 ID from environment variables
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;

export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('GA4 Measurement ID is not defined in .env');
    return;
  }
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPage = (path) => {
  if (!GA_MEASUREMENT_ID) return;
  ReactGA.send({ page: path });
};

import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-X34L2QSKRG"); // replace with your GA4 Measurement ID
};

export const trackPage = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

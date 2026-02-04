import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-MN6ZSXE16X';

export const initGA = () => {
    // If no ID is provided (e.g. still placeholder), we might want to warn or just initialization.
    // ReactGA handles empty or invalid IDs gracefully usually, but good to be explicit.
    ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = () => {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

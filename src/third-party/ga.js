import ReactGA from "react-ga4";

const GA_ENABLED =
  process.env.REACT_APP_GA_ENABLE === "true" &&
  process.env.REACT_APP_GA_TRACKING_ID;
const GA_TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;

export const initGA = () => {
  if (GA_ENABLED) {
    ReactGA.initialize(GA_TRACKING_ID);
  } else {
    console.log("Google Analytics disabled");
  }
};

export const logPageView = () => {
  if (GA_ENABLED) {
    const page = window.location.pathname + window.location.search;
    ReactGA.send({ hitType: "pageview", page });
  } else {
    console.log("GA page view not tracked");
  }
};

export const trackEvent = ({ category, action, label, value }) => {
  if (GA_ENABLED) {
    ReactGA.event({ category, action, label, value });
  } else {
    console.log(`Event not tracked: ${action}`);
  }
};

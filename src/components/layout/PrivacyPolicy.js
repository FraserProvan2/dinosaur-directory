import React, { useState, useEffect } from "react";

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPolicy = localStorage.getItem("hasSeenPrivacyPolicy");

    if (!hasSeenPolicy) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("hasSeenPrivacyPolicy", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="privacy-banner">
      <p>We use minimal, anonymous data to improve the app. No sign-ups, no tracking.</p>
      <button className="btn btn-light btn-sm" onClick={handleDismiss}>Got it</button>
    </div>
  );
};

export default PrivacyPolicy;

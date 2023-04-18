import React, { useState, useEffect } from 'react';

const LoadingPage = () => {
  const [showGradient, setShowGradient] = useState(false);

  useEffect(() => {
    // Show the gradient after a short delay
    const timeoutId = setTimeout(() => {
      setShowGradient(true);
    }, 500);

    // Clear the timeout if the component is unmounted or the delay changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const gradientStyle = {
    backgroundColor: 'rgb(251,193,161)',
    background: showGradient ? 'linear-gradient(180deg, rgba(251,193,161,1) 0%, rgba(255,122,47,0.22454919467787116) 100%)' : 'rgb(251,193,161)',
    transition: 'background 2s ease-in-out',
  };

  return (
    <div className="loading-page" style={gradientStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#ffffff"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingPage;

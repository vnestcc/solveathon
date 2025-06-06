import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="aboutus-container">
        <div className="aboutus-mobile-top">
          <div className="aboutus-image-placeholder"></div>
        </div>
        <div className="aboutus-mobile-bottom">
          <h2 className="aboutus-heading">ABOUT US</h2>
          <p className="aboutus-text">
            Solve-a-thon is a flagship event of V-NEST that empowers students to ideate, innovate and implement impactful startup solutions. It's more than a hackathon – it's a launchpad for change.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aboutus-container">
      <div className="aboutus-card">
        <div className="aboutus-left">
          <h2 className="aboutus-heading">ABOUT US</h2>
          <p className="aboutus-text">
            Solve-a-thon is a flagship event of V-NEST that empowers students to ideate, innovate and implement impactful startup solutions. It's more than a hackathon – it's a launchpad for change.
          </p>
        </div>
        <div className="aboutus-right">
          <div className="aboutus-image-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 
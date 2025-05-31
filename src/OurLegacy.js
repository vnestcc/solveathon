import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurLegacy.css';

// Import local images
import gallery1 from './assets/img1.JPG';
import gallery2 from './assets/img2.JPG';
import gallery3 from './assets/img4.JPG';

import legacy1 from './assets/img1.JPG';
import legacy2 from './assets/img2.JPG';
import legacy3 from './assets/img3.JPG';
import legacy4 from './assets/img4.JPG';
import legacy5 from './assets/img1.JPG';
import legacy6 from './assets/img2.JPG';
import legacy7 from './assets/img3.JPG';
import legacy8 from './assets/img4.JPG';

const OurLegacy = () => {
  const [selectedYear, setSelectedYear] = useState('2024');

  const galleryImages = [gallery1, gallery2, gallery3];

  const legacyImages = [
    legacy1,
    legacy2,
    legacy3,
    legacy4,
    legacy5,
    legacy6,
    legacy7,
    legacy8,
  ];

  const winners2024 = [
    { position: '1st', name: 'John Doe', team: 'Team Alpha' },
    { position: '2nd', name: 'Jane Smith', team: 'Team Beta' },
    { position: '3rd', name: 'Mike Johnson', team: 'Team Gamma' }
  ];

  const winners2023 = [
    { position: '1st', name: 'Sarah Wilson', team: 'Team Delta' },
    { position: '2nd', name: 'Chris Brown', team: 'Team Epsilon' },
    { position: '3rd', name: 'Emma Davis', team: 'Team Zeta' }
  ];

  const currentWinners = selectedYear === '2024' ? winners2024 : winners2023;

  return (
    <div className="our-legacy">
      {/* Header */}
      <header className="header">
        <div className="logo">SOLVE-A-THON</div>
        <nav className="nav">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT US</a>
          <Link to="/pre-event-info">PRE-EVENTS</Link>
          <a href="#legacy" className="active">OUR LEGACY</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Legacy Section */}
        <section className="legacy-section">
          <h1 className="legacy-title">OUR LEGACY</h1>
          <p className="legacy-subtitle">
            Explore the highlights from previous editions of the Solve-<br />
            a-thon hackathon organized by V-NEST
          </p>

          {/* Horizontal Scrolling Legacy Section */}
          <div className="legacy-scroll-wrapper">
            <div className="legacy-scroll-track">
              {[...legacyImages, ...legacyImages].map((img, index) => (
                <div key={index} className="legacy-item">
                  <img src={img} alt={`Legacy ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats and Winners Section - Replaced */}
        <section className="stats-section">
          <div className="year-buttons">
            <button
              className={`year-btn ${selectedYear === '2024' ? 'active' : ''}`}
              onClick={() => setSelectedYear('2024')}
            >
              SOLVE-A-THON 2024
            </button>
            <button
              className={`year-btn ${selectedYear === '2023' ? 'active' : ''}`}
              onClick={() => setSelectedYear('2023')}
            >
              SOLVE-A-THON 2023
            </button>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon trophy-icon"></div>
              <div className="stat-label">WINNERS</div>
              <div className="stat-number">3</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon people-icon"></div>
              <div className="stat-label">PARTICIPANTS</div>
              <div className="stat-number">350+</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon clipboard-icon"></div>
              <div className="stat-label">REGISTRATIONS</div>
              <div className="stat-number">500+</div>
            </div>
          </div>

          <div className="winners-section">
            <div className="timeline">
              {currentWinners.map((winner, index) => (
                <div key={index} className="position-circle">
                  {winner.position}
                </div>
              ))}
            </div>
            <div className="winners-grid">
              {currentWinners.map((winner, index) => (
                <div key={index} className="winner-box">
                  <div className="winner-name">
                    {winner.name}<br />{winner.team}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2 className="gallery-title">GALLERY</h2>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurLegacy;

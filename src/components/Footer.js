import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLegacyClick = (e) => {
    e.preventDefault(); // Prevent default link behavior since component doesn't exist yet
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-title">Quick Link</h3>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
                <li><a href="#pre-events" onClick={(e) => { e.preventDefault(); scrollToSection('pre-events'); }}>Pre-Events</a></li>
                <li><a href="#posters" onClick={(e) => { e.preventDefault(); scrollToSection('posters'); }}>Posters</a></li>
                <li><a href="#legacy" onClick={handleLegacyClick}>Our Legacy</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-links">
                <li><a href="#linkedin">LinkedIn</a></li>
                <li><a href="#discord">Discord</a></li>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#email">Email</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-title">Latest</h3>
              <ul className="footer-links">
                <li><a href="#event1">Event 1</a></li>
                <li><a href="#event2">Event 2</a></li>
                <li><a href="#event3">Event 3</a></li>
                <li><a href="#announcement">Announcement</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-right">
            <div className="placeholder-box"></div>
            <button className="back-to-top" onClick={scrollToTop}>
              Back to top
              <span className="back-to-top-icon">↗</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 VNEST</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
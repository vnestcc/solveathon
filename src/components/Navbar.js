import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  // const handleLegacyClick = (e) => {
  //   e.preventDefault(); // Prevent default link behavior since component doesn't exist yet
  //   setMenuOpen(false);
  // };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={process.env.PUBLIC_URL + '/solveathon.webp'} alt="Solve-a-thon Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">SOLVE-A-THON</span>
        </div>
        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>HOME</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>ABOUT US</a>
          <a href="#pre-events" onClick={(e) => { e.preventDefault(); scrollToSection('pre-events'); }}>PRE-EVENTS</a>
          <a href="#posters" onClick={(e) => { e.preventDefault(); scrollToSection('posters'); }}>POSTERS</a>
          <Link to={"/our-legacy"}>OUR LEGACY</Link>
        </div>
        <div className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
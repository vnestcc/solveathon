import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">
          Welcome to our <br />
          <span className="hero__highlight">Global Education<br />Consultancy Services</span>
        </h1>
        <p className="hero__subtitle">
          Join the annual Solve-a-thon by V-NEST and turn your ideas into startups.
        </p>
        <a href="https://solveathon.devfolio.co/"  target="_blank" className="hero__button">REGISTER NOW</a>
      </div>
      {/* <div className="hero__vertical-border"></div> */}
      <div className="hero__visual">
        <div className="hero__pattern">
          <div className="pattern-rect pattern-rect--1"></div>
          <div className="pattern-rect pattern-rect--2"></div>
          <div className="pattern-rect pattern-rect--3"></div>
        </div>
        <img src={process.env.PUBLIC_URL + '/ChatGPT Image May 26, 2025, 08_03_54 PM.webp'} loading="lazy" alt="Graduate Girl" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero; 

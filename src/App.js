import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PreEventsSection from './components/PreEventsSection';
import Poster from './components/Poster';
import Footer from './components/Footer';
import PreEventInfo from './components/PreEventInfo';
import OurLegacy from "./OurLegacy";
import './App.css';
// import SolveAThon from './components/SolveAThonTabs';

// Main page component
const MainPage = () => {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="pre-events">
        <PreEventsSection />
      </div>
      <div id="posters">
        <Poster />
      </div>
      {/* <div id="solveathon">
        <SolveAThon/>
      </div> */}
      <Footer />
    </>
  );
};

// Event info page component
const EventInfoPage = () => {
  return (
    <PreEventInfo />
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/event/:eventId" element={<EventInfoPage />} />
          <Route path="/our-legacy" element={<OurLegacy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
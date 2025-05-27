import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PreEventsSection from './components/PreEventsSection';
import Poster from './components/Poster';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}

export default App;
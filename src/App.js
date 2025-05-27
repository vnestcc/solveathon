// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurLegacy from "./OurLegacy";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OurLegacy />} /> {/* Default route */}
        <Route path="/our-legacy" element={<OurLegacy />} />
       \
      </Routes>
    </Router>
  );
}

export default App;

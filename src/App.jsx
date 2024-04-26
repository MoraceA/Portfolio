import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About/About.jsx';
import Home from './Pages/Home/Home.jsx';
import Contact from './Pages/Contact/ContactForm.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import SoleSwap from './Pages/Projects/SoleSwap.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/soleswap" element={<SoleSwap />} />
      </Routes>
    </Router>
  );
}

export default App;

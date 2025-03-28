import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Journals from './pages/Journals';
import Articles from './pages/Articles';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;

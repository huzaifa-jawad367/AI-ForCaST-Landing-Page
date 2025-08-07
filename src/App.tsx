import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AppPreview from './components/AppPreview';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import WhoIsItFor from './components/WhoIsItFor';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPage from './components/PrivacyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/" element={
          <div className="bg-gray-900 text-white">
            <Hero />
            <AppPreview />
            <HowItWorks />
            <Features />
            <WhoIsItFor />
            <Privacy />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
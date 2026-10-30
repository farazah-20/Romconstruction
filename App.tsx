import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/legal/Impressum';
import Datenschutz from './components/legal/Datenschutz';

import RouteHead from './components/RouteHead';
import ConsentBanner from './components/ConsentBanner';
import { LanguageProvider } from './contexts/LanguageContext';

// Scrollt bei Navigation zum Anker (z. B. /#about) bzw. nach oben.
function ScrollToHash() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      // Kurz warten, bis die Startseite gerendert ist.
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: key === 'default' ? 'auto' : 'smooth' });
  }, [pathname, hash, key]);

  return null;
}

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Appointment />
    </main>
  );
}

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-rom-white font-sans selection:bg-rom-black selection:text-white">
        <ScrollToHash />
        <RouteHead />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <ConsentBanner />
      </div>
    </LanguageProvider>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/legal/Impressum';
import Datenschutz from './components/legal/Datenschutz';
import AGB from './components/legal/AGB';

import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'impressum': return <Impressum />;
      case 'datenschutz': return <Datenschutz />;
      case 'agb': return <AGB />;
      default:
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
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-rom-white font-sans selection:bg-rom-black selection:text-white">
        <Header onNavigate={(view) => setCurrentView(view)} />
        {renderView()}
        <Footer onNavigate={(view) => setCurrentView(view)} />
      </div>
    </LanguageProvider>
  );
}

export default App;
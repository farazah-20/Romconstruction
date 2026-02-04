import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-rom-white font-sans selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
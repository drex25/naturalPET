import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Combos from './components/Combos';
import Guide from './components/Guide';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Combos />
      <Guide />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Combos from './components/Combos';
import Testimonials from './components/Testimonials';
import Guide from './components/Guide';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga de recursos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 6 segundos para que coincida con el LoadingScreen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Combos />
      <Testimonials />
      <Guide />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
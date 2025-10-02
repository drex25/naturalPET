import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import LoadingScreen from './components/LoadingScreen';

// Lazy load components for better performance
const AboutUs = lazy(() => import('./components/AboutUs'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Combos = lazy(() => import('./components/Combos'));
const Stats = lazy(() => import('./components/Stats'));
const Grooming = lazy(() => import('./components/Grooming'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Guide = lazy(() => import('./components/Guide'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga de recursos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Ajustado para coincidir con el LoadingScreen optimizado

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Hero />
      
      {/* Lazy loaded components with Suspense */}
      <Suspense fallback={<LoadingSpinner />}>
        <AboutUs />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <WhyChooseUs />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Combos />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Stats />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Grooming />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Guide />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}

export default App;
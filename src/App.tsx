import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoadingSpinner from './components/LoadingSpinner';
import LoadingScreen from './components/LoadingScreen';
import ChangeNoticeModal from './components/ChangeNoticeModal';

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
  const [isNoticeOpen, setIsNoticeOpen] = useState(false);
  
  // Configuración del aviso: cambiar version para forzar que se muestre nuevamente
  const NOTICE_VERSION = 'v1-2025-10-20';
  const MAX_SHOWS_PER_DAY = 3; // máximo de veces por día

  const todayKey = (): string => {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  };

  type NoticeSeen = { version: string; day: string; count: number };

  const getSeenData = (): NoticeSeen | null => {
    try {
      const raw = localStorage.getItem('changeNoticeSeen');
      if (!raw) return null;
      const data = JSON.parse(raw) as NoticeSeen;
      if (typeof data?.version !== 'string') return null;
      if (typeof data?.day !== 'string') return null;
      if (typeof data?.count !== 'number') return null;
      return data;
    } catch {
      return null;
    }
  };

  const shouldShowNotice = (): boolean => {
    const data = getSeenData();
    // Si no hay datos, mostrar
    if (!data) return true;
    // Si la versión cambió, mostrar
    if (data.version !== NOTICE_VERSION) return true;
    // Si es otro día, reinicia y mostrar
    if (data.day !== todayKey()) return true;
    // Si aún no se alcanzó el máximo del día, mostrar
    if (data.count < MAX_SHOWS_PER_DAY) return true;
    // Ya alcanzó el máximo hoy: no mostrar
    return false;
  };

  const persistNoticeSeen = () => {
    const data = getSeenData();
    const currentDay = todayKey();
    const next: NoticeSeen = {
      version: NOTICE_VERSION,
      day: currentDay,
      count:
        data && data.version === NOTICE_VERSION && data.day === currentDay
          ? Math.min(data.count + 1, MAX_SHOWS_PER_DAY)
          : 1,
    };
    localStorage.setItem('changeNoticeSeen', JSON.stringify(next));
  };

  useEffect(() => {
    // Simular tiempo de carga de recursos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000); // Ajustado para coincidir con el LoadingScreen optimizado

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const params = new URLSearchParams(window.location.search);
      const forceShow = params.get('showNotice') === '1';
      if (forceShow) {
        setIsNoticeOpen(true);
        return;
      }

      if (shouldShowNotice()) {
        setIsNoticeOpen(true);
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-black min-h-screen">
      <ChangeNoticeModal
        isOpen={isNoticeOpen}
        onClose={() => {
          persistNoticeSeen();
          setIsNoticeOpen(false);
        }}
      />
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
import React, { useState, useEffect } from 'react';
import logo from '../assets/logo natural.png';

const LoadingScreen: React.FC = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  const phrases = [
    "¿Sabías que puedes darle a tu mascota la calidad de vida que necesita y merece?",
    "Bienvenido a NaturalPET..."
  ];

  useEffect(() => {
    // Mostrar logo después de 500ms
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 500);

    // Cambiar frase cada 3 segundos para dar más tiempo de lectura
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);

    // Ocultar loader después de 8 segundos para asegurar que se vean ambas frases
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(phraseInterval);
      clearTimeout(hideTimeout);
    };
  }, [phrases.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[999999] flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#96BE11] rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#EF9202] rounded-full animate-ping opacity-75 delay-700"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#96BE11] rounded-full animate-ping opacity-75 delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#F4D03F] rounded-full animate-ping opacity-75 delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#EF9202] rounded-full animate-ping opacity-75 delay-300"></div>
        
        {/* Gradient circles */}
        <div className="absolute top-20 left-10 w-16 h-16 border border-[#F4D03F]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 border border-[#EF9202]/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-6 h-6 border border-[#F4D03F]/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-3/4 right-5 w-8 h-8 border border-[#96BE11]/20 rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo with spectacular animation */}
        <div className={`mb-8 transition-all duration-1000 ${showLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="animate-bounce-slow loader-glow">
            <img 
              src={logo} 
              alt="Natural Pet" 
              className="h-24 w-auto drop-shadow-2xl animate-pulse-glow"
            />
          </div>
        </div>

        {/* Loading spinner with multiple rings */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-20 h-20 border-4 border-[#96BE11]/20 rounded-full animate-spin"></div>
            {/* Middle ring */}
            <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-[#EF9202] rounded-full animate-spin-reverse"></div>
            {/* Inner ring */}
            <div className="absolute top-2 left-2 w-16 h-16 border-4 border-transparent border-r-[#F4D03F] rounded-full animate-spin"></div>
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#96BE11] to-[#EF9202] rounded-full animate-pulse-glow"></div>
          </div>
        </div>

        {/* Phrase with spectacular fade animation */}
        <div className="h-12 flex items-center justify-center mb-4">
          <p className="text-[#96BE11] text-xl font-medium loader-text-glow animate-fade-in">
            {phrases[currentPhrase]}
          </p>
        </div>

        {/* Progress bar with gradient */}
        <div className="mt-8 w-80 mx-auto">
          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-[#96BE11] via-[#EF9202] to-[#F4D03F] h-3 rounded-full transition-all duration-500 ease-out animate-pulse-glow"
              style={{ 
                width: `${((currentPhrase + 1) / phrases.length) * 100}%` 
              }}
            ></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center space-x-3">
          <div className="w-3 h-3 bg-[#96BE11] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-[#EF9202] rounded-full animate-pulse delay-200"></div>
          <div className="w-3 h-3 bg-[#F4D03F] rounded-full animate-pulse delay-400"></div>
          <div className="w-3 h-3 bg-[#96BE11] rounded-full animate-pulse delay-600"></div>
        </div>
      </div>

      {/* Bottom text with glow effect */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-gray-400 text-sm loader-text-glow">
          Cargando experiencia NaturalPET...
        </p>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-8 left-8 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border border-[#F4D03F]/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse delay-1500"></div>
    </div>
  );
};

export default LoadingScreen; 
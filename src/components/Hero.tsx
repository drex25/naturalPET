import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from './OptimizedImage';

// Optimized image imports with proper naming
import heroImageSrc from '../assets/naturalpet-perros-gatos-felices-nutricion-natural.jpg';
import portadaImageSrc from '../assets/naturalpet-soluciones-nutricionales-mascotas.png';

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const images = [
    { 
      src: heroImageSrc, 
      alt: "Perros y gatos felices con nutrición natural NaturalPET - Primera tienda naturista para mascotas en Posadas",
      srcSet: `
        ${heroImageSrc.replace('.jpg', '-400w.jpg')} 400w,
        ${heroImageSrc.replace('.jpg', '-800w.jpg')} 800w,
        ${heroImageSrc.replace('.jpg', '-1200w.jpg')} 1200w,
        ${heroImageSrc.replace('.jpg', '-1600w.jpg')} 1600w
      `,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    },
    { 
      src: portadaImageSrc, 
      alt: "Soluciones nutricionales naturales para mascotas - Combos premium NaturalPET",
      srcSet: `
        ${portadaImageSrc.replace('.png', '-400w.png')} 400w,
        ${portadaImageSrc.replace('.png', '-800w.png')} 800w,
        ${portadaImageSrc.replace('.png', '-1200w.png')} 1200w
      `,
      sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
    }
  ];

  useEffect(() => {
    // Cambiar imagen cada 4 segundos
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    // Función para activar animaciones
    const activateAnimations = () => {
      const elements = [badgeRef.current, titleRef.current, subtitleRef.current, buttonsRef.current, statsRef.current, imageRef.current];
      elements.forEach((ref, index) => {
        if (ref) {
          setTimeout(() => {
            ref.classList.add('animate-in');
          }, index * 200);
        }
      });
    };

    // Activar animaciones inmediatamente para el Hero
    activateAnimations();

    // También observar para scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = [badgeRef.current, titleRef.current, subtitleRef.current, buttonsRef.current, statsRef.current, imageRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearInterval(imageInterval);
      observer.disconnect();
    };
  }, [images.length]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-24 overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              srcSet={image.srcSet}
              sizes={image.sizes}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full h-full object-cover"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Gradient overlay for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#96BE11] rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#EF9202] rounded-full animate-ping opacity-75 delay-700"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-[#96BE11] rounded-full animate-ping opacity-75 delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#F4D03F] rounded-full animate-ping opacity-75 delay-500"></div>
        
        {/* Gradient circles */}
        <div className="absolute top-20 left-10 w-16 sm:w-24 h-16 sm:h-24 border border-[#F4D03F]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-12 sm:w-16 h-12 sm:h-16 border border-[#EF9202]/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-6 sm:w-8 h-6 sm:h-8 border border-[#F4D03F]/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div 
            ref={badgeRef}
            className="inline-flex items-center px-4 py-2 bg-[#EF9202]/20 border border-[#EF9202]/30 rounded-full mb-8 scroll-animate"
          >
            <div className="w-2 h-2 bg-[#EF9202] rounded-full mr-3 animate-pulse"></div>
            <span className="text-[#EF9202] font-medium text-sm tracking-wide">Primera tienda naturista para mascotas</span>
          </div>

          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-bebas uppercase scroll-animate"
          >
            ¡NUTRIMOS SU{' '}
            <span className="text-[#EF9202]">
              NATURALEZA!
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl mx-auto font-light scroll-animate"
          >
            Porque tu mascota merece una vida plena, saludable y feliz junto a vos y tu familia multiespecie.
          </p>

          {/* CTA Buttons */}
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 scroll-animate"
          >
            <a
              href="#combos"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 text-white font-semibold rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#96BE11]/25 overflow-hidden text-sm sm:text-base animate-pulse-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#96BE11] to-[#EF9202] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 flex items-center">
                Ver Soluciones Nutricionales
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#sobre-nosotros"
              className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#EF9202] text-[#EF9202] hover:bg-[#EF9202] hover:text-black font-semibold rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#EF9202]/25 text-sm sm:text-base"
            >
              <span className="flex items-center">
                Conocenos
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Stats with enhanced animations */}
          <div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto scroll-animate"
          >
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold text-[#96BE11] mb-2 font-bebas group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-gray-300 text-xs sm:text-sm tracking-wide">Natural</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold text-[#EF9202] mb-2 font-bebas group-hover:scale-110 transition-transform duration-300">+500</div>
              <div className="text-gray-300 text-xs sm:text-sm tracking-wide">Mascotas Felices</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl sm:text-3xl font-bold text-[#96BE11] mb-2 font-bebas group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-300 text-xs sm:text-sm tracking-wide">Asesoramiento</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Image Section */}
      <div 
        ref={imageRef}
        className="absolute bottom-8 right-8 hidden lg:block card-animate"
      >
        <div className="relative">
          <div className="bg-gradient-to-br from-[#96BE11]/20 to-[#EF9202]/10 rounded-2xl p-4 backdrop-blur-sm border border-[#96BE11]/30">
            <OptimizedImage
              src={portadaImageSrc}
              alt="Catálogo de productos naturales NaturalPET - Suplementos y alimentos para mascotas"
              className="w-32 h-32 object-cover rounded-xl shadow-2xl"
              loading="lazy"
              width={128}
              height={128}
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#96BE11] to-[#EF9202] text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg">
              ¡Natural!
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/50 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 border border-[#EF9202]/50 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
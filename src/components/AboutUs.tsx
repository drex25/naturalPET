import React, { useEffect, useRef, useState } from 'react';
import heroImage from '../assets/foto-hero.jpg';
import portadaImage from '../assets/portada.png';

const AboutUs: React.FC = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const listItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Si es el contenedor de lista, animar los elementos hijos
            if (entry.target === listItemsRef.current) {
              const listItems = entry.target.querySelectorAll('.list-item-animate');
              listItems.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('animate-in');
                }, index * 150);
              });
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = [titleRef.current, contentRef.current, imageRef.current, listItemsRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre-nosotros" className="py-20 bg-black relative overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Natural Pet Background"
          className="w-full h-full object-cover opacity-20 transform scale-110"
        />
        <div className="absolute inset-0 bg-black/80"></div>
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#96BE11]/10 via-transparent to-[#EF9202]/10 animate-pulse-slow"></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#96BE11] rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#EF9202] rounded-full animate-ping opacity-75 delay-700"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#96BE11] rounded-full animate-ping opacity-75 delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#F4D03F] rounded-full animate-ping opacity-75 delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-white leading-tight font-bebas uppercase scroll-animate"
              >
                LA PRIMERA TIENDA{' '}
                <span className="text-[#96BE11]">
                  NATURISTA
                </span>{' '}
                PARA MASCOTAS
              </h2>
              <div 
                ref={contentRef}
                className="space-y-4 text-lg text-gray-300 leading-relaxed scroll-animate"
              >
                <p className="animate-fade-in">
                  En <span className="text-[#96BE11] font-semibold">Natural Pet</span>, la primera tienda naturista para mascotas, asumimos el compromiso de lograr su bienestar integral y calidad de vida a través de la prevención de manera sostenible.
                </p>
                <p className="animate-fade-in">
                  Te ofrecemos una gran diversidad de combos seleccionados con el objetivo de garantizar una nutrición práctica, sostenible y saludable para tu mascota. Siempre con toda la información y capacitación de profesionales multidisciplinarios que necesitas para poder elegir lo mejor y optimizar el vínculo con tu compañero.
                </p>
                <p className="animate-fade-in">
                  Nuestras <span className="text-[#EF9202] font-semibold">Soluciones Nutricionales</span> están diseñadas a través de una selección de alimentos, suplementos, snacks, dentales y productos de higiene y prevención basados en nutrientes e ingredientes de calidad y con fórmulas elaboradas por veterinarios e ingenieros en alimentos que, combinados, le brindan a tu mascota la vida feliz y saludable que necesita y merece, así como practicidad para vos como tutor o tutora.
                </p>
              </div>
            </div>

            <div ref={listItemsRef} className="space-y-6">
              <div className="flex items-start space-x-4 list-item-animate group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#96BE11]/20 rounded-lg flex items-center justify-center group-hover:bg-[#96BE11]/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#96BE11] transition-colors duration-300">Nutrición Completa</h3>
                  <p className="text-gray-400">El concepto de completo y balanceado en los alimentos nunca es suficiente para una verdadera nutrición saludable.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 list-item-animate group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EF9202]/20 rounded-lg flex items-center justify-center group-hover:bg-[#EF9202]/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#EF9202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#EF9202] transition-colors duration-300">Diversidad Nutricional</h3>
                  <p className="text-gray-400">En la diversidad está la clave, al igual que la necesidad de humedad en los alimentos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 list-item-animate group">
                <div className="flex-shrink-0 w-12 h-12 bg-[#96BE11]/20 rounded-lg flex items-center justify-center group-hover:bg-[#96BE11]/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#96BE11] transition-colors duration-300">Asesoramiento Profesional</h3>
                  <p className="text-gray-400">Con nuestro asesoramiento gratuito podrás aprender a alimentar de manera saludable y sostenible a tu mascota.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                Visítanos
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div 
            ref={imageRef}
            className="relative card-animate"
          >
            <div 
              className={`relative bg-gradient-to-br from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 backdrop-blur-sm bg-white/5 transition-all duration-500 ${
                isImageHovered ? 'scale-105 shadow-2xl shadow-[#96BE11]/20' : ''
              }`}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              <img
                src={portadaImage}
                alt="Natural Pet - Soluciones Nutricionales"
                className="w-full h-auto rounded-xl shadow-2xl transition-all duration-500"
              />
              
              {/* Link a catálogo */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <a
                  href="https://wa.me/c/5493764518346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-[#96BE11] to-[#EF9202] hover:from-[#EF9202] hover:to-[#96BE11] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center animate-pulse-glow"
                >
                  <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Soluciones Nutricionales
                </a>
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#96BE11]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-[#EF9202]/20 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -right-2 w-4 h-4 border border-[#F4D03F]/40 rounded-full animate-pulse delay-1000"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-[#96BE11]/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#96BE11]">100%</div>
                <div className="text-xs text-gray-400">Natural</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-[#EF9202]/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#EF9202]">+500</div>
                <div className="text-xs text-gray-400">Felices</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
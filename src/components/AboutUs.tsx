import React, { useEffect, useRef } from 'react';
import heroImage from '../assets/foto-hero.jpg';
import portadaImage from '../assets/portada.png';

const AboutUs: React.FC = () => {
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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Natural Pet Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 
                ref={titleRef}
                className="text-4xl md:text-5xl font-bold text-white leading-tight font-serif scroll-animate"
              >
                La primera tienda{' '}
                <span className="text-[#96BE11]">naturista</span> para mascotas
              </h2>
              <div 
                ref={contentRef}
                className="space-y-4 text-lg text-gray-300 leading-relaxed scroll-animate"
              >
                <p>
                  En Natural Pet, la primera tienda naturista para mascotas, asumimos el compromiso de lograr su bienestar integral y calidad de vida a través de la prevención de manera sostenible.
                </p>
                <p>
                  Te ofrecemos una gran diversidad de combos seleccionados con el objetivo de garantizar una nutrición práctica, sostenible y saludable para tu mascota. Siempre con toda la información y capacitación de profesionales multidisciplinarios que necesitas para poder elegir lo mejor y optimizar el vínculo con tu compañero.
                </p>
                <p>
                  Nuestras Soluciones Nutricionales están diseñadas a través de una selección de alimentos, suplementos, snacks, dentales y productos de higiene y prevención basados en nutrientes e ingredientes de calidad y con fórmulas elaboradas por veterinarios e ingenieros en alimentos que, combinados, le brindan a tu mascota la vida feliz y saludable que necesita y merece, así como practicidad para vos como tutor o tutora.
                </p>
              </div>
            </div>

            <div ref={listItemsRef} className="space-y-6">
              <div className="flex items-start space-x-4 list-item-animate">
                <div className="flex-shrink-0 w-12 h-12 bg-[#96BE11]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Nutrición Completa</h3>
                  <p className="text-gray-400">El concepto de completo y balanceado en los alimentos nunca es suficiente para una verdadera nutrición saludable.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 list-item-animate">
                <div className="flex-shrink-0 w-12 h-12 bg-[#EF9202]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#EF9202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Diversidad Nutricional</h3>
                  <p className="text-gray-400">En la diversidad está la clave, al igual que la necesidad de humedad en los alimentos.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 list-item-animate">
                <div className="flex-shrink-0 w-12 h-12 bg-[#96BE11]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Asesoramiento Profesional</h3>
                  <p className="text-gray-400">Con nuestro asesoramiento gratuito podrás aprender a alimentar de manera saludable y sostenible a tu mascota.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Visítanos
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div 
            ref={imageRef}
            className="relative card-animate"
          >
            <div className="relative bg-gradient-to-br from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 backdrop-blur-sm bg-white/5">
              <img
                src={portadaImage}
                alt="Natural Pet - Soluciones Nutricionales"
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#96BE11] to-[#EF9202] text-white px-6 py-3 rounded-lg font-semibold shadow-lg">
                Soluciones Nutricionales
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#96BE11]/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-[#EF9202]/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
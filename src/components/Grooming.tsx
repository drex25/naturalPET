import React from 'react';
import { useEffect, useRef } from 'react';
import servicioImage from '../assets/servicio.jpeg';

const Grooming: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const elements = [headerRef.current, contentRef.current, imageRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="peluqueria" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#96BE11] rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#EF9202] rounded-full animate-ping opacity-75 delay-700"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#96BE11] rounded-full animate-ping opacity-75 delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#F4D03F] rounded-full animate-ping opacity-75 delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div 
            ref={contentRef}
            className="space-y-8 scroll-animate"
          >
            {/* Header Section */}
            <div 
              ref={headerRef}
              className="space-y-6 scroll-animate"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-[#96BE11]/20 border border-[#96BE11]/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#96BE11] rounded-full mr-3 animate-pulse"></div>
                <span className="text-[#96BE11] font-semibold text-sm tracking-wide uppercase">Servicio Premium</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif">
                BAÑO ECOLÓGICO Y{' '}
                <span className="text-[#96BE11] bg-gradient-to-r from-[#96BE11] to-[#EF9202] bg-clip-text text-transparent animate-pulse-glow">
                  PELUQUERÍA CANINA
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl text-gray-300 leading-relaxed">
                Nuestra propuesta está basada en el cuidado de tu peludo desde el profesionalismo de nuestro estilista canino y productos de higiene{' '}
                <span className="text-[#96BE11] font-semibold">100% naturales</span>{' '}
                que cuidan el pelaje de tu perro y nutren su piel sin efectos adversos.
              </p>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  { icon: '🐕', text: 'Estilista canino profesional', color: 'from-[#96BE11] to-[#96BE11]/90' },
                  { icon: '🌿', text: 'Productos 100% naturales', color: 'from-[#EF9202] to-[#EF9202]/90' },
                  { icon: '✨', text: 'Cuidado del pelaje y nutrición de la piel', color: 'from-[#F4D03F] to-[#F4D03F]/90' },
                  { icon: '🛡️', text: 'Sin efectos adversos', color: 'from-[#96BE11] to-[#EF9202]' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => {
                  const message = "Hola! Me gustaría consultar sobre el servicio de baño ecológico y peluquería canina. ¿Podrían ayudarme?";
                  const whatsappUrl = `https://wa.me/3764137294?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="group bg-gradient-to-r from-[#96BE11] to-[#EF9202] hover:from-[#EF9202] hover:to-[#96BE11] text-white font-semibold px-10 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 inline-flex items-center justify-center shadow-2xl hover:shadow-[#96BE11]/25 animate-pulse-glow text-lg"
              >
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Solicitar Servicio
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-6 border border-[#96BE11]/20 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-[#96BE11]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-white font-semibold">¿Por qué elegir nuestro servicio?</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Combinamos técnicas profesionales con productos naturales para garantizar el mejor cuidado para tu mascota, respetando su piel y pelaje de forma natural.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div 
            ref={imageRef}
            className="relative scroll-animate"
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-[#96BE11]/10 to-[#EF9202]/5 rounded-3xl p-4 backdrop-blur-sm border border-[#96BE11]/20 shadow-2xl shadow-[#96BE11]/10 group-hover:shadow-[#96BE11]/20 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={servicioImage}
                    alt="Baño ecológico y peluquería canina - NaturalPET"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#96BE11] to-[#EF9202] text-white px-6 py-3 rounded-xl font-semibold shadow-lg animate-pulse-glow">
                  <div className="flex items-center space-x-2">
                    <span>🌿</span>
                    <span>100% Natural</span>
                  </div>
                </div>

                {/* Bottom Info Badge */}
                <div className="absolute -bottom-4 -left-4 bg-black/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl border border-[#96BE11]/30">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#96BE11] rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Servicio Profesional</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-[#96BE11]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-8 h-8 border-2 border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
              <div className="absolute top-1/2 -left-4 w-6 h-6 border border-[#F4D03F]/40 rounded-full animate-pulse delay-1000"></div>

              {/* Floating Stats */}
              <div className="absolute top-8 -left-8 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-[#96BE11]/30 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#96BE11] mb-1">100%</div>
                  <div className="text-xs text-gray-400">Ecológico</div>
                </div>
              </div>

              <div className="absolute bottom-8 -right-8 bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-[#EF9202]/30 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#EF9202] mb-1">Pro</div>
                  <div className="text-xs text-gray-400">Estilista</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 border border-[#96BE11]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              Tu peludo merece el mejor cuidado
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Agenda una cita y descubre la diferencia de un servicio profesional con productos 100% naturales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = "Hola! Me gustaría agendar una cita para el servicio de baño ecológico y peluquería canina.";
                  const whatsappUrl = `https://wa.me/3764137294?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-pulse-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h8m-8 0H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
                </svg>
                Agendar Cita
              </button>
              <a
                href="#contacto"
                className="border-2 border-[#EF9202] text-[#EF9202] hover:bg-[#EF9202] hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Más Información
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grooming; 
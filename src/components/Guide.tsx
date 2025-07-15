import React, { useEffect, useRef } from 'react';

const Guide: React.FC = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "No más cocinar",
      description: "Olvídate de preparar comidas complicadas. Nuestros productos están listos para servir."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#EF9202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fácil de implementar",
      description: "Transición gradual y sin complicaciones. Tu mascota se adaptará naturalmente."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Saludable y natural",
      description: "Nutrición que fortalece el sistema inmunológico y mejora la calidad de vida."
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta inicial",
      description: "Evaluamos las necesidades específicas de tu mascota"
    },
    {
      number: "02",
      title: "Plan personalizado",
      description: "Diseñamos un plan nutricional adaptado a tu mascota"
    },
    {
      number: "03",
      title: "Transición gradual",
      description: "Implementamos el cambio de manera suave y natural"
    },
    {
      number: "04",
      title: "Seguimiento continuo",
      description: "Acompañamos el proceso y ajustamos según sea necesario"
    }
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    const elements = [headerRef.current, benefitsRef.current, stepsRef.current, ctaRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="guia" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-16 scroll-animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Guía <span className="text-[#96BE11]">Práctica</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo hacer la transición a una alimentación natural de manera simple y efectiva
          </p>
        </div>

        {/* Benefits Section */}
        <div 
          ref={benefitsRef}
          className="mb-20 scroll-animate"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            ¿Por qué elegir alimentación natural?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center card-animate"
              >
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div ref={stepsRef}>
          <h3 className="text-2xl font-bold text-white text-center mb-12 scroll-animate">
            Nuestro proceso en 4 pasos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative card-animate"
              >
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-[#96BE11] transition-all duration-300">
                  <div className="text-4xl font-bold text-[#96BE11] mb-4">{step.number}</div>
                  <h4 className="text-lg font-semibold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#EF9202]/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="text-center mt-16 scroll-animate"
        >
          <div className="bg-gradient-to-r from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 border border-[#96BE11]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nuestros expertos están listos para guiarte en este proceso. 
              La primera consulta es gratuita y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = "Hola! Me gustaría agendar una consulta gratuita para mi mascota. ¿Podrían ayudarme?";
                  const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consulta Gratuita
              </button>
              <a
                href="#contacto"
                className="border-2 border-[#EF9202] text-[#EF9202] hover:bg-[#EF9202] hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Ver Ubicación
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
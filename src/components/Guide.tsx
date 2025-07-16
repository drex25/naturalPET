import React, { useEffect, useRef, useState } from 'react';

const Guide: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "No más cocinar",
      description: "Olvídate de preparar comidas complicadas. Nuestros productos están listos para servir.",
      color: "from-[#96BE11] to-[#96BE11]/90",
      bgColor: "bg-[#96BE11]/20"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#EF9202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fácil de implementar",
      description: "Transición gradual y sin complicaciones. Tu mascota se adaptará naturalmente.",
      color: "from-[#EF9202] to-[#EF9202]/90",
      bgColor: "bg-[#EF9202]/20"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Saludable y natural",
      description: "Nutrición que fortalece el sistema inmunológico y mejora la calidad de vida.",
      color: "from-[#F4D03F] to-[#F4D03F]/90",
      bgColor: "bg-[#F4D03F]/20"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta inicial",
      description: "Evaluamos las necesidades específicas de tu mascota",
      icon: "👋",
      color: "from-[#96BE11] to-[#96BE11]/90"
    },
    {
      number: "02",
      title: "Plan personalizado",
      description: "Diseñamos un plan nutricional adaptado a tu mascota",
      icon: "📋",
      color: "from-[#EF9202] to-[#EF9202]/90"
    },
    {
      number: "03",
      title: "Transición gradual",
      description: "Implementamos el cambio de manera suave y natural",
      icon: "🔄",
      color: "from-[#F4D03F] to-[#F4D03F]/90"
    },
    {
      number: "04",
      title: "Seguimiento continuo",
      description: "Acompañamos el proceso y ajustamos según sea necesario",
      icon: "📈",
      color: "from-[#96BE11] to-[#EF9202]"
    }
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cambiar step activo cada 3 segundos
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

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

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [steps.length]);

  return (
    <section id="guia" className="py-20 bg-black relative overflow-hidden">
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
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-16 scroll-animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Guía <span className="text-[#96BE11] bg-gradient-to-r from-[#96BE11] to-[#EF9202] bg-clip-text text-transparent animate-pulse-glow">
              Práctica
            </span>
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
                className={`text-center group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  hoveredBenefit === index ? 'scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                  hoveredBenefit === index 
                    ? 'border-[#96BE11] shadow-2xl shadow-[#96BE11]/20' 
                    : 'border-gray-700 hover:border-[#96BE11]/50'
                }`}>
                  <div className="flex justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-[#96BE11] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
                </div>
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
                className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  index === activeStep ? 'scale-105' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 ${
                  index === activeStep 
                    ? 'border-[#96BE11] shadow-2xl shadow-[#96BE11]/20 bg-gradient-to-br from-[#96BE11]/10 to-[#96BE11]/5' 
                    : 'border-gray-700 hover:border-[#96BE11]/50'
                }`}>
                  {/* Step number with gradient */}
                  <div className={`text-4xl font-bold mb-4 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.number}
                  </div>
                  
                  {/* Emoji icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-[#96BE11] transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Active indicator */}
                  {index === activeStep && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-[#96BE11] rounded-full animate-pulse"></div>
                  )}

                  {/* Decorative elements */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#EF9202]/30 to-[#96BE11]/30"></div>
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
          <div className="bg-gradient-to-r from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 border border-[#96BE11]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
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
                className="bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-pulse-glow"
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
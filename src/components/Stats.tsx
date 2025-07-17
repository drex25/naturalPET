import React, { useEffect, useRef, useState } from 'react';

const Stats: React.FC = () => {
  const [counters, setCounters] = useState({
    mascotas: 0,
    años: 0,
    satisfaccion: 0,
    soporte: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      id: 'mascotas',
      number: 500,
      suffix: '+',
      label: 'Mascotas Felices',
      icon: '🐕',
      color: 'from-[#96BE11] to-[#96BE11]/90',
      bgColor: 'bg-[#96BE11]/20'
    },
    {
      id: 'años',
      number: 5,
      suffix: '+',
      label: 'Años de Experiencia',
      icon: '⭐',
      color: 'from-[#EF9202] to-[#EF9202]/90',
      bgColor: 'bg-[#EF9202]/20'
    },
    {
      id: 'satisfaccion',
      number: 98,
      suffix: '%',
      label: 'Satisfacción',
      icon: '❤️',
      color: 'from-[#F4D03F] to-[#F4D03F]/90',
      bgColor: 'bg-[#F4D03F]/20'
    },
    {
      id: 'soporte',
      number: 24,
      suffix: '/7',
      label: 'Soporte',
      icon: '🛡️',
      color: 'from-[#96BE11] to-[#EF9202]',
      bgColor: 'bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/20'
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animar contadores
      const duration = 2000; // 2 segundos
      const steps = 60;
      const stepDuration = duration / steps;

      const animateCounter = (target: number, setter: (value: number) => void) => {
        let current = 0;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setter(Math.floor(current));
        }, stepDuration);

        return timer;
      };

      const timers = [
        animateCounter(500, (value) => setCounters(prev => ({ ...prev, mascotas: value }))),
        animateCounter(5, (value) => setCounters(prev => ({ ...prev, años: value }))),
        animateCounter(98, (value) => setCounters(prev => ({ ...prev, satisfaccion: value }))),
        animateCounter(24, (value) => setCounters(prev => ({ ...prev, soporte: value })))
      ];

      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }
  }, [isVisible]);

  return (
    <section id="estadisticas" className="py-20 bg-black relative overflow-hidden">
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
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-bebas uppercase">
            NUESTROS <span className="text-[#96BE11]">
              NÚMEROS
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 5 años transformando la vida de mascotas con nutrición natural y asesoramiento especializado
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate"
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="text-center group cursor-pointer transition-all duration-500 transform hover:scale-105"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                isVisible ? 'border-[#96BE11]/30' : 'border-gray-700'
              } hover:border-[#96BE11]/50 hover:shadow-2xl hover:shadow-[#96BE11]/20`}>
                
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${stat.bgColor} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className={`text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                  {stat.id === 'mascotas' && counters.mascotas}
                  {stat.id === 'años' && counters.años}
                  {stat.id === 'satisfaccion' && counters.satisfaccion}
                  {stat.id === 'soporte' && counters.soporte}
                  {stat.suffix}
                </div>

                {/* Label */}
                <div className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 scroll-animate">
          <div className="bg-gradient-to-r from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 border border-[#96BE11]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-bebas uppercase">
              ¿QUIERES SER PARTE DE ESTAS ESTADÍSTICAS?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a cientos de familias que ya han transformado la vida de sus mascotas con nuestra nutrición natural.
            </p>
            <button
              onClick={() => {
                const message = "Hola! Vi las estadísticas de Natural Pet y me gustaría que mi mascota también sea parte de esos números. ¿Podrían ayudarme?";
                const whatsappUrl = `https://wa.me/5493764518346?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center animate-pulse-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              ¡Quiero ser parte!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 
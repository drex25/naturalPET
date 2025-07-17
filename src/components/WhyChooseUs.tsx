import React, { useEffect, useRef, useState } from 'react';
import { Heart, Shield, Users, Award, Clock, Star } from 'lucide-react';
import perroGatoIcono from '../assets/perro y gato icono.png';

const WhyChooseUs: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Heart,
      title: "Amor por las mascotas",
      description: "Cada producto está diseñado pensando en el bienestar y felicidad de tu compañero peludo.",
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-500/20",
      borderColor: "border-pink-500/30"
    },
    {
      icon: Shield,
      title: "Calidad garantizada",
      description: "Todos nuestros productos cumplen con los más altos estándares de calidad y seguridad.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Users,
      title: "Asesoramiento experto",
      description: "Equipo de profesionales multidisciplinarios para guiarte en cada paso.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      icon: Award,
      title: "Primera tienda naturista",
      description: "Pioneros en nutrición natural para mascotas en la región.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: Clock,
      title: "Atención 24/7",
      description: "Siempre disponibles para resolver tus dudas y brindarte apoyo.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Star,
      title: "Resultados comprobados",
      description: "Más de 500 mascotas felices y saludables gracias a nuestras soluciones.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/20",
      borderColor: "border-indigo-500/30"
    },
    {
      icon: null,
      title: "Compañeros felices",
      description: "Tu perro y gato merecen la mejor nutrición natural para una vida plena y saludable.",
      color: "from-[#96BE11] to-[#EF9202]",
      bgColor: "bg-[#96BE11]/20",
      borderColor: "border-[#96BE11]/30",
      customIcon: perroGatoIcono
    }
  ];

  const stats = [
    { number: "500+", label: "Mascotas Felices", color: "text-[#96BE11]" },
    { number: "100%", label: "Natural", color: "text-[#EF9202]" },
    { number: "24/7", label: "Atención", color: "text-[#96BE11]" },
    { number: "5★", label: "Calificación", color: "text-[#EF9202]" }
  ];

  useEffect(() => {
    // Cambiar feature activo cada 3 segundos
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
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

    const elements = [headerRef.current, featuresRef.current, statsRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [features.length]);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
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
            ¿Por qué elegir{' '}
            <span className="text-[#96BE11] bg-gradient-to-r from-[#96BE11] to-[#EF9202] bg-clip-text text-transparent animate-pulse-glow">
              NaturalPET
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos la primera tienda naturista para mascotas, comprometidos con el bienestar integral de tu familia multiespecie.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          ref={featuresRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 scroll-animate"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isActive = index === activeFeature;
            
            return (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 h-80 ${
                  isActive ? 'scale-105' : ''
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-500 ${
                  isActive 
                    ? `border-[#96BE11] shadow-2xl shadow-[#96BE11]/20 ${feature.bgColor}` 
                    : 'border-gray-700 hover:border-[#96BE11]/50'
                } h-full flex flex-col`}>
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    {feature.customIcon ? (
                      <img 
                        src={feature.customIcon} 
                        alt="Icono personalizado" 
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      IconComponent && <IconComponent className="w-8 h-8 text-white" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#96BE11] transition-colors duration-300 min-h-[3rem] flex items-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-[#96BE11] rounded-full animate-pulse"></div>
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#96BE11]/5 to-[#EF9202]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              <div className={`text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 border border-[#96BE11]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¡Únete a la familia NaturalPET!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Descubre por qué somos la elección preferida de más de 500 familias para el cuidado de sus mascotas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const message = "Hola! Me gustaría conocer más sobre NaturalPET y sus soluciones nutricionales. ¿Podrían ayudarme?";
                  const whatsappUrl = `https://wa.me/5493764518346?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center animate-pulse-glow"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consultar Ahora
              </button>
              <a
                href="#combos"
                className="border-2 border-[#EF9202] text-[#EF9202] hover:bg-[#EF9202] hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Ver Soluciones
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 
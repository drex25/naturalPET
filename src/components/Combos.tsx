import React, { useEffect, useRef } from 'react';

const Combos: React.FC = () => {
  const combos = [
    {
      id: 1,
      name: "Combo Inicial",
      description: "Perfecto para comenzar la transición a una nutrición más saludable",
      features: [
        "Alimentos naturales premium",
        "Suplementos vitamínicos",
        "Snacks saludables",
        "Guía práctica de alimentación",
        "Asesoramiento personalizado"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Combo Premium",
      description: "La solución más completa para el bienestar integral de tu mascota",
      features: [
        "Alimentos naturales premium",
        "Suplementos vitamínicos",
        "Snacks saludables",
        "Productos dentales",
        "Higiene y prevención",
        "Seguimiento nutricional"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Combo Familiar",
      description: "Ideal para hogares con múltiples mascotas",
      features: [
        "Alimentos para 2 mascotas",
        "Suplementos personalizados",
        "Snacks variados",
        "Guía completa",
        "Descuento por volumen",
        "Asesoramiento grupal"
      ],
      popular: false
    }
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const combosRef = useRef<HTMLDivElement>(null);
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

    const elements = [headerRef.current, combosRef.current, ctaRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="combos" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-16 scroll-animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Nuestras <span className="text-[#96BE11]">Soluciones Nutricionales</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            En todos nuestros COMBOS encontrarás una GUÍA PRÁCTICA para potenciar el alimento balanceado de tu peludo y lograr una nutrición completa y saludable sin necesidad de cocinar.
          </p>
        </div>

        {/* Combos Grid */}
        <div 
          ref={combosRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {combos.map((combo, index) => (
            <div
              key={combo.id}
              className={`relative bg-gray-800 rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 card-animate ${
                combo.popular 
                  ? 'border-[#EF9202] shadow-lg shadow-[#EF9202]/20' 
                  : 'border-gray-700 hover:border-[#96BE11]'
              }`}
            >
              {combo.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#EF9202] text-black px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">{combo.name}</h3>
                <p className="text-gray-400 mb-4">{combo.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {combo.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300 list-item-animate">
                    <svg className="w-5 h-5 text-[#96BE11] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const message = `Hola! Me interesa el ${combo.name} de Natural Pet. ¿Podrían darme más información sobre las soluciones nutricionales?`;
                  const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consultar Solución
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="text-center scroll-animate"
        >
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              ¿Por qué hablamos de potenciar el alimento balanceado?
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              El concepto de completo y balanceado en los alimentos nunca es suficiente para una verdadera nutrición saludable. En la diversidad está la clave, al igual que la necesidad de humedad en los alimentos. Por eso, nuestras Soluciones Nutricionales están pensadas y conformadas por diversos productos, que con nuestro asesoramiento gratuito podrás aprender a alimentar de manera saludable y sostenible a tu mascota.
            </p>
            <button
              onClick={() => {
                const message = "Hola! Me gustaría consultar sobre un plan personalizado para potenciar la nutrición de mi mascota. ¿Podrían ayudarme?";
                const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-gradient-to-r from-[#EF9202] to-[#EF9202]/90 hover:from-[#96BE11] hover:to-[#96BE11]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Plan Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Combos;
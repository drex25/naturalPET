import React, { useEffect, useRef, useState } from 'react';

const Contact: React.FC = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const predefinedMessages = [
    {
      title: "Consulta General",
      message: "Hola! Me gustaría obtener más información sobre los productos naturales para mi mascota.",
      icon: "🐕",
      color: "from-[#96BE11] to-[#96BE11]/90"
    },
    {
      title: "Plan Personalizado",
      message: "Hola! Quiero agendar una consulta para crear un plan nutricional personalizado para mi mascota.",
      icon: "📋",
      color: "from-[#EF9202] to-[#EF9202]/90"
    },
    {
      title: "Productos Específicos",
      message: "Hola! Me interesan los productos naturales para mejorar la salud de mi mascota. ¿Podrían recomendarme?",
      icon: "🛍️",
      color: "from-[#F4D03F] to-[#F4D03F]/90"
    },
    {
      title: "Seguimiento",
      message: "Hola! Ya soy cliente y necesito hacer un seguimiento o ajustar el plan de mi mascota.",
      icon: "📈",
      color: "from-[#96BE11] to-[#EF9202]"
    }
  ];

  const features = [
    {
      icon: "💬",
      title: "Asesoramiento Gratuito",
      description: "Consulta inicial sin costo para evaluar las necesidades de tu mascota",
      color: "from-[#96BE11] to-[#96BE11]/90"
    },
    {
      icon: "📱",
      title: "Respuesta Rápida",
      description: "Atendemos de lunes a sábados de 9:00 a 18:00 horas",
      color: "from-[#EF9202] to-[#EF9202]/90"
    },
    {
      icon: "📍",
      title: "Ubicación Céntrica",
      description: "Encontranos en el corazón de la ciudad, fácil acceso",
      color: "from-[#F4D03F] to-[#F4D03F]/90"
    },
    {
      icon: "🎯",
      title: "Seguimiento Personalizado",
      description: "Acompañamiento continuo en el proceso de tu mascota",
      color: "from-[#96BE11] to-[#EF9202]"
    }
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cambiar mensaje activo cada 4 segundos
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % predefinedMessages.length);
    }, 4000);

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

    const elements = [headerRef.current, messagesRef.current, featuresRef.current, mapRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [predefinedMessages.length]);

  const sendWhatsAppMessage = (message: string) => {
    const whatsappUrl = `https://wa.me/5493764518346?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-black relative overflow-hidden">
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
            ¡Conectemos por <span className="text-[#96BE11] bg-gradient-to-r from-[#96BE11] to-[#EF9202] bg-clip-text text-transparent animate-pulse-glow">
              WhatsApp
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a darle a tu mascota la nutrición que se merece. 
            ¡La primera consulta es gratuita!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Messages & Features */}
          <div className="space-y-12">
            {/* Predefined Messages */}
            <div 
              ref={messagesRef}
              className="scroll-animate"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Mensajes Predefinidos
              </h3>
              <div className="space-y-4">
                {predefinedMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      index === activeMessage ? 'scale-105' : ''
                    }`}
                    onClick={() => sendWhatsAppMessage(msg.message)}
                  >
                    <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-500 ${
                      index === activeMessage 
                        ? 'border-[#96BE11] shadow-2xl shadow-[#96BE11]/20 bg-gradient-to-br from-[#96BE11]/10 to-[#96BE11]/5' 
                        : 'border-gray-700 hover:border-[#96BE11]/50'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${msg.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                          {msg.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#96BE11] transition-colors duration-300">
                            {msg.title}
                          </h4>
                          <p className="text-gray-400 text-sm line-clamp-2">
                            {msg.message}
                          </p>
                        </div>
                        <div className="text-[#96BE11] group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-2 -right-2 w-3 h-3 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div 
              ref={featuresRef}
              className="scroll-animate"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                ¿Por qué elegirnos?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`text-center group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                      hoveredFeature === index ? 'scale-105' : ''
                    }`}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border transition-all duration-500 ${
                      hoveredFeature === index 
                        ? 'border-[#96BE11] shadow-2xl shadow-[#96BE11]/20' 
                        : 'border-gray-700 hover:border-[#96BE11]/50'
                    }`}>
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-2 group-hover:text-[#96BE11] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Map & Info */}
          <div 
            ref={mapRef}
            className="scroll-animate"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-[#96BE11]/20 shadow-2xl shadow-[#96BE11]/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Nuestra Ubicación
              </h3>
              
              {/* Map Placeholder */}
              <div className="relative mb-6">
                <div className="w-full h-64 bg-gradient-to-br from-[#96BE11]/20 to-[#EF9202]/10 rounded-xl flex items-center justify-center overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.861029113038!2d-55.9015465!3d-27.4112647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bf713e27149b%3A0x73b9a970f065582f!2sNatural%20Pet!5e0!3m2!1sen!2sar!4v1752600963336!5m2!1sen!2sar" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Natural Pet - Posadas, Misiones"
                    className="rounded-xl"
                  ></iframe>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-xs text-white font-medium">📍 Ubicación</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#96BE11]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Dirección</p>
                    <p className="text-gray-400 text-sm">Av. 45 nro 6865 (colectora R12, pegado a Madre selva), Posadas, Misiones</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#EF9202]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#EF9202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Horarios</p>
                    <p className="text-gray-400 text-sm">Lun-Sáb: 7:30-12:30 / 15:30-19:30</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#F4D03F]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#F4D03F]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <p className="text-gray-400 text-sm">+54 9 376 451-8346</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button
                  onClick={() => sendWhatsAppMessage("Hola! Me gustaría visitar su local. ¿Podrían darme más información?")}
                  className="w-full bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center animate-pulse-glow"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Visitar Local
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
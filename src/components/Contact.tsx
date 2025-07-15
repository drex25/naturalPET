import React, { useEffect, useRef } from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Ubicación",
      content: "Av. 45 nro 6865 (colectora R12, pegado a Madre Selva). Posadas, Misiones."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#EF9202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horarios",
      content: "Lunes a sábado de 7:30 a 12:30hs. y 15:30 a 19:30hs."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Teléfono",
      content: "+54 9 376 412-3456"
    }
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

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

    const elements = [headerRef.current, contactInfoRef.current, mapRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={headerRef}
          className="text-center mb-16 scroll-animate"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
            Ven a <span className="text-[#96BE11]">visitarnos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos ubicados en el corazón de Posadas, listos para atenderte y asesorarte sobre las mejores soluciones nutricionales para tu mascota.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div 
            ref={contactInfoRef}
            className="space-y-8 scroll-animate"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-4 list-item-animate"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[#96BE11]/20 rounded-lg flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-gray-400 whitespace-pre-line leading-relaxed">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 card-animate">
              <h3 className="text-xl font-semibold text-white mb-4">
                ¿Tienes preguntas sobre nutrición?
              </h3>
              <p className="text-gray-400 mb-6">
                Nuestros expertos están disponibles para responder todas tus dudas sobre soluciones nutricionales y el bienestar de tu mascota.
              </p>
              <button
                onClick={() => {
                  const message = "Hola! Me gustaría hacer una consulta sobre soluciones nutricionales para mi mascota. ¿Podrían ayudarme?";
                  const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Consultar por WhatsApp
              </button>
            </div>
          </div>

          {/* Map */}
          <div 
            ref={mapRef}
            className="space-y-6 scroll-animate"
          >
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 card-animate">
              <h3 className="text-xl font-semibold text-white mb-4">Nuestra ubicación</h3>
              <div className="aspect-video bg-gray-700 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.861029113038!2d-55.9015465!3d-27.4112647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457bf713e27149b%3A0x73b9a970f065582f!2sNatural%20Pet!5e0!3m2!1sen!2sar!4v1752600963336!5m2!1sen!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Natural Pet - Posadas, Misiones"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-yellow-400" />,
      title: "Ubicación",
      details: ["Posadas, Misiones", "Argentina"]
    },
    {
      icon: <Clock className="h-6 w-6 text-yellow-400" />,
      title: "Horarios",
      details: ["Lun - Vie: 9:00 - 18:00", "Sáb: 9:00 - 13:00"]
    },
    {
      icon: <Phone className="h-6 w-6 text-yellow-400" />,
      title: "Teléfono",
      details: ["+54 3764 000000", "WhatsApp disponible"]
    },
    {
      icon: <Mail className="h-6 w-6 text-yellow-400" />,
      title: "Email",
      details: ["info@naturalpet.com", "consultas@naturalpet.com"]
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-yellow-400">Contacto</span> y Ubicación
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Visitanos en nuestra tienda o contactanos para más información
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center space-x-3">
                    {info.icon}
                    <h3 className="text-white font-semibold text-lg">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-gray-800">
              <h3 className="text-white font-semibold text-lg mb-4">Seguinos en redes</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-900 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-yellow-400 mx-auto" />
                <h3 className="text-white font-semibold text-xl">Nuestra Ubicación</h3>
                <p className="text-gray-400">
                  Posadas, Misiones<br />
                  Argentina
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
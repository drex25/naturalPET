import React from 'react';
import { Leaf, Award, Users, MapPin } from 'lucide-react';

const AboutUs: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-400" />,
      title: "100% Natural",
      description: "Productos seleccionados sin químicos ni conservantes artificiales"
    },
    {
      icon: <Award className="h-8 w-8 text-green-400" />,
      title: "Calidad Premium",
      description: "Estándares internacionales de nutrición animal"
    },
    {
      icon: <Users className="h-8 w-8 text-green-400" />,
      title: "Asesoramiento",
      description: "Expertos en nutrición animal te acompañan en el proceso"
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-400" />,
      title: "Posadas, Misiones",
      description: "Primera tienda naturista para mascotas en la región"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Sobre <span className="text-green-400">Natural Pet</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Somos la primera tienda naturista para mascotas en Posadas, Misiones. Creemos que la alimentación 
                natural es la base del bienestar animal, por eso seleccionamos cuidadosamente cada producto 
                para ofrecer solo lo mejor a tu compañero de vida.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nuestro compromiso es brindar soluciones nutricionales que respeten la naturaleza de cada animal, 
                promoviendo una vida más saludable y plena para tu mascota.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-3">
                    {feature.icon}
                    <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Tienda Natural Pet"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
import React from 'react';
import { MessageCircle, Star, Package, Zap, Heart } from 'lucide-react';

const Combos: React.FC = () => {
  const combos = [
    {
      name: "Combo Cachorro",
      description: "Nutrición especializada para cachorros en crecimiento",
      price: "Consultar precio",
      features: ["Alimento natural premium", "Suplementos de crecimiento", "Snacks saludables", "Guía nutricional"],
      icon: <Heart className="h-8 w-8 text-green-400" />,
      popular: false
    },
    {
      name: "Combo Adulto",
      description: "Balance perfecto para perros y gatos adultos",
      price: "Consultar precio",
      features: ["Alimento balanceado natural", "Complementos vitamínicos", "Premios naturales", "Asesoramiento personalizado"],
      icon: <Package className="h-8 w-8 text-green-400" />,
      popular: true
    },
    {
      name: "Combo Senior",
      description: "Cuidado especializado para mascotas mayores",
      price: "Consultar precio",
      features: ["Alimento fácil digestión", "Suplementos articulares", "Probióticos naturales", "Seguimiento nutricional"],
      icon: <Star className="h-8 w-8 text-green-400" />,
      popular: false
    },
    {
      name: "Combo Energía",
      description: "Para mascotas activas y deportistas",
      price: "Consultar precio",
      features: ["Alto contenido proteico", "Energizantes naturales", "Recuperación muscular", "Plan de alimentación"],
      icon: <Zap className="h-8 w-8 text-green-400" />,
      popular: false
    }
  ];

  return (
    <section id="combos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestros <span className="text-green-400">Combos</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Planes nutricionales completos adaptados a cada etapa de vida de tu mascota
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {combos.map((combo, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-6 border ${
                combo.popular ? 'border-green-400' : 'border-gray-800'
              } hover:border-green-400 transition-colors duration-300`}
            >
              {combo.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  {combo.icon}
                  <h3 className="text-white font-bold text-xl">{combo.name}</h3>
                </div>
                
                <p className="text-gray-400">{combo.description}</p>
                
                <div className="space-y-3">
                  {combo.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-green-400 font-semibold text-lg mb-4">{combo.price}</p>
                  <a
                    href="https://wa.me/543764000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition-colors duration-200"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Combos;
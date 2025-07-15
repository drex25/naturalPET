import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="min-h-screen bg-black flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-yellow-400">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Primera tienda naturista</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                ¡Nutrimos su <span className="text-yellow-400">naturaleza!</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Soluciones nutricionales sostenibles para el bienestar integral de tu mascota en Posadas, Misiones.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#combos"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200 group"
              >
                Ver combos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sobre-nosotros"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200"
              >
                Conocer más
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mascota saludable"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                100% Natural
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
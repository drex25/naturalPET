import React from 'react';
import servicioImage from '../assets/servicio.jpeg';

const Grooming: React.FC = () => {
  return (
    <section id="peluqueria" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-12">
          {/* Columna Izquierda: Texto */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <div className="inline-flex items-center px-6 py-2 bg-[#96BE11]/20 border border-[#96BE11]/30 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
              <div className="w-2 h-2 bg-[#96BE11] rounded-full mr-3 animate-pulse"></div>
              <span className="text-[#96BE11] font-semibold text-sm tracking-wide">SERVICIO PREMIUM</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif leading-tight animate-fade-in-up">
              BAÑO ECOLÓGICO Y <span className="bg-gradient-to-r from-[#96BE11] to-[#EF9202] bg-clip-text text-transparent animate-pulse-glow">PELUQUERÍA CANINA</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-100">
              Nuestra propuesta está basada en el cuidado de tu peludo desde el profesionalismo de nuestro estilista canino y productos de higiene 100% naturales que cuidan el pelaje de tu perro y nutren su piel sin efectos adversos.
            </p>
            <button
              onClick={() => {
                const message = "Hola! Me gustaría consultar sobre el servicio de baño ecológico y peluquería canina. ¿Podrían ayudarme?";
                const whatsappUrl = `https://wa.me/3764137294?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="group bg-gradient-to-r from-[#96BE11] to-[#EF9202] hover:from-[#EF9202] hover:to-[#96BE11] text-white font-semibold px-10 py-3 rounded-full transition-all duration-500 ease-in-out transform hover:scale-105 inline-flex items-center justify-center shadow-2xl hover:shadow-[#96BE11]/25 animate-pulse-glow text-lg"
            >
              Solicitar Servicio
            </button>
          </div>
          {/* Columna Derecha: Imagen */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="bg-white/5 rounded-3xl shadow-2xl border-2 border-[#96BE11]/30 p-2 max-w-lg w-full flex justify-center">
              <img
                src={servicioImage}
                alt="Baño ecológico y peluquería canina"
                className="rounded-2xl w-full h-auto object-contain"
                style={{ maxHeight: '80vh' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grooming; 
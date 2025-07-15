import React from 'react';
import { CheckCircle, Clock, Utensils, Shield, Smile } from 'lucide-react';

const Guide: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-yellow-400" />,
      title: "Sin cocinar",
      description: "Alimentos listos para servir, sin preparación"
    },
    {
      icon: <Utensils className="h-8 w-8 text-yellow-400" />,
      title: "Fácil de usar",
      description: "Porciones justas y prácticas para cada comida"
    },
    {
      icon: <Shield className="h-8 w-8 text-yellow-400" />,
      title: "100% Saludable",
      description: "Ingredientes naturales sin conservantes artificiales"
    },
    {
      icon: <Smile className="h-8 w-8 text-yellow-400" />,
      title: "Mascotas felices",
      description: "Mejor digestión y energía para tu compañero"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta inicial",
      description: "Evaluamos las necesidades específicas de tu mascota"
    },
    {
      number: "02",
      title: "Plan personalizado",
      description: "Diseñamos un plan nutricional adaptado a su edad y actividad"
    },
    {
      number: "03",
      title: "Entrega y seguimiento",
      description: "Recibís tu combo y te acompañamos en el proceso de transición"
    }
  ];

  return (
    <section id="guia" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Guía <span className="text-yellow-400">Práctica</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Descubrí por qué la alimentación natural es la mejor opción para tu mascota
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-white font-semibold text-lg">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            ¿Cómo funciona?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-5xl font-bold text-yellow-400">{step.number}</div>
                <h4 className="text-white font-semibold text-lg">{step.title}</h4>
                <p className="text-gray-400">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-yellow-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/543764000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-200"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              Comenzar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
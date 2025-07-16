import React, { useEffect, useRef, useState } from 'react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "María González",
      pet: "Luna (Golden Retriever)",
      rating: 5,
      text: "Luna tenía problemas digestivos y desde que cambiamos a Natural Pet, su energía mejoró increíblemente. Los productos son excelentes y el asesoramiento fue fundamental.",
      avatar: "🐕",
      color: "from-[#96BE11] to-[#96BE11]/90"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      pet: "Mittens (Gato Persa)",
      rating: 5,
      text: "Mittens es mucho más activo y su pelaje está brillante. La transición fue súper fácil y ahora come con gusto. ¡Altamente recomendado!",
      avatar: "🐱",
      color: "from-[#EF9202] to-[#EF9202]/90"
    },
    {
      id: 3,
      name: "Ana Martínez",
      pet: "Rocky (Bulldog)",
      rating: 5,
      text: "Rocky tenía alergias y problemas de piel. Con Natural Pet, todo cambió. Su pelo está más suave y ya no se rasca tanto. ¡Gracias por cambiar su vida!",
      avatar: "🐶",
      color: "from-[#F4D03F] to-[#F4D03F]/90"
    },
    {
      id: 4,
      name: "Luis Pérez",
      pet: "Whiskers (Gato Siames)",
      rating: 5,
      text: "Whiskers es más juguetón y saludable que nunca. Los productos naturales realmente hacen la diferencia. El servicio al cliente es excepcional.",
      avatar: "🐈",
      color: "from-[#96BE11] to-[#EF9202]"
    },
    {
      id: 5,
      name: "Sofia Herrera",
      pet: "Max (Labrador)",
      rating: 5,
      text: "Max tiene 8 años y desde que usa Natural Pet, parece más joven. Su vitalidad mejoró notablemente y los problemas digestivos desaparecieron.",
      avatar: "🐕‍🦺",
      color: "from-[#EF9202] to-[#F4D03F]"
    }
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

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

    const elements = [headerRef.current, carouselRef.current, ctaRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (interval) clearInterval(interval);
      observer.disconnect();
    };
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonios" className="py-20 bg-gray-900 relative overflow-hidden">
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
            Lo que dicen nuestros <span className="text-[#96BE11] bg-gradient-to-r from-[#96BE11] to-[#EF9202] bg-clip-text text-transparent animate-pulse-glow">
              Clientes Felices
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre las experiencias reales de familias que han transformado la vida de sus mascotas
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div 
          ref={carouselRef}
          className="relative mb-12 scroll-animate"
        >
          <div className="relative">
            {/* Main Testimonial */}
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#96BE11]/20 shadow-2xl shadow-[#96BE11]/10">
              <div className="text-center">
                {/* Avatar */}
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#96BE11]/20 to-[#EF9202]/20 rounded-full flex items-center justify-center text-4xl animate-pulse-glow">
                    {testimonials[currentTestimonial].avatar}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-6 h-6 text-[#F4D03F] animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-8">
                  <svg className="w-12 h-12 text-[#96BE11]/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>

                {/* Author */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#96BE11] font-medium">
                    {testimonials[currentTestimonial].pet}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border border-[#96BE11]/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 border border-[#EF9202]/30 rounded-full animate-pulse delay-500"></div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm hover:bg-[#96BE11]/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-[#96BE11]/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/80 backdrop-blur-sm hover:bg-[#96BE11]/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-[#96BE11]/30"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-[#96BE11] scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                isAutoPlaying
                  ? 'bg-[#96BE11]/20 text-[#96BE11] border border-[#96BE11]/30'
                  : 'bg-gray-700 text-gray-400 border border-gray-600'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pausar' : '▶️ Reproducir'}
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { number: "500+", label: "Mascotas Felices" },
            { number: "98%", label: "Satisfacción" },
            { number: "24/7", label: "Soporte" },
            { number: "100%", label: "Natural" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#96BE11]/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-[#96BE11] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="text-center scroll-animate"
        >
          <div className="bg-gradient-to-r from-[#96BE11]/10 to-[#EF9202]/5 rounded-2xl p-8 border border-[#96BE11]/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-serif">
              ¿Quieres que tu mascota sea la próxima historia de éxito?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Únete a cientos de familias que ya han transformado la vida de sus mascotas con nuestra nutrición natural.
            </p>
            <button
              onClick={() => {
                const message = "Hola! Vi los testimonios y me gustaría que mi mascota también tenga una nutrición natural. ¿Podrían ayudarme?";
                const whatsappUrl = `https://wa.me/5493764518346?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center animate-pulse-glow"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              ¡Quiero que mi mascota sea feliz!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
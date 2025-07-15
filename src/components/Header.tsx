import React, { useState, useEffect } from 'react';
import logo from '../assets/logo natural.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Combos', href: '#combos' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Guía Práctica', href: '#guia' },
    { name: 'Contacto', href: '#contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    console.log('Nav item clicked:', href); // Debug log
    setIsMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth' 
      });
    } else {
      console.warn('Element not found:', href.substring(1));
    }
  };

  const handleMenuToggle = () => {
    console.log('Menu toggle clicked, current state:', isMenuOpen); // Debug log
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Header que se vuelve fijo al hacer scroll */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#inicio" 
                className="block transition-all duration-300 hover:scale-110 hover:rotate-1"
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Logo clicked'); // Debug log
                  document.getElementById('inicio')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                <img 
                  src={logo} 
                  alt="Natural Pet" 
                  className="h-12 lg:h-14 w-auto cursor-pointer drop-shadow-lg"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative px-6 py-3 text-white hover:text-[#F4D03F] transition-all duration-300 font-medium text-sm group overflow-hidden rounded-lg cursor-pointer block"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4D03F]/20 to-[#EF9202]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-2">
              {navItems.slice(0, 3).map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="relative px-4 py-2 text-white hover:text-[#F4D03F] transition-all duration-300 font-medium text-xs group cursor-pointer block"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
              <button
                onClick={handleMenuToggle}
                className="ml-2 text-white hover:text-[#F4D03F] transition-colors duration-200 p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-white hover:text-[#F4D03F] transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
              >
                <div className="w-6 h-6 relative">
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Sidebar Menu */}
      <div className={`fixed inset-0 z-40 md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => {
            console.log('Backdrop clicked'); // Debug log
            setIsMenuOpen(false);
          }}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-full md:w-96 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl border-l border-gray-800/50 transform transition-all duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 lg:p-8 border-b border-gray-800/50">
              <img 
                src={logo} 
                alt="Natural Pet" 
                className="h-10 lg:h-12 w-auto drop-shadow-lg"
              />
              <button
                onClick={() => {
                  console.log('Close button clicked'); // Debug log
                  setIsMenuOpen(false);
                }}
                className="text-gray-300 hover:text-[#EF9202] transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 px-6 lg:px-8 py-8">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block text-lg lg:text-xl font-medium text-gray-200 hover:text-white transition-all duration-300 transform hover:translate-x-3 group p-4 rounded-xl hover:bg-white/5"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#96BE11] to-[#EF9202] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                      <span className="relative">
                        {item.name}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#96BE11] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </nav>

            {/* Footer */}
            <div className="p-6 lg:p-8 border-t border-gray-800/50">
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-sm font-medium">¿Necesitas ayuda?</p>
                <button
                  onClick={() => {
                    const message = "Hola! Me gustaría hacer una consulta sobre soluciones nutricionales para mi mascota. ¿Podrían ayudarme?";
                    const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#96BE11] to-[#EF9202] hover:from-[#EF9202] hover:to-[#96BE11] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#96BE11]/25 flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Consultar por WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
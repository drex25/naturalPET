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

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    
    // Pequeño delay para asegurar que el menú se cierre primero
    setTimeout(() => {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    
    setTimeout(() => {
      document.getElementById('inicio')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <>
      {/* Header Principal */}
      <header 
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{ zIndex: 99999 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0" style={{ zIndex: 100000 }}>
              <button
                onClick={handleLogoClick}
                className="block transition-all duration-300 hover:scale-110 hover:rotate-1 cursor-pointer"
              >
                <img 
                  src={logo} 
                  alt="Natural Pet" 
                  className="h-12 lg:h-14 w-auto drop-shadow-lg"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" style={{ zIndex: 100001 }}>
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="relative px-6 py-3 text-white hover:text-[#F4D03F] transition-all duration-300 font-medium text-sm group overflow-hidden rounded-lg cursor-pointer"
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    zIndex: 100002 + index
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4D03F]/20 to-[#EF9202]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-2" style={{ zIndex: 100001 }}>
              {navItems.slice(0, 3).map((item, index) => (
                <button
                  key={item.name}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="relative px-4 py-2 text-white hover:text-[#F4D03F] transition-all duration-300 font-medium text-xs group cursor-pointer"
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    zIndex: 100002 + index
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
              <button
                onClick={handleMenuToggle}
                className="ml-2 text-white hover:text-[#F4D03F] transition-colors duration-200 p-2 cursor-pointer"
                style={{ zIndex: 100002 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden" style={{ zIndex: 100001 }}>
              <button
                onClick={handleMenuToggle}
                className="text-white hover:text-[#F4D03F] transition-all duration-300 p-2 rounded-lg hover:bg-white/10 cursor-pointer"
                style={{ zIndex: 100002 }}
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

      {/* Mobile/Tablet Overlay Menu */}
      <div 
        className={`fixed inset-0 transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}
        style={{ zIndex: 99998 }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl border-l border-[#F4D03F]/20 transform transition-all duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header del menú */}
            <div className="flex items-center justify-between p-6 lg:p-8 border-b border-[#F4D03F]/20">
              <div className="flex items-center space-x-3">
                <img 
                  src={logo} 
                  alt="Natural Pet" 
                  className="h-10 lg:h-12 w-auto drop-shadow-lg"
                />
                <div>
                  <h3 className="text-white font-bold text-lg">Natural Pet</h3>
                  <p className="text-[#F4D03F] text-xs">Nutrimos su naturaleza</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
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
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="w-full text-left text-lg lg:text-xl font-medium text-gray-200 hover:text-white transition-all duration-300 transform hover:translate-x-3 group p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#F4D03F]/10 hover:to-[#EF9202]/5 cursor-pointer"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                      <span className="relative">
                        {item.name}
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </nav>

            {/* Footer del menú */}
            <div className="p-6 lg:p-8 border-t border-[#F4D03F]/20">
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-sm font-medium">¿Necesitas ayuda?</p>
                <button
                  onClick={() => {
                    const message = "Hola! Me gustaría hacer una consulta sobre soluciones nutricionales para mi mascota. ¿Podrían ayudarme?";
                    const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#F4D03F] to-[#EF9202] hover:from-[#EF9202] hover:to-[#F4D03F] text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#F4D03F]/25 flex items-center justify-center group cursor-pointer"
                >
                  <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  Consultar por WhatsApp
                </button>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4 pt-4">
                  <a
                    href="https://www.instagram.com/naturalpet.ar?igsh=MXhvdTVubWgzOTlmMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#F4D03F] hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@naturalpet?si=JwBk5DYggqpgxpaR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#EF9202] hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@natural.pet?_t=ZM-8y3051HXfsb&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#F4D03F] hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.2.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
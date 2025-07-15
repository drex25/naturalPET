import React, { useState, useEffect } from 'react';
import logo from '../assets/logo natural.png';
import { 
  Home, 
  Package, 
  Users, 
  BookOpen, 
  Phone, 
  X, 
  Menu,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#inicio', icon: Home },
    { name: 'Combos', href: '#combos', icon: Package },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros', icon: Users },
    { name: 'Guía Práctica', href: '#guia', icon: BookOpen },
    { name: 'Contacto', href: '#contacto', icon: Phone }
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
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
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
                );
              })}
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden items-center space-x-2" style={{ zIndex: 100001 }}>
              {navItems.slice(0, 3).map((item, index) => {
                const IconComponent = item.icon;
                return (
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
                );
              })}
              <button
                onClick={handleMenuToggle}
                className="ml-2 text-white hover:text-[#F4D03F] transition-colors duration-200 p-2 cursor-pointer"
                style={{ zIndex: 100002 }}
              >
                <Menu className="w-5 h-5" />
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center" style={{ zIndex: 100001 }}>
              <button
                onClick={handleMenuToggle}
                className="text-white hover:text-[#F4D03F] transition-all duration-300 p-2 rounded-lg hover:bg-white/10 cursor-pointer flex items-center justify-center"
                style={{ zIndex: 100002 }}
              >
                <div className="w-6 h-6 relative flex items-center justify-center">
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
          className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-full sm:w-80 bg-gradient-to-br from-black/98 via-gray-900/98 to-black/98 backdrop-blur-2xl border-l border-[#F4D03F]/30 transform transition-all duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header del menú - Solo logo */}
            <div className="flex items-center justify-between p-6 border-b border-[#F4D03F]/20">
              <div className="flex items-center">
                <img 
                  src={logo} 
                  alt="Natural Pet" 
                  className="h-12 w-auto drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-3">
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="w-full text-left text-lg font-medium text-gray-200 hover:text-white transition-all duration-300 transform hover:translate-x-2 group p-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#F4D03F]/15 hover:to-[#EF9202]/10 cursor-pointer backdrop-blur-sm"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#F4D03F]/20 to-[#EF9202]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="w-4 h-4 text-[#F4D03F]" />
                        </div>
                        <span className="relative flex-1">
                          {item.name}
                          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                        </span>
                        <div className="w-2 h-2 bg-gradient-to-r from-[#F4D03F] to-[#EF9202] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"></div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Footer del menú */}
            <div className="p-6 border-t border-[#F4D03F]/20">
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-sm font-medium">¿Necesitas ayuda?</p>
                <button
                  onClick={() => {
                    const message = "Hola! Me gustaría hacer una consulta sobre soluciones nutricionales para mi mascota. ¿Podrían ayudarme?";
                    const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#F4D03F] to-[#EF9202] hover:from-[#EF9202] hover:to-[#F4D03F] text-black font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#F4D03F]/25 flex items-center justify-center group cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Consultar por WhatsApp
                </button>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3 pt-4">
                  <a
                    href="https://www.instagram.com/naturalpet.ar?igsh=MXhvdTVubWgzOTlmMQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-[#F4D03F] hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/@naturalpet?si=JwBk5DYggqpgxpaR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-[#EF9202] hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@natural.pet?_t=ZM-8y3051HXfsb&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-400 hover:text-[#F4D03F] hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-110"
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
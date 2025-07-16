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
  MessageCircle,
  Heart,
  Star
} from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('inicio');

  const navItems = [
    { name: 'Inicio', href: '#inicio', icon: Home, color: 'from-[#96BE11] to-[#96BE11]/90' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros', icon: Users, color: 'from-[#F4D03F] to-[#F4D03F]/90' },
    { name: 'Combos', href: '#combos', icon: Package, color: 'from-[#EF9202] to-[#EF9202]/90' },
    { name: 'Guía Práctica', href: '#guia', icon: BookOpen, color: 'from-[#96BE11] to-[#EF9202]' },
    { name: 'Contacto', href: '#contacto', icon: Phone, color: 'from-[#EF9202] to-[#F4D03F]' }
  ];

  const mobileMenuItems = [
    { name: 'Inicio', href: '#inicio', icon: Home, description: 'Volver al inicio' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros', icon: Users, description: 'Conoce nuestro equipo' },
    { name: 'Soluciones Nutricionales', href: '#combos', icon: Package, description: 'Nuestros combos naturales' },
    { name: 'Guía Práctica', href: '#guia', icon: BookOpen, description: 'Aprende sobre nutrición' },
    { name: 'Contacto', href: '#contacto', icon: Phone, description: 'Habla con nosotros' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar sección activa
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveNavItem(sectionId || 'inicio');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    
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
        className={`fixed top-0 left-0 right-0 transition-all duration-700 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-[#96BE11]/20' 
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
                className="block transition-all duration-500 hover:scale-110 hover:rotate-2 cursor-pointer group"
              >
                <div className="relative">
                  <img 
                    src={logo} 
                    alt="Natural Pet" 
                    className="h-12 lg:h-14 w-auto drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2" style={{ zIndex: 100001 }}>
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeNavItem === item.href.substring(1);
                
                return (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`relative px-6 py-3 text-white transition-all duration-500 font-medium text-sm group overflow-hidden rounded-xl cursor-pointer ${
                      isActive ? 'text-[#96BE11]' : 'hover:text-[#F4D03F]'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      zIndex: 100002 + index
                    }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <IconComponent className="w-4 h-4" />
                      <span>{item.name}</span>
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`}></div>
                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500 ${
                      isActive ? 'w-full' : ''
                    }`}></div>
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center" style={{ zIndex: 100001 }}>
              <button
                onClick={handleMenuToggle}
                className="relative text-white hover:text-[#96BE11] transition-all duration-500 p-3 rounded-xl hover:bg-white/10 cursor-pointer flex items-center justify-center group"
                style={{ zIndex: 100002 }}
              >
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-500 ease-out ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-500 ease-out ${
                    isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                  }`}></span>
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-500 ease-out ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}></span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Overlay Menu */}
      <div 
        className={`fixed inset-0 transition-all duration-700 ${isMenuOpen ? 'visible' : 'invisible'}`}
        style={{ zIndex: 99998 }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-700 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-br from-black/98 via-gray-900/98 to-black/98 backdrop-blur-3xl border-l border-[#96BE11]/30 transform transition-all duration-700 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header del menú */}
            <div className="flex items-center justify-between p-6 border-b border-[#96BE11]/20">
              <div className="flex items-center space-x-3">
                <div className="relative group">
                  <img 
                    src={logo} 
                    alt="Natural Pet" 
                    className="h-12 w-auto drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-white">
                  <h3 className="font-bold text-lg">Natural Pet</h3>
                  <p className="text-gray-400 text-sm">Nutrición Natural</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-[#96BE11] transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <div className="space-y-2">
                {mobileMenuItems.map((item, index) => {
                  const IconComponent = item.icon;
                  const isActive = activeNavItem === item.href.substring(1);
                  
                  return (
                    <button
                      key={item.name}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className={`w-full text-left transition-all duration-500 transform hover:translate-x-2 group p-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#96BE11]/15 hover:to-[#EF9202]/10 cursor-pointer backdrop-blur-sm ${
                        isActive ? 'bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/10 border border-[#96BE11]/30' : ''
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          isActive ? 'bg-gradient-to-r from-[#96BE11]/30 to-[#EF9202]/30' : ''
                        }`}>
                          <IconComponent className="w-6 h-6 text-[#96BE11]" />
                        </div>
                        <div className="flex-1">
                          <span className={`block text-lg font-medium transition-colors duration-300 ${
                            isActive ? 'text-[#96BE11]' : 'text-gray-200 group-hover:text-white'
                          }`}>
                            {item.name}
                          </span>
                          <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                            {item.description}
                          </span>
                        </div>
                        <div className={`w-3 h-3 bg-gradient-to-r from-[#96BE11] to-[#EF9202] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 ${
                          isActive ? 'opacity-100 scale-100' : ''
                        }`}></div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Footer del menú */}
            <div className="p-6 border-t border-[#96BE11]/20">
              <div className="text-center space-y-4">
                <p className="text-gray-400 text-sm font-medium">¿Necesitas ayuda?</p>
                <button
                  onClick={() => {
                    const message = "Hola! Me gustaría hacer una consulta sobre soluciones nutricionales para mi mascota. ¿Podrían ayudarme?";
                    const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-[#96BE11] to-[#EF9202] hover:from-[#EF9202] hover:to-[#96BE11] text-black font-semibold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-[#96BE11]/25 flex items-center justify-center group cursor-pointer"
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
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com/@naturalpet?si=JwBk5DYggqpgxpaR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/5493764123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <MessageCircle className="w-5 h-5" />
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
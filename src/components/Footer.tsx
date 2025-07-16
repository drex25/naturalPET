import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo natural.png';

const Footer: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/naturalpet.ar?igsh=MXhvdTVubWgzOTlmMQ==',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'from-pink-400 to-purple-500'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@naturalpet?si=JwBk5DYggqpgxpaR',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      color: 'from-red-500 to-red-600',
      hoverColor: 'from-red-400 to-red-500'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@natural.pet?_t=ZM-8y3051HXfsb&_r=1',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.2.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      color: 'from-cyan-500 to-pink-500',
      hoverColor: 'from-cyan-400 to-pink-400'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5493764518356',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-400 to-green-500'
    }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Soluciones Nutricionales', href: '#combos' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Guía Práctica', href: '#guia' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const headerRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const elements = [headerRef.current, socialRef.current];
    elements.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#96BE11] rounded-full animate-ping opacity-75"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#EF9202] rounded-full animate-ping opacity-75 delay-700"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-[#96BE11] rounded-full animate-ping opacity-75 delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#F4D03F] rounded-full animate-ping opacity-75 delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div 
              ref={headerRef}
              className="scroll-animate"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative group">
                  <img 
                    src={logo} 
                    alt="Natural Pet" 
                    className="h-12 w-auto drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
                La primera tienda naturista para mascotas en Posadas, Misiones. 
                Nutrimos su naturaleza con soluciones nutricionales 100% naturales y asesoramiento especializado de profesionales multidisciplinarios.
              </p>
              
              {/* Social Links */}
              <div 
                ref={socialRef}
                className="flex space-x-4 scroll-animate"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 transform hover:scale-110 hover:rotate-3 group cursor-pointer ${
                      hoveredSocial === social.name ? 'scale-110 rotate-3' : ''
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.color} rounded-xl opacity-20 group-hover:opacity-100 transition-all duration-300 blur-sm`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${social.hoverColor} rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                    <div className="relative z-10 text-white group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#96BE11]/20 to-[#EF9202]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-serif">Enlaces rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative text-gray-400 hover:text-[#96BE11] transition-all duration-300 group cursor-pointer ${
                      hoveredLink === link.name ? 'text-[#96BE11]' : ''
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#96BE11] to-[#EF9202] group-hover:w-full transition-all duration-300"></div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 font-serif">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#96BE11]/20 rounded-lg flex items-center justify-center group-hover:bg-[#96BE11]/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Av. 45 nro 6865 (colectora R12, pegado a Madre selva), Posadas, Misiones</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#EF9202]/20 rounded-lg flex items-center justify-center group-hover:bg-[#EF9202]/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#EF9202]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">+54 9 376 451-8356</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-[#96BE11]/20 rounded-lg flex items-center justify-center group-hover:bg-[#96BE11]/30 transition-all duration-300">
                  <svg className="w-5 h-5 text-[#96BE11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">Lun-Sáb: 7:30-12:30 / 15:30-19:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Natural Pet. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#96BE11] text-sm transition-colors duration-200 hover:scale-105 transform">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EF9202] text-sm transition-colors duration-200 hover:scale-105 transform">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect, useRef } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "¡Hola! ¿Necesitas ayuda?",
    "Consulta gratuita disponible",
    "¡Tu mascota te espera!",
    "Nutrición natural 100%"
  ];

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Mostrar el botón después de 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Cambiar mensaje cada 3 segundos
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(messageInterval);
    };
  }, [messages.length]);

  const handleClick = () => {
    const message = "Hola! Me gustaría obtener más información sobre los productos naturales para mi mascota. ¿Podrían ayudarme?";
    const whatsappUrl = `https://wa.me/5493764123456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowMessage(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed bottom-6 right-6 z-50 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        } ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      >
        {/* Main Button */}
        <div className="relative">
          {/* Glow Effect */}
          <div className={`absolute -inset-4 bg-gradient-to-r from-green-500 to-green-400 rounded-full blur-lg opacity-0 transition-all duration-500 ${
            isHovered ? 'opacity-70 scale-125' : 'opacity-0 scale-100'
          }`}></div>
          
          {/* Button Background */}
          <div className={`relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 rounded-full shadow-2xl transition-all duration-500 transform ${
            isHovered ? 'rotate-12' : 'rotate-0'
          }`}>
            {/* Animated Rings */}
            <div className={`absolute inset-0 rounded-full border-2 border-white/30 animate-ping ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}></div>
            <div className={`absolute inset-0 rounded-full border-2 border-white/20 animate-ping delay-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}></div>
            
            {/* WhatsApp Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-white drop-shadow-lg transition-all duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>

            {/* Pulse Effect */}
            <div className={`absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20 ${
              isHovered ? 'scale-150' : 'scale-100'
            }`}></div>
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-white text-xs font-bold">1</span>
          </div>
        </div>
      </button>

      {/* Floating Message */}
      <div className={`fixed bottom-24 right-6 z-40 transition-all duration-500 transform ${
        showMessage ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <div className="relative">
          {/* Message Background */}
          <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-2xl border border-green-200 max-w-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">{messages[currentMessage]}</span>
            </div>
            
            {/* Arrow */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="fixed bottom-6 right-6 z-30 pointer-events-none">
        <div className={`absolute w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75 transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
        }`} style={{ top: '-20px', right: '10px' }}></div>
        <div className={`absolute w-1 h-1 bg-green-300 rounded-full animate-ping opacity-75 transition-all duration-500 delay-300 ${
          isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
        }`} style={{ top: '-30px', right: '20px' }}></div>
        <div className={`absolute w-1.5 h-1.5 bg-green-500 rounded-full animate-ping opacity-75 transition-all duration-500 delay-500 ${
          isHovered ? 'opacity-100 scale-150' : 'opacity-0 scale-100'
        }`} style={{ top: '-15px', right: '30px' }}></div>
      </div>

      {/* Click Ripple Effect */}
      <div className={`fixed bottom-6 right-6 z-40 pointer-events-none transition-all duration-300 ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}>
        <div className="w-16 h-16 rounded-full bg-green-400/20 animate-ping"></div>
      </div>
    </>
  );
};

export default WhatsAppButton;
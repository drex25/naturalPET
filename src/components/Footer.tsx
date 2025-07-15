import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold text-white">Natural Pet</span>
            </div>
            <p className="text-gray-400">
              La primera tienda naturista para mascotas en Posadas, Misiones. 
              Nutrición natural para el bienestar de tu compañero.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#combos" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Combos
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#guia" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Guía práctica
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Productos</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Combo Cachorro</li>
              <li className="text-gray-400">Combo Adulto</li>
              <li className="text-gray-400">Combo Senior</li>
              <li className="text-gray-400">Combo Energía</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Contacto</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">+54 3764 000000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">info@naturalpet.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Natural Pet. Todos los derechos reservados. Hecho con 
            <Heart className="inline h-4 w-4 text-yellow-400 mx-1" />
            para mascotas en Posadas, Misiones.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
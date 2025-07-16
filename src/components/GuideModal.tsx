import React from 'react';
import guiaImage from '../assets/guia.jpeg';
import { X, Download } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = guiaImage;
    link.download = 'guia-practica-naturalpet.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#96BE11]/30 shadow-2xl shadow-[#96BE11]/20">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h3 className="text-2xl font-bold text-white">
            <span className="text-[#96BE11]">Guía</span> Práctica
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="text-center mb-6">
            <p className="text-gray-300 mb-4">
              Descarga nuestra guía práctica completa para potenciar la nutrición de tu mascota
            </p>
          </div>

          {/* Image */}
          <div className="relative mb-6">
            <img
              src={guiaImage}
              alt="Guía Práctica NaturalPET"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-white text-sm font-medium">NaturalPET</span>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center">
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 hover:from-[#EF9202] hover:to-[#EF9202]/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center animate-pulse-glow"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar Guía Completa
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Esta guía incluye consejos prácticos, recetas naturales y todo lo que necesitas para una nutrición saludable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideModal; 
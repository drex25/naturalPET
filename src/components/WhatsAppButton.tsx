import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/543764000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-200 group"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-200" />
    </a>
  );
};

export default WhatsAppButton;
import React from 'react';

interface ChangeNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangeNoticeModal: React.FC<ChangeNoticeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div className="relative mx-4 w-full max-w-md rounded-2xl border border-[#96BE11]/30 bg-gradient-to-b from-gray-900 to-black p-6 shadow-2xl shadow-[#96BE11]/10">
        {/* Accent ring */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#96BE11]/30 via-[#EF9202]/20 to-[#F4D03F]/30 blur-sm" />

        <div className="relative">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#96BE11] to-[#EF9202] text-white">
            <span className="text-2xl">📢</span>
          </div>
          <h3 className="mb-2 text-center font-bebas text-3xl font-bold text-white">¡Nos mudamos y actualizamos horarios!</h3>
          <p className="mb-3 text-center text-gray-300">
            Ahora estamos en <span className="font-semibold text-white">Av. López y Planes 2718</span>, Posadas.
          </p>
          <p className="mb-6 text-center text-gray-300">
            Nuevos horarios: <span className="font-semibold text-white">Lun-Sáb 8:00-12:30 / 16:30-20:30</span>.
          </p>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#96BE11] to-[#96BE11]/90 px-5 py-2.5 font-semibold text-white transition-transform duration-200 hover:scale-[1.02] hover:from-[#EF9202] hover:to-[#EF9202]/90"
              aria-label="Entendido"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeNoticeModal;



import React from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, children }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="glass-strong relative w-full max-w-2xl p-6 rounded-xl shadow-glow-lg grid-bg">
        <button onClick={onClose} className="absolute p-2 text-[var(--text-secondary)] top-4 right-4 hover:text-omni transition-colors rounded-lg hover:bg-omni/10">
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

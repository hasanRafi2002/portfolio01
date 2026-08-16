import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute p-2 text-gray-600 top-4 right-4 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
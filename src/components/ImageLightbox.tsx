import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText: string;
}

export default function ImageLightbox({ isOpen, onClose, imageUrl, altText }: ImageLightboxProps) {
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsAnimate(true), 10);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(timer);
        setIsAnimate(false);
      };
    } else {
      setIsAnimate(false);
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-10">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500 ${ isAnimate ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={onClose}
      ></div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-all duration-500 z-[210] ${ isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
      >
        <X size={32} />
      </button>

      {/* Image Container */}
      <div
        className={`relative max-w-full max-h-full flex items-center justify-center transition-all duration-500 ease-out z-[210] ${ isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={altText}
          className="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-sm"
        />
      </div>
    </div>,
    document.body
  );
}

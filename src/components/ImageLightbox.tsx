import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  imageUrl: string;
  altText: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  onNext,
  onPrev,
  imageUrl,
  altText
}: ImageLightboxProps) {
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center p-4 sm:p-10">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500 ${ isAnimate ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={onClose}
      ></div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className={`absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-all duration-500 z-[220] ${ isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
      >
        <X size={32} />
      </button>

      {/* Main Container */}
      <div
        className="relative w-full h-full flex flex-col items-center justify-center gap-6 z-[210]"
        onClick={onClose}
      >

        {/* Navigation Buttons - Desktop (Hidden on Mobile) */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className={`hidden sm:flex absolute left-0 p-4 text-white/50 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full ${ isAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10' }`}
        >
          <ChevronLeft size={48} strokeWidth={1.5} />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className={`hidden sm:flex absolute right-0 p-4 text-white/50 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full ${ isAnimate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10' }`}
        >
          <ChevronRight size={48} strokeWidth={1.5} />
        </button>

        {/* Image Container */}
        <div
          className={`relative max-w-full max-h-[70vh] sm:max-h-[85vh] flex items-center justify-center transition-all duration-500 ease-out ${ isAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={imageUrl}
            alt={altText}
            className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
          />
        </div>

        {/* Navigation Buttons - Mobile (Below Image) */}
        <div className={`flex sm:hidden items-center gap-12 transition-all duration-700 delay-300 ${ isAnimate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4' }`}>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="p-3 text-white/70 hover:text-white bg-white/10 rounded-full active:scale-90 transition-transform"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="p-3 text-white/70 hover:text-white bg-white/10 rounded-full active:scale-90 transition-transform"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

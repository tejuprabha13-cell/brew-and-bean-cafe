import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#180E06]/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Controls */}
        <div className="w-full flex items-center justify-between pb-3 text-white">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#98A886]/30 text-[#98A886] text-xs font-semibold uppercase tracking-wider">
              {item.category.replace('-', ' ')}
            </span>
            <span className="text-xs text-white/70">&bull; Brew &amp; Bean Visual Archive</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close image lightbox"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Image Frame */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />

          {/* Left / Right Nav Arrows */}
          <button
            onClick={onPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={onNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="w-full text-center mt-4 text-white">
          <h3 className="font-serif text-xl sm:text-2xl font-bold">{item.title}</h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl mx-auto leading-relaxed">
            {item.description}
          </p>
          <p className="text-[11px] text-[#98A886] mt-2">
            Use arrow keys &larr; &rarr; to browse &bull; Esc to close
          </p>
        </div>
      </div>
    </div>
  );
}

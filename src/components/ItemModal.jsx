import React from 'react';
import { X, Sparkles, Flame, MapPin } from 'lucide-react';

export default function ItemModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#38220F]/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#FAF5E6] rounded-3xl shadow-2xl border border-white/40 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Image */}
        <div className="relative h-60 w-full overflow-hidden bg-stone-300">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5E6] via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/70 backdrop-blur-md text-[#38220F] hover:bg-white shadow-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Price Tag Pill */}
          <div className="absolute bottom-3 right-5 px-3.5 py-1 rounded-full bg-[#38220F] text-[#F4EBD0] font-serif text-lg font-bold shadow-md">
            {item.formattedPrice}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#98A886] block mb-1">
              {item.category.replace('-', ' ')}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#38220F]">
              {item.name}
            </h3>
          </div>

          <p className="text-sm text-[#5E564F] leading-relaxed">
            {item.description}
          </p>

          {/* Tasting Notes */}
          {item.tastingNotes && (
            <div className="pt-2">
              <span className="text-xs font-bold text-[#38220F] block mb-2">Tasting Profile</span>
              <div className="flex flex-wrap gap-1.5">
                {item.tastingNotes.map((note, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/80 border border-[#38220F]/10 text-xs font-medium text-[#38220F]"
                  >
                    <Sparkles className="w-3 h-3 text-[#98A886]" />
                    {note}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Coffee Metadata Cards */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-2xl bg-white/60 border border-[#38220F]/10">
              <span className="text-[10px] text-[#5E564F] uppercase font-bold block mb-1">Origin / Farm</span>
              <p className="font-semibold text-[#38220F] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#98A886]" />
                {item.origin || 'Direct Partner Estate'}
              </p>
            </div>
            <div className="p-3 rounded-2xl bg-white/60 border border-[#38220F]/10">
              <span className="text-[10px] text-[#5E564F] uppercase font-bold block mb-1">Roast / Style</span>
              <p className="font-semibold text-[#38220F] flex items-center gap-1">
                <Flame className="w-3 h-3 text-[#98A886]" />
                {item.roastLevel || 'Micro-lot Batch'}
              </p>
            </div>
          </div>

          {/* Dietary Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.dietary?.map((diet, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full bg-[#98A886]/20 text-[#38220F] text-[11px] font-semibold">
                ✓ {diet}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white/60 border-t border-[#38220F]/10 flex items-center justify-between gap-3">
          <div className="text-xs text-[#5E564F]">
            Crafted fresh daily &bull; Ask your barista for custom milk options
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full bg-[#38220F] text-[#F4EBD0] text-xs font-bold hover:bg-[#98A886] hover:text-[#38220F] transition-all cursor-pointer shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

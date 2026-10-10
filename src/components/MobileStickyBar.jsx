import React from 'react';
import { MapPin, Coffee, Phone } from 'lucide-react';

export default function MobileStickyBar({ onNavigate }) {
  return (
    <aside 
      aria-label="Quick mobile actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#38220F]/95 backdrop-blur-md border-t border-[#F4EBD0]/15 px-3 py-2.5 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-2xl flex items-center justify-around gap-2"
    >
      <button
        onClick={() => onNavigate('visit')}
        className="flex-1 py-2 px-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F4EBD0] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
      >
        <MapPin className="w-3.5 h-3.5 text-[#98A886]" />
        <span>Directions</span>
      </button>

      <button
        onClick={() => onNavigate('menu')}
        className="flex-1 py-2 px-2.5 rounded-full bg-[#98A886] hover:bg-[#81946F] text-[#38220F] text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-colors cursor-pointer"
      >
        <Coffee className="w-3.5 h-3.5" />
        <span>Menu</span>
      </button>

      <a
        href="tel:5550198372"
        className="flex-1 py-2 px-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F4EBD0] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#98A886]" />
        <span>Call</span>
      </a>
    </aside>
  );
}

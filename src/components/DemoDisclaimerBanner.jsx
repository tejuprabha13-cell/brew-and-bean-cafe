import React from 'react';
import { Sparkles, Info } from 'lucide-react';

export default function DemoDisclaimerBanner() {
  return (
    <aside aria-label="Demo notice" className="bg-[#38220F] text-[#F4EBD0] text-xs py-2 px-4 border-b border-[#F4EBD0]/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#98A886]/20 text-[#98A886] font-semibold tracking-wide border border-[#98A886]/30 uppercase text-[10px]">
          <Sparkles className="w-3 h-3" />
          Interactive Prototype
        </span>
        <span className="text-[#F4EBD0]/90">
          Brew &amp; Bean Café is a fictional portfolio showcase built with <strong>Vite + React &amp; Tailwind CSS</strong>.
        </span>
        <span className="hidden md:inline-flex items-center gap-1 text-[#98A886]">
          <Info className="w-3 h-3" />
          Zero AI-slop &bull; 21st.dev inspired craft components
        </span>
      </div>
    </aside>
  );
}

import React from 'react';
import { Coffee, ArrowUp, Heart } from 'lucide-react';

export default function Footer({ onNavigate, onOpenLegalModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#38220F] text-[#F4EBD0] pt-16 pb-24 md:pb-12 border-t border-[#F4EBD0]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F4EBD0]/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#98A886] text-[#38220F] flex items-center justify-center font-bold">
                <Coffee className="w-5 h-5 text-[#38220F]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F4EBD0]">
                Brew &amp; Bean
              </span>
            </div>

            <p className="text-xs text-[#F4EBD0]/75 leading-relaxed max-w-sm">
              The Elevated Everyday. Bridging high-end specialty coffee craft with comfortable neighborhood hospitality. Fictional prototype built for modern web design portfolio demonstration.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#98A886] hover:text-[#38220F] flex items-center justify-center transition-colors text-xs font-bold"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#98A886] hover:text-[#38220F] flex items-center justify-center transition-colors text-xs font-bold"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#98A886] hover:text-[#38220F] flex items-center justify-center transition-colors text-xs font-bold"
              >
                TT
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F4EBD0] relative inline-block pb-1">
              Navigation
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#98A886]"></span>
            </h4>
            <ul className="space-y-2 text-xs text-[#F4EBD0]/80">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-[#98A886] transition-colors cursor-pointer">
                  Home &bull; Front Porch
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('menu')} className="hover:text-[#98A886] transition-colors cursor-pointer">
                  Craft Menu &bull; 9+ Items
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('vibe')} className="hover:text-[#98A886] transition-colors cursor-pointer">
                  The Vibe &bull; The Third Space
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('story')} className="hover:text-[#98A886] transition-colors cursor-pointer">
                  Our Story &bull; Direct Trade
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-[#98A886] transition-colors cursor-pointer">
                  Visual Gallery &bull; 12 Photos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('visit')} className="hover:text-[#98A886] transition-colors cursor-pointer">
                  Visit Us &bull; Map &amp; Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F4EBD0] relative inline-block pb-1">
              Opening Hours
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#98A886]"></span>
            </h4>
            <div className="space-y-2 text-xs text-[#F4EBD0]/80">
              <div className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="font-bold text-[#F4EBD0]">6:30 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat – Sun:</span>
                <span className="font-bold text-[#F4EBD0]">8:00 AM – 9:00 PM</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] text-[#F4EBD0]/70">
                <p>124 Artisan Way, Coffee District</p>
                <p className="mt-1">
                  <a href="tel:5550198372" className="text-[#98A886] font-bold hover:underline">(555) 019-8372</a>
                </p>
              </div>
            </div>
          </div>

          {/* Back to top (2 cols) */}
          <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-2xl bg-white/10 hover:bg-[#98A886] hover:text-[#38220F] transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
            <p className="text-[10px] text-[#F4EBD0]/50 text-right mt-auto">
              Vite 8 &bull; React 19 &bull; Tailwind v4
            </p>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F4EBD0]/60">
          <p>
            &copy; {new Date().getFullYear()} Brew &amp; Bean Café. Fictional Showcase Prototype.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-[#F4EBD0] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-[#F4EBD0] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

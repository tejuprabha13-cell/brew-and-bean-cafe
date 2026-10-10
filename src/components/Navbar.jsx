import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Volume2, VolumeX, ArrowRight, Clock } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate, ambientPlaying, toggleAmbient }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate live open status based on brief: Mon-Fri 6:30 AM-8:00 PM, Sat-Sun 8:00 AM-9:00 PM
  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const isWeekend = day === 0 || day === 6;
    const openMinutes = isWeekend ? 8 * 60 : 6 * 60 + 30;
    const closeMinutes = isWeekend ? 21 * 60 : 20 * 60;

    setIsOpenNow(currentMinutes >= openMinutes && currentMinutes <= closeMinutes);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'vibe', label: 'The Vibe' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Story' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'visit', label: 'Visit Us' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'py-2.5 bg-[#F4EBD0]/90 backdrop-blur-md shadow-sm border-b border-[#38220F]/10' : 'py-4 bg-[#F4EBD0]/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with 21st.dev style subtle badge */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[#38220F] text-[#F4EBD0] flex items-center justify-center shadow-md shadow-[#38220F]/10 group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 text-[#98A886]" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#38220F] block leading-none">
                Brew &amp; Bean
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#98A886] mt-0.5 block">
                Elevated Everyday
              </span>
            </div>
          </button>

          {/* Center Pill Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#FAF5E6]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#38220F]/10 shadow-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#38220F] text-[#F4EBD0] shadow-sm'
                      : 'text-[#2B2B2B] hover:text-[#38220F] hover:bg-[#38220F]/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Status Indicator */}
            <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-[#38220F]/10 text-xs font-medium text-[#38220F]">
              <span className={`w-2 h-2 rounded-full animate-pulse ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span>{isOpenNow ? 'Open Now until 8 PM' : 'Opens Tomorrow at 6:30 AM'}</span>
            </div>

            {/* Ambient Sound Generator Button */}
            <button
              onClick={toggleAmbient}
              title={ambientPlaying ? 'Mute gentle café ambience' : 'Play relaxing café brown noise'}
              aria-label={ambientPlaying ? 'Mute gentle café ambience' : 'Play relaxing café brown noise'}
              className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                ambientPlaying 
                  ? 'bg-[#98A886] text-[#38220F] border-[#98A886] shadow-sm' 
                  : 'bg-white/60 text-[#38220F] border-[#38220F]/10 hover:bg-white'
              }`}
            >
              {ambientPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('visit')}
              className="shine-hover inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#98A886] text-[#38220F] text-xs font-bold tracking-wide border border-[#98A886] shadow-sm hover:bg-[#81946F] hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span>Visit Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleAmbient}
              aria-label="Toggle ambient café audio"
              className="p-2 rounded-full bg-white/60 text-[#38220F] border border-[#38220F]/10"
            >
              {ambientPlaying ? <Volume2 className="w-4 h-4 text-[#98A886]" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl bg-[#38220F]/5 text-[#38220F] border border-[#38220F]/10 hover:bg-[#38220F]/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#FAF5E6] border-b border-[#38220F]/15 shadow-xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#38220F]/10">
            <div className="flex items-center gap-2 text-xs font-medium text-[#38220F]">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span>{isOpenNow ? 'Open Now &bull; Closes 8:00 PM' : 'Currently Closed &bull; Opens 6:30 AM'}</span>
            </div>
            <span className="text-[11px] text-[#5E564F]">124 Artisan Way</span>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-[#38220F] text-[#F4EBD0]'
                    : 'text-[#2B2B2B] hover:bg-[#38220F]/5'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <ArrowRight className="w-4 h-4 text-[#98A886]" />}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-[#38220F]/10 grid grid-cols-2 gap-2">
            <a
              href="tel:5550198372"
              className="py-2.5 px-3 text-center rounded-xl bg-white border border-[#38220F]/15 text-xs font-bold text-[#38220F]"
            >
              📞 (555) 019-8372
            </a>
            <button
              onClick={() => handleNavClick('visit')}
              className="py-2.5 px-3 text-center rounded-xl bg-[#98A886] text-xs font-bold text-[#38220F]"
            >
              📍 Get Directions
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

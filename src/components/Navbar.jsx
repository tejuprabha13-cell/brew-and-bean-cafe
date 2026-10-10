import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Volume2, VolumeX, ArrowRight, MapPin, Phone } from 'lucide-react';
import { CAFE_CONFIG, getLiveStatus } from '../data/cafeConfig';

export default function Navbar({ activeSection, onNavigate, ambientPlaying, toggleAmbient }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveStatus, setLiveStatus] = useState(() => getLiveStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check live status on mount and update periodically
  useEffect(() => {
    setLiveStatus(getLiveStatus());
    const interval = setInterval(() => {
      setLiveStatus(getLiveStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-2.5 bg-[#F4EBD0]/95 backdrop-blur-md shadow-sm border-b border-[#38220F]/10' 
          : 'py-4 bg-[#F4EBD0]/85 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Brand Logo with tactile button */}
          <button 
            onClick={() => handleNavClick('hero')} 
            aria-label={`${CAFE_CONFIG.name} Home`}
            className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#38220F] text-[#F4EBD0] flex items-center justify-center shadow-md shadow-[#38220F]/10 group-hover:scale-105 transition-transform duration-200">
              <Coffee className="w-5 h-5 text-[#98A886]" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#38220F] block leading-none">
                {CAFE_CONFIG.shortName}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#98A886] mt-0.5 block">
                {CAFE_CONFIG.subtitle}
              </span>
            </div>
          </button>

          {/* Center Pill Navigation (Desktop Only) */}
          <nav 
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-[#FAF5E6]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#38220F]/10 shadow-sm"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
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

          {/* Right Action Area (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Live Open Status Indicator */}
            <div className="hidden xl:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#38220F]/10 text-xs font-medium text-[#38220F] shadow-xs">
              <span className={`w-2 h-2 rounded-full ${liveStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span>{liveStatus.statusText}</span>
            </div>

            {/* Ambient Sound Generator Button */}
            <button
              onClick={toggleAmbient}
              title={ambientPlaying ? 'Mute gentle café ambience' : 'Play relaxing café brown noise'}
              aria-label={ambientPlaying ? 'Mute gentle café ambience' : 'Play relaxing café brown noise'}
              className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                ambientPlaying 
                  ? 'bg-[#98A886] text-[#38220F] border-[#98A886] shadow-sm' 
                  : 'bg-white/70 text-[#38220F] border-[#38220F]/15 hover:bg-white hover:border-[#38220F]/30'
              }`}
            >
              {ambientPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('visit')}
              aria-label="Visit Us and get directions"
              className="shine-hover inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#98A886] text-[#38220F] text-xs font-bold tracking-wide border border-[#98A886] shadow-sm hover:bg-[#81946F] hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span>Visit Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Actions (Screen < 1024px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleAmbient}
              aria-label={ambientPlaying ? 'Mute ambient café audio' : 'Play ambient café audio'}
              className="p-2.5 rounded-full bg-white/70 text-[#38220F] border border-[#38220F]/15"
            >
              {ambientPlaying ? <Volume2 className="w-4 h-4 text-[#98A886]" /> : <VolumeX className="w-4 h-4 text-stone-500" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl bg-white/80 text-[#38220F] border border-[#38220F]/15 hover:bg-[#38220F]/10 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Clean Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden px-4 pt-3 pb-6 bg-[#FAF5E6] border-b border-[#38220F]/15 shadow-xl animate-in slide-in-from-top-3 duration-200"
        >
          {/* Status Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#38220F]/10">
            <div className="flex items-center gap-2 text-xs font-medium text-[#38220F]">
              <span className={`w-2 h-2 rounded-full ${liveStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
              <span>{liveStatus.statusText}</span>
            </div>
            <span className="text-[11px] text-[#5E564F]">{CAFE_CONFIG.location.address}</span>
          </div>

          {/* Nav List */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between min-h-[44px] cursor-pointer ${
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

          {/* Quick Action Buttons in Mobile Menu */}
          <div className="mt-4 pt-3 border-t border-[#38220F]/10 grid grid-cols-2 gap-2">
            <a
              href={CAFE_CONFIG.contact.phoneTel}
              aria-label={`Call ${CAFE_CONFIG.name} at ${CAFE_CONFIG.contact.phoneDisplay}`}
              className="py-3 px-3 text-center rounded-xl bg-white border border-[#38220F]/15 text-xs font-bold text-[#38220F] flex items-center justify-center gap-1.5 min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#98A886]" />
              <span>{CAFE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <button
              onClick={() => handleNavClick('visit')}
              aria-label="Get Directions to Brew and Bean Cafe"
              className="py-3 px-3 text-center rounded-xl bg-[#98A886] text-xs font-bold text-[#38220F] flex items-center justify-center gap-1.5 min-h-[44px] cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

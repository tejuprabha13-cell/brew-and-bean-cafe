import React from 'react';
import { ArrowRight, MapPin, Coffee, Sparkles, Sprout, Flame, Croissant } from 'lucide-react';
import { CAFE_CONFIG } from '../data/cafeConfig';

export default function Hero({ onExploreMenu, onPlanVisit }) {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Subtle ambient warm lighting blur behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#98A886]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Subtle Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5E6] border border-[#38220F]/15 shadow-sm text-xs font-semibold text-[#38220F]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#98A886] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#98A886]"></span>
              </span>
              <span>{CAFE_CONFIG.subtitle} &bull; {CAFE_CONFIG.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#38220F] leading-[1.12]">
              Craft Coffee. <br className="hidden sm:inline" />
              <span className="text-[#38220F]/90 italic font-normal">Cozy Corners.</span> <br />
              <span className="relative inline-block">
                Genuine Connection.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#98A886]/60" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,8 Q50,0 100,6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline with improved breathing room */}
            <p className="text-base sm:text-lg text-[#5E564F] max-w-xl font-normal leading-relaxed pt-1">
              {CAFE_CONFIG.description}
            </p>

            {/* Dual CTAs with clear, accurate destinations */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                aria-label="View the craft coffee and food menu"
                className="shine-hover group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#98A886] text-[#38220F] text-sm font-bold tracking-wide border-2 border-[#98A886] shadow-md shadow-[#98A886]/20 hover:bg-[#81946F] hover:border-[#81946F] hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <span>View the Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onPlanVisit}
                aria-label="Get directions and view opening hours for Brew and Bean Cafe"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-[#38220F] text-sm font-bold tracking-wide border-2 border-[#38220F] hover:bg-[#38220F] hover:text-[#F4EBD0] hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#98A886]" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Genuine Specialty Coffee Hallmarks (No invented ratings or reviews) */}
            <div className="pt-5 border-t border-[#38220F]/10 flex flex-wrap items-center gap-6 text-xs text-[#5E564F] font-medium">
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-[#98A886]" />
                <span>Direct-Trade Single Origins</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#98A886]" />
                <span>Fresh Weekly Roasts</span>
              </div>
              <div className="flex items-center gap-2">
                <Croissant className="w-4 h-4 text-[#98A886]" />
                <span>Artisan Morning Bakes</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Clean, Editorial, Less Laptop Focus (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card - Large, beautifully cropped, rounded */}
              <div className="relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-stone-200 group">
                <picture>
                  <source srcSet="/images/specialty-coffee-hero.webp" type="image/webp" />
                  <img
                    src="/images/specialty-coffee-hero.jpg"
                    alt="Artisan ceramic cup with intricate rosetta latte art beside fresh roasted single-origin coffee beans and pour-over kettle at Brew and Bean Café"
                    className="w-full h-[420px] sm:h-[500px] lg:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    fetchPriority="high"
                    loading="eager"
                  />
                </picture>
                
                {/* Subtle warm gradient vignette overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#38220F]/40 via-transparent to-transparent pointer-events-none" />

                {/* Single Subtle Floating Badge (Restrained, elegant, non-bouncing) */}
                <div className="absolute bottom-5 left-5 right-5 sm:right-auto flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-panel border border-white/60 shadow-lg text-xs font-semibold text-[#38220F] backdrop-blur-md">
                  <div className="w-6 h-6 rounded-lg bg-[#38220F] text-[#F4EBD0] flex items-center justify-center font-bold text-xs shrink-0">
                    <Coffee className="w-3.5 h-3.5 text-[#98A886]" />
                  </div>
                  <div>
                    <span className="font-bold block leading-tight">Fresh Weekly Roast</span>
                    <span className="text-[10px] text-[#5E564F] block">Small-Batch Roasted in 12kg Lots</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


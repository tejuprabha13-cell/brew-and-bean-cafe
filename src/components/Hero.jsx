import React from 'react';
import { ArrowRight, Sparkles, Wifi, ShieldCheck, Star, MapPin } from 'lucide-react';

export default function Hero({ onExploreMenu, onPlanVisit }) {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Subtle ambient warm lighting blur behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#98A886]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* 21st.dev Style Pulsing Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5E6] border border-[#38220F]/15 shadow-sm text-xs font-semibold text-[#38220F]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#98A886] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#98A886]"></span>
              </span>
              <span>The Elevated Everyday &bull; Specialty Roastery &amp; Café</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#38220F] leading-[1.12]">
              Craft Coffee. <br className="hidden sm:inline" />
              <span className="text-[#38220F]/90 italic font-normal">Cozy Corners.</span> <br />
              <span className="relative inline-block">
                Genuine Connection.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#98A886]/60" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#5E564F] max-w-xl font-normal leading-relaxed">
              Your neighborhood retreat for specialty roasts, fresh bites, and a space to simply be. Premium quality without the pretension.
            </p>

            {/* Dual CTAs with 21st.dev button treatments */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="shine-hover group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#98A886] text-[#38220F] text-sm font-bold tracking-wide border-2 border-[#98A886] shadow-md shadow-[#98A886]/20 hover:bg-[#81946F] hover:border-[#81946F] hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                <span>View the Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onPlanVisit}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent text-[#38220F] text-sm font-bold tracking-wide border-2 border-[#38220F] hover:bg-[#38220F] hover:text-[#F4EBD0] hover:scale-105 transition-all duration-200 cursor-pointer shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Find Your Seat</span>
              </button>
            </div>

            {/* Micro-Features List */}
            <div className="pt-4 border-t border-[#38220F]/10 flex flex-wrap items-center gap-6 text-xs text-[#5E564F] font-medium">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-[#98A886]" />
                <span>1Gbps Gigabit Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#98A886]" />
                <span>Abundant Outlets</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-600 fill-amber-500" />
                <span>4.9 Star Community Rating</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with 21st.dev Floating Stat Cards (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Image Card */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-stone-200">
                <img
                  src="/images/hero-home.webp"
                  alt="Cozy golden hour laptop workspace with latte art at Brew and Bean Cafe"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  fetchPriority="high"
                />
                
                {/* Gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#38220F]/60 via-transparent to-transparent pointer-events-none" />

                {/* Bottom caption in image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="glass-panel p-3 rounded-2xl border border-white/20 text-[#38220F]">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span>The Focus Nook</span>
                      <span className="text-[#98A886] font-bold">124 Artisan Way</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top-Right Floating Pill Badge */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl glass-panel border border-white/60 shadow-lg text-xs font-bold text-[#38220F] animate-bounce duration-1000">
                <Sparkles className="w-4 h-4 text-[#98A886]" />
                <span>Fresh Weekly Roast</span>
              </div>

              {/* Bottom-Left Floating Stat Card */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3.5 rounded-2xl glass-panel border border-white/60 shadow-xl max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#98A886] text-[#38220F] flex items-center justify-center font-bold text-sm shadow-sm">
                    ☕
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#38220F] leading-tight">Velvet Microfoam</p>
                    <p className="text-[11px] text-[#5E564F] mt-0.5">Steamed to 62°C perfection</p>
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

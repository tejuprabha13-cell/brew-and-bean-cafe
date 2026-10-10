import React from 'react';
import { Sparkles, Flame, Wifi, Leaf, HeartHandshake, Award } from 'lucide-react';

export default function TheVibeBento() {
  return (
    <section id="vibe" className="py-16 md:py-24 bg-[#FAF5E6] border-y border-[#38220F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#98A886]/20 text-[#38220F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#98A886]" />
            The Vibe &amp; Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#38220F] tracking-tight">
            More than just a cup of coffee.
          </h2>
          <p className="mt-3 text-[#5E564F] text-base leading-relaxed">
            Whether you're settling in for a deep-work session, catching up with an old friend, or watching the world go by, Brew &amp; Bean was designed for you.
          </p>
        </div>

        {/* 21st.dev Style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Tile 1: The Third Space (Span 8 cols) */}
          <div className="md:col-span-8 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10 max-w-md">
              <span className="text-xs font-bold uppercase tracking-wider text-[#98A886] mb-2 block">
                Atmosphere &bull; The Third Space
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38220F] mb-3">
                Bridging specialty roasting &amp; neighborhood warmth.
              </h3>
              <p className="text-sm text-[#5E564F] leading-relaxed mb-4">
                We pair meticulously sourced beans with an atmosphere that feels like home. Unhurried mornings, curated lo-fi acoustics, and friendly baristas who know your roast preferences.
              </p>
              <div className="p-3.5 rounded-2xl bg-white/80 border border-[#38220F]/10 text-xs text-[#38220F] italic font-serif">
                &ldquo;Not home, not office, but the comfortable third place where you belong.&rdquo;
              </div>
            </div>

            <div className="mt-6 md:mt-0 md:absolute md:right-0 md:bottom-0 md:w-5/12 md:h-full overflow-hidden rounded-2xl md:rounded-l-none">
              <img
                src="/images/cafe-interior.webp"
                alt="Brew and Bean interior showing brick walls and patrons"
                className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#FAF5E6] via-transparent to-transparent md:block hidden" />
            </div>
          </div>

          {/* Bento Tile 2: Gigabit Wi-Fi (Span 4 cols) */}
          <div className="md:col-span-4 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#98A886]/20 text-[#38220F] flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-[#98A886]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#38220F] mb-2">
                Free High-Speed Wi-Fi
              </h3>
              <p className="text-xs text-[#5E564F] leading-relaxed">
                Fiber-optic gigabit internet with dedicated charging outlets at every banquette and communal table. Perfect for remote deep-work.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#38220F]/10 flex items-center justify-between text-xs font-semibold text-[#38220F]">
              <span>Password: None</span>
              <span className="text-[#98A886] font-bold">1000 Mbps</span>
            </div>
          </div>

          {/* Bento Tile 3: Locally Roasted Beans (Span 4 cols) */}
          <div className="md:col-span-4 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#38220F] text-[#F4EBD0] flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-[#98A886]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#38220F] mb-2">
                Locally Roasted Beans
              </h3>
              <p className="text-xs text-[#5E564F] leading-relaxed">
                Direct-trade green coffee sourced ethically from small-holder farms, roasted in small weekly 12kg batches right here in our city.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#38220F]/10 flex items-center justify-between text-xs font-semibold text-[#38220F]">
              <span>Batch Profiling</span>
              <span className="text-[#98A886] font-bold">Weekly Fresh</span>
            </div>
          </div>

          {/* Bento Tile 4: Vegan Options Available (Span 4 cols) */}
          <div className="md:col-span-4 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#98A886]/20 text-[#38220F] flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-[#98A886]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#38220F] mb-2">
                Vegan &amp; Plant Forward
              </h3>
              <p className="text-xs text-[#5E564F] leading-relaxed">
                House-crafted oat and macadamia milks with gluten-friendly pastries that never compromise on rich taste or delicate crumb.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#38220F]/10 flex items-center justify-between text-xs font-semibold text-[#38220F]">
              <span>Oat &bull; Almond &bull; Soy</span>
              <span className="text-[#98A886] font-bold">No Surcharge</span>
            </div>
          </div>

          {/* Bento Tile 5: Direct Trade Partnerships (Span 4 cols) */}
          <div className="md:col-span-4 glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#38220F] text-[#F4EBD0] flex items-center justify-center mb-4">
                <HeartHandshake className="w-6 h-6 text-[#98A886]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#38220F] mb-2">
                Sustainable Direct Trade
              </h3>
              <p className="text-xs text-[#5E564F] leading-relaxed">
                Paying 40%+ above Fair Trade minimums directly to multi-generational farming families in Huila, Antigua, and Yirgacheffe.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#38220F]/10 flex items-center justify-between text-xs font-semibold text-[#38220F]">
              <span>Traceable Lots</span>
              <span className="text-[#98A886] font-bold">100% Ethical</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

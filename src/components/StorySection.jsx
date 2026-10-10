import React, { useState } from 'react';
import { Sparkles, Heart, Sprout, Flame, Users, ArrowRight } from 'lucide-react';

export default function StorySection({ onExploreMenu }) {
  const [activeTab, setActiveTab] = useState('roots');

  const tabs = [
    { id: 'roots', label: 'Our Genesis', icon: Sprout },
    { id: 'craft', label: 'The Roasting Art', icon: Flame },
    { id: 'community', label: 'The Third Space', icon: Users }
  ];

  return (
    <section id="story" className="py-16 md:py-24 bg-[#FAF5E6] border-y border-[#38220F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#98A886]/20 text-[#38220F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#98A886]" />
            Behind the Counter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38220F] tracking-tight">
            Rooted in Craft. Poured with Care.
          </h2>
          <p className="mt-3 text-[#5E564F] text-base leading-relaxed">
            Brew &amp; Bean Café started with a simple belief: exceptional coffee shouldn't feel exclusive.
          </p>
        </div>

        {/* 21st.dev Style Interactive Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#38220F] text-[#F4EBD0] shadow-md scale-105'
                    : 'bg-white/80 text-[#38220F] border border-[#38220F]/10 hover:bg-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#98A886]' : 'text-[#5E564F]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Narrative Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === 'roots' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38220F]">
                  Democratizing the world of specialty coffee.
                </h3>
                <p className="text-sm text-[#5E564F] leading-relaxed">
                  We wanted to build a space that honored the complex art of specialty roasting, while remaining as welcoming as your own living room. We partner directly with sustainable farms to bring you beans that tell a story, roasted locally to highlight their natural profiles.
                </p>
                <p className="text-sm text-[#5E564F] leading-relaxed">
                  By cutting out intermediaries and purchasing direct-trade micro-lots, we guarantee transparency for coffee producers while bringing our guests extraordinary cup profiles.
                </p>
              </div>
            )}

            {activeTab === 'craft' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38220F]">
                  12-Kilogram Batches &bull; Exacting Temperature Curves.
                </h3>
                <p className="text-sm text-[#5E564F] leading-relaxed">
                  Every bean variety holds a unique regional terroir. Our master roaster monitors thermal curves second-by-second to balance citric sweetness, stone fruit acidity, and rich cocoa body.
                </p>
                <p className="text-sm text-[#5E564F] leading-relaxed">
                  From custom water minerality (TDS calibrated to 130ppm) to 62°C milk microfoam, every single pour is handled with pride and obsessive intention.
                </p>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#38220F]">
                  A true neighborhood third space for everyone.
                </h3>
                <p className="text-sm text-[#5E564F] leading-relaxed">
                  A great café is about more than what’s in the cup. It’s about the hum of conversation, the comfort of a good pastry, and the community that builds around the counter.
                </p>
                <p className="text-sm text-[#5E564F] leading-relaxed">
                  Whether you're presenting a startup deck over our fiber internet or sharing a slice of Basque cheesecake on a Sunday afternoon: come as you are, stay as long as you'd like.
                </p>
              </div>
            )}

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#38220F]/10">
              <div className="p-3 rounded-2xl bg-white/70 border border-[#38220F]/10 text-center">
                <p className="font-serif text-xl font-bold text-[#38220F]">14</p>
                <p className="text-[10px] text-[#5E564F] font-semibold uppercase mt-0.5">Partner Estates</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-[#38220F]/10 text-center">
                <p className="font-serif text-xl font-bold text-[#38220F]">100%</p>
                <p className="text-[10px] text-[#5E564F] font-semibold uppercase mt-0.5">Direct-Trade</p>
              </div>
              <div className="p-3 rounded-2xl bg-white/70 border border-[#38220F]/10 text-center">
                <p className="font-serif text-xl font-bold text-[#38220F]">6:30 AM</p>
                <p className="text-[10px] text-[#5E564F] font-semibold uppercase mt-0.5">Daily Bakes</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreMenu}
                className="shine-hover inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#98A886] text-[#38220F] text-xs font-bold hover:bg-[#81946F] hover:text-white transition-all cursor-pointer shadow-sm"
              >
                <span>Taste the Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Media Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden border-2 border-white shadow-lg h-56 sm:h-64 bg-stone-200">
                  <img
                    src="/images/our-story-craft.webp"
                    alt="Master roaster examining roasted whole beans"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 rounded-3xl bg-white/80 border border-[#38220F]/10 shadow-sm text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#98A886] block">Direct Sourcing</span>
                  <p className="font-serif text-sm font-bold text-[#38220F] mt-1">Huila &bull; Yirgacheffe &bull; Antigua</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-3xl bg-[#38220F] text-[#F4EBD0] shadow-md text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#98A886] block">Barista Standard</span>
                  <p className="font-serif text-sm font-bold mt-1">Silk Microfoam at 62°C</p>
                </div>
                <div className="rounded-3xl overflow-hidden border-2 border-white shadow-lg h-56 sm:h-64 bg-stone-200">
                  <img
                    src="/images/barista-latte-art.webp"
                    alt="Barista pouring rosette latte art"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

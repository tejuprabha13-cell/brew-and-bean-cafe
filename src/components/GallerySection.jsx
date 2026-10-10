import React, { useState, useMemo } from 'react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Sparkles, Maximize2, MapPin } from 'lucide-react';

export default function GallerySection({ onOpenLightbox, onPlanVisit }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredItems = useMemo(() => {
    if (selectedFilter === 'all') return galleryItems;
    return galleryItems.filter(item => item.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#98A886]/20 text-[#38220F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#98A886]" />
            Visual Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38220F] tracking-tight">
            Life Inside Brew &amp; Bean
          </h2>
          <p className="mt-3 text-[#5E564F] text-base leading-relaxed">
            Catch a glimpse of the roasting rhythm, sunlit study tables, velvety microfoam, and morning bakery aromas.
          </p>
        </div>

        {/* 21st.dev Style Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {galleryCategories.map(cat => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#38220F] text-[#F4EBD0] shadow-md scale-105'
                    : 'bg-white/80 text-[#38220F] border border-[#38220F]/10 hover:bg-white hover:border-[#38220F]/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = item.featured && selectedFilter === 'all';
            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item, index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-md border border-[#38220F]/10 bg-stone-200 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* 21st.dev Style Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#221407]/90 via-[#221407]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#98A886]">
                      {item.tag || item.category.replace('-', ' ')}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold leading-tight text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Always visible small pill on mobile touch */}
                <div className="sm:hidden absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#5E564F] mb-4">
            Want to see our roastery in action or find your cozy corner?
          </p>
          <button
            onClick={onPlanVisit}
            className="shine-hover inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#98A886] text-[#38220F] text-xs font-bold hover:bg-[#81946F] hover:text-white transition-all shadow-md cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            <span>Plan Your Visit Today</span>
          </button>
        </div>

      </div>
    </section>
  );
}

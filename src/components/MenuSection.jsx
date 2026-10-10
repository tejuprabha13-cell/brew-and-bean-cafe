import React, { useState, useMemo } from 'react';
import { menuCategories, menuItems } from '../data/menuData';
import { Sparkles, Search, ChevronDown, ChevronUp, Eye, CheckCircle2 } from 'lucide-react';

export default function MenuSection({ onSelectItem }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('all');
  
  // Mobile accordion open states (default open all on desktop, toggleable on mobile)
  const [openAccordions, setOpenAccordions] = useState({
    'specialty-coffee': true,
    'cold-beverages': true,
    'breakfast-bites': true,
    'desserts': true
  });

  const toggleAccordion = (catId) => {
    setOpenAccordions(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  // Filter items
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDiet = selectedDiet === 'all' || (item.dietary && item.dietary.some(d => d.toLowerCase().includes(selectedDiet.toLowerCase())));
      return matchesCat && matchesSearch && matchesDiet;
    });
  }, [selectedCategory, searchQuery, selectedDiet]);

  // Group items by category for structured layout
  const categoriesToRender = useMemo(() => {
    if (selectedCategory !== 'all') {
      return menuCategories.filter(c => c.id === selectedCategory);
    }
    return menuCategories.filter(c => c.id !== 'all');
  }, [selectedCategory]);

  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#98A886]/20 text-[#38220F] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#98A886]" />
            Seasonal Selections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#38220F] tracking-tight">
            Curated for the Cravings.
          </h2>
          <p className="mt-3 text-[#5E564F] text-base leading-relaxed">
            From precision pour overs and nitrogen-infused drafts to house-simmered onion jam brioche and molten Basque cheesecake.
          </p>
        </div>

        {/* 21st.dev Filter Controls & Search Bar */}
        <div className="space-y-4 mb-12">
          
          {/* Main Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {menuCategories.map(cat => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
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

          {/* Search Input & Dietary Quick Filter */}
          <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#5E564F] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search roasts, pastries, breakfast..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/90 border border-[#38220F]/15 text-xs text-[#38220F] placeholder-[#5E564F]/60 focus:outline-none focus:ring-2 focus:ring-[#98A886] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {['all', 'vegan', 'dairy-free', 'gluten-friendly'].map(diet => (
                <button
                  key={diet}
                  onClick={() => setSelectedDiet(diet)}
                  className={`px-2.5 py-1.5 rounded-full text-[11px] font-semibold capitalize whitespace-nowrap transition-colors cursor-pointer ${
                    selectedDiet === diet
                      ? 'bg-[#98A886] text-[#38220F]'
                      : 'bg-white/50 text-[#5E564F] hover:bg-white'
                  }`}
                >
                  {diet === 'all' ? 'All Diets' : diet}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Menu Categories Accordion & Grid */}
        <div className="space-y-12">
          {categoriesToRender.map(cat => {
            const itemsInCat = filteredItems.filter(i => i.category === cat.id);
            if (itemsInCat.length === 0) return null;
            const isOpen = openAccordions[cat.id] ?? true;

            return (
              <div key={cat.id} className="bg-[#FAF5E6] rounded-3xl p-6 sm:p-8 border border-[#38220F]/10 shadow-sm">
                
                {/* Category Header with Accordion Toggle for Mobile */}
                <div 
                  onClick={() => toggleAccordion(cat.id)}
                  className="flex items-center justify-between pb-4 border-b border-[#38220F]/10 mb-6 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#38220F] text-[#F4EBD0] flex items-center justify-center font-bold text-xs">
                      {itemsInCat.length}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#38220F] group-hover:text-[#81946F] transition-colors">
                        {cat.label}
                      </h3>
                      <p className="text-xs text-[#5E564F]">Handcrafted fresh with premium artisan ingredients</p>
                    </div>
                  </div>

                  <button 
                    aria-label={`Toggle ${cat.label}`} 
                    className="p-1.5 rounded-full bg-white/80 text-[#38220F] sm:hidden"
                  >
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Items Grid */}
                {isOpen && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
                    {itemsInCat.map(item => (
                      <article
                        key={item.id}
                        onClick={() => onSelectItem(item)}
                        className="glass-card rounded-2xl p-4 flex flex-col justify-between group cursor-pointer border border-[#38220F]/10 hover:border-[#98A886]/40"
                      >
                        <div>
                          {/* Item Thumbnail */}
                          <div className="relative h-44 rounded-xl overflow-hidden mb-3 bg-stone-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-[#38220F]/90 backdrop-blur-sm text-[#F4EBD0] font-serif text-xs font-bold">
                              {item.formattedPrice}
                            </div>
                            <div className="absolute inset-0 bg-[#38220F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 text-[#38220F] text-xs font-bold shadow-md">
                                <Eye className="w-3.5 h-3.5" /> View Notes
                              </span>
                            </div>
                          </div>

                          {/* Item Info */}
                          <div className="space-y-1">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="font-serif text-lg font-bold text-[#38220F] group-hover:text-[#81946F] transition-colors leading-snug">
                                {item.name}
                              </h4>
                            </div>
                            <p className="text-xs text-[#5E564F] line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Item Footer Tags */}
                        <div className="mt-4 pt-3 border-t border-[#38220F]/10 flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {item.tags.slice(0, 2).map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded-md bg-[#98A886]/15 text-[#38220F] text-[10px] font-semibold">
                                {t}
                              </span>
                            ))}
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectItem(item);
                            }}
                            className="text-[11px] font-bold text-[#98A886] hover:text-[#38220F] transition-colors"
                          >
                            Tasting Profile &rarr;
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-white/60 rounded-3xl border border-dashed border-[#38220F]/20">
              <p className="text-sm text-[#5E564F]">No menu items found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedDiet('all'); }}
                className="mt-3 px-4 py-2 rounded-full bg-[#38220F] text-[#F4EBD0] text-xs font-bold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Dietary Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#98A886]/15 border border-[#98A886]/30 text-center max-w-3xl mx-auto">
          <h4 className="font-serif text-base font-bold text-[#38220F] mb-1">
            🌱 Dietary Accommodations &amp; Custom Milks
          </h4>
          <p className="text-xs text-[#5E564F]">
            We gladly steam Minor Figures Oat Milk, Sprouted Almond, or Organic Soy at zero extra surcharge. Let your barista know if you have any gluten, dairy, or nut allergies.
          </p>
        </div>

      </div>
    </section>
  );
}

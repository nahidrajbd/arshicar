import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Camera, Eye, X, ChevronRight, CheckCircle } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'All', label: 'All Work' },
    { id: 'Wash', label: 'Car Wash' },
    { id: 'BeforeAfter', label: 'Before & After' },
    { id: 'DentPaint', label: 'Dent & Paint' },
    { id: 'Workshop', label: 'Workshop' },
    { id: 'Polish', label: 'Car Polish' },
    { id: 'Delivery', label: 'Customer Delivery' },
  ];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 bg-[#121212] text-white relative border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div>
            <span className="editorial-tag">Real Workshop & Showroom Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Our Work <span className="font-editorial italic font-normal text-[#C1121F]">Gallery</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-sans">
            Explore authentic photos from our Rajshahi workshop showcasing car wash, paint restoration, detailing, and proud customer deliveries.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#C1121F] text-white shadow-md'
                  : 'bg-[#1E1E1E] text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-[#1E1E1E] rounded-3xl overflow-hidden border border-stone-800 shadow-xl hover:shadow-2xl hover:border-[#C1121F] transition-all duration-300 cursor-pointer h-72"
            >
              <img
                src={item.image}
                alt={`${item.title} - Arshi Automobile Rajshahi`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4 bg-[#C1121F] text-white text-[10px] uppercase font-black px-3 py-1 rounded-xl shadow-md">
                {item.categoryLabel}
              </div>

              {/* View Icon Button */}
              <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-5 h-5" />
              </div>

              {/* Title & Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h3 className="font-bold font-display text-lg leading-snug group-hover:text-red-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-300 text-xs line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Gallery Detail Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xs">
          <div className="relative bg-stone-900 text-white rounded-3xl max-w-4xl w-full p-6 border border-stone-800 shadow-2xl space-y-4 max-h-[95vh] overflow-y-auto">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white bg-stone-800 rounded-full z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#C1121F] uppercase tracking-wider">{activeItem.categoryLabel}</span>
              <h3 className="text-2xl font-bold font-display text-white">{activeItem.title}</h3>
            </div>

            {/* If Before & After available */}
            {activeItem.beforeImage && activeItem.afterImage ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-xs font-bold text-red-400 uppercase tracking-wider">Before Service</div>
                  <img src={activeItem.beforeImage} alt="Before" className="w-full h-64 object-cover rounded-2xl border border-stone-800" referrerPolicy="no-referrer" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">After Restoration</div>
                  <img src={activeItem.afterImage} alt="After" className="w-full h-64 object-cover rounded-2xl border border-stone-800" referrerPolicy="no-referrer" />
                </div>
              </div>
            ) : (
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-96 object-cover rounded-2xl border border-stone-800"
                referrerPolicy="no-referrer"
              />
            )}

            <p className="text-stone-300 text-sm leading-relaxed">{activeItem.description}</p>

            <div className="flex justify-end border-t border-stone-800 pt-3">
              <button
                onClick={() => setActiveItem(null)}
                className="px-6 py-2.5 bg-[#C1121F] text-white font-bold rounded-xl text-xs hover:bg-[#9E0E18] transition"
              >
                Close Gallery View
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

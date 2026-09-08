import React, { useState } from 'react';
import { BusinessConfig, GalleryItem } from '../types/business';
import { X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  business: BusinessConfig;
}

export const Gallery: React.FC<GalleryProps> = ({ business }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);

  if (!business.gallery || business.gallery.length === 0) return null;

  // Extract unique categories
  const categories = ['Semua', ...Array.from(new Set(business.gallery.map((g) => g.category)))];

  const filteredItems = selectedCategory === 'Semua'
    ? business.gallery
    : business.gallery.filter((g) => g.category === selectedCategory);

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-white scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span 
            className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700"
            style={{ color: business.theme.primaryColor }}
          >
            Dokumentasi Bengkel
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Fasilitas, Mekanik & Aktivitas Servis Kami
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Lihat langsung kebersihan area kerja, kelengkapan alat, dan kepuasan pemilik motor yang mempercayakan kendaraannya kepada kami.
          </p>
        </div>

        {/* Category Filters */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'text-white shadow-md'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                }`}
                style={{
                  backgroundColor: selectedCategory === cat ? business.theme.primaryColor : undefined,
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 aspect-[4/3] cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                  {item.category}
                </span>
                <h4 className="text-base font-bold leading-snug">{item.title}</h4>
                {item.description && (
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">{item.description}</p>
                )}
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-white/90">
                  <ZoomIn className="w-4 h-4" />
                  <span>Klik untuk perbesar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeModalImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div 
              className="fixed inset-0"
              onClick={() => setActiveModalImage(null)} 
            />
            <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl z-10">
              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-[16/10] w-full bg-black">
                <img
                  src={activeModalImage.imageUrl}
                  alt={activeModalImage.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 bg-white">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                  {activeModalImage.category}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{activeModalImage.title}</h3>
                {activeModalImage.description && (
                  <p className="text-sm text-slate-600 mt-1.5">{activeModalImage.description}</p>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

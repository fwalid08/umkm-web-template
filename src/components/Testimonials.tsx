import React from 'react';
import { BusinessConfig } from '../types/business';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { ScrollReveal } from './common/ScrollReveal';
import { ratingSummaryConfig } from '../config/testimonials';

interface TestimonialsProps {
  business: BusinessConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ business }) => {
  if (!business.testimonials || business.testimonials.length === 0) return null;

  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs"
              style={{ color: business.theme.primaryColor }}
            >
              Ulasan Pelanggan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Kepuasan Pelanggan Adalah Prioritas Utama
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Ulasan nyata dari pelanggan setia yang telah merasakan kualitas layanan kami di {business.contact.city}.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {business.testimonials.map((item, idx) => (
            <ScrollReveal 
              key={item.id} 
              direction="up" 
              delay={0.08 * idx}
              className="h-full"
            >
              <div
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-slate-200/80 flex flex-col justify-between transition-all h-full"
              >
                <div>
                  {/* Rating & Quote icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-slate-300" />
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                    loading="lazy"
                  />
                  <div className="overflow-hidden">
                    <div className="flex items-center gap-1">
                      <h4 className="font-bold text-slate-900 text-sm truncate">{item.name}</h4>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    </div>
                    {item.roleOrVehicle && (
                      <p className="text-xs text-slate-500 truncate">{item.roleOrVehicle}</p>
                    )}
                    {item.date && (
                      <p className="text-[10px] text-slate-400 mt-0.5">{item.date}</p>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Google Reviews rating summary badge */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="mt-12 flex justify-center px-2">
            <div className="inline-flex items-center gap-2.5 sm:gap-4 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-slate-700 max-w-full">
              {/* Separate Rating Column */}
              <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-amber-50 border border-amber-200/80 shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-500 shrink-0" />
                <span className="font-extrabold text-amber-900 text-xs sm:text-sm tabular-nums whitespace-nowrap">
                  {ratingSummaryConfig?.rating ?? 4.9}{' '}
                  <span className="text-amber-700/70 font-semibold text-[10px] sm:text-xs">
                    / {ratingSummaryConfig?.maxRating ?? 5.0}
                  </span>
                </span>
              </div>

              {/* Vertical Divider */}
              <div className="h-6 sm:h-7 w-px bg-slate-200 shrink-0" />

              {/* Text Information Column (Stacked on mobile, inline on desktop) */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-left leading-tight shrink min-w-0">
                <div className="flex items-center gap-1 font-bold text-slate-900 text-xs sm:text-sm whitespace-nowrap">
                  <span>Ulasan Terverifikasi</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                </div>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="text-[11px] sm:text-xs text-slate-500 whitespace-nowrap">
                  Kepuasan Pelanggan {ratingSummaryConfig?.totalReviewsCount ? `(${ratingSummaryConfig.totalReviewsCount})` : ''}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

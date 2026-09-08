import React from 'react';
import { BusinessConfig } from '../types/business';
import { DynamicIcon } from '../lib/icons';
import { ScrollReveal } from './common/ScrollReveal';

interface ProcessProps {
  business: BusinessConfig;
}

export const Process: React.FC<ProcessProps> = ({ business }) => {
  if (!business.process || business.process.length === 0) return null;

  return (
    <section 
      id="alur-pelayanan"
      className="relative py-20 sm:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-y border-slate-800/60"
    >
      {/* Ambient Gradient Glow Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${business.theme.primaryColor} 0%, transparent 70%)`
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14 sm:mb-16">
            <span 
              className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-200 shadow-sm backdrop-blur-md"
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse shrink-0"
                style={{ backgroundColor: business.theme.primaryColor }}
              />
              Alur Pelayanan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {business.process.length} Langkah Mudah di {business.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Proses terstruktur yang menjamin kenyamanan Anda tanpa antrean panjang, transparan, dan tanpa ketidakpastian biaya.
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 relative">
          {business.process.map((item, index) => {
            const stepNumber = String(item.step || index + 1).padStart(2, '0');

            return (
              <ScrollReveal 
                key={item.step || index} 
                direction="up" 
                delay={0.1 + index * 0.08}
                className="h-full"
              >
                <div
                  className="relative h-full flex flex-col items-center text-center p-6 pt-14 sm:pt-16 rounded-2xl bg-slate-900/90 hover:bg-slate-850/95 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 group shadow-[0_20px_45px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.9)] hover:-translate-y-1.5"
                >
                  {/* Step Number Display - Sisi Kiri Pojok Atas */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/95 border border-slate-800 group-hover:border-slate-600 shadow-md transition-all duration-300">
                    <span 
                      className="w-1.5 h-1.5 rounded-full shrink-0 shadow-xs"
                      style={{ backgroundColor: business.theme.primaryColor }}
                    />
                    <span className="text-xs font-black tracking-widest text-slate-200 font-mono">
                      {stepNumber}
                    </span>
                  </div>

                  {/* Large Decorative Watermark Number */}
                  <div 
                    className="absolute top-2.5 right-3 text-4xl sm:text-5xl font-black text-slate-800/20 select-none pointer-events-none font-mono tracking-tighter"
                    aria-hidden="true"
                  >
                    {stepNumber}
                  </div>

                  {/* Big Icon with Ambient Glow */}
                  <div className="relative mb-5 group-hover:scale-105 transition-transform duration-300">
                    {/* Ambient Glow */}
                    <div 
                      className="absolute inset-0 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                      style={{ backgroundColor: business.theme.primaryColor }}
                      aria-hidden="true"
                    />

                    {/* Icon Container */}
                    <div 
                      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_12px_24px_-6px_rgba(0,0,0,0.6)] flex items-center justify-center text-white"
                    >
                      <DynamicIcon 
                        name={item.iconName} 
                        className="w-8 h-8 sm:w-10 sm:h-10 text-slate-100 group-hover:text-white transition-colors duration-300" 
                      />
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-bold text-white text-base sm:text-lg mb-2 tracking-tight group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-auto">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};


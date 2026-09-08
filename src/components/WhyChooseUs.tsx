import React from 'react';
import { BusinessConfig } from '../types/business';
import { DynamicIcon } from '../lib/icons';
import { ScrollReveal } from './common/ScrollReveal';

interface WhyChooseUsProps {
  business: BusinessConfig;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ business }) => {
  return (
    <section id="keunggulan" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-amber-400 border border-slate-700"
            >
              Mengapa Memilih Kami
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Standar Kualitas & Kenyamanan Terbaik
            </h2>
            <p className="text-sm sm:text-base text-slate-400">
              Kami membangun reputasi terpercaya di {business.contact.city} dengan mengedepankan kepuasan dan hasil kerja terbaik.
            </p>
          </div>
        </ScrollReveal>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {business.whyChooseUs.map((item, idx) => (
            <ScrollReveal 
              key={item.id} 
              direction="up" 
              delay={0.08 * (idx % 6)}
              className="h-full"
            >
              <div
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:-translate-y-1 group h-full flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform shadow-md"
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <DynamicIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

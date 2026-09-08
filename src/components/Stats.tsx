import React from 'react';
import { BusinessConfig } from '../types/business';
import { ScrollReveal } from './common/ScrollReveal';

interface StatsProps {
  business: BusinessConfig;
}

export const Stats: React.FC<StatsProps> = ({ business }) => {
  if (!business.statistics || business.statistics.length === 0) return null;

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {business.statistics.map((stat, idx) => {
              const isRightColMobile = idx % 2 === 1;
              const isSecondRowMobile = idx >= 2;
              const isNotFirstColDesktop = idx > 0;

              return (
                <div
                  key={stat.id || idx}
                  className={`flex flex-col items-center justify-start text-center px-1.5 sm:px-4 py-3 sm:py-2 transition-all ${
                    // Mobile 2-column borders (clean cross-grid)
                    isRightColMobile ? 'border-l border-slate-100' : ''
                  } ${
                    isSecondRowMobile ? 'border-t border-slate-100 pt-4 sm:pt-2' : ''
                  } ${
                    // Desktop 4-column dividers
                    isNotFirstColDesktop ? 'lg:border-l lg:border-slate-100' : 'lg:border-l-0'
                  } ${
                    // Reset mobile top border on desktop
                    'lg:border-t-0 lg:pt-2'
                  }`}
                >
                  {/* Number container with unified height and perfect baseline */}
                  <div className="h-8 sm:h-10 lg:h-11 flex items-center justify-center">
                    <span
                      className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight tabular-nums whitespace-nowrap leading-none"
                      style={{ color: business.theme.primaryColor }}
                    >
                      {stat.value}
                    </span>
                  </div>

                  {/* Stat Label */}
                  <div className="mt-1.5 font-bold text-slate-800 text-xs sm:text-sm lg:text-base leading-snug line-clamp-2 max-w-[140px] sm:max-w-none">
                    {stat.label}
                  </div>

                  {/* Stat Description: Adjusted font size to prevent overflow */}
                  {stat.description && (
                    <p className="mt-1 text-[11px] sm:text-xs text-slate-500 leading-tight sm:leading-snug max-w-[130px] sm:max-w-[200px] break-words line-clamp-2">
                      {stat.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};


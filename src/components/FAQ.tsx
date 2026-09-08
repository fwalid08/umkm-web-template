import React, { useState } from 'react';
import { BusinessConfig } from '../types/business';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { ScrollReveal } from './common/ScrollReveal';

interface FaqProps {
  business: BusinessConfig;
}

export const FAQ: React.FC<FaqProps> = ({ business }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  if (!business.faqs || business.faqs.length === 0) return null;

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/60 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center space-y-3 mb-12">
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-slate-200 shadow-xs"
              style={{ color: business.theme.primaryColor }}
            >
              Pertanyaan Umum (FAQ)
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hal yang Sering Ditanyakan Pelanggan
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Berikut jawaban singkat untuk pertanyaan seputar sistem servis, suku cadang, dan garansi di {business.name}.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {business.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <ScrollReveal 
                key={faq.id || index} 
                direction="up" 
                delay={0.05 * (index % 6)}
              >
                <div
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden hover:bg-slate-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle 
                        className="w-5 h-5 shrink-0"
                        style={{ color: business.theme.primaryColor }}
                      />
                      <span className="font-bold text-slate-900 text-sm sm:text-base">
                        {faq.question}
                      </span>
                    </div>
                    <div className="shrink-0 p-1 rounded-lg bg-slate-100 text-slate-500">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

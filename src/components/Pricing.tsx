import React from 'react';
import { BusinessConfig, PricingPackage } from '../types/business';
import { formatRupiah } from '../lib/formatters';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { Check, X, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { ScrollReveal } from './common/ScrollReveal';

interface PricingProps {
  business: BusinessConfig;
}

export const Pricing: React.FC<PricingProps> = ({ business }) => {
  if (!business.pricingPackages || business.pricingPackages.length === 0) return null;

  return (
    <section id="harga" className="py-16 sm:py-20 bg-white scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700"
              style={{ color: business.theme.primaryColor }}
            >
              Paket Bundling Hemat
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pilihan Paket Layanan Lebih Praktis & Terjangkau
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Dapatkan rangkaian perawatan esensial dalam satu paket lengkap dengan harga spesial.
            </p>
          </div>
        </ScrollReveal>

        {/* Pricing Cards with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {business.pricingPackages.map((pkg: PricingPackage, index: number) => {
            const isPopular = pkg.popular;
            const waLink = generateWhatsAppLink(
              business.contact.whatsappNumber,
              pkg.bookingMessage ||
                `Halo ${business.name}, saya ingin booking ${pkg.name} seharga ${formatRupiah(pkg.price)}.`
            );

            return (
              <ScrollReveal 
                key={pkg.id} 
                direction="up" 
                delay={0.1 * index}
                className="h-full"
              >
                <div
                  className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative h-full ${
                    isPopular
                      ? 'bg-slate-900 text-white shadow-2xl ring-2 ring-slate-900 transform md:-translate-y-2'
                      : 'bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl'
                  }`}
                >
                  {isPopular && (
                    <div 
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-extrabold uppercase tracking-wider py-1 px-4 rounded-full text-white shadow-md flex items-center gap-1.5"
                      style={{ backgroundColor: business.theme.primaryColor }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Paling Diminati</span>
                    </div>
                  )}

                  <div>
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                        {pkg.name}
                      </h3>
                      <p className={`text-xs mt-1 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="my-6 pb-6 border-b border-slate-200/40">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight">
                        {formatRupiah(pkg.price)}
                      </span>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8 text-xs sm:text-sm">
                      {pkg.features.map((feat, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          {feat.included ? (
                            <div 
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isPopular ? 'text-white' : 'text-white'
                              }`}
                              style={{ backgroundColor: business.theme.primaryColor }}
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                          )}
                          <span className={feat.included ? (isPopular ? 'text-slate-200' : 'text-slate-700') : 'text-slate-400 line-through'}>
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Package CTA */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 ${
                      isPopular
                        ? 'text-white hover:brightness-110'
                        : 'text-white hover:opacity-95'
                    }`}
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Ambil Paket via WhatsApp</span>
                  </a>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Guarantee note */}
        <ScrollReveal direction="up" delay={0.25}>
          <p className="text-center text-xs text-slate-500 mt-8">
            * Seluruh paket pengerjaan di atas dilindungi garansi resmi demi kenyamanan dan kepuasan Anda.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

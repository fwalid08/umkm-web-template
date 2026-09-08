import React from 'react';
import { BusinessConfig, ServiceItem } from '../types/business';
import { DynamicIcon } from '../lib/icons';
import { formatRupiah } from '../lib/formatters';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { ScrollReveal } from './common/ScrollReveal';

interface ServicesProps {
  business: BusinessConfig;
}

export const Services: React.FC<ServicesProps> = ({ business }) => {
  return (
    <section id="layanan" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/60 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white shadow-xs border border-slate-200"
              style={{ color: business.theme.primaryColor }}
            >
              Layanan Unggulan
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Layanan Berkualitas & Transparan Untuk Anda
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Ditangani dengan standar keahlian tinggi dan peralatan teruji. Biaya diestimasi terbuka di awal tanpa tarif siluman.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid with Smooth Staggered ScrollReveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {business.services.map((service: ServiceItem, index: number) => {
            const serviceWaLink = generateWhatsAppLink(
              business.contact.whatsappNumber,
              service.bookingMessage ||
                `Halo ${business.name}, saya ingin booking layanan ${service.name}.`
            );

            return (
              <ScrollReveal 
                key={service.id} 
                direction="up" 
                delay={0.08 * (index % 6)}
                className="h-full"
              >
                <div
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative h-full"
                >
                  {service.popular && (
                    <div 
                      className="absolute -top-3 right-6 text-[11px] font-bold uppercase tracking-wider py-0.5 px-2.5 rounded-full text-white shadow-sm"
                      style={{ backgroundColor: business.theme.primaryColor }}
                    >
                      Populer
                    </div>
                  )}

                  <div>
                    {/* Icon & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-sm"
                        style={{ backgroundColor: business.theme.primaryColor }}
                      >
                        <DynamicIcon name={service.iconName} className="w-6 h-6" />
                      </div>
                      {service.duration && (
                        <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.duration}</span>
                        </span>
                      )}
                    </div>

                    {/* Name & Description */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-800">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features List */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 mb-6 border-t border-slate-100 pt-3 text-xs text-slate-600">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Price & Booking Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-medium">Mulai dari</span>
                      <span className="text-base font-extrabold text-slate-900">
                        {formatRupiah(service.startingPrice)}
                      </span>
                    </div>

                    <a
                      href={serviceWaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-xs hover:shadow-md transition-all active:scale-95"
                      style={{ backgroundColor: business.theme.primaryColor }}
                      aria-label={`Booking ${service.name} via WhatsApp`}
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Booking</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Helper Note */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
            <p className="text-xs sm:text-sm text-slate-600">
              Punya kebutuhan atau kendala khusus yang belum tercantum? Konsultasikan gratis sekarang.
            </p>
            <a
              href={generateWhatsAppLink(
                business.contact.whatsappNumber,
                `Halo ${business.name}, saya ingin konsultasi kebutuhan layanan saya.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold underline hover:no-underline text-slate-900 inline-flex items-center gap-1"
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

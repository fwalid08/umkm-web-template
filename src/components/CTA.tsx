import React from 'react';
import { BusinessConfig } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { Phone, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { ScrollReveal } from './common/ScrollReveal';

interface CTAProps {
  business: BusinessConfig;
}

export const CTA: React.FC<CTAProps> = ({ business }) => {
  const cta = business.ctaSection || {};

  const waMessage = cta.customWhatsAppMessage || business.contact.defaultWhatsAppMessage;
  const waLink = generateWhatsAppLink(
    business.contact.whatsappNumber,
    waMessage
  );

  return (
    <section id="kontak" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Subtle Background Glows */}
      <div 
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ backgroundColor: business.theme.primaryColor }}
      />
      <div 
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ backgroundColor: business.theme.accentColor }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <ScrollReveal direction="up" delay={0.1}>
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-bold text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{cta.badgeText || `Solusi Terbaik untuk ${business.industry}`}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.15}>
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            {cta.headline || 'Punya Pertanyaan atau Ingin Reservasi? Hubungi Kami Sekarang.'}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {cta.description || 'Konsultasi gratis dan pemesanan jadwal mudah via WhatsApp. Dapatkan pelayanan prima dan jaminan kepuasan pelanggan.'}
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3">
            <a
              id="final-cta-wa-btn"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base text-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              style={{ 
                backgroundColor: business.theme.primaryColor,
                boxShadow: `0 12px 30px -8px ${business.theme.primaryColor}60`
              }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{cta.primaryButtonText || 'Booking via WhatsApp Sekarang'}</span>
            </a>

            <a
              href={`tel:${business.contact.phone.replace(/\D/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>{cta.secondaryButtonText || `Telepon: ${business.contact.phone}`}</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Disclaimer / Response time guarantee */}
        <ScrollReveal direction="up" delay={0.3}>
          <p className="text-xs text-slate-400 font-medium pt-2">
            {cta.disclaimerText || 'Admin WhatsApp aktif setiap hari • Respons rata-rata di bawah 10 menit'}
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};

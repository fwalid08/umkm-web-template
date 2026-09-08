import React from 'react';
import { BusinessConfig } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { MapPin, Clock, Phone, Navigation, CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { ScrollReveal } from './common/ScrollReveal';

interface LocationProps {
  business: BusinessConfig;
}

export const Location: React.FC<LocationProps> = ({ business }) => {
  const loc = business.locationSection || {};

  const askDirectionsMsg = loc.askDirectionsMessage || 
    `Halo ${business.name}, saya mau tanya patokan jalan menuju ke lokasi Anda.`;

  const waDirectionsLink = generateWhatsAppLink(
    business.contact.whatsappNumber,
    askDirectionsMsg
  );

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-white border-t border-slate-100 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-14">
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100"
              style={{ color: business.theme.primaryColor }}
            >
              {loc.badgeText || 'Lokasi & Jam Operasional'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {loc.title || `Kunjungi Lokasi Kami di ${business.contact.city}`}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {loc.description || 'Akses strategis di jalan utama, area parkir luas, dan petunjuk arah langsung melalui Google Maps.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact, Address & Opening Hours */}
          <div className="lg:col-span-5 space-y-5">
            <ScrollReveal direction="up" delay={0.15}>
              {/* Address Card */}
              <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
                <div className="flex items-start gap-3.5 mb-4">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-xs"
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {loc.addressTitle || 'Alamat Lengkap'}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {business.contact.address}
                    </p>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      {business.contact.city}, {business.contact.province} {business.contact.postalCode}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-200">
                  <a
                    href={business.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-xs hover:shadow-md transition-all active:scale-95"
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{loc.directionsButtonText || 'Buka Petunjuk Arah'}</span>
                  </a>

                  <a
                    href={waDirectionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 transition-all active:scale-95"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{loc.askDirectionsButtonText || 'Tanya Patokan'}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              {/* Operating Hours Card */}
              <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-5 h-5 text-slate-700" />
                    <h3 className="font-bold text-slate-900 text-base">
                      {loc.hoursTitle || 'Jadwal Operasional'}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {loc.openTodayBadgeText || 'Buka Hari Ini'}
                  </span>
                </div>

                <div className="space-y-2.5 text-sm">
                  {business.openingHours.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center justify-between py-1.5 border-b border-slate-200/60 last:border-0"
                    >
                      <span className="font-medium text-slate-700">{item.day}</span>
                      <span className="font-bold text-slate-900">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Location Highlights / Facilities if configured */}
            {loc.features && loc.features.length > 0 && (
              <ScrollReveal direction="up" delay={0.25}>
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Fasilitas & Akses Lokasi:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                    {loc.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Quick Contact Box */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    {loc.supportTitle || 'Layanan Pelanggan'}
                  </p>
                  <p className="text-base font-bold text-slate-900 mt-0.5">{business.contact.phone}</p>
                </div>
                <a
                  href={`tel:${business.contact.phone.replace(/\D/g, '')}`}
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors"
                  aria-label="Telepon"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.25}>
              <div className="bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 aspect-[4/3] sm:aspect-[16/11] relative">
                {business.contact.googleMapsEmbedUrl ? (
                  <iframe
                    title={`Peta Lokasi ${business.name}`}
                    src={business.contact.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <MapPin className="w-12 h-12 text-slate-400 mb-3 animate-bounce" />
                    <h4 className="font-bold text-slate-800 text-lg">Peta Lokasi {business.name}</h4>
                    <p className="text-sm text-slate-500 max-w-sm mt-1">{business.contact.address}</p>
                    <a
                      href={business.contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white"
                      style={{ backgroundColor: business.theme.primaryColor }}
                    >
                      Buka Google Maps
                    </a>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};

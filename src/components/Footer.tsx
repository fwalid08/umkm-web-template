import React from 'react';
import { BusinessConfig } from '../types/business';
import { DynamicIcon } from '../lib/icons';
import { MapPin, Phone, Clock, ShieldCheck, CreditCard } from 'lucide-react';

interface FooterProps {
  business: BusinessConfig;
}

export const Footer: React.FC<FooterProps> = ({ business }) => {
  const currentYear = new Date().getFullYear();
  const foot = business.footerSection || {};

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: business.theme.primaryColor }}
              >
                <DynamicIcon name="Sparkles" className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {business.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {foot.aboutText || `${business.tagline}. Solusi terdepan dengan transparansi biaya, tenaga berpengalaman, dan pelayanan bergaransi.`}
            </p>

            {/* Social Media Links */}
            {business.socialLinks && business.socialLinks.length > 0 && (
              <div className="flex items-center gap-2.5 pt-2">
                {business.socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-800 text-xs font-bold capitalize"
                    aria-label={social.label}
                  >
                    {social.platform.slice(0, 2)}
                  </a>
                ))}
              </div>
            )}

            {/* Payment Methods Badges if configured */}
            {foot.paymentMethods && foot.paymentMethods.length > 0 && (
              <div className="pt-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>{foot.paymentMethodsTitle || 'Metode Pembayaran'}</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {foot.paymentMethods.map((pm, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-medium"
                    >
                      {pm}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {foot.quickLinksTitle || 'Navigasi Cepat'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#harga" className="hover:text-white transition-colors">Paket Biaya</a></li>
              <li><a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan</a></li>
              <li><a href="#galeri" className="hover:text-white transition-colors">Galeri Foto</a></li>
              <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni</a></li>
              <li><a href="#lokasi" className="hover:text-white transition-colors">Lokasi & Jam</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {foot.servicesTitle || 'Layanan Populer'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {business.services?.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a href="#layanan" className="hover:text-white transition-colors flex items-center justify-between">
                    <span>{srv.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {foot.contactTitle || 'Hubungi Kami'}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{business.contact.address}, {business.contact.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${business.contact.phone.replace(/\D/g, '')}`} className="hover:text-white">
                  {business.contact.phone}
                </a>
              </li>
              {business.openingHours && business.openingHours.length > 0 && (
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{business.openingHours[0].day}: {business.openingHours[0].hours}</span>
                </li>
              )}
              {foot.badgeText && (
                <li className="flex items-center gap-2.5 text-emerald-400 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{foot.badgeText}</span>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {business.name}. {foot.copyrightText || 'Hak Cipta Dilindungi Undang-Undang.'}
          </p>
          <div className="flex items-center gap-1">
            <span>{foot.taglineNote || 'Didesain dengan standar mobile-first profesional untuk UMKM Indonesia'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

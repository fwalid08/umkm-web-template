import React, { useState, useEffect } from 'react';
import { BusinessConfig } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { DynamicIcon } from '../lib/icons';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';

interface NavbarProps {
  business: BusinessConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ business }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultLinks = [
    { label: 'Beranda', href: '#beranda', show: true },
    { label: 'Tentang', href: '#tentang', show: business.sections.about !== false },
    { label: 'Layanan', href: '#layanan', show: business.sections.services !== false },
    { label: 'Paket Biaya', href: '#harga', show: business.sections.pricing !== false },
    { label: 'Keunggulan', href: '#keunggulan', show: business.sections.whyChooseUs !== false },
    { label: 'Galeri', href: '#galeri', show: business.sections.gallery !== false },
    { label: 'Testimoni', href: '#testimoni', show: business.sections.testimonials !== false },
    { label: 'Lokasi & Jam', href: '#lokasi', show: business.sections.location !== false },
    { label: 'FAQ', href: '#faq', show: business.sections.faq !== false },
  ];

  const configuredLinks = business.navigation?.mainLinks?.map(l => ({
    label: l.label,
    href: l.href,
    show: true,
  })) || defaultLinks;

  const navLinks = configuredLinks.filter(l => l.show);

  const waLink = generateWhatsAppLink(
    business.contact.whatsappNumber,
    business.contact.defaultWhatsAppMessage
  );

  return (
    <>
      {/* Top micro-bar for local business trust */}
      <div 
        className="w-full text-xs py-1.5 px-4 text-white transition-colors"
        style={{ backgroundColor: business.theme.secondaryColor }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Buka: {business.openingHours[0]?.hours || '08.00 - 17.00 WIB'}</span>
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1">
              <span>{business.contact.city}, {business.contact.province}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${business.contact.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{business.contact.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm transition-transform group-hover:scale-105"
              style={{ backgroundColor: business.theme.primaryColor }}
            >
              <DynamicIcon name="Wrench" className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight leading-none block">
                {business.name}
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase mt-0.5 block">
                {business.industry}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors relative py-1 hover:border-b-2"
                style={{ borderColor: business.theme.primaryColor }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA (strictly desktop breakpoint only) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="navbar-wa-cta"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm text-white shadow-sm hover:shadow-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0"
              style={{ backgroundColor: business.theme.primaryColor }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{business.primaryCtaText}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Buka Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <DynamicIcon name="Wrench" className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-slate-900 text-base">{business.name}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-white shadow-md"
                style={{ backgroundColor: business.theme.primaryColor }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>{business.primaryCtaText}</span>
              </a>

              <a
                href={`tel:${business.contact.phone.replace(/\D/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Telepon: {business.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

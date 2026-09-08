import React, { useState, useEffect } from 'react';
import { businessConfig } from './config/business';
import { BusinessConfig } from './types/business';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { Location } from './components/Location';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileBottomNav } from './components/MobileBottomNav';
import { JsonLdScript } from './components/JsonLdScript';
import { DevPanel } from './components/DevPanel';
import { LoadingScreen } from './components/LoadingScreen';
import { getFontById } from './config/fonts';

export default function App() {
  const [business, setBusiness] = useState<BusinessConfig>(businessConfig);

  // Apply dynamic theme CSS variables on the document root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary', business.theme.primaryColor);
    root.style.setProperty('--color-primary-hover', business.theme.primaryHover);
    root.style.setProperty('--color-secondary', business.theme.secondaryColor);
    root.style.setProperty('--color-accent', business.theme.accentColor);
    root.style.setProperty('--color-background', business.theme.backgroundColor);
    root.style.setProperty('--color-surface', business.theme.surfaceColor);
    root.style.setProperty('--color-text', business.theme.textColor);
    root.style.setProperty('--color-text-muted', business.theme.mutedTextColor);
    root.style.setProperty('--border-radius', business.theme.borderRadius);

    const font = getFontById(business.theme.fontOptionId);
    root.style.setProperty('--font-family', business.theme.fontFamily || font.family);

    // Dynamic document title based on SEO config
    document.title = business.seo?.title || `${business.name} - ${business.tagline}`;
  }, [business]);

  const sections = business.sections || {
    stats: true,
    about: true,
    services: true,
    pricing: true,
    whyChooseUs: true,
    gallery: true,
    testimonials: true,
    process: true,
    faq: true,
    location: true,
    cta: true,
  };

  return (
    <div 
      className="min-h-screen flex flex-col selection:bg-slate-900 selection:text-white pb-16 md:pb-0"
      style={{ backgroundColor: business.theme.backgroundColor }}
    >
      {/* Dynamic Loading Screen */}
      <LoadingScreen business={business} />

      {/* Schema.org LocalBusiness JSON-LD SEO Injector */}
      <JsonLdScript business={business} />

      {/* Freelance Developer Toolbar / Preset Switcher */}
      <DevPanel 
        currentBusiness={business} 
        onSelectBusiness={(newBusiness) => setBusiness(newBusiness)} 
      />

      {/* 1. Sticky Navbar */}
      <Navbar business={business} />

      <main className="grow">
        {/* 2. Hero Section (Controlled by theme.heroVariant) */}
        <Hero business={business} />

        {/* 3. Trust & Statistics Section */}
        {sections.stats !== false && business.statistics?.length > 0 && (
          <Stats business={business} />
        )}

        {/* 4. About Section */}
        {sections.about !== false && (
          <About business={business} />
        )}

        {/* 5. Services Section */}
        {sections.services !== false && business.services?.length > 0 && (
          <Services business={business} />
        )}

        {/* 6. Pricing Packages Section */}
        {sections.pricing !== false && business.pricingPackages?.length > 0 && (
          <Pricing business={business} />
        )}

        {/* 7. Why Choose Us Section */}
        {sections.whyChooseUs !== false && business.whyChooseUs?.length > 0 && (
          <WhyChooseUs business={business} />
        )}

        {/* 8. Gallery Section */}
        {sections.gallery !== false && business.gallery?.length > 0 && (
          <Gallery business={business} />
        )}

        {/* 9. Testimonials Section */}
        {sections.testimonials !== false && business.testimonials?.length > 0 && (
          <Testimonials business={business} />
        )}

        {/* 10. Service Process Section */}
        {sections.process !== false && business.process?.length > 0 && (
          <Process business={business} />
        )}

        {/* 11. FAQ Section */}
        {sections.faq !== false && business.faqs?.length > 0 && (
          <FAQ business={business} />
        )}

        {/* 12. Location & Operating Hours Section */}
        {sections.location !== false && (
          <Location business={business} />
        )}

        {/* 13. Final CTA Section */}
        {sections.cta !== false && (
          <CTA business={business} />
        )}
      </main>

      {/* 14. Footer */}
      <Footer business={business} />

      {/* 15. Native App Mobile Bottom Navigation Bar */}
      <MobileBottomNav business={business} />

      {/* 16. Floating WhatsApp Button (Desktop View) */}
      <WhatsAppButton business={business} />

      {/* 17. Floating Go To Top Button */}
      <ScrollToTop primaryColor={business.theme.primaryColor} />
    </div>
  );
}

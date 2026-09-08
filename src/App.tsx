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
    document.title = business.seo?.title || `${business.name} - ${business.tagline}`;
  }, [business]);
  const sections = business.sections || { stats:true, about:true, services:true, pricing:true, whyChooseUs:true, gallery:true, testimonials:true, process:true, faq:true, location:true, cta:true };
  return <div className="min-h-screen flex flex-col selection:bg-slate-900 selection:text-white pb-16 md:pb-0" style={{backgroundColor:business.theme.backgroundColor}}>
    <LoadingScreen business={business} /><JsonLdScript business={business}/><DevPanel currentBusiness={business} onSelectBusiness={setBusiness}/><Navbar business={business}/>
    <main className="grow"><Hero key={business.hero?.layoutVariant || 'split'} business={business}/>
      {sections.stats !== false && business.statistics?.length > 0 && <Stats business={business}/>} {sections.about !== false && <About business={business}/>} {sections.services !== false && business.services?.length > 0 && <Services business={business}/>} {sections.pricing !== false && business.pricingPackages?.length > 0 && <Pricing business={business}/>} {sections.whyChooseUs !== false && business.whyChooseUs?.length > 0 && <WhyChooseUs business={business}/>} {sections.gallery !== false && business.gallery?.length > 0 && <Gallery business={business}/>} {sections.testimonials !== false && business.testimonials?.length > 0 && <Testimonials business={business}/>} {sections.process !== false && business.process?.length > 0 && <Process business={business}/>} {sections.faq !== false && business.faqs?.length > 0 && <FAQ business={business}/>} {sections.location !== false && <Location business={business}/>} {sections.cta !== false && <CTA business={business}/>}</main>
    <Footer business={business}/><MobileBottomNav business={business}/><WhatsAppButton business={business}/><ScrollToTop primaryColor={business.theme.primaryColor}/>
  </div>;
}

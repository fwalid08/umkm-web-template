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

const blurPixels: Record<string,string> = { none:'0px', sm:'2px', md:'4px', lg:'8px' };

function heroGradientValue(hero: BusinessConfig['hero']) {
  const style = hero?.gradientStyle || 'brand-glow';
  if (style === 'solid') return 'none';
  if (style === 'custom' && hero?.customGradient) {
    const { from, via, to, direction = 'to-b' } = hero.customGradient;
    const dir: Record<string,string> = {'to-b':'to bottom','to-br':'to bottom right','to-r':'to right','to-tr':'to top right'};
    return direction === 'radial' ? `radial-gradient(circle at 50% 20%, ${from}, ${via ? `${via}, ` : ''}${to})` : `linear-gradient(${dir[direction] || 'to bottom'}, ${from}, ${via ? `${via}, ` : ''}${to})`;
  }
  const dark = hero?.backgroundMode === 'dark' || style === 'dark-slate' || style === 'ocean-depth';
  switch (style) {
    case 'aurora-mesh': return dark ? 'radial-gradient(circle at 15% 20%, rgba(99,102,241,.48), transparent 34%), radial-gradient(circle at 82% 28%, rgba(6,182,212,.38), transparent 32%), radial-gradient(circle at 50% 100%, rgba(16,185,129,.22), transparent 38%)' : 'radial-gradient(circle at 12% 18%, rgba(99,102,241,.26), transparent 32%), radial-gradient(circle at 86% 24%, rgba(6,182,212,.22), transparent 30%), radial-gradient(circle at 50% 100%, rgba(16,185,129,.14), transparent 38%)';
    case 'sunset-radiant': return dark ? 'radial-gradient(circle at 12% 15%, rgba(245,158,11,.42), transparent 34%), linear-gradient(135deg, #451a03 0%, #7c2d12 42%, #111827 100%)' : 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 38%, #fee2e2 70%, #fff 100%)';
    case 'ocean-depth': return 'linear-gradient(135deg, #020617 0%, #0c4a6e 48%, #082f49 100%)';
    case 'emerald-nature': return dark ? 'radial-gradient(circle at 20% 15%, rgba(16,185,129,.38), transparent 34%), linear-gradient(135deg, #022c22 0%, #064e3b 48%, #0f172a 100%)' : 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 42%, #ccfbf1 72%, #fff 100%)';
    case 'dark-slate': return 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)';
    case 'clean-subtle': return 'linear-gradient(135deg, #ffffff 0%, #f8fafc 48%, #e2e8f0 100%)';
    case 'brand-glow':
    default: return dark ? `radial-gradient(circle at 8% 15%, color-mix(in srgb, var(--color-primary) 42%, transparent), transparent 34%), radial-gradient(circle at 90% 20%, color-mix(in srgb, var(--color-accent) 32%, transparent), transparent 32%), linear-gradient(135deg, var(--hero-base-color) 0%, #0f172a 100%)` : `radial-gradient(circle at 8% 15%, color-mix(in srgb, var(--color-primary) 18%, transparent), transparent 34%), radial-gradient(circle at 90% 20%, color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 32%), linear-gradient(135deg, var(--hero-base-color) 0%, #ffffff 100%)`;
  }
}

export default function App() {
  const [business, setBusiness] = useState<BusinessConfig>(businessConfig);
  const [previewRevision, setPreviewRevision] = useState(0);

  const handleBusinessChange = (nextBusiness: BusinessConfig) => {
    setBusiness(nextBusiness);

    // A preset replaces the entire business object. Some preview components can
    // retain internal UI state when their layout stays the same, so force a clean
    // preview mount only when the selected business preset changes. Normal field
    // edits continue to update through React props without remounting the page.
    if (nextBusiness.id !== business.id) {
      setPreviewRevision((revision) => revision + 1);
    }
  };

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
    root.style.setProperty('--hero-base-color', business.hero?.backgroundColor || business.theme.backgroundColor);
    root.style.setProperty('--hero-background-blur', `${business.hero?.backgroundBlurPx ?? Number.parseInt(blurPixels[business.hero?.backgroundBlur || 'none'] || '0', 10)}px`);
    root.style.setProperty('--hero-background-image-blur', `${business.hero?.backgroundImageBlurPx ?? Number.parseInt(blurPixels[business.hero?.backgroundImageBlur || 'sm'] || '2', 10)}px`);
    root.style.setProperty('--hero-overlay-image', business.hero?.backgroundOverlayImageUrl ? `url(\"${business.hero.backgroundOverlayImageUrl}\")` : 'none');
    root.style.setProperty('--hero-overlay-image-opacity', String(business.hero?.backgroundOverlayImageOpacity ?? .28));
    root.style.setProperty('--hero-gradient', heroGradientValue(business.hero));
    root.style.setProperty('--hero-gradient-style', business.hero?.gradientStyle || 'brand-glow');
    root.style.setProperty('--hero-texture-opacity', String(business.hero?.textureOpacity ?? .035));
    const font = getFontById(business.theme.fontOptionId);
    root.style.setProperty('--font-family', business.theme.fontFamily || font.family);
    document.title = business.seo?.title || `${business.name} - ${business.tagline}`;
  }, [business]);
  const sections = business.sections || { stats:true, about:true, services:true, pricing:true, whyChooseUs:true, gallery:true, testimonials:true, process:true, faq:true, location:true, cta:true };
  return <div className="min-h-screen flex flex-col selection:bg-slate-900 selection:text-white pb-16 md:pb-0" style={{backgroundColor:business.theme.backgroundColor}}>
    <LoadingScreen business={business} /><JsonLdScript business={business}/><DevPanel currentBusiness={business} onSelectBusiness={handleBusinessChange}/><Navbar business={business}/>
    <main key={previewRevision} className="grow"><Hero key={business.hero?.layoutVariant || 'split'} business={business}/>
      {sections.stats !== false && business.statistics?.length > 0 && <Stats business={business}/>} {sections.about !== false && <About business={business}/>} {sections.services !== false && business.services?.length > 0 && <Services business={business}/>} {sections.pricing !== false && business.pricingPackages?.length > 0 && <Pricing business={business}/>} {sections.whyChooseUs !== false && business.whyChooseUs?.length > 0 && <WhyChooseUs business={business}/>} {sections.gallery !== false && business.gallery?.length > 0 && <Gallery business={business}/>} {sections.testimonials !== false && business.testimonials?.length > 0 && <Testimonials business={business}/>} {sections.process !== false && business.process?.length > 0 && <Process business={business}/>} {sections.faq !== false && business.faqs?.length > 0 && <FAQ business={business}/>} {sections.location !== false && <Location business={business}/>} {sections.cta !== false && <CTA business={business}/>}</main>
    <Footer business={business}/><MobileBottomNav business={business}/><WhatsAppButton business={business}/><ScrollToTop primaryColor={business.theme.primaryColor}/>
  </div>;
}

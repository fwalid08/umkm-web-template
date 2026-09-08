import React, { useEffect } from 'react';
import { businessConfig } from './config/business';
import { BusinessConfig } from './types/business';
import { normalizeBusinessConfig } from './lib/config-runtime';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { MobileBottomNav } from './components/MobileBottomNav';
import { JsonLdScript } from './components/JsonLdScript';
import { LoadingScreen } from './components/LoadingScreen';
import { getFontById } from './config/fonts';
import { WebsiteSections } from './engine/WebsiteSections';
import { WebsiteStudio } from './components/WebsiteStudio';

const blurPixels: Record<string, string> = { none: '0px', sm: '2px', md: '4px', lg: '8px' };

function heroGradientValue(hero: BusinessConfig['hero']) {
  const style = hero?.gradientStyle || 'brand-glow';
  if (style === 'solid') return 'none';
  if (style === 'custom' && hero?.customGradient) {
    const { from, via, to, direction = 'to-b' } = hero.customGradient;
    const dir: Record<string, string> = { 'to-b': 'to bottom', 'to-br': 'to bottom right', 'to-r': 'to right', 'to-tr': 'to top right' };
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
    default: return dark ? `radial-gradient(circle at 8% 15%, color-mix(in srgb, var(--color-primary) 42%, transparent), transparent 34%), radial-gradient(circle at 90% 20%, color-mix(in srgb, var(--color-accent) 32%, transparent), transparent 32%), linear-gradient(135deg, var(--hero-base-color) 0%, #0f172a 100%)` : `radial-gradient(circle at 8% 15%, color-mix(in srgb, var(--color-primary) 18%, transparent), transparent 34%), radial-gradient(circle at 90% 20%, color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 32%), linear-gradient(135deg, var(--hero-base-color) 0%, #ffffff 100%)`;
  }
}

export default function App() {
  const isStudio = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '/studio' || window.location.pathname.startsWith('/studio/'));
  const previewBusiness = normalizeBusinessConfig(businessConfig);

  useEffect(() => {
    if (isStudio) return;
    const root = document.documentElement;
    root.style.setProperty('--color-primary', previewBusiness.theme.primaryColor);
    root.style.setProperty('--color-primary-hover', previewBusiness.theme.primaryHover);
    root.style.setProperty('--color-secondary', previewBusiness.theme.secondaryColor);
    root.style.setProperty('--color-accent', previewBusiness.theme.accentColor);
    root.style.setProperty('--color-background', previewBusiness.theme.backgroundColor);
    root.style.setProperty('--color-surface', previewBusiness.theme.surfaceColor);
    root.style.setProperty('--color-text', previewBusiness.theme.textColor);
    root.style.setProperty('--color-text-muted', previewBusiness.theme.mutedTextColor);
    root.style.setProperty('--border-radius', previewBusiness.theme.borderRadius);
    root.style.setProperty('--hero-base-color', previewBusiness.hero?.backgroundColor || previewBusiness.theme.backgroundColor);
    root.style.setProperty('--hero-background-blur', `${previewBusiness.hero?.backgroundBlurPx ?? Number.parseInt(blurPixels[previewBusiness.hero?.backgroundBlur || 'none'] || '0', 10)}px`);
    root.style.setProperty('--hero-background-image-blur', `${previewBusiness.hero?.backgroundImageBlurPx ?? Number.parseInt(blurPixels[previewBusiness.hero?.backgroundImageBlur || 'sm'] || '2', 10)}px`);
    root.style.setProperty('--hero-overlay-image', previewBusiness.hero?.backgroundOverlayImageUrl ? `url(\"${previewBusiness.hero.backgroundOverlayImageUrl}\")` : 'none');
    root.style.setProperty('--hero-overlay-image-opacity', String(previewBusiness.hero?.backgroundOverlayImageOpacity ?? .28));
    root.style.setProperty('--hero-gradient', heroGradientValue(previewBusiness.hero));
    root.style.setProperty('--hero-gradient-style', previewBusiness.hero?.gradientStyle || 'brand-glow');
    root.style.setProperty('--hero-texture-opacity', String(previewBusiness.hero?.textureOpacity ?? .035));
    const font = getFontById(previewBusiness.theme.fontOptionId);
    root.style.setProperty('--font-family', previewBusiness.theme.fontFamily || font.family);
    document.title = previewBusiness.seo?.title || `${previewBusiness.name} - ${previewBusiness.tagline}`;
  }, [previewBusiness, isStudio]);

  if (isStudio) return <WebsiteStudio />;

  return <div className="min-h-screen flex flex-col selection:bg-slate-900 selection:text-white pb-16 md:pb-0" style={{ backgroundColor: previewBusiness.theme.backgroundColor }}>
    <LoadingScreen business={previewBusiness}/><JsonLdScript business={previewBusiness}/>
    <Navbar business={previewBusiness}/><main className="grow"><Hero business={previewBusiness}/><WebsiteSections business={previewBusiness}/></main>
    <Footer business={previewBusiness}/><MobileBottomNav business={previewBusiness}/><WhatsAppButton business={previewBusiness}/><ScrollToTop primaryColor={previewBusiness.theme.primaryColor}/>
  </div>;
}

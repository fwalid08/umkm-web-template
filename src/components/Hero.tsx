import React from 'react';
import { BusinessConfig, HeroConfig } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { ArrowRight, Star, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';

interface HeroProps { business: BusinessConfig; }

export function getHeroIsDark(hero: HeroConfig | undefined): boolean {
  if (hero?.backgroundMode === 'dark') return true;
  if (hero?.backgroundMode === 'light') return false;
  if (hero?.gradientStyle === 'dark-slate' || hero?.gradientStyle === 'ocean-depth') return true;
  if (hero?.gradientStyle === 'clean-subtle') return false;
  if (hero?.backgroundColor) {
    const hex = hero.backgroundColor.replace('#', '').trim();
    if (hex.length === 3 || hex.length === 6) {
      const full = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;
      const r = parseInt(full.slice(0, 2), 16), g = parseInt(full.slice(2, 4), 16), b = parseInt(full.slice(4, 6), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
    }
  }
  return false;
}

const defaultFloatingStats = [
  { value: '1.200+', label: 'Pelanggan' },
  { value: '4.9/5', label: 'Rating' },
];

const HeroBackground: React.FC<{ business: BusinessConfig; isDark: boolean }> = ({ business, isDark }) => {
  const hero = business.hero || {};
  const primary = business.theme.primaryColor || '#EF4444';
  const accent = business.theme.accentColor || '#38BDF8';
  const image = hero.backgroundImageUrl || business.heroImageUrl;
  const opacity = hero.backgroundImageOpacity ?? 0.28;
  const showImage = hero.showBackgroundImageOverlay !== false;
  const style = hero.gradientStyle || 'brand-glow';
  const background = hero.backgroundColor || (isDark ? '#0B0F19' : '#F8FAFC');
  const gradient = style === 'aurora-mesh'
    ? `radial-gradient(ellipse 80% 70% at 50% 0%, ${primary}33, transparent 65%)`
    : style === 'sunset-radiant'
      ? 'linear-gradient(180deg, rgba(245,158,11,.14), rgba(255,255,255,0))'
      : style === 'emerald-nature'
        ? `radial-gradient(ellipse 70% 70% at 20% 0%, ${primary}22, transparent 70%)`
        : isDark
          ? 'linear-gradient(180deg, rgba(15,23,42,.94), rgba(2,6,23,.98))'
          : 'linear-gradient(180deg, rgba(255,255,255,.98), rgba(241,245,249,.94))';
  return <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" style={{ backgroundColor: background }} aria-hidden="true">
    <div className="absolute inset-0" style={{ background: gradient }} />
    {showImage && image && <>
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" style={{ opacity }} />
      <div className="absolute inset-0" style={{ background: isDark ? 'linear-gradient(180deg, rgba(2,6,23,.28), rgba(2,6,23,.84))' : 'linear-gradient(180deg, rgba(255,255,255,.38), rgba(248,250,252,.88))' }} />
    </>}
    <div className="absolute -left-32 -top-40 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: primary, opacity: .10 }} />
    <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: accent, opacity: .08 }} />
  </div>;
};

export const Hero: React.FC<HeroProps> = ({ business }) => {
  const hero = business.hero || ({ layoutVariant: 'split' } as HeroConfig);
  const layout = hero.layoutVariant || 'split';
  const isDark = getHeroIsDark(hero);
  const headline = hero.headline || business.heroHeadline;
  const description = hero.description || business.heroDescription;
  const primaryCtaText = hero.primaryCtaText || business.primaryCtaText;
  const secondaryCtaText = hero.secondaryCtaText || business.secondaryCtaText;
  const trustPoints = hero.trustPoints?.length ? hero.trustPoints : ['Pelayanan profesional', 'Harga transparan', 'Booking cepat via WhatsApp'];
  const stats = hero.floatingStats?.length ? hero.floatingStats : defaultFloatingStats;
  const whatsappLink = generateWhatsAppLink(business.contact.whatsappNumber, business.contact.defaultWhatsAppMessage);
  const text = isDark ? 'text-white' : 'text-slate-900';

  const proof = <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
    {hero.showRatingPill !== false && <div className="inline-flex items-center gap-2 rounded-full border border-current/10 bg-white/65 px-3.5 py-2 text-xs shadow-sm backdrop-blur-md"><Star size={14} fill="currentColor" className="text-[var(--color-primary)]" /><b>{hero.ratingValue || '4.9 / 5.0'}</b><span className="opacity-55">{hero.ratingLabel || 'Ulasan pelanggan'}</span></div>}
    {hero.showFloatingStats === true && <div className="flex overflow-hidden rounded-2xl border border-current/10 bg-white/55 shadow-sm backdrop-blur-md">{stats.map((stat, i) => <div key={`${stat.label}-${i}`} className={`px-4 py-2.5 ${i > 0 ? 'border-l border-current/10' : ''}`}><b className="block text-sm leading-none">{stat.value}</b><span className="mt-1 block text-[10px] opacity-55">{stat.label}</span></div>)}</div>}
  </div>;

  const content = <div className={`relative z-10 ${text} ${layout === 'centered' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}`}>
    {hero.eyebrowText && <div className="mb-3 text-xs font-bold uppercase tracking-[.16em] opacity-65">{hero.eyebrowText}</div>}
    {hero.badgeText && <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-current/10 bg-white/55 px-3 py-1 text-xs font-semibold backdrop-blur-md"><Sparkles size={13} />{hero.badgeText}</div>}
    <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{headline}</h1>
    <p className="mt-5 max-w-2xl text-sm leading-7 opacity-75 sm:text-base">{description}</p>
    <div className={`mt-7 flex flex-wrap gap-3 ${layout === 'centered' ? 'justify-center' : ''}`}>
      <a href={whatsappLink} className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-extrabold text-white shadow-lg">{primaryCtaText}<ArrowRight size={16} /></a>
      {secondaryCtaText && <a href={hero.secondaryCtaUrl || '#tentang'} className="inline-flex items-center gap-2 rounded-xl border border-current/15 bg-white/55 px-5 py-3 text-sm font-bold backdrop-blur-md">{secondaryCtaText}<ChevronRight size={16} /></a>}
    </div>
    {hero.ctaNote && <p className="mt-3 text-xs opacity-55">{hero.ctaNote}</p>}
    {proof}
    {hero.showTrustPoints !== false && <div className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold opacity-70 ${layout === 'centered' ? 'justify-center' : ''}`}>{trustPoints.map((point, i) => <div key={`${point}-${i}`} className="flex items-center gap-1.5"><CheckCircle2 size={14} className="shrink-0 text-[var(--color-primary)]" /><span>{point}</span></div>)}</div>}
  </div>;

  return <section id="beranda" className={`relative isolate flex items-center overflow-hidden ${hero.minHeight === 'auto' ? 'py-20' : hero.minHeight === 'large' ? 'min-h-[720px]' : 'min-h-screen'}`}>
    <HeroBackground business={business} isDark={isDark} />
    <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
      {layout === 'split' ? <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">{content}<div className="relative z-10"><img src={hero.backgroundImageUrl || business.heroImageUrl} alt={business.name} className="w-full rounded-3xl object-cover shadow-2xl" /></div></div> : content}
    </div>
  </section>;
};

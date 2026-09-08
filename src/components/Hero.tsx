import React from 'react';
import { BusinessConfig, HeroConfig } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { ArrowRight, Star, ShieldCheck, MapPin, CheckCircle2, Clock, Phone, Sparkles, Calendar, ChevronRight } from 'lucide-react';

interface HeroProps { business: BusinessConfig; }

export function getHeroIsDark(hero: HeroConfig | undefined, business: BusinessConfig): boolean {
  if (hero?.backgroundMode === 'dark') return true;
  if (hero?.backgroundMode === 'light') return false;
  if (hero?.gradientStyle === 'dark-slate' || hero?.gradientStyle === 'ocean-depth') return true;
  if (hero?.gradientStyle === 'clean-subtle') return false;
  if (hero?.backgroundColor) {
    const hex = hero.backgroundColor.replace('#', '').trim();
    if (hex.length === 3 || hex.length === 6) {
      const full = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;
      const r = parseInt(full.slice(0, 2), 16); const g = parseInt(full.slice(2, 4), 16); const b = parseInt(full.slice(4, 6), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
    }
  }
  return hero?.layoutVariant === 'card-overlay' && !hero?.backgroundColor;
}

const HeroBackground: React.FC<{ business: BusinessConfig; isDark: boolean }> = ({ business, isDark }) => {
  const hero = business.hero || {};
  const primaryColor = business.theme.primaryColor || '#EF4444';
  const accentColor = business.theme.accentColor || '#38BDF8';
  const baseBgColor = hero.backgroundColor || (isDark ? '#0B0F19' : '#F8FAFC');
  const gradientStyle = hero.gradientStyle || 'brand-glow';
  const orbsEnabled = hero.ambientOrbs?.enabled !== false;
  const orb1Color = hero.ambientOrbs?.color1 || primaryColor;
  const orb2Color = hero.ambientOrbs?.color2 || accentColor;
  const orbOpacity = hero.ambientOrbs?.opacity ?? (isDark ? 0.22 : 0.16);
  const texture = hero.texture || 'dots';
  const textureOpacity = hero.textureOpacity ?? (isDark ? 0.04 : 0.035);
  const showBgImage = hero.showBackgroundImageOverlay !== false;
  const bgImg = hero.backgroundImageUrl || business.heroImageUrl;
  const imgOpacity = hero.backgroundImageOpacity ?? (isDark ? 0.20 : 0.10);
  const blurClass = { none: '', sm: 'blur-[2px]', md: 'blur-[4px]', lg: 'blur-[8px]' }[hero.backgroundImageBlur || 'sm'];
  let gradientOverlayStyle: React.CSSProperties = {};
  let gradientClasses = '';
  if (gradientStyle === 'brand-glow') gradientClasses = isDark ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-white via-slate-50/70 to-slate-100/60';
  else if (gradientStyle === 'aurora-mesh') gradientClasses = isDark ? 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.28),rgba(255,255,255,0))] bg-slate-950' : 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.14),rgba(255,255,255,0))] bg-slate-50/60';
  else if (gradientStyle === 'sunset-radiant') gradientClasses = isDark ? 'bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-amber-50/80 via-orange-50/30 to-white';
  else if (gradientStyle === 'ocean-depth') gradientClasses = 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950';
  else if (gradientStyle === 'emerald-nature') gradientClasses = isDark ? 'bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white';
  else if (gradientStyle === 'dark-slate') gradientClasses = 'bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#0B0F19]';
  else if (gradientStyle === 'clean-subtle') gradientClasses = 'bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40';
  else if (gradientStyle === 'custom' && hero.customGradient) {
    const { from, via, to, direction = 'to-b' } = hero.customGradient;
    const dirs: Record<string, string> = { 'to-b': 'to bottom', 'to-br': 'to bottom right', 'to-r': 'to right', 'to-tr': 'to top right' };
    gradientOverlayStyle = { background: direction === 'radial' ? `radial-gradient(circle at 50% 20%, ${from}, ${via ? via + ', ' : ''}${to})` : `linear-gradient(${dirs[direction] || 'to bottom'}, ${from}, ${via ? via + ', ' : ''}${to})` };
  }
  return <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none" style={{ backgroundColor: baseBgColor }} aria-hidden="true">
    {gradientStyle !== 'solid' && <div className={`absolute inset-0 ${gradientClasses}`} style={gradientOverlayStyle} />}
    <div className={`absolute top-0 inset-x-0 h-px ${isDark ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-slate-900/10 to-transparent'}`} />
    {orbsEnabled && <><div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full blur-3xl" style={{ backgroundColor: orb1Color, opacity: orbOpacity }} /><div className="absolute top-1/4 -right-28 w-[28rem] h-[28rem] rounded-full blur-3xl" style={{ backgroundColor: orb2Color, opacity: orbOpacity * .85 }} /></>}
    {showBgImage && bgImg && <div className="absolute inset-0"><img src={bgImg} alt="" className={`w-full h-full object-cover object-center scale-105 transform ${blurClass}`} style={{ opacity: imgOpacity, mixBlendMode: isDark ? 'screen' : 'multiply' }} /><div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-slate-950/75 via-slate-900/85 to-slate-950' : 'bg-gradient-to-b from-white/90 via-white/75 to-slate-100/60'}`} /></div>}
    {texture === 'dots' && <div className="absolute inset-0 opacity-[.035]" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '18px 18px' }} />}
    {texture === 'grid' && <div className="absolute inset-0 opacity-[.03]" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg,currentColor 1px,transparent 1px)', backgroundSize: '28px 28px' }} />}
  </div>;
};

export const Hero: React.FC<HeroProps> = ({ business }) => {
  const hero = business.hero || ({ layoutVariant: 'split' } as HeroConfig);
  const layout = hero.layoutVariant || 'split';
  const isDark = getHeroIsDark(hero, business);
  const headline = hero.headline || business.heroHeadline;
  const description = hero.description || business.heroDescription;
  const primaryCtaText = hero.primaryCtaText || business.primaryCtaText;
  const secondaryCtaText = hero.secondaryCtaText || business.secondaryCtaText;
  const trustPoints = hero.trustPoints?.length ? hero.trustPoints : ['Pelayanan profesional', 'Harga transparan', 'Booking cepat via WhatsApp'];
  const whatsappLink = generateWhatsAppLink(business.contact.whatsappNumber, business.contact.defaultWhatsAppMessage);
  const ratingVisible = hero.showRatingPill !== false;
  const trustVisible = hero.showTrustPoints !== false;
  const statsVisible = hero.showFloatingStats === true && (hero.floatingStats?.length || 0) > 0;

  const content = <div className={`relative z-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>
    {hero.eyebrowText && <div className="mb-3 text-xs font-bold uppercase tracking-[.16em] opacity-70">{hero.eyebrowText}</div>}
    {hero.badgeText && <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-current/15 bg-white/10 px-3 py-1 text-xs font-semibold"><Sparkles size={13} />{hero.badgeText}</div>}
    <h1 className="max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{headline}</h1>
    <p className="mt-5 max-w-2xl text-sm leading-7 opacity-75 sm:text-base">{description}</p>
    <div className="mt-7 flex flex-wrap gap-3">
      <a href={whatsappLink} className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-extrabold text-white shadow-lg">{primaryCtaText}<ArrowRight size={16} /></a>
      {secondaryCtaText && <a href={hero.secondaryCtaUrl || '#tentang'} className="inline-flex items-center gap-2 rounded-xl border border-current/15 bg-white/10 px-5 py-3 text-sm font-bold">{secondaryCtaText}<ChevronRight size={16} /></a>}
    </div>
    {hero.ctaNote && <p className="mt-3 text-xs opacity-60">{hero.ctaNote}</p>}
    {trustVisible && <div className="mt-7 grid gap-2 text-xs font-semibold sm:grid-cols-2">{trustPoints.map((point, i) => <div key={`${point}-${i}`} className="flex items-center gap-2"><CheckCircle2 size={15} className="shrink-0 text-[var(--color-primary)]" /><span>{point}</span></div>)}</div>}
    {ratingVisible && <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-current/10 bg-white/10 px-3 py-2 text-xs"><Star size={14} fill="currentColor" /> <b>{hero.ratingValue || '4.9 / 5.0'}</b><span className="opacity-60">{hero.ratingLabel || 'Ulasan pelanggan'}</span></div>}
    {statsVisible && <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">{hero.floatingStats!.map((stat, i) => <div key={i} className="rounded-2xl border border-current/10 bg-white/10 p-4"><b className="block text-xl">{stat.value}</b><span className="text-xs opacity-65">{stat.label}</span></div>)}</div>}
  </div>;

  return <section id="beranda" className={`relative isolate overflow-hidden ${hero.minHeight === 'auto' ? 'py-20' : hero.minHeight === 'large' ? 'min-h-[720px]' : 'min-h-screen'} flex items-center`}>
    <HeroBackground business={business} isDark={isDark} />
    <div className={`mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 ${layout === 'centered' ? 'text-center' : ''}`}><div className={layout === 'split' ? 'grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]' : ''}>{content}{layout === 'split' && <div className="relative z-10"><img src={hero.backgroundImageUrl || business.heroImageUrl} alt={business.name} className="w-full rounded-3xl object-cover shadow-2xl" /></div>}</div></div>
  </section>;
};

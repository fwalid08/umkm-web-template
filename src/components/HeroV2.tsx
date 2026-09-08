import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Star } from 'lucide-react';
import { BusinessConfig, HeroConfig, HeroLayoutVariant } from '../types/business';
import { heroVariantPresets } from '../config/hero';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './common/WhatsAppIcon';

interface Props { business: BusinessConfig; }
const variants: HeroLayoutVariant[] = ['centered','card-left','card-right','background-focus','minimal','editorial','image-split','floating-card','spotlight','bottom-bar'];

function luminance(hex = '#0B0F19') {
  const clean = hex.replace('#','');
  if (!/^[0-9a-f]{6}$/i.test(clean)) return .05;
  const rgb = [0,2,4].map(i => parseInt(clean.slice(i,i+2),16) / 255).map(v => v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4));
  return .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
}
function resolveHero(business: BusinessConfig): HeroConfig {
  const variant = business.hero?.layoutVariant || 'card-left';
  return { ...heroVariantPresets[variant], ...business.hero,
    eyebrowText: business.hero?.eyebrowText || business.name,
    badgeText: business.hero?.badgeText || business.tagline,
    headline: business.hero?.headline || business.heroHeadline,
    description: business.hero?.description || business.heroDescription,
    primaryCtaText: business.hero?.primaryCtaText || business.primaryCtaText,
    secondaryCtaText: business.hero?.secondaryCtaText || business.secondaryCtaText,
    backgroundImageUrl: business.hero?.backgroundImageUrl || business.heroImageUrl,
  };
}
function isDark(hero: HeroConfig, business: BusinessConfig) {
  if (hero.textTheme === 'light') return true;
  if (hero.textTheme === 'dark') return false;
  if (hero.backgroundMode === 'dark') return true;
  if (hero.backgroundMode === 'light') return false;
  return luminance(hero.backgroundColor || business.theme.backgroundColor) < .35;
}

function Background({ business, hero, dark, forceImage=false }: { business: BusinessConfig; hero: HeroConfig; dark: boolean; forceImage?: boolean }) {
  const image = hero.backgroundImageUrl || business.heroImageUrl;
  const type = forceImage ? 'image-overlay' : (hero.backgroundType || 'color');
  const showImage = type !== 'color' && !!image;
  const bg = hero.backgroundColor || (dark ? '#0B0F19' : '#FFFFFF');
  const overlay = hero.overlayColor || (dark ? '#0B0F19' : '#FFFFFF');
  const overlayOpacity = hero.overlayOpacity ?? (dark ? .68 : .82);
  const imageOpacity = hero.backgroundImageOpacity ?? .34;
  const primary = business.theme.primaryColor;
  return <div className="absolute inset-0 overflow-hidden" aria-hidden="true" style={{backgroundColor:bg}}>
    {showImage && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" style={{opacity:imageOpacity,objectPosition:hero.backgroundImagePosition || 'center',filter:hero.backgroundImageBlur === 'lg' ? 'blur(8px)' : hero.backgroundImageBlur === 'md' ? 'blur(4px)' : hero.backgroundImageBlur === 'sm' ? 'blur(2px)' : 'none',transform:'scale(1.04)'}}/>}
    {type === 'image-overlay' && <div className="absolute inset-0" style={{backgroundColor:overlay,opacity:overlayOpacity}}/>}
    {hero.gradientStyle !== 'solid' && <div className="absolute inset-0" style={{background:hero.gradientStyle === 'custom' && hero.customGradient ? `linear-gradient(180deg, ${hero.customGradient.from}, ${hero.customGradient.via || hero.customGradient.from}, ${hero.customGradient.to})` : dark ? `linear-gradient(180deg, ${bg}00 0%, ${bg}99 100%)` : `linear-gradient(180deg, ${bg}00 0%, ${bg}cc 100%)`}}/>}
    {hero.ambientOrbs?.enabled !== false && <><div className="absolute -left-36 -top-36 h-80 w-80 rounded-full blur-3xl" style={{backgroundColor:hero.ambientOrbs?.color1 || primary,opacity:hero.ambientOrbs?.opacity ?? .12}}/><div className="absolute -right-36 bottom-0 h-72 w-72 rounded-full blur-3xl" style={{backgroundColor:hero.ambientOrbs?.color2 || business.theme.accentColor,opacity:(hero.ambientOrbs?.opacity ?? .12) * .7}}/></>}
    {hero.texture && hero.texture !== 'none' && <div className="absolute inset-0" style={{opacity:hero.textureOpacity ?? .04,backgroundImage:hero.texture === 'grid' ? 'linear-gradient(rgba(127,127,127,.35) 1px, transparent 1px),linear-gradient(90deg, rgba(127,127,127,.35) 1px, transparent 1px)' : 'radial-gradient(circle, rgba(127,127,127,.45) 1px, transparent 1px)',backgroundSize:hero.texture === 'grid' ? '32px 32px' : '20px 20px'}}/>}
  </div>;
}

function Content({ business, hero, dark, centered=false }: { business: BusinessConfig; hero: HeroConfig; dark: boolean; centered?: boolean }) {
  const primary = business.theme.primaryColor;
  const wa = generateWhatsAppLink(business.contact.whatsappNumber, business.contact.defaultWhatsAppMessage);
  const points = hero.trustPoints || [];
  return <div className={centered ? 'text-center' : 'text-left'}>
    {hero.eyebrowText && <p className="mb-3 text-[11px] font-bold uppercase tracking-[.18em]" style={{color:primary}}>{hero.eyebrowText}</p>}
    {hero.badgeText && <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold`} style={{borderColor:dark ? 'rgba(255,255,255,.16)' : 'rgba(15,23,42,.10)',backgroundColor:dark ? 'rgba(255,255,255,.07)' : 'rgba(255,255,255,.82)',color:dark ? '#F8FAFC' : '#334155'}}><span className="h-1.5 w-1.5 rounded-full" style={{backgroundColor:primary}}/>{hero.badgeText}</div>}
    <h1 className={`font-black tracking-[-.04em] ${centered ? 'mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl' : 'max-w-3xl text-4xl sm:text-5xl lg:text-6xl'}`} style={{color:dark ? '#FFFFFF' : '#0F172A'}}>{hero.headline}</h1>
    <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${centered ? 'mx-auto' : ''}`} style={{color:dark ? '#CBD5E1' : '#475569'}}>{hero.description}</p>
    <div className={`mt-7 flex flex-col gap-3 sm:flex-row ${centered ? 'justify-center' : ''}`}>
      <a href={hero.primaryCtaUrl || wa} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold shadow-lg transition hover:-translate-y-0.5" style={{backgroundColor:primary,color:'#FFFFFF'}}><WhatsAppIcon className="h-5 w-5"/>{hero.primaryCtaText}<ArrowRight className="h-4 w-4"/></a>
      {hero.secondaryCtaText && <a href={hero.secondaryCtaUrl || '#layanan'} className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold transition" style={{borderColor:dark ? 'rgba(255,255,255,.18)' : '#E2E8F0',backgroundColor:dark ? 'rgba(255,255,255,.07)' : '#FFFFFF',color:dark ? '#FFFFFF' : '#1E293B'}}>{hero.secondaryCtaText}</a>}
    </div>
    {hero.ctaNote && <p className="mt-3 text-xs" style={{color:dark ? '#94A3B8' : '#64748B'}}>{hero.ctaNote}</p>}
    {hero.showTrustPoints !== false && points.length > 0 && <div className={`mt-6 grid gap-2 ${centered ? 'mx-auto max-w-2xl sm:grid-cols-2' : 'sm:grid-cols-2'}`}>{points.slice(0,4).map((point,i)=><div key={i} className="flex items-center gap-2 text-sm" style={{color:dark ? '#E2E8F0' : '#475569'}}><CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500"/>{point}</div>)}</div>}
  </div>;
}
function Visual({ business, hero, dark }: { business: BusinessConfig; hero: HeroConfig; dark: boolean }) {
  return <div className={`overflow-hidden rounded-3xl border shadow-2xl ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}><img src={hero.backgroundImageUrl || business.heroImageUrl} alt={hero.backgroundImageAlt || business.name} className="h-[300px] w-full object-cover sm:h-[390px]"/><div className="flex items-center justify-between gap-3 p-4" style={{color:dark ? '#F8FAFC' : '#334155'}}><div className="flex items-center gap-2 text-xs font-semibold"><Star className="h-4 w-4 fill-current" style={{color:business.theme.accentColor}}/>{hero.ratingValue || '4.9/5'} · {hero.ratingLabel || 'Pelanggan puas'}</div>{business.contact.phone && <a href={`tel:${business.contact.phone}`} aria-label="Telepon" className="rounded-full p-2" style={{backgroundColor:dark ? 'rgba(255,255,255,.08)' : '#F8FAFC'}}><Phone className="h-4 w-4"/></a>}</div></div>;
}

export const HeroV2: React.FC<Props> = ({business}) => {
  const hero = resolveHero(business);
  const variant = variants.includes(hero.layoutVariant) ? hero.layoutVariant : 'card-left';
  const dark = isDark(hero,business);
  const sectionClass = 'relative overflow-hidden border-b';
  const card = <div className="rounded-3xl border border-white/15 bg-slate-950/78 p-6 shadow-2xl backdrop-blur-xl sm:p-9"><Content business={business} hero={hero} dark={true}/></div>;

  if (variant === 'centered') return <section id="beranda" className={`${sectionClass} py-16 sm:py-24`}><Background business={business} hero={hero} dark={dark}/><div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6"><Content business={business} hero={hero} dark={dark} centered/><div className="mx-auto mt-10 max-w-5xl"><Visual business={business} hero={hero} dark={dark}/></div></div></section>;
  if (variant === 'card-left') return <section id="beranda" className="relative overflow-hidden py-14 sm:py-20"><Background business={business} hero={{...hero,backgroundType:'color'}} dark={false}/><div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2"><div>{card}</div><Visual business={business} hero={hero} dark={true}/></div></section>;
  if (variant === 'card-right') return <section id="beranda" className="relative overflow-hidden py-14 sm:py-20"><Background business={business} hero={{...hero,backgroundType:'color'}} dark={false}/><div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2"><Visual business={business} hero={hero} dark={false}/><div>{card}</div></div></section>;
  if (variant === 'background-focus') return <section id="beranda" className="relative min-h-[640px] overflow-hidden"><Background business={business} hero={hero} dark={true} forceImage/><div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-4 py-20 sm:px-6"><Content business={business} hero={hero} dark={true}/></div></section>;
  if (variant === 'minimal') return <section id="beranda" className={`${sectionClass} py-16 sm:py-24`}><Background business={business} hero={hero} dark={dark}/><div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6"><Content business={business} hero={hero} dark={dark}/></div></section>;
  if (variant === 'editorial') return <section id="beranda" className={`${sectionClass} py-16 sm:py-28`}><Background business={business} hero={hero} dark={dark}/><div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6"><Content business={business} hero={hero} dark={dark}/><div className="mt-10 h-px w-full" style={{backgroundColor:dark ? 'rgba(255,255,255,.14)' : '#E2E8F0'}}/></div></section>;
  if (variant === 'image-split') return <section id="beranda" className="relative overflow-hidden py-0"><div className="mx-auto grid min-h-[600px] max-w-7xl lg:grid-cols-2"><div className="flex items-center px-4 py-16 sm:px-8 lg:px-12"><Content business={business} hero={{...hero,backgroundType:'color',backgroundColor:'#FFFFFF',backgroundMode:'light',textTheme:'dark'}} dark={false}/></div><div className="min-h-[360px] bg-slate-100"><img src={hero.backgroundImageUrl || business.heroImageUrl} alt={hero.backgroundImageAlt || business.name} className="h-full min-h-[360px] w-full object-cover"/></div></div></section>;
  if (variant === 'floating-card') return <section id="beranda" className="relative min-h-[620px] overflow-hidden"><Background business={business} hero={hero} dark={true} forceImage/><div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-16 sm:px-6"><div className="max-w-xl">{card}</div></div></section>;
  if (variant === 'spotlight') return <section id="beranda" className={`${sectionClass} py-20 sm:py-28`}><Background business={business} hero={hero} dark={dark}/><div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6"><Content business={business} hero={hero} dark={dark} centered/></div></section>;
  return <section id="beranda" className="relative min-h-[650px] overflow-hidden"><Background business={business} hero={hero} dark={true} forceImage/><div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-4 py-12 sm:px-6"><div className="w-full"><Content business={business} hero={hero} dark={true}/><div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-md"><span className="text-sm font-semibold text-white">{hero.trustBadgeText || 'Dipercaya pelanggan'}</span>{hero.ratingValue && <span className="flex items-center gap-1 text-sm text-slate-200"><Star className="h-4 w-4 fill-current" style={{color:business.theme.accentColor}}/>{hero.ratingValue}</span>}</div></div></div></section>;
};

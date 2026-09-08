import React from 'react';
import { ArrowRight, CheckCircle2, MapPin, Phone, Star } from 'lucide-react';
import { BusinessConfig, HeroConfig, HeroLayoutVariant } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './common/WhatsAppIcon';

interface Props { business: BusinessConfig; }

function isDark(hero: HeroConfig, business: BusinessConfig) {
  if (hero.backgroundMode === 'dark') return true;
  if (hero.backgroundMode === 'light') return false;
  const hex = (hero.backgroundColor || business.theme.secondaryColor || '#0B0F19').replace('#', '');
  if (hex.length !== 6) return true;
  const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
  return (0.299*r + 0.587*g + 0.114*b) < 145;
}

const gradientClass = (style: HeroConfig['gradientStyle'], dark: boolean) => {
  if (style === 'aurora-mesh') return dark ? 'bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,.30),transparent_60%)]' : 'bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,.12),transparent_60%)]';
  if (style === 'sunset-radiant') return dark ? 'bg-gradient-to-b from-amber-950/60 via-slate-950/80 to-slate-950' : 'bg-gradient-to-b from-amber-50 via-white to-slate-50';
  if (style === 'ocean-depth') return 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950';
  if (style === 'emerald-nature') return dark ? 'bg-gradient-to-b from-emerald-950/50 via-slate-950 to-slate-950' : 'bg-gradient-to-b from-emerald-50 via-white to-slate-50';
  if (style === 'clean-subtle') return 'bg-gradient-to-b from-white via-slate-50 to-slate-100';
  if (style === 'dark-slate') return 'bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#0B0F19]';
  if (style === 'brand-glow') return dark ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950' : 'bg-gradient-to-b from-white via-slate-50 to-slate-100';
  return '';
};

function Background({ business, hero, dark }: { business: BusinessConfig; hero: HeroConfig; dark: boolean }) {
  const image = hero.backgroundImageUrl || business.heroImageUrl;
  const type = hero.backgroundType || (hero.showBackgroundImageOverlay ? 'image-overlay' : 'color');
  const showImage = type === 'image' || type === 'image-overlay';
  const overlayColor = hero.overlayColor || hero.backgroundColor || (dark ? '#0B0F19' : '#FFFFFF');
  const overlayOpacity = hero.overlayOpacity ?? (dark ? 0.68 : 0.72);
  const imageOpacity = hero.backgroundImageOpacity ?? (dark ? 0.34 : 0.18);
  const blur = hero.backgroundImageBlur === 'lg' ? 'blur-[8px]' : hero.backgroundImageBlur === 'md' ? 'blur-[4px]' : hero.backgroundImageBlur === 'sm' ? 'blur-[2px]' : '';
  return <div className="absolute inset-0 -z-0 overflow-hidden" aria-hidden="true" style={{backgroundColor: hero.backgroundColor || (dark ? '#0B0F19' : '#F8FAFC')}}>
    {showImage && image && <img src={image} alt="" className={`absolute inset-0 h-full w-full object-cover scale-105 ${blur}`} style={{opacity: imageOpacity, objectPosition: hero.backgroundImagePosition || 'center'}} />}
    {type === 'image-overlay' && <div className="absolute inset-0" style={{backgroundColor: overlayColor, opacity: overlayOpacity}} />}
    {hero.overlayGradient !== false && <div className={`absolute inset-0 ${gradientClass(hero.gradientStyle, dark)}`} />}
    {hero.ambientOrbs?.enabled !== false && <><div className="absolute -left-40 -top-40 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{backgroundColor: hero.ambientOrbs?.color1 || business.theme.primaryColor, opacity: hero.ambientOrbs?.opacity ?? .14}} /><div className="absolute -right-40 top-1/3 h-[24rem] w-[24rem] rounded-full blur-3xl" style={{backgroundColor: hero.ambientOrbs?.color2 || business.theme.accentColor, opacity: (hero.ambientOrbs?.opacity ?? .14) * .75}} /></>}
  </div>;
}

const Buttons = ({ business, dark, compact=false }: {business: BusinessConfig; dark:boolean; compact?:boolean}) => {
  const hero = business.hero || {};
  const wa = generateWhatsAppLink(business.contact.whatsappNumber, business.contact.defaultWhatsAppMessage);
  return <div className={`flex ${compact ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} gap-3`}>
    <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold shadow-lg transition hover:-translate-y-0.5" style={{backgroundColor: business.theme.primaryColor, color:'#fff'}}><WhatsAppIcon className="h-5 w-5" />{business.primaryCtaText}<ArrowRight className="h-4 w-4" /></a>
    <a href="#layanan" className={`inline-flex items-center justify-center rounded-xl border px-5 py-3 font-semibold transition ${dark ? 'border-white/20 bg-white/10 text-white hover:bg-white/15' : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50'}`}>{business.secondaryCtaText}</a>
  </div>;
};

export const HeroV2: React.FC<Props> = ({business}) => {
  const hero = business.hero || { layoutVariant: 'split' as HeroLayoutVariant };
  const variant = hero.layoutVariant || 'split';
  const dark = isDark(hero, business);
  const points = hero.trustPoints?.length ? hero.trustPoints : ['Tenaga berpengalaman & terlatih','Estimasi biaya transparan','Prioritas booking WhatsApp'];
  const common = <><div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur ${dark ? 'border-white/15 bg-white/10 text-white' : 'border-slate-200 bg-white/80 text-slate-700'}`}><span className="h-2 w-2 rounded-full" style={{backgroundColor:business.theme.primaryColor}} />{hero.badgeText || business.tagline}<span className="hidden sm:inline">• {business.contact.city}</span></div><h1 className={`text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl ${dark ? 'text-white' : 'text-slate-950'}`}>{business.heroHeadline}</h1><p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{business.heroDescription}</p></>;
  const trust = <div className={`mt-6 grid gap-2 text-sm sm:grid-cols-2 ${dark ? 'text-slate-200' : 'text-slate-700'}`}>{points.slice(0,4).map((p,i)=><div key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" />{p}</div>)}</div>;

  if (variant === 'centered') return <section id="beranda" className="relative overflow-hidden border-b py-16 sm:py-24"><Background business={business} hero={hero} dark={dark}/><div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">{common}<div className="mt-7 flex justify-center"><Buttons business={business} dark={dark}/></div><div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl"><img src={business.heroImageUrl} alt={business.name} className="h-56 w-full object-cover sm:h-80 lg:h-[26rem]" /></div></div></section>;

  if (variant === 'background-focus') return <section id="beranda" className="relative min-h-[620px] overflow-hidden"><Background business={{...business, hero:{...hero, backgroundType:'image-overlay'}}} hero={{...hero, backgroundType:'image-overlay', backgroundImageOpacity: hero.backgroundImageOpacity ?? .55, overlayOpacity: hero.overlayOpacity ?? .58}} dark={true}/><div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6"><div className="max-w-3xl">{common}<Buttons business={business} dark={true}/>{trust}</div></div></section>;

  if (variant === 'card-overlay') return <section id="beranda" className="relative min-h-[620px] overflow-hidden py-12 sm:py-20"><Background business={{...business, hero:{...hero, backgroundType:'image'}}} hero={{...hero, backgroundType:'image', backgroundImageOpacity: hero.backgroundImageOpacity ?? .7}} dark={true}/><div className="relative z-10 mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6"><div className="w-full max-w-3xl rounded-3xl border border-white/15 bg-black/45 p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">{common}<Buttons business={business} dark={true}/>{trust}</div></div></section>;

  if (variant === 'minimal') return <section id="beranda" className="relative overflow-hidden border-b py-14 sm:py-20"><Background business={business} hero={hero} dark={dark}/><div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">{common}<div className="mt-7"><Buttons business={business} dark={dark} compact/></div></div></section>;

  return <section id="beranda" className="relative overflow-hidden border-b py-14 sm:py-20 lg:py-24"><Background business={business} hero={hero} dark={dark}/><div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12"><div className="lg:col-span-7">{common}<Buttons business={business} dark={dark}/>{trust}</div><div className="lg:col-span-5"><div className={`overflow-hidden rounded-3xl border shadow-2xl ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}><img src={business.heroImageUrl} alt={business.name} className="h-[340px] w-full object-cover sm:h-[400px]"/><div className="flex items-center justify-between gap-3 p-4"><div className="flex items-center gap-2 text-sm font-semibold"><Star className="h-4 w-4 fill-current" style={{color:business.theme.accentColor}}/> {hero.trustBadgeText || 'Dipercaya pelanggan'}</div><a href={`tel:${business.contact.phone}`} className="rounded-full p-2" aria-label="Telepon"><Phone className="h-4 w-4"/></a></div></div></div></div></section>;
};

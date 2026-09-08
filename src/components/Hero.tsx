import React from 'react';
import { 
  BusinessConfig, 
  HeroConfig,
  HeroLayoutVariant 
} from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Sparkles, 
  Calendar,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  business: BusinessConfig;
}

/**
 * Intelligent helper to detect if current hero background is dark or light,
 * ensuring 100% WCAG contrast and crystal clear typography across all layouts.
 */
export function getHeroIsDark(hero: HeroConfig | undefined, business: BusinessConfig): boolean {
  if (hero?.backgroundMode === 'dark') return true;
  if (hero?.backgroundMode === 'light') return false;
  if (hero?.gradientStyle === 'dark-slate' || hero?.gradientStyle === 'ocean-depth') return true;
  if (hero?.gradientStyle === 'clean-subtle') return false;

  if (hero?.backgroundColor) {
    const hex = hero.backgroundColor.replace('#', '').trim();
    if (hex.length === 3) {
      const r = parseInt(hex[0] + hex[0], 16);
      const g = parseInt(hex[1] + hex[1], 16);
      const b = parseInt(hex[2] + hex[2], 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
    } else if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      return (0.299 * r + 0.587 * g + 0.114 * b) < 140;
    }
  }

  // Default fallback based on layout variant
  if (hero?.layoutVariant === 'card-overlay' && !hero?.backgroundColor) {
    return true;
  }
  return false;
}

/**
 * Native-Feel Hero Background Engine
 * Renders configurable background color, gradient style, ambient glow orbs,
 * specular edge highlight, and optional disguised background photography.
 */
const HeroBackground: React.FC<{
  business: BusinessConfig;
  isDark: boolean;
}> = ({ business, isDark }) => {
  const hero = business.hero || {};
  const primaryColor = business.theme.primaryColor || '#EF4444';
  const accentColor = business.theme.accentColor || '#38BDF8';

  // 1. Base solid canvas background color
  const baseBgColor = hero.backgroundColor || (isDark ? '#0B0F19' : '#F8FAFC');

  // 2. Gradient style
  const gradientStyle = hero.gradientStyle || 'brand-glow';

  // 3. Ambient Orbs configuration
  const orbsEnabled = hero.ambientOrbs?.enabled !== false;
  const orb1Color = hero.ambientOrbs?.color1 || primaryColor;
  const orb2Color = hero.ambientOrbs?.color2 || accentColor;
  const orbOpacity = hero.ambientOrbs?.opacity ?? (isDark ? 0.22 : 0.16);

  // 4. Texture
  const texture = hero.texture || 'dots';
  const textureOpacity = hero.textureOpacity ?? (isDark ? 0.04 : 0.035);

  // 5. Disguised background image
  const showBgImage = hero.showBackgroundImageOverlay ?? true;
  const bgImg = hero.backgroundImageUrl || business.heroImageUrl;
  const imgOpacity = hero.backgroundImageOpacity ?? (isDark ? 0.20 : 0.10);
  const blurMap = {
    none: '',
    sm: 'blur-[2px]',
    md: 'blur-[4px]',
    lg: 'blur-[8px]',
  };
  const blurClass = blurMap[hero.backgroundImageBlur || 'sm'];

  // Calculate CSS gradient layer based on gradientStyle
  let gradientOverlayStyle: React.CSSProperties = {};
  let gradientClasses = '';

  if (gradientStyle === 'brand-glow') {
    gradientClasses = isDark
      ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
      : 'bg-gradient-to-b from-white via-slate-50/70 to-slate-100/60';
  } else if (gradientStyle === 'aurora-mesh') {
    gradientClasses = isDark
      ? 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.28),rgba(255,255,255,0))] bg-slate-950'
      : 'bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.14),rgba(255,255,255,0))] bg-slate-50/60';
  } else if (gradientStyle === 'sunset-radiant') {
    gradientClasses = isDark
      ? 'bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950'
      : 'bg-gradient-to-b from-amber-50/80 via-orange-50/30 to-white';
  } else if (gradientStyle === 'ocean-depth') {
    gradientClasses = 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950';
  } else if (gradientStyle === 'emerald-nature') {
    gradientClasses = isDark
      ? 'bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-950'
      : 'bg-gradient-to-b from-emerald-50/70 via-teal-50/30 to-white';
  } else if (gradientStyle === 'dark-slate') {
    gradientClasses = 'bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#0B0F19]';
  } else if (gradientStyle === 'clean-subtle') {
    gradientClasses = 'bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40';
  } else if (gradientStyle === 'custom' && hero.customGradient) {
    const { from, via, to, direction = 'to-b' } = hero.customGradient;
    const dirMap: Record<string, string> = {
      'to-b': 'to bottom',
      'to-br': 'to bottom right',
      'to-r': 'to right',
      'to-tr': 'to top right',
      'radial': 'circle',
    };
    if (direction === 'radial') {
      gradientOverlayStyle = {
        background: `radial-gradient(circle at 50% 20%, ${from}, ${via ? via + ', ' : ''}${to})`,
      };
    } else {
      gradientOverlayStyle = {
        background: `linear-gradient(${dirMap[direction] || 'to bottom'}, ${from}, ${via ? via + ', ' : ''}${to})`,
      };
    }
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none transition-colors duration-300"
      style={{ backgroundColor: baseBgColor }}
      aria-hidden="true"
    >
      {/* 1. Base Gradient Canvas */}
      {gradientStyle !== 'solid' && (
        <div 
          className={`absolute inset-0 transition-all duration-300 ${gradientClasses}`}
          style={gradientOverlayStyle}
        />
      )}

      {/* 2. Top Specular Edge Line (Native tactile highlight) */}
      <div 
        className={`absolute top-0 inset-x-0 h-px ${
          isDark 
            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-slate-900/10 to-transparent'
        }`} 
      />

      {/* 3. Ambient Radial Glow Orbs (Native depth lighting) */}
      {orbsEnabled && (
        <>
          <div 
            className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full blur-3xl transform-gpu transition-all duration-500"
            style={{ 
              backgroundColor: orb1Color, 
              opacity: orbOpacity 
            }}
          />
          <div 
            className="absolute top-1/4 -right-28 w-[28rem] h-[28rem] rounded-full blur-3xl transform-gpu transition-all duration-500"
            style={{ 
              backgroundColor: orb2Color, 
              opacity: orbOpacity * 0.85 
            }}
          />
          {gradientStyle === 'aurora-mesh' && (
            <div 
              className="absolute -bottom-20 left-1/3 w-[30rem] h-[30rem] rounded-full blur-3xl transform-gpu opacity-15"
              style={{ backgroundColor: '#10B981' }}
            />
          )}
        </>
      )}

      {/* 4. Disguised / Subtle Background Image Overlay */}
      {showBgImage && bgImg && (
        <div className="absolute inset-0">
          <img
            src={bgImg}
            alt=""
            className={`w-full h-full object-cover object-center scale-105 transform ${blurClass}`}
            style={{ 
              opacity: imgOpacity,
              mixBlendMode: isDark ? 'screen' : 'multiply'
            }}
          />
          {/* Faded Gradient Mask so foreground text remains 100% crisp and readable */}
          <div 
            className={`absolute inset-0 ${
              isDark
                ? 'bg-gradient-to-b from-slate-950/75 via-slate-900/85 to-slate-950'
                : 'bg-gradient-to-b from-white/90 via-white/75 to-slate-100/60'
            }`}
          />
        </div>
      )}

      {/* 5. Tactile Micro-Texture */}
      {texture === 'dots' && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: textureOpacity,
            backgroundImage: isDark
              ? 'radial-gradient(#ffffff 1px, transparent 1px)'
              : 'radial-gradient(#000000 1px, transparent 1px)',
            backgroundSize: '18px 18px',
          }}
        />
      )}
      {texture === 'grid' && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: textureOpacity,
            backgroundImage: isDark
              ? 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)'
              : 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      )}
      {texture === 'mesh' && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:12px_12px]"
        />
      )}
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ business }) => {
  const variant: HeroLayoutVariant = 
    business.hero?.layoutVariant || business.theme.heroVariant || 'split';

  const hero = business.hero || {};
  const isDark = getHeroIsDark(hero, business);

  const waLink = generateWhatsAppLink(
    business.contact.whatsappNumber,
    business.contact.defaultWhatsAppMessage
  );

  const createWaLink = (message: string) => 
    generateWhatsAppLink(business.contact.whatsappNumber, message);

  const defaultTrustPoints = [
    'Tenaga Berpengalaman & Terlatih',
    '100% Suku Cadang & Bahan Terjamin',
    'Estimasi Biaya Transparan Tanpa Siluman',
    'Prioritas Antrean Booking WhatsApp',
  ];
  const trustPoints = hero.trustPoints && hero.trustPoints.length > 0 
    ? hero.trustPoints 
    : defaultTrustPoints;

  // ============================================================================
  // VARIANT 1: 'split' - Modern High-Conversion Split Layout
  // ============================================================================
  if (variant === 'split') {
    return (
      <section 
        id="beranda" 
        className={`relative overflow-hidden pt-4 pb-12 sm:pt-8 sm:pb-16 lg:py-20 border-b scroll-mt-24 transition-colors duration-200 ${
          isDark ? 'border-slate-800 text-white' : 'border-slate-200/60 text-slate-900'
        }`}
      >
        {/* Modern Configurable Background Gradient & Native Depth */}
        <HeroBackground business={business} isDark={isDark} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Copywriting & CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              
              {/* Tagline & Location Chip */}
              <div 
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-xs text-xs font-semibold max-w-full backdrop-blur-xs transition-colors ${
                  isDark 
                    ? 'bg-white/10 border-white/15 text-white' 
                    : 'bg-white/95 border-slate-200/80 text-slate-700'
                }`}
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0 animate-pulse" 
                  style={{ backgroundColor: business.theme.primaryColor }}
                />
                <span className="truncate">{hero.badgeText || business.tagline}</span>
                <span className={isDark ? 'text-white/30 hidden sm:inline' : 'text-slate-300 hidden sm:inline'}>•</span>
                <span className={`hidden sm:inline-flex items-center gap-1 font-normal ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {business.contact.city}
                </span>
              </div>

              {/* Responsive Headline */}
              <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight sm:leading-[1.18] ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {business.heroHeadline}
              </h1>

              {/* Description Subtitle */}
              <p className={`text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {business.heroDescription}
              </p>

              {/* Key Trust Checkmarks */}
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 text-xs sm:text-sm font-medium ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  id="hero-primary-wa-btn"
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                  style={{ 
                    backgroundColor: business.theme.primaryColor,
                    boxShadow: `0 8px 20px -4px ${business.theme.primaryColor}50`
                  }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>{business.primaryCtaText}</span>
                </a>

                <a
                  id="hero-secondary-services-btn"
                  href="#layanan"
                  className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-colors ${
                    isDark
                      ? 'text-white bg-white/10 hover:bg-white/20 border border-white/15'
                      : 'text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs'
                  }`}
                >
                  <span>{business.secondaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Social Proof Mini Bar */}
              <div className={`pt-2 flex flex-wrap items-center gap-3 border-t ${
                isDark ? 'border-white/15' : 'border-slate-200/80'
              }`}>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>4.9 / 5.0</span> {hero.trustBadgeText || `Rating Kepuasan Pelanggan di ${business.contact.city}`}
                </p>
              </div>
            </div>

            {/* Right Column: Hero Visual & Floating Badges */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Showcase Image */}
                <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border-4 aspect-[4/3] sm:aspect-[16/11] ${
                  isDark ? 'border-white/15 bg-slate-900' : 'border-white bg-slate-100'
                }`}>
                  <img
                    src={business.heroImageUrl}
                    alt={business.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  
                  {/* Bottom Image Info Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white p-3 rounded-xl bg-slate-900/75 backdrop-blur-md border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                          Buka Hari Ini
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-white">
                          {business.openingHours[0]?.hours || '08.00 - 17.00 WIB'}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Siap Melayani
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Rating Card - Top Right */}
                <div className={`absolute -top-3.5 -right-3.5 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center gap-2.5 hidden sm:flex ${
                  isDark 
                    ? 'bg-slate-900/90 text-white border border-white/15' 
                    : 'bg-white/95 text-slate-900 border border-slate-100'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className={`flex items-center gap-1 text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      <span>4.9 / 5.0</span>
                    </div>
                    <p className={`text-[10px] font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>1,200+ Ulasan Puas</p>
                  </div>
                </div>

                {/* Floating Guarantee Badge - Bottom Left */}
                <div className={`absolute -bottom-3.5 -left-3.5 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center gap-2.5 hidden sm:flex ${
                  isDark 
                    ? 'bg-slate-900/90 text-white border border-white/15' 
                    : 'bg-white/95 text-slate-900 border border-slate-100'
                }`}>
                  <div 
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Garansi Pengerjaan</p>
                    <p className="text-[10px] text-emerald-400 font-semibold">100% Bebas Khawatir</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }

  // ============================================================================
  // VARIANT 2: 'centered' - Modern Editorial Showcase Hero
  // ============================================================================
  if (variant === 'centered') {
    return (
      <section 
        id="beranda" 
        className={`relative overflow-hidden pt-6 pb-14 sm:pt-12 sm:pb-20 border-b text-center scroll-mt-24 transition-colors duration-200 ${
          isDark ? 'border-slate-800 text-white' : 'border-slate-200/60 text-slate-900'
        }`}
      >
        {/* Modern Configurable Background Gradient & Native Depth */}
        <HeroBackground business={business} isDark={isDark} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 relative z-10">
          
          {/* Social Proof Pill */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-xs text-xs font-bold backdrop-blur-xs transition-colors ${
              isDark 
                ? 'bg-white/10 border-white/15 text-white' 
                : 'bg-white/95 border-slate-200 text-slate-800'
            }`}
          >
            <span className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>4.9 / 5.0</span>
            </span>
            <span className={isDark ? 'text-white/30' : 'text-slate-300'}>•</span>
            <span className={`font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {hero.trustBadgeText || `Pilihan Utama Pelanggan di ${business.contact.city}`}
            </span>
          </div>

          {/* Centered Headline */}
          <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight max-w-4xl mx-auto ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {business.heroHeadline}
          </h1>

          {/* Subtitle */}
          <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {business.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              id="hero-centered-wa-btn"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              style={{ 
                backgroundColor: business.theme.primaryColor,
                boxShadow: `0 10px 25px -5px ${business.theme.primaryColor}50`
              }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>{business.primaryCtaText}</span>
            </a>

            <a
              href="#harga"
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-colors ${
                isDark
                  ? 'text-white bg-white/10 hover:bg-white/20 border border-white/15'
                  : 'text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs'
              }`}
            >
              <span>{business.secondaryCtaText}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          </div>

          {/* Centered Panoramic Showcase Media */}
          <div className="pt-4 sm:pt-6">
            <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border aspect-[16/9] sm:aspect-[21/9] max-w-4xl mx-auto group ${
              isDark ? 'border-white/15 bg-slate-900' : 'border-slate-200/80 bg-slate-100'
            }`}>
              <img
                src={business.heroImageUrl}
                alt={business.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              
              {/* Bottom Showcase Strip */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white">
                <div className="text-left">
                  <p className="text-xs font-semibold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{hero.badgeText || business.tagline}</span>
                  </p>
                  <p className="text-sm sm:text-base font-bold">{business.name} • {business.contact.city}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-white border border-white/20">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Garansi Layanan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Checkmarks Row */}
          <div className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium pt-2 ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {trustPoints.slice(0, 3).map((tp, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {tp}
              </span>
            ))}
          </div>

        </div>
      </section>
    );
  }

  // ============================================================================
  // VARIANT 3: 'card-overlay' - Modern Studio App-Style Overlay Hero
  // ============================================================================
  return (
    <section 
      id="beranda" 
      className={`relative overflow-hidden pt-6 pb-16 sm:pt-10 sm:pb-24 border-b scroll-mt-24 transition-colors duration-200 ${
        isDark ? 'border-slate-800 text-white' : 'border-slate-200/60 text-slate-900'
      }`}
    >
      {/* Native-Feel Background Gradient & Disguised Backdrop Image */}
      <HeroBackground business={business} isDark={isDark} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Atmospheric Headline & Fast Direct Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Tagline Pill */}
            <div 
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-bold backdrop-blur-md transition-colors ${
                isDark 
                  ? 'bg-white/10 border-white/15 text-amber-300' 
                  : 'bg-slate-900/5 border-slate-900/10 text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{hero.badgeText || business.tagline}</span>
              <span className={isDark ? 'text-white/30' : 'text-slate-400'}>•</span>
              <span className={isDark ? 'text-white/80' : 'text-slate-600'}>{business.contact.city}</span>
            </div>

            {/* Headline */}
            <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-[1.15] ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {business.heroHeadline}
            </h1>

            {/* Description */}
            <p className={`text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {business.heroDescription}
            </p>

            {/* Quick Inquiry Tags - Native App Style Tap Chips */}
            <div className="pt-2">
              <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Pilih Kebutuhan Anda Langsung (Klik untuk Chat):
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={createWaLink(`Halo ${business.name}, saya ingin tanya estimasi biaya layanan.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 border border-white/15 text-white'
                      : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 shadow-xs'
                  }`}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tanya Biaya & Konsultasi</span>
                </a>

                <a
                  href={createWaLink(`Halo ${business.name}, saya mau reservasi / booking jadwal hari ini.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 border border-white/15 text-white'
                      : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 shadow-xs'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Booking Jadwal</span>
                </a>

                <a
                  href={`tel:${business.contact.phone.replace(/\D/g, '')}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all hover:scale-105 active:scale-95 ${
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 border border-white/15 text-white'
                      : 'bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 shadow-xs'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Telepon Langsung</span>
                </a>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                id="hero-app-wa-btn"
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
                style={{ backgroundColor: business.theme.primaryColor }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>{business.primaryCtaText}</span>
              </a>

              <a
                href="#layanan"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-colors ${
                  isDark
                    ? 'text-white bg-slate-800 hover:bg-slate-700 border border-slate-700'
                    : 'text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 shadow-xs'
                }`}
              >
                <span>{business.secondaryCtaText}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

          </div>

          {/* Right Column: App-style Quick Card Overlay */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-slate-900 shadow-2xl border border-slate-200/80 relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900">{business.name}</h3>
                    <p className="text-xs text-slate-500">{business.industry}</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>

              {/* Card Visual / Media Clip */}
              <div className="mt-4 rounded-xl overflow-hidden aspect-[16/10] relative shadow-inner bg-slate-100">
                <img
                  src={business.heroImageUrl}
                  alt={business.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-center justify-between">
                  <span className="text-xs font-semibold flex items-center gap-1 text-amber-300">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    4.9 (1,200+ Review)
                  </span>
                  <span className="text-[11px] bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded text-white/90">
                    {business.contact.city}
                  </span>
                </div>
              </div>

              {/* Direct WhatsApp Quick-Booking Action Sheet */}
              <div className="mt-4 space-y-2.5">
                <p className="text-xs font-bold text-slate-800">
                  Konsultasi & Reservasi Kilat:
                </p>

                {/* WhatsApp Chat Form Field Preview */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>Respons Cepat: <strong>5 - 15 Menit</strong></span>
                  </div>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Buka Hari Ini
                  </span>
                </div>

                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all active:scale-95"
                  style={{ backgroundColor: business.theme.primaryColor }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Kirim Pesan WhatsApp Sekarang</span>
                </a>

                <p className="text-[10px] text-center text-slate-400">
                  Konsultasi awal gratis tanpa kewajiban apa pun.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

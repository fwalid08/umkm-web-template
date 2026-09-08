import React, { useState } from 'react';
import { 
  BusinessConfig, 
  HeroVariant, 
  FontOptionId,
  HeroGradientStyle,
  HeroTextureType
} from '../types/business';
import { templateList } from '../config/templates';
import { fontOptions, getFontById } from '../config/fonts';
import { heroGradientOptions, heroBackgroundPresets } from '../config/hero';
import { DynamicIcon } from '../lib/icons';
import { 
  Settings2, 
  ChevronUp, 
  ChevronDown, 
  Check, 
  Copy, 
  Sparkles, 
  Layout, 
  Type,
  FileCode,
  Palette,
  Eye,
  Sliders
} from 'lucide-react';

interface DevPanelProps {
  currentBusiness: BusinessConfig;
  onSelectBusiness: (business: BusinessConfig) => void;
}

export const DevPanel: React.FC<DevPanelProps> = ({ currentBusiness, onSelectBusiness }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'presets' | 'hero' | 'fonts' | 'guide'>('presets');

  const currentFont = getFontById(currentBusiness.theme.fontOptionId);

  const handleCopyConfig = () => {
    navigator.clipboard.writeText(JSON.stringify(currentBusiness, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleHeroChange = (variant: HeroVariant) => {
    onSelectBusiness({
      ...currentBusiness,
      theme: {
        ...currentBusiness.theme,
        heroVariant: variant,
      },
      hero: {
        ...(currentBusiness.hero || {
          layoutVariant: variant,
          gradientStyle: 'brand-glow',
          showBackgroundImageOverlay: true,
          backgroundImageOpacity: 0.12,
          backgroundImageBlur: 'sm',
        }),
        layoutVariant: variant,
      },
    });
  };

  const handleGradientChange = (gradientStyle: HeroGradientStyle) => {
    const currentHero = currentBusiness.hero || {
      layoutVariant: currentBusiness.theme.heroVariant || 'split',
      gradientStyle: 'brand-glow',
      showBackgroundImageOverlay: true,
      backgroundImageOpacity: 0.12,
      backgroundImageBlur: 'sm',
    };
    onSelectBusiness({
      ...currentBusiness,
      hero: {
        ...currentHero,
        gradientStyle,
      },
    });
  };

  const handleBgColorChange = (backgroundColor: string) => {
    const currentHero = currentBusiness.hero || {
      layoutVariant: currentBusiness.theme.heroVariant || 'split',
      gradientStyle: 'brand-glow',
      showBackgroundImageOverlay: true,
      backgroundImageOpacity: 0.12,
      backgroundImageBlur: 'sm',
    };
    onSelectBusiness({
      ...currentBusiness,
      hero: {
        ...currentHero,
        backgroundColor,
      },
    });
  };

  const handleTextureChange = (texture: HeroTextureType) => {
    const currentHero = currentBusiness.hero || {
      layoutVariant: currentBusiness.theme.heroVariant || 'split',
      gradientStyle: 'brand-glow',
      showBackgroundImageOverlay: true,
      backgroundImageOpacity: 0.12,
      backgroundImageBlur: 'sm',
    };
    onSelectBusiness({
      ...currentBusiness,
      hero: {
        ...currentHero,
        texture,
      },
    });
  };

  const handleToggleAmbientOrbs = () => {
    const currentHero = currentBusiness.hero || {
      layoutVariant: currentBusiness.theme.heroVariant || 'split',
      gradientStyle: 'brand-glow',
      showBackgroundImageOverlay: true,
      backgroundImageOpacity: 0.12,
      backgroundImageBlur: 'sm',
    };
    const currentEnabled = currentHero.ambientOrbs?.enabled ?? true;
    onSelectBusiness({
      ...currentBusiness,
      hero: {
        ...currentHero,
        ambientOrbs: {
          ...(currentHero.ambientOrbs || {}),
          enabled: !currentEnabled,
        },
      },
    });
  };

  const handleToggleHeroBgImage = () => {
    const currentHero = currentBusiness.hero || {
      layoutVariant: currentBusiness.theme.heroVariant || 'split',
      gradientStyle: 'brand-glow',
      showBackgroundImageOverlay: true,
      backgroundImageOpacity: 0.12,
      backgroundImageBlur: 'sm',
    };
    onSelectBusiness({
      ...currentBusiness,
      hero: {
        ...currentHero,
        showBackgroundImageOverlay: !currentHero.showBackgroundImageOverlay,
      },
    });
  };

  const handleFontChange = (fontId: FontOptionId) => {
    const selected = getFontById(fontId);
    onSelectBusiness({
      ...currentBusiness,
      theme: {
        ...currentBusiness.theme,
        fontOptionId: fontId,
        fontFamily: selected.family,
      },
    });
  };

  return (
    <div className="fixed top-20 right-4 z-50 flex flex-col items-end">
      {/* Trigger Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/95 text-white text-xs font-semibold shadow-2xl backdrop-blur-md border border-slate-700 hover:bg-slate-900 transition-all hover:scale-105 active:scale-95"
        title="Template & Font Switcher"
      >
        <Settings2 className="w-3.5 h-3.5 text-amber-400" />
        <span className="hidden sm:inline">Template:</span>
        <span className="text-amber-300 font-bold">{currentBusiness.industry.split(' ')[0]}</span>
        <span className="text-slate-500 hidden sm:inline">|</span>
        <span className="text-emerald-300 font-medium hidden sm:inline">{currentFont.name.split(' ')[0]}</span>
        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>

      {/* Expanded Panel */}
      {isOpen && (
        <div className="mt-2 w-80 sm:w-96 bg-white/98 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-fade-in text-left">
          {/* Header */}
          <div className="p-3.5 bg-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm leading-tight">UMKM Template Engine</h4>
                <p className="text-[10px] text-slate-400">Freelance Developer Control</p>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="flex items-center gap-1 bg-slate-800 p-0.5 rounded-lg">
              <button
                type="button"
                onClick={() => setActiveTab('presets')}
                className={`px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                  activeTab === 'presets' ? 'bg-amber-400 text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                Preset
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('hero')}
                className={`px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                  activeTab === 'hero' ? 'bg-amber-400 text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                Hero
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('fonts')}
                className={`px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                  activeTab === 'fonts' ? 'bg-amber-400 text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                Font
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('guide')}
                className={`px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                  activeTab === 'guide' ? 'bg-amber-400 text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                Config
              </button>
            </div>
          </div>

          {/* TAB 1: PRESETS */}
          {activeTab === 'presets' && (
            <div className="p-3.5 space-y-2 max-h-[380px] overflow-y-auto">
              <p className="text-xs text-slate-500 mb-1">
                Pilih kategori UMKM klien untuk menguji transformasi data:
              </p>
              {templateList.map((item) => {
                const isActive = currentBusiness.id === item.template.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectBusiness(item.template)}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isActive
                        ? 'border-slate-900 bg-slate-50 shadow-xs ring-1 ring-slate-900'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: item.accentColor }}
                      >
                        <DynamicIcon name={item.icon} className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-xs text-slate-900 truncate">{item.name}</p>
                        <p className="text-[10px] text-slate-500 truncate">{item.category}</p>
                      </div>
                    </div>
                    {isActive ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                        <Check className="w-3 h-3" />
                        Aktif
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 font-medium shrink-0">
                        {item.heroVariant}
                      </span>
                    )}
                  </button>
                );
              })}

              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleCopyConfig}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Tersalin ke Clipboard!' : 'Salin JSON Klien Aktif'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: HERO OPTIONS & NATIVE-FEEL BACKGROUND */}
          {activeTab === 'hero' && (
            <div className="p-3.5 space-y-3.5 max-h-[420px] overflow-y-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Layout className="w-4 h-4 text-sky-600" />
                  <span>1. Layout Hero (3 Opsi UX)</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">heroVariant</span>
              </div>

              {/* Option 1: Split */}
              <button
                type="button"
                onClick={() => handleHeroChange('split')}
                className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                  (currentBusiness.hero?.layoutVariant || currentBusiness.theme.heroVariant) === 'split'
                    ? 'border-sky-600 bg-sky-50/50 ring-1 ring-sky-600'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-xs text-slate-900">1. Split High-Conversion</span>
                  {(currentBusiness.hero?.layoutVariant || currentBusiness.theme.heroVariant) === 'split' && (
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full">Dipilih</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Tata letak teks di kiri & foto di kanan. Cocok untuk bengkel motor, servis AC, dan jasa teknis.
                </p>
              </button>

              {/* Option 2: Centered */}
              <button
                type="button"
                onClick={() => handleHeroChange('centered')}
                className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                  (currentBusiness.hero?.layoutVariant || currentBusiness.theme.heroVariant) === 'centered'
                    ? 'border-sky-600 bg-sky-50/50 ring-1 ring-sky-600'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-xs text-slate-900">2. Centered Editorial</span>
                  {(currentBusiness.hero?.layoutVariant || currentBusiness.theme.heroVariant) === 'centered' && (
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full">Dipilih</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Headline di tengah dengan galeri showcase lebar di bawah. Sangat cocok untuk laundry, restoran, & cafe.
                </p>
              </button>

              {/* Option 3: Card Overlay */}
              <button
                type="button"
                onClick={() => handleHeroChange('card-overlay')}
                className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                  (currentBusiness.hero?.layoutVariant || currentBusiness.theme.heroVariant) === 'card-overlay'
                    ? 'border-sky-600 bg-sky-50/50 ring-1 ring-sky-600'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <span className="font-bold text-xs text-slate-900">3. Card Overlay (App-Feel)</span>
                  {(currentBusiness.hero?.layoutVariant || currentBusiness.theme.heroVariant) === 'card-overlay' && (
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full">Dipilih</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Desain mewah berlatar gelap dengan kartu interaktif dan tombol pesan cepat. Sangat cocok untuk barbershop & salon.
                </p>
              </button>

              {/* 2. Gradient Style Selector */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Palette className="w-4 h-4 text-amber-500" />
                    <span>2. Gradient Modern (Native-Feel)</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">gradientStyle</span>
                </div>
                
                <div className="grid grid-cols-2 gap-1.5">
                  {heroGradientOptions.map((opt) => {
                    const isGradSelected = (currentBusiness.hero?.gradientStyle || 'brand-glow') === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleGradientChange(opt.id)}
                        className={`p-2 rounded-lg border text-left transition-all text-[11px] ${
                          isGradSelected
                            ? 'border-amber-500 bg-amber-50/60 ring-1 ring-amber-500 font-bold text-amber-900'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${
                            opt.id === 'dark-slate' || opt.id === 'ocean-depth' ? 'bg-slate-900' : 'bg-amber-400'
                          }`} />
                          <span className="truncate">{opt.name}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Base Background Color Palette */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <Sliders className="w-4 h-4 text-emerald-600" />
                    <span>3. Warna Canvas Background</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">backgroundColor</span>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {heroBackgroundPresets.map((preset) => {
                    const isBgSelected = currentBusiness.hero?.backgroundColor === preset.color;
                    return (
                      <button
                        key={preset.name}
                        type="button"
                        onClick={() => handleBgColorChange(preset.color)}
                        className={`p-2 rounded-lg border flex items-center gap-1.5 text-[11px] transition-all ${
                          isBgSelected
                            ? 'border-emerald-600 bg-emerald-50 ring-1 ring-emerald-600 font-bold text-emerald-950'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <span 
                          className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs shrink-0"
                          style={{ backgroundColor: preset.color }}
                        />
                        <span className="truncate">{preset.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Ambient Glow & Micro-Texture Controls */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">4. Pencahayaan & Tekstur</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {/* Ambient Orbs Toggle */}
                  <button
                    type="button"
                    onClick={handleToggleAmbientOrbs}
                    className={`p-2 rounded-xl border text-left transition-all ${
                      (currentBusiness.hero?.ambientOrbs?.enabled ?? true)
                        ? 'border-sky-500 bg-sky-50/50 text-sky-900'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold">Ambient Glow Orbs</span>
                      <span className="text-[10px] font-bold">
                        {(currentBusiness.hero?.ambientOrbs?.enabled ?? true) ? 'ON' : 'OFF'}
                      </span>
                    </div>
                    <p className="text-[9px] text-slate-500">Pendaran cahaya kedalaman</p>
                  </button>

                  {/* Texture Switcher */}
                  <div className="p-2 rounded-xl border border-slate-200 bg-slate-50">
                    <span className="text-[11px] font-bold text-slate-900 block mb-1">Tekstur Tactile</span>
                    <div className="flex gap-1">
                      {(['dots', 'grid', 'none'] as HeroTextureType[]).map((tex) => (
                        <button
                          key={tex}
                          type="button"
                          onClick={() => handleTextureChange(tex)}
                          className={`px-1.5 py-0.5 rounded text-[10px] uppercase font-bold transition-all ${
                            (currentBusiness.hero?.texture || 'dots') === tex
                              ? 'bg-slate-900 text-white'
                              : 'bg-white text-slate-600 border border-slate-200'
                          }`}
                        >
                          {tex}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Background Image Disguised Toggle */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleToggleHeroBgImage}
                  className="w-full p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 flex items-center justify-between text-xs font-semibold text-slate-800 transition-colors"
                >
                  <div className="text-left">
                    <p className="font-bold text-[11px] text-slate-900">Background Foto Tersamarkan</p>
                    <p className="text-[10px] text-slate-500">Gradient + Ambient Glow + Overlay Foto Blur</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    (currentBusiness.hero?.showBackgroundImageOverlay ?? true)
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                      : 'bg-slate-200 text-slate-600'
                  }`}>
                    {(currentBusiness.hero?.showBackgroundImageOverlay ?? true) ? 'AKTIF' : 'NONAKTIF'}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: MODERN MOBILE FONTS */}
          {activeTab === 'fonts' && (
            <div className="p-3.5 space-y-2.5 max-h-[380px] overflow-y-auto">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <Type className="w-4 h-4 text-emerald-600" />
                  <span>Pilihan Font Mobile-First:</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">theme.fontOptionId</span>
              </div>

              <p className="text-[11px] text-slate-500 leading-tight">
                Pilih tipografi modern dengan rasio kontras tinggi dan kenyamanan baca maksimal di layar smartphone:
              </p>

              {fontOptions.map((font) => {
                const isSelected = (currentBusiness.theme.fontOptionId || 'plus-jakarta') === font.id;
                return (
                  <button
                    key={font.id}
                    type="button"
                    onClick={() => handleFontChange(font.id)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/60 ring-1 ring-emerald-600'
                        : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span 
                          className="font-bold text-sm text-slate-900"
                          style={{ fontFamily: font.family }}
                        >
                          {font.name}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                          {font.category}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                          Aktif
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug">
                      {font.description}
                    </p>
                    <div 
                      className="mt-1.5 text-xs text-slate-800 font-semibold p-1.5 bg-white rounded-lg border border-slate-200/80"
                      style={{ fontFamily: font.family }}
                    >
                      Aa Bb Gg 123 • Servis Cepat & Transparan
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* TAB 4: CONFIGURATION GUIDE */}
          {activeTab === 'guide' && (
            <div className="p-3.5 space-y-2.5 text-xs text-slate-600 max-h-[380px] overflow-y-auto leading-relaxed">
              <div className="p-2.5 rounded-xl bg-slate-900 text-white font-semibold text-[11px] flex items-center gap-2">
                <FileCode className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Modul Konfigurasi Baru (Zero UI Edit):</span>
              </div>

              <div className="space-y-2 text-[11px]">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">📍 src/config/location.ts</span>
                  <p className="text-slate-600 mt-0.5">
                    Mengatur judul section, teks tombol petunjuk arah Maps, pesan WhatsApp tanya patokan, dan daftar fasilitas lokasi.
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">⚡ src/config/cta.ts</span>
                  <p className="text-slate-600 mt-0.5">
                    Mengatur banner ajakan penutup, pesan WhatsApp booking instan, headline garansi, dan jaminan respons.
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">🦶 src/config/footer.ts</span>
                  <p className="text-slate-600 mt-0.5">
                    Mengatur deskripsi ringkas brand, daftar metode pembayaran (QRIS/Bank), hak cipta, dan navigasi footer.
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900">🔤 src/config/fonts.ts</span>
                  <p className="text-slate-600 mt-0.5">
                    Pilihan font Google Fonts modern: Plus Jakarta Sans, Outfit, DM Sans, Poppins, Inter. Cukup ubah <code>fontOptionId</code> di <code>theme.ts</code>.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
};

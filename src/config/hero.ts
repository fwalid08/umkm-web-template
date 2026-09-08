import { HeroConfig, HeroGradientStyle, HeroLayoutVariant, HeroBackgroundMode, HeroTextureType, HeroBackgroundType } from '../types/business';

export interface HeroLayoutOption { id: HeroLayoutVariant; name: string; subtitle: string; description: string; bestFor: string; }
export const heroLayoutOptions: HeroLayoutOption[] = [
  { id: 'split', name: '1. Split', subtitle: 'Konten kiri, visual kanan', description: 'Layout dua kolom untuk headline, CTA, trust points, dan foto bisnis.', bestFor: 'Bengkel, jasa teknis, kontraktor, rental' },
  { id: 'centered', name: '2. Centered', subtitle: 'Headline fokus di tengah', description: 'Komposisi simetris dengan CTA dan visual sebagai fokus utama.', bestFor: 'Cafe, restoran, bakery, retail' },
  { id: 'card-overlay', name: '3. Card Overlay', subtitle: 'Konten dalam floating card', description: 'Foto atmosferik di belakang dengan kartu konten premium di atasnya.', bestFor: 'Barbershop, salon, spa, studio' },
];

export interface HeroBackgroundOption { id: HeroBackgroundType; name: string; description: string; }
export const heroBackgroundOptions: HeroBackgroundOption[] = [
  { id: 'color', name: 'Solid Color', description: 'Background hanya menggunakan warna.' },
  { id: 'image', name: 'Full Image', description: 'Background menggunakan foto bisnis secara penuh.' },
  { id: 'image-overlay', name: 'Image + Transparent Overlay', description: 'Foto samar di belakang dengan lapisan warna transparan yang dapat dikustomisasi.' },
];

export interface HeroGradientOption { id: HeroGradientStyle; name: string; description: string; previewColors: string[]; suggestedMode: HeroBackgroundMode; }
export const heroGradientOptions: HeroGradientOption[] = [
  { id: 'brand-glow', name: 'Brand Glow', description: 'Glow mengikuti warna brand.', previewColors: ['#EF4444', '#38BDF8'], suggestedMode: 'auto' },
  { id: 'aurora-mesh', name: 'Aurora Mesh', description: 'Ambient multi-point modern.', previewColors: ['#6366F1', '#06B6D4', '#10B981'], suggestedMode: 'auto' },
  { id: 'sunset-radiant', name: 'Sunset Radiant', description: 'Hangat amber dan copper.', previewColors: ['#F59E0B', '#EF4444'], suggestedMode: 'auto' },
  { id: 'ocean-depth', name: 'Ocean Depth', description: 'Navy dan cyan premium.', previewColors: ['#0F172A', '#0284C7'], suggestedMode: 'dark' },
  { id: 'emerald-nature', name: 'Emerald Nature', description: 'Fresh green natural.', previewColors: ['#064E3B', '#10B981'], suggestedMode: 'auto' },
  { id: 'dark-slate', name: 'Dark Slate', description: 'Obsidian/slate premium.', previewColors: ['#0B0F19', '#334155'], suggestedMode: 'dark' },
  { id: 'clean-subtle', name: 'Clean Subtle', description: 'Off-white minimal.', previewColors: ['#FFFFFF', '#E2E8F0'], suggestedMode: 'light' },
  { id: 'solid', name: 'Solid + Orbs', description: 'Solid color dengan ambient orbs.', previewColors: ['#1E293B', '#64748B'], suggestedMode: 'auto' },
  { id: 'custom', name: 'Custom', description: 'Warna dan arah bebas.', previewColors: ['#4F46E5', '#9333EA', '#EC4899'], suggestedMode: 'auto' },
];

export interface HeroBackgroundPreset { name: string; color: string; isDark: boolean; }
export const heroBackgroundPresets: HeroBackgroundPreset[] = [
  { name: 'Obsidian Dark', color: '#0B0F19', isDark: true },
  { name: 'Midnight Slate', color: '#0F172A', isDark: true },
  { name: 'Deep Navy', color: '#0A1128', isDark: true },
  { name: 'Zinc Studio', color: '#18181B', isDark: true },
  { name: 'Apple Slate', color: '#F8FAFC', isDark: false },
  { name: 'Crisp White', color: '#FFFFFF', isDark: false },
  { name: 'Warm Stone', color: '#F5F5F4', isDark: false },
];

export const heroTextureOptions: { id: HeroTextureType; name: string }[] = [
  { id: 'none', name: 'None' }, { id: 'dots', name: 'Dots' }, { id: 'grid', name: 'Grid' }, { id: 'mesh', name: 'Mesh' },
];

const shared = { backgroundImageOpacity: 0.34, overlayColor: '#0B0F19', overlayOpacity: 0.68, overlayGradient: true, contentMaxWidth: 'lg' as const, minHeight: 'large' as const };

export const heroVariantPresets: Record<HeroLayoutVariant, HeroConfig> = {
  centered: { ...shared, layoutVariant: 'centered', backgroundType: 'color', backgroundColor: '#FFFFFF', backgroundMode: 'light', gradientStyle: 'clean-subtle', overlayOpacity: 0, overlayGradient: false, contentAlign: 'center', textTheme: 'dark', showTrustPoints: false, showRatingPill: true, showFloatingStats: false },
  split: { ...shared, layoutVariant: 'split', backgroundType: 'image-overlay', backgroundColor: '#0B0F19', backgroundMode: 'dark', gradientStyle: 'dark-slate', overlayOpacity: 0.72, contentAlign: 'left', textTheme: 'light', showTrustPoints: true, showRatingPill: true, showFloatingStats: true },
  'card-overlay': { ...shared, layoutVariant: 'card-overlay', backgroundType: 'image-overlay', backgroundColor: '#0B0F19', backgroundMode: 'dark', gradientStyle: 'dark-slate', backgroundImageOpacity: 0.72, overlayOpacity: 0.22, contentAlign: 'left', textTheme: 'light', showTrustPoints: true, showRatingPill: true, showFloatingStats: false },
};

export const heroConfig: HeroConfig = {
  ...heroVariantPresets.split,
  eyebrowText: 'BENGKEL JAYA MOTOR',
  badgeText: 'Spesialis Servis Injeksi & Matic Bergaransi',
  headline: 'Solusi Terpercaya Perawatan Motor Anda di Kota Banjar',
  description: 'Layanan servis motor profesional, transparan, dan bergaransi untuk kebutuhan harian Anda.',
  primaryCtaText: 'Booking Servis via WhatsApp',
  secondaryCtaText: 'Lihat Daftar Layanan',
  ctaNote: 'Respon admin cepat • Tanpa biaya booking',
  trustBadgeText: '⭐ 4.9/5 dari 1.200+ pelanggan',
  trustPoints: ['Teknisi berpengalaman & terlatih', 'Suku cadang asli & bergaransi', 'Estimasi biaya transparan', 'Prioritas antrean booking'],
  ratingValue: '4.9/5',
  ratingLabel: 'Google Reviews',
  floatingStats: [{ value: '10+', label: 'Tahun pengalaman' }, { value: '1.200+', label: 'Motor / bulan' }],
  backgroundImageUrl: '',
  backgroundImageAlt: 'Bengkel Jaya Motor',
  backgroundImageBlur: 'sm',
  backgroundImagePosition: 'center',
};

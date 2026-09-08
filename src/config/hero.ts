import { HeroConfig, HeroGradientStyle, HeroLayoutVariant, HeroBackgroundMode, HeroTextureType, HeroBackgroundType } from '../types/business';

export interface HeroLayoutOption { id: HeroLayoutVariant; name: string; subtitle: string; description: string; bestFor: string; }
export const heroLayoutOptions: HeroLayoutOption[] = [
  { id: 'split', name: '1. Split', subtitle: 'Konten kiri, visual kanan', description: 'Layout dua kolom untuk headline, CTA, trust points, dan foto bisnis.', bestFor: 'Bengkel, jasa teknis, kontraktor, rental' },
  { id: 'centered', name: '2. Centered', subtitle: 'Headline fokus di tengah', description: 'Komposisi simetris dengan CTA dan visual sebagai fokus utama.', bestFor: 'Cafe, restoran, bakery, retail' },
  { id: 'background-focus', name: '3. Background Focus', subtitle: 'Foto memenuhi hero', description: 'Background foto menjadi elemen utama dengan overlay warna transparan agar teks tetap terbaca.', bestFor: 'Kuliner, travel, hotel, fotografi' },
  { id: 'card-overlay', name: '4. Card Overlay', subtitle: 'Konten dalam floating card', description: 'Foto atmosferik di belakang dengan kartu konten premium di atasnya.', bestFor: 'Barbershop, salon, spa, studio' },
  { id: 'minimal', name: '5. Minimal', subtitle: 'Bersih dan cepat', description: 'Hero ringan dengan fokus pada headline, deskripsi, dan satu-dua CTA.', bestFor: 'Freelancer, jasa profesional, UMKM sederhana' },
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

/** Default: dark + background image + transparent color overlay. */
export const heroConfig: HeroConfig = {
  layoutVariant: 'split',
  backgroundType: 'image-overlay',
  backgroundColor: '#0B0F19',
  backgroundMode: 'dark',
  gradientStyle: 'dark-slate',
  customGradient: { from: '#0B0F19', via: '#0F172A', to: '#0B0F19', direction: 'to-b' },
  ambientOrbs: { enabled: true, opacity: 0.16, blur: 'xl' },
  texture: 'none',
  textureOpacity: 0.03,
  showBackgroundImageOverlay: true,
  backgroundImageUrl: '',
  backgroundImageOpacity: 0.34,
  backgroundImageBlur: 'sm',
  backgroundImagePosition: 'center',
  overlayColor: '#0B0F19',
  overlayOpacity: 0.68,
  overlayGradient: true,
  minHeight: 'large',
  contentAlign: 'left',
  badgeText: 'Spesialis Servis Injeksi & Matic Bergaransi',
  trustBadgeText: '⭐ 4.9/5 dari 1,200+ Pelanggan Puas',
  trustPoints: ['Teknisi Berpengalaman & Terlatih', '100% Suku Cadang Asli & Bergaransi', 'Estimasi Biaya Transparan Tanpa Siluman', 'Prioritas Antrean Booking WhatsApp'],
  showFloatingStats: true,
  showRatingPill: true,
};

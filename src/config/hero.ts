import { 
  HeroConfig, 
  HeroLayoutVariant, 
  HeroGradientStyle,
  HeroBackgroundMode,
  HeroTextureType 
} from '../types/business';

/**
 * 3 Alternatif Pilihan Layout Hero dengan UI/UX Native-Feel:
 * 1. 'split'         : Split High-Conversion - Headline di kiri, media interaktif & trust cards di kanan.
 * 2. 'centered'      : Centered Editorial Showcase - Headline simetris di tengah, panorama showcase kartu lebar.
 * 3. 'card-overlay'  : App-Style Studio Overlay - Desain premium dark/glassmorphic dengan quick-booking widget interaktif.
 */
export interface HeroLayoutOption {
  id: HeroLayoutVariant;
  name: string;
  subtitle: string;
  description: string;
  bestFor: string;
}

export const heroLayoutOptions: HeroLayoutOption[] = [
  {
    id: 'split',
    name: '1. Split High-Conversion',
    subtitle: 'Kiri: Headline & CTA, Kanan: Showcase Media & Badges',
    description: 'Tata letak responsif dua kolom seimbang dengan fokus konversi tinggi, trust checkmarks, dan badge floating rating.',
    bestFor: 'Bengkel Otomotif, Servis AC, Kontraktor & Jasa Teknis',
  },
  {
    id: 'centered',
    name: '2. Centered Editorial Showcase',
    subtitle: 'Tengah: Headline & Social Proof, Bawah: Media Lebar',
    description: 'Tata letak simetris elegan dengan social proof pill di atas, dual action buttons, dan showcase media panorama berbingkai rapi.',
    bestFor: 'Laundry Kiloan, Restoran & Cafe, Bakery, Retail',
  },
  {
    id: 'card-overlay',
    name: '3. App-Style Studio Overlay',
    subtitle: 'Latar Atmosferik & Quick Booking Sheet Interaktif',
    description: 'Nuansa aplikasi modern dengan latar visual tersamarkan, kartu headline berkelas, dan sheet booking WhatsApp langsung satu klik.',
    bestFor: 'Barbershop, Salon & Spa, Studio Foto, Klinik',
  },
];

/**
 * Pilihan Gradient Style Modern & Native-Feel
 */
export interface HeroGradientOption {
  id: HeroGradientStyle;
  name: string;
  description: string;
  previewColors: string[];
  suggestedMode: HeroBackgroundMode;
}

export const heroGradientOptions: HeroGradientOption[] = [
  {
    id: 'brand-glow',
    name: 'Brand Glow (Default)',
    description: 'Pancaran ambient radial elegan mengikuti warna primer dan aksen brand bisnis.',
    previewColors: ['#EF4444', '#38BDF8', '#FFFFFF'],
    suggestedMode: 'auto',
  },
  {
    id: 'aurora-mesh',
    name: 'Aurora Mesh Glow',
    description: 'Gradasi dinamis modern multi-titik ala aplikasi native Apple / macOS.',
    previewColors: ['#6366F1', '#06B6D4', '#10B981'],
    suggestedMode: 'auto',
  },
  {
    id: 'sunset-radiant',
    name: 'Sunset Radiant',
    description: 'Nuansa hangat amber, emas, dan copper untuk atmosfer ramah dan bersahabat.',
    previewColors: ['#F59E0B', '#EF4444', '#78350F'],
    suggestedMode: 'auto',
  },
  {
    id: 'ocean-depth',
    name: 'Ocean Depth',
    description: 'Gradasi sejuk navy, indigo, dan cyan dengan kontras tinggi nan elegan.',
    previewColors: ['#0F172A', '#0284C7', '#38BDF8'],
    suggestedMode: 'dark',
  },
  {
    id: 'emerald-nature',
    name: 'Emerald Nature',
    description: 'Gradasi segar mint, sage, dan forest green yang menyejukkan mata.',
    previewColors: ['#064E3B', '#10B981', '#6EE7B7'],
    suggestedMode: 'auto',
  },
  {
    id: 'dark-slate',
    name: 'Native Dark Slate',
    description: 'Kanvas gelap premium (#0B0F19) dengan specular top line dan kartu glassmorphic.',
    previewColors: ['#0B0F19', '#1E293B', '#334155'],
    suggestedMode: 'dark',
  },
  {
    id: 'clean-subtle',
    name: 'Clean Apple Subtle',
    description: 'Kanvas bersih off-white (#F8FAFC) dengan sapuan gradasi pastel sangat halus.',
    previewColors: ['#FFFFFF', '#F8FAFC', '#E2E8F0'],
    suggestedMode: 'light',
  },
  {
    id: 'solid',
    name: 'Solid + Ambient Orbs',
    description: 'Warna latar solid murni yang dihiasi dua orbs cahaya ambient bergerak halus.',
    previewColors: ['#1E293B', '#64748B'],
    suggestedMode: 'auto',
  },
  {
    id: 'custom',
    name: 'Custom Gradient (Bebas)',
    description: 'Tentukan sendiri warna awal (from), tengah (via), akhir (to), dan arah gradasi.',
    previewColors: ['#4F46E5', '#9333EA', '#EC4899'],
    suggestedMode: 'auto',
  },
];

/**
 * Preset Warna Background Populer (Native Feel)
 */
export interface HeroBackgroundPreset {
  name: string;
  color: string;
  isDark: boolean;
}

export const heroBackgroundPresets: HeroBackgroundPreset[] = [
  { name: 'Apple Slate', color: '#F8FAFC', isDark: false },
  { name: 'Crisp White', color: '#FFFFFF', isDark: false },
  { name: 'Warm Stone', color: '#F5F5F4', isDark: false },
  { name: 'Obsidian Dark', color: '#0B0F19', isDark: true },
  { name: 'Midnight Slate', color: '#0F172A', isDark: true },
  { name: 'Deep Navy', color: '#0A1128', isDark: true },
  { name: 'Zinc Studio', color: '#18181B', isDark: true },
];

/**
 * Konfigurasi Hero Default
 * Mengatur pilihan layout, canvas background color, gradient modern, dan ambient glow.
 */
export const heroConfig: HeroConfig = {
  // Pilihan layout: 'split' | 'centered' | 'card-overlay'
  layoutVariant: 'split',

  // Warna latar canvas (bisa disetel heksadesimal apa saja, e.g. '#0F172A', '#F8FAFC')
  backgroundColor: '#F8FAFC',
  backgroundMode: 'auto', // 'auto' | 'light' | 'dark'

  // Gradient modern: 'brand-glow' | 'aurora-mesh' | 'sunset-radiant' | 'ocean-depth' | 'emerald-nature' | 'dark-slate' | 'clean-subtle' | 'solid' | 'custom'
  gradientStyle: 'brand-glow',

  // Custom gradient (digunakan bila gradientStyle === 'custom')
  customGradient: {
    from: '#F8FAFC',
    via: '#F1F5F9',
    to: '#E2E8F0',
    direction: 'to-b',
  },

  // Ambient Radial Glow Orbs (Native lighting)
  ambientOrbs: {
    enabled: true,
    opacity: 0.18,
    blur: 'xl',
  },

  // Tekstur halus kanvas: 'dots' | 'grid' | 'mesh' | 'none'
  texture: 'dots',
  textureOpacity: 0.035,

  // Pilihan background gambar yang tersamarkan (Disguised / Subtle background image)
  showBackgroundImageOverlay: true,
  backgroundImageUrl: '', // Kosongkan untuk memakai heroImageUrl otomatis
  backgroundImageOpacity: 0.12, // 0.05 - 0.35 agar tersamarkan lembut & teks tetap terbaca 100%
  backgroundImageBlur: 'sm', // 'none' | 'sm' | 'md' | 'lg'

  // Kustomisasi elemen pendukung
  badgeText: 'Spesialis Servis Injeksi & Matic Bergaransi',
  trustBadgeText: '⭐ 4.9/5 dari 1,200+ Pelanggan Puas',
  trustPoints: [
    'Teknisi Berpengalaman & Terlatih',
    '100% Suku Cadang Asli & Bergaransi',
    'Estimasi Biaya Transparan Tanpa Siluman',
    'Prioritas Antrean Booking WhatsApp',
  ],
  showFloatingStats: true,
  showRatingPill: true,
};

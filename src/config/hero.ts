import { HeroConfig, HeroGradientStyle, HeroLayoutVariant, HeroBackgroundMode, HeroTextureType, HeroBackgroundType } from '../types/business';

export interface HeroLayoutOption { id: HeroLayoutVariant; name: string; subtitle: string; description: string; bestFor: string; }
export const heroLayoutOptions: HeroLayoutOption[] = [
  { id: 'split', name: '1. Split', subtitle: 'Konten kiri, visual kanan', description: 'Komposisi dua kolom yang seimbang dengan CTA dan visual bisnis.', bestFor: 'Bengkel, jasa teknis, rental' },
  { id: 'centered', name: '2. Centered', subtitle: 'Fokus headline di tengah', description: 'Hero simetris dengan hierarchy tipografi yang kuat.', bestFor: 'Cafe, restoran, bakery, retail' },
  { id: 'background-focus', name: '3. Background Focus', subtitle: 'Foto sebagai atmosfer', description: 'Foto penuh dengan overlay kontras terkontrol.', bestFor: 'Travel, kuliner, hotel, fotografi' },
  { id: 'card-overlay', name: '4. Card Overlay', subtitle: 'Konten dalam glass card', description: 'Konten premium di atas visual dengan blur ringan.', bestFor: 'Salon, spa, studio, barbershop' },
  { id: 'minimal', name: '5. Minimal', subtitle: 'Ringkas dan cepat', description: 'Fokus pada headline, deskripsi, dan CTA.', bestFor: 'Jasa profesional, freelancer' },
  { id: 'editorial', name: '6. Editorial', subtitle: 'Tipografi sebagai fokus', description: 'Headline besar dengan layout editorial modern dan whitespace.', bestFor: 'Brand, fashion, creative, agency' },
  { id: 'image-split', name: '7. Image Split', subtitle: 'Visual setengah layar', description: 'Foto dominan satu sisi dengan konten clean di sisi lainnya.', bestFor: 'Restaurant, product, beauty, property' },
  { id: 'floating-card', name: '8. Floating Card', subtitle: 'Visual + card mengambang', description: 'Visual penuh dengan kartu informasi kecil yang menonjol.', bestFor: 'Service, rental, hospitality' },
  { id: 'spotlight', name: '9. Spotlight', subtitle: 'Brand spotlight', description: 'Konten terpusat dengan radial glow halus untuk aksen brand.', bestFor: 'Tech, startup, modern UMKM' },
  { id: 'bottom-bar', name: '10. Bottom Bar', subtitle: 'CTA sticky di dalam hero', description: 'Hero visual bersih dengan CTA dan trust information pada bar bawah.', bestFor: 'Booking, rental, event, service' },
];

export interface HeroBackgroundOption { id: HeroBackgroundType; name: string; description: string; }
export const heroBackgroundOptions: HeroBackgroundOption[] = [
  { id: 'color', name: 'Solid Color', description: 'Background hanya menggunakan warna.' },
  { id: 'image', name: 'Full Image', description: 'Foto menjadi visual utama.' },
  { id: 'image-overlay', name: 'Image + Overlay', description: 'Foto dipadukan overlay untuk menjaga kontras teks.' },
];

export interface HeroGradientOption { id: HeroGradientStyle; name: string; description: string; previewColors: string[]; suggestedMode: HeroBackgroundMode; }
export const heroGradientOptions: HeroGradientOption[] = [
  { id: 'brand-glow', name: 'Brand Glow', description: 'Glow mengikuti warna brand.', previewColors: ['#EF4444', '#38BDF8'], suggestedMode: 'auto' },
  { id: 'aurora-mesh', name: 'Aurora Mesh', description: 'Ambient multi-point modern.', previewColors: ['#6366F1', '#06B6D4', '#10B981'], suggestedMode: 'auto' },
  { id: 'sunset-radiant', name: 'Sunset Radiant', description: 'Hangat amber dan coral.', previewColors: ['#F59E0B', '#EF4444'], suggestedMode: 'auto' },
  { id: 'ocean-depth', name: 'Ocean Depth', description: 'Navy dan cyan premium.', previewColors: ['#0F172A', '#0284C7'], suggestedMode: 'dark' },
  { id: 'emerald-nature', name: 'Emerald Nature', description: 'Fresh green natural.', previewColors: ['#064E3B', '#10B981'], suggestedMode: 'auto' },
  { id: 'dark-slate', name: 'Dark Slate', description: 'Obsidian/slate premium.', previewColors: ['#0B0F19', '#334155'], suggestedMode: 'dark' },
  { id: 'clean-subtle', name: 'Clean Subtle', description: 'Off-white minimal.', previewColors: ['#FFFFFF', '#E2E8F0'], suggestedMode: 'light' },
  { id: 'solid', name: 'Solid + Orbs', description: 'Solid dengan ambient orbs.', previewColors: ['#1E293B', '#64748B'], suggestedMode: 'auto' },
  { id: 'custom', name: 'Custom', description: 'Gradient warna bebas.', previewColors: ['#4F46E5', '#9333EA', '#EC4899'], suggestedMode: 'auto' },
];

export interface HeroBackgroundPreset { name: string; color: string; isDark: boolean; }
export const heroBackgroundPresets: HeroBackgroundPreset[] = [
  { name: 'Obsidian Dark', color: '#0B0F19', isDark: true }, { name: 'Midnight Slate', color: '#0F172A', isDark: true }, { name: 'Deep Navy', color: '#0A1128', isDark: true }, { name: 'Zinc Studio', color: '#18181B', isDark: true },
  { name: 'Apple Slate', color: '#F8FAFC', isDark: false }, { name: 'Crisp White', color: '#FFFFFF', isDark: false }, { name: 'Warm Stone', color: '#F5F5F4', isDark: false },
];

export const heroTextureOptions: { id: HeroTextureType; name: string }[] = [
  { id: 'none', name: 'None' }, { id: 'dots', name: 'Dots' }, { id: 'grid', name: 'Grid' }, { id: 'mesh', name: 'Mesh' },
];

export const heroVariantPresets: Record<HeroLayoutVariant, HeroConfig> = {
  split: { layoutVariant:'split', backgroundType:'image-overlay', backgroundColor:'#0B0F19', backgroundMode:'dark', gradientStyle:'dark-slate', backgroundImageOpacity:.28, overlayColor:'#0B0F19', overlayOpacity:.76, overlayGradient:true, contentAlign:'left', contentMaxWidth:'lg', textTheme:'light', showTrustPoints:true, showRatingPill:true, showFloatingStats:true },
  centered: { layoutVariant:'centered', backgroundType:'color', backgroundColor:'#FFFFFF', backgroundMode:'light', gradientStyle:'clean-subtle', overlayOpacity:0, overlayGradient:false, contentAlign:'center', contentMaxWidth:'lg', textTheme:'dark', showTrustPoints:false, showRatingPill:true },
  'background-focus': { layoutVariant:'background-focus', backgroundType:'image-overlay', backgroundColor:'#0B0F19', backgroundMode:'dark', gradientStyle:'dark-slate', backgroundImageOpacity:.48, overlayColor:'#0B0F19', overlayOpacity:.62, overlayGradient:true, contentAlign:'left', contentMaxWidth:'lg', textTheme:'light', showTrustPoints:true },
  'card-overlay': { layoutVariant:'card-overlay', backgroundType:'image', backgroundColor:'#0B0F19', backgroundMode:'dark', gradientStyle:'dark-slate', backgroundImageOpacity:.72, overlayOpacity:.1, overlayGradient:false, contentAlign:'left', contentMaxWidth:'lg', textTheme:'light', showTrustPoints:true },
  minimal: { layoutVariant:'minimal', backgroundType:'color', backgroundColor:'#F8FAFC', backgroundMode:'light', gradientStyle:'clean-subtle', overlayOpacity:0, overlayGradient:false, contentAlign:'left', contentMaxWidth:'md', textTheme:'dark', showTrustPoints:false },
  editorial: { layoutVariant:'editorial', backgroundType:'color', backgroundColor:'#FAFAF9', backgroundMode:'light', gradientStyle:'clean-subtle', overlayOpacity:0, overlayGradient:false, contentAlign:'left', contentMaxWidth:'xl', textTheme:'dark', showTrustPoints:false },
  'image-split': { layoutVariant:'image-split', backgroundType:'color', backgroundColor:'#FFFFFF', backgroundMode:'light', gradientStyle:'clean-subtle', overlayOpacity:0, overlayGradient:false, contentAlign:'left', contentMaxWidth:'md', textTheme:'dark', showTrustPoints:false },
  'floating-card': { layoutVariant:'floating-card', backgroundType:'image-overlay', backgroundColor:'#0F172A', backgroundMode:'dark', gradientStyle:'dark-slate', backgroundImageOpacity:.38, overlayColor:'#0F172A', overlayOpacity:.64, overlayGradient:true, contentAlign:'left', contentMaxWidth:'lg', textTheme:'light', showTrustPoints:true, showFloatingStats:true },
  spotlight: { layoutVariant:'spotlight', backgroundType:'color', backgroundColor:'#0B0F19', backgroundMode:'dark', gradientStyle:'brand-glow', overlayOpacity:0, overlayGradient:false, contentAlign:'center', contentMaxWidth:'md', textTheme:'light', showTrustPoints:false, showRatingPill:true },
  'bottom-bar': { layoutVariant:'bottom-bar', backgroundType:'image-overlay', backgroundColor:'#0B0F19', backgroundMode:'dark', gradientStyle:'dark-slate', backgroundImageOpacity:.42, overlayColor:'#0B0F19', overlayOpacity:.64, overlayGradient:true, contentAlign:'left', contentMaxWidth:'lg', textTheme:'light', showTrustPoints:false, showRatingPill:true },
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
  trustPoints: ['Teknisi berpengalaman & terlatih','Suku cadang asli & bergaransi','Estimasi biaya transparan','Prioritas antrean booking'],
  ratingValue: '4.9/5', ratingLabel: 'Google Reviews',
  floatingStats: [{value:'10+',label:'Tahun pengalaman'},{value:'1.200+',label:'Motor / bulan'}],
  backgroundImageUrl: '', backgroundImageAlt: 'Bengkel Jaya Motor', backgroundImageBlur:'sm', backgroundImagePosition:'center',
};

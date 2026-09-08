import { HeroConfig, HeroGradientStyle, HeroLayoutVariant, HeroBackgroundMode, HeroTextureType, HeroBackgroundType } from '../types/business';

export interface HeroLayoutOption { id: HeroLayoutVariant; name: string; subtitle: string; description: string; bestFor: string; }
export const heroLayoutOptions: HeroLayoutOption[] = [
  { id:'centered', name:'1. Centered', subtitle:'Konten fokus di tengah', description:'Hero satu kolom yang bersih, kuat untuk headline dan CTA.', bestFor:'Cafe, laundry, retail, jasa' },
  { id:'split', name:'2. Split', subtitle:'Konten kiri + visual kanan', description:'Komposisi dua kolom yang seimbang antara informasi dan foto bisnis.', bestFor:'Bengkel, service, rental, profesional' },
  { id:'card-overlay', name:'3. Card Overlay', subtitle:'Card di atas foto', description:'Foto menjadi background utama dengan card informasi yang premium.', bestFor:'Barbershop, kuliner, hospitality, brand' },
];
export interface HeroBackgroundOption { id: HeroBackgroundType; name: string; description: string; }
export const heroBackgroundOptions: HeroBackgroundOption[] = [
  { id:'color', name:'Solid Color', description:'Background menggunakan warna theme.' },
  { id:'image', name:'Full Image', description:'Foto menjadi visual utama.' },
  { id:'image-overlay', name:'Image + Overlay', description:'Foto dipadukan overlay agar teks tetap terbaca.' },
];
export interface HeroGradientOption { id: HeroGradientStyle; name: string; description: string; previewColors: string[]; suggestedMode: HeroBackgroundMode; }
export const heroGradientOptions: HeroGradientOption[] = [
  { id:'brand-glow', name:'Brand Glow', description:'Glow mengikuti warna brand.', previewColors:['#EF4444','#38BDF8'], suggestedMode:'auto' },
  { id:'aurora-mesh', name:'Aurora Mesh', description:'Ambient multi-point modern.', previewColors:['#6366F1','#06B6D4','#10B981'], suggestedMode:'auto' },
  { id:'sunset-radiant', name:'Sunset Radiant', description:'Hangat amber dan coral.', previewColors:['#F59E0B','#EF4444'], suggestedMode:'auto' },
  { id:'ocean-depth', name:'Ocean Depth', description:'Navy dan cyan premium.', previewColors:['#0F172A','#0284C7'], suggestedMode:'dark' },
  { id:'emerald-nature', name:'Emerald Nature', description:'Fresh green natural.', previewColors:['#064E3B','#10B981'], suggestedMode:'auto' },
  { id:'dark-slate', name:'Dark Slate', description:'Obsidian/slate premium.', previewColors:['#0B0F19','#334155'], suggestedMode:'dark' },
  { id:'clean-subtle', name:'Clean Subtle', description:'Off-white minimal.', previewColors:['#FFFFFF','#E2E8F0'], suggestedMode:'light' },
  { id:'solid', name:'Solid + Orbs', description:'Solid dengan ambient orbs.', previewColors:['#1E293B','#64748B'], suggestedMode:'auto' },
  { id:'custom', name:'Custom', description:'Gradient warna bebas.', previewColors:['#4F46E5','#9333EA','#EC4899'], suggestedMode:'auto' },
];
export interface HeroBackgroundPreset { name: string; color: string; isDark: boolean; }
export const heroBackgroundPresets: HeroBackgroundPreset[] = [
  { name:'Obsidian Dark', color:'#0B0F19', isDark:true }, { name:'Midnight Slate', color:'#0F172A', isDark:true }, { name:'Deep Navy', color:'#0A1128', isDark:true }, { name:'Zinc Studio', color:'#18181B', isDark:true },
  { name:'Apple Slate', color:'#F8FAFC', isDark:false }, { name:'Crisp White', color:'#FFFFFF', isDark:false }, { name:'Warm Stone', color:'#F5F5F4', isDark:false },
];
export const heroTextureOptions: { id: HeroTextureType; name: string }[] = [
  { id:'none', name:'None' }, { id:'dots', name:'Dots' }, { id:'grid', name:'Grid' }, { id:'mesh', name:'Mesh' },
];
const shared = { backgroundImageOpacity:.34, overlayColor:'#0B0F19', overlayOpacity:.68, overlayGradient:true, contentMaxWidth:'lg' as const, minHeight:'large' as const };
export const heroVariantPresets: Record<HeroLayoutVariant, HeroConfig> = {
  centered:{...shared,layoutVariant:'centered',backgroundType:'color',backgroundColor:'#FFFFFF',backgroundMode:'light',gradientStyle:'clean-subtle',overlayOpacity:0,overlayGradient:false,contentAlign:'center',textTheme:'dark',showTrustPoints:false,showRatingPill:true,showFloatingStats:false},
  split:{...shared,layoutVariant:'split',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',overlayOpacity:.72,contentAlign:'left',textTheme:'light',showTrustPoints:true,showRatingPill:true,showFloatingStats:true},
  'card-overlay':{...shared,layoutVariant:'card-overlay',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',backgroundImageOpacity:.72,overlayOpacity:.22,contentAlign:'left',textTheme:'light',showTrustPoints:true,showRatingPill:true,showFloatingStats:false},
};
export const heroConfig: HeroConfig = {
  ...heroVariantPresets.split,
  eyebrowText:'BENGKEL JAYA MOTOR', badgeText:'Spesialis Servis Injeksi & Matic Bergaransi', headline:'Solusi Terpercaya Perawatan Motor Anda di Kota Banjar', description:'Layanan servis motor profesional, transparan, dan bergaransi untuk kebutuhan harian Anda.', primaryCtaText:'Booking Servis via WhatsApp', secondaryCtaText:'Lihat Daftar Layanan', ctaNote:'Respon admin cepat • Tanpa biaya booking', trustBadgeText:'⭐ 4.9/5 dari 1.200+ pelanggan', trustPoints:['Teknisi berpengalaman & terlatih','Suku cadang asli & bergaransi','Estimasi biaya transparan','Prioritas antrean booking'], ratingValue:'4.9/5', ratingLabel:'Google Reviews', floatingStats:[{value:'10+',label:'Tahun pengalaman'},{value:'1.200+',label:'Motor / bulan'}], backgroundImageUrl:'', backgroundImageAlt:'Bengkel Jaya Motor', backgroundImageBlur:'sm', backgroundImagePosition:'center',
};

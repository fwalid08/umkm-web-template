import { HeroConfig, HeroGradientStyle, HeroLayoutVariant, HeroBackgroundMode, HeroTextureType, HeroBackgroundType } from '../types/business';
export interface HeroLayoutOption { id: HeroLayoutVariant; name: string; subtitle: string; description: string; bestFor: string; }
export const heroLayoutOptions: HeroLayoutOption[] = [
  { id:'centered', name:'1. Centered 1 Kolom', subtitle:'Headline fokus di tengah', description:'Komposisi satu kolom yang bersih dengan visual pendukung di bawah konten.', bestFor:'Cafe, bakery, laundry, retail' },
  { id:'card-left', name:'2. 2 Kolom — Card Kiri', subtitle:'Card konten di kiri', description:'Card informasi berada di kiri dan visual bisnis menjadi penyeimbang di kanan.', bestFor:'Bengkel, jasa, rental, service' },
  { id:'card-right', name:'3. 2 Kolom — Card Kanan', subtitle:'Card konten di kanan', description:'Visual lebih dominan di kiri, card CTA dan informasi berada di kanan.', bestFor:'Kuliner, salon, properti, produk' },
  { id:'background-focus', name:'4. Background Focus', subtitle:'Foto sebagai atmosfer', description:'Foto penuh dengan overlay untuk membangun kesan kuat sejak first impression.', bestFor:'Travel, kuliner, hospitality' },
  { id:'minimal', name:'5. Minimal', subtitle:'Ringkas dan cepat', description:'Headline, deskripsi, dan CTA tanpa elemen dekoratif berlebihan.', bestFor:'Jasa profesional, freelancer' },
  { id:'editorial', name:'6. Editorial', subtitle:'Tipografi sebagai fokus', description:'Headline besar dengan whitespace dan detail visual editorial.', bestFor:'Fashion, creative, agency, brand' },
  { id:'image-split', name:'7. Image Split', subtitle:'Visual setengah layar', description:'Konten clean di satu sisi dan foto bisnis dominan di sisi lainnya.', bestFor:'Restaurant, beauty, property, product' },
  { id:'floating-card', name:'8. Floating Card', subtitle:'Card mengambang di atas visual', description:'Foto penuh dengan panel informasi yang terasa premium dan modern.', bestFor:'Service, rental, studio' },
  { id:'spotlight', name:'9. Spotlight', subtitle:'Brand spotlight', description:'Konten terpusat dengan ambient glow untuk menonjolkan identitas brand.', bestFor:'Tech, startup, modern UMKM' },
  { id:'bottom-bar', name:'10. Bottom Bar', subtitle:'CTA dan trust di bagian bawah', description:'Visual hero luas dengan informasi kepercayaan dan CTA pada area bawah.', bestFor:'Booking, rental, event, service' },
];
export interface HeroBackgroundOption { id: HeroBackgroundType; name: string; description: string; }
export const heroBackgroundOptions: HeroBackgroundOption[] = [
  { id:'color', name:'Solid Color', description:'Background hanya menggunakan warna.' },
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
  centered:{...shared,layoutVariant:'centered',backgroundType:'color',backgroundColor:'#FFFFFF',backgroundMode:'light',gradientStyle:'clean-subtle',overlayOpacity:0,overlayGradient:false,contentAlign:'center',textTheme:'dark',showTrustPoints:false,showRatingPill:true},
  'card-left':{...shared,layoutVariant:'card-left',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',overlayOpacity:.72,contentAlign:'left',textTheme:'light',showTrustPoints:true,showRatingPill:true,showFloatingStats:true},
  'card-right':{...shared,layoutVariant:'card-right',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',overlayOpacity:.58,contentAlign:'left',textTheme:'light',showTrustPoints:true,showRatingPill:true},
  'background-focus':{...shared,layoutVariant:'background-focus',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',backgroundImageOpacity:.48,overlayOpacity:.62,contentAlign:'left',textTheme:'light',showTrustPoints:true},
  minimal:{...shared,layoutVariant:'minimal',backgroundType:'color',backgroundColor:'#F8FAFC',backgroundMode:'light',gradientStyle:'clean-subtle',overlayOpacity:0,overlayGradient:false,contentAlign:'left',contentMaxWidth:'md',textTheme:'dark',showTrustPoints:false},
  editorial:{...shared,layoutVariant:'editorial',backgroundType:'color',backgroundColor:'#FAFAF9',backgroundMode:'light',gradientStyle:'clean-subtle',overlayOpacity:0,overlayGradient:false,contentAlign:'left',contentMaxWidth:'xl',textTheme:'dark',showTrustPoints:false},
  'image-split':{...shared,layoutVariant:'image-split',backgroundType:'color',backgroundColor:'#FFFFFF',backgroundMode:'light',gradientStyle:'clean-subtle',overlayOpacity:0,overlayGradient:false,contentAlign:'left',contentMaxWidth:'md',textTheme:'dark',showTrustPoints:false},
  'floating-card':{...shared,layoutVariant:'floating-card',backgroundType:'image-overlay',backgroundColor:'#0F172A',backgroundMode:'dark',gradientStyle:'dark-slate',backgroundImageOpacity:.38,overlayOpacity:.64,contentAlign:'left',textTheme:'light',showTrustPoints:true,showFloatingStats:true},
  spotlight:{...shared,layoutVariant:'spotlight',backgroundType:'color',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'brand-glow',overlayOpacity:0,overlayGradient:false,contentAlign:'center',contentMaxWidth:'md',textTheme:'light',showTrustPoints:false,showRatingPill:true},
  'bottom-bar':{...shared,layoutVariant:'bottom-bar',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',backgroundImageOpacity:.42,overlayOpacity:.64,contentAlign:'left',textTheme:'light',showTrustPoints:false,showRatingPill:true},
  split:{...shared,layoutVariant:'split',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',backgroundImageOpacity:.28,overlayOpacity:.76,contentAlign:'left',textTheme:'light',showTrustPoints:true,showRatingPill:true,showFloatingStats:true},
  'card-overlay':{...shared,layoutVariant:'card-overlay',backgroundType:'image-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',backgroundImageOpacity:.72,overlayOpacity:.1,contentAlign:'left',textTheme:'light',showTrustPoints:true},
};
export const heroConfig: HeroConfig = {
  ...heroVariantPresets['card-left'], eyebrowText:'BENGKEL JAYA MOTOR', badgeText:'Spesialis Servis Injeksi & Matic Bergaransi', headline:'Solusi Terpercaya Perawatan Motor Anda di Kota Banjar', description:'Layanan servis motor profesional, transparan, dan bergaransi untuk kebutuhan harian Anda.', primaryCtaText:'Booking Servis via WhatsApp', secondaryCtaText:'Lihat Daftar Layanan', ctaNote:'Respon admin cepat • Tanpa biaya booking', trustBadgeText:'⭐ 4.9/5 dari 1.200+ pelanggan', trustPoints:['Teknisi berpengalaman & terlatih','Suku cadang asli & bergaransi','Estimasi biaya transparan','Prioritas antrean booking'], ratingValue:'4.9/5', ratingLabel:'Google Reviews', floatingStats:[{value:'10+',label:'Tahun pengalaman'},{value:'1.200+',label:'Motor / bulan'}], backgroundImageUrl:'', backgroundImageAlt:'Bengkel Jaya Motor', backgroundImageBlur:'sm', backgroundImagePosition:'center',
};

import { HeroConfig, HeroGradientStyle, HeroLayoutVariant, HeroBackgroundMode, HeroTextureType, HeroBackgroundType, HeroBlurLevel } from '../types/business';

export interface HeroLayoutOption { id: HeroLayoutVariant; name: string; subtitle: string; description: string; bestFor: string; }
export const heroLayoutOptions: HeroLayoutOption[] = [
  { id:'split', name:'1. Split High-Conversion', subtitle:'Kiri: Headline & CTA, Kanan: Showcase Media & Badges', description:'Tata letak responsif dua kolom seimbang dengan fokus konversi tinggi, trust checkmarks, dan badge floating rating.', bestFor:'Bengkel Otomotif, Servis AC, Kontraktor & Jasa Teknis' },
  { id:'centered', name:'2. Centered Editorial Showcase', subtitle:'Tengah: Headline & Social Proof, Bawah: Media Lebar', description:'Tata letak simetris elegan dengan social proof pill di atas, dual action buttons, dan showcase media panorama berbingkai rapi.', bestFor:'Laundry Kiloan, Restoran & Cafe, Bakery, Retail' },
  { id:'card-overlay', name:'3. App-Style Studio Overlay', subtitle:'Latar Atmosferik & Quick Booking Sheet Interaktif', description:'Nuansa aplikasi modern dengan latar visual tersamarkan, kartu headline berkelas, dan sheet booking WhatsApp langsung satu klik.', bestFor:'Barbershop, Salon & Spa, Studio Foto, Klinik' },
];
export interface HeroBackgroundOption { id: HeroBackgroundType; name: string; description: string; }
export const heroBackgroundOptions: HeroBackgroundOption[] = [
  { id:'color', name:'Solid Color', description:'Background menggunakan warna/gradient theme.' },
  { id:'image', name:'Full Image', description:'Foto menjadi visual utama.' },
  { id:'image-overlay', name:'Image + Overlay', description:'Foto tersamarkan dengan overlay agar teks tetap terbaca.' },
];
export interface HeroGradientOption { id: HeroGradientStyle; name: string; description: string; previewColors: string[]; suggestedMode: HeroBackgroundMode; }
export const heroGradientOptions: HeroGradientOption[] = [
  { id:'brand-glow', name:'Brand Glow', description:'Glow mengikuti warna brand.', previewColors:['#EF4444','#38BDF8'], suggestedMode:'auto' },
  { id:'aurora-mesh', name:'Aurora Mesh', description:'Ambient multi-point modern.', previewColors:['#6366F1','#06B6D4','#10B981'], suggestedMode:'auto' },
  { id:'sunset-radiant', name:'Sunset Radiant', description:'Hangat amber dan copper.', previewColors:['#F59E0B','#EF4444'], suggestedMode:'auto' },
  { id:'ocean-depth', name:'Ocean Depth', description:'Navy dan cyan premium.', previewColors:['#0F172A','#0284C7'], suggestedMode:'dark' },
  { id:'emerald-nature', name:'Emerald Nature', description:'Fresh green natural.', previewColors:['#064E3B','#10B981'], suggestedMode:'auto' },
  { id:'dark-slate', name:'Native Dark Slate', description:'Obsidian/slate premium.', previewColors:['#0B0F19','#334155'], suggestedMode:'dark' },
  { id:'clean-subtle', name:'Clean Apple Subtle', description:'Off-white minimal.', previewColors:['#FFFFFF','#E2E8F0'], suggestedMode:'light' },
  { id:'solid', name:'Solid + Ambient Orbs', description:'Solid dengan ambient orbs.', previewColors:['#1E293B','#64748B'], suggestedMode:'auto' },
  { id:'custom', name:'Custom Gradient', description:'Warna dan arah bebas.', previewColors:['#4F46E5','#9333EA','#EC4899'], suggestedMode:'auto' },
];
export interface HeroStylePreset { id:string; name:string; description:string; previewColors:string[]; config:Partial<HeroConfig>; }
export const heroStylePresets: HeroStylePreset[] = [
  { id:'clean-conversion', name:'Clean Conversion', description:'Bersih, terang, fokus ke headline dan CTA.', previewColors:['#FFFFFF','#E2E8F0'], config:{layoutVariant:'split',backgroundColor:'#F8FAFC',backgroundMode:'light',gradientStyle:'clean-subtle',texture:'none',ambientOrbs:{enabled:true,opacity:.08,blur:'lg'},contentAlign:'left',textTheme:'dark',showTrustPoints:true,showRatingPill:true,showFloatingStats:true} },
  { id:'editorial', name:'Editorial', description:'Elegan dan lapang untuk brand premium.', previewColors:['#FAFAF9','#D6D3D1'], config:{layoutVariant:'centered',backgroundColor:'#FAFAF9',backgroundMode:'light',gradientStyle:'clean-subtle',texture:'dots',textureOpacity:.02,ambientOrbs:{enabled:false},contentAlign:'center',textTheme:'dark',showTrustPoints:true,showRatingPill:true,showFloatingStats:false} },
  { id:'aurora', name:'Aurora', description:'Modern dan hidup untuk bisnis kreatif.', previewColors:['#4F46E5','#06B6D4','#10B981'], config:{layoutVariant:'centered',backgroundColor:'#F8FAFC',backgroundMode:'auto',gradientStyle:'aurora-mesh',texture:'mesh',textureOpacity:.025,ambientOrbs:{enabled:true,opacity:.18,blur:'xl'},contentAlign:'center',textTheme:'auto',showTrustPoints:true,showRatingPill:true,showFloatingStats:false} },
  { id:'midnight', name:'Midnight', description:'Gelap, premium, dan kontras tinggi.', previewColors:['#0B0F19','#0284C7'], config:{layoutVariant:'card-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'ocean-depth',texture:'none',ambientOrbs:{enabled:true,opacity:.18,blur:'xl'},contentAlign:'left',textTheme:'light',showTrustPoints:true,showRatingPill:true,showFloatingStats:false} },
  { id:'warm', name:'Warm Local', description:'Hangat dan ramah untuk bisnis lokal.', previewColors:['#F59E0B','#EF4444'], config:{layoutVariant:'split',backgroundColor:'#FFFBEB',backgroundMode:'light',gradientStyle:'sunset-radiant',texture:'dots',textureOpacity:.025,ambientOrbs:{enabled:true,opacity:.12,blur:'lg'},contentAlign:'left',textTheme:'dark',showTrustPoints:true,showRatingPill:true,showFloatingStats:true} },
  { id:'nature', name:'Fresh Nature', description:'Segar dan natural untuk lifestyle dan beauty.', previewColors:['#064E3B','#10B981'], config:{layoutVariant:'centered',backgroundColor:'#F0FDF4',backgroundMode:'light',gradientStyle:'emerald-nature',texture:'mesh',textureOpacity:.02,ambientOrbs:{enabled:true,opacity:.1,blur:'lg'},contentAlign:'center',textTheme:'dark',showTrustPoints:true,showRatingPill:true,showFloatingStats:false} },
];
export interface HeroBackgroundPreset { name:string; color:string; isDark:boolean; }
export const heroBackgroundPresets:HeroBackgroundPreset[] = [
  {name:'Apple Slate',color:'#F8FAFC',isDark:false},{name:'Crisp White',color:'#FFFFFF',isDark:false},{name:'Warm Stone',color:'#F5F5F4',isDark:false},{name:'Obsidian Dark',color:'#0B0F19',isDark:true},{name:'Midnight Slate',color:'#0F172A',isDark:true},{name:'Deep Navy',color:'#0A1128',isDark:true},{name:'Zinc Studio',color:'#18181B',isDark:true},
];
export const heroTextureOptions:{id:HeroTextureType;name:string}[]=[{id:'none',name:'None'},{id:'dots',name:'Dots'},{id:'grid',name:'Grid'},{id:'mesh',name:'Mesh'}];
export const heroBlurOptions:{id:HeroBlurLevel;name:string;pixels:string}[]=[{id:'none',name:'Tanpa blur',pixels:'0px'},{id:'sm',name:'Ringan',pixels:'2px'},{id:'md',name:'Sedang',pixels:'4px'},{id:'lg',name:'Kuat',pixels:'8px'}];
const shared:Partial<HeroConfig>={backgroundImageOpacity:.12,backgroundImageBlur:'sm',backgroundBlur:'none',contentMaxWidth:'lg',minHeight:'large'};
export const heroVariantPresets:Record<HeroLayoutVariant,HeroConfig>={
  split:{...shared,layoutVariant:'split',backgroundColor:'#F8FAFC',backgroundMode:'auto',gradientStyle:'brand-glow',ambientOrbs:{enabled:true,opacity:.18,blur:'xl'},texture:'dots',textureOpacity:.035,showBackgroundImageOverlay:true,contentAlign:'left',textTheme:'auto',showTrustPoints:true,showRatingPill:true,showFloatingStats:true},
  centered:{...shared,layoutVariant:'centered',backgroundColor:'#F8FAFC',backgroundMode:'auto',gradientStyle:'brand-glow',ambientOrbs:{enabled:true,opacity:.16,blur:'xl'},texture:'dots',textureOpacity:.03,showBackgroundImageOverlay:true,contentAlign:'center',textTheme:'auto',showTrustPoints:true,showRatingPill:true,showFloatingStats:false},
  'card-overlay':{...shared,layoutVariant:'card-overlay',backgroundColor:'#0B0F19',backgroundMode:'dark',gradientStyle:'dark-slate',ambientOrbs:{enabled:true,opacity:.16,blur:'xl'},texture:'none',textureOpacity:.03,showBackgroundImageOverlay:true,contentAlign:'left',textTheme:'light',showTrustPoints:true,showRatingPill:true,showFloatingStats:false},
};
export const heroConfig:HeroConfig={...heroVariantPresets.split,eyebrowText:'BENGKEL JAYA MOTOR',badgeText:'Spesialis Servis Injeksi & Matic Bergaransi',headline:'Solusi Terpercaya Perawatan Motor Anda di Kota Banjar',description:'Layanan servis motor profesional, transparan, dan bergaransi untuk kebutuhan harian Anda.',primaryCtaText:'Booking Servis via WhatsApp',secondaryCtaText:'Lihat Daftar Layanan',ctaNote:'Respon admin cepat • Tanpa biaya booking',trustBadgeText:'⭐ 4.9/5 dari 1,200+ Pelanggan Puas',trustPoints:['Teknisi Berpengalaman & Terlatih','100% Suku Cadang Asli & Bergaransi','Estimasi Biaya Transparan Tanpa Siluman','Prioritas Antrean Booking WhatsApp'],showFloatingStats:true,showRatingPill:true,ratingValue:'4.9 / 5.0',ratingLabel:'Google Reviews',backgroundImageUrl:'',backgroundImageAlt:'Bengkel Jaya Motor',backgroundImagePosition:'center'};

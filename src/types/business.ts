export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'google';
  url: string;
  label: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface StatisticItem {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category?: string;
  description: string;
  startingPrice: number; // in IDR (Rupiah)
  priceNote?: string; // e.g. "Termasuk Oli", "Per Kg", "Mulai dari"
  duration?: string; // e.g. "30-45 Menit"
  iconName: string; // Lucide icon name string e.g. 'Wrench', 'Gauge', 'Droplets', etc.
  popular?: boolean;
  features?: string[];
  bookingMessage?: string; // Custom WhatsApp message when booking this service
}

export interface PricingPackage {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  period?: string; // e.g. "per motor", "per kedatangan", "per bulan"
  popular?: boolean;
  badge?: string; // e.g. "Paling Laris", "Best Value"
  features: {
    text: string;
    included: boolean;
  }[];
  bookingMessage?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleOrVehicle?: string; // e.g. "Pemilik Honda Vario 150", "Pelanggan Setia"
  rating: number; // 1-5
  comment: string;
  date?: string;
  avatarUrl: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export type HeroVariant = 'split' | 'centered' | 'card-overlay';
export type HeroLayoutVariant = 'split' | 'centered' | 'card-overlay';

export type HeroGradientStyle = 
  | 'brand-glow'      // Ambient radial glow anchored on brand primary and accent
  | 'aurora-mesh'     // Multi-point ambient glow with subtle mesh
  | 'sunset-radiant'  // Warm golden amber & copper glow
  | 'ocean-depth'     // Cool deep indigo, cyan & navy
  | 'emerald-nature'  // Fresh mint, sage & emerald glow
  | 'dark-slate'      // Deep native obsidian/slate with specular light
  | 'clean-subtle'    // Clean minimalist off-white / light slate soft wash
  | 'custom'          // Fully custom gradient colors (from, via, to)
  | 'solid';          // Solid base color + ambient orbs

export type HeroBackgroundMode = 'auto' | 'light' | 'dark';
export type HeroTextureType = 'dots' | 'grid' | 'mesh' | 'none';

export interface HeroCustomGradient {
  from: string;
  via?: string;
  to: string;
  direction?: 'to-b' | 'to-br' | 'to-r' | 'to-tr' | 'radial';
}

export interface HeroAmbientOrbsConfig {
  enabled?: boolean;
  color1?: string; // Custom hex or defaults to primaryColor
  color2?: string; // Custom hex or defaults to accentColor
  opacity?: number; // 0.05 to 0.40
  blur?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface HeroConfig {
  layoutVariant: HeroLayoutVariant; // 'split' | 'centered' | 'card-overlay'

  // Configurable Canvas Background & Gradient (Native Feel)
  backgroundColor?: string; // e.g. '#0B0F19', '#0F172A', '#F8FAFC', '#FFFFFF'
  backgroundMode?: HeroBackgroundMode; // 'auto' | 'light' | 'dark'
  gradientStyle?: HeroGradientStyle;
  customGradient?: HeroCustomGradient;
  ambientOrbs?: HeroAmbientOrbsConfig;
  texture?: HeroTextureType; // 'dots' | 'grid' | 'mesh' | 'none'
  textureOpacity?: number; // 0.02 - 0.08
  
  // Disguised Background Photography Layer
  showBackgroundImageOverlay?: boolean; // Toggle background gambar yang tersamarkan
  backgroundImageUrl?: string; // Optional custom background image (fallback to heroImageUrl)
  backgroundImageOpacity?: number; // Nilai 0.05 - 0.35 untuk efek tersamarkan
  backgroundImageBlur?: 'none' | 'sm' | 'md' | 'lg';
  
  // Content & Trust Badges
  badgeText?: string;
  trustBadgeText?: string;
  trustPoints?: string[];
  showFloatingStats?: boolean;
  showRatingPill?: boolean;
}

export type FontOptionId = 'plus-jakarta' | 'outfit' | 'dm-sans' | 'poppins' | 'inter';

export interface FontOption {
  id: FontOptionId;
  name: string;
  family: string;
  category: string;
  description: string;
}

export interface LocationSectionConfig {
  badgeText?: string;
  title?: string;
  description?: string;
  addressTitle?: string;
  hoursTitle?: string;
  openTodayBadgeText?: string;
  supportTitle?: string;
  directionsButtonText?: string;
  askDirectionsButtonText?: string;
  askDirectionsMessage?: string;
  features?: string[];
}

export interface CtaSectionConfig {
  badgeText?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  disclaimerText?: string;
  customWhatsAppMessage?: string;
}

export interface FooterSectionConfig {
  aboutText?: string;
  quickLinksTitle?: string;
  servicesTitle?: string;
  contactTitle?: string;
  copyrightText?: string;
  badgeText?: string;
  taglineNote?: string;
  paymentMethodsTitle?: string;
  paymentMethods?: string[];
}

export interface SectionVisibilityConfig {
  stats?: boolean;
  about?: boolean;
  services?: boolean;
  pricing?: boolean;
  whyChooseUs?: boolean;
  gallery?: boolean;
  testimonials?: boolean;
  process?: boolean;
  faq?: boolean;
  location?: boolean;
  cta?: boolean;
}

export interface NavItem {
  name: string;
  href: string;
  iconName?: string;
  badge?: string;
  showInBottomNav?: boolean;
}

export interface NavigationConfig {
  brandName?: string;
  brandSubtitle?: string;
  links: NavItem[];
  showTopMicroBar?: boolean;
  showMobileBottomNav?: boolean;
  ctaButtonText?: string;
}

export interface ThemeConfig {
  primaryColor: string; // Hex color for main brand, e.g. #DC2626 (Red) for Bengkel
  primaryHover: string;
  secondaryColor: string; // Dark neutral, e.g. #0F172A (Slate 900)
  accentColor: string; // Accent highlight, e.g. #F59E0B (Amber)
  backgroundColor: string; // Page background
  surfaceColor: string; // Card surface
  textColor: string;
  mutedTextColor: string;
  borderRadius: string; // e.g. '0.75rem'
  whatsappColor?: string; // default #25D366
  heroVariant?: HeroVariant; // 'split' | 'centered' | 'card-overlay'
  fontOptionId?: FontOptionId; // 'plus-jakarta' | 'outfit' | 'dm-sans' | 'poppins' | 'inter'
  fontFamily?: string;
  fontHeading?: string;
  fontBody?: string;
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  canonicalUrl: string;
  schemaType: 'AutomotiveBusiness' | 'LocalBusiness' | 'DryCleaningOrLaundry' | 'Restaurant' | 'HairSalon' | 'HomeAndConstructionBusiness';
}

export interface ContactConfig {
  phone: string; // Display format, e.g. "0812-3456-7890"
  whatsappNumber: string; // Digits only with country code, e.g. "628123456789"
  email: string;
  address: string;
  city: string;
  province: string;
  postalCode?: string;
  googleMapsUrl: string; // Link to open Google Maps
  googleMapsEmbedUrl?: string; // Embed iframe src
  defaultWhatsAppMessage: string;
}

export interface BusinessConfig {
  id: string;
  name: string;
  industry: string; // e.g. "Bengkel Motor", "Laundry Kiloan", "Restoran"
  tagline: string;
  heroHeadline: string;
  heroDescription: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  
  // Images
  logoUrl?: string;
  heroImageUrl: string;
  aboutImageUrl: string;
  ctaBannerImageUrl?: string;

  // Layout & Section toggles
  sections?: SectionVisibilityConfig;
  navigation?: NavigationConfig;
  
  // Content Sections
  aboutText: {
    p1: string;
    p2: string;
    highlights: string[];
    experienceYears: number;
  };
  
  statistics: StatisticItem[];
  services: ServiceItem[];
  pricingPackages: PricingPackage[];
  whyChooseUs: WhyChooseUsItem[];
  gallery: GalleryItem[];
  testimonials: TestimonialItem[];
  process: ProcessStep[];
  faqs: FaqItem[];
  openingHours: OpeningHour[];
  socialLinks: SocialLink[];
  
  // Configurations
  contact: ContactConfig;
  theme: ThemeConfig;
  seo: SeoConfig;
  hero?: HeroConfig;
  locationSection?: LocationSectionConfig;
  ctaSection?: CtaSectionConfig;
  footerSection?: FooterSectionConfig;
}

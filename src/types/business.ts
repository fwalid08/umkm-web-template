export interface SocialLink { platform: 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'twitter' | 'google' | 'linkedin'; url: string; label: string; }
export interface OpeningHour { day: string; hours: string; isClosed?: boolean; }
export interface StatisticItem { id: string; value: string; label: string; description?: string; }
export interface ServiceItem { id: string; name: string; category?: string; description: string; startingPrice: number; priceNote?: string; duration?: string; iconName: string; popular?: boolean; features?: string[]; bookingMessage?: string; }
export interface PricingPackage { id: string; name: string; tagline: string; price: number; originalPrice?: number; period?: string; popular?: boolean; badge?: string; features: { text: string; included: boolean }[]; bookingMessage?: string; }
export interface WhyChooseUsItem { id: string; title: string; description: string; iconName: string; }
export interface GalleryItem { id: string; title: string; category: string; imageUrl: string; description?: string; }
export interface TestimonialItem { id: string; name: string; roleOrVehicle?: string; rating: number; comment: string; date?: string; avatarUrl: string; }
export interface ProcessStep { step: number; title: string; description: string; iconName: string; }
export interface FaqItem { id: string; question: string; answer: string; category?: string; }
export type HeroLayoutVariant = 'centered' | 'split' | 'card-overlay';
export type HeroVariant = HeroLayoutVariant;
export type HeroGradientStyle = 'brand-glow' | 'aurora-mesh' | 'sunset-radiant' | 'ocean-depth' | 'emerald-nature' | 'dark-slate' | 'clean-subtle' | 'custom' | 'solid';
export type HeroBackgroundMode = 'auto' | 'light' | 'dark';
export type HeroTextureType = 'dots' | 'grid' | 'mesh' | 'none';
export type HeroBackgroundType = 'color' | 'image' | 'image-overlay';
export type HeroBlurLevel = 'none' | 'sm' | 'md' | 'lg';
export interface HeroCustomGradient { from: string; via?: string; to: string; direction?: 'to-b' | 'to-br' | 'to-r' | 'to-tr' | 'radial'; }
export interface HeroAmbientOrbsConfig { enabled?: boolean; color1?: string; color2?: string; opacity?: number; blur?: 'sm' | 'md' | 'lg' | 'xl'; }
export interface HeroStatItem { value: string; label: string; }
export interface HeroConfig {
  layoutVariant: HeroLayoutVariant;
  eyebrowText?: string; badgeText?: string; headline?: string; description?: string;
  primaryCtaText?: string; primaryCtaUrl?: string; secondaryCtaText?: string; secondaryCtaUrl?: string; ctaNote?: string;
  trustBadgeText?: string; trustPoints?: string[]; showTrustPoints?: boolean; showRatingPill?: boolean; ratingValue?: string; ratingLabel?: string;
  showFloatingStats?: boolean; floatingStats?: HeroStatItem[]; backgroundType?: HeroBackgroundType; backgroundColor?: string; backgroundMode?: HeroBackgroundMode;
  backgroundBlur?: HeroBlurLevel; backgroundBlurPx?: number;
  gradientStyle?: HeroGradientStyle; customGradient?: HeroCustomGradient; ambientOrbs?: HeroAmbientOrbsConfig; texture?: HeroTextureType; textureOpacity?: number;
  showBackgroundImageOverlay?: boolean; backgroundImageUrl?: string; backgroundImageAlt?: string; backgroundImageOpacity?: number; backgroundImageBlur?: HeroBlurLevel; backgroundImageBlurPx?: number; backgroundImagePosition?: string;
  backgroundOverlayImageUrl?: string; backgroundOverlayImageOpacity?: number;
  overlayColor?: string; overlayOpacity?: number; overlayGradient?: boolean;
  minHeight?: 'auto' | 'screen' | 'large'; contentAlign?: 'left' | 'center'; contentMaxWidth?: 'sm' | 'md' | 'lg' | 'xl'; textTheme?: 'auto' | 'light' | 'dark'; accentText?: string;
}
export type FontOptionId = 'plus-jakarta' | 'outfit' | 'dm-sans' | 'poppins' | 'inter';
export interface FontOption { id: FontOptionId; name: string; family: string; category: string; description: string; }
export interface LocationSectionConfig { badgeText?: string; title?: string; description?: string; addressTitle?: string; hoursTitle?: string; openTodayBadgeText?: string; supportTitle?: string; directionsButtonText?: string; askDirectionsButtonText?: string; askDirectionsMessage?: string; features?: string[]; }
export interface CtaSectionConfig { badgeText?: string; headline?: string; description?: string; primaryButtonText?: string; secondaryButtonText?: string; disclaimerText?: string; customWhatsAppMessage?: string; }
export interface FooterSectionConfig { aboutText?: string; quickLinksTitle?: string; servicesTitle?: string; contactTitle?: string; copyrightText?: string; badgeText?: string; taglineNote?: string; paymentMethodsTitle?: string; paymentMethods?: string[]; }
export interface SectionVisibilityConfig { stats?: boolean; about?: boolean; services?: boolean; pricing?: boolean; whyChooseUs?: boolean; gallery?: boolean; testimonials?: boolean; process?: boolean; faq?: boolean; location?: boolean; cta?: boolean; }
export interface NavItem { name: string; href: string; iconName?: string; badge?: string; showInBottomNav?: boolean; showInTopNav?: boolean; }
export interface NavigationConfig { brandName?: string; brandSubtitle?: string; links: NavItem[]; showTopMicroBar?: boolean; showMobileBottomNav?: boolean; ctaButtonText?: string; topNavMaxVisible?: number; }
export interface ThemeConfig { primaryColor: string; primaryHover: string; secondaryColor: string; accentColor: string; backgroundColor: string; surfaceColor: string; textColor: string; mutedTextColor: string; borderRadius: string; whatsappColor?: string; heroVariant?: HeroVariant; fontOptionId?: FontOptionId; fontFamily?: string; fontHeading?: string; fontBody?: string; }
export interface SeoConfig { title: string; description: string; keywords: string[]; ogImage: string; canonicalUrl: string; schemaType: 'AutomotiveBusiness' | 'LocalBusiness' | 'DryCleaningOrLaundry' | 'Restaurant' | 'HairSalon' | 'HomeAndConstructionBusiness'; }
export interface ContactConfig { phone: string; whatsappNumber: string; email: string; address: string; city: string; province: string; postalCode?: string; googleMapsUrl: string; googleMapsEmbedUrl?: string; defaultWhatsAppMessage: string; }
export interface BusinessConfig {
  id: string; name: string; industry: string; tagline: string; heroHeadline: string; heroDescription: string; primaryCtaText: string; secondaryCtaText: string;
  logoUrl?: string; heroImageUrl: string; aboutImageUrl: string; ctaBannerImageUrl?: string; sections?: SectionVisibilityConfig; navigation?: NavigationConfig;
  aboutText: { p1: string; p2: string; highlights: string[]; experienceYears: number; };
  statistics: StatisticItem[]; services: ServiceItem[]; pricingPackages: PricingPackage[]; whyChooseUs: WhyChooseUsItem[]; gallery: GalleryItem[]; testimonials: TestimonialItem[]; process: ProcessStep[]; faqs: FaqItem[]; openingHours: OpeningHour[]; socialLinks: SocialLink[];
  contact: ContactConfig; theme: ThemeConfig; seo: SeoConfig; hero?: HeroConfig; locationSection?: LocationSectionConfig; ctaSection?: CtaSectionConfig; footerSection?: FooterSectionConfig;
}

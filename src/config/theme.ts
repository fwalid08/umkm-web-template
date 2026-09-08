import { ThemeConfig } from '../types/business';

/**
 * Global Theme & Visual Styling Configuration
 * 
 * Changing this file customizes the entire color palette, corner radius,
 * and Hero layout variation across the client website.
 */
export const themeConfig: ThemeConfig = {
  // Brand primary color (Used on Primary CTA buttons, highlight badges, active borders)
  primaryColor: '#DC2626', // High-octane Racing Red
  primaryHover: '#B91C1C',

  // Secondary dark neutral (Used on top micro-bar, high-contrast dark accents)
  secondaryColor: '#0F172A', // Deep Slate / Obsidian

  // Accent highlight (Used on 5-star ratings, flash sales, urgent notices)
  accentColor: '#F59E0B', // Amber Gold

  // Surface & Canvas
  backgroundColor: '#F8FAFC', // Ultra-clean subtle cool slate
  surfaceColor: '#FFFFFF',

  // Typography
  textColor: '#0F172A',
  mutedTextColor: '#64748B',

  // Border curvature: '0.5rem' (compact), '0.75rem' (medium), '1rem' (modern app-like)
  borderRadius: '1rem',

  // WhatsApp Branding
  whatsappColor: '#25D366',

  /**
   * Hero Layout Variant:
   * - 'split': High-conversion split layout with text/CTAs on left and responsive media on right
   * - 'centered': Editorial layout with centered headline, social proof pill, and panoramic media
   * - 'card-overlay': App-style modern card overlay with gradient backdrop and interactive quick-booking sheet
   */
  heroVariant: 'split',

  /**
   * Modern, Mobile-Friendly Font Options:
   * 'plus-jakarta' | 'outfit' | 'dm-sans' | 'poppins' | 'inter'
   */
  fontOptionId: 'plus-jakarta',
  fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

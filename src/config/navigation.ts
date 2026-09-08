import { NavigationConfig } from '../types/business';

/**
 * Site Navigation & Mobile App Bar Configuration
 *
 * Configures desktop navigation bar, slide-out mobile drawer,
 * and the native-app-style bottom navigation bar on mobile devices.
 */
export const navigationConfig: NavigationConfig = {
  showTopMicroBar: true,
  showMobileBottomNav: true, // Native app-like bottom navigation bar on mobile
  ctaButtonText: 'Booking WhatsApp',
  links: [
    {
      name: 'Beranda',
      href: '#beranda',
      iconName: 'Home',
      showInBottomNav: true,
    },
    {
      name: 'Layanan',
      href: '#layanan',
      iconName: 'Wrench',
      showInBottomNav: true,
    },
    {
      name: 'Paket Biaya',
      href: '#harga',
      iconName: 'Tag',
      badge: 'Hemat',
      showInBottomNav: true,
    },
    {
      name: 'Keunggulan',
      href: '#keunggulan',
      iconName: 'ShieldCheck',
      showInBottomNav: false,
    },
    {
      name: 'Galeri',
      href: '#galeri',
      iconName: 'Image',
      showInBottomNav: false,
    },
    {
      name: 'Testimoni',
      href: '#testimoni',
      iconName: 'Star',
      showInBottomNav: false,
    },
    {
      name: 'Lokasi & Jam',
      href: '#lokasi',
      iconName: 'MapPin',
      showInBottomNav: true,
    },
    {
      name: 'FAQ',
      href: '#faq',
      iconName: 'HelpCircle',
      showInBottomNav: false,
    },
  ],
};

import { NavigationConfig } from '../types/business';

export const navigationConfig: NavigationConfig = {
  showTopMicroBar: true,
  showMobileBottomNav: true,
  ctaButtonText: 'Booking WhatsApp',
  topNavMaxVisible: 5,
  links: [
    { name:'Beranda', href:'#beranda', iconName:'Home', showInBottomNav:true, showInTopNav:true },
    { name:'Tentang', href:'#tentang', iconName:'Info', showInBottomNav:false, showInTopNav:true },
    { name:'Layanan', href:'#layanan', iconName:'Wrench', showInBottomNav:true, showInTopNav:true },
    { name:'Paket Biaya', href:'#harga', iconName:'Tag', badge:'Hemat', showInBottomNav:true, showInTopNav:true },
    { name:'Keunggulan', href:'#keunggulan', iconName:'ShieldCheck', showInBottomNav:false, showInTopNav:true },
    { name:'Galeri', href:'#galeri', iconName:'Image', showInBottomNav:false, showInTopNav:true },
    { name:'Testimoni', href:'#testimoni', iconName:'Star', showInBottomNav:false, showInTopNav:true },
    { name:'Lokasi & Jam', href:'#lokasi', iconName:'MapPin', showInBottomNav:true, showInTopNav:true },
    { name:'FAQ', href:'#faq', iconName:'HelpCircle', showInBottomNav:false, showInTopNav:true },
  ],
};

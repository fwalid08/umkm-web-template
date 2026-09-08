import React from 'react';
import { BusinessConfig } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { Home, Wrench, Tag, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';

interface MobileBottomNavProps {
  business: BusinessConfig;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ business }) => {
  // Only render if navigation config enables it (defaults to true)
  if (business.navigation?.showMobileBottomNav === false) return null;

  const waLink = generateWhatsAppLink(
    business.contact.whatsappNumber,
    business.contact.defaultWhatsAppMessage
  );

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] pb-[env(safe-area-inset-bottom)]"
      aria-label="Navigasi Mobile"
    >
      <div className="grid grid-cols-5 h-16 max-w-lg mx-auto items-center px-1">
        
        {/* Item 1: Home */}
        <a
          href="#beranda"
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Beranda</span>
        </a>

        {/* Item 2: Layanan */}
        <a
          href="#layanan"
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <Wrench className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Layanan</span>
        </a>

        {/* Item 3: Center WhatsApp Action Tab */}
        <div className="flex items-center justify-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 -mt-4 rounded-full flex items-center justify-center text-white shadow-lg transform active:scale-90 transition-transform"
            style={{ 
              backgroundColor: business.theme.whatsappColor || '#25D366',
              boxShadow: '0 4px 14px rgba(37, 211, 102, 0.45)'
            }}
            aria-label="Chat WhatsApp"
          >
            <WhatsAppIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Item 4: Biaya / Paket */}
        <a
          href="#harga"
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <Tag className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Biaya</span>
        </a>

        {/* Item 5: Lokasi */}
        <a
          href="#lokasi"
          className="flex flex-col items-center justify-center gap-1 py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all"
        >
          <MapPin className="w-5 h-5" />
          <span className="text-[10px] font-semibold">Lokasi</span>
        </a>

      </div>
    </nav>
  );
};

import React, { useState } from 'react';
import { BusinessConfig } from '../types/business';
import { generateWhatsAppLink } from '../lib/whatsapp';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './common/WhatsAppIcon';

interface WhatsAppButtonProps {
  business: BusinessConfig;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ business }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const waLink = generateWhatsAppLink(
    business.contact.whatsappNumber,
    business.contact.defaultWhatsAppMessage
  );

  return (
    <div className="hidden md:flex fixed bottom-5 right-5 z-40 flex-col items-end gap-2">
      {/* Interactive Tooltip Chat Bubble */}
      {showTooltip && (
        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 max-w-[240px] text-left animate-fade-in-up">
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-200 text-slate-600 hover:bg-slate-300 flex items-center justify-center text-xs"
            aria-label="Tutup"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[11px] font-bold text-slate-800">Admin {business.name}</p>
          </div>
          <p className="text-xs text-slate-600 leading-snug">
            Butuh booking servis atau konsultasi kerusakan? Chat kami langsung via WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: business.theme.whatsappColor || '#25D366' }}
        aria-label="Chat WhatsApp Admin"
      >
        {/* Pulsing ring */}
        <span 
          className="absolute inset-0 rounded-full animate-ping opacity-25"
          style={{ backgroundColor: business.theme.whatsappColor || '#25D366' }}
        />
        
        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />

        <WhatsAppIcon className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
};

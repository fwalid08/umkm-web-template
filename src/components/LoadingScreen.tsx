import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BusinessConfig } from '../types/business';
import { DynamicIcon } from '../lib/icons';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  business: BusinessConfig;
  minDisplayTime?: number; // ms
  onFinished?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  business,
  minDisplayTime = 800,
  onFinished,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinished) onFinished();
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime, onFinished]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Glows in Brand Colors */}
          <div
            className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ backgroundColor: business.theme.primaryColor }}
          />
          <div
            className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ backgroundColor: business.theme.accentColor || '#38BDF8' }}
          />

          {/* Central Branded Card */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center p-8 max-w-sm mx-auto relative z-10 space-y-5"
          >
            {/* Pulsing Brand Logo Icon */}
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.8, 0.35],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-2xl blur-md"
                style={{ backgroundColor: business.theme.primaryColor }}
              />
              <div
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl border border-white/20"
                style={{ backgroundColor: business.theme.primaryColor }}
              >
                <DynamicIcon name="Sparkles" className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Brand Name & Tagline */}
            <div className="space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                {business.name}
              </h2>
              <p className="text-xs text-slate-400 font-medium max-w-xs">
                {business.tagline}
              </p>
            </div>

            {/* Shimmering Progress Indicator */}
            <div className="w-48 h-1.5 bg-slate-800/80 rounded-full overflow-hidden relative border border-slate-700/50">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                  duration: 1.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-full h-full rounded-full"
                style={{ backgroundColor: business.theme.primaryColor }}
              />
            </div>

            {/* Micro Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-semibold text-slate-400">
              <Sparkles className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Memuat Website Profil UMKM...</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

interface ScrollToTopProps {
  primaryColor?: string;
  threshold?: number;
}

/**
 * Go To Top Floating Button
 * - Appears smoothly when the user scrolls past the threshold (default 320px).
 * - Smoothly scrolls to the top of the window on click.
 * - Positioned ergonomically above MobileBottomNav on mobile, and cleanly stacked above the WhatsApp floating button on desktop.
 */
export const ScrollToTop: React.FC<ScrollToTopProps> = ({
  primaryColor,
  threshold = 320,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          id="btn-scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed bottom-20 md:bottom-22 right-4 sm:right-5 z-40 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-slate-950 shadow-lg hover:shadow-xl border border-slate-200/80 backdrop-blur-md transition-all active:scale-90 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
          style={primaryColor ? { borderColor: 'rgba(226, 232, 240, 0.9)' } : undefined}
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.3] group-hover:-translate-y-0.5 transition-transform duration-200" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;

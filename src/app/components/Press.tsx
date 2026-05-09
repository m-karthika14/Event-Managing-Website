import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useIsMobile } from './ui/use-mobile';

const services = [
  "First Birthday Planner",
  "Engagement",
  "Wedding Planner",
  "Baby Shower Decoration",
  "Baby Special Entry"
];

export function Press() {
  const isMobile = useIsMobile();
  // Lower duration = faster marquee.
  const desktopDurationSeconds = 25;
  const mobileDurationSeconds = 8;
  const duration = isMobile ? mobileDurationSeconds : desktopDurationSeconds;

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      // Measure the full content width of one track (copy A).
      // scrollWidth is stable even while the outer wrapper is being transformed.
      setTrackWidth(Math.ceil(el.scrollWidth));
    };

    update();
    // Double-rAF helps ensure layout + fonts have settled on mobile.
    requestAnimationFrame(() => requestAnimationFrame(update));

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(update);
      ro.observe(el);
      window.addEventListener('resize', update);
      return () => {
        ro.disconnect();
        window.removeEventListener('resize', update);
      };
    }

    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isMobile]);

  return (
    <div className="-mt-[4cm] py-20 px-6 bg-[#0B1320] border-t border-b border-[#D4AF37]/10 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto text-center">
        
        <motion.p 
          className="text-[12px] uppercase tracking-[0.4em] text-[#D4AF37] mb-12 font-medium"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Event Services We Offer
        </motion.p>

        {/* Marquee Container */}
        <div 
          className="relative overflow-hidden w-full select-none"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <motion.div
            className="inline-flex items-center whitespace-nowrap will-change-transform"
            key={`${isMobile ? 'mobile' : 'desktop'}`}
            initial={{ x: 0 }}
            animate={trackWidth > 0 ? { x: -trackWidth } : { x: 0 }}
            transition={{
              duration,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div
              ref={trackRef}
              className="flex w-max flex-shrink-0 items-center gap-10 md:gap-20 pr-10 md:pr-20"
            >
              {services.map((item) => (
                <span
                  key={`a-${item}`}
                  className="text-2xl md:text-3xl text-[#94A3B8]/50 hover:text-[#D4AF37] transition-colors duration-500 cursor-default"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item}
                </span>
              ))}
            </div>
            <div
              className="flex w-max flex-shrink-0 items-center gap-10 md:gap-20 pr-10 md:pr-20"
              aria-hidden
            >
              {services.map((item) => (
                <span
                  key={`b-${item}`}
                  className="text-2xl md:text-3xl text-[#94A3B8]/50 hover:text-[#D4AF37] transition-colors duration-500 cursor-default"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
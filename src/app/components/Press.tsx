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
          className="relative flex overflow-hidden w-full select-none"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <motion.div
            className="flex gap-20 items-center justify-around whitespace-nowrap min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: isMobile ? 0.25 : 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...services, ...services].map((item, index) => (
              <span
                key={index}
                className="text-2xl md:text-3xl text-[#94A3B8]/50 hover:text-[#D4AF37] transition-colors duration-500 cursor-default"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
import { motion } from 'motion/react';
import { Quote, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutOwner() {
  return (
    <div className="py-32 px-6 bg-[#0B1320] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#D4AF37]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-[#D4AF37]/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-[#D4AF37]/20 rounded-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-medium">
              Meet The Visionary
            </span>
          </motion.div>
          
          <h2
            className="text-5xl md:text-7xl lg:text-8xl mb-6 text-[#FAFAF9] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Architect of
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAF9] via-[#D4AF37] to-[#AA7C11] italic font-light">
               Dreams
            </span>
          </h2>
        </motion.div>

        {/* Owner Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-12 mt-8 md:mt-10 lg:-mt-[2cm]">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden h-[520px] md:h-[560px] lg:h-[520px] border border-[#D4AF37]/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10" />
              <ImageWithFallback
                src="/founder.webp"
                alt="Event Planner Owner"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badges moved outside the card so they sit over the edges */}
            <motion.div
              className="absolute top-4 right-4 md:-top-6 md:-right-12 bg-[#0B1320]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-4 md:p-5 shadow-2xl z-20 max-w-[calc(100%-2rem)] md:max-w-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4">
                <Award className="text-[#D4AF37]" size={28} />
                <div>
                  <p className="text-xs text-[#94A3B8] uppercase tracking-widest">SOUTH INDIAN TALENT AWARDS</p>
                  <p className="font-light text-[#FAFAF9] text-sm tracking-wide">Innovative Birthday Planners</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 bg-[#0B1320]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl p-4 md:p-5 shadow-2xl z-20 max-w-[calc(100%-2rem)] md:max-w-none"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4">
                <Heart className="text-[#D4AF37]" size={28} />
                <div>
                  <p className="text-xs text-[#94A3B8] uppercase tracking-widest">9+ years in experience</p>
                  <p className="font-light text-[#FAFAF9] text-sm tracking-wide">Curating Events With Passion</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <Quote className="text-[#D4AF37]/20 mb-8" size={64} />
            
            <h3
              className="text-4xl md:text-5xl lg:text-6xl mb-8 text-[#FAFAF9] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Elevating the ordinary into the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] block italic mt-2"> Extraordinary</span>
            </h3>

            <div className="space-y-6 text-[#94A3B8] font-light tracking-wide leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="text-lg md:text-xl">
                We focus on transforming every space into a beautiful celebration, blending creativity, detail, and a deep understanding of our clients’ vision.
              </p>

              <p className="text-xl md:text-2xl font-bold text-right md:text-right">
                - Mr. Moorthy, Founder
              </p>

              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-[#D4AF37]/10 mt-10">
                <div>
                  <div className="text-4xl lg:text-5xl font-light text-[#FAFAF9] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100+</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-widest leading-relaxed">Masterpieces<br/>Curated</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-light text-[#FAFAF9] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>9+</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-widest leading-relaxed">Years of<br/>Excellence</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-light text-[#FAFAF9] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Top</div>
                  <div className="text-xs text-[#94A3B8] uppercase tracking-widest leading-relaxed">Industry<br/>Recognition</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Slider Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto max-w-5xl"
        >
          {/* Header removed per request */}

          <div className="pb-12 px-4">
              <div className="pb-12 px-4">
                {/* Reviews section removed per request */}
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "The Vision",
    description: "Every meaningful celebration begins with a story. We take time to understand your traditions, your preferences, and the emotions you wish to create. This is where your ideas gently take shape and begin their journey into reality."
  },
  {
    number: "02",
    title: "The Craft",
    description: "Our team thoughtfully brings every detail together—from décor and floral arrangements to personalized menus and spatial design—ensuring a seamless blend of beauty, culture, and elegance in every element."
  },
  {
    number: "03",
    title: "The Experience",
    description: "On the day of your celebration, we manage everything with care and precision. Our team works quietly behind the scenes, so you can stay present, cherish every moment, and celebrate with your loved ones."
  }
];

export function Philosophy() {
  return (
    <div className="py-32 px-6 bg-[#0B1320] relative border-t border-b border-[#D4AF37]/10">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-6 font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Philosophy
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl text-white tracking-widest font-light"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Art of <span className="italic text-[#D4AF37]">Celebration</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Connecting Line (Only desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-[28px] left-[50px] right-[-50px] h-[1px] bg-gradient-to-r from-[#D4AF37]/30 to-transparent z-0" />
              )}
              
              <div className="relative z-10 flex flex-col">
                <div className="w-14 h-14 rounded-full border border-[#D4AF37]/30 bg-[#121C2D] flex items-center justify-center text-xs tracking-[0.3em] font-medium text-[#D4AF37] mb-8">
                  {step.number}
                </div>
                
                <h3 
                  className="text-2xl text-[#FAFAF9] mb-6 tracking-wide font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                
                <p 
                  className="text-[#94A3B8] font-light leading-relaxed tracking-wide text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

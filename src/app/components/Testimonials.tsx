import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Biffy C',
    role: '1st Birthday Celebration',
    content: 'The decorations and arrangement were so beautiful that we got so many many compliments for the decoration and for choosing them. Felt every money spent worth the service and professionalism. Perfect from start to end.',
    rating: 5,
  },
  {
    name: 'Sindhumathi Vasu',
    role: '1st Birthday Moon Theme',
    content: 'We requested for a fully customized decor matching to the moon theme. The combination of deep blue and shimmering gold and silver creates a sophisticated yet whimsical look that perfectly captures the feeling of a starry night sky. The final output was what we exactly expected and a big WOW from all our guests.',
    rating: 5,
  },
  {
    name: 'Samyuktha Gangarajam',
    role: '1st Birthday Event',
    content: 'We hired Bookmevents for our daughter\'s first birthday and they did an amazing job. The theme was done very beautifully and just how we wanted it. The team was very cooperative and the work was also finished on time.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <div className="py-32 px-6 bg-[#0B1320] relative overflow-hidden flex flex-col items-center">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2
            className="text-5xl md:text-7xl mb-6 text-[#FAFAF9] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Words of <span className="italic text-[#D4AF37]">Praise</span>
          </h2>
          <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto tracking-wide font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            Testaments from our distinguished clientele
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="group relative h-full">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                
                <motion.div
                  className="relative bg-[#121C2D] rounded-[2rem] p-10 h-full border border-white/[0.05] hover:border-[#D4AF37]/[0.2] transition-colors duration-500"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1.5 mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37] opacity-100" />
                    ))}
                  </div>
                  
                  <p 
                    className="text-[#E2E8F0] mb-10 text-lg leading-relaxed font-light italic"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-white/10 pt-6 mt-auto">
                    <p 
                      className="text-[#FAFAF9] font-medium text-lg tracking-wide mb-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {testimonial.name}
                    </p>
                    <p 
                      className="text-xs text-[#94A3B8] uppercase tracking-[0.2em]"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

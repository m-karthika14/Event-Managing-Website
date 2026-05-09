import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';
import { ChevronRight, Clock, Heart } from 'lucide-react';

export default function BabyShowerDecoration() {
  const relatedBlogs = [
    { title: 'First Birthday Planning Guide', path: '/blogs/first-birthday' },
    { title: 'Top Birthday Themes', path: '/blogs/themes' },
    { title: 'Wedding & Reception Trends', path: '/blogs/wedding-trends' },
  ];

  return (
    <div className="min-h-screen bg-[#0A1118] text-white">
      {/* Header */}
      <div className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.04] to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-block px-4 py-2 border border-[#D4AF37]/20 rounded-full mb-6">
            <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium">Blog</span>
          </div>
          <h1
            className="text-4xl md:text-6xl mb-6 text-[#FAFAF9] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Baby Shower Decoration Ideas in Chennai:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">
              Elegant, Traditional & Modern
            </span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Celebrate the arriving bundle of joy with stunning baby shower decoration concepts
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 text-[#94A3B8] text-sm">
            <Clock size={16} /> 9 min read
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Traditional South Indian Baby Shower (Seemantham)
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The traditional South Indian baby shower, or Seemantham, is a celebration of motherhood and fertility. The decor typically features vibrant colors—reds, yellows, and greens with traditional flowers like marigold and jasmine. Banana leaves and coconuts are used as auspicious elements.
            </p>
            <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-4 flex items-center gap-2">
                <Heart size={20} /> Key Elements:
              </h3>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>• Turmeric plants and banana plants as centerpieces</li>
                <li>• Traditional South Indian jewelry and patterns</li>
                <li>• Floral arches with marigolds</li>
                <li>• Brass and traditional metal elements</li>
                <li>• Silk drapes in vibrant colors</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Floral Luxury Theme
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              For the modern mom who loves elegance, a floral luxury theme combines premium flowers with contemporary design. Think cascading floral installations, premium orchids, roses, and hydrangeas in soft color palettes with metallic accents.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Color Combinations</h4>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>• Blush pink + white</li>
                  <li>• Soft purple + lavender</li>
                  <li>• Peach + gold</li>
                  <li>• White + greenery</li>
                </ul>
              </div>
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Premium Elements</h4>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>• Crystal chandeliers</li>
                  <li>• Floating flowers</li>
                  <li>• Premium candles</li>
                  <li>• Gold frame backdrops</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pastel Modern Theme
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Contemporary and minimalist, pastel modern themes work beautifully in both indoor and outdoor spaces. Soft pastels create a gentle, sophisticated atmosphere perfect for intimate gatherings. Think geometric shapes, string lights, and modern installations.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Gender Reveal Ideas
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Baby showers are the perfect opportunity for gender reveals. Popular concepts include:
            </p>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Colored powder reveal moments</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Balloon pop surprises</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Cake cutting reveals</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Confetti cannons</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Planning Considerations
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Baby showers in Chennai can feel intimate or grand depending on guest count and theme complexity. Check our <Link to="/blogs/first-birthday" className="text-[#D4AF37] hover:underline font-medium">First Birthday Planning Guide</Link> for more inspiration on creating a warm and polished celebration.
            </p>
          </section>

          {/* Related Blogs */}
          <section className="mt-20 pt-16 border-t border-[#D4AF37]/10">
            <h3 className="text-2xl mb-8 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              More Event Ideas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedBlogs.map((blog, idx) => (
                <Link key={idx} to={blog.path} className="group">
                  <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6 h-full hover:border-[#D4AF37]/30 transition-all duration-300">
                    <h4 className="text-lg font-semibold text-[#FAFAF9] mb-3 group-hover:text-[#D4AF37] transition-colors">
                      {blog.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read More
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

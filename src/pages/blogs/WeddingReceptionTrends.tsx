import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';
import { ChevronRight, Clock, Sparkles } from 'lucide-react';

export default function WeddingReceptionTrends() {
  const relatedBlogs = [
    { title: 'Baby Shower Ideas', path: '/blogs/baby-shower' },
    { title: 'How to Choose Event Planner', path: '/blogs/event-planner' },
    { title: 'First Birthday Planning', path: '/blogs/first-birthday' },
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
            Reception & Wedding Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">
              Decoration Trends
            </span>{' '}
            in Chennai
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Explore the latest wedding and reception decoration concepts that define luxury celebrations in Chennai
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 text-[#94A3B8] text-sm">
            <Clock size={16} /> 11 min read
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
              Floral Stage Designs & Backdrops
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The stage is the focal point of your wedding reception. Modern trends include cascading floral installations, tiered platforms with fresh flowers, and mixed metal frameworks. Premium florals combined with elegant draping create an unforgettable backdrop for your special moments.
            </p>
            <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 mb-6">
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-4 flex items-center gap-2">
                <Sparkles size={20} /> 2026 Trends:
              </h3>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>• Asymmetrical floral arrangements</li>
                <li>• Hanging installations and suspended flowers</li>
                <li>• Mixed metallic elements (gold, copper, silver)</li>
                <li>• Dramatic fabric draping with florals</li>
                <li>• Personalized monogram backdrops</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              LED Backdrops & Modern Technology
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              LED backdrops have revolutionized wedding decor in Chennai. They offer dynamic, customizable options that adapt to your color scheme and photography needs. Popular options include:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Interactive LED</h4>
                <p className="text-[#94A3B8] text-sm">
                  Real-time projections, couple names, anniversary dates, and live feeds that engage guests
                </p>
              </div>
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Ambient Lighting</h4>
                <p className="text-[#94A3B8] text-sm">
                  Soft, programmable lights that match your theme and create atmospheric moments
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              South Indian Wedding Aesthetics
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Traditional South Indian wedding aesthetics continue to dominate Chennai celebrations. Modern interpretations blend:
            </p>
            <ul className="space-y-3 text-[#94A3B8] mb-6">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Banana leaf table settings with contemporary plating</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Jasmine and turmeric plant decorations with modern lighting</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Traditional kolam patterns with digital projections</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Brass elements combined with gold metallics</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Styling Scale: Finding Your Balance
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Minimal & Intentional</h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Focus on strategic floral placement, clever lighting, and beautiful centerpieces rather than full installations.
                </p>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Minimalist stage design</li>
                  <li>✓ LED screens instead of florals</li>
                  <li>✓ Quality lighting focus</li>
                </ul>
              </div>
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Opulent & Immersive</h3>
                <p className="text-[#94A3B8] text-sm mb-4">
                  Full floral installations, premium florals, multiple backdrops, custom lighting, and high-end linens.
                </p>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Cascading florals</li>
                  <li>✓ Premium imported flowers</li>
                  <li>✓ Custom installations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Pro Tips for Wedding Decoration
            </h2>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Plan 4-6 months in advance for premium vendors</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Request a detailed site visit and mock setup</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Ensure weather contingency plans</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Work with professional photographers and decorators</span>
              </li>
            </ul>
          </section>

          {/* Related Blogs */}
          <section className="mt-20 pt-16 border-t border-[#D4AF37]/10">
            <h3 className="text-2xl mb-8 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Planning Your Event?
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

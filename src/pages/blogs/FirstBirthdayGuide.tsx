import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';
import { ChevronRight, Clock, Users, Palette } from 'lucide-react';

export default function FirstBirthdayGuide() {
  const relatedBlogs = [
    { title: 'Top 10 Birthday Decoration Themes', path: '/blogs/themes' },
    { title: 'Birthday Planning Guide', path: '/blogs/planning-guide' },
    { title: 'How to Choose Event Planner', path: '/blogs/event-planner' },
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
            Ultimate Guide to Planning a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">
              First Birthday Party
            </span>{' '}
            in Chennai (2026)
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know about planning your child's magical first birthday celebration
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 text-[#94A3B8] text-sm">
            <Clock size={16} /> 8 min read
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
              Planning Essentials
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-4">
              Your first step should be deciding on the overall mood, guest list, and venue style. First birthdays are all about focusing on what matters most and shaping a celebration that feels warm and memorable.
            </p>
            <ul className="space-y-3 text-[#94A3B8] mb-6">
              <li className="flex gap-3">
                <Palette size={20} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Simple setup: Cozy and intimate</span>
              </li>
              <li className="flex gap-3">
                <Palette size={20} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Balanced setup: Stylish and well-rounded</span>
              </li>
              <li className="flex gap-3">
                <Palette size={20} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span>Luxe experience: Immersive and highly personalized</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Theme Ideas for First Birthdays
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Choosing a theme sets the tone for the entire celebration. Popular themes in Chennai include pastel florals, twinkle stars, rainbow, and storybook characters. The key is selecting something that resonates with your family's aesthetic and the venue you choose.
            </p>
            <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 mb-6">
              <p className="text-[#D4AF37] font-medium mb-4">Pro Tip:</p>
              <p className="text-[#94A3B8]">
                Many of our clients combine themes—like "Twinkle Star Rainbow" for a unique, personalized celebration. Check our <Link to="/blogs/themes" className="text-[#D4AF37] hover:underline font-medium">Top 10 Trending Birthday Decoration Themes</Link> blog for more inspiration.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Indoor vs Outdoor: What to Choose?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Indoor Venues</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Weather-proof</li>
                  <li>✓ Climate controlled</li>
                  <li>✓ Built-in lighting</li>
                  <li>✗ Space limitations</li>
                </ul>
              </div>
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Outdoor Venues</h3>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>✓ Natural lighting</li>
                  <li>✓ Open space</li>
                  <li>✓ Photo opportunities</li>
                  <li>✗ Weather dependent</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Best Venues in Chennai
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Chennai offers excellent venue options across a wide range of styles. Popular choices include banquet halls in Nungambakkam, garden venues in Thiruvanmiyur, and resort spaces in the outskirts. Always visit the venue in person and ask about their decoration policies.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Decoration Checklist
            </h2>
            <div className="space-y-3">
              {[
                'Balloons (latex and foil)',
                'Banners and bunting',
                'Backdrop for photos',
                'Table centerpieces',
                'Entrance decor',
                'Lighting elements',
                'Cake table decoration',
                'Gift display area'
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 text-[#94A3B8]">
                  <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Return Gifts That Delight
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Return gifts can be simple or thoughtful. Popular options include personalized items, dry fruits packets, small toys, or photo frames. Most families appreciate practical gifts that remind them of the celebration.
            </p>
          </section>

          {/* Related Blogs */}
          <section className="mt-20 pt-16 border-t border-[#D4AF37]/10">
            <h3 className="text-2xl mb-8 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore More
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

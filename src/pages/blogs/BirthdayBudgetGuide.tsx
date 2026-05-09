import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';
import { ChevronRight, Clock, Palette } from 'lucide-react';

export default function BirthdayPlanningGuide() {
  const relatedBlogs = [
    { title: 'First Birthday Planning Guide', path: '/blogs/first-birthday' },
    { title: 'Top Birthday Themes', path: '/blogs/themes' },
    { title: 'Baby Shower Ideas', path: '/blogs/baby-shower' },
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
            Birthday Decoration Planning Guide:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">
              What Makes It Feel Truly Special?
            </span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            A polished guide to shaping a birthday celebration with style, atmosphere, and memorable details
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
              Celebration Styles Explained
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-8">
              Birthday celebrations can be shaped in many beautiful ways depending on the theme, guest list, venue mood, and styling details. Here are a few common directions to explore:
            </p>

            <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6 flex items-center gap-2">
                <Palette size={24} /> Classic and Charming
              </h3>
              <div className="space-y-3 text-[#94A3B8]">
                <div className="flex justify-between items-start">
                  <span>Venue</span>
                  <span className="text-right">Home, community space, or intimate hall</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Decorations</span>
                  <span className="text-right">Balloon clusters, soft drapes, and a simple backdrop</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Cake</span>
                  <span className="text-right">A clean, themed centerpiece cake</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Food</span>
                  <span className="text-right">Light snacks and family favorites</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Return Gifts</span>
                  <span className="text-right">Personalized tokens or practical keepsakes</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Details</span>
                  <span className="text-right">Candles, signage, and photo corners</span>
                </div>
                <div className="border-t border-[#D4AF37]/20 pt-3 mt-3 flex justify-between items-start font-semibold">
                  <span>Overall mood</span>
                  <span>Warm, intimate, and welcoming</span>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm mt-6">
                Best for: Smaller guest lists, cozy settings, and sweet family-focused celebrations
              </p>
            </div>

            <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6 flex items-center gap-2">
                <Palette size={24} /> Signature Celebration
              </h3>
              <div className="space-y-3 text-[#94A3B8]">
                <div className="flex justify-between items-start">
                  <span>Venue</span>
                  <span className="text-right">Banquet hall or styled event space</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Decorations</span>
                  <span className="text-right">Layered florals, custom backdrop, and accent lighting</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Cake</span>
                  <span className="text-right">Statement cake with coordinated styling</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Food</span>
                  <span className="text-right">A curated spread with crowd-pleasing options</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Return Gifts</span>
                  <span className="text-right">Thoughtful themed keepsakes</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Entertainment</span>
                  <span className="text-right">Games, music, or a small activity corner</span>
                </div>
                <div className="border-t border-[#D4AF37]/20 pt-3 mt-3 flex justify-between items-start font-semibold">
                  <span>Overall mood</span>
                  <span>Refined, lively, and memorable</span>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm mt-6">
                Best for: Medium guest lists, coordinated themes, and a polished event experience
              </p>
            </div>

            <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6 flex items-center gap-2">
                <Palette size={24} /> Luxe Experience
              </h3>
              <div className="space-y-3 text-[#94A3B8]">
                <div className="flex justify-between items-start">
                  <span>Venue</span>
                  <span className="text-right">Resort, premium hall, or destination venue</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Decorations</span>
                  <span className="text-right">Full floral styling, immersive backdrop, and feature pieces</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Cake</span>
                  <span className="text-right">Custom-designed centerpiece cake</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Food</span>
                  <span className="text-right">Multiple curated menu experiences</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Return Gifts</span>
                  <span className="text-right">Premium personalized keepsakes</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Entertainment</span>
                  <span className="text-right">Live performers, interactive setups, or premium games</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Photo Story</span>
                  <span className="text-right">Dedicated photography and video coverage</span>
                </div>
                <div className="border-t border-[#D4AF37]/20 pt-3 mt-3 flex justify-between items-start font-semibold">
                  <span>Overall mood</span>
                  <span>Elegant, immersive, and celebration-forward</span>
                </div>
              </div>
              <p className="text-[#94A3B8] text-sm mt-6">
                Best for: Grand celebrations, premium styling, and a highly curated guest experience
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Styling Ideas That Work Beautifully
            </h2>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Choose a season and timing that feels comfortable for your guests</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Keep one cohesive styling direction across decor, cake, and return gifts</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Opt for a time of day that suits your venue lighting and mood</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Pick themes that feel natural to your family story</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Keep the guest list balanced so the celebration feels warm and personal</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Add a few handmade touches alongside professional styling for character</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Planning Balance Best Practices
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              For any birthday party, focus on these planning priorities:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">Typical Focus Areas</h4>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>• Venue atmosphere</li>
                  <li>• Food and guest comfort</li>
                  <li>• Decorations and styling</li>
                  <li>• Cake and presentation</li>
                  <li>• Small finishing touches</li>
                </ul>
              </div>
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">Pro Tip</h4>
                <p className="text-[#94A3B8] text-sm">
                  Keep a little room in the plan for last-minute creative additions. Good planners build flexibility into their process.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Details to Watch For
            </h2>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Guest arrival flow at the venue</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Service timing and setup coordination</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Setup and wrap-up timelines</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Any extra styling requests beyond the original theme</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Last-minute additions or layout changes</span>
              </li>
            </ul>
          </section>

          {/* Related Blogs */}
          <section className="mt-20 pt-16 border-t border-[#D4AF37]/10">
            <h3 className="text-2xl mb-8 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Plan Your Perfect Party
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

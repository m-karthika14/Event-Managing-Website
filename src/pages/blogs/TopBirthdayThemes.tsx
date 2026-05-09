import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';
import { ChevronRight, Clock, Sparkles } from 'lucide-react';

export default function TopBirthdayThemes() {
  const themes = [
    { title: 'Candy Land', description: 'Vibrant pastels with candy-themed props, perfect for Instagram-worthy photos' },
    { title: 'Celestial/Twinkle Stars', description: 'Moon and stars with soft golds and silvers, elegant and timeless' },
    { title: 'Jungle Safari', description: 'Wild animals, green foliage, and earthy tones for an adventurous celebration' },
    { title: 'Minions Paradise', description: 'Yellow and black color scheme with funny minion cutouts kids love' },
    { title: 'Butterfly Garden', description: 'Colorful butterflies, flowers, and light pastels for a magical atmosphere' },
    { title: 'Customized Luxury', description: 'Bespoke themes tailored to your family story and preferences' },
  ];

  const relatedBlogs = [
    { title: 'First Birthday Planning Guide', path: '/blogs/first-birthday' },
    { title: 'Birthday Planning Guide', path: '/blogs/planning-guide' },
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
            Top 10 Trending Birthday{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">
              Decoration Themes
            </span>{' '}
            for Kids in Chennai
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Discover the most popular and Instagram-worthy themes that will make your child's birthday unforgettable
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 text-[#94A3B8] text-sm">
            <Clock size={16} /> 10 min read
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
            <h2 className="text-3xl mb-10 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Top Themes Loved by Chennai Families
            </h2>
            <div className="space-y-8">
              {themes.map((theme, idx) => (
                <div key={idx} className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                  <div className="flex gap-4">
                    <div className="text-4xl font-light text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-[#FAFAF9] mb-3">
                        {theme.title}
                      </h3>
                      <p className="text-[#94A3B8] leading-relaxed">
                        {theme.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Theme Matters
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              A well-executed theme transforms your venue and creates a cohesive, memorable celebration. It influences everything from decoration color palettes to cake design, photography backdrops, and even catering presentations. Parents consistently report that themed parties create stronger memories for their children.
            </p>
            <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 mb-6">
              <p className="text-[#D4AF37] font-medium mb-4 flex items-center gap-2">
                <Sparkles size={18} /> Pro Insight:
              </p>
              <p className="text-[#94A3B8]">
                Combining two complementary themes (like "Jungle Safari + Adventure") creates a unique, personalized celebration that stands out from typical parties. See our <Link to="/blogs/first-birthday" className="text-[#D4AF37] hover:underline font-medium">First Birthday Planning Guide</Link> for more ideas.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              2026 Trends: What's New?
            </h2>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Sustainable & eco-friendly decorations</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Personalized interactive elements</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Luxury minimalist themes</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Mixed cultural themes</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Theme Styling Variations
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Each theme can be styled in a simpler or more elaborate way. Candy Land and Minions work beautifully with playful decor, while Customized Luxury is ideal for a more personalized celebration. Learn more about <Link to="/blogs/first-birthday" className="text-[#D4AF37] hover:underline font-medium">birthday planning inspiration</Link> in our dedicated guide.
            </p>
          </section>

          {/* Related Blogs */}
          <section className="mt-20 pt-16 border-t border-[#D4AF37]/10">
            <h3 className="text-2xl mb-8 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Continue Reading
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

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';
import { ChevronRight, Clock, Lightbulb } from 'lucide-react';

export default function BlogsHub() {
  const blogs = [
    {
      title: 'Ultimate Guide to Planning a First Birthday Party in Chennai (2026)',
      path: '/blogs/first-birthday',
      description: 'Everything you need to know about planning your child\'s magical first birthday celebration',
      readTime: '8 min'
    },
    {
      title: 'Top 10 Trending Birthday Decoration Themes for Kids in Chennai',
      path: '/blogs/themes',
      description: 'Discover the most popular and Instagram-worthy themes that will make your child\'s birthday unforgettable',
      readTime: '10 min'
    },
    {
      title: 'Baby Shower Decoration Ideas in Chennai: Elegant, Traditional & Modern Themes',
      path: '/blogs/baby-shower',
      description: 'Celebrate the arriving bundle of joy with stunning baby shower decoration concepts',
      readTime: '9 min'
    },
    {
      title: 'Reception & Wedding Event Decoration Trends in Chennai',
      path: '/blogs/wedding-trends',
      description: 'Explore the latest wedding and reception decoration concepts that define luxury celebrations',
      readTime: '11 min'
    },
    {
      title: 'How to Choose the Best Event Planner in Chennai (Without Regret)',
      path: '/blogs/event-planner',
      description: 'A comprehensive guide to finding the perfect event planner that matches your vision',
      readTime: '10 min'
    },
    {
      title: 'Birthday Decoration Planning Guide: Creating a Premium Celebration in Chennai',
      path: '/blogs/planning-guide',
      description: 'A polished guide to styling a memorable birthday celebration with thoughtful details and elegant planning',
      readTime: '9 min'
    }
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
          <h1
            className="text-5xl md:text-7xl mb-6 text-[#FAFAF9] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Event Planning{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">
              Insights
            </span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Expert guides, tips, and trends to help you plan the perfect celebration
          </p>
        </motion.div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={blog.path} className="group h-full">
                <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 h-full hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10 flex flex-col">
                  <h3 className="text-2xl font-semibold text-[#FAFAF9] mb-4 group-hover:text-[#D4AF37] transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-[#94A3B8] mb-6 flex-grow leading-relaxed">
                    {blog.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#D4AF37]/10">
                    <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                      <Clock size={16} />
                      <span>{blog.readTime} read</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#0B1320] to-[#0A1118] border border-[#D4AF37]/20 rounded-3xl p-12 md:p-16"
        >
          <div className="flex gap-6 items-start">
            <Lightbulb size={40} className="text-[#D4AF37] flex-shrink-0 mt-2" />
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#FAFAF9] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Need Professional Help?
              </h2>
              <p className="text-[#94A3B8] leading-relaxed mb-6">
                Our expert event planning team is ready to bring your celebration vision to life. Whether you're planning a first birthday, baby shower, or wedding, we provide comprehensive planning and decoration services tailored to your style and goals.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0A1118] rounded-full font-semibold hover:bg-[#AA7C11] transition-colors">
                Get In Touch
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}

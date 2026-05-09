import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';
import { ChevronRight, Clock, CheckCircle } from 'lucide-react';

export default function ChooseBestEventPlanner() {
  const criteria = [
    { title: 'Verified Reviews', description: 'Look for testimonials on Google, Instagram, and wedding websites. Real clients provide honest feedback.' },
    { title: 'Professional Portfolio', description: 'Review past events. Quality photography and attention to detail speak volumes.' },
    { title: 'Transparent Planning', description: 'Detailed quotations with clear deliverables. A good planner keeps expectations easy to follow.' },
    { title: 'Customization Ability', description: 'They should listen to your vision and offer personalized solutions, not template events.' },
    { title: 'Timeline Discipline', description: 'Punctuality in meetings, planning, and execution. Reliability is non-negotiable.' },
    { title: 'Clear Communication', description: 'Regular updates, prompt responses, and transparent discussions about progress.' },
  ];

  const relatedBlogs = [
    { title: 'Wedding Decoration Trends', path: '/blogs/wedding-trends' },
    { title: 'Birthday Planning Guide', path: '/blogs/planning-guide' },
    { title: 'Top Birthday Themes', path: '/blogs/themes' },
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
            How to Choose the Best Event Planner in Chennai{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11]">
              (Without Regret)
            </span>
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive guide to finding the perfect event planner that matches your vision, style, and expectations
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
              6 Essential Criteria to Evaluate
            </h2>
            <div className="space-y-8">
              {criteria.map((item, idx) => (
                <div key={idx} className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-8 hover:border-[#D4AF37]/30 transition-all">
                  <div className="flex gap-4">
                    <CheckCircle size={28} className="text-[#D4AF37] flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-semibold text-[#FAFAF9] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[#94A3B8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Interview Process: What to Ask
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              During your consultation, ask these critical questions:
            </p>
            <ul className="space-y-3 text-[#94A3B8] mb-8">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>How many similar events have you executed?</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Who is my dedicated point of contact?</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>What are your payment terms and cancellation policy?</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>How do you handle unexpected situations?</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Can you provide references from recent clients?</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Red Flags to Watch Out For
            </h2>
            <div className="bg-[#0B1320]/50 border border-red-500/20 rounded-2xl p-8 mb-6">
              <ul className="space-y-3 text-[#94A3B8]">
                <li className="flex gap-3">
                  <ChevronRight size={20} className="text-red-500 flex-shrink-0" />
                  <span>Unwillingness to provide a written contract</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight size={20} className="text-red-500 flex-shrink-0" />
                  <span>Vague or constantly changing quotations</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight size={20} className="text-red-500 flex-shrink-0" />
                  <span>Poor communication or delayed responses</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight size={20} className="text-red-500 flex-shrink-0" />
                  <span>Reluctance to discuss customization or personal touches</span>
                </li>
                <li className="flex gap-3">
                  <ChevronRight size={20} className="text-red-500 flex-shrink-0" />
                  <span>No verifiable references or portfolio</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Planning Clarity: The Foundation of Trust
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The best event planners provide transparent, itemized quotations. Your plan should clearly cover:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Core Deliverables</h4>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>• Venue selection</li>
                  <li>• Decoration & setup</li>
                  <li>• Food & beverages</li>
                  <li>• Entertainment</li>
                </ul>
              </div>
              <div className="bg-[#0B1320]/50 border border-[#D4AF37]/10 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-[#D4AF37] mb-3">Additional Services</h4>
                <ul className="space-y-2 text-[#94A3B8] text-sm">
                  <li>• Photography/Videography</li>
                  <li>• Backup planning</li>
                  <li>• Planning & coordination</li>
                  <li>• Vendor management</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl mb-6 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Finding Planners in Chennai
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Start your search through:
            </p>
            <ul className="space-y-3 text-[#94A3B8]">
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Google reviews and verified ratings</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Instagram and professional portfolios</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Referrals from friends and family</span>
              </li>
              <li className="flex gap-3">
                <ChevronRight size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Wedding and event directories</span>
              </li>
            </ul>
          </section>

          {/* Related Blogs */}
          <section className="mt-20 pt-16 border-t border-[#D4AF37]/10">
            <h3 className="text-2xl mb-8 text-[#FAFAF9] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Plan Your Event?
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

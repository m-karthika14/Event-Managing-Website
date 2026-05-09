import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Star, Users, Award, Heart, CheckCircle } from 'lucide-react';
import { AboutOwner } from '../app/components/AboutOwner';
import { Footer } from '../app/components/Footer';

const companyValues = [
  {
    icon: Heart,
    title: 'Passion-Driven',
    description: 'Every event we craft is infused with genuine passion. We treat your celebration as if it were our own.',
  },
  {
    icon: Star,
    title: 'Attention to Detail',
    description: 'From the centrepiece to the timeline, no detail is too small. Perfection is our standard.',
  },
  {
    icon: Users,
    title: 'Client-First',
    description: 'Your vision leads the way. We listen deeply and translate your dreams into reality.',
  },
  {
    icon: Award,
    title: 'Award-Winning',
    description: 'Recognised by the South Indian Talent Awards as Innovative Birthday Planners.',
  },
];

const milestones = [
  { number: '100+', label: 'Events Curated' },
  { number: '9+', label: 'Years of Excellence' },
  { number: '500+', label: 'Happy Families' },
  { number: '1', label: 'Passionate Team' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A1118] text-white">
      {/* Page Header */}
      <div className="relative pt-44 pb-16 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/[0.04] to-transparent pointer-events-none" />
        <motion.h1
          className="text-5xl md:text-7xl text-[#FAFAF9] tracking-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAF9] via-[#D4AF37] to-[#AA7C11] italic">
            Us
          </span>
        </motion.h1>
        <motion.p
          className="text-[#94A3B8] text-lg max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We are Chennai's premier event curation studio — turning life's most precious moments into timeless memories.
        </motion.p>
      </div>

      {/* Founder Section */}
      <AboutOwner />

      {/* Company Section */}
      <div className="bg-[#0A1118] pt-16 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">

          {/* Section Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6 px-6 py-2 border border-[#D4AF37]/20 rounded-full"
            >
              <span className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs font-medium">Who We Are</span>
            </motion.div>
            <h2
              className="text-4xl md:text-6xl text-[#FAFAF9] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] italic">
                BookMeEvents
              </span>{' '}
              Story
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Born from a love of celebration and an eye for beauty, BookMeEvents was founded to make every event feel extraordinary — regardless of size or budget.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              className="p-10 rounded-3xl border border-[#D4AF37]/10 bg-[#0B1320] relative overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/[0.03] rounded-full blur-[60px]" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <Target className="text-[#D4AF37]" size={22} />
                </div>
                <h3 className="text-2xl text-[#FAFAF9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Mission
                </h3>
              </div>
              <p className="text-[#94A3B8] leading-relaxed font-light text-base">
                To craft personalised, meaningful celebrations that reflect each client's unique story. We combine creative vision with flawless execution so that every event is not just planned — it is felt.
              </p>
            </motion.div>

            <motion.div
              className="p-10 rounded-3xl border border-[#D4AF37]/10 bg-[#0B1320] relative overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/[0.03] rounded-full blur-[60px]" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                  <Eye className="text-[#D4AF37]" size={22} />
                </div>
                <h3 className="text-2xl text-[#FAFAF9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Vision
                </h3>
              </div>
              <p className="text-[#94A3B8] leading-relaxed font-light text-base">
                To be South India's most trusted event curation brand — known for transforming spaces into art, and occasions into lifelong memories that families treasure for generations.
              </p>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {milestones.map((m, i) => (
              <div
                key={i}
                className="text-center py-10 px-6 rounded-3xl border border-[#D4AF37]/10 bg-[#0B1320]"
              >
                <div
                  className="text-5xl font-light text-[#FAFAF9] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.number}
                </div>
                <div className="text-xs text-[#94A3B8] uppercase tracking-widest leading-relaxed">
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Values Grid */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h3
              className="text-3xl md:text-4xl text-[#FAFAF9] text-center mb-12"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Stand For
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={i}
                    className="p-8 rounded-3xl border border-[#D4AF37]/10 bg-[#0B1320] hover:border-[#D4AF37]/30 transition-colors duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                      <Icon className="text-[#D4AF37]" size={22} />
                    </div>
                    <h4 className="text-lg text-[#FAFAF9] mb-3 font-medium">{val.title}</h4>
                    <p className="text-[#94A3B8] text-sm leading-relaxed font-light">{val.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* What We Offer Strip */}
          <motion.div
            className="p-10 rounded-3xl border border-[#D4AF37]/10 bg-[#0B1320]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <h3
              className="text-3xl text-[#FAFAF9] mb-8 text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What We Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Birthday Celebrations',
                'Weddings & Receptions',
                'Engagement Ceremonies',
                'Baby Showers',
                'Sangeeth Nights',
                'Custom & Corporate Events',
              ].map((service, i) => (
                <div key={i} className="flex items-center gap-3 text-[#94A3B8] font-light">
                  <CheckCircle className="text-[#D4AF37] shrink-0" size={18} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

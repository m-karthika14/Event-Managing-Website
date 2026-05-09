import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-[#0A1118] text-white">
      {/* Hero */}
      <div className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* hero background image removed to match BirthdayPage */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/4 left-[-120px] w-[650px] h-[650px] bg-[#D4AF37]/[0.02] rounded-full pointer-events-none" />
        <div className="relative z-10 w-full px-6 pt-36 pb-16">
          <div className="max-w-[1600px] mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#FAFAF9] tracking-widest font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
              Wedding Planner
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#D4AF37] text-[#0A1118] font-medium rounded-full shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                Plan your Wedding
              </Link>
              <Link to="/services" className="px-8 py-4 border border-[#D4AF37]/30 text-[#FAFAF9] font-medium rounded-full hover:border-[#D4AF37]/60 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Magazine Style Content */}
      <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Elegant Wedding Experiences
              </h2>
              <p className="mt-6 text-[#94A3B8] font-light leading-relaxed tracking-wide text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                We design weddings that reflect your story, blending tradition with modern elegance to create unforgettable celebrations.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/10 bg-[#0B1320] w-full max-w-[513px] md:max-w-[593px] lg:max-w-[673px] mx-auto h-auto md:h-[420px]">
                <img
                  src="/wedding1.jpg"
                  alt="Wedding 1"
                  className="block w-full h-auto md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
                  draggable={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0B1320] border-y border-[#D4AF37]/10 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 lg:order-1">
              <div className="relative rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/10 bg-[#0A1118] w-full max-w-[513px] md:max-w-[593px] lg:max-w-[673px] mx-auto h-auto md:h-[420px]">
                <img
                  src="/wedding2.jpg"
                  alt="Wedding 2"
                  className="block w-full h-auto md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
                  draggable={false}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
            <div className="lg:col-span-5 lg:order-2">
              <h2 className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Seamless Planning
              </h2>
              <p className="mt-6 text-[#94A3B8] font-light leading-relaxed tracking-wide text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                From décor to timelines, we orchestrate every detail so you can stay present, calm, and completely in love with the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl text-[#FAFAF9] font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
              From Sangeet to Haldi, weddings to receptions — we curate every celebration with care and elegance.
            </p>
          </div>

          {/* wedding image cards removed per request */}
        </div>
      </section>

      <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0B1320] p-12 md:p-16">
            <div className="absolute top-[-200px] right-[-200px] w-[520px] h-[520px] bg-[#D4AF37]/[0.02] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <h2
                className="text-3xl md:text-5xl text-[#FAFAF9] tracking-widest font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Plan Your Wedding Event
              </h2>
              <p
                className="mt-6 max-w-[820px] text-[#94A3B8] font-light leading-relaxed tracking-wide text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Share your date, venue, and theme idea — we’ll handle the rest.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-[#D4AF37] text-[#0A1118] font-medium rounded-full shadow-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Inquire Now
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 border border-[#D4AF37]/30 text-[#FAFAF9] font-medium rounded-full hover:border-[#D4AF37]/60 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Back to Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

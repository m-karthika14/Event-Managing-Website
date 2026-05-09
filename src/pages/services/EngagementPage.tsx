import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../app/components/Footer';

export default function EngagementPage() {
  // Engagement page disabled per request — kept below for reference as dormant code.
  if (false) {
    return (
      <div className="min-h-screen bg-[#0A1118] text-white">
        <div className="relative min-h-[70vh] flex items-end overflow-hidden">
          {/* hero background image removed to match BirthdayPage */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute top-1/4 left-[-120px] w-[650px] h-[650px] bg-[#D4AF37]/[0.02] rounded-full pointer-events-none" />
          <div className="relative z-10 w-full px-6 pt-36 pb-16">
            <div className="max-w-[1600px] mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#FAFAF9] tracking-widest font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                Engagement
              </h1>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-[#D4AF37] text-[#0A1118] font-medium rounded-full shadow-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Inquire
                </Link>
                <Link to="/services" className="px-8 py-4 border border-[#D4AF37]/30 text-[#FAFAF9] font-medium rounded-full hover:border-[#D4AF37]/60 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Back to Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A First Chapter Worth Framing
                </h2>
                <p className="mt-6 text-[#94A3B8] font-light leading-relaxed tracking-wide text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We set the scene for a refined engagement — elegant florals, modern textures, and a warm glow that feels intimate.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/10 bg-[#0B1320]">
                  <img src="/real_events/real_event_1_1772991711482.png" alt="" className="h-[420px] w-full object-cover" loading="lazy" decoding="async" />
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
                <div className="relative rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/10 bg-[#0A1118]">
                  <img src="/slider4.jpg" alt="" className="h-[420px] w-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
              <div className="lg:col-span-5 lg:order-2">
                <h2 className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Styled for Photos
                </h2>
                <p className="mt-6 text-[#94A3B8] font-light leading-relaxed tracking-wide text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Clean backdrops, perfect proportions, and premium finishes — so every frame feels editorial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Warm, Romantic Details
                </h2>
                <p className="mt-6 text-[#94A3B8] font-light leading-relaxed tracking-wide text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Soft lighting, layered textures, and florals that feel effortless — curated to match your vibe.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="relative rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/10 bg-[#0B1320]">
                  <img src="/slider2.jpg" alt="" className="h-[420px] w-full object-cover" loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return null;
}

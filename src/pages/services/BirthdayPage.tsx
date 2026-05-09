import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Palette, Wand2, Clock4, Crown, HeartHandshake, ShieldCheck } from 'lucide-react';
import { Footer } from '../../app/components/Footer';

type ThemeCard = {
  name: string;
  image: string;
};

const featuredThemes: ThemeCard[] = [
  { name: 'Candy', image: '/candy.webp' },
  { name: 'Celestial', image: '/celestial.webp' },
  { name: 'Teddy Hug', image: '/teddyhug.webp' },
  { name: 'Green Nature', image: '/naturetheme.webp' },
  { name: 'Jungle Safari', image: '/jungle safari.webp' },
  { name: 'Aqua', image: '/aqua1.jpg' },
  { name: 'Minion', image: '/minions.png' },
  { name: 'Lion King', image: '/lionn kinf.jpg' },
];

const galleryImages = [
  '/mom1.png',
  '/mom2.png',
  '/mom3.png',
  '/mom4.png',
  '/mom5.png',
  '/mom6.png',
  '/mom7.png',
  '/mom8.png',
  '/mom9.png',
];

export default function BirthdayPage() {
  return (
    <div className="min-h-screen bg-[#0A1118] text-white">
      {/* Hero */}
      <div className="relative min-h-[78vh] flex items-end overflow-hidden">
        {/* SVG filters (hidden) */}
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
          <filter id="sharpen">
            <feConvolveMatrix order="3" kernelMatrix="0 -1 0 -1 5 -1 0 -1 0" divisor="1" />
          </filter>
        </svg>
        {/* hero background image removed per request */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-1/4 left-[-120px] w-[650px] h-[650px] bg-[#D4AF37]/[0.02] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full px-6 pt-36 pb-16">
          <div className="max-w-[1600px] mx-auto">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl text-[#FAFAF9] tracking-widest font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Make Birthdays Magical
            </h1>
            <p
              className="mt-6 max-w-[800px] text-[#E2E8F0] font-light leading-relaxed tracking-wide text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Creative themes. Beautiful setups. Unforgettable memories.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#D4AF37] text-[#0A1118] font-medium rounded-full shadow-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Plan Your Birthday Event
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-[#D4AF37]/30 text-[#FAFAF9] font-medium rounded-full hover:border-[#D4AF37]/60 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 – Featured Themes */}
      <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between gap-8 flex-wrap">
            <div className="max-w-[760px]">
              <p
                className="text-3xl uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-bold"
                style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 3px 12px rgba(212,175,55,0.55)' }}
              >
                Featured Themes
              </p>
              <h2
                className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Signature looks that feel like a dream
              </h2>
            </div>
            {/* 'Hover to preview. Click to book.' removed per request */}
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredThemes.map((theme) => (
              <div
                key={theme.name}
                className="group rounded-[2rem] overflow-hidden border border-[#D4AF37]/10 bg-[#0B1320] hover:border-[#D4AF37]/35 transition-all duration-500"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={theme.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p
                      className="text-lg text-[#FAFAF9] tracking-widest font-bold"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        textShadow: '0 2px 8px rgba(212,175,55,0.95), 0 0 20px rgba(212,175,55,0.6)',
                      }}
                    >
                      {theme.name}
                    </p>
                    {/* underline removed as requested */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 – Custom Themes */}
      <section className="py-20 px-6 bg-[#0B1320] border-y border-[#D4AF37]/10 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-[900px]">
            <p
              className="text-3xl uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-bold"
              style={{ fontFamily: "'Inter', sans-serif", textShadow: '0 3px 12px rgba(212,175,55,0.55)' }}
            >
              Customized Themes
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your idea, our craft
            </h2>
            <p
              className="mt-6 text-[#94A3B8] font-light leading-relaxed tracking-wide text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Have something unique in mind? We design events tailored just for you.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Palette, title: 'Sketch', text: 'Moodboards, references, and a quick concept.' },
              { icon: Wand2, title: 'Design', text: 'Theme styling, materials, and layout planning.' },
              { icon: Sparkles, title: 'Execution', text: 'On-time setup with premium finishing.' },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-[#D4AF37]/10 bg-[#0A1118] p-10 hover:border-[#D4AF37]/30 transition-colors"
              >
                <step.icon className="text-[#D4AF37]" size={26} />
                <h3
                  className="mt-6 text-2xl text-[#FAFAF9] tracking-widest font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-4 text-[#94A3B8] font-light leading-relaxed tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 – Gallery */}
      <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="max-w-[900px] mx-auto text-center">
            <p
              className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Gallery
            </p>
            <h2
              className="text-3xl md:text-4xl text-[#FAFAF9] tracking-widest font-light"
              style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 2px 10px rgba(212,175,55,0.25)' }}
            >
              Moments worth remembering
            </h2>
          </div>

          {/* 3x3 grid matching reference proportions: top large, middle short, bottom medium */}
          {/* Simple uniform 3x3 grid */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
            {galleryImages.slice(0, 9).map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="rounded-[2rem] overflow-hidden border border-[#D4AF37]/10 bg-[#0B1320]"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – Why Choose Us removed per request. */}

      {/* Section 5 – CTA */}
      <section className="py-20 px-6 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D4AF37]/10 bg-[#0B1320] p-12 md:p-16">
            <div className="absolute top-[-200px] right-[-200px] w-[520px] h-[520px] bg-[#D4AF37]/[0.02] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <h2
                className="text-3xl md:text-5xl text-[#FAFAF9] tracking-widest font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Plan Your Birthday Event
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

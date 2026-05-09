import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../app/components/Footer';
import { ChevronRight } from 'lucide-react';

type ServiceCategory = {
  title: string;
  href: string;
  image: string;
};

const categories: ServiceCategory[] = [
  { title: 'Birthday Planner', href: '/services/birthday', image: '/cus2.jpg' },
  // Engagement card removed per request:
  // { title: 'Engagement', href: '/services/engagement', image: '/slider2.jpg' },
  { title: 'Reception', href: '/services/reception', image: '/recep2.png' },
  { title: 'Wedding Planner', href: '/services/wedding', image: '/recep1.png' },
  { title: 'Baby Shower Decoration', href: '/services/baby-shower', image: '/bs1.png' },
  // Sangeeth card commented out per request:
  // { title: 'Sangeeth', href: '/services/sangeeth', image: '/two.jpg' },
  { title: 'Custom Events', href: '/services/custom-events', image: '/cutom.png' },
];

function FlipServiceCard({ title, href, image }: ServiceCategory) {
  const [transform, setTransform] = React.useState('rotateX(0deg) rotateY(0deg) scale(1)');

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotY = ((x - cx) / cx) * 16; // increased tilt range
    const rotX = -((y - cy) / cy) * 16;
    setTransform(`rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`);
  };

  const handleLeave = () => setTransform('rotateX(0deg) rotateY(0deg) scale(1)');

  return (
    <Link
      to={href}
      aria-label={`View ${title}`}
      className="block w-full md:w-1/2 lg:w-[360px] focus-visible:outline-none"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="relative h-[340px] rounded-[2.5rem] overflow-hidden [perspective:1000px]">
        <div
          className="absolute inset-0 will-change-transform transform-gpu transition-transform duration-300 shadow-lg"
          style={{ transform, transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-[#D4AF37]/10 bg-white/5 backdrop-blur-sm">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover will-change-transform"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/6 backdrop-blur-sm border border-white/10 rounded-full flex items-center gap-3">
              <span className="text-2xl md:text-xl text-black font-medium tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</span>
              <ChevronRight size={18} className="text-[#D4AF37]" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  // Desktop keeps the wrapped grid; mobile uses a vertical stack.

  return (
    <div className="min-h-screen bg-[#0A1118] text-black">
      <div className="relative overflow-hidden">
        <div className="absolute top-1/4 left-[-200px] w-[700px] h-[700px] bg-[#D4AF37]/[0.02] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-250px] right-[-200px] w-[800px] h-[800px] bg-[#D4AF37]/[0.02] rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto pt-[calc(4.5rem+2cm)] md:pt-[calc(7rem+2cm)] pb-24 px-6 relative z-10">
          <header className="max-w-[900px] animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl text-white tracking-widest font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Services
            </h1>
            <p
              className="mt-4 text-white font-light leading-relaxed tracking-wide text-md md:text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Thoughtfully designed celebrations for every special moment.
            </p>
          </header>

          {/* Mobile: vertical stack. Desktop: unique 3 + 2 grid. */}
          <div className="mt-8 md:mt-16 flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-10 md:overflow-visible md:whitespace-normal py-2 md:py-0">
            {categories.map((category) => (
              <div key={category.href} className="w-full flex justify-center md:block md:px-0 md:py-0">
                <div className="w-full max-w-[360px] md:w-auto md:max-w-[360px] md:inline-flex md:align-top">
                  <FlipServiceCard {...category} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

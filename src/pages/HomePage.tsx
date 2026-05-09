import React from 'react';
import { Loader } from '../app/components/Loader';
import { CustomCursor } from '../app/components/CustomCursor';
import { Cass } from '../app/components/Cass';
import { HeroCarousel } from '../app/components/HeroCarousel';
import { Press } from '../app/components/Press';
import { Philosophy } from '../app/components/Philosophy';
import { ProjectsGallery } from '../app/components/ProjectsGallery';
import { Testimonials } from '../app/components/Testimonials';
import { AboutOwner } from '../app/components/AboutOwner';
import { Inquiry } from '../app/components/Inquiry';
import { Footer } from '../app/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A1118] no-transitions">
      <Loader />
      <CustomCursor />
      <Cass />
      <HeroCarousel />
      <Press />
      <Philosophy />
      {/* Services section commented out per request: <Services /> */}
      <ProjectsGallery />
      <Testimonials />
      <AboutOwner />
      <Inquiry />
      <Footer />
    </div>
  );
}

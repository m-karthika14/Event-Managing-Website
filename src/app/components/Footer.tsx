
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, X } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A1118] text-[#FAFAF9] py-20 md:py-24 px-4 sm:px-6 relative border-t border-[#D4AF37]/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Brand */}
          <div className="lg:pr-12">
            <motion.h3
              className="text-4xl mb-6 text-[#FAFAF9] tracking-widest font-light"
              style={{ fontFamily: "'Playfair Display', serif" }}
              whileHover={{ x: 5 }}
            >
              Book<span className="italic text-[#D4AF37]">Mevents</span>
            </motion.h3>
            <p className="text-[#94A3B8] font-light leading-relaxed tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              Architecting luxury celebrations and timeless masterpieces for an exclusive clientele since 2016.
            </p>
            <motion.a
              href="https://share.google/kBUYLH3trA9Up78Qu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-6 px-6 py-3 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-medium whitespace-nowrap hover:bg-[#D4AF37] hover:text-[#0A1118] transition-colors"
              whileHover={{ y: -1 }}
            >
              View on Google Maps
            </motion.a>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-[2cm]">
            <h4 className="text-sm tracking-[0.3em] uppercase mb-8 text-[#D4AF37] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Discover
            </h4>
            <ul className="space-y-4 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'ContactUs' },
                { href: '/about', label: 'AboutUs' },
                { href: '/blogs', label: 'All Blogs' },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-[#E2E8F0] font-light tracking-wide hover:text-[#D4AF37] transition-colors relative group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Combined Resources (stacked) */}
          <div className="lg:col-span-1 lg:ml-[2cm]">
            <h4 className="text-sm tracking-[0.3em] uppercase mb-8 text-[#D4AF37] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Resources
            </h4>
            <ul className="space-y-3 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              {[
                { href: '/blogs/first-birthday', label: 'First Birthday' },
                { href: '/blogs/themes', label: 'Birthday Themes' },
                { href: '/blogs/baby-shower', label: 'Baby Shower' },
                { href: '/blogs/wedding-trends', label: 'Wedding Trends' },
                { href: '/blogs/event-planner', label: 'Choose Planner' },
                { href: '/blogs/planning-guide', label: 'Planning Guide' },
              ].map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    className="text-[#E2E8F0] font-light tracking-wide hover:text-[#D4AF37] transition-colors relative group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:ml-[2cm] lg:col-span-2">
            <h4 className="text-sm tracking-[0.3em] uppercase mb-8 text-[#D4AF37] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Connect
            </h4>
            <ul className="space-y-6 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li className="flex items-start gap-4 text-[#E2E8F0] font-light tracking-wide group hover:text-[#D4AF37] transition-colors">
                <Phone size={18} className="mt-0.5 text-[#94A3B8] group-hover:text-[#D4AF37] transition-colors flex-shrink-0" />
                <a href="https://wa.me/919176710686" target="_blank" rel="noreferrer" className="relative z-10 hover:text-[#D4AF37] text-base md:text-lg leading-none">
                  +91 91767 10686
                </a>
              </li>
              {/* Mail to be added later - commented out for spacing adjustments */}
              {false && (
                <li className="flex items-center gap-4 text-[#E2E8F0] font-light tracking-wide group hover:text-[#D4AF37] transition-colors">
                  <Mail size={18} className="text-[#94A3B8] group-hover:text-[#D4AF37] transition-colors" />
                  <span>concierge@bookmevents.com</span>
                </li>
              )}
              <li className="flex items-start gap-4 text-[#E2E8F0] font-light tracking-wide group hover:text-[#D4AF37] transition-colors">
                <MapPin size={18} className="mt-1 text-[#94A3B8] group-hover:text-[#D4AF37] transition-colors flex-shrink-0" />
                <span className="leading-relaxed md:text-[15px] max-w-[52ch]">5/22 vinobajii, 3rd Cross Rd, Kamarajar Nagar, NGO Colony, Choolaimedu, Chennai, Tamil Nadu 600094</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="hidden lg:block lg:ml-[2cm] lg:col-span-1">
            <h4 className="text-sm tracking-[0.3em] uppercase mb-8 text-[#D4AF37] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Follow
            </h4>
            <div className="flex flex-col gap-4 items-start">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/bookmevents?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
                { icon: Facebook, href: 'https://www.facebook.com/bookmevents' },
                { icon: X, href: 'https://www.threads.com/@bookmevents' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 border border-[#D4AF37]/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1118] hover:border-[#D4AF37] transition-all duration-300 text-[#94A3B8]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Social Icons */}
        <div className="lg:hidden flex flex-col gap-4 mb-10 md:mb-12 items-start">
          {[
            { icon: Instagram, href: 'https://www.instagram.com/bookmevents?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
            { icon: Facebook, href: 'https://www.facebook.com/bookmevents' },
            { icon: X, href: 'https://www.threads.com/@bookmevents' },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 border border-[#D4AF37]/20 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0A1118] hover:border-[#D4AF37] transition-all duration-300 text-[#94A3B8]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-[#94A3B8]" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>© {new Date().getFullYear()} BookMevents. All rights reserved.</p>
          <div />
        </div>
      </div>
    </footer>
  );
}

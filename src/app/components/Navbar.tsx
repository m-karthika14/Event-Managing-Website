import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, Phone, X } from 'lucide-react';

export function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'ContactUs' },
    { to: '/about', label: 'AboutUs' },
    { to: '/blogs', label: 'Blogs' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
      {/* Logo */}
      <Link to="/">
        <img
          src="/logo.png"
          alt="BookMeEvents Logo"
          className="w-24 h-auto object-contain"
          draggable={false}
        />
      </Link>

      {/* Nav links — absolutely centred so they sit in the true middle of the bar */}
      <ul className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              end
              className={({ isActive }) =>
                `tracking-widest text-sm font-medium transition-colors duration-300 ${isActive ? 'text-[#D4AF37]' : 'text-white/80 hover:text-[#D4AF37]'}`
              }
            >
              <motion.span whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
                {l.label}
              </motion.span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right side: phone + Book Now */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="tel:+919176710686"
          className="hidden sm:flex items-center gap-2 text-[#94A3B8] hover:text-[#D4AF37] transition-colors text-sm tracking-wide"
        >
          <Phone size={14} className="text-[#D4AF37]" />
          +91 91767 10686
        </a>

        <motion.button
          onClick={() => navigate('/contact')}
          className="px-5 py-2 rounded-full bg-[#D4AF37] text-[#0A1118] text-xs font-semibold tracking-widest uppercase hover:bg-[#AA7C11] transition-colors"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Book Now
        </motion.button>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-sm transition-colors hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileMenuOpen ? (
        <div className="absolute left-4 right-4 top-full z-50 mt-3 md:hidden">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#0B1320]/95 px-4 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-3 text-sm tracking-widest transition-colors ${isActive ? 'bg-white/8 text-[#D4AF37]' : 'text-white/85 hover:bg-white/5 hover:text-[#D4AF37]'}`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;

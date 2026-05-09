import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import BirthdayPage from '../pages/services/BirthdayPage';
import WeddingPage from '../pages/services/WeddingPage';
import EngagementPage from '../pages/services/EngagementPage';
import ReceptionPage from '../pages/services/ReceptionPage';
import BabyShowerPage from '../pages/services/BabyShowerPage';
import SangeethPage from '../pages/services/SangeethPage';
import CustomEventsPage from '../pages/services/CustomEventsPage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import BlogsHub from '../pages/blogs/index';
import FirstBirthdayGuide from '../pages/blogs/FirstBirthdayGuide';
import TopBirthdayThemes from '../pages/blogs/TopBirthdayThemes';
import BabyShowerDecoration from '../pages/blogs/BabyShowerDecoration';
import WeddingReceptionTrends from '../pages/blogs/WeddingReceptionTrends';
import ChooseBestEventPlanner from '../pages/blogs/ChooseBestEventPlanner';
import BirthdayPlanningGuide from '../pages/blogs/BirthdayBudgetGuide';

const WHATSAPP_NUMBER = '919176710686';

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{ cursor: 'pointer' }}
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 bg-[#25D366]"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.77L0 32l8.454-2.01A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.765-1.849l-.485-.287-5.02 1.194 1.215-4.9-.317-.503A13.29 13.29 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.199-.266.398-1.03 1.295-1.263 1.561-.232.266-.465.299-.863.1-.398-.2-1.68-.619-3.2-1.975-1.183-1.055-1.98-2.358-2.213-2.756-.232-.398-.025-.614.175-.812.18-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.2-.897-2.163-1.23-2.962-.323-.778-.651-.673-.897-.685l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.322 0 1.96 1.427 3.854 1.626 4.12.2.266 2.809 4.288 6.806 5.849.951.366 1.693.584 2.272.748.954.271 1.823.232 2.51.141.766-.102 2.355-.963 2.688-1.893.332-.93.332-1.728.232-1.894-.099-.165-.365-.265-.763-.464z"/>
      </svg>
    </a>
  );
}

function PopupForm() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', event: '', date: '' });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi! I'd like to enquire about an event.%0AName: ${form.name}%0APhone: ${form.phone}%0AEvent: ${form.event}%0ADate: ${form.date}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) setVisible(false); }}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-[#D4AF37]/20 bg-[#0B1320] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
        style={{ animation: 'popupIn 0.4s cubic-bezier(0.25,0.4,0.25,1)' }}
      >
        <style>{`@keyframes popupIn { from { opacity:0; transform:scale(0.92) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }`}</style>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-[#94A3B8] transition-colors"
          style={{ cursor: 'pointer' }}
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">🎉</div>
            <p className="text-[#FAFAF9] text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Thank you!</p>
            <p className="text-[#94A3B8] mt-2 text-sm">We'll connect with you shortly.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <span className="inline-block px-4 py-1 border border-[#D4AF37]/20 rounded-full text-[#D4AF37] text-xs uppercase tracking-widest mb-3">
                Let's Plan Together
              </span>
              <h3 className="text-2xl text-[#FAFAF9]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Curate Your Event
              </h3>
              <p className="text-[#94A3B8] text-sm mt-1 font-light">
                Tell us about your dream celebration.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FAFAF9] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FAFAF9] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
              />
              <select
                required
                value={form.event}
                onChange={(e) => setForm({ ...form, event: e.target.value })}
                className="w-full bg-[#0B1320] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
                style={{ color: form.event ? '#FAFAF9' : '#94A3B8' }}
              >
                <option value="" disabled>Type of Event</option>
                <option value="Birthday">Birthday</option>
                <option value="Wedding">Wedding</option>
                <option value="Engagement">Engagement</option>
                <option value="Reception">Reception</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Sangeeth">Sangeeth</option>
                <option value="Custom Event">Custom Event</option>
              </select>
              <input
                type="text"
                placeholder="Event Date (optional)"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#FAFAF9] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-black font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity"
                style={{ cursor: 'pointer' }}
              >
                Send via WhatsApp
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-[#0A1118]">
      <Loader />
      <CustomCursor />
      <Navbar />
      <Outlet />
      <WhatsAppButton />
      <PopupForm />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/birthday" element={<BirthdayPage />} />
          <Route path="/services/wedding" element={<WeddingPage />} />
          <Route path="/services/engagement" element={<EngagementPage />} />
          <Route path="/services/reception" element={<ReceptionPage />} />
          <Route path="/services/baby-shower" element={<BabyShowerPage />} />
          <Route path="/services/sangeeth" element={<SangeethPage />} />
          <Route path="/services/custom-events" element={<CustomEventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsHub />} />
          <Route path="/blogs/first-birthday" element={<FirstBirthdayGuide />} />
          <Route path="/blogs/themes" element={<TopBirthdayThemes />} />
          <Route path="/blogs/baby-shower" element={<BabyShowerDecoration />} />
          <Route path="/blogs/wedding-trends" element={<WeddingReceptionTrends />} />
          <Route path="/blogs/event-planner" element={<ChooseBestEventPlanner />} />
          <Route path="/blogs/planning-guide" element={<BirthdayPlanningGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

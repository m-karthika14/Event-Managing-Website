import React, { useState } from "react";
import { motion } from "motion/react";
import { Footer } from "../app/components/Footer";

const WHATSAPP_NUMBER = "919176710686";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", eventType: "", eventDate: "" });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const text =
      "Hi BookMeEvents! I'd like to enquire about an event.\n\n" +
      "Name: " + form.name + "\n" +
      "Phone: " + form.phone + "\n" +
      "Event Type: " + form.eventType + "\n" +
      "Event Date: " + (form.eventDate || "TBD");
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
  };

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-[900px] mx-auto py-24 px-6">
        <div className="py-32 px-6 bg-[#0A1118] relative">
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="border border-[#D4AF37]/20 backdrop-blur-md p-12 md:p-20 rounded-[2rem]"
            >
              <span className="inline-block px-6 py-2 border border-[#D4AF37]/20 text-[#D4AF37] uppercase tracking-[0.3em] rounded-full text-[10px] font-medium mb-10">
                Best Event Managers in Chennai
              </span>

              <h2
                className="text-4xl md:text-6xl text-[#FAFAF9] tracking-widest font-light mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Contact Us
              </h2>

              <p
                className="text-[#94A3B8] font-light leading-relaxed tracking-wide mb-12 max-w-lg mx-auto text-sm md:text-base"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Let&apos;s create a celebration that feels truly special. Book your date with us.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 text-left">
                <div className="relative">
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#D4AF37]/30 py-4 text-sm text-[#FAFAF9] placeholder-[#94A3B8] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div className="relative">
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-[#D4AF37]/30 py-4 text-sm text-[#FAFAF9] placeholder-[#94A3B8] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
                <div className="relative">
                  <select
                    required
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full bg-[#0A1118] border-b border-[#D4AF37]/30 py-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                    style={{ fontFamily: "'Inter', sans-serif", color: form.eventType ? "#FAFAF9" : "#94A3B8" }}
                  >
                    <option value="" disabled>Event Type</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Reception">Reception</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Sangeeth">Sangeeth</option>
                    <option value="Custom Event">Custom Event</option>
                  </select>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Estimated Event Date"
                    value={form.eventDate}
                    onChange={(e) => setForm({ ...form, eventDate: e.target.value })}
                    className="w-full bg-transparent border-b border-[#D4AF37]/30 py-4 text-sm text-[#FAFAF9] placeholder-[#94A3B8] focus:outline-none focus:border-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-8 px-12 py-5 bg-[#FAFAF9] text-[#0A1118] rounded-full font-medium tracking-widest uppercase text-[10px]"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

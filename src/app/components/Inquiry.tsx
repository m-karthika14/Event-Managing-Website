import { useState } from "react";

const WHATSAPP_NUMBER = "919176710686";

export function Inquiry({ transparentCard }: { transparentCard?: boolean }) {
  const cardBgClass = transparentCard ? "" : "bg-[#121C2D]/60";
  const [form, setForm] = useState({ name: "", phone: "", eventInfo: "" });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const text =
      "Hi BookMeEvents! I'd like to enquire about an event.\n\n" +
      "Name: " + form.name + "\n" +
      "Phone: " + form.phone + "\n" +
      "Event Details: " + form.eventInfo;
    window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
  };

  return (
    <div className="py-32 px-6 bg-[#0A1118] relative border-t border-[#D4AF37]/10">
      <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtcGFnbmUlMjBnbGFzc2VzJTIwZGFya3xlbnwxfHx8fDE3NzM3NjE1NTN8MA&ixlib=rb-4.1.0&q=80&w=1920')" }} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className={"border border-[#D4AF37]/20 " + cardBgClass + " backdrop-blur-md p-12 md:p-20 rounded-[2rem]"}>
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
              <input
                required
                type="text"
                placeholder="Proposed Event Type & Estimated Date"
                value={form.eventInfo}
                onChange={(e) => setForm({ ...form, eventInfo: e.target.value })}
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
        </div>
      </div>
    </div>
  );
}

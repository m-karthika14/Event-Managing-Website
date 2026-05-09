import { useEffect, useState } from "react";

export function Cass() {
  const images = [
    "/slider1.jpg",
    "/slider2.jpg",
    "/slider3.jpg",
    "/slider4.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <section
      id="cass"
      className="relative h-screen w-full overflow-hidden bg-[#0A1118]"
    >
      {/* Carousel: all images stacked, fade in/out with opacity transitions */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            i === index ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
          draggable={false}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Centered blended splash overlay (behind text, above images) */}
      <div className="absolute inset-0 z-25 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] md:w-[60%] lg:w-[50%] h-[40%] md:h-[30%] rounded-full bg-gradient-to-b from-black/60 via-black/30 to-transparent mix-blend-overlay blur-3xl opacity-80" />
      </div>

      {/* Darker bottom-left overlay behind the text only */}
      <div className="absolute bottom-0 left-0 z-28 pointer-events-none">
        <div className="w-[55vw] md:w-[40vw] lg:w-[30vw] h-[45vh] md:h-[50vh] bg-gradient-to-t from-black/80 to-transparent blur-xl opacity-95" />
      </div>

      {/* Bottom-left content panel over the slider */}
      <div className="absolute inset-0 z-30 flex items-end justify-start px-6 pb-12">
        <div className="max-w-md w-full text-left pl-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2">Celebrate What Matters</h1>
          <p className="text-lg text-[#d1d5db] mb-6">We create moments you and your loved ones will always remember.</p>

          <div className="flex items-center justify-start gap-4">
            <a href="/services" className="px-6 py-3 bg-[#D4AF37] text-[#0A1118] font-medium rounded-full shadow-sm">Explore</a>
            <a href="/contact" className="px-6 py-3 border border-white/20 text-white font-medium rounded-full">Contact</a>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(180deg,rgba(0,0,0,0.65),rgba(0,0,0,0)40%),linear-gradient(0deg,rgba(0,0,0,0.65),rgba(0,0,0,0)40%),linear-gradient(90deg,rgba(0,0,0,0.55),rgba(0,0,0,0)35%),linear-gradient(270deg,rgba(0,0,0,0.55),rgba(0,0,0,0)35%),radial-gradient(ellipse_at_center,rgba(10,17,24,0)0%,rgba(10,17,24,0.12)45%,rgba(10,17,24,0.45)72%,rgba(0,0,0,0.96)100%)]"
      />
    </section>
  );
}
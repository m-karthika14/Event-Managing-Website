import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';

// Event images from Unsplash with matching reviews
const eventSlidesData = [
  { image: '/1st.png', review: { name: 'Biffy C', text: 'Randomly found Bookmevents on Instagram and had them booked recently for my daughter\'s first birthday event decor and we are super satisfied and happy with the complete setup and work.' } },
  { image: '/2nd.png', review: { name: 'Deepika Nathan', text: 'Had Bookmeevents do my twin babies 1st bday and it was exceptionally great.' } },
  { image: '/3rd.png', review: { name: 'divya Vijay', text: 'One of the finest event management!' } },
  { image: '/4th.png', review: { name: 'Sindhumathi Vasu', text: 'This decor for our daughter\'s first birthday was done by "Bookmevents". It was absolutely stunning!' } },
  { image: '/5th.png', review: { name: 'Kavi Mani', text: 'We are so happy with the decoration and event arrangements! The team did a fantastic job every detail was perfect and beautifully executed' } },
  { image: '/6th.png', review: { name: 'Hema M', text: 'We recently celebrated our baby boy’s first birthday, and BookMeEvents made it truly magical!' } },
  { image: '/7th.png', review: { name: 'Vinitia Sharon', text: 'We couldn’t be happier with the amazing decor for our little one’s first birthday done by bookmevents.' } },
  { image: '/8th.png', review: { name: 'Thiviyaa kshatriyar', text: 'Beyond the stunning visuals, the team was incredibly supportive, customer-friendly, and easy to work with. Thanks to Moorthy and Team!!!' } },
  { image: '/9th.png', review: { name: 'kamalesh Vijayan', text: 'I highly recommend BOOKMEVENTS to anyone looking for decorators for birthday parties, weddings, or any kind of occasion.' } },
  { image: '/10th.png', review: { name: 'Vineeth Balaji', text: 'We recently celebrated our daughter’s first birthday 🎉👶 and went with a butterfly theme 🦋 — and I can confidently say, choosing this team was one of the best decisions we made!' } },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % eventSlidesData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + eventSlidesData.length) % eventSlidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % eventSlidesData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [eventSlidesData.length]);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#0A1118]">
      {/* Parallax Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-[0.05]"
        style={{ y }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center py-4 sm:py-6 px-4 sm:px-6 translate-y-0 md:translate-y-[-2cm] lg:translate-y-[-5cm]">
        <div className="max-w-[1600px] mx-auto w-full">
          {/* Top Content */}
          <div className="text-center mb-4 md:mb-6 mt-6 md:mt-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            >
              {/* Rating banner removed as requested */}

              <h1
                className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-[9rem] mb-4 md:mb-8 text-[#FAFAF9] leading-[1.1] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span aria-hidden="true" className="hidden md:block invisible">BookMevents</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAF9] via-[#D4AF37] to-[#AA7C11] italic pr-2 md:pr-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
                  Crafting Beautiful Moments
                </span>
              </h1>

              <p
                className="text-base sm:text-lg md:text-xl text-[#94A3B8] mb-6 md:mb-10 max-w-[22rem] sm:max-w-3xl mx-auto font-light tracking-wide leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Thoughtfully designed events that turn your celebrations into lasting memories.
              </p>
            </motion.div>
          </div>

          {/* 3D Curved Carousel with Integrated Reviews */}
          <div className="relative mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
              style={{ perspective: '2500px' }}
            >
              {/* Carousel Container with 3D perspective - BIGGER */}
              <div className="relative h-[300px] sm:h-[340px] md:h-[500px] lg:h-[550px]">
                {/* Gradient Masks */}
                {/* side masks removed to avoid boxed frame */}

                {/* Sliding Images + Reviews Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none translate-y-0 md:translate-y-[-20px] scale-100 md:scale-[1.1]"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {eventSlidesData.map((slide, index) => {
                    const total = eventSlidesData.length;
                    let position = (index - currentIndex) % total;
                    if (position < 0) position += total;
                    if (position > Math.floor(total / 2)) position -= total;

                    const isCenter = position === 0;
                    const isVisible = Math.abs(position) <= 2;
                    
                    return (
                      <motion.div
                        key={index}
                        className="absolute pointer-events-auto"
                        style={{
                            width: 'min(82vw, 360px)',
                            transformStyle: 'preserve-3d',
                          }}
                          animate={{
                            x: position * 380,
                            rotateY: position * -12,
                            z: isCenter ? 150 : 0,
                            scale: isCenter ? 1 : 0.9,
                            filter: isCenter ? 'none' : 'blur(2px)',
                            zIndex: 10 - Math.abs(position),
                            opacity: isVisible ? 1 : 0
                          }}
                        transition={{
                          type: "spring",
                          stiffness: 40,
                          damping: 25,
                          mass: 1.2
                        }}
                      >
                        {/* Card with Image + Review */}
                        <div
                          className={`relative w-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 mb-[-1cm] ${
                          isCenter ? 'ring-1 ring-white/20 hover:ring-white/40' : 'opacity-60 grayscale-[50%]'
                        }`}
                          style={
                            isCenter
                              ? undefined
                              : {
                                  WebkitFilter: 'drop-shadow(0 0 0.25cm rgba(0,0,0,0.95))',
                                  filter: 'drop-shadow(0 0 0.25cm rgba(0,0,0,0.95))',
                                }
                          }
                        >
                          {/* Image Section */}
                          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[380px]">
                            <img
                              src={slide.image}
                              alt={`Event ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            {/* stronger overlay to improve contrast */}
                            <div className="absolute inset-0 bg-black/60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                          </div>

                          {/* Review Section Below Image */}
                          <div className={`absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 pt-10 sm:pt-12 md:pt-16`}>
                            {/* (stars/badge removed) */}

                            {/* Review Text */}
                            <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-bold italic">
                              "{slide.review.text}"
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex items-center gap-3 md:gap-4">
                              <div className="w-9 h-9 md:w-10 md:h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-xs md:text-sm tracking-wider">
                                {slide.review.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-white text-sm md:text-base font-medium tracking-wide">{slide.review.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Arrows */}
              {/* Navigation arrows removed — carousel auto-slides */}

              {/* Dots Indicator */}
                    <div className="flex justify-center gap-3 mt-3 md:mt-4 translate-y-0 md:translate-y-[-1.5cm]">
                {eventSlidesData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-500 rounded-full ${
                      index === currentIndex
                        ? 'w-12 h-1 bg-[#D4AF37]'
                        : 'w-4 h-1 bg-white/10 hover:bg-[#D4AF37]/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-2 md:mt-4 pb-4 md:pb-6 translate-y-0 md:translate-y-[-1cm]">
            <motion.button
              onClick={() => navigate('/services')}
              className="group relative px-8 sm:px-10 md:px-12 py-4 md:py-5 bg-white text-black rounded-full font-medium tracking-widest uppercase text-xs sm:text-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Curate Your Event</span>
              <div className="absolute inset-0 bg-[#222] transform scale-y-0 transition-transform duration-500 origin-bottom group-hover:scale-y-100" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-[6cm] left-[20%] w-[40rem] h-[40rem] bg-[#D4AF37]/[0.02] rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-0 right-[10%] w-[30rem] h-[30rem] bg-[#D4AF37]/[0.03] rounded-full blur-[80px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
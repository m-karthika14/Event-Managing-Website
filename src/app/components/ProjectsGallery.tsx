import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

// Categories mirrored from ServicesPage
const categories = [
  
  'Birthday Planner',
  'Reception',
  'Baby Shower Decoration',
  'Custom Events',
];

// Projects: birthday has 6, one category (Custom Events) has only 2, others 3 each.
const projects = [
  // Birthday Planner (6)
  { image: '/naturetheme.webp', title: 'Nature Theme', category: 'Birthday Planner', description: 'Nature theme', location: 'Chennai' },
  { image: '/teddyhug.webp', title: 'Teddy Hug', category: 'Birthday Planner', description: 'Teddy hug', location: 'Chennai' },
  { image: '/candy.webp', title: 'Candy', category: 'Birthday Planner', description: 'Candy', location: 'Chennai' },
  { image: '/celestial.webp', title: 'Celestial', category: 'Birthday Planner', description: 'Celestial', location: 'Chennai' },
  { image: '/lionn%20kinf.jpg', title: 'Jungle Safari Lion King', category: 'Birthday Planner', description: 'Jungle safari lion king', location: 'Chennai' },
  { image: '/jungle%20safari.webp', title: 'Minions', category: 'Birthday Planner', description: 'Minions', location: 'Chennai' },

  // Reception (2)
  { image: '/recep1.png', title: 'Reception Stage', category: 'Reception', description: 'Reception entrance', location: 'Chennai' },
  { image: '/recep2.png', title: 'Reception Entrance', category: 'Reception', description: 'Reception stage', location: 'Chennai' },

  // Baby Shower Decoration (2)
  { image: '/bs1.png', title: 'Baby Shower Setup', category: 'Baby Shower Decoration', description: 'Soft pastel setup', location: 'Chennai' },
  { image: '/bs2.png', title: 'Welcome Baby', category: 'Baby Shower Decoration', description: 'Delicate balloon garland', location: 'Chennai' },

  // Custom Events (only 2 by request)
  // Custom Events (8)
  { image: '/tom1.png', title: 'Destination', category: 'Custom Events', description: 'Destination', location: 'Chennai' },
  { image: '/tom2.png', title: 'Cute Ocean', category: 'Custom Events', description: 'Cute ocean', location: 'Chennai' },
  { image: '/tom3.png', title: 'Flowers & Butterflies', category: 'Custom Events', description: 'Flowers and butterflies', location: 'Chennai' },
  { image: '/tom4.png', title: 'Candy World', category: 'Custom Events', description: 'Candy world', location: 'Chennai' },
  { image: '/tom5.png', title: 'Car Race', category: 'Custom Events', description: 'Car race', location: 'Chennai' },
  { image: '/tom6.png', title: 'Magical World', category: 'Custom Events', description: 'Magical world', location: 'Chennai' },
  { image: '/tom7.png', title: 'Green Theme', category: 'Custom Events', description: 'Green theme', location: 'Chennai' },
  { image: '/tom8.png', title: 'Bytterflies', category: 'Custom Events', description: 'Bytterflies', location: 'Chennai' },
];

export function ProjectsGallery() {
  const [filter, setFilter] = useState('Birthday Planner');
  // using top-level `categories` defined above

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="py-32 px-6 bg-[#0A1118] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-[#D4AF37]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <motion.div
            className="inline-block mb-6"
          >
            <span className="inline-block px-8 py-2 border border-[#D4AF37]/20 text-[#D4AF37] uppercase tracking-[0.3em] rounded-full text-xs font-medium">
              The Archives
            </span>
          </motion.div>
          
          <h2
            className="text-5xl md:text-7xl lg:text-8xl mb-8 text-[#FAFAF9] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A Gallery of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAFAF9] via-[#D4AF37] to-[#AA7C11] italic">Masterpieces</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94A3B8] max-w-3xl mx-auto font-light leading-relaxed tracking-wide mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            9+ years in event managing. We redefine the art of celebration.
          </p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-full font-medium tracking-wider text-sm transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#D4AF37] text-[#0A1118]'
                    : 'bg-transparent text-[#94A3B8] border border-white/10 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className={
          `grid grid-cols-1 md:grid-cols-2 ${filteredProjects.length === 2 ? 'lg:grid-cols-2 justify-items-center' : 'lg:grid-cols-3'} gap-10`
        }>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              layout
            >
              <div
                className="group relative bg-[#121C2D] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#D4AF37]/20 transition-all duration-700 h-full flex flex-col w-full max-w-[520px]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000 ease-[0.25,0.4,0.25,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121C2D] via-transparent to-transparent opacity-90" />
                  
                  {/* guests and date removed per request */}
                </div>

                {/* Content */}
                <div className="p-8 pt-6 relative z-10 bg-[#121C2D] flex-grow flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-4">
                    <span className="uppercase tracking-[0.2em] text-[10px] text-gray-400 font-semibold border border-white/10 px-3 py-1.5 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="text-2xl lg:text-3xl text-[#FAFAF9] mb-4 tracking-wide font-light"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[#94A3B8] text-sm tracking-wider">
                    <MapPin size={16} className="text-white/50" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <Link
            to="/services"
            className="inline-block px-14 py-5 bg-[#FAFAF9] text-[#0A1118] rounded-full text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#D4AF37] hover:text-white transition-colors duration-300"
          >
            Explore The Full Archives
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
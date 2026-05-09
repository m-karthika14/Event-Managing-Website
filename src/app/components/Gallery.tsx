import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1598622443054-499119043e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwYmFsbG9vbnMlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI0MjU3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Balloon Wonderland',
    category: 'Decorations',
  },
  {
    url: 'https://images.unsplash.com/photo-1619252871696-b68acd46b116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlydGhkYXklMjBjYWtlJTIwY2FuZGxlc3xlbnwxfHx8fDE3NzI0NzA2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Sweet Celebrations',
    category: 'Cakes',
  },
  {
    url: 'https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NzI0NzA2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Elegant Affairs',
    category: 'Premium Events',
  },
  {
    url: 'https://images.unsplash.com/photo-1610334186047-5722021ed028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJpcnRoZGF5JTIwcHJlc2VudHMlMjBnaWZ0c3xlbnwxfHx8fDE3NzI0NzA2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Gift Presentations',
    category: 'Party Favors',
  },
  {
    url: 'https://images.unsplash.com/photo-1765870107155-381b587731c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMHZlbnVlJTIwc2V0dXAlMjBsaWdodHN8ZW58MXx8fHwxNzcyNDcwNjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Venue Magic',
    category: 'Setup',
  },
  {
    url: 'https://images.unsplash.com/photo-1765947380154-0928682783b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBwYXJ0eSUyMGdhbWVzfGVufDF8fHx8MTc3MjQ3MDY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Fun & Games',
    category: 'Entertainment',
  },
];

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-24 px-6 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            A glimpse into the unforgettable moments we've created
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="relative group cursor-pointer overflow-hidden rounded-3xl aspect-square"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.p
                      className="text-sm uppercase tracking-wider mb-2 text-purple-300"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {image.category}
                    </motion.p>
                    <motion.h3
                      className="text-2xl"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {image.title}
                    </motion.h3>
                  </div>
                </motion.div>

                {/* Decorative corner accent */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

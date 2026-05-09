import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { number: '500+', label: 'Events Planned', suffix: '' },
  { number: '10', label: 'Years Experience', suffix: '+' },
  { number: '98', label: 'Client Satisfaction', suffix: '%' },
  { number: '50', label: 'Team Members', suffix: '+' },
];

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-24 px-6 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl md:text-6xl text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ scale: 0.5 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1 + 0.3,
                  type: "spring",
                  stiffness: 100
                }}
              >
                {stat.number}
              </motion.div>
              <div 
                className="text-lg md:text-xl text-purple-100"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

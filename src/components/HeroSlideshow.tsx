import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  { src: '/images/heroes/hero-sunset-build.jpg', alt: 'Modern two-storey build at sunset' },
  { src: '/images/heroes/hero-modern-dark.jpg', alt: 'Contemporary dark cladding and timber home' },
  { src: '/images/heroes/hero-rural-modern.jpg', alt: 'Angular modern home with covered entertaining' },
  { src: '/images/heroes/hero-louvre-pergola.jpg', alt: 'Louvre pergola outdoor entertaining area' },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="popLayout">
        <motion.img
          key={heroImages[current].src}
          src={heroImages[current].src}
          alt={heroImages[current].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:bottom-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-8 h-0.5 transition-all duration-500 ${
              i === current ? 'bg-brass w-12' : 'bg-cream/30 hover:bg-cream/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

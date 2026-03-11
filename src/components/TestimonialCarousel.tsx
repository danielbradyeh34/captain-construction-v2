import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/testimonials';

interface TestimonialCarouselProps {
  variant?: 'light' | 'dark';
}

export default function TestimonialCarousel({ variant = 'dark' }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const isLight = variant === 'light';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto text-center">
      <div className={`text-6xl font-heading leading-none mb-6 ${isLight ? 'text-brass' : 'text-brass'}`}>"</div>
      <div className="min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-lg md:text-xl font-body leading-relaxed mb-8 ${
              isLight ? 'text-charcoal/80' : 'text-cream/90'
            }`}>
              {testimonials[current].quote}
            </p>
            <div>
              <p className="font-heading text-sm tracking-[0.2em] text-brass uppercase">
                {testimonials[current].author}
              </p>
              <p className={`text-sm mt-1 ${isLight ? 'text-text-secondary' : 'text-cream/40'}`}>
                {testimonials[current].location} — {testimonials[current].project}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-brass w-8'
                : isLight ? 'bg-charcoal/20' : 'bg-cream/20'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

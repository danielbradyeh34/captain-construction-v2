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
      <div className="text-7xl font-heading leading-none mb-6 text-brass/40">"</div>
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
              <p className="font-body text-[11px] font-medium tracking-[0.15em] text-brass uppercase">
                {testimonials[current].author}
              </p>
              <p className={`text-sm mt-1 ${isLight ? 'text-text-secondary' : 'text-cream/40'}`}>
                {testimonials[current].location} — {testimonials[current].project}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? 'bg-brass w-8'
                : isLight ? 'bg-charcoal/15 w-2' : 'bg-cream/15 w-2'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

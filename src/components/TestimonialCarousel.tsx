import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  project: string;
}

export default function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const t = testimonials[current];

  return (
    <div className="relative">
      <p className="font-heading text-6xl md:text-7xl text-accent/30 leading-none mb-8">&ldquo;</p>

      <div className="relative min-h-[180px] md:min-h-[160px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-dark leading-snug tracking-tight mb-10">
              {t.quote}
            </blockquote>
            <div>
              <p className="font-body text-[11px] font-medium tracking-[0.15em] text-accent uppercase">
                {t.author}
              </p>
              <p className="text-muted text-sm mt-1">
                {t.location} &mdash; {t.project}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-12">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-0.5 transition-all duration-500 ${
              i === current ? 'bg-accent w-10' : 'bg-dark/15 w-6 hover:bg-dark/30'
            }`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

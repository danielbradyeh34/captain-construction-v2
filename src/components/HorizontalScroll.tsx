import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollProps {
  images: { src: string; alt: string }[];
}

export default function HorizontalScroll({ images }: HorizontalScrollProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-25%']);

  return (
    <div ref={containerRef} className="overflow-hidden py-4">
      <motion.div style={{ x }} className="flex gap-4 md:gap-6">
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-[280px] md:w-[400px] lg:w-[500px]">
            <div className="aspect-[3/2] overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

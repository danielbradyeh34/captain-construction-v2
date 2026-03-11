import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function TextReveal({ children, delay = 0, className = '' }: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <span ref={ref} className={`text-reveal-clip ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '110%' }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

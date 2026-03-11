import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: "We sit down with you to understand your vision, budget, and timeline. We'll visit your site, discuss your ideas, and start shaping a plan that works for you.",
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: "Working alongside architects and designers, we refine plans and specifications. Every detail is considered — from materials to finishes — before a single nail is hammered.",
  },
  {
    number: '03',
    title: 'Approvals & Permits',
    description: "We handle the paperwork. Building permits, council approvals, engineering certifications — we manage the process so you don't have to.",
  },
  {
    number: '04',
    title: 'Construction',
    description: "This is where it comes to life. Regular updates, clear communication, and meticulous craftsmanship at every stage. We treat your project like it's our own home.",
  },
  {
    number: '05',
    title: 'Handover',
    description: "A thorough walkthrough, all documentation handed over, and a maintenance guide for your new space. We don't disappear — we're a phone call away if you need us.",
  },
];

function Step({ step, index, variant = 'dark' }: { step: typeof steps[0]; index: number; variant?: 'light' | 'dark' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isLight = variant === 'light';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative flex items-start gap-8 md:gap-12"
    >
      <div className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl ${
        isLight ? 'bg-stone-light' : 'bg-cream/5'
      }`}>
        <span className="font-heading text-2xl md:text-3xl text-brass tracking-tight">
          {step.number}
        </span>
      </div>

      <div className="flex-1 pb-12 md:pb-16">
        <h3 className={`font-body text-xs font-medium tracking-[0.15em] uppercase mb-3 ${
          isLight ? 'text-charcoal' : 'text-cream'
        }`}>
          {step.title}
        </h3>
        <p className={`leading-relaxed max-w-lg ${
          isLight ? 'text-text-secondary' : 'text-cream/60'
        }`}>
          {step.description}
        </p>
      </div>

      {index < steps.length - 1 && (
        <div className="absolute left-8 md:left-10 top-20 md:top-24 bottom-0 w-px bg-brass/10" />
      )}
    </motion.div>
  );
}

export default function ProcessTimeline({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  return (
    <div className="max-w-3xl mx-auto">
      {steps.map((step, i) => (
        <Step key={step.number} step={step} index={i} variant={variant} />
      ))}
    </div>
  );
}

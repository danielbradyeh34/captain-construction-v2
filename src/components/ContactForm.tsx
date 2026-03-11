import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';

const projectTypes = [
  'New Home Build',
  'Extension / Addition',
  'Decking & Outdoor Living',
  'Renovation',
  'Custom Joinery / Details',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-brass/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-brass text-3xl">&#10003;</span>
        </div>
        <h3 className="font-heading text-3xl tracking-tight text-charcoal mb-4">
          Message sent
        </h3>
        <p className="text-text-secondary max-w-md mx-auto">
          Thanks for getting in touch. Cal will get back to you within 24 hours to discuss your project.
        </p>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-transparent border border-border px-4 py-3.5 text-charcoal placeholder:text-text-muted focus:border-brass focus:outline-none transition-colors rounded-xl";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-text-secondary uppercase mb-2">Name *</label>
          <input type="text" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-text-secondary uppercase mb-2">Phone</label>
          <input type="tel" className={inputClass} placeholder="Your phone number" />
        </div>
      </div>

      <div>
        <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-text-secondary uppercase mb-2">Email *</label>
        <input type="email" required className={inputClass} placeholder="your@email.com" />
      </div>

      <div>
        <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-text-secondary uppercase mb-2">Project Type</label>
        <select className={`${inputClass} appearance-none cursor-pointer bg-warm-white`}>
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-text-secondary uppercase mb-2">Tell us about your project *</label>
        <textarea
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Describe your project, timeline, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-10 py-4 bg-brass text-warm-white font-body text-sm tracking-wide rounded-full hover:bg-brass-light transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

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
        <div className="text-brass text-5xl mb-6">&#10003;</div>
        <h3 className="font-heading text-2xl tracking-[0.15em] text-charcoal uppercase mb-4">
          Message Sent
        </h3>
        <p className="text-text-secondary max-w-md mx-auto">
          Thanks for getting in touch. Cal will get back to you within 24 hours to discuss your project.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block font-heading text-xs tracking-[0.2em] text-text-secondary uppercase mb-2">
            Name *
          </label>
          <input
            type="text"
            required
            className="w-full bg-transparent border border-border px-4 py-3 text-charcoal placeholder:text-text-muted focus:border-brass focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block font-heading text-xs tracking-[0.2em] text-text-secondary uppercase mb-2">
            Phone
          </label>
          <input
            type="tel"
            className="w-full bg-transparent border border-border px-4 py-3 text-charcoal placeholder:text-text-muted focus:border-brass focus:outline-none transition-colors"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div>
        <label className="block font-heading text-xs tracking-[0.2em] text-text-secondary uppercase mb-2">
          Email *
        </label>
        <input
          type="email"
          required
          className="w-full bg-transparent border border-border px-4 py-3 text-charcoal placeholder:text-text-muted focus:border-brass focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label className="block font-heading text-xs tracking-[0.2em] text-text-secondary uppercase mb-2">
          Project Type
        </label>
        <select
          className="w-full bg-warm-white border border-border px-4 py-3 text-charcoal focus:border-brass focus:outline-none transition-colors appearance-none cursor-pointer"
        >
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-heading text-xs tracking-[0.2em] text-text-secondary uppercase mb-2">
          Tell us about your project *
        </label>
        <textarea
          required
          rows={5}
          className="w-full bg-transparent border border-border px-4 py-3 text-charcoal placeholder:text-text-muted focus:border-brass focus:outline-none transition-colors resize-none"
          placeholder="Describe your project, timeline, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-10 py-4 bg-brass text-warm-white font-heading text-sm tracking-[0.2em] uppercase hover:bg-brass-light transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}

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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try calling us instead.');
      }
    } catch {
      setError('Something went wrong. Please try calling us instead.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-accent text-3xl">&#10003;</span>
        </div>
        <h3 className="font-heading text-3xl tracking-tight text-dark mb-4">
          Message sent
        </h3>
        <p className="text-muted max-w-md mx-auto">
          Thanks for getting in touch. Cal will get back to you within 24 hours to discuss your project.
        </p>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-transparent border border-border px-4 py-3.5 text-dark placeholder:text-muted/50 focus:border-accent focus:outline-none transition-colors";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5 max-w-xl"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-muted uppercase mb-2">Name *</label>
          <input type="text" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-muted uppercase mb-2">Phone</label>
          <input type="tel" name="phone" className={inputClass} placeholder="Your phone number" />
        </div>
      </div>

      <div>
        <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-muted uppercase mb-2">Email *</label>
        <input type="email" name="email" required className={inputClass} placeholder="your@email.com" />
      </div>

      <div>
        <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-muted uppercase mb-2">Project Type</label>
        <select name="project-type" className={`${inputClass} appearance-none cursor-pointer bg-parchment`}>
          <option value="">Select a project type</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body text-[11px] font-medium tracking-[0.15em] text-muted uppercase mb-2">Tell us about your project *</label>
        <textarea
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Describe your project, timeline, and any specific requirements..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto px-10 py-4 bg-accent text-parchment font-body text-sm tracking-wide rounded-full hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
];

interface NavigationProps {
  currentPath?: string;
  variant?: 'light' | 'dark';
}

export default function Navigation({ currentPath = '/', variant = 'dark' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isDark = variant === 'dark';
  const showLightLogo = isOpen || (!scrolled && isDark);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-warm-white/95 backdrop-blur-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="relative z-50 flex items-center gap-3">
          <img
            src={showLightLogo ? '/logo-icon-light.svg' : '/logo-icon-dark.svg'}
            alt=""
            className="h-10 md:h-12 w-auto"
          />
          <div className="flex flex-col">
            <span className={`font-heading text-xl md:text-2xl tracking-tight leading-tight transition-colors duration-300 ${
              showLightLogo ? 'text-cream' : 'text-charcoal'
            }`}>
              Captain
            </span>
            <span className={`font-body text-[9px] md:text-[10px] tracking-[0.2em] uppercase leading-tight transition-colors duration-300 ${
              showLightLogo ? 'text-cream/50' : 'text-text-secondary'
            }`}>
              Construction Co.
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-[13px] tracking-[0.05em] transition-colors duration-300 ${
                currentPath === link.href
                  ? scrolled ? 'text-charcoal' : isDark ? 'text-warm-white' : 'text-charcoal'
                  : scrolled
                    ? 'text-text-secondary hover:text-charcoal'
                    : isDark
                      ? 'text-warm-white/60 hover:text-warm-white'
                      : 'text-text-secondary hover:text-charcoal'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className={`ml-4 px-6 py-2.5 font-body text-[13px] tracking-[0.05em] rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-charcoal text-warm-white hover:bg-brass'
                : isDark
                  ? 'bg-warm-white/10 backdrop-blur-sm text-warm-white border border-warm-white/20 hover:bg-warm-white hover:text-charcoal'
                  : 'bg-charcoal text-warm-white hover:bg-brass'
            }`}
          >
            Enquire
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block w-7 h-px origin-center transition-colors ${
              showLightLogo ? 'bg-cream' : 'bg-charcoal'
            }`}
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block w-7 h-px ${
              showLightLogo ? 'bg-cream' : 'bg-charcoal'
            }`}
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block w-7 h-px origin-center transition-colors ${
              showLightLogo ? 'bg-cream' : 'bg-charcoal'
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`font-heading text-4xl tracking-tight ${
                    currentPath === link.href ? 'text-cream' : 'text-cream/40 hover:text-cream'
                  } transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 px-8 py-3 bg-brass text-warm-white font-body text-base rounded-full hover:bg-brass-light transition-all"
                onClick={() => setIsOpen(false)}
              >
                Start a Project
              </motion.a>
              <motion.a
                href="tel:0419400734"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-text-muted font-body text-lg"
              >
                0419 400 734
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

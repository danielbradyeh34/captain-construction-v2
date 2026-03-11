import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';

interface ProjectGridProps {
  featuredOnly?: boolean;
}

export default function ProjectGrid({ featuredOnly = false }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const displayProjects = featuredOnly
    ? projects.filter((p) => p.featured)
    : activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory);

  return (
    <div>
      {/* Filter Tabs */}
      {!featuredOnly && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`font-heading text-sm tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 ${
                activeCategory === cat.slug
                  ? 'bg-brass text-warm-white'
                  : 'bg-transparent text-cream/50 border border-cream/20 hover:border-brass hover:text-brass'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {displayProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-graphite"
            >
              {/* Project Image */}
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/80 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-brass font-heading text-xs tracking-[0.2em] uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-cream font-heading text-lg tracking-[0.1em] uppercase mb-2">
                    {project.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-cream/40 text-xs mt-3">{project.location}</p>
                </div>
              </div>

              {/* Default visible info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-cream font-heading text-base tracking-[0.1em] uppercase">
                  {project.title}
                </h3>
                <p className="text-brass font-heading text-xs tracking-[0.2em] uppercase mt-1">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

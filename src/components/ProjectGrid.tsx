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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`font-body text-[13px] tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 ${
                activeCategory === cat.slug
                  ? 'bg-accent text-parchment'
                  : 'bg-transparent text-parchment/50 border border-parchment/15 hover:border-accent hover:text-accent'
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {displayProjects.map((project, i) => (
            <motion.a
              key={project.id}
              href={`/projects/${project.id}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-dark"
            >
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/75 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-accent font-body text-[11px] tracking-[0.15em] uppercase mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-parchment font-heading text-xl tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-parchment/50 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <p className="text-parchment/30 text-xs mt-3">{project.location}</p>
                </div>
              </div>

              {/* Default visible info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark/80 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-parchment font-heading text-lg tracking-tight">
                  {project.title}
                </h3>
                <p className="text-accent font-body text-[11px] tracking-[0.15em] uppercase mt-1">
                  {project.category}
                </p>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowUpRight, X, Check } from 'lucide-react';
import { SHOWCASE_PROJECTS, ShowcaseProject } from '../data/fagProjectsData';
import { Reveal } from './Reveal';

interface ShowcaseSectionProps {
  onRequestSimilarProject: (serviceCategory: string) => void;
}

const SUBURB_FILTERS = [
  'All Suburbs',
  'Sandton',
  'Fourways',
  'Kempton Park',
  'Cosmo City / Randburg',
  'Rosebank',
] as const;

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  onRequestSimilarProject,
}) => {
  const [selectedSuburb, setSelectedSuburb] = useState<string>('All Suburbs');
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  const filteredProjects =
    selectedSuburb === 'All Suburbs'
      ? SHOWCASE_PROJECTS
      : SHOWCASE_PROJECTS.filter((p) => p.suburb === selectedSuburb);

  return (
    <section
      id="showcase"
      className="py-16 md:py-24 bg-[#f6f1eb] border-t border-[#403a34]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Section Header & Filter Pills */}
        <Reveal>
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 pb-8 border-b border-[#403a34]">
            <div>
              <div className="type-xs-label text-[#555555] mb-3">
                02 / REGIONAL COMPLETED PORTFOLIO
              </div>
              <h2 className="type-5xl-2-display text-[#403a34]">
                Work Across Gauteng.
              </h2>
            </div>

            {/* Filter Pills separated by Walnut Ink hairline borders */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by suburb">
              {SUBURB_FILTERS.map((suburb) => {
                const active = suburb === selectedSuburb;
                return (
                  <button
                    key={suburb}
                    onClick={() => setSelectedSuburb(suburb)}
                    className={`px-3.5 py-2 border border-[#403a34] type-xs-label transition-all duration-200 cursor-pointer ${
                      active
                        ? 'bg-[#403a34] text-[#f6f1eb]'
                        : 'bg-[#f6f1eb] text-[#403a34] hover:bg-[#403a34]/5'
                    }`}
                  >
                    {suburb}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Portfolio Grid (Surface Level 1 on Linen Canvas separated by hairline 1px borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-x border-b border-[#403a34]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group bg-[#f6f1eb] border-b border-r border-[#403a34] last:border-r-0 md:odd:border-r lg:border-r cursor-pointer flex flex-col justify-between transition-colors hover:bg-[#403a34]/[0.03]"
              >
                {/* Project Image Thumbnail */}
                <div className="relative h-64 sm:h-72 overflow-hidden border-b border-[#403a34]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-[#f6f1eb] border border-[#403a34] type-xs-label text-[#403a34]">
                      {project.type}
                    </span>
                    <span className="px-2.5 py-1 bg-[#403a34] text-[#f6f1eb] type-xs-label">
                      {project.suburb}
                    </span>
                  </div>
                </div>

                {/* Project Body */}
                <div className="p-6 md:p-7 flex-1 flex flex-col justify-between gap-5">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="type-xs-label text-[#555555]">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 type-xs-meta text-[#555555]">
                        <Clock className="w-3 h-3" /> {project.duration}
                      </span>
                    </div>

                    <h3 className="type-xl-title text-[#403a34] mb-3 group-hover:underline">
                      {project.title}
                    </h3>

                    <p className="text-[14px] text-[#333333] leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#403a34]/20 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 type-xs-label text-[#403a34]">
                      <MapPin className="w-3.5 h-3.5" /> {project.suburb}
                    </span>
                    <span className="inline-flex items-center gap-1 type-xs-label text-[#403a34] group-hover:translate-x-0.5 transition-transform">
                      VIEW SPEC <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-[#403a34]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#f6f1eb] border border-[#403a34] max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between p-5 md:p-6 border-b border-[#403a34]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#403a34] text-[#f6f1eb] type-xs-label">
                    {selectedProject.suburb}
                  </span>
                  <span className="type-xs-label text-[#555555]">
                    {selectedProject.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 border border-[#403a34] hover:bg-[#403a34] hover:text-[#f6f1eb] transition-colors cursor-pointer"
                  aria-label="Close project detail modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="h-64 sm:h-80 w-full border-b border-[#403a34] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="type-4xl-display text-[#403a34] mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="type-lg-lead text-[#333333]">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="border-t border-[#403a34]/20 pt-5">
                  <div className="type-xs-label text-[#555555] mb-3">
                    KEY DELIVERABLES COMPLETED
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2.5 text-[14px] text-[#333333]"
                      >
                        <span className="w-4 h-4 border border-[#403a34] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#403a34]" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#403a34] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[13px] text-[#555555]">
                    Want similar workmanship for your property in{' '}
                    <strong className="text-[#403a34]">{selectedProject.suburb}</strong>{' '}
                    or nearby suburbs?
                  </div>
                  <button
                    onClick={() => {
                      const cat = selectedProject.category;
                      setSelectedProject(null);
                      onRequestSimilarProject(cat);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#403a34] text-[#f6f1eb] hover:bg-[#333333] type-xs-label cursor-pointer"
                  >
                    <span>QUOTE SIMILAR PROJECT</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

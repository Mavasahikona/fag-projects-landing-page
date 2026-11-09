import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowUpRight, Clock, Home } from 'lucide-react';
import { SERVICES, ServiceCategory } from '../data/fagProjectsData';
import { Reveal } from './Reveal';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForQuote,
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);
  const activeService: ServiceCategory =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="services" className="py-16 md:py-24 bg-[#f6f1eb]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#403a34]">
            <div>
              <div className="type-xs-label text-[#555555] mb-3">
                01 / COMPREHENSIVE CONSTRUCTION & MAINTENANCE
              </div>
              <h2 className="type-5xl-2-display text-[#403a34]">
                Five Specialized Trades.
              </h2>
            </div>
            <p className="type-lg-lead text-[#333333] max-w-xl">
              From structural wall demolition and full kitchen remodels to leak-proof
              roofs, plumbing, and automated gates—delivered seamlessly for
              residential and industrial properties.
            </p>
          </div>
        </Reveal>

        {/* Interactive Trade Category Selector Grid (Hairline 1px Bordered Tiles) */}
        <div
          role="tablist"
          aria-label="Core FAG Projects Construction Trades"
          className="grid grid-cols-2 md:grid-cols-5 border-x border-b border-[#403a34] divide-y md:divide-y-0 md:divide-x divide-[#403a34]"
        >
          {SERVICES.map((service) => {
            const isSelected = service.id === activeServiceId;
            return (
              <button
                key={service.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveServiceId(service.id)}
                className={`text-left p-5 md:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between gap-4 ${
                  isSelected
                    ? 'bg-[#403a34] text-[#f6f1eb]'
                    : 'bg-[#f6f1eb] text-[#403a34] hover:bg-[#403a34]/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`type-xs-label ${
                      isSelected ? 'text-[#f6f1eb]/75' : 'text-[#555555]'
                    }`}
                  >
                    TRADE {service.code}
                  </span>
                  <span
                    className={`w-2 h-2 transition-transform duration-300 ${
                      isSelected
                        ? 'bg-[#f6f1eb] scale-110'
                        : 'border border-[#403a34]/40'
                    }`}
                  />
                </div>
                <div className="text-[16px] md:text-[18px] font-bold leading-snug">
                  {service.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Deep-Dive architectural Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 border-x border-b border-[#403a34]"
          >
            {/* Left Details Column */}
            <div className="lg:col-span-6 p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-8 lg:border-r border-[#403a34]">
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <span className="px-3 py-1.5 border border-[#403a34] type-xs-label text-[#403a34]">
                    {activeService.code} · {activeService.shortTitle}
                  </span>
                  <span className="inline-flex items-center gap-1.5 type-xs-meta text-[#555555]">
                    <Clock className="w-3.5 h-3.5 text-[#403a34]" />
                    {activeService.turnaround}
                  </span>
                  <span className="inline-flex items-center gap-1.5 type-xs-meta text-[#555555]">
                    <Home className="w-3.5 h-3.5 text-[#403a34]" />
                    {activeService.propertyTypes}
                  </span>
                </div>

                <h3 className="type-4xl-display text-[#403a34] mb-4">
                  {activeService.title}
                </h3>

                <p className="type-lg-lead text-[#333333] mb-6">
                  {activeService.description}
                </p>

                {/* Detailed Scope Checklist */}
                <div className="border-t border-[#403a34]/20 pt-6">
                  <div className="type-xs-label text-[#555555] mb-4">
                    INCLUDED WORKMANSHIP & SCOPE
                  </div>
                  <ul className="space-y-3">
                    {activeService.scopeItems.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[15px] text-[#333333]"
                      >
                        <span className="mt-1 w-4 h-4 shrink-0 border border-[#403a34] flex items-center justify-center text-[#403a34]">
                          <Check className="w-2.5 h-2.5" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#403a34] text-[#f6f1eb] hover:bg-[#333333] transition-colors type-xs-label cursor-pointer"
                >
                  <span>REQUEST QUOTE FOR {activeService.shortTitle}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Showcase Column */}
            <div className="lg:col-span-6 relative min-h-[340px] lg:min-h-[520px] overflow-hidden bg-[#403a34]/5">
              <motion.img
                key={activeService.image}
                initial={{ scale: 1.05, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                src={activeService.image}
                alt={`${activeService.title} service by FAG Projects Johannesburg`}
                className="w-full h-full object-cover object-center"
              />
              {/* Caption pill on warm Linen Canvas */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm bg-[#f6f1eb]/95 backdrop-blur-sm border border-[#403a34] p-4">
                <div className="type-xs-label text-[#555555] mb-1">
                  FIELD EXECUTION BENCHMARK
                </div>
                <p className="text-[13px] font-medium text-[#403a34]">
                  {activeService.tagline}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

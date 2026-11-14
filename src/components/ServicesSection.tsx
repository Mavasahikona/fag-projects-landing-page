import React, { useRef, useState } from 'react';
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

  const panelRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  /**
   * On a phone the trade strip and the detail panel sit far apart vertically, so
   * tapping a trade used to swap a photograph that had already scrolled off the
   * screen. Selecting now scrolls the strip back to the top of the viewport, so
   * the chosen trade and the photograph that answers it are visible together.
   */
  const selectService = (id: string) => {
    setActiveServiceId(id);
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches) {
      requestAnimationFrame(() => {
        const strip = stripRef.current;
        if (!strip) return;
        // Vertical: put the strip just under the sticky header (scrollIntoView on
        // a nested child fights this and lands in the wrong place).
        const headerOffset = 80;
        const top = strip.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
        // Horizontal: centre the chosen trade inside the swipeable strip.
        const chosen = strip.querySelector<HTMLButtonElement>(`[data-service-id="${id}"]`);
        if (chosen) {
          const left = chosen.offsetLeft - strip.clientWidth / 2 + chosen.clientWidth / 2;
          strip.scrollTo({ left, behavior: 'smooth' });
        }
      });
    }
  };

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
              roofs, plumbing, and automated gates delivered seamlessly for
              residential and industrial properties.
            </p>
          </div>
        </Reveal>

        {/* Trade selector: one swipeable row on phones, a five-up grid from md up */}
        <div className="relative">
          <div
            ref={stripRef}
            role="tablist"
            aria-label="Core FAG Projects Construction Trades"
            className="scroll-mt-20 md:scroll-mt-28 flex overflow-x-auto snap-x snap-mandatory border-x border-b border-[#403a34] divide-x divide-[#403a34] md:grid md:grid-cols-5 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICES.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isSelected}
                  data-service-id={service.id}
                  onClick={() => selectService(service.id)}
                  className={`text-left p-4 md:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between gap-3 md:gap-4 shrink-0 min-w-[150px] max-w-[52%] snap-start md:min-w-0 md:max-w-none ${
                    isSelected
                      ? 'bg-[#403a34] text-[#f6f1eb]'
                      : 'bg-[#f6f1eb] text-[#403a34] hover:bg-[#403a34]/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full gap-2">
                    <span
                      className={`type-xs-label ${
                        isSelected ? 'text-[#f6f1eb]/75' : 'text-[#555555]'
                      }`}
                    >
                      TRADE {service.code}
                    </span>
                    <span
                      className={`w-2 h-2 shrink-0 transition-transform duration-300 ${
                        isSelected
                          ? 'bg-[#f6f1eb] scale-110'
                          : 'border border-[#403a34]/40'
                      }`}
                    />
                  </div>
                  <div className="text-[14px] md:text-[15px] lg:text-[18px] font-bold leading-snug break-words">
                    {service.title}
                  </div>
                </button>
              );
            })}
          </div>
          {/* Phone-only fade so the cut-off fifth trade reads as "swipe me" */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-r from-transparent to-[#f6f1eb] md:hidden" />
        </div>

        {/* Active service deep-dive: photograph leads on phones, sits beside copy on desktop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            ref={panelRef}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="scroll-mt-24 md:scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 border-x border-b border-[#403a34]"
          >
            {/* Photograph first on mobile, so the tap is answered in the same viewport */}
            <div className="order-first lg:order-last lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[520px] overflow-hidden bg-[#403a34]/5 border-[#403a34]">
              <motion.img
                key={activeService.image}
                initial={{ scale: 1.05, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                src={activeService.image}
                alt={`${activeService.title} service by FAG Projects Johannesburg`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-auto md:max-w-sm bg-[#f6f1eb]/95 backdrop-blur-sm border border-[#403a34] px-3 py-2.5 md:p-4">
                <div className="type-xs-label text-[#555555] mb-1">
                  FIELD EXECUTION BENCHMARK
                </div>
                <p className="text-[12px] md:text-[13px] font-medium text-[#403a34] leading-snug">
                  {activeService.tagline}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-6 p-6 md:p-10 lg:p-12 flex flex-col justify-between gap-8 lg:border-r border-[#403a34]">
              <div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

import React from 'react';
import { Reveal } from './Reveal';
import { BENEFIT_PILLARS } from '../data/fagProjectsData';

export const BenefitsSection: React.FC = () => {
  return (
    <section
      id="benefits"
      className="relative py-20 md:py-28 bg-[#f6f1eb] border-t border-[#403a34] overflow-hidden"
    >
      {/* Monumental Architectural Watermark Typographic Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 right-[-2%] type-5xl-5-watermark text-[#403a34]/[0.04] leading-none whitespace-nowrap"
      >
        CRAFT
      </div>

      <div className="relative max-w-[1440px] mx-auto px-5 md:px-10">
        <Reveal>
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="type-xs-label text-[#555555] mb-3">
              03 / THE FRANK STANDARD
            </div>
            <h2 className="type-5xl-2-display text-[#403a34] mb-5">
              Why Johannesburg Property Owners Trust FAG Projects.
            </h2>
            <p className="type-lg-lead text-[#333333]">
              Building or renovating shouldn’t mean chasing unreliable sub-contractors
              or dealing with surprise variations. From Cosmo City Ext 4 to Sandton
              and Kempton Park, we bring quiet precision back to construction.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#403a34] divide-y md:divide-y-0 md:divide-x divide-[#403a34]">
          {BENEFIT_PILLARS.map((pillar, idx) => (
            <Reveal key={pillar.num} delay={idx * 0.08}>
              <div className="p-6 md:p-8 flex flex-col justify-between h-full bg-[#f6f1eb] hover:bg-[#403a34]/[0.03] transition-colors">
                <div>
                  <div className="type-4xl-display text-[#403a34]/20 mb-6 font-bold">
                    {pillar.num}
                  </div>
                  <h3 className="type-xl-title text-[#403a34] mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] text-[#333333] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#403a34]/20">
                  <span className="type-xs-label text-[#555555]">
                    RESIDENTIAL & INDUSTRIAL VERIFIED
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

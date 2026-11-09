import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/fagProjectsData';
import { Reveal } from './Reveal';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-[#f6f1eb] border-t border-[#403a34]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#403a34]">
            <div>
              <div className="type-xs-label text-[#555555] mb-3">
                05 / CLIENT REVIEWS & REPUTATION
              </div>
              <h2 className="type-5xl-2-display text-[#403a34]">
                Trusted Across Johannesburg.
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.socials.proCompareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#403a34] bg-[#f6f1eb] hover:bg-[#403a34] hover:text-[#f6f1eb] transition-colors type-xs-label text-[#403a34]"
              >
                <span>{COMPANY_INFO.socials.proCompareLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={COMPANY_INFO.socials.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#403a34] bg-[#f6f1eb] hover:bg-[#403a34] hover:text-[#f6f1eb] transition-colors type-xs-label text-[#403a34]"
              >
                <span>{COMPANY_INFO.socials.facebookLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 border-x border-b border-[#403a34] divide-y md:divide-y-0 md:divide-x divide-[#403a34]">
          {TESTIMONIALS.map((review, idx) => (
            <Reveal
              key={review.id}
              delay={idx * 0.08}
              className={`${idx >= 2 ? 'border-t border-[#403a34]' : ''}`}
            >
              <div className="p-7 md:p-10 h-full flex flex-col justify-between gap-8 bg-[#f6f1eb] hover:bg-[#403a34]/[0.02] transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-1 text-[#403a34]">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star key={sIdx} className="w-3.5 h-3.5 fill-[#403a34]" />
                      ))}
                    </div>
                    <span className="px-2.5 py-1 border border-[#403a34]/40 type-xs-label text-[#555555]">
                      {review.platform}
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-[#403a34]/30 mb-4" />

                  <p className="type-lg-lead text-[#333333] leading-relaxed">
                    “{review.quote}”
                  </p>
                </div>

                <div className="pt-5 border-t border-[#403a34]/20 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-[15px] font-bold text-[#403a34]">
                      {review.author}
                    </div>
                    <div className="type-xs-meta text-[#555555]">
                      {review.roleOrHome} · <strong className="text-[#403a34]">{review.suburb}</strong>
                    </div>
                  </div>

                  <span className="type-xs-label text-[#403a34] bg-[#403a34]/10 px-2.5 py-1">
                    {review.serviceTag}
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

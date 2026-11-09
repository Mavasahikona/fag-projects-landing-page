import React from 'react';
import { Check, ArrowUpRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/fagProjectsData';
import { Reveal } from './Reveal';

interface PricingSectionProps {
  onSelectTierForQuote: (serviceName: string, note: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectTierForQuote,
}) => {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-[#f6f1eb] border-t border-[#403a34]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#403a34]">
            <div>
              <div className="type-xs-label text-[#555555] mb-3">
                04 / TRANSPARENT ESTIMATION MODELS
              </div>
              <h2 className="type-5xl-2-display text-[#403a34]">
                Clear Quotations. Zero Surprise Extras.
              </h2>
            </div>
            <p className="type-lg-lead text-[#333333] max-w-xl">
              Whether booking a targeted roof leak repair or commissioning a full
              kitchen remodel and boundary wall extension, you receive an itemized
              written quote before work starts.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-x border-b border-[#403a34] divide-y lg:divide-y-0 lg:divide-x divide-[#403a34]">
          {PRICING_TIERS.map((tier, idx) => {
            const isDark = tier.recommended;
            return (
              <Reveal key={tier.id} delay={idx * 0.08}>
                <div
                  className={`p-7 md:p-10 h-full flex flex-col justify-between transition-colors ${
                    isDark
                      ? 'bg-[#403a34] text-[#f6f1eb]'
                      : 'bg-[#f6f1eb] text-[#403a34]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span
                        className={`type-xs-label ${
                          isDark ? 'text-[#f6f1eb]/70' : 'text-[#555555]'
                        }`}
                      >
                        {tier.code}
                      </span>
                      {isDark && (
                        <span className="px-2.5 py-1 bg-[#f6f1eb] text-[#403a34] type-xs-label">
                          MOST REQUESTED
                        </span>
                      )}
                    </div>

                    <h3
                      className={`type-xl-title mb-1.5 ${
                        isDark ? 'text-[#f6f1eb]' : 'text-[#403a34]'
                      }`}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className={`text-[13px] mb-6 ${
                        isDark ? 'text-[#f6f1eb]/80' : 'text-[#555555]'
                      }`}
                    >
                      {tier.subtitle}
                    </p>

                    <div
                      className={`py-5 border-y mb-6 ${
                        isDark ? 'border-[#f6f1eb]/25' : 'border-[#403a34]/20'
                      }`}
                    >
                      <div className="type-4xl-display leading-none mb-2">
                        {tier.priceIndicator}
                      </div>
                      <div
                        className={`type-xs-label-regular ${
                          isDark ? 'text-[#f6f1eb]/70' : 'text-[#555555]'
                        }`}
                      >
                        {tier.unitLabel}
                      </div>
                    </div>

                    <p
                      className={`text-[14px] leading-relaxed mb-6 ${
                        isDark ? 'text-[#f6f1eb]/90' : 'text-[#333333]'
                      }`}
                    >
                      {tier.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start gap-2.5 text-[14px]"
                        >
                          <span
                            className={`mt-1 w-4 h-4 shrink-0 border flex items-center justify-center ${
                              isDark
                                ? 'border-[#f6f1eb] text-[#f6f1eb]'
                                : 'border-[#403a34] text-[#403a34]'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span
                            className={isDark ? 'text-[#f6f1eb]/90' : 'text-[#333333]'}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() =>
                      onSelectTierForQuote(
                        tier.preselectService,
                        `Enquiry regarding ${tier.name} package`
                      )
                    }
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 type-xs-label transition-all cursor-pointer active:scale-[0.98] ${
                      isDark
                        ? 'bg-[#f6f1eb] text-[#403a34] hover:bg-white'
                        : 'bg-[#403a34] text-[#f6f1eb] hover:bg-[#333333]'
                    }`}
                  >
                    <span>REQUEST FREE SITE QUOTE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

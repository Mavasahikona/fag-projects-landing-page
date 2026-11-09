import React from 'react';
import { Reveal } from './Reveal';
import { ShieldCheck, Award, Building2, Compass } from 'lucide-react';
import { COMPANY_INFO } from '../data/fagProjectsData';

export const SocialProofBar: React.FC = () => {
  const credentials = [
    {
      icon: Award,
      eyebrow: 'PROCOMPARE & FACEBOOK VERIFIED',
      metric: 'FagProjects Verified',
      caption: 'Trusted across Johannesburg residential estates and commercial parks.',
      href: COMPANY_INFO.socials.proCompareUrl,
    },
    {
      icon: Compass,
      eyebrow: 'GAUTENG SERVICE FOOTPRINT',
      metric: '6 Core Suburbs',
      caption: 'Cosmo City Ext 4, Randburg, Sandton, Rosebank, Fourways & Kempton Park.',
      href: '#contact-quote',
    },
    {
      icon: Building2,
      eyebrow: 'FULL-SPECTRUM TRADES',
      metric: '5 Specialized Crews',
      caption: 'Building renovations, painting, roofing, plumbing, paving & automated gates.',
      href: '#services',
    },
    {
      icon: ShieldCheck,
      eyebrow: 'OWNER-SUPERVISED QUALITY',
      metric: '100% Accountability',
      caption: 'Direct project oversight by Frank with transparent, itemized quotations.',
      href: '#benefits',
    },
  ];

  return (
    <section
      aria-label="Credentials and Social Proof"
      className="bg-[#f6f1eb] border-y border-[#403a34]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#403a34]">
          {credentials.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.eyebrow} delay={idx * 0.06}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-6 md:p-8 hover:bg-[#403a34]/[0.04] transition-colors group h-full"
                >
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="type-xs-label text-[#555555] group-hover:text-[#403a34] transition-colors">
                      {item.eyebrow}
                    </span>
                    <Icon className="w-4 h-4 text-[#403a34] opacity-80" />
                  </div>
                  <div className="type-xl-title text-[#403a34] mb-2">
                    {item.metric}
                  </div>
                  <p className="type-xs-meta text-[#555555] leading-relaxed">
                    {item.caption}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

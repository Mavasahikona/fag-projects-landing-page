import React from 'react';
import { ArrowUp, Phone, Mail, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/fagProjectsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f6f1eb] text-[#403a34] border-t border-[#403a34]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 pt-16 pb-10">
        {/* Top 4-Column Hairline Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-[#403a34]/25">
          {/* Column 1: Identity & Registration */}
          <div className="space-y-4">
            <div className="type-xl-title text-[#403a34]">
              FAG Projects <span className="font-normal text-[14px]">(FagProjects)</span>
            </div>
            <p className="text-[13px] text-[#333333] leading-relaxed">
              South African construction, residential renovation, and industrial
              property maintenance company based in Cosmo City Ext 4, Randburg,
              Johannesburg.
            </p>
            <div className="type-xs-label text-[#555555]">
              CONTACT PERSON: {COMPANY_INFO.contactPerson.toUpperCase()}
            </div>
          </div>

          {/* Column 2: 5 Core Trades */}
          <div>
            <div className="type-xs-label text-[#555555] mb-4">
              SERVICES OFFERED
            </div>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-[14px] text-[#333333] hover:text-[#403a34] hover:underline transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Suburbs */}
          <div>
            <div className="type-xs-label text-[#555555] mb-4">
              AREAS SERVED (GAUTENG)
            </div>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-[14px] text-[#333333]">
              {COMPANY_INFO.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p className="mt-4 type-xs-meta text-[#555555]">
              {COMPANY_INFO.locationFull}
            </p>
          </div>

          {/* Column 4: Direct Lines & Socials */}
          <div>
            <div className="type-xs-label text-[#555555] mb-4">
              DIRECT LINES & PROFILES
            </div>
            <div className="space-y-3 text-[14px]">
              <a
                href={COMPANY_INFO.phonePrimaryHref}
                className="flex items-center gap-2 font-bold text-[#403a34] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.phonePrimary}
              </a>
              <a
                href={COMPANY_INFO.phoneSecondaryHref}
                className="flex items-center gap-2 font-bold text-[#403a34] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.phoneSecondary}
              </a>
              <a
                href={COMPANY_INFO.emailHref}
                className="flex items-center gap-2 text-[#333333] hover:text-[#403a34] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" /> {COMPANY_INFO.email}
              </a>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={COMPANY_INFO.socials.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 type-xs-label text-[#403a34] hover:underline"
                >
                  <span>{COMPANY_INFO.socials.facebookLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={COMPANY_INFO.socials.proCompareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 type-xs-label text-[#403a34] hover:underline"
                >
                  <span>{COMPANY_INFO.socials.proCompareLabel}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Monumental Typographic Footer Anchor */}
        <div className="py-8 md:py-12 border-b border-[#403a34]/25 overflow-hidden">
          <div className="type-5xl-4-display text-[#403a34] tracking-tighter leading-none text-center sm:text-left select-none">
            FAG PROJECTS
          </div>
        </div>

        {/* Bottom Copyright & Top Scroll Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="type-xs-meta text-[#555555]">
            © 2026 FAG Projects (FagProjects) · Residential & Industrial Construction, Johannesburg, South Africa.
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 px-4 py-2 border border-[#403a34] type-xs-label text-[#403a34] hover:bg-[#403a34] hover:text-[#f6f1eb] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

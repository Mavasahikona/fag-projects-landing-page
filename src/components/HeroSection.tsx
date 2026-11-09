import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/fagProjectsData';

interface HeroSectionProps {
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestQuote }) => {
  return (
    <section
      id="top"
      className="relative pt-[84px] md:pt-[100px] pb-10 md:pb-16 bg-[#f6f1eb] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        {/* Top Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 py-4 border-b border-[#403a34]/20"
        >
          <div className="flex items-center gap-2 text-[#403a34]">
            <MapPin className="w-3.5 h-3.5 text-[#403a34]" />
            <span className="type-xs-label">
              COSMO CITY EXT 4 · RANDBURG · SANDTON · ROSEBANK · FOURWAYS · KEMPTON PARK
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="type-xs-meta-tracked text-[#555555]">
              RESIDENTIAL & INDUSTRIAL SPECIALISTS
            </span>
          </div>
        </motion.div>

        {/* Architectural Display Headline Block */}
        <div className="pt-8 md:pt-12 pb-8 md:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="type-xs-label text-[#555555] mb-4 flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-[#403a34]" />
              <span>FAG PROJECTS (FAGPROJECTS) — GAUTENG MASTER BUILDERS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="type-5xl-3-display text-[#403a34] tracking-tight"
            >
              CRAFTED TO{' '}
              <span className="block font-bold">ENDURE.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-between gap-6"
          >
            <p className="type-lg-lead text-[#333333]">
              End-to-end residential renovations, structural building, roofing,
              waterproofing, plumbing, painting, paving, and gate automation across
              greater Johannesburg.
            </p>

            {/* Primary Conversion Controls */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <button
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#403a34] text-[#f6f1eb] hover:bg-[#333333] transition-all duration-300 type-xs-label cursor-pointer active:scale-[0.98]"
              >
                <span>BOOK FREE SITE QUOTE WITH FRANK</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#403a34] bg-[#f6f1eb] text-[#403a34] hover:bg-[#403a34] hover:text-[#f6f1eb] transition-all duration-300 type-xs-label"
              >
                <span>EXPLORE 5 CORE TRADES</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero Full-Width Architectural Photography Frame with Ambient Overlay Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full border border-[#403a34] overflow-hidden bg-[#403a34]"
        >
          <div className="relative h-[380px] sm:h-[480px] md:h-[580px] lg:h-[640px] w-full overflow-hidden">
            <motion.img
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              src="/images/hero-architecture.jpg"
              alt="Modern Johannesburg residential renovation and roofing craftsmanship by FAG Projects"
              className="w-full h-full object-cover object-center"
            />
            {/* Warm linen atmospheric gradient vignette */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#403a34]/80 via-[#403a34]/20 to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Floating Linen Surface Info Bar anchored to Hero Image Bottom */}
          <div className="relative md:absolute md:bottom-6 md:left-6 md:right-6 bg-[#f6f1eb]/95 backdrop-blur-md border-t md:border border-[#403a34] p-5 md:p-6 grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
            <div className="flex flex-col gap-1">
              <span className="type-xs-label text-[#555555]">SPEAK DIRECTLY WITH</span>
              <span className="type-xl-title text-[#403a34]">Frank · Owner & Lead</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="type-xs-label text-[#555555]">DIRECT PHONE / WHATSAPP</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <a
                  href={COMPANY_INFO.phonePrimaryHref}
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#403a34] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY_INFO.phonePrimary}
                </a>
                <a
                  href={COMPANY_INFO.phoneSecondaryHref}
                  className="text-[13px] font-medium text-[#333333] hover:text-[#403a34] hover:underline"
                >
                  / {COMPANY_INFO.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="type-xs-label text-[#555555]">EMAIL DISPATCH</span>
              <a
                href={COMPANY_INFO.emailHref}
                className="text-[14px] font-bold text-[#403a34] hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            <div className="flex items-center md:justify-end gap-2 text-[#403a34]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span className="type-xs-label">FREE GAUTENG SITE ASSESSMENTS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

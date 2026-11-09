import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUpRight, Menu, X, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/fagProjectsData';

interface NavbarProps {
  onQuoteClick: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Standard', href: '#benefits' },
  { label: 'Packages', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#f6f1eb]/92 backdrop-blur-md border-b border-[#403a34]/25 py-3'
            : 'bg-[#f6f1eb]/75 backdrop-blur-sm border-b border-[#403a34]/12 py-4'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
          {/* Brand Monogram & Identity */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 border border-[#403a34] bg-[#403a34] text-[#f6f1eb] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              {/* Architectural gable & beam vector mark */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 20V10L12 3L21 10V20"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                />
                <path
                  d="M8 20V12H16V20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                />
                <path d="M12 3V12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold tracking-[0.04em] text-[#403a34] leading-none">
                FAG PROJECTS
              </span>
              <span className="type-xs-label-regular text-[#555555] mt-1">
                COSMO CITY · JOHANNESBURG
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="type-xs-label text-[#403a34]/80 hover:text-[#403a34] relative py-1 transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#403a34] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Direct Conversion Actions */}
          <div className="flex items-center gap-3">
            <a
              href={COMPANY_INFO.phonePrimaryHref}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 border border-[#403a34]/35 hover:border-[#403a34] text-[#403a34] transition-colors type-xs-label bg-[#f6f1eb]"
              title="Call Frank directly"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>

            <button
              onClick={onQuoteClick}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#403a34] text-[#f6f1eb] hover:bg-[#333333] transition-all duration-300 type-xs-label cursor-pointer active:scale-[0.98]"
            >
              <span>Request Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 border border-[#403a34]/30 text-[#403a34] bg-[#f6f1eb] cursor-pointer"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[63px] z-40 bg-[#f6f1eb] border-b border-[#403a34] px-5 py-6 lg:hidden shadow-xl"
          >
            <nav className="flex flex-col divide-y divide-[#403a34]/15">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3.5 type-xs-label text-[#403a34] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#555555]" />
                </a>
              ))}
            </nav>

            <div className="mt-5 pt-4 border-t border-[#403a34]/20 space-y-2.5">
              <div className="type-xs-label-regular text-[#555555]">
                DIRECT CONTACT WITH FRANK
              </div>
              <div className="grid grid-cols-1 gap-2">
                <a
                  href={COMPANY_INFO.phonePrimaryHref}
                  className="flex items-center gap-2 text-[13px] font-medium text-[#403a34]"
                >
                  <Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.phonePrimary}
                </a>
                <a
                  href={COMPANY_INFO.phoneSecondaryHref}
                  className="flex items-center gap-2 text-[13px] font-medium text-[#403a34]"
                >
                  <Phone className="w-3.5 h-3.5" /> {COMPANY_INFO.phoneSecondary}
                </a>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-2 text-[13px] font-medium text-[#403a34]"
                >
                  <Mail className="w-3.5 h-3.5" /> {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

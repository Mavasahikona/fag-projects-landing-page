import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/fagProjectsData';
import { Reveal } from './Reveal';

interface QuoteSectionProps {
  preselectedService: string;
  preselectedNote: string;
}

const PROPERTY_TYPES = ['Residential Property', 'Industrial / Commercial Facility'];

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  preselectedService,
  preselectedNote,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [suburb, setSuburb] = useState('Sandton');
  const [propertyType, setPropertyType] = useState(PROPERTY_TYPES[0]);
  const [selectedTrade, setSelectedTrade] = useState(
    preselectedService || SERVICES[0].title
  );
  const [notes, setNotes] = useState(preselectedNote || '');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setSelectedTrade(preselectedService);
      setSubmitted(false);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedNote) {
      setNotes(preselectedNote);
      setSubmitted(false);
    }
  }, [preselectedNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const compiledMessage = encodeURIComponent(
    `Hello Frank (FAG Projects),\nName: ${name}\nPhone: ${phone}\nSuburb: ${suburb}\nProperty Type: ${propertyType}\nService Needed: ${selectedTrade}\nScope Notes: ${
      notes || 'Please contact me to arrange a free site assessment.'
    }`
  );

  return (
    <section
      id="contact-quote"
      className="py-16 md:py-24 bg-[#403a34] text-[#f6f1eb]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Giant Architectural Prompt & Direct Contact */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal>
              <div className="type-xs-label text-[#f6f1eb]/70 mb-3">
                07 / FREE ON-SITE ASSESSMENT
              </div>
              <h2 className="type-5xl-2-display text-[#f6f1eb] mb-5">
                Start Your Project with Frank Today.
              </h2>
              <p className="type-lg-lead text-[#f6f1eb]/85">
                Whether you need urgent roof waterproofing in Cosmo City, a
                kitchen remodel in Sandton, gate automation in Fourways, or
                industrial maintenance in Kempton Park—get an honest, itemized
                written quote directly from the owner.
              </p>
            </Reveal>

            {/* Direct Contact Specification Table */}
            <Reveal delay={0.1}>
              <div className="border-t border-[#f6f1eb]/25 divide-y divide-[#f6f1eb]/20">
                <div className="py-5 flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#f6f1eb] shrink-0 mt-0.5" />
                  <div>
                    <div className="type-xs-label text-[#f6f1eb]/65 mb-1">
                      CALL OR WHATSAPP (ASK FOR {COMPANY_INFO.contactPerson.toUpperCase()})
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      <a
                        href={COMPANY_INFO.phonePrimaryHref}
                        className="text-[17px] font-bold text-[#f6f1eb] hover:underline"
                      >
                        {COMPANY_INFO.phonePrimary}
                      </a>
                      <a
                        href={COMPANY_INFO.phoneSecondaryHref}
                        className="text-[17px] font-bold text-[#f6f1eb] hover:underline"
                      >
                        {COMPANY_INFO.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#f6f1eb] shrink-0 mt-0.5" />
                  <div>
                    <div className="type-xs-label text-[#f6f1eb]/65 mb-1">
                      DIRECT EMAIL
                    </div>
                    <a
                      href={COMPANY_INFO.emailHref}
                      className="text-[16px] font-medium text-[#f6f1eb] hover:underline"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="py-5 flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#f6f1eb] shrink-0 mt-0.5" />
                  <div>
                    <div className="type-xs-label text-[#f6f1eb]/65 mb-1">
                      BASE & SURROUNDING AREAS COVERED
                    </div>
                    <div className="text-[15px] text-[#f6f1eb] font-medium mb-1">
                      {COMPANY_INFO.locationFull}
                    </div>
                    <div className="type-xs-meta text-[#f6f1eb]/75">
                      Daily dispatch to Sandton, Rosebank, Fourways, Randburg &
                      Kempton Park
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={COMPANY_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#f6f1eb] text-[#403a34] hover:bg-white transition-colors type-xs-label"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT WITH FRANK ON WHATSAPP</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Conversion Form Card on Warm Linen Canvas */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="bg-[#f6f1eb] text-[#403a34] border border-[#f6f1eb] p-6 sm:p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-6"
                  >
                    <div className="w-14 h-14 mx-auto border border-[#403a34] bg-[#403a34] text-[#f6f1eb] flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="type-xs-label text-[#555555] mb-2">
                        ASSESSMENT REQUEST RECEIVED
                      </div>
                      <h3 className="type-4xl-display text-[#403a34] mb-3">
                        Thank You, {name}.
                      </h3>
                      <p className="type-lg-lead text-[#333333] max-w-lg mx-auto">
                        We’ve logged your enquiry for{' '}
                        <strong>{selectedTrade}</strong> in{' '}
                        <strong>{suburb}</strong>. Frank or our supervisor will
                        call you on <strong>{phone}</strong> shortly.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#403a34]/20 flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={`https://wa.me/27737195799?text=${compiledMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#403a34] text-[#f6f1eb] hover:bg-[#333333] type-xs-label"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>SEND COPY TO FRANK’S WHATSAPP NOW</span>
                      </a>
                      <a
                        href={`mailto:${COMPANY_INFO.email}?subject=Quote%20Request%20-%20${encodeURIComponent(
                          selectedTrade
                        )}&body=${compiledMessage}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#403a34] text-[#403a34] hover:bg-[#403a34]/5 type-xs-label"
                      >
                        <Mail className="w-4 h-4" />
                        <span>OPEN IN EMAIL APP</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[12px] underline text-[#555555] hover:text-[#403a34] cursor-pointer"
                    >
                      Edit request details
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#403a34]/20">
                      <span className="type-xl-title text-[#403a34]">
                        Request a Free Site Quote
                      </span>
                      <span className="type-xs-label text-[#555555]">
                        RESPONSE WITHIN 2 HOURS
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="quote-name"
                          className="block type-xs-label text-[#403a34] mb-2"
                        >
                          YOUR FULL NAME *
                        </label>
                        <input
                          id="quote-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sipho Ndlovu"
                          className="w-full px-4 py-3.5 bg-[#f6f1eb] border border-[#403a34]/40 focus:border-[#403a34] focus:outline-none text-[14px] text-[#333333] placeholder:text-[#555555]/60"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="quote-phone"
                          className="block type-xs-label text-[#403a34] mb-2"
                        >
                          PHONE OR WHATSAPP NUMBER *
                        </label>
                        <input
                          id="quote-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 073 123 4567"
                          className="w-full px-4 py-3.5 bg-[#f6f1eb] border border-[#403a34]/40 focus:border-[#403a34] focus:outline-none text-[14px] text-[#333333] placeholder:text-[#555555]/60"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="quote-suburb"
                          className="block type-xs-label text-[#403a34] mb-2"
                        >
                          PROPERTY SUBURB / AREA
                        </label>
                        <select
                          id="quote-suburb"
                          value={suburb}
                          onChange={(e) => setSuburb(e.target.value)}
                          className="w-full px-4 py-3.5 bg-[#f6f1eb] border border-[#403a34]/40 focus:border-[#403a34] focus:outline-none text-[14px] text-[#333333]"
                        >
                          <option value="Cosmo City Ext 4">Cosmo City Ext 4</option>
                          <option value="Randburg">Randburg</option>
                          <option value="Sandton">Sandton</option>
                          <option value="Rosebank">Rosebank</option>
                          <option value="Fourways">Fourways</option>
                          <option value="Kempton Park">Kempton Park</option>
                          <option value="Other Greater Johannesburg Area">
                            Other Greater Johannesburg Area
                          </option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="quote-service"
                          className="block type-xs-label text-[#403a34] mb-2"
                        >
                          PRIMARY SERVICE NEEDED
                        </label>
                        <select
                          id="quote-service"
                          value={selectedTrade}
                          onChange={(e) => setSelectedTrade(e.target.value)}
                          className="w-full px-4 py-3.5 bg-[#f6f1eb] border border-[#403a34]/40 focus:border-[#403a34] focus:outline-none text-[14px] text-[#333333]"
                        >
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Multi-Trade Renovation Package">
                            Multi-Trade Renovation Package
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <span className="block type-xs-label text-[#403a34] mb-2">
                        PROPERTY TYPE
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {PROPERTY_TYPES.map((typeOption) => {
                          const isSelected = propertyType === typeOption;
                          return (
                            <button
                              type="button"
                              key={typeOption}
                              onClick={() => setPropertyType(typeOption)}
                              className={`py-3 px-4 border border-[#403a34] type-xs-label transition-colors cursor-pointer text-center ${
                                isSelected
                                  ? 'bg-[#403a34] text-[#f6f1eb]'
                                  : 'bg-[#f6f1eb] text-[#403a34] hover:bg-[#403a34]/5'
                              }`}
                            >
                              {typeOption}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="quote-notes"
                        className="block type-xs-label text-[#403a34] mb-2"
                      >
                        BRIEF PROJECT DESCRIPTION
                      </label>
                      <textarea
                        id="quote-notes"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Describe what needs repairing, painting, building, plumbing, roofing, or paving..."
                        className="w-full px-4 py-3 bg-[#f6f1eb] border border-[#403a34]/40 focus:border-[#403a34] focus:outline-none text-[14px] text-[#333333] placeholder:text-[#555555]/60"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#403a34] text-[#f6f1eb] hover:bg-[#333333] transition-all duration-300 type-xs-label cursor-pointer active:scale-[0.99]"
                    >
                      <span>SUBMIT FREE QUOTE REQUEST TO FRANK</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <p className="text-center type-xs-meta text-[#555555]">
                      No obligation · Zero call-out fee on quoted Gauteng jobs ·{' '}
                      <strong>{COMPANY_INFO.email}</strong>
                    </p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

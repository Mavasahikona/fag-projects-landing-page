import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/fagProjectsData';
import { Reveal } from './Reveal';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-[#f6f1eb] border-t border-[#403a34]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Sticky Header Column */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <div className="type-xs-label text-[#555555] mb-3">
                  06 / COMMON QUESTIONS
                </div>
                <h2 className="type-5xl-2-display text-[#403a34] mb-5">
                  Answers Before We Break Ground.
                </h2>
                <p className="type-lg-lead text-[#333333] mb-6">
                  Clear information about free quotations with Frank, material
                  supply options, service suburbs, and residential/industrial
                  scheduling.
                </p>
                <div className="border-t border-[#403a34]/20 pt-5">
                  <div className="type-xs-label text-[#555555] mb-1">
                    STILL HAVE A SITE QUESTION?
                  </div>
                  <p className="text-[14px] text-[#333333]">
                    Call or WhatsApp Frank on{' '}
                    <a
                      href="tel:+27737195799"
                      className="font-bold text-[#403a34] underline"
                    >
                      +27 73 719 5799
                    </a>{' '}
                    any weekday or Saturday morning.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Hairline Bordered Accordion Stack */}
          <div className="lg:col-span-7 border-t border-[#403a34]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="border-b border-[#403a34]"
                >
                  <button
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                    className="w-full py-6 flex items-center justify-between gap-6 text-left cursor-pointer group"
                  >
                    <span className="type-xl-title text-[#403a34] group-hover:opacity-80 transition-opacity">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 shrink-0 border border-[#403a34] flex items-center justify-center text-[#403a34] group-hover:bg-[#403a34] group-hover:text-[#f6f1eb] transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12 text-[15px] text-[#333333] leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

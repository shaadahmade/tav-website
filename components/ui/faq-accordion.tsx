import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  eyebrow = 'FAQ',
  title = 'Frequently Asked Questions',
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn('dark bg-zinc-950 py-20 md:py-28 relative', className)}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(80vw,700px)] h-[min(80vw,700px)] bg-brand-teal/5 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          {title && (
            <h2 className="font-chunky font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              {title}
            </h2>
          )}
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  'rounded-2xl border bg-zinc-900/40 backdrop-blur-sm transition-all duration-300',
                  isOpen
                    ? 'border-brand-teal/40 bg-zinc-900/70'
                    : 'border-white/5 hover:border-white/15',
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-start justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left group"
                >
                  <span
                    className={cn(
                      'font-chunky font-bold text-base sm:text-lg md:text-xl leading-snug pr-2 transition-colors duration-300',
                      isOpen ? 'text-white' : 'text-zinc-200 group-hover:text-white',
                    )}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className={cn(
                      'flex-shrink-0 mt-0.5 sm:mt-1 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border transition-colors duration-300',
                      isOpen
                        ? 'border-brand-teal/50 bg-brand-teal/10 text-brand-teal'
                        : 'border-white/15 bg-white/5 text-zinc-300 group-hover:text-white',
                    )}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span
                          key="x"
                          initial={{ opacity: 0, rotate: -90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: 90 }}
                          transition={{ duration: 0.18 }}
                          className="inline-flex"
                        >
                          <X className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="plus"
                          initial={{ opacity: 0, rotate: 90 }}
                          animate={{ opacity: 1, rotate: 0 }}
                          exit={{ opacity: 0, rotate: -90 }}
                          transition={{ duration: 0.18 }}
                          className="inline-flex"
                        >
                          <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.22, delay: 0.05 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-7 pb-5 sm:pb-6 pt-0">
                        <div className="border-t border-white/5 pt-4 sm:pt-5">
                          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed whitespace-pre-line">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;

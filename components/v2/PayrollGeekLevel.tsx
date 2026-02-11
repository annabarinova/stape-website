'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const characters = [
  {
    id: 'founder',
    role: 'Founder / CEO',
    level: 'I don\u2019t want to know',
    tagline: 'Just tell me everyone got paid',
    description:
      'Your contractors get legalized income for residence permits and Digital Nomad visas \u2014 automatically. Your investors see a clean audit trail. Your team grows from 15 to 70, and the payment process stays invisible. You never open a spreadsheet again.',
    emoji: '\u{1F3AE}',
    accent: 'bg-accent',
  },
  {
    id: 'hiring',
    role: 'Hiring Manager',
    level: 'Slack ping when it\u2019s done',
    tagline: 'One notification. Zero spreadsheets.',
    description:
      'Your candidate in Tbilisi doesn\u2019t wait 3 weeks for a contract. Your senior engineer in Buenos Aires stops DMing you about late payments. You get a Slack notification that everyone\u2019s paid, and you go back to building product.',
    emoji: '\u{1F514}',
    accent: 'bg-blue-100',
  },
  {
    id: 'cfo',
    role: 'CFO / Finance',
    level: 'Show me everything',
    tagline: 'Full dashboard, every currency, every audit line',
    description:
      'One B2B invoice instead of hundreds of contracts. VAT offset works in your favor. FX at mid-market + 0.5%, visible before you confirm. Complete audit trail. When the auditor asks how you pay people in 23 countries, you show them one vendor relationship.',
    emoji: '\u{1F4CA}',
    accent: 'bg-emerald-100',
  },
  {
    id: 'hr',
    role: 'HR Manager',
    level: 'Auto-pilot mode',
    tagline: 'Contracts, docs, compliance \u2014 all handled',
    description:
      'You stop managing a zoo of 4 providers across 12 countries. Every contractor gets paid on the promised day, in the promised amount. Compliance documents generate automatically. You go from \u2018payroll specialist who also does HR\u2019 back to \u2018HR leader.\u2019',
    emoji: '\u2708\uFE0F',
    accent: 'bg-violet-100',
  },
];

export default function PayrollGeekLevel() {
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const activeCharacter = characters.find((c) => c.id === selected);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-primary tracking-[-0.02em] leading-[1.1]">
            How deep do you want to go?
          </h2>
        </motion.div>
        <motion.p
          className="text-foreground-muted text-center mb-12 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Choose your payroll involvement level
        </motion.p>

        {/* Character Select Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {characters.map((char) => (
            <button
              key={char.id}
              onClick={() => setSelected(selected === char.id ? null : char.id)}
              className={`relative text-left rounded-2xl p-5 md:p-6 transition-all duration-300 border-2 ${
                selected === char.id
                  ? 'border-primary bg-white shadow-lg scale-[1.02]'
                  : 'border-transparent bg-white hover:border-primary/20 hover:shadow-md'
              }`}
            >
              {/* Emoji avatar */}
              <div className={`w-12 h-12 rounded-xl ${char.accent} flex items-center justify-center text-2xl mb-4`}>
                {char.emoji}
              </div>

              {/* Role */}
              <p className="text-sm font-display font-bold text-primary mb-1">{char.role}</p>

              {/* Level label */}
              <p className="text-xs font-mono text-foreground-muted leading-snug mb-2">
                &ldquo;{char.level}&rdquo;
              </p>

              {/* Tagline */}
              <p className="text-xs text-foreground-secondary leading-relaxed">{char.tagline}</p>

              {/* Selection indicator */}
              {selected === char.id && (
                <motion.div
                  className="absolute top-3 right-3 w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                >
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </button>
          ))}
        </motion.div>

        {/* Expanded detail panel */}
        <AnimatePresence mode="wait">
          {activeCharacter && (
            <motion.div
              key={activeCharacter.id}
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-10 h-10 rounded-lg ${activeCharacter.accent} flex items-center justify-center text-xl flex-shrink-0`}>
                    {activeCharacter.emoji}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-primary">{activeCharacter.role}</h3>
                    <p className="text-xs font-mono text-foreground-muted">{activeCharacter.level}</p>
                  </div>
                </div>
                <p className="text-sm text-primary leading-relaxed mb-6">{activeCharacter.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
                >
                  See how this works for me
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

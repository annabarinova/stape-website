'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const todayBullets = [
  'Cross-check three spreadsheets for contractor rates',
  'Convert currencies manually and hope you got the rate right',
  'Send 47 individual payment instructions',
  'Chase 12 people for missing tax documents',
  'Explain to your team why payments are late again',
  'Reconcile failed transactions across 3 tools',
  'Generate compliance reports for multiple jurisdictions',
  'Answer "where\'s my money?" messages until 9pm',
];

const stapeBullets = [
  'Close the deal you\u2019ve been chasing for weeks',
  'Interview the senior engineer in S\u00e3o Paulo',
  'Launch the feature your users have been asking for',
  'Take a proper lunch break',
  'Leave at 6pm knowing everyone\u2019s paid',
];

export default function WorkThatDisappearsV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work-that-disappears" ref={ref} className="py-20 md:py-28 bg-primary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-white leading-[1.1] tracking-[-0.02em]">
            Two ways to spend your Tuesday
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: What You Do Today */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <h3 className="text-lg font-display font-bold text-white mb-6">Your Tuesday Without Stape</h3>
            <ul className="space-y-4">
              {todayBullets.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: What You Do With Stape */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent/10 rounded-2xl p-8 md:p-10 border border-accent/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-display font-bold text-white mb-6">Your Tuesday With Stape</h3>
              <ul className="space-y-4">
                {stapeBullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm leading-relaxed">
                We&apos;re excellent at work that shouldn&apos;t exist. It&apos;s the fastest way to make it disappear.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

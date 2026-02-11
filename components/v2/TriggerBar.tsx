'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const triggers = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    text: 'Provider stopped payouts',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: 'Bank rejected the SWIFT',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    text: 'New sanctions on your corridor',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    text: 'Scaling beyond 15 people',
  },
];

export default function TriggerBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-8 md:py-10 bg-white border-t border-border/50">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.p
          className="text-xs font-semibold text-foreground-muted uppercase tracking-widest text-center mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          Sound familiar?
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          {triggers.map((trigger, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-3.5 bg-primary/[0.03] border border-primary/10 rounded-lg"
            >
              <span className="text-primary/60 flex-shrink-0">{trigger.icon}</span>
              <span className="text-sm font-medium text-primary leading-snug">{trigger.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-sm text-primary font-medium text-center mt-5"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          We built Stape for exactly this moment.{' '}
          <a href="#" className="text-accent font-semibold hover:underline">
            Talk to us now &rarr;
          </a>
        </motion.p>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const triggers = [
  'Provider stopped payouts?',
  'Bank rejected the SWIFT?',
  'New sanctions on your corridor?',
  'Scaling beyond 15 people?',
];

export default function TriggerBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-10 md:py-14 bg-background-secondary">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-4"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.6 }}
        >
          {triggers.map((trigger, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-white border border-border rounded-full text-sm text-primary font-medium"
            >
              {trigger}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="text-sm text-foreground-muted text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          You&apos;re in the right place. We built Stape for exactly this moment.
        </motion.p>
      </div>
    </section>
  );
}

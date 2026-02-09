'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineSteps = [
  {
    label: 'Today',
    title: '6 hours of manual work',
    description: 'Spreadsheets, currency conversion, payment instructions, tax docs, compliance reports',
  },
  {
    label: 'Tomorrow',
    title: 'One click',
    description: 'Upload your contractor list, review details, approve payments',
  },
  {
    label: 'Done',
    title: 'Everyone paid',
    description: 'Automatic compliance, currency conversion, tax handling, and payment tracking',
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-[800px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-[32px] md:text-[40px] font-display font-extrabold text-primary leading-[1.1] tracking-[-0.02em]">
            From chaos to paid in three steps
          </h2>
        </motion.div>

        {/* Vertical timeline in a card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-background-secondary rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-0">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Vertical line + circle */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-white border-2 border-border flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                    {index + 1}
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-px h-full min-h-[48px] bg-border" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 ${index === timelineSteps.length - 1 ? 'pb-0' : ''}`}>
                  <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wide mb-1">
                    {step.label}
                  </p>
                  <h3 className="text-lg font-display font-bold text-primary mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

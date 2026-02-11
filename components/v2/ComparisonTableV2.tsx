'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const comparisonData = [
  {
    feature: 'Time per payroll cycle',
    diy: '6 hours every cycle',
    tool: '2 hours configuring',
    stape: '6 minutes total',
  },
  {
    feature: 'What you learn',
    diy: 'You learn tax law',
    tool: 'You learn their system',
    stape: 'You learn nothing',
  },
  {
    feature: 'Risk ownership',
    diy: 'You own all the risk',
    tool: 'You still own the risk',
    stape: 'We own the risk',
  },
  {
    feature: 'Tools needed',
    diy: 'Excel + Wise + crypto + hope',
    tool: 'Dashboard + 5 integrations',
    stape: 'One click',
  },
  {
    feature: 'Support burden',
    diy: '"Where\'s my payment?" DMs',
    tool: '"How do I...?" tickets',
    stape: 'Radio silence (the good kind)',
  },
];

export default function ComparisonTableV2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12">
        <motion.h2
          className="text-[32px] md:text-[40px] font-display font-extrabold text-primary text-center mb-4 tracking-[-0.02em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Three options. Two waste your time.
        </motion.h2>
        <motion.p
          className="text-foreground-muted text-center mb-12 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          Choose wisely.
        </motion.p>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Column 1: DIY */}
          <div className="bg-background-secondary rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="mb-6 pb-4 border-b border-border">
              <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-1">Option A</p>
              <h3 className="text-lg font-display font-bold text-primary">Keep DIY-ing it</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.map((row, i) => (
                <li key={i}>
                  <p className="text-[11px] font-semibold text-foreground-muted uppercase tracking-wider mb-0.5">{row.feature}</p>
                  <p className="text-sm text-foreground-secondary">{row.diy}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Better Tool */}
          <div className="bg-background-secondary rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="mb-6 pb-4 border-b border-border">
              <p className="text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-1">Option B</p>
              <h3 className="text-lg font-display font-bold text-primary">A better payroll tool</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.map((row, i) => (
                <li key={i}>
                  <p className="text-[11px] font-semibold text-foreground-muted uppercase tracking-wider mb-0.5">{row.feature}</p>
                  <p className="text-sm text-foreground-secondary">{row.tool}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Stape — highlighted */}
          <div className="bg-primary rounded-2xl p-6 md:p-8 ring-2 ring-accent">
            <div className="mb-6 pb-4 border-b border-white/15">
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">Option C</p>
              <h3 className="text-lg font-display font-bold text-white">Stape</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.map((row, i) => (
                <li key={i}>
                  <p className="text-[11px] font-semibold text-white/50 uppercase tracking-wider mb-0.5">{row.feature}</p>
                  <p className="text-sm text-white font-medium">{row.stape}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.p
          className="text-sm text-foreground-muted text-center mt-8 italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We&apos;re not a better mousetrap. We&apos;re making mice irrelevant.
        </motion.p>
      </div>
    </section>
  );
}

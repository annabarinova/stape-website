'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function PricingComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pricing" ref={ref} className="py-20 md:py-28 bg-background-secondary">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12">
        <motion.h2
          className="text-[32px] md:text-[40px] font-display font-extrabold text-primary text-center mb-12 tracking-[-0.02em]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          What it costs vs what it costs
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Current System */}
          <div className="bg-white rounded-2xl p-8 border border-border">
            <h3 className="text-lg font-display font-bold text-primary mb-6">Your Current System</h3>
            <ul className="space-y-4 text-sm text-foreground-secondary">
              <li className="flex items-start gap-2">
                <span className="text-foreground-muted">•</span>
                <span>Your time: <span className="text-primary font-medium">___</span> hours/month × your hourly rate = €<span className="text-primary font-medium">___</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground-muted">•</span>
                <span>Failed transactions: <span className="text-primary font-medium">___</span> per month × time to reconcile = €<span className="text-primary font-medium">___</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground-muted">•</span>
                <span>Accountant briefings: <span className="text-primary font-medium">___</span> hours/month × rate = €<span className="text-primary font-medium">___</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-foreground-muted">•</span>
                <span>Compliance risk: <span className="italic">Priceless (but real)</span></span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-primary">
                <span className="font-semibold">Total:</span> €<span className="text-primary font-medium">___</span>/month + your sanity
              </p>
            </div>
          </div>

          {/* Stape */}
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-lg font-display font-bold mb-6">Stape</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary-foreground/60">•</span>
                <span>€50 per payout</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-foreground/60">•</span>
                <span>Transparent forex (no hidden spreads)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-foreground/60">•</span>
                <span>Compliance included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-foreground/60">•</span>
                <span>Audit trails included</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-foreground/60">•</span>
                <span>Support included</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-foreground/20">
              <p className="text-sm">
                <span className="font-semibold">Total:</span> €50 × number of payouts
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-md hover:bg-primary/90 transition-colors"
          >
            Calculate Your Real Cost
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

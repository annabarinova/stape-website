'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface Situation {
  id: string;
  text: string;
  yesCount: number;
  noCount: number;
}

const initialSituations: Situation[] = [
  {
    id: 'provider-died',
    text: 'Your payment provider just froze payouts — and your contractors are asking where the money is.',
    yesCount: 304,
    noCount: 42,
  },
  {
    id: 'swift-fails',
    text: 'You sent a SWIFT transfer last week. It bounced. Now you\'re explaining to your engineer why they\'re paid late. Again.',
    yesCount: 267,
    noCount: 58,
  },
  {
    id: 'sanctions-hit',
    text: 'New sanctions just blocked your payment corridor. Your team in that country is suddenly unpayable.',
    yesCount: 198,
    noCount: 89,
  },
  {
    id: 'spreadsheet-hell',
    text: 'You cross-check three spreadsheets, convert currencies manually, and pray the numbers match. Every. Single. Month.',
    yesCount: 412,
    noCount: 31,
  },
  {
    id: 'scaling-chaos',
    text: 'At 15 people it was fine. At 40 you can\'t sleep the night before payday. Someone is always missed.',
    yesCount: 356,
    noCount: 47,
  },
  {
    id: 'compliance-gamble',
    text: 'You\'re paying contractors in 8 countries and honestly have no idea if you\'re compliant in any of them.',
    yesCount: 289,
    noCount: 63,
  },
  {
    id: 'tool-zoo',
    text: 'Wise for payments. Deel for contracts. A spreadsheet for tracking. Slack for "where\'s my money?" messages.',
    yesCount: 378,
    noCount: 39,
  },
  {
    id: 'wheres-money',
    text: 'You spend more time answering "where\'s my payment?" DMs than doing your actual job.',
    yesCount: 341,
    noCount: 44,
  },
];

export default function TriggerBar() {
  const [votes, setVotes] = useState<Record<string, 'yes' | 'no' | null>>({});
  const [situations, setSituations] = useState<Situation[]>(initialSituations);
  const [totalYes, setTotalYes] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleVote = useCallback((id: string, vote: 'yes' | 'no') => {
    if (votes[id]) return; // Already voted on this card

    setVotes((prev) => ({ ...prev, [id]: vote }));
    setSituations((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              yesCount: vote === 'yes' ? s.yesCount + 1 : s.yesCount,
              noCount: vote === 'no' ? s.noCount + 1 : s.noCount,
            }
          : s
      )
    );
    if (vote === 'yes') {
      setTotalYes((prev) => prev + 1);
    }
  }, [votes]);

  const hasVoted = Object.keys(votes).length > 0;
  const yesVotes = Object.values(votes).filter((v) => v === 'yes').length;

  return (
    <section ref={ref} className="py-16 md:py-20 bg-background-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[28px] md:text-[36px] font-display font-extrabold text-primary tracking-[-0.02em] leading-[1.1] mb-3">
            Recognize <span className="italic">your</span> situation?
          </h2>
          <p className="text-foreground-muted text-sm max-w-xl">
            These are the moments that bring teams to us. If even one sounds familiar — you already know you need a different approach.
          </p>
        </motion.div>

        {/* Situation cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {situations.map((situation, i) => {
            const userVote = votes[situation.id];
            const totalVotes = situation.yesCount + situation.noCount;
            const yesPercent = Math.round((situation.yesCount / totalVotes) * 100);

            return (
              <motion.div
                key={situation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className={`relative flex flex-col justify-between rounded-xl p-5 min-h-[180px] transition-all duration-300 ${
                  userVote === 'yes'
                    ? 'bg-accent/20 border-2 border-accent/40'
                    : userVote === 'no'
                    ? 'bg-white border-2 border-border/50 opacity-60'
                    : 'bg-[#FFF9DB] border-2 border-[#F5E6A3]'
                }`}
              >
                {/* Situation text */}
                <p className="text-[13px] text-primary leading-relaxed mb-4 font-medium">
                  {situation.text}
                </p>

                {/* Vote area */}
                <div className="mt-auto">
                  {/* Vote bar (always visible, fills when voted) */}
                  <div className="h-1 bg-primary/5 rounded-full mb-3 overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: userVote ? `${yesPercent}%` : '0%' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleVote(situation.id, 'yes')}
                        disabled={!!userVote}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                          userVote === 'yes'
                            ? 'bg-accent text-primary'
                            : userVote
                            ? 'bg-primary/5 text-primary/30 cursor-default'
                            : 'bg-primary/5 text-primary hover:bg-accent hover:text-primary cursor-pointer'
                        }`}
                      >
                        {userVote === 'yes' ? '✓' : '👋'} YES
                      </button>
                      <button
                        onClick={() => handleVote(situation.id, 'no')}
                        disabled={!!userVote}
                        className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                          userVote === 'no'
                            ? 'bg-primary/10 text-primary'
                            : userVote
                            ? 'bg-primary/5 text-primary/30 cursor-default'
                            : 'bg-primary/5 text-primary/60 hover:bg-primary/10 cursor-pointer'
                        }`}
                      >
                        NO
                      </button>
                    </div>
                    {/* Vote count */}
                    <AnimatePresence>
                      {userVote && (
                        <motion.span
                          initial={{ opacity: 0, x: 5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="text-[11px] text-primary/40"
                        >
                          {yesPercent}% yes · {totalVotes} votes
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Result / CTA bar */}
        <AnimatePresence>
          {yesVotes >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5 }}
              className="mt-8 bg-primary rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div>
                <p className="text-white font-display font-bold text-base mb-1">
                  {yesVotes >= 4
                    ? 'Yeah — you need this.'
                    : yesVotes >= 3
                    ? 'Three out of three? We should talk.'
                    : 'More than one? That\'s a pattern.'}
                </p>
                <p className="text-white/60 text-sm">
                  Every team that switches wished they&apos;d done it one payroll cycle earlier.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 px-6 py-3 bg-accent text-primary font-semibold text-sm rounded-md hover:bg-accent/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Talk to us now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Metrics from '@/components/Metrics';
import WorkThatDisappears from '@/components/WorkThatDisappears';
import SocialProof from '@/components/SocialProof';
import Timeline from '@/components/Timeline';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function FontContent() {
  const searchParams = useSearchParams();
  const font = searchParams.get('font') || 'space-grotesk';

  const fontLabels: Record<string, string> = {
    'space-grotesk': 'Font A: Space Grotesk',
    'outfit': 'Font B: Outfit ExtraBold',
    'inter': 'Font C: Inter Black',
  };

  const fontClasses: Record<string, string> = {
    'space-grotesk': 'font-[\'Space_Grotesk\',system-ui,sans-serif]',
    'outfit': 'font-[\'Outfit\',system-ui,sans-serif]',
    'inter': 'font-[\'Inter\',system-ui,sans-serif]',
  };

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800;900&display=swap');

        * {
          font-family: ${font === 'space-grotesk' ? "'Space Grotesk', system-ui, sans-serif" : font === 'outfit' ? "'Outfit', system-ui, sans-serif" : "'Inter', system-ui, sans-serif"} !important;
        }
      `}</style>

      <div className="fixed top-4 right-4 z-[100] bg-black/90 backdrop-blur-sm text-white px-5 py-3 rounded-xl text-sm font-bold shadow-xl border border-white/10">
        {fontLabels[font]}
      </div>

      <main className={`min-h-screen bg-background text-foreground ${fontClasses[font]}`}>
        <Navbar />
        <Hero />
        <Metrics />
        <ProductShowcase />
        <WorkThatDisappears />
        <Timeline />
        <SocialProof />
        <Footer />
      </main>
    </>
  );
}

export default function FontsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FontContent />
    </Suspense>
  );
}

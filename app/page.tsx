'use client';

import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import Metrics from '@/components/Metrics';
import WorkThatDisappears from '@/components/WorkThatDisappears';
import SocialProof from '@/components/SocialProof';
import Timeline from '@/components/Timeline';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import ComparisonTable from '@/components/ComparisonTable';
import RoleSpecificOutcomes from '@/components/RoleSpecificOutcomes';
import FAQ from '@/components/FAQ';
import PricingComparison from '@/components/PricingComparison';
import CTA from '@/components/CTA';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Metrics />
      <ProductShowcase />
      <WorkThatDisappears />
      <Timeline />
      <SocialProof />
      <Stats />
      <Features />
      <ComparisonTable />
      <RoleSpecificOutcomes />
      <FAQ />
      <PricingComparison />
      <CTA />
      <Footer />
    </main>
  );
}

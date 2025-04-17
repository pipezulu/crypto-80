
import React from 'react';
import HeroSection from '@/components/phase1/HeroSection';
import TimelineSection from '@/components/phase1/TimelineSection';
import ResultsSection from '@/components/phase1/ResultsSection';
import TestimonialSection from '@/components/phase1/TestimonialSection';
import NextPhaseCTA from '@/components/phase1/NextPhaseCTA';

const Phase1 = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TimelineSection />
      <ResultsSection />
      <TestimonialSection />
      <NextPhaseCTA />
    </div>
  );
};

export default Phase1;

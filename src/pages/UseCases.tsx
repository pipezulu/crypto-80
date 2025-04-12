
import React from 'react';
import { motion } from 'framer-motion';
import UseCaseHero from '@/components/UseCaseHero';
import UseCaseTabs from '@/components/UseCaseTabs';
import UseCaseCTA from '@/components/UseCaseCTA';
import useCasesData from '@/data/useCasesData';

const UseCases = () => {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <UseCaseHero />

      {/* Use Cases Tabs Section */}
      <section className="py-12 px-4 bg-card/30 backdrop-blur-sm relative">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto"
          >
            <UseCaseTabs useCases={useCasesData} />
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <UseCaseCTA />
    </div>
  );
};

export default UseCases;

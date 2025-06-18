
import React from 'react';
import { motion } from 'framer-motion';
import SphereCanvas from '@/components/SphereCanvas';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30 bg-gradient-radial-tech w-96 h-96"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="lg:w-2/3"
          >
            <div className="mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Phase 1: <span className="text-gradient">Blast & Engage</span> the Crypto Community
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Month 1: Deploy 15,000 strategic comments and 10,000 targeted DMs to dominate crypto X conversations 
                and put your project in front of the right people.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }} 
            className="lg:w-1/3 flex justify-center"
          >
            <div className="relative w-[280px] h-[280px]">
              <SphereCanvas color="#9b87f5" particleCount={150} size={280} intensity={2} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-tech-900/80 rounded-full h-20 w-20 flex items-center justify-center border border-tech-300/30 shadow-lg shadow-tech-300/20">
                  <span className="text-3xl font-bold">1</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

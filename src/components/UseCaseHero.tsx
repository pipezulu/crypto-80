
import React from 'react';
import { motion } from 'framer-motion';
import SphereCanvas from './SphereCanvas';

const UseCaseHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-grid py-8">
      <div className="absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 bg-gradient-radial-tech w-96 h-96"></div>
      <div className="absolute right-1/3 bottom-1/4 transform translate-x-1/2 translate-y-1/2 blur-3xl opacity-20 bg-gradient-radial-mango w-96 h-96"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-gradient">Ori</span> Use Cases
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              See how ManyMangoes can solve your specific challenges with our proven LinkedIn approach.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center relative w-full max-w-md mb-8"
          >
            <SphereCanvas 
              color="#F1AB1C" 
              particleCount={150}
              size={200}
              className="mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseHero;

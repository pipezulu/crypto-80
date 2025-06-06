
import React from 'react';
import { motion } from 'framer-motion';
import SphereCanvas from '@/components/SphereCanvas';

const TestimonialSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10 z-0">
        <SphereCanvas color="#9b87f5" particleCount={80} size={300} intensity={0.8} interactive={false} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.3 }} 
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-tech-900 to-tech-900/60 border border-tech-500/20 rounded-lg p-8 shadow-lg">
            <div className="flex flex-row items-center space-x-4">
              <div className="w-16 h-16 flex-shrink-0">
                <div className="w-full h-full bg-gradient-mango rounded-full border-2 border-tech-300/30 shadow-md flex items-center justify-center">
                  <span className="text-2xl">🌳</span>
                </div>
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-lg">Jimi Cohen</p>
                      <p className="text-sm text-muted-foreground">CEO & Co-Founder, TreeGens</p>
                    </div>
                  </div>
                  
                  <p className="italic text-muted-foreground mt-2 text-base">&quot;Within three days, the followers went up by more than 700 people, which was pretty crazy. We've been able to connect with tens of thousands of people, about 20,000 so far. It's been like rocket fuel.&quot;</p>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium mt-4 mb-2 text-sm uppercase text-tech-300">How We Deliver:</h4>
            <p className="text-foreground">
              ManyMangoes deploys surgical precision targeting using advanced crypto community intelligence. 
              Our system identifies and engages the exact people who matter for your project - from DeFi degens 
              to institutional players - ensuring every comment and DM drives real business value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

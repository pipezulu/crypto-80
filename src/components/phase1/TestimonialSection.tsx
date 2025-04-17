
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
                <img 
                  src="/lovable-uploads/0000dc08-2d3b-40c0-8c07-410960351dad.png" 
                  alt="Paul Dearlove" 
                  className="w-full h-full object-cover rounded-full border-2 border-tech-300/30 shadow-md"
                />
              </div>
              <div className="flex-grow">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-lg">Paul Dearlove</p>
                      <p className="text-sm text-muted-foreground">ANZ Director, SAP</p>
                    </div>
                  </div>
                  
                  <p className="italic text-muted-foreground mt-2 text-base">&quot;ManyMangoes has supported my team through LinkedIn lead generation. I found Isaac and the ManyMangoes team to be proactive and willing to pivot so we could get the best results. I look forward to working with Isaac in the future.&quot;</p>
                </div>
              </div>
            </div>
            
            <h4 className="font-medium mt-4 mb-2 text-sm uppercase text-tech-300">How We Help:</h4>
            <p className="text-foreground">
              ManyMangoes provides real-time lead data with our proprietary engagement system that helps you track ROI and maintains healthy CAC from day one. Our data-driven approach gives you direct access to decision-makers without requiring expensive tools or extensive travel.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

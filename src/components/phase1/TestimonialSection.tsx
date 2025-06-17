import React from 'react';
import { motion } from 'framer-motion';
import SphereCanvas from '@/components/SphereCanvas';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import QuoteHighlight from '@/components/QuoteHighlight';

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
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Existing Jimi testimonial */}
          <div className="relative bg-gradient-to-br from-tech-900 to-tech-900/60 border border-tech-500/20 rounded-lg p-8 shadow-lg">
            <div className="flex flex-row items-center space-x-4">
              <div className="w-16 h-16 flex-shrink-0">
                <Avatar className="w-full h-full border-2 border-tech-300/30 shadow-md">
                  <AvatarImage 
                    src="/lovable-uploads/d40c3768-c4b5-4bd4-8cdc-b724941dd115.png" 
                    alt="Jimi Cohen" 
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-mango text-foreground">JC</AvatarFallback>
                </Avatar>
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

          {/* New David Fortson testimonials */}
          <QuoteHighlight 
            quote="We want to properly target the right folks that are at least adjacent, crypto curious or crypto folks who have some level of not degens chasing the latest yield farming opportunity and who are going to buy your token and turn around and dump it when it goes up 10 or 15 or 20%."
            author="David Fortson"
            role="Chief Growth Officer"
            company="Regen Network"
            delay={0.4}
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.5 }} 
            className="bg-gradient-to-br from-tech-900/20 to-tech-900/10 border border-tech-500/20 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Exactly What David Got</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">✅ Quality Targeting</h4>
                <p className="text-sm text-muted-foreground">Regenerative finance community, not pump-and-dump degens</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">✅ Data-Driven Approach</h4>
                <p className="text-sm text-muted-foreground">34+ sextillion data points to find aligned audiences</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">✅ Budget-Friendly Start</h4>
                <p className="text-sm text-muted-foreground">Started small, proved ROI, then scaled up</p>
              </div>
              <div className="bg-card/50 rounded-lg p-4">
                <h4 className="font-medium mb-2">✅ Environmental Focus</h4>
                <p className="text-sm text-muted-foreground">Crypto-curious environmentalists who care about impact</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;

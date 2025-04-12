
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const UseCaseCTA: React.FC = () => {
  return (
    <section className="py-20 bg-card mt-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your LinkedIn Lead Generation?</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            ManyMangoes is ready to implement these LinkedIn solutions specifically for Ori.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg py-6 px-8">
              Request a Proposal
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary/50 text-lg py-6 px-8 hover:bg-primary/10">
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseCTA;

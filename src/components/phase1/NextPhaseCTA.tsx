
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const NextPhaseCTA = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }} 
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to scale the engagement?</h2>
          <p className="text-muted-foreground mb-8">
            See how we optimize targeting and amplify results in Phase 2 of your monthly crypto X domination plan.
          </p>
          
          <Button asChild size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
            <Link to="/phase-2">
              Explore Phase 2
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NextPhaseCTA;

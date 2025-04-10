
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SphereCanvas from '@/components/SphereCanvas';
import PhaseCard from '@/components/PhaseCard';
import QuoteHighlight from '@/components/QuoteHighlight';
import ComparisonTable from '@/components/ComparisonTable';
import { ArrowRight, BarChart3, LineChart, Rocket, ArrowDown } from 'lucide-react';

const Index = () => {
  const scrollToQuote = () => {
    document.getElementById('quote-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid py-24">
        <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30 bg-gradient-radial-tech w-96 h-96"></div>
        <div className="absolute right-0 bottom-0 blur-3xl opacity-30 bg-gradient-radial-mango w-96 h-96"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  The <span className="text-gradient">ManyMangoes</span> 90-Day Rollout Plan
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Build a powerful, omnichannel lead-gen engine in 90 days with immediate results starting from Day 1.
                </p>
                
                <Button onClick={scrollToQuote} variant="outline" size="lg" className="flex items-center justify-center gap-2">
                  <ArrowDown className="h-5 w-5" />
                  <span className="sr-only">Scroll to quote</span>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2 flex justify-center relative"
            >
              <div className="relative w-[500px] h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <SphereCanvas 
                    color="#9b87f5" 
                    particleCount={250}
                    size={500}
                    intensity={2.5}
                    glow={true}
                    maintainSize={true} // Keep the sphere consistently large
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10 bg-background/30 backdrop-blur-sm px-8 py-6 rounded-full shadow-lg border border-primary/20">
                    <h3 className="font-bold text-4xl text-gradient">5-10x</h3>
                    <p className="text-sm text-muted-foreground">Output After 90 Days</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote-section" className="bg-card py-12">
        <div className="container mx-auto px-4">
          <QuoteHighlight 
            quote="We need to ensure that we hit our revenue target. And in order for us to achieve revenue target is we break it down by funnels. That is coming. And how do we ensure we have effective funnels and efficient P and L in terms of cost?"
            author="Galen Leslie"
            role="Segment Owner, JobStreet Express"
            delay={0.2}
          />
        </div>
      </section>

      {/* Phases Section */}
      <section id="phases" className="py-20 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15">
          <SphereCanvas 
            color="#F97316" 
            particleCount={180}
            size={800}
            intensity={1.2}
            interactive={false}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our 90-Day Phased Approach</h2>
            <p className="text-muted-foreground">
              Results start Day 1 (awareness + leads). After 90 days of optimization and 
              amplification, we can 5–10x output based on ROI performance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              id="phase-1-card"
            >
              <PhaseCard 
                phase={1}
                title="Design & Build the Engine"
                description="Days 1-30: Create the foundation for your lead generation strategy"
                link="/phase-1"
                outcomes={[
                  "Surge in profile views, comments, DMs",
                  "Your brand in all the right conversations",
                  "Visibility delivering measurable returns"
                ]}
                delay={0.1}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              id="phase-2-card"
            >
              <PhaseCard 
                phase={2}
                title="Optimize & Personalize"
                description="Days 31-60: Refine and enhance your lead generation process"
                link="/phase-2"
                outcomes={[
                  "Improved lead quality",
                  "Increased mid-funnel engagement",
                  "More conversations turn into meetings"
                ]}
                delay={0.2}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              id="phase-3-card"
            >
              <PhaseCard 
                phase={3}
                title="Scale & Automate"
                description="Days 61-90: Amplify results and create predictable growth"
                link="/phase-3"
                outcomes={[
                  "5-10x reach, leads, and meetings",
                  "Omnichannel dominance",
                  "Consistent lead flow and sales pipeline"
                ]}
                delay={0.3}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-15">
          <SphereCanvas 
            color="#9b87f5" 
            particleCount={150}
            size={600}
            intensity={1}
            interactive={false}
            glow={true}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why This Outperforms Others</h2>
            <p className="text-muted-foreground">
              See how ManyMangoes' approach delivers superior results compared to traditional methods.
            </p>
          </motion.div>
          
          <ComparisonTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 blur-3xl opacity-30 bg-gradient-radial-tech w-96 h-96"></div>
        <div className="absolute right-0 top-0 blur-3xl opacity-30 bg-gradient-radial-mango w-96 h-96"></div>
        <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-15">
          <SphereCanvas 
            color="#F97316" 
            particleCount={120}
            size={500}
            intensity={1.2}
            interactive={false}
            glow={true}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto text-center shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start generating high-quality leads from day one with our proven 90-day rollout plan.
              Let ManyMangoes help you build a powerful, omnichannel lead-gen engine.
            </p>
            
            <Button asChild size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
              <Link to="/phase-1">
                Explore the 90-Day Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

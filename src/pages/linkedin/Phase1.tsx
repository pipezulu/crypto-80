
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SphereCanvas from '@/components/SphereCanvas';
import Timeline from '@/components/Timeline';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const LinkedInPhase1 = () => {
  const timelineItems = [
    {
      title: "Persona & Data Strategy",
      description: "Leverage 1 trillion datapoints to define hyper-targeted personas and identify your audience on LinkedIn."
    },
    {
      title: "LinkedIn Profile Optimization",
      description: "Turn your profile into a high-converting authority asset that attracts your ideal clients."
    },
    {
      title: "Launch Commenting Strategy",
      description: "Deploy personalized comments every month, insight-driven and designed to drive engagement."
    },
    {
      title: "Content Kickoff – Educate Phase",
      description: "Launch first weekly content (1–2x/week) focused on insights, case studies, and FAQs."
    },
    {
      title: "Infrastructure Setup",
      description: "Implement tracking, setup retargeting pixels, and build live dashboards to monitor performance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                  Phase 1: <span className="text-gradient">Design & Build the Engine</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Days 1-30: Create the foundation for your lead generation strategy and start seeing results from day one.
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
                <SphereCanvas 
                  color="#0077B5" 
                  particleCount={150}
                  size={280}
                  intensity={2}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-tech-900/80 rounded-full h-20 w-20 flex items-center justify-center border border-blue-400/30 shadow-lg shadow-blue-400/20">
                    <span className="text-3xl font-bold">1</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 relative">
        <div className="absolute -right-40 top-1/3 opacity-15 z-0">
          <SphereCanvas 
            color="#0077B5" 
            particleCount={100}
            size={300}
            intensity={1}
            interactive={false}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">What We Do in Phase 1</h2>
            <p className="text-muted-foreground">
              In the first 30 days, we'll establish the foundation of your lead generation engine, focusing on data-driven targeting and visibility.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4 text-center">⚡ Results in Month 1</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-tech-900/20 border border-blue-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">1</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Increased Visibility</h3>
                <p className="text-sm text-muted-foreground">
                  Surge in profile views, comments, DMs, and early leads
                </p>
              </div>
              
              <div className="bg-tech-900/20 border border-blue-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">2</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Strategic Presence</h3>
                <p className="text-sm text-muted-foreground">
                  Your brand shows up in all the right conversations
                </p>
              </div>
              
              <div className="bg-tech-900/20 border border-blue-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">3</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Measurable Returns</h3>
                <p className="text-sm text-muted-foreground">
                  Top-of-funnel visibility begins delivering measurable returns
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-10 z-0">
          <SphereCanvas 
            color="#0077B5" 
            particleCount={80}
            size={300}
            intensity={0.8}
            interactive={false}
          />
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
                  <Avatar className="w-full h-full border-2 border-tech-300/30 shadow-md">
                    <AvatarImage 
                      src="/lovable-uploads/a2e05055-65c7-46f5-91c0-27d2078f7c9f.png" 
                      alt="Paul Dearlove" 
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-mango text-foreground">PD</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-grow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-lg">Paul Dearlove</p>
                        <p className="text-sm text-muted-foreground">ANZ Director, SAP</p>
                      </div>
                    </div>
                    
                    <p className="italic text-muted-foreground mt-2 text-base">
                      "ManyMangoes has supported my team through LinkedIn lead generation. I found Isaac and the ManyMangoes team to be proactive and willing to pivot so we could get the best results. I look forward to working with Isaac in the future."
                    </p>
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

      {/* Next Phase CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to continue the journey?</h2>
            <p className="text-muted-foreground mb-8">
              See how we optimize and enhance your lead generation in Phase 2.
            </p>
            
            <Button asChild size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
              <Link to="/linkedin/phase-2">
                Explore Phase 2
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInPhase1;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SphereCanvas from '@/components/SphereCanvas';
import Timeline from '@/components/Timeline';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Phase2 = () => {
  const timelineItems = [
    {
      title: "Targeting Refinement",
      description: "Analyze week 1 data to sharpen audience targeting and double down on high-performing segments."
    },
    {
      title: "Comment Engine Optimization",
      description: "Refine distribution based on engagement data and increase frequency of high-performing platform activities."
    },
    {
      title: "Convert Phase: Retargeting + Automation",
      description: "Launch retargeting campaigns to warm audiences and implement automated follow-ups and nurture flows."
    },
    {
      title: "Sales Enablement",
      description: "Build CRM workflows, lead handoff systems, and provide messaging templates and conversion scripts."
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
                  Phase 2: <span className="text-gradient">Optimize & Personalize</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Week 2: Refine your strategy based on real data and enhance lead quality.
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
                  color="#F97316" 
                  particleCount={150}
                  size={280}
                  intensity={2}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-tech-900/80 rounded-full h-20 w-20 flex items-center justify-center border border-mango-400/30 shadow-lg shadow-mango-400/20">
                    <span className="text-3xl font-bold">2</span>
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
            color="#F97316" 
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
            <h2 className="text-3xl font-bold mb-4">What We Do in Phase 2</h2>
            <p className="text-muted-foreground">
              In week 2, we leverage data from Phase 1 to optimize targeting, enhance engagement strategies, and implement advanced conversion systems.
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
            <h2 className="text-3xl font-bold mb-4 text-center">⚡ Results in Week 2</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-tech-900/20 border border-mango-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">1</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Lead Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Significant improvement in lead quality and relevance
                </p>
              </div>
              
              <div className="bg-tech-900/20 border border-mango-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">2</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Deeper Engagement</h3>
                <p className="text-sm text-muted-foreground">
                  Increased mid-funnel engagement and meaningful conversations
                </p>
              </div>
              
              <div className="bg-tech-900/20 border border-mango-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">3</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">More Meetings</h3>
                <p className="text-sm text-muted-foreground">
                  Conversations consistently converting to sales meetings
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
            color="#F97316" 
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
                      src="/lovable-uploads/0000dc08-2d3b-40c0-8c07-410960351dad.png" 
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
                    
                    <p className="italic text-muted-foreground mt-2 text-base">
                      "The ManyMangoes team was able to get all of the comments actually generated for each of the people that are making those comments at scale. It was amazing to see literally all these comments populated to make it really straightforward for the engagement team."
                    </p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium mt-4 mb-2 text-sm uppercase text-tech-300">Our approach:</h4>
              <p className="text-foreground">
                In Phase 2, we optimize your entire funnel with real-time lead qualification and prioritization. Our system identifies high-quality leads so your limited time is spent only on decision-makers with genuine interest in your solutions, significantly improving your meeting quality and conversion rates.
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
            <h2 className="text-3xl font-bold mb-4">Ready to scale your results?</h2>
            <p className="text-muted-foreground mb-8">
              See how we amplify your lead generation by 5-10x in Phase 3.
            </p>
            
            <Button asChild size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
              <Link to="/phase-3">
                Explore Phase 3
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Phase2;

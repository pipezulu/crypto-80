
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SphereCanvas from '@/components/SphereCanvas';
import Timeline from '@/components/Timeline';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const LinkedInPhase3 = () => {
  const timelineItems = [
    {
      title: "Full Funnel Automation",
      description: "Automate the path from comment → connection → conversation → meeting, so sales calendars begin to fill predictably."
    },
    {
      title: "Comment Strategy Amplification",
      description: "Scale volume of comments and platform presence by 5–10x and reallocate effort to highest-ROI activities."
    },
    {
      title: "Ad Budget Scaling",
      description: "Expand retargeting and conversion ads, optimizing messaging and creatives based on engagement data."
    },
    {
      title: "Reporting + Handoff",
      description: "Create final performance dashboards and handover SOPs and workflows for internal or continued execution."
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
                  Phase 3: <span className="text-gradient">Scale & Automate</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Days 61-90: Amplify results by 5-10x and build a predictable lead generation machine.
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
                    <span className="text-3xl font-bold">3</span>
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
            <h2 className="text-3xl font-bold mb-4">What We Do in Phase 3</h2>
            <p className="text-muted-foreground">
              In the final 30 days, we focus on scaling what works, automating processes, and creating systems for long-term success.
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
            <h2 className="text-3xl font-bold mb-4 text-center">⚡ Results in Month 3</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-tech-900/20 border border-blue-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">5x</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Amplified Results</h3>
                <p className="text-sm text-muted-foreground">
                  5x–10x increase in reach, leads, and booked meetings
                </p>
              </div>
              
              <div className="bg-tech-900/20 border border-blue-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">Multi</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Platform Dominance</h3>
                <p className="text-sm text-muted-foreground">
                  Omnichannel dominance across LinkedIn and niche platforms
                </p>
              </div>
              
              <div className="bg-tech-900/20 border border-blue-400/10 rounded-lg p-6 text-center">
                <div className="bg-gradient-radial-mango h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
                  <div className="text-2xl font-bold">Growth</div>
                </div>
                <h3 className="text-lg font-semibold mb-2">Predictable Pipeline</h3>
                <p className="text-sm text-muted-foreground">
                  Consistent lead flow and sales pipeline growth
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
                      src="/lovable-uploads/6ff5e441-31a0-4414-9ab9-976ca9e3dac1.png" 
                      alt="Patrick O'Brien" 
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-mango text-foreground">PO</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-grow">
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-lg">Patrick O'Brien</p>
                        <p className="text-sm text-muted-foreground">APAC Director, GA</p>
                      </div>
                    </div>
                    
                    <p className="italic text-muted-foreground mt-2 text-base">
                      "Isaac & Many Mangoes were a pleasure to work with. Very professional and Isaac was always thoughtful when it came to putting our business objectives first. He took the time to really understand what our objectives were and worked closely with us to build a tailored strategy to effectively engage our target market. Thanks Isaac."
                    </p>
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium mt-4 mb-2 text-sm uppercase text-tech-300">Our solution:</h4>
              <p className="text-foreground">
                By Phase 3, your lead generation engine will be fully automated to identify potential clients exploring solutions in your space before your competitors know about them. Our system can increase your meeting volume by 3-5 times, while shortening your sales cycle by connecting you with decision-makers earlier in their process.
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
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              See how ManyMangoes can help with your specific industry use cases.
            </p>
            
            <Button asChild size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
              <Link to="/linkedin/use-cases">
                Explore Use Cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInPhase3;

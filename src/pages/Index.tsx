import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SphereCanvas from '@/components/SphereCanvas';
import PhaseCard from '@/components/PhaseCard';
import QuoteHighlight from '@/components/QuoteHighlight';
import ComparisonTable from '@/components/ComparisonTable';
import { ArrowRight, BarChart3, LineChart, Rocket, ArrowDown, Play } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

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
                  Dominate <span className="text-gradient">Crypto X</span> with 30K Comments Monthly
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  The most aggressive X.com engagement strategy for crypto projects. 30,000 targeted comments + 15,000 DMs monthly. 
                  Get your announcements, launches, and alpha in front of the right crypto community.
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
              className="lg:w-1/2 flex justify-center items-center"
            >
              <div className="flex items-center justify-center" style={{ width: '500px', height: '500px' }}>
                <SphereCanvas 
                  color="#F1AB1C" 
                  particleCount={250}
                  size={500}
                  intensity={2.5}
                  glow={true}
                  className="flex-shrink-0"
                />
                <div className="absolute z-10">
                  <div className="text-center bg-background/30 backdrop-blur-sm px-8 py-6 rounded-full shadow-lg border border-primary/20">
                    <h3 className="font-bold text-4xl text-gradient">30K</h3>
                    <p className="text-sm text-muted-foreground">Comments/Month</p>
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
            quote="In crypto, visibility equals survival. If you're not dominating the conversation on X, you're invisible. ManyMangoes puts your project where the alpha hunters are looking."
            author="Anonymous DeFi Founder"
            role="$50M+ TVL Protocol"
            delay={0.2}
          />
        </div>
      </section>

      {/* Video Testimonial Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 z-0">
          <SphereCanvas color="#9b87f5" particleCount={80} size={300} intensity={0.8} interactive={false} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }} 
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">See the Results in Action</h2>
              <p className="text-muted-foreground">
                Hear from Jimi Cohen, CEO of TreeGens, about the "rocket fuel" results from our crypto X domination strategy.
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-tech-900 to-tech-900/60 border border-tech-500/20 rounded-lg overflow-hidden shadow-lg">
              {/* Video Container with Custom Preview */}
              <div className="relative aspect-video bg-black group cursor-pointer">
                {/* Custom Preview Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=675&fit=crop&crop=center')`
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 rounded-full p-4 group-hover:bg-primary transition-colors">
                    <Play className="h-8 w-8 text-primary-foreground ml-1" />
                  </div>
                </div>
                
                {/* Hidden iframe for actual video */}
                <iframe
                  src="https://drive.google.com/file/d/1KLqRbrolgM31FpJBptUgl1g9Dx7OMYE2/preview"
                  className="w-full h-full opacity-0 absolute inset-0 group-hover:opacity-100 transition-opacity duration-300"
                  allow="autoplay"
                  title="Jimi Cohen Testimonial - TreeGens CEO"
                ></iframe>
              </div>
              
              {/* Testimonial Info */}
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Avatar className="w-full h-full border-2 border-tech-300/30 shadow-md">
                      <AvatarImage 
                        src="/lovable-uploads/d40c3768-c4b5-4bd4-8cdc-b724941dd115.png" 
                        alt="Jimi Cohen" 
                        className="object-cover"
                      />
                      <AvatarFallback className="bg-gradient-mango text-foreground">JC</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <p className="font-medium text-lg">Jimi Cohen</p>
                    <p className="text-sm text-muted-foreground">CEO & Co-Founder, TreeGens</p>
                  </div>
                </div>
                
                <blockquote className="mt-4 text-lg italic text-muted-foreground">
                  "Within three days, the followers went up by more than 700 people, which was pretty crazy. 
                  We've been able to connect with tens of thousands of people... It's been like rocket fuel."
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="py-20 relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15">
          <SphereCanvas 
            color="#F1AB1C" 
            particleCount={180}
            size={800}
            intensity={1.2}
            interactive={false}
            className="flex-shrink-0"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">The Ultimate Crypto X Domination Strategy</h2>
            <p className="text-muted-foreground">
              Powered by advanced ICP targeting using bio analysis, hashtag monitoring, topic tracking, 
              and cross-platform data from our LinkedIn intelligence. We find and engage the exact crypto 
              community that matters for your project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <PhaseCard 
                phase={1}
                title="Blast & Engage"
                description="Month 1: Launch 30K targeted comments + 15K DMs to crypto community"
                link="/phase-1"
                outcomes={[
                  "30,000 strategic comments on crypto posts",
                  "15,000 DMs to high-value targets",
                  "Massive awareness for announcements"
                ]}
                delay={0.1}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <PhaseCard 
                phase={2}
                title="Optimize & Scale"
                description="Month 2: Refine targeting and amplify engagement based on performance"
                link="/phase-2"
                outcomes={[
                  "Enhanced ICP targeting accuracy",
                  "Improved response rates",
                  "Stronger community connections"
                ]}
                delay={0.2}
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <PhaseCard 
                phase={3}
                title="Dominate & Convert"
                description="Month 3+: Sustained dominance with conversion-focused messaging"
                link="/phase-3"
                outcomes={[
                  "Consistent crypto community presence",
                  "High-converting engagement flows",
                  "Predictable business generation"
                ]}
                delay={0.3}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Target Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-15">
          <SphereCanvas 
            color="#F1AB1C" 
            particleCount={150}
            size={600}
            intensity={1}
            interactive={false}
            glow={true}
            className="flex-shrink-0"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Who We Target in Crypto X</h2>
            <p className="text-muted-foreground">
              Our proprietary ICP system identifies and engages the most valuable crypto community members.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-tech-900/20 border border-tech-300/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Bio Analysis</h3>
              <p className="text-sm text-muted-foreground">DeFi traders, NFT collectors, protocol founders, crypto VCs</p>
            </div>
            <div className="bg-tech-900/20 border border-tech-300/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Topic Tracking</h3>
              <p className="text-sm text-muted-foreground">Active in discussions about your specific blockchain/niche</p>
            </div>
            <div className="bg-tech-900/20 border border-tech-300/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Hashtag Monitoring</h3>
              <p className="text-sm text-muted-foreground">#DeFi #Web3 #NFT #Crypto followers and contributors</p>
            </div>
            <div className="bg-tech-900/20 border border-tech-300/10 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Cross-Platform Intel</h3>
              <p className="text-sm text-muted-foreground">LinkedIn data cross-referenced for validated crypto professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 blur-3xl opacity-30 bg-gradient-radial-tech w-96 h-96"></div>
        <div className="absolute right-0 top-0 blur-3xl opacity-30 bg-gradient-radial-mango w-96 h-96"></div>
        <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-15">
          <SphereCanvas 
            color="#F1AB1C" 
            particleCount={120}
            size={500}
            intensity={1.2}
            interactive={false}
            glow={true}
            className="flex-shrink-0"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto text-center shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Own Crypto X?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stop being invisible in the crypto conversation. Start dominating X.com with 30,000 strategic 
              comments and 15,000 targeted DMs monthly. Every announcement, launch, and alpha gets maximum exposure.
            </p>
            
            <Button asChild size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
              <Link to="/phase-1">
                Explore the X Domination Strategy
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

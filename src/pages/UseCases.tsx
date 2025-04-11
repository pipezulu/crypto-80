import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SphereCanvas from '@/components/SphereCanvas';
import QuoteHighlight from '@/components/QuoteHighlight';
import { ArrowRight, Check, Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      id: "commercial-design",
      title: "Commercial Interior Design",
      icon: <Briefcase />,
      description: "Identify and engage with clients needing interior design services",
      quote: "We do commercial interior. Federal is our largest client.",
      details: [
        "Identify potential commercial and government clients planning to remodel",
        "Connect with decision makers at the right time in their planning cycle",
        "Build relationships through meaningful conversations before they're in-market",
        "Provide detailed information about current office design trends and solutions",
        "Generate meetings with facility managers and procurement officers"
      ],
      results: "Increased engagement with key decision makers at federal agencies and commercial enterprises by identifying them before they've selected a design partner."
    },
    {
      id: "architect-partnerships",
      title: "Architect & Designer Partnerships",
      icon: <Users />,
      description: "Build strong referral relationships with architects and commercial realtors",
      quote: "You won't lease a space on your own. So one is the commercial realtor networking with those people that are building clients.",
      details: [
        "Identify and connect with architects working on commercial projects",
        "Build relationships with commercial realtors handling new leases",
        "Create a consistent referral pipeline through strategic partnerships",
        "Establish Ori as the go-to resource for furniture and interior solutions",
        "Generate warm introductions to clients in the planning stage"
      ],
      results: "Created a reliable stream of warm leads through architect and realtor partnerships, increasing project win rates by 35%."
    },
    {
      id: "government-contracts",
      title: "Government Contract Opportunities",
      icon: <FileText />,
      description: "Stay ahead of government contract opportunities and decision makers",
      quote: "Where I'm located is where it's called Redstone Marshall. The federal agencies make decisions, furniture, Army Corps of Engineers, Missile Command.",
      details: [
        "Monitor federal contract opportunities before they're publicly announced",
        "Connect with key decision-makers in government procurement",
        "Build relationships with government facility managers",
        "Position Ori as the expert in government workspace design",
        "Identify budget cycles and planning periods for new projects"
      ],
      results: "Gained early access to government contract opportunities, increasing bid success rates and expanding federal client portfolio."
    },
    {
      id: "moving-clients",
      title: "New Space Identification",
      icon: <Building />,
      description: "Identify companies moving to or building new office spaces",
      quote: "We try to find clients that are needing to either remodel or update or they're moving to a new space.",
      details: [
        "Monitor funding announcements for companies likely to expand",
        "Track commercial real estate transactions for office relocations",
        "Connect with operations leaders during early planning phases",
        "Provide educational content about efficient space utilization",
        "Offer consultation services for companies in transition"
      ],
      results: "Created a proactive lead generation system that identifies companies 3-6 months before they start their furniture procurement process."
    },
    {
      id: "existing-clients",
      title: "Existing Client Expansion",
      icon: <LayoutDashboard />,
      description: "Identify opportunities with existing clients for additional projects",
      quote: "We need to better leverage our existing relationships for additional business opportunities.",
      details: [
        "Monitor existing clients for expansion announcements or new locations",
        "Identify key stakeholders in different departments who might need services",
        "Create targeted content addressing specific client industry challenges",
        "Develop regular touchpoints to stay top-of-mind with past clients",
        "Build a systematic approach to account-based marketing"
      ],
      results: "Increased repeat business by 40% through strategic relationship management and proactive identification of new opportunities within existing accounts."
    }
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid py-8">
        <div className="absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 bg-gradient-radial-tech w-96 h-96"></div>
        <div className="absolute right-1/3 bottom-1/4 transform translate-x-1/2 translate-y-1/2 blur-3xl opacity-20 bg-gradient-radial-mango w-96 h-96"></div>
        
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-gradient">Ori</span> Use Cases
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                See how ManyMangoes can solve your specific challenges with our proven LinkedIn approach.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center relative w-full max-w-md mb-8"
            >
              <SphereCanvas 
                color="#F1AB1C" 
                particleCount={150}
                size={200}
                className="mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section - Properly Spaced */}
      <section className="py-12 px-4 bg-card/30 backdrop-blur-sm relative">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <Tabs defaultValue="commercial-design" className="w-full flex flex-col">
              <TabsList className="use-case-tabs">
                {useCases.map((useCase) => (
                  <TabsTrigger 
                    key={useCase.id}
                    value={useCase.id}
                    className="use-case-trigger"
                  >
                    <div className="use-case-trigger-content">
                      <div className="use-case-trigger-icon">
                        {useCase.icon}
                      </div>
                      <span className="use-case-trigger-label">{useCase.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="mt-4 relative">
                {useCases.map((useCase) => (
                  <TabsContent key={useCase.id} value={useCase.id} className="use-case-content">
                    <Card className="border-none shadow-2xl bg-gradient-to-b from-card/80 to-card/40 backdrop-blur">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-3xl flex items-center gap-4">
                          <div className="bg-primary/20 p-3 rounded-full">
                            {useCase.icon}
                          </div>
                          {useCase.title}
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">{useCase.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-8">
                        <QuoteHighlight 
                          quote={useCase.quote} 
                          author="Brad Glover" 
                          role="VP of Sales, Ori" 
                        />
                        
                        <div className="mt-8">
                          <h3 className="text-2xl font-semibold mb-6 text-gradient">How ManyMangoes' LinkedIn Strategy Can Help</h3>
                          <ul className="space-y-4">
                            {useCase.details.map((detail, index) => (
                              <li key={index} className="flex items-start">
                                <div className="mr-4 mt-1">
                                  <div className="rounded-full p-1 bg-primary/20">
                                    <Check className="h-5 w-5 text-primary" />
                                  </div>
                                </div>
                                <span className="text-base">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-8 p-6 bg-muted/20 border border-primary/30 rounded-xl shadow-inner">
                          <h4 className="font-semibold text-xl mb-4 text-primary">Expected Results from LinkedIn Strategy</h4>
                          <p className="text-base">{useCase.results}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
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
    </div>
  );
};

export default UseCases;

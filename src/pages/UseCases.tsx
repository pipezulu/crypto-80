
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
import { ArrowRight, Check, BriefcaseBusiness, Users, GalleryVerticalEnd, Building } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      id: "commercial-design",
      title: "Commercial Interior Design",
      icon: <BriefcaseBusiness className="h-5 w-5 text-primary" />,
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
      icon: <Users className="h-5 w-5 text-primary" />,
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
      icon: <GalleryVerticalEnd className="h-5 w-5 text-primary" />,
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
      icon: <Building className="h-5 w-5 text-primary" />,
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
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute left-1/3 top-1/4 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20 bg-gradient-radial-tech w-96 h-96"></div>
        <div className="absolute right-1/3 bottom-1/4 transform translate-x-1/2 translate-y-1/2 blur-3xl opacity-20 bg-gradient-radial-mango w-96 h-96"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col items-center gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="text-gradient">Ori</span> Use Cases
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                See how ManyMangoes can solve your specific challenges with our proven LinkedIn approach.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center relative w-full max-w-md"
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

      {/* Tabs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue="commercial-design" className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-10 use-case-tabs">
                {useCases.map((useCase) => (
                  <TabsTrigger 
                    key={useCase.id}
                    value={useCase.id}
                    className="use-case-trigger"
                  >
                    <span className="flex flex-col items-center gap-2">
                      {useCase.icon}
                      {useCase.title}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {useCases.map((useCase) => (
                <TabsContent key={useCase.id} value={useCase.id}>
                  <Card className="border border-muted/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        {useCase.icon}
                        {useCase.title}
                      </CardTitle>
                      <CardDescription className="text-base">{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <QuoteHighlight 
                        quote={useCase.quote} 
                        author="Brad Glover" 
                        role="VP of Sales, Ori" 
                      />
                      
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">How ManyMangoes Can Help</h3>
                        <ul className="space-y-3">
                          {useCase.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 mt-1">
                                <Check className="h-5 w-5 text-primary" />
                              </div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8 p-4 bg-card border border-tech-300/10 rounded-lg shadow-inner">
                        <h4 className="font-semibold mb-2">Expected Results</h4>
                        <p>{useCase.results}</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your LinkedIn Lead Generation?</h2>
            <p className="text-muted-foreground mb-8">
              ManyMangoes is ready to implement these LinkedIn solutions specifically for Ori.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
                Request a Proposal
              </Button>
              <Button variant="outline" size="lg">
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

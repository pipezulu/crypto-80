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
import { ArrowRight, Check } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      id: "lead-generation",
      title: "Lead Generation",
      description: "Generate high-quality leads from competitor job postings",
      quote: "Our best ROIs comes from our competitor scraping... compared to social media.",
      details: [
        "Identify hiring managers from competitor job postings",
        "Engage with personalized comments on their public content",
        "Build relationships through meaningful conversations",
        "Convert warm leads into meetings and demos",
        "Provide detailed contact information for sales follow-up"
      ],
      results: "Increased conversion rates from competitor leads by 3x compared to traditional outreach methods."
    },
    {
      id: "social-monitoring",
      title: "Social Media Monitoring",
      description: "Never miss a mention of your brand or recruitment opportunity",
      quote: "Every time people mention us, we can automatically reply and etc. Ensuring that we are where we can ensure every mention that mention our brand.",
      details: [
        "Monitor all social media platforms for brand mentions",
        "Automatically respond to comments and inquiries",
        "Identify and address potential issues before they escalate",
        "Turn complaints into opportunities for exceptional service",
        "Gather intelligence on market trends and competitor activity"
      ],
      results: "Reduced response time from hours to minutes and increased positive brand sentiment by 40%."
    },
    {
      id: "content-strategy",
      title: "Content Strategy & Distribution",
      description: "Build authority and visibility across multiple platforms",
      quote: "We need to ensure that our ROI is manageable, our CAC is healthy, our unit economic is also good.",
      details: [
        "Create engaging, industry-specific content that resonates with hiring managers",
        "Distribute content strategically across LinkedIn, Twitter/X, and niche platforms",
        "Drive engagement through targeted comment campaigns",
        "Build retargeting audiences from content engagement",
        "Convert content consumers into sales conversations"
      ],
      results: "Generated 2.5x more qualified leads with 30% lower acquisition costs through strategic content distribution."
    },
    {
      id: "recruitment",
      title: "Recruitment Acceleration",
      description: "Fill positions faster with qualified candidates",
      quote: "The job is available only for certain days because they need to fill it within X number of days.",
      details: [
        "Identify and engage with potential candidates in real-time",
        "Automate initial screening through personalized messaging",
        "Accelerate the hiring process with instant notifications",
        "Reduce time-to-fill for critical positions",
        "Build a pipeline of pre-qualified candidates for future openings"
      ],
      results: "Reduced average time-to-fill positions from 15 days to just 5 days while improving candidate quality."
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
                <span className="text-gradient">JobStreet Express</span> Use Cases
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                See how ManyMangoes can solve your specific challenges with our proven approach.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center relative w-full max-w-md"
            >
              <SphereCanvas 
                color="#9b87f5" 
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
            <Tabs defaultValue="lead-generation" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                {useCases.map((useCase) => (
                  <TabsTrigger 
                    key={useCase.id}
                    value={useCase.id}
                    className="data-[state=active]:bg-tech-300/20 data-[state=active]:text-tech-300"
                  >
                    {useCase.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {useCases.map((useCase) => (
                <TabsContent key={useCase.id} value={useCase.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <QuoteHighlight 
                        quote={useCase.quote} 
                        author="Galen Leslie" 
                        role="JobStreet Express" 
                      />
                      
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">How ManyMangoes Can Help</h3>
                        <ul className="space-y-3">
                          {useCase.details.map((detail, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-3 mt-1">
                                <Check className="h-5 w-5 text-tech-300" />
                              </div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8 p-4 bg-tech-900/20 border border-tech-300/10 rounded-lg">
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
            <p className="text-muted-foreground mb-8">
              ManyMangoes is ready to implement these solutions specifically for JobStreet Express.
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

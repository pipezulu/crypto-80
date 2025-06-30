
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import SphereCanvas from '@/components/SphereCanvas';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Building, UserCheck, FileText, Lightbulb, TrendingUp } from 'lucide-react';

const LinkedInUseCases = () => {
  const useCases = [
    {
      id: 'industry-leader',
      icon: <Building className="h-6 w-6" />,
      title: "Industry Leader Targeting",
      description: "Strategic approach to connect with key decision makers in your industry",
      testimonial: {
        quote: "We have been using Many Mangoes for the last 3 months, to help identify, connect with and make aware, and then setup meetings for me, using LinkedIn. It has been very successful with Many Mangoes driving the whole process from planning, execution to successful introduction. We now have a pipeline of new business opportunities in Australia and New Zealand, thanks to Isaac and his team.",
        author: "Brian O'Doherty",
        role: "Growth Acceleration and Market Entry for ambitious IT companies",
        avatar: "/lovable-uploads/0305c1b5-5e0d-40d9-bef7-27c89f18fb2f.png"
      },
      benefits: [
        "Identify heads of key departments and decision-makers at target companies",
        "Connect with industry leaders at the right time in their planning cycle",
        "Build relationships through meaningful conversations before procurement phase",
        "Highlight your unique technology advantages for industry-specific applications",
        "Generate high-quality meetings with decision-makers at companies in your target market"
      ],
      results: "Increased strategic engagement with industry decision makers, leading to more qualified meetings and shortened sales cycles."
    },
    {
      id: 'strategic-partnership',
      icon: <UserCheck className="h-6 w-6" />,
      title: "Strategic Partnership Network",
      description: "Expand referral relationships with industry partners and consultants",
      testimonial: {
        quote: "Our LinkedIn campaign during the Summer Holiday of 2022 was very successful... Isaac and his team as well as the ManyMangoes platform did the trick... It delivered many relevant and valuable contacts from all over Europe. I would recommend working with ManyMangoes and Isaac and his team to anyone!",
        author: "Stephanus Vermeulen",
        role: "Hybrid Co Creative Director/Strategy",
        avatar: "/lovable-uploads/34bfddea-0c3f-4cd2-acc4-ccc53ffc2ecf.png"
      },
      benefits: [
        "Identify and connect with partners specializing in your industry",
        "Build strategic partnerships with industry consultants and experts",
        "Create a consistent referral pipeline through targeted outreach",
        "Position your company as the premier solution provider in your space",
        "Generate warm introductions to potential clients in early evaluation stages"
      ],
      results: "Developed a reliable stream of qualified leads through strategic partnerships, increasing meeting quality and conversion rates by 35%."
    },
    {
      id: 'contract-opportunity',
      icon: <FileText className="h-6 w-6" />,
      title: "Contract Opportunity Identification",
      description: "Proactive identification of contract and project opportunities",
      testimonial: {
        quote: "The work with Manymangoes has started to expand my network and specifically target key positions in UK marketplace accounts. It enables me to qualify accounts that have an interest in what we are doing at Aqua either in the present or in the future. The automated capability when tuned correctly saves me time and is starting to help build a picture of the accounts that have a need for our assistance.",
        author: "Trevor Camp",
        role: "Cloud Native Privilege Access Management",
        avatar: "/lovable-uploads/1d39c9fb-21b1-4eb6-a979-6e6e303d9529.png"
      },
      benefits: [
        "Monitor contract opportunities before public announcements",
        "Establish connections with procurement and R&D leaders",
        "Track budget cycles and planning periods for new projects",
        "Demonstrate your unique capabilities and solution advantages",
        "Develop targeted content addressing specific client needs"
      ],
      results: "Gained early access to contract opportunities, expanding client portfolio and increasing win rates."
    },
    {
      id: 'innovation-leader',
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Leader Targeting",
      description: "Identify companies investing in next-generation technologies in your space",
      testimonial: {
        quote: "We asked Isaac and the ManyMangoes team to help us identify and approach relevant senior executives to introduce them to a sales opportunity. Although the timelines were very short, Isaac and his team turned the project around very quickly, and put out our message to far more people than we were expecting. Isaac's client communication is second-to-none, and he really cares about the project outcome and suggested many ways in which the process could be improved. We will certainly use ManyMangoes again.",
        author: "Steve Morrell",
        role: "Insightful Analysis of the Contact Centre and CX Industries",
        avatar: "/lovable-uploads/d9a238f5-75b3-469a-a585-4c59b5675887.png"
      },
      benefits: [
        "Track modernization initiatives in your target industries",
        "Monitor innovation announcements for potential technology investors",
        "Connect with R&D leaders during early technology evaluation phases",
        "Provide educational content about your technology advantages",
        "Offer consultation services for advanced transitions to new solutions"
      ],
      results: "Created a proactive lead generation system identifying potential clients 3-6 months before their procurement process begins."
    },
    {
      id: 'client-expansion',
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Existing Client Expansion",
      description: "Uncover new opportunities within existing client organizations",
      testimonial: {
        quote: "Isaac and the Many Mangoes team were a breeze to work with. Very reliable and exceeded my expectations by a long shot. Anyone who has the opportunity to work with the sales guru will be very pleased with the outcome.",
        author: "Chris Michael",
        role: "Increasing Digital Footprints through Mosfa Web Solutions",
        avatar: "/lovable-uploads/18590a58-8efd-4320-9c50-7c99544dec2b.png"
      },
      benefits: [
        "Monitor existing clients for expansion opportunities and new contracts",
        "Identify key stakeholders across different departments",
        "Create targeted content addressing specific industry challenges",
        "Develop strategic relationship management approaches",
        "Implement account-based marketing for key accounts"
      ],
      results: "Increased repeat business by 40% through strategic relationship management and proactive opportunity identification."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-grid py-24">
        <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-30 bg-gradient-radial-tech w-96 h-96"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Industry <span className="text-gradient">Use Cases</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how ManyMangoes can solve your specific challenges with our proven AI-powered lead generation approach.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {useCases.map((useCase, index) => (
              <motion.div 
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-card border border-border rounded-xl p-8 shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        {useCase.icon}
                      </div>
                      <h2 className="text-2xl font-bold">{useCase.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{useCase.description}</p>
                    
                    <div className="bg-gradient-to-br from-tech-900 to-tech-900/60 border border-tech-500/20 rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12 border-2 border-tech-300/30">
                          <AvatarImage src={useCase.testimonial.avatar} alt={useCase.testimonial.author} className="object-cover" />
                          <AvatarFallback className="bg-gradient-mango text-foreground">
                            {useCase.testimonial.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{useCase.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground mb-3">{useCase.testimonial.role}</p>
                          <p className="text-sm italic text-muted-foreground">"{useCase.testimonial.quote}"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-blue-400">How ManyMangoes' LinkedIn Strategy Can Help</h3>
                    <ul className="space-y-2 mb-6">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-muted/20 border border-border rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-sm text-green-400">Expected Results from LinkedIn Strategy</h4>
                      <p className="text-sm text-muted-foreground">{useCase.results}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 blur-3xl opacity-30 bg-gradient-radial-tech w-96 h-96"></div>
        <div className="absolute right-0 top-0 blur-3xl opacity-30 bg-gradient-radial-mango w-96 h-96"></div>
        <div className="absolute left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-15">
          <SphereCanvas 
            color="#0077B5" 
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              ManyMangoes is ready to implement these AI-powered solutions for your industry-specific needs.
            </p>
            
            <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity">
                Schedule a Demo
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInUseCases;

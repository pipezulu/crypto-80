
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Target, MessageSquare, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LinkedInPricing = () => {
  const features = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      text: "AI-powered outreach to qualified prospects monthly"
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "Strategic connection requests to industry decision makers"
    },
    {
      icon: <Target className="h-5 w-5" />,
      text: "Precision targeting of C-suite executives and department heads"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      text: "Lead qualification and meeting scheduling automation"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Brand-safe messaging that builds professional credibility"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      text: "Real-time campaign optimization and performance tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">
            Professional <span className="text-gradient">LinkedIn Growth</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your LinkedIn presence into a powerful lead generation engine. 
            Connect with decision makers, build strategic relationships, and scale your outreach 
            with our AI-powered LinkedIn automation platform.
          </p>
        </motion.div>

        <div className="flex justify-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <Card className="h-full border-primary relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 bg-gradient-tech text-center py-2">
                <span className="text-sm font-medium text-white">BEST VALUE</span>
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <CardTitle className="text-2xl mb-2">Quarterly Plan</CardTitle>
                <CardDescription className="text-base">Maximum impact, maximum savings</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-gradient">$15,000</span>
                  <span className="text-muted-foreground ml-2">/quarter</span>
                </div>
                <div className="text-sm text-primary font-medium mt-2">
                  Save $1,500 vs monthly
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                  <div className="flex items-start gap-3 pt-2 border-t border-border">
                    <Zap className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-sm font-medium">Priority support & dedicated account management</span>
                  </div>
                </div>
                <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer" className="mt-8">
                  <Button className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
                    Start LinkedIn Growth
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="max-w-3xl mx-auto bg-muted/20 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional LinkedIn Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our LinkedIn automation focuses on building genuine professional relationships with decision makers 
                in your industry. Every connection request and message is strategically crafted to represent your 
                brand professionally while maximizing your reach to qualified prospects. We help you scale your 
                networking efforts without sacrificing quality or authenticity.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Ready to transform your LinkedIn presence?</p>
          <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Schedule a Strategy Call
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LinkedInPricing;

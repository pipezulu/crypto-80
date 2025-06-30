
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Target, MessageSquare, Users, TrendingUp, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const features = [
    {
      icon: <MessageSquare className="h-5 w-5" />,
      text: "15,000 strategic comments monthly on high-value crypto posts"
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: "10,000 targeted DMs to quality investors and community leaders"
    },
    {
      icon: <Target className="h-5 w-5" />,
      text: "Precision targeting of genuine crypto enthusiasts, not pump-and-dump traders"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      text: "Maximum exposure for announcements, launches, and alpha releases"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "Brand-safe engagement that builds credibility and trust"
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
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We make noise, but it's the right kind of noise. Strategic, targeted, and designed to 
            amplify your voice in the crypto community with quality engagement that builds lasting relationships.
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
                  <span className="text-5xl font-bold text-gradient">$19,500</span>
                  <span className="text-muted-foreground ml-2">/quarter</span>
                </div>
                <div className="text-sm text-primary font-medium mt-2">
                  Save $3,000 vs monthly
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
                <a href="https://subscriptions.manymangoes.com.au/b/28E9AU8BH37z6pD84p3wQ0k" target="_blank" rel="noopener noreferrer" className="mt-8">
                  <Button className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
                    Start Quarterly Plan
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
              <h3 className="text-2xl font-bold mb-4 text-gradient">We Make the Right Kind of Noise</h3>
              <p className="text-muted-foreground leading-relaxed">
                Unlike spam-heavy competitors, we focus on meaningful engagement with genuine crypto investors 
                and community leaders. Our approach builds authentic relationships, establishes thought leadership, 
                and creates lasting brand value in the crypto ecosystem. Every comment and DM is strategically 
                crafted to represent your brand professionally while maximizing visibility for your most important announcements.
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
          <p className="text-muted-foreground mb-4">Ready to dominate the crypto conversation?</p>
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

export default Pricing;

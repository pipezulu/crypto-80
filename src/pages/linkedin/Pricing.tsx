import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Target, MessageSquare, Users, TrendingUp, Shield, User, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const LinkedInPricing = () => {
  const twitterFeatures = [
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

  const linkedinFeatures = [
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
            Complete Social Media <span className="text-gradient">Domination</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maximize your reach across both X (Twitter) and LinkedIn with our comprehensive 
            quarterly packages. Strategic engagement that builds lasting relationships and drives results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full border-primary/20 flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <User className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">Proposal A: X (Twitter)</CardTitle>
                </div>
                <CardDescription className="text-base">Crypto community engagement</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gradient">$19,500</span>
                  <span className="text-muted-foreground ml-2">/quarter</span>
                </div>
                <div className="text-sm text-primary font-medium mt-1">
                  Save $3,000 vs monthly
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {twitterFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer" className="mt-6">
                  <Button className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
                    Start Now - Proposal A
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full border-blue-500/20 flex flex-col">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Building2 className="h-5 w-5 text-blue-500" />
                  <CardTitle className="text-xl">Proposal B: LinkedIn</CardTitle>
                </div>
                <CardDescription className="text-base">Professional network growth</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-blue-500">$15,000</span>
                  <span className="text-muted-foreground ml-2">/quarter</span>
                </div>
                <div className="text-sm text-blue-500 font-medium mt-1">
                  Save $1,500 vs monthly
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                  {linkedinFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer" className="mt-6">
                  <Button className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
                    Start Now - Proposal B
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
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-blue-500/5 border-2 border-gradient-tech/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Complete Package: <span className="text-gradient">Proposal A + Proposal B</span>
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gradient">$34,500</span>
                <span className="text-muted-foreground ml-2 text-lg">/quarter</span>
              </div>
              <div className="text-lg text-primary font-medium mb-6">
                Save $4,500 total vs individual plans
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Dominate both X (Twitter) and LinkedIn with comprehensive social media automation. 
                Build your crypto community while establishing professional relationships with industry leaders.
              </p>
              <div className="flex items-start gap-3 mb-6 justify-center">
                <Zap className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm font-medium">Priority support & dedicated account management across both platforms</span>
              </div>
              <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-tech hover:opacity-90 transition-opacity text-lg px-8 py-6">
                  Start Complete Social Domination
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Ready to transform your social media presence?</p>
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

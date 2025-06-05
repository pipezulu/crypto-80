import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import SphereCanvas from '@/components/SphereCanvas';

const TimelineSection = () => {
  const timelineItems = [
    {
      title: "Persona & Data Strategy",
      description: "Leverage 1 trillion datapoints to define hyper-targeted personas and identify your audience on LinkedIn."
    }, 
    {
      title: "LinkedIn Profile Optimization",
      description: "Turn your profile into a high-converting authority asset that attracts your ideal clients."
    }, 
    {
      title: "Launch Commenting Strategy",
      description: "Deploy personalized comments every month, insight-driven and designed to drive engagement."
    }, 
    {
      title: "Content Kickoff – Educate Phase",
      description: "Launch first weekly content (1–2x/week) focused on insights, case studies, and FAQs."
    }, 
    {
      title: "Infrastructure Setup",
      description: "Implement tracking, setup retargeting pixels, and build live dashboards to monitor performance."
    }
  ];

  return (
    <section className="py-16 relative">
      <div className="absolute -left-40 top-1/3 opacity-15 z-0">
        <SphereCanvas color="#9b87f5" particleCount={100} size={300} intensity={1} interactive={false} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What We Do in Phase 1</h2>
          <p className="text-muted-foreground">
            In the first 30 days, we'll establish the foundation of your lead generation engine, 
            focusing on data-driven targeting and visibility.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

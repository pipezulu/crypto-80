
import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';
import SphereCanvas from '@/components/SphereCanvas';

const TimelineSection = () => {
  const timelineItems = [
    {
      title: "ICP & Targeting Setup",
      description: "Deploy advanced targeting using bio analysis, hashtags, topics, and cross-platform crypto intelligence to identify your ideal crypto community."
    }, 
    {
      title: "X.com Account Optimization",
      description: "Transform your X profile into a crypto authority magnet that attracts degens, traders, and serious investors."
    }, 
    {
      title: "Launch Comment Blitz",
      description: "Deploy 30,000 personalized comments across crypto X conversations - every announcement gets maximum visibility."
    }, 
    {
      title: "DM Engagement Campaign",
      description: "Execute 15,000 targeted DMs to high-value crypto profiles (500 daily within X account limits)."
    }, 
    {
      title: "Performance Tracking",
      description: "Implement real-time dashboards to monitor engagement rates, reply quality, and business generation from crypto community."
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
          <h2 className="text-3xl font-bold mb-4">What We Execute in Phase 1</h2>
          <p className="text-muted-foreground">
            In the first month, we establish your dominance on crypto X with aggressive engagement 
            and precision targeting of the most valuable crypto community members.
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

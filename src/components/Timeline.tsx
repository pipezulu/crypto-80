
import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  title: string;
  description: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="mb-8 flex"
    >
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-tech-300 text-tech-900 font-semibold">
          {index + 1}
        </div>
        {index < 4 && <div className="h-full w-0.5 bg-tech-300/30 mt-1"></div>}
      </div>
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

interface TimelineProps {
  items: {
    title: string;
    description: string;
  }[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="py-4">
      {items.map((item, index) => (
        <TimelineItem 
          key={index} 
          title={item.title} 
          description={item.description} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default Timeline;


import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface QuoteHighlightProps {
  quote: string;
  author: string;
  role?: string;
  delay?: number;
}

const QuoteHighlight: React.FC<QuoteHighlightProps> = ({ 
  quote, 
  author, 
  role = "JobStreet Express", 
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="relative bg-gradient-to-br from-tech-900 to-tech-900/60 border border-tech-500/20 rounded-lg p-6 shadow-lg"
    >
      <div className="absolute top-3 left-3 text-tech-300/30">
        <Quote size={24} />
      </div>
      
      <div className="pt-6">
        <p className="text-lg italic text-foreground/90 mb-4">"{quote}"</p>
        
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-mango flex items-center justify-center text-tech-900 font-bold">
            {author.charAt(0)}
          </div>
          <div className="ml-3">
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteHighlight;

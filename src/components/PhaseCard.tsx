
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface PhaseCardProps {
  phase: number;
  title: string;
  description: string;
  link: string;
  outcomes: string[];
  delay?: number;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ 
  phase, 
  title, 
  description, 
  link, 
  outcomes, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full bg-card border border-border hover:border-primary/50 transition-all overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial-tech opacity-30 transform translate-x-16 -translate-y-16 group-hover:opacity-40 transition-opacity" />
        
        <CardContent className="p-6 pb-4">
          <div className="flex items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-tech-300/20 flex items-center justify-center text-tech-300 font-bold">
              {phase}
            </div>
            <h3 className="text-xl font-bold ml-3">{title}</h3>
          </div>
          
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="mb-4">
            <h4 className="font-medium mb-2 text-sm uppercase text-tech-300">Key Outcomes</h4>
            <ul className="space-y-2">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-2 w-2 rounded-full bg-mango-400 mt-1.5 mr-2"></div>
                  <span className="text-sm">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-2">
          <Link 
            to={link} 
            className="inline-flex items-center text-tech-300 hover:text-tech-400 transition-colors"
          >
            <span className="mr-1">Learn more</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PhaseCard;

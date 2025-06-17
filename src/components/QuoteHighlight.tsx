
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface QuoteHighlightProps { 
  quote: string;
  author: string;
  role?: string;
  delay?: number;
  authorImage?: string;
  company?: string;
}

const QuoteHighlight: React.FC<QuoteHighlightProps> = ({ 
  quote, 
  author, 
  role = "Industry Professional", 
  delay = 0,
  authorImage = "/lovable-uploads/a2e05055-65c7-46f5-91c0-27d2078f7c9f.png",
  company
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
        <p className="text-lg italic text-foreground/90 mb-4 font-medium">"{quote}"</p>
        
        <div className="flex items-center">
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage 
              src={authorImage} 
              alt={author}
              className="rounded-full"
            />
            <AvatarFallback className="bg-gradient-mango text-tech-900 font-bold">
              {author.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}{company && `, ${company}`}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuoteHighlight;

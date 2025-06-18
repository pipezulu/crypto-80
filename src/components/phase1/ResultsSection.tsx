
import React from 'react';
import { motion } from 'framer-motion';

interface ResultCardProps {
  number: string;
  title: string;
  description: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ number, title, description }) => (
  <div className="bg-tech-900/20 border border-tech-300/10 rounded-lg p-6 text-center">
    <div className="bg-gradient-radial-tech h-16 w-16 mx-auto flex items-center justify-center rounded-full mb-4">
      <div className="text-lg font-bold">{number}</div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const ResultsSection = () => {
  const results = [
    {
      number: "15K",
      title: "Strategic Comments",
      description: "Your announcements and alpha visible across every major crypto conversation"
    },
    {
      number: "10K",
      title: "Targeted DMs",
      description: "Direct outreach to whales, traders, and decision-makers in crypto"
    },
    {
      number: "10x",
      title: "Visibility Boost",
      description: "Massive increase in awareness, mentions, and engagement from crypto community"
    }
  ];

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">🚀 Results in Month 1</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {results.map((result, index) => (
              <ResultCard 
                key={index}
                number={result.number}
                title={result.title}
                description={result.description}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;

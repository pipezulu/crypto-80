import React from 'react';
import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import QuoteHighlight from '@/components/QuoteHighlight';

export interface UseCaseType {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  quote: string;
  details: string[];
  results: string;
}

interface UseCaseCardProps {
  useCase: UseCaseType;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ useCase }) => {
  return (
    <Card className="use-case-content-container border-none shadow-2xl bg-gradient-to-b from-card/80 to-card/40 backdrop-blur">
      <CardHeader className="pb-2">
        <CardTitle className="text-3xl flex items-center gap-4">
          <div className="bg-primary/20 p-3 rounded-full">
            {useCase.icon}
          </div>
          {useCase.title}
        </CardTitle>
        <CardDescription className="text-lg mt-2">{useCase.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <QuoteHighlight 
          quote={useCase.quote} 
          author="Client Testimonial" 
          role="Industry Professional" 
        />
        
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-6 text-gradient">How ManyMangoes' LinkedIn Strategy Can Help</h3>
          <ul className="space-y-4">
            {useCase.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="rounded-full p-1 bg-primary/20">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <span className="text-base">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 p-6 bg-muted/20 border border-primary/30 rounded-xl shadow-inner">
          <h4 className="font-semibold text-xl mb-4 text-primary">Expected Results from LinkedIn Strategy</h4>
          <p className="text-base">{useCase.results}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UseCaseCard;

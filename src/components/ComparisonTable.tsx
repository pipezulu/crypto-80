
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ComparisonItem {
  feature: string;
  seo: string | React.ReactNode;
  linkedin: string | React.ReactNode;
  manymangoes: string | React.ReactNode;
}

const comparisons: ComparisonItem[] = [{
  feature: "Time to Results",
  seo: "3-6 months before results",
  linkedin: "Variable, often low quality",
  manymangoes: "Immediate traction from Day 1"
}, {
  feature: "LinkedIn Engagement",
  seo: <div className="flex justify-center"><XCircle className="h-5 w-5 text-destructive" /></div>,
  linkedin: "One-way, generic outreach",
  manymangoes: "Two-way quality conversations"
}, {
  feature: "Personalization",
  seo: "Difficult to personalize",
  linkedin: "Mass-blast, low quality",
  manymangoes: "AI-enhanced human-led conversations"
}, {
  feature: "Retargeting",
  seo: <div className="flex justify-center"><XCircle className="h-5 w-5 text-destructive" /></div>,
  linkedin: "Little funnel structure",
  manymangoes: "Full-funnel: Attract → Educate → Convert"
}];

const ComparisonTable: React.FC = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: 0.3
  }} className="w-full overflow-x-auto">
      <Table className="border border-border rounded-lg overflow-hidden">
        <TableHeader className="bg-card">
          <TableRow>
            <TableHead className="w-[250px]">Feature</TableHead>
            <TableHead className="text-center">Traditional SEO</TableHead>
            <TableHead className="text-center">Typical LinkedIn Campaigns</TableHead>
            <TableHead className="text-center bg-tech-900/30">ManyMangoes LinkedIn Approach</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisons.map((item, i) => <TableRow key={i} className="hover:bg-muted/5">
              <TableCell className="font-medium">{item.feature}</TableCell>
              <TableCell className="text-center text-muted-foreground mx-0">
                {typeof item.seo === 'string' ? item.seo : item.seo}
              </TableCell>
              <TableCell className="text-center text-muted-foreground">{item.linkedin}</TableCell>
              <TableCell className="text-center font-medium bg-tech-900/10">
                {typeof item.manymangoes === 'string' ? <span className="text-tech-300">{item.manymangoes}</span> : <div className="flex justify-center">
                    <CheckCircle className="h-5 w-5 text-tech-400" />
                  </div>}
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </motion.div>;
};

export default ComparisonTable;

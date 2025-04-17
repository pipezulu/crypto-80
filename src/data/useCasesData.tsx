
import React from 'react';
import { Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';
import { UseCaseType } from '@/components/UseCaseCard';

const useCasesData: UseCaseType[] = [
  {
    id: "industry-targeting",
    title: "Industry Leader Targeting",
    icon: <Briefcase />,
    description: "Strategic approach to connect with key decision makers in your industry",
    quote: "ManyMangoes has supported my team through LinkedIn lead generation. I found them to be proactive and willing to pivot so we could get the best results.",
    details: [
      "Identify heads of key departments and decision-makers at target companies",
      "Connect with industry leaders at the right time in their planning cycle",
      "Build relationships through meaningful conversations before procurement phase",
      "Highlight your unique technology advantages for industry-specific applications",
      "Generate high-quality meetings with decision-makers at companies in your target market"
    ],
    results: "Increased strategic engagement with industry decision makers, leading to more qualified meetings and shortened sales cycles."
  },
  {
    id: "partnership-network",
    title: "Strategic Partnership Network",
    icon: <Users />,
    description: "Expand referral relationships with industry partners and consultants",
    quote: "An amazing sales resource for our company that exemplifies professionalism at the highest degree. The sale leads generated were beyond our expectations.",
    details: [
      "Identify and connect with partners specializing in your industry",
      "Build strategic partnerships with industry consultants and experts",
      "Create a consistent referral pipeline through targeted outreach",
      "Position your company as the premier solution provider in your space",
      "Generate warm introductions to potential clients in early evaluation stages"
    ],
    results: "Developed a reliable stream of qualified leads through strategic partnerships, increasing meeting quality and conversion rates by 35%."
  },
  {
    id: "contract-opportunities",
    title: "Contract Opportunity Identification",
    icon: <FileText />,
    description: "Proactive identification of contract and project opportunities",
    quote: "Whatever marketing you are doing today, my strong recommendation is that you need to immediately START experimenting with ManyMangoes if you have any intention of being the disrupter in your space.",
    details: [
      "Monitor contract opportunities before public announcements",
      "Establish connections with procurement and R&D leaders",
      "Track budget cycles and planning periods for new projects",
      "Demonstrate your unique capabilities and solution advantages",
      "Develop targeted content addressing specific client needs"
    ],
    results: "Gained early access to contract opportunities, expanding client portfolio and increasing win rates."
  },
  {
    id: "innovation-leaders",
    title: "Innovation Leader Targeting",
    icon: <Building />,
    description: "Identify companies investing in next-generation technologies in your space",
    quote: "Isaac was always thoughtful when it came to putting our business objectives first. He took the time to really understand what our objectives were.",
    details: [
      "Track modernization initiatives in your target industries",
      "Monitor innovation announcements for potential technology investors",
      "Connect with R&D leaders during early technology evaluation phases",
      "Provide educational content about your technology advantages",
      "Offer consultation services for advanced transitions to new solutions"
    ],
    results: "Created a proactive lead generation system identifying potential clients 3-6 months before their procurement process begins."
  },
  {
    id: "existing-clients",
    title: "Existing Client Expansion",
    icon: <LayoutDashboard />,
    description: "Uncover new opportunities within existing client organizations",
    quote: "ManyMangoes worked closely with us to build a tailored strategy to effectively engage our target market. Their service was invaluable to our growth.",
    details: [
      "Monitor existing clients for expansion opportunities and new contracts",
      "Identify key stakeholders across different departments",
      "Create targeted content addressing specific industry challenges",
      "Develop strategic relationship management approaches",
      "Implement account-based marketing for key accounts"
    ],
    results: "Increased repeat business by 40% through strategic relationship management and proactive opportunity identification."
  }
];

export default useCasesData;

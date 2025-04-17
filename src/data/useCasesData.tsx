
import React from 'react';
import { Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';
import { UseCaseType } from '@/components/UseCaseCard';

const useCasesData: UseCaseType[] = [
  {
    id: "industry-targeting",
    title: "Industry Leader Targeting",
    icon: <Briefcase />,
    description: "Strategic approach to connect with key decision makers in your industry",
    quote: "We have been using Many Mangoes for the last 3 months, to help identify, connect with and make aware, and then setup meetings for me, using LinkedIn. It has been very successful with Many Mangoes driving the whole process from planning, execution to successful introduction. We now have a pipeline of new business opportunities in Australia and New Zealand, thanks to Isaac and his team.",
    authorName: "Brian O'Doherty",
    authorRole: "Growth Acceleration and Market Entry for ambitious IT companies",
    authorImage: "/lovable-uploads/d9a238f5-75b3-469a-a585-4c59b5675887.png",
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
    quote: "Our LinkedIn campaign during the Summer Holiday of 2022 was very successful... Isaac and his team as well as the ManyMangoes platform did the trick... It delivered many relevant and valuable contacts from all over Europe. I would recommend working with ManyMangoes and Isaac and his team to anyone!",
    authorName: "Stephanus Vermeulen",
    authorRole: "Hybrid Co Creative Director/Strategy",
    authorImage: "/lovable-uploads/1d39c9fb-21b1-4eb6-a979-6e6e303d9529.png",
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
    quote: "The work with Manymangoes has started to expand my network and specifically target key positions in UK marketplace accounts. It enables me to qualify accounts that have an interest in what we are doing at Aqua either in the present or in the future. The automated capability when tuned correctly saves me time and is starting to help build a picture of the accounts that have a need for our assistance.",
    authorName: "Trevor Camp",
    authorRole: "Cloud Native Privilege Access Management",
    authorImage: "/lovable-uploads/85d048d0-49cf-468c-b5ad-6f208e86e7a5.png",
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
    quote: "We asked Isaac and the ManyMangoes team to help us identify and approach relevant senior executives to introduce them to a sales opportunity. Although the timelines were very short, Isaac and his team turned the project around very quickly, and put out our message to far more people than we were expecting. Isaac's client communication is second-to-none, and he really cares about the project outcome and suggested many ways in which the process could be improved. We will certainly use ManyMangoes again.",
    authorName: "Steve Morrell",
    authorRole: "Insightful Analysis of the Contact Centre and CX Industries",
    authorImage: "/lovable-uploads/18590a58-8efd-4320-9c50-7c99544dec2b.png",
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
    quote: "Isaac and the Many Mangoes team were a breeze to work with. Very reliable and exceeded my expectations by a long shot. Anyone who has the opportunity to work with the sales guru will be very pleased with the outcome.",
    authorName: "Chris Michael",
    authorRole: "Increasing Digital Footprints through Mosfa Web Solutions",
    authorImage: "/lovable-uploads/0305c1b5-5e0d-40d9-bef7-27c89f18fb2f.png",
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

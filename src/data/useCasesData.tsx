
import React from 'react';
import { Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';
import { UseCaseType } from '@/components/UseCaseCard';

const useCasesData: UseCaseType[] = [
  {
    id: "commercial-design",
    title: "Commercial Interior Design",
    icon: <Briefcase />,
    description: "Identify and engage with clients needing interior design services",
    quote: "We do commercial interior. Federal is our largest client.",
    details: [
      "Identify potential commercial and government clients planning to remodel",
      "Connect with decision makers at the right time in their planning cycle",
      "Build relationships through meaningful conversations before they're in-market",
      "Provide detailed information about current office design trends and solutions",
      "Generate meetings with facility managers and procurement officers"
    ],
    results: "Increased engagement with key decision makers at federal agencies and commercial enterprises by identifying them before they've selected a design partner."
  },
  {
    id: "architect-partnerships",
    title: "Architect & Designer Partnerships",
    icon: <Users />,
    description: "Build strong referral relationships with architects and commercial realtors",
    quote: "You won't lease a space on your own. So one is the commercial realtor networking with those people that are building clients.",
    details: [
      "Identify and connect with architects working on commercial projects",
      "Build relationships with commercial realtors handling new leases",
      "Create a consistent referral pipeline through strategic partnerships",
      "Establish Ori as the go-to resource for furniture and interior solutions",
      "Generate warm introductions to clients in the planning stage"
    ],
    results: "Created a reliable stream of warm leads through architect and realtor partnerships, increasing project win rates by 35%."
  },
  {
    id: "government-contracts",
    title: "Government Contract Opportunities",
    icon: <FileText />,
    description: "Stay ahead of government contract opportunities and decision makers",
    quote: "Where I'm located is where it's called Redstone Marshall. The federal agencies make decisions, furniture, Army Corps of Engineers, Missile Command.",
    details: [
      "Monitor federal contract opportunities before they're publicly announced",
      "Connect with key decision-makers in government procurement",
      "Build relationships with government facility managers",
      "Position Ori as the expert in government workspace design",
      "Identify budget cycles and planning periods for new projects"
    ],
    results: "Gained early access to government contract opportunities, increasing bid success rates and expanding federal client portfolio."
  },
  {
    id: "moving-clients",
    title: "New Space Identification",
    icon: <Building />,
    description: "Identify companies moving to or building new office spaces",
    quote: "We try to find clients that are needing to either remodel or update or they're moving to a new space.",
    details: [
      "Monitor funding announcements for companies likely to expand",
      "Track commercial real estate transactions for office relocations",
      "Connect with operations leaders during early planning phases",
      "Provide educational content about efficient space utilization",
      "Offer consultation services for companies in transition"
    ],
    results: "Created a proactive lead generation system that identifies companies 3-6 months before they start their furniture procurement process."
  },
  {
    id: "existing-clients",
    title: "Existing Client Expansion",
    icon: <LayoutDashboard />,
    description: "Identify opportunities with existing clients for additional projects",
    quote: "We need to better leverage our existing relationships for additional business opportunities.",
    details: [
      "Monitor existing clients for expansion announcements or new locations",
      "Identify key stakeholders in different departments who might need services",
      "Create targeted content addressing specific client industry challenges",
      "Develop regular touchpoints to stay top-of-mind with past clients",
      "Build a systematic approach to account-based marketing"
    ],
    results: "Increased repeat business by 40% through strategic relationship management and proactive identification of new opportunities within existing accounts."
  }
];

export default useCasesData;


import React from 'react';
import { Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';
import { UseCaseType } from '@/components/UseCaseCard';

const useCasesData: UseCaseType[] = [
  {
    id: "whale-targeting",
    title: "Whale & Institutional Targeting",
    icon: <Briefcase />,
    description: "Strategic approach to connect with crypto whales, institutions, and key decision makers",
    details: [
      "Target crypto whales with 7+ figure portfolios actively discussing your sector",
      "Connect with institutional investors during funding rounds and strategic partnerships",
      "Engage with key opinion leaders before major protocol launches or token events",
      "Leverage alpha signals from their bio details and recent transaction activity",
      "Generate high-quality meetings with decision-makers at the right moment in market cycles"
    ],
    results: "Increased strategic engagement with crypto institutions, leading to $2M+ in funding discussions and shortened deal cycles."
  },
  {
    id: "partnership-network",
    title: "Cross-Chain Partnership Network", 
    icon: <Users />,
    description: "Expand partnerships with protocols, DAOs, and crypto influencers across ecosystems",
    details: [
      "Identify and connect with complementary protocols for strategic integrations",
      "Build relationships with key DAO contributors and governance token holders",
      "Create consistent partnership pipeline through targeted crypto community outreach",
      "Position your protocol as the go-to solution in your vertical (DeFi, GameFi, NFTs)",
      "Generate warm introductions during early collaboration discussions"
    ],
    results: "Developed a reliable stream of qualified partnership leads, increasing integration opportunities and TVL growth by 250%."
  },
  {
    id: "alpha-opportunities",
    title: "Alpha Opportunity Identification",
    icon: <FileText />,
    description: "Proactive identification of funding rounds, airdrops, and strategic opportunities",
    details: [
      "Monitor funding announcements and strategic rounds before public disclosure",
      "Track governance proposals and protocol upgrade discussions",
      "Identify projects preparing for token launches or major partnerships",
      "Connect with builders during hackathons and early development phases",
      "Develop targeted outreach addressing specific technical needs and market gaps"
    ],
    results: "Gained early access to 15+ funding opportunities, expanding client portfolio and securing strategic partnerships."
  },
  {
    id: "innovation-leaders",
    title: "Next-Gen Protocol Targeting",
    icon: <Building />,
    description: "Identify protocols investing in cutting-edge blockchain technology and infrastructure",
    details: [
      "Track Layer 2 scaling solutions and emerging blockchain infrastructure",
      "Monitor DeFi 2.0 innovations and yield farming protocol developments",
      "Connect with research teams during early protocol development phases",
      "Provide technical consultation on blockchain architecture and tokenomics",
      "Offer integration services for advanced DeFi protocols and cross-chain solutions"
    ],
    results: "Created proactive lead generation identifying potential integration partners 2-3 months before their mainnet launches."
  },
  {
    id: "existing-clients",
    title: "Protocol Ecosystem Expansion",
    icon: <LayoutDashboard />,
    description: "Uncover new opportunities within existing protocol ecosystems and DAOs",
    details: [
      "Monitor existing protocol ecosystems for expansion and governance opportunities",
      "Identify key stakeholders across different DeFi verticals and Layer 2 solutions",
      "Create targeted content addressing specific blockchain scalability challenges",
      "Develop strategic relationship management for key protocol partnerships",
      "Implement account-based outreach for high-value DeFi integrations"
    ],
    results: "Increased protocol integrations by 180% through strategic ecosystem management and proactive opportunity identification."
  }
];

export default useCasesData;

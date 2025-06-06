
import React from 'react';
import { Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';
import { UseCaseType } from '@/components/UseCaseCard';

const useCasesData: UseCaseType[] = [
  {
    id: "whale-targeting",
    title: "Whale & Institutional Targeting",
    icon: <Briefcase />,
    description: "Strategic approach to connect with crypto whales, institutions, and key decision makers",
    quote: "We have been using Many Mangoes for the last 3 months to identify and connect with major crypto players on X. It's been incredibly successful - we now have direct lines to whales, fund managers, and institutional investors across multiple chains. The team drove the whole process from identifying alpha opportunities to securing meetings with tier-1 VCs.",
    authorName: "Brian O'Doherty",
    authorRole: "DeFi Protocol Founder & Crypto Investment Strategist",
    authorImage: "/lovable-uploads/d9a238f5-75b3-469a-a585-4c59b5675887.png",
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
    quote: "Our X campaign during the bull run was incredibly successful... Many Mangoes and the team delivered exactly what we needed. It connected us with relevant partners across Ethereum, Solana, and emerging L2s. I'd recommend working with Many Mangoes to anyone building in the space!",
    authorName: "Stephanus Vermeulen",
    authorRole: "Multi-Chain Protocol Strategist & DAO Contributor",
    authorImage: "/lovable-uploads/1d39c9fb-21b1-4eb6-a979-6e6e303d9529.png",
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
    quote: "The work with Manymangoes has expanded our network and specifically targets key positions in the crypto ecosystem. It enables us to qualify projects that have interest in our infrastructure either now or in future funding rounds. The automated capability saves time and helps build a picture of projects that need our DeFi primitives.",
    authorName: "Trevor Camp",
    authorRole: "DeFi Infrastructure & Yield Protocol Specialist",
    authorImage: "/lovable-uploads/85d048d0-49cf-468c-b5ad-6f208e86e7a5.png",
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
    quote: "We asked Many Mangoes to help us identify and approach relevant crypto executives for a strategic partnership opportunity. Although timelines were tight, the team delivered beyond expectations, reaching far more decision-makers in the space than anticipated. Their understanding of crypto culture is second-to-none, and they genuinely care about outcomes. We'll definitely use Many Mangoes again.",
    authorName: "Steve Morrell",
    authorRole: "Blockchain Innovation & Crypto Market Analysis",
    authorImage: "/lovable-uploads/18590a58-8efd-4320-9c50-7c99544dec2b.png",
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
    quote: "Many Mangoes team exceeded all expectations by a long shot. Working with these crypto-native growth experts was seamless and incredibly effective. Anyone building in Web3 who gets the chance to work with this team will be very pleased with the alpha they deliver.",
    authorName: "Chris Michael",
    authorRole: "Web3 Growth & DeFi Protocol Development",
    authorImage: "/lovable-uploads/0305c1b5-5e0d-40d9-bef7-27c89f18fb2f.png",
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

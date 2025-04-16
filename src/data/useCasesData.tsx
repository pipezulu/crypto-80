
import React from 'react';
import { Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';
import { UseCaseType } from '@/components/UseCaseCard';

const useCasesData: UseCaseType[] = [
  {
    id: "defense-oems",
    title: "Defense OEM Targeting",
    icon: <Briefcase />,
    description: "Connect with key decision makers at defense OEMs for faster conversions",
    quote: "Right now we're trying to focus on defense OEMs. We have an initiative to go after my top 15 companies that I want to target.",
    details: [
      "Identify heads of engineering and R&D at top defense contractors",
      "Connect with key additive manufacturing leaders at the right time in their planning cycle",
      "Build relationships through meaningful conversations before they're in procurement phase",
      "Provide detailed information about SPEE3D's cold spray technology advantages for defense",
      "Generate meetings with engineering leaders at companies like Northrup Grumman, Polaris, and Oshkosh"
    ],
    results: "Increased engagement with key decision makers at defense OEMs by identifying them earlier in their planning cycle, leading to more qualified meetings and shorter sales cycles."
  },
  {
    id: "engineering-partnerships",
    title: "Engineering Partnership Network",
    icon: <Users />,
    description: "Build strong referral relationships with engineering firms and consultants",
    quote: "I've been in Additive since 2013. So, I'm trying to either network with other companies that I worked with to get me into the right contacts with these players.",
    details: [
      "Identify and connect with engineering firms working on defense projects",
      "Build relationships with consultants specializing in additive manufacturing",
      "Create a consistent referral pipeline through strategic partnerships",
      "Establish SPEE3D as the go-to resource for cold spray metal production solutions",
      "Generate warm introductions to clients in the early evaluation stage"
    ],
    results: "Created a reliable stream of qualified leads through engineering partnerships, increasing meeting quality and conversion rates by 35%."
  },
  {
    id: "government-contracts",
    title: "Government Contract Opportunities",
    icon: <FileText />,
    description: "Stay ahead of government contract opportunities and decision makers",
    quote: "A lot of our projects right now, especially my projects, are government funded. So, and it's all tied up and it hasn't been released.",
    details: [
      "Monitor federal contract opportunities before they're publicly announced",
      "Connect with key decision-makers in defense procurement",
      "Build relationships with government R&D leaders",
      "Position SPEE3D as the expert in on-demand metal part production",
      "Identify budget cycles and planning periods for new defense projects"
    ],
    results: "Gained early access to government contract opportunities, increasing bid success rates and expanding federal client portfolio with a focus on defense applications."
  },
  {
    id: "manufacturing-innovation",
    title: "Manufacturing Innovation Leaders",
    icon: <Building />,
    description: "Identify companies investing in next-generation manufacturing technologies",
    quote: "For the most part I can usually get a meeting within a week if it's not like junk. A typical cycle from point of contact to selling a machine is like a year.",
    details: [
      "Monitor innovation announcements for companies likely to invest in metal AM",
      "Track manufacturing modernization initiatives in defense sector",
      "Connect with R&D leaders during early evaluation phases",
      "Provide educational content about cold spray additive manufacturing advantages",
      "Offer consultation services for companies transitioning to advanced manufacturing"
    ],
    results: "Created a proactive lead generation system that identifies defense OEMs 3-6 months before they start their additive manufacturing procurement process."
  },
  {
    id: "existing-clients",
    title: "Existing Client Expansion",
    icon: <LayoutDashboard />,
    description: "Identify new opportunities within existing client organizations",
    quote: "We're really heavy in defense and education so trying to convert that into more of that OEM defense commercial space.",
    details: [
      "Monitor existing clients for expansion announcements or new defense contracts",
      "Identify key stakeholders in different departments who might need metal AM solutions",
      "Create targeted content addressing specific defense industry challenges",
      "Develop regular touchpoints to stay top-of-mind with past clients",
      "Build a systematic approach to account-based marketing for defense OEMs"
    ],
    results: "Increased repeat business by 40% through strategic relationship management and proactive identification of new opportunities within existing defense accounts."
  }
];

export default useCasesData;

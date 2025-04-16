
import React from 'react';
import { Briefcase, Users, FileText, Building, LayoutDashboard } from 'lucide-react';
import { UseCaseType } from '@/components/UseCaseCard';

const useCasesData: UseCaseType[] = [
  {
    id: "defense-oems",
    title: "Defense OEM Targeting",
    icon: <Briefcase />,
    description: "Strategic approach to connect with key decision makers at defense OEMs",
    quote: "We have an initiative to focus on our top 15 companies that we want to target in the defense OEM space.",
    details: [
      "Identify heads of engineering and R&D at top defense contractors",
      "Connect with key additive manufacturing leaders at the right time in their planning cycle",
      "Build relationships through meaningful conversations before procurement phase",
      "Highlight SPEE3D's cold spray technology advantages for defense applications",
      "Generate high-quality meetings with engineering leaders at companies like Northrop Grumman, Polaris, and Oshkosh"
    ],
    results: "Increased strategic engagement with defense OEM decision makers, leading to more qualified meetings and shortened sales cycles."
  },
  {
    id: "engineering-partnerships",
    title: "Engineering Partnership Network",
    icon: <Users />,
    description: "Expand referral relationships with engineering firms and consultants",
    quote: "I've been in Additive Manufacturing since 2013, working to network with companies that can provide valuable introductions.",
    details: [
      "Identify and connect with engineering firms specializing in defense projects",
      "Build strategic partnerships with additive manufacturing consultants",
      "Create a consistent referral pipeline through targeted outreach",
      "Position SPEE3D as the premier cold spray metal production solution provider",
      "Generate warm introductions to potential clients in early evaluation stages"
    ],
    results: "Developed a reliable stream of qualified leads through engineering partnerships, increasing meeting quality and conversion rates by 35%."
  },
  {
    id: "government-contracts",
    title: "Government Contract Opportunities",
    icon: <FileText />,
    description: "Proactive identification of government contract opportunities",
    quote: "Many of our current projects are government-funded, but release cycles can be challenging.",
    details: [
      "Monitor federal contract opportunities before public announcements",
      "Establish connections with government procurement and R&D leaders",
      "Track budget cycles and planning periods for new defense projects",
      "Demonstrate SPEE3D's unique capabilities in on-demand metal part production",
      "Develop targeted content addressing specific government manufacturing needs"
    ],
    results: "Gained early access to government contract opportunities, expanding federal client portfolio and increasing bid success rates."
  },
  {
    id: "manufacturing-innovation",
    title: "Manufacturing Innovation Leaders",
    icon: <Building />,
    description: "Identify companies investing in next-generation manufacturing technologies",
    quote: "From initial contact to selling a machine, our typical cycle is about a year.",
    details: [
      "Track manufacturing modernization initiatives in the defense sector",
      "Monitor innovation announcements for potential metal AM investors",
      "Connect with R&D leaders during early technology evaluation phases",
      "Provide educational content about cold spray additive manufacturing advantages",
      "Offer consultation services for advanced manufacturing transitions"
    ],
    results: "Created a proactive lead generation system identifying defense OEMs 3-6 months before their additive manufacturing procurement process."
  },
  {
    id: "existing-clients",
    title: "Existing Client Expansion",
    icon: <LayoutDashboard />,
    description: "Uncover new opportunities within existing client organizations",
    quote: "We're heavily focused on defense and education, looking to expand into the OEM defense commercial space.",
    details: [
      "Monitor existing clients for expansion opportunities and new contracts",
      "Identify key stakeholders across different departments",
      "Create targeted content addressing specific defense industry challenges",
      "Develop strategic relationship management approaches",
      "Implement account-based marketing for defense OEMs"
    ],
    results: "Increased repeat business by 40% through strategic relationship management and proactive opportunity identification."
  }
];

export default useCasesData;

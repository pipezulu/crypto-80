import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Home, LineChart, Rocket, UsersRound, Settings, ChevronRight, Menu, X, Calendar, Star, Check, DollarSign, User, Building2 } from 'lucide-react';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavItem = ({
  to,
  icon,
  label,
  active
}: NavItemProps) => <Link to={to}>
    <Button variant="ghost" className={`w-full justify-start gap-2 mb-1 ${active ? 'bg-muted text-primary' : 'hover:bg-muted'}`}>
      {icon}
      <span>{label}</span>
      {active && <ChevronRight className="ml-auto h-4 w-4" />}
    </Button>
  </Link>;

interface ExternalLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ExternalLink = ({
  href,
  icon,
  label
}: ExternalLinkProps) => <a href={href} target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" className="w-full justify-start gap-2 mb-1 h-8 text-xs hover:bg-muted">
      {icon}
      <span>{label}</span>
    </Button>
  </a>;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const twitterNavItems = [{
    to: '/',
    icon: <Home className="h-5 w-5" />,
    label: 'Overview'
  }, {
    to: '/phase-1',
    icon: <LineChart className="h-5 w-5" />,
    label: 'Phase 1: Design Engine'
  }, {
    to: '/phase-2',
    icon: <Settings className="h-5 w-5" />,
    label: 'Phase 2: Optimize'
  }, {
    to: '/phase-3',
    icon: <Rocket className="h-5 w-5" />,
    label: 'Phase 3: Scale'
  }, {
    to: '/use-cases',
    icon: <UsersRound className="h-5 w-5" />,
    label: 'Use Cases'
  }, {
    to: '/pricing',
    icon: <DollarSign className="h-5 w-5" />,
    label: 'Pricing'
  }];

  const linkedinNavItems = [{
    to: '/linkedin',
    icon: <Home className="h-5 w-5" />,
    label: 'Overview'
  }, {
    to: '/linkedin/phase-1',
    icon: <LineChart className="h-5 w-5" />,
    label: 'Phase 1: Design Engine'
  }, {
    to: '/linkedin/phase-2',
    icon: <Settings className="h-5 w-5" />,
    label: 'Phase 2: Optimize'
  }, {
    to: '/linkedin/phase-3',
    icon: <Rocket className="h-5 w-5" />,
    label: 'Phase 3: Scale'
  }, {
    to: '/linkedin/use-cases',
    icon: <UsersRound className="h-5 w-5" />,
    label: 'Use Cases'
  }, {
    to: '/linkedin/pricing',
    icon: <DollarSign className="h-5 w-5" />,
    label: 'Pricing'
  }];

  const usefulLinks = [{
    href: 'https://manymangoes.com/happy',
    icon: <Star className="h-4 w-4" />,
    label: 'Happy Clients'
  }, {
    href: 'https://manymangoes.com/success-stories',
    icon: <Check className="h-4 w-4" />,
    label: 'Success Stories'
  }];

  const renderNavSection = () => (
    <>
      <div className="mb-6 flex items-center">
        <img 
          src="/lovable-uploads/52c612bd-2293-4262-a18a-71feff878292.png" 
          alt="ManyMangoes Logo" 
          className="h-8 w-8 rounded-full mr-2"
        />
        <h1 className="text-xl font-bold">
          <span className="text-gradient">ManyMangoes</span>
        </h1>
      </div>

      {/* Proposal A: Twitter/X */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <User className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-semibold text-primary">Proposal A: X (Twitter)</h3>
        </div>
        <div className="space-y-1">
          {twitterNavItems.map(item => <NavItem key={item.to} to={item.to} icon={item.icon} label={item.label} active={location.pathname === item.to} />)}
        </div>
      </div>

      {/* Proposal B: LinkedIn */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="h-4 w-4 text-blue-500" />
          <h3 className="text-sm font-semibold text-blue-500">Proposal B: LinkedIn</h3>
        </div>
        <div className="space-y-1">
          {linkedinNavItems.map(item => <NavItem key={item.to} to={item.to} icon={item.icon} label={item.label} active={location.pathname === item.to} />)}
        </div>
      </div>
      
      <div className="pt-4 border-t border-border">
        <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer">
          <Button variant="default" className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
            <Calendar className="h-5 w-5 mr-2" />
            Schedule a Meeting
          </Button>
        </a>
      </div>
      
      <div className="pt-4 border-t border-border mt-4">
        <h3 className="text-xs font-medium text-muted-foreground mb-2 px-2">Useful Links</h3>
        {usefulLinks.map(link => <ExternalLink key={link.href} href={link.href} icon={link.icon} label={link.label} />)}
      </div>
    </>
  );

  return <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon" onClick={() => setMobileNavOpen(!mobileNavOpen)} className="bg-card bg-opacity-80 backdrop-blur-sm border-muted">
          {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div className="hidden lg:flex flex-col w-64 border-r border-border p-4 bg-[#121212] dark:bg-[#0A0A0A] fixed h-screen overflow-y-auto">
        {renderNavSection()}
      </div>

      {mobileNavOpen && <motion.div 
        initial={{ x: '-100%' }} 
        animate={{ x: 0 }} 
        exit={{ x: '-100%' }} 
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 250
        }} 
        className="fixed inset-0 z-40 w-64 bg-[#121212] dark:bg-[#0A0A0A] border-r border-border p-4 overflow-y-auto"
      >
        {renderNavSection()}
      </motion.div>}

      {mobileNavOpen && <div className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden" onClick={() => setMobileNavOpen(false)} />}

      <div className="flex-1 lg:ml-64 overflow-auto">
        {children}
      </div>
    </div>;
};

export default Layout;

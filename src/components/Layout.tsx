
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  LineChart, 
  Rocket, 
  UsersRound, 
  Settings, 
  ChevronRight, 
  Menu, 
  X,
  Calendar
} from 'lucide-react';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}

const NavItem = ({ to, icon, label, active }: NavItemProps) => (
  <Link to={to}>
    <Button
      variant="ghost"
      className={`w-full justify-start gap-2 mb-1 ${
        active ? 'bg-muted text-primary' : 'hover:bg-muted'
      }`}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <ChevronRight className="ml-auto h-4 w-4" />
      )}
    </Button>
  </Link>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  const navItems = [
    { to: '/', icon: <Home className="h-5 w-5" />, label: 'Overview' },
    { to: '/phase-1', icon: <LineChart className="h-5 w-5" />, label: 'Phase 1: Design Engine' },
    { to: '/phase-2', icon: <Settings className="h-5 w-5" />, label: 'Phase 2: Optimize' },
    { to: '/phase-3', icon: <Rocket className="h-5 w-5" />, label: 'Phase 3: Scale' },
    { to: '/use-cases', icon: <UsersRound className="h-5 w-5" />, label: 'Use Cases' },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="bg-card bg-opacity-80 backdrop-blur-sm border-muted"
        >
          {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar for desktop */}
      <div className="hidden lg:flex flex-col w-64 bg-card border-r border-border p-4">
        <div className="mb-6 flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-mango mr-2"></div>
          <h1 className="text-xl font-bold">
            <span className="text-gradient">ManyMangoes</span>
          </h1>
        </div>
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem 
              key={item.to}
              to={item.to}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.to}
            />
          ))}
        </div>
        
        {/* Schedule Meeting Button - Now below Use Cases navigation */}
        <div className="pt-4 border-t border-border mt-6">
          <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Meeting
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {mobileNavOpen && (
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="fixed inset-0 z-40 w-64 bg-card border-r border-border p-4"
        >
          <div className="mb-6 flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-mango mr-2"></div>
            <h1 className="text-xl font-bold">
              <span className="text-gradient">ManyMangoes</span>
            </h1>
          </div>
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavItem 
                key={item.to}
                to={item.to}
                icon={item.icon}
                label={item.label}
                active={location.pathname === item.to}
              />
            ))}
          </div>
          
          {/* Schedule Meeting Button for mobile - Now below Use Cases navigation */}
          <div className="pt-4 border-t border-border mt-6">
            <a href="https://meet.manymangoes.com/felipe" target="_blank" rel="noopener noreferrer">
              <Button variant="default" className="w-full bg-gradient-tech hover:opacity-90 transition-opacity">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule a Meeting
              </Button>
            </a>
          </div>
        </motion.div>
      )}

      {/* Mobile navigation backdrop */}
      {mobileNavOpen && (
        <div 
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Phase1 from "./pages/Phase1";
import Phase2 from "./pages/Phase2";
import Phase3 from "./pages/Phase3";
import UseCases from "./pages/UseCases";
import Pricing from "./pages/Pricing";
import LinkedInOverview from "./pages/linkedin/Overview";
import LinkedInPhase1 from "./pages/linkedin/Phase1";
import LinkedInPhase2 from "./pages/linkedin/Phase2";
import LinkedInPhase3 from "./pages/linkedin/Phase3";
import LinkedInUseCases from "./pages/linkedin/UseCases";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// ScrollToTop component to ensure page starts at the top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            {/* Twitter/X Proposal Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/phase-1" element={<Phase1 />} />
            <Route path="/phase-2" element={<Phase2 />} />
            <Route path="/phase-3" element={<Phase3 />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/pricing" element={<Pricing />} />
            
            {/* LinkedIn Proposal Routes */}
            <Route path="/linkedin" element={<LinkedInOverview />} />
            <Route path="/linkedin/phase-1" element={<LinkedInPhase1 />} />
            <Route path="/linkedin/phase-2" element={<LinkedInPhase2 />} />
            <Route path="/linkedin/phase-3" element={<LinkedInPhase3 />} />
            <Route path="/linkedin/use-cases" element={<LinkedInUseCases />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

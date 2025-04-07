
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Transfer from "./pages/Transfer";
import QRScan from "./pages/QRScan";
import Profile from "./pages/Profile";
import EcoStore from "./pages/EcoStore";
import NotFound from "./pages/NotFound";
import Achievements from "./pages/Achievements";
import PersonalInfo from "./pages/PersonalInfo";
import PaymentMethods from "./pages/PaymentMethods";
import SecuritySettings from "./pages/SecuritySettings";
import AppSettings from "./pages/AppSettings";
import HelpSupport from "./pages/HelpSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/qrscan" element={<QRScan />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ecostore" element={<EcoStore />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/payment-methods" element={<PaymentMethods />} />
          <Route path="/security" element={<SecuritySettings />} />
          <Route path="/settings" element={<AppSettings />} />
          <Route path="/help" element={<HelpSupport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

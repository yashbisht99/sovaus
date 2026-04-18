import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "./pages/NotFound.tsx";
import { AppLayout } from "./components/sova/AppLayout";
import { MarketingLayout } from "./components/sova/MarketingShell";
import Landing from "./pages/Landing";
import Product from "./pages/Product";
import PricingPage from "./pages/PricingPage";
import Customers from "./pages/Customers";
import Changelog from "./pages/Changelog";
import CommandCenter from "./pages/CommandCenter";
import Competitors from "./pages/Competitors";
import Pricing from "./pages/Pricing";
import Assortment from "./pages/Assortment";
import Launches from "./pages/Launches";
import Operations from "./pages/Operations";
import Billing from "./pages/Billing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Marketing site */}
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/changelog" element={<Changelog />} />
          </Route>

          {/* App */}
          <Route element={<AppLayout />}>
            <Route path="/app" element={<CommandCenter />} />
            <Route path="/app/competitors" element={<Competitors />} />
            <Route path="/app/pricing" element={<Pricing />} />
            <Route path="/app/assortment" element={<Assortment />} />
            <Route path="/app/launches" element={<Launches />} />
            <Route path="/app/operations" element={<Operations />} />
          </Route>

          {/* Billing has its own dark shell */}
          <Route path="/app/billing" element={<Billing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

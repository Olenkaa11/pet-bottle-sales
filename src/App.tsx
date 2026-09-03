
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Wholesale from "./pages/Wholesale";
import PetBanki from "./pages/PetBanki";
import PetFlakony from "./pages/PetFlakony";
import PetTara from "./pages/PetTara";
import MessengerWidget from "./components/MessengerWidget";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pet-banki-optom" element={<Wholesale />} />
          <Route path="/pet-banki" element={<PetBanki />} />
          <Route path="/pet-flakony" element={<PetFlakony />} />
          <Route path="/pet-tara" element={<PetTara />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MessengerWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
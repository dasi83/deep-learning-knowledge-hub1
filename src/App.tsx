import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { CookieConsent } from "./components/CookieConsent";
import Index from "./pages/Index";
import DeepLearning from "./pages/DeepLearning";
import NeuralNetworks from "./pages/NeuralNetworks";
import MachineLearning from "./pages/MachineLearning";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/deep-learning" element={<DeepLearning />} />
            <Route path="/neural-networks" element={<NeuralNetworks />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
          <Footer />
          <CookieConsent />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
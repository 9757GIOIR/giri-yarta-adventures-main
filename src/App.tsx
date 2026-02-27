import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TourPackages from "./pages/TourPackages";
import Tours from "./pages/Tours";
import DevDarshanMahaYatra from "./pages/DevDarshanMahaYatra";
import MaNarmadaParikrama from "./pages/MaNarmadaParikrama";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/dev-darshan-maha-yatra" element={<DevDarshanMahaYatra />} />
          <Route path="/tours/ma-narmada-parikrama" element={<MaNarmadaParikrama />} />
          <Route path="/tours/:tourId" element={<TourPackages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

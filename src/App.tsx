import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StudyAbroad from "./pages/StudyAbroad";
import CountryDetail from "./pages/CountryDetail";
import MBBSOverseas from "./pages/MBBSOverseas";
import MBBSCountryDetail from "./pages/MBBSCountryDetail";
import UniversityDetail from "./pages/UniversityDetail";
import CourseDetail from "./pages/CourseDetail";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
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
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/study-abroad/:country" element={<CountryDetail />} />
          <Route path="/mbbs-overseas" element={<MBBSOverseas />} />
          <Route path="/mbbs-overseas/:country" element={<MBBSCountryDetail />} />
          <Route path="/mbbs-overseas/:country/:universitySlug" element={<UniversityDetail />} />
          <Route path="/courses/:courseSlug" element={<CourseDetail />} />
          <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

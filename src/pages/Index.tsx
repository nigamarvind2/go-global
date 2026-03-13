import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AIAssistant from "@/components/AIAssistant";
import ApplicationTracker from "@/components/ApplicationTracker";
import CollegePredictor from "@/components/CollegePredictor";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AIAssistant />
      <CollegePredictor />
      <ApplicationTracker />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

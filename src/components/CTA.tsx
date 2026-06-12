import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import EnquiryFormModal from "./EnquiryFormModal";

const CTA = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <section className="px-6 md:px-8 py-12 bg-gradient-to-b from-primary/[0.03] to-transparent">
      <div className="content-card bg-gradient-to-br from-primary/[0.05] to-accent/[0.03] p-6 md:p-8 text-center max-w-3xl mx-auto border-t-2 border-t-primary/20">
        <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          Ready to start your global journey?
        </h2>
        <p className="text-sm text-muted-foreground mb-5 max-w-xl mx-auto">
          Book a free consultation with our expert counsellors and get a personalized plan for your intake, shortlist, and visa readiness.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary flex items-center gap-2">
            Book Free Counselling
            <ArrowRight className="w-4 h-4" />
          </button>
          <a href="tel:+919166664558" className="btn-outline flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Talk to an Expert
          </a>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4">
          Free consultation • No obligations • Expert guidance
        </p>
      </div>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </section>
  );
};

export default CTA;

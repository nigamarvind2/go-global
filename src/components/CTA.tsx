import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import EnquiryFormModal from "./EnquiryFormModal";

const CTA = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 shadow-lg border border-border/60 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to start your global journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert counsellors and get a personalized plan for your intake,
            shortlist, and visa readiness.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary flex items-center gap-2">
              Book Free Counselling
              <ArrowRight className="w-5 h-5" />
            </button>
            <a href="tel:+919166664558" className="btn-outline flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Talk to an Expert
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Free consultation • No obligations • Expert guidance • goglobalstudyedtech@gmail.com
          </p>
        </div>
      </div>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </section>
  );
};

export default CTA;

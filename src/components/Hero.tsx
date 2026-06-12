import { useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, FileText } from "lucide-react";
import EnquiryFormModal from "./EnquiryFormModal";

const Hero = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <div className="page-content">
      {/* Welcome banner */}
      <div className="content-card bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] p-6 md:p-8">
        <div className="max-w-2xl">
          <span className="eyebrow mb-3 block">GoGlobal EdTech • Study Abroad Consulting</span>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Go global with a <span className="text-primary">clear plan</span> built for you
          </h1>

          <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-lg">
            We guide students from India to top universities worldwide. Get help with course selection,
            documents, scholarships, and visa readiness — all in one place.
          </p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary flex items-center gap-2">
              Book Free Counselling
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="/#services" className="btn-outline">
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid sm:grid-cols-3 gap-4 mt-6">
        <div className="content-card p-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Visa-ready documentation</p>
            <p className="text-xs text-muted-foreground mt-0.5">Checklists and review support.</p>
          </div>
        </div>
        <div className="content-card p-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Expert counselling</p>
            <p className="text-xs text-muted-foreground mt-0.5">Human support at every step.</p>
          </div>
        </div>
        <div className="content-card p-4 flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">Document checklist</p>
            <p className="text-xs text-muted-foreground mt-0.5">Know what to prepare next.</p>
          </div>
        </div>
      </div>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </div>
  );
};

export default Hero;

import { useState } from "react";
import { ArrowRight, Sparkles, ShieldCheck, FileText, Globe2 } from "lucide-react";
import EnquiryFormModal from "./EnquiryFormModal";

const Hero = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-aurora py-20 lg:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-background/80 border border-border/60 px-4 py-2 text-xs font-semibold text-foreground/80 shadow-sm">
              <Sparkles className="w-4 h-4" />
              GoGlobalEdTechPvtLtd • Study Abroad Consulting
            </div>
            
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground">
              Go global with a{" "}
              <span className="gradient-text">clear plan</span>{" "}
              built for you
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-lg">
              We guide students from India to top universities worldwide. Get help with course selection, documents,
              scholarships, and visa readiness in one place.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary flex items-center gap-2">
                Book Free Counselling
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/#services" className="btn-outline">
                Explore Services
              </a>
            </div>
            
            <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
            
            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4 pt-8 border-t border-border/60">
              <div className="surface-card p-4">
                <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-foreground">Visa-ready documentation</p>
                <p className="text-xs text-muted-foreground">Checklists and review support.</p>
              </div>
              <div className="surface-card p-4">
                <Sparkles className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-foreground">Expert counselling</p>
                <p className="text-xs text-muted-foreground">Human support at every step.</p>
              </div>
              <div className="surface-card p-4">
                <FileText className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-foreground">Document checklist</p>
                <p className="text-xs text-muted-foreground">Know what to prepare next.</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <img 
                src="/assets/unsplash-1523580846011-d3a5bc25702b.jpg"
                alt="Students preparing for global education"
                className="rounded-[28px] shadow-xl w-full object-cover"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-lg border border-border/60 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Global-ready plan</p>
                    <p className="text-xs text-muted-foreground">From shortlist to visa.</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-foreground text-background p-4 rounded-2xl shadow-lg">
                <p className="text-sm font-semibold">Talk to an expert</p>
                <p className="text-xs opacity-80">Get clear next steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

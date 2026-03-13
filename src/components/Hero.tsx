import { useState } from "react";
import { ArrowRight, Sparkles, ShieldCheck, ClipboardList, Globe2 } from "lucide-react";
import EnquiryFormModal from "./EnquiryFormModal";

const Hero = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <section className="relative overflow-hidden bg-aurora py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              GoGlobalEdTechPvtLtd • Study Abroad Consulting
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              Go global with a{" "}
              <span className="gradient-text">clear plan</span>{" "}
              built for you
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              We guide students from India to top universities worldwide. Get help with course selection, documents,
              scholarships, and visa readiness in one place.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary flex items-center gap-2">
                Book Free Counselling
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href="/#ai-assistant" className="btn-outline">
                Try AI Advisor
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
                <p className="text-sm font-semibold text-foreground">AI-powered guidance</p>
                <p className="text-xs text-muted-foreground">Instant answers, verified by experts.</p>
              </div>
              <div className="surface-card p-4">
                <ClipboardList className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-semibold text-foreground">Application tracker</p>
                <p className="text-xs text-muted-foreground">Know what is left to complete.</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=700&h=800&fit=crop"
                alt="Students preparing for global education"
                className="rounded-[32px] shadow-2xl w-full object-cover"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border animate-float">
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
              <div className="absolute top-6 right-6 bg-primary/90 text-primary-foreground p-4 rounded-2xl shadow-xl">
                <p className="text-sm font-semibold">Ask the AI Advisor</p>
                <p className="text-xs opacity-80">Get instant answers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

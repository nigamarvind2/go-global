import { useState } from "react";
import { ArrowRight, FileText, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import EnquiryFormModal from "./EnquiryFormModal";

const Hero = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="page-content">
      <div className="hero-panel content-card overflow-hidden p-0">
        <div className="grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 md:p-8 lg:p-10">
            <span className="eyebrow mb-3 block">
              GoGlobal EdTech | Study Abroad Consulting
            </span>

            <h1 className="mb-4 max-w-xl text-2xl font-bold text-foreground md:text-3xl lg:text-5xl">
              Go global with a <span className="headline-highlight">clear plan</span>
              <span className="mt-2 block text-primary">
                built around your dream university
              </span>
            </h1>

            <p className="mb-6 max-w-lg text-sm text-muted-foreground md:text-base">
              We guide students from India to top universities worldwide. Get help
              with course selection, documents, scholarships, and visa readiness
              all in one place.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="btn-primary flex items-center gap-2"
              >
                Book Free Counselling
                <ArrowRight className="h-4 w-4" />
              </button>
              <a href="/#services" className="btn-outline">
                Explore Services
              </a>
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden border-t border-white/70 lg:min-h-full lg:border-l lg:border-t-0">
            <img
              src="/assets/unsplash-1523240795612-9a054b0db644.jpg"
              alt="Students planning their study abroad application"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/10 via-transparent to-primary/35" />

            <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-4 py-3 shadow-lg ring-1 ring-white/70 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Globe2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">12+ countries</p>
                  <p className="text-xs text-muted-foreground">One guided plan</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 right-5 max-w-[220px] rounded-2xl bg-foreground/90 px-4 py-3 text-white shadow-lg backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                Application clarity
              </p>
              <p className="mt-1 text-sm font-semibold">
                Shortlist, documents, visa and pre-departure support in one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="content-card flex items-start gap-3 border-primary/10 bg-primary/[0.03] p-4">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Visa-ready documentation
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Checklists and review support.
            </p>
          </div>
        </div>

        <div className="content-card flex items-start gap-3 border-accent/20 bg-accent/[0.05] p-4">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Expert counselling
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Human support at every step.
            </p>
          </div>
        </div>

        <div className="content-card flex items-start gap-3 border-primary/10 bg-primary/[0.03] p-4">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <FileText className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">
              Document checklist
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Know what to prepare next.
            </p>
          </div>
        </div>
      </div>

      <EnquiryFormModal
        open={isEnquiryOpen}
        onOpenChange={setIsEnquiryOpen}
      />
    </div>
  );
};

export default Hero;

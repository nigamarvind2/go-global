import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryFormModal from "@/components/EnquiryFormModal";

const Contact = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-24 bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3">Let us plan your study abroad journey</h1>
            <p className="text-lg text-muted-foreground mt-4">
              Reach out to GoGlobalEdTechPvtLtd for counselling, application guidance, or visa support. We respond fast and
              walk you through every step.
            </p>
            <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary mt-6">
              Book Free Counselling
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="surface-card p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:goglobalstudyedtech@gmail.com" className="text-lg font-semibold text-foreground">
                      goglobalstudyedtech@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground">Share your profile and intake.</p>
                  </div>
                </div>
              </div>

              <div className="surface-card p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call</p>
                    <a href="tel:+919166664558" className="text-lg font-semibold text-foreground">
                      +91 91666 64558
                    </a>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 10am to 7pm IST.</p>
                  </div>
                </div>
              </div>

              <div className="surface-card p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit</p>
                    <p className="text-lg font-semibold text-foreground">162 B Brijeshwari NXB, Indore</p>
                    <p className="text-sm text-muted-foreground">Madhya Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-card p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-accent/15 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Quick start</p>
                  <p className="text-xl font-semibold text-foreground">Tell us your goals</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Share your target country, course level, budget, and test scores. We will prepare a personalized roadmap
                and guide you on the next steps.
              </p>
              <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary w-full">
                Start Enquiry
              </button>
              <p className="text-xs text-muted-foreground">
                We respond within 24 hours on working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
      <Footer />
    </div>
  );
};

export default Contact;

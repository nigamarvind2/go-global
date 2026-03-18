import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin, toAbsoluteUrl } from "@/lib/seo";

const Contact = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const origin = getSiteOrigin();
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact GoGlobalEdTechPvtLtd",
    url: `${origin}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "GoGlobalEdTechPvtLtd",
      url: origin,
      email: "goglobalstudyedtech@gmail.com",
      telephone: "+91 91666 64558",
      address: {
        "@type": "PostalAddress",
        streetAddress: "162 B Brijeshwari NXB",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
    },
  };
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "EducationalOrganization"],
    name: "GoGlobalEdTechPvtLtd",
    url: origin,
    image: toAbsoluteUrl("/assets/brand-logo-full.svg"),
    telephone: "+91 91666 64558",
    email: "goglobalstudyedtech@gmail.com",
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      streetAddress: "162 B Brijeshwari NXB",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 10:00-19:00",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Go Global EdTech"
        description="Get in touch for study abroad counselling, admissions support, and MBBS overseas guidance."
      />
      <JsonLd id="jsonld-contact-page" data={contactJsonLd} />
      <JsonLd id="jsonld-localbusiness" data={localBusinessJsonLd} />
      <Navbar />

      <section className="py-20 md:py-24 bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Contact</p>
            <h1 className="section-title mt-3">Let us plan your study abroad journey</h1>
            <p className="section-subtitle mt-4">
              Reach out to GoGlobalEdTechPvtLtd for counselling, application guidance, or visa support. We respond fast and
              walk you through every step.
            </p>
            <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary mt-6">
              Book Free Counselling
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
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

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="eyebrow">Visit</p>
              <h2 className="section-title mt-2">Find Us in Indore</h2>
              <p className="section-subtitle mt-4">
                Meet our counselling team in person for profile reviews, document checks, and admissions planning.
              </p>
              <p className="text-muted-foreground mt-4">
                162 B Brijeshwari NXB, Indore, Madhya Pradesh, India
              </p>
              <a
                href="https://www.google.com/maps?q=162%20B%20Brijeshwari%20NXB%2C%20Indore%2C%20Madhya%20Pradesh"
                target="_blank"
                rel="noreferrer"
                className="btn-outline mt-6 inline-flex items-center"
              >
                Get Directions
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="GoGlobalEdTechPvtLtd location map"
                src="https://www.google.com/maps?q=162%20B%20Brijeshwari%20NXB%2C%20Indore%2C%20Madhya%20Pradesh&output=embed"
                className="w-full h-[360px] md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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

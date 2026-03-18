import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const About = () => {
  const origin = getSiteOrigin();
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GoGlobalEdTechPvtLtd",
    url: `${origin}/about`,
    description:
      "Learn how GoGlobalEdTechPvtLtd helps students plan, apply, and succeed with study abroad and MBBS overseas admissions.",
    mainEntity: {
      "@type": "Organization",
      name: "GoGlobalEdTechPvtLtd",
      url: origin,
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Go Global EdTech"
        description="Learn about Go Global EdTech and how we help students plan, apply, and succeed with study abroad and MBBS overseas admissions."
      />
      <JsonLd id="jsonld-about-page" data={aboutJsonLd} />
      <Navbar />

      <section className="py-20 md:py-24 bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow">About Us</p>
            <h1 className="section-title mt-3">GoGlobalEdTechPvtLtd</h1>
            <p className="section-subtitle mt-4">
              We are an India-based education consultancy focused on helping students plan, apply, and succeed abroad. Our
              team combines counsellor expertise with smart tools to make the journey clear and stress-free.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="surface-card p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Our mission</h2>
            <p className="text-muted-foreground">
              We help students find the right university fit and move confidently through documentation, applications, and
              visas. Every student deserves a clear roadmap and honest guidance.
            </p>
          </div>
          <div className="surface-card p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">How we work</h2>
            <p className="text-muted-foreground">
              We start with a profile review, build a tailored shortlist, and support the full application process. Our
              counsellors stay with you from intake planning to arrival on campus.
            </p>
          </div>
          <div className="surface-card p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Student-first approach</h2>
            <p className="text-muted-foreground">
              We focus on transparency, realistic outcomes, and long-term success. Our tools give instant clarity, while
              our experts confirm the final decisions.
            </p>
          </div>
          <div className="surface-card p-8 space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Global network</h2>
            <p className="text-muted-foreground">
              We support students applying to universities across the USA, UK, Canada, Australia, Europe, and beyond with
              updated documentation and visa readiness support.
            </p>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default About;

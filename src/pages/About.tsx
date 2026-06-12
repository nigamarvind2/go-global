import { Award, Users, Target, Heart, GraduationCap, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const About = () => {
  const origin = getSiteOrigin();
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${origin}/about` },
    ],
  };

  const values = [
    { icon: Heart, title: "Student-First Approach", description: "Every recommendation is driven by what's best for the student, not by commission." },
    { icon: Target, title: "Clarity & Transparency", description: "We provide honest, fact-based guidance without hidden agendas." },
    { icon: Award, title: "Expert Guidance", description: "Our team has deep knowledge of global education systems and visa requirements." },
    { icon: Users, title: "Personalized Support", description: "One-on-one counselling tailored to each student's profile, goals, and budget." },
    { icon: GraduationCap, title: "End-to-End Service", description: "From shortlisting to visa, we handle every step of the journey." },
    { icon: Globe, title: "Global Network", description: "Partnerships with universities across 12+ countries ensure diverse options." },
  ];

  return (
    <>
      <SEO title="About Us" description="GoGlobal EdTech helps students from India study abroad with free counselling, expert guidance, and end-to-end admissions support." />
      <JsonLd id="jsonld-breadcrumb-about" data={breadcrumbJsonLd} />

      <PageHeader
        title="About GoGlobal EdTech"
        subtitle="We help students from India plan, apply, and succeed at top universities worldwide. Based in Indore, Madhya Pradesh."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="page-content">
        {/* Mission */}
        <div className="mb-10">
          <span className="eyebrow">Our Mission</span>
          <h2 className="section-title mt-1.5 mb-3">Make world-class education accessible to every ambitious student</h2>
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed">
            GoGlobalEdTechPvtLtd was founded with a simple belief: every student deserves clear, honest guidance when 
            making one of life's biggest decisions — where to study. We combine expert counselling with structured 
            processes to take the stress out of studying abroad. Our team has helped students get into universities 
            across the UK, USA, Canada, Australia, Germany, Ireland, and more.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { value: "12+", label: "Countries" },
            { value: "500+", label: "Universities" },
            { value: "100%", label: "Free Counselling" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="content-card p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-10">
          <span className="eyebrow">What Drives Us</span>
          <h2 className="section-title mt-1.5 mb-4">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value) => (
              <div key={value.title} className="content-card p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team note */}
        <div className="content-card bg-primary/[0.03] p-6 mb-6">
          <h2 className="text-lg font-semibold mb-2">Our Team</h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Our counsellors bring country-specific expertise and years of experience in international admissions. 
            Every student gets a dedicated advisor who understands their unique profile, budget, and aspirations.
          </p>
        </div>
      </div>

      <CTA />
    </>
  );
};

export default About;

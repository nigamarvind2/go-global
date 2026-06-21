import { Award, Users, Target, Heart, GraduationCap, Globe } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import Team from "@/components/Team";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const About = () => {
  const origin = getSiteOrigin();
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${origin}/about` },
    ],
  };

  const values = [
    {
      icon: Heart,
      title: "Student-First Approach",
      description: "Every recommendation is driven by what's best for the student, not by commission.",
    },
    {
      icon: Target,
      title: "Clarity & Transparency",
      description: "We provide honest, fact-based guidance without hidden agendas.",
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Our team has deep knowledge of global education systems and visa requirements.",
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "One-on-one counselling tailored to each student's profile, goals, and budget.",
    },
    {
      icon: GraduationCap,
      title: "End-to-End Service",
      description: "From shortlisting to visa, we handle every step of the journey.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Partnerships with universities across 12+ countries ensure diverse options.",
    },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="GoGlobal EdTech helps students from India study abroad with free counselling, expert guidance, and end-to-end admissions support."
      />
      <JsonLd id="jsonld-breadcrumb-about" data={breadcrumbJsonLd} />

      <PageHeader
        title="About GoGlobal EdTech"
        subtitle="We help students from India plan, apply, and succeed at top universities worldwide. Based in Indore, Madhya Pradesh."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="page-content">
        <div className="mb-10 grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">Our Mission</span>
            <h2 className="section-title mt-1.5 mb-3">
              Make world-class education accessible to every ambitious student
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              GoGlobalEdTechPvtLtd was founded with a simple belief: every student deserves clear, honest guidance when
              making one of life's biggest decisions - where to study. We combine expert counselling with structured
              processes to take the stress out of studying abroad. Our team has helped students get into universities
              across the UK, USA, Canada, Australia, Germany, Ireland, and more.
            </p>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-border/70 bg-white p-3 shadow-xl">
            <img
              src="/assets/unsplash-1523580846011-d3a5bc25702b.jpg"
              alt="Graduation ceremony representing study abroad success"
              className="h-[300px] w-full rounded-2xl object-cover"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl bg-white/92 p-4 shadow-lg ring-1 ring-border/70 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                Clear counselling
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                Honest course, country, document, and visa guidance from first call to final departure.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "12+", label: "Countries" },
            { value: "500+", label: "Universities" },
            { value: "100%", label: "Free Counselling" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="content-card p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <span className="eyebrow">What Drives Us</span>
          <h2 className="section-title mt-1.5 mb-4">Our Values</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="content-card flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/8">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold">{value.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Team />
      <CTA />
    </>
  );
};

export default About;

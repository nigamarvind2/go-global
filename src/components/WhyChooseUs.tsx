import { Award, Clock, HeartHandshake, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Country-specific expertise",
    description: "Counsellors who know the requirements, timelines, and visa expectations.",
  },
  {
    icon: Sparkles,
    title: "Smart guidance + human review",
    description: "Structured guidance plus expert review at every step.",
  },
  {
    icon: Clock,
    title: "Deadline-first planning",
    description: "Structured timelines so you never miss an intake or document cut-off.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized counselling",
    description: "One-on-one guidance tailored to your profile, budget, and goals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="px-6 md:px-8 py-12 bg-gradient-to-b from-accent/[0.04] to-transparent">
      <div className="mb-6">
        <span className="eyebrow text-accent">Why Choose Us</span>
        <h2 className="section-title mt-1.5 mb-2">Your global study success partner</h2>
        <p className="section-subtitle">
          We go beyond consultancy. Our team combines expert counselling with smart tools to help you make confident, informed decisions.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div key={feature.title} className="content-card p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

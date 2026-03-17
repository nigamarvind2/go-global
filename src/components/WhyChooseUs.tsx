import { CheckCircle, Award, Clock, HeartHandshake, Sparkles } from "lucide-react";

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
    <section className="py-20 md:py-24 bg-muted/40 text-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="eyebrow">
              Why Choose GoGlobalEdTechPvtLtd
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Your global study success partner
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg">
              We go beyond consultancy. Our team combines expert counselling with smart tools to help you make confident,
              informed decisions and move fast.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="/assets/unsplash-1523240795612-9a054b0db644.jpg"
              alt="Students in consultation"
              className="rounded-3xl shadow-xl"
            />
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 bg-card text-card-foreground p-6 rounded-2xl shadow-lg border border-border/60">
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">Focus on student outcomes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

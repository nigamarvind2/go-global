import { 
  GraduationCap, 
  FileText, 
  Plane, 
  Home, 
  Shield, 
  Wallet,
  Users,
  BookOpen
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Counselling",
    description: "Expert guidance to help you choose the right university and course based on your profile and career goals.",
  },
  {
    icon: BookOpen,
    title: "Scholarship Guidance",
    description: "We help you identify and apply for scholarships to reduce your financial burden.",
  },
  {
    icon: FileText,
    title: "Application Support",
    description: "End-to-end assistance with university applications, SOPs, LORs, and documentation.",
  },
  {
    icon: Plane,
    title: "Visa Assistance",
    description: "Complete visa application support including mock interviews and documentation review.",
  },
  {
    icon: Home,
    title: "Accommodation Help",
    description: "Find safe and affordable housing options near your university campus.",
  },
  {
    icon: Shield,
    title: "Health Insurance",
    description: "Guidance on overseas student health cover requirements and best plans available.",
  },
  {
    icon: Wallet,
    title: "Education Loans",
    description: "Connect with trusted financial partners offering competitive education loan rates.",
  },
  {
    icon: Users,
    title: "Pre-Departure Support",
    description: "Comprehensive briefing on culture, travel tips, and what to expect at your destination.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title mt-2 mb-4">Everything you need to study abroad</h2>
          <p className="section-subtitle mx-auto">
            From your first consultation to landing on campus, we provide comprehensive support at every step.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

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
    <section id="services" className="px-6 md:px-8 py-12 bg-gradient-to-b from-primary/[0.03] to-transparent">
      {/* Section Header */}
      <div className="mb-6">
        <span className="eyebrow text-primary">Our Services</span>
        <h2 className="section-title mt-1.5 mb-2">Everything you need to study abroad</h2>
        <p className="section-subtitle">
          From your first consultation to landing on campus, we provide comprehensive support at every step.
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-3">
              <service.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-sm text-foreground mb-1">{service.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

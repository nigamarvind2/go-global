import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  FileText, 
  Plane, 
  Wallet, 
  Users, 
  BookOpen,
  Briefcase,
  HeartPulse,
  Code,
  Building2,
  Palette,
  ChevronRight,
  Scale,
  Utensils,
  Microscope,
  Laptop,
  MessageSquare,
  Home,
  CreditCard,
  ClipboardCheck
} from "lucide-react";

// Admission Services Data
const admissionServices = [
  { 
    icon: MessageSquare, 
    title: "Free Counselling", 
    slug: "counselling",
    description: "Personalized guidance for course & university selection"
  },
  { 
    icon: BookOpen, 
    title: "Test Preparation", 
    slug: "test-preparation",
    description: "IELTS, TOEFL, PTE, GRE & GMAT coaching"
  },
  { 
    icon: ClipboardCheck, 
    title: "Admission Assistance", 
    slug: "admission-assistance",
    description: "Complete application & documentation support"
  },
  { 
    icon: FileText, 
    title: "SOP & LOR Writing", 
    slug: "sop-lor-writing",
    description: "Professional statement & recommendation drafting"
  },
  { 
    icon: Wallet, 
    title: "Education Loans", 
    slug: "education-loans",
    description: "Loan assistance & scholarship guidance"
  },
  { 
    icon: Plane, 
    title: "Visa Processing", 
    slug: "visa-processing",
    description: "Expert visa application & interview prep"
  },
  { 
    icon: Home, 
    title: "Accommodation", 
    slug: "accommodation",
    description: "Safe & affordable housing assistance"
  },
  { 
    icon: CreditCard, 
    title: "Forex & Travel", 
    slug: "forex-travel",
    description: "Foreign exchange & travel arrangements"
  },
];

// Popular Courses Data
const popularCourses = [
  { 
    icon: HeartPulse, 
    title: "Medicine & Healthcare", 
    slug: "medicine-healthcare",
    description: "MBBS, Nursing, Allied Health Sciences, Pharmacy"
  },
  { 
    icon: Code, 
    title: "Information Technology", 
    slug: "information-technology",
    description: "Computer Science, Data Science, AI, Cybersecurity"
  },
  { 
    icon: Laptop, 
    title: "Engineering", 
    slug: "engineering",
    description: "Mechanical, Civil, Electrical, Electronics"
  },
  { 
    icon: Briefcase, 
    title: "Business & MBA", 
    slug: "business-mba",
    description: "MBA, Finance, Marketing, HR, International Business"
  },
  { 
    icon: Scale, 
    title: "Law & Legal Studies", 
    slug: "law-legal-studies",
    description: "LLB, LLM, International Law, Corporate Law"
  },
  { 
    icon: Building2, 
    title: "Architecture & Design", 
    slug: "architecture-design",
    description: "Architecture, Interior Design, Urban Planning"
  },
  { 
    icon: Utensils, 
    title: "Hospitality & Tourism", 
    slug: "hospitality-tourism",
    description: "Hotel Management, Culinary Arts, Event Management"
  },
  { 
    icon: Palette, 
    title: "Arts & Humanities", 
    slug: "arts-humanities",
    description: "Fine Arts, Media, Psychology, Sociology"
  },
  { 
    icon: Microscope, 
    title: "Sciences & Research", 
    slug: "sciences-research",
    description: "Physics, Chemistry, Biology, Environmental Science"
  },
  { 
    icon: GraduationCap, 
    title: "Education & Teaching", 
    slug: "education-teaching",
    description: "B.Ed, M.Ed, TESOL, Educational Leadership"
  },
];

// Study Destinations Data with tags from "Choose Your Destination"
const studyDestinations = [
  { 
    name: "United Kingdom", 
    slug: "uk", 
    code: "GB", 
    description: "World-renowned universities with centuries of academic excellence",
    tags: ["Oxford & Cambridge", "Post-Study Work Visa", "Research Excellence"]
  },
  { 
    name: "United States", 
    slug: "usa", 
    code: "US", 
    description: "Home to the world's top universities with cutting-edge research",
    tags: ["Ivy League Schools", "OPT Program", "Research Opportunities"]
  },
  { 
    name: "Canada", 
    slug: "canada", 
    code: "CA", 
    description: "Affordable education with excellent post-graduation work opportunities",
    tags: ["Affordable Tuition", "3-Year Work Permit", "Immigration Pathways"]
  },
  { 
    name: "Australia", 
    slug: "australia", 
    code: "AU", 
    description: "High-quality education system with a relaxed lifestyle and diverse culture",
    tags: ["Top 100 Universities", "Work While Study", "Permanent Residency Path"]
  },
  { 
    name: "Germany", 
    slug: "germany", 
    code: "DE", 
    description: "Free/low-cost education & world-class engineering hub",
    tags: ["No Tuition Fees", "Engineering Excellence", "Work Opportunities"]
  },
  { 
    name: "Ireland", 
    slug: "ireland", 
    code: "IE", 
    description: "Tech hub & excellent post-study work visa options",
    tags: ["Tech Hub", "2-Year Stay Back", "English Speaking"]
  },
  { 
    name: "New Zealand", 
    slug: "new-zealand", 
    code: "NZ", 
    description: "Safe environment & world-recognized quality education",
    tags: ["Safe Environment", "Work Rights", "Quality Education"]
  },
  { 
    name: "France", 
    slug: "france", 
    code: "FR", 
    description: "Art, culture & prestigious educational institutions",
    tags: ["Low Tuition", "Rich Culture", "Global Recognition"]
  },
  { 
    name: "Italy", 
    slug: "italy", 
    code: "IT", 
    description: "Fashion, design & architecture excellence",
    tags: ["Art & Design", "Affordable Living", "Cultural Heritage"]
  },
  { 
    name: "Singapore", 
    slug: "singapore", 
    code: "SG", 
    description: "Asia's education hub & excellent global exposure",
    tags: ["Asia's Best", "Career Hub", "Multicultural"]
  },
  { 
    name: "Dubai (UAE)", 
    slug: "dubai", 
    code: "AE", 
    description: "Growing opportunities & tax-free income benefits",
    tags: ["Tax-Free Income", "Global Exposure", "Career Growth"]
  },
  { 
    name: "Netherlands", 
    slug: "netherlands", 
    code: "NL", 
    description: "Innovation hub & English-taught programs",
    tags: ["Innovation Hub", "English Programs", "Student Friendly"]
  },
  { 
    name: "Switzerland", 
    slug: "switzerland", 
    code: "CH", 
    description: "Hospitality & banking excellence with world-class institutions",
    tags: ["Hospitality Leader", "Banking Hub", "Premium Education"]
  },
  { 
    name: "Spain", 
    slug: "spain", 
    code: "ES", 
    description: "Vibrant culture & affordable quality education",
    tags: ["Affordable Fees", "Rich Culture", "Spanish Language"]
  },
  { 
    name: "Poland", 
    slug: "poland", 
    code: "PL", 
    description: "Affordable European education with growing opportunities",
    tags: ["Low Cost", "EU Degree", "Medical Programs"]
  },
  { 
    name: "Malaysia", 
    slug: "malaysia", 
    code: "MY", 
    description: "Affordable living & diverse multicultural experience",
    tags: ["Low Living Cost", "Twin Programs", "English Medium"]
  },
];

const tabs = [
  { id: "services", label: "Admission Services" },
  { id: "courses", label: "Popular Courses" },
  { id: "destinations", label: "Study Destinations" },
];

interface StudyAbroadMegaMenuProps {
  isOpen: boolean;
}

const StudyAbroadMegaMenu = ({ isOpen }: StudyAbroadMegaMenuProps) => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div 
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[850px] bg-card border border-border rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-4'
      }`}
    >
      {/* Tabs */}
      <div className="flex bg-muted/50 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 px-6 py-4 text-sm font-semibold transition-all ${
              activeTab === tab.id 
                ? 'bg-primary text-white' 
                : 'text-foreground hover:bg-muted'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 max-h-[450px] overflow-y-auto">
        {/* Admission Services Tab */}
        {activeTab === "services" && (
          <div className="grid grid-cols-2 gap-3">
            {admissionServices.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Popular Courses Tab */}
        {activeTab === "courses" && (
          <div className="grid grid-cols-2 gap-3">
            {popularCourses.map((course, index) => (
              <Link
                key={index}
                to={`/courses/${course.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <course.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{course.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Study Destinations Tab */}
        {activeTab === "destinations" && (
          <div className="grid grid-cols-2 gap-4">
            {studyDestinations.map((country) => (
              <Link
                key={country.slug}
                to={`/study-abroad/${country.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-primary/5 transition-colors group border border-transparent hover:border-primary/20"
              >
                <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                  {country.code}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                      {country.name}
                    </h4>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{country.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {country.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-muted/40 border-t border-border flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Need guidance? Our experts are here to help!
        </p>
        <Link 
          to="/contact" 
          className="text-primary font-semibold hover:underline text-sm flex items-center gap-1"
        >
          Get Free Counselling
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default StudyAbroadMegaMenu;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CountryCard {
  name: string;
  slug: string;
  flag: string;
  image: string;
  description: string;
  highlights: string[];
}

const countries: CountryCard[] = [
  {
    name: "United Kingdom",
    slug: "uk",
    flag: "🇬🇧",
    image: "/assets/unsplash-1513635269975-59663e0ac1ad.jpg",
    description: "World-renowned universities with centuries of academic excellence and cultural diversity.",
    highlights: ["Oxford & Cambridge", "Post-Study Work Visa", "Research Excellence"],
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    image: "/assets/unsplash-1506973035872-a4ec16b8e8d9.jpg",
    description: "High-quality education system with a relaxed lifestyle and stunning natural beauty.",
    highlights: ["Top 100 Universities", "Work While Study", "Permanent Residency Path"],
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    image: "/assets/unsplash-1517935706615-2717063c2225.jpg",
    description: "Affordable education with excellent post-graduation work opportunities.",
    highlights: ["Affordable Tuition", "3-Year Work Permit", "Immigration Pathways"],
  },
  {
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    image: "/assets/unsplash-1485738422979-f5c462d49f74.jpg",
    description: "Home to the world's top universities with cutting-edge research facilities.",
    highlights: ["Ivy League Schools", "OPT Program", "Research Opportunities"],
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    image: "/assets/unsplash-1467269204594-9661b134dd2b.jpg",
    description: "Free or low-cost education at world-class institutions with strong industry ties.",
    highlights: ["Low/No Tuition", "Engineering Hub", "Job-Seeker Visa"],
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    image: "/assets/unsplash-1590089415225-401ed6f9db8e.jpg",
    description: "English-speaking European destination with a thriving tech industry.",
    highlights: ["Tech Hub of Europe", "Stay Back Option", "Friendly Culture"],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    image: "/assets/unsplash-1507699622108-4be3abd695ad.jpg",
    description: "Safe, welcoming country with innovative education and breathtaking landscapes.",
    highlights: ["Safe & Peaceful", "Work Rights", "Adventure Lifestyle"],
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    image: "/assets/unsplash-1502602898657-3e91760cbb34.jpg",
    description: "Rich culture, prestigious institutions, and affordable education.",
    highlights: ["Grande Écoles", "Art & Culture", "Affordable Living"],
  },
];

const CountryGrid = () => {
  return (
    <section className="py-20 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Choose Your Destination</h2>
          <p className="section-subtitle mx-auto">
            Explore world-class education opportunities across our partner countries. 
            Each destination offers unique advantages for your academic journey.
          </p>
        </div>
        
        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <Link
              key={country.slug}
              to={`/study-abroad/${country.slug}`}
              className="country-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl">{country.flag}</span>
                  <h3 className="font-bold text-primary-foreground text-lg">{country.name}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {country.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {country.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryGrid;

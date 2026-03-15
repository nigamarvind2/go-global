import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

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
    description: "Diversely cultured UK has installed superior courses in collaboration with internationally recognized universities. Academic excellence, post-study job opportunities, great research assistance, and more await you.",
    highlights: ["Oxford & Cambridge", "Post-Study Work Visa", "Research Excellence", "Cultural Diversity"],
  },
  {
    name: "Australia",
    slug: "australia",
    flag: "🇦🇺",
    image: "/assets/unsplash-1506973035872-a4ec16b8e8d9.jpg",
    description: "Australia offers a wide variety of courses with scholastic excellence. Multiple scholarship programs, technologically advanced courses, world-class education, and an amazing lifestyle.",
    highlights: ["Top 100 Universities", "Work While Study", "PR Pathway", "Quality of Life"],
  },
  {
    name: "Canada",
    slug: "canada",
    flag: "🇨🇦",
    image: "/assets/unsplash-1517935706615-2717063c2225.jpg",
    description: "The variety of courses by Canada is given credence globally. Scholastic accomplishments, affordable fees, a focused approach to skill development, and excellent immigration pathways.",
    highlights: ["Affordable Tuition", "PGWP 3 Years", "Immigration Options", "Multicultural"],
  },
  {
    name: "United States",
    slug: "usa",
    flag: "🇺🇸",
    image: "/assets/unsplash-1485738422979-f5c462d49f74.jpg",
    description: "US universities provide extensive options, emphasizing innovation and research, making it a global destination for higher education with world-renowned institutions.",
    highlights: ["Ivy League", "OPT Program", "Research Leader", "Networking"],
  },
  {
    name: "Germany",
    slug: "germany",
    flag: "🇩🇪",
    image: "/assets/unsplash-1467269204594-9661b134dd2b.jpg",
    description: "German universities, known for academic excellence, attract students seeking quality education in a diverse cultural environment with low or no tuition fees.",
    highlights: ["Free Tuition", "Engineering Hub", "Job-Seeker Visa", "Industry Links"],
  },
  {
    name: "Ireland",
    slug: "ireland",
    flag: "🇮🇪",
    image: "/assets/unsplash-1590089415225-401ed6f9db8e.jpg",
    description: "A wide range of courses is offered by this nation to nurture young minds. They have something awaiting every aspirant with a thriving tech sector and friendly culture.",
    highlights: ["Tech Hub", "Stay Back Option", "English Speaking", "Safe Country"],
  },
  {
    name: "New Zealand",
    slug: "new-zealand",
    flag: "🇳🇿",
    image: "/assets/unsplash-1507699622108-4be3abd695ad.jpg",
    description: "New Zealand enchants aspirants at a high ratio with numerous attractions. This nation offers accredited qualifications across the globe with affordable tuition fees.",
    highlights: ["Safe & Peaceful", "Work Rights", "Adventure Life", "Quality Education"],
  },
  {
    name: "France",
    slug: "france",
    flag: "🇫🇷",
    image: "/assets/unsplash-1502602898657-3e91760cbb34.jpg",
    description: "France offers prestigious institutions with rich cultural experiences. Known for art, fashion, and business education with affordable living costs.",
    highlights: ["Grande Écoles", "Art & Culture", "Affordable", "Central Europe"],
  },
  {
    name: "Sweden",
    slug: "sweden",
    flag: "🇸🇪",
    image: "/assets/unsplash-1509356843151-3e7d96241e11.jpg",
    description: "Located in the north of Europe, Sweden is known for its innovation, high quality of life, and world-class universities with strong research focus.",
    highlights: ["Innovation Hub", "High Quality Life", "Research Focus", "Nature"],
  },
  {
    name: "Poland",
    slug: "poland",
    flag: "🇵🇱",
    image: "/assets/unsplash-1519197924294-4ba991a11128.jpg",
    description: "Poland's institutions provide research opportunities, making it a compelling choice for students seeking a unique academic experience at affordable costs.",
    highlights: ["Affordable", "EU Country", "Research Options", "Rich History"],
  },
  {
    name: "Latvia",
    slug: "latvia",
    flag: "🇱🇻",
    image: "/assets/unsplash-1559128010-7c1ad6e1b6a5.jpg",
    description: "Latvia is one of the affordable and accessible destinations for international students. It is a beautiful country situated on the shores of the Baltic Sea.",
    highlights: ["Affordable", "EU Member", "Baltic Beauty", "English Programs"],
  },
  {
    name: "Lithuania",
    slug: "lithuania",
    flag: "🇱🇹",
    image: "/assets/unsplash-1523580846011-d3a5bc25702b.jpg",
    description: "Situated in the Baltic regions of Europe, Lithuania offers excellent academic institutions, innovative facilities and 350+ English taught study programs.",
    highlights: ["350+ Programs", "EU Country", "Innovative", "Affordable Living"],
  },
];

const StudyAbroad = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Study <span className="gradient-text">Abroad</span> Destinations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our recruiting efforts span across the globe. Our skilled and knowledgeable 
            team is here to help you explore your desired study destinations.
          </p>
        </div>
      </section>
      
      {/* Countries Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Link
                key={country.slug}
                to={`/study-abroad/${country.slug}`}
                className="country-card group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <span className="text-4xl">{country.flag}</span>
                    <h3 className="font-bold text-primary-foreground text-xl">{country.name}</h3>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {country.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.highlights.map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default StudyAbroad;

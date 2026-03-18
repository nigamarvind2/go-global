import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { getCountryBySlug } from "@/data/countryData";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const CountryDetail = () => {
  const { country } = useParams<{ country: string }>();
  const countryData = country ? getCountryBySlug(country) : undefined;
  const origin = getSiteOrigin();
  const seoTitle = countryData
    ? `Study in ${countryData.name}`
    : "Country Not Found";
  const seoDescription = countryData
    ? `Complete guide to studying in ${countryData.name}: top universities, courses, admission requirements, and visa support.`
    : "The requested study abroad country was not found.";
  const seoImage = countryData?.heroImage;
  const breadcrumbJsonLd = countryData
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${origin}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Study Abroad",
            item: `${origin}/study-abroad`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `Study in ${countryData.name}`,
            item: `${origin}/study-abroad/${countryData.slug}`,
          },
        ],
      }
    : null;

  if (!countryData) {
    return (
      <div className="min-h-screen">
        <SEO title={seoTitle} description={seoDescription} noIndex />
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The country you're looking for doesn't exist or hasn't been added yet.
          </p>
          <Link to="/study-abroad">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Destinations
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      {breadcrumbJsonLd ? (
        <JsonLd id={`jsonld-breadcrumb-${countryData.slug}`} data={breadcrumbJsonLd} />
      ) : null}
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[500px]">
          {/* Image Side */}
          <div className="relative h-[300px] lg:h-auto">
            <img
              src={countryData.heroImage}
              alt={`Study in ${countryData.name}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Content Side */}
          <div className="bg-background p-8 lg:p-12 flex flex-col justify-center">
            <p className="eyebrow mb-4">GoGlobal EdTech</p>

            <h1 className="section-title mb-6 flex items-center gap-4">
              <span className="text-4xl">{countryData.flag}</span>
              Study In {countryData.name}
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {countryData.heroDescription}
            </p>

            <ul className="space-y-3 mb-8">
              {countryData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>

            <a href="tel:+919166664558">
              <Button size="lg" className="w-fit">
                <Phone className="w-4 h-4 mr-2" />
                Book a Free Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Top Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">
            Top Benefits of Studying in {countryData.name}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countryData.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-4">
            Top Universities in {countryData.name}
          </h2>
          <p className="text-muted-foreground mb-8">
            Choose from world-renowned institutions that offer quality education and excellent career prospects.
          </p>

          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {countryData.universities.map((university, index) => (
                <div
                  key={index}
                  className={`p-4 ${
                    index % 2 === 0 ? "md:border-r" : ""
                  } ${
                    index < countryData.universities.length - 2
                      ? "border-b"
                      : index === countryData.universities.length - 2
                      ? "md:border-b-0 border-b"
                      : ""
                  } border-border`}
                >
                  <a 
                    href={university.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline transition-all"
                  >
                    {university.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">
            Top Courses to Study in {countryData.name}
          </h2>

          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {countryData.courses.map((course, index) => (
                <div
                  key={index}
                  className={`p-4 ${
                    index % 2 === 0 ? "md:border-r" : ""
                  } ${
                    index < countryData.courses.length - 2
                      ? "border-b"
                      : index === countryData.courses.length - 2
                      ? "md:border-b-0 border-b"
                      : ""
                  } border-border`}
                >
                  <span className="text-primary font-medium">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-4">
            Admission Requirements to Study in {countryData.name}
          </h2>
          <p className="text-muted-foreground mb-8">
            The general documents that need to be submitted are:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {countryData.admissionRequirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Requirements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">
            {countryData.name} Student Visa Requirements
          </h2>

          <div className="space-y-4">
            {countryData.visaRequirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default CountryDetail;

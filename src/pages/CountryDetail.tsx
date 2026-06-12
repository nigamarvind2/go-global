import { useParams, Link } from "react-router-dom";
import { CheckCircle, Phone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
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
  const seoTitle = countryData ? `Study in ${countryData.name}` : "Country Not Found";
  const seoDescription = countryData
    ? `Complete guide to studying in ${countryData.name}: top universities, courses, admission requirements, and visa support.`
    : "The requested study abroad country was not found.";
  const seoImage = countryData?.heroImage;
  const breadcrumbJsonLd = countryData
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
          { "@type": "ListItem", position: 2, name: "Study Abroad", item: `${origin}/study-abroad` },
          { "@type": "ListItem", position: 3, name: `Study in ${countryData.name}`, item: `${origin}/study-abroad/${countryData.slug}` },
        ],
      }
    : null;

  if (!countryData) {
    return (
      <>
        <SEO title={seoTitle} description={seoDescription} noIndex />
        <div className="page-content text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Country Not Found</h1>
          <p className="text-muted-foreground mb-6">The country you're looking for doesn't exist or hasn't been added yet.</p>
          <Link to="/study-abroad"><Button>Back to All Destinations</Button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      {breadcrumbJsonLd && <JsonLd id={`jsonld-breadcrumb-${countryData.slug}`} data={breadcrumbJsonLd} />}

      <PageHeader
        title={`${countryData.flag} Study in ${countryData.name}`}
        subtitle={countryData.heroDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Study Abroad", href: "/study-abroad" },
          { label: countryData.name },
        ]}
        actions={
          <a href="tel:+919166664558">
            <Button size="sm" className="gap-2">
              <Phone className="w-3.5 h-3.5" />
              Free Consultation
            </Button>
          </a>
        }
      />

      {/* Highlights */}
      <div className="page-content">
        <div className="flex flex-wrap gap-2 mb-8">
          {countryData.highlights.map((h, i) => (
            <span key={i} className="flex items-center gap-1.5 text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-md font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              {h}
            </span>
          ))}
        </div>

        {/* Benefits */}
        <div className="mb-10">
          <h2 className="section-title mb-4">Top Benefits of Studying in {countryData.name}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countryData.benefits.map((benefit, index) => (
              <div key={index} className="content-card p-4 flex gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-sm mb-0.5">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Universities */}
        <div className="mb-10">
          <h2 className="section-title mb-2">Top Universities in {countryData.name}</h2>
          <p className="text-sm text-muted-foreground mb-4">Choose from world-renowned institutions that offer quality education.</p>
          <div className="content-card p-0 overflow-hidden">
            <div className="grid sm:grid-cols-2">
              {countryData.universities.map((university, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 ${index % 2 === 0 ? "sm:border-r" : ""} ${
                    index < countryData.universities.length - 2 ? "border-b" : index === countryData.universities.length - 2 ? "sm:border-b-0 border-b" : ""
                  } border-border/60`}
                >
                  <a href={university.url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium hover:underline">
                    {university.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="mb-10">
          <h2 className="section-title mb-4">Top Courses to Study in {countryData.name}</h2>
          <div className="content-card p-0 overflow-hidden">
            <div className="grid sm:grid-cols-2">
              {countryData.courses.map((course, index) => (
                <div
                  key={index}
                  className={`px-4 py-3 ${index % 2 === 0 ? "sm:border-r" : ""} ${
                    index < countryData.courses.length - 2 ? "border-b" : index === countryData.courses.length - 2 ? "sm:border-b-0 border-b" : ""
                  } border-border/60`}
                >
                  <span className="text-sm text-foreground">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admission Requirements */}
        <div className="mb-10">
          <h2 className="section-title mb-2">Admission Requirements</h2>
          <p className="text-sm text-muted-foreground mb-4">The general documents that need to be submitted:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {countryData.admissionRequirements.map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visa Requirements */}
        <div className="mb-6">
          <h2 className="section-title mb-4">{countryData.name} Student Visa Requirements</h2>
          <div className="space-y-3">
            {countryData.visaRequirements.map((req, index) => (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
};

export default CountryDetail;

import { useParams, Link } from "react-router-dom";
import { getUniversityBySlug, mbbsCountries } from "@/data/mbbsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Building, 
  Award, 
  CheckCircle, 
  FileText, 
  ArrowLeft,
  Phone,
  Home
} from "lucide-react";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import { useState } from "react";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const UniversityDetail = () => {
  const { universitySlug } = useParams<{ universitySlug: string }>();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  
  const result = universitySlug ? getUniversityBySlug(universitySlug) : undefined;
  const origin = getSiteOrigin();
  const seoTitle = result
    ? `${result.university.name} | MBBS in ${result.country.name}`
    : "University Not Found";
  const seoDescription = result
    ? `Details of ${result.university.name} for MBBS in ${result.country.name}: fees, duration, recognition, and admission guidance.`
    : "The requested MBBS university was not found.";
  const seoImage = result?.university.image || result?.country.heroImage;
  const breadcrumbJsonLd = result
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
            name: "MBBS Overseas",
            item: `${origin}/mbbs-overseas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: result.country.name,
            item: `${origin}/mbbs-overseas/${result.country.slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: result.university.name,
            item: `${origin}/mbbs-overseas/${result.country.slug}/${result.university.slug}`,
          },
        ],
      }
    : null;
  const universityJsonLd = result
    ? {
        "@context": "https://schema.org",
        "@type": "CollegeOrUniversity",
        name: result.university.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: result.university.location,
          addressCountry: result.country.name,
        },
        url: `${origin}/mbbs-overseas/${result.country.slug}/${result.university.slug}`,
      }
    : null;

  if (!result) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO title={seoTitle} description={seoDescription} noIndex />
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">University Not Found</h1>
            <Link to="/mbbs-overseas">
              <Button>Back to MBBS Overseas</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const { university, country } = result;

  // Get other universities from the same country
  const otherUniversities = country.universities.filter(u => u.slug !== university.slug);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      {breadcrumbJsonLd ? (
        <JsonLd id={`jsonld-breadcrumb-${result.university.slug}`} data={breadcrumbJsonLd} />
      ) : null}
      {universityJsonLd ? (
        <JsonLd id={`jsonld-university-${result.university.slug}`} data={universityJsonLd} />
      ) : null}
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-aurora overflow-hidden py-16">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary flex items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <span>/</span>
            <Link to="/mbbs-overseas" className="hover:text-primary">MBBS Overseas</Link>
            <span>/</span>
            <Link to={`/mbbs-overseas/${country.slug}`} className="hover:text-primary">
              {country.name}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{university.name}</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                {university.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-lg text-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {university.location}, {country.name}
                </span>
                {university.established && (
                  <span className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Est. {university.established}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                size="lg" 
                onClick={() => setIsEnquiryOpen(true)}
                className="rounded-full px-6"
              >
                <Phone className="mr-2 h-5 w-5" />
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border/60">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Tuition Fee</p>
              <p className="font-bold text-lg text-primary">{university.tuitionFee}</p>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border/60">
              <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-bold text-lg">{university.duration}</p>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border/60">
              <Home className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-sm text-muted-foreground">Hostel Fee</p>
              <p className="font-bold text-lg">{university.hostelFee || "Contact Us"}</p>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-sm border border-border/60">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-sm text-muted-foreground">Total Fee</p>
              <p className="font-bold text-lg text-accent">{university.totalFee || "Contact Us"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    About {university.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {university.about || `${university.name} is a prestigious medical institution located in ${university.location}, ${country.name}. The university is recognized by NMC and WHO, making graduates eligible to practice medicine in India and worldwide.`}
                  </p>
                  {university.ranking && (
                    <div className="mt-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        <Award className="h-4 w-4 mr-1" />
                        {university.ranking}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Recognition */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    Recognitions & Approvals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {university.recognition.map((rec, index) => (
                      <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        {rec} Approved
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {(university.eligibility || country.eligibility).map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Advantages */}
              {university.advantages && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Why Choose {university.name}?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {university.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Documents Required */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Documents Required
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {country.documents.map((doc, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Quick Enquiry */}
              <Card className="bg-card border border-border/60">
                <CardHeader>
                  <CardTitle className="text-foreground">Interested in {university.name}?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Get free counselling and admission assistance from our experts.
                  </p>
                  <Button 
                    className="w-full rounded-full"
                    onClick={() => setIsEnquiryOpen(true)}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Apply Now - Free Counselling
                  </Button>
                </CardContent>
              </Card>

              {/* Fee Structure */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    Fee Structure
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span>Tuition Fee</span>
                    <span className="font-semibold text-primary">{university.tuitionFee}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Hostel Fee</span>
                    <span className="font-semibold">{university.hostelFee || "Contact Us"}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span>Duration</span>
                    <span className="font-semibold">{university.duration}</span>
                  </div>
                  <div className="flex justify-between py-2 bg-accent/10 rounded px-2">
                    <span className="font-semibold">Total Fee</span>
                    <span className="font-bold text-accent">{university.totalFee || "Contact Us"}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Other Universities */}
              {otherUniversities.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Other Universities in {country.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {otherUniversities.slice(0, 5).map((uni) => (
                      <Link
                        key={uni.slug}
                        to={`/mbbs-overseas/${country.slug}/${uni.slug}`}
                        className="block p-3 hover:bg-muted rounded-lg transition-colors"
                      >
                        <p className="font-medium text-primary hover:underline">{uni.name}</p>
                        <p className="text-sm text-muted-foreground">{uni.tuitionFee}</p>
                      </Link>
                    ))}
                    {otherUniversities.length > 5 && (
                      <Link 
                        to={`/mbbs-overseas/${country.slug}`}
                        className="block text-center text-primary hover:underline pt-2"
                      >
                        View all {otherUniversities.length + 1} universities →
                      </Link>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Countries CTA */}
      <section className="py-12 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Explore MBBS in Other Countries</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {mbbsCountries
              .filter(c => c.slug !== country.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/mbbs-overseas/${c.slug}`}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border/60 hover:border-primary/30 transition-colors"
                >
                  <span className="text-2xl">{c.flag}</span>
                  <span className="font-medium">{c.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
      
      <EnquiryFormModal 
        open={isEnquiryOpen} 
        onOpenChange={setIsEnquiryOpen} 
      />
    </div>
  );
};

export default UniversityDetail;

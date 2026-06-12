import { useParams, Link } from "react-router-dom";
import { getUniversityBySlug, mbbsCountries } from "@/data/mbbsData";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, MapPin, Calendar, DollarSign, Building, Award, CheckCircle, FileText, Phone, Home
} from "lucide-react";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import { useState } from "react";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const UniversityDetail = () => {
  const { universitySlug, country: countrySlug } = useParams<{ universitySlug: string; country: string }>();
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const result = universitySlug ? getUniversityBySlug(universitySlug) : undefined;
  const origin = getSiteOrigin();
  const seoTitle = result ? `${result.university.name} | MBBS in ${result.country.name}` : "University Not Found";
  const seoDescription = result
    ? `Details of ${result.university.name} for MBBS in ${result.country.name}: fees, duration, recognition, and admission guidance.`
    : "The requested MBBS university was not found.";
  const seoImage = result?.university.image || result?.country.heroImage;
  const breadcrumbJsonLd = result ? {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "MBBS Overseas", item: `${origin}/mbbs-overseas` },
      { "@type": "ListItem", position: 3, name: result.country.name, item: `${origin}/mbbs-overseas/${result.country.slug}` },
      { "@type": "ListItem", position: 4, name: result.university.name, item: `${origin}/mbbs-overseas/${result.country.slug}/${result.university.slug}` },
    ],
  } : null;
  const universityJsonLd = result ? {
    "@context": "https://schema.org", "@type": "CollegeOrUniversity",
    name: result.university.name,
    address: { "@type": "PostalAddress", addressLocality: result.university.location, addressCountry: result.country.name },
    url: `${origin}/mbbs-overseas/${result.country.slug}/${result.university.slug}`,
  } : null;

  if (!result) {
    return (
      <>
        <SEO title={seoTitle} description={seoDescription} noIndex />
        <div className="page-content text-center py-20">
          <h1 className="text-2xl font-bold mb-4">University Not Found</h1>
          <Link to="/mbbs-overseas"><Button>Back to MBBS Overseas</Button></Link>
        </div>
      </>
    );
  }

  const { university, country } = result;
  const otherUniversities = country.universities.filter(u => u.slug !== university.slug);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      {breadcrumbJsonLd && <JsonLd id={`jsonld-breadcrumb-${university.slug}`} data={breadcrumbJsonLd} />}
      {universityJsonLd && <JsonLd id={`jsonld-university-${university.slug}`} data={universityJsonLd} />}

      <PageHeader
        title={university.name}
        subtitle={`${university.location}, ${country.name}${university.established ? ` • Est. ${university.established}` : ""}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "MBBS Overseas", href: "/mbbs-overseas" },
          { label: country.name, href: `/mbbs-overseas/${country.slug}` },
          { label: university.name },
        ]}
        actions={
          <Button size="sm" onClick={() => setIsEnquiryOpen(true)} className="gap-2">
            <Phone className="w-3.5 h-3.5" /> Apply Now
          </Button>
        }
      />

      <div className="page-content">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="content-card p-4 text-center">
            <DollarSign className="h-5 w-5 mx-auto mb-1.5 text-primary" />
            <p className="text-[11px] text-muted-foreground">Tuition Fee</p>
            <p className="font-semibold text-sm text-primary">{university.tuitionFee}</p>
          </div>
          <div className="content-card p-4 text-center">
            <Calendar className="h-5 w-5 mx-auto mb-1.5 text-primary" />
            <p className="text-[11px] text-muted-foreground">Duration</p>
            <p className="font-semibold text-sm">{university.duration}</p>
          </div>
          <div className="content-card p-4 text-center">
            <Home className="h-5 w-5 mx-auto mb-1.5 text-primary" />
            <p className="text-[11px] text-muted-foreground">Hostel Fee</p>
            <p className="font-semibold text-sm">{university.hostelFee || "Contact Us"}</p>
          </div>
          <div className="content-card p-4 text-center">
            <DollarSign className="h-5 w-5 mx-auto mb-1.5 text-accent" />
            <p className="text-[11px] text-muted-foreground">Total Fee</p>
            <p className="font-semibold text-sm text-accent">{university.totalFee || "Contact Us"}</p>
          </div>
        </div>

        {/* Main content + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            {/* About */}
            <Card className="border-border/60">
              <CardHeader><CardTitle className="text-sm flex items-center gap-2"><Building className="h-4 w-4 text-primary" />About {university.name}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {university.about || `${university.name} is a prestigious medical institution located in ${university.location}, ${country.name}. The university is recognized by NMC and WHO.`}
                </p>
                {university.ranking && (
                  <div className="mt-3"><Badge variant="secondary" className="text-xs"><Award className="h-3 w-3 mr-1" />{university.ranking}</Badge></div>
                )}
              </CardContent>
            </Card>

            {/* Recognition */}
            <Card className="border-border/60">
              <CardHeader><CardTitle className="text-sm flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Recognitions</CardTitle></CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {university.recognition.map((rec, i) => (
                    <Badge key={i} variant="outline" className="px-3 py-1.5 text-xs"><CheckCircle className="h-3 w-3 mr-1.5 text-green-500" />{rec} Approved</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Eligibility */}
            <Card className="border-border/60">
              <CardHeader><CardTitle className="text-sm flex items-center gap-2"><GraduationCap className="h-4 w-4 text-primary" />Eligibility</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {(university.eligibility || country.eligibility).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Advantages */}
            {university.advantages && (
              <Card className="border-border/60">
                <CardHeader><CardTitle className="text-sm flex items-center gap-2"><Award className="h-4 w-4 text-primary" />Why Choose {university.name}?</CardTitle></CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {university.advantages.map((adv, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 bg-muted/50 rounded-lg text-sm"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />{adv}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Documents */}
            <Card className="border-border/60">
              <CardHeader><CardTitle className="text-sm flex items-center gap-2"><FileText className="h-4 w-4 text-primary" />Documents Required</CardTitle></CardHeader>
              <CardContent>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {country.documents.map((doc, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />{doc}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <Card className="border-border/60">
              <CardHeader><CardTitle className="text-sm">Interested in {university.name}?</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-muted-foreground">Get free counselling and admission assistance.</p>
                <Button className="w-full gap-2" size="sm" onClick={() => setIsEnquiryOpen(true)}>
                  <Phone className="w-3.5 h-3.5" /> Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/60">
              <CardHeader><CardTitle className="text-sm flex items-center gap-2"><DollarSign className="h-4 w-4 text-primary" />Fee Structure</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between py-1.5 border-b text-sm"><span>Tuition</span><span className="font-medium text-primary">{university.tuitionFee}</span></div>
                <div className="flex justify-between py-1.5 border-b text-sm"><span>Hostel</span><span className="font-medium">{university.hostelFee || "Contact Us"}</span></div>
                <div className="flex justify-between py-1.5 border-b text-sm"><span>Duration</span><span className="font-medium">{university.duration}</span></div>
                <div className="flex justify-between py-1.5 bg-accent/10 rounded px-2 text-sm"><span className="font-medium">Total</span><span className="font-bold text-accent">{university.totalFee || "Contact Us"}</span></div>
              </CardContent>
            </Card>

            {otherUniversities.length > 0 && (
              <Card className="border-border/60">
                <CardHeader><CardTitle className="text-sm">Other Universities in {country.name}</CardTitle></CardHeader>
                <CardContent className="space-y-1">
                  {otherUniversities.slice(0, 5).map((uni) => (
                    <Link key={uni.slug} to={`/mbbs-overseas/${country.slug}/${uni.slug}`} className="block p-2 hover:bg-muted rounded-md transition-colors">
                      <p className="text-sm font-medium text-primary hover:underline">{uni.name}</p>
                      <p className="text-xs text-muted-foreground">{uni.tuitionFee}</p>
                    </Link>
                  ))}
                  {otherUniversities.length > 5 && (
                    <Link to={`/mbbs-overseas/${country.slug}`} className="block text-center text-primary hover:underline text-xs pt-1">View all →</Link>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Other Countries */}
        <div className="mt-10 pt-8 border-t border-border/60">
          <h2 className="text-sm font-semibold mb-3">Explore MBBS in Other Countries</h2>
          <div className="flex flex-wrap gap-2">
            {mbbsCountries.filter(c => c.slug !== country.slug).map((c) => (
              <Link key={c.slug} to={`/mbbs-overseas/${c.slug}`}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-md border border-border/60 hover:border-primary/30 transition-colors text-xs font-medium"
              >
                <span>{c.flag}</span>{c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
};

export default UniversityDetail;

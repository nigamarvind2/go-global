import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Phone, CheckCircle, GraduationCap, FileText, BadgeCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import { getMBBSCountryBySlug, mbbsCountries } from "@/data/mbbsData";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const MBBSCountryDetail = () => {
  const { country } = useParams<{ country: string }>();
  const countryData = country ? getMBBSCountryBySlug(country) : undefined;
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const origin = getSiteOrigin();
  const seoTitle = countryData ? `MBBS in ${countryData.name}` : "MBBS Country Not Found";
  const seoDescription = countryData
    ? `MBBS in ${countryData.name}: universities, fees, eligibility, documents, and counselling support.`
    : "The requested MBBS country was not found.";
  const seoImage = countryData?.heroImage;
  const breadcrumbJsonLd = countryData ? {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "MBBS Overseas", item: `${origin}/mbbs-overseas` },
      { "@type": "ListItem", position: 3, name: `MBBS in ${countryData.name}`, item: `${origin}/mbbs-overseas/${countryData.slug}` },
    ],
  } : null;

  const fallbackFeeStructure = [
    "Tuition fee: varies by university and program duration",
    "Hostel/accommodation: depends on city and housing type",
    "Living expenses: food, transport, utilities",
    "Insurance, visa, and administrative charges",
    "One-time admission/registration fees (if applicable)",
  ];
  const fallbackDisadvantages = [
    "Fees and recognition vary by university; due diligence required",
    "Living costs can vary widely by city",
    "Local language may be needed for some clinical rotations",
    "Visa timelines can be strict depending on intake",
  ];

  if (!countryData) {
    return (
      <>
        <SEO title={seoTitle} description={seoDescription} noIndex />
        <div className="page-content text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Country Not Found</h1>
          <p className="text-muted-foreground mb-6">The country you're looking for doesn't exist or hasn't been added yet.</p>
          <Link to="/mbbs-overseas"><Button>Back to MBBS Overseas</Button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} image={seoImage} />
      {breadcrumbJsonLd && <JsonLd id={`jsonld-breadcrumb-${countryData.slug}`} data={breadcrumbJsonLd} />}

      <PageHeader
        title={`${countryData.flag} MBBS in ${countryData.name}`}
        subtitle={countryData.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "MBBS Overseas", href: "/mbbs-overseas" },
          { label: countryData.name },
        ]}
        actions={
          <Button size="sm" onClick={() => setIsEnquiryOpen(true)} className="gap-2">
            <Phone className="w-3.5 h-3.5" /> Free Consultation
          </Button>
        }
      />

      <div className="page-content">
        {/* Benefits badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {countryData.benefits.slice(0, 6).map((benefit, index) => (
            <span key={index} className="flex items-center gap-1.5 text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-md font-medium">
              <CheckCircle className="w-3.5 h-3.5" /> {benefit}
            </span>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-sm">Basic Outlook</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">{countryData.outlook || countryData.description}</p></CardContent>
          </Card>
          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-sm">Key Features</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(countryData.keyFeatures || countryData.benefits).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-sm">Advantages</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(countryData.advantages || countryData.benefits).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-sm">Considerations</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(countryData.disadvantages || fallbackDisadvantages).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-sm">Fee Structure (Typical)</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(countryData.feeStructure || fallbackFeeStructure).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardHeader><CardTitle className="text-sm">Why Study in {countryData.name}?</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(countryData.whyStudy || countryData.benefits).map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {countryData.extraInfo && countryData.extraInfo.length > 0 && (
          <Card className="border-border/60 mb-6">
            <CardHeader><CardTitle className="text-sm">Additional Notes</CardTitle></CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {countryData.extraInfo.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        <p className="text-[11px] text-muted-foreground mb-10">
          Information is indicative and may change by university, intake, and regulations. We share the latest verified details during counselling.
        </p>

        {/* Universities Table */}
        <div className="mb-10">
          <h2 className="section-title mb-2">Top Medical Universities in {countryData.name}</h2>
          <p className="text-sm text-muted-foreground mb-4">Verified university options based on current recognition lists.</p>
          {countryData.universities.length > 0 ? (
            <div className="content-card p-0 overflow-hidden overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary text-primary-foreground">
                    <TableHead className="text-primary-foreground font-semibold text-sm">University</TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-sm">Location</TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-sm">Tuition</TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-sm">Duration</TableHead>
                    <TableHead className="text-primary-foreground font-semibold text-sm">Recognition</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {countryData.universities.map((uni, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-sm font-medium">
                        <Link to={`/mbbs-overseas/${country}/${uni.slug}`} className="text-primary hover:underline">{uni.name}</Link>
                      </TableCell>
                      <TableCell className="text-sm">{uni.location}</TableCell>
                      <TableCell className="text-sm text-primary font-medium">{uni.tuitionFee}</TableCell>
                      <TableCell className="text-sm">{uni.duration}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {uni.recognition.map((rec, idx) => (
                            <Badge key={idx} variant="secondary" className="text-[11px]">{rec}</Badge>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <Card className="border-border/60">
              <CardContent className="py-8 text-center">
                <p className="text-sm font-medium mb-2">{countryData.topUniversitiesNote || "Top university list shared during counselling."}</p>
                <p className="text-xs text-muted-foreground mb-4">We share verified university options after a quick profile review.</p>
                <Button size="sm" onClick={() => setIsEnquiryOpen(true)}>Request University Shortlist</Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Eligibility & Documents */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          <Card className="border-border/60">
            <CardHeader>
              <div className="w-9 h-9 rounded-lg bg-primary/8 text-primary flex items-center justify-center mb-2"><BadgeCheck className="w-4 h-4" /></div>
              <CardTitle className="text-sm">Eligibility Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {countryData.eligibility.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardHeader>
              <div className="w-9 h-9 rounded-lg bg-primary/8 text-primary flex items-center justify-center mb-2"><FileText className="w-4 h-4" /></div>
              <CardTitle className="text-sm">Required Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {countryData.documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{doc}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Other Countries */}
        <div className="mb-10">
          <h2 className="section-title mb-4">Explore Other Countries</h2>
          <div className="flex flex-wrap gap-2">
            {mbbsCountries.filter(c => c.slug !== country).map((c) => (
              <Link key={c.slug} to={`/mbbs-overseas/${c.slug}`}
                className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border border-border/60 hover:border-primary/30 transition-colors text-sm"
              >
                <span className="text-lg">{c.flag}</span>
                <span className="font-medium">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="content-card bg-primary/[0.03] p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Ready to Study MBBS in {countryData.name}?</h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
            Get expert guidance from GoGlobalEdTechPvtLtd. We handle everything from university selection to visa processing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => setIsEnquiryOpen(true)}>Apply Now - Free Consultation</Button>
            <a href="tel:+919166664558">
              <Button variant="outline" className="gap-2"><Phone className="w-4 h-4" />Call: +91 91666 64558</Button>
            </a>
          </div>
        </div>
      </div>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
};

export default MBBSCountryDetail;

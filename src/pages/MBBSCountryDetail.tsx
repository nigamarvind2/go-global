import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Phone, 
  CheckCircle, 
  GraduationCap,
  FileText,
  Clock,
  BadgeCheck,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import { getMBBSCountryBySlug, mbbsCountries } from "@/data/mbbsData";

const MBBSCountryDetail = () => {
  const { country } = useParams<{ country: string }>();
  const countryData = country ? getMBBSCountryBySlug(country) : undefined;
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
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
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Country Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The country you're looking for doesn't exist or hasn't been added yet.
          </p>
          <Link to="/mbbs-overseas">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to MBBS Overseas
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted/40 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/mbbs-overseas" className="text-muted-foreground hover:text-primary">MBBS Overseas</Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-medium">MBBS in {countryData.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-aurora py-12">
        <div className="container mx-auto px-4">
          <div className="bg-background/90 rounded-3xl border border-border shadow-card p-8 lg:p-12">
            <div className="inline-flex items-center gap-2 bg-background/80 text-muted-foreground px-4 py-2 rounded-full text-xs font-semibold border border-border/60 w-fit mb-4">
              <GraduationCap className="w-4 h-4" />
              GoGlobalEdTechPvtLtd
            </div>

            <h1 className="section-title mb-4 flex items-center gap-4">
              <span className="text-5xl">{countryData.flag}</span>
              MBBS in {countryData.name}
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
              {countryData.description}
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {countryData.benefits.slice(0, 6).map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => setIsEnquiryOpen(true)} className="rounded-full px-6">
                Get Free Consultation
                <Phone className="w-4 h-4 ml-2" />
              </Button>
              <a href="tel:+919166664558">
                <Button size="lg" variant="outline" className="rounded-full px-6">
                  Call: +91 91666 64558
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Country Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Basic Outlook</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {countryData.outlook || countryData.description}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(countryData.keyFeatures || countryData.benefits).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(countryData.advantages || countryData.benefits).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Disadvantages / Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(countryData.disadvantages || fallbackDisadvantages).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Fee Structure (Typical)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(countryData.feeStructure || fallbackFeeStructure).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Why Study in {countryData.name}?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(countryData.whyStudy || countryData.benefits).map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {countryData.extraInfo && countryData.extraInfo.length > 0 ? (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Additional Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {countryData.extraInfo.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}
          <p className="text-xs text-muted-foreground mt-6">
            Information is indicative and may change by university, intake, and regulations. We share the latest verified
            details during counselling.
          </p>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Top Medical Universities in {countryData.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Verified university options based on current recognition lists and intake availability
            </p>
          </div>
          {countryData.universities.length > 0 ? (
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary">
                      <TableHead className="text-primary-foreground font-bold">University</TableHead>
                      <TableHead className="text-primary-foreground font-bold">Location</TableHead>
                      <TableHead className="text-primary-foreground font-bold">Tuition Fee</TableHead>
                      <TableHead className="text-primary-foreground font-bold">Duration</TableHead>
                      <TableHead className="text-primary-foreground font-bold">Recognition</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {countryData.universities.map((uni, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-muted/40" : ""}>
                        <TableCell className="font-medium">
                          <Link 
                            to={`/mbbs-overseas/${country}/${uni.slug}`}
                            className="text-primary hover:underline"
                          >
                            {uni.name}
                          </Link>
                        </TableCell>
                        <TableCell>{uni.location}</TableCell>
                        <TableCell className="text-primary font-semibold">{uni.tuitionFee}</TableCell>
                        <TableCell>{uni.duration}</TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {uni.recognition.map((rec, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {rec}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-lg font-semibold text-foreground mb-2">
                  {countryData.topUniversitiesNote || "Top university list shared during counselling."}
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  We share verified university options and fee sheets after a quick profile review.
                </p>
                <Button onClick={() => setIsEnquiryOpen(true)}>
                  Request University Shortlist
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {countryData.eligibility.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {countryData.documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Countries */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Other Countries</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {mbbsCountries
              .filter(c => c.slug !== country)
              .map((c) => (
                <Link 
                  key={c.slug}
                  to={`/mbbs-overseas/${c.slug}`}
                  className="flex items-center gap-2 bg-background px-4 py-3 rounded-lg shadow-sm hover:shadow-md transition-all border border-border hover:border-primary"
                >
                  <span className="text-2xl">{c.flag}</span>
                  <span className="font-medium">{c.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Study MBBS in {countryData.name}?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get expert guidance from GoGlobalEdTechPvtLtd. We handle everything from university selection 
            to visa processing and accommodation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-6" onClick={() => setIsEnquiryOpen(true)}>
              Apply Now - Free Consultation
            </Button>
            <a href="tel:+919166664558">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call: +91 91666 64558
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </div>
  );
};

export default MBBSCountryDetail;

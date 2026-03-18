import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Globe, 
  Wallet, 
  Ban, 
  Languages, 
  BookOpen, 
  ShieldCheck, 
  Receipt, 
  Briefcase,
  ChevronRight,
  Phone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import { mbbsCountries, comparisonData, whyStudyAbroadBenefits } from "@/data/mbbsData";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ReactNode> = {
  wallet: <Wallet className="w-8 h-8" />,
  ban: <Ban className="w-8 h-8" />,
  globe: <Globe className="w-8 h-8" />,
  languages: <Languages className="w-8 h-8" />,
  "book-open": <BookOpen className="w-8 h-8" />,
  "shield-check": <ShieldCheck className="w-8 h-8" />,
  receipt: <Receipt className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
};

const MBBSOverseas = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const origin = getSiteOrigin();
  const faqs = [
    {
      question: "Is NEET required for MBBS abroad?",
      answer:
        "Yes. For Indian students, a valid NEET qualification is required as per NMC guidelines.",
    },
    {
      question: "Are MBBS degrees abroad recognized in India?",
      answer:
        "Recognition depends on the university and country. We shortlist NMC/WDOMS listed options and guide you on licensing requirements.",
    },
    {
      question: "What is the typical MBBS duration abroad?",
      answer:
        "Most programs are 5-6 years depending on country, university, and internship requirements.",
    },
    {
      question: "What are the total costs for MBBS abroad?",
      answer:
        "Costs vary by country and university. We provide a complete fee sheet covering tuition, hostel, and living expenses.",
    },
    {
      question: "Do you help with admission and visa?",
      answer:
        "Yes. We handle university shortlisting, document verification, applications, and visa processing end-to-end.",
    },
  ];
  const breadcrumbJsonLd = {
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
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: mbbsCountries.map((country, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Country",
        name: country.name,
        url: `${origin}/mbbs-overseas/${country.slug}`,
      },
    })),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="MBBS Abroad"
        description="Explore MBBS overseas options with NMC & WHO recognized universities, fees, eligibility, and expert counselling."
        image="/assets/unsplash-1523580846011-d3a5bc25702b.jpg"
      />
      <JsonLd id="jsonld-breadcrumb-mbbs" data={breadcrumbJsonLd} />
      <JsonLd id="jsonld-itemlist-mbbs" data={itemListJsonLd} />
      <JsonLd id="jsonld-faq-mbbs" data={faqJsonLd} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-aurora overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-background/80 text-foreground/80 px-4 py-2 rounded-full text-xs font-semibold border border-border/60">
                <GraduationCap className="w-4 h-4" />
                GoGlobalEdTechPvtLtd - Your MBBS Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Are You Looking to <br />
                <span className="text-primary">Study MBBS Abroad?</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Fulfill your dream of becoming a doctor with affordable, world-class medical education. 
                Get admission in NMC & WHO approved universities with complete guidance from GoGlobalEdTechPvtLtd.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => setIsEnquiryOpen(true)} className="rounded-full px-6">
                  Get Free Consultation
                  <Phone className="w-4 h-4 ml-2" />
                </Button>
                <a href="tel:+919166664558">
                  <Button size="lg" variant="outline" className="rounded-full px-6">
                    Call Now: +91 91666 64558
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">NMC Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">WHO Listed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">FAIMER Approved</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/unsplash-1523580846011-d3a5bc25702b.jpg"
                alt="Medical students"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-foreground text-background p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Students Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-background/80 text-muted-foreground px-4 py-2 rounded-full text-xs font-semibold mb-4 border border-border/60">
              📊 Fee Comparison
            </span>
            <h2 className="section-title mb-4">MBBS in India vs Abroad</h2>
            <p className="section-subtitle mx-auto">
              See why thousands of students choose to study MBBS abroad
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border border-border/60 overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/60">
                      <TableHead className="text-foreground font-bold text-base py-4">#</TableHead>
                      <TableHead className="text-foreground font-bold text-base py-4">Parameter</TableHead>
                      <TableHead className="text-foreground font-bold text-base py-4 text-center">🇮🇳 India</TableHead>
                      <TableHead className="text-foreground font-bold text-base py-4 text-center">🌍 Abroad</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-card" : "bg-background"}>
                        <TableCell className="font-bold text-primary py-4">{index + 1}</TableCell>
                        <TableCell className="font-semibold text-foreground py-4">{row.parameter}</TableCell>
                        <TableCell className="text-center text-muted-foreground py-4">{row.india}</TableCell>
                        <TableCell className="text-center py-4">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
                            {row.abroad}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                onClick={() => setIsEnquiryOpen(true)}
                className="rounded-full px-8 py-6 text-lg"
              >
                Get Free Counselling Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-background/80 text-muted-foreground px-4 py-2 rounded-full text-xs font-semibold mb-4 border border-border/60">
              🌍 Explore Countries
            </span>
            <h2 className="section-title mb-4">Choose Your Destination</h2>
            <p className="section-subtitle mx-auto">
              Explore top countries for MBBS abroad with NMC & WHO approved universities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {mbbsCountries.map((country) => (
              <Link 
                key={country.slug}
                to={`/mbbs-overseas/${country.slug}`}
                className="group bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-border/60 hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{country.flag}</div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {country.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {country.universities.length > 0 ? `${country.universities.length}+ Universities` : "Shortlist on request"}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setIsEnquiryOpen(true)}
              className="rounded-full px-8 py-6 text-lg font-semibold"
            >
              Can't Decide? Get Expert Advice
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Why Study MBBS Abroad?</h2>
            <p className="section-subtitle mx-auto">
              Discover the advantages of pursuing your medical degree internationally
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyAbroadBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {iconMap[benefit.icon]}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <p className="eyebrow">FAQs</p>
            <h2 className="section-title mt-2">MBBS Abroad FAQs</h2>
            <p className="section-subtitle mx-auto">
              Quick answers to help you plan your MBBS overseas journey with clarity.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Start Your MBBS Journey?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get expert guidance from GoGlobalEdTechPvtLtd. We help you choose the right university, 
            handle documentation, and support you throughout your medical education journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-6" onClick={() => setIsEnquiryOpen(true)}>
              Get Free Consultation
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

export default MBBSOverseas;

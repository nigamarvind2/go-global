import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, Globe, Wallet, Ban, Languages, BookOpen, ShieldCheck, Receipt, Briefcase,
  Phone, CheckCircle, ArrowRight
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import { mbbsCountries, comparisonData, whyStudyAbroadBenefits } from "@/data/mbbsData";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import VideoTestimonials from "@/components/VideoTestimonials";
import { getSiteOrigin } from "@/lib/seo";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ReactNode> = {
  wallet: <Wallet className="w-6 h-6" />,
  ban: <Ban className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  languages: <Languages className="w-6 h-6" />,
  "book-open": <BookOpen className="w-6 h-6" />,
  "shield-check": <ShieldCheck className="w-6 h-6" />,
  receipt: <Receipt className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
};

const MBBSOverseas = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const origin = getSiteOrigin();
  const faqs = [
    { question: "Is NEET required for MBBS abroad?", answer: "Yes. For Indian students, a valid NEET qualification is required as per NMC guidelines." },
    { question: "Are MBBS degrees abroad recognized in India?", answer: "Recognition depends on the university and country. We shortlist NMC/WDOMS listed options and guide you on licensing requirements." },
    { question: "What is the typical MBBS duration abroad?", answer: "Most programs are 5-6 years depending on country, university, and internship requirements." },
    { question: "What are the total costs for MBBS abroad?", answer: "Costs vary by country and university. We provide a complete fee sheet covering tuition, hostel, and living expenses." },
    { question: "Do you help with admission and visa?", answer: "Yes. We handle university shortlisting, document verification, applications, and visa processing end-to-end." },
  ];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "MBBS Overseas", item: `${origin}/mbbs-overseas` },
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org", "@type": "ItemList",
    itemListElement: mbbsCountries.map((country, index) => ({
      "@type": "ListItem", position: index + 1,
      item: { "@type": "Country", name: country.name, url: `${origin}/mbbs-overseas/${country.slug}` },
    })),
  };
  const faqJsonLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <SEO title="MBBS Abroad" description="Explore MBBS overseas options with NMC & WHO recognized universities, fees, eligibility, and expert counselling." image="/assets/unsplash-1523580846011-d3a5bc25702b.jpg" />
      <JsonLd id="jsonld-breadcrumb-mbbs" data={breadcrumbJsonLd} />
      <JsonLd id="jsonld-itemlist-mbbs" data={itemListJsonLd} />
      <JsonLd id="jsonld-faq-mbbs" data={faqJsonLd} />

      <PageHeader
        title="Study MBBS Abroad"
        subtitle="Fulfill your dream of becoming a doctor with affordable, world-class medical education. Get admission in NMC & WHO approved universities."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "MBBS Abroad" }]}
        actions={
          <Button size="sm" onClick={() => setIsEnquiryOpen(true)} className="gap-2">
            <Phone className="w-3.5 h-3.5" />
            Free Consultation
          </Button>
        }
      />

      <div className="page-content">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["NMC Approved", "WHO Listed", "FAIMER Approved"].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5 text-xs bg-primary/8 text-primary px-3 py-1.5 rounded-md font-medium">
              <CheckCircle className="w-3.5 h-3.5" />{badge}
            </span>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-10">
          <h2 className="section-title mb-2">MBBS in India vs Abroad</h2>
          <p className="section-subtitle mb-4">See why thousands of students choose to study MBBS abroad.</p>
          <div className="content-card p-0 overflow-hidden overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold text-sm">#</TableHead>
                  <TableHead className="font-semibold text-sm">Parameter</TableHead>
                  <TableHead className="font-semibold text-sm text-center">🇮🇳 India</TableHead>
                  <TableHead className="font-semibold text-sm text-center">🌍 Abroad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-primary text-sm">{index + 1}</TableCell>
                    <TableCell className="font-medium text-sm">{row.parameter}</TableCell>
                    <TableCell className="text-center text-sm text-muted-foreground">{row.india}</TableCell>
                    <TableCell className="text-center text-sm">
                      <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-md text-xs font-medium">{row.abroad}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4">
            <Button onClick={() => setIsEnquiryOpen(true)} className="gap-2">
              Get Free Counselling <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Countries */}
        <div className="mb-10">
          <h2 className="section-title mb-2">Choose Your Destination</h2>
          <p className="section-subtitle mb-4">Explore top countries for MBBS abroad with NMC & WHO approved universities.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {mbbsCountries.map((country) => (
              <Link 
                key={country.slug}
                to={`/mbbs-overseas/${country.slug}`}
                className="content-card p-4 text-center hover:border-primary/30 transition-colors group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{country.flag}</div>
                <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{country.name}</h3>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {country.universities.length > 0 ? `${country.universities.length}+ Universities` : "Shortlist on request"}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Study Abroad */}
        <div className="mb-10">
          <h2 className="section-title mb-4">Why Study MBBS Abroad?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyStudyAbroadBenefits.map((benefit, index) => (
              <Card key={index} className="border-border/60">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/8 text-primary flex items-center justify-center mb-2">
                    {iconMap[benefit.icon]}
                  </div>
                  <CardTitle className="text-sm">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student video stories */}
        <VideoTestimonials topics={["mbbs"]} compact />

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="section-title mb-4">Frequently Asked Questions</h2>
          <div className="max-w-2xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* CTA */}
        <div className="content-card bg-primary/[0.03] p-6 text-center">
          <h2 className="text-lg font-semibold mb-2">Ready to Start Your MBBS Journey?</h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
            Get expert guidance from GoGlobalEdTechPvtLtd. We help you choose the right university and support you throughout.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={() => setIsEnquiryOpen(true)}>Get Free Consultation</Button>
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

export default MBBSOverseas;

import { useParams, Link } from "react-router-dom";
import { servicesData } from "@/data/servicesData";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ArrowRight, ListChecks, HelpCircle } from "lucide-react";

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? servicesData[serviceSlug] : null;
  const origin = getSiteOrigin();
  const seoTitle = service ? `${service.title}` : "Service Not Found";
  const seoDescription = service
    ? `Explore our ${service.title.toLowerCase()} service for study abroad: process, benefits, and FAQs.`
    : "The requested service page was not found.";
  const faqJsonLd = service ? {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question", name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;
  const serviceJsonLd = service ? {
    "@context": "https://schema.org", "@type": "Service",
    name: service.title, description: service.heroDescription,
    serviceType: service.title, areaServed: "IN",
    provider: { "@type": "Organization", name: "GoGlobalEdTechPvtLtd", url: origin },
    url: `${origin}/services/${service.slug}`,
  } : null;
  const breadcrumbJsonLd = service ? {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${origin}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${origin}/services/${service.slug}` },
    ],
  } : null;

  if (!service) {
    return (
      <>
        <SEO title={seoTitle} description={seoDescription} noIndex />
        <div className="page-content text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/services"><Button>Browse All Services</Button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      {breadcrumbJsonLd && <JsonLd id={`jsonld-breadcrumb-${service.slug}`} data={breadcrumbJsonLd} />}
      {faqJsonLd && <JsonLd id={`jsonld-faq-${service.slug}`} data={faqJsonLd} />}
      {serviceJsonLd && <JsonLd id={`jsonld-service-${service.slug}`} data={serviceJsonLd} />}

      <PageHeader
        title={service.title}
        subtitle={service.heroDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        actions={
          <Link to="/contact">
            <Button size="sm" className="gap-2">Get Started <ArrowRight className="w-3.5 h-3.5" /></Button>
          </Link>
        }
      />

      <div className="page-content">
        {/* Features */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <ListChecks className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">What We Offer</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {service.features.map((feature, i) => (
              <Card key={i} className="border-border/60">
                <CardContent className="p-4 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{feature}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.process.map((step, i) => (
              <Card key={i} className="border-border/60 relative">
                <div className="absolute -top-3 left-4 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</div>
                <CardHeader className="pt-6 pb-1"><CardTitle className="text-sm">{step.step}</CardTitle></CardHeader>
                <CardContent><p className="text-xs text-muted-foreground">{step.description}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          <div>
            <h2 className="text-lg font-semibold mb-4">Why Choose Our {service.title}?</h2>
            <ul className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="content-card bg-gradient-to-br from-primary/[0.04] to-accent/[0.04] p-6">
            <h3 className="text-lg font-semibold mb-2">Ready to Get Started?</h3>
            <p className="text-sm text-muted-foreground mb-4">Our expert team guides you through every step of your study abroad journey.</p>
            <Link to="/contact">
              <Button className="w-full gap-2">Contact Us Now <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-2xl">
            <Accordion type="single" collapsible>
              {service.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-sm">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
};

export default ServiceDetail;

import Services from "@/components/Services";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";
import { servicesData } from "@/data/servicesData";

const ServicesPage = () => {
  const origin = getSiteOrigin();
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${origin}/services` },
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org", "@type": "ItemList",
    itemListElement: Object.values(servicesData).map((service, index) => ({
      "@type": "ListItem", position: index + 1,
      item: { "@type": "Service", name: service.title, url: `${origin}/services/${service.slug}` },
    })),
  };

  return (
    <>
      <SEO title="Study Abroad Services" description="End-to-end services for study abroad: counselling, admissions, SOP/LOR, loans, visa processing, accommodation, and more." />
      <JsonLd id="jsonld-breadcrumb-services" data={breadcrumbJsonLd} />
      <JsonLd id="jsonld-itemlist-services" data={itemListJsonLd} />

      <PageHeader
        title="End-to-end study abroad support"
        subtitle="From counseling and shortlisting to visa readiness and pre-departure, our team supports every step of your journey."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      <Services />
      <CTA />
    </>
  );
};

export default ServicesPage;

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";
import { servicesData } from "@/data/servicesData";

const ServicesPage = () => {
  const origin = getSiteOrigin();
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
        name: "Services",
        item: `${origin}/services`,
      },
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: Object.values(servicesData).map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        url: `${origin}/services/${service.slug}`,
      },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Study Abroad Services"
        description="End-to-end services for study abroad: counselling, admissions, SOP/LOR, loans, visa processing, accommodation, and more."
      />
      <JsonLd id="jsonld-breadcrumb-services" data={breadcrumbJsonLd} />
      <JsonLd id="jsonld-itemlist-services" data={itemListJsonLd} />
      <Navbar />
      <section className="py-20 md:py-24 bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h1 className="section-title mt-3">End-to-end study abroad support</h1>
            <p className="section-subtitle mt-4">
              From counseling and shortlisting to visa readiness and pre-departure, our team supports every step of your
              journey.
            </p>
          </div>
        </div>
      </section>

      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin, toAbsoluteUrl } from "@/lib/seo";

const Index = () => {
  const origin = getSiteOrigin();
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GoGlobalEdTechPvtLtd",
    legalName: "GoGlobalEdTechPvtLtd",
    url: origin,
    logo: toAbsoluteUrl("/assets/brand-logo-full.svg"),
    email: "goglobalstudyedtech@gmail.com",
    telephone: "+91 91666 64558",
    description:
      "GoGlobalEdTechPvtLtd helps students from India plan, apply, and succeed abroad with counselling, university shortlisting, admissions, and visa support.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "162 B Brijeshwari NXB",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      addressCountry: "IN",
    },
    areaServed: "IN",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+91 91666 64558",
        email: "goglobalstudyedtech@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Go Global EdTech",
    url: origin,
    description:
      "Study abroad counselling, MBBS overseas guidance, and end-to-end admissions support for students in India.",
    publisher: {
      "@type": "Organization",
      name: "GoGlobalEdTechPvtLtd",
    },
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Study Abroad Counselling & MBBS Overseas"
        description="Go Global EdTech helps students study abroad with free counselling, university shortlisting, MBBS overseas guidance, and end-to-end admissions support."
      />
      <JsonLd id="jsonld-org" data={[organizationJsonLd, websiteJsonLd]} />
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import { getSiteOrigin } from "@/lib/seo";

const Contact = () => {
  const origin = getSiteOrigin();
  const breadcrumbJsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${origin}/contact` },
    ],
  };
  const localBusinessJsonLd = {
    "@context": "https://schema.org", "@type": "LocalBusiness",
    name: "GoGlobalEdTechPvtLtd", url: origin,
    telephone: "+91 91666 64558", email: "goglobalstudyedtech@gmail.com",
    address: { "@type": "PostalAddress", streetAddress: "162 B Brijeshwari NXB", addressLocality: "Indore", addressRegion: "Madhya Pradesh", addressCountry: "IN" },
    openingHours: "Mo-Sa 10:00-19:00",
  };

  return (
    <>
      <SEO title="Contact Us" description="Get in touch with GoGlobal EdTech for free study abroad counselling. Call, email, or visit our Indore office." />
      <JsonLd id="jsonld-breadcrumb-contact" data={breadcrumbJsonLd} />
      <JsonLd id="jsonld-local-business" data={localBusinessJsonLd} />

      <PageHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out for a free counselling session or any questions about studying abroad."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <div className="page-content">
        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-border/60">
            <CardContent className="p-4">
              <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mb-3">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1">Phone</h3>
              <a href="tel:+919166664558" className="text-sm text-primary hover:underline">+91 91666 64558</a>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-4">
              <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mb-3">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1">Email</h3>
              <a href="mailto:goglobalstudyedtech@gmail.com" className="text-sm text-primary hover:underline break-all">goglobalstudyedtech@gmail.com</a>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-4">
              <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mb-3">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1">Office</h3>
              <p className="text-sm text-muted-foreground">162 B Brijeshwari NXB, Indore, MP</p>
            </CardContent>
          </Card>
          <Card className="border-border/60">
            <CardContent className="p-4">
              <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mb-3">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold mb-1">Hours</h3>
              <p className="text-sm text-muted-foreground">Mon–Sat: 10 AM – 7 PM</p>
            </CardContent>
          </Card>
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="border-border/60">
            <CardHeader>
              <CardTitle className="text-sm">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); window.open(`https://wa.me/919166664558?text=${encodeURIComponent("Hi, I'd like to know more about study abroad services.")}`, "_blank"); }}>
                <input type="text" placeholder="Your Name" required className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <input type="email" placeholder="Email Address" required className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none" />
                <Button type="submit" className="w-full gap-2">Send Message <ArrowRight className="w-4 h-4" /></Button>
              </form>
            </CardContent>
          </Card>

          <div className="content-card p-0 overflow-hidden h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2427!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: 320 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="GoGlobal EdTech Office Location"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

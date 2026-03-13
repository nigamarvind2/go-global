import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import CTA from "@/components/CTA";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-aurora relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold uppercase tracking-wider text-sm">Services</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3">End-to-end study abroad support</h1>
            <p className="text-lg text-muted-foreground mt-4">
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground">
            By using this website, you agree to the terms below. These terms help us provide consistent and transparent
            counselling services.
          </p>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Advisory nature</h2>
            <p className="text-muted-foreground">
              All guidance and predictions are informational. Admissions decisions are made by universities and embassies.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Accuracy of information</h2>
            <p className="text-muted-foreground">
              Students are responsible for providing accurate academic and personal details. Incorrect information may
              impact outcomes.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Service changes</h2>
            <p className="text-muted-foreground">
              We may update services, pricing, or timelines based on university and visa policies.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="text-muted-foreground">
              Questions? Email goglobalstudyedtech@gmail.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Terms;

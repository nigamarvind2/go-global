import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-subtitle">
            GoGlobalEdTechPvtLtd respects your privacy. We collect only the information required to guide your study abroad
            application and never sell your data.
          </p>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">What we collect</h2>
            <p className="text-muted-foreground">
              Contact details, academic background, test scores, and application preferences shared through our forms or
              WhatsApp.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">How we use it</h2>
            <p className="text-muted-foreground">
              To provide counselling, shortlist universities, prepare documents, and support visa processing.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Data security</h2>
            <p className="text-muted-foreground">
              We limit access to counsellors involved in your case and store data only as long as needed for your
              application.
            </p>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="text-muted-foreground">
              For any privacy questions, email us at goglobalstudyedtech@gmail.com.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;

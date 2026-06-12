import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO title="Privacy Policy" description="Read the Go Global EdTech privacy policy and how we handle your data for study abroad counselling." />
      
      <PageHeader
        title="Privacy Policy"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />

      <div className="page-content max-w-3xl space-y-6">
        <p className="text-sm text-muted-foreground">
          GoGlobalEdTechPvtLtd respects your privacy. We collect only the information required to guide your study abroad
          application and never sell your data.
        </p>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">What we collect</h2>
          <p className="text-sm text-muted-foreground">
            Contact details, academic background, test scores, and application preferences shared through our forms or WhatsApp.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">How we use it</h2>
          <p className="text-sm text-muted-foreground">
            To provide counselling, shortlist universities, prepare documents, and support visa processing.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">Data security</h2>
          <p className="text-sm text-muted-foreground">
            We limit access to counsellors involved in your case and store data only as long as needed for your application.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground">
            For any privacy questions, email us at{" "}
            <a href="mailto:goglobalstudyedtech@gmail.com" className="text-primary hover:underline">goglobalstudyedtech@gmail.com</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;

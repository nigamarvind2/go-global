import PageHeader from "@/components/PageHeader";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO title="Terms of Service" description="Review the Go Global EdTech terms of service for counselling and study abroad guidance." />

      <PageHeader
        title="Terms of Service"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      />

      <div className="page-content max-w-3xl space-y-6">
        <p className="text-sm text-muted-foreground">
          By using this website, you agree to the terms below. These terms help us provide consistent and transparent counselling services.
        </p>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">Advisory nature</h2>
          <p className="text-sm text-muted-foreground">
            All guidance and predictions are informational. Admissions decisions are made by universities and embassies.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">Accuracy of information</h2>
          <p className="text-sm text-muted-foreground">
            Students are responsible for providing accurate academic and personal details. Incorrect information may impact outcomes.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">Service changes</h2>
          <p className="text-sm text-muted-foreground">
            We may update services, pricing, or timelines based on university and visa policies.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">Contact</h2>
          <p className="text-sm text-muted-foreground">
            Questions? Email{" "}
            <a href="mailto:goglobalstudyedtech@gmail.com" className="text-primary hover:underline">goglobalstudyedtech@gmail.com</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;

import { Linkedin, Mail } from "lucide-react";

const founders = [
  {
    name: "Arvind Nigam",
    role: "Co-founder & CEO",
    image: "/assets/cofounder-arvind.jpg",
    bio: "Leads GoGlobal's vision and strategy, ensuring every student receives honest, expert-driven guidance for their study abroad journey.",
  },
  {
    name: "Madhulika Nigam",
    role: "Co-founder & COO",
    image: "/assets/cofounder-madhulika.jpg",
    bio: "Oversees day-to-day operations and counselling quality, making sure every student's application process is seamless and stress-free.",
  },
];

const Team = () => {
  return (
    <section className="bg-gradient-to-b from-primary/[0.05] via-background to-transparent px-6 py-12 md:px-8 md:py-14">
      <div className="mb-8 text-center">
        <span className="eyebrow text-primary">Our Team</span>
        <h2 className="section-title mt-1.5 mb-2">Meet the founders</h2>
        <p className="section-subtitle mx-auto">
          Built by people who believe every student deserves clear, honest
          guidance when choosing where to study.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="content-card overflow-hidden border-primary/10 bg-white/80 p-0 shadow-sm"
          >
            <div className="grid items-stretch md:grid-cols-[180px_1fr]">
              <div className="relative flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 p-5">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="h-36 w-36 rounded-xl object-cover object-top shadow-sm sm:h-40 sm:w-40"
                />
              </div>

              <div className="min-w-0 p-6">
                <div className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
                  Co-Founder
                </div>

                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {founder.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {founder.bio}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <a
                    href="mailto:goglobalstudyedtech@gmail.com"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/60 text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label={`${founder.name} on LinkedIn`}
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;

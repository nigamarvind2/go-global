import { Linkedin, Mail } from "lucide-react";

const founders = [
  {
    name: "Arvind Nigam",
    role: "Co-founder & CEO",
    initials: "AN",
    bio: "Leads GoGlobal's vision and strategy, ensuring every student receives honest, expert-driven guidance for their study abroad journey.",
  },
  {
    name: "Madhulika Nigam",
    role: "Co-founder & COO",
    initials: "MN",
    bio: "Oversees day-to-day operations and counselling quality, making sure every student's application process is seamless and stress-free.",
  },
];

const Team = () => {
  return (
    <section className="px-6 md:px-8 py-12 bg-gradient-to-b from-primary/[0.03] to-transparent">
      <div className="mb-6">
        <span className="eyebrow text-primary">Our Team</span>
        <h2 className="section-title mt-1.5 mb-2">Meet the founders</h2>
        <p className="section-subtitle">
          Built by people who believe every student deserves clear, honest
          guidance when choosing where to study.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {founders.map((f) => (
          <div key={f.name} className="content-card p-5 border-l-2 border-l-primary/30">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-bold text-primary">
                  {f.initials}
                </span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-foreground">
                  {f.name}
                </h3>
                <p className="text-xs text-primary font-medium mt-0.5">
                  {f.role}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                  {f.bio}
                </p>

                {/* Contact links */}
                <div className="flex items-center gap-2 mt-3">
                  <a
                    href="mailto:goglobalstudyedtech@gmail.com"
                    className="w-7 h-7 rounded-md bg-muted/60 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                    aria-label={`Email ${f.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 rounded-md bg-muted/60 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-muted-foreground"
                    aria-label={`${f.name} on LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
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

import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    course: "MSc Data Science",
    university: "University of Leeds, UK",
    text: "GoGlobal made the entire process feel effortless. From shortlisting universities to visa prep, I always knew what to do next. I got into my dream program with a scholarship!",
    rating: 5,
  },
  {
    name: "Rohit Verma",
    course: "MBA",
    university: "Deakin University, Australia",
    text: "I was overwhelmed by options until I spoke with the GoGlobal team. Their honest, no-pressure advice helped me pick the right university and they handled all the paperwork.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    course: "MBBS",
    university: "Tbilisi State Medical University, Georgia",
    text: "Studying MBBS abroad seemed complicated, but GoGlobal broke it down step by step. Their country-specific knowledge gave my parents the confidence to support my decision.",
    rating: 5,
  },
  {
    name: "Karan Mehta",
    course: "MS Computer Science",
    university: "TU Munich, Germany",
    text: "The counsellors understood the German application process inside out. They helped me with my APS, SOP, and even mock interviews. Couldn't have done it without them.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="px-6 md:px-8 py-12 bg-gradient-to-b from-accent/[0.04] to-transparent">
      <div className="mb-6">
        <span className="eyebrow text-accent">Student Stories</span>
        <h2 className="section-title mt-1.5 mb-2">
          Hear from students we've helped
        </h2>
        <p className="section-subtitle">
          Real experiences from students who trusted us with their study abroad
          journey.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {testimonials.map((t) => (
          <div key={t.name} className="content-card p-5 flex flex-col border-l-2 border-l-accent/30">
            {/* Quote icon + rating */}
            <div className="flex items-center justify-between mb-3">
              <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary" />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
            </div>

            {/* Quote text */}
            <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-3 border-t border-border/60">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold text-primary">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground leading-tight">
                  {t.name}
                </p>
                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  {t.course} · {t.university}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

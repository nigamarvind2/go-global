import { Quote, Star } from "lucide-react";
import VideoTestimonials from "@/components/VideoTestimonials";

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
    <>
      <section className="px-6 pb-4 pt-12 md:px-8">
        <div className="section-shell mb-6">
          <span className="eyebrow text-accent">Student Stories</span>
          <h2 className="section-title section-title-accent mt-1.5 mb-2">
            Hear from students we&apos;ve helped
          </h2>
          <p className="section-subtitle">
            Real experiences from students who trusted us with their study
            abroad journey.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="content-card testimonial-card flex flex-col p-5"
            >
            <div className="mb-3 flex items-center justify-between">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  index % 2 === 0 ? "bg-primary/10" : "bg-accent/10"
                }`}
              >
                <Quote
                  className={`h-4 w-4 ${
                    index % 2 === 0 ? "text-primary" : "text-accent"
                  }`}
                />
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
            </div>

            <p className="mb-4 flex-1 text-xs leading-relaxed text-muted-foreground">
              "{testimonial.text}"
            </p>

            <div className="flex items-center gap-3 border-t border-border/60 pt-3">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xs font-semibold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((namePart) => namePart[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium leading-tight text-foreground">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                  {testimonial.course} | {testimonial.university}
                </p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
      <VideoTestimonials />
    </>
  );
};

export default Testimonials;

import {
  ArrowUpRight,
  BriefcaseBusiness,
  Globe2,
  Play,
  Stethoscope,
} from "lucide-react";

type VideoTopic = "mbbs" | "mba" | "immigration";

interface VideoTestimonialsProps {
  topics?: VideoTopic[];
  compact?: boolean;
}

const videoStories = [
  {
    topic: "mbbs" as const,
    label: "MBBS Abroad",
    title: "Medical students share their journey",
    destination: "Georgia, Russia & Central Asia",
    description:
      "Hear students discuss university selection, campus life, clinical exposure, costs, and settling into a new country.",
    image: "/assets/unsplash-1523580846011-d3a5bc25702b.jpg",
    href: "https://www.youtube.com/results?search_query=MBBS+abroad+student+testimonial+India",
    icon: Stethoscope,
  },
  {
    topic: "mba" as const,
    label: "MBA Abroad",
    title: "MBA graduates on studying overseas",
    destination: "UK, Australia & Europe",
    description:
      "Explore first-hand perspectives on choosing a business school, adapting to case-based learning, internships, and career outcomes.",
    image: "/assets/unsplash-1509356843151-3e7d96241e11.jpg",
    href: "https://www.youtube.com/results?search_query=MBA+abroad+student+testimonial+India",
    icon: BriefcaseBusiness,
  },
  {
    topic: "immigration" as const,
    label: "Study & Immigration",
    title: "Life after graduation abroad",
    destination: "Canada & Australia",
    description:
      "Watch international graduates talk about post-study work, building a career, and navigating common immigration pathways.",
    image: "/assets/unsplash-1517935706615-2717063c2225.jpg",
    href: "https://www.youtube.com/results?search_query=international+student+Canada+Australia+immigration+experience",
    icon: Globe2,
  },
];

const VideoTestimonials = ({
  topics = ["mbbs", "mba", "immigration"],
  compact = false,
}: VideoTestimonialsProps) => {
  const stories = videoStories.filter((story) => topics.includes(story.topic));

  return (
    <section className={compact ? "mb-10" : "px-6 py-12 md:px-8"}>
      <div className={compact ? "mb-5" : "section-shell mb-6"}>
        <span className="eyebrow text-primary">Video stories</span>
        <h2 className="section-title section-title-accent mt-1.5 mb-2">
          Student experiences, in their own words
        </h2>
        <p className="section-subtitle">
          Explore candid video perspectives on popular study and immigration
          journeys before choosing your next step.
        </p>
      </div>

      <div
        className={`grid gap-4 ${
          stories.length === 1
            ? "max-w-xl"
            : stories.length === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-2 xl:grid-cols-3"
        }`}
      >
        {stories.map((story) => {
          const Icon = story.icon;

          return (
            <a
              key={story.topic}
              href={story.href}
              target="_blank"
              rel="noreferrer noopener"
              className="content-card group overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              aria-label={`Watch ${story.label} student videos on YouTube`}
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={story.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />

                <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-primary shadow-sm backdrop-blur">
                  <Icon className="h-3.5 w-3.5" />
                  {story.label}
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                  </span>
                </div>

                <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white/90">
                  {story.destination}
                </p>
              </div>

              <div className="p-4">
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {story.title}
                  </h3>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {story.description}
                </p>
                <p className="mt-3 border-t border-border/60 pt-3 text-[10px] uppercase tracking-wide text-muted-foreground">
                  Opens external student perspectives on YouTube
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default VideoTestimonials;

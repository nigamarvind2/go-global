import { useParams, Link } from "react-router-dom";
import { coursesData } from "@/data/coursesData";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import JsonLd from "@/components/JsonLd";
import VideoTestimonials from "@/components/VideoTestimonials";
import { getSiteOrigin } from "@/lib/seo";
import { GraduationCap, Briefcase, MapPin, CheckCircle, Star, ArrowRight } from "lucide-react";

const CourseDetail = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = courseSlug ? coursesData[courseSlug] : null;
  const origin = getSiteOrigin();
  const seoTitle = course ? `${course.title} Abroad` : "Course Not Found";
  const seoDescription = course
    ? `Study ${course.title} abroad with program options, eligibility, top destinations, and career paths.`
    : "The requested course page was not found.";
  const breadcrumbJsonLd = course ? {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: course.title, item: `${origin}/courses/${course.slug}` },
    ],
  } : null;
  const courseJsonLd = course ? {
    "@context": "https://schema.org", "@type": "Course",
    name: course.title, description: course.heroDescription,
    url: `${origin}/courses/${course.slug}`,
    provider: { "@type": "Organization", name: "GoGlobalEdTechPvtLtd", url: origin },
  } : null;

  if (!course) {
    return (
      <>
        <SEO title={seoTitle} description={seoDescription} noIndex />
        <div className="page-content text-center py-20">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Link to="/study-abroad"><Button>Browse All Courses</Button></Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} />
      {breadcrumbJsonLd && <JsonLd id={`jsonld-breadcrumb-course-${course.slug}`} data={breadcrumbJsonLd} />}
      {courseJsonLd && <JsonLd id={`jsonld-course-${course.slug}`} data={courseJsonLd} />}

      <PageHeader
        title={course.title}
        subtitle={course.heroDescription}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: course.title }]}
        actions={
          <Link to="/contact">
            <Button size="sm" className="gap-2">Get Free Counselling <ArrowRight className="w-3.5 h-3.5" /></Button>
          </Link>
        }
      />

      <div className="page-content">
        {/* Programs */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Programs Offered</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {course.programs.map((program, i) => (
              <Card key={i} className="border-border/60">
                <CardContent className="p-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{program}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Options */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-accent" />
            <h2 className="text-lg font-semibold">Career Opportunities</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {course.careerOptions.map((career, i) => (
              <Card key={i} className="border-border/60 border-l-2 border-l-accent">
                <CardContent className="p-3"><span className="text-sm font-medium">{career}</span></CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Destinations */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold">Top Study Destinations</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {course.topDestinations.map((dest, i) => (
              <span key={i} className="px-4 py-2 bg-primary/8 text-primary rounded-md text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer">
                {dest}
              </span>
            ))}
          </div>
        </div>

        {/* Eligibility & Why Study */}
        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-semibold">Eligibility Criteria</h2>
            </div>
            <ul className="space-y-2">
              {course.eligibility.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-accent" />
              <h2 className="text-lg font-semibold">Why Study {course.title}?</h2>
            </div>
            <ul className="space-y-2">
              {course.whyStudy.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm"><Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {course.slug === "business-mba" && (
          <VideoTestimonials topics={["mba"]} compact />
        )}
      </div>

      <CTA />
    </>
  );
};

export default CourseDetail;

import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { coursesData } from "@/data/coursesData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  CheckCircle, 
  Star,
  ArrowRight,
  BookOpen
} from "lucide-react";

const CourseDetail = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const course = courseSlug ? coursesData[courseSlug] : null;

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">The course you're looking for doesn't exist.</p>
          <Link to="/study-abroad">
            <Button>Browse All Courses</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-aurora relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-muted-foreground">Popular Course</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.heroDescription}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Free Counselling <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/study-abroad" className="btn-outline inline-flex items-center gap-2">
                Explore Universities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Programs Offered</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {course.programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{program}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Options Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">Career Opportunities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {course.careerOptions.map((career, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-accent">
                <CardContent className="p-4">
                  <span className="font-medium">{career}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Top Study Destinations</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {course.topDestinations.map((destination, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                {destination}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Why Study */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Eligibility Criteria</h2>
              </div>
              <ul className="space-y-4">
                {course.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Study */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-accent" />
                <h2 className="text-2xl font-bold">Why Study {course.title}?</h2>
              </div>
              <ul className="space-y-4">
                {course.whyStudy.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Ready to Start Your {course.title} Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get personalized guidance from our expert counselors and find the perfect university for your goals.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            Get Free Counselling <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;

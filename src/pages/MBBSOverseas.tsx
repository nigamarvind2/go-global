import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Globe, 
  Wallet, 
  Ban, 
  Languages, 
  BookOpen, 
  ShieldCheck, 
  Receipt, 
  Briefcase,
  ChevronRight,
  Phone,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import EnquiryFormModal from "@/components/EnquiryFormModal";
import { mbbsCountries, comparisonData, whyStudyAbroadBenefits } from "@/data/mbbsData";

const iconMap: Record<string, React.ReactNode> = {
  wallet: <Wallet className="w-8 h-8" />,
  ban: <Ban className="w-8 h-8" />,
  globe: <Globe className="w-8 h-8" />,
  languages: <Languages className="w-8 h-8" />,
  "book-open": <BookOpen className="w-8 h-8" />,
  "shield-check": <ShieldCheck className="w-8 h-8" />,
  receipt: <Receipt className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
};

const MBBSOverseas = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <GraduationCap className="w-4 h-4" />
                GoGlobalEdTechPvtLtd - Your MBBS Partner
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Are You Looking to <br />
                <span className="text-primary">Study MBBS Abroad?</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Fulfill your dream of becoming a doctor with affordable, world-class medical education. 
                Get admission in NMC & WHO approved universities with complete guidance from GoGlobalEdTechPvtLtd.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => setIsEnquiryOpen(true)}>
                  Get Free Consultation
                  <Phone className="w-4 h-4 ml-2" />
                </Button>
                <a href="tel:+919166664558">
                  <Button size="lg" variant="outline">
                    Call Now: +91 91666 64558
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">NMC Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">WHO Listed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">FAIMER Approved</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800"
                alt="Medical students"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Students Placed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
              📊 Fee Comparison
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">MBBS in India vs Abroad</h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              See why thousands of students choose to study MBBS abroad
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gradient-to-r from-accent to-accent/90">
                      <TableHead className="text-white font-bold text-base py-4">#</TableHead>
                      <TableHead className="text-white font-bold text-base py-4">Parameter</TableHead>
                      <TableHead className="text-white font-bold text-base py-4 text-center">🇮🇳 India</TableHead>
                      <TableHead className="text-white font-bold text-base py-4 text-center">🌍 Abroad</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-muted/50" : "bg-background"}>
                        <TableCell className="font-bold text-primary py-4">{index + 1}</TableCell>
                        <TableCell className="font-semibold text-foreground py-4">{row.parameter}</TableCell>
                        <TableCell className="text-center text-muted-foreground py-4">{row.india}</TableCell>
                        <TableCell className="text-center py-4">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold text-sm">
                            {row.abroad}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="text-center mt-8">
              <Button 
                size="lg" 
                onClick={() => setIsEnquiryOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all px-8 py-6 text-lg"
              >
                Get Free Counselling Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌍 Explore Countries
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Choose Your Destination</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore top countries for MBBS abroad with NMC & WHO approved universities
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {mbbsCountries.map((country) => (
              <Link 
                key={country.slug}
                to={`/mbbs-overseas/${country.slug}`}
                className="group bg-background rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-border hover:border-primary hover:-translate-y-2"
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{country.flag}</div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {country.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{country.universities.length}+ Universities</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setIsEnquiryOpen(true)}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-semibold"
            >
              Can't Decide? Get Expert Advice
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Study Abroad */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Study MBBS Abroad?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of pursuing your medical degree internationally
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStudyAbroadBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {iconMap[benefit.icon]}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your MBBS Journey?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Get expert guidance from GoGlobalEdTechPvtLtd. We help you choose the right university, 
            handle documentation, and support you throughout your medical education journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={() => setIsEnquiryOpen(true)}>
              Get Free Consultation
            </Button>
            <a href="tel:+919166664558">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Phone className="w-4 h-4 mr-2" />
                Call: +91 91666 64558
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </div>
  );
};

export default MBBSOverseas;

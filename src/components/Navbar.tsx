import { useState } from "react";
import { ChevronDown, Menu, X, Phone, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import StudyAbroadMegaMenu from "./StudyAbroadMegaMenu";
import EnquiryFormModal from "./EnquiryFormModal";
import BrandMark from "./BrandMark";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStudyAbroadOpen, setIsStudyAbroadOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Top bar */}
        <div className="bg-muted/70 text-foreground py-2 text-xs border-b border-border/60">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-6">
              <a
                href="mailto:goglobalstudyedtech@gmail.com"
                className="flex items-center gap-2 rounded-full bg-background px-3 py-1 font-semibold text-foreground shadow-sm ring-1 ring-border/60 hover:ring-primary/40 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>goglobalstudyedtech@gmail.com</span>
              </a>
              <a href="tel:+919166664558" className="flex items-center gap-2 hover:text-foreground/80 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+91 91666 64558</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Sparkles className="w-4 h-4" />
              <span className="text-foreground/70">Smart guidance for global education</span>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <nav className="bg-background/85 backdrop-blur-lg border-b border-border/60">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <BrandMark size="sm" showTagline={false} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <Link 
                to="/mbbs-overseas" 
                className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/15 transition-all text-sm"
              >
                MBBS Abroad
              </Link>
              
              {/* Study Abroad Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsStudyAbroadOpen(true)}
                onMouseLeave={() => setIsStudyAbroadOpen(false)}
              >
                <button className="px-4 py-2 rounded-full border border-border/60 text-foreground/80 font-semibold hover:text-foreground hover:border-primary/30 hover:bg-muted/60 transition-all flex items-center gap-1 text-sm">
                  Study Abroad
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isStudyAbroadOpen ? 'rotate-180' : ''}`} />
                </button>
                <StudyAbroadMegaMenu isOpen={isStudyAbroadOpen} />
              </div>

              <a href="/#services" className="nav-link px-3 py-2 rounded-full hover:bg-muted/70 transition-colors flex items-center gap-2 text-sm">
                <Sparkles className="w-4 h-4" />
                Services
              </a>
              <Link to="/contact" className="nav-link px-3 py-2 rounded-full hover:bg-muted/70 transition-colors text-sm">Contact</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary text-sm">
                Book Free Counselling
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-background/95 backdrop-blur border-t border-border/60 animate-fade-in">
              <div className="container mx-auto px-4 py-4 space-y-4">
                <Link to="/" className="block nav-link py-2">Home</Link>
                <Link to="/mbbs-overseas" className="block nav-link py-2">MBBS Abroad</Link>
                <Link to="/study-abroad" className="block nav-link py-2">Study Abroad</Link>
                <a href="/#services" className="block nav-link py-2">Services</a>
                <Link to="/contact" className="block nav-link py-2">Contact</Link>
                <button onClick={() => { setIsEnquiryOpen(true); setIsMenuOpen(false); }} className="btn-primary inline-block mt-4 text-sm">
                  Book Free Counselling
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
};

export default Navbar;

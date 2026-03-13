import { useState } from "react";
import { ChevronDown, Menu, X, Phone, Mail, Sparkles, ClipboardList, Target } from "lucide-react";
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
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:goglobalstudyedtech@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">goglobalstudyedtech@gmail.com</span>
            </a>
            <a href="tel:+919166664558" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 91666 64558</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Sparkles className="w-4 h-4" />
            <span>Smart guidance for global education</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <BrandMark size="sm" showTagline={false} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <Link 
                to="/mbbs-overseas" 
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary hover:text-white transition-all"
              >
                MBBS Abroad
              </Link>
              
              {/* Study Abroad Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsStudyAbroadOpen(true)}
                onMouseLeave={() => setIsStudyAbroadOpen(false)}
              >
                <button className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-semibold hover:bg-accent hover:text-white transition-all flex items-center gap-1">
                  Study Abroad
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isStudyAbroadOpen ? 'rotate-180' : ''}`} />
                </button>
                <StudyAbroadMegaMenu isOpen={isStudyAbroadOpen} />
              </div>

              <a href="/#ai-assistant" className="nav-link px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Assistant
              </a>
              <a href="/#college-predictor" className="nav-link px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
                <Target className="w-4 h-4" />
                Predictor
              </a>
              <a href="/#application-tracker" className="nav-link px-4 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
                <ClipboardList className="w-4 h-4" />
                Tracker
              </a>
              <Link to="/contact" className="nav-link px-4 py-2 rounded-lg hover:bg-muted transition-colors">Contact</Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button onClick={() => setIsEnquiryOpen(true)} className="btn-primary">
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
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link to="/" className="block nav-link py-2">Home</Link>
              <Link to="/mbbs-overseas" className="block nav-link py-2">MBBS Abroad</Link>
              <Link to="/study-abroad" className="block nav-link py-2">Study Abroad</Link>
              <a href="/#ai-assistant" className="block nav-link py-2">AI Assistant</a>
              <a href="/#college-predictor" className="block nav-link py-2">College Predictor</a>
              <a href="/#application-tracker" className="block nav-link py-2">Application Tracker</a>
              <Link to="/contact" className="block nav-link py-2">Contact</Link>
              <button onClick={() => { setIsEnquiryOpen(true); setIsMenuOpen(false); }} className="btn-primary inline-block mt-4">
                Book Free Counselling
              </button>
            </div>
          </div>
        )}
      </nav>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
};

export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Phone,
  Info,
  ChevronDown,
  Mail,
  Sparkles,
  Globe,
  BookOpen,
  FileText,
  X,
} from "lucide-react";
import BrandMark from "./BrandMark";
import EnquiryFormModal from "./EnquiryFormModal";

const studyAbroadCountries = [
  { name: "United Kingdom", slug: "uk" },
  { name: "Australia", slug: "australia" },
  { name: "Canada", slug: "canada" },
  { name: "United States", slug: "usa" },
  { name: "Germany", slug: "germany" },
  { name: "Ireland", slug: "ireland" },
  { name: "New Zealand", slug: "new-zealand" },
  { name: "France", slug: "france" },
];

const mbbsCountries = [
  { name: "Russia", slug: "russia" },
  { name: "Uzbekistan", slug: "uzbekistan" },
  { name: "Kazakhstan", slug: "kazakhstan" },
  { name: "Philippines", slug: "philippines" },
  { name: "Georgia", slug: "georgia" },
  { name: "Kyrgyzstan", slug: "kyrgyzstan" },
  { name: "Bangladesh", slug: "bangladesh" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const [studyOpen, setStudyOpen] = useState(false);
  const [mbbsOpen, setMbbsOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const isActivePrefix = (prefix: string) =>
    location.pathname.startsWith(prefix);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
      <aside className={`app-sidebar ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border/60">
          <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
            <BrandMark size="sm" />
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 rounded-md hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 px-2">
          {/* Main */}
          <div className="sidebar-section-title">Main</div>

          <Link
            to="/"
            onClick={handleLinkClick}
            className={`sidebar-nav-item ${isActive("/") ? "active" : ""}`}
          >
            <Home className="w-4 h-4 flex-shrink-0" />
            Home
          </Link>

          <Link
            to="/about"
            onClick={handleLinkClick}
            className={`sidebar-nav-item ${isActive("/about") ? "active" : ""}`}
          >
            <Info className="w-4 h-4 flex-shrink-0" />
            About Us
          </Link>

          {/* Programs */}
          <div className="sidebar-section-title">Programs</div>

          {/* Study Abroad */}
          <button
            onClick={() => setStudyOpen((v) => !v)}
            className={`sidebar-nav-item w-full justify-between ${
              isActivePrefix("/study-abroad") ? "active" : ""
            }`}
          >
            <span className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 flex-shrink-0" />
              Study Abroad
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                studyOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {studyOpen && (
            <div className="animate-fade-in">
              <Link
                to="/study-abroad"
                onClick={handleLinkClick}
                className={`sidebar-sub-item ${
                  isActive("/study-abroad") ? "active" : ""
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                All Destinations
              </Link>
              {studyAbroadCountries.map((c) => (
                <Link
                  key={c.slug}
                  to={`/study-abroad/${c.slug}`}
                  onClick={handleLinkClick}
                  className={`sidebar-sub-item ${
                    isActive(`/study-abroad/${c.slug}`) ? "active" : ""
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          )}

          {/* MBBS Abroad */}
          <button
            onClick={() => setMbbsOpen((v) => !v)}
            className={`sidebar-nav-item w-full justify-between ${
              isActivePrefix("/mbbs-overseas") ? "active" : ""
            }`}
          >
            <span className="flex items-center gap-3">
              <HeartPulse className="w-4 h-4 flex-shrink-0" />
              MBBS Abroad
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                mbbsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {mbbsOpen && (
            <div className="animate-fade-in">
              <Link
                to="/mbbs-overseas"
                onClick={handleLinkClick}
                className={`sidebar-sub-item ${
                  isActive("/mbbs-overseas") ? "active" : ""
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                All Countries
              </Link>
              {mbbsCountries.map((c) => (
                <Link
                  key={c.slug}
                  to={`/mbbs-overseas/${c.slug}`}
                  onClick={handleLinkClick}
                  className={`sidebar-sub-item ${
                    isActive(`/mbbs-overseas/${c.slug}`) ? "active" : ""
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          )}

          {/* Resources */}
          <div className="sidebar-section-title">Resources</div>

          <Link
            to="/services"
            onClick={handleLinkClick}
            className={`sidebar-nav-item ${
              isActive("/services") || isActivePrefix("/services/")
                ? "active"
                : ""
            }`}
          >
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            Services
          </Link>

          <a
            href="/courses/medicine-healthcare"
            onClick={handleLinkClick}
            className="sidebar-nav-item"
          >
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            Courses
          </a>

          {/* Support */}
          <div className="sidebar-section-title">Support</div>

          <Link
            to="/contact"
            onClick={handleLinkClick}
            className={`sidebar-nav-item ${
              isActive("/contact") ? "active" : ""
            }`}
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            Contact Us
          </Link>

          <Link
            to="/privacy"
            onClick={handleLinkClick}
            className={`sidebar-nav-item ${
              isActive("/privacy") ? "active" : ""
            }`}
          >
            <FileText className="w-4 h-4 flex-shrink-0" />
            Privacy Policy
          </Link>
        </nav>

        {/* Footer CTA */}
        <div className="px-3 py-4 border-t border-border/60 space-y-3">
          <button
            onClick={() => setIsEnquiryOpen(true)}
            className="btn-primary w-full text-center"
          >
            Book Free Counselling
          </button>

          <div className="flex flex-col gap-1 px-1">
            <a
              href="tel:+919166664558"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-3 h-3" />
              +91 91666 64558
            </a>
            <a
              href="mailto:goglobalstudyedtech@gmail.com"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors truncate"
            >
              <Mail className="w-3 h-3 flex-shrink-0" />
              goglobalstudyedtech@gmail.com
            </a>
          </div>
        </div>
      </aside>

      <EnquiryFormModal open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
};

export default Sidebar;

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center rounded-2xl bg-background px-4 py-2 shadow-lg">
              <BrandMark size="sm" />
            </Link>
            <p className="text-background/70 text-sm">
              GoGlobalEdTechPvtLtd helps students from India plan, apply, and succeed abroad with clear guidance and
              end-to-end support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-background/70 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/study-abroad" className="text-background/70 hover:text-primary transition-colors">Study Abroad</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="/#ai-assistant" className="text-background/70 hover:text-primary transition-colors">AI Assistant</a></li>
              <li><a href="/#college-predictor" className="text-background/70 hover:text-primary transition-colors">College Predictor</a></li>
              <li><a href="/#application-tracker" className="text-background/70 hover:text-primary transition-colors">Application Tracker</a></li>
            </ul>
          </div>
          
          {/* Study Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              <li><Link to="/study-abroad/uk" className="text-background/70 hover:text-primary transition-colors">United Kingdom</Link></li>
              <li><Link to="/study-abroad/usa" className="text-background/70 hover:text-primary transition-colors">United States</Link></li>
              <li><Link to="/study-abroad/canada" className="text-background/70 hover:text-primary transition-colors">Canada</Link></li>
              <li><Link to="/study-abroad/australia" className="text-background/70 hover:text-primary transition-colors">Australia</Link></li>
              <li><Link to="/study-abroad/germany" className="text-background/70 hover:text-primary transition-colors">Germany</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">162 B Brijeshwari NXB, Indore, Madhya Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919166664558" className="text-background/70 hover:text-primary transition-colors">+91 91666 64558</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:goglobalstudyedtech@gmail.com" className="text-background/70 hover:text-primary transition-colors">goglobalstudyedtech@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} GoGlobalEdTechPvtLtd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-background/60 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

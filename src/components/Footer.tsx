import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="px-6 md:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <img
                src="/assets/go-global-logo.jpg"
                alt="GoGlobal EdTech"
                className="h-9 w-9 rounded-lg object-contain"
              />
              <h4 className="text-sm font-semibold text-foreground">GoGlobal EdTech</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Helping students from India plan, apply, and succeed abroad with clear guidance and end-to-end support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-1.5">
              <li><Link to="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/study-abroad" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Study Abroad</Link></li>
              <li><Link to="/mbbs-overseas" className="text-xs text-muted-foreground hover:text-foreground transition-colors">MBBS Abroad</Link></li>
              <li><Link to="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Destinations</h4>
            <ul className="space-y-1.5">
              <li><Link to="/study-abroad/uk" className="text-xs text-muted-foreground hover:text-foreground transition-colors">United Kingdom</Link></li>
              <li><Link to="/study-abroad/usa" className="text-xs text-muted-foreground hover:text-foreground transition-colors">United States</Link></li>
              <li><Link to="/study-abroad/canada" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Canada</Link></li>
              <li><Link to="/study-abroad/australia" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Australia</Link></li>
              <li><Link to="/study-abroad/germany" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Germany</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-2">
              <a href="tel:+919166664558" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-3 h-3 flex-shrink-0" />
                +91 91666 64558
              </a>
              <a href="mailto:goglobalstudyedtech@gmail.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-3 h-3 flex-shrink-0" />
                goglobalstudyedtech@gmail.com
              </a>
              <div className="flex items-start gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5" />
                162 B Brijeshwari NXB, Indore, MP
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/60 mt-6 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} GoGlobalEdTechPvtLtd. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="text-[11px] text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

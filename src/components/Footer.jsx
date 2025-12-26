import { Mail, Phone, MapPin, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm md:text-lg">H</span>
              </div>
              <span className="text-lg md:text-xl font-semibold">
                <span className="text-primary">Hiring</span>
                <span className="text-primary-foreground">Bazaar</span>
              </span>
            </div>

            <p className="text-xs md:text-sm text-footer-foreground/80 mb-4 md:mb-6 max-w-sm">
              Revolutionizing Talent Acquisition by AI and Strategic
              Collaboration. Making hiring simple, fast, and transparent.
            </p>

            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:hello@hiringbazaar.com"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span className="break-all">hello@hiringbazaar.com</span>
              </a>

              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                +91 123 456 7890
              </a>

              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-footer-foreground/80">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                TIDES, IIT Roorkee, Uttarakhand
              </div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground font-semibold text-sm md:text-base mb-4 md:mb-6">
              Company
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li><a href="#" className="text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors">Press Kit</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-footer-foreground/60 text-xs md:text-sm">
            © 2024 Hiring Bazaar (LyteHire.ai). All rights reserved.
          </p>

          <div className="flex items-center gap-3 md:gap-4">
            <a href="#" className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-foreground/30 transition-colors">
              <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
            </a>
            <a href="#" className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-foreground/30 transition-colors">
              <Youtube className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

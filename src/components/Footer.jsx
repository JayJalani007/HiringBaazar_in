import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Logo from "@/assets/IMG_2824.PNG";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-10">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <img
                src={Logo}
                alt="HiringBazaar Logo"
                className="w-32 md:w-40 h-16 md:h-20 object-contain flex-shrink-0"
              />
            </div>

            <p className="text-xs md:text-sm text-footer-foreground/80 mb-4 md:mb-6 max-w-sm">
              Revolutionizing Talent Acquisition by AI and Strategic
              Collaboration. Making hiring simple, fast, and transparent.
            </p>

            <div className="space-y-2 md:space-y-3">
              <a
                href="mailto:contact@hiringbazaar.in"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                <span className="break-all">contact@hiringbazaar.in</span>
              </a>

              <a
                href="tel:+919145938795"
                className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-footer-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                +91 91459 38795
              </a>

              <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-footer-foreground/80">
                <MapPin className="w-4 md:w-5 h-4 md:h-5 flex-shrink-0" />
                TIDES, IIT Roorkee, Uttarakhand
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="mt-7">
            <div className="flex justify-center">
              <a href="#" className="text-primary-foreground font-semibold text-sm md:text-base">Company</a>
            </div>
            <div className="mb-2"></div>
            <div className="flex justify-center">
              <div className="border-2 rounded-full w-10"></div>
            </div>
            <br />
            <div className="flex justify-center flex-wrap items-center gap-4">
              <a href="#" className="text-sm md:text-base">About Us</a>
              <a href="#" className="text-sm md:text-base">Careers</a>
              <a href="#" className="text-sm md:text-base">Blog</a>
              <a href="#" className="text-sm md:text-base">Press Kit</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/20 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-footer-foreground/60 text-xs md:text-sm">
            © 2024 Hiring Bazaar (LyteHire.ai). All rights reserved.
          </p>

          <div className="flex items-center gap-3 md:gap-4">
            <a href="https://www.linkedin.com/company/hiring-bazaar/" target="_blank" rel="noreferrer" className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-footer-foreground/20 flex items-center justify-center hover:bg-footer-foreground/30 transition-colors">
              <Linkedin className="w-4 md:w-5 h-4 md:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

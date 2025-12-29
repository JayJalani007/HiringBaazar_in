import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 absolute left-4 md:relative md:left-0">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <Building2 className="w-4 md:w-5 h-4 md:h-5 text-primary-foreground" />
            </div>
            <span className="text-base md:text-xl font-semibold">
              <span className="text-primary">Hiring</span>
              <span className="text-foreground">Bazaar</span>
            </span>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#home"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <div className="relative group">
              <button
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <a
                  href="https://lnkd.in/gjJZxBqC"
                  target="_blank"
                  rel="noreferrer"
                  className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-t-lg"
                >
                  Campus HB
                </a>
              </div>
            </div>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-4 flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3 border-t border-border/50 pt-4">
            <a
              href="#home"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <div>
              <button
                onClick={() => setIsProductOpen(!isProductOpen)}
                className="w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center justify-between"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${isProductOpen ? "rotate-180" : ""}`} />
              </button>
              {isProductOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <a
                    href="https://lnkd.in/gjJZxBqC"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Campus HB
                  </a>
                </div>
              )}
            </div>
            <a
              href="#about"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

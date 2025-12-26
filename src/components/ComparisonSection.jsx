import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Time to Screen Candidates", traditional: "Days", bazaar: "Minutes" },
  { feature: "Hiring Cost per Role", traditional: "High", bazaar: "30% Lower" },
  { feature: "Quality Consistency", traditional: "Variable", bazaar: "AI-Standardized" },
  { feature: "Agency Transparency", traditional: "None", bazaar: "Full Visibility" },
  { feature: "Payment Security", traditional: "Risky", bazaar: "Escrow Protected" },
  { feature: "Analytics & Insights", traditional: "Manual Reports", bazaar: "Real-time Dashboard" },
];

const ComparisonSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-emerald-light text-primary text-xs md:text-sm font-medium mb-4 md:mb-6">
            COMPARISON
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium mb-3 md:mb-4">
            Why Choose <span className="italic text-primary">Hiring Bazaar</span>?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground px-2">
            See how we stack up against traditional hiring methods
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden md:block max-w-4xl mx-auto bg-card rounded-2xl border border-border overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-secondary/50 border-b border-border">
            <div className="p-6 font-semibold">Feature</div>
            <div className="p-6 font-semibold text-center text-muted-foreground">
              Traditional Hiring
            </div>
            <div className="p-6 font-semibold text-center text-primary">
              Hiring Bazaar
            </div>
          </div>

          {/* Table Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-3 border-b border-border last:border-b-0"
            >
              <div className="p-6 font-medium">{row.feature}</div>

              <div className="p-6 flex items-center justify-center gap-2 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-accent" />
                </div>
                <span>{row.traditional}</span>
              </div>

              <div className="p-6 flex items-center justify-center gap-2 text-primary">
                <div className="w-6 h-6 rounded-full bg-emerald-light flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span>{row.bazaar}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="bg-card rounded-lg border border-border p-4 space-y-3"
            >
              <h3 className="font-semibold text-sm">{row.feature}</h3>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-rose-light flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-muted-foreground">Traditional: <span className="text-foreground font-medium">{row.traditional}</span></span>
                </div>
                
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-light flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-primary">Hiring Bazaar: <span className="font-medium">{row.bazaar}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

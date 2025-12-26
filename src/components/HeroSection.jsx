import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-emerald-light mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Reimagining Professional Connections
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6">
            Where Exceptional Talent
            <br />
            <span className="italic text-primary">Meets Opportunity</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Connect with forward-thinking companies, discover roles that align
            with your vision, and take the next meaningful step in your career
            journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg btn-hover"
            >
              Explore Opportunities
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-border bg-card hover:bg-secondary px-8 py-6 text-lg btn-hover"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Introduction
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>TIDES IIT Roorkee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>100+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>500+ Agencies</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview with Floating Stats */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Floating Stat Card - Top Right */}
          <div className="absolute -top-8 -right-8 z-20 animate-float-bounce">
            <div className="bg-white dark:bg-card rounded-2xl shadow-2xl p-6 border border-border/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-orange-500 mb-1">30%</div>
              <div className="text-sm text-muted-foreground">Cost Saved</div>
            </div>
          </div>

          {/* Floating Stat Card - Bottom Left */}
          <div className="absolute -bottom-8 -left-8 z-20 animate-float-bounce-delayed">
            <div className="bg-white dark:bg-card rounded-2xl shadow-2xl p-6 border border-border/50 backdrop-blur-sm">
              <div className="text-4xl font-bold text-teal-500 mb-1">40%</div>
              <div className="text-sm text-muted-foreground">Faster Hiring</div>
            </div>
          </div>

          {/* Notification Badge - Top */}
          <div className="absolute -top-4 right-1/4 z-20 animate-float-gentle">
            <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg font-bold">
              47
            </div>
          </div>

          {/* Main Dashboard Card */}
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden relative">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-6 px-6 py-4 border-b border-border bg-muted/20">
              <div className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                Tab 1
              </div>
              <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
                Tab 2
              </span>
              <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
                Tab 3
              </span>
              <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
                Tab 4
              </span>
              <span className="text-muted-foreground text-sm hover:text-foreground cursor-pointer transition-colors">
                Tab 5
              </span>
            </div>

            {/* Dashboard Content with Play Button Overlay */}
            <div className="p-8 space-y-4 relative bg-gradient-to-br from-muted/30 to-muted/10">
              {/* Central Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 rounded-full bg-teal-400 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform animate-pulse-subtle">
                  <Play className="w-10 h-10 text-white fill-white ml-1" />
                </div>
              </div>

              {/* Content Rows */}
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 p-4 bg-white/60 dark:bg-secondary/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-full bg-teal-300/50" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-muted rounded-full w-3/4" />
                    <div className="h-2 bg-muted/60 rounded-full w-1/2" />
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      item === 2 ? "bg-orange-400" : "bg-orange-400"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-bounce {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(-5px) translateX(-5px);
          }
          75% {
            transform: translateY(-12px) translateX(3px);
          }
        }

        @keyframes float-bounce-delayed {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(-4px);
          }
          50% {
            transform: translateY(-12px) translateX(4px);
          }
          75% {
            transform: translateY(-6px) translateX(-2px);
          }
        }

        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        .animate-float-bounce {
          animation: float-bounce 4s ease-in-out infinite;
        }

        .animate-float-bounce-delayed {
          animation: float-bounce-delayed 4.5s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
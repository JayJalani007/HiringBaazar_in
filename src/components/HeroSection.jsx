import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Volume, VolumeX, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleWatchClick = () => {
    setShowControls(true);
    const el = containerRef.current;
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    const v = videoRef.current;
    if (v) {
      v.muted = isMuted;
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    }
  };

  // Observe whether the video container is in view
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.4);
        });
      },
      { threshold: [0, 0.4, 0.6, 1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Play/pause logic: play when hovered or in view, otherwise pause
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isInView || isHovered) {
      // ensure muted attribute is set before attempting play (autoplay rules)
      v.muted = isMuted;
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
    } else {
      v.pause();
    }
  }, [isInView, isHovered, isMuted]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-foreground tracking-tight">
            Turn hiring chaos
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-primary/90 bg-clip-text text-transparent font-extrabold">into a steady pipeline of desired candidates</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-normal tracking-wide">
            HB connects your company with pre-vetted recruiters and job seekers so you can fill roles faster, with less effort and lower cost per hire.
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
              onClick={handleWatchClick}
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
          <div className="absolute -top-6 -right-6 z-20 animate-float-bounce">
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 dark:bg-card rounded-xl shadow-lg px-3 py-2 border border-border/30 backdrop-blur-sm">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">Update</div>
                <div className="text-xs text-muted-foreground">Latest</div>
              </div>
            </div>
          </div>

          {/* Floating Stat Card - Bottom Left */}
          <div className="absolute -bottom-6 -left-6 z-20 animate-float-bounce-delayed">
            <div className="flex items-center gap-3 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 dark:bg-card rounded-xl shadow-lg px-3 py-2 border border-border/30 backdrop-blur-sm">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">Update</div>
                <div className="text-xs text-muted-foreground">Now</div>
              </div>
            </div>
          </div>

          {/* Notification Badge - Top */}
          {/* Notification badge removed */}

          {/* Main Dashboard Card */}
          <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden relative">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>

            {/* Tabs removed so video fully covers the dashboard area */}

            {/* Dashboard Content with Play Button Overlay */}
            <div
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="p-0 relative bg-gradient-to-br from-muted/30 to-muted/10"
            >
              <div className="relative w-full rounded-xl overflow-hidden">
                <video
                  ref={videoRef}
                  src="/videos/videoplayback.mp4"
                  className="w-full h-[420px] md:h-[360px] lg:h-[520px] object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                />

                <button
                  onClick={toggleMute}
                  className={`absolute top-4 right-4 bg-white/90 dark:bg-black/60 rounded-full p-2 shadow transition-colors ${
                    showControls || isHovered || isInView ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Volume className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* inline video implemented inside the dashboard card; modal removed */}

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
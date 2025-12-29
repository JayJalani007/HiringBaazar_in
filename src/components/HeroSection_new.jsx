import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Volume, VolumeX, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    if (isPopupOpen && (isInView || isHovered)) {
      v.muted = isMuted;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isInView, isHovered, isMuted, isPopupOpen]);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
          Turn hiring chaos <br />
          <span className="text-primary">
            into a steady pipeline of desired candidates
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          HB connects your company with pre-vetted recruiters and job seekers to
          fill roles faster with lower cost per hire.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">
            Explore Opportunities <ArrowRight className="ml-2" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => setIsPopupOpen(true)}
          >
            <Play className="mr-2" />
            Watch Introduction
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          YC-backed startup trusted by early-stage & scaling teams
        </p>

        {isPopupOpen && (
          <div className="mt-16 max-w-4xl mx-auto relative bg-card rounded-2xl border">

            {/* Close Button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-3 right-3 z-20 bg-white rounded-full px-2"
            >
              ✕
            </button>

            <div
              ref={containerRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <video
                ref={videoRef}
                src="/videos/videoplayback.mp4"
                className="w-full h-[300px] md:h-[500px] object-cover rounded-b-2xl"
                loop
                muted={isMuted}
                playsInline
              />

              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-white rounded-full p-2"
              >
                {isMuted ? <VolumeX /> : <Volume />}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

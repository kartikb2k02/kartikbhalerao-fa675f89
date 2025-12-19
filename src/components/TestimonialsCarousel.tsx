import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Engineering Lead",
    company: "TechCorp",
    quote:
      "Kartik's ability to translate complex user needs into clear, actionable specs made our collaboration seamless. A true product thinker.",
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    role: "Design Director",
    company: "DesignHub",
    quote:
      "Working with Kartik was a pleasure. His user-centric approach and data-driven decisions helped us ship features that users actually loved.",
    avatar: "PP",
  },
  {
    name: "Amit Verma",
    role: "Startup Founder",
    company: "FinEdge",
    quote:
      "Kartik brought structure and clarity to our chaotic early-stage product development. His strategic thinking was invaluable.",
    avatar: "AV",
  },
];

export const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  // Track selected slide
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay logic with pause on hover
  useEffect(() => {
    if (isPaused || !emblaApi) return;

    const play = () => {
      autoplayRef.current = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);
    };

    play();

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, isPaused]);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      scrollNext();
    }
  };

  return (
    <section
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Testimonials carousel"
      aria-roledescription="carousel"
    >
      {/* Glass container */}
      <div
        className={cn(
          "relative rounded-3xl border border-border/40 bg-background/30 backdrop-blur-3xl shadow-2xl overflow-hidden",
          "p-8 sm:p-12"
        )}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 dark:ring-white/5 pointer-events-none" />

        {/* Large quote icon */}
        <Quote
          className="absolute top-6 left-6 w-12 h-12 text-primary/15 rotate-180"
          aria-hidden="true"
        />

        {/* Header */}
        <div className="relative z-10 text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            What People Say
          </h2>
          <p className="text-muted-foreground mt-2">
            Feedback from colleagues and collaborators
          </p>
        </div>

        {/* Embla carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] min-w-0 px-4"
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${idx + 1} of ${testimonials.length}`}
              >
                <div
                  className={cn(
                    "bg-background/50 dark:bg-background/20 backdrop-blur-xl rounded-2xl p-8 border border-border/30",
                    "transition-all duration-500"
                  )}
                >
                  <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </blockquote>
                  <footer className="flex items-center gap-4">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",
                        "bg-primary/20 text-primary border border-primary/30"
                      )}
                      aria-hidden="true"
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-20">
          <button
            onClick={scrollPrev}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              "bg-background/60 backdrop-blur-lg border border-border/50",
              "text-foreground hover:bg-primary/20 hover:text-primary",
              "transition-all duration-300 shadow-lg",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-20">
          <button
            onClick={scrollNext}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center",
              "bg-background/60 backdrop-blur-lg border border-border/50",
              "text-foreground hover:bg-primary/20 hover:text-primary",
              "transition-all duration-300 shadow-lg",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            )}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div
          className="flex items-center justify-center gap-2 mt-8 relative z-10"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              role="tab"
              aria-selected={selectedIndex === idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                selectedIndex === idx
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        {/* Pause indicator */}
        {isPaused && (
          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground/60 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-muted-foreground/40" />
            Paused
          </div>
        )}
      </div>
    </section>
  );
};

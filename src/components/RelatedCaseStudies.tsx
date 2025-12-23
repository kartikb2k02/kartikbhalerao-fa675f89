import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CaseStudy, caseStudies } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface RelatedCaseStudiesProps {
  currentStudyId: string;
}

export const RelatedCaseStudies = ({ currentStudyId }: RelatedCaseStudiesProps) => {
  // Get related case studies (all except current)
  const relatedStudies = caseStudies.filter((study) => study.id !== currentStudyId);

  if (relatedStudies.length === 0) return null;

  return (
    <section className="relative py-16 mt-16 border-t border-border/50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Explore More</span>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
          Related Case Studies
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Discover more product work and design explorations
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {relatedStudies.map((study, index) => (
            <CarouselItem key={study.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <RelatedCaseStudyCard study={study} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <CarouselPrevious className="relative translate-x-0 translate-y-0 h-12 w-12 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-8 h-1 rounded-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
          </div>
          <CarouselNext className="relative translate-x-0 translate-y-0 h-12 w-12 rounded-full border-2 border-border bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg" />
        </div>
      </Carousel>
    </section>
  );
};

interface RelatedCaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const RelatedCaseStudyCard = ({ study, index }: RelatedCaseStudyCardProps) => {
  return (
    <Link
      to={`/case-studies/${study.id}`}
      className="group block h-full animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-full rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Image Container with enhanced clarity */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-80`} />
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
            style={{
              imageRendering: "auto",
              backfaceVisibility: "hidden",
            }}
          />
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '700ms' }} />
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-card via-card/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative p-5 -mt-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {study.tags.slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-background/80 backdrop-blur-sm border border-border/50"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {study.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {study.subtitle}
          </p>

          {/* CTA */}
          <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Corner accent */}
        <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br ${study.bgGradient} opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-lg transition-all duration-500`} />
      </div>
    </Link>
  );
};

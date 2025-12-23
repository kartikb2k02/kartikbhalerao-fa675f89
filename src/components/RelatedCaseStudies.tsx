import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CaseStudy, caseStudies } from "@/data/caseStudies";
import { Badge } from "@/components/ui/badge";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
interface RelatedCaseStudiesProps {
  currentStudyId: string;
}
export const RelatedCaseStudies = ({
  currentStudyId
}: RelatedCaseStudiesProps) => {
  // Get related case studies (all except current)
  const relatedStudies = caseStudies.filter(study => study.id !== currentStudyId);
  if (relatedStudies.length === 0) return null;
  return <section className="relative py-16 mt-16 border-t border-border/50">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Explore More</span>
        </div>
        
        <p className="text-muted-foreground max-w-md mx-auto">
          Discover more product work and design explorations
        </p>
      </div>

      {/* Carousel with Autoplay */}
      <Carousel opts={{
      align: "start",
      loop: true
    }} plugins={[Autoplay({
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true
    })]} className="w-full">
        <CarouselContent className="-ml-6">
          {relatedStudies.map((study, index) => <CarouselItem key={study.id} className="pl-6 md:basis-1/2">
              <RelatedCaseStudyCard study={study} index={index} />
            </CarouselItem>)}
        </CarouselContent>
        
        {/* Progress indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {relatedStudies.map((_, index) => {})}
        </div>
      </Carousel>
    </section>;
};
interface RelatedCaseStudyCardProps {
  study: CaseStudy;
  index: number;
}
const RelatedCaseStudyCard = ({
  study,
  index
}: RelatedCaseStudyCardProps) => {
  return <Link to={`/case-studies/${study.id}`} className="group block h-full animate-fade-in" style={{
    animationDelay: `${index * 100}ms`
  }}>
      <div className="relative h-full rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Taller Image Container for full image visibility */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${study.bgGradient} opacity-80`} />
          <img src={study.image} alt={study.title} className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700" style={{
          imageRendering: "auto",
          backfaceVisibility: "hidden"
        }} />
          
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{
          transitionDuration: '700ms'
        }} />
          
          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card via-card/80 to-transparent" />
          
          {/* Content overlay on image */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {study.tags.slice(0, 3).map(tag => <Badge key={tag} variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm border border-border/50">
                  {tag}
                </Badge>)}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
              {study.title}
            </h3>

            {/* Subtitle */}
            <p className="text-sm text-muted-foreground">
              {study.subtitle}
            </p>
          </div>
        </div>

        {/* CTA Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
          <ArrowRight className="w-4 h-4 text-primary" />
        </div>

        {/* Corner accent */}
        <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-br ${study.bgGradient} opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-lg transition-all duration-500`} />
      </div>
    </Link>;
};
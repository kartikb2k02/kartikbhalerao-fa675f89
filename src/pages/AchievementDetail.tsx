import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { getAchievementById } from "@/data/certifications";
import { ArrowLeft, Trophy, Zap, TrendingUp, Target, Users, Medal, Award, Star, CheckCircle, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Zap,
  TrendingUp,
  Target,
  Users,
  Medal,
  Award,
  Star,
};

const AchievementDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const achievement = id ? getAchievementById(id) : undefined;

  if (!achievement) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Achievement Not Found</h1>
          <p className="text-muted-foreground mb-8">The achievement you're looking for doesn't exist.</p>
          <Link to="/certifications" className="text-primary hover:underline">
            Back to Certifications & Achievements
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[achievement.icon] || Award;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 relative overflow-hidden">
      <Header />
      <AnimatedBackground intensity="light" />

      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/certifications")}
            className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Achievements</span>
          </button>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <IconComponent className="w-10 h-10" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 text-sm">
                  {achievement.category}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{achievement.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="font-semibold">{achievement.organization}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {achievement.year}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Description */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Achievement</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {achievement.detailedDescription}
              </p>
            </div>

            {/* Impact & Recognition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Impact & Results</h3>
                <p className="text-muted-foreground leading-relaxed">{achievement.impact}</p>
              </div>
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">Recognition</h3>
                <p className="text-muted-foreground leading-relaxed">{achievement.recognition}</p>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Highlights</h2>
              <div className="space-y-4">
                {achievement.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity"
              >
                <span>View All Achievements</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default AchievementDetail;

import { useParams, Link, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { getCertificationById, getAchievementById } from "@/data/certifications";
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

const CertificationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const certification = id ? getCertificationById(id) : undefined;

  if (!certification) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Certification Not Found</h1>
          <p className="text-muted-foreground mb-8">The certification you're looking for doesn't exist.</p>
          <Link to="/certifications" className="text-primary hover:underline">
            Back to Certifications
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[certification.icon] || Trophy;

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
            <span>Back to Certifications</span>
          </button>

          {/* Hero Section */}
          <div className={`bg-gradient-to-r ${certification.color} rounded-3xl p-8 md:p-12 text-white relative overflow-hidden mb-8`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <IconComponent className="w-10 h-10" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30 text-sm">
                  {certification.category}
                </Badge>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{certification.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <span className="font-semibold">{certification.issuer}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {certification.year}
                </div>
                <span>•</span>
                <span className="font-mono text-sm">ID: {certification.credentialId}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Certificate Image */}
            {certification.image && (
              <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Certificate</h2>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={certification.image} 
                    alt={`${certification.title} Certificate`}
                    className="w-full h-auto object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${certification.color} opacity-10`}></div>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Certification</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {certification.detailedDescription}
              </p>
            </div>

            {/* Skills */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Skills Covered</h2>
              <div className="flex flex-wrap gap-3">
                {certification.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Key Learnings */}
            <div className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Learnings</h2>
              <div className="space-y-4">
                {certification.keyLearnings.map((learning, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-2 bg-gradient-to-r ${certification.color} rounded-lg text-white`}>
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed pt-1">{learning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8">
              <Link
                to="/certifications"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl hover:opacity-90 transition-opacity"
              >
                <span>View All Certifications</span>
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

export default CertificationDetail;

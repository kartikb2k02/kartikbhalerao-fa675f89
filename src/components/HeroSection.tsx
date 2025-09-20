
import { useState, useEffect } from "react";
import { Linkedin, Github, ArrowDown, Sparkles, Target, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Hero Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Product Manager & Strategic Thinker
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="block text-foreground">Building Products That</span>
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Users Actually Love
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm <span className="font-semibold text-foreground">Kartik Bhalerao</span>, a Product Manager who transforms complex ideas into simple, 
              elegant solutions that drive real business impact and create exceptional user experiences.
            </p>
          </div>

          {/* Key Stats/Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto my-16">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
              <Target className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Strategy-First Approach</h3>
              <p className="text-sm text-muted-foreground">Data-driven decisions that align with business goals and user needs</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
              <Users className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">User-Centric Design</h3>
              <p className="text-sm text-muted-foreground">Building experiences that users love and businesses need</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">Innovation Focus</h3>
              <p className="text-sm text-muted-foreground">Turning cutting-edge ideas into market-ready products</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToWork}
              size="lg"
              className="h-12 px-8 text-base font-semibold"
            >
              View My Work
              <ArrowDown className="w-4 h-4 ml-2" />
            </Button>
            
            <Button 
              onClick={scrollToSkills}
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-semibold"
            >
              Explore Skills
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 pt-8">
            <a 
              href="https://linkedin.com/in/kartik-bhalerao" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="https://medium.com/@kartikbhalerao948" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:scale-110 transition-all duration-300"
            >
              <div className="w-5 h-5 bg-foreground rounded-full flex items-center justify-center">
                <span className="text-background text-xs font-bold">M</span>
              </div>
            </a>

            <a 
              href="https://github.com/kartikbh6614" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

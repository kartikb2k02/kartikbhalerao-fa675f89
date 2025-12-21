import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <AnimatedBackground intensity="rich" />

      {/* Additional floating geometric elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]" aria-hidden="true">
        {/* Animated gradient mesh */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-[5%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-3xl animate-float-slow" />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-accent/30 via-primary/15 to-transparent blur-3xl animate-float [animation-delay:-3s]" />
          <div className="absolute top-[40%] left-[60%] w-[350px] h-[350px] rounded-full bg-gradient-to-r from-primary/20 to-accent/25 blur-3xl animate-morph [animation-delay:-5s]" />
        </div>

        {/* Floating cards/shapes */}
        <div className="absolute top-[12%] right-[8%] w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-xl shadow-2xl animate-float-slow rotate-12" />
        <div className="absolute top-[30%] left-[5%] w-20 h-20 rounded-2xl bg-gradient-to-tr from-accent/15 to-primary/10 border border-accent/20 backdrop-blur-lg shadow-xl animate-float [animation-delay:-2s] -rotate-6" />
        <div className="absolute bottom-[25%] right-[15%] w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent border border-primary/15 backdrop-blur-md shadow-lg animate-float-slower [animation-delay:-4s]" />
        <div className="absolute bottom-[40%] left-[12%] w-16 h-16 rounded-xl bg-gradient-to-tl from-accent/20 to-primary/15 border border-accent/15 backdrop-blur-lg shadow-md animate-float [animation-delay:-1s] rotate-45" />

        {/* Animated lines/beams */}
        <div className="absolute top-0 left-[30%] w-px h-[45%] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-[35%] w-px h-[35%] bg-gradient-to-b from-accent/30 via-accent/15 to-transparent animate-pulse [animation-delay:-1s]" />
        <div className="absolute top-0 left-[65%] w-px h-[55%] bg-gradient-to-b from-primary/25 via-transparent to-transparent animate-pulse [animation-delay:-2s]" />

        {/* Glowing orbs */}
        <div className="absolute top-[20%] left-[45%] w-4 h-4 rounded-full bg-primary/60 shadow-[0_0_20px_8px_hsl(var(--primary)/0.3)] animate-glow-pulse" />
        <div className="absolute top-[55%] right-[25%] w-3 h-3 rounded-full bg-accent/60 shadow-[0_0_15px_6px_hsl(var(--accent)/0.25)] animate-glow-pulse [animation-delay:-1.5s]" />
        <div className="absolute bottom-[35%] left-[35%] w-3 h-3 rounded-full bg-primary/50 shadow-[0_0_18px_7px_hsl(var(--primary)/0.25)] animate-glow-pulse [animation-delay:-3s]" />
        <div className="absolute top-[70%] left-[70%] w-2 h-2 rounded-full bg-accent/50 shadow-[0_0_12px_5px_hsl(var(--accent)/0.2)] animate-glow-pulse [animation-delay:-2s]" />

        {/* Subtle particle dots */}
        <div className="absolute top-[15%] left-[55%] w-1.5 h-1.5 rounded-full bg-primary/40 animate-float-slow" />
        <div className="absolute top-[45%] left-[8%] w-2 h-2 rounded-full bg-accent/35 animate-float [animation-delay:-2s]" />
        <div className="absolute bottom-[20%] right-[40%] w-1.5 h-1.5 rounded-full bg-primary/45 animate-float-slower [animation-delay:-1s]" />
        <div className="absolute top-[65%] right-[8%] w-2 h-2 rounded-full bg-accent/40 animate-float [animation-delay:-3s]" />

        {/* Decorative rings */}
        <div className="absolute top-[35%] right-[5%] w-40 h-40 rounded-full border border-primary/10 animate-spin-slow opacity-50" />
        <div className="absolute bottom-[15%] left-[8%] w-28 h-28 rounded-full border border-accent/10 animate-spin-slow [animation-direction:reverse] opacity-40" />
      </div>

      <Header />
      <main className="pt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <CaseStudiesSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default CaseStudies;

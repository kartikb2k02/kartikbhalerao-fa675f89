import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
  /** Intensity of background elements (light | medium | rich) */
  intensity?: "light" | "medium" | "rich";
}

/**
 * Unified animated background using semantic design tokens.
 * Automatically adapts to dark/light mode via CSS variables.
 */
export const AnimatedBackground = ({
  className,
  intensity = "medium",
}: AnimatedBackgroundProps) => {
  const orbOpacity =
    intensity === "light" ? "opacity-30" : intensity === "rich" ? "opacity-60" : "opacity-40";

  return (
    <div
      className={cn("fixed inset-0 pointer-events-none overflow-hidden z-0", className)}
      aria-hidden="true"
    >
      {/* Morphing gradient blobs */}
      <div
        className={cn(
          "absolute top-[10%] left-[10%] w-[35rem] h-[35rem] blur-3xl animate-morph",
          "bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10",
          orbOpacity
        )}
      />
      <div
        className={cn(
          "absolute bottom-[20%] right-[5%] w-[30rem] h-[30rem] blur-3xl animate-morph",
          "bg-gradient-to-tr from-accent/15 via-primary/20 to-accent/10",
          orbOpacity,
          "[animation-delay:-4s]"
        )}
      />
      <div
        className={cn(
          "absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] blur-3xl animate-glow-pulse",
          "bg-gradient-radial from-primary/15 via-transparent to-transparent",
          orbOpacity
        )}
      />

      {/* Floating geometric shapes with glassmorphism */}
      <div
        className={cn(
          "absolute top-[15%] left-[8%] w-24 h-24 rounded-2xl animate-float-slow",
          "bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/20",
          "backdrop-blur-md shadow-xl"
        )}
      />
      <div
        className={cn(
          "absolute top-[25%] right-[12%] w-16 h-16 rounded-full animate-float",
          "bg-gradient-to-br from-accent/20 to-primary/10 border border-accent/20",
          "backdrop-blur-md shadow-lg",
          "[animation-delay:-2s]"
        )}
      />
      <div
        className={cn(
          "absolute bottom-[30%] left-[15%] w-20 h-20 rounded-xl rotate-45 animate-float-slower",
          "bg-gradient-to-br from-primary/10 to-accent/15 border border-primary/15",
          "backdrop-blur-md shadow-md",
          "[animation-delay:-4s]"
        )}
      />
      <div
        className={cn(
          "absolute bottom-[15%] right-[20%] w-14 h-14 rounded-lg animate-float",
          "bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15",
          "backdrop-blur-md shadow-lg",
          "[animation-delay:-1s]"
        )}
      />

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[200px] h-[200px]">
          <div className="absolute w-3 h-3 rounded-full bg-primary/50 animate-orbit" />
          <div className="absolute w-2 h-2 rounded-full bg-accent/50 animate-orbit [animation-delay:-5s] [animation-duration:15s]" />
          <div className="absolute w-2 h-2 rounded-full bg-primary/40 animate-orbit [animation-delay:-10s] [animation-duration:25s]" />
        </div>
      </div>

      {/* Scattered glowing dots */}
      <div className="absolute top-[20%] left-[40%] w-2 h-2 rounded-full bg-primary/60 animate-glow-pulse" />
      <div className="absolute top-[60%] left-[25%] w-1.5 h-1.5 rounded-full bg-accent/60 animate-glow-pulse [animation-delay:-1s]" />
      <div className="absolute top-[35%] right-[30%] w-2 h-2 rounded-full bg-primary/50 animate-glow-pulse [animation-delay:-2s]" />
      <div className="absolute bottom-[40%] right-[15%] w-1.5 h-1.5 rounded-full bg-accent/50 animate-glow-pulse [animation-delay:-3s]" />
      <div className="absolute top-[75%] left-[60%] w-2 h-2 rounded-full bg-primary/40 animate-glow-pulse [animation-delay:-2.5s]" />

      {/* Subtle grid pattern with fade */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.04)_1px,transparent_1px)]",
          "bg-[size:80px_80px]",
          "[mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]"
        )}
      />

      {/* Gradient light beams */}
      <div className="absolute top-0 left-[20%] w-[2px] h-[60%] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent rotate-[15deg] origin-top" />
      <div className="absolute top-0 right-[25%] w-[2px] h-[50%] bg-gradient-to-b from-accent/25 via-accent/8 to-transparent -rotate-[10deg] origin-top" />
      <div className="absolute top-0 left-[55%] w-px h-[70%] bg-gradient-to-b from-primary/20 via-transparent to-transparent" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </div>
  );
};

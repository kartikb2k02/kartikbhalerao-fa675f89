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
    intensity === "light" ? "opacity-40" : intensity === "rich" ? "opacity-70" : "opacity-50";

  return (
    <div
      className={cn("fixed inset-0 pointer-events-none overflow-hidden z-0", className)}
      aria-hidden="true"
    >
      {/* Gradient orbs using primary color tokens */}
      <div
        className={cn(
          "absolute top-1/4 left-1/6 w-[28rem] h-[28rem] rounded-full blur-3xl animate-pulse",
          "bg-gradient-to-r from-primary/15 via-primary/10 to-primary/5",
          orbOpacity
        )}
        style={{ animationDuration: "6s" }}
      />
      <div
        className={cn(
          "absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse",
          "bg-gradient-to-r from-primary/10 via-accent/10 to-primary/5",
          orbOpacity,
          "[animation-delay:2s]"
        )}
        style={{ animationDuration: "8s" }}
      />
      <div
        className={cn(
          "absolute top-2/3 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse",
          "bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10",
          orbOpacity,
          "[animation-delay:4s]"
        )}
        style={{ animationDuration: "10s" }}
      />

      {/* Floating geometric elements */}
      <div
        className={cn(
          "absolute top-20 left-20 w-28 h-28 rounded-3xl rotate-12 animate-float-slow",
          "bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-xl"
        )}
      />
      <div
        className={cn(
          "absolute top-40 right-24 w-20 h-20 rounded-2xl rotate-45 animate-float",
          "bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-lg",
          "[animation-delay:1s]"
        )}
      />
      <div
        className={cn(
          "absolute bottom-40 left-1/4 w-16 h-16 rounded-xl -rotate-12 animate-float-slower",
          "bg-primary/10 border border-primary/20 backdrop-blur-sm shadow-md",
          "[animation-delay:2s]"
        )}
      />

      {/* Small floating particles */}
      <div className="absolute top-[15%] left-1/3 w-2 h-2 rounded-full bg-primary/40 animate-bounce animate-float" />
      <div className="absolute bottom-1/4 left-[20%] w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:1s] animate-float-slow" />
      <div className="absolute top-2/3 right-[20%] w-2 h-2 rounded-full bg-primary/40 animate-bounce [animation-delay:2s] animate-float-slower" />

      {/* Subtle grid pattern */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)]",
          "bg-[size:64px_64px]",
          "[mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]"
        )}
      />

      {/* Light beams */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent" />
    </div>
  );
};

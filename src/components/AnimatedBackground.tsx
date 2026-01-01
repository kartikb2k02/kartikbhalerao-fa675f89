import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
  intensity?: "light" | "medium" | "rich";
}

/**
 * Premium animated background with aurora, mesh gradients, and particle effects.
 */
export const AnimatedBackground = ({
  className,
  intensity = "medium",
}: AnimatedBackgroundProps) => {
  const intensityMultiplier = intensity === "light" ? 0.5 : intensity === "rich" ? 1.2 : 1;

  return (
    <div
      className={cn("fixed inset-0 pointer-events-none overflow-hidden z-0", className)}
      aria-hidden="true"
    >
      {/* Aurora gradient layer */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 w-[150vmax] h-[150vmax] animate-aurora"
          style={{
            background: `conic-gradient(from 180deg at 50% 50%, 
              hsl(var(--primary) / ${0.15 * intensityMultiplier}) 0deg, 
              hsl(var(--accent) / ${0.1 * intensityMultiplier}) 60deg, 
              hsl(var(--primary) / ${0.2 * intensityMultiplier}) 120deg, 
              hsl(var(--secondary) / ${0.08 * intensityMultiplier}) 180deg, 
              hsl(var(--primary) / ${0.12 * intensityMultiplier}) 240deg, 
              hsl(var(--accent) / ${0.15 * intensityMultiplier}) 300deg, 
              hsl(var(--primary) / ${0.1 * intensityMultiplier}) 360deg)`,
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Animated mesh gradient blobs */}
      <div 
        className="absolute top-[5%] left-[10%] w-[40rem] h-[40rem] rounded-full animate-mesh-flow blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsl(var(--primary) / ${0.25 * intensityMultiplier}) 0%, 
            hsl(var(--primary) / ${0.1 * intensityMultiplier}) 40%, 
            transparent 70%)`,
        }}
      />
      <div 
        className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] rounded-full animate-mesh-flow blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsl(var(--accent) / ${0.2 * intensityMultiplier}) 0%, 
            hsl(var(--primary) / ${0.08 * intensityMultiplier}) 50%, 
            transparent 70%)`,
          animationDelay: '-7s',
        }}
      />
      <div 
        className="absolute top-[40%] right-[20%] w-[30rem] h-[30rem] rounded-full animate-mesh-flow blur-3xl"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsl(var(--secondary) / ${0.15 * intensityMultiplier}) 0%, 
            hsl(var(--accent) / ${0.1 * intensityMultiplier}) 40%, 
            transparent 70%)`,
          animationDelay: '-14s',
        }}
      />

      {/* Glowing orbs with pulse rings */}
      <div className="absolute top-[20%] left-[15%]">
        <div 
          className="w-4 h-4 rounded-full animate-glow-pulse"
          style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' }}
        />
        <div 
          className="absolute inset-0 w-4 h-4 rounded-full border border-primary/40 animate-pulse-ring"
        />
      </div>
      <div className="absolute top-[60%] left-[70%]">
        <div 
          className="w-3 h-3 rounded-full animate-glow-pulse"
          style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 15px hsl(var(--primary) / 0.5)', animationDelay: '-2s' }}
        />
        <div 
          className="absolute inset-0 w-3 h-3 rounded-full border border-primary/30 animate-pulse-ring"
          style={{ animationDelay: '-1s' }}
        />
      </div>
      <div className="absolute top-[35%] right-[8%]">
        <div 
          className="w-5 h-5 rounded-full animate-glow-pulse"
          style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 25px hsl(var(--primary) / 0.7)', animationDelay: '-3s' }}
        />
        <div 
          className="absolute inset-0 w-5 h-5 rounded-full border border-primary/50 animate-pulse-ring"
          style={{ animationDelay: '-0.5s' }}
        />
      </div>


      {/* Floating geometric shapes with glass effect */}
      <div
        className="absolute top-[18%] left-[5%] w-20 h-20 rounded-2xl animate-float-slow backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--accent) / 0.05) 100%)',
          border: '1px solid hsl(var(--primary) / 0.2)',
          boxShadow: '0 8px 32px hsl(var(--primary) / 0.1)',
        }}
      />
      <div
        className="absolute top-[30%] right-[10%] w-16 h-16 rounded-full animate-float backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)',
          border: '1px solid hsl(var(--primary) / 0.15)',
          boxShadow: '0 8px 32px hsl(var(--primary) / 0.08)',
          animationDelay: '-3s',
        }}
      />
      <div
        className="absolute bottom-[25%] left-[12%] w-14 h-14 rotate-45 rounded-xl animate-float-slower backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--secondary) / 0.1) 100%)',
          border: '1px solid hsl(var(--primary) / 0.1)',
          boxShadow: '0 8px 32px hsl(var(--primary) / 0.06)',
          animationDelay: '-5s',
        }}
      />
      <div
        className="absolute bottom-[35%] right-[18%] w-12 h-12 rounded-lg animate-float backdrop-blur-sm"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--secondary) / 0.1) 0%, hsl(var(--primary) / 0.08) 100%)',
          border: '1px solid hsl(var(--secondary) / 0.15)',
          boxShadow: '0 8px 32px hsl(var(--secondary) / 0.1)',
          animationDelay: '-2s',
        }}
      />

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-[300px] h-[300px]">
          <div 
            className="absolute w-2 h-2 rounded-full animate-orbit"
            style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 10px hsl(var(--primary) / 0.8)' }}
          />
          <div 
            className="absolute w-1.5 h-1.5 rounded-full animate-orbit"
            style={{ 
              background: 'hsl(var(--primary) / 0.7)', 
              boxShadow: '0 0 8px hsl(var(--primary) / 0.6)',
              animationDelay: '-7s',
              animationDuration: '25s'
            }}
          />
          <div 
            className="absolute w-2.5 h-2.5 rounded-full animate-orbit"
            style={{ 
              background: 'hsl(var(--primary) / 0.5)', 
              boxShadow: '0 0 12px hsl(var(--primary) / 0.5)',
              animationDelay: '-14s',
              animationDuration: '35s'
            }}
          />
        </div>
      </div>

      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />


      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(to top, hsl(var(--background)), hsl(var(--background) / 0.5) 50%, transparent)',
        }}
      />

      {/* Top vignette */}
      <div 
        className="absolute top-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--background) / 0.3), transparent)',
        }}
      />
    </div>
  );
};

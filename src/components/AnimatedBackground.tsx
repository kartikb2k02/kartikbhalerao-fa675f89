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

      {/* Constellation points with connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 * intensityMultiplier }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Connection lines */}
        <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="70%" y1="30%" x2="85%" y2="45%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="60%" y1="70%" x2="75%" y2="60%" stroke="url(#lineGradient)" strokeWidth="1" />
        <line x1="15%" y1="75%" x2="30%" y2="65%" stroke="url(#lineGradient)" strokeWidth="1" />
        
        {/* Constellation nodes */}
        <circle cx="10%" cy="20%" r="2" fill="hsl(var(--primary))" className="animate-constellation" />
        <circle cx="25%" cy="35%" r="3" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-2s' }} />
        <circle cx="40%" cy="25%" r="2" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-4s' }} />
        <circle cx="70%" cy="30%" r="2.5" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-1s' }} />
        <circle cx="85%" cy="45%" r="2" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-3s' }} />
        <circle cx="60%" cy="70%" r="3" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-5s' }} />
        <circle cx="75%" cy="60%" r="2" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-6s' }} />
        <circle cx="15%" cy="75%" r="2.5" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-7s' }} />
        <circle cx="30%" cy="65%" r="2" fill="hsl(var(--primary))" className="animate-constellation" style={{ animationDelay: '-8s' }} />
      </svg>

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

      {/* Gradient mesh grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.03) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 70%)',
        }}
      />

      {/* Soft light beams */}
      <div 
        className="absolute top-0 left-[15%] w-[1px] h-[70%] origin-top"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.05) 50%, transparent)',
          transform: 'rotate(10deg)',
        }}
      />
      <div 
        className="absolute top-0 right-[20%] w-[1px] h-[55%] origin-top"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.15), transparent 60%)',
          transform: 'rotate(-8deg)',
        }}
      />
      <div 
        className="absolute top-0 left-[45%] w-[1px] h-[80%] origin-top"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.1), transparent 70%)',
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

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface AnimatedBackgroundProps {
  className?: string;
  intensity?: "light" | "medium" | "rich";
}

/**
 * Premium animated background with aurora, mesh gradients, parallax, and particle effects.
 */
export const AnimatedBackground = ({
  className,
  intensity = "medium",
}: AnimatedBackgroundProps) => {
  const intensityMultiplier = intensity === "light" ? 0.5 : intensity === "rich" ? 1.2 : 1;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Trigger load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const parallax = (factor: number) => ({
    transform: `translate(${mousePosition.x * factor}px, ${mousePosition.y * factor}px)`,
  });

  return (
    <div
      ref={containerRef}
      className={cn("fixed inset-0 pointer-events-none overflow-hidden z-0", className)}
      aria-hidden="true"
    >
      {/* Aurora gradient layer with parallax */}
      <div className="absolute inset-0 transition-transform duration-300 ease-out" style={parallax(15)}>
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

      {/* Animated mesh gradient blobs with parallax */}
      <div 
        className="absolute top-[5%] left-[10%] w-[40rem] h-[40rem] rounded-full animate-mesh-flow blur-3xl transition-transform duration-500 ease-out"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsl(var(--primary) / ${0.25 * intensityMultiplier}) 0%, 
            hsl(var(--primary) / ${0.1 * intensityMultiplier}) 40%, 
            transparent 70%)`,
          ...parallax(25),
        }}
      />
      <div 
        className="absolute bottom-[10%] right-[5%] w-[35rem] h-[35rem] rounded-full animate-mesh-flow blur-3xl transition-transform duration-500 ease-out"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsl(var(--accent) / ${0.2 * intensityMultiplier}) 0%, 
            hsl(var(--primary) / ${0.08 * intensityMultiplier}) 50%, 
            transparent 70%)`,
          animationDelay: '-7s',
          ...parallax(-20),
        }}
      />
      <div 
        className="absolute top-[40%] right-[20%] w-[30rem] h-[30rem] rounded-full animate-mesh-flow blur-3xl transition-transform duration-500 ease-out"
        style={{
          background: `radial-gradient(ellipse at center, 
            hsl(var(--secondary) / ${0.15 * intensityMultiplier}) 0%, 
            hsl(var(--accent) / ${0.1 * intensityMultiplier}) 40%, 
            transparent 70%)`,
          animationDelay: '-14s',
          ...parallax(18),
        }}
      />

      {/* Glowing orbs with pulse rings and parallax */}
      <div className="absolute top-[20%] left-[15%] transition-transform duration-300 ease-out" style={parallax(35)}>
        <div 
          className="w-4 h-4 rounded-full animate-glow-pulse"
          style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 20px hsl(var(--primary) / 0.6)' }}
        />
        <div 
          className="absolute inset-0 w-4 h-4 rounded-full border border-primary/40 animate-pulse-ring"
        />
      </div>
      <div className="absolute top-[60%] left-[70%] transition-transform duration-300 ease-out" style={parallax(-30)}>
        <div 
          className="w-3 h-3 rounded-full animate-glow-pulse"
          style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 15px hsl(var(--primary) / 0.5)', animationDelay: '-2s' }}
        />
        <div 
          className="absolute inset-0 w-3 h-3 rounded-full border border-primary/30 animate-pulse-ring"
          style={{ animationDelay: '-1s' }}
        />
      </div>
      <div className="absolute top-[35%] right-[8%] transition-transform duration-300 ease-out" style={parallax(40)}>
        <div 
          className="w-5 h-5 rounded-full animate-glow-pulse"
          style={{ background: 'hsl(var(--primary))', boxShadow: '0 0 25px hsl(var(--primary) / 0.7)', animationDelay: '-3s' }}
        />
        <div 
          className="absolute inset-0 w-5 h-5 rounded-full border border-primary/50 animate-pulse-ring"
          style={{ animationDelay: '-0.5s' }}
        />
      </div>

      {/* Constellation with animated drawing lines */}
      <svg 
        className="absolute inset-0 w-full h-full transition-transform duration-400 ease-out" 
        style={{ opacity: 0.4 * intensityMultiplier, ...parallax(12) }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated connection lines with drawing effect */}
        <line 
          x1="10%" y1="20%" x2="25%" y2="35%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 0.2s',
          }}
        />
        <line 
          x1="25%" y1="35%" x2="40%" y2="25%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 0.5s',
          }}
        />
        <line 
          x1="40%" y1="25%" x2="55%" y2="40%" 
          stroke="url(#lineGradient2)" 
          strokeWidth="1"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 0.8s',
          }}
        />
        <line 
          x1="70%" y1="30%" x2="85%" y2="45%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 0.4s',
          }}
        />
        <line 
          x1="85%" y1="45%" x2="75%" y2="60%" 
          stroke="url(#lineGradient2)" 
          strokeWidth="1"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 0.7s',
          }}
        />
        <line 
          x1="60%" y1="70%" x2="75%" y2="60%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 0.6s',
          }}
        />
        <line 
          x1="15%" y1="75%" x2="30%" y2="65%" 
          stroke="url(#lineGradient)" 
          strokeWidth="1.5"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 0.9s',
          }}
        />
        <line 
          x1="30%" y1="65%" x2="45%" y2="75%" 
          stroke="url(#lineGradient2)" 
          strokeWidth="1"
          strokeLinecap="round"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: isLoaded ? '0' : '200',
            transition: 'stroke-dashoffset 1.5s ease-out 1.1s',
          }}
        />
        
        {/* Constellation nodes with fade-in */}
        <circle 
          cx="10%" cy="20%" r="3" 
          fill="hsl(var(--primary))" 
          className="animate-constellation"
          style={{ 
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.2s',
          }}
        />
        <circle 
          cx="25%" cy="35%" r="4" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-2s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.4s',
          }}
        />
        <circle 
          cx="40%" cy="25%" r="2.5" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-4s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.6s',
          }}
        />
        <circle 
          cx="55%" cy="40%" r="2" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-5s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.8s',
          }}
        />
        <circle 
          cx="70%" cy="30%" r="3" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-1s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.3s',
          }}
        />
        <circle 
          cx="85%" cy="45%" r="2.5" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-3s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.5s',
          }}
        />
        <circle 
          cx="75%" cy="60%" r="2" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-6s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.7s',
          }}
        />
        <circle 
          cx="60%" cy="70%" r="3.5" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-5s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.6s',
          }}
        />
        <circle 
          cx="15%" cy="75%" r="3" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-7s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.9s',
          }}
        />
        <circle 
          cx="30%" cy="65%" r="2.5" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-8s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 0.8s',
          }}
        />
        <circle 
          cx="45%" cy="75%" r="2" 
          fill="hsl(var(--primary))" 
          className="animate-constellation" 
          style={{ 
            animationDelay: '-4s',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-out 1s',
          }}
        />
      </svg>

      {/* Floating geometric shapes with glass effect and parallax */}
      <div
        className="absolute top-[18%] left-[5%] w-20 h-20 rounded-2xl animate-float-slow backdrop-blur-sm transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--accent) / 0.05) 100%)',
          border: '1px solid hsl(var(--primary) / 0.2)',
          boxShadow: '0 8px 32px hsl(var(--primary) / 0.1)',
          ...parallax(45),
        }}
      />
      <div
        className="absolute top-[30%] right-[10%] w-16 h-16 rounded-full animate-float backdrop-blur-sm transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--accent) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)',
          border: '1px solid hsl(var(--primary) / 0.15)',
          boxShadow: '0 8px 32px hsl(var(--primary) / 0.08)',
          animationDelay: '-3s',
          ...parallax(-35),
        }}
      />
      <div
        className="absolute bottom-[25%] left-[12%] w-14 h-14 rotate-45 rounded-xl animate-float-slower backdrop-blur-sm transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.08) 0%, hsl(var(--secondary) / 0.1) 100%)',
          border: '1px solid hsl(var(--primary) / 0.1)',
          boxShadow: '0 8px 32px hsl(var(--primary) / 0.06)',
          animationDelay: '-5s',
          ...parallax(50),
        }}
      />
      <div
        className="absolute bottom-[35%] right-[18%] w-12 h-12 rounded-lg animate-float backdrop-blur-sm transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--secondary) / 0.1) 0%, hsl(var(--primary) / 0.08) 100%)',
          border: '1px solid hsl(var(--secondary) / 0.15)',
          boxShadow: '0 8px 32px hsl(var(--secondary) / 0.1)',
          animationDelay: '-2s',
          ...parallax(-40),
        }}
      />

      {/* Orbiting particles with parallax */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out" style={parallax(8)}>
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

      {/* Soft light beams with parallax */}
      <div 
        className="absolute top-0 left-[15%] w-[1px] h-[70%] origin-top transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.2), hsl(var(--primary) / 0.05) 50%, transparent)',
          transform: `rotate(10deg) translateX(${mousePosition.x * 5}px)`,
        }}
      />
      <div 
        className="absolute top-0 right-[20%] w-[1px] h-[55%] origin-top transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.15), transparent 60%)',
          transform: `rotate(-8deg) translateX(${mousePosition.x * -3}px)`,
        }}
      />
      <div 
        className="absolute top-0 left-[45%] w-[1px] h-[80%] origin-top transition-transform duration-500 ease-out"
        style={{
          background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.1), transparent 70%)',
          transform: `translateX(${mousePosition.x * 2}px)`,
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

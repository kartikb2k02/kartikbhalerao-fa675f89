// Real brand logos
const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" fill="none" className="w-full h-full">
    <path d="M19 28.5c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5S19 33.75 19 28.5z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19v9.5c0 5.25-4.25 9.5-9.5 9.5S0 52.75 0 47.5z" fill="#0ACF83"/>
    <path d="M0 9.5C0 4.25 4.25 0 9.5 0H19v19H9.5C4.25 19 0 14.75 0 9.5z" fill="#F24E1E"/>
    <path d="M19 0h9.5C33.75 0 38 4.25 38 9.5S33.75 19 28.5 19H19V0z" fill="#FF7262"/>
    <path d="M0 28.5c0-5.25 4.25-9.5 9.5-9.5H19v19H9.5C4.25 38 0 33.75 0 28.5z" fill="#A259FF"/>
  </svg>
);

const GitHubLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M16 2C8.27 2 2 8.27 2 16c0 6.19 4.01 11.43 9.57 13.28.7.13.96-.3.96-.67v-2.35c-3.89.85-4.72-1.87-4.72-1.87-.63-1.62-1.55-2.04-1.55-2.04-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.27 1.52 4.07 1.16.13-.9.49-1.52.89-1.87-3.1-.35-6.37-1.55-6.37-6.9 0-1.52.54-2.77 1.43-3.74-.14-.35-.62-1.77.14-3.69 0 0 1.17-.37 3.83 1.43A13.3 13.3 0 0 1 16 9.15c1.18.01 2.37.16 3.48.47 2.65-1.8 3.82-1.43 3.82-1.43.76 1.92.28 3.34.14 3.69.89.97 1.43 2.22 1.43 3.74 0 5.36-3.27 6.54-6.39 6.88.5.43.95 1.29.95 2.6v3.85c0 .37.25.81.96.67C25.99 27.43 30 22.19 30 16 30 8.27 23.73 2 16 2Z"
      fill="white"/>
  </svg>
);

const TerminalLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="6" fill="#0D1117"/>
    <path d="M7 11l5.5 5-5.5 5" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="21" x2="25" y2="21" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// MCP = Model Context Protocol — stylised as interlocking nodes
const MCPLogo = () => (
  <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
    <rect width="32" height="32" rx="6" fill="#D4A27F"/>
    <circle cx="16" cy="16" r="4" fill="#1a0800"/>
    <line x1="16" y1="12" x2="16" y2="5"  stroke="#1a0800" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="16" y1="20" x2="16" y2="27" stroke="#1a0800" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="12.5" y1="13.5" x2="6.5"  y2="9.5"  stroke="#1a0800" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="19.5" y1="18.5" x2="25.5" y2="22.5" stroke="#1a0800" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="19.5" y1="13.5" x2="25.5" y2="9.5"  stroke="#1a0800" strokeWidth="2.2" strokeLinecap="round"/>
    <line x1="12.5" y1="18.5" x2="6.5"  y2="22.5" stroke="#1a0800" strokeWidth="2.2" strokeLinecap="round"/>
  </svg>
);

const tools = [
  { label: "Figma",    Logo: FigmaLogo,    bg: "rgba(255,255,255,0.12)", border: "rgba(255,255,255,0.18)" },
  { label: "GitHub",   Logo: GitHubLogo,   bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.14)" },
  { label: "Terminal", Logo: TerminalLogo, bg: "rgba(255,255,255,0.08)", border: "rgba(74,222,128,0.25)"  },
  { label: "MCP",      Logo: MCPLogo,      bg: "rgba(255,255,255,0.08)", border: "rgba(212,162,127,0.35)" },
];

export const FigPRDCardBanner = () => (
  <div
    className="w-full h-full relative overflow-hidden flex flex-col justify-between px-7 py-5"
    style={{ fontFamily: "'Inter', sans-serif", background: "#0b1730" }}
  >
    {/* ── BACKGROUND LAYERS ── */}

    {/* Blue radial base */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "radial-gradient(ellipse 120% 80% at 60% 0%, rgba(37,99,235,0.35) 0%, transparent 65%)",
    }}/>

    {/* Figma-colour wash — bottom left */}
    <div className="absolute pointer-events-none" style={{
      bottom: "-30%", left: "-10%",
      width: 320, height: 260,
      background: "radial-gradient(ellipse, rgba(162,89,255,0.18) 0%, rgba(27,188,254,0.10) 45%, transparent 70%)",
      filter: "blur(12px)",
    }}/>

    {/* Subtle dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
      backgroundSize: "22px 22px",
    }}/>

    {/* ── TOP ROW ── */}
    <div className="relative z-10 flex items-center justify-between mt-1">
      {/* Name + badge */}
      <div className="flex items-center gap-2.5">
        <div style={{
          width: 28, height: 28, borderRadius: 8,
          background: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.18)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 900, color: "#fff",
        }}>⌘</div>
        <span style={{ fontWeight: 800, fontSize: 13, color: "#fff", letterSpacing: "-0.01em" }}>figprd</span>
        <span style={{
          fontSize: 7, fontWeight: 800,
          color: "rgba(255,255,255,0.45)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 20, padding: "2px 8px",
          letterSpacing: "0.12em", textTransform: "uppercase",
          background: "rgba(255,255,255,0.06)",
        }}>PM AGENT</span>
      </div>

      {/* GitHub chip */}
      <div className="flex items-center gap-1.5" style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 8, padding: "3px 10px",
      }}>
        <div style={{ width: 13, height: 13, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
          <GitHubLogo />
        </div>
        <span style={{ fontSize: 8.5, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>Open on GitHub</span>
      </div>
    </div>

    {/* ── HEADLINE ── */}
    <div className="relative z-10">
      <h3 style={{
        fontSize: 27, fontWeight: 900, color: "#ffffff",
        lineHeight: 1.12, letterSpacing: "-0.04em", margin: 0,
      }}>
        Figma designs<br/>
        <span style={{
          background: "linear-gradient(90deg, #60A5FA 0%, #A78BFA 60%, #1ABCFE 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>→ PRD, instantly.</span>
      </h3>
    </div>

    {/* ── TOOLS ROW ── */}
    <div className="relative z-10 flex items-center gap-2">
      {tools.map(({ label, Logo, bg, border }) => (
        <div key={label} className="flex items-center gap-1.5" style={{
          background: bg,
          border: `1px solid ${border}`,
          borderRadius: 8,
          padding: "4px 9px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        }}>
          <div style={{ width: 13, height: 13, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
            <Logo />
          </div>
          <span style={{ fontSize: 8.5, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{label}</span>
        </div>
      ))}

      {/* Arrow */}
      <svg width="22" height="10" viewBox="0 0 22 10" fill="none" className="ml-1">
        <line x1="0" y1="5" x2="14" y2="5" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 2"/>
        <path d="M12 2.5l4 2.5-4 2.5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* PRD output chip */}
      <span style={{
        fontSize: 9, fontWeight: 800,
        color: "#fff",
        border: "1px solid rgba(96,165,250,0.5)",
        borderRadius: 6,
        padding: "4px 10px",
        background: "linear-gradient(135deg, rgba(37,99,235,0.4), rgba(109,40,217,0.3))",
        letterSpacing: "0.04em",
        boxShadow: "0 0 12px rgba(96,165,250,0.2)",
      }}>PRD</span>
    </div>

    {/* ── FOOTER ── */}
    <div className="relative z-10 flex items-center">
      <div className="flex items-center gap-2">
        <div style={{ width: 16, height: 1, background: "rgba(255,255,255,0.12)" }}/>
        <span style={{ fontSize: 7.5, fontWeight: 600, color: "rgba(255,255,255,0.28)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
          Kartik Bhalerao
        </span>
      </div>
    </div>
  </div>
);

// ── Brand logos ───────────────────────────────────────────────────────────────

const FigmaLogo = () => (
  <svg viewBox="0 0 38 57" fill="none" className="w-full h-full">
    <path d="M19 28.5c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5-4.25 9.5-9.5 9.5S19 33.75 19 28.5z" fill="#1ABCFE"/>
    <path d="M0 47.5C0 42.25 4.25 38 9.5 38H19v9.5c0 5.25-4.25 9.5-9.5 9.5S0 52.75 0 47.5z" fill="#0ACF83"/>
    <path d="M0 9.5C0 4.25 4.25 0 9.5 0H19v19H9.5C4.25 19 0 14.75 0 9.5z" fill="#F24E1E"/>
    <path d="M19 0h9.5C33.75 0 38 4.25 38 9.5S33.75 19 28.5 19H19V0z" fill="#FF7262"/>
    <path d="M0 28.5c0-5.25 4.25-9.5 9.5-9.5H19v19H9.5C4.25 38 0 33.75 0 28.5z" fill="#A259FF"/>
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <rect width="100" height="100" rx="14" fill="white" stroke="#e5e5e5" strokeWidth="3"/>
    <path d="M22 18c0 0 6.5 0.5 9.5 2.5l34 46.5V22c0-2-1-3.5-5-4l-2-0.5V16h28v1.5l-2.5 0.5c-3 0.5-4.5 2-4.5 4.5v57.5l-3.5 1-41-55.5V77c0 2 1 3.5 5.5 4l2.5 0.5V83H14v-1.5l3-0.5c3.5-0.5 5-2 5-5V24c0-2-1-3.5-5-4L14 19.5V18H22z" fill="#0a0a0a"/>
  </svg>
);

const ClaudeLogo = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <rect width="100" height="100" rx="20" fill="#D4A27F"/>
    <g transform="translate(50,50)">
      {([0,30,60,90,120,150] as number[]).map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x2 = Math.round(Math.cos(rad) * 28 * 100) / 100;
        const y2 = Math.round(Math.sin(rad) * 28 * 100) / 100;
        return <line key={i} x1="0" y1="0" x2={x2} y2={y2} stroke="#1a0800" strokeWidth="9" strokeLinecap="round"/>;
      })}
    </g>
  </svg>
);

const UrlGlobe = () => (
  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
    <rect width="100" height="100" rx="14" fill="#e0f2fe"/>
    <circle cx="50" cy="50" r="30" stroke="#0284c7" strokeWidth="5" fill="none"/>
    <ellipse cx="50" cy="50" rx="12" ry="30" stroke="#0284c7" strokeWidth="4" fill="none"/>
    <line x1="20" y1="50" x2="80" y2="50" stroke="#0284c7" strokeWidth="4"/>
    <line x1="23" y1="35" x2="77" y2="35" stroke="#0284c7" strokeWidth="3" opacity="0.6"/>
    <line x1="23" y1="65" x2="77" y2="65" stroke="#0284c7" strokeWidth="3" opacity="0.6"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────────────────

const sources = [
  { label: "Figma",  Logo: FigmaLogo  },
  { label: "Notion", Logo: NotionLogo },
  { label: "URL",    Logo: UrlGlobe   },
];

const artifacts = ["PRD", "Roadmap", "Comp. Analysis", "OKRs"];

// ── Banner ────────────────────────────────────────────────────────────────────

export const PMCopilotCardBanner = () => (
  <div
    className="w-full h-full relative overflow-hidden flex flex-col justify-between px-7 py-5"
    style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff" }}
  >
    {/* Blue wash base */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(255,255,255,0) 55%, rgba(99,102,241,0.05) 100%)",
    }}/>

    {/* Dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: "radial-gradient(circle, rgba(59,130,246,0.12) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }}/>

    {/* Blue glow — top left */}
    <div className="absolute pointer-events-none" style={{
      top: "-20%", left: "-10%",
      width: 300, height: 240,
      background: "radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 65%)",
      filter: "blur(8px)",
    }}/>

    {/* Blue glow — bottom right */}
    <div className="absolute pointer-events-none" style={{
      bottom: "-20%", right: "-5%",
      width: 260, height: 200,
      background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 65%)",
      filter: "blur(8px)",
    }}/>

    {/* ── TOP ROW ── */}
    <div className="relative z-10 flex items-center justify-between">

      {/* Logo + name + badge */}
      <div className="flex items-center gap-2.5">
        <div style={{
          width: 28, height: 28, borderRadius: 8,
          background: "#f0f0f0",
          border: "1px solid rgba(0,0,0,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 900, color: "#111",
        }}>✦</div>
        <span style={{ fontWeight: 700, fontSize: 13, color: "#111", letterSpacing: "-0.01em" }}>PM Co-Pilot</span>
        <span style={{
          fontSize: 7, fontWeight: 800,
          color: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 20, padding: "2px 8px",
          letterSpacing: "0.12em", textTransform: "uppercase",
          background: "#f5f5f5",
        }}>LIVE BUILD</span>
      </div>

      {/* Claude chip */}
      <div className="flex items-center gap-1.5" style={{
        background: "rgba(212,162,127,0.1)",
        border: "1px solid rgba(212,162,127,0.35)",
        borderRadius: 8,
        padding: "3px 10px",
      }}>
        <div style={{ width: 13, height: 13, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
          <ClaudeLogo />
        </div>
        <span style={{ fontSize: 8.5, fontWeight: 600, color: "#a0622a" }}>Powered by Claude AI</span>
      </div>
    </div>

    {/* ── HEADLINE ── */}
    <div className="relative z-10">
      <h3 style={{
        fontSize: 28, fontWeight: 900, color: "#111111",
        lineHeight: 1.12, letterSpacing: "-0.045em", margin: 0,
      }}>
        Connect tools.<br/>
        <span style={{ color: "rgba(0,0,0,0.35)" }}>Ship better products.</span>
      </h3>
    </div>

    {/* ── FLOW ROW ── */}
    <div className="relative z-10 flex items-center gap-3">

      {/* Source chips */}
      <div className="flex items-center gap-1.5">
        {sources.map(({ label, Logo }) => (
          <div key={label} className="flex items-center gap-1.5" style={{
            background: "#f7f7f7",
            border: "1px solid rgba(0,0,0,0.09)",
            borderRadius: 8,
            padding: "4px 9px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
          }}>
            <div style={{ width: 13, height: 13, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
              <Logo />
            </div>
            <span style={{ fontSize: 8.5, fontWeight: 600, color: "#333" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Arrow + centre node */}
      <div className="flex items-center gap-2">
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
          <line x1="0" y1="5" x2="14" y2="5" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="3 2"/>
          <path d="M12 2.5l4 2.5-4 2.5" stroke="rgba(0,0,0,0.25)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        <div style={{
          width: 32, height: 32, borderRadius: 9,
          background: "#111111",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 14, fontWeight: 900, color: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          flexShrink: 0,
        }}>✦</div>

        <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
          <line x1="0" y1="5" x2="14" y2="5" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="3 2"/>
          <path d="M12 2.5l4 2.5-4 2.5" stroke="rgba(0,0,0,0.25)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Output chips */}
      <div className="flex items-center gap-1.5">
        {artifacts.map((a) => (
          <span key={a} style={{
            fontSize: 8, fontWeight: 700,
            color: "#333",
            border: "1px solid rgba(0,0,0,0.09)",
            borderRadius: 6,
            padding: "3px 8px",
            background: "#f7f7f7",
          }}>{a}</span>
        ))}
      </div>
    </div>

    {/* ── FOOTER ── */}
    <div className="relative z-10 flex items-center">
      <div className="flex items-center gap-2">
        <div style={{ width: 16, height: 1, background: "rgba(0,0,0,0.12)" }}/>
        <span style={{ fontSize: 7.5, fontWeight: 600, color: "rgba(0,0,0,0.28)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
          Kartik Bhalerao
        </span>
      </div>
    </div>
  </div>
);

// ── Real brand logos ──────────────────────────────────────────────────────────

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
    <path
      d="M22 18c0 0 6.5 0.5 9.5 2.5l34 46.5V22c0-2-1-3.5-5-4l-2-0.5V16h28v1.5l-2.5 0.5c-3 0.5-4.5 2-4.5 4.5v57.5l-3.5 1-41-55.5V77c0 2 1 3.5 5.5 4l2.5 0.5V83H14v-1.5l3-0.5c3.5-0.5 5-2 5-5V24c0-2-1-3.5-5-4L14 19.5V18H22z"
      fill="#0a0a0a"
    />
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

const BG   = "#fff5f9";
const INK  = "#1a0a10";
const PINK = "#ff3b8d";

// ── Banner ────────────────────────────────────────────────────────────────────

export const PMCopilotCardBanner = () => (
  <div className="w-full h-full flex flex-row overflow-hidden"
    style={{ fontFamily: "'Inter', sans-serif", background: BG }}>

    {/* ══ LEFT PANEL ══════════════════════════════════════════════════════════ */}
    <div className="flex-1 relative flex flex-col justify-between px-5 py-4 overflow-hidden">

      {/* Diagonal line hatching */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          rgba(255,59,141,0.07) 0px,
          rgba(255,59,141,0.07) 1px,
          transparent 1px,
          transparent 14px
        )`,
      }}/>

      {/* Subtle pink glow top-right */}
      <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, rgba(255,59,141,0.12) 0%, transparent 70%)` }}/>

      {/* Decorative arcs bottom-left */}
      <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full border pointer-events-none"
        style={{ borderColor: "rgba(255,59,141,0.12)" }}/>
      <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full border pointer-events-none"
        style={{ borderColor: "rgba(255,59,141,0.09)" }}/>

      {/* ── Top content ── */}
      <div className="relative z-10 flex flex-col gap-2.5">

        {/* Logo + name */}
        <div className="flex items-center gap-2">
          <div style={{
            width: 27, height: 27, borderRadius: 8,
            background: PINK,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 900, color: "#fff",
            boxShadow: `0 2px 10px rgba(255,59,141,0.35)`,
          }}>✦</div>
          <span style={{ fontWeight: 800, fontSize: 13, color: INK, letterSpacing: "-0.02em" }}>PM Co-Pilot</span>
          <span style={{
            fontSize: 7.5, fontWeight: 800,
            color: PINK,
            border: `1px solid rgba(255,59,141,0.4)`,
            borderRadius: 20, padding: "1.5px 7px",
            letterSpacing: "0.1em", textTransform: "uppercase",
            background: "rgba(255,59,141,0.08)",
          }}>LIVE BUILD</span>
        </div>

        {/* Headline */}
        <h3 style={{ fontSize: 15, fontWeight: 900, color: INK, lineHeight: 1.25, letterSpacing: "-0.03em", margin: "2px 0 0" }}>
          Connect tools.<br/>
          <span style={{ color: PINK }}>Ship better</span> products.
        </h3>

        {/* CONNECTS WITH */}
        <div style={{ marginTop: 4 }}>
          <p style={{ fontSize: 7.5, fontWeight: 700, color: "rgba(26,10,16,0.38)", textTransform: "uppercase", letterSpacing: "0.16em", margin: "0 0 5px 0" }}>
            Connects with
          </p>
          <div className="flex items-center gap-1.5">
            {sources.map(({ label, Logo }) => (
              <div key={label} className="flex items-center gap-1.5" style={{
                background: "#fff",
                border: "1px solid rgba(26,10,16,0.1)",
                borderRadius: 8,
                padding: "4px 8px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}>
                <div style={{ width: 14, height: 14, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
                  <Logo />
                </div>
                <span style={{ fontSize: 8.5, fontWeight: 600, color: INK }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow → Claude */}
        <div className="flex items-center gap-2" style={{ marginTop: 1 }}>
          <svg width="26" height="12" viewBox="0 0 26 12" fill="none">
            <line x1="0" y1="6" x2="18" y2="6" stroke={PINK} strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5"/>
            <path d="M16 3.5l4 2.5-4 2.5" stroke={PINK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="flex items-center gap-1.5" style={{
            background: "rgba(212,162,127,0.12)",
            border: "1px solid rgba(212,162,127,0.35)",
            borderRadius: 8,
            padding: "3px 8px",
          }}>
            <div style={{ width: 13, height: 13, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
              <ClaudeLogo />
            </div>
            <span style={{ fontSize: 8.5, fontWeight: 600, color: "#a0622a" }}>Claude AI</span>
          </div>
        </div>

        {/* GENERATES */}
        <div style={{ marginTop: 3 }}>
          <p style={{ fontSize: 7.5, fontWeight: 700, color: "rgba(26,10,16,0.38)", textTransform: "uppercase", letterSpacing: "0.16em", margin: "0 0 5px 0" }}>
            Generates
          </p>
          <div className="flex flex-wrap gap-1.5">
            {artifacts.map((a) => (
              <span key={a} style={{
                fontSize: 8, fontWeight: 700,
                color: PINK,
                border: `1px solid rgba(255,59,141,0.3)`,
                borderRadius: 5,
                padding: "2px 7px",
                background: "rgba(255,59,141,0.07)",
              }}>{a}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="relative z-10">
        <div style={{ width: 24, height: 1, background: "rgba(26,10,16,0.12)", marginBottom: 5 }}/>
        <p style={{ fontSize: 7, color: "rgba(26,10,16,0.3)", textTransform: "uppercase", letterSpacing: "0.18em", fontFamily: "monospace", margin: 0 }}>Presented by</p>
        <p style={{ fontSize: 9, fontWeight: 800, color: "rgba(26,10,16,0.55)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "2px 0 0" }}>Kartik Bhalerao</p>
      </div>
    </div>

    {/* ══ RIGHT PANEL ══════════════════════════════════════════════════════════ */}
    <div className="w-[44%] relative overflow-hidden"
      style={{ borderLeft: "1px solid rgba(255,59,141,0.12)", background: "#fff0f6" }}>

      {/* Cross / plus-mark grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="crossGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <line x1="10" y1="6" x2="10" y2="14" stroke={PINK} strokeWidth="1" opacity="0.18"/>
            <line x1="6"  y1="10" x2="14" y2="10" stroke={PINK} strokeWidth="1" opacity="0.18"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#crossGrid)"/>
      </svg>

      {/* Central pink glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: 140, height: 140, borderRadius: "50%",
          background: `radial-gradient(circle, rgba(255,59,141,0.12) 0%, transparent 70%)`,
        }}/>
      </div>

      {/* Concentric rings */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[30, 54, 80, 110].map((r, i) => (
          <circle key={i} cx="50%" cy="50%" r={r}
            fill="none" stroke={PINK} strokeWidth="0.7"
            opacity={0.14 - i * 0.025}
          />
        ))}
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke={PINK} strokeWidth="0.5" opacity="0.05"/>
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke={PINK} strokeWidth="0.5" opacity="0.05"/>
      </svg>

      {/* Tool cards */}
      {[
        { label: "Figma",  Logo: FigmaLogo,  style: { top: "10%",    left: "6%"  } },
        { label: "Notion", Logo: NotionLogo, style: { top: "10%",    right: "6%" } },
        { label: "URL",    Logo: UrlGlobe,   style: { bottom: "10%", left: "6%"  } },
        { label: "Claude", Logo: ClaudeLogo, style: { bottom: "10%", right: "6%" } },
      ].map(({ label, Logo, style: s }) => (
        <div key={label} className="absolute flex items-center gap-1.5" style={{
          ...s,
          background: "#fff",
          border: "1px solid rgba(255,59,141,0.15)",
          borderRadius: 8,
          padding: "4px 8px",
          boxShadow: "0 1px 4px rgba(255,59,141,0.08)",
        }}>
          <div style={{ width: 14, height: 14, flexShrink: 0, borderRadius: 3, overflow: "hidden" }}>
            <Logo />
          </div>
          <span style={{ fontSize: 8.5, fontWeight: 600, color: INK }}>{label}</span>
        </div>
      ))}

      {/* Centre node */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          background: PINK,
          boxShadow: `0 0 20px rgba(255,59,141,0.45), 0 4px 12px rgba(255,59,141,0.3)`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 2,
        }}>
          <span style={{ fontSize: 20, lineHeight: 1, color: "#fff" }}>✦</span>
          <span style={{ fontSize: 5.5, fontWeight: 900, color: "rgba(255,255,255,0.9)", letterSpacing: "0.1em", textTransform: "uppercase" }}>PM AI</span>
        </div>
      </div>

      {/* Dashed lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.3 }}>
        <line x1="18%" y1="17%" x2="50%" y2="50%" stroke={PINK} strokeWidth="1" strokeDasharray="3 3"/>
        <line x1="82%" y1="17%" x2="50%" y2="50%" stroke={PINK} strokeWidth="1" strokeDasharray="3 3"/>
        <line x1="18%" y1="83%" x2="50%" y2="50%" stroke={PINK} strokeWidth="1" strokeDasharray="3 3"/>
        <line x1="82%" y1="83%" x2="50%" y2="50%" stroke={PINK} strokeWidth="1" strokeDasharray="3 3"/>
      </svg>
    </div>
  </div>
);

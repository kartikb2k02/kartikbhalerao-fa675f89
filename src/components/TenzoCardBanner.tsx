// ── Icons ─────────────────────────────────────────────────────────────────────

const InstantIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" fill="#f59e0b" />
  </svg>
);

const ScheduledIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect x="3" y="4.5" width="18" height="16" rx="3" stroke="#2563eb" strokeWidth="1.8" fill="none" />
    <path d="M3 9.5h18" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M8 2.5v4M16 2.5v4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="15.5" cy="15" r="1.4" fill="#2563eb" />
  </svg>
);

const TenzoMark = () => (
  <div style={{
    width: 28, height: 28, borderRadius: 8,
    background: "#2563eb",
    display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 15, fontWeight: 900, color: "#ffffff",
    boxShadow: "0 2px 10px rgba(37,99,235,0.35)",
  }}>T</div>
);

// ── Banner ────────────────────────────────────────────────────────────────────

export const TenzoCardBanner = () => (
  <div
    className="w-full h-full relative overflow-hidden flex flex-col justify-between px-7 py-5"
    style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff" }}
  >
    {/* Blue wash base */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(255,255,255,0) 55%, rgba(245,158,11,0.05) 100%)",
    }} />

    {/* Dot grid */}
    <div className="absolute inset-0 pointer-events-none" style={{
      backgroundImage: "radial-gradient(circle, rgba(37,99,235,0.12) 1px, transparent 1px)",
      backgroundSize: "20px 20px",
    }} />

    {/* Blue glow — top left */}
    <div className="absolute pointer-events-none" style={{
      top: "-20%", left: "-10%",
      width: 300, height: 240,
      background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 65%)",
      filter: "blur(8px)",
    }} />

    {/* Amber glow — bottom right */}
    <div className="absolute pointer-events-none" style={{
      bottom: "-20%", right: "-5%",
      width: 260, height: 200,
      background: "radial-gradient(ellipse, rgba(245,158,11,0.1) 0%, transparent 65%)",
      filter: "blur(8px)",
    }} />

    {/* ── TOP ROW ── */}
    <div className="relative z-10 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <TenzoMark />
        <span style={{ fontWeight: 700, fontSize: 13, color: "#111", letterSpacing: "-0.01em" }}>Tenzo</span>
        <span style={{
          fontSize: 7, fontWeight: 800,
          color: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: 20, padding: "2px 8px",
          letterSpacing: "0.12em", textTransform: "uppercase",
          background: "#f5f5f5",
        }}>PRODUCT ASSIGNMENT</span>
      </div>
    </div>

    {/* ── HEADLINE ── */}
    <div className="relative z-10">
      <h3 style={{
        fontSize: 26, fontWeight: 900, color: "#111111",
        lineHeight: 1.14, letterSpacing: "-0.045em", margin: 0,
      }}>
        Instant meets Scheduled.<br />
        <span style={{ color: "rgba(0,0,0,0.35)" }}>Zero conflicts, one expert pool.</span>
      </h3>
    </div>

    {/* ── FLOW ROW ── */}
    <div className="relative z-10 flex items-center gap-3">
      {/* Order type chips */}
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-1.5" style={{
          background: "#fffbeb",
          border: "1px solid rgba(245,158,11,0.3)",
          borderRadius: 8,
          padding: "4px 9px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
          <div style={{ width: 13, height: 13, flexShrink: 0 }}><InstantIcon /></div>
          <span style={{ fontSize: 8.5, fontWeight: 600, color: "#92400e" }}>Instant</span>
        </div>
        <div className="flex items-center gap-1.5" style={{
          background: "#eff6ff",
          border: "1px solid rgba(37,99,235,0.25)",
          borderRadius: 8,
          padding: "4px 9px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        }}>
          <div style={{ width: 13, height: 13, flexShrink: 0 }}><ScheduledIcon /></div>
          <span style={{ fontSize: 8.5, fontWeight: 600, color: "#1e3a8a" }}>Scheduled</span>
        </div>
      </div>

      {/* Arrow + centre node */}
      <div className="flex items-center gap-2">
        <svg width="18" height="10" viewBox="0 0 22 10" fill="none">
          <line x1="0" y1="5" x2="14" y2="5" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M12 2.5l4 2.5-4 2.5" stroke="rgba(0,0,0,0.25)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div style={{
          width: 32, height: 32, borderRadius: 9,
          background: "#111111",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, fontWeight: 900, color: "#ffffff",
          boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          flexShrink: 0,
        }}>T</div>

        <svg width="18" height="10" viewBox="0 0 22 10" fill="none">
          <line x1="0" y1="5" x2="14" y2="5" stroke="rgba(0,0,0,0.18)" strokeWidth="1" strokeDasharray="3 2" />
          <path d="M12 2.5l4 2.5-4 2.5" stroke="rgba(0,0,0,0.25)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Output chip */}
      <span style={{
        fontSize: 8, fontWeight: 700,
        color: "#166534",
        border: "1px solid rgba(22,101,82,0.18)",
        borderRadius: 6,
        padding: "5px 8px",
        background: "#f0fdf4",
      }}>Protected Assignment</span>
    </div>

    {/* ── FOOTER ── */}
    <div className="relative z-10 flex items-center">
      <div className="flex items-center gap-2">
        <div style={{ width: 16, height: 1, background: "rgba(0,0,0,0.12)" }} />
        <span style={{ fontSize: 7.5, fontWeight: 600, color: "rgba(0,0,0,0.28)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
          Kartik Bhalerao
        </span>
      </div>
    </div>
  </div>
);

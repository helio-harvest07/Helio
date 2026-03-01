import React from "react";

/* ── Coordinate System ──────────────────────────────────────────────────────
   ViewBox: 0 0 720 440
   Flow: SUN (left) → 3 SOLAR PANELS (top-center) → INVERTER → BATTERY / HOME
   DC path = orange  |  AC path = green  |  Photons = yellow
   ─────────────────────────────────────────────────────────────────────────── */

const PATHS = {
  // Photon beams: from sun right edge toward each panel top
  photon1: "M 118 62 L 155 50",
  photon2: "M 118 68 C 180 58 235 52 275 50",
  photon3: "M 118 74 C 220 60 340 50 395 50",
  photon4: "M 118 82 L 155 110",
  // DC: panel array combiner → Inverter top-center
  dcToInv: "M 310 145 Q 240 190 217 228",
  // Battery: Inverter bottom → Battery top
  invToBatt: "M 175 306 Q 152 340 107 352",
  // AC: Inverter right → Smart Meter left
  invToMeter: "M 278 267 L 330 267",
  // Home: Smart Meter right → Home Loads left
  meterToHome: "M 450 267 L 495 267",
};

// Panel cell grid (3 cols × 2 rows)
function PanelCells({ px, py }) {
  return Array.from({ length: 3 }).flatMap((_, c) =>
    Array.from({ length: 2 }).map((_, r) => (
      <rect
        key={`${c}-${r}`}
        x={px + 5 + c * 34} y={py + 5 + r * 28}
        width={30} height={24} rx={2}
        fill="#1d4ed8" stroke="#60a5fa" strokeWidth={0.7}
      />
    ))
  );
}

// Individual sun ray line
function SunRay({ angle }) {
  const [r1, r2] = [55, 73];
  const rad = (angle * Math.PI) / 180;
  return (
    <line
      x1={68 + r1 * Math.cos(rad)} y1={72 + r1 * Math.sin(rad)}
      x2={68 + r2 * Math.cos(rad)} y2={72 + r2 * Math.sin(rad)}
      stroke="#FACC15" strokeWidth={angle % 45 === 0 ? 2.5 : 1.5}
      strokeLinecap="round" opacity="0.8"
    />
  );
}

// Animated particle along a path
function Dot({ path, dur, begin, color, r = 4.5 }) {
  return (
    <circle r={r} fill={color} filter="url(#rfGlow)">
      <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${begin}s`} path={path} />
    </circle>
  );
}

// Cable with guide + animated dashes + particles
function Cable({ path, color, dashClass, particles, particleDur }) {
  return (
    <>
      <path d={path} stroke={color} strokeWidth={2} strokeOpacity={0.15} fill="none" />
      <path d={path} stroke={color} strokeWidth={2.8} fill="none" strokeDasharray="12 8" className={dashClass} />
      {particles.map((begin, i) => (
        <Dot key={i} path={path} dur={particleDur} begin={begin} color={color} />
      ))}
    </>
  );
}

const RAY_ANGLES = Array.from({ length: 16 }, (_, i) => i * 22.5);

export default function SolarFlowAnimation() {
  return (
    <div className="relative w-full h-full float-anim" data-testid="solar-animation">
      <svg viewBox="0 0 720 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
        <defs>
          <radialGradient id="rfSunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <filter id="rfGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="rfSoftGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <pattern id="rfGrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#1E3A8A" strokeWidth="0.4" opacity="0.45" />
          </pattern>
          <linearGradient id="rfInvGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="720" height="440" fill="url(#rfGrid)" />

        {/* ── SUN ── */}
        <circle cx="68" cy="72" r="95" fill="url(#rfSunGlow)" className="svg-sun-pulse" />
        <circle cx="68" cy="72" r="75" fill="#FACC15" opacity="0.07" className="svg-sun-pulse-delay" />
        <g style={{ transformOrigin: "68px 72px" }} className="svg-sun-rays">
          {RAY_ANGLES.map(a => <SunRay key={a} angle={a} />)}
        </g>
        <circle cx="68" cy="72" r="50" fill="#FDE68A" filter="url(#rfSoftGlow)" />
        <circle cx="68" cy="72" r="42" fill="#FACC15" />
        <circle cx="68" cy="72" r="32" fill="#FEF3C7" />
        <text x="68" y="76" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="bold" fontFamily="Outfit,sans-serif">SUN</text>
        <text x="68" y="88" textAnchor="middle" fill="#92400e" fontSize="7">5,778 K</text>

        {/* Photon beam guide lines */}
        {[PATHS.photon1, PATHS.photon2, PATHS.photon3, PATHS.photon4].map((p, i) => (
          <path key={i} d={p} stroke="#FACC15" strokeWidth={1} strokeOpacity={0.18} fill="none" />
        ))}
        {/* Photon animated dashes */}
        {[PATHS.photon1, PATHS.photon2, PATHS.photon3, PATHS.photon4].map((p, i) => (
          <path key={i} d={p} stroke="#FACC15" strokeWidth={1.6} fill="none"
            strokeDasharray="5 4" style={{ animation: `flowDashAnim ${0.7 + i * 0.1}s linear infinite ${i * 0.15}s` }} />
        ))}
        {/* Photon particles */}
        {[PATHS.photon1, PATHS.photon2, PATHS.photon3, PATHS.photon4].map((p, i) =>
          [0, 0.5].map((b, j) => <Dot key={`ph-${i}-${j}`} path={p} dur={0.8 + i * 0.1} begin={b} color="#FACC15" r={3.5} />)
        )}
        <text x="128" y="42" fill="#FACC15" fontSize="8" opacity="0.6" fontFamily="monospace">PHOTONS</text>

        {/* ── 3 SOLAR PANELS ── */}
        {/* Mounting rail */}
        <rect x="148" y="118" width="360" height="8" rx="2" fill="#334155" />
        <line x1="200" y1="126" x2="200" y2="145" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        <line x1="320" y1="126" x2="320" y2="145" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        <line x1="440" y1="126" x2="440" y2="145" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

        {/* Panel 1 */}
        <rect x="148" y="40" width="108" height="76" rx="5" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
        <PanelCells px={148} py={40} />
        <rect x="148" y="40" width="108" height="76" rx="5" fill="#60a5fa" opacity="0.05" />
        {/* Sheen */}
        <path d="M 155 44 L 175 44 L 165 56 Z" fill="white" opacity="0.08" />

        {/* Panel 2 */}
        <rect x="272" y="40" width="108" height="76" rx="5" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
        <PanelCells px={272} py={40} />
        <rect x="272" y="40" width="108" height="76" rx="5" fill="#60a5fa" opacity="0.05" />
        <path d="M 279 44 L 299 44 L 289 56 Z" fill="white" opacity="0.08" />

        {/* Panel 3 */}
        <rect x="396" y="40" width="108" height="76" rx="5" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
        <PanelCells px={396} py={40} />
        <rect x="396" y="40" width="108" height="76" rx="5" fill="#60a5fa" opacity="0.05" />
        <path d="M 403 44 L 423 44 L 413 56 Z" fill="white" opacity="0.08" />

        {/* Panel labels */}
        <text x="202" y="160" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Panel A</text>
        <text x="326" y="160" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Panel B</text>
        <text x="450" y="160" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Panel C</text>

        {/* DC Combiner box */}
        <rect x="278" y="165" width="66" height="32" rx="5" fill="#0f172a" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="311" y="185" textAnchor="middle" fill="#F59E0B" fontSize="8.5" fontWeight="bold" fontFamily="monospace">DC BUS</text>
        {/* Wires from panels to combiner */}
        <line x1="202" y1="126" x2="278" y2="181" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 3" />
        <line x1="326" y1="126" x2="311" y2="165" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 3" />
        <line x1="450" y1="126" x2="344" y2="181" stroke="#F59E0B" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="4 3" />

        {/* ── DC CABLE → INVERTER ── */}
        <Cable
          path={PATHS.dcToInv}
          color="#F59E0B"
          dashClass="svg-flow-1"
          particles={[0, 0.9, 1.8]}
          particleDur={2.7}
        />
        {/* DC label tag */}
        <rect x="235" y="188" width="36" height="15" rx="4" fill="#F59E0B" />
        <text x="253" y="199" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">DC IN</text>

        {/* ── INVERTER ── */}
        <rect x="158" y="228" width="120" height="78" rx="9" fill="url(#rfInvGrad)" stroke="#64748b" strokeWidth="2" />
        {/* Ventilation slots */}
        {[0, 1, 2, 3].map(i => (
          <line key={i} x1={168} y1={238 + i * 8} x2={270} y2={238 + i * 8} stroke="#475569" strokeWidth="1" opacity="0.5" />
        ))}
        <text x="218" y="277" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="1">INVERTER</text>
        {/* DC→AC wave icon */}
        <path d="M 174 284 Q 179 280 184 284 Q 189 288 194 284" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
        <text x="175" y="295" fill="#F59E0B" fontSize="6.5" fontFamily="monospace">DC</text>
        <path d="M 205 284 C 210 280 215 288 220 284" stroke="#4ade80" strokeWidth="1.5" fill="none" />
        <text x="206" y="295" fill="#4ade80" fontSize="6.5" fontFamily="monospace">~AC</text>
        {/* LED indicator */}
        <circle cx="266" cy="236" r="4.5" fill="#4ade80" className="svg-glow-pulse" />
        <text x="218" y="310" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">220V / 50Hz</text>

        {/* ── BATTERY CABLE ── */}
        <Cable
          path={PATHS.invToBatt}
          color="#60a5fa"
          dashClass="svg-flow-2"
          particles={[0, 1.1]}
          particleDur={2.2}
        />
        {/* Battery label tag */}
        <rect x="120" y="336" width="46" height="15" rx="4" fill="#60a5fa" />
        <text x="143" y="347" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">CHARGE</text>

        {/* ── BATTERY ── */}
        <rect x="50" y="352" width="115" height="72" rx="8" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
        {/* Terminal bumps */}
        <rect x="78" y="346" width="22" height="10" rx="3" fill="#475569" />
        <rect x="108" y="346" width="22" height="10" rx="3" fill="#475569" />
        {/* Capacity bar */}
        <rect x="60" y="373" width="95" height="13" rx="3" fill="#1e3a8a" />
        <rect x="62" y="375" width="70" height="9" rx="2" fill="#4ade80" />
        <circle cx="135" cy="380" r="2.5" fill="#1e293b" />
        <text x="107" y="367" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="monospace">BATTERY</text>
        <text x="107" y="400" textAnchor="middle" fill="#4ade80" fontSize="8" fontFamily="monospace">74% · 10 kWh</text>
        <text x="107" y="413" textAnchor="middle" fill="#475569" fontSize="7" fontFamily="monospace">LITHIUM-ION</text>

        {/* ── AC CABLE → SMART METER ── */}
        <Cable
          path={PATHS.invToMeter}
          color="#4ade80"
          dashClass="svg-flow-3"
          particles={[0, 0.9, 1.8]}
          particleDur={2.1}
        />
        {/* AC label tag */}
        <rect x="289" y="252" width="36" height="15" rx="4" fill="#4ade80" />
        <text x="307" y="263" textAnchor="middle" fill="#0f172a" fontSize="8" fontWeight="bold">AC OUT</text>

        {/* ── SMART METER ── */}
        <rect x="330" y="228" width="120" height="78" rx="9" fill="#0f172a" stroke="#F59E0B" strokeWidth="2" />
        <text x="390" y="248" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace" letterSpacing="0.5">SMART METER</text>
        <circle cx="437" cy="237" r="4.5" fill="#FACC15" className="svg-glow-pulse" />
        <text x="390" y="272" textAnchor="middle" fill="#4ade80" fontSize="18" fontWeight="bold" fontFamily="monospace">14.8</text>
        <text x="390" y="288" textAnchor="middle" fill="#FACC15" fontSize="9" fontFamily="monospace">kWh · TODAY</text>
        <text x="390" y="300" textAnchor="middle" fill="#64748b" fontSize="7.5" fontFamily="monospace">GRID EXPORT: 2.1 kWh</text>

        {/* ── AC CABLE → HOME LOADS ── */}
        <Cable
          path={PATHS.meterToHome}
          color="#4ade80"
          dashClass="svg-flow-4"
          particles={[0, 1.2]}
          particleDur={1.8}
        />

        {/* ── HOME LOADS ── */}
        <rect x="495" y="170" width="208" height="250" rx="10" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
        {/* Header */}
        <rect x="495" y="170" width="208" height="32" rx="10" fill="#1e3a8a" />
        <rect x="495" y="190" width="208" height="12" fill="#1e3a8a" />
        <text x="599" y="190" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="bold" fontFamily="monospace" letterSpacing="1">HOME LOADS</text>

        {/* ─ TV ─ */}
        <rect x="508" y="212" width="80" height="54" rx="4" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        <rect x="512" y="215" width="72" height="42" rx="2" fill="#0f172a" />
        {/* TV screen content - simple bars */}
        <rect x="515" y="218" width="66" height="8" rx="1" fill="#1d4ed8" opacity="0.7" />
        <rect x="515" y="228" width="40" height="6" rx="1" fill="#60a5fa" opacity="0.5" />
        <rect x="515" y="236" width="55" height="6" rx="1" fill="#60a5fa" opacity="0.3" />
        <rect x="515" y="244" width="30" height="6" rx="1" fill="#60a5fa" opacity="0.4" />
        {/* TV stand */}
        <line x1="544" y1="266" x2="544" y2="272" stroke="#475569" strokeWidth="3" />
        <line x1="533" y1="272" x2="555" y2="272" stroke="#475569" strokeWidth="3" />
        {/* Power dot */}
        <circle cx="582" cy="218" r="3" fill="#4ade80" className="svg-glow-pulse" />
        <text x="548" y="286" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">TELEVISION</text>

        {/* ─ AIR CONDITIONER ─ */}
        <rect x="603" y="212" width="88" height="40" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        {/* AC fins */}
        {[0, 1, 2, 3, 4].map(i => (
          <line key={i} x1={608} y1={220 + i * 5} x2={686} y2={220 + i * 5} stroke="#334155" strokeWidth="1" />
        ))}
        {/* Fan circle */}
        <circle cx="680" cy="230" r="9" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1" />
        <circle cx="680" cy="230" r="4" fill="#3b82f6" />
        <circle cx="678" cy="236" r="2" fill="#60a5fa" className="svg-glow-pulse" />
        <text x="645" y="264" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">AIR CONDITIONER</text>

        {/* ─ LIGHTS ─ */}
        <circle cx="540" cy="320" r="22" fill="#FACC15" opacity="0.12" className="svg-house-glow" />
        <circle cx="540" cy="320" r="15" fill="#FACC15" opacity="0.3" />
        <circle cx="540" cy="320" r="10" fill="#FACC15" opacity="0.8" />
        {/* Bulb base */}
        <rect x="534" y="332" width="12" height="8" rx="2" fill="#94a3b8" />
        {/* Glow rays */}
        {[0, 60, 120, 180, 240, 300].map(a => {
          const rad = (a * Math.PI) / 180;
          return <line key={a} x1={540 + 16 * Math.cos(rad)} y1={320 + 16 * Math.sin(rad)}
            x2={540 + 22 * Math.cos(rad)} y2={320 + 22 * Math.sin(rad)}
            stroke="#FACC15" strokeWidth="1.5" opacity="0.5" />;
        })}
        <text x="540" y="352" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">LIGHTING</text>

        {/* ─ REFRIGERATOR ─ */}
        <rect x="605" y="278" width="82" height="128" rx="5" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
        {/* Divider */}
        <line x1="605" y1="330" x2="687" y2="330" stroke="#334155" strokeWidth="1.5" />
        {/* Handle top */}
        <rect x="682" y="288" width="6" height="30" rx="3" fill="#475569" />
        {/* Handle bottom */}
        <rect x="682" y="340" width="6" height="30" rx="3" fill="#475569" />
        {/* Temp display */}
        <rect x="612" y="285" width="30" height="18" rx="3" fill="#0f172a" />
        <text x="627" y="297" textAnchor="middle" fill="#4ade80" fontSize="8" fontFamily="monospace">4°C</text>
        <circle cx="638" cy="297" r="2.5" fill="#4ade80" className="svg-glow-pulse" />
        <text x="646" y="416" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="monospace">REFRIGERATOR</text>

        {/* ── LABELS ── */}
        <text x="68" y="148" textAnchor="middle" fill="#FACC15" fontSize="9" opacity="0.7" fontFamily="monospace">SOLAR SOURCE</text>
        <rect x="148" y="415" width="360" height="18" rx="4" fill="#0f172a" opacity="0.6" />
        <text x="328" y="427" textAnchor="middle" fill="#3b82f6" fontSize="8.5" fontFamily="monospace" letterSpacing="0.5">SOLAR PANEL ARRAY · 3kW CAPACITY</text>
      </svg>
    </div>
  );
}

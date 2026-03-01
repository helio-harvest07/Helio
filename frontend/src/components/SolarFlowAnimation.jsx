import React from "react";

// Path definitions for energy flows
const P = {
  sunToPanel1: "M 458 115 C 390 140 310 168 258 175",
  sunToPanel2: "M 488 127 C 488 148 460 158 418 162",
  panel1ToHouse: "M 200 233 C 185 268 150 298 95 322",
  panel2ToMeter: "M 360 223 C 368 252 382 270 392 290",
};

// Sun rays angles
const RAY_ANGLES = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];

function SunRay({ angle }) {
  const r1 = 60, r2 = 78;
  const rad = (angle * Math.PI) / 180;
  return (
    <line
      x1={490 + r1 * Math.cos(rad)} y1={75 + r1 * Math.sin(rad)}
      x2={490 + r2 * Math.cos(rad)} y2={75 + r2 * Math.sin(rad)}
      stroke="#FACC15" strokeWidth={angle % 45 === 0 ? 2.5 : 1.5}
      strokeLinecap="round" opacity="0.75"
    />
  );
}

function PanelCells({ x, y, cols = 3, rows = 2 }) {
  return Array.from({ length: cols }).flatMap((_, c) =>
    Array.from({ length: rows }).map((_, r) => (
      <rect
        key={`${c}-${r}`}
        x={x + c * 36} y={y + r * 33}
        width="32" height="29" rx="2"
        fill="#1d4ed8" stroke="#60a5fa" strokeWidth="0.7" opacity="0.9"
      />
    ))
  );
}

function Particle({ path, dur, begin, color = "#FACC15" }) {
  return (
    <circle r="4.5" fill={color}>
      <animateMotion dur={`${dur}s`} repeatCount="indefinite" begin={`${begin}s`} path={path} />
    </circle>
  );
}

export default function SolarFlowAnimation() {
  return (
    <div className="relative w-full h-full float-anim">
      <svg
        viewBox="0 0 560 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
        data-testid="solar-animation"
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="houseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FACC15" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FACC15" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="bgGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1E3A8A" strokeWidth="0.4" opacity="0.5" />
          </pattern>
        </defs>

        {/* Background grid */}
        <rect width="560" height="410" fill="url(#bgGrid)" />

        {/* ── SUN ── */}
        <circle cx="490" cy="75" r="92" fill="url(#sunGlow)" className="svg-sun-pulse" />
        <circle cx="490" cy="75" r="72" fill="#FACC15" opacity="0.1" className="svg-sun-pulse-delay" />

        <g style={{ transformOrigin: "490px 75px" }} className="svg-sun-rays">
          {RAY_ANGLES.map((a) => <SunRay key={a} angle={a} />)}
        </g>

        <circle cx="490" cy="75" r="52" fill="#FDE68A" filter="url(#softGlow)" />
        <circle cx="490" cy="75" r="44" fill="#FACC15" />
        <circle cx="490" cy="75" r="34" fill="#FEF08A" />
        <text x="490" y="79" textAnchor="middle" fill="#78350F" fontSize="11" fontWeight="bold" fontFamily="Outfit,sans-serif">SUN</text>

        {/* ── SOLAR PANEL 1 (left) ── */}
        <g>
          <rect x="145" y="158" width="110" height="70" rx="5" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
          <PanelCells x={150} y={163} />
          <line x1="145" y1="195" x2="255" y2="195" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
          <rect x="145" y="158" width="110" height="70" rx="5" fill="#60a5fa" opacity="0.07" />
          {/* Stand */}
          <line x1="200" y1="228" x2="200" y2="256" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="178" y1="256" x2="222" y2="256" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
          <text x="200" y="272" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif">Panel A</text>
        </g>

        {/* ── SOLAR PANEL 2 (right) ── */}
        <g>
          <rect x="305" y="148" width="110" height="70" rx="5" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
          <PanelCells x={310} y={153} />
          <line x1="305" y1="185" x2="415" y2="185" stroke="#3b82f6" strokeWidth="0.8" opacity="0.4" />
          <rect x="305" y="148" width="110" height="70" rx="5" fill="#60a5fa" opacity="0.07" />
          <line x1="360" y1="218" x2="360" y2="248" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="338" y1="248" x2="382" y2="248" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
          <text x="360" y="264" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif">Panel B</text>
        </g>

        {/* ── HOUSE ── */}
        <g>
          <circle cx="95" cy="305" r="38" fill="url(#houseGlow)" className="svg-house-glow" />
          {/* Roof */}
          <polygon points="30,322 95,272 160,322" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Body */}
          <rect x="35" y="322" width="120" height="85" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
          {/* Door */}
          <rect x="76" y="356" width="30" height="51" rx="2" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="103" cy="382" r="2" fill="#60a5fa" />
          {/* Windows */}
          <rect x="43" y="330" width="30" height="24" rx="2" fill="#60a5fa" opacity="0.55" />
          <rect x="109" y="330" width="30" height="24" rx="2" fill="#60a5fa" opacity="0.55" />
          {/* Power dot on roof */}
          <circle cx="95" cy="295" r="7" fill="#FACC15" filter="url(#glow)" className="svg-glow-pulse" />
          <text x="95" y="415" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif">Your Home</text>
        </g>

        {/* ── ENERGY METER ── */}
        <g>
          <rect x="390" y="290" width="118" height="70" rx="9" fill="#0f172a" stroke="#F59E0B" strokeWidth="1.8" />
          <circle cx="400" cy="300" r="3" fill="#4ade80" className="svg-glow-pulse" />
          <text x="453" y="308" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace" letterSpacing="1">POWER OUTPUT</text>
          <text x="453" y="330" textAnchor="middle" fill="#4ade80" fontSize="16" fontWeight="bold" fontFamily="monospace">8.4 kWh</text>
          <text x="453" y="348" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">TODAY — LIVE</text>
          <text x="430" y="308" textAnchor="middle" fill="#4ade80" fontSize="9">●</text>
        </g>

        {/* ── ENERGY FLOW PATHS (static guide lines) ── */}
        <path d={P.sunToPanel1} stroke="#FACC15" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
        <path d={P.sunToPanel2} stroke="#FACC15" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
        <path d={P.panel1ToHouse} stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />
        <path d={P.panel2ToMeter} stroke="#4ade80" strokeWidth="1.5" strokeOpacity="0.15" fill="none" />

        {/* ── FLOWING DASH ANIMATIONS ── */}
        <path d={P.sunToPanel1} stroke="#FACC15" strokeWidth="2.2" fill="none"
          strokeDasharray="12 10" className="svg-flow-1" />
        <path d={P.sunToPanel2} stroke="#FACC15" strokeWidth="2.2" fill="none"
          strokeDasharray="12 10" className="svg-flow-2" />
        <path d={P.panel1ToHouse} stroke="#4ade80" strokeWidth="2.2" fill="none"
          strokeDasharray="12 10" className="svg-flow-3" />
        <path d={P.panel2ToMeter} stroke="#4ade80" strokeWidth="2.2" fill="none"
          strokeDasharray="12 10" className="svg-flow-4" />

        {/* ── PARTICLES ── */}
        {/* Sun → Panel 1 */}
        {[0, 0.85, 1.7].map((b, i) => (
          <Particle key={`sp1-${i}`} path={P.sunToPanel1} dur={2.5} begin={b} color="#FACC15" />
        ))}
        {/* Sun → Panel 2 */}
        {[0.2, 1.3].map((b, i) => (
          <Particle key={`sp2-${i}`} path={P.sunToPanel2} dur={2.2} begin={b} color="#FACC15" />
        ))}
        {/* Panel 1 → House */}
        {[0, 1.0, 2.0].map((b, i) => (
          <Particle key={`ph-${i}`} path={P.panel1ToHouse} dur={3.0} begin={b} color="#4ade80" />
        ))}
        {/* Panel 2 → Meter */}
        {[0.5, 1.8].map((b, i) => (
          <Particle key={`pm-${i}`} path={P.panel2ToMeter} dur={2.7} begin={b} color="#4ade80" />
        ))}

        {/* Labels */}
        <text x="490" y="145" textAnchor="middle" fill="#FACC15" fontSize="9.5" fontFamily="Inter,sans-serif" opacity="0.8" letterSpacing="1">SOLAR SOURCE</text>
      </svg>
    </div>
  );
}

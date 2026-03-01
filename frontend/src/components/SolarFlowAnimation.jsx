import React from "react";

/* ───────────────────────────────────────────────────────────────────────────
   Realistic Solar Flow Diagram — Static infographic style
   Layout:  ☀ → [PANELS] ──DC→ [INVERTER] ──AC→ [HOME LOADS]
                                    ↕↕                  ↕
                              [BATT][GRID]           [GRID]
   Colors: Solar=#FACC15  DC=#F59E0B  AC=#22C55E  Batt=#3B82F6  Grid=#A78BFA
   ─────────────────────────────────────────────────────────────────────────── */

// ── Helpers ─────────────────────────────────────────────────────────────────

function SunRays({ cx, cy, r1 = 40, r2 = 54 }) {
  return (
    <g className="svg-sun-rays" style={{ transformOrigin: `${cx}px ${cy}px` }}>
      {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <line key={a}
            x1={cx + r1 * Math.cos(rad)} y1={cy + r1 * Math.sin(rad)}
            x2={cx + r2 * Math.cos(rad)} y2={cy + r2 * Math.sin(rad)}
            stroke="#FACC15" strokeWidth={a % 45 === 0 ? 2 : 1.2}
            strokeLinecap="round" opacity={0.8}
          />
        );
      })}
    </g>
  );
}

function PanelFace({ x, y, w = 46, h = 30 }) {
  const cells = [];
  for (let c = 0; c < 4; c++)
    for (let r = 0; r < 2; r++)
      cells.push(<rect key={`${c}${r}`}
        x={x + 2 + c * ((w - 4) / 4)} y={y + 2 + r * ((h - 4) / 2)}
        width={(w - 4) / 4 - 1} height={(h - 4) / 2 - 1}
        rx={1} fill="#1d4ed8" stroke="#60a5fa" strokeWidth={0.5} />);
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={3} fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1.2} />
      {cells}
      {/* Glass sheen */}
      <path d={`M ${x + 3} ${y + 3} L ${x + 14} ${y + 3} L ${x + 9} ${y + 11} Z`} fill="white" opacity={0.08} />
    </g>
  );
}

function Card({ x, y, w, h, accent, children }) {
  return (
    <g>
      {/* Subtle glow behind card */}
      <rect x={x - 2} y={y - 2} width={w + 4} height={h + 4} rx={12} fill={accent} opacity={0.06} />
      {/* Card body */}
      <rect x={x} y={y} width={w} height={h} rx={10} fill="#1E293B" stroke={accent} strokeWidth={1.2} strokeOpacity={0.45} />
      {/* Top accent stripe */}
      <rect x={x} y={y} width={w} height={5} fill={accent} rx={0}/>
      <rect x={x} y={y} width={w} height={5} rx={10} fill={accent} />
      {children}
    </g>
  );
}

// Horizontal arrow + label pill
function HArrow({ x1, x2, y, color, label }) {
  const mid = (x1 + x2) / 2;
  const lw = label.length * 5.5 + 10;
  return (
    <g>
      {/* Shadow line */}
      <line x1={x1} y1={y + 1} x2={x2} y2={y + 1} stroke={color} strokeWidth={3.5} strokeOpacity={0.15} />
      {/* Main line */}
      <line x1={x1} y1={y} x2={x2 - 7} y2={y} stroke={color} strokeWidth={3} />
      {/* Arrowhead */}
      <polygon points={`${x2 - 8},${y - 5} ${x2},${y} ${x2 - 8},${y + 5}`} fill={color} />
      {/* Label pill */}
      <rect x={mid - lw / 2} y={y - 18} width={lw} height={14} rx={7} fill={color} />
      <text x={mid} y={y - 8} textAnchor="middle" fill={color === "#FACC15" ? "#78350f" : "white"} fontSize={8} fontWeight="bold" fontFamily="monospace">{label}</text>
    </g>
  );
}

// Vertical arrow + label pill
function VArrow({ x, y1, y2, color, label, bid = false }) {
  const mid = (y1 + y2) / 2;
  const lw = label.length * 5 + 10;
  return (
    <g>
      {bid && <polygon points={`${x - 4},${y1 + 7} ${x},${y1} ${x + 4},${y1 + 7}`} fill={color} />}
      <line x1={x} y1={bid ? y1 + 6 : y1} x2={x} y2={y2 - 7} stroke={color} strokeWidth={3} />
      <polygon points={`${x - 5},${y2 - 8} ${x},${y2} ${x + 5},${y2 - 8}`} fill={color} />
      <rect x={x - lw / 2} y={mid - 7} width={lw} height={14} rx={7} fill={color} />
      <text x={x} y={mid + 1} textAnchor="middle" fill="white" fontSize={7.5} fontWeight="bold" fontFamily="monospace">{label}</text>
    </g>
  );
}

// Step number badge (circle)
function StepBadge({ cx, cy, n, color }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={11} fill={color} />
      <text x={cx} y={cy + 4} textAnchor="middle" fill={color === "#FACC15" ? "#78350f" : "white"} fontSize={9.5} fontWeight="bold" fontFamily="Outfit,sans-serif">{n}</text>
    </g>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function SolarFlowDiagram() {
  // Layout constants
  const ROW1_Y = 18, CARD_H = 132, CARD_W = 108;
  const ROW2_Y = ROW1_Y + CARD_H + 44; // 194
  const ROW2_H = 78;
  const MID_Y = ROW1_Y + CARD_H / 2; // ~84

  const PANELS_X = 105, INV_X = 285, HOME_X = 468, HOME_W = 256;
  const BATT_X = 285, GRID_X = INV_X + CARD_W + 8; // 401

  const INV_CX = INV_X + CARD_W / 2; // 339
  const BATT_CX = BATT_X + CARD_W / 2; // 339

  const HOME_GRID_X = HOME_X + 90; // 558

  return (
    <div
      data-testid="solar-animation"
      className="w-full rounded-2xl overflow-hidden border border-slate-700/40 shadow-2xl"
      style={{ background: "linear-gradient(145deg,#0f172a 0%,#1a2744 50%,#0f172a 100%)" }}
    >
      {/* ── Header bar ────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 border-b border-slate-700/40">
        <span className="text-white text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "Outfit,sans-serif" }}>
          Solar Energy Flow System
        </span>
        <div className="flex flex-wrap gap-3">
          {[["#F59E0B", "DC Power"], ["#22C55E", "AC Power"], ["#3B82F6", "Battery"], ["#A78BFA", "Grid"]].map(([c, l]) => (
            <div key={l} className="flex items-center gap-1.5">
              <div className="w-5 h-1.5 rounded-full" style={{ backgroundColor: c }} />
              <span className="text-slate-400 text-xs">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SVG Diagram ───────────────────────────────────────────────────── */}
      <div className="px-3 pt-4 pb-3">
        <svg viewBox="0 0 740 284" className="w-full" style={{ fontFamily: "Inter,sans-serif" }}>
          <defs>
            <radialGradient id="sfd-sunGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FEF3C7" />
              <stop offset="55%" stopColor="#FACC15" />
              <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
            <filter id="sfd-glow">
              <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="sfd-glowSm">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ══ SUN ══ cx=44 cy=84 ═════════════════════════════════════════ */}
          <circle cx={44} cy={84} r={62} fill="#FACC15" opacity={0.04} />
          <circle cx={44} cy={84} r={50} fill="#FACC15" opacity={0.08} />
          <SunRays cx={44} cy={84} r1={38} r2={52} />
          <circle cx={44} cy={84} r={35} fill="url(#sfd-sunGrad)" filter="url(#sfd-glow)" />
          <circle cx={44} cy={84} r={25} fill="#FEF08A" />
          <circle cx={44} cy={84} r={17} fill="#FFF9C4" />
          <text x={44} y={88} textAnchor="middle" fill="#78350f" fontSize={8.5} fontWeight="bold">SUN</text>

          {/* Radiation label */}
          <text x={44} y={152} textAnchor="middle" fill="#64748b" fontSize={7} fontFamily="monospace">SOLAR RADIATION</text>
          <text x={44} y={161} textAnchor="middle" fill="#64748b" fontSize={7} fontFamily="monospace">5,778 K</text>

          {/* Sun → Panels arrow */}
          <HArrow x1={80} x2={PANELS_X} y={MID_Y} color="#FACC15" label="Photons" />

          {/* ══ SOLAR PANELS CARD ══════════════════════════════════════════ */}
          <Card x={PANELS_X} y={ROW1_Y} w={CARD_W} h={CARD_H} accent="#F59E0B">
            <StepBadge cx={PANELS_X + CARD_W - 13} cy={ROW1_Y + 13} n="1" color="#F59E0B" />

            {/* Two mini panels side by side */}
            <PanelFace x={PANELS_X + 8} y={ROW1_Y + 11} w={44} h={28} />
            <PanelFace x={PANELS_X + 56} y={ROW1_Y + 11} w={44} h={28} />

            {/* Mounting rail */}
            <rect x={PANELS_X + 6} y={ROW1_Y + 39} width={96} height={3} rx={1} fill="#475569" />
            <line x1={PANELS_X + 28} y1={ROW1_Y + 42} x2={PANELS_X + 28} y2={ROW1_Y + 52} stroke="#475569" strokeWidth={2.5} strokeLinecap="round" />
            <line x1={PANELS_X + 80} y1={ROW1_Y + 42} x2={PANELS_X + 80} y2={ROW1_Y + 52} stroke="#475569" strokeWidth={2.5} strokeLinecap="round" />
            {/* DC wire from panels */}
            <line x1={PANELS_X + 28} y1={ROW1_Y + 52} x2={PANELS_X + 54} y2={ROW1_Y + 60} stroke="#F59E0B" strokeWidth={1.5} strokeOpacity={0.6} />
            <line x1={PANELS_X + 80} y1={ROW1_Y + 52} x2={PANELS_X + 54} y2={ROW1_Y + 60} stroke="#F59E0B" strokeWidth={1.5} strokeOpacity={0.6} />
            <circle cx={PANELS_X + 54} cy={ROW1_Y + 60} r={3.5} fill="#F59E0B" opacity={0.6} />

            {/* Labels */}
            <text x={PANELS_X + 54} y={ROW1_Y + 80} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">SOLAR PANELS</text>
            <text x={PANELS_X + 54} y={ROW1_Y + 93} textAnchor="middle" fill="#94a3b8" fontSize={7.5} fontFamily="monospace">PV Array · 3 kW</text>
            {/* DC badge */}
            <rect x={PANELS_X + 20} y={ROW1_Y + 100} width={68} height={14} rx={7} fill="#F59E0B" fillOpacity={0.18} />
            <text x={PANELS_X + 54} y={ROW1_Y + 110} textAnchor="middle" fill="#F59E0B" fontSize={8} fontWeight="bold" fontFamily="monospace">DC OUTPUT · 48V</text>
          </Card>

          {/* Panels → Inverter DC arrow */}
          <HArrow x1={PANELS_X + CARD_W} x2={INV_X} y={MID_Y} color="#F59E0B" label="DC 48V" />

          {/* ══ INVERTER CARD ═════════════════════════════════════════════ */}
          <Card x={INV_X} y={ROW1_Y} w={CARD_W} h={CARD_H} accent="#22C55E">
            <StepBadge cx={INV_X + CARD_W - 13} cy={ROW1_Y + 13} n="2" color="#22C55E" />

            {/* Inverter box illustration */}
            <rect x={INV_X + 10} y={ROW1_Y + 11} width={88} height={50} rx={6} fill="#334155" stroke="#64748b" strokeWidth={1.2} />
            {/* Vent lines */}
            {[0, 1, 2, 3, 4].map(i => (
              <line key={i} x1={INV_X + 15} y1={ROW1_Y + 17 + i * 7} x2={INV_X + 65} y2={ROW1_Y + 17 + i * 7} stroke="#475569" strokeWidth={0.9} />
            ))}
            {/* Brand plate */}
            <rect x={INV_X + 67} y={ROW1_Y + 13} width={28} height={46} rx={3} fill="#1e293b" stroke="#64748b" strokeWidth={0.8} />
            {/* LED cluster */}
            <circle cx={INV_X + 78} cy={ROW1_Y + 22} r={3.5} fill="#4ade80" filter="url(#sfd-glowSm)" />
            <circle cx={INV_X + 78} cy={ROW1_Y + 32} r={3.5} fill="#4ade80" opacity={0.4} />
            <circle cx={INV_X + 78} cy={ROW1_Y + 42} r={3.5} fill="#FACC15" opacity={0.6} />
            {/* DC input indicator */}
            <rect x={INV_X + 10} y={ROW1_Y + 61} width={28} height={6} rx={3} fill="#F59E0B" opacity={0.3} />
            <text x={INV_X + 24} y={ROW1_Y + 67} textAnchor="middle" fill="#F59E0B" fontSize={6.5} fontFamily="monospace">DC IN</text>
            {/* AC output indicator */}
            <rect x={INV_X + 70} y={ROW1_Y + 61} width={28} height={6} rx={3} fill="#22C55E" opacity={0.3} />
            <text x={INV_X + 84} y={ROW1_Y + 67} textAnchor="middle" fill="#22C55E" fontSize={6.5} fontFamily="monospace">AC OUT</text>
            {/* Waveform */}
            <path d={`M ${INV_X + 13} ${ROW1_Y + 74} Q ${INV_X + 18} ${ROW1_Y + 70} ${INV_X + 23} ${ROW1_Y + 74} Q ${INV_X + 28} ${ROW1_Y + 78} ${INV_X + 33} ${ROW1_Y + 74}`} stroke="#22C55E" strokeWidth={1.8} fill="none" />

            {/* Labels */}
            <text x={INV_X + 54} y={ROW1_Y + 92} textAnchor="middle" fill="white" fontSize={10} fontWeight="bold">INVERTER</text>
            <text x={INV_X + 54} y={ROW1_Y + 105} textAnchor="middle" fill="#94a3b8" fontSize={7.5} fontFamily="monospace">DC → AC · 3 kVA</text>
            <rect x={INV_X + 17} y={ROW1_Y + 111} width={74} height={14} rx={7} fill="#22C55E" fillOpacity={0.15} />
            <text x={INV_X + 54} y={ROW1_Y + 121} textAnchor="middle" fill="#22C55E" fontSize={7.5} fontWeight="bold" fontFamily="monospace">220V AC · 50Hz</text>
          </Card>

          {/* Inverter → Home AC arrow */}
          <HArrow x1={INV_X + CARD_W} x2={HOME_X} y={MID_Y} color="#22C55E" label="AC 220V" />

          {/* ══ HOME LOADS CARD ══════════════════════════════════════════ */}
          <Card x={HOME_X} y={ROW1_Y} w={HOME_W} h={CARD_H} accent="#F59E0B">
            <StepBadge cx={HOME_X + HOME_W - 13} cy={ROW1_Y + 13} n="3" color="#F59E0B" />

            {/* House silhouette */}
            <polygon points={`${HOME_X + 10},${ROW1_Y + 62} ${HOME_X + 40},${ROW1_Y + 38} ${HOME_X + 70},${ROW1_Y + 62}`} fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1} />
            <rect x={HOME_X + 14} y={ROW1_Y + 62} width={52} height={42} rx={2} fill="#0f172a" stroke="#3b82f6" strokeWidth={1} />
            <rect x={HOME_X + 18} y={ROW1_Y + 68} width={16} height={12} rx={2} fill="#60a5fa" opacity={0.55} />
            <rect x={HOME_X + 46} y={ROW1_Y + 68} width={16} height={12} rx={2} fill="#60a5fa" opacity={0.55} />
            <rect x={HOME_X + 29} y={ROW1_Y + 87} width={14} height={17} rx={1} fill="#1e3a8a" />
            {/* Power-on glow */}
            <circle cx={HOME_X + 40} cy={ROW1_Y + 50} r={6} fill="#FACC15" filter="url(#sfd-glowSm)" opacity={0.8} />

            {/* ── Appliance icons (right two-thirds of card) ── */}
            {/* TV */}
            <rect x={HOME_X + 85} y={ROW1_Y + 12} width={46} height={30} rx={4} fill="#0f172a" stroke="#475569" strokeWidth={1} />
            <rect x={HOME_X + 89} y={ROW1_Y + 15} width={38} height={21} rx={2} fill="#1d4ed8" />
            <rect x={HOME_X + 93} y={ROW1_Y + 18} width={30} height={14} rx={1} fill="#1e40af" />
            {[0, 1, 2].map(i => <line key={i} x1={HOME_X + 95} y1={ROW1_Y + 20 + i * 4} x2={HOME_X + 120} y2={ROW1_Y + 20 + i * 4} stroke="#3b82f6" strokeWidth={0.6} opacity={0.5} />)}
            <line x1={HOME_X + 105} y1={ROW1_Y + 42} x2={HOME_X + 108} y2={ROW1_Y + 47} stroke="#475569" strokeWidth={2} />
            <line x1={HOME_X + 99} y1={ROW1_Y + 47} x2={HOME_X + 114} y2={ROW1_Y + 47} stroke="#475569" strokeWidth={2} />
            <circle cx={HOME_X + 128} cy={ROW1_Y + 16} r={3} fill="#4ade80" filter="url(#sfd-glowSm)" />
            <text x={HOME_X + 108} y={ROW1_Y + 56} textAnchor="middle" fill="#64748b" fontSize={7.5} fontFamily="monospace">TELEVISION</text>

            {/* Air Conditioner */}
            <rect x={HOME_X + 147} y={ROW1_Y + 12} width={54} height={30} rx={4} fill="#0f172a" stroke="#475569" strokeWidth={1} />
            {[0, 1, 2, 3].map(i => <line key={i} x1={HOME_X + 151} y1={ROW1_Y + 17 + i * 5} x2={HOME_X + 197} y2={ROW1_Y + 17 + i * 5} stroke="#334155" strokeWidth={1} />)}
            <circle cx={HOME_X + 193} cy={ROW1_Y + 22} r={7} fill="#1e3a8a" stroke="#3b82f6" strokeWidth={1} />
            <circle cx={HOME_X + 193} cy={ROW1_Y + 22} r={3.5} fill="#3b82f6" opacity={0.8} />
            <circle cx={HOME_X + 191} cy={ROW1_Y + 29} r={2.5} fill="#4ade80" filter="url(#sfd-glowSm)" />
            <text x={HOME_X + 174} y={ROW1_Y + 56} textAnchor="middle" fill="#64748b" fontSize={7.5} fontFamily="monospace">AIR CONDITIONER</text>

            {/* Light Bulb */}
            <circle cx={HOME_X + 108} cy={ROW1_Y + 92} r={16} fill="#FACC15" opacity={0.08} />
            <circle cx={HOME_X + 108} cy={ROW1_Y + 92} r={11} fill="#FACC15" opacity={0.22} />
            <circle cx={HOME_X + 108} cy={ROW1_Y + 92} r={7.5} fill="#FACC15" opacity={0.75} />
            <rect x={HOME_X + 105} y={ROW1_Y + 100} width={6} height={6} rx={1} fill="#94a3b8" />
            {[30, 90, 150, 210, 270, 330].map(a => {
              const r = (a * Math.PI) / 180;
              return <line key={a}
                x1={HOME_X + 108 + 12 * Math.cos(r)} y1={ROW1_Y + 92 + 12 * Math.sin(r)}
                x2={HOME_X + 108 + 17 * Math.cos(r)} y2={ROW1_Y + 92 + 17 * Math.sin(r)}
                stroke="#FACC15" strokeWidth={1.2} opacity={0.5} />;
            })}
            <text x={HOME_X + 108} y={ROW1_Y + 117} textAnchor="middle" fill="#64748b" fontSize={7.5} fontFamily="monospace">LIGHTING</text>

            {/* Refrigerator */}
            <rect x={HOME_X + 168} y={ROW1_Y + 68} width={42} height={62} rx={4} fill="#0f172a" stroke="#475569" strokeWidth={1} />
            <line x1={HOME_X + 168} y1={ROW1_Y + 100} x2={HOME_X + 210} y2={ROW1_Y + 100} stroke="#334155" strokeWidth={1.2} />
            <rect x={HOME_X + 207} y={ROW1_Y + 76} width={5} height={18} rx={2} fill="#64748b" />
            <rect x={HOME_X + 207} y={ROW1_Y + 104} width={5} height={18} rx={2} fill="#64748b" />
            <text x={HOME_X + 175} y={ROW1_Y + 79} fill="#64748b" fontSize={7} fontFamily="monospace">4°C</text>
            <text x={HOME_X + 175} y={ROW1_Y + 110} fill="#64748b" fontSize={7} fontFamily="monospace">-18°C</text>
            <circle cx={HOME_X + 180} cy={ROW1_Y + 89} r={2.5} fill="#4ade80" filter="url(#sfd-glowSm)" />
            <text x={HOME_X + 189} y={ROW1_Y + 139} textAnchor="middle" fill="#64748b" fontSize={7.5} fontFamily="monospace">REFRIGERATOR</text>

            {/* Card label at bottom */}
            <text x={HOME_X + HOME_W / 2} y={ROW1_Y + 148} textAnchor="middle" fill="white" fontSize={9.5} fontWeight="bold">HOME LOADS</text>
          </Card>

          {/* ══ BATTERY CARD ═════════════════════════════════════════════ */}
          <Card x={BATT_X} y={ROW2_Y} w={CARD_W} h={ROW2_H} accent="#3B82F6">
            {/* Battery icon */}
            <rect x={BATT_X + 14} y={ROW2_Y + 10} width={80} height={48} rx={5} fill="#0f172a" stroke="#3b82f6" strokeWidth={1.2} />
            {/* Terminal bumps */}
            <rect x={BATT_X + 24} y={ROW2_Y + 6} width={16} height={8} rx={3} fill="#475569" />
            <rect x={BATT_X + 68} y={ROW2_Y + 6} width={16} height={8} rx={3} fill="#475569" />
            {/* Capacity bar background */}
            <rect x={BATT_X + 20} y={ROW2_Y + 28} width={68} height={13} rx={3} fill="#1e3a8a" />
            {/* Charge level (74%) */}
            <rect x={BATT_X + 22} y={ROW2_Y + 30} width={50} height={9} rx={2} fill="#4ade80" />
            {/* Battery text */}
            <text x={BATT_X + 54} y={ROW2_Y + 22} textAnchor="middle" fill="#3b82f6" fontSize={8} fontWeight="bold" fontFamily="monospace">BATTERY</text>
            <text x={BATT_X + 54} y={ROW2_Y + 50} textAnchor="middle" fill="#4ade80" fontSize={8} fontFamily="monospace">74% · 10 kWh</text>
            {/* Charge % label on bar */}
            <text x={BATT_X + 48} y={ROW2_Y + 39} textAnchor="middle" fill="#0f172a" fontSize={7} fontWeight="bold">74%</text>
            <text x={BATT_X + 54} y={ROW2_Y + 66} textAnchor="middle" fill="white" fontSize={8.5} fontWeight="bold">Battery Storage</text>
          </Card>

          {/* Inverter ↔ Battery vertical arrow */}
          <VArrow x={INV_CX} y1={ROW1_Y + CARD_H} y2={ROW2_Y} color="#3B82F6" label="CHARGE" bid />

          {/* ══ GRID CARD ════════════════════════════════════════════════ */}
          <Card x={GRID_X} y={ROW2_Y} w={CARD_W} h={ROW2_H} accent="#A78BFA">
            {/* Power tower / pylon */}
            <line x1={GRID_X + 54} y1={ROW2_Y + 8} x2={GRID_X + 54} y2={ROW2_Y + 55} stroke="#64748b" strokeWidth={2.5} />
            <line x1={GRID_X + 34} y1={ROW2_Y + 18} x2={GRID_X + 74} y2={ROW2_Y + 18} stroke="#64748b" strokeWidth={2} />
            <line x1={GRID_X + 38} y1={ROW2_Y + 30} x2={GRID_X + 70} y2={ROW2_Y + 30} stroke="#64748b" strokeWidth={1.5} />
            {/* Insulators */}
            <circle cx={GRID_X + 34} cy={ROW2_Y + 18} r={3} fill="#475569" />
            <circle cx={GRID_X + 74} cy={ROW2_Y + 18} r={3} fill="#475569" />
            <circle cx={GRID_X + 38} cy={ROW2_Y + 30} r={2.5} fill="#475569" />
            <circle cx={GRID_X + 70} cy={ROW2_Y + 30} r={2.5} fill="#475569" />
            {/* Power lines (curved) */}
            <path d={`M ${GRID_X + 34} ${ROW2_Y + 18} Q ${GRID_X + 20} ${ROW2_Y + 26} ${GRID_X + 14} ${ROW2_Y + 30}`} stroke="#A78BFA" strokeWidth={1.5} fill="none" opacity={0.8} />
            <path d={`M ${GRID_X + 74} ${ROW2_Y + 18} Q ${GRID_X + 88} ${ROW2_Y + 26} ${GRID_X + 94} ${ROW2_Y + 30}`} stroke="#A78BFA" strokeWidth={1.5} fill="none" opacity={0.8} />
            {/* Bidirectional ↕ symbol */}
            <text x={GRID_X + 54} y={ROW2_Y + 52} textAnchor="middle" fill="#A78BFA" fontSize={12} fontWeight="bold">⇅</text>
            <text x={GRID_X + 54} y={ROW2_Y + 66} textAnchor="middle" fill="white" fontSize={8.5} fontWeight="bold">Power Grid</text>
          </Card>

          {/* Home ↔ Grid vertical arrow */}
          <VArrow x={HOME_GRID_X} y1={ROW1_Y + CARD_H} y2={ROW2_Y} color="#A78BFA" label="EXPORT" bid />

          {/* ══ BOTTOM LABEL ══════════════════════════════════════════════ */}
          <text x={370} y={278} textAnchor="middle" fill="#334155" fontSize={7.5} fontFamily="monospace">
            HELIOHARVEST · RESIDENTIAL SOLAR SYSTEM · 3kW INSTALLATION
          </text>
        </svg>
      </div>
    </div>
  );
}

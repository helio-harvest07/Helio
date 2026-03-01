import React from "react";

/* ───────────────────────────────────────────────────────────────────────────
   Solar Energy Flow Diagram — Using Tata Power reference image
   Shows realistic solar energy flow from panels to home
   ─────────────────────────────────────────────────────────────────────────── */

export default function SolarFlowDiagram() {
  const imageUrl = "https://www.tatapower.com/adobe/dynamicmedia/deliver/dm-aid--e21723bb-55e4-46e1-9f69-1ec8f940f854/1.png?width=1600&preferwebp=true&quality=85";

  return (
    <div
      data-testid="solar-flow-diagram"
      className="w-full h-full rounded-2xl overflow-hidden border border-slate-700/40 shadow-2xl relative"
      style={{ 
        background: "linear-gradient(145deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)",
        minHeight: "320px"
      }}
    >
      {/* Header bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-2.5 bg-gradient-to-b from-[#0f172a]/90 to-transparent z-10">
        <span 
          className="text-white text-xs font-bold uppercase tracking-widest drop-shadow-lg" 
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          Solar Energy Flow System
        </span>
        <div className="hidden sm:flex gap-3">
          {[
            ["#F59E0B", "DC Power"], 
            ["#22C55E", "AC Power"], 
            ["#3B82F6", "Battery"], 
            ["#A78BFA", "Grid"]
          ].map(([color, label]) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-4 h-1.5 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-slate-300 text-xs">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="w-full h-full flex items-center justify-center p-4 pt-12">
        <img 
          src={imageUrl}
          alt="Solar Energy Flow - From solar panels through inverter to home appliances, battery storage and grid"
          className="w-full h-auto max-h-[400px] object-contain rounded-lg"
          style={{
            filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))"
          }}
        />
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 py-2 bg-gradient-to-t from-[#0f172a]/90 to-transparent">
        <p className="text-center text-slate-400 text-xs font-mono">
          HELIOHARVEST · RESIDENTIAL SOLAR SYSTEM · COMPLETE ENERGY FLOW
        </p>
      </div>
    </div>
  );
}

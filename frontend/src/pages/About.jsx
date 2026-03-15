import React from "react";
import { Link } from "react-router-dom";
import { Sun, Zap, Leaf, Users, Target, Globe, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const values = [
  { icon: Zap, title: "Innovation", desc: "We leverage cutting-edge technology — from satellite shading analysis to AI-powered design — to deliver the best solar systems." },
  { icon: Leaf, title: "Sustainability", desc: "Every installation reduces carbon footprint. We're committed to India's renewable energy targets and a greener planet." },
  { icon: Users, title: "Customer First", desc: "Our job doesn't end at installation. Lifetime support, proactive maintenance, and transparent communication define us." },
  { icon: Target, title: "Excellence", desc: "MNRE-certified technicians, premium-grade panels, and rigorous quality checks ensure every system performs at its peak." },
];

const milestones = [
  { year: "2021", event: "Founded with a vision to democratize solar energy across India." },
  { year: "2022", event: "Completed 100+ installations across Tamil Nadu and Gujarat." },
  { year: "2023", event: "Launched real-time energy monitoring platform for customers." },
  { year: "2024", event: "Expanded to Rajasthan. Crossed 500 installations milestone." },
  { year: "2025", event: "Targeting 3,000 installations and India's first solar-as-a-service platform." },
];

export default function About() {
  return (
    <div>
      <SEO 
        title="About HelioHarvest | Our Mission & Story | Solar Energy Company India"
        description="Learn about HelioHarvest's mission to power India's renewable revolution. 500+ installations, MNRE certified, serving Tamil Nadu, Gujarat, Rajasthan and beyond."
        keywords="about HelioHarvest, solar company India, renewable energy company, solar installation company Coimbatore"
        url="https://helioharvest.in/about"
      />
      {/* ── PAGE HERO ── */}
      <section className="bg-[#0F172A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/30 border border-[#3B82F6]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
            <span className="text-slate-400 text-sm">About HelioHarvest</span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
            data-testid="about-heading"
          >
            We're on a Mission to<br />
            <span className="text-[#FACC15]">Power Every Home</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            HelioHarvest is India's next-generation solar installation company — combining deep solar expertise with intelligent technology to make clean energy accessible to all.
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&w=1400&q=80"
          alt="Professional solar panel installation team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </div>

      {/* ── STORY ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Born from a Belief in Cleaner Energy
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-5">
              HelioHarvest was founded with a simple but powerful belief: every Indian home and business deserves access to affordable, clean solar energy — without the complexity that usually comes with it.
            </p>
            <p className="text-slate-500 leading-relaxed mb-5">
              We started by solving the most frustrating parts of going solar: confusing quotes, unreliable installers, and no visibility after installation. Today, we offer a fully integrated experience from the first site survey to lifetime monitoring and maintenance.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Our platform — powered by satellite analysis, AI design, and real-time monitoring — makes HelioHarvest not just an installer, but your long-term energy partner.
            </p>
          </div>

          {/* Milestones */}
          <div className="space-y-6" data-testid="milestones">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-start gap-5">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FEF3C7] flex flex-col items-center justify-center border-2 border-[#F59E0B]">
                  <span className="text-[#F59E0B] font-bold text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>{m.year}</span>
                </div>
                <div className="pt-3 border-t border-slate-100 flex-1">
                  <p className="text-slate-600 text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Our North Star</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div data-testid="about-mission" className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-10 text-white">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59E0B] opacity-10 rounded-full -translate-y-12 translate-x-12" />
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#FACC15]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FACC15] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Transforming raw energy data into automated action — delivering professional solar installations that empower Indian homes and businesses to generate clean, affordable electricity every day.
              </p>
            </div>

            <div data-testid="about-vision" className="relative overflow-hidden rounded-2xl bg-[#F59E0B] p-10">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12" />
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Vision</h3>
              <p className="text-amber-900 text-lg font-medium leading-relaxed">
                Powering the renewable revolution, one distributed asset at a time — becoming India's most trusted solar partner and the global operating system for clean, distributed energy.
              </p>
            </div>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "500+", l: "Happy Customers" },
              { v: "40%", l: "Average Bill Savings" },
              { v: "25yr", l: "Panel Warranty" },
              { v: "100%", l: "MNRE Certified" },
            ].map((s) => (
              <div key={s.l} className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-3xl font-bold text-[#1E3A8A]" style={{ fontFamily: "Outfit, sans-serif" }}>{s.v}</p>
                <p className="text-slate-500 text-sm mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} data-testid={`value-${title.toLowerCase()}`} className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-[#F59E0B]">
                <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-5 group-hover:bg-[#F59E0B] transition-colors">
                  <Icon className="w-6 h-6 text-[#F59E0B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0F172A] py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Sun className="w-12 h-12 text-[#FACC15] mx-auto mb-5 animate-spin" style={{ animationDuration: "12s" }} />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Join the Solar Revolution
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let's build a brighter, cleaner future together. Get your free solar assessment today.
          </p>
          <Link to="/contact" data-testid="about-cta-btn" className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30">
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

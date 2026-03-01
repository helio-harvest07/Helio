import React from "react";
import { Link } from "react-router-dom";
import { Sun, Zap, ShieldCheck, Users, TrendingUp, Leaf, Star, ArrowRight, LayoutDashboard, Cpu, BarChart2, Globe, Battery, Repeat } from "lucide-react";
import SolarFlowAnimation from "@/components/SolarFlowAnimation";

const indianStates = [
  "Delhi NCR", "Mumbai", "Bengaluru", "Chennai", "Hyderabad",
  "Ahmedabad", "Jaipur", "Kolkata", "Pune", "Surat",
  "Tamil Nadu", "Gujarat", "Rajasthan", "Karnataka", "Maharashtra",
  "Telangana", "Andhra Pradesh", "Kerala", "Madhya Pradesh", "Uttar Pradesh",
  "Punjab", "Haryana", "West Bengal", "Odisha", "Bihar",
  "Chhattisgarh", "Goa", "Himachal Pradesh", "Uttarakhand", "Assam",
];

const products = [
  {
    icon: LayoutDashboard,
    tag: "Core Platform",
    title: "HelioHarvest SaaS",
    color: "from-blue-900 to-slate-900",
    border: "border-blue-500",
    features: [
      { icon: Zap, text: "Real-time power generation monitoring & CO₂ savings" },
      { icon: ShieldCheck, text: "Proactive failure alerts & instant technician dispatch" },
      { icon: Battery, text: "Digital Vault — invoices, warranties, service history" },
      { icon: Leaf, text: "Automated MRV reporting & carbon credit documentation" },
    ],
  },
  {
    icon: Cpu,
    tag: "Design & Procurement",
    title: "Solar Co-Pilot",
    color: "from-orange-950 to-slate-900",
    border: "border-orange-500",
    features: [
      { icon: Globe, text: "VR Digital Twin — immersive virtual roof walk-throughs" },
      { icon: Sun, text: "AI satellite shading analysis & optimal tilt calculations" },
      { icon: BarChart2, text: "Automated bill of materials & smart procurement" },
      { icon: TrendingUp, text: "Reduces soft costs & shortens sales cycles" },
    ],
  },
  {
    icon: Repeat,
    tag: "Fintech & Trading",
    title: "Energy Exchange",
    color: "from-green-950 to-slate-900",
    border: "border-green-500",
    features: [
      { icon: Users, text: "P2P Marketplace — AI-powered energy brokerage" },
      { icon: Zap, text: "Virtual Power Plant (VPP) orchestration across India" },
      { icon: Leaf, text: "Carbon credit monetization — 15% success fee" },
      { icon: BarChart2, text: "₹0.50–₹1.00 per kWh traded on P2P exchange" },
    ],
  },
];

const stats = [
  { value: "500+", label: "Installations" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "40%", label: "Avg Bill Savings" },
  { value: "25yr", label: "Warranty" },
];

const services = [
  {
    icon: Sun,
    title: "Solar Installation",
    desc: "End-to-end professional solar panel installation for homes and businesses. Custom-designed systems for maximum efficiency.",
  },
  {
    icon: Zap,
    title: "Energy Monitoring",
    desc: "Real-time live tracking of your power generation, cost savings, and CO₂ reduction — all in one dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & AMC",
    desc: "Annual maintenance contracts with proactive alerts and instant technician dispatch to keep your system running at peak.",
  },
];

const features = [
  { icon: TrendingUp, title: "ROI in 3-5 Years", desc: "Typical payback period with our optimized installations and government subsidies." },
  { icon: Leaf, title: "Zero Carbon Impact", desc: "Every installation contributes to India's 100 GW solar target and your carbon goals." },
  { icon: ShieldCheck, title: "Certified Technicians", desc: "All our engineers are MNRE-certified with years of hands-on installation experience." },
  { icon: Users, title: "End-to-End Support", desc: "From site survey to switch-on and beyond — we're with you every step of the way." },
];

const testimonials = [
  { name: "Ramesh Kumar", location: "Chennai, Tamil Nadu", stars: 5, text: "HelioHarvest reduced my electricity bill by ₹4,500/month. The installation was quick and professional." },
  { name: "Priya Sharma", location: "Ahmedabad, Gujarat", stars: 5, text: "Excellent service from survey to installation. The monitoring app is a game changer!" },
  { name: "Arjun Mehta", location: "Jaipur, Rajasthan", stars: 5, text: "Got MNRE subsidy processed through them. Saved ₹60,000 and the system is performing beyond expectations." },
];

export default function Home() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="min-h-screen bg-[#0F172A] flex items-center relative overflow-hidden pt-16">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F59E0B] opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#1E3A8A] opacity-10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="fade-up-1">
            <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/30 border border-[#3B82F6]/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
              <span className="text-slate-400 text-sm">India's Solar Revolution Starts Here</span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none mb-5 tracking-tight"
              style={{ fontFamily: "Outfit, sans-serif" }}
              data-testid="hero-heading"
            >
              Power Your <span className="text-[#FACC15]">Future</span>
              <br />with Solar Energy
            </h1>

            <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
              Professional solar installation services for homes and businesses across India.
              Save up to <strong className="text-white">40% on electricity bills</strong> while powering the renewable revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/contact"
                data-testid="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
              >
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 border-2 border-slate-600 text-white hover:border-[#F59E0B] hover:text-[#FACC15] transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>

            {/* Mini trust badges */}
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
              <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
              <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
              <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
              <Star className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
              <span className="ml-1">Rated 4.9/5 by 500+ customers</span>
            </div>
          </div>

          {/* Right: Solar Animation */}
          <div className="h-80 sm:h-96 lg:h-[480px] fade-up-2">
            <SolarFlowAnimation />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1E3A8A] py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center" data-testid={`stat-${s.label.toLowerCase().replace(" ", "-")}`}>
              <p className="text-3xl md:text-4xl font-bold text-[#FACC15]" style={{ fontFamily: "Outfit, sans-serif" }}>{s.value}</p>
              <p className="text-slate-300 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Our Purpose</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div
              data-testid="mission-card"
              className="relative overflow-hidden rounded-2xl bg-[#0F172A] p-10 text-white"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#F59E0B] opacity-10 rounded-full -translate-y-12 translate-x-12" />
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#FACC15]" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FACC15]" style={{ fontFamily: "Outfit, sans-serif" }}>Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-5">
                Transforming raw energy data into automated action — powering India's renewable revolution through our integrated platform.
              </p>
              <div className="space-y-2">
                {[
                  { label: "HelioHarvest SaaS", desc: "Real-time monitoring, automated alerts & digital vault" },
                  { label: "Solar Co-Pilot", desc: "AI-powered VR design, satellite analysis & smart procurement" },
                  { label: "Energy Exchange", desc: "P2P trading, Virtual Power Plants & carbon credit monetization" },
                ].map(({ label, desc }) => (
                  <div key={label} className="flex items-start gap-3 bg-white/5 rounded-lg px-4 py-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-[#FACC15] font-semibold text-sm">{label}</span>
                      <span className="text-slate-400 text-sm"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div
              data-testid="vision-card"
              className="relative overflow-hidden rounded-2xl bg-[#F59E0B] p-10 text-white"
            >
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12" />
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Our Vision</h3>
              <p className="text-amber-900 text-lg leading-relaxed font-medium">
                Powering the renewable revolution, one distributed asset at a time — becoming India's most trusted solar partner and the global operating system for clean energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Our Solar Services
            </h2>
            <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
              End-to-end solar solutions designed for maximum efficiency and long-term savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                data-testid={`service-card-${title.toLowerCase().replace(/ /g, "-")}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-[#F59E0B]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center mb-5 group-hover:bg-[#F59E0B] transition-colors">
                  <Icon className="w-6 h-6 text-[#F59E0B] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              data-testid="services-learn-more"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white font-semibold transition-all duration-300"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS PLATFORM ── */}
      <section className="bg-[#0F172A] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Our Platform</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              The Complete HelioHarvest Ecosystem
            </h2>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              Beyond installation — an integrated platform managing every phase of your solar journey, from design to carbon credits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(({ icon: Icon, tag, title, color, border, features }) => (
              <div
                key={title}
                data-testid={`product-card-${title.toLowerCase().replace(/ /g, "-")}`}
                className={`rounded-2xl bg-gradient-to-b ${color} border ${border}/40 p-8 hover:border-opacity-80 transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border ${border}/40 bg-white/5 text-xs font-medium text-slate-400 mb-5`}>
                  {tag}
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-11 h-11 rounded-xl border ${border}/40 bg-white/5 flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-[#FACC15]" />
                  </div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                </div>
                <div className="space-y-3">
                  {features.map(({ icon: FIcon, text }) => (
                    <div key={text} className="flex items-start gap-3">
                      <FIcon className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-400 text-sm leading-snug">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HELIOHARVEST ── */}      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Why Choose HelioHarvest?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8">
              We're not just installers — we're your long-term energy partners. From site assessment to switch-on to AMC, we handle everything so you can just enjoy clean, cheap energy.
            </p>
            <Link to="/contact" data-testid="why-us-cta" className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30">
              Book Free Site Survey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <h4 className="font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Customer Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} data-testid={`testimonial-${t.name.toLowerCase().replace(" ", "-")}`} className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FACC15] fill-[#FACC15]" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Ready to Switch to Solar?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get a free site survey and personalized quote. No obligations — just sunshine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              data-testid="cta-banner-btn"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919092379023"
              data-testid="cta-banner-phone"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A] font-semibold transition-all"
            >
              Call +91 90923 79023
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

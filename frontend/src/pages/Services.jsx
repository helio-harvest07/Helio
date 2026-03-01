import React from "react";
import { Link } from "react-router-dom";
import { Sun, Zap, ShieldCheck, ClipboardList, Wrench, BarChart2, CheckCircle, ArrowRight, Phone } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Rooftop Solar Installation",
    desc: "Complete rooftop solar panel installation for residential homes and commercial buildings. We handle everything from permits to switch-on.",
    includes: [
      "Free site & roof assessment",
      "Custom system design (2kW – 500kW+)",
      "Premium-grade panels & inverters",
      "MNRE subsidy assistance",
      "Grid connection & net metering",
      "1-year installation warranty",
    ],
  },
  {
    icon: BarChart2,
    title: "Real-Time Energy Monitoring",
    desc: "Stay in full control of your solar investment with our live monitoring platform. Track generation, savings, and performance 24/7.",
    includes: [
      "Live power generation dashboard",
      "CO₂ savings tracker",
      "Monthly performance reports",
      "Automated failure alerts",
      "Mobile app access",
      "Historical data & analytics",
    ],
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contract (AMC)",
    desc: "Protect your solar investment with our comprehensive AMC. Proactive maintenance keeps your system generating at peak efficiency.",
    includes: [
      "Bi-annual panel cleaning",
      "Inverter health checks",
      "Wiring & mounting inspection",
      "Instant technician dispatch",
      "Performance guarantee",
      "Emergency support 365 days",
    ],
  },
];

const steps = [
  { step: "01", icon: ClipboardList, title: "Free Site Survey", desc: "Our certified engineer visits your property to assess roof orientation, shading, load requirements, and the ideal system size." },
  { step: "02", icon: Sun, title: "Custom Design & Quote", desc: "We use satellite imagery and AI-powered tools to design the optimal solar system layout and provide a transparent quote within 48 hours." },
  { step: "03", icon: ShieldCheck, title: "Permits & Subsidies", desc: "We handle all DISCOM applications, MNRE subsidy paperwork, and grid-connection approvals on your behalf." },
  { step: "04", icon: Zap, title: "Installation & Switch-On", desc: "Our MNRE-certified team installs your system in 1–3 days. We test, commission, and hand over the keys to your solar future." },
];

const benefits = [
  { value: "₹0", label: "Initial Cost with Subsidy Option" },
  { value: "40%", label: "Average Monthly Bill Reduction" },
  { value: "25yr", label: "Panel Performance Warranty" },
  { value: "3-5yr", label: "Typical Payback Period" },
];

export default function Services() {
  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#0F172A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/30 border border-[#3B82F6]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
            <span className="text-slate-400 text-sm">Professional Solar Services</span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
            data-testid="services-heading"
          >
            Solar Solutions <span className="text-[#FACC15]">Built for India</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            From site survey to switch-on — end-to-end solar installation and monitoring services tailored for homes and businesses across India.
          </p>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1723046106153-8d3810267931?auto=format&fit=crop&w=1400&q=80"
          alt="Solar panels on a modern home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </div>

      {/* ── SERVICE CARDS ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Everything You Need
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc, includes }) => (
              <div
                key={title}
                data-testid={`service-detail-${title.toLowerCase().replace(/ /g, "-")}`}
                className="rounded-2xl border border-slate-100 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card header */}
                <div className="bg-[#0F172A] p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#FACC15]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
                {/* Includes */}
                <div className="bg-white p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">What's included</p>
                  <ul className="space-y-3">
                    {includes.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                        <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]" style={{ fontFamily: "Outfit, sans-serif" }}>
              How It Works
            </h2>
            <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
              Going solar with HelioHarvest is simple, fast, and stress-free. Here's what to expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map(({ step, icon: Icon, title, desc }, i) => (
              <div key={step} data-testid={`step-${step}`} className="relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 right-0 w-full h-0.5 bg-gradient-to-r from-[#F59E0B] to-transparent translate-x-1/2 z-0" />
                )}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-4xl font-bold text-[#F59E0B]/20" style={{ fontFamily: "Outfit, sans-serif" }}>{step}</span>
                    <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#F59E0B]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS / ROI ── */}
      <section className="bg-[#1E3A8A] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "Outfit, sans-serif" }}>
              The Solar Advantage
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#FACC15]" style={{ fontFamily: "Outfit, sans-serif" }}>{b.value}</p>
                <p className="text-slate-300 text-sm mt-2">{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MONITORING FEATURE ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1662601311150-c20f76b7cb20?auto=format&fit=crop&w=800&q=80"
              alt="Energy monitoring dashboard"
              className="w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Smart Monitoring</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              See Your Solar Working — Live
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              After installation, track your system's performance in real time. Know exactly how much power you're generating, how much you're saving, and how much CO₂ you've offset.
            </p>
            {["Live kWh generation dashboard", "Monthly savings reports", "Automated technician alerts", "CO₂ offset tracker", "Mobile app access (iOS & Android)"].map((f) => (
              <div key={f} className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0" />
                <span className="text-slate-600 text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0F172A] py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Ready to Go Solar?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Get a free site survey and customized quote — no obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" data-testid="services-cta-btn" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/30">
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:+919092379023" data-testid="services-phone-cta" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 border-2 border-slate-600 text-white hover:border-[#F59E0B] hover:text-[#FACC15] font-semibold transition-all">
              <Phone className="w-4 h-4" /> +91 90923 79023
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

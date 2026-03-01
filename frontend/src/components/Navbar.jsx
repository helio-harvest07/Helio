import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scroll-solid" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group" data-testid="logo-link">
          <div className="w-9 h-9 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
            <Sun className="w-5 h-5 text-white" />
          </div>
          <span className="text-white font-bold text-xl" style={{ fontFamily: "Outfit, sans-serif" }}>
            Helio<span className="text-[#FACC15]">Harvest</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`nav-${link.label.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-[#FACC15]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Phone */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+919092379023"
            data-testid="nav-phone"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#FACC15] text-sm transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 90923 79023
          </a>
          <Link
            to="/contact"
            data-testid="nav-cta-btn"
            className="rounded-full px-5 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          data-testid="mobile-menu-btn"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F172A]/98 border-t border-slate-800 px-6 pb-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              className={`block py-3 text-base font-medium border-b border-slate-800 transition-colors ${
                location.pathname === link.path ? "text-[#FACC15]" : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+919092379023"
            className="flex items-center gap-2 text-[#FACC15] mt-4 text-sm"
          >
            <Phone className="w-4 h-4" /> +91 90923 79023
          </a>
          <Link
            to="/contact"
            className="block mt-4 text-center rounded-full px-6 py-3 bg-[#F59E0B] text-white font-semibold"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}

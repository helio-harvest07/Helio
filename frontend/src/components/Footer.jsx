import React from "react";
import { Link } from "react-router-dom";
import { Sun, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ],
  Services: [
    { label: "Solar Installation", path: "/services" },
    { label: "Site Assessment", path: "/services" },
    { label: "Maintenance & AMC", path: "/services" },
    { label: "Energy Monitoring", path: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-300" data-testid="footer">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#F59E0B] flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-bold text-xl" style={{ fontFamily: "Outfit, sans-serif" }}>
              Helio<span className="text-[#FACC15]">Harvest</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Transforming raw energy data into automated action—powering the renewable revolution, one installation at a time.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{title}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#FACC15] text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
          <div className="space-y-3">
            <a
              href="tel:+919092379023"
              data-testid="footer-phone"
              className="flex items-center gap-3 text-slate-400 hover:text-[#FACC15] text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              +91 90923 79023
            </a>
            <a
              href="mailto:hello@helioharvest.in"
              className="flex items-center gap-3 text-slate-400 hover:text-[#FACC15] text-sm transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              hello@helioharvest.in
            </a>
            <div className="flex items-start gap-3 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
              <span>India — Serving Tamil Nadu, Gujarat & Rajasthan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 px-6 md:px-12 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} HelioHarvest. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            The Global Operating System for Energy
          </p>
        </div>
      </div>
    </footer>
  );
}

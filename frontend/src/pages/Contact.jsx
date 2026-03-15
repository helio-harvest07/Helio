import React, { useState } from "react";
import axios from "axios";
import { Phone, Mail, MapPin, Clock, Sun, CheckCircle, AlertCircle, Loader, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90923 79023",
    href: "tel:+919092379023",
    sub: "Mon–Sat, 9am–7pm IST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@helioharvest.in",
    href: "mailto:hello@helioharvest.in",
    sub: "Reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "91/1, MTP Road, Coimbatore, 641030",
    href: "https://maps.google.com/?q=91/1,MTP+Road,Coimbatore,641030,India",
    sub: "India — Pan-India services available",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Sat: 9am – 7pm",
    href: null,
    sub: "Sunday: Closed",
  },
];

const initialForm = { name: "", email: "", phone: "", address: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Generate WhatsApp message with lead details
  const generateWhatsAppLink = (data) => {
    const message = `🌞 *New Solar Inquiry from HelioHarvest Website*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
📍 *Address:* ${data.address || "Not provided"}

💬 *Message:*
${data.message || "No additional message"}

---
Sent via HelioHarvest Lead Form`;
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/919092379023?text=${encodedMessage}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await axios.post(`${API}/leads`, form);
      setSubmittedData({ ...form }); // Store submitted data for WhatsApp link
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // Handle WhatsApp button click
  const handleWhatsAppClick = () => {
    if (submittedData) {
      window.open(generateWhatsAppLink(submittedData), "_blank");
    }
  };

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section className="bg-[#0F172A] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/30 border border-[#3B82F6]/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FACC15] animate-pulse" />
            <span className="text-slate-400 text-sm">Let's Connect</span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "Outfit, sans-serif" }}
            data-testid="contact-heading"
          >
            Get Your <span className="text-[#FACC15]">Free Solar Quote</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Fill in your details below and our solar expert will reach out within 24 hours with a customized quote and free site assessment.
          </p>

          {/* Phone CTA */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center animate-pulse">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <a
              href="tel:+919092379023"
              data-testid="hero-phone-link"
              className="text-2xl font-bold text-[#FACC15] hover:underline"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              +91 90923 79023
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#F8FAFC] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: Info (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <p className="text-[#F59E0B] text-sm font-semibold uppercase tracking-widest mb-3">Contact Info</p>
              <h2 className="text-3xl font-bold text-[#0F172A] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
                We're Here to Help
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Our solar experts are available Monday through Saturday to answer questions, schedule site surveys, or walk you through your first solar system.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, value, href, sub }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0 border border-[#F59E0B]/30">
                  <Icon className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      data-testid={`contact-info-${label.toLowerCase()}`}
                      className="font-semibold text-[#0F172A] hover:text-[#F59E0B] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-semibold text-[#0F172A]">{value}</p>
                  )}
                  <p className="text-slate-400 text-sm">{sub}</p>
                </div>
              </div>
            ))}

            {/* Why get a quote */}
            <div className="bg-[#0F172A] rounded-2xl p-6 mt-6">
              <Sun className="w-8 h-8 text-[#FACC15] mb-3" />
              <h4 className="text-white font-bold mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>What happens next?</h4>
              {[
                "We call you within 24 hours",
                "Free site survey scheduled",
                "Custom quote in 48 hours",
                "Subsidy & financing options explained",
              ].map((s) => (
                <div key={s} className="flex items-center gap-2 text-slate-400 text-sm mt-2">
                  <CheckCircle className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form (3 cols) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-slate-100">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>
                Request Your Free Quote
              </h3>
              <p className="text-slate-400 text-sm mb-8">No obligations. 100% free. We respect your privacy.</p>

              {/* Success */}
              {status === "success" && (
                <div data-testid="form-success" className="mb-6 p-5 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-semibold">Thank you! Your inquiry has been submitted.</p>
                      <p className="text-green-600 text-sm mt-1">Click below to send your details directly to our WhatsApp for faster response!</p>
                    </div>
                  </div>
                  <button
                    onClick={handleWhatsAppClick}
                    data-testid="whatsapp-send-btn"
                    className="mt-4 w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Send to WhatsApp
                  </button>
                  <p className="text-center text-slate-400 text-xs mt-3">
                    Or call us directly at +91 90923 79023
                  </p>
                </div>
              )}

              {/* Error */}
              {status === "error" && (
                <div data-testid="form-error" className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 font-semibold">Something went wrong.</p>
                    <p className="text-red-500 text-sm">Please try again or call us directly.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" data-testid="lead-form">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      data-testid="input-name"
                      className="w-full h-12 rounded-lg border border-slate-200 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      data-testid="input-phone"
                      className="w-full h-12 rounded-lg border border-slate-200 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all bg-slate-50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    data-testid="input-email"
                    className="w-full h-12 rounded-lg border border-slate-200 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all bg-slate-50"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Installation Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="City, State — e.g. Chennai, Tamil Nadu"
                    data-testid="input-address"
                    className="w-full h-12 rounded-lg border border-slate-200 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all bg-slate-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Tell Us About Your Requirements
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="e.g. 3BHK home, ~₹4,000/month electricity bill, interested in rooftop solar..."
                    data-testid="input-message"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all bg-slate-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  data-testid="submit-btn"
                  className="w-full h-13 py-4 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-500/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Sun className="w-5 h-5" />
                      Get My Free Solar Quote
                    </>
                  )}
                </button>

                <p className="text-center text-slate-400 text-xs">
                  By submitting, you agree to be contacted by our solar experts. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

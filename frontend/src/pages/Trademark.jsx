import React from "react";
import { Sun, FileText } from "lucide-react";

export default function Trademark() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="pt-28 pb-16 px-6 md:px-12 bg-gradient-to-b from-[#0F172A] to-[#1a2744]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full mb-6">
            <FileText className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-[#FACC15] text-sm font-medium">Legal Information</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Trademark & Terms of Use
          </h1>
          <p className="text-slate-400 text-lg">
            Last updated: {new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1E293B] rounded-2xl p-8 md:p-12 border border-slate-700/50">
            
            <div className="space-y-8 text-slate-300">
              
              {/* Trademark Section */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Trademark Information</h2>
                <p className="mb-4">
                  "HelioHarvest" and the HelioHarvest logo are trademarks of HelioHarvest. All rights reserved.
                </p>
                <div className="flex items-center gap-4 p-4 bg-[#0F172A] rounded-lg mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F59E0B] flex items-center justify-center">
                    <Sun className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Helio<span className="text-[#FACC15]">Harvest</span>™
                    </p>
                    <p className="text-slate-400 text-sm">The Global Operating System for Energy</p>
                  </div>
                </div>
                <p>
                  The following product names are also trademarks of HelioHarvest:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong className="text-white">Solar Copilot™</strong> - AI-powered energy management platform</li>
                  <li><strong className="text-white">Peer-to-Peer (P2P) Energy Trading™</strong> - Decentralized energy marketplace</li>
                  <li><strong className="text-white">HelioGrid™</strong> - Smart grid integration system</li>
                </ul>
              </div>

              {/* Terms of Use */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Terms of Use</h2>
                <p>
                  By accessing and using the HelioHarvest website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property Rights</h2>
                <p className="mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of HelioHarvest and is protected by Indian and international copyright laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any materials from our website without prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Permitted Use</h2>
                <p className="mb-4">You may use our website for lawful purposes only. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website in any way that violates applicable laws</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Transmit any malicious code or viruses</li>
                  <li>Collect user information without consent</li>
                  <li>Impersonate HelioHarvest or its representatives</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Service Disclaimer</h2>
                <p>
                  While we strive to provide accurate information about our solar installation services, actual savings and performance may vary based on location, weather conditions, property specifications, and other factors. All estimates provided are for informational purposes only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p>
                  HelioHarvest shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our website or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites. We encourage you to review their policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Tamil Nadu, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website constitutes acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p>
                  For questions regarding these terms or trademark inquiries, please contact:
                </p>
                <div className="mt-4 p-4 bg-[#0F172A] rounded-lg">
                  <p className="text-[#FACC15] font-semibold">HelioHarvest Legal</p>
                  <p>Email: solar@helioharvest.co.in</p>
                  <p>Phone: +91 90923 79023</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

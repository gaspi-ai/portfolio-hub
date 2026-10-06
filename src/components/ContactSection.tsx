"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MapPin, 
  Calendar, 
  Clock, 
  Sparkles
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Architecture Consultation",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "Architecture Consultation",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>INITIATE DIALOGUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Exceptional
          </h2>
          <p className="text-zinc-400 text-base mt-2">
            Available for principal engineering contracts, system audits, and advisory engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white">
                Contact Details
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Whether you have an upcoming project, need architectural advice, or want to explore high-impact engineering leadership, reach out directly.
              </p>

              {/* Direct Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">Direct Email</span>
                    <span className="text-sm font-semibold text-white">
                      {PORTFOLIO_DATA.profile.socials.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  id="copy-email-btn"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Quick Info Grid */}
              <div className="space-y-3 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>San Francisco, California (Pacific Time / PST)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Typical Response Time: &lt; 12 hours</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02]">
                  <Calendar className="w-4 h-4 text-violet-400" />
                  <span>Next Available Start Date: Immediate / Q4</span>
                </div>
              </div>

            </div>

            {/* Advisory Consultation Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-violet-950/40 border border-cyan-500/30">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono mb-2">
                <Sparkles className="w-4 h-4" />
                <span>ADVISORY SESSIONS</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                Book a 30-min Technical Discovery
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                Discuss system bottlenecks, migration blueprints, or AI architecture roadmaps.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule on Calendly</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Transmission Received
                  </h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out. I&apos;ve received your message and will review your requirements within 12 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-zinc-300 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-300 mb-2">
                      Inquiry Focus
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400/80 transition-all"
                    >
                      <option value="Architecture Consultation">Architecture Consultation &amp; System Review</option>
                      <option value="Full-Stack Web App Development">Full-Stack Web App Development</option>
                      <option value="AI Integration & LLM Pipeline">AI Integration &amp; LLM Pipeline</option>
                      <option value="Staff/Principal Role Inquiry">Staff / Principal Engineering Role</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-300 mb-2">
                      Project Details &amp; Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your product goals, technical stack, or timeline..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400/80 focus:ring-1 focus:ring-cyan-400/40 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-contact-form-btn"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/25 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

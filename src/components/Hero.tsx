"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Terminal, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-xs font-medium text-cyan-300 backdrop-blur-md mb-6 shadow-sm shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{profile.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Engineering <span className="text-gradient-cyan">Scalable Systems</span> &amp;{" "}
              <span className="text-gradient-violet">Intelligent Apps</span>.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8">
              Hi, I&apos;m <strong className="text-white font-semibold">{profile.name}</strong>. {profile.bio}
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-lg shadow-cyan-500/25 active:scale-95 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                id="hero-contact-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all backdrop-blur-md active:scale-95"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href="#stack"
                id="hero-resume-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                <Cpu className="w-4 h-4 text-violet-400" />
                <span>View Tech Stack</span>
              </a>
            </div>

            {/* Quick Skills Pills */}
            <div className="flex items-center gap-2 flex-wrap text-xs text-zinc-400">
              <span className="text-zinc-500 uppercase tracking-wider font-mono mr-1">Core:</span>
              {["Next.js 15", "TypeScript", "PyTorch", "Kubernetes", "Tailwind CSS v4", "Go"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 font-mono text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Avatar and Live Terminal Telemetry */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-violet-500/20 to-teal-500/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              {/* Glass Card Container */}
              <div className="relative glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden">
                
                {/* Header Profile Row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-cyan-400/50 shadow-md">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {profile.name}
                    </h2>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">
                      {profile.role}
                    </p>
                    <p className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {profile.location}
                    </p>
                  </div>
                </div>

                {/* Simulated Telemetry / System Status Box */}
                <div className="rounded-2xl bg-black/60 border border-white/5 p-4 font-mono text-xs mb-4">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                      <span className="text-[11px] text-zinc-500 ml-1">system_vance.sh</span>
                    </div>
                    <span className="text-emerald-400 text-[11px]">ONLINE</span>
                  </div>

                  <div className="space-y-1.5 text-zinc-300">
                    <p className="text-zinc-500">$ probe --target production-cluster</p>
                    <p className="text-cyan-300">✓ 45 microservices healthy</p>
                    <p className="text-zinc-400">✓ Latency p99: 1.2ms [Optimal]</p>
                    <p className="text-violet-400">✓ AI Inference Engine: Active (vLLM)</p>
                    <p className="text-emerald-400">✓ Zero security incidents recorded</p>
                  </div>
                </div>

                {/* Quick Highlights Badge Row */}
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block text-zinc-400 text-[11px]">Specialization</span>
                    <span className="text-white font-medium">Distributed AI</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="block text-zinc-400 text-[11px]">Availability</span>
                    <span className="text-emerald-400 font-medium">Open for H2</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {profile.metrics.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/10 text-left relative overflow-hidden group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                {item.value}
              </div>
              <div className="text-sm font-medium text-zinc-300">
                {item.label}
              </div>
              <div className="text-xs text-cyan-400/80 font-mono mt-1">
                {item.change}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

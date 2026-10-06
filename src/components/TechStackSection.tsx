"use client";

import React, { useState } from "react";
import { 
  Layers, 
  Server, 
  BrainCircuit, 
  Boxes, 
  Cpu, 
  Code2, 
  Palette, 
  Zap, 
  Terminal, 
  Database, 
  Binary, 
  Gauge, 
  ShieldCheck, 
  GitBranch, 
  Activity, 
  Lock,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TechStackSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-cyan-400" />,
    Code2: <Code2 className="w-5 h-5 text-blue-400" />,
    Palette: <Palette className="w-5 h-5 text-teal-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Server: <Server className="w-5 h-5 text-indigo-400" />,
    Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
    Database: <Database className="w-5 h-5 text-violet-400" />,
    Cpu: <Cpu className="w-5 h-5 text-sky-400" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5 text-pink-400" />,
    Binary: <Binary className="w-5 h-5 text-purple-400" />,
    Gauge: <Gauge className="w-5 h-5 text-orange-400" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    Boxes: <Boxes className="w-5 h-5 text-cyan-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-rose-400" />,
    Activity: <Activity className="w-5 h-5 text-lime-400" />,
    Lock: <Lock className="w-5 h-5 text-yellow-400" />,
  };

  const currentCategory = PORTFOLIO_DATA.skillCategories[activeCategoryIndex];

  return (
    <section id="stack" className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architectural Matrix &amp; Tech Stack
          </h2>
          <p className="text-zinc-400 text-base mt-2">
            Engineered with deep specialization across modern frontend runtimes, distributed backends, and AI model orchestration.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 ${
                activeCategoryIndex === idx
                  ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white border border-cyan-400/40 shadow-lg shadow-cyan-500/10"
                  : "bg-white/[0.02] text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05] border border-white/5"
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Content */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {currentCategory.title}
            </h3>
            <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed">
              {currentCategory.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {iconMap[skill.iconName] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-cyan-400 shrink-0 ml-3">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Architecture Pillars Footer */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Zero Runtime Bloat
              </span>
              <p className="text-xs text-zinc-400">
                Optimized bundle budgets &lt; 80kB initial load
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block mb-1">
                Sub-Second p99
              </span>
              <p className="text-xs text-zinc-400">
                Low latency edge routing and aggressive caching
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-wider block mb-1">
                Strict Type Safety
              </span>
              <p className="text-xs text-zinc-400">
                End-to-end type soundness from DB schema to UI
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

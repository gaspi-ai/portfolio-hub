"use client";

import React from "react";
import { Briefcase, MapPin, CheckCircle } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Leadership
          </h2>
          <p className="text-zinc-400 text-base mt-2">
            Track record of shipping mission-critical systems and scaling high-velocity engineering organizations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {PORTFOLIO_DATA.experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-10 group">
              
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-[#07090e] shadow-md shadow-cyan-400/50 group-hover:scale-125 transition-transform duration-300" />

              {/* Period badge on desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-cyan-400 font-semibold mb-2 md:mb-0 md:text-right md:w-28">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-zinc-400 mt-1 flex-wrap">
                      <span className="font-semibold text-zinc-200">{exp.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.location}
                      </span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="mb-6 space-y-2.5">
                  <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider block mb-2">
                    Key Outcomes
                  </span>
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-cyan-300/90 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

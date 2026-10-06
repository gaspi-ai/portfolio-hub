"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black/60 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="text-lg font-bold text-white tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="text-xs text-zinc-400 font-mono">
                / Portfolio Hub
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Designing, building, and scaling resilient digital architectures with zero compromises on performance and aesthetics.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>All systems operational &bull; 99.99% uptime</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About &amp; Overview
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#stack" className="hover:text-cyan-400 transition-colors">
                  Tech Stack Matrix
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact &amp; Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Back To Top */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider">
              Network
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors pt-2"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-4">
          <div>
            &copy; 2026 {PORTFOLIO_DATA.profile.name}. Built with Next.js 15 &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with precision</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Tech Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-panel border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            id="brand-logo"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-cyan-500/40 group-hover:ring-cyan-400 transition-all duration-300 shadow-md shadow-cyan-500/20">
              <Image
                src={PORTFOLIO_DATA.profile.avatar}
                alt={PORTFOLIO_DATA.profile.name}
                fill
                sizes="40px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                {PORTFOLIO_DATA.profile.name}
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              </span>
              <span className="text-xs text-zinc-400 block font-mono">
                Staff Systems Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.08] rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              id="nav-contact-btn"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Let&apos;s Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            className="md:hidden p-2 text-zinc-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 glass-panel rounded-2xl border border-white/10 animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-zinc-200 hover:bg-white/10 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <a
                    href={PORTFOLIO_DATA.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-zinc-300 bg-white/5 rounded-xl"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={PORTFOLIO_DATA.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-zinc-300 bg-white/5 rounded-xl"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300"
                >
                  Contact Me
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

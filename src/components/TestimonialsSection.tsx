"use client";

import React from "react";
import Image from "next/image";
import { Star, MessageSquareQuote } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative bg-black/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>ENDORSEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by Engineering Leaders
          </h2>
          <p className="text-zinc-400 text-base mt-2">
            Feedback from engineering leaders, product executives, and architects I&apos;ve collaborated with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.testimonials.map((test, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed italic mb-8">
                  &ldquo;{test.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10 shrink-0">
                  <Image
                    src={test.avatar}
                    alt={test.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {test.name}
                  </h4>
                  <p className="text-xs text-cyan-400">
                    {test.role}
                  </p>
                  <p className="text-[11px] text-zinc-500 font-mono">
                    {test.company}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

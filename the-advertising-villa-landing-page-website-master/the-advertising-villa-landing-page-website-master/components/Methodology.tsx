import React from 'react';
import { Reveal } from './ui/Reveal';

const steps = [
  "Establish Clear Goals", "Know Your Audience", "Consistent Branding",
  "Regular Posting", "Engaging Content", "Two Way Communication",
  "Monitor Mentions", "Stay Current", "Analyse & Adjust",
  "Collaborate & Network", "Crisis Management"
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <Reveal width="100%">
          <h2 className="text-3xl md:text-5xl font-chunky font-bold text-center text-brand-black dark:text-white mb-16">
            Social Media Methodology
          </h2>
        </Reveal>

        <div className="relative max-w-3xl mx-auto h-[400px] sm:h-[600px] flex items-center justify-center">
          {/* Center Hub */}
          <div className="absolute z-10 w-32 h-32 md:w-56 md:h-56 bg-brand-card dark:bg-zinc-900 rounded-full flex items-center justify-center text-brand-black dark:text-white font-chunky font-bold text-center p-4 shadow-[0_0_30px_rgba(168,85,247,0.2)] border border-brand-purple animate-pulse">
            Social<br/>Success<br/>Cycle
          </div>

          {/* Orbits */}
          <div className="absolute inset-0 border border-dashed border-slate-200 dark:border-zinc-800 rounded-full opacity-100 animate-spin-slow"></div>
          <div className="absolute inset-[15%] border border-dashed border-slate-200 dark:border-zinc-800 rounded-full opacity-100 animate-spin-reverse-slow"></div>

          {/* Steps */}
          {steps.map((step, i) => {
            const angle = (i * 360) / steps.length;
            const radius = 42; // Percentage
            return (
              <div
                key={i}
                className="absolute w-28 md:w-36 text-xs md:text-sm text-center transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${50 + radius * Math.sin((angle * Math.PI) / 180)}%`,
                  left: `${50 + radius * Math.cos((angle * Math.PI) / 180)}%`,
                }}
              >
                <Reveal delay={i * 0.1}>
                  <div className="bg-white/80 dark:bg-zinc-900/80 p-2 md:p-3 rounded-lg border border-slate-200 dark:border-zinc-800 font-bold text-slate-600 dark:text-zinc-300 hover:bg-brand-teal hover:text-white hover:border-brand-teal dark:hover:bg-brand-teal dark:hover:text-white transition-colors cursor-default backdrop-blur-md hover:scale-110 duration-300 shadow-sm">
                    {step}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
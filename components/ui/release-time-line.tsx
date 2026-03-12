"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Monitor, Settings, Code, Sparkles, Layout } from "lucide-react";
import { Button } from "./button";

export type TimeLine_01Entry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface TimeLine_01Props {
  title?: string;
  description?: string;
  entries?: TimeLine_01Entry[];
  className?: string;
}

export const defaultEntries: TimeLine_01Entry[] = [
  {
    icon: Layout,
    title: "Phase 1: Discovery & Strategy",
    subtitle: "Understanding Your Goals",
    description: "Before we write a single line of code or design a single pixel, we dive deep into your business, your target audience, and your market positioning to ensure the website drives real results.",
    items: [
      "Comprehensive stakeholder interviews",
      "Competitor and market analysis",
      "Audience persona development",
      "Brand voice and tone alignment",
      "Strategic roadmap creation",
    ],
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2669&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Phase 2: UI/UX & Wireframing",
    subtitle: "Designing for Conversion",
    description: "We translate strategy into structure. By developing high-fidelity wireframes and mapping out the user journey, we create intuitive experiences that guide visitors exactly where they need to go.",
    items: [
      "User journey mapping & flowcharts",
      "Low to high-fidelity wireframing",
      "Interactive prototyping",
      "Conversion rate optimization (CRO) focus",
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Code,
    title: "Phase 3: Development & Engineering",
    subtitle: "Building the Engine",
    description: "Our engineering team brings the designs to life using modern tech stacks. We ensure the website is lightning-fast, fully responsive, and built to scale alongside your business.",
    items: [
      "Front-end architecture setup",
      "Custom animation and interaction development",
      "CMS integration (Sanity, WordPress, etc.)",
      "Performance and SEO optimization",
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    icon: Monitor,
    title: "Phase 4: Testing & Launch",
    subtitle: "Deploying Perfection",
    description: "Prior to launch, we subject the website to rigorous QA testing across all devices and browsers, ensuring a flawless experience for every user from day one.",
    items: [
      "Cross-browser & cross-device testing",
      "Load time & performance benchmarking",
      "Accessibility (a11y) compliance checks",
      "Final SEO technical review",
      "Smooth, zero-downtime deployment",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    button: {
      url: "#contact",
      text: "Start Your Project",
    },
  },
];

export default function TimeLine_01({
  title = "Our proven process.",
  description = "A systematic approach to building high-converting websites from the ground up.",
  entries = defaultEntries,
}: TimeLine_01Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;

    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };

    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-black dark relative z-10">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-brand-teal font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">How We Work</span>
          <h2 className="mb-6 text-3xl font-chunky font-black tracking-tight md:text-5xl lg:text-7xl text-white">
            {title}
          </h2>
          <p className="mb-12 text-base text-zinc-400 md:text-lg lg:text-xl md:max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-24 md:mt-24 md:space-y-32">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                className="relative flex flex-col gap-6 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta column */}
                <div className="top-32 flex h-min w-72 shrink-0 items-start gap-4 md:sticky z-10 transition-all duration-500">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-2xl transition-all duration-500 ${
                      isActive ? "bg-brand-teal text-white shadow-[0_0_20px_rgba(20,184,166,0.5)]" : "bg-zinc-900 text-zinc-600"
                    }`}>
                      <entry.icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col pt-1">
                      <span className={`text-lg font-chunky font-bold transition-colors duration-500 ${isActive ? "text-white" : "text-zinc-500"}`}>
                        {entry.title}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-widest uppercase mt-1 text-zinc-600">
                        {entry.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Invisible sentinel */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-32 left-0 h-10 w-10 opacity-0"
                />

                {/* Content column */}
                <article
                  className={
                    "flex flex-col rounded-[2rem] border p-4 md:p-5 transition-all duration-700 ease-out flex-1 " +
                    (isActive
                      ? "border-white/10 bg-zinc-900/80 shadow-2xl scale-100 opacity-100"
                      : "border-transparent bg-transparent scale-95 opacity-40 grayscale")
                  }
                >
                  {entry.image && (
                    <div className="w-full h-56 md:h-80 rounded-2xl overflow-hidden mb-6">
                      <img
                        src={entry.image}
                        alt={`${entry.title} visual`}
                        className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? "scale-100" : "scale-110"}`}
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-6 px-2 md:px-4">
                    <div className="space-y-3">
                      <p
                        className={
                          "text-base leading-relaxed md:text-lg transition-all duration-500 " +
                          (isActive 
                            ? "text-zinc-300" 
                            : "text-zinc-600")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Expandable content */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-700 ease-out " +
                        (isActive 
                          ? "grid-rows-[1fr] opacity-100" 
                          : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-6 pt-2 pb-4">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-2xl border border-white/5 bg-black/40 p-6">
                              <ul className="space-y-3">
                                {entry.items.map((item, itemIndex) => (
                                  <li 
                                    key={itemIndex} 
                                    className="flex items-start gap-4 text-sm md:text-base text-zinc-400"
                                  >
                                    <div className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end pt-2">
                              <Button 
                                variant="default" 
                                size="lg"
                                className="group bg-brand-teal hover:bg-brand-teal/90 text-white font-chunky font-bold rounded-full transition-all duration-300 px-8" 
                                asChild
                              >
                                <a href={entry.button.url}>
                                  {entry.button.text} 
                                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

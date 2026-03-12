import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';
import { SparklesCore } from './ui/sparkles';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { GlassButton } from './ui/glass-button';
import TimeLine_01 from './ui/release-time-line';
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects';
import CardFlip from './ui/flip-card';
import { SEOFeaturesSection } from './ui/seo-features-section';
import MatrixBackground from './ui/asd';
import { 
  Rocket, 
  Zap, 
  Search, 
  ShieldCheck, 
  Globe, 
  Layout, 
  Target, 
  BarChart, 
  MousePointer2,
  FileSearch,
  Users,
  TrendingUp
} from 'lucide-react';

const seoServicesExtended = [
  {
    title: "Keyword Research",
    subtitle: "Targeting intent, not just volume.",
    description: "We identify the exact phrases your customers use when they're ready to buy, ensuring every visitor is a potential lead.",
    features: ["Buyer Intent Analysis", "Competitor Gap Study", "Long-tail Strategy", "Niche Identification"],
    icon: <Search className="h-6 w-6 text-white" />,
    color: "#14b8a6"
  },
  {
    title: "On-Page SEO",
    subtitle: "Perfectly optimized for humans and bots.",
    description: "We refine your content and structure to ensure search engines understand your value while users enjoy the experience.",
    features: ["Clarity Overload", "Semantic Structure", "Meta Tag Mastery", "Internal Link Mesh"],
    icon: <Layout className="h-6 w-6 text-white" />,
    color: "#ec4899"
  },
  {
    title: "Technical SEO",
    subtitle: "Behind-the-scenes engineering for speed.",
    description: "Lightning-fast load times and flawless indexing. We fix the hidden issues that prevent your site from ranking.",
    features: ["Core Web Vitals", "Crawl Optimization", "Schema Markup", "Sitemap Precision"],
    icon: <ShieldCheck className="h-6 w-6 text-white" />,
    color: "#8b5cf6"
  },
  {
    title: "Off-Page SEO",
    subtitle: "Building authority that lasts.",
    description: "Strategic link building and digital PR that establish your website as the go-to authority in your industry.",
    features: ["Quality Backlinks", "Brand Mentions", "Digital PR", "Social Proofing"],
    icon: <Globe className="h-6 w-6 text-white" />,
    color: "#3b82f6"
  },
  {
    title: "Page Optimization",
    subtitle: "Designed to rank. Built to convert.",
    description: "Ranking is only half the battle. We optimize your pages to ensure visitors take action once they arrive.",
    features: ["Conversion Logic", "UX Audit", "A/B Testing", "Aesthetic Polish"],
    icon: <Zap className="h-6 w-6 text-white" />,
    color: "#f59e0b"
  },
  {
    title: "Competitor Analysis",
    subtitle: "Reverse-engineering market leaders.",
    description: "We study what's working for your competitors and find the gaps where you can outperform them easily.",
    features: ["Strategy Tracking", "Backlink Analysis", "Content Audit", "Market Share Study"],
    icon: <Rocket className="h-6 w-6 text-white" />,
    color: "#ef4444"
  }
];

const seoTimelineEntries = [
  {
    icon: FileSearch,
    title: "Phase 1: Deep Audit & Intent Search",
    subtitle: "The Foundation",
    description: "We start by dismantling your current visibility and analyzing exactly where the gaps are, focusing on the search intent of your primary buyers.",
    items: [
      "Technical health audit",
      "Keyword intent mapping",
      "Competitor landscape study",
      "Conversion tracking setup",
      "Strategy roadmap definition"
    ],
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2669&auto=format&fit=crop",
  },
  {
    icon: Target,
    title: "Phase 2: Technical & Semantic Fixes",
    subtitle: "Perfecting the Platform",
    description: "We implement rigorous technical improvements and rewrite key pages to ensure they are both search-engine friendly and human-readable.",
    items: [
      "Core Web Vitals optimization",
      "Semantic HTML restructuring",
      "Meta data & schema implementation",
      "Content gap filling",
      "Mobile-first performance check"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    icon: Users,
    title: "Phase 3: Authority & Content Growth",
    subtitle: "Scaling the Influence",
    description: "Once the foundation is solid, we scale your reach through high-quality content and strategic authority building (backlinks).",
    items: [
      "Targeted content production",
      "Earned media & link building",
      "Internal linking mesh",
      "Local SEO dominance",
      "Brand mention monitoring"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Phase 4: Optimization & ROI Tracking",
    subtitle: "Sustainable Success",
    description: "SEO is never 'done'. We continuously monitor performance, refine strategies, and ensure your growth compounds over time.",
    items: [
      "Continuous performance audit",
      "Conversion rate refinement",
      "Ongoing competitor tracking",
      "Monthly growth reporting",
      "Strategic keyword expansion"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    button: {
      url: "#contact",
      text: "Start Your Growth",
    },
  },
];

export const SEOService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="dark relative min-h-[100svh] flex flex-col overflow-hidden bg-zinc-950">

        {/* WebGL Matrix Background */}
        <div className="absolute inset-0 z-0 opacity-60">
          <MatrixBackground />
        </div>

        {/* Radial Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,700px)] h-[min(90vw,700px)] bg-brand-magenta/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/4 right-0 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-brand-teal/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-0 w-[min(50vw,400px)] h-[min(50vw,400px)] bg-brand-purple/10 rounded-full blur-[100px]"></div>
        </div>

        <HeroHighlight
          containerClassName="flex-1 flex items-center justify-center pt-28 pb-24 md:pt-40 md:pb-32"
          className="container mx-auto px-4 md:px-6 relative z-10 text-center"
        >

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="font-chunky font-black text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] mb-6 md:mb-8 text-white tracking-tight"
          >
            SEO Services That Bring <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange animate-gradient-slow text-4xl sm:text-[min(12vw,8rem)]">
              Decision-Ready Leads
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-zinc-400 font-sans text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 md:mb-14 px-2"
          >
            Stop chasing vanity metrics. We focus on showing up when someone is actively searching for your solution.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12"
          >
            {[
              { number: "1st Page", label: "Ranking Goal" },
              { number: "100%", label: "Intent-Based" },
              { number: "2x", label: "Better conversions" }
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-5xl font-chunky font-black text-white mb-1">{s.number}</div>
                <div className="text-xs md:text-sm text-zinc-400 font-mono uppercase tracking-wide md:tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
          >
            <a href="#contact">
              <GlassButton size="lg">
                Get a Free Audit
              </GlassButton>
            </a>
            <a href="#seo-services-list">
              <GlassButton variant="secondary" size="lg">
                Explore Services
              </GlassButton>
            </a>
          </motion.div>
        </HeroHighlight>
      </section>

      {/* ============ OUR PROCESS (TIMELINE) ============ */}
      <TimeLine_01 
        title="Our growth workflow." 
        description="A systematic approach to identifying gaps and scaling your organic authority."
        entries={seoTimelineEntries}
      />

      {/* ============ MARQUEE ============ */}
      <div className="bg-brand-black py-8 md:py-12 overflow-hidden">
        <Marquee text="SEARCH INTENT &bull; TECHNICAL DOMINANCE &bull; QUALITY CONTENT &bull; AUTHORITY BUILDING &bull; GROWTH TRACKING &bull;" speed={35} />
      </div>

      {/* ============ ADVANTAGES SECTION ============ */}
      <section id="seo-advantage" className="dark bg-zinc-950 py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-16">
              <span className="text-brand-magenta font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The Advantage</span>
              <h2 className="text-4xl md:text-6xl font-chunky font-black text-white leading-tight tracking-tight">
                Designed to dominate.
              </h2>
            </div>
          </Reveal>
          <SEOFeaturesSection />
        </div>
      </section>

      {/* ============ SERVICES LIST ============ */}
      <section id="seo-services-list" className="dark bg-zinc-950 relative pt-24 md:pt-40 pb-24 md:pb-48">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-20 md:mb-32">
              <span className="text-brand-magenta font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Services</span>
              <h2 className="text-3xl sm:text-5xl md:text-8xl font-chunky font-black text-white leading-[1] md:leading-[0.95] tracking-tight mb-4 md:mb-6 text-balance">
                Every aspect of SEO.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">Handled.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-lg md:text-xl max-w-2xl mx-auto">
                We focus on the exact areas that make search traffic turn into real enquiries and compound growth.
              </p>
            </div>
          </Reveal>

          {/* Services Horizontal Scroll Grid / Carousel */}
          <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible gap-6 md:gap-10 -mx-4 px-4 md:mx-0 md:px-0">
            {seoServicesExtended.map((service, index) => (
              <div key={service.title} className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center">
                <Reveal width="100%" variant="up" delay={index * 0.1}>
                  <CardFlip 
                    title={service.title}
                    subtitle={service.subtitle}
                    description={service.description}
                    features={service.features}
                    icon={service.icon}
                    color={service.color}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ============ CTA SECTION ============ */}
      <section id="contact" className="dark relative overflow-hidden bg-black rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-20 z-10 py-24 md:py-40 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-brand-magenta/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Reveal width="100%" variant="zoom">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-chunky font-black text-white leading-[1.05] mb-8 tracking-tight">
              Let's build a system<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange">
                that never stops growing.
              </span>
            </h2>

            <p className="text-zinc-400 font-sans text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Stop chasing rankings and start attracting decision-ready customers. Book a free consultation and let's plan your growth.
            </p>

            <div id="cta-btn" className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact">
                <GlassButton size="lg">
                  Book Free SEO Consultation
                </GlassButton>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
};

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';
import { SparklesCore } from './ui/sparkles';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { CardSpotlight } from './ui/card-spotlight';
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects';
import CardFlip from './ui/flip-card';
import MultiOrbitSemiCircle from './ui/multi-orbit-semi-circle';
import AnimatedShaderHero from './ui/animated-shader-hero';
import { GlassButton } from './ui/glass-button';
import TimeLine_01, { type TimeLine_01Entry } from './ui/release-time-line';
import {
  Bot, Workflow, Network, Zap, BarChart3, Mail, Target, TrendingUp,
  Brain, Code2, Layers, ArrowRight, CheckCircle2, Globe, Clock,
  GitBranch, Cpu, Database, Activity, Rocket, Users, Shield, Repeat
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const automationServices = [
  {
    title: "Agentic AI Campaigns",
    subtitle: "AI that plans, executes & learns on its own.",
    description: "Our agentic AI systems autonomously run multi-step marketing campaigns — from audience research to ad copy generation to performance reporting — with minimal human intervention.",
    features: ["Autonomous Goal Setting", "Self-Correcting Workflows", "Real-Time Optimization", "24/7 Execution"],
    icon: <Bot className="h-6 w-6 text-white" />,
    color: "#14b8a6"
  },
  {
    title: "Multi-Agent Pipelines",
    subtitle: "Specialized agents collaborating at scale.",
    description: "Deploy an entire team of specialized AI agents — a content agent, SEO agent, social agent, and analytics agent — all working together through structured orchestration layers.",
    features: ["Agent Orchestration", "Role-Based Tasks", "Parallel Execution", "Cross-Channel Sync"],
    icon: <Network className="h-6 w-6 text-white" />,
    color: "#8b5cf6"
  },
  {
    title: "Email & Lead Automation",
    subtitle: "Hyper-personalized email journeys at scale.",
    description: "Abandoned cart sequences, behavioral trigger emails, lead scoring, and CRM enrichment — all automated end-to-end so your marketing works even when your team doesn't.",
    features: ["Lead Scoring AI", "Drip Campaigns", "Behavioral Triggers", "CRM Integration"],
    icon: <Mail className="h-6 w-6 text-white" />,
    color: "#ec4899"
  },
  {
    title: "Content Automation",
    subtitle: "Publish consistently without burning out.",
    description: "From blog outlines to social captions to ad variations, our LangChain-powered content pipelines generate, review, and schedule content at a velocity no human team can match.",
    features: ["SEO-Optimized Drafts", "Brand Voice Models", "Multi-Platform Scheduling", "A/B Variant Generation"],
    icon: <Layers className="h-6 w-6 text-white" />,
    color: "#3b82f6"
  },
  {
    title: "Analytics & Reporting",
    subtitle: "Insights delivered automatically, not on demand.",
    description: "No more waiting for weekly reports. Our automated analytics agents pull data from all your channels, identify trends, and deliver actionable insights to your inbox every morning.",
    features: ["Cross-Channel Attribution", "Automated KPI Alerts", "Funnel Analysis", "Competitor Benchmarking"],
    icon: <BarChart3 className="h-6 w-6 text-white" />,
    color: "#f59e0b"
  },
  {
    title: "Ad Optimization AI",
    subtitle: "Self-managing ad campaigns that maximize ROI.",
    description: "Our AI continuously monitors your Google, Meta, and LinkedIn campaigns, automatically adjusting bids, rotating creatives, and reallocating budgets toward what converts — in real time.",
    features: ["Dynamic Bid Management", "Creative Rotation", "Budget Reallocation", "ROAS Maximization"],
    icon: <Target className="h-6 w-6 text-white" />,
    color: "#ef4444"
  }
];

const timelineEntries: TimeLine_01Entry[] = [
  {
    icon: Target,
    title: "Phase 1: Audit & Strategy Design",
    subtitle: "Map Your Automation Opportunities",
    description: "We begin with a deep audit of your current marketing stack, customer journey, and data architecture. We identify every repetitive task, drop-off point, and revenue leak that AI can fix — then blueprint an automation strategy tailored to your goals.",
    items: [
      "Full marketing stack audit (CRM, email, ads, analytics)",
      "Customer journey mapping & funnel gap analysis",
      "Data quality & pipeline readiness assessment",
      "AI automation opportunity scoring",
      "Technology stack recommendation"
    ],
    image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2669&auto=format&fit=crop"
  },
  {
    icon: Brain,
    title: "Phase 2: Agent Architecture & Orchestration",
    subtitle: "Design the AI Brain of Your Marketing",
    description: "Using LangGraph for stateful agent workflows and LangChain for tool-calling chains, we design your multi-agent system. Each agent gets a specific role — researcher, writer, publisher, analyst — and a communication protocol to collaborate efficiently.",
    items: [
      "Agent role definition & task decomposition",
      "LangGraph workflow graph design",
      "MCP (Model Context Protocol) integration for tool access",
      "A2A (Agent-to-Agent) communication layer setup",
      "Human-in-the-loop approval checkpoints"
    ],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2832&auto=format&fit=crop"
  },
  {
    icon: Code2,
    title: "Phase 3: Development & Integration",
    subtitle: "Build the Automation Infrastructure",
    description: "Our Python engineers build the automation pipelines using LangChain, LangGraph, and custom MCP server connectors. We integrate with your existing tools — HubSpot, Salesforce, Meta, Google Ads, Notion, Slack — so everything talks to everything.",
    items: [
      "Python + LangChain agent development",
      "LangGraph stateful workflow implementation",
      "CRM, CMS & ad platform API integrations",
      "Custom MCP server configuration",
      "Secure credential & secrets management"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    icon: Activity,
    title: "Phase 4: Testing, Launch & Monitoring",
    subtitle: "Deploy With Confidence, Scale Indefinitely",
    description: "Before going live, every workflow undergoes rigorous end-to-end testing, including adversarial prompting to catch failures. Post-launch, we provide real-time monitoring dashboards and a 30-day optimization sprint to maximize performance.",
    items: [
      "Unit and integration testing of all agent workflows",
      "Adversarial edge-case stress testing",
      "Real-time monitoring dashboard setup",
      "Performance KPI baseline measurement",
      "30-day post-launch optimization sprint"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    button: { url: "#contact", text: "Start Automating Now" }
  }
];

const techStack = [
  { name: "Python", desc: "Core automation scripting & agent logic", color: "#3b82f6", tag: "LANGUAGE" },
  { name: "LangChain", desc: "Tool-calling chains & LLM orchestration", color: "#14b8a6", tag: "FRAMEWORK" },
  { name: "LangGraph", desc: "Stateful multi-agent workflow graphs", color: "#8b5cf6", tag: "FRAMEWORK" },
  { name: "MCP Protocol", desc: "Model Context Protocol for tool access", color: "#ec4899", tag: "PROTOCOL" },
  { name: "A2A Protocol", desc: "Agent-to-Agent communication layer", color: "#f59e0b", tag: "PROTOCOL" },
  { name: "OpenAI / Anthropic", desc: "Foundation model APIs", color: "#ef4444", tag: "LLM" },
  { name: "FastAPI", desc: "High-performance AI service endpoints", color: "#06b6d4", tag: "API" },
  { name: "PostgreSQL + Redis", desc: "State persistence & agent memory", color: "#22c55e", tag: "DATA" },
];

const capabilityCards = [
  {
    title: "Agentic AI Workflows",
    icon: <Bot className="h-8 w-8 text-brand-teal" />,
    body: "Agentic AI systems don't just respond — they plan and act. Our agents break complex marketing goals into sub-tasks, choose the right tools, execute actions, observe results, and self-correct — without a human in the loop.",
    tags: ["Goal-Oriented Planning", "Tool Use", "Self-Correction", "Memory"],
    color: "#14b8a6",
  },
  {
    title: "Multi-Agent Orchestration",
    icon: <Network className="h-8 w-8 text-brand-purple" />,
    body: "We deploy specialized teams of AI agents — each with a unique role — coordinated through a supervisor agent using LangGraph. This parallel processing capability is what lets you scale marketing operations without scaling headcount.",
    tags: ["Supervisor Agent", "Role Specialization", "Parallel Execution", "LangGraph"],
    color: "#8b5cf6",
  },
  {
    title: "MCP (Model Context Protocol)",
    icon: <GitBranch className="h-8 w-8 text-brand-magenta" />,
    body: "MCP is the universal connector for AI agents. It allows our agents to securely access your CRM, databases, file systems, and external APIs in a standardized, controlled way — giving them the full context they need to act intelligently.",
    tags: ["Tool Standardization", "Secure Access", "Context Injection", "API Connectivity"],
    color: "#ec4899",
  },
  {
    title: "A2A (Agent-to-Agent) Protocol",
    icon: <Workflow className="h-8 w-8 text-yellow-400" />,
    body: "A2A enables our specialized agents to communicate and delegate tasks directly to each other. A content agent can brief the SEO agent, which passes optimized copy to the publisher agent — all without any human instruction.",
    tags: ["Direct Agent Communication", "Task Delegation", "Autonomous Collaboration", "Sub-agent Spawning"],
    color: "#f59e0b",
  },
];

const stats = [
  { value: "10x", label: "Faster Content Production" },
  { value: "68%", label: "Reduction in Manual Tasks" },
  { value: "3.2x", label: "Average ROAS Improvement" },
  { value: "24/7", label: "Autonomous Campaign Execution" },
];

const Icons = {
  python: () => (
    <div className="flex items-center justify-center w-full h-full bg-[#3776AB]/20 border border-[#3776AB]/40 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(55,118,171,0.3)]">
       <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-full h-full object-contain" />
    </div>
  ),
  fastapi: () => (
    <div className="flex items-center justify-center w-full h-full bg-[#05998b]/20 border border-[#05998b]/40 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(5,153,139,0.3)]">
       <img src="https://cdn.simpleicons.org/fastapi/05998b" alt="FastAPI" className="w-full h-full object-contain" />
    </div>
  ),
  langchain: () => (
    <div className="flex items-center justify-center w-full h-full bg-white/10 border border-white/20 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]">
       <img src="https://cdn.simpleicons.org/langchain/white" alt="LangChain" className="w-full h-full object-contain" />
    </div>
  ),
  langgraph: () => (
    <div className="flex items-center justify-center w-full h-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/40 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.3)]">
       <GitBranch className="text-[#8b5cf6] w-full h-full" />
    </div>
  ),
  openai: () => (
    <div className="flex items-center justify-center w-full h-full bg-white/10 border border-white/20 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]">
       <img src="https://cdn.simpleicons.org/openai/white" alt="OpenAI" className="w-full h-full object-contain" />
    </div>
  ),
  anthropic: () => (
    <div className="flex items-center justify-center w-full h-full bg-white/10 border border-white/20 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.1)]">
       <img src="https://cdn.simpleicons.org/anthropic/white" alt="Anthropic" className="w-full h-full object-contain" />
    </div>
  ),
  mcp: () => (
    <div className="flex items-center justify-center w-full h-full bg-[#ed1e79]/20 border border-[#ed1e79]/40 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(237,30,121,0.3)]">
       <Network className="text-[#ed1e79] w-full h-full" />
    </div>
  ),
  a2a: () => (
    <div className="flex items-center justify-center w-full h-full bg-[#f15a24]/20 border border-[#f15a24]/40 rounded-full p-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(241,90,36,0.3)]">
       <Repeat className="text-[#f15a24] w-full h-full" />
    </div>
  ),
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export const MarketingAutomationService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ============ HERO ============ */}
      {/* ============ HERO ============ */}
      <section className="dark relative min-h-[100svh] flex flex-col overflow-hidden bg-black">

        {/* Cosmic Shader Background */}
        <div className="absolute inset-0 z-0">
          <AnimatedShaderHero />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>

        {/* Radial Gradient Blobs for depth */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,1000px)] h-[min(100vw,1000px)] bg-zinc-700/10 rounded-full blur-[180px] opacity-40" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 md:pt-44 md:pb-32 relative z-10 text-center container mx-auto px-4 md:px-6">


          <div className="max-w-6xl mx-auto mb-10 md:mb-14">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-chunky font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] mb-8 text-white tracking-tighter"
            >
              Automation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-magenta animate-gradient-slow text-[min(15vw,8rem)]">
                Without Limits
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
              className="text-zinc-400 font-sans text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed px-4 font-medium"
            >
              We engineer autonomous agents that plan, execute, and scale your marketing stack while you sleep. Built on Python, LangChain, and LangGraph.
            </motion.p>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-6 md:mt-10"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="text-4xl md:text-6xl font-chunky font-black text-white mb-2 drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)]">{s.value}</div>
                <div className="text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-[0.2em] max-w-[120px]">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-16"
          >
            <a href="#contact">
              <GlassButton size="lg">
                Launch Agentic Pipeline
              </GlassButton>
            </a>
            <a href="#services">
              <GlassButton variant="secondary" size="lg">
                View Architecture
              </GlassButton>
            </a>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-purple to-transparent" />
          <span className="text-white/20 font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        </motion.div>
      </section>

      {/* ============ PROBLEM / INTRO SECTION ============ */}
      <section className="dark bg-black py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
            <Reveal width="100%" variant="left">
              <div>
                <h2 className="text-4xl md:text-6xl font-chunky font-black text-white leading-tight tracking-tight mb-8">
                  You're running your marketing manually in a world that's already automated.
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-6">
                  Your competitors are using AI to publish 10x more content, test 5x more ad variations, and respond to leads in seconds. Meanwhile, your team is stuck in spreadsheets, tool-switching, and repetitive execution.
                </p>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  <strong className="text-white">Marketing automation isn't a nice-to-have anymore</strong> — it's the only way to compete without burning out your team or tripling your budget.
                </p>
              </div>
            </Reveal>

            <Reveal width="100%" variant="right">
              <div className="space-y-5">
                {[
                  { problem: "Manual content creation taking 20+ hrs/week", solution: "AI agents handle research, drafting & scheduling" },
                  { problem: "Ad campaigns managed reactively, not proactively", solution: "Autonomous bid & creative optimization in real time" },
                  { problem: "Leads going cold because follow-up is slow", solution: "Instant, personalized AI drip sequences on trigger" },
                  { problem: "Reporting done manually from 4+ dashboards", solution: "Unified AI reporting agent delivers daily insights" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                      <p className="text-zinc-500 text-sm line-through">{item.problem}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="h-5 w-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <p className="text-zinc-200 text-sm font-medium">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="bg-zinc-900/40 border-y border-zinc-800 py-6 md:py-8 overflow-hidden">
        <Marquee
          text="AGENTIC AI • MULTI-AGENT • LANGCHAIN • LANGGRAPH • MCP PROTOCOL • A2A PROTOCOL • PYTHON • AUTONOMOUS WORKFLOWS •"
          speed={40}
        />
      </div>

      {/* ============ AI CAPABILITIES ============ */}
      <section id="capabilities" className="dark bg-zinc-950 py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-20">

              <h2 className="text-4xl md:text-7xl font-chunky font-black text-white leading-tight tracking-tight mb-6">
                The AI stack that powers it all.
              </h2>
              <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
                We use the most advanced agentic AI architectures to build marketing systems that operate at enterprise scale.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {capabilityCards.map((card, i) => (
              <Reveal key={card.title} width="100%" variant="up" delay={i * 0.1}>
                <CardSpotlight
                  className="h-full rounded-3xl border-zinc-800/80 bg-zinc-900/50 hover:border-zinc-700 transition-colors duration-300"
                  color="#1f1f1f"
                >
                  <div className="relative z-20 p-2">
                    <div
                      className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {card.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-chunky font-bold text-white mb-4">{card.title}</h3>
                    <p className="text-zinc-400 text-base leading-relaxed mb-6">{card.body}</p>

                  </div>
                </CardSpotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTEGRATIONS / TECH STACK ============ */}
      <section className="dark bg-black py-24 md:py-32 relative overflow-hidden border-t border-zinc-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-zinc-800/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-16">

              <h2 className="text-4xl md:text-6xl font-chunky font-black text-white leading-tight mb-4">
                Connect your stack to<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-teal">Agentic Intelligence.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Our automation layer sits on top of your existing tools, orchestrating data and tasks across your entire marketing ecosystem.
              </p>
            </div>
          </Reveal>

          <MultiOrbitSemiCircle />


          {/* Connection diagram hint */}
          <Reveal width="100%" variant="up">
            <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 md:p-12 max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6 text-sm font-mono text-zinc-500">
                <span className="text-brand-teal font-bold">Your Business System</span>
                <ArrowRight className="h-4 w-4" />
                <span className="text-brand-purple font-bold">MCP Server</span>
                <ArrowRight className="h-4 w-4" />
                <span className="text-brand-magenta font-bold">AI Agent Network</span>
                <ArrowRight className="h-4 w-4" />
                <span className="text-yellow-400 font-bold">A2A Protocol</span>
                <ArrowRight className="h-4 w-4" />
                <span className="text-blue-400 font-bold">Automated Results</span>
              </div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                We architect end-to-end pipelines where your existing tools connect to our AI agent network via MCP, agents collaborate via A2A, and results flow back to your team automatically.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECOND MARQUEE ============ */}
      <div className="bg-zinc-950 border-y border-zinc-800 py-6 md:py-8 overflow-hidden">
        <Marquee
          text="CONTENT AUTOMATION • EMAIL SEQUENCES • AD OPTIMIZATION • LEAD SCORING • SEO AUTOMATION • SOCIAL MEDIA AI • CRM ENRICHMENT •"
          speed={35}
        />
      </div>

      {/* ============ HOW IT WORKS (TIMELINE) ============ */}
      <div id="how-it-works">
        <TimeLine_01
          title="How we build your automation."
          description="A proven four-phase process to go from manual chaos to a fully autonomous marketing operation."
          entries={timelineEntries}
        />
      </div>

      {/* ============ SERVICES FLIP CARDS ============ */}
      <section id="automation-services" className="dark bg-zinc-950 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-20 md:mb-28">

              <h2 className="text-4xl sm:text-6xl md:text-8xl font-chunky font-black text-white leading-[0.95] tracking-tight mb-6">
                Every channel.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">Automated.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-lg md:text-xl max-w-2xl mx-auto">
                From content and email to ads and analytics — hover each card to see exactly what's included.
              </p>
            </div>
          </Reveal>

          {/* Services carousel */}
          <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible gap-6 md:gap-10 -mx-4 px-4 md:mx-0 md:px-0">
            {automationServices.map((service, index) => (
              <div key={service.title} className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center">
                <Reveal width="100%" variant="up" delay={index * 0.08}>
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



      {/* ============ CTA ============ */}
      <section id="contact" className="dark relative overflow-hidden bg-black py-24 md:py-40 z-10">
        <div className="absolute inset-0 z-0">
          <SparklesCore
            id="cta-sparkles-ma"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={40}
            particleColor="#8b5cf6"
            speed={1.5}
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-zinc-700/10 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Reveal width="100%" variant="zoom">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-chunky font-black text-white leading-[1.05] mb-8 tracking-tight">
              Let's build AI workflows<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-teal">
                that work for you.
              </span>
            </h2>

            <p className="text-zinc-400 font-sans text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Book a free 30-minute AI automation audit. We'll identify the top 5 workflows in your business that can be automated today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:theadvertisingvilla@gmail.com">
                <GlassButton size="lg">
                  Book Free AI Audit
                </GlassButton>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

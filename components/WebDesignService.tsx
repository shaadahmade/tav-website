import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';
import { SparklesCore } from './ui/sparkles';
import { HeroHighlight, Highlight } from './ui/hero-highlight';
import { GlassButton } from './ui/glass-button';
import TimeLine_01 from './ui/release-time-line';
import { CardSpotlight } from './ui/card-spotlight';
import { News, type NewsArticle } from './ui/sidebar-news';
import { FeaturesSectionWithHoverEffects } from './ui/feature-section-with-hover-effects';
import CardFlip from './ui/flip-card';
import { Rocket, Zap, Smartphone, ShoppingCart, Layout, Globe, Search, ShieldCheck } from 'lucide-react';

const webDesignServicesExtended = [
  {
    title: "Static Web Design",
    subtitle: "Speed, simplicity, and zero maintenance overhead.",
    description: "Perfect for brands that need a fast, secure, and professional landing page or portfolio with minimal maintenance.",
    features: ["Load Speed < 1s", "High Security", "Zero Maintenance", "Cost-Effective"],
    icon: <Globe className="h-6 w-6 text-white" />,
    color: "#14b8a6"
  },
  {
    title: "Dynamic Systems",
    subtitle: "Grow your platform with a robust CMS backend.",
    description: "Empower your team to manage content, blogs, and updates effortlessly without touching a single line of code.",
    features: ["Custom CMS", "Blog Ready", "User Authentication", "Scalable Data"],
    icon: <Zap className="h-6 w-6 text-white" />,
    color: "#ec4899"
  },
  {
    title: "E-Commerce",
    subtitle: "Turning casual browsers into loyal customers.",
    description: "From Shopify to custom headless builds, we create shopping experiences that focus on one thing: revenue.",
    features: ["Product Management", "Secure Payments", "Inventory Control", "Conversion Logic"],
    icon: <ShoppingCart className="h-6 w-6 text-white" />,
    color: "#8b5cf6"
  },
  {
    title: "UI/UX Architecture",
    subtitle: "Designed for humans, optimized for actions.",
    description: "We bridge the gap between aesthetics and usability through rigorous audit, testing, and psychology-first design.",
    features: ["User Research", "Wireframing", "Interactive Prototypes", "Accessibility Fixes"],
    icon: <Layout className="h-6 w-6 text-white" />,
    color: "#3b82f6"
  },
  {
    title: "Mobile First",
    subtitle: "Flawless experiences on every single screen.",
    description: "With 80% of traffic on mobile, we build from the thumb up, ensuring your site looks stunning on phones and tablets.",
    features: ["Adaptive Layouts", "Touch-Native UX", "Device Optimized", "Progressive Web App"],
    icon: <Smartphone className="h-6 w-6 text-white" />,
    color: "#f59e0b"
  },
  {
    title: "Full-Stack Dev",
    subtitle: "Technical excellence for complex web solutions.",
    description: "If you need more than a website, we build custom web applications, APIs, and complex integrations.",
    features: ["Custom API Dev", "Third-party Sync", "Robust Database", "High Performance"],
    icon: <Rocket className="h-6 w-6 text-white" />,
    color: "#ef4444"
  }
];

const CASE_STUDIES: NewsArticle[] = [
  {
    href: "#contact",
    title: "Luxury E-Commerce Launch",
    summary: "Built a headless Shopify experience for a premium fashion house, resulting in a 40% speed increase.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
  },
  {
    href: "#contact",
    title: "SaaS Dashboard Redesign",
    summary: "Optimized complex data visualization for a Fintech player, cutting user onboarding time by 25%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    href: "#contact",
    title: "Brutalist Brand Web Identity",
    summary: "Award-winning web experience for a creative agency using advanced 3D shaders and motion.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
];

const differentiators = [
  {
    title: "Conversion-Focused",
    description: "We design visuals that guide the eye — so customers know what to notice first, what to remember, and what to do next.",
  },
  {
    title: "Mobile-First",
    description: "Because today, most visitors will see your website on their mobile first. We make that experience flawless.",
  },
  {
    title: "Fast Loading",
    description: "Slow websites lose customers before they ever read a word. We optimize for speed from day one.",
  },
];

export const WebDesignService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="dark relative min-h-[100svh] flex flex-col overflow-hidden bg-zinc-950">

        {/* Radial Gradient Blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,700px)] h-[min(90vw,700px)] bg-brand-teal/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-1/4 right-0 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-brand-magenta/10 rounded-full blur-[120px]"></div>
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
            Websites That Make Customers <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-magenta animate-gradient-slow text-4xl sm:text-[min(12vw,8rem)]">
              Understand You In Seconds
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            className="text-zinc-400 font-sans text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 md:mb-14 px-2"
          >
            Most websites fail for one simple reason. They make customers work too hard to understand the business.
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-12 mb-12"
          >
            {[
              { number: "7", label: "Website Types" },
              { number: "100%", label: "Mobile-First" },
              { number: "3x", label: "Faster Conversions" }
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
                Get a Free Consultation
              </GlassButton>
            </a>
            <a href="#web-services">
              <GlassButton variant="secondary" size="lg">
                Explore Services
              </GlassButton>
            </a>
          </motion.div>
        </HeroHighlight>
      </section>

      {/* ============ OUR PROCESS (TIMELINE) ============ */}
      <TimeLine_01 />

      {/* ============ MARQUEE ============ */}
      <div className="bg-brand-black py-8 md:py-12 overflow-hidden">
        <Marquee text="CONVERSION &bull; MOBILE FIRST &bull; FAST LOADING &bull; CLEAR CTAs &bull; CONSISTENT BRANDING &bull;" speed={35} />
      </div>

      {/* ============ SERVICES SECTION ============ */}
      <section id="web-services" className="dark bg-zinc-950 py-24 md:py-32 relative">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-16">
              <span className="text-brand-teal font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">The Advantage</span>
              <h2 className="text-4xl md:text-6xl font-chunky font-black text-white leading-tight tracking-tight">
                Designed to outperform.
              </h2>
            </div>
          </Reveal>
          <FeaturesSectionWithHoverEffects />
        </div>
      </section>

      {/* ============ SERVICES LIST ============ */}
      <section id="web-services" className="dark bg-zinc-950 relative pt-24 md:pt-40 pb-24 md:pb-48">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-20 md:mb-32">
              <span className="text-brand-teal font-mono text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Our Services</span>
              <h2 className="text-3xl sm:text-5xl md:text-8xl font-chunky font-black text-white leading-[1] md:leading-[0.95] tracking-tight mb-4 md:mb-6 text-balance">
                Every type of website.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-magenta">Done right.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-lg md:text-xl max-w-2xl mx-auto">
                Choosing the right type of website depends on your business goals. Let us help you identify what will work best.
              </p>
            </div>
          </Reveal>

          {/* Services Horizontal Scroll Grid / Carousel */}
          <div className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible gap-6 md:gap-10 -mx-4 px-4 md:mx-0 md:px-0">
            {webDesignServicesExtended.map((service, index) => (
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-brand-teal/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/10 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Reveal width="100%" variant="zoom">
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-chunky font-black text-white leading-[1.05] mb-8 tracking-tight">
              Let's identify what<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-magenta">
                works best for you.
              </span>
            </h2>

            <p className="text-zinc-400 font-sans text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Choosing the right type of website depends on your business goals. Book a free consultation and we'll guide you.
            </p>

            <div id="cta-btn" className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact">
                <GlassButton size="lg">
                  Book Free Consultation
                </GlassButton>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
};

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../ui/Reveal';
import { Marquee } from '../ui/Marquee';
import { GlassButton } from '../ui/glass-button';
import { FAQAccordion, type FAQItem } from '../ui/faq-accordion';
import { HorizontalSlider } from '../ui/horizontal-slider';
import CardFlip from '../ui/flip-card';
import { Check } from 'lucide-react';
import { CALENDLY_URL } from '../../constants';
import { CelestialSphere } from '../ui/celestial-sphere';
import { DitheringShader } from '../ui/dithering-shader';

export interface SubService {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

export interface ServicePageData {
  /** Slug used for anchor IDs and keys */
  slug: string;

  /** Hero section */
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    /** mp4 URL - autoplayed, looped, muted */
    videoUrl: string;
    /** poster image fallback if video fails / before load */
    posterUrl?: string;
    /** Optional accent gradient colors. Default brand-teal → brand-magenta */
    gradientFrom?: string;
    gradientVia?: string;
    gradientTo?: string;
  };

  /** Marquee text under hero */
  marqueeText: string;

  /** "What You Will Get" section bullets (verbatim) */
  whatYouGet: {
    eyebrow: string;
    title: string;
    titleAccent?: string;
    intro?: string;
    bullets: string[];
  };

  /** Sub-services grid */
  services: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    items: SubService[];
  };

  /** Final CTA before FAQ */
  cta: {
    title: string;
    titleAccent?: string;
    subtitle: string;
    buttonText: string;
  };

  /** Frequently asked questions */
  faqs: FAQItem[];
}

interface ServicePageProps {
  data: ServicePageData;
}

export const ServicePage: React.FC<ServicePageProps> = ({ data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data.slug]);

  const { hero, marqueeText, whatYouGet, services, cta, faqs } = data;
  const gFrom = hero.gradientFrom ?? 'from-brand-teal';
  const gVia = hero.gradientVia ?? 'via-brand-purple';
  const gTo = hero.gradientTo ?? 'to-brand-magenta';

  // Map the service's primary brand color to a hue (degrees) for CelestialSphere
  const BRAND_HUES: Record<string, number> = {
    'from-brand-teal': 196,
    'from-brand-purple': 275,
    'from-brand-magenta': 328,
    'from-brand-orange': 16,
    'from-brand-yellow': 40,
  };
  const heroHue = BRAND_HUES[gFrom] ?? 275;

  // Hex used for the DitheringShader (CTA section). Mirrors the brand color of gFrom.
  const BRAND_HEX: Record<string, string> = {
    'from-brand-teal': '#00AEEF',
    'from-brand-purple': '#662D91',
    'from-brand-magenta': '#ED1E79',
    'from-brand-orange': '#F15A24',
    'from-brand-yellow': '#FBB03B',
  };
  const ctaShaderColor = BRAND_HEX[gFrom] ?? '#662D91';

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="dark relative min-h-[100svh] flex flex-col overflow-hidden bg-zinc-950">
        {/* Animated cosmic background (replaces per-service stock video) */}
        <div className="absolute inset-0 z-0">
          <CelestialSphere
            hue={heroHue}
            speed={0.35}
            zoom={1.3}
            particleSize={3.5}
            className="absolute inset-0 w-full h-full"
          />
          {/* Vignette: dark only at top (under nav) and bottom (for marquee transition); preserve middle for shader clarity. */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/25 to-zinc-950" />
          {/* Subtle radial darkening behind text for legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_45%,transparent_75%)]" />
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
        </div>

        {/* Decorative brand blobs (lighter so they don't fight the video) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 mix-blend-screen">
          <div className="absolute top-1/4 right-0 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-brand-magenta/15 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 left-0 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-brand-teal/15 rounded-full blur-[140px]" />
        </div>

        <div className="flex-1 flex items-center justify-center pt-28 pb-24 md:pt-40 md:pb-32 relative z-10">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="font-chunky font-black text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] mb-6 md:mb-8 text-white tracking-tight"
            >
              {hero.titleLead}
              {' '}
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r ${gFrom} ${gVia} ${gTo} animate-gradient-slow`}
              >
                {hero.titleAccent}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="text-zinc-300 font-sans text-base sm:text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 md:mb-14 px-2 whitespace-pre-line"
            >
              {hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <GlassButton size="lg">Book Free Consultation</GlassButton>
              </a>
              <a href={`#${data.slug}-services`}>
                <GlassButton variant="secondary" size="lg">Explore Services</GlassButton>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="bg-brand-black py-6 md:py-10 overflow-hidden">
        <Marquee text={marqueeText} speed={35} />
      </div>

      {/* ============ WHAT YOU WILL GET ============ */}
      <section className="dark bg-zinc-950 py-20 md:py-28 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-brand-teal/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-brand-magenta/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-chunky font-black text-white leading-[1.05] tracking-tight mb-4 md:mb-6 text-balance">
                {whatYouGet.title}
                {whatYouGet.titleAccent && (
                  <>
                    {' '}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gFrom} ${gTo}`}>
                      {whatYouGet.titleAccent}
                    </span>
                  </>
                )}
              </h2>
              {whatYouGet.intro && (
                <p className="text-zinc-400 font-sans text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {whatYouGet.intro}
                </p>
              )}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
            {whatYouGet.bullets.map((b, i) => (
              <Reveal key={i} width="100%" variant="up" delay={i * 0.05}>
                <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm p-5 md:p-6 hover:border-brand-teal/40 hover:bg-zinc-900/70 transition-all duration-300 h-full">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/15 border border-brand-teal/30 text-brand-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                  <p className="text-zinc-200 text-sm md:text-base leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUB-SERVICES ============ */}
      <section
        id={`${data.slug}-services`}
        className="dark bg-zinc-950 relative pt-20 md:pt-28 pb-24 md:pb-36"
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-14 md:mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-chunky font-black text-white leading-[1] md:leading-[0.95] tracking-tight mb-4 md:mb-6 text-balance">
                {services.title}
                {' '}
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gFrom} ${gTo}`}>
                  {services.titleAccent}
                </span>
              </h2>
              <p className="text-zinc-400 font-sans text-base md:text-lg leading-relaxed whitespace-pre-line">
                {services.intro}
              </p>
            </div>
          </Reveal>

          <HorizontalSlider className="flex overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible gap-6 md:gap-8 -mx-4 px-4 md:mx-0 md:px-0">
            {services.items.map((s, i) => (
              <div key={s.title} className="min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center">
                <Reveal width="100%" variant="up" delay={i * 0.08}>
                  <CardFlip
                    title={s.title}
                    subtitle={s.subtitle}
                    description={s.description}
                    features={s.features}
                    icon={s.icon}
                    color={s.color}
                  />
                </Reveal>
              </div>
            ))}
          </HorizontalSlider>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section
        id="contact"
        className="dark relative overflow-hidden bg-black rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-20 z-10 py-20 md:py-32 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]"
      >
        {/* Animated dithered wave background */}
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none">
          <DitheringShader
            shape="wave"
            type="8x8"
            colorBack="#000000"
            colorFront={ctaShaderColor}
            pxSize={4}
            speed={0.5}
            width={1920}
            height={1080}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Radial vignette so the shader is felt but text stays crisp */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_70%,#000_100%)] pointer-events-none z-0" />

        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-brand-teal/10 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-magenta/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <Reveal width="100%" variant="zoom">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-chunky font-black text-white leading-[1.05] mb-6 md:mb-8 tracking-tight">
              {cta.title}
              {cta.titleAccent && (
                <>
                  <br />
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gFrom} ${gVia} ${gTo}`}>
                    {cta.titleAccent}
                  </span>
                </>
              )}
            </h2>

            <p className="text-zinc-400 font-sans text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed whitespace-pre-line">
              {cta.subtitle}
            </p>

            <div id="cta-btn" className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <GlassButton size="lg">{cta.buttonText}</GlassButton>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      {faqs.length > 0 && <FAQAccordion faqs={faqs} />}
    </>
  );
};

export default ServicePage;

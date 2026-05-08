import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { GlassButton } from './ui/glass-button';
import { ShieldCheck, Heart, Sparkles, Leaf, Target, Rocket, Users } from 'lucide-react';

const mission = [
  'Custom-built experiences that fit your exact needs.',
  'Infuse creativity and innovation into every project we touch.',
  'Maintain uncompromising quality with an ethical, responsible approach.',
  'Clear, transparent communication at every step.',
];

const vision = [
  {
    title: 'Innovate Ahead of the Industry',
    body: 'Fresh ideas. Modern solutions. A competitive edge you can feel.',
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    title: 'Deliver With Speed & Precision',
    body: 'On time. Every time. Because your deadlines deserve respect.',
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: 'Put Clients at the Heart of Everything',
    body: 'Every strategy, every design, every deliverable built around your needs.',
    icon: <Users className="h-5 w-5" />,
  },
];

const coreValues = [
  {
    title: 'Integrity',
    body:
      "We keep our word, own our decisions, and act with honesty — even when it's inconvenient. You'll always know what's happening, why it's happening, and how it helps your brand grow.",
    icon: <ShieldCheck className="h-6 w-6" />,
    iconWrap: 'bg-brand-teal/10 border-brand-teal/25 text-brand-teal',
  },
  {
    title: 'Customer First',
    body:
      "Your goals aren't \"projects\" to us — they're commitments. We design, build, and deliver like your business is our business.",
    icon: <Heart className="h-6 w-6" />,
    iconWrap: 'bg-brand-magenta/10 border-brand-magenta/25 text-brand-magenta',
  },
  {
    title: 'Innovation',
    body:
      "We don't copy trends or recycle old ideas. We combine creativity + strategy to bring you solutions that feel fresh, bold, and tailor-made.",
    icon: <Sparkles className="h-6 w-6" />,
    iconWrap: 'bg-brand-purple/10 border-brand-purple/25 text-brand-purple',
  },
  {
    title: 'Sustainability',
    body:
      "Future-proof thinking. Ethical execution. Work that stays valuable long after it's delivered. Good for your brand. Good for your customers. Good for what comes next.",
    icon: <Leaf className="h-6 w-6" />,
    iconWrap: 'bg-brand-teal/10 border-brand-teal/25 text-brand-teal',
  },
];

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="dark relative min-h-[80svh] flex flex-col overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,700px)] h-[min(90vw,700px)] bg-brand-teal/10 rounded-full blur-[150px]" />
          <div className="absolute top-1/4 right-0 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-brand-magenta/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="flex-1 flex items-center justify-center pt-32 pb-20 md:pt-44 md:pb-28 relative z-10">
          <div className="container mx-auto px-4 md:px-6 text-center max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              className="font-chunky font-black text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.05] mb-6 md:mb-8 text-white tracking-tight"
            >
              Branding that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-magenta animate-gradient-slow">
                convinces, not confuses.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-zinc-300 font-sans text-base sm:text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-6"
            >
              Your business deserves branding that doesn't confuse customers, but convinces them and drives real results — we make that happen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-zinc-400 font-sans text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10"
            >
              We believe great brands are created through vision, voice, and visuals. Most businesses struggle not because their products are weak, but because people can't instantly understand who they are or why they matter.
              <br /><br />
              At Advertising Villa, we fix that by sharpening every place your customer sees you, so their first impression becomes the right impression.
            </motion.p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="dark bg-zinc-950 py-20 md:py-28 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-chunky font-black text-white leading-[1.05] tracking-tight mb-4 md:mb-6 text-balance">
                What drives us{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-magenta">every single time.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {mission.map((m, i) => (
              <Reveal key={i} width="100%" variant="up" delay={i * 0.07}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/5 bg-zinc-900/40 p-5 md:p-6 hover:border-brand-teal/40 hover:bg-zinc-900/70 transition-all duration-300 h-full">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-teal/15 border border-brand-teal/30 text-brand-teal font-chunky font-black flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <p className="text-zinc-200 text-sm md:text-base leading-relaxed">{m}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="dark bg-zinc-950 py-20 md:py-28 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-brand-purple/5 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-chunky font-black text-white leading-[1.05] tracking-tight mb-4 md:mb-6 text-balance">
                The next level of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">brand excellence.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                That's the journey we're on.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {vision.map((v, i) => (
              <Reveal key={i} width="100%" variant="up" delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/5 bg-zinc-900/40 p-6 md:p-7 hover:border-brand-purple/40 hover:bg-zinc-900/70 transition-all duration-300">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-purple/10 border border-brand-purple/25 text-brand-purple mb-5 group-hover:scale-110 transition-transform">
                    {v.icon}
                  </div>
                  <h3 className="font-chunky font-bold text-lg md:text-xl text-white mb-2 leading-tight">{v.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="dark bg-zinc-950 py-20 md:py-28 relative">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <Reveal width="100%" variant="up">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-chunky font-black text-white leading-[1.05] tracking-tight mb-4 md:mb-6 text-balance">
                The beliefs you can{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-brand-teal">see, feel, experience.</span>
              </h2>
              <p className="text-zinc-400 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                In every project we deliver.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {coreValues.map((cv, i) => (
              <Reveal key={cv.title} width="100%" variant="up" delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-white/5 bg-zinc-900/40 p-6 md:p-8 hover:border-white/15 hover:bg-zinc-900/70 transition-all duration-300">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl border mb-5 group-hover:scale-110 transition-transform ${cv.iconWrap}`}>
                    {cv.icon}
                  </div>
                  <h3 className="font-chunky font-bold text-xl md:text-2xl text-white mb-3 leading-tight">{cv.title}</h3>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{cv.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="dark relative overflow-hidden bg-black rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-20 z-10 py-20 md:py-32 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-brand-teal/10 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
          <Reveal width="100%" variant="zoom">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-chunky font-black text-white leading-[1.05] mb-6 md:mb-8 tracking-tight">
              Let us know what{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-magenta">
                you're looking for.
              </span>
            </h2>
            <p className="text-zinc-400 font-sans text-base md:text-lg mb-10 leading-relaxed">
              We'll help you reach it.
            </p>
            <a href="#contact">
              <GlassButton size="lg">Book a Free Consultation</GlassButton>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;

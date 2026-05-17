import React, { useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Reveal } from './ui/Reveal';
import ShaderBackground from './ui/shader-background';
import { GlassButton } from './ui/glass-button';
import { CALENDLY_URL } from '../constants';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);

  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip mouse tracking on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animationFrameId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;

      const xPercent = (curX / window.innerWidth) - 0.5;
      const yPercent = (curY / window.innerHeight) - 0.5;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${xPercent * -100}px, ${yPercent * -100}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate(${xPercent * 50}px, ${yPercent * 80}px)`;
      }
      if (mascotRef.current) {
        mascotRef.current.style.transform = `perspective(1000px) rotateX(${yPercent * -20}deg) rotateY(${xPercent * 20}deg) translate(${xPercent * -15}px, ${yPercent * -15}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="dark relative flex flex-col bg-brand-dark overflow-hidden min-h-[100svh]" ref={containerRef} style={{ perspective: '1000px' }}>

      {/* --- FLUID BACKGROUND GRAPHIC --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ShaderBackground />
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={blob2Ref}
            className="w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] bg-gradient-to-tr from-brand-teal/10 to-brand-purple/10 rounded-full blur-[80px] md:blur-[120px] opacity-40 mix-blend-screen will-change-transform"
          ></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            ref={blob3Ref}
            className="w-[400px] h-[400px] md:w-[900px] md:h-[900px] bg-gradient-to-bl from-brand-purple/20 to-blue-600/10 rounded-full blur-[100px] md:blur-[150px] opacity-30 mix-blend-screen will-change-transform"
          ></div>
        </div>

        <div
          ref={blob1Ref}
          className="absolute top-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-brand-magenta/5 rounded-full blur-[60px] md:blur-[80px] mix-blend-plus-lighter pointer-events-none will-change-transform hidden md:block"
          style={{ transform: 'translate(-50%, -50%)' }}
        ></div>

        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      {/* Extra pb so the CTA buttons clear the next section (Services) which overlaps with -mt-32 */}
      <div className="flex-1 flex flex-col items-center justify-center relative pt-24 pb-40 md:pt-28 md:pb-56">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

          {/* Mascot — minimal white-frosted glass disc, static */}
          <div className="mb-10 md:mb-14 relative inline-block">
            <div className="relative rounded-full w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto">
              {/* White-tinted frosted glass */}
              <div className="absolute inset-0 rounded-full bg-white/60 backdrop-blur-2xl border border-white/70" />

              {/* Single soft top highlight */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_50%_10%,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.2)_45%,transparent_75%)] pointer-events-none" />

              {/* Logo */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-5">
                <Logo
                  className="w-full h-auto max-w-[88%] relative z-10"
                  textClassName="text-4xl md:text-7xl"
                />
              </div>
            </div>
          </div>

          {/* TEXT CONTAINER */}
          <div className="relative max-w-6xl mx-auto mb-12 md:mb-20">
            <div className="relative z-10 w-full flex flex-col items-center px-2">
              <h1 className="font-chunky font-extrabold tracking-tight md:tracking-tighter text-white drop-shadow-2xl reveal-text">
                <span
                  className="block text-balance leading-[1.02] text-[2rem] sm:text-5xl md:text-6xl lg:text-[6.25rem] mb-3 md:mb-5"
                  style={{ textWrap: 'balance' as any }}
                >
                  A Digital Marketing Agency Designed for
                </span>
                <span
                  className="block leading-[1.05] pb-2 md:pb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-orange animate-pulse-slow text-[1.75rem] sm:text-4xl md:text-6xl lg:text-[6.25rem] whitespace-normal sm:whitespace-nowrap"
                >
                  Clarity, Trust, and Results
                </span>
              </h1>

              {/* Decorative divider */}
              <div
                className="reveal-text mt-8 md:mt-12 mb-8 md:mb-10 h-px w-24 md:w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{ animationDelay: '0.15s' }}
              />

              <div
                className="max-w-3xl mx-auto reveal-text px-2 space-y-5 md:space-y-7 text-center"
                style={{ animationDelay: '0.25s' }}
              >
                <p
                  className="font-sans text-base sm:text-lg md:text-xl text-zinc-400 leading-[1.7] md:leading-[1.75] font-medium text-balance"
                  style={{ textWrap: 'pretty' as any }}
                >
                  We remove confusion from your website, SEO, ads, and content so customers know exactly why they should choose you.
                </p>
                <p
                  className="font-sans text-base sm:text-lg md:text-xl text-zinc-200 leading-[1.7] md:leading-[1.75] font-semibold italic text-balance"
                  style={{ textWrap: 'pretty' as any }}
                >
                  Because when people understand your brand in seconds, choosing you feels obvious.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 w-full max-w-lg mx-auto reveal-text" style={{ animationDelay: '0.4s' }}>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
              <GlassButton size="lg">
                Get Free Consultation
              </GlassButton>
            </a>
            <a href="#services" className="inline-block">
              <GlassButton size="lg">
                See What We Do
              </GlassButton>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; filter: brightness(1); }
          50% { opacity: 1; filter: brightness(1.3); }
        }
      `}</style>
    </section>
  );
};
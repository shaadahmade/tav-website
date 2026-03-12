import React, { useEffect, useRef } from 'react';
import { Logo } from './Logo';
import { Reveal } from './ui/Reveal';
import ShaderBackground from './ui/shader-background';
import { GlassButton } from './ui/glass-button';

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
      <div className="flex-1 flex flex-col items-center justify-center relative pt-24 pb-24 md:pt-28 md:pb-28">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

          {/* Mascot with 3D Interaction */}
          <div
            ref={mascotRef}
            className="mb-8 md:mb-12 relative inline-block group will-change-transform"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange via-brand-purple to-brand-teal rounded-full blur-[30px] md:blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 flex flex-col items-center justify-center mx-auto animate-float transition-all duration-300 px-4 md:px-6 overflow-hidden">
              <Logo className="w-full h-auto max-w-[85%] relative z-20 drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]" textClassName="text-4xl md:text-7xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white to-slate-100/50 pointer-events-none opacity-50"></div>
            </div>
          </div>

          {/* TEXT CONTAINER */}
          <div className="relative max-w-5xl mx-auto mb-10 md:mb-16">
            <div className="relative z-10 w-full flex flex-col items-center px-2">
              <h1 className="font-chunky font-extrabold text-[2.2rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-[7.5rem] mb-6 md:mb-8 text-white tracking-tight md:tracking-tighter drop-shadow-2xl reveal-text">
                A Digital Agency <br className="hidden sm:block" />
                Designed For <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-orange animate-pulse-slow">Clarity</span>
              </h1>

              <div className="max-w-2xl mx-auto reveal-text px-2" style={{ animationDelay: '0.2s' }}>
                <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-medium">
                  We build fast, high-converting websites, run profitable ads, and execute SEO strategies that actually make sense.
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-4 w-full max-w-lg mx-auto reveal-text" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="inline-block">
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
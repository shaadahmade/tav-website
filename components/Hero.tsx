import React, { useEffect, useRef } from 'react';
import { Sparkles, Play } from 'lucide-react';
import { Logo } from './Logo';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mascotRef = useRef<HTMLDivElement>(null);

  // Refs for the fluid "water" blobs
  const blob1Ref = useRef<HTMLDivElement>(null); // Mouse follower
  const blob2Ref = useRef<HTMLDivElement>(null); // Secondary movement
  const blob3Ref = useRef<HTMLDivElement>(null); // Tertiary movement

  useEffect(() => {
    let animationFrameId: number;
    
    // Target coordinates (mouse position)
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    
    // Current coordinates for smooth interpolation
    let curX = targetX;
    let curY = targetY;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      // Linear interpolation (Lerp) for smooth fluid movement
      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;

      const xPercent = (curX / window.innerWidth) - 0.5;
      const yPercent = (curY / window.innerHeight) - 0.5;

      // 1. Primary Blob (Follows mouse slowly)
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }

      // 2. Secondary Blob (Moves opposite - Parallax)
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${xPercent * -150}px, ${yPercent * -150}px)`;
      }

      // 3. Tertiary Blob (Moves differently for chaotic fluid feel)
      if (blob3Ref.current) {
         blob3Ref.current.style.transform = `translate(${xPercent * 80}px, ${yPercent * 120}px)`;
      }

      // Mascot Parallax
      if (mascotRef.current) {
         mascotRef.current.style.transform = `translate(${xPercent * -30}px, ${yPercent * -30}px)`;
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
    <section className="dark relative flex flex-col bg-brand-dark overflow-hidden min-h-[100vh]" ref={containerRef}>
      
      {/* --- FLUID BACKGROUND GRAPHIC --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Deep Base */}
          <div className="absolute inset-0 bg-brand-dark"></div>

          {/* Static Deep Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-brand-navy/30 rounded-full blur-[120px]"></div>

          {/* Dynamic Water Orbs */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div
                ref={blob2Ref}
                className="w-[min(200vw,800px)] h-[min(200vw,800px)] bg-gradient-to-tr from-brand-teal/20 to-brand-purple/20 rounded-full blur-[80px] opacity-60 mix-blend-screen transition-transform duration-75 ease-linear will-change-transform"
             ></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
             <div
                ref={blob3Ref}
                className="w-[min(150vw,600px)] h-[min(150vw,600px)] bg-gradient-to-bl from-brand-purple/30 to-blue-600/20 rounded-full blur-[100px] opacity-50 mix-blend-screen transition-transform duration-75 ease-linear will-change-transform"
             ></div>
          </div>

          <div
            ref={blob1Ref}
            className="absolute top-0 left-0 w-[min(100vw,400px)] h-[min(100vw,400px)] bg-brand-teal/15 rounded-full blur-[60px] mix-blend-plus-lighter pointer-events-none will-change-transform"
            style={{ transform: 'translate(-50%, -50%)' }}
          ></div>
          
          {/* Grain overlay for texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>


      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex items-center justify-center relative pt-28 pb-32 md:pt-20 md:pb-40">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            
            {/* Mascot */}
            <div
                 ref={mascotRef}
                 className="mb-8 md:mb-12 relative inline-block group will-change-transform"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange via-brand-purple to-brand-teal rounded-[50%] blur-[40px] md:blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-slow"></div>
               <div className="relative z-10 bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[50%] w-48 h-48 md:w-52 md:h-52 flex flex-col items-center justify-center mx-auto animate-float hover:scale-110 transition-transform duration-500 px-4 overflow-hidden ring-1 ring-white/5">
                 <Logo className="w-full h-auto max-w-[80%] mb-2 relative z-20 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" textClassName="text-4xl md:text-7xl" />
                 <div className="text-[8px] md:text-xs font-accent font-bold tracking-[0.2em] text-zinc-400 relative z-20 whitespace-nowrap">
                     THE ADVERTISING VILLA
                 </div>
               </div>
            </div>

            {/* TEXT CONTAINER WITH BLUR BACKDROP */}
            <div className="relative max-w-7xl mx-auto">
                <div className="absolute inset-0 -m-10 bg-black/10 backdrop-blur-3xl rounded-[3rem] z-0 pointer-events-none mask-radial-fade"></div>
                
                <div className="relative z-10">
                    <Reveal width="100%" variant="zoom">
                      <h1 className="font-chunky font-black text-3xl sm:text-5xl md:text-7xl lg:text-[7rem] leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 text-white tracking-tight drop-shadow-2xl">
                        A Digital Marketing Agency Designed for <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange animate-pulse-slow block md:inline mt-2 md:mt-0">Clarity, Trust, and Results</span>
                      </h1>
                    </Reveal>
                    
                    <Reveal width="100%" delay={0.2} variant="up">
                      <div className="max-w-4xl mx-auto mb-10 md:mb-12">
                          <p className="font-chunky text-lg md:text-3xl text-zinc-300 leading-relaxed md:leading-normal font-bold tracking-wide px-2 drop-shadow-lg">
                          We remove confusion from your website, SEO, ads, and content so customers know exactly why they should choose you. Because when people understand your brand in seconds, choosing you feels obvious.
                          </p>
                      </div>
                    </Reveal>
                </div>
            </div>

            {/* CTAs */}
            <Reveal width="100%" delay={0.4} variant="up">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4">
                <a
                  href="#contact"
                  className="group relative px-8 py-5 md:px-10 md:py-6 bg-white text-brand-black rounded-full font-chunky font-bold text-lg md:text-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full md:w-auto shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                    Get a Free Digital Marketing Consultation <Sparkles size={20} className="md:w-6 md:h-6" fill="currentColor" />
                  </span>
                </a>
                <a
                  href="#services"
                  className="group px-8 py-5 md:px-10 md:py-6 border border-zinc-700 bg-black/40 backdrop-blur-md rounded-full font-chunky font-bold text-lg md:text-xl text-white hover:bg-zinc-900 transition-all duration-300 w-full md:w-auto hover:border-brand-teal flex items-center justify-center gap-3"
                >
                  <span className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-teal/20 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <Play size={12} className="md:w-3.5 md:h-3.5" fill="currentColor" />
                  </span>
                  See Our Services
                </a>
              </div>
            </Reveal>
          </div>
      </div>
      
      <style>{`
        .mask-radial-fade {
            mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
            -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }
      `}</style>
    </section>
  );
};
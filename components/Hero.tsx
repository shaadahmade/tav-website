import React, { useEffect, useRef } from 'react';
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
        blob2Ref.current.style.transform = `translate(${xPercent * -100}px, ${yPercent * -100}px)`;
      }

      // 3. Tertiary Blob
      if (blob3Ref.current) {
         blob3Ref.current.style.transform = `translate(${xPercent * 50}px, ${yPercent * 80}px)`;
      }

      // Mascot 3D Tilt + Parallax
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
    <section className="dark relative flex flex-col bg-brand-dark overflow-hidden min-h-[100vh]" ref={containerRef} style={{ perspective: '1000px' }}>
      
      {/* --- FLUID BACKGROUND GRAPHIC --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Deep Base */}
          <div className="absolute inset-0 bg-brand-dark"></div>

          {/* Dynamic Water Orbs */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div
                ref={blob2Ref}
                className="w-[1200px] h-[1200px] bg-gradient-to-tr from-brand-teal/10 to-brand-purple/10 rounded-full blur-[120px] opacity-40 mix-blend-screen will-change-transform"
             ></div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
             <div
                ref={blob3Ref}
                className="w-[900px] h-[900px] bg-gradient-to-bl from-brand-purple/20 to-blue-600/10 rounded-full blur-[150px] opacity-30 mix-blend-screen will-change-transform"
             ></div>
          </div>

          <div
            ref={blob1Ref}
            className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-magenta/5 rounded-full blur-[80px] mix-blend-plus-lighter pointer-events-none will-change-transform"
            style={{ transform: 'translate(-50%, -50%)' }}
          ></div>
          
          {/* Grain overlay */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col items-center justify-center relative pt-20 pb-20">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            
            {/* Mascot with 3D Interaction */}
            <div
                 ref={mascotRef}
                 className="mb-12 md:mb-16 relative inline-block group will-change-transform"
            >
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange via-brand-purple to-brand-teal rounded-full blur-[40px] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
               <div className="relative z-10 bg-white backdrop-blur-3xl border border-white/20 shadow-[0_40px_100px_rgba(255,255,255,0.1)] rounded-full w-48 h-48 md:w-56 md:h-56 flex flex-col items-center justify-center mx-auto animate-float transition-all duration-300 px-6 overflow-hidden">
                  <Logo className="w-full h-auto max-w-[90%] relative z-20 drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]" textClassName="text-4xl md:text-7xl" />
                  {/* Internal ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white to-slate-100/50 pointer-events-none opacity-50"></div>
               </div>
            </div>

            {/* TEXT CONTAINER */}
            <div className="relative max-w-6xl mx-auto mb-16">
                <div className="relative z-10 w-full flex flex-col items-center">
                    <h1 className="font-chunky font-black text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[1.05] md:leading-[0.9] mb-8 text-white tracking-tighter drop-shadow-2xl reveal-text">
                      A Digital Agency <br className="hidden md:block"/>
                      Designed For <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-orange animate-pulse-slow">Clarity</span>
                    </h1>
                    
                    <div className="max-w-3xl mx-auto reveal-text" style={{ animationDelay: '0.2s' }}>
                        <p className="font-sans text-lg md:text-2xl text-zinc-400 leading-relaxed font-medium px-4">
                        We don't do jargon. We build fast, high-converting websites, run profitable ads, and execute SEO strategies that actually make sense to your bottom line.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4 w-full reveal-text" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="group relative px-10 py-5 bg-white text-black rounded-full font-sans font-extrabold text-lg overflow-hidden hover:scale-[1.03] active:scale-95 transition-all duration-300 w-full sm:w-auto text-center shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Your Free Consultation
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </span>
              </a>
              <a
                href="#services"
                className="group px-10 py-5 bg-zinc-900 border border-zinc-700 hover:border-zinc-300 text-white rounded-full font-sans font-extrabold text-lg transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-3 backdrop-blur-md hover:bg-zinc-800"
              >
                See What We Do
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
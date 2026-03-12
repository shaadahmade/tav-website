import React, { useRef, useEffect } from 'react';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';
import { ContainerScroll } from './ui/container-scroll-animation';

export const Philosophy: React.FC = () => {
   const processScrollRef = useRef<HTMLDivElement>(null);
   const ethicsScrollRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleAutoScroll = (ref: React.RefObject<HTMLDivElement>) => {
         if (!ref.current) return;
         if (window.innerWidth >= 768) return; // Only run on mobile
         
         const el = ref.current;
         const isAtEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 10;
         
         if (isAtEnd) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
         } else {
            // Scroll right by approximately one card width
            el.scrollBy({ left: el.clientWidth * 0.85, behavior: 'smooth' });
         }
      };

      const interval = setInterval(() => {
         handleAutoScroll(processScrollRef);
         handleAutoScroll(ethicsScrollRef);
      }, 3500); // Rotate every 3.5s

      return () => clearInterval(interval);
   }, []);

   return (
      <section id="philosophy" className="relative -mt-10 md:-mt-32">

         {/* SECTION 1: THE APPROACH (Minimalist Stacking with Hero Scroll) */}
         <div className="bg-white rounded-t-[2.5rem] md:rounded-t-[5rem] shadow-[0_-50px_100px_rgba(0,0,0,0.02)] pb-32 md:pb-48 overflow-hidden relative z-10">
            <div className="pt-40 md:pt-56 relative">

               <div className="container mx-auto px-4 md:px-6 relative z-10">

                  {/* Header */}
                  <div className="max-w-5xl mx-auto text-center mb-16 md:mb-48">
                     <Reveal width="100%" variant="blur" duration={1.2}>
                        <span className="font-mono text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase text-slate-300 mb-8 block">THE APPROACH</span>

                        <h3 className="text-4xl sm:text-6xl md:text-[6.5rem] lg:text-[7rem] font-chunky font-black text-brand-black leading-[1.05] tracking-tight mb-10 md:mb-12 uppercase">
                           We don't start <br /> with <br />
                           <span className="text-slate-200">execution.</span>
                        </h3>

                        <p className="text-lg md:text-2xl text-slate-400 font-medium font-sans leading-relaxed max-w-4xl mx-auto px-4">
                           Most agencies rush to build. <span className="text-brand-black font-extrabold">We rush to understand.</span> <br className="hidden md:block" />
                           Because a beautiful website that confuses people is just a digital paperweight.
                        </p>
                     </Reveal>
                  </div>

                  {/* What You Won't Get — Container Scroll Animation */}
                  <div className="max-w-7xl mx-auto">
                     <Reveal width="100%" variant="blur">
                        <div className="text-center mb-20 md:mb-32">
                           <h4 className="text-3xl sm:text-5xl md:text-7xl font-chunky font-black text-brand-black leading-none uppercase mb-4">
                              What You Won't Get
                           </h4>
                           <div className="w-16 h-1 bg-brand-black mx-auto rounded-full"></div>
                        </div>
                     </Reveal>

                     <div className="flex flex-col gap-0">
                        {[
                           { 
                              title: "Generic Templates", 
                              desc: "No cookie-cutter designs that look like everyone's.",
                              image: "/philosophy/generic_templates.png"
                           },
                           { 
                              title: "Copy-Paste Ads", 
                              desc: "We build custom strategies, not lazy marketing formulas.",
                              image: "/philosophy/copy_paste_ads.png"
                           },
                           { 
                              title: "Recycled Playbooks", 
                              desc: "What worked for someone else won't necessarily work for you.",
                              image: "/philosophy/recycled_playbooks.png"
                           },
                           { 
                              title: "Sounding Smart", 
                              desc: "We speak plainly because true expertise doesn't hide behind big words.",
                              image: "/philosophy/sounding_smart.png"
                           }
                        ].map((item, i) => (
                           <div key={i} className="-mt-32 md:-mt-48 first:mt-0">
                              <ContainerScroll
                                 titleComponent={
                                    <div className="flex flex-col items-center">
                                       <h5 className="text-brand-black font-chunky font-extrabold text-3xl md:text-6xl uppercase tracking-tight leading-[1.1] mb-6">
                                          {item.title}
                                       </h5>
                                       <p className="text-slate-400 text-lg md:text-xl font-medium font-sans leading-relaxed max-w-xl mx-auto">
                                          {item.desc}
                                       </p>
                                    </div>
                                 }
                              >
                                 <img
                                    src={item.image}
                                    alt={item.title}
                                    className="mx-auto rounded-2xl object-cover h-full object-left-top w-full shadow-2xl"
                                    draggable={false}
                                 />
                              </ContainerScroll>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </div>

         {/* SECTION 2: TRANSPARENCY (Seamless Overlap) */}
         <div className="dark flex flex-col bg-zinc-950 text-white rounded-t-[2rem] md:rounded-t-[6rem] -mt-10 md:-mt-48 relative z-20 pt-24 md:pt-64 pb-20 md:pb-48 shadow-[0_-80px_150px_rgba(0,0,0,0.8)]">

            <div className="pb-20 md:pb-32">
               <Marquee text="TRANSPARENCY • CLARITY • TRUST •" speed={30} transparent={true} />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

               {/* Header */}
               <div className="max-w-4xl mx-auto text-center mb-10 md:mb-32">
                  <Reveal width="100%" variant="up">
                     <span className="text-brand-orange font-mono font-bold tracking-widest uppercase mb-4 block text-xs md:text-sm">The Process</span>
                     <h3 className="text-3xl sm:text-5xl md:text-7xl font-chunky font-black text-white mb-6 md:mb-8 leading-[1.1]">
                        No Smoke.<br /> No Mirrors.
                     </h3>
                     <p className="text-zinc-400 text-xl md:text-3xl font-chunky leading-relaxed">
                        You’ll always know exactly what we’re doing, why we’re doing it, and how it makes you money.
                     </p>
                  </Reveal>
               </div>

               {/* Vertical Timeline Process */}
               <div className="max-w-5xl mx-auto relative mt-12 md:mt-0">
                  {/* Line */}
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-800 md:-translate-x-1/2 hidden md:block"></div>

                  <div ref={processScrollRef} className="flex overflow-x-auto md:flex-col gap-6 md:gap-0 pb-8 snap-x snap-mandatory hide-scrollbar">
                     {[
                        {
                           step: "01",
                           title: "Deep Dive",
                           desc: "We learn your business better than you do.",
                           details: "Competitor Analysis • Audience Profiling • Offer Refining"
                        },
                        {
                           step: "02",
                           title: "Strategy Map",
                           desc: "We build the roadmap before we drive.",
                           details: "Channel Selection • Budget Allocation • KPI Definition"
                        },
                        {
                           step: "03",
                           title: "Execution",
                           desc: "We build systems, not just ads.",
                           details: "High-Fidelity Design • Copywriting • Technical Setup"
                        },
                        {
                           step: "04",
                           title: "Optimization",
                           desc: "We double down on what works.",
                           details: "A/B Testing • Data Analysis • Scaling Winning Ads"
                        }
                     ].map((item, idx) => (
                        <div key={idx} className={`min-w-[88vw] sm:min-w-[60vw] md:min-w-0 snap-center shrink-0 flex flex-col md:flex-row items-center gap-6 md:gap-0 md:mb-24 relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                           {/* Timeline Dot */}
                           <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-black border-4 border-brand-orange z-10 md:-translate-x-1/2 hidden md:block shadow-[0_0_20px_rgba(241,90,36,0.5)]"></div>

                           {/* Content Side */}
                           <div className="w-full md:w-1/2 md:px-16 text-left md:text-center group">
                              <Reveal width="100%" variant={idx % 2 === 0 ? 'right' : 'left'}>
                                 <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-[2rem] hover:border-brand-orange/50 transition-colors duration-300">
                                    <h4 className="text-2xl md:text-3xl font-chunky font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-lg md:text-xl text-zinc-300 font-bold mb-4">{item.desc}</p>
                                    <div className="inline-block bg-zinc-800 px-4 py-2 rounded-lg">
                                       <p className="text-xs md:text-sm font-mono text-brand-orange uppercase tracking-wide">{item.details}</p>
                                    </div>
                                 </div>
                              </Reveal>
                           </div>

                           {/* Empty Side for layout balance */}
                           <div className="w-full md:w-1/2 hidden md:block"></div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>

         {/* SECTION 3: ETHICS (Black Overlap) */}
         <div className="dark flex items-center justify-center py-20 md:py-48 bg-black text-white relative isolate overflow-hidden rounded-t-[2rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-30 shadow-[0_-50px_200px_rgba(0,0,0,0.7)]">

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
               <Reveal width="100%" variant="blur">
                  <span className="text-brand-teal font-mono font-bold tracking-[0.4em] uppercase mb-8 md:mb-12 block text-xs md:text-sm">The Ethics</span>
                  <h3 className="text-3xl sm:text-5xl md:text-[8rem] font-chunky font-black leading-[1.1] md:leading-[0.9] mb-12 md:mb-32">
                     Quality and Ethics Over <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">Shortcuts.</span>
                  </h3>

                  <div ref={ethicsScrollRef} className="flex overflow-x-auto md:flex-row justify-start md:justify-center gap-6 md:gap-10 max-w-7xl mx-auto mb-24 md:mb-32 pb-8 snap-x snap-mandatory hide-scrollbar">
                     {[
                        { t: "No Misleading Ads", d: "We value reputation." },
                        { t: "No Black-hat SEO", d: "We play long term." },
                        { t: "No Inflated Metrics", d: "Real numbers only." }
                     ].map((item, idx) => (
                        <div key={idx} className="min-w-[80vw] sm:min-w-[55vw] md:min-w-0 snap-center shrink-0 flex-1 bg-white/5 border border-white/10 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] hover:bg-white/10 transition-colors backdrop-blur-sm group text-left md:text-center">
                           <div className="w-16 h-16 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 md:mx-auto group-hover:scale-110 transition-transform font-chunky font-bold text-3xl">
                              ✓
                           </div>
                           <h4 className="text-2xl md:text-3xl font-bold font-chunky mb-2">{item.t}</h4>
                           <p className="text-slate-400 font-chunky text-lg">{item.d}</p>
                        </div>
                     ))}
                  </div>

                  <p className="text-lg sm:text-2xl md:text-4xl font-chunky font-bold text-white/80 max-w-5xl mx-auto leading-tight px-4">
                     "We build digital marketing systems that still work <span className="underline decoration-brand-teal decoration-wavy underline-offset-8">six months from now</span>."
                  </p>
               </Reveal>
            </div>
         </div>

      </section>
   );
};
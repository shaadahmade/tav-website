import React from 'react';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="relative z-30 -mt-10 md:-mt-32">
      
      {/* SECTION 1: TRUST (The Approach) */}
      <div className="bg-white rounded-t-[2.5rem] md:rounded-t-[5rem] shadow-[0_-50px_100px_rgba(0,0,0,0.1)] pb-32 md:pb-48 overflow-hidden">
        <div className="pt-32 md:pt-48 relative">
          
          {/* Background Decor */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            
            {/* 1. Header - Centered & Massive */}
            <div className="max-w-5xl mx-auto text-center mb-20 md:mb-32">
              <Reveal width="100%" variant="up">
                <span className="inline-block py-2 px-4 rounded-full bg-slate-100 border border-slate-200 text-brand-purple font-mono text-xs md:text-sm font-bold tracking-widest uppercase mb-8">
                  01 — The Approach
                </span>
                <h3 className="text-4xl sm:text-7xl md:text-[7rem] lg:text-[8rem] font-chunky font-black text-brand-black leading-[0.9] tracking-tight mb-8">
                  We don't start with <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-teal relative">
                    execution.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                  </span>
                </h3>
                <p className="text-xl md:text-3xl text-slate-500 font-medium font-chunky max-w-3xl mx-auto leading-relaxed">
                  Most agencies rush to build. We rush to understand. <br className="hidden md:block"/>
                  Because a beautiful website that confuses people is just a digital paperweight.
                </p>
              </Reveal>
            </div>

            {/* 2. Visual & Contrast - Stacked Vertical */}
            <div className="flex flex-col items-center gap-12 md:gap-20">
               
               {/* Large Cinematic Image */}
               <Reveal width="100%" variant="zoom" duration={0.8}>
                  <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-[16/10] md:aspect-[21/9] shadow-2xl w-full max-w-6xl mx-auto group">
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent z-10"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" 
                        alt="Strategy Meeting" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
                      />
                      <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-20 max-w-2xl">
                          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-3xl">
                             <p className="text-2xl md:text-4xl font-chunky font-bold text-white leading-tight">
                                "If the strategy isn’t clear, nothing else gets built."
                             </p>
                          </div>
                      </div>
                  </div>
               </Reveal>

               {/* "What You Won't Get" Stacking Cards */}
               <div className="max-w-4xl mx-auto relative w-full pt-20 pb-40">
                 <Reveal width="100%" variant="up">
                   <div className="text-center mb-16 md:mb-24">
                      <h4 className="text-4xl md:text-6xl font-chunky font-black text-brand-black mb-4">What You <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">Won't</span> Get</h4>
                      <p className="text-slate-500 font-medium text-lg md:text-2xl">We don't do "generic".</p>
                   </div>
                 </Reveal>
                 
                 <div className="flex flex-col gap-16 md:gap-40 relative z-10 w-full px-2 md:px-0">
                    {[
                       { title: "Pre-written website templates", desc: "No cookie-cutter designs that look like everyone else's." },
                       { title: "Copy-paste ad frameworks", desc: "We build custom strategies, not lazy marketing formulas." },
                       { title: "Recycled marketing playbooks", desc: "What worked for someone else won't necessarily work for you." },
                       { title: "Jargon that sounds smart but means nothing", desc: "We speak plainly because true expertise doesn't hide behind big words." }
                    ].map((item, i) => (
                       <div 
                         key={i} 
                         className="sticky flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 bg-slate-50 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-[0_-15px_40px_rgba(0,0,0,0.08)] w-full mx-auto will-change-transform" 
                         style={{ 
                            top: `calc(15vh + ${i * 24}px)`, 
                            zIndex: i + 1,
                            width: `calc(100% - ${(3 - i) * 16}px)`
                         }}
                       >
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-brand-red/5 border border-brand-red/10 text-brand-red flex items-center justify-center shrink-0 font-chunky font-black text-4xl md:text-5xl">
                             ×
                          </div>
                          <div>
                            <h5 className="text-brand-black font-bold font-chunky text-2xl md:text-4xl leading-tight block mb-3 md:mb-4 relative w-fit">
                               {item.title}
                               <span className="absolute left-0 right-[-10px] top-[55%] -translate-y-1/2 h-1 md:h-1.5 bg-brand-red/40 block pointer-events-none rounded-full rotate-[-1deg]"></span>
                            </h5>
                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
               </div>

            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: TRANSPARENCY (Dark Overlap) */}
      <div className="dark flex flex-col bg-zinc-950 text-white rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 relative z-10 pt-32 md:pt-48 pb-32 md:pb-48 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        
        <div className="pb-20 md:pb-32">
          <Marquee text="TRANSPARENCY • CLARITY • TRUST •" speed={30} transparent={true} />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32">
             <Reveal width="100%" variant="up">
                <span className="text-brand-orange font-mono font-bold tracking-widest uppercase mb-6 block">02 — The Process</span>
                <h3 className="text-5xl sm:text-6xl md:text-8xl font-chunky font-black text-white mb-8 leading-none">
                  No Smoke.<br/> No Mirrors.
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

             <div className="flex overflow-x-auto md:flex-col gap-6 md:gap-0 pb-8 snap-x snap-mandatory hide-scrollbar">
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
                  <div key={idx} className={`min-w-[85vw] md:min-w-0 snap-center shrink-0 flex flex-col md:flex-row items-center gap-8 md:gap-0 md:mb-24 relative ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                     
                     {/* Timeline Dot */}
                     <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 rounded-full bg-black border-4 border-brand-orange z-10 md:-translate-x-1/2 hidden md:block shadow-[0_0_20px_rgba(241,90,36,0.5)]"></div>

                     {/* Content Side */}
                     <div className="w-full md:w-1/2 md:px-16 text-left md:text-center group">
                        <Reveal width="100%" variant={idx % 2 === 0 ? 'right' : 'left'}>
                           <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-[2rem] hover:border-brand-orange/50 transition-colors duration-300">
                              <span className="text-6xl font-chunky font-black text-zinc-800 group-hover:text-zinc-700 transition-colors block mb-4">{item.step}</span>
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
      <div className="dark min-h-screen flex items-center justify-center py-32 md:py-48 bg-black text-white relative isolate overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Reveal width="100%" variant="blur">
             <span className="border border-white/20 px-6 py-3 rounded-full text-brand-teal font-mono font-bold tracking-widest uppercase mb-12 inline-block text-sm">03 — The Ethics</span>
            <h3 className="text-4xl sm:text-7xl md:text-[9rem] font-chunky font-black leading-[0.9] mb-20 md:mb-32">
                Quality and Ethics Over <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">Shortcuts.</span>
            </h3>
            
            <div className="flex overflow-x-auto md:flex-row justify-start md:justify-center gap-6 md:gap-10 max-w-7xl mx-auto mb-24 md:mb-32 pb-8 snap-x snap-mandatory hide-scrollbar">
                {[
                    { t: "No Misleading Ads", d: "We value reputation." },
                    { t: "No Black-hat SEO", d: "We play long term." },
                    { t: "No Inflated Metrics", d: "Real numbers only." }
                ].map((item, idx) => (
                    <div key={idx} className="min-w-[75vw] md:min-w-0 snap-center shrink-0 flex-1 bg-white/5 border border-white/10 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] hover:bg-white/10 transition-colors backdrop-blur-sm group text-left md:text-center">
                        <div className="w-16 h-16 rounded-full bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 md:mx-auto group-hover:scale-110 transition-transform font-chunky font-bold text-3xl">
                            ✓
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold font-chunky mb-2">{item.t}</h4>
                        <p className="text-slate-400 font-chunky text-lg">{item.d}</p>
                    </div>
                ))}
            </div>

            <p className="text-2xl md:text-5xl font-chunky font-bold text-white/80 max-w-5xl mx-auto leading-tight px-4">
                "We build digital marketing systems that still work <span className="underline decoration-brand-teal decoration-wavy underline-offset-8">six months from now</span>."
            </p>
          </Reveal>
        </div>
      </div>

    </section>
  );
};
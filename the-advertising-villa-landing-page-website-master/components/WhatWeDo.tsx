import React from 'react';
import { Reveal } from './ui/Reveal';

export const WhatWeDo: React.FC = () => {
  const cards = [
    {
      desc: "Clear, conversion-focused websites that explain your offer in one scroll",
      color: "from-brand-teal to-blue-600"
    },
    {
      desc: "SEO services that attract people already searching for your solution",
      color: "from-brand-purple to-indigo-600"
    },
    {
      desc: "Paid ads that set the right expectation before the click",
      color: "from-brand-orange to-red-500"
    },
    {
      desc: "Content marketing that sounds like a real human explaining a decision",
      color: "from-brand-red to-pink-600"
    }
  ];

  return (
    <section className="dark bg-zinc-950 text-white flex flex-col relative z-20 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
      <div className="py-32 md:py-48 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            
            {/* Left Column: Headline */}
            <div className="md:w-5/12 relative md:sticky md:top-32">
              <Reveal variant="up">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-chunky font-bold mb-8 leading-tight text-white">
                  What We Do.
                </h2>
              </Reveal>
              
              <Reveal delay={0.2} variant="up">
                <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-chunky leading-relaxed max-w-md">
                  We’re a digital marketing agency focused on clarity that makes your brand understandable in under 5 seconds.
                </p>
              </Reveal>

              <Reveal delay={0.3} variant="up">
                <div className="p-8 border-l-4 border-brand-teal bg-zinc-900/50 rounded-r-3xl">
                  <p className="text-2xl text-white font-chunky mb-4 font-bold">That means:</p>
                  <div className="text-brand-teal font-chunky font-bold tracking-wide text-2xl md:text-3xl leading-tight">
                    Same message.<br/>
                    Same promise.<br/>
                    Across every touchpoint.
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Stacked Cards (One After One) */}
            <div className="md:w-7/12 flex flex-col gap-10 md:gap-16 w-full">
              {cards.map((card, idx) => (
                <Reveal key={idx} delay={0.1} width="100%" variant="up">
                  <div className="bg-zinc-900 p-10 md:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-zinc-800 hover:shadow-2xl hover:border-zinc-600 transition-all duration-500 group relative overflow-hidden flex flex-col justify-center min-h-[350px]">
                    
                    {/* Large Background Number */}
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="text-9xl md:text-[12rem] font-chunky font-black text-white">0{idx + 1}</span>
                    </div>
                    
                    <div className={`w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-8 md:mb-10 group-hover:scale-110 transition-transform shadow-2xl relative z-10`}>
                      <span className="font-chunky font-bold text-3xl md:text-4xl text-white">0{idx + 1}</span>
                    </div>
                    
                    <p className="text-white text-2xl md:text-4xl font-chunky font-bold leading-snug relative z-10 max-w-xl">
                        {card.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
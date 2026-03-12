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
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-chunky font-bold mb-6 md:mb-8 leading-tight text-white">
                  What We Do.
                </h2>
              </Reveal>

              <Reveal delay={0.2} variant="up">
                <p className="text-base md:text-xl text-zinc-400 mb-10 font-sans leading-relaxed max-w-md">
                  We’re a digital marketing agency focused on clarity that makes your brand understandable in under 5 seconds.
                </p>
              </Reveal>

              <Reveal delay={0.3} variant="up">
                <div className="p-8 border-l-4 border-brand-teal bg-zinc-900/50 rounded-r-3xl">
                  <p className="text-2xl text-white font-chunky mb-4 font-bold">That means:</p>
                  <div className="text-brand-teal font-chunky font-bold tracking-wide text-2xl md:text-3xl leading-tight">
                    Same message.<br />
                    Same promise.<br />
                    Across every touchpoint.
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Stacked Cards */}
            <div className="md:w-7/12 relative flex flex-col gap-6 md:gap-0 w-full pb-8 md:pb-0">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="sticky top-24 md:top-32 w-full mb-8 md:mb-20 last:mb-0 group"
                  style={{
                    zIndex: idx + 1,
                    transform: `perspective(2000px) translateY(${idx * 10}px)`
                  }}
                >
                  <Reveal delay={0.1} width="100%" variant="up">
                    <div className="bg-zinc-900/80 backdrop-blur-2xl p-6 md:p-16 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.4)] transition-all duration-700 hover:border-white/20 hover:bg-zinc-900 overflow-hidden flex flex-col justify-center min-h-[220px] md:min-h-[400px]">




                      <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-8 md:mb-12 group-hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10`}>
                      </div>

                      <p className="text-white text-xl sm:text-2xl md:text-5xl font-chunky font-bold leading-[1.2] relative z-10 max-w-2xl pr-4 md:pr-0">
                        {card.desc}
                      </p>

                      {/* Grain Overlay */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
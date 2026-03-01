import React, { useEffect } from 'react';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';
import { Check, Sparkles } from 'lucide-react';

const seoServices = [
  {
    title: "Keyword Research",
    description: "We don't chase high-volume keywords. We focus on why someone is searching.",
    bullets: [
      "Keywords used when people are ready to compare or choose",
      "Real questions your customers type into Google",
      "Searches that lead to decisions, not distractions"
    ],
    outcome: "You attract visitors who are already looking for a solution like yours.",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "On-Page SEO",
    description: "On-page SEO is not about keywords. It's about making your page easy to understand at first glance.",
    bullets: [
      "Page structure and headings",
      "Content that answers questions clearly",
      "CTAs that match what the customer is searching for"
    ],
    outcome: "Customers understand your page and know exactly what to do next.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Technical SEO",
    description: "Good technical SEO stays invisible. Bad technical SEO silently loses customers.",
    bullets: [
      "Site speed and mobile performance",
      "Indexing and crawl issues",
      "Messy site structure that confuses users"
    ],
    outcome: "Your visitors experience a website that works exactly as they expect.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Off-Page SEO",
    description: "We don't chase backlinks just to boost numbers. We build trust around your brand.",
    bullets: [
      "Links from websites that actually relate to your business",
      "Brand mentions that make your brand look trustworthy",
      "Growth that won't disappear after a few months"
    ],
    outcome: "Your website becomes more trustworthy over time.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Web Page Optimization",
    description: "Ranking a page is only half the work. The real job is helping customers take action.",
    bullets: [
      "Clearly explain what you offer",
      "Answer doubts before they stop the user",
      "Tells customers what to do next"
    ],
    outcome: "You get more enquiries from the traffic you already have.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Competitor Analysis",
    description: "We don't copy competitors. We study what's working for them\u2014and what's not.",
    bullets: [
      "Keywords they rank for (and why)",
      "Where they're weak",
      "Pages you can beat with clearer content"
    ],
    outcome: "You get a clear view of which competitors matter and where you can outrank them.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  }
];

const principles = [
  {
    title: "Search Intent Comes First",
    description: "Not every keyword brings customers. Only the ones that show intent matter.",
    detail: "We focus on keywords used by people who need your service, and are ready to take the next step."
  },
  {
    title: "Pages Designed to Explain Your Business Clearly",
    description: "Ranking alone doesn't convert customers. Understanding does.",
    detail: "We create pages that explain your offer in seconds\u2014so visitors don't have to think, guess, or scroll endlessly."
  },
  {
    title: "Visibility That Grows Month After Month",
    description: "Quick wins look good for a moment. Then they disappear.",
    detail: "We build it for consistency\u2014so your growth compounds month after month, and your visibility keeps working even when ads are paused."
  }
];

export const SEOService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="dark relative flex flex-col bg-brand-dark overflow-hidden min-h-[85vh]">

        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-brand-dark"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[min(80vw,600px)] bg-brand-navy/30 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/4 right-1/4 w-[min(60vw,500px)] h-[min(60vw,500px)] bg-gradient-to-tr from-brand-teal/15 to-brand-purple/15 rounded-full blur-[100px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[min(50vw,400px)] h-[min(50vw,400px)] bg-gradient-to-bl from-brand-purple/20 to-blue-600/10 rounded-full blur-[80px] animate-pulse-slow"></div>
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        <div className="flex-1 flex items-center justify-center relative pt-32 pb-32 md:pt-40 md:pb-40">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">

            <div className="relative max-w-7xl mx-auto">
              <div className="absolute inset-0 -m-10 bg-black/10 backdrop-blur-3xl rounded-[3rem] z-0 pointer-events-none mask-radial-fade"></div>

              <div className="relative z-10">
                <Reveal width="100%" variant="zoom">
                  <h1 className="font-chunky font-black text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 text-white tracking-tight drop-shadow-2xl">
                    SEO Services That Bring <br className="hidden md:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange animate-pulse-slow block md:inline mt-2 md:mt-0">Decision-Ready Customers</span>
                    <br className="hidden md:block"/> to Your Website
                  </h1>
                </Reveal>

                <Reveal width="100%" delay={0.2} variant="up">
                  <div className="max-w-4xl mx-auto mb-10 md:mb-12">
                    <p className="font-chunky text-lg md:text-3xl text-zinc-300 leading-relaxed md:leading-normal font-bold tracking-wide px-2 drop-shadow-lg">
                      Showing up when someone is actively searching for your solution.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* CTA */}
            <Reveal width="100%" delay={0.4} variant="up">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 px-4">
                <a
                  href="#contact"
                  className="group relative px-8 py-5 md:px-10 md:py-6 bg-white text-brand-black rounded-full font-chunky font-bold text-lg md:text-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full md:w-auto shadow-[0_0_40px_rgba(255,255,255,0.2)] text-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-white transition-colors">
                    Get a Free SEO Consultation <Sparkles size={20} className="md:w-6 md:h-6" fill="currentColor" />
                  </span>
                </a>
                <a
                  href="#seo-services"
                  className="group px-8 py-5 md:px-10 md:py-6 border border-zinc-700 bg-black/40 backdrop-blur-md rounded-full font-chunky font-bold text-lg md:text-xl text-white hover:bg-zinc-900 transition-all duration-300 w-full md:w-auto hover:border-brand-teal flex items-center justify-center gap-3"
                >
                  See What We Do
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


      {/* ==================== PROBLEM STATEMENT - White Overlap ==================== */}
      <section className="bg-white relative z-10 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 pb-32 md:pb-48 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="pt-32 md:pt-48">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <Reveal width="100%" variant="up">
                <p className="text-xl md:text-3xl text-slate-500 font-chunky font-medium mb-10 leading-relaxed">
                  Most SEO fails because it chases numbers:
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
                  {["Traffic", "Rankings", "Impressions"].map((item, i) => (
                    <span key={i} className="px-6 py-3 rounded-full bg-slate-100 border border-slate-200 text-brand-black font-chunky font-bold text-lg md:text-xl">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-slate-500 font-medium mb-8">
                  We focus on something simpler&mdash;and far more profitable:
                </p>
              </Reveal>
              <Reveal width="100%" delay={0.2} variant="up">
                <h2 className="font-chunky font-black text-3xl sm:text-5xl md:text-8xl text-brand-black leading-[0.95] tracking-tight">
                  Showing up when someone is actively searching for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange">
                    your solution.
                  </span>
                </h2>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      {/* ==================== PHILOSOPHY - Dark Overlap ==================== */}
      <section className="dark bg-zinc-950 text-white rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 relative z-20 pt-32 md:pt-48 pb-32 md:pb-48 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">

        <div className="pb-20 md:pb-32">
          <Marquee text="SEARCH INTENT &bull; CLARITY &bull; GROWTH &bull;" speed={30} transparent={true} />
        </div>

        <div className="container mx-auto px-4 md:px-6">

          {/* Header */}
          <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32">
            <Reveal width="100%" variant="up">
              <span className="inline-block py-2 px-6 rounded-full border border-white/20 text-brand-teal font-mono text-xs md:text-sm font-bold tracking-widest uppercase mb-8">
                Our SEO Philosophy
              </span>
              <h3 className="text-4xl sm:text-6xl md:text-8xl font-chunky font-black text-white mb-8 leading-[0.9]">
                Clear Pages Convert Better Than{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">
                  Clever Rankings.
                </span>
              </h3>
              <p className="text-zinc-400 text-xl md:text-3xl font-chunky leading-relaxed max-w-4xl mx-auto">
                We don't chase traffic for the sake of traffic. We build SEO systems that answer real questions from real buyers.
              </p>
            </Reveal>
          </div>

          {/* Three Principles */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 max-w-7xl mx-auto">
            {principles.map((principle, idx) => (
              <Reveal key={idx} width="100%" variant="up" delay={idx * 0.1}>
                <div className="flex-1 bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-colors backdrop-blur-sm group">
                  <span className="text-6xl font-chunky font-black text-zinc-800 group-hover:text-zinc-700 transition-colors block mb-4">0{idx + 1}</span>
                  <h4 className="text-2xl md:text-3xl font-bold font-chunky mb-4 text-white">{principle.title}</h4>
                  <p className="text-zinc-300 font-chunky text-lg mb-4">{principle.description}</p>
                  <p className="text-zinc-500 text-base leading-relaxed">{principle.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== SEO SERVICES LIST - Black Overlap ==================== */}
      <section id="seo-services" className="dark bg-black relative flex flex-col rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-30 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">

        <div className="py-24 relative z-20 pt-32 md:pt-48">
          <Marquee text="Our SEO Services &bull; Our SEO Services &bull;" speed={40} />
        </div>

        <div className="container mx-auto px-4 md:px-6 pb-32 md:pb-64 relative z-20">
          <div className="text-center max-w-4xl mx-auto mb-24 md:mb-40">
            <Reveal width="100%" variant="up">
              <h2 className="text-4xl sm:text-7xl md:text-9xl font-chunky font-black text-white mb-8 tracking-tighter leading-[0.9]">
                Our SEO Services{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">Include</span>
              </h2>
            </Reveal>
            <Reveal width="100%" delay={0.2} variant="up">
              <p className="text-xl md:text-2xl text-zinc-300 font-medium">
                We focus on the exact areas that make search traffic turn into real enquiries.
              </p>
            </Reveal>
          </div>

          {/* Cinematic Service List */}
          <div className="flex flex-col gap-16">
            {seoServices.map((service, index) => (
              <div
                key={index}
                className="group border-b border-white/10 py-20 md:py-32 transition-all duration-300 hover:border-brand-teal/50"
              >
                <Reveal width="100%" delay={0} variant="up">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 md:gap-24 opacity-100 md:opacity-50 md:group-hover:opacity-100 md:group-hover:translate-x-4 transition-all duration-500">

                    {/* Number & Title */}
                    <div className="flex items-start gap-8 md:gap-16 md:w-[45%] md:min-h-[200px]">
                      <span className="font-mono text-brand-teal text-xl md:text-2xl shrink-0 leading-none pt-2">0{index + 1}</span>
                      <h3 className="text-3xl sm:text-4xl md:text-6xl font-chunky font-black text-zinc-500 group-hover:text-white transition-colors duration-300 leading-[1.2]">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description & Details */}
                    <div className="md:w-[50%] md:min-h-[200px] flex flex-col justify-start gap-6">
                      <p className="text-lg md:text-2xl text-zinc-300 font-medium leading-[1.6]">{service.description}</p>

                      <ul className="space-y-3">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={12} className="text-brand-teal" />
                            </div>
                            <span className="text-sm md:text-base text-zinc-400">{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="inline-block bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl w-fit">
                        <p className="text-sm font-mono uppercase tracking-wide">
                          <span className="text-zinc-500">Outcome: </span>
                          <span className="text-brand-orange">{service.outcome}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ==================== CTA SECTION ==================== */}
      <section className="dark py-20 md:py-32 bg-black text-white text-center relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-40 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-brand-purple/20 rounded-full blur-[80px] md:blur-[128px] -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[min(300px,80vw)] h-[min(300px,80vw)] md:w-[500px] md:h-[500px] bg-brand-orange/20 rounded-full blur-[80px] md:blur-[128px] translate-x-1/3 translate-y-1/3 z-0 animate-pulse-slow"></div>

        {/* Background Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10 md:pt-20">
          <Reveal width="100%" variant="zoom">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-chunky font-black mb-6 md:mb-8 leading-tight text-white">
              Stop chasing rankings.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-orange">Start attracting customers who are ready to buy.</span>
            </h2>

            <div className="mb-10 md:mb-12">
              <p className="text-lg md:text-3xl font-chunky text-zinc-300 mb-6 md:mb-8 font-bold leading-tight px-2">
                Let's build an SEO system that brings real enquiries&mdash;not just traffic.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
                <a href="#contact" className="inline-block bg-white text-brand-black text-lg md:text-xl font-chunky font-bold py-4 px-10 md:py-5 md:px-12 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-orange hover:text-white hover:scale-105 transition-all duration-300 w-full md:w-auto text-center">
                  Book Your Free SEO Consultation Today
                </a>
              </div>
            </div>

          </Reveal>
        </div>
      </section>
    </>
  );
};

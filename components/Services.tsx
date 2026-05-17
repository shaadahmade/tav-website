import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';

interface Service {
  title: string;
  description: string;
  intro: string;
  bullets: string[];
  cta: string;
  image: string;
  link: string;
}

const services: Service[] = [
  {
    title: "Website Design Services",
    description: "Your customer shouldn't have to read your website carefully to know what to do next.",
    intro: "We design websites where people don't scroll to figure things out.\nThey instantly know:",
    bullets: ["What you do.", "Who it's for.", "What to do next."],
    cta: "Explore Our Website Design Approach",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    link: "/services/web-design"
  },
  {
    title: "Website Development Services",
    description: "A website that works the way customers assume it should.",
    intro: "We build websites that:",
    bullets: [
      "Loads fast on every device.",
      "Stays stable as traffic grows.",
      "Delivers a smooth, frustration-free experience."
    ],
    cta: "Explore Our Website Development Approach",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    link: "/services/web-development"
  },
  {
    title: "App Development Services",
    description: "Good apps don't need instructions.\nThey explain themselves.",
    intro: "We design and develop apps that:",
    bullets: [
      "Feel familiar from the first tap.",
      "Make it clear what to do next.",
      "Work smoothly without frustration."
    ],
    cta: "Explore our App Development Approach",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    link: "/services/app-development"
  },
  {
    title: "SEO Services",
    description: "We don't chase traffic.\nWe bring high-intent customers already searching for your business.",
    intro: "Our SEO focuses on:",
    bullets: [
      "Targeting high-intent keywords.",
      "Create pages that answer real questions.",
      "Visibility that grows month after month."
    ],
    cta: "Explore Our SEO Approach",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    link: "/services/seo"
  },
  {
    title: "Marketing Automation Services",
    description: "Good marketing automation doesn't replace human interaction.\nIt makes sure customers hear from you at the right time.",
    intro: "We build automation systems that:",
    bullets: [
      "Follow up instantly.",
      "Send relevant messages.",
      "Guide customer journeys step by step."
    ],
    cta: "Explore Our Marketing Automation Approach",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/services/marketing-automation"
  },
  {
    title: "Performance Marketing Services",
    description: "Good performance marketing isn't about spending more.\nIt's about making every click count.",
    intro: "We run campaigns that:",
    bullets: [
      "Reach people who are ready to act.",
      "Make the offer clear before they click.",
      "Turn ad spend into real results."
    ],
    cta: "Explore Our Performance Marketing Approach",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/services/performance-marketing"
  },
  {
    title: "Social Media Marketing",
    description: "Social media marketing should help customers recognize your brand before they read a word.",
    intro: "We create:",
    bullets: [
      "One clear message per post.",
      "Consistent, recognizable visuals.",
      "Content that keeps readers hooked till the last line."
    ],
    cta: "Explore Our Social Media Marketing Approach",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    link: "/services/social-media"
  },
  {
    title: "Graphic Designing Services",
    description: "If people have to think where to click,\nyour design has already failed.",
    intro: "We design visuals that help customers:",
    bullets: [
      "Understand your message faster.",
      "Remember your brand longer.",
      "Trust you sooner."
    ],
    cta: "Explore Our Graphic Design Approach",
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop",
    link: "/services/graphic-design"
  },
  {
    title: "Content Marketing Services",
    description: "Good content marketing doesn't try to impress.\nIt answers the exact questions stopping your customer from buying.",
    intro: "We create content that:",
    bullets: [
      "Answers real questions",
      "Simplifies decisions",
      "Builds trust before the sale"
    ],
    cta: "Explore Our Content Marketing Approach",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
    link: "/services/content-marketing"
  }
];

export const Services: React.FC = () => {
  const [activeImage, setActiveImage] = useState(services[0].image);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Preload images to prevent flickering
  useEffect(() => {
    services.forEach(service => {
      const img = new Image();
      img.src = service.image;
    });
  }, []);

  return (
    <section id="services" className="dark bg-black relative flex flex-col min-h-screen rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-40 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">

      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 transition-all duration-700 ease-in-out rounded-t-[2.5rem] md:rounded-t-[5rem] overflow-hidden">
        <div className="absolute inset-0 bg-black/85 z-10 backdrop-blur-sm"></div>
        <img
            src={activeImage}
            alt="Service Background"
            className="w-full h-full object-cover opacity-40 scale-105 transition-all duration-1000 ease-in-out"
        />
      </div>

      <div className="py-24 relative z-20 pt-32 md:pt-48">
        <Marquee text="Our Digital Marketing Services • Our Digital Marketing Services •" speed={40} />
      </div>

      <div className="container mx-auto px-4 md:px-6 pb-32 md:pb-64 relative z-20">
        <div className="text-center max-w-4xl mx-auto mb-24 md:mb-40">
          <Reveal width="100%" variant="up">
           <h2 className="text-3xl sm:text-5xl md:text-8xl font-chunky font-black text-white mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[0.9]">
              We don't offer <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-orange">generic services.</span>
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2} variant="up">
            <p className="text-xl md:text-2xl text-zinc-300 font-medium">
              We fix the exact moments where customers pause, doubt, and leave.
            </p>
          </Reveal>
        </div>

        {/* Cinematic List */}
        <div className="flex flex-col gap-8 md:gap-16 pb-8">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="group border-b border-white/10 py-8 md:py-16 cursor-pointer transition-all duration-300 hover:border-brand-teal/50"
                    onMouseEnter={() => {
                        setActiveImage(service.image);
                        setActiveIndex(index);
                    }}
                    onClick={() => {
                        setActiveImage(service.image);
                        setActiveIndex(index);
                        if (service.link) {
                            window.scrollTo(0, 0);
                            navigate(service.link);
                        }
                    }}
                >
                    <Reveal width="100%" delay={0} variant="up">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-24 opacity-100 md:opacity-50 md:group-hover:opacity-100 md:group-hover:translate-x-4 transition-all duration-500">

                            {/* Number & Title */}
                            <div className="flex items-start gap-6 md:gap-16 md:w-[42%] md:min-h-[260px]">
                                <h3 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-chunky font-black transition-colors duration-300 leading-[1.1] ${activeIndex === index ? 'text-white' : 'text-zinc-300 md:text-zinc-500 md:group-hover:text-white'}`}>
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description, Bullets, CTA */}
                            <div className="md:w-[55%] md:min-h-[260px] flex flex-col justify-start gap-4 md:gap-6">
                                <p className="text-base md:text-2xl text-white font-semibold leading-[1.4] whitespace-pre-line">
                                  {service.description}
                                </p>
                                <p className="text-sm md:text-base text-zinc-400 leading-[1.6] font-medium whitespace-pre-line">
                                  {service.intro}
                                </p>
                                <ul className="space-y-2 md:space-y-2.5 text-sm md:text-base text-zinc-300 leading-relaxed">
                                  {service.bullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                      <span className="mt-2 md:mt-2.5 h-1.5 w-1.5 rounded-full bg-brand-teal flex-shrink-0" />
                                      <span>{b}</span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="mt-2 md:mt-3">
                                  <span className="inline-flex items-center gap-2 text-xs md:text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-teal group-hover:text-white transition-colors duration-300">
                                    {service.cta}
                                    <ArrowUpRight className="h-3.5 w-3.5 md:h-4 md:w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                                  </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
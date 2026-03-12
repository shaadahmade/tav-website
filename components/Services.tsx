import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Reveal } from './ui/Reveal';
import { Marquee } from './ui/Marquee';

const services = [
  {
    title: "Website Design",
    description: "Your customer shouldn't have to read your website carefully to know what to do next.",
    details: "What you do • Who it's for • How to take the next step",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2070&auto=format&fit=crop",
    link: "/services/web-design"
  },
  {
    title: "Website Dev",
    description: "A website that works the way customers assume it should.",
    details: "Load fast • Stay stable • Feel obvious to use",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "App Dev",
    description: "Good apps don't need instructions. They explain themselves.",
    details: "Feel familiar • Clear actions • Work smoothly",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "SEO",
    description: "We don't chase traffic. We bring high-intent customers already searching for your business.",
    details: "Search intent • Answer questions • Compound visibility",
    image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop",
    link: "/services/seo"
  },
  {
    title: "Marketing Automation",
    description: "Good marketing automation doesn't replace human interaction. It makes sure customers hear from you at the right time.",
    details: "Follow up instantly • Send relevant messages • Guide leads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    link: "/services/marketing-automation"
  },
  {
    title: "Performance Marketing",
    description: "Good performance marketing isn't about spending more. It's about making every click count.",
    details: "Ready to act • Clear offers • Real results",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    title: "Social Media",
    description: "Social media marketing that helps customers recognize your brand before they read a word.",
    details: "Clear message • Consistent visuals • Human-sounding content",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    title: "Graphic Design",
    description: "Good graphic design doesn't decorate your brand. It explains it.",
    details: "Understand faster • Remember longer • Trust sooner",
    image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Content Marketing",
    description: "Good content marketing doesn't try to impress. It helps customers understand.",
    details: "Answers real questions • Explains decisions • Builds trust",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop"
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
                            <div className="flex items-start gap-6 md:gap-16 md:w-[45%] md:min-h-[200px]">
                                <h3 className={`text-2xl sm:text-4xl md:text-6xl font-chunky font-black transition-colors duration-300 leading-[1.2] ${activeIndex === index ? 'text-white' : 'text-zinc-300 md:text-zinc-500 md:group-hover:text-white'}`}>
                                    {service.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="md:w-[50%] md:min-h-[200px] flex flex-col justify-start gap-4 md:gap-6">
                                <p className="text-sm md:text-2xl text-zinc-300 font-medium leading-[1.6]">{service.description}</p>
                                <p className="text-[10px] md:text-base text-brand-teal uppercase tracking-[0.15em] md:tracking-[0.2em] font-mono leading-relaxed">{service.details}</p>
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
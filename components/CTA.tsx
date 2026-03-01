import React, { useEffect, useState } from 'react';
import { Reveal } from './ui/Reveal';

export const CTA: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY * 0.1);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="clarity" className="dark py-20 md:py-32 bg-black text-white text-center relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 z-50 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
      
      {/* Background Video with Parallax */}
      <div 
        className="absolute inset-0 z-0 opacity-20 grayscale rounded-t-[2.5rem] md:rounded-t-[5rem] overflow-hidden"
        style={{ transform: `translateY(${offset - 200}px)`, willChange: 'transform' }} 
      >
        <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-[140%] object-cover -mt-20" // Extra height for movement
         >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-light-trails-on-highway-at-night-2058-large.mp4" type="video/mp4" />
         </video>
         <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-brand-purple/20 rounded-full blur-[80px] md:blur-[128px] -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[min(300px,80vw)] h-[min(300px,80vw)] md:w-[500px] md:h-[500px] bg-brand-orange/20 rounded-full blur-[80px] md:blur-[128px] translate-x-1/3 translate-y-1/3 z-0 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-10 md:pt-20">
        <Reveal width="100%" variant="zoom">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-chunky font-black mb-6 md:mb-8 leading-tight text-white">
            People don't choose the best brand.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-orange">They choose the brand they understand first.</span>
          </h2>

          <div className="mb-10 md:mb-12">
            <p className="text-lg md:text-3xl font-chunky text-zinc-300 mb-6 md:mb-8 font-bold leading-tight px-2">
              Let's make your first impression a lasting impression.
            </p>

            <div id="cta-btn" className="flex flex-col items-center justify-center gap-4 md:gap-6">
                 <a href="#contact" className="inline-block bg-white text-brand-black text-lg md:text-xl font-chunky font-bold py-4 px-10 md:py-5 md:px-12 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-brand-purple hover:to-brand-orange hover:scale-105 transition-all duration-300 w-full md:w-auto text-center">
                    Book Your Free Digital Marketing Consultation Today
                 </a>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
};
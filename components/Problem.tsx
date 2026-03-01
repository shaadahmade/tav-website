import React from 'react';
import { Reveal } from './ui/Reveal';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="bg-white relative z-10 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-10 md:-mt-32 pb-24 md:pb-48 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
      <div className="pt-32 md:pt-48">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Header */}
          <div className="max-w-5xl">
             <Reveal variant="up">
                <h2 className="font-chunky font-black text-5xl sm:text-7xl md:text-9xl text-brand-black leading-[0.9] tracking-tight">
                    Why Brands Trust Our <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange">
                        Digital Marketing Approach
                    </span>
                </h2>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
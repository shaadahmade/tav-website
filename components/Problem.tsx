import React from 'react';
import { Reveal } from './ui/Reveal';
import { MagicTextReveal } from './ui/magic-text-reveal';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="bg-white relative z-10 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-20 md:-mt-48 pb-10 md:pb-20">
      <div className="pt-32 md:pt-64 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-7xl">
            <Reveal variant="up" width="100%">
              <div className="flex flex-col items-start gap-0 -mt-10">
                <MagicTextReveal 
                  text="Why Brands Trust"
                  fontSize={80}
                  color="#1a1a2e"
                  fontWeight={800}
                  className="!bg-transparent !border-none !backdrop-blur-none"
                />
                <MagicTextReveal 
                  text="Our"
                  fontSize={80}
                  color="#1a1a2e"
                  fontWeight={800}
                  className="!bg-transparent !border-none !backdrop-blur-none"
                />
                <MagicTextReveal 
                  text="Digital Marketing"
                  fontSize={100}
                  color="#9333ea"
                  fontWeight={800}
                  className="!bg-transparent !border-none !backdrop-blur-none"
                />
                <MagicTextReveal 
                  text="Approach"
                  fontSize={100}
                  color="#f97316"
                  fontWeight={800}
                  className="!bg-transparent !border-none !backdrop-blur-none"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
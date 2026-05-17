import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  transparent?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  direction = 'left', 
  speed = 20, 
  className = "",
  transparent = true
}) => {
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap py-2 md:py-4 ${className} pointer-events-none select-none`}>
      <div 
        className={`flex animate-scroll-${direction}`} 
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className={`mx-2 md:mx-4 text-3xl sm:text-5xl md:text-[8rem] font-chunky font-black uppercase ${transparent ? 'text-transparent stroke-text' : 'text-brand-black/5 dark:text-white/5'}`}
            style={transparent ? { WebkitTextStroke: '1px rgba(200,200,200,0.45)' } : {}}
          >
            {text}
          </span>
        ))}
      </div>
      <div 
        className={`flex absolute top-2 md:top-4 animate-scroll-${direction}`} 
        style={{ animationDuration: `${speed}s` }}
      >
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className={`mx-2 md:mx-4 text-3xl sm:text-5xl md:text-[8rem] font-chunky font-black uppercase ${transparent ? 'text-transparent stroke-text' : 'text-brand-black/5 dark:text-white/5'}`}
            style={transparent ? { WebkitTextStroke: '1px rgba(200,200,200,0.45)' } : {}}
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`
        .stroke-text { -webkit-text-stroke: 1px rgba(200,200,200,0.45); }
        @media (max-width: 768px) {
           .stroke-text { -webkit-text-stroke: 0.5px rgba(200,200,200,0.55); }
        }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        @keyframes scroll-right { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
        .animate-scroll-left { animation: scroll-left linear infinite; }
        .animate-scroll-right { animation: scroll-right linear infinite; }
      `}</style>
    </div>
  );
};
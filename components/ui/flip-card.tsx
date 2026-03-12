import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';

export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  color?: string;
  icon?: React.ReactNode;
}

export default function CardFlip({
  title = 'Build MVPs Fast',
  subtitle = 'Launch your idea in record time',
  description = 'Copy, paste, customize—and launch your MVP faster than ever with our developer-first component library.',
  features = [
    'Copy & Paste Ready',
    'Developer-First',
    'MVP Optimized',
    'Zero Setup Required',
  ],
  color = '#14b8a6',
  icon: Icon = <Rocket className="h-6 w-6 text-white" />
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      style={{
        ['--primary' as any]: color ?? '#14b8a6',
      }}
      className="group relative h-[420px] w-full [perspective:2000px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={cn(
          'relative h-full w-full',
          '[transform-style:preserve-3d]',
          'transition-all duration-700 ease-in-out',
          isFlipped
            ? '[transform:rotateY(180deg)]'
            : '[transform:rotateY(0deg)]',
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(0deg)] [backface-visibility:hidden]',
            'overflow-hidden rounded-3xl',
            'bg-zinc-900 border border-zinc-800',
            'shadow-2xl shadow-black/50',
            'transition-all duration-700',
            'group-hover:border-primary/50',
            isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-brand-magenta/5 pointer-events-none" />

          {/* Animated code blocks or pattern */}
          <div className="absolute inset-x-0 top-0 h-64 overflow-hidden opacity-20 transition-opacity group-hover:opacity-40">
             <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4">
                {[...Array(24)].map((_, i) => (
                  <div 
                    key={i} 
                    className="h-2 rounded-full bg-primary/40 animate-pulse" 
                    style={{ 
                      width: `${40 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.1}s` 
                    }} 
                  />
                ))}
             </div>
          </div>

          {/* Central icon container */}
          <div className="flex flex-col items-center justify-center h-full pt-12 pb-20 px-8 text-center">
            <div
              className={cn(
                'h-16 w-16 rounded-2xl mb-6',
                'bg-gradient-to-br from-primary via-primary/80 to-primary/60',
                'flex items-center justify-center',
                'shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]',
                'transition-all duration-500 group-hover:scale-110 group-hover:rotate-6',
              )}
            >
              {Icon}
            </div>
            
            <h3 className="text-2xl font-chunky font-bold text-white mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              {subtitle}
            </p>
          </div>

          {/* Bottom indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 group-hover:text-primary transition-colors">
              <span>Flip for details</span>
              <ArrowRight className="h-3 w-3 animate-bounce-x" />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            'absolute inset-0 h-full w-full',
            '[transform:rotateY(180deg)] [backface-visibility:hidden]',
            'rounded-3xl p-8',
            'bg-zinc-900 border border-primary/30',
            'shadow-2xl shadow-primary/10',
            'flex flex-col',
            'transition-all duration-700',
            !isFlipped ? 'opacity-0' : 'opacity-100',
          )}
        >
          {/* Subtle noise/grain */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-3xl pointer-events-none" />

          <div className="relative z-10 flex-1 flex flex-col">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-chunky font-bold text-white">
                {title}
              </h3>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 border-l-2 border-primary/30 pl-4 py-1 italic">
              {description}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const icons = [Copy, Code2, Rocket, Zap];
                const IconComponent = icons[index % icons.length];

                return (
                  <div
                    key={feature}
                    className="flex items-center gap-4 text-zinc-200 transition-all duration-500"
                    style={{
                      transform: isFlipped ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                    }}
                  >
                    <div className="bg-primary/20 flex h-6 w-6 items-center justify-center rounded-lg">
                      <IconComponent className="text-primary h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{feature}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-auto pt-6 border-t border-zinc-800">
               <button className="w-full py-3 rounded-xl bg-primary text-black font-bold text-sm hover:bg-white transition-colors duration-300">
                  Book This Service
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

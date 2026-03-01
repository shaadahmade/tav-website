import React, { useEffect, useRef, useState } from 'react';

interface ParallaxVideoProps {
  src: string;
  poster?: string;
  className?: string;
  speed?: number; // 0.1 to 0.5 recommended
}

export const ParallaxVideo: React.FC<ParallaxVideoProps> = ({ src, poster, className = "", speed = 0.15 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let ticking = false;

    const updatePosition = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only calculate if in view or close to view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate a value that goes from negative to positive as it scrolls
        const distance = (windowHeight - rect.top) * speed;
        setOffset(distance - (windowHeight * speed * 0.5)); 
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updatePosition(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        poster={poster}
        className="w-full h-[140%] object-cover absolute -top-[20%] left-0 transition-transform duration-75 ease-linear will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};
import React, { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // 0.1 to 0.5 recommended
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = "", speed = 0.15 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Only calculate if in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate a value that goes from negative to positive as it scrolls
        const distance = (windowHeight - rect.top) * speed;
        // Center the starting offset so it moves through the center
        setOffset(distance - (windowHeight * speed * 0.5)); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-[120%] object-cover absolute -top-[10%] left-0 transition-transform duration-75 ease-linear will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      />
    </div>
  );
};
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  className?: string;
  variant?: "up" | "down" | "left" | "right" | "zoom" | "blur";
  threshold?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 0.8,
  className = "", 
  variant = "up",
  threshold = 0.1
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state based on intersection status to allow re-triggering
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: threshold, 
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before element leaves/enters
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  const getTransform = () => {
    if (!isVisible) {
      switch (variant) {
        case "up": return "translateY(40px)";
        case "down": return "translateY(-40px)";
        case "left": return "translateX(-40px)";
        case "right": return "translateX(40px)";
        case "zoom": return "scale(0.90)";
        case "blur": return "scale(1)";
        default: return "translateY(40px)";
      }
    }
    return "translate(0) scale(1)";
  };

  const getOpacity = () => isVisible ? 1 : 0;
  const getFilter = () => !isVisible && variant === "blur" ? "blur(10px)" : "blur(0)";

  return (
    <div ref={ref} style={{ width }} className={`relative ${className}`}>
      <div
        style={{
          transform: getTransform(),
          opacity: getOpacity(),
          filter: getFilter(),
          // Only apply delay when appearing. Reset instantly or smoothly without delay when disappearing.
          transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${isVisible ? delay : 0}s`,
          willChange: "transform, opacity, filter"
        }}
      >
        {children}
      </div>
    </div>
  );
};
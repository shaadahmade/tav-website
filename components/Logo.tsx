import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "", textClassName = "text-5xl" }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`font-chunky font-extrabold tracking-tighter leading-none flex items-center select-none ${textClassName}`}>
         <span className="bg-gradient-to-b from-brand-yellow via-brand-purple to-brand-magenta bg-clip-text text-transparent pb-1">t</span>
         <span className="bg-gradient-to-tr from-brand-teal via-brand-navy to-brand-yellow bg-clip-text text-transparent -ml-2 pb-1">a</span>
         <span className="bg-gradient-to-r from-brand-orange via-brand-purple to-brand-magenta bg-clip-text text-transparent -ml-2 pb-1">v</span>
      </div>
    );
  }

  return (
    <img 
      src="/TheAdvertisingVilla.svg" 
      alt="tav" 
      className={`object-contain ${className}`} 
      onError={() => setError(true)}
    />
  );
};
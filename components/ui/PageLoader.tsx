import React from 'react';

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-zinc-950 animate-page-loader-fade">
      <div className="relative">
        {/* Gradient ring */}
        <div className="relative w-14 h-14 md:w-16 md:h-16">
          <svg
            viewBox="0 0 50 50"
            className="w-full h-full animate-spin"
            style={{ animationDuration: '1.1s' }}
          >
            <defs>
              <linearGradient id="page-loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00AEEF" />
                <stop offset="50%" stopColor="#662D91" />
                <stop offset="100%" stopColor="#F15A24" />
              </linearGradient>
            </defs>
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="url(#page-loader-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="35 90"
            />
          </svg>
        </div>

        {/* Small pulsing dot */}
        <div className="mt-6 flex justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes page-loader-fade {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-page-loader-fade { animation: page-loader-fade 0.25s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PageLoader;

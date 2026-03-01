import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-brand-black dark:text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-purple"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <div className={`absolute inset-0 transform transition-transform duration-500 ease-spring ${theme === 'dark' ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
          <Sun size={20} className="text-brand-orange" />
        </div>
        <div className={`absolute inset-0 transform transition-transform duration-500 ease-spring ${theme === 'dark' ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
          <Moon size={20} className="text-brand-teal" />
        </div>
      </div>
    </button>
  );
};
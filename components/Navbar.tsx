import React, { useState, useEffect, memo, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { NavItem } from '../types';
import { Logo } from './Logo';

const navItems: NavItem[] = [
  { label: 'Problem', href: '#problem' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#clarity' },
  { label: 'Contact', href: '#cta-btn' },
];

const servicePages = [
  { label: 'SEO', path: '/services/seo' },
];

// Memoized Progress Bar Component to prevent parent re-renders
const ScrollProgressBar = memo(() => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setProgress(totalScroll / windowHeight);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-brand-purple via-brand-magenta to-brand-orange z-10 transition-all duration-100 ease-out"
         style={{ width: `${progress * 100}%` }}>
    </div>
  );
});

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const isScrolled = currentScrollY > 50;
      setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    setServicesOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (location.pathname !== '/') {
      window.location.href = '/' + href;
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setServicesOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav
      className={`fixed w-full z-[999] transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-20">
        <a href="/" className="flex items-center gap-3 group" onClick={handleLogoClick}>
          <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
             <Logo className="h-12 w-auto" textClassName="text-5xl" />
          </div>
          <div className="hidden lg:flex flex-col justify-center pt-1 border-l-2 border-white/20 pl-3">
             <span className="text-[14px] font-accent font-bold tracking-[0.15em] text-white leading-none">THE ADVERTISING VILLA</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.label === 'Services' ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-chunky font-bold uppercase tracking-wide text-white/80 hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-1"
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </a>

                {/* Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div
                      className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 px-2 min-w-[160px]"
                      style={{ animation: 'dropIn 0.15s ease-out' }}
                    >
                      {servicePages.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-between gap-4 text-white/70 hover:text-brand-teal hover:bg-white/5 font-chunky font-bold text-sm transition-all duration-200 py-2.5 px-3 rounded-lg"
                        >
                          {page.label}
                          <span className="text-xs opacity-40 group-hover:opacity-100">&rarr;</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-chunky font-bold uppercase tracking-wide text-white/80 hover:text-brand-teal transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            )
          )}

          <a
            href="#cta-btn"
            onClick={(e) => handleNavClick(e, '#cta-btn')}
            className="ml-2 px-6 py-2.5 rounded-full bg-white text-brand-black font-chunky font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            className="text-white hover:text-brand-purple transition-colors"
            onClick={() => { setIsOpen(!isOpen); setServicesOpen(false); }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-white/10 py-8 flex flex-col items-center space-y-8 animate-[fadeIn_0.2s_ease-out] shadow-2xl h-screen">
          {navItems.map((item) =>
            item.label === 'Services' ? (
              <div key={item.label} className="flex flex-col items-center">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-white font-chunky font-bold text-2xl hover:text-brand-teal cursor-pointer flex items-center gap-2 transition-colors"
                >
                  {item.label}
                  <ChevronDown size={20} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {servicesOpen && (
                  <div className="mt-4 flex flex-col items-center gap-3" style={{ animation: 'dropIn 0.15s ease-out' }}>
                    {servicePages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        className="text-zinc-400 hover:text-brand-teal font-chunky font-bold text-lg transition-colors flex items-center gap-2"
                      >
                        {page.label} <span className="text-xs opacity-50">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-white font-chunky font-bold text-2xl hover:text-brand-teal cursor-pointer"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            )
          )}
          <a
             href="#cta-btn"
             className="px-10 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-orange text-white font-chunky font-bold shadow-lg text-lg cursor-pointer"
             onClick={(e) => handleNavClick(e, '#cta-btn')}
          >
            Let's Talk
          </a>
        </div>
      )}

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
};

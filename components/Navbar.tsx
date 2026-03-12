import React, { useState, useEffect, memo, useRef } from 'react';
import { Menu, X, Home, User, Briefcase, MessageSquare, ChevronDown } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { NavItem } from '../types';
import { Logo } from './Logo';
import { GlassButton } from './ui/glass-button';
import { NavBar as TubelightNavBar } from './ui/tubelight-navbar';

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Problem', url: '/#problem', icon: User },
  { name: 'Philosophy', url: '/#philosophy', icon: Briefcase },
  { name: 'Contact', url: '/#cta-btn', icon: MessageSquare },
];

const servicePages = [
  { label: 'SEO', path: '/services/seo' },
  { label: 'Web Design', path: '/services/web-design' },
  { label: 'Marketing Automation', path: '/services/marketing-automation' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
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

  // Sync active tab with route
  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash;
    
    if (path === '/') {
        if (!hash || hash === '#') setActiveTab('Home');
        else if (hash.includes('problem')) setActiveTab('Problem');
        else if (hash.includes('philosophy')) setActiveTab('Philosophy');
        else if (hash.includes('cta-btn') || hash.includes('contact')) setActiveTab('Contact');
    } else {
        setActiveTab('');
    }
  }, [location]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveTab('Home');
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <nav
      className={`fixed w-full z-[9999] transition-all duration-500 transform ${
        (isVisible || isOpen) ? 'translate-y-0' : '-translate-y-full'
      } ${
        (scrolled || location.pathname !== '/') ? 'py-2 bg-black/80 backdrop-blur-md drop-shadow-2xl' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-20">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 group relative z-50" onClick={handleLogoClick}>
           <div className="flex items-center group-hover:scale-105 transition-transform duration-300">
              <Logo className="h-10 md:h-12 w-auto" textClassName="text-4xl md:text-5xl" />
           </div>
        </a>

        {/* FLOATING TUBELIGHT NAV */}
        <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2 hidden md:flex">
            <TubelightNavBar 
              items={navItems} 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
              className="static translate-x-0"
            />
            
            {/* Work Dropdown */}
            <div 
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
             >
                <button className="flex items-center gap-1 text-white/60 hover:text-white transition-colors font-accent font-bold text-xs uppercase tracking-widest py-2.5">
                    Our Services <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`absolute top-full right-0 mt-2 w-64 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl z-[100] transition-all duration-300 ${
                    isDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                    <div className="flex flex-col gap-1 text-left">
                        {servicePages.map((page) => (
                            <Link 
                                key={page.path}
                                to={page.path} 
                                className="px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white transition-all text-sm font-medium"
                                onClick={() => {
                                  setIsDropdownOpen(false);
                                  setActiveTab('');
                                }}
                            >
                                {page.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-4 relative z-50">
           <a href="#cta-btn">
              <GlassButton size="sm">
                 Let's Talk
              </GlassButton>
           </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden relative z-50 h-10">
           <button
             className="text-white hover:text-brand-orange transition-colors flex items-center justify-center"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-zinc-950 z-[9999] flex flex-col items-center justify-center min-h-[100svh] w-screen animate-[fadeIn_0.2s_ease-out]">
           <button 
             className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors"
             onClick={() => setIsOpen(false)}
           >
             <X size={32} />
           </button>

            <div className="flex flex-col items-center gap-6 w-full px-6">
               {navItems.map((item) => (
                 <a
                   key={item.name}
                   href={item.url}
                   className="text-white font-chunky font-black text-2xl hover:text-brand-orange transition-colors uppercase tracking-widest text-center py-1"
                   onClick={() => setIsOpen(false)}
                 >
                   {item.name}
                 </a>
               ))}

               {/* Mobile Service Pages */}
               <div className="flex flex-col items-center gap-4 py-4 border-t border-white/5 w-full">
                   <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] text-center">Our Expertise</span>
                   {servicePages.map((page) => (
                        <Link 
                            key={page.path}
                            to={page.path}
                            className="text-zinc-300 font-chunky font-bold text-lg hover:text-brand-teal transition-colors text-center"
                            onClick={() => {
                                setIsOpen(false);
                                setActiveTab('');
                            }}
                        >
                            {page.label}
                        </Link>
                   ))}
               </div>

               <div className="pt-4 flex justify-center w-full">
                 <a href="#contact" onClick={() => setIsOpen(false)} className="inline-block">
                   <GlassButton>
                     Book Consultation
                   </GlassButton>
                 </a>
               </div>
            </div>
        </div>
      )}
    </nav>
  );
};

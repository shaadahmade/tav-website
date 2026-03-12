"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

// Simple utility for conditional class names
function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  activeTab?: string
  onTabChange?: (name: string) => void
}

export function NavBar({ items, className, activeTab: externalActiveTab, onTabChange }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(externalActiveTab || items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (externalActiveTab) {
      setActiveTab(externalActiveTab);
    }
  }, [externalActiveTab]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    const isHomePage = window.location.pathname === '/';
    const hashMatch = item.url.match(/#(.+)$/);
    const targetId = hashMatch ? hashMatch[1] : null;

    if (targetId && isHomePage) {
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        setActiveTab(item.name);
        if (onTabChange) onTabChange(item.name);

        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div
      className={cn(
        "fixed bottom-0 md:top-0 left-1/2 -translate-x-1/2 z-[1000] mb-6 md:pt-6 h-fit pointer-events-auto",
        className,
      )}
    >
      <div className="flex items-center gap-2 bg-black/50 border border-white/10 backdrop-blur-xl py-2 px-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleNavClick(e, item)}
              className={cn(
                "relative cursor-pointer text-xs font-accent font-bold px-4 py-2.5 rounded-full transition-all duration-300 uppercase tracking-widest",
                "text-white/60 hover:text-white",
                isActive && "text-white",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-white/10 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-brand-orange shadow-[0_0_15px_rgba(241,90,36,0.8)] rounded-t-full">
                    <div className="absolute w-12 h-6 bg-brand-orange/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-brand-orange/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-brand-orange/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}

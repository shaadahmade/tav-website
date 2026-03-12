import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const contactItems = [
    {
      icon: MapPin,
      label: '529D/2/220 CC Jageshwar Vihar, Kalyanpur West, Lucknow-226022',
      href: 'https://www.google.com/maps/search/?api=1&query=529D/2/220+CC+Jageshwar+Vihar,+Kalyanpur+West,+Lucknow-226022',
      external: true,
    },
    {
      icon: Phone,
      label: '+91 83032 75841',
      href: 'tel:+918303275841',
      external: false,
    },
    {
      icon: Mail,
      label: 'theadvertisingvilla@gmail.com',
      href: 'mailto:theadvertisingvilla@gmail.com',
      external: false,
    },
    {
      icon: Globe,
      label: 'www.theadvertisingvilla.com',
      href: 'https://www.theadvertisingvilla.com',
      external: true,
    },
  ];

  return (
    <footer id="contact" className="dark bg-black text-white pt-16 md:pt-24 pb-10 md:pb-12 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-14 md:mb-20">
          
          {/* Brand */}
          <div>
            <div className="w-fit mb-4 select-none">
              <Logo className="h-12 md:h-16 w-auto" textClassName="text-5xl md:text-6xl" />
            </div>
            <div className="flex flex-col mb-4">
              <span className="text-[11px] md:text-[12px] font-bold tracking-[0.2em] text-zinc-300 font-accent">THE ADVERTISING VILLA</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-accent max-w-sm">
              A Digital Marketing Agency that removes confusion and drives action through clarity.
            </p>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="text-lg md:text-xl font-chunky font-bold mb-6 md:mb-8 text-white">Contact Us</h4>
            <ul className="space-y-4 md:space-y-6">
              {contactItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3 md:gap-4 group">
                    <Icon className="text-brand-orange mt-1 shrink-0 group-hover:text-brand-teal transition-colors" size={20} />
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="text-zinc-300 text-sm md:text-base leading-snug max-w-xs hover:text-white transition-colors border-b border-transparent hover:border-brand-teal"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-500 font-mono">
          <p>&copy; {new Date().getFullYear()} The Advertising Villa. All rights reserved.</p>
          <p className="text-zinc-600">Clarity Over Jargon.</p>
        </div>
      </div>
    </footer>
  );
};
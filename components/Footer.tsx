import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="dark bg-black text-white pt-24 pb-12 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          
          {/* Brand */}
          <div>
            <div className="w-fit mb-4 select-none">
                 <Logo className="h-16 w-auto" textClassName="text-6xl" />
            </div>
            <div className="flex flex-col mb-6">
                <span className="text-[12px] font-bold tracking-[0.2em] text-zinc-300 font-accent">THE ADVERTISING VILLA</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-accent max-w-sm">
              A Digital Marketing Agency that removes confusion and drives action through clarity.
            </p>
          </div>

          {/* Contact */}
          <div className="md:justify-self-end">
            <h4 className="text-xl font-chunky font-bold mb-8 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <MapPin className="text-brand-orange mt-1 shrink-0 group-hover:text-brand-teal transition-colors" size={24} />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=529D/2/220+CC+Jageshwar+Vihar,+Kalyanpur+West,+Lucknow-226022" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-300 text-lg max-w-sm block hover:text-white transition-colors border-b border-transparent hover:border-brand-teal"
                >
                  529D/2/220 CC Jageshwar Vihar, Kalyanpur West, Lucknow-226022
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Phone className="text-brand-orange shrink-0 group-hover:text-brand-teal transition-colors" size={24} />
                <a 
                  href="tel:+918303275841" 
                  className="text-zinc-300 text-lg hover:text-white transition-colors border-b border-transparent hover:border-brand-teal"
                >
                  +91 83032 75841
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Mail className="text-brand-orange shrink-0 group-hover:text-brand-teal transition-colors" size={24} />
                <a 
                  href="mailto:theadvertisingvilla@gmail.com" 
                  className="text-zinc-300 text-lg hover:text-white transition-colors border-b border-transparent hover:border-brand-teal"
                >
                  theadvertisingvilla@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <Globe className="text-brand-orange shrink-0 group-hover:text-brand-teal transition-colors" size={24} />
                <a 
                  href="https://www.theadvertisingvilla.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-zinc-300 text-lg hover:text-white transition-colors border-b border-transparent hover:border-brand-teal"
                >
                  www.theadvertisingvilla.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-sm text-slate-400 font-mono">
          <p>&copy; {new Date().getFullYear()} The Advertising Villa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
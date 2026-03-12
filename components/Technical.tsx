import React from 'react';
import { TechCategory } from '../types';
import { Reveal } from './ui/Reveal';
import { Cpu, Layers, Smartphone, Database, Globe, Code2, BarChart3, Share2 } from 'lucide-react';

const techStack: TechCategory[] = [
  { title: "Web Designing", items: ["Responsive Design", "React", "Next.js", "Vue.js"] },
  { title: "UI Designing", items: ["Figma", "Adobe XD", "Dreamweaver"] },
  { title: "Web Development", items: ["Node.js", "PHP (Laravel)", "CodeIgniter", "Java", "Python"] },
  { title: "CMS Development", items: ["WordPress", "Drupal", "Magento"] },
  { title: "Software Dev", items: ["Python", "JavaScript", "Laravel", "Flutter"] },
  { title: "Mobile Apps", items: ["Android", "iOS", "Flutter"] },
  { title: "Data Tracking", items: ["Google Analytics", "Tag Manager", "SEMrush", "Ahrefs"] },
  { title: "PPC & Social", items: ["Google Ads", "Facebook Ads", "All Platforms"] },
];

const icons = [Globe, Layers, Code2, Database, Cpu, Smartphone, BarChart3, Share2];

export const Technical: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
       
       <div className="container mx-auto px-6 relative z-10">
        <Reveal width="100%" variant="down">
          <div className="flex flex-col items-center mb-20">
             <span className="font-mono text-brand-purple font-bold tracking-widest uppercase mb-4 block">Our Arsenal</span>
             <h2 className="text-5xl md:text-7xl font-chunky font-black text-center text-brand-black dark:text-white leading-tight">
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-purple">Powerhouse</span>
             </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((cat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <Reveal key={idx} delay={idx * 0.05} className="h-full" variant="zoom">
                <div className="group h-full bg-white dark:bg-black p-8 rounded-[2rem] border-2 border-slate-200 dark:border-zinc-800 hover:border-brand-black dark:hover:border-white transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] flex flex-col hover:-translate-y-2">
                  
                  <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-900 flex items-center justify-center text-brand-black dark:text-white group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                          <Icon size={24} strokeWidth={2.5} />
                      </div>
                      <div className="h-2 w-2 rounded-full bg-slate-200 dark:bg-zinc-800 group-hover:bg-green-500 transition-colors"></div>
                  </div>

                  <h3 className="text-2xl font-chunky font-bold text-brand-black dark:text-white mb-6 leading-tight">
                    {cat.title}
                  </h3>
                  
                  <div className="mt-auto flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wide border border-slate-200 dark:border-zinc-800 rounded-lg text-slate-500 dark:text-zinc-400 group-hover:border-brand-black dark:group-hover:border-white group-hover:text-brand-black dark:group-hover:text-white transition-all duration-300 bg-transparent hover:bg-slate-50 dark:hover:bg-zinc-900">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
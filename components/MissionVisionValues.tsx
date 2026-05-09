import React from 'react';
import { Reveal } from './ui/Reveal';

export const MissionVisionValues: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-black bg-grid-pattern transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-8">
          
          {/* Mission */}
          <Reveal className="h-full">
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-md hover:border-brand-teal transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-chunky font-black">M</span>
              </div>
              <h3 className="text-3xl font-chunky font-bold text-brand-black dark:text-white mb-2">OUR MISSION</h3>
              <p className="text-sm text-brand-teal font-mono uppercase mb-6 tracking-wide">What drives us and what you can expect every single time.</p>
              <ul className="space-y-4 text-slate-600 dark:text-zinc-400 text-sm">
                <li>• Custom-built experiences that fit your exact needs.</li>
                <li>• Infuse creativity and innovation into every project we touch.</li>
                <li>• Maintain uncompromising quality with an ethical, responsible approach.</li>
                <li>• Clear, transparent communication at every step.</li>
              </ul>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.2} className="h-full">
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-md hover:border-brand-purple transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-chunky font-black">V</span>
              </div>
              <h3 className="text-3xl font-chunky font-bold text-brand-black dark:text-white mb-2">OUR VISION</h3>
              <p className="text-sm text-brand-purple font-mono uppercase mb-6 tracking-wide">The next level of brand excellence</p>
              <ul className="space-y-4 text-slate-600 dark:text-zinc-400 text-sm">
                <li>• <strong className="text-brand-black dark:text-zinc-200">Innovate Ahead of the Industry</strong> - Fresh ideas. Modern solutions. A competitive edge you can feel.</li>
                <li>• <strong className="text-brand-black dark:text-zinc-200">Deliver With Speed &amp; Precision</strong> - On time. Every time. Because your deadlines deserve respect.</li>
                <li>• <strong className="text-brand-black dark:text-zinc-200">Put Clients at the Heart of Everything</strong> - Every strategy, every design, every deliverable built around your needs.</li>
              </ul>
            </div>
          </Reveal>

          {/* Values */}
          <Reveal delay={0.4} className="h-full">
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-md hover:border-brand-orange transition-all hover:shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-3xl font-chunky font-black">C</span>
              </div>
              <h3 className="text-3xl font-chunky font-bold text-brand-black dark:text-white mb-2">CORE VALUES</h3>
              <p className="text-sm text-brand-orange font-mono uppercase mb-6 tracking-wide">Beliefs you can feel</p>
              <div className="space-y-4 text-slate-600 dark:text-zinc-400">
                {[
                  { t: "Integrity", d: "We keep our word, own our decisions, and act with honesty - even when it's inconvenient. You'll always know what's happening, why it's happening, and how it helps your brand grow." },
                  { t: "Customer First", d: "Your goals aren't 'projects' to us - they're commitments. We design, build, and deliver like your business is our business." },
                  { t: "Innovation", d: "We don't copy trends or recycle old ideas. We combine creativity + strategy to bring you solutions that feel fresh, bold, and tailor-made." },
                  { t: "Sustainability", d: "Future-proof thinking. Ethical execution. Work that stays valuable long after it's delivered. Good for your brand. Good for your customers. Good for what comes next." }
                ].map((v, i) => (
                  <div key={i}>
                    <span className="font-bold text-brand-black dark:text-zinc-200">{v.t}:</span> <span className="text-sm">{v.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};